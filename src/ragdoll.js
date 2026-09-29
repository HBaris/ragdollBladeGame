import { GRAVITY, clamp, lerp, segSeg, ptSeg, segOut, ptOut } from './util.js';

// 3D Verlet ragdoll: noktalar + mesafe kısıtları. Canlıyken her eklem animasyon
// pozundaki hedefine yayla (kas) çekilir, pelvis ve eller kontrolcüye/kılıca
// sabitlenir. Ölünce kaslar gevşer. Kesmek = bir kemiği ikiye bölmek; iskelet
// ağaç olduğu için her kesik vücudu iki parçaya ayırır.

export const J = {
  HEAD: 0, NECK: 1, PELVIS: 2,
  LSH: 3, LELB: 4, LHAND: 5,
  RSH: 6, RELB: 7, RHAND: 8,
  LHIP: 9, LKNEE: 10, LFOOT: 11,
  RHIP: 12, RKNEE: 13, RFOOT: 14,
  SPINE: 15, // bel: omurga buradan bükülür
};
export const JOINTS = 16;
// Kas sertliği ve sönüm çarpanları. Üst gövde (kafa, boyun, omuzlar) yumuşak ve az
// sönümlü: hızlanınca, dönünce, durunca geride kalıp sallanır; kılıcı tutan eller onu
// peşinden sürükler. Bacaklar sert kalır ki ayaklar yere bassın.
// Pelvis çivili değil, güçlü bir yayla kontrolcüyü izler: vurulunca, zıplayınca bütün gövde
// sarsılır. Bacaklar da gevşek: dizler titrer, ayaklar sürüklenir.
const JOINT_K = [0.3, 0.3, 1.4, 0.3, 0.45, 0.8, 0.3, 0.45, 0.8, 0.75, 0.4, 0.55, 0.75, 0.4, 0.55, 0.9];
const JOINT_C = [0.6, 0.9, 1.0, 0.9, 1.0, 1.0, 0.9, 1.0, 1.0, 0.8, 0.6, 0.6, 0.8, 0.6, 0.6, 1.0];
// Dikey sertlik çarpanı: üst gövde koşunun zıplamasını dikeyde sıkı takip eder (yoksa
// ataletiyle belden katlanır), öne/yana salınım ise yumuşak kalır.
const JOINT_KY = [3, 4, 1.5, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4];
const JOINT_R = [0.14, 0.07, 0.14, 0.08, 0.06, 0.06, 0.08, 0.06, 0.06, 0.09, 0.08, 0.07, 0.09, 0.08, 0.07, 0.15];
export const MIN_CUT_LEN = 0.12;
const ITERS = 5;

// a, b, yarıçap, tür[, profil a, profil b]. 'struct' kemikler görünmez ve kesilmez ama
// bağlantıyı taşır. Gövde iki parça: göğüs (boyun-bel) ve karın (bel-pelvis).
const BONE_DEFS = [
  [J.NECK, J.SPINE, 0.17, 'torso', 1, 0.5],
  [J.SPINE, J.PELVIS, 0.17, 'torso', 0.5, 0],
  [J.NECK, J.HEAD, 0.07, 'neck'],
  [J.NECK, J.LSH, 0, 'struct'],
  [J.NECK, J.RSH, 0, 'struct'],
  [J.LSH, J.RSH, 0, 'struct'],
  [J.PELVIS, J.LHIP, 0, 'struct'],
  [J.PELVIS, J.RHIP, 0, 'struct'],
  [J.LHIP, J.RHIP, 0, 'struct'],
  [J.LSH, J.LELB, 0.068, 'arm'],
  [J.LELB, J.LHAND, 0.06, 'arm'],
  [J.RSH, J.RELB, 0.068, 'arm'],
  [J.RELB, J.RHAND, 0.06, 'arm'],
  [J.LHIP, J.LKNEE, 0.092, 'leg'],
  [J.LKNEE, J.LFOOT, 0.074, 'leg'],
  [J.RHIP, J.RKNEE, 0.092, 'leg'],
  [J.RKNEE, J.RFOOT, 0.074, 'leg'],
];

export function dims(S) {
  return {
    spine: 0.52 * S, neck: 0.24 * S, shW: 0.2 * S, hipW: 0.11 * S,
    ua: 0.29 * S, fa: 0.27 * S, th: 0.44 * S, sh: 0.43 * S, headR: 0.14 * S,
  };
}

function newPoint(x, y, z, r, k, c = 1, ky = 1) {
  return { x, y, z, px: x, py: y, pz: z, r, k, c, ky, im: 1, pin: false, attached: true, stump: false, stumpR: 0 };
}

let nextId = 1;

