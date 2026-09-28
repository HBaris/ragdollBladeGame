import { GRAVITY, clamp, lerp, rand, pick, damp, easeOutQuad, easeInOut, angApproach, wrapAngle } from './util.js';
import { Ragdoll, J, JOINTS, dims } from './ragdoll.js';
import { makePose, blendPose, approachPose, POSES, poseFK, ik2 } from './pose.js';
import { createSwordMesh, BLADE_START } from './sword.js';
import { CharacterView } from './view.js';
import { Sfx } from './audio.js';

export const PLAYER_SPEED = 7;
export const BLADE_LEN = 0.95;
export const HORSE_BLADE_LEN = 1.65; // at sırtında uzun kılıç: yerdekine yetişsin
const A0 = -1.95, A1 = 1.7; // titan savuruş yayı (radyan)
const STRIDE = 1.9;
// Kılıç joystick yönüne yayla döner. Yeterince hızlı dönerken keser.
// Oyuncu ve (titan dışındaki) düşmanlar aynı modeli kullanır.
const AIM_K = 230, AIM_MAXW = 15;
export const ACTIVE_W = 3.2;   // bu açısal hızın (rad/s) üstünde bıçak keser
const ACTIVE_END = 2.2;
const MAX_ARM_LEAD = 2.0;      // kılıç gövdenin en fazla bu kadar önüne geçebilir (rad)
// Drift: yavaşken çevik, hızlanınca yanal tutunma ve fren zayıflar (m/s²).
const GRIP_SLOW = 36, GRIP_FAST = 3.2, BRAKE_FAST = 4.2;
const SLIDE_MIN = 0.07;        // bu eğimin altında zemin kaydırmaz

// Titan yerdeki oyuncuya tepeden/çapraz vurur, havadakine yatay savurur.
const TITAN_LOW = [[0, -1], [0.7, -0.7], [-0.7, -0.7]];
const TITAN_HIGH = [[0.8, 0.6], [-0.8, 0.6], [0, 1]];
const _sad = { x: 0, y: 0, z: 0 };
const _tm = { vy: 0, px: 0, pz: 0 };

const _a = makePose(), _b = makePose(), _c = makePose(), _d = makePose();
const _ik = [0, 0, 0, 0, 0, 0];

export class Character {
  constructor(game, o) {
    this.game = game;
    this.isPlayer = o.team === 'player';
    this.titan = !!o.titan;
    this.heavy = !!o.heavy;     // at seviyesinin iri ve ağır düşmanları
    this.boss = !!o.boss;       // iri, dayanıklı ama ağırkanlı
    // Titan dışında herkes kılıcı "joystick" ile kullanır: çubuğun yönü hem koşu hem kılıç yönü.
    this.aimCtl = !this.titan;
    this.S = o.scale || 1;
    this.x = o.x; this.z = o.z; this.y = 0;
    this.gy = 0;                // ayağının altındaki zemin yüksekliği
    this.vx = 0; this.vz = 0; this.vy = 0;
    this.slideX = 0; this.slideZ = 0; // eğimde kayma hızı (kontrolün dışında)
    this.slip = 0; this.slipDir = 1; this.skidding = false;
    this.brakeK = 0;            // hızlıyken fren: dizüstü kayma pozu
    this.launchT = 0;           // ızgarada karo fırlattıktan sonraki kısa süre
    this.yaw = o.yaw || 0;
    this.faceYaw = this.yaw;
    this.want = { x: 0, z: 0 };
    this.hp = o.hp || 1;
    this.maxHp = this.hp;
    this.armored = !!o.armored;
    this.skill = o.skill || 0;
    this.speed = o.speed || 2.5;
    this.alive = true;
    this.falling = false;
    this.hasSword = true;
    this.t = rand(0, 10);
    this.phase = 0;
    this.flash = 0; this.invuln = 0; this.hurtT = 0; this.kb = 0; this.stun = 0;
    this.blockT = 0; this.blockUx = 0; this.blockUy = 0; this.counterT = 0;
    this.swing = null;          // sadece titan: eski usul yay savuruşu
    this.mount = null;          // binilen at
    this.rope = null;           // titan seviyesinde halat
    this.flying = false;
    this.stickW = { x: 0, z: 1, mag: 0 };
    // Kılıç: hedef yön (aimYaw), gerçek yön (swYaw), açısal hız (swW), kesme dalgası (episode).
    this.aimYaw = this.yaw; this.swYaw = this.yaw; this.swW = 0; this.episode = null; this.pokeCd = 0;
    // Yay sertliği: acemi düşman biraz yavaş, ağır düşman çok yavaş savurur.
    this.aimK = this.isPlayer ? AIM_K : this.heavy ? 80 : this.boss ? 100 : lerp(150, AIM_K, this.skill);
    this.aimMaxW = this.isPlayer ? AIM_MAXW : this.heavy ? 8 : this.boss ? 10 : lerp(12, AIM_MAXW, this.skill);
    this.aimC = 1.52 * Math.sqrt(this.aimK); // ~0.76 sönüm
    // Düşmanın sanal joystick'i: açı (aimA), saldırı planı, kendisini kesene kin.
    this.aimA = this.yaw; this.plan = null; this.grudge = null; this.grudgeT = 0;
    this.pitchAdj = 0; // düşman kılıcı hedefin göğüs hizasına eğer (boy farkı)
    this.state = 'approach';
    this.timer = rand(0.6, 1.2);
    this.cool = rand(0.3, 0.9) * lerp(1, 0.35, this.skill);
    this.strafeDir = Math.random() < 0.5 ? -1 : 1;
    this.deathT = 0;
    this.d = dims(this.S);
    this.footR = 0.07 * this.S;
    this.pose = POSES.guard(makePose(), 0);
    this.tpose = makePose();
    this.local = new Float32Array(JOINTS * 3);
    this.world = new Float32Array(JOINTS * 3);
    poseFK(this.pose, this.d, this.local, this.footR);
    this.localToWorld();
    this.rag = new Ragdoll(this.S, this.world, { k: this.isPlayer ? 1100 : 850, c: this.isPlayer ? 30 : 24 });
    // Kılıç: yerel (lg, ld, lw) ve dünya (sw) durumları, bıçak parçası (önceki / şimdiki).
    this.lg = [0, 0, 0]; this.ld = [0, 0, 1]; this.lw = [1, 0, 0];
    this.sw = { gx: 0, gy: 0, gz: 0, dx: 0, dy: 1, dz: 0, wx: 1, wy: 0, wz: 0 };
    this.bCur = { bx: 0, by: 0, bz: 0, tx: 0, ty: 0, tz: 0 };
    this.bPrev = { bx: 0, by: 0, bz: 0, tx: 0, ty: 0, tz: 0 };
    this.bladeLen = o.bladeLen || BLADE_LEN;
    this.swordMesh = createSwordMesh(this.bladeLen);
    this.swordMesh.scale.setScalar(this.S);
    this.view = new CharacterView(this, o.color);
    this.computeSword(0);
    this.copyBlade();
  }

