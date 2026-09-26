import { GRAVITY, clamp, lerp, rand, pick, damp, easeOutQuad, easeInOut, angApproach } from './util.js';
import { Ragdoll, J, JOINTS, dims } from './ragdoll.js';
import { makePose, blendPose, approachPose, POSES, poseFK, ik2 } from './pose.js';
import { createSwordMesh, BLADE_START } from './sword.js';
import { CharacterView } from './view.js';

export const PLAYER_SPEED = 4.6;
export const BLADE_LEN = 0.95;
const A0 = -1.95, A1 = 1.7; // savuruş yayı (radyan), kaydırma yönünde
const STRIDE = 1.5;

// Düşman savuruşları: bıçak ucunun gideceği yön (yerel x sağ, y yukarı).
const ENEMY_SWINGS = [[1, 0], [-1, 0], [0, -1], [0.7, -0.7], [-0.7, -0.7], [0.75, 0.5], [-0.75, 0.5]];

const _a = makePose(), _b = makePose(), _c = makePose();
const _ik = [0, 0, 0, 0, 0, 0];

export class Character {
  constructor(game, o) {
    this.game = game;
    this.isPlayer = o.team === 'player';
    this.S = o.scale || 1;
    this.x = o.x; this.z = o.z; this.y = 0;
    this.vx = 0; this.vz = 0; this.vy = 0;
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
    this.swing = null;
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
    this.swordMesh = createSwordMesh(BLADE_LEN);
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
    if (this.isPlayer) this.thinkPlayer(); else this.thinkEnemy(dt);
    this.move(dt);
    if (!this.alive) return;
    if (this.swing) {
      this.swing.t += dt;
      const s = this.swing;
      if (s.t >= s.wind + s.dur + s.rec) this.swing = null;
    }
    this.rag.muscle = this.hurtT > 0 ? 0.2 : this.stun > 0 ? 0.55 : 1;
    this.animate(dt);
  }

  canSwing() {
    const s = this.swing;
    if (this.stun > 0 || !this.hasSword) return false;
    // Savuruş iptal edilemez: aktif kısım + kısa toparlanma bitmeden yenisi başlamaz.
    return !s || s.t >= s.wind + s.dur + s.rec * 0.35;
  }

