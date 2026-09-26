'use strict';

const BLOOD_COLS = ['#b3001b', '#8a0012', '#d1001f', '#9e0016'];
const MAX_PARTS = 2200;
const MAX_DECALS = 900;

class Effects {
  constructor() { this.clear(); }

  clear() {
    this.parts = [];
    this.decals = [];
    this.bleeders = [];
    this.popups = [];
  }

  blood(x, y, vx, vy, n, spread, spd) {
    const base = Math.atan2(vy, vx);
    for (let i = 0; i < n; i++) {
      const a = base + rand(-spread, spread);
      const s = spd * rand(0.25, 1.15);
      this.parts.push({
        x, y,
        vx: Math.cos(a) * s + rand(-30, 30),
        vy: Math.sin(a) * s + rand(-40, 20),
        life: rand(0.8, 1.6), size: rand(1.6, 3.8), col: pick(BLOOD_COLS), type: 0,
      });
    }
    this.trim();
  }

  sparks(x, y, n, col, spd) {
    for (let i = 0; i < n; i++) {
      const a = rand(0, TAU), s = (spd || 380) * rand(0.4, 1.1);
      this.parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: rand(0.12, 0.3), size: 1.6, col: col || '#fff6c9', type: 1 });
    }
    this.trim();
  }

  dust(x, n) {
    for (let i = 0; i < n; i++) {
      this.parts.push({ x: x + rand(-10, 10), y: -1, vx: rand(-90, 90), vy: rand(-90, -20), life: rand(0.25, 0.5), size: rand(2, 4), col: 'rgba(120,85,60,0.5)', type: 2 });
    }
  }

  trim() {
    if (this.parts.length > MAX_PARTS) this.parts.splice(0, this.parts.length - MAX_PARTS);
  }

  // Kesik noktasından bir süre kan fışkırtır.
  bleed(rag, idx, dur) {
    this.bleeders.push({ rag, idx, t: 0, dur, acc: 0 });
  }

  popup(x, y, text, col, size, life) {
    size = size || 18;
    // Aynı yerde üst üste binmesinler: yakın ve yeni yazıların üstüne diz.
    let n = 0;
    for (const p of this.popups) if (p.age < 0.4 && Math.abs(p.x - x) < 90 && Math.abs(p.y0 - y) < 40) n++;
    this.popups.push({ x, y: y - n * size * 1.15, y0: y, text, col: col || '#fff', size, age: 0, life: life || 0.9 });
  }

  update(dt) {
    for (const b of this.bleeders) {
      b.t += dt;
      const rag = b.rag;
      if (rag.removed) { b.t = b.dur; continue; }
      const p = rag.pts[b.idx];
      const nb = rag.neighborOf(b.idx, -1);
      if (nb < 0) continue;
      const n = rag.pts[nb];
      let ux = p.x - n.x, uy = p.y - n.y;
      const l = Math.hypot(ux, uy) || 1;
      ux /= l; uy /= l;
      const k = 1 - b.t / b.dur;
      // Nabız gibi atan fışkırma.
      const pulse = 0.55 + 0.45 * Math.sin(b.t * 18);
      b.acc += dt * 140 * k * pulse;
      const pvx = (p.x - p.px) / dt, pvy = (p.y - p.py) / dt;
      while (b.acc >= 1) {
        b.acc -= 1;
        const s = rand(120, 330) * (0.4 + k);
        this.parts.push({
          x: p.x, y: p.y,
          vx: ux * s + rand(-50, 50) + pvx * 0.6, vy: uy * s + rand(-50, 50) + pvy * 0.6,
          life: rand(0.6, 1.2), size: rand(1.4, 3), col: pick(BLOOD_COLS), type: 0,
        });
      }
    }
    this.bleeders = this.bleeders.filter((b) => b.t < b.dur);

    const parts = this.parts;
    let w = 0;
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i];
      p.life -= dt;
      if (p.type === 1) { p.vx *= 0.9; p.vy *= 0.9; } else if (p.type === 2) { p.vx *= 0.92; p.vy += 120 * dt; } else p.vy += GRAVITY * 0.85 * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      if (p.y >= GROUND_Y) {
        if (p.type === 0) this.addDecal(p.x, p.size, p.col);
        continue;
      }
      if (p.life > 0) parts[w++] = p;
    }
    parts.length = w;

    for (const p of this.popups) { p.age += dt; p.y -= 38 * dt; }
    this.popups = this.popups.filter((p) => p.age < p.life);
  }

  addDecal(x, size, col) {
    this.decals.push({ x, y: rand(0.5, 9), w: size * rand(1.2, 2.6), col });
    if (this.decals.length > MAX_DECALS) this.decals.splice(0, this.decals.length - MAX_DECALS);
  }

  // Renk başına tek path: yüzlerce lekeyi tek tek doldurmak çok pahalı.
  drawDecals(ctx, left, right) {
    for (const col of BLOOD_COLS) {
      ctx.fillStyle = col;
      ctx.beginPath();
      for (const d of this.decals) {
        if (d.col !== col || d.x < left - 20 || d.x > right + 20) continue;
        ctx.moveTo(d.x + d.w, d.y);
        ctx.ellipse(d.x, d.y, d.w, d.w * 0.3, 0, 0, TAU);
      }
      ctx.fill();
    }
  }

  drawParticles(ctx) {
    ctx.lineCap = 'round';
    for (const p of this.parts) {
      if (ctx.fillStyle !== p.col) ctx.fillStyle = p.col;
      if (p.type === 1) {
        ctx.strokeStyle = p.col;
        ctx.lineWidth = p.size;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 0.03, p.y - p.vy * 0.03);
        ctx.stroke();
      } else {
        const s = p.size;
        ctx.fillRect(p.x - s * 0.5, p.y - s * 0.5, s, s);
      }
    }
  }
}

