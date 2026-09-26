'use strict';

// Verlet ragdoll: noktalar + mesafe kısıtları (kemikler).
// Canlıyken her eklem, animasyon pozundan gelen hedefe yay (kas) ile çekilir;
// ölünce kas sıfırlanır ve vücut tamamen serbest kalır. Kesmek = bir kemiği
// ikiye bölmek; iskelet ağaç olduğu için her kesik vücudu iki parçaya ayırır.

const J = {
  HEAD: 0, NECK: 1, PELVIS: 2,
  BELB: 3, BHAND: 4, FELB: 5, FHAND: 6, // B = arka, F = ön (bakış yönüne göre)
  BKNEE: 7, BFOOT: 8, FKNEE: 9, FFOOT: 10,
};
const JOINTS = 11;
const JOINT_K = [0.55, 1.0, 1.0, 0.45, 0.7, 0.6, 1.0, 0.8, 1.1, 0.8, 1.1];
const JOINT_R = [8, 3, 4, 3, 3, 3, 3, 3, 3.5, 3, 3.5];
const MIN_CUT_LEN = 7;
const SOLVER_ITERS = 4;

// a, b, kalınlık, katman (0 arka, 1 gövde, 2 ön), tür
const BONE_DEFS = [
  [J.NECK, J.BELB, 4.5, 0, 'arm'],
  [J.BELB, J.BHAND, 4, 0, 'arm'],
  [J.PELVIS, J.BKNEE, 5.5, 0, 'leg'],
  [J.BKNEE, J.BFOOT, 5, 0, 'leg'],
  [J.NECK, J.PELVIS, 7.5, 1, 'torso'],
  [J.NECK, J.HEAD, 4, 1, 'neck'],
  [J.PELVIS, J.FKNEE, 5.5, 2, 'leg'],
  [J.FKNEE, J.FFOOT, 5, 2, 'leg'],
  [J.NECK, J.FELB, 4.5, 2, 'arm'],
  [J.FELB, J.FHAND, 4, 2, 'arm'],
];

const POSE_KEYS = ['lean', 'head', 'bUA', 'bFA', 'fUA', 'fFA', 'bTh', 'bSh', 'fTh', 'fSh', 'py'];

function makePose() {
  return { lean: 0, head: 0, bUA: 0, bFA: 0, fUA: 0, fFA: 0, bTh: 0, bSh: 0, fTh: 0, fSh: 0, py: 0 };
}
function copyPose(out, a) { for (const k of POSE_KEYS) out[k] = a[k]; return out; }
function blendPose(out, a, b, t) { for (const k of POSE_KEYS) out[k] = a[k] + (b[k] - a[k]) * t; return out; }
function approachPose(cur, tgt, f) { for (const k of POSE_KEYS) cur[k] += (tgt[k] - cur[k]) * f; }

function putXY(out, i, x, y) { out[i * 2] = x; out[i * 2 + 1] = y; }

// İleri kinematik. Poz açıları dikey-aşağıdan ölçülür, pozitif = ileri.
// Çıktı pelvise göre yereldir (x ileri, y aşağı).
function poseFK(p, d, out, rot, rcx, rcy) {
  const nx = Math.sin(p.lean) * d.torso, ny = -Math.cos(p.lean) * d.torso;
  const ha = p.lean + p.head;
  putXY(out, J.PELVIS, 0, 0);
  putXY(out, J.NECK, nx, ny);
  putXY(out, J.HEAD, nx + Math.sin(ha) * d.neck, ny - Math.cos(ha) * d.neck);
  fkLimb(out, J.BELB, J.BHAND, nx, ny, p.bUA, p.bUA + p.bFA, d.ua, d.fa);
  fkLimb(out, J.FELB, J.FHAND, nx, ny, p.fUA, p.fUA + p.fFA, d.ua, d.fa);
  fkLimb(out, J.BKNEE, J.BFOOT, 0, 0, p.bTh, p.bTh - p.bSh, d.th, d.sh);
  fkLimb(out, J.FKNEE, J.FFOOT, 0, 0, p.fTh, p.fTh - p.fSh, d.th, d.sh);
  if (rot) {
    const c = Math.cos(rot), s = Math.sin(rot);
    for (let i = 0; i < JOINTS; i++) {
      const x = out[i * 2] - rcx, y = out[i * 2 + 1] - rcy;
      out[i * 2] = rcx + x * c - y * s;
      out[i * 2 + 1] = rcy + x * s + y * c;
    }
  }
}

