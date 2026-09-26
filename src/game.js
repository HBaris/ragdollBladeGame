import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { clamp, lerp, rand, pick, damp, easeOutQuad, wrapAngle, loadNum, saveNum } from './util.js';
import { Sfx } from './audio.js';
import { J, MIN_CUT_LEN, sweepRagdoll, sweepBlade } from './ragdoll.js';
import { Character, BLADE_LEN, PLAYER_SPEED } from './character.js';
import { LooseSword, placeSword, BLADE_START, disposeSwordMesh } from './sword.js';
import { Effects } from './effects.js';
import { World } from './world.js';
import { Input } from './input.js';
import { Hud } from './hud.js';

const MAX_STEP = 1 / 120;
const PLAYER_COLOR = 0xffa51f;
const ENEMY_COLOR = 0xa51cff;
const BOSS_COLOR = 0x6a12c2;
const ENV_NAMES = { meadow: 'Çayır', ice: 'Buz Sahanlığı', dojo: 'Gün Batımı Dojo' };
const DEATH_QUIPS = [
  'Ragdoll fiziği 1 — Sen 0',
  'Parçalarını toplamak biraz sürecek.',
  'Kılıcın keskin, refleksin değil.',
  'Hiç değilse güzel uçtun.',
];

// Seviye tasarımı: ortamlar sırayla döner, her 5. seviye boss, zorluk yavaşça artar.
export function levelSpec(n) {
  const envs = ['meadow', 'ice', 'dojo'];
  const env = envs[(n - 1) % envs.length];
  const skill = clamp((n - 1) / 24, 0, 1);
  const boss = n % 5 === 0;
  const enemies = [];
  if (boss) {
    enemies.push('boss');
    for (let i = 0; i < Math.floor(n / 10); i++) enemies.push('normal');
  } else {
    const c = Math.min(4, 1 + Math.floor((n - 1) / 3));
    for (let i = 0; i < c; i++) enemies.push('normal');
  }
  return { env, skill, boss, enemies };
}