  // ---------- dönüşümler ----------

  localToWorld() {
    const s = Math.sin(this.yaw), c = Math.cos(this.yaw);
    const L = this.local, W = this.world;
    for (let i = 0; i < JOINTS; i++) {
      const lx = L[i * 3], ly = L[i * 3 + 1], lz = L[i * 3 + 2];
      W[i * 3] = this.x - c * lx + s * lz;
      W[i * 3 + 1] = this.y + ly;
      W[i * 3 + 2] = this.z + s * lx + c * lz;
    }
  }

  // Yön vektörünü yerelden dünyaya çevirir (öteleme yok).
  dirToWorld(v, out, o) {
    const s = Math.sin(this.yaw), c = Math.cos(this.yaw);
    out[o] = -c * v[0] + s * v[2];
    out[o + 1] = v[1];
    out[o + 2] = s * v[0] + c * v[2];
  }

  // Yere basan bacaklar: bit0 sol, bit1 sağ (ayak gövdeye bağlıysa).
  get legMask() {
    const p = this.rag.pts;
    return (p[J.LFOOT].attached ? 1 : 0) | (p[J.RFOOT].attached ? 2 : 0);
  }

  get forwardX() { return Math.sin(this.yaw); }
  get forwardZ() { return Math.cos(this.yaw); }

  // ---------- güncelleme ----------

  update(dt) {
    this.t += dt;
    if (!this.alive) return;
    this.flash = Math.max(0, this.flash - dt);
    this.invuln = Math.max(0, this.invuln - dt);
    this.hurtT = Math.max(0, this.hurtT - dt);
    this.kb = Math.max(0, this.kb - dt);
    this.stun = Math.max(0, this.stun - dt);
    this.blockT = Math.max(0, this.blockT - dt);
    this.counterT = Math.max(0, this.counterT - dt);
    this.pokeCd = Math.max(0, this.pokeCd - dt);
    this.grudgeT = Math.max(0, this.grudgeT - dt);
    this.launchT = Math.max(0, this.launchT - dt);
    if (this.isPlayer) this.thinkPlayer(); else if (this.aimCtl) this.thinkEnemy(dt); else this.thinkTitan(dt);
    if (this.aimCtl) { this.applyStick(); this.updateAim(dt); }
    if (this.mount) this.ride(); else this.move(dt);
    if (!this.alive) return;
    if (this.aimCtl) {
      // Kollar gövdenin önüne geçebilir ama sınırsız değil: yerde gövde arkadan gelir,
      // at sırtında gövde atla döndüğü için kılıç yanlarda durur.
      const lead = this.mount ? 2.3 : MAX_ARM_LEAD;
      const rel = wrapAngle(this.swYaw - this.yaw);
      if (Math.abs(rel) > lead) {
        if (this.mount) { this.swYaw = wrapAngle(this.yaw + Math.sign(rel) * lead); this.swW = 0; } else this.yaw = this.swYaw - Math.sign(rel) * lead;
      }
    }
    if (this.swing) {
      this.swing.t += dt;
      const s = this.swing;
      if (s.t >= s.wind + s.dur + s.rec) this.swing = null;
    }
    this.rag.muscle = this.hurtT > 0 ? 0.2 : this.stun > 0 ? 0.55 : 1;
    this.animate(dt);
    this.skidFx(dt);
  }

  canSwing() {
    const s = this.swing;
    if (this.stun > 0 || !this.hasSword) return false;
    // Savuruş iptal edilemez: aktif kısım + kısa toparlanma bitmeden yenisi başlamaz.
    return !s || s.t >= s.wind + s.dur + s.rec * 0.35;
  }

  // Titan: (ux, uy) bıçak ucunun yerelde gideceği yön.
  startSwing(ux, uy, fast) {
    const l = Math.hypot(ux, uy) || 1;
    ux /= l; uy /= l;
    const sk = this.skill;
    this.swing = {
      t: 0, ux, uy, a0: A0, a1: A1,
      wind: fast ? 0.05 : lerp(0.62, 0.24, sk) * (this.counterT > 0 ? 0.6 : 1) * 1.8,
      dur: fast ? 0.2 : 0.5,
      rec: fast ? 0.18 : lerp(0.55, 0.35, sk),
      hits: new Set(), rolled: new Set(), kills: 0,
    };
    this.game.onSwingStart(this);
  }

  swingMode() {
    const s = this.swing;
    if (!s) return 0;
    if (s.t < s.wind) return 1;
    if (s.t < s.wind + s.dur) return 2;
    return 3;
  }

  // Vuruşların sayıldığı an: kılıç hızlı dönerken (titan: savuruşun aktif kısmı).
  get swingActive() {
    if (this.aimCtl) return !!this.episode;
    const s = this.swing;
    return !!s && s.t > s.wind && s.t <= s.wind + s.dur + 0.02;
  }

  // Şu an sayılan kesme dalgası (aynı hedef bir dalgada bir kez kesilir).
  get curEp() { return this.aimCtl ? this.episode : this.swing; }

