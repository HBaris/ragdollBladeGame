import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { clamp, lerp, rand, pick, damp, easeOutQuad, wrapAngle, loadNum, saveNum, segSeg, segOut, ptSeg, ptOut } from './util.js';
import { Sfx } from './audio.js';
import { J, MIN_CUT_LEN, sweepRagdoll, sweepBlade } from './ragdoll.js';
import { Character, BLADE_LEN, PLAYER_SPEED } from './character.js';
import { LooseSword, placeSword, BLADE_START, disposeSwordMesh } from './sword.js';
import { Effects } from './effects.js';
import { World } from './world.js';
import { Input } from './input.js';
import { Hud } from './hud.js';
import { Horse } from './horse.js';

const MAX_STEP = 1 / 120;
const PLAYER_COLOR = 0xffa51f;
const ENEMY_COLOR = 0xa51cff;
const BOSS_COLOR = 0x6a12c2;
const TITAN_COLOR = 0xb45cf0;
const ENV_NAMES = { meadow: 'Çayır', ice: 'Buz Sahanlığı', dojo: 'Gün Batımı Dojo', roof: 'Halatlı Platform', grid: 'Karanlık Izgara' };
// Düello ortamları: her tek seviye karanlık ızgara, arada diğerleri sırayla.
const DUEL_ENVS = ['meadow', 'ice', 'dojo'];
const LEVEL_CYCLE = ['duel', 'duel', 'roof', 'horse', 'duel', 'boss', 'roof', 'titan'];
const DEATH_QUIPS = [
  'Ragdoll fiziği 1 — Sen 0',
  'Parçalarını toplamak biraz sürecek.',
  'Kılıcın keskin, refleksin değil.',
  'Hiç değilse güzel uçtun.',
];

// Seviye tasarımı: düello, düello, platform, at, düello, boss, platform, titan döngüsü;
// zorluk yavaşça artar.
export function levelSpec(n) {
  const type = LEVEL_CYCLE[(n - 1) % LEVEL_CYCLE.length];
  const round = Math.floor((n - 1) / LEVEL_CYCLE.length);
  const skill = clamp((n - 1) / 24, 0, 1);
  // Halatlı platform küçük: sadece normal düşmanlar sığar.
  if (type === 'roof') return { type, env: 'roof', big: false, skill, boss: false, enemies: new Array(Math.min(4, 2 + round)).fill('normal') };
  if (type === 'horse') return { type, env: 'meadow', big: true, skill, boss: false, enemies: new Array(Math.min(6, 3 + round)).fill('big') };
  if (type === 'titan') return { type, env: 'meadow', big: true, skill, boss: false, enemies: ['titan'] };
  const env = n % 2 ? 'grid' : DUEL_ENVS[Math.floor(n / 2) % 3];
  const boss = type === 'boss';
  const enemies = [];
  if (boss) {
    enemies.push('boss');
    for (let i = 0; i < round; i++) enemies.push('normal');
  } else {
    const c = Math.min(4, 1 + Math.floor((n - 1) / 4));
    for (let i = 0; i < c; i++) enemies.push('normal');
  }
  return { type, env, big: false, skill, boss, enemies };
}

const _v = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _seg = { bx: 0, by: 0, bz: 0, tx: 0, ty: 0, tz: 0 };