export class Ragdoll {
  // world: eklemlerin başlangıç dünya konumları (x,y,z sıralı).
  constructor(S, world, opt) {
    this.id = nextId++;
    this.S = S;
    this.d = dims(S);
    this.kBase = opt.k;
    this.cBase = opt.c;
    this.alive = true;
    this.muscle = 1;
    this.impact = 0;
    this.removed = false;
    this.version = 0; // kesik oldukça artar; görünüm yeniden eşitlenir
    this.pts = [];
    this.bones = [];
    this.aux = [];
    this.comp = null;
    this.tgt = new Float32Array(JOINTS * 3);
    this.cvx = 0; this.cvy = 0; this.cvz = 0;
    for (let i = 0; i < JOINTS; i++) {
      const x = world[i * 3], y = world[i * 3 + 1], z = world[i * 3 + 2];
      this.pts.push(newPoint(x, y, z, JOINT_R[i] * S, JOINT_K[i], JOINT_C[i], JOINT_KY[i]));
      this.tgt[i * 3] = x; this.tgt[i * 3 + 1] = y; this.tgt[i * 3 + 2] = z;
    }
    this.pts[J.HEAD].r = this.d.headR;
    this.pts[J.HEAD].im = 0.8;
    this.pts[J.PELVIS].pin = false; // yayla bağlı (JOINT_K), çivili değil
    for (const [a, b, r, kind, sa, sb] of BONE_DEFS) this.addBone(a, b, r * S, kind, sa, sb);
    // Göğüs (omuzlar-boyun-bel) ve karın (kalçalar-pelvis-bel) kendi içinde sağlam; bel
    // ise bilye eklem gibi her yöne bükülür ve burulur. Sırtın tamamen katlanmasını sadece
    // "en az" kısıtları önler.
    this.addAux(J.LSH, J.SPINE, false);
    this.addAux(J.RSH, J.SPINE, false);
    this.addAux(J.LHIP, J.SPINE, false);
    this.addAux(J.RHIP, J.SPINE, false);
    this.addAux(J.NECK, J.PELVIS, true, 0.8);
    this.addAux(J.LSH, J.PELVIS, true, 0.78);
    this.addAux(J.RSH, J.PELVIS, true, 0.78);
    // Kafa gövdeye/omuzlara gömülmesin.
    this.addAux(J.HEAD, J.PELVIS, true, 0.8);
    this.addAux(J.HEAD, J.LSH, true, 0.9);
    this.addAux(J.HEAD, J.RSH, true, 0.9);
    this.updateConnectivity();
  }

  // sa/sb: kemiğin a ve b uçlarının profil parametresi (görünüm kalınlık profili için;
  // kesilince her parça profilin kendi aralığını taşır).
  addBone(a, b, r, kind, sa = 0, sb = 1) {
    const A = this.pts[a], B = this.pts[b];
    this.bones.push({ a, b, r, kind, sa, sb, len: Math.hypot(B.x - A.x, B.y - A.y, B.z - A.z), vis: kind !== 'struct', part: a * 100 + b });
  }

  addAux(a, b, minOnly, scale = 1) {
    const A = this.pts[a], B = this.pts[b];
    this.aux.push({ a, b, min: minOnly, len: Math.hypot(B.x - A.x, B.y - A.y, B.z - A.z) * scale });
  }

  setVel(cvx, cvy, cvz) { this.cvx = cvx; this.cvy = cvy; this.cvz = cvz; }

  // Zaman düzeltmeli Verlet: dt kareden kareye değişebilir (ağır çekim).
  step(dt, dtPrev, env) {
    const ratio = dtPrev > 0 ? dt / dtPrev : 1;
    const pts = this.pts, alive = this.alive;
    const m = alive ? this.muscle : 0;
    const k0 = this.kBase * m, c0 = this.cBase * Math.min(1, m * 1.5);
    const dt2 = dt * dt, inv = 1 / dt;
    const water = env.waterY;

    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      let vx = (p.x - p.px) * ratio, vy = (p.y - p.py) * ratio, vz = (p.z - p.pz) * ratio;
      p.px = p.x; p.py = p.y; p.pz = p.z;
      let ay = -GRAVITY;
      if (p.y < water) {
        // Suda: güçlü sürtünme ve kaldırma kuvveti, cesetler yüzer.
        const f = Math.exp(-4 * dt);
        vx *= f; vy *= f; vz *= f;
        ay += GRAVITY * clamp((water - p.y) * 6, 0, 1.6);
      } else {
        vx *= 0.999; vy *= 0.999; vz *= 0.999;
      }
      if (alive && p.attached && i < JOINTS) {
        const tx = this.tgt[i * 3], ty = this.tgt[i * 3 + 1], tz = this.tgt[i * 3 + 2];
        if (p.pin) { p.x = tx; p.y = ty; p.z = tz; continue; }
        if (m > 0) {
          const k = k0 * p.k, c = c0 * p.c;
          const ax = (tx - p.x) * k - (vx * inv - this.cvx) * c;
          ay += (ty - p.y) * k * p.ky - (vy * inv - this.cvy) * c * Math.sqrt(p.ky);
          const az = (tz - p.z) * k - (vz * inv - this.cvz) * c;
          p.x += vx + ax * dt2; p.y += vy + ay * dt2; p.z += vz + az * dt2;
          continue;
        }
      }
      p.x += vx; p.y += vy + ay * dt2; p.z += vz;
    }