  // Tek kontrol joystick: yönü kılıcın/kolların baktığı yer, itme miktarı koşu hızı.
  thinkPlayer() {
    const g = this.game, mv = g.input.move();
    const cs = Math.sin(g.camYaw), cc = Math.cos(g.camYaw);
    // Kamera ileri = (sin, 0, cos), sağ = (-cos, 0, sin).
    const wx = cs * mv.y - cc * mv.x, wz = cc * mv.y + cs * mv.x;
    const l = Math.hypot(wx, wz) || 1;
    this.stickW.x = wx / l; this.stickW.z = wz / l; this.stickW.mag = mv.mag;
  }

  // Joystick (oyuncununki ya da düşmanın sanal olanı) -> koşu isteği ve kılıç hedefi.
  // Az itmek sadece kılıcı çevirir; çok itmek o yöne koşturur.
  applyStick() {
    const st = this.stickW, lm = this.legMask;
    const legs = lm === 3 ? 1 : lm ? 0.62 : 0.42; // tek bacakla sekerek, bacaksız sürünerek
    const run = clamp((st.mag - 0.4) / 0.45, 0, 1) * this.speed * legs;
    this.want.x = st.x * run;
    this.want.z = st.z * run;
    if (st.mag > 0.18 && this.stun <= 0) this.aimYaw = Math.atan2(st.x, st.z);
  }

  updateAim(dt) {
    const err = wrapAngle(this.aimYaw - this.swYaw);
    this.swW = clamp(this.swW + (this.aimK * err - this.aimC * this.swW) * dt, -this.aimMaxW, this.aimMaxW);
    this.swYaw = wrapAngle(this.swYaw + this.swW * dt);
    this.faceYaw = this.swYaw;
    // Her yöne dönüş yeni bir "savuruş": aynı hedef bir savuruşta bir kez kesilir.
    // Halatla hızlı uçarken kılıç dönmese de değdiği yeri keser.
    const a = Math.abs(this.swW);
    this.flying = (!!this.rope || this.y - this.gy > 0.4) && Math.hypot(this.vx, this.vy, this.vz) > 8;
    if ((a > ACTIVE_W || this.flying) && this.hasSword) {
      const dir = a > ACTIVE_W ? Math.sign(this.swW) : 2;
      if (!this.episode || this.episode.dir !== dir) {
        this.episode = { hits: new Set(), rolled: new Set(), kills: 0, dir, ux: dir === 2 ? 1 : -dir, uy: 0 };
        this.game.onSwingStart(this);
        if (dir !== 2 && a > 6) { if (this.isPlayer) Sfx.swoosh(1); else Sfx.enemySwing(); }
      }
    } else if (a < ACTIVE_END) this.episode = null;
  }

  ride() {
    const h = this.mount, s = h.saddle(_sad);
    this.x = s.x; this.y = s.y; this.z = s.z;
    this.vx = h.vx; this.vz = h.vz; this.vy = 0;
    this.yaw = h.yaw; this.faceYaw = h.yaw;
    this.phase = h.phase;
  }

  // Havada: halat çeker, yerçekimi, hafif sürtünme; joystick biraz yön verir.
  moveAir(dt) {
    const env = this.game.world, r = this.rope;
    if (r) {
      const a = r.anchor();
      const dx = a.x - this.x, dy = a.y - (this.y + 1.1 * this.S), dz = a.z - this.z;
      const dist = Math.hypot(dx, dy, dz) || 1;
      this.vx += dx / dist * r.pull * dt; this.vy += dy / dist * r.pull * dt; this.vz += dz / dist * r.pull * dt;
      r.t += dt;
      if (dist < r.release || r.t > r.maxT) this.rope = null;
    }
    this.vy -= GRAVITY * (r ? 0.55 : 0.9) * dt;
    const f = Math.exp(-0.3 * dt);
    this.vx *= f; this.vz *= f;
    const st = this.stickW;
    if (st.mag > 0.3) { this.vx += st.x * 7 * dt; this.vz += st.z * 7 * dt; }
    const sp = Math.hypot(this.vx, this.vy, this.vz);
    if (sp > 30) { this.vx *= 30 / sp; this.vy *= 30 / sp; this.vz *= 30 / sp; }
    this.x += this.vx * dt; this.y += this.vy * dt; this.z += this.vz * dt;
    const R = Math.hypot(this.x, this.z), lim = env.radius - 0.5;
    if (!env.grid && R > lim) { this.x *= lim / R; this.z *= lim / R; this.vx *= 0.3; this.vz *= 0.3; }
    const g = env.ground(this.x, this.z);
    if (g > -Infinity && this.y <= g) {
      // Yükselen karo yakaladıysa üstünde taşınır ve fırlatılır.
      const tv = env.tileMotion(this.x, this.z, _tm).vy;
      if (this.vy <= tv) {
        this.y = g; this.gy = g;
        if (tv > 2.5) this.launch(_tm);
        else { this.vy = 0; this.kb = 0.35; } // yere inince biraz kay
      }
    }
    // Izgaranın kenarından boşluğa uçtuysa düşer.
    if (g === -Infinity && this.y < this.gy - 0.3) this.falling = true;
  }

  // Altındaki karo hızla yükseliyor: havaya (halka dalgasında biraz da dışarı) fırla.
  launch(tm) {
    this.vy = Math.max(this.vy, Math.min(tm.vy * 1.1, 12));
    this.y = this.gy + 0.13;
    if (this.launchT <= 0) {
      this.vx += tm.px; this.vz += tm.pz;
      if (!this.isPlayer) this.stun = Math.max(this.stun, 0.45);
    }
    this.launchT = 0.4;
  }