  // (ux, uy): bıçak ucunun ekranda/yerelde gideceği yön.
  startSwing(ux, uy, fast) {
    const l = Math.hypot(ux, uy) || 1;
    ux /= l; uy /= l;
    const sk = this.skill;
    this.swing = {
      t: 0, ux, uy, a0: A0, a1: A1,
      wind: fast ? 0.05 : lerp(0.62, 0.24, sk) * (this.counterT > 0 ? 0.6 : 1),
      dur: fast ? 0.2 : 0.24,
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

  // Vuruşların sayıldığı an: aktif savuruş (+ küçük tolerans).
  get swingActive() {
    const s = this.swing;
    return !!s && s.t > s.wind && s.t <= s.wind + s.dur + 0.02;
  }

  thinkPlayer() {
    const g = this.game, inp = g.input;
    const mv = inp.move();
    const cs = Math.sin(g.camYaw), cc = Math.cos(g.camYaw);
    // Kamera ileri = (sin, 0, cos), sağ = (-cos, 0, sin).
    const wx = cs * mv.y - cc * mv.x, wz = cc * mv.y + cs * mv.x;
    this.want.x = wx * PLAYER_SPEED;
    this.want.z = wz * PLAYER_SPEED;
    const tgt = g.nearestEnemy(this, 14);
    let face = null;
    if (tgt) {
      const dist = Math.hypot(tgt.x - this.x, tgt.z - this.z);
      if (dist < 5 || mv.mag < 0.1 || this.swing) face = Math.atan2(tgt.x - this.x, tgt.z - this.z);
    }
    if (face === null && mv.mag > 0.1) face = Math.atan2(wx, wz);
    if (face !== null) this.faceYaw = face;
    const req = inp.takeSwing();
    if (req) {
      if (this.canSwing()) this.startSwing(req.x, req.y, true);
      else inp.requeue(req);
    }
  }

  thinkEnemy(dt) {
    const g = this.game, pl = g.player;
    const dx = pl.x - this.x, dz = pl.z - this.z;
    const dist = Math.hypot(dx, dz) || 1;
    this.want.x = 0; this.want.z = 0;
    this.faceYaw = Math.atan2(dx, dz);
    if (g.time < 0.8) return; // seviye başında kısa bir nefes
    this.timer -= dt;
    this.cool -= dt;
    const engage = 1.3 * this.S;
    if (!pl.alive && this.state !== 'panic') this.state = 'cheer';
    switch (this.state) {
      case 'approach':
        if (dist > engage + 0.2) { this.want.x = dx / dist * this.speed; this.want.z = dz / dist * this.speed; } else this.state = 'fight';
        break;
      case 'fight': {
        // Yanlara kayarak mesafeyi korur, sırası gelince saldırır.
        if (this.timer <= 0) { this.strafeDir *= -1; this.timer = rand(0.8, 1.8); }
        const px = dz / dist, pz = -dx / dist;
        const close = dist - engage;
        const s = 0.9 + this.skill * 0.6;
        // Diğer düşmanlardan açısal olarak uzaklaş: oyuncuyu çevreleyip yandan/arkadan gelirler.
        const my = Math.atan2(-dx, -dz);
        let spread = 0;
        for (const o of g.enemies) {
          if (o === this || !o.alive || o.state === 'panic') continue;
          const da = Math.atan2(o.x - pl.x, o.z - pl.z) - my;
          const w = Math.atan2(Math.sin(da), Math.cos(da));
          if (Math.abs(w) < 1.6) spread -= Math.sign(w) * (1.6 - Math.abs(w));
        }
        const tang = this.strafeDir * s * 0.6 + spread * (1.2 + this.skill * 1.5);
        this.want.x = px * -tang + dx / dist * clamp(close * 3, -2, this.speed);
        this.want.z = pz * -tang + dz / dist * clamp(close * 3, -2, this.speed);
        // Blok sonrası karşı saldırı jeton beklemez.
        if ((this.counterT > 0 && dist < engage + 0.5) || (this.cool <= 0 && dist < engage + 0.35 + this.skill * 0.5 && g.takeAttackToken(this))) {
          const [ux, uy] = pick(ENEMY_SWINGS);
          this.startSwing(ux, uy, false);
          this.state = 'attack';
        }
        break;
      }
      case 'attack':
        if (!this.swing) { this.state = 'fight'; this.cool = rand(0.5, 1.3) * lerp(1.3, 0.55, this.skill); }
        else if (this.swingMode() >= 1 && this.swingMode() <= 2 && dist > engage * 0.8) {
          // Hamle: saldırırken araya giren mesafeyi kapatır.
          const ls = 1.5 + this.skill * 1.8;
          this.want.x = dx / dist * ls; this.want.z = dz / dist * ls;
        }
        break;
      case 'stagger':
        if (this.stun <= 0) { this.state = 'fight'; this.cool = rand(0.2, 0.6); }
        break;
      case 'panic': {
        // Silahsız kaçış: oyuncudan yavaş, yakalanabilir.
        const sp = Math.min(this.speed * 1.2, 3.6);
        this.want.x = -dx / dist * sp;
        this.want.z = -dz / dist * sp;
        this.faceYaw = Math.atan2(-dx, -dz);
        break;
      }
      case 'cheer':
        if (this.y <= 0 && !this.falling && Math.random() < dt * 2.2) this.vy = rand(3.2, 4.5);
        break;
    }
  }

  move(dt) {
    const env = this.game.world;
    let wx = this.want.x, wz = this.want.z;
    if (this.swingMode() === 2 && this.isPlayer) { wx *= 0.45; wz *= 0.45; }
    if (this.stun > 0 || this.hurtT > 0) { wx *= 0.2; wz *= 0.2; }
    if (this.kb > 0) {
      const f = Math.exp(-5 * dt);
      this.vx *= f; this.vz *= f;
    } else {
      const acc = (this.isPlayer ? 32 : 14) * dt;
      const ddx = wx - this.vx, ddz = wz - this.vz, dl = Math.hypot(ddx, ddz);
      if (dl > acc) { this.vx += ddx / dl * acc; this.vz += ddz / dl * acc; } else { this.vx = wx; this.vz = wz; }
    }
    if (!this.falling) {
      const nx = this.x + this.vx * dt, nz = this.z + this.vz * dt;
      const m = 0.35 * this.S;
      if (env.inside(nx, nz, m) || (this.kb > 0 && env.canFall)) { this.x = nx; this.z = nz; } else if (env.inside(nx, this.z, m)) { this.x = nx; this.vz = 0; } else if (env.inside(this.x, nz, m)) { this.z = nz; this.vx = 0; } else { this.vx = 0; this.vz = 0; }
      if (env.ground(this.x, this.z) === -Infinity) this.falling = true;
    } else {
      this.x += this.vx * dt; this.z += this.vz * dt;
    }
    if (this.falling || this.y > 0 || this.vy > 0) {
      this.vy -= GRAVITY * dt;
      this.y += this.vy * dt;
      if (!this.falling && this.y <= 0) { this.y = 0; this.vy = 0; }
    }
    if (this.falling && this.y < -0.9) this.game.onFell(this);
    const turn = (this.isPlayer ? 14 : 7) * dt;
    this.yaw = angApproach(this.yaw, this.faceYaw, turn);
    const sp = Math.hypot(this.vx, this.vz);
    const back = this.vx * this.forwardX + this.vz * this.forwardZ < -0.3 * sp ? -1 : 1;
    this.phase += back * sp * dt / STRIDE * Math.PI * 2;
  }

  // ---------- animasyon ----------

  animate(dt) {
    const P = this.tpose;
    const sp = Math.hypot(this.vx, this.vz);
    if (this.y > 0.05 || this.falling) POSES.air(P, this.t);
    else blendPose(P, POSES.guard(_a, this.t), POSES.run(_b, this.phase), clamp(sp / (this.isPlayer ? 3.2 : 2), 0, 1));

    // Savuruşun gövdeye etkisi: burulma ve hamle adımı.
    const mode = this.swingMode(), s = this.swing;
    let twist = 0, lunge = 0;
    if (mode) {
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
    approachPose(this.pose, P, damp(mode === 2 ? 28 : 12, dt));
    poseFK(this.pose, this.d, this.local, this.footR);
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
    if (this.blockT > 0 && !mode) {
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
    const b0 = BLADE_START * S, b1 = (BLADE_START + BLADE_LEN) * S;
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
    this.deathT = this.game.time;
    this.rag.kill();
    if (this.hasSword) this.game.dropSword(this);
  }

  dispose(scene) {
    this.view.dispose(scene);
  }
}