    for (let it = 0; it < ITERS; it++) {
      for (let i = 0; i < this.bones.length; i++) {
        const b = this.bones[i];
        this.solve(b.a, b.b, b.len, false);
      }
      for (let i = 0; i < this.aux.length; i++) {
        const a = this.aux[i];
        this.solve(a.a, a.b, a.len, a.min);
      }
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const g = env.ground(p.x, p.z);
        // Kenardan düşmüş (zeminin altındaki) noktayı yukarı ışınlama.
        if (p.y < g + p.r && p.py > g - 0.25) p.y = g + p.r;
      }
    }

    const fr = alive ? 0.7 : 0.86;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      const g = env.ground(p.x, p.z);
      if (p.y > g + p.r + 0.002 || p.py < g - 0.25) continue;
      const vy = p.y - p.py;
      if (vy < 0) {
        if (-vy * inv > this.impact) this.impact = -vy * inv;
        p.py = p.y + vy * 0.2;
      }
      p.px = p.x - (p.x - p.px) * fr;
      p.pz = p.z - (p.z - p.pz) * fr;
    }
  }

  invMass(p) {
    return this.alive && p.pin && p.attached ? 0 : p.im;
  }

  solve(ia, ib, len, minOnly) {
    const A = this.pts[ia], B = this.pts[ib];
    const dx = B.x - A.x, dy = B.y - A.y, dz = B.z - A.z;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (d < 1e-7 || (minOnly && d >= len)) return;
    const wa = this.invMass(A), wb = this.invMass(B), w = wa + wb;
    if (w === 0) return;
    const f = (d - len) / (d * w);
    A.x += dx * f * wa; A.y += dy * f * wa; A.z += dz * f * wa;
    B.x -= dx * f * wb; B.y -= dy * f * wb; B.z -= dz * f * wb;
  }

  kill() { this.alive = false; }

  neighborOf(i, visibleOnly = true) {
    for (const b of this.bones) {
      if (visibleOnly && !b.vis) continue;
      if (b.a === i) return b.b;
      if (b.b === i) return b.a;
    }
    return -1;
  }

  boneWith(i) {
    for (let k = 0; k < this.bones.length; k++) {
      const b = this.bones[k];
      if (b.vis && (b.a === i || b.b === i)) return k;
    }
    return -1;
  }

  updateConnectivity() {
    const n = this.pts.length;
    const adj = [];
    for (let i = 0; i < n; i++) adj.push([]);
    for (const b of this.bones) { adj[b.a].push(b.b); adj[b.b].push(b.a); }
    const comp = new Int32Array(n).fill(-1);
    let c = 0;
    const stack = [];
    for (let s = 0; s < n; s++) {
      if (comp[s] >= 0) continue;
      comp[s] = c; stack.push(s);
      while (stack.length) {
        const v = stack.pop();
        for (const w of adj[v]) if (comp[w] < 0) { comp[w] = c; stack.push(w); }
      }
      c++;
    }
    const pc = comp[J.PELVIS];
    for (let i = 0; i < n; i++) this.pts[i].attached = comp[i] === pc;
    this.aux = this.aux.filter((a) => comp[a.a] === comp[a.b]);
    this.comp = comp;
  }

  compSize(c) {
    let n = 0;
    for (let i = 0; i < this.comp.length; i++) if (this.comp[i] === c) n++;
    return n;
  }

  // bi numaralı kemiği u oranında keser, iki yeni güdük noktası ekler.
  cut(bi, u) {
    const b = this.bones[bi];
    u = clamp(u, 0.18, 0.82);
    const A = this.pts[b.a], B = this.pts[b.b];
    const mk = () => {
      const p = newPoint(lerp(A.x, B.x, u), lerp(A.y, B.y, u), lerp(A.z, B.z, u), b.r * 0.9, 0);
      p.px = lerp(A.px, B.px, u); p.py = lerp(A.py, B.py, u); p.pz = lerp(A.pz, B.pz, u);
      p.stump = true;
      p.stumpR = b.r;
      return p;
    };
    const i1 = this.pts.push(mk()) - 1;
    const i2 = this.pts.push(mk()) - 1;
    const sc = lerp(b.sa, b.sb, u);
    const b1 = Object.assign({}, b, { b: i1, len: b.len * u, sb: sc });
    const b2 = Object.assign({}, b, { a: i2, len: b.len * (1 - u), sa: sc });
    this.bones.splice(bi, 1, b1, b2);
    this.updateConnectivity();
    this.version++;
    const p = this.pts[i1];
    return { i1, i2, x: p.x, y: p.y, z: p.z, kind: b.kind };
  }

  addVel(vx, vy, vz, dt, comp) {
    for (let i = 0; i < this.pts.length; i++) {
      if (comp !== undefined && this.comp[i] !== comp) continue;
      const p = this.pts[i];
      p.px -= vx * dt; p.py -= vy * dt; p.pz -= vz * dt;
    }
  }

  // w: açısal hız vektörü (rad/s), kütle merkezi etrafında.
  addSpin(wx, wy, wz, dt) {
    let cx = 0, cy = 0, cz = 0;
    for (const p of this.pts) { cx += p.x; cy += p.y; cz += p.z; }
    const n = this.pts.length;
    cx /= n; cy /= n; cz /= n;
    for (const p of this.pts) {
      const rx = p.x - cx, ry = p.y - cy, rz = p.z - cz;
      p.px -= (wy * rz - wz * ry) * dt;
      p.py -= (wz * rx - wx * rz) * dt;
      p.pz -= (wx * ry - wy * rx) * dt;
    }
  }

  bounds(out) {
    let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
    for (const p of this.pts) {
      if (p.x - p.r < x0) x0 = p.x - p.r;
      if (p.x + p.r > x1) x1 = p.x + p.r;
      if (p.y - p.r < y0) y0 = p.y - p.r;
      if (p.y + p.r > y1) y1 = p.y + p.r;
      if (p.z - p.r < z0) z0 = p.z - p.r;
      if (p.z + p.r > z1) z1 = p.z + p.r;
    }
    out.x0 = x0; out.y0 = y0; out.z0 = z0; out.x1 = x1; out.y1 = y1; out.z1 = z1;
    return out;
  }

  center() {
    const p = this.pts[J.PELVIS];
    return p;
  }
}