  // Düşmanlar da oyuncu gibi joystick kullanır: çubuğun yönü hem koşu hem kılıç yönü.
  // Durup kolayca savurmazlar; kesmek için çubuğu bir yana çekip (görünür hazırlık)
  // hızla öbür yana savururlar. Savuruş yolundaki arkadaşlarını da keserler.
  thinkEnemy(dt) {
    const g = this.game, st = this.stickW, pl = g.player;
    if (this.grudge && (this.grudgeT <= 0 || !this.grudge.alive)) this.grudge = null;
    const tg = this.grudge || pl;
    const dx = tg.x - this.x, dz = tg.z - this.z;
    const dist = Math.hypot(dx, dz) || 1;
    const toT = Math.atan2(dx, dz);
    const set = (a, m) => { this.aimA = wrapAngle(a); st.x = Math.sin(a); st.z = Math.cos(a); st.mag = m; };
    const turnTo = (a, rate, m) => set(angApproach(this.aimA, a, rate * dt), m);
    st.mag = 0;
    // Uzun düşman eğilip göğse, kısa olan (ya da attaki hedefe) yukarı savurur: boy farkı
    // kafa kesmeyi bedava yapmasın.
    const L = this.local, TL = tg.local;
    const hG = this.y + lerp(L[J.NECK * 3 + 1], L[J.PELVIS * 3 + 1], 0.28) - 0.1 * this.S;
    const hT = tg.y + lerp(TL[J.NECK * 3 + 1], TL[J.PELVIS * 3 + 1], 0.4);
    const pw = clamp(Math.atan2(hT - hG, Math.max(0.8, dist - 0.3)), -0.6, 0.35);
    this.pitchAdj += (pw - this.pitchAdj) * damp(6, dt);
    if (g.time < 0.8) { turnTo(toT, 3, 0.25); return; } // seviye başında kısa bir nefes
    this.timer -= dt;
    this.cool -= dt;
    if (!pl.alive && this.state !== 'panic') this.state = 'cheer';
    const sk = this.skill, reach = 1.6 * this.S;
    // Başparmak gecikmesi: hedefi insan gibi biraz geriden takip eder.
    const track = lerp(2.5, 5.5, sk) * (this.heavy ? 0.6 : 1);
    switch (this.state) {
      case 'approach': {
        const sp = Math.hypot(this.vx, this.vz);
        // Kayarak duracağını hesaba katıp erken bırakır (acemiler yine de kayıp geçer).
        if (dist < reach + 0.25 + sp * sp * lerp(0.05, 0.1, sk)) { this.state = 'fight'; turnTo(toT, track, 0.25); break; }
        // Koşarken savurma
        if (this.cool <= 0 && dist < reach + 1 + sp * 0.3 && Math.random() < dt * lerp(0.4, 2.5, sk) && this.mayAttack(tg, true)) { this.startFlick(true); break; }
        // Hedefin etrafına yayıl: başkalarıyla aynı yönden gelme.
        const my = Math.atan2(-dx, -dz) + clamp(this.spread(tg, dx, dz) * 0.45, -1, 1);
        const ax = tg.x + Math.sin(my) * reach - this.x, az = tg.z + Math.cos(my) * reach - this.z;
        turnTo(Math.atan2(ax, az), 6, 0.95);
        break;
      }
      case 'fight':
        if (dist > reach + 0.8) { this.state = 'approach'; break; }
        // Menzil dışındaysa kılıcı hedefe tutup yavaşça sokulur (joystick'i biraz fazla iter).
        turnTo(toT, track, dist > reach + 0.2 ? 0.4 + 0.45 * clamp((dist - reach) / 1.5, 0.15, 0.6) : 0.25);
        // Blok sonrası karşı saldırı jeton beklemez.
        if (this.counterT > 0 || (this.cool <= 0 && dist < reach + 0.35 && this.mayAttack(tg))) this.startFlick(false);
        break;
      case 'attack':
        this.runPlan(dt, toT, track);
        break;
      case 'stagger':
        if (this.stun <= 0) { this.state = 'fight'; this.plan = null; this.cool = rand(0.2, 0.6); }
        break;
      case 'panic': {
        // Silahsız kaçış: oyuncudan yavaş, yakalanabilir.
        const ax = this.x - pl.x, az = this.z - pl.z;
        set(Math.atan2(ax, az), Math.min(0.95, 0.4 + 0.45 * 3.4 / this.speed));
        break;
      }
      case 'cheer':
        if (this.y <= this.gy && !this.falling && Math.random() < dt * 2.2) this.vy = rand(3.2, 4.5);
        break;
    }
  }

  // Hedefin etrafında diğer düşmanlardan açısal olarak uzaklaşma isteği.
  spread(tg, dx, dz) {
    const my = Math.atan2(-dx, -dz);
    let s = 0;
    for (const o of this.game.enemies) {
      if (o === this || o === tg || !o.alive || o.state === 'panic') continue;
      const w = wrapAngle(Math.atan2(o.x - tg.x, o.z - tg.z) - my);
      if (Math.abs(w) < 1.6) s -= Math.sign(w) * (1.6 - Math.abs(w));
    }
    return s * (1.2 + this.skill * 1.5);
  }

  // Saldırı izni: oyuncuya jetonla (aynı anda sınırlı saldırgan). Dikkatli olan,
  // savuruş yayında arkadaşı varsa bekler; ama her zaman değil, kazalar olur.
  // Koşarken savurmadan önce hep bakar (yan yana koşan arkadaşını biçmesin).
  mayAttack(tg, careful = false) {
    const g = this.game;
    if (careful || Math.random() < 0.6 + 0.35 * this.skill) {
      const toT = Math.atan2(tg.x - this.x, tg.z - this.z), R = 2.2 * this.S;
      for (const o of g.enemies) {
        if (o === this || o === tg || !o.alive) continue;
        if (Math.hypot(o.x - this.x, o.z - this.z) > R) continue;
        if (Math.abs(wrapAngle(Math.atan2(o.x - this.x, o.z - this.z) - toT)) < 1.6) { this.cool = rand(0.25, 0.5); return false; }
      }
    }
    return tg !== g.player || g.takeAttackToken(this);
  }