function fkLimb(out, i1, i2, ox, oy, a1, a2, l1, l2) {
  const x1 = ox + Math.sin(a1) * l1, y1 = oy + Math.cos(a1) * l1;
  putXY(out, i1, x1, y1);
  putXY(out, i2, x1 + Math.sin(a2) * l2, y1 + Math.cos(a2) * l2);
}

function newPoint(x, y, r, k) {
  return { x, y, px: x, py: y, r, k, im: 1, pin: false, kin: false, attached: true, stump: false, stumpW: 0 };
}

class Ragdoll {
  constructor(x, y, S, opt) {
    this.S = S;
    this.d = { torso: 28 * S, neck: 12 * S, ua: 15 * S, fa: 14 * S, th: 17 * S, sh: 17 * S, head: 8 * S };
    this.col = opt.col;
    this.colBack = opt.colBack;
    this.kBase = opt.k;
    this.cBase = opt.c;
    this.alive = true;
    this.muscle = 1;
    this.facing = 1;
    this.alpha = 1;
    this.flash = 0;
    this.impact = 0;
    this.removed = false;
    this.pts = [];
    this.bones = [];
    this.aux = [];
    this.comp = null;
    this.tgt = new Float32Array(JOINTS * 2);
    this.cvx = 0;
    this.cvy = 0;
    this.tipIdx = -1;
    this.tipKin = false;

    const stand = makePose();
    stand.bTh = -0.15; stand.fTh = 0.15; stand.bUA = -0.2; stand.fUA = 0.2;
    const local = new Float32Array(JOINTS * 2);
    poseFK(stand, this.d, local, 0, 0, 0);
    for (let i = 0; i < JOINTS; i++) {
      this.pts.push(newPoint(x + local[i * 2], y + local[i * 2 + 1], JOINT_R[i] * S, JOINT_K[i]));
      this.tgt[i * 2] = x + local[i * 2];
      this.tgt[i * 2 + 1] = y + local[i * 2 + 1];
    }
    this.pts[J.HEAD].r = this.d.head;
    this.pts[J.HEAD].im = 0.8;
    this.pts[J.PELVIS].pin = true;
    for (const [a, b, w, layer, kind] of BONE_DEFS) this.addBone(a, b, w * S, layer, kind);
    // Kafanın leğen kemiğine gömülmesini engelleyen görünmez "en az" kısıtı.
    this.aux.push({ a: J.HEAD, b: J.PELVIS, len: (this.d.torso + this.d.neck) * 0.8, min: true });
  }

  addBone(a, b, w, layer, kind) {
    const A = this.pts[a], B = this.pts[b];
    this.bones.push({ a, b, len: Math.hypot(B.x - A.x, B.y - A.y), w, layer, kind, cuttable: kind !== 'blade', vis: kind !== 'blade' });
  }

  // Ön ele bağlı kılıç ucu. Canlıyken ucu aktör kinematik olarak konumlar.
  addTip(len) {
    const H = this.pts[J.FHAND];
    const t = newPoint(H.x + len, H.y, 2 * this.S, 0);
    t.kin = true;
    t.im = 0.7;
    this.tipIdx = this.pts.push(t) - 1;
    this.bones.push({ a: J.FHAND, b: this.tipIdx, len, w: 0, layer: 3, kind: 'blade', cuttable: false, vis: false });
    this.tipKin = true;
  }

  drive(px, py, facing, local, cvx, cvy) {
    for (let i = 0; i < JOINTS; i++) {
      this.tgt[i * 2] = px + local[i * 2] * facing;
      this.tgt[i * 2 + 1] = py + local[i * 2 + 1];
    }
    this.cvx = cvx;
    this.cvy = cvy;
  }