export class Game {
  constructor() {
    const gl = document.getElementById('gl');
    const r = new THREE.WebGLRenderer({ canvas: gl, antialias: true, powerPreference: 'high-performance' });
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.0;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    this.renderer = r;
    this.scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(r);
    this.scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.85;
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 900);
    this.world = new World(this.scene);
    this.fx = new Effects(this.scene);
    const ui = document.getElementById('ui');
    this.input = new Input(ui);
    this.input.onKeyAction = (c) => {
      if (c === 'KeyR') this.restartLevel();
      if (c === 'KeyM') this.toggleSound();
    };
    this.hud = new Hud(this, ui);
    this.soundOn = true;
    this.highQuality = loadNum('rk3dQuality', 1) === 1;
    this.chars = [];
    this.enemies = [];
    this.loose = [];
    this.time = 0;
    this.timeScale = 1; this.slowT = 0; this.slowScale = 1;
    this.shakeAmt = 0;
    this.camYaw = 0;
    this.camTarget = null;
    this.lookAt = new THREE.Vector3();
    this.hintT = 8;
    this.lastH = MAX_STEP;
    this.lastAttackT = -9;
    this._bb = {};
    this.horse = null;
    this.titan = null;
    this.hookSide = 1;
    this.raycaster = new THREE.Raycaster();
    this.ropeMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1, 6).translate(0, 0.5, 0), new THREE.MeshStandardMaterial({ color: 0x2b2b30, roughness: 0.6 }));
    this.ropeMesh.visible = false;
    this.ropeMesh.frustumCulled = false;
    this.scene.add(this.ropeMesh);
    this.projectFn = (x, y, z) => this.project(x, y, z);
    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.applyQuality();
    this.startLevel(loadNum('rk3dLevel', 1));
  }

  // ---------- kurulum ----------

  resize() {
    const W = window.innerWidth, H = window.innerHeight;
    this.W = W; this.H = H;
    this.renderer.setSize(W, H, false);
    this.renderer.domElement.style.width = W + 'px';
    this.renderer.domElement.style.height = H + 'px';
    const aspect = W / H;
    this.camera.aspect = aspect;
    // Dikey ekranda da yatayda yeterli görüş olsun.
    this.camera.fov = clamp(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(27)) / aspect) * 180 / Math.PI, 50, 86);
    this.camera.updateProjectionMatrix();
    this.hud.resize();
  }

  applyQuality() {
    const q = this.highQuality;
    this.renderer.setPixelRatio(q ? Math.min(window.devicePixelRatio || 1, 2) : 1);
    this.renderer.shadowMap.enabled = q;
    this.world.sun.castShadow = q;
    this.scene.traverse((o) => { if (o.material && o.isMesh) o.material.needsUpdate = true; });
    this.resize();
  }

  toggleQuality() {
    this.highQuality = !this.highQuality;
    saveNum('rk3dQuality', this.highQuality ? 1 : 0);
    this.applyQuality();
  }

  toggleSound() {
    Sfx.init();
    Sfx.toggleMute();
    this.soundOn = !Sfx.muted;
  }

  clearLevel() {
    for (const c of this.chars) {
      c.rag.removed = true;
      c.dispose(this.scene);
      if (c.swordMesh) { this.scene.remove(c.swordMesh); disposeSwordMesh(c.swordMesh); }
    }
    for (const l of this.loose) { this.scene.remove(l.mesh); disposeSwordMesh(l.mesh); }
    if (this.horse) { this.horse.dispose(this.scene); this.horse = null; }
    this.titan = null;
    this.ropeMesh.visible = false;
    this.chars = [];
    this.enemies = [];
    this.loose = [];
    this.fx.clear();
  }

  addChar(o) {
    const c = new Character(this, o);
    c.view.addTo(this.scene);
    this.scene.add(c.swordMesh);
    this.chars.push(c);
    return c;
  }

  startLevel(n) {
    this.clearLevel();
    this.level = n;
    saveNum('rk3dLevel', n);
    const spec = levelSpec(n);
    this.spec = spec;
    this.world.set(spec.env, spec.big);
    this.fx.setDecalParent(this.world.env.plat || this.scene);
    this.tiltWarned = false;
    this.titanHinted = false;
    const pz = spec.type === 'titan' ? -30 : spec.type === 'horse' ? 0 : -6;
    this.player = this.addChar({ team: 'player', x: 0, z: pz, yaw: 0, hp: 1, color: PLAYER_COLOR, speed: PLAYER_SPEED });
    if (spec.type === 'horse') {
      this.horse = new Horse(this.scene, 0, 0, 0);
      this.player.mount = this.horse;
    }
    const m = spec.enemies.length;
    spec.enemies.forEach((type, i) => {
      const o = { team: 'enemy', hp: 1, skill: spec.skill, color: ENEMY_COLOR, yaw: Math.PI };
      if (type === 'titan') {
        // Titan: ~12 m boyunda, yavaş; kılıcı görünmez, "kılıç" onun kollarının savuruşu.
        Object.assign(o, { x: 0, z: 28, scale: 7, titan: true, hp: 1, speed: 2.6, skill: 0.4 + spec.skill * 0.6, color: TITAN_COLOR });
      } else if (type === 'big') {
        // At seviyesi: normalden iri ama ağır düşmanlar, geniş alana dağılmış.
        const a = (i / m) * Math.PI * 2 + rand(-0.3, 0.3), r = rand(16, 28);
        Object.assign(o, { x: Math.sin(a) * r, z: Math.cos(a) * r, scale: 1.6, speed: 2.4, skill: spec.skill * 0.5, heavy: true });
      } else {
        const boss = type === 'boss';
        Object.assign(o, {
          x: (i - (m - 1) / 2) * 2.6, z: 6.5 + (i % 2) * 1.2,
          hp: boss ? 3 : 1, armored: boss, scale: boss ? 1.38 : 1,
          // Boss iri ve dayanıklı ama ağırkanlı: yavaş hazırlanır, seyrek saldırır.
          skill: boss ? spec.skill * 0.5 : spec.skill, boss,
          color: boss ? BOSS_COLOR : ENEMY_COLOR, speed: boss ? 3.2 : lerp(3.4, 5.4, spec.skill),
        });
      }
      const e = this.addChar(o);
      if (e.titan) { this.titan = e; e.swordMesh.visible = false; e.neckHp = 3; e.steamT = rand(5, 7); }
      this.enemies.push(e);
    });
    this.phase = 'play';
    this.endT = 0;
    this.time = 0;
    this.slowT = 0;
    this.timeScale = 1;
    this.lastAttackT = -9;
    this.camYaw = 0;
    this.camTarget = null;
    this.updateCamera(0, true);
    this.hud.setLevel(n);
    const sub = spec.type === 'titan' ? 'TİTAN!' : spec.type === 'horse' ? 'At Sırtında' : spec.boss ? 'BOSS!' : ENV_NAMES[spec.env];
    this.hud.show(`SEVİYE ${n}`, sub, 1.8, spec.boss || spec.type === 'titan' ? 'boss' : '');
    if ((spec.type !== 'duel' && spec.type !== 'boss') || spec.env === 'grid') this.hintT = Math.max(this.hintT, 6);
    this.input.clear();
  }

  restartLevel() { this.startLevel(this.level); }

  // Ayarlardan: bulunduğun seviyeden sonraki ilk at / titan / platform seviyesine ya da
  // ızgara ortamına atla.
  jumpTo(type) {
    let n = this.level;
    while (levelSpec(n).type !== type && levelSpec(n).env !== type) n++;
    this.startLevel(n);
  }

  // ---------- zaman ----------

  frame(dt) {
    const taps = this.input.taps;
    if (this.spec.type === 'titan' && this.phase === 'play' && this.player.alive) for (const t of taps) this.fireHook(t);
    taps.length = 0;
    if (this.slowT > 0) {
      this.slowT -= dt;
      this.timeScale = lerp(this.timeScale, this.slowScale, damp(40, dt));
    } else this.timeScale = lerp(this.timeScale, 1, damp(6, dt));
    const sim = dt * this.timeScale;
    if (sim > 1e-5) {
      const n = Math.ceil(sim / MAX_STEP - 1e-6);
      const h = sim / n;
      for (let i = 0; i < n; i++) this.step(h);
    }
    if (this.phase === 'win') {
      this.endT += dt;
      if (this.endT > 2.7) this.startLevel(this.level + 1);
    } else if (this.phase === 'lose') {
      this.endT += dt;
      if ((this.endT > 1.2 && this.input.anyPress) || this.endT > 5) this.restartLevel();
    }
    if (this.hintT > 0 && this.level > 1) this.hintT = Math.min(this.hintT, 3);
    this.hintT -= dt;
    this.shakeAmt *= Math.exp(-8 * dt);
    this.hud.update(dt);
    this.updateCamera(dt, false);
    this.render(dt);
    this.input.endFrame(dt);
  }

  step(h) {
    this.h = h;
    this.time += h;
    this.world.step(h, this.player);
    if (this.titan && this.titan.alive) this.titanSteam(this.titan, h);
    if (this.horse) this.horse.update(h, this.player.alive ? this.player.stickW : null, this.world);
    for (const c of this.chars) { c.copyBlade(); c.update(h); }
    this.separate();
    this.trample();
    const env = this.world, hp = this.lastH;
    for (const c of this.chars) {
      const rag = c.rag;
      rag.step(h, hp, env);
      if (!c.alive && rag.impact > 6) Sfx.thud(rag.impact * 250);
      rag.impact = 0;
      const P = rag.pts[J.PELVIS];
      if (!rag.splashed && P.y < env.waterY) {
        rag.splashed = true;
        this.fx.splash(P.x, env.waterY, P.z);
        Sfx.splash();
      }
    }
    for (const l of this.loose) l.step(h, hp, env);
    this.combat(h);
    this.fx.update(h, env);
    this.lastH = h;
  }

  slowmo(dur, scale) {
    this.slowScale = this.slowT > 0 ? Math.min(this.slowScale, scale) : scale;
    this.slowT = Math.max(this.slowT, dur);
  }

  shake(a) { this.shakeAmt = Math.min(0.35, this.shakeAmt + a); }

  // ---------- yardımcılar ----------

  nearestEnemy(from, maxD) {
    let best = null, bd = maxD;
    let panic = null, pd = maxD;
    for (const e of this.enemies) {
      if (!e.alive) continue;
      const d = Math.hypot(e.x - from.x, e.z - from.z);
      if (e.state === 'panic') { if (d < pd) { pd = d; panic = e; } continue; }
      if (d < bd) { bd = d; best = e; }
    }
    return best || panic;
  }

  // Aynı anda saldıran düşman sayısını ve saldırılar arası süreyi sınırlar.
  takeAttackToken() {
    const sk = this.spec.skill;
    const max = 1 + Math.floor(sk * 2);
    let n = 0;
    for (const e of this.enemies) if (e.alive && e.state === 'attack') n++;
    if (n >= max || this.time - this.lastAttackT < lerp(0.9, 0.15, sk)) return false;
    this.lastAttackT = this.time;
    return true;
  }

  separate() {
    const cs = this.chars;
    const hs = this.horse;
    const ropes = this.world.ropes;
    for (let i = 0; i < cs.length; i++) {
      const a = cs[i];
      if (!a.alive || a.falling || (a.isPlayer && a.y - a.gy > 0.5 && !a.mount)) continue;
      if (ropes) {
        // Sağlam halatlar direk gibi: içinden geçilmez.
        for (const r of ropes) {
          if (!r.intact) continue;
          const dx = a.x - r.x, dz = a.z - r.z, d = Math.hypot(dx, dz), min = 0.28 * a.S + r.r;
          if (d < min && d > 1e-4) { a.x = r.x + dx / d * min; a.z = r.z + dz / d * min; }
        }
      }
      if (hs && !a.isPlayer) {
        // Atın gövdesi de engel: düşmanlar içinden geçmesin.
        const dx = a.x - hs.x, dz = a.z - hs.z, d = Math.hypot(dx, dz) || 1, min = 1.0 + 0.3 * a.S;
        if (d < min) { a.x = hs.x + dx / d * min; a.z = hs.z + dz / d * min; }
      }
      for (let j = i + 1; j < cs.length; j++) {
        const b = cs[j];
        if (!b.alive || b.falling || (b.isPlayer && b.y - b.gy > 0.5 && !b.mount)) continue;
        const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz);
        const min = 0.34 * (a.S + b.S);
        if (d < min && d > 1e-4) {
          const push = (min - d) * 0.5, nx = dx / d, nz = dz / d;
          if (this.world.inside(a.x - nx * push, a.z - nz * push, 0.3)) { a.x -= nx * push; a.z -= nz * push; }
          if (this.world.inside(b.x + nx * push, b.z + nz * push, 0.3)) { b.x += nx * push; b.z += nz * push; }
        }
      }
    }
  }

  // Dörtnala giden at önündekini savurur (öldürmez).
  trample() {
    const hs = this.horse;
    if (!hs || hs.speed < 4) return;
    const fx = Math.sin(hs.yaw), fz = Math.cos(hs.yaw);
    const px = hs.x + fx * 1.1, pz = hs.z + fz * 1.1;
    for (const e of this.enemies) {
      if (!e.alive || e.kb > 0 || this.time < (e.trampleT || 0)) continue;
      if (Math.hypot(e.x - px, e.z - pz) > 0.9 + 0.25 * e.S) continue;
      e.trampleT = this.time + 1.5; // aynı düşman üst üste ezilmesin
      this.knock(e, fx + (e.x - hs.x) * 0.2, fz + (e.z - hs.z) * 0.2, hs.speed * 0.9);
      e.stun = 0.9; e.state = 'stagger'; e.rag.muscle = 0.15; e.flash = 0.1;
      this.cancelSwing(e);
      hs.speed *= 0.55;
      this.fx.popup(e.x, 2.6 * e.S, e.z, 'EZİLDİ!', '#fff', 20, 0.8);
      Sfx.punch();
      this.shake(0.1);
    }
  }

  // ---------- halat (titan seviyesi) ----------

  // Titana dokunulduysa onun o noktasına, yoksa ekran dışında önde-yukarıda bir noktaya halat.
  fireHook(tap) {
    const pl = this.player, t = this.titan;
    let rope = null;
    const hit = tap && t && t.alive ? this.pickTitan(tap.x, tap.y) : null;
    if (hit) {
      const rag = t.rag, bone = hit.bone, pt = { x: hit.x, y: hit.y, z: hit.z };
      rope = {
        pt, pull: 48, release: 1.6, maxT: 2.2, t: 0, titan: true,
        anchor() {
          if (bone === 'head') { const h = rag.pts[J.HEAD]; pt.x = h.x; pt.y = h.y; pt.z = h.z; } else if (rag.bones.includes(bone)) {
            const A = rag.pts[bone.a], B = rag.pts[bone.b];
            pt.x = lerp(A.x, B.x, hit.u); pt.y = lerp(A.y, B.y, hit.u); pt.z = lerp(A.z, B.z, hit.u);
          }
          return pt;
        },
      };
    } else {
      let fx = Math.sin(this.camYaw), fz = Math.cos(this.camYaw), d = 30;
      if (t && t.alive) { fx = t.x - pl.x; fz = t.z - pl.z; d = Math.hypot(fx, fz) || 1; fx /= d; fz /= d; }
      this.hookSide = -this.hookSide;
      // Ekran dışına, önde ve yukarıda bir nokta: titanın boyu kadar yükseklikte salınırsın.
      const fwd = clamp(d - 8, 5, 18), side = 6 * this.hookSide;
      const pt = { x: pl.x + fx * fwd + fz * side, y: clamp(pl.y + 7, 10, 16), z: pl.z + fz * fwd - fx * side };
      rope = { pt, pull: 24, release: 4, maxT: 1.2, t: 0, anchor: () => pt };
    }
    pl.rope = rope;
    if (pl.y < 0.05) { pl.vy = Math.max(pl.vy, 4.5); pl.y = 0.03; }
    Sfx.swoosh(2);
  }

  pickTitan(sx, sy) {
    const t = this.titan, rag = t.rag;
    this.raycaster.setFromCamera({ x: sx / this.W * 2 - 1, y: -(sy / this.H) * 2 + 1 }, this.camera);
    const o = this.raycaster.ray.origin, d = this.raycaster.ray.direction;
    const fx = o.x + d.x * 400, fy = o.y + d.y * 400, fz = o.z + d.z * 400;
    let best = null, bs = Infinity;
    for (const b of rag.bones) {
      if (!b.vis) continue;
      const A = rag.pts[b.a], B = rag.pts[b.b];
      segSeg(o.x, o.y, o.z, fx, fy, fz, A.x, A.y, A.z, B.x, B.y, B.z);
      const r = b.r * 1.3 + 0.6;
      if (segOut.d2 < r * r && segOut.s < bs) {
        bs = segOut.s;
        best = { bone: b, u: segOut.t, x: lerp(A.x, B.x, segOut.t), y: lerp(A.y, B.y, segOut.t), z: lerp(A.z, B.z, segOut.t) };
      }
    }
    const h = rag.pts[J.HEAD];
    ptSeg(h.x, h.y, h.z, o.x, o.y, o.z, fx, fy, fz);
    const hr = rag.d.headR * 1.3 + 0.6;
    if (ptOut.d2 < hr * hr && ptOut.t < bs) best = { bone: 'head', u: 0, x: h.x, y: h.y, z: h.z };
    return best;
  }

  // Titan ara ara ensesinden buhar püskürtür: yakınındakini halatıyla birlikte savurur.
  // Önce buhar tüter (uyarı), sonra patlar. Enseye darbe yiyince hemen üfler.
  titanSteam(t, h) {
    const N = t.rag.pts[J.NECK], pl = this.player;
    t.steamT -= h;
    const warn = t.steamT < 0.9 && t.steamT > 0;
    if (warn && Math.random() < h * 40) this.fx.dust(N.x + rand(-1, 1), N.y + 0.5, N.z + rand(-1, 1), rand(-2, 2), rand(-2, 2));
    if (t.steamT > 0) return;
    t.steamT = rand(6, 9) * lerp(1, 0.7, t.skill);
    for (let i = 0; i < 40; i++) this.fx.dust(N.x + rand(-1.5, 1.5), N.y + rand(-1, 1.5), N.z + rand(-1.5, 1.5), rand(-9, 9), rand(-9, 9));
    Sfx.splash();
    if (!pl.alive) return;
    const dx = pl.x - N.x, dy = pl.y + 1 - N.y, dz = pl.z - N.z, d = Math.hypot(dx, dy, dz) || 1;
    if (d > 11) return;
    const k = 16 * (1 - d / 14);
    pl.vx += dx / d * k; pl.vz += dz / d * k; pl.vy = Math.max(pl.vy, 5);
    pl.y = Math.max(pl.y, pl.gy + 0.05);
    pl.rope = null;
    pl.kb = 0.5;
    this.fx.popup(pl.x, pl.y + 2, pl.z, 'BUHAR!', '#ffffff', 26, 1.1);
    this.shake(0.2);
  }

  knock(c, dx, dz, speed) {
    const l = Math.hypot(dx, dz) || 1;
    c.vx += dx / l * speed;
    c.vz += dz / l * speed;
    c.kb = 0.3;
  }

  // Oyuncu savurmaya başlayınca yakındaki düşman geri sıçrayabilir.
  onSwingStart(c) {
    if (!c.isPlayer) return;
    for (const e of this.enemies) {
      if (!e.alive || e.state !== 'fight' || e.stun > 0) continue;
      const d = Math.hypot(e.x - c.x, e.z - c.z);
      if (d < 2 && Math.random() < lerp(0.04, 0.3, e.skill)) this.knock(e, e.x - c.x, e.z - c.z, 4.2);
    }
  }

  cancelSwing(c) {
    if (c.aimCtl) {
      // Kılıç çarptığı yerden geri seker; düşmanın saldırı planı da biter.
      c.swW = -c.swW * 0.5;
      c.aimYaw = c.swYaw;
      c.episode = null;
      if (!c.isPlayer) {
        c.aimA = c.swYaw;
        c.plan = null;
        if (c.state === 'attack') { c.state = 'fight'; c.cool = rand(0.4, 0.9); }
      }
      return;
    }
    const s = c.swing;
    if (!s) return;
    const mode = c.swingMode();
    if (mode === 1) c.swing = null;
    else if (mode === 2) {
      // Bıçak durduğu yerden bekleme duruşuna dönsün.
      s.a1 = lerp(s.a0, s.a1, easeOutQuad((s.t - s.wind) / s.dur));
      s.t = s.wind + s.dur;
    }
  }

  dropSword(c) {
    if (!c.hasSword || !c.swordMesh) return;
    c.hasSword = false;
    const s = c.sw, h = this.h || MAX_STEP;
    const vel = { x: (c.bCur.bx - c.bPrev.bx) / h, y: (c.bCur.by - c.bPrev.by) / h, z: (c.bCur.bz - c.bPrev.bz) / h };
    const L = (BLADE_START + BLADE_LEN) * c.S;
    this.loose.push(new LooseSword(c.swordMesh, { x: s.gx, y: s.gy, z: s.gz }, { x: s.dx, y: s.dy, z: s.dz }, { x: s.wx, y: s.wy, z: s.wz }, vel, L));
    c.swordMesh = null;
  }

  // ---------- dövüş ----------

  combat(h) {
    for (const a of this.chars) {
      if (!a.alive || !a.swingActive) continue;
      const pb = a.bPrev, cb = a.bCur;
      const x0 = Math.min(pb.bx, pb.tx, cb.bx, cb.tx) - 0.2, x1 = Math.max(pb.bx, pb.tx, cb.bx, cb.tx) + 0.2;
      const y0 = Math.min(pb.by, pb.ty, cb.by, cb.ty) - 0.2, y1 = Math.max(pb.by, pb.ty, cb.by, cb.ty) + 0.2;
      const z0 = Math.min(pb.bz, pb.tz, cb.bz, cb.tz) - 0.2, z1 = Math.max(pb.bz, pb.tz, cb.bz, cb.tz) + 0.2;
      if (this.world.ropes) this.cutRopes(a, pb, cb, x0, x1, z0, z1);
      // Oyuncu herkesi (cesetleri de) keser; düşmanlar oyuncuyu ve yollarındaki arkadaşlarını.
      const targets = a.isPlayer ? this.enemies : a.titan ? [this.player] : this.chars;
      for (const o of targets) {
        const ep = a.curEp;
        if (!ep) break;
        if (o === a || ep.hits.has(o)) continue;
        if (!a.isPlayer && !o.alive) continue;
        const bb = o.rag.bounds(this._bb);
        if (bb.x1 < x0 || bb.x0 > x1 || bb.y1 < y0 || bb.y0 > y1 || bb.z1 < z0 || bb.z0 > z1) continue;

        if (o.alive && o.hasSword && !o.titan && !a.titan && !ep.rolled.has(o)) {
          // Kılıç kılıca: ikisi de savuruyorsa KLANG, değilse savunan şansla bloklar.
          const pt = sweepBlade(pb, cb, o.bCur, 3, 0.05);
          if (pt) {
            if (o.swingActive) { this.parry(a, o, pt); break; }
            ep.rolled.add(o);
            if (Math.random() < (o.isPlayer ? 0.4 : lerp(0.15, 0.45, o.skill))) { this.block(a, o, pt); break; }
          }
        }
        const hit = sweepRagdoll(o.rag, pb, cb, 4);
        if (!hit) continue;
        // Düşman, oyuncunun vuruşunu kılıcıyla karşılayabilir (seviye arttıkça daha sık).
        // Arkadaşından gelen darbeyi beklemez.
        if (a.isPlayer && !o.titan && o.alive && o.hasSword && o.stun <= 0 && o.state !== 'attack' && o.state !== 'panic' && !ep.rolled.has(o)) {
          ep.rolled.add(o);
          if (Math.random() < lerp(0.08, 0.45, o.skill)) {
            o.blockT = 0.35;
            o.blockUx = ep.ux; o.blockUy = ep.uy;
            o.counterT = 0.3;
            this.block(a, o, hit);
            break;
          }
        }
        ep.hits.add(o);
        let vx = lerp(cb.bx - pb.bx, cb.tx - pb.tx, hit.t) / h;
        let vy = lerp(cb.by - pb.by, cb.ty - pb.ty, hit.t) / h;
        let vz = lerp(cb.bz - pb.bz, cb.tz - pb.tz, hit.t) / h;
        const sp = Math.hypot(vx, vy, vz) || 1, m = clamp(sp, 4, 13);
        vx = vx / sp * m; vy = vy / sp * m; vz = vz / sp * m;
        this.onHit(a, o, hit, vx, vy, vz);
      }
    }
    this.poke();
  }

  // Platform halatları: savrulan bıçak değdiği halatı keser, kimin olduğuna bakmaz.
  cutRopes(a, pb, cb, x0, x1, z0, z1) {
    const w = this.world, h = this.h;
    for (const r of w.ropes) {
      if (!r.intact || r.x < x0 - r.r || r.x > x1 + r.r || r.z < z0 - r.r || r.z > z1 + r.r) continue;
      const gy = w.ground(r.x, r.z);
      _seg.bx = r.x; _seg.by = gy; _seg.bz = r.z; _seg.tx = r.x; _seg.ty = gy + 3.2; _seg.tz = r.z;
      const pt = sweepBlade(pb, cb, _seg, 3, r.r + 0.03);
      if (!pt) continue;
      w.cutRope(r, pt.y - gy, (cb.tx - pb.tx) / h, (cb.tz - pb.tz) / h);
      this.fx.sparks(pt.x, pt.y, pt.z, 16);
      this.fx.popup(pt.x, pt.y + 0.6, pt.z, 'HALAT KOPTU!', '#ff7a5c', 22, 1.2);
      Sfx.twang();
      this.shake(0.14);
      this.slowmo(0.15, 0.35);
      if (!this.tiltWarned && w.tilt > 0.17) {
        this.tiltWarned = true;
        this.fx.popup(this.player.x, 2.6, this.player.z, 'PLATFORM YATIYOR!', '#ffd23f', 26, 1.6);
      }
    }
  }

  // Yavaş dönen / ileri uzatılmış kılıç kesmez, değdiğini iter (bıçak gövdeye gömülmesin).
  // Herkes için geçerli: düşmanın uzattığı kılıç da seni ya da arkadaşını iter.
  poke() {
    for (const a of this.chars) {
      if (!a.alive || !a.aimCtl || !a.hasSword || a.swingActive || a.pokeCd > 0 || (a.y - a.gy > 0.3 && !a.mount)) continue;
      const list = a.isPlayer ? this.enemies : this.chars;
      for (const o of list) {
        if (o === a || !o.alive || o.kb > 0 || o.titan) continue;
        const bb = o.rag.bounds(this._bb), c = a.bCur;
        if (bb.x1 < Math.min(c.bx, c.tx) || bb.x0 > Math.max(c.bx, c.tx) || bb.z1 < Math.min(c.bz, c.tz) || bb.z0 > Math.max(c.bz, c.tz)) continue;
        const hit = sweepRagdoll(o.rag, a.bPrev, a.bCur, 2);
        if (!hit) continue;
        if (a.isPlayer && o.state === 'panic') {
          // Silahsız kaçan düşman dürtmeyle de şişlenir; yoksa itip durursun, yakalayamazsın.
          this.fx.popup(o.x, 2.3 * o.S, o.z, 'ŞİŞLENDİ!', '#ffd23f', 22, 1.1);
          this.onHit(a, o, hit, a.sw.dx * 7, a.sw.dy * 7, a.sw.dz * 7);
          if (o.alive) this.killEnemy(o, a, null, a.sw.dx * 7, 1, a.sw.dz * 7);
          a.pokeCd = 0.2;
          break;
        }
        this.knock(o, a.sw.dx, a.sw.dz, a.isPlayer ? 2.4 : o.isPlayer ? 1.8 : 1.4);
        this.knock(a, -a.sw.dx, -a.sw.dz, 1.0);
        a.pokeCd = 0.35;
        Sfx.punch();
        break;
      }
    }
  }

  parry(a, o, pt) {
    this.cancelSwing(a);
    this.cancelSwing(o);
    for (const c of [a, o]) {
      c.stun = 0.35;
      if (!c.isPlayer) c.state = 'stagger';
    }
    this.knock(a, a.x - o.x, a.z - o.z, 2.6);
    this.knock(o, o.x - a.x, o.z - a.z, 2.6);
    this.fx.sparks(pt.x, pt.y, pt.z, 26);
    this.fx.popup(pt.x, pt.y + 0.3, pt.z, 'KLANG!', '#ffe38a', 20, 0.7);
    Sfx.clang();
    this.slowmo(0.1, 0.3);
    this.shake(0.08);
  }

  block(a, o, pt) {
    this.cancelSwing(a);
    a.stun = a.isPlayer ? 0.6 : 0.45;
    if (!a.isPlayer) a.state = 'stagger';
    this.knock(a, a.x - o.x, a.z - o.z, 2.2);
    this.fx.sparks(pt.x, pt.y, pt.z, 18);
    this.fx.popup(pt.x, pt.y + 0.3, pt.z, 'BLOK!', '#9be7ff', 18, 0.7);
    Sfx.clang();
    this.shake(0.05);
  }

  // Kesik uygular; kemik çok kısaysa null döner (sadece darbe).
  applyCut(rag, hit) {
    let bi = hit.bone, u = hit.u;
    if (hit.head) {
      bi = rag.boneWith(J.HEAD);
      if (bi >= 0) u = rag.bones[bi].b === J.HEAD ? 0.7 : 0.3;
    }
    if (bi < 0 || rag.bones[bi].len < MIN_CUT_LEN * rag.S) return null;
    return rag.cut(bi, u);
  }

  gore(rag, res, hit, vx, vy, vz) {
    const h = this.h;
    if (res) {
      // Kopan küçük parça daha sert fırlar.
      const c1 = rag.comp[res.i1], c2 = rag.comp[res.i2];
      const small = rag.compSize(c1) < rag.compSize(c2) ? c1 : c2;
      rag.addVel(vx * 0.35, vy * 0.35 + 2, vz * 0.35, h, small);
      this.fx.spray(res.x, res.y, res.z, vx, vy, vz, 34, 0.5, 5);
      this.fx.spray(res.x, res.y, res.z, 0, 1, 0, 14, 0.9, 3);
      this.fx.bleed(rag, res.i1, rand(1.2, 2.2));
      this.fx.bleed(rag, res.i2, rand(1.2, 2.2));
      this.fx.sparks(res.x, res.y, res.z, 5);
      Sfx.slice();
    } else {
      this.fx.spray(hit.x, hit.y, hit.z, vx, vy, vz, 16, 0.7, 3);
      Sfx.wound();
    }
  }

  onHit(a, o, hit, vx, vy, vz) {
    const rag = o.rag, wasAlive = o.alive;
    // Arkadaşını kesen düşman: kurban bazen kin tutup ona döner.
    const friendly = !a.isPlayer && !o.isPlayer;
    if (friendly && wasAlive && Math.random() < 0.55) { o.grudge = a; o.grudgeT = 4; }

    if (o.isPlayer && wasAlive) {
      this.hitPlayer(a, o, hit, vx, vy, vz);
      return;
    }

    const kind = hit.head ? 'neck' : rag.bones[hit.bone].kind;
    // Kopmuş parçaya vurmak gövdeye vurmak sayılmaz.
    const onBody = hit.head || rag.pts[rag.bones[hit.bone].a].attached;
    // Boss son canına kadar hiç kopmaz, sadece yaralanır. Titanın gövdesi kesilemeyecek kadar
    // kalın; ensesi ancak üçüncü darbede kopar.
    const neckSafe = o.titan && (o.neckHp > 1 || this.time < (o.neckCd || 0));
    const armored = wasAlive && ((o.armored && o.hp > 1) || (o.titan && (kind === 'torso' || (kind === 'neck' && neckSafe))));
    const P = rag.pts, ends = [J.LHAND, J.RHAND, J.LFOOT, J.RFOOT].map((i) => P[i].attached);
    const res = armored ? null : this.applyCut(rag, hit);
    // Bu darbeyle yeni kopan el/ayak var mı (güdüğü tekrar kesmek sayılmaz)?
    const lost = [J.LHAND, J.RHAND, J.LFOOT, J.RFOOT].some((i, k) => ends[k] && !P[i].attached);
    rag.addVel(vx * 0.2, vy * 0.2 + 0.6, vz * 0.2, this.h);
    this.gore(rag, res, hit, vx, vy, vz);
    if (a.swordMesh) {
      const bm = a.swordMesh.userData.bladeMat;
      a.blood = Math.min(1, (a.blood || 0) + 0.12);
      bm.color.setRGB(lerp(0.89, 0.75, a.blood), lerp(0.91, 0.12, a.blood), lerp(0.93, 0.15, a.blood));
    }
    if (!wasAlive) return;
    if (o.titan) { if (onBody) this.hitTitan(o, a, (res && res.kind === 'neck') || lost ? res : null, kind, vx, vy, vz); return; }

    // Sıradan düşman tek vuruşta ölür (kol dahil); boss canı bitene kadar dayanır.
    if (!res) o.hp--; else o.hp = 0;
    if (o.hp > 0) {
      o.flash = 0.12; o.stun = 0.5; o.state = 'stagger';
      o.rag.muscle = 0.3;
      this.knock(o, vx, vz, 3);
      this.fx.popup(o.x, 2.3 * o.S, o.z, friendly ? 'HEY!' : `${o.hp} CAN KALDI`, '#fff', 16, 0.9);
      this.slowmo(0.08, 0.35);
      this.shake(0.06);
      return;
    }
    this.killEnemy(o, a, res, vx, vy, vz);
  }

  // Titan: kolu, bacağı gitse de savaşır (bacaksızsa sürünür), gövdesi kesilmeyecek kadar
  // kalın. Sadece ense (boyun ya da kafa) kesilince düşer.
  hitTitan(o, a, res, kind, vx, vy, vz) {
    if (res && res.kind === 'neck') { this.killEnemy(o, a, res, vx, vy, vz); return; }
    o.flash = 0.15;
    const y = o.rag.pts[J.NECK].y + 1;
    if (kind === 'neck') {
      // Enseye isabet ama kopmadı: titan sendeler, öfkelenir (hemen buhar üfler).
      // Aynı dalışta ikinci kez sayılmaz.
      if (this.time < (o.neckCd || 0)) return;
      o.neckCd = this.time + 0.8;
      o.neckHp--;
      o.stun = 0.6; o.state = 'stagger'; this.cancelSwing(o);
      o.steamT = Math.min(o.steamT, 0.9);
      this.fx.spray(a.x, a.y + 1, a.z, vx, vy, vz, 30, 0.6, 6);
      this.fx.popup(o.x, y, o.z, `ENSE! ${o.neckHp} darbe kaldı`, '#ffd23f', 26, 1.3);
      this.slowmo(0.2, 0.3);
      this.shake(0.2);
      Sfx.slice();
      return;
    }
    if (res) {
      if (res.kind === 'arm') o.checkGrip();
      o.stun = 0.35; o.state = 'stagger'; this.cancelSwing(o);
      this.fx.popup(o.x, y, o.z, res.kind === 'leg' ? 'BACAĞI GİTTİ!' : 'KOLU GİTTİ!', '#ffd23f', 26, 1.2);
      if (!this.titanHinted) { this.titanHinted = true; this.fx.popup(o.x, y - 1.6, o.z, 'Ölmedi! ENSESİNİ kes', '#fff', 20, 1.8); }
      this.slowmo(0.15, 0.35);
      this.shake(0.15);
    } else {
      this.fx.popup(a.x, a.y + 2.2, a.z, kind === 'torso' ? 'ÇOK KALIN!' : 'SIYRIK', '#fff', 18, 0.8);
      Sfx.thud(900);
    }
  }

  // Oyuncunun tek canı var ama rakipler kadar kolay ölmez: gövde darbesi kesmez, savurur;
  // bacak gidince tek ayakla seker, ikisi gidince güdüklerle sürünür; bir kol gidince
  // diğeriyle tutar. Kafa ya da iki kol giderse ölüm.
  hitPlayer(a, o, hit, vx, vy, vz) {
    if (o.invuln > 0) return;
    const rag = o.rag;
    const kind = hit.head ? 'neck' : rag.bones[hit.bone].kind;
    this.hud.flash = 0.6;
    this.shake(0.15);
    this.cancelSwing(o);
    let res = kind === 'torso' ? null : this.applyCut(rag, hit);
    if (!res && a.titan) {
      // Titanın darbesi gövdeye gelse de bir uzvunu koparır.
      const limbs = [];
      rag.bones.forEach((b, i) => { if ((b.kind === 'arm' || b.kind === 'leg') && rag.pts[b.a].attached && rag.pts[b.b].attached && b.len > MIN_CUT_LEN) limbs.push(i); });
      if (limbs.length) res = rag.cut(pick(limbs), 0.5);
    }
    rag.addVel(vx * 0.25, vy * 0.2 + 1.2, vz * 0.25, this.h);
    this.gore(rag, res, hit, vx, vy, vz);
    const P = rag.pts;
    if (res && (res.kind === 'neck' || (!P[J.LHAND].attached && !P[J.RHAND].attached))) {
      o.die();
      rag.addVel(vx * 0.5, 3, vz * 0.5, this.h);
      this.lose(res.kind === 'neck' ? 'Kafan gitti.' : 'İki kolun da gitti.');
      return;
    }
    o.hurtT = 0.3; o.invuln = res ? 0.9 : 0.6; o.flash = 0.12;
    this.knock(o, o.x - a.x, o.z - a.z, a.titan ? 10 : res ? 4 : 5);
    if (a.titan && !o.mount) { o.vy = 7; o.y = Math.max(o.y, 0.05); o.rope = null; }
    Sfx.hurt();
    if (!res) { this.slowmo(0.12, 0.4); return; }
    o.checkGrip();
    const y = 2.1 * o.S;
    if (res.kind === 'arm') this.fx.popup(o.x, y, o.z, 'KOLUN GİTTİ!', '#ff5a6e', 22, 1.3);
    else if (res.kind === 'leg') this.fx.popup(o.x, y, o.z, o.legMask ? 'TEK AYAK!' : 'BACAKSIZ DEVAM!', '#ff5a6e', 22, 1.3);
    this.slowmo(0.25, 0.3);
  }

  killEnemy(o, a, res, vx, vy, vz) {
    o.die();
    const h = this.h;
    o.rag.addVel(vx * 0.45, vy * 0.3 + 2.5, vz * 0.45, h);
    o.rag.addSpin(rand(-5, 5), rand(-3, 3), rand(-5, 5), h);
    const y = 2.2 * o.S;
    if (o.titan) { this.fx.popup(o.x, 8, o.z, 'ENSESİ KESİLDİ! TİTAN DÜŞTÜ!', '#ffd23f', 30, 1.8); this.shake(0.3); }
    if (res) {
      if (res.kind === 'neck') this.fx.popup(o.x, y, o.z, 'KAFA GİTTİ!', '#ffd23f', 26, 1.2);
      else if (res.kind === 'torso') this.fx.popup(o.x, y, o.z, 'İKİYE BÖLÜNDÜ!', '#ffd23f', 26, 1.2);
      else if (res.kind === 'leg') this.fx.popup(o.x, y, o.z, 'BACAKSIZ!', '#ffd23f', 24, 1.2);
      else if (res.kind === 'arm') this.fx.popup(o.x, y, o.z, 'KOL GİTTİ!', '#ffd23f', 24, 1.2);
    }
    const ep = a ? a.curEp : null;
    if (ep) {
      ep.kills++;
      if (ep.kills >= 2 && a.isPlayer) this.fx.popup(a.x, 2.6, a.z, ep.kills === 2 ? 'ÇİFTE!' : 'KATLİAM!', '#ff5a36', 30, 1.3);
    }
    if (a && !a.isPlayer && !o.titan) this.fx.popup(o.x, y + 0.5, o.z, 'DOST ATEŞİ!', '#ff8ad8', 24, 1.3);
    Sfx.combo(3);
    this.shake(0.12);
    this.checkWin();
    if (this.phase !== 'win') this.slowmo(0.16, 0.28);
  }

  checkWin() {
    if (this.phase !== 'play') return;
    if (this.enemies.some((e) => e.alive)) return;
    this.phase = 'win';
    this.endT = 0;
    this.slowmo(1.1, 0.2);
    this.hud.show('TEMİZLENDİ!', `Lv ${this.level} geçildi`, 2.6, 'win');
    Sfx.win();
  }

  lose(reason) {
    if (this.phase !== 'play') return;
    this.phase = 'lose';
    this.endT = 0;
    this.slowmo(1.2, 0.25);
    Sfx.die();
    this.hud.show('ÖLDÜN', `${reason || pick(DEATH_QUIPS)}  ·  Tekrar için dokun`, 0, 'lose');
  }

  onFell(c) {
    if (!c.alive) return;
    c.die();
    const e = this.world.env, drop = !!(e.roof || e.grid);
    this.fx.popup(c.x, c.gy + 1.2, c.z, drop ? 'AŞAĞI DÜŞTÜ!' : 'SUYA DÜŞTÜ!', '#9be7ff', 24, 1.3);
    if (c.isPlayer) this.lose(e.roof ? 'Platformdan düştün.' : e.grid ? 'Boşluğa düştün.' : 'Suya düştün.'); else {
      Sfx.combo(5);
      this.checkWin();
    }
  }

  // ---------- kamera ve çizim ----------

  updateCamera(dt, snap) {
    const pl = this.player;
    const P = pl.rag.pts[J.PELVIS];
    const fx = pl.alive ? pl.x : P.x, fz = pl.alive ? pl.z : P.z;
    // Kilitlenme hedefi yapışkandır: ölmedikçe ya da başkası çok daha yakın olmadıkça değişmez.
    const type = this.spec.type;
    const py = pl.alive ? pl.y : Math.max(pl.gy, P.y - 0.8);
    let t = this.camTarget;
    if (type === 'titan') t = this.titan && this.titan.alive ? this.titan : null;
    else if (type === 'horse') t = null;
    else {
      // Kilitlenme hedefi yapışkandır: ölmedikçe ya da başkası çok daha yakın olmadıkça değişmez.
      const near = pl.alive ? this.nearestEnemy(pl, 14) : null;
      if (!t || !t.alive || (t.state === 'panic' && near && near.state !== 'panic')) t = near;
      else if (near && near !== t && Math.hypot(near.x - fx, near.z - fz) < 0.6 * Math.hypot(t.x - fx, t.z - fz)) t = near;
    }
    this.camTarget = t;
    let yawT = this.camYaw;
    if (t && pl.alive) yawT = Math.atan2(t.x - fx, t.z - fz);
    else if (pl.alive && Math.hypot(pl.vx, pl.vz) > 1) yawT = pl.yaw;
    else if (!pl.alive) yawT = this.camYaw + dt * 0.3;
    // Yakın dövüşte kamera yavaş döner ki joystick yönleri ayağının altından kaymasın.
    const close = t && Math.hypot(t.x - fx, t.z - fz) < 2.4 * t.S;
    const rate = type === 'horse' ? 1.8 : close ? 0.6 : t ? 2.5 : 1.2;
    this.camYaw = snap ? yawT : this.camYaw + wrapAngle(yawT - this.camYaw) * damp(rate, dt);
    const portrait = this.H > this.W;
    let dist = portrait ? 4.0 : 4.1, height = portrait ? 3.5 : 2.6, ahead = 1.9, lookY = portrait ? 0.55 : 0.8;
    if (type === 'horse') { dist = portrait ? 6.8 : 6.2; height = portrait ? 5.2 : 4.2; ahead = 3.5; lookY = 1.2; }
    if (type === 'titan') { dist = portrait ? 9.5 : 8.5; height = portrait ? 4.5 : 3.6; ahead = 7; lookY = 3 + py * 0.5; }
    const s = Math.sin(this.camYaw), c = Math.cos(this.camYaw);
    _v.set(fx - s * dist, height + py * (type === 'titan' ? 0.85 : 1), fz - c * dist);
    if (snap) this.camera.position.copy(_v); else this.camera.position.lerp(_v, damp(7, dt));
    const look = _v.set(fx + s * ahead, lookY + (type === 'titan' ? py * 0.5 : type === 'horse' ? 0 : py), fz + c * ahead);
    if (snap) this.lookAt.copy(look); else this.lookAt.lerp(look, damp(9, dt));
    this.camera.lookAt(this.lookAt);
    if (this.shakeAmt > 0.001) {
      this.camera.position.x += (Math.random() - 0.5) * this.shakeAmt;
      this.camera.position.y += (Math.random() - 0.5) * this.shakeAmt;
    }
  }

  // Halat: oyuncunun göğsünden bağlandığı noktaya ince bir silindir.
  updateRope() {
    const pl = this.player, r = pl.alive ? pl.rope : null, m = this.ropeMesh;
    if (!r) { m.visible = false; return; }
    const a = r.anchor(), N = pl.rag.pts[J.NECK];
    _v.set(a.x - N.x, a.y - N.y, a.z - N.z);
    const len = _v.length();
    m.visible = true;
    m.position.set(N.x, N.y, N.z);
    m.scale.set(1, len, 1);
    m.quaternion.setFromUnitVectors(_up, _v.multiplyScalar(1 / len));
  }

  project(x, y, z) {
    _v.set(x, y, z).project(this.camera);
    if (_v.z > 1) return null;
    return { x: (_v.x + 1) / 2 * this.W, y: (1 - _v.y) / 2 * this.H };
  }

  render(dt) {
    for (const c of this.chars) {
      c.view.update(dt);
      if (c.alive && c.hasSword && c.swordMesh) {
        const s = c.sw;
        placeSword(c.swordMesh, s.gx, s.gy, s.gz, s.dx, s.dy, s.dz, s.wx, s.wy, s.wz);
      }
    }
    for (const l of this.loose) l.render();
    if (this.horse) this.horse.render();
    this.updateRope();
    this.fx.flush();
    this.world.update(dt, this.camera.position);
    const pl = this.player, P = pl.rag.pts[J.PELVIS];
    this.world.followShadow(P.x, P.z);
    this.renderer.render(this.scene, this.camera);
    this.hud.draw(this.projectFn, this.fx.popups, this.input, this.hintT, this.player, this.spec.env === 'grid' ? 'grid' : this.spec.type);
  }
}