  // Joystick'le kesme: yavaşça bir yana çek (hazırlık, kesmez), sonra hızla öbür yana
  // savur. Usta düşman bazen topaç gibi döner: etrafındaki herkesi keser.
  startFlick(run) {
    const sk = this.skill;
    const side = Math.random() < 0.5 ? -1 : 1;
    if (!run && sk > 0.2 && !this.heavy && Math.random() < 0.05 + 0.13 * sk) {
      this.plan = { kind: 'spin', t: 0, side, base: this.aimA, dur: rand(0.7, 1.1), rec: 0.35 };
    } else {
      const th = rand(1.1, 1.5);
      const rate = lerp(2.3, 4.2, sk) * (this.heavy ? 0.55 : this.boss ? 0.7 : 1) * (this.counterT > 0 ? 1.6 : 1);
      this.plan = { kind: 'flick', t: 0, side, base: this.aimA, th, th2: Math.min(2.9 - th, rand(1.2, 1.5)), wind: th / rate, slash: this.heavy ? 0.45 : 0.28, rec: 0.3, run, fired: false };
    }
    this.counterT = 0;
    this.state = 'attack';
  }

  runPlan(dt, toT, track) {
    const p = this.plan, st = this.stickW;
    if (!p) { this.state = 'fight'; return; }
    p.t += dt;
    p.base = angApproach(p.base, toT, track * dt);
    const set = (a, m) => { this.aimA = wrapAngle(a); st.x = Math.sin(a); st.z = Math.cos(a); st.mag = m; };
    if (p.kind === 'spin') {
      if (p.t < p.dur) set(p.base + p.side * 10 * p.t, 0.3);
      else if (p.t < p.dur + p.rec) set(angApproach(this.aimA, toT, 5 * dt), 0.25);
      else this.endPlan();
      return;
    }
    const m = p.run ? 0.7 : 0.3;
    if (p.t < p.wind) set(p.base + p.side * p.th * (p.t / p.wind), m);
    else if (p.t < p.wind + p.slash) set(p.base - p.side * p.th2, m);
    else if (p.t < p.wind + p.slash + p.rec) set(angApproach(this.aimA, toT, 4 * dt), 0.25);
    else this.endPlan();
  }

  endPlan() {
    this.plan = null;
    this.state = 'fight';
    this.cool = rand(0.5, 1.2) * lerp(1.3, 0.5, this.skill) * (this.boss ? 1.5 : 1);
  }

  // Titan: eski usul yapay zekâ; yaklaşır, sırası gelince kollarıyla yay çizerek vurur.
  thinkTitan(dt) {
    const g = this.game, pl = g.player;
    const dx = pl.x - this.x, dz = pl.z - this.z;
    const dist = Math.hypot(dx, dz) || 1;
    this.want.x = 0; this.want.z = 0;
    this.faceYaw = Math.atan2(dx, dz);
    if (g.time < 0.8) return;
    this.timer -= dt;
    this.cool -= dt;
    const engage = 0.5 * this.S;
    if (!pl.alive) this.state = 'cheer';
    switch (this.state) {
      case 'approach': {
        const lm = this.legMask;
        const sp = this.speed * (lm === 3 ? 1 : lm ? 0.6 : 0.4);
        if (dist > engage + 0.2) { this.want.x = dx / dist * sp; this.want.z = dz / dist * sp; } else this.state = 'fight';
        break;
      }
      case 'fight': {
        this.want.x = dx / dist * clamp((dist - engage) * 3, -2, this.speed);
        this.want.z = dz / dist * clamp((dist - engage) * 3, -2, this.speed);
        const high = pl.y > 3;
        // Havadakine (ensesine gelene) daha uzaktan da el sallar.
        if (this.hasSword && this.cool <= 0 && dist < engage + 0.35 + this.skill * 0.5 + (high ? 4 : 0) && g.takeAttackToken(this)) {
          const [ux, uy] = pick(high ? TITAN_HIGH : TITAN_LOW);
          this.startSwing(ux, uy, false);
          // Havadaki (halatla gelen) oyuncuya daha çabuk el sallar.
          if (high) this.swing.wind *= 0.4;
          this.state = 'attack';
        }
        break;
      }
      case 'attack':
        if (!this.swing) { this.state = 'fight'; this.cool = rand(0.5, 1.3) * lerp(1.3, 0.55, this.skill); }
        break;
      case 'stagger':
        if (this.stun <= 0) { this.state = 'fight'; this.cool = rand(0.2, 0.6); }
        break;
      default:
        break;
    }
  }