  // Zaman düzeltmeli Verlet (dt kareden kareye değişebilir: ağır çekim için).
  step(dt, dtPrev) {
    const ratio = dtPrev > 0 ? dt / dtPrev : 1;
    const pts = this.pts, alive = this.alive;
    const m = alive ? this.muscle : 0;
    const k0 = this.kBase * m, c0 = this.cBase * Math.min(1, m * 1.5);
    const dt2 = dt * dt, invDt = 1 / dt;
    if (this.flash > 0) this.flash -= dt;

    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      if (p.kin) continue;
      const vx = (p.x - p.px) * ratio * 0.999, vy = (p.y - p.py) * ratio * 0.999;
      p.px = p.x; p.py = p.y;
      if (alive && p.attached && i < JOINTS) {
        const tx = this.tgt[i * 2], ty = this.tgt[i * 2 + 1];
        if (p.pin) { p.x = tx; p.y = ty; continue; }
        if (m > 0) {
          const k = k0 * p.k;
          const ax = (tx - p.x) * k - (vx * invDt - this.cvx) * c0;
          const ay = GRAVITY + (ty - p.y) * k - (vy * invDt - this.cvy) * c0;
          p.x += vx + ax * dt2;
          p.y += vy + ay * dt2;
          continue;
        }
      }
      p.x += vx;
      p.y += vy + GRAVITY * dt2;
    }