const _v = new THREE.Vector3();

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

  // hp: oyuncunun bu seviyeye taşıdığı can (seviyeler arası birikir).
  startLevel(n, hp = 3) {
    this.clearLevel();
    this.level = n;
    saveNum('rk3dLevel', n);
    const spec = levelSpec(n);
    this.spec = spec;
    this.world.set(spec.env);
    this.player = this.addChar({ team: 'player', x: 0, z: -3.2, yaw: 0, hp: 3, color: PLAYER_COLOR, speed: PLAYER_SPEED });
    this.player.hp = clamp(hp, 1, 3);
    const m = spec.enemies.length;
    spec.enemies.forEach((type, i) => {
      const boss = type === 'boss';
      this.enemies.push(this.addChar({
        team: 'enemy', x: (i - (m - 1) / 2) * 1.9, z: 3.6 + (i % 2) * 0.9, yaw: Math.PI,
        hp: boss ? 3 : 1, armored: boss, scale: boss ? 1.38 : 1, skill: spec.skill,
        color: boss ? BOSS_COLOR : ENEMY_COLOR, speed: boss ? 2.1 : lerp(2.1, 3.3, spec.skill),
      }));
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
    this.hud.setHearts(this.player.hp, this.player.maxHp);
    this.hud.show(`SEVİYE ${n}`, spec.boss ? 'BOSS!' : ENV_NAMES[spec.env], 1.5, spec.boss ? 'boss' : '');
    this.input.clear();
  }

  restartLevel() { this.startLevel(this.level); }

  // ---------- zaman ----------

  frame(dt) {
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
      // Temizlenen seviye 1 can geri verir; can bir sonraki seviyeye taşınır.
      if (this.endT > 2.7) this.startLevel(this.level + 1, this.player.hp + 1);
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
    for (const c of this.chars) { c.copyBlade(); c.update(h); }
    this.separate();
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
    for (let i = 0; i < cs.length; i++) {
      const a = cs[i];
      if (!a.alive || a.falling) continue;
      for (let j = i + 1; j < cs.length; j++) {
        const b = cs[j];
        if (!b.alive || b.falling) continue;
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
      if (!e.alive || e.state !== 'fight' || e.stun > 0 || e.swing) continue;
      const d = Math.hypot(e.x - c.x, e.z - c.z);
      if (d < 2 && Math.random() < lerp(0.04, 0.3, e.skill)) this.knock(e, e.x - c.x, e.z - c.z, 4.2);
    }
  }

  cancelSwing(c) {
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
      const targets = a.isPlayer ? this.enemies : [this.player];
      for (const o of targets) {
        if (!a.swing) break;
        if (a.swing.hits.has(o)) continue;
        if (!a.isPlayer && !o.alive) continue;
        const bb = o.rag.bounds(this._bb);
        if (bb.x1 < x0 || bb.x0 > x1 || bb.y1 < y0 || bb.y0 > y1 || bb.z1 < z0 || bb.z0 > z1) continue;

        if (o.alive && o.hasSword) {
          const pt = sweepBlade(pb, cb, o.bCur, 3, 0.05);
          if (pt) {
            if (o.swingActive) { this.parry(a, o, pt); break; }
            if (o.isPlayer && !a.swing.rolled.has(o)) {
              a.swing.rolled.add(o);
              if (Math.random() < 0.35) { this.block(a, o, pt); break; }
            }
          }
        }
        const hit = sweepRagdoll(o.rag, pb, cb, 4);
        if (!hit) continue;
        // Düşman, vuruş kendisine ulaşmadan kılıcıyla karşılayabilir (seviye arttıkça daha sık).
        if (!o.isPlayer && o.alive && o.hasSword && o.stun <= 0 && !o.swing && o.state !== 'panic' && !a.swing.rolled.has(o)) {
          a.swing.rolled.add(o);
          if (Math.random() < lerp(0.12, 0.65, o.skill)) {
            o.blockT = 0.35;
            o.blockUx = a.swing.ux; o.blockUy = a.swing.uy;
            o.counterT = 0.3;
            this.block(a, o, hit);
            break;
          }
        }
        a.swing.hits.add(o);
        let vx = lerp(cb.bx - pb.bx, cb.tx - pb.tx, hit.t) / h;
        let vy = lerp(cb.by - pb.by, cb.ty - pb.ty, hit.t) / h;
        let vz = lerp(cb.bz - pb.bz, cb.tz - pb.tz, hit.t) / h;
        const sp = Math.hypot(vx, vy, vz) || 1, m = clamp(sp, 4, 13);
        vx = vx / sp * m; vy = vy / sp * m; vz = vz / sp * m;
        this.onHit(a, o, hit, vx, vy, vz);
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

    if (o.isPlayer && wasAlive) {
      if (o.invuln > 0) return;
      o.hp--;
      this.hud.setHearts(o.hp, o.maxHp);
      this.hud.flash = 0.6;
      this.shake(0.15);
      if (o.hp > 0) {
        this.cancelSwing(o);
        o.hurtT = 0.35; o.invuln = 0.8; o.flash = 0.12;
        this.knock(o, o.x - a.x, o.z - a.z, 4.5);
        rag.addVel(vx * 0.25, 1.5, vz * 0.25, this.h);
        this.fx.spray(hit.x, hit.y, hit.z, vx, vy, vz, 18, 0.7, 3);
        Sfx.hurt(); Sfx.wound();
        this.slowmo(0.15, 0.35);
        return;
      }
    }

    // Boss son canına kadar hiç kopmaz, sadece yaralanır.
    const armored = wasAlive && o.armored && o.hp > 1;
    const res = armored ? null : this.applyCut(rag, hit);
    rag.addVel(vx * 0.2, vy * 0.2 + 0.6, vz * 0.2, this.h);
    this.gore(rag, res, hit, vx, vy, vz);
    if (a.swordMesh) {
      const bm = a.swordMesh.userData.bladeMat;
      a.blood = Math.min(1, (a.blood || 0) + 0.12);
      bm.color.setRGB(lerp(0.89, 0.75, a.blood), lerp(0.91, 0.12, a.blood), lerp(0.93, 0.15, a.blood));
    }
    if (!wasAlive) return;

    if (o.isPlayer) {
      o.die();
      o.rag.addVel(vx * 0.5, 3, vz * 0.5, this.h);
      this.lose();
      return;
    }

    if (res && res.kind === 'arm') {
      o.checkGrip();
      o.flash = 0.1;
      if (!o.hasSword) {
        o.state = 'panic';
        this.fx.popup(o.x, 2.1 * o.S, o.z, 'AAAA!', '#fff', 22, 1.2);
      } else {
        o.stun = 0.45; o.state = 'stagger';
        this.fx.popup(o.x, 2.1 * o.S, o.z, 'KOLSUZ!', '#ffd23f', 18, 1);
      }
      this.knock(o, vx, vz, 2.5);
      this.slowmo(0.08, 0.35);
      return;
    }
    if (!res) o.hp--; else o.hp = 0;
    if (o.hp > 0) {
      o.flash = 0.12; o.stun = 0.5; o.state = 'stagger';
      o.rag.muscle = 0.3;
      this.knock(o, vx, vz, 3);
      this.fx.popup(o.x, 2.3 * o.S, o.z, `${o.hp} CAN KALDI`, '#fff', 16, 0.9);
      this.slowmo(0.08, 0.35);
      this.shake(0.06);
      return;
    }
    this.killEnemy(o, a, res, vx, vy, vz);
  }

  killEnemy(o, a, res, vx, vy, vz) {
    o.die();
    const h = this.h;
    o.rag.addVel(vx * 0.45, vy * 0.3 + 2.5, vz * 0.45, h);
    o.rag.addSpin(rand(-5, 5), rand(-3, 3), rand(-5, 5), h);
    const y = 2.2 * o.S;
    if (res) {
      if (res.kind === 'neck') this.fx.popup(o.x, y, o.z, 'KAFA GİTTİ!', '#ffd23f', 26, 1.2);
      else if (res.kind === 'torso') this.fx.popup(o.x, y, o.z, 'İKİYE BÖLÜNDÜ!', '#ffd23f', 26, 1.2);
      else if (res.kind === 'leg') this.fx.popup(o.x, y, o.z, 'BACAKSIZ!', '#ffd23f', 24, 1.2);
    }
    if (a && a.swing) {
      a.swing.kills++;
      if (a.swing.kills >= 2) this.fx.popup(a.x, 2.6, a.z, a.swing.kills === 2 ? 'ÇİFTE!' : 'KATLİAM!', '#ff5a36', 30, 1.3);
    }
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
    this.hud.show('TEMİZLENDİ!', this.player.hp < 3 ? `Lv ${this.level} geçildi  ·  +1 ♥` : `Lv ${this.level} geçildi`, 2.6, 'win');
    Sfx.win();
  }

  lose() {
    if (this.phase !== 'play') return;
    this.phase = 'lose';
    this.endT = 0;
    this.slowmo(1.2, 0.25);
    Sfx.die();
    this.hud.show('ÖLDÜN', `${pick(DEATH_QUIPS)}  ·  Tekrar için dokun`, 0, 'lose');
  }

  onFell(c) {
    if (!c.alive) return;
    c.die();
    this.fx.popup(c.x, 1.2, c.z, 'SUYA DÜŞTÜ!', '#9be7ff', 24, 1.3);
    if (c.isPlayer) { this.hud.setHearts(0, c.maxHp); this.lose(); } else {
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
    let t = this.camTarget;
    const near = pl.alive ? this.nearestEnemy(pl, 14) : null;
    if (!t || !t.alive || (t.state === 'panic' && near && near.state !== 'panic')) t = near;
    else if (near && near !== t && Math.hypot(near.x - fx, near.z - fz) < 0.6 * Math.hypot(t.x - fx, t.z - fz)) t = near;
    this.camTarget = t;
    let yawT = this.camYaw;
    if (t && pl.alive) yawT = Math.atan2(t.x - fx, t.z - fz);
    else if (pl.alive && Math.hypot(pl.vx, pl.vz) > 1) yawT = pl.yaw;
    else if (!pl.alive) yawT = this.camYaw + dt * 0.3;
    this.camYaw = snap ? yawT : this.camYaw + wrapAngle(yawT - this.camYaw) * damp(t ? 3.5 : 1.5, dt);
    const portrait = this.H > this.W;
    const dist = portrait ? 4.0 : 4.1, height = portrait ? 3.5 : 2.6;
    const s = Math.sin(this.camYaw), c = Math.cos(this.camYaw);
    _v.set(fx - s * dist, height + Math.max(0, pl.y), fz - c * dist);
    if (snap) this.camera.position.copy(_v); else this.camera.position.lerp(_v, damp(7, dt));
    const look = _v.set(fx + s * 1.9, portrait ? 0.55 : 0.8, fz + c * 1.9);
    if (snap) this.lookAt.copy(look); else this.lookAt.lerp(look, damp(9, dt));
    this.camera.lookAt(this.lookAt);
    if (this.shakeAmt > 0.001) {
      this.camera.position.x += (Math.random() - 0.5) * this.shakeAmt;
      this.camera.position.y += (Math.random() - 0.5) * this.shakeAmt;
    }
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
    this.fx.flush();
    this.world.update(dt, this.camera.position);
    const pl = this.player, P = pl.rag.pts[J.PELVIS];
    this.world.followShadow(P.x, P.z);
    this.renderer.render(this.scene, this.camera);
    this.hud.draw(this.projectFn, this.fx.popups, this.input, this.hintT);
  }
}