  move(dt) {
    const env = this.game.world;
    const air = this.y > this.gy + 0.02 || this.vy > 0.01;
    if (this.isPlayer && !this.falling && (this.rope || air)) {
      this.moveAir(dt);
      this.turn(dt);
      return;
    }
    let wx = this.want.x, wz = this.want.z;
    if (this.stun > 0 || this.hurtT > 0) { wx *= 0.2; wz *= 0.2; }
    if (this.kb > 0 || this.falling) {
      const f = Math.exp(-5 * dt);
      this.vx *= f; this.vz *= f;
    } else if (this.aimCtl && !air) this.drive(wx, wz, dt);
    else {
      const acc = (air ? 3 : 14) * dt;
      const ddx = wx - this.vx, ddz = wz - this.vz, dl = Math.hypot(ddx, ddz);
      if (dl > acc) { this.vx += ddx / dl * acc; this.vz += ddz / dl * acc; } else { this.vx = wx; this.vz = wz; }
    }
    // Eğim: platform yan yatınca herkes aşağı kayar; koşarak karşı koyabilirsin.
    const sx = env.gx, sz = env.gz, sm = Math.hypot(sx, sz);
    if (!air && !this.falling && sm > SLIDE_MIN) {
      const a = GRAVITY * 0.85 * (sm - SLIDE_MIN) / sm * dt;
      this.slideX -= sx * a; this.slideZ -= sz * a;
    }
    const sf = Math.exp(-1.2 * dt);
    this.slideX *= sf; this.slideZ *= sf;
    const mvx = this.vx + this.slideX, mvz = this.vz + this.slideZ;
    if (!this.falling) {
      let nx = this.x + mvx * dt, nz = this.z + mvz * dt;
      const m = 0.35 * this.S;
      if (env.solidAt(nx, nz, this.y)) {
        // Yükselmiş karo duvar gibi: içine yürünmez, kenarı boyunca kayılır.
        if (!env.solidAt(nx, this.z, this.y)) { nz = this.z; this.vz = 0; this.slideZ = 0; }
        else if (!env.solidAt(this.x, nz, this.y)) { nx = this.x; this.vx = 0; this.slideX = 0; }
        else { nx = this.x; nz = this.z; this.vx = 0; this.vz = 0; this.slideX = 0; this.slideZ = 0; }
      }
      if (env.inside(nx, nz, m) || ((this.kb > 0 || air) && env.canFall && !env.wallH)) { this.x = nx; this.z = nz; }
      else if (this.overWall(env, mvx, mvz)) { this.x = nx; this.z = nz; }
      else if (env.clampInside(nx, nz, m, this)) { /* sınır boyunca kayar */ }
      else if (env.inside(nx, this.z, m)) { this.x = nx; this.vz = 0; this.slideZ = 0; }
      else if (env.inside(this.x, nz, m)) { this.z = nz; this.vx = 0; this.slideX = 0; }
      else { this.vx = 0; this.vz = 0; this.slideX = 0; this.slideZ = 0; }
      const g = env.ground(this.x, this.z);
      if (g === -Infinity) this.falling = true; else if (!this.falling) this.gy = g;
    } else {
      this.x += mvx * dt; this.z += mvz * dt;
    }
    if (!this.falling && env.grid && this.y <= this.gy + 0.12 && env.tileMotion(this.x, this.z, _tm).vy > 2.5) this.launch(_tm);
    if (!this.falling && this.vy <= 0 && this.y <= this.gy + 0.12) { this.y = this.gy; this.vy = 0; }
    else {
      this.vy -= GRAVITY * dt;
      this.y += this.vy * dt;
      if (!this.falling && this.y <= this.gy) { this.y = this.gy; this.vy = 0; }
    }
    if (this.falling && this.y < this.gy - env.fallDepth) this.game.onFell(this);
    // Kayma: gövdenin baktığı yöne göre yan hız (animasyon, toz, ses).
    const sn = Math.sin(this.yaw), cs = Math.cos(this.yaw);
    const vR = -mvx * cs + mvz * sn;
    const tgt = air || this.falling ? 0 : clamp((Math.abs(vR) - 0.7) / 2, 0, 1);
    this.slip += (tgt - this.slip) * damp(10, dt);
    if (Math.abs(vR) > 0.3) this.slipDir = Math.sign(vR);
    // Hızını alamama: tam hızdayken bırakırsan (ya da ters yöne itersen) dizüstü kayarsın.
    const msp = Math.hypot(mvx, mvz), top = Math.max(this.speed, 1);
    let bt = 0;
    if (!air && !this.falling && msp > 0.45 * top) {
      const wa = (this.want.x * mvx + this.want.z * mvz) / msp;
      bt = clamp((msp - 0.45 * top) / (0.35 * top), 0, 1) * clamp(1 - wa / msp, 0, 1);
    }
    this.brakeK += (bt - this.brakeK) * damp(bt > this.brakeK ? 12 : 5, dt);
    this.turn(dt);
  }

  // Drift sürüşü: düz koşu düz gider. Hızlıyken yön değiştirirsen gövde hemen döner ama
  // hız vektörü geride kalır, yana tutunma zayıf olduğu için savrulursun.
  drive(wx, wz, dt) {
    const sp = Math.hypot(this.vx, this.vz);
    if (sp < 0.3) {
      const a = GRIP_SLOW * dt, ddx = wx - this.vx, ddz = wz - this.vz, dl = Math.hypot(ddx, ddz);
      if (dl > a) { this.vx += ddx / dl * a; this.vz += ddz / dl * a; } else { this.vx = wx; this.vz = wz; }
      return;
    }
    const top = Math.max(this.speed, 1);
    // Tutunma hız düştükçe hemen geri gelmez: kayma bir süre sürer.
    const k = Math.sqrt(clamp((sp - 0.15 * top) / (0.55 * top), 0, 1));
    const legs = this.legMask === 3 ? 1 : 0.7;
    const acc = (this.isPlayer ? 20 : 15) * legs;
    const grip = lerp(GRIP_SLOW, GRIP_FAST, k) * legs, brake = lerp(GRIP_SLOW, BRAKE_FAST, k) * legs;
    const fx = this.vx / sp, fz = this.vz / sp;
    const wl = wx * fx + wz * fz, wlat = -wx * fz + wz * fx;
    const dl = clamp(wl - sp, -brake * dt, acc * dt);
    const dlat = clamp(wlat, -grip * dt, grip * dt);
    this.vx += fx * dl - fz * dlat;
    this.vz += fz * dl + fx * dlat;
  }

  // Alçak duvarın üstünden devrilme: sadece hızla (darbe ya da kayma) çarparsan.
  overWall(env, mvx, mvz) {
    if (!env.wallH) return false;
    const ax = Math.abs(this.x), az = Math.abs(this.z);
    const nx = ax > az ? Math.sign(this.x) : 0, nz = ax > az ? 0 : Math.sign(this.z);
    if (nx * mvx + nz * mvz < env.overSpeed) return false;
    this.falling = true;
    this.vx = mvx; this.vz = mvz; this.slideX = 0; this.slideZ = 0;
    this.vy = 3; this.kb = 1;
    return true;
  }

  turn(dt) {
    const rate = this.isPlayer ? 8 : this.titan ? 1.2 : this.heavy ? 2.5 : 7;
    this.yaw = angApproach(this.yaw, this.faceYaw, rate * dt);
    const vx = this.vx + this.slideX, vz = this.vz + this.slideZ, sp = Math.hypot(vx, vz);
    const back = vx * this.forwardX + vz * this.forwardZ < -0.3 * sp ? -1 : 1;
    const lm = this.legMask;
    // Kayarken bacaklar boşa çırpınır.
    this.phase += (back * sp + this.slip * 5) * dt / ((lm === 3 ? STRIDE : STRIDE * 0.6) * this.S) * Math.PI * 2;
  }

