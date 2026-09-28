import { J } from './ragdoll.js';

// Poz parametreleri. Yerel eksenler: x sağ, y yukarı, z ileri; orijin pelvisin altındaki zemin.
// lean: gövde öne eğim, twist: omuzların sağa dönüşü, side: yana eğim, headP: baş eğimi,
// lP/rP: uyluk öne açısı, lB/rB: diz bükümü, lS/rS: bacak açıklığı, bob: pelvis sekmesi.
export const POSE_KEYS = ['lean', 'twist', 'side', 'headP', 'lP', 'lB', 'lS', 'rP', 'rB', 'rS', 'bob'];

export function makePose() {
  const o = {};
  for (const k of POSE_KEYS) o[k] = 0;
  return o;
}
export function copyPose(out, a) { for (const k of POSE_KEYS) out[k] = a[k]; return out; }
export function blendPose(out, a, b, t) { for (const k of POSE_KEYS) out[k] = a[k] + (b[k] - a[k]) * t; return out; }
export function approachPose(cur, tgt, f) { for (const k of POSE_KEYS) cur[k] += (tgt[k] - cur[k]) * f; }

export const POSES = {
  // Geniş, çömelmiş kılıç duruşu (ekran görüntülerindeki gibi).
  guard(o, t) {
    o.lean = 0.24; o.twist = 0; o.side = 0; o.headP = -0.2;
    o.lP = 0.62; o.lB = 1.15; o.lS = 0.34;
    o.rP = 0.28; o.rB = 0.95; o.rS = 0.3;
    o.bob = Math.sin(t * 2.4) * 0.012;
    return o;
  },
  // Abartılı koşu: öne yatık gövde, yüksek dizler, zıplayan pelvis.
  run(o, ph) {
    const s = Math.sin(ph);
    o.lean = 0.44; o.twist = -s * 0.16; o.side = 0; o.headP = -0.32;
    o.lP = 0.2 + 0.92 * s;
    o.lB = 0.3 + 1.5 * Math.max(0, Math.cos(ph + 0.5));
    o.rP = 0.2 - 0.92 * s;
    o.rB = 0.3 + 1.5 * Math.max(0, Math.cos(ph + Math.PI + 0.5));
    o.lS = 0.1; o.rS = 0.1;
    o.bob = -Math.abs(Math.cos(ph)) * 0.07 + 0.05;
    return o;
  },
  // Hızını alamayıp dizüstü kayma: ön ayak ileride fren, arka diz yerde, gövde öne.
  kneel(o) {
    o.lean = 0.38; o.twist = 0; o.side = 0; o.headP = -0.2;
    o.lP = 1.2; o.lB = 1.3; o.lS = 0.18;
    o.rP = -0.25; o.rB = 1.9; o.rS = 0.15;
    o.bob = -0.06;
    return o;
  },
  // Saldırı adımı: sol ayak önde, sağ ayak geride.
  lunge(o) {
    o.lean = 0.4; o.side = 0; o.headP = -0.3;
    o.lP = 0.85; o.lB = 1.0; o.lS = 0.22;
    o.rP = -0.45; o.rB = 0.35; o.rS = 0.2;
    o.bob = -0.02;
    return o;
  },
  // Drift: kayılan yöndeki (dir: +1 sağ) bacak yana uzanıp fren yapar, öbürü altta
  // boşa çırpınır, gövde ters yana yatar.
  skid(o, ph, dir) {
    const s = Math.sin(ph * 1.7);
    o.lean = 0.12; o.twist = 0; o.side = 0.4 * dir; o.headP = -0.1;
    const bP = 0.25, bB = 0.12, bS = 0.62;
    const fP = 0.55 + 0.45 * s, fB = 1.3 + 0.3 * Math.cos(ph * 1.7), fS = -0.12;
    if (dir > 0) { o.rP = bP; o.rB = bB; o.rS = bS; o.lP = fP; o.lB = fB; o.lS = fS; }
    else { o.lP = bP; o.lB = bB; o.lS = bS; o.rP = fP; o.rB = fB; o.rS = fS; }
    o.bob = -0.05;
    return o;
  },
  // Tek bacakla sekme: kalan bacak gövdenin altında, sekerek ilerler.
  hop(o, ph, moving) {
    const s = Math.abs(Math.sin(ph));
    o.lean = 0.3; o.twist = 0; o.side = 0; o.headP = -0.25;
    o.lP = 0.15 + (moving ? 0.25 * Math.sin(ph) : 0); o.lB = 0.35 + (moving ? 0.5 * s : 0); o.lS = 0.05;
    o.rP = o.lP; o.rB = o.lB; o.rS = 0.05;
    o.bob = moving ? s * 0.13 : Math.sin(ph) * 0.01;
    return o;
  },
  // Bacaksız: güdüklerle itinerek sürünür.
  stumps(o, ph, moving) {
    const s = Math.sin(ph);
    o.lean = 0.5; o.twist = 0; o.side = 0; o.headP = -0.45;
    o.lP = 0.3 + (moving ? 0.7 * s : 0); o.lB = 0; o.lS = 0.2;
    o.rP = 0.3 - (moving ? 0.7 * s : 0); o.rB = 0; o.rS = 0.2;
    o.bob = moving ? Math.abs(s) * 0.1 : 0;
    return o;
  },
  // At sırtında: uyluklar öne ve iki yana açık, baldırlar aşağı sarkık.
  ride(o, ph) {
    o.lean = 0.12; o.twist = 0; o.side = 0; o.headP = -0.1;
    o.lP = 0.95; o.lB = 1.55; o.lS = 1.15;
    o.rP = 0.95; o.rB = 1.55; o.rS = 1.15;
    o.bob = Math.sin(ph) * 0.03;
    return o;
  },
  air(o) {
    o.lean = 0.1; o.twist = 0; o.side = 0; o.headP = 0.1;
    o.lP = 1.0; o.lB = 1.6; o.lS = 0.25;
    o.rP = 0.4; o.rB = 1.4; o.rS = 0.25;
    o.bob = 0;
    return o;
  },
};

