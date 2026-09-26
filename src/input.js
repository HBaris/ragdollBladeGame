import { Sfx } from './audio.js';
import { clamp } from './util.js';

// Dokunmatik: sol yarı sanal çubuk (koş), sağ yarı kaydır (o yöne kes) / dokun (kes).
// Masaüstü: WASD/oklar koş; fareyle sürükle (o yöne kes) / tıkla (kes); J, K, L tuşları.
// Kesme istekleri kısa süre kuyrukta bekler ki savuruş bitmeden basılan kaçmasın.

const TAP_SWINGS = [[-1, -0.35], [1, -0.1], [0, -1], [-1, 0.2]];

export class Input {
  constructor(el) {
    this.el = el;
    this.keys = Object.create(null);
    this.stick = { id: null, ox: 0, oy: 0, x: 0, y: 0 };
    this.swipe = { id: null, sx: 0, sy: 0, lx: 0, ly: 0, fired: false, trail: [] };
    this.mouse = { down: false, sx: 0, sy: 0, lx: 0, ly: 0, fired: false };
    this.req = null;
    this.tapIdx = 0;
    this.anyPress = false;
    // Dokunmatik cihazda ipuçları ve joystick ilk dokunuştan önce de doğru görünsün.
    this.touchMode = 'ontouchstart' in window || (navigator.maxTouchPoints || 0) > 0;
    this.trail = [];
    this.onKeyAction = null;

    window.addEventListener('keydown', (e) => this.onKey(e, true));
    window.addEventListener('keyup', (e) => this.onKey(e, false));
    window.addEventListener('blur', () => { this.keys = Object.create(null); this.stick.id = null; });
    el.addEventListener('mousedown', (e) => this.onMouseDown(e));
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('mouseup', () => this.onMouseUp());
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    const o = { passive: false };
    el.addEventListener('touchstart', (e) => this.onTouchStart(e), o);
    el.addEventListener('touchmove', (e) => this.onTouchMove(e), o);
    el.addEventListener('touchend', (e) => this.onTouchEnd(e), o);
    el.addEventListener('touchcancel', (e) => this.onTouchEnd(e), o);
  }

  press() { Sfx.init(); this.anyPress = true; }

  queue(x, y) { this.req = { x, y, age: 0 }; }

  tapSwing() {
    const s = TAP_SWINGS[this.tapIdx++ % TAP_SWINGS.length];
    this.queue(s[0], s[1]);
  }

  takeSwing() { const r = this.req; this.req = null; return r; }
  requeue(r) { if (!this.req && r.age < 0.3) this.req = r; }

  onKey(e, down) {
    const c = e.code;
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(c)) e.preventDefault();
    if (down && !e.repeat) {
      this.press();
      if (c === 'KeyJ' || c === 'Space') this.tapSwing();
      if (c === 'KeyK') this.queue(0, -1);
      if (c === 'KeyL') this.queue(0.5, 1);
      if (this.onKeyAction) this.onKeyAction(c);
    }
    this.keys[c] = down;
  }

  onMouseDown(e) {
    if (e.button !== 0) return;
    this.press();
    Object.assign(this.mouse, { down: true, sx: e.clientX, sy: e.clientY, lx: e.clientX, ly: e.clientY, fired: false });
    this.trail = [{ x: e.clientX, y: e.clientY, a: 0 }];
  }

  onMouseMove(e) {
    const m = this.mouse;
    if (!m.down) return;
    this.trail.push({ x: e.clientX, y: e.clientY, a: 0 });
    const dx = e.clientX - m.lx, dy = e.clientY - m.ly;
    if (Math.hypot(dx, dy) > 32) {
      this.queue(dx, -dy);
      m.lx = e.clientX; m.ly = e.clientY; m.fired = true;
    }
  }

  onMouseUp() {
    const m = this.mouse;
    if (!m.down) return;
    m.down = false;
    if (!m.fired) this.tapSwing();
  }

  onTouchStart(e) {
    e.preventDefault();
    this.press();
    this.touchMode = true;
    const W = window.innerWidth;
    for (const t of e.changedTouches) {
      const x = t.clientX, y = t.clientY;
      if (x < W * 0.5 && this.stick.id === null) Object.assign(this.stick, { id: t.identifier, ox: x, oy: y, x, y });
      else if (this.swipe.id === null) {
        Object.assign(this.swipe, { id: t.identifier, sx: x, sy: y, lx: x, ly: y, fired: false });
        this.trail = [{ x, y, a: 0 }];
      }
    }
  }

  onTouchMove(e) {
    e.preventDefault();
    for (const t of e.changedTouches) {
      const x = t.clientX, y = t.clientY;
      if (t.identifier === this.stick.id) { this.stick.x = x; this.stick.y = y; } else if (t.identifier === this.swipe.id) {
        const s = this.swipe;
        this.trail.push({ x, y, a: 0 });
        const dx = x - s.lx, dy = y - s.ly;
        if (Math.hypot(dx, dy) > 30) {
          this.queue(dx, -dy);
          s.lx = x; s.ly = y; s.fired = true;
        }
      }
    }
  }

  onTouchEnd(e) {
    e.preventDefault();
    Sfx.init();
    for (const t of e.changedTouches) {
      if (t.identifier === this.stick.id) this.stick.id = null;
      else if (t.identifier === this.swipe.id) {
        if (!this.swipe.fired) this.tapSwing();
        this.swipe.id = null;
      }
    }
  }

  // Hareket: x sağ, y ileri; mag 0..1
  move() {
    let x = 0, y = 0;
    const k = this.keys;
    if (k.KeyA || k.ArrowLeft) x -= 1;
    if (k.KeyD || k.ArrowRight) x += 1;
    if (k.KeyW || k.ArrowUp) y += 1;
    if (k.KeyS || k.ArrowDown) y -= 1;
    if (this.stick.id !== null) {
      const dx = this.stick.x - this.stick.ox, dy = this.stick.oy - this.stick.y;
      const l = Math.hypot(dx, dy);
      if (l > 8) { const m = clamp((l - 8) / 45, 0, 1); x = dx / l * m; y = dy / l * m; }
    }
    let mag = Math.hypot(x, y);
    if (mag > 1) { x /= mag; y /= mag; mag = 1; }
    return { x, y, mag };
  }

  clear() { this.req = null; this.anyPress = false; }

  endFrame(dt) {
    if (this.req) { this.req.age += dt; if (this.req.age > 0.3) this.req = null; }
    for (const p of this.trail) p.a += dt;
    while (this.trail.length && this.trail[0].a > 0.18) this.trail.shift();
    this.anyPress = false;
  }
}