  // Drift tozu ve lastik gibi gıcırtı.
  skidFx(dt) {
    const s = Math.max(this.slip, this.brakeK);
    if (s > 0.4 && this.y <= this.gy + 0.05 && Math.random() < dt * 45 * s) {
      const p = this.rag.pts[Math.random() < 0.5 ? J.LFOOT : J.RFOOT];
      if (p.attached) this.game.fx.dust(p.x, p.y, p.z, -this.vx * 0.2, -this.vz * 0.2);
    }
    if (s > 0.55 && !this.skidding) {
      this.skidding = true;
      const pl = this.game.player;
      if (this.isPlayer || Math.hypot(pl.x - this.x, pl.z - this.z) < 7) Sfx.skid();
    } else if (s < 0.3) this.skidding = false;
  }

  // ---------- animasyon ----------

  animate(dt) {
    const P = this.tpose;
    const sp = Math.hypot(this.vx + this.slideX, this.vz + this.slideZ);
    const lm = this.legMask;
    let phFixed = null;
    if (this.mount) { POSES.ride(P, this.mount.phase); phFixed = 0.02; }
    else if (this.y > this.gy + 0.05 || this.falling) POSES.air(P, this.t);
    else if (lm === 3) {
      const runK = clamp(sp / (this.isPlayer ? 3.2 : 2), 0, 1);
      blendPose(P, POSES.guard(_a, this.t), POSES.run(_b, this.phase), runK);
      // Biraz sarhoş koşu: gövde adım adım yana yalpalar.
      P.side += Math.sin(this.phase) * 0.08 * runK;
      P.headP += Math.sin(this.phase * 2) * 0.06 * runK;
      // Drift: kayılan yöndeki bacak fren yapar, öbürü boşa çırpınır.
      if (this.slip > 0.02) blendPose(P, P, POSES.skid(_d, this.phase, this.slipDir), this.slip * 0.85);
      if (this.brakeK > 0.03) blendPose(P, P, POSES.kneel(_d), this.brakeK * 0.9 * (1 - this.slip * 0.6));
    }
    else if (lm) { POSES.hop(P, this.phase, sp > 0.5); P.side = lm === 1 ? 0.1 : -0.1; }
    else {
      POSES.stumps(P, this.phase, sp > 0.5);
      const p = this.rag.pts;
      phFixed = p[J.LKNEE].attached && p[J.RKNEE].attached ? this.d.th * 0.85 + 0.08 * this.S : 0.3 * this.S;
    }

    // Savuruşun gövdeye etkisi: burulma ve hamle adımı.
    const mode = this.swingMode(), s = this.swing;
    let twist = 0, lunge = 0;
    if (this.aimCtl) {
      // Omuzlar kılıcın yönüne burulur, hızlı savuruşta öne eğilir.
      const rel = wrapAngle(this.yaw - this.swYaw);
      P.twist = clamp(rel * 0.75, -1.1, 1.1);
      P.lean += clamp(Math.abs(this.swW) / 15, 0, 1) * 0.15;
    } else if (mode) {
      const tw = (a) => s.ux * Math.sin(a) * 0.55;
      if (mode === 1) { const e = easeInOut(s.t / s.wind); twist = tw(s.a0) * e; lunge = e * 0.5; }
      else if (mode === 2) { const e = easeOutQuad((s.t - s.wind) / s.dur); twist = tw(lerp(s.a0, s.a1, e)); lunge = 1; }
      else { const e = easeInOut((s.t - s.wind - s.dur) / s.rec); twist = tw(s.a1) * (1 - e); lunge = 1 - e; }
      blendPose(P, P, POSES.lunge(_c), lunge * (sp > 1.5 ? 0.4 : 1));
      P.twist = twist;
      if (s.uy < -0.5 && mode === 2) P.lean += 0.25;
    }
    if (this.hurtT > 0 || this.stun > 0) { P.lean = -0.25; P.headP = 0.3; }
    if (this.state === 'cheer' && !this.isPlayer) { P.lean = -0.1; P.headP = -0.4; }
    approachPose(this.pose, P, damp(mode === 2 || this.aimCtl ? 24 : 12, dt));
    poseFK(this.pose, this.d, this.local, this.footR, lm, phFixed);
    this.computeSword(dt);
    this.applyArms();
    this.localToWorld();
    const rag = this.rag, W = this.world;
    rag.tgt.set(W);
    rag.setVel(this.vx, this.vy, this.vz);
    const hold = this.hasSword;
    rag.pts[J.LHAND].pin = hold;
    rag.pts[J.RHAND].pin = hold;
  }

