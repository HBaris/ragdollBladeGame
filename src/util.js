// Ortak yardımcılar. Dünya: metre, y yukarı, zemin y = 0.
export const TAU = Math.PI * 2;
export const GRAVITY = 18;

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const rand = (a, b) => a + Math.random() * (b - a);
export const randInt = (a, b) => Math.floor(a + Math.random() * (b - a + 1));
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const sgn = (v) => (v < 0 ? -1 : 1);
export const damp = (rate, dt) => 1 - Math.exp(-rate * dt);
export const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);
export const easeInOut = (t) => 0.5 - 0.5 * Math.cos(Math.PI * t);
export function approach(v, t, d) { return v < t ? Math.min(v + d, t) : Math.max(v - d, t); }
export function wrapAngle(a) { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; }
export function angApproach(a, b, maxStep) {
  const d = wrapAngle(b - a);
  return a + clamp(d, -maxStep, maxStep);
}
export function hash(n) { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); }

// İki 3D doğru parçası arasındaki en yakın noktalar (Ericson). Sonuç `out`a yazılır:
// s (AB üzerindeki oran), t (CD üzerindeki oran), d2 (uzaklığın karesi).
export const segOut = { s: 0, t: 0, d2: 0 };
export function segSeg(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, out = segOut) {
  const d1x = bx - ax, d1y = by - ay, d1z = bz - az;
  const d2x = dx - cx, d2y = dy - cy, d2z = dz - cz;
  const rx = ax - cx, ry = ay - cy, rz = az - cz;
  const a = d1x * d1x + d1y * d1y + d1z * d1z;
  const e = d2x * d2x + d2y * d2y + d2z * d2z;
  const f = d2x * rx + d2y * ry + d2z * rz;
  let s, t;
  if (a < 1e-9 && e < 1e-9) { s = 0; t = 0; } else if (a < 1e-9) { s = 0; t = clamp(f / e, 0, 1); } else {
    const c = d1x * rx + d1y * ry + d1z * rz;
    if (e < 1e-9) { t = 0; s = clamp(-c / a, 0, 1); } else {
      const b = d1x * d2x + d1y * d2y + d1z * d2z;
      const den = a * e - b * b;
      s = den > 1e-12 ? clamp((b * f - c * e) / den, 0, 1) : 0;
      t = (b * s + f) / e;
      if (t < 0) { t = 0; s = clamp(-c / a, 0, 1); } else if (t > 1) { t = 1; s = clamp((b - c) / a, 0, 1); }
    }
  }
  const qx = ax + d1x * s - (cx + d2x * t), qy = ay + d1y * s - (cy + d2y * t), qz = az + d1z * s - (cz + d2z * t);
  out.s = s; out.t = t; out.d2 = qx * qx + qy * qy + qz * qz;
  return out;
}

// Noktanın doğru parçasına uzaklığı (karesi) ve parçadaki oranı.
export const ptOut = { t: 0, d2: 0 };
export function ptSeg(px, py, pz, ax, ay, az, bx, by, bz, out = ptOut) {
  const vx = bx - ax, vy = by - ay, vz = bz - az;
  const l2 = vx * vx + vy * vy + vz * vz;
  const t = l2 > 0 ? clamp(((px - ax) * vx + (py - ay) * vy + (pz - az) * vz) / l2, 0, 1) : 0;
  const qx = ax + vx * t - px, qy = ay + vy * t - py, qz = az + vz * t - pz;
  out.t = t; out.d2 = qx * qx + qy * qy + qz * qz;
  return out;
}

export function loadNum(key, def) {
  try { const v = parseInt(localStorage.getItem(key), 10); return Number.isFinite(v) ? v : def; } catch (e) { return def; }
}
export function saveNum(key, v) {
  try { localStorage.setItem(key, String(v)); } catch (e) { /* gizli sekme vb. */ }
}