function put(out, i, x, y, z) { out[i * 3] = x; out[i * 3 + 1] = y; out[i * 3 + 2] = z; }

// Bacak doğrultusu: p öne açı, a yana açı (pozitif = +x yönüne).
function legDrop(p, b, a, d) { return (d.th * Math.cos(p) + d.sh * Math.cos(p - b)) * Math.cos(a); }
function leg(out, iHip, iKnee, iFoot, hx, hy, hz, p, b, a, d) {
  const ca = Math.cos(a), sa = Math.sin(a);
  let c = Math.cos(p);
  const kx = hx + c * sa * d.th, ky = hy - c * ca * d.th, kz = hz + Math.sin(p) * d.th;
  put(out, iKnee, kx, ky, kz);
  c = Math.cos(p - b);
  put(out, iFoot, kx + c * sa * d.sh, ky - c * ca * d.sh, kz + Math.sin(p - b) * d.sh);
  put(out, iHip, hx, hy, hz);
}

const _v = [0, 0, 0];
// Gövde dönüşü: önce öne eğim (x ekseni), sonra yana eğim (z), sonra burulma (y).
function torsoRot(P, x, y, z) {
  let c = Math.cos(P.lean), s = Math.sin(P.lean);
  const y1 = y * c - z * s, z1 = y * s + z * c;
  c = Math.cos(P.side); s = Math.sin(P.side);
  const x2 = x * c - y1 * s, y2 = x * s + y1 * c;
  c = Math.cos(P.twist); s = Math.sin(P.twist);
  _v[0] = x2 * c + z1 * s; _v[1] = y2; _v[2] = -x2 * s + z1 * c;
  return _v;
}