// Kılıç süpürmesi (önceki bıçak -> şimdiki bıçak) ile ragdoll'un ilk teması.
// pb/cb: { bx,by,bz (kabza tarafı), tx,ty,tz (uç) }
export function sweepRagdoll(rag, pb, cb, steps) {
  const bones = rag.bones, pts = rag.pts;
  const head = pts[J.HEAD], hr = rag.d.headR;
  for (let s = 1; s <= steps; s++) {
    const f = s / steps;
    const bx = lerp(pb.bx, cb.bx, f), by = lerp(pb.by, cb.by, f), bz = lerp(pb.bz, cb.bz, f);
    const tx = lerp(pb.tx, cb.tx, f), ty = lerp(pb.ty, cb.ty, f), tz = lerp(pb.tz, cb.tz, f);
    let best = null, bestD = Infinity;
    for (let i = 0; i < bones.length; i++) {
      const b = bones[i];
      if (!b.vis) continue;
      const A = pts[b.a], B = pts[b.b];
      segSeg(bx, by, bz, tx, ty, tz, A.x, A.y, A.z, B.x, B.y, B.z);
      const r = b.r + 0.02;
      if (segOut.d2 < r * r && segOut.d2 < bestD) {
        bestD = segOut.d2;
        best = { bone: i, u: segOut.t, t: segOut.s, x: lerp(A.x, B.x, segOut.t), y: lerp(A.y, B.y, segOut.t), z: lerp(A.z, B.z, segOut.t), head: false };
      }
    }
    ptSeg(head.x, head.y, head.z, bx, by, bz, tx, ty, tz);
    if (ptOut.d2 < hr * hr && ptOut.d2 < bestD) best = { bone: -1, u: 0.5, t: ptOut.t, x: head.x, y: head.y, z: head.z, head: true };
    if (best) return best;
  }
  return null;
}

// İki kılıcın süpürme boyunca çarpışıp çarpışmadığı.
export function sweepBlade(pb, cb, o, steps, rad) {
  const r2 = rad * rad;
  for (let s = 1; s <= steps; s++) {
    const f = s / steps;
    segSeg(lerp(pb.bx, cb.bx, f), lerp(pb.by, cb.by, f), lerp(pb.bz, cb.bz, f),
      lerp(pb.tx, cb.tx, f), lerp(pb.ty, cb.ty, f), lerp(pb.tz, cb.tz, f),
      o.bx, o.by, o.bz, o.tx, o.ty, o.tz);
    if (segOut.d2 < r2) return { x: lerp(o.bx, o.tx, segOut.t), y: lerp(o.by, o.ty, segOut.t), z: lerp(o.bz, o.tz, segOut.t) };
  }
  return null;
}