// Atkı / kafa bandı kuyruğu: basit Verlet zinciri.
class Ribbon {
  constructor(n, seg, col, w) {
    this.n = n;
    this.seg = seg;
    this.col = col;
    this.w = w;
    this.p = null;
  }

  update(dt, ax, ay, wind) {
    if (!this.p) {
      this.p = [];
      for (let i = 0; i < this.n; i++) this.p.push({ x: ax - i * this.seg, y: ay, px: ax - i * this.seg, py: ay });
    }
    const p = this.p;
    p[0].px = p[0].x; p[0].py = p[0].y;
    p[0].x = ax; p[0].y = ay;
    const dt2 = dt * dt;
    for (let i = 1; i < p.length; i++) {
      const q = p[i];
      const vx = (q.x - q.px) * 0.93, vy = (q.y - q.py) * 0.93;
      q.px = q.x; q.py = q.y;
      q.x += vx + wind * dt2;
      q.y += vy + 420 * dt2;
    }
    for (let it = 0; it < 3; it++) {
      for (let i = 1; i < p.length; i++) {
        const a = p[i - 1], b = p[i];
        const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 1;
        const diff = (d - this.seg) / d;
        if (i === 1) { b.x -= dx * diff; b.y -= dy * diff; } else {
          a.x += dx * diff * 0.5; a.y += dy * diff * 0.5;
          b.x -= dx * diff * 0.5; b.y -= dy * diff * 0.5;
        }
      }
      for (let i = 1; i < p.length; i++) if (p[i].y > GROUND_Y - 1) p[i].y = GROUND_Y - 1;
    }
  }

  draw(ctx, alpha) {
    if (!this.p) return;
    const p = this.p;
    ctx.globalAlpha = alpha === undefined ? 1 : alpha;
    ctx.strokeStyle = this.col;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (let i = 1; i < p.length; i++) {
      ctx.lineWidth = this.w * (1 - (i - 1) / p.length * 0.6);
      ctx.beginPath();
      ctx.moveTo(p[i - 1].x, p[i - 1].y);
      ctx.lineTo(p[i].x, p[i].y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
}