// Yerel eklem konumlarını hesaplar. Kollar burada sarkık çizilir; kılıç tutuluyorsa
// karakter onları IK ile ezer. legMask: yere basan bacaklar (bit0 sol, bit1 sağ);
// phFixed verilirse pelvis yüksekliği bacaklardan değil ondan gelir (bacaksız, at sırtı).
export function poseFK(P, d, out, footR, legMask = 3, phFixed = null) {
  const aL = -P.lS, aR = P.rS;
  let drop = 0;
  if (legMask & 1) drop = Math.max(drop, legDrop(P.lP, P.lB, aL, d));
  if (legMask & 2) drop = Math.max(drop, legDrop(P.rP, P.rB, aR, d));
  const ph = (phFixed !== null ? phFixed : drop + footR) + P.bob;
  put(out, J.PELVIS, 0, ph, 0);
  let v = torsoRot(P, 0, d.spine, 0);
  const nx = v[0], ny = ph + v[1], nz = v[2];
  put(out, J.NECK, nx, ny, nz);
  const ch = Math.cos(P.headP), sh = Math.sin(P.headP);
  v = torsoRot(P, 0, d.neck * ch, d.neck * sh + 0.03 * d.neck);
  put(out, J.HEAD, nx + v[0], ny + v[1], nz + v[2]);
  v = torsoRot(P, -d.shW, -0.03, 0);
  put(out, J.LSH, nx + v[0], ny + v[1], nz + v[2]);
  v = torsoRot(P, d.shW, -0.03, 0);
  put(out, J.RSH, nx + v[0], ny + v[1], nz + v[2]);
  for (const [iS, iE, iH, sx] of [[J.LSH, J.LELB, J.LHAND, -1], [J.RSH, J.RELB, J.RHAND, 1]]) {
    const x = out[iS * 3], y = out[iS * 3 + 1], z = out[iS * 3 + 2];
    put(out, iE, x + sx * 0.04, y - d.ua, z + 0.05);
    put(out, iH, x + sx * 0.04, y - d.ua - d.fa * 0.9, z + 0.16);
  }
  const tc = Math.cos(P.twist * 0.25), ts = Math.sin(P.twist * 0.25);
  leg(out, J.LHIP, J.LKNEE, J.LFOOT, -d.hipW * tc, ph, d.hipW * ts, P.lP, P.lB, aL, d);
  leg(out, J.RHIP, J.RKNEE, J.RFOOT, d.hipW * tc, ph, -d.hipW * ts, P.rP, P.rB, aR, d);
}

// İki kemikli IK. S omuz, T hedef el, (a, b) kemik boyları, P dirseğin tercih ettiği yön.
// Sonuç out[0..2] dirsek, out[3..5] el.
export function ik2(sx, sy, sz, tx, ty, tz, a, b, px, py, pz, out) {
  let dx = tx - sx, dy = ty - sy, dz = tz - sz;
  let dist = Math.hypot(dx, dy, dz);
  const maxR = (a + b) * 0.999;
  if (dist < 1e-5) { dx = 0; dy = -1; dz = 0; dist = 1e-5; }
  const ux = dx / dist, uy = dy / dist, uz = dz / dist;
  if (dist > maxR) dist = maxR;
  const x = (a * a - b * b + dist * dist) / (2 * dist);
  const h = Math.sqrt(Math.max(0, a * a - x * x));
  const pd = px * ux + py * uy + pz * uz;
  let qx = px - ux * pd, qy = py - uy * pd, qz = pz - uz * pd;
  let ql = Math.hypot(qx, qy, qz);
  if (ql < 1e-5) { qx = 0; qy = -1; qz = 0; ql = 1; }
  qx /= ql; qy /= ql; qz /= ql;
  out[0] = sx + ux * x + qx * h; out[1] = sy + uy * x + qy * h; out[2] = sz + uz * x + qz * h;
  out[3] = sx + ux * dist; out[4] = sy + uy * dist; out[5] = sz + uz * dist;
  return out;
}