  // Kılıcın yerel kabza konumu / yönü; sonra dünya ve bıçak parçası.
  computeSword() {
    const L = this.local, S = this.S;
    const nx = L[J.NECK * 3], ny = L[J.NECK * 3 + 1], nz = L[J.NECK * 3 + 2];
    const px = L[J.PELVIS * 3], py = L[J.PELVIS * 3 + 1], pz = L[J.PELVIS * 3 + 2];
    const cx = lerp(nx, px, 0.28), cy = lerp(ny, py, 0.28), cz = lerp(nz, pz, 0.28) + 0.1 * S;
    // Bekleme duruşu: kılıç önde, yukarı çapraz.
    const gd = [0.38, 0.78, 0.5], gl = Math.hypot(gd[0], gd[1], gd[2]);
    gd[0] /= gl; gd[1] /= gl; gd[2] /= gl;
    const gg = [cx + 0.14 * S, cy - 0.16 * S, cz + 0.26 * S];
    const s = this.swing, mode = this.swingMode();
    const R = 0.3 * S;
    const arc = (a, outD, outW, outG) => {
      const sa = Math.sin(a), ca = Math.cos(a);
      outD[0] = s.ux * sa; outD[1] = s.uy * sa; outD[2] = ca;
      outW[0] = s.ux * ca; outW[1] = s.uy * ca; outW[2] = -sa;
      outG[0] = cx + outD[0] * R; outG[1] = cy + outD[1] * R; outG[2] = cz + outD[2] * R;
    };
    const d = this.ld, w = this.lw, g = this.lg;
    if (this.aimCtl && this.hasSword && !(this.blockT > 0 && !this.isPlayer)) {
      // Kılıç joystick yönüne bakar; hızlı dönerken göğüs hizasına iner, yavaşken yukarı çapraz durur.
      const rel = wrapAngle(this.yaw - this.swYaw);
      const spd = this.flying ? 1 : clamp(Math.abs(this.swW) / 7, 0, 1);
      const pitch = lerp(0.45, 0.02, spd) + Math.sin(this.phase) * 0.03 + this.pitchAdj;
      const sr = Math.sin(rel), cr = Math.cos(rel), cp = Math.cos(pitch);
      d[0] = sr * cp; d[1] = Math.sin(pitch); d[2] = cr * cp;
      w[0] = cr; w[1] = 0; w[2] = -sr;
      const reach = (0.33 + spd * 0.07) * S;
      g[0] = cx + sr * reach; g[1] = cy - 0.1 * S; g[2] = cz - 0.1 * S + cr * reach;
    } else if (this.blockT > 0 && !mode) {
      // Blok: gelen kılıca dik tut. Dikey savuruşa yatay, yatay savuruşa dikey.
      if (Math.abs(this.blockUy) > Math.abs(this.blockUx)) { d[0] = 1; d[1] = 0.15; d[2] = 0.2; g[0] = cx - 0.3 * S; g[1] = cy + 0.38 * S; g[2] = cz + 0.22 * S; }
      else { d[0] = 0.1; d[1] = 1; d[2] = 0.15; g[0] = cx + this.blockUx * 0.3 * S; g[1] = cy - 0.05 * S; g[2] = cz + 0.3 * S; }
      const l = Math.hypot(d[0], d[1], d[2]);
      d[0] /= l; d[1] /= l; d[2] /= l;
      w[0] = 0; w[1] = 0; w[2] = 1;
    } else if (!mode || !this.hasSword) {
      d[0] = gd[0]; d[1] = gd[1]; d[2] = gd[2];
      w[0] = 1; w[1] = 0; w[2] = 0;
      g[0] = gg[0]; g[1] = gg[1]; g[2] = gg[2];
    } else if (mode === 2) {
      const e = easeOutQuad((s.t - s.wind) / s.dur);
      arc(lerp(s.a0, s.a1, e), d, w, g);
      g[2] += 0.08 * S * e;
    } else {
      const ad = [0, 0, 0], aw = [0, 0, 0], ag = [0, 0, 0];
      let e;
      if (mode === 1) { arc(s.a0, ad, aw, ag); e = 1 - easeInOut(s.t / s.wind); } else { arc(s.a1, ad, aw, ag); e = easeInOut((s.t - s.wind - s.dur) / s.rec); }
      // e = 0 -> yay konumu, e = 1 -> bekleme duruşu
      for (let i = 0; i < 3; i++) {
        d[i] = lerp(ad[i], gd[i], e);
        w[i] = lerp(aw[i], i === 0 ? 1 : 0, e);
        g[i] = lerp(ag[i], gg[i], e);
      }
      const l = Math.hypot(d[0], d[1], d[2]) || 1;
      d[0] /= l; d[1] /= l; d[2] /= l;
    }
    // Dünyaya
    const sn = Math.sin(this.yaw), cs = Math.cos(this.yaw);
    const sw = this.sw;
    sw.gx = this.x - cs * g[0] + sn * g[2];
    sw.gy = this.y + g[1];
    sw.gz = this.z + sn * g[0] + cs * g[2];
    sw.dx = -cs * d[0] + sn * d[2]; sw.dy = d[1]; sw.dz = sn * d[0] + cs * d[2];
    sw.wx = -cs * w[0] + sn * w[2]; sw.wy = w[1]; sw.wz = sn * w[0] + cs * w[2];
    const b0 = BLADE_START * S, b1 = (BLADE_START + this.bladeLen) * S;
    const c = this.bCur;
    c.bx = sw.gx + sw.dx * b0; c.by = sw.gy + sw.dy * b0; c.bz = sw.gz + sw.dz * b0;
    c.tx = sw.gx + sw.dx * b1; c.ty = sw.gy + sw.dy * b1; c.tz = sw.gz + sw.dz * b1;
  }

  copyBlade() {
    const a = this.bCur, b = this.bPrev;
    b.bx = a.bx; b.by = a.by; b.bz = a.bz; b.tx = a.tx; b.ty = a.ty; b.tz = a.tz;
  }

  // Elleri kabzaya kilitler; dirsekler IK ile aşağı-dışa bakar.
  applyArms() {
    if (!this.hasSword) return;
    const L = this.local, S = this.S, d = this.d;
    const g = this.lg, dir = this.ld;
    const arms = [
      [J.RSH, J.RELB, J.RHAND, 0.05 * S, 0.8],
      [J.LSH, J.LELB, J.LHAND, -0.065 * S, -0.8],
    ];
    for (const [iS, iE, iH, off, px] of arms) {
      const hx = g[0] + dir[0] * off, hy = g[1] + dir[1] * off, hz = g[2] + dir[2] * off;
      ik2(L[iS * 3], L[iS * 3 + 1], L[iS * 3 + 2], hx, hy, hz, d.ua, d.fa, px, -1, -0.3, _ik);
      L[iE * 3] = _ik[0]; L[iE * 3 + 1] = _ik[1]; L[iE * 3 + 2] = _ik[2];
      L[iH * 3] = hx; L[iH * 3 + 1] = hy; L[iH * 3 + 2] = hz;
    }
  }

  // Kılıç ellerden birine bağlı kaldıkça tutulur; iki el de koparsa düşer.
  checkGrip() {
    if (!this.hasSword) return;
    const p = this.rag.pts;
    if (!p[J.LHAND].attached && !p[J.RHAND].attached) this.game.dropSword(this);
  }

  die() {
    if (!this.alive) return;
    this.alive = false;
    this.swing = null;
    this.episode = null;
    this.plan = null;
    this.deathT = this.game.time;
    this.rag.kill();
    if (this.hasSword) this.game.dropSword(this);
  }

  dispose(scene) {
    this.view.dispose(scene);
  }
}