    for (let it = 0; it < SOLVER_ITERS; it++) {
      for (let i = 0; i < this.bones.length; i++) {
        const b = this.bones[i];
        if (b.kind === 'blade' && this.tipKin) continue;
        this.solve(b.a, b.b, b.len, false);
      }
      for (let i = 0; i < this.aux.length; i++) {
        const a = this.aux[i];
        this.solve(a.a, a.b, a.len, a.min);
      }
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (!p.kin && p.y > GROUND_Y - p.r) p.y = GROUND_Y - p.r;
      }
    }

    // Zemin sürtünmesi ve sekme: iterasyonlardan sonra bir kez.
    const fr = alive ? 0.75 : 0.88;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      if (p.kin || p.y < GROUND_Y - p.r - 0.01) continue;
      const vy = p.y - p.py;
      if (vy > 0) {
        if (vy * invDt > this.impact) this.impact = vy * invDt;
        p.py = p.y + vy * 0.25;
      }
      p.px = p.x - (p.x - p.px) * fr;
    }
  }

  invMass(p) {
    if (p.kin) return 0;
    if (this.alive && p.pin && p.attached) return 0;
    return p.im;
  }

  solve(ia, ib, len, minOnly) {
    const A = this.pts[ia], B = this.pts[ib];
    const dx = B.x - A.x, dy = B.y - A.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d < 1e-6 || (minOnly && d >= len)) return;
    const wa = this.invMass(A), wb = this.invMass(B), w = wa + wb;
    if (w === 0) return;
    const diff = (d - len) / (d * w);
    A.x += dx * diff * wa; A.y += dy * diff * wa;
    B.x -= dx * diff * wb; B.y -= dy * diff * wb;
  }

  kill() {
    if (!this.alive) return;
    this.alive = false;
    this.releaseTip();
  }

  // Kılıcı fiziğe bırakır; ön kol ile arasına sabit kısıt koyarak açısını korur.
  releaseTip() {
    if (this.tipIdx < 0 || !this.tipKin) return;
    this.tipKin = false;
    this.pts[this.tipIdx].kin = false;
    const nb = this.neighborOf(J.FHAND, this.tipIdx);
    if (nb >= 0) {
      const A = this.pts[nb], T = this.pts[this.tipIdx];
      this.aux.push({ a: nb, b: this.tipIdx, len: Math.hypot(T.x - A.x, T.y - A.y), min: false });
    }
    this.updateConnectivity();
  }

  neighborOf(i, exclude) {
    for (const b of this.bones) {
      if (b.a === i && b.b !== exclude) return b.b;
      if (b.b === i && b.a !== exclude) return b.a;
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
      comp[s] = c;
      stack.push(s);
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

  // bi numaralı kemiği u oranında (a->b) keser. İki yeni "güdük" noktası ekler.
  cut(bi, u) {
    const b = this.bones[bi];
    u = clamp(u, 0.2, 0.8);
    const A = this.pts[b.a], B = this.pts[b.b];
    const mk = () => {
      const p = newPoint(lerp(A.x, B.x, u), lerp(A.y, B.y, u), 2.5 * this.S, 0);
      p.px = lerp(A.px, B.px, u);
      p.py = lerp(A.py, B.py, u);
      p.stump = true;
      p.stumpW = b.w;
      return p;
    };
    const i1 = this.pts.push(mk()) - 1;
    const i2 = this.pts.push(mk()) - 1;
    const b1 = Object.assign({}, b, { b: i1, len: b.len * u });
    const b2 = Object.assign({}, b, { a: i2, len: b.len * (1 - u) });
    this.bones.splice(bi, 1, b1, b2);
    this.updateConnectivity();
    if (this.tipKin && !this.pts[J.FHAND].attached) this.releaseTip();
    return { i1, i2, x: this.pts[i1].x, y: this.pts[i1].y, kind: b.kind };
  }

  addVel(vx, vy, dt, comp) {
    for (let i = 0; i < this.pts.length; i++) {
      const p = this.pts[i];
      if (p.kin) continue;
      if (comp !== undefined && this.comp && this.comp[i] !== comp) continue;
      p.px -= vx * dt;
      p.py -= vy * dt;
    }
  }

  addSpin(w, dt) {
    let cx = 0, cy = 0, n = 0;
    for (const p of this.pts) if (!p.kin) { cx += p.x; cy += p.y; n++; }
    cx /= n; cy /= n;
    for (const p of this.pts) {
      if (p.kin) continue;
      p.px -= -(p.y - cy) * w * dt;
      p.py -= (p.x - cx) * w * dt;
    }
  }

  compSize(c) {
    let n = 0;
    for (let i = 0; i < this.comp.length; i++) if (this.comp[i] === c) n++;
    return n;
  }

  bounds() {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const p of this.pts) {
      if (p.x - p.r < x0) x0 = p.x - p.r;
      if (p.x + p.r > x1) x1 = p.x + p.r;
      if (p.y - p.r < y0) y0 = p.y - p.r;
      if (p.y + p.r > y1) y1 = p.y + p.r;
    }
    return { x0, y0, x1, y1 };
  }

  draw(ctx) {
    const pts = this.pts;
    const flash = this.flash > 0;
    ctx.globalAlpha = this.alpha;
    ctx.lineCap = 'round';
    for (let layer = 0; layer < 3; layer++) {
      ctx.strokeStyle = flash ? '#ffffff' : layer === 0 ? this.colBack : this.col;
      for (const b of this.bones) {
        if (!b.vis || b.layer !== layer) continue;
        const A = pts[b.a], B = pts[b.b];
        ctx.lineWidth = b.w;
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.stroke();
      }
      if (layer === 1) this.drawHead(ctx, flash);
    }
    ctx.fillStyle = '#b3001b';
    for (const p of pts) {
      if (!p.stump) continue;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.stumpW * 0.6, 0, TAU);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  drawHead(ctx, flash) {
    const h = this.pts[J.HEAD], r = this.d.head;
    ctx.fillStyle = flash ? '#ffffff' : this.col;
    ctx.beginPath();
    ctx.arc(h.x, h.y, r, 0, TAU);
    ctx.fill();
    // Göz: kafanın boyna göre yönüne bakarak yerleştirilir.
    const nb = this.neighborOf(J.HEAD, -1);
    let ux = 0, uy = -1;
    if (nb >= 0) {
      const n = this.pts[nb];
      const dx = h.x - n.x, dy = h.y - n.y, l = Math.hypot(dx, dy) || 1;
      ux = dx / l; uy = dy / l;
    }
    const f = this.facing;
    const ex = h.x + (-uy * f) * r * 0.45 + ux * r * 0.15;
    const ey = h.y + (ux * f) * r * 0.45 + uy * r * 0.15;
    ctx.strokeStyle = '#fff';
    ctx.fillStyle = '#fff';
    if (this.alive) {
      ctx.beginPath();
      ctx.arc(ex, ey, r * 0.2, 0, TAU);
      ctx.fill();
    } else {
      const s = r * 0.22;
      ctx.lineWidth = r * 0.14;
      ctx.beginPath();
      ctx.moveTo(ex - s, ey - s); ctx.lineTo(ex + s, ey + s);
      ctx.moveTo(ex + s, ey - s); ctx.lineTo(ex - s, ey + s);
      ctx.stroke();
    }
  }
}

// Bir kılıç süpürmesinin (önceki -> şimdiki bıçak) ragdoll kemiklerine ilk temasını bulur.
function sweepTest(rag, pb, H, T, steps) {
  const bones = rag.bones, pts = rag.pts;
  const head = pts[J.HEAD], hr = rag.d.head;
  for (let s = 1; s <= steps; s++) {
    const f = s / steps;
    const hx = lerp(pb.hx, H.x, f), hy = lerp(pb.hy, H.y, f);
    const tx = lerp(pb.tx, T.x, f), ty = lerp(pb.ty, T.y, f);
    for (let i = 0; i < bones.length; i++) {
      const b = bones[i];
      if (!b.vis) continue;
      const A = pts[b.a], B = pts[b.b];
      const r = segIntersect(hx, hy, tx, ty, A.x, A.y, B.x, B.y);
      if (r) return { bone: i, u: r.u, t: r.t, x: lerp(A.x, B.x, r.u), y: lerp(A.y, B.y, r.u), head: false };
    }
    const q = distToSeg(head.x, head.y, hx, hy, tx, ty);
    if (q.d < hr) return { bone: -1, u: 0.5, t: q.t, x: head.x, y: head.y, head: true };
  }
  return null;
}

// Bıçağın şu anki konumunun kestiği ilk kemik (kabzaya en yakın).
function lineTest(rag, H, T) {
  const pts = rag.pts;
  let best = null;
  for (let i = 0; i < rag.bones.length; i++) {
    const b = rag.bones[i];
    if (!b.vis) continue;
    const A = pts[b.a], B = pts[b.b];
    const r = segIntersect(H.x, H.y, T.x, T.y, A.x, A.y, B.x, B.y);
    if (r && (!best || r.t < best.t)) best = { bone: i, u: r.u, t: r.t, x: lerp(A.x, B.x, r.u), y: lerp(A.y, B.y, r.u), head: false };
  }
  const h = pts[J.HEAD];
  const q = distToSeg(h.x, h.y, H.x, H.y, T.x, T.y);
  if (q.d < rag.d.head && (!best || q.t < best.t)) best = { bone: -1, u: 0.5, t: q.t, x: h.x, y: h.y, head: true };
  return best;
}

// Bıçağa en yakın kemik (temas oldu ama bıçak çizgisi artık kesmiyorsa).
function nearestBoneHit(rag, H, T, maxDist) {
  const pts = rag.pts;
  let best = null, bd = Infinity;
  for (let k = 0; k <= 4; k++) {
    const px = lerp(H.x, T.x, k / 4), py = lerp(H.y, T.y, k / 4);
    for (let i = 0; i < rag.bones.length; i++) {
      const b = rag.bones[i];
      if (!b.vis) continue;
      const A = pts[b.a], B = pts[b.b];
      const q = distToSeg(px, py, A.x, A.y, B.x, B.y);
      if (q.d < bd) { bd = q.d; best = { bone: i, u: q.t, t: k / 4, x: lerp(A.x, B.x, q.t), y: lerp(A.y, B.y, q.t), head: false }; }
    }
  }
  return bd <= maxDist ? best : null;
}

// İki kılıcın süpürme sırasında çarpışıp çarpışmadığı (savuşturma).
function sweepSeg(pb, H, T, C, D, steps) {
  for (let s = 1; s <= steps; s++) {
    const f = s / steps;
    const r = segIntersect(lerp(pb.hx, H.x, f), lerp(pb.hy, H.y, f), lerp(pb.tx, T.x, f), lerp(pb.ty, T.y, f), C.x, C.y, D.x, D.y);
    if (r) return true;
  }
  return false;
}

// Yumruk gibi nokta saldırıları için: noktaya en yakın kemik belli yarıçapta mı?
function pointHitRag(rag, x, y, r) {
  const pts = rag.pts;
  for (let i = 0; i < rag.bones.length; i++) {
    const b = rag.bones[i];
    if (!b.vis) continue;
    const A = pts[b.a], B = pts[b.b];
    const q = distToSeg(x, y, A.x, A.y, B.x, B.y);
    if (q.d < r + b.w * 0.5) return { bone: i, u: q.t, x, y, head: false };
  }
  const h = pts[J.HEAD];
  if (Math.hypot(h.x - x, h.y - y) < r + rag.d.head) return { bone: -1, u: 0.5, x, y, head: true };
  return null;
}
