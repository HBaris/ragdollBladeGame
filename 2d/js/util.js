'use strict';

// Dünya birimleri: y aşağı doğru artar, zemin y = 0'dadır.
const TAU = Math.PI * 2;
const GRAVITY = 1500;
const GROUND_Y = 0;
const FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
function lerp(a, b, t) { return a + (b - a) * t; }
function rand(a, b) { return a + Math.random() * (b - a); }
function randInt(a, b) { return Math.floor(a + Math.random() * (b - a + 1)); }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function sgn(v) { return v < 0 ? -1 : 1; }
function approach(v, t, d) { return v < t ? Math.min(v + d, t) : Math.max(v - d, t); }
function wrapAngle(a) { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; }
function angLerp(a, b, t) { return a + wrapAngle(b - a) * t; }
// Kare hızından bağımsız yumuşatma katsayısı.
function damp(rate, dt) { return 1 - Math.exp(-rate * dt); }
function easeOutQuad(t) { return 1 - (1 - t) * (1 - t); }
function easeInOutSine(t) { return 0.5 - 0.5 * Math.cos(Math.PI * t); }
function hash1(n) { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); }

// Kılıç açıları standart atan2 açısıdır (x ileri). Karakter sola bakıyorsa aynalanır.
function toWorldAngle(local, facing) { return facing > 0 ? local : Math.PI - local; }

// AB ve CD doğru parçaları kesişiyorsa {t (AB üzerinde), u (CD üzerinde)} döner.
function segIntersect(ax, ay, bx, by, cx, cy, dx, dy) {
  const rx = bx - ax, ry = by - ay, sx = dx - cx, sy = dy - cy;
  const den = rx * sy - ry * sx;
  if (den > -1e-9 && den < 1e-9) return null;
  const qx = cx - ax, qy = cy - ay;
  const t = (qx * sy - qy * sx) / den;
  const u = (qx * ry - qy * rx) / den;
  if (t < 0 || t > 1 || u < 0 || u > 1) return null;
  return { t, u };
}

function distToSeg(px, py, ax, ay, bx, by) {
  const vx = bx - ax, vy = by - ay;
  const l2 = vx * vx + vy * vy;
  const t = l2 > 0 ? clamp(((px - ax) * vx + (py - ay) * vy) / l2, 0, 1) : 0;
  return { d: Math.hypot(ax + vx * t - px, ay + vy * t - py), t };
}

function loadBest() {
  try { return parseInt(localStorage.getItem('ragdollKilicBest'), 10) || 0; } catch (e) { return 0; }
}
function saveBest(v) {
  try { localStorage.setItem('ragdollKilicBest', String(v)); } catch (e) { /* gizli sekme vb. */ }
}
