import { Sfx } from './audio.js';
import { clamp } from './util.js';

// Tek kontrol: yüzen joystick. Parmağı (ya da fareyi) ekranın herhangi bir yerine
// koyup sürükle: yön = kılıcın ve kolların baktığı yer, itme miktarı = koşu hızı.
// Klavyede WASD / oklar aynı işi 8 yönde yapar.

const STICK_R = 55; // tam itme için piksel

export class Input {
  constructor(el) {
    this.el = el;
    this.keys = Object.create(null);
    this.stick = { id: null, ox: 0, oy: 0, x: 0, y: 0 };
    this.anyPress = false;
    // Dokunmatik cihazda ipuçları ilk dokunuştan önce de doğru görünsün.
    this.touchMode = 'ontouchstart' in window || (navigator.maxTouchPoints || 0) > 0;
    this.onKeyAction = null;
    this.stickR = STICK_R;
    // Kısa dokunuşlar (sürüklemeden): titan seviyesinde halat atar. {x, y} ekran, ya da null = otomatik.
    this.taps = [];
    this.tapStart = { t: 0, x: 0, y: 0, moved: 0 };

    window.addEventListener('keydown', (e) => this.onKey(e, true));
    window.addEventListener('keyup', (e) => this.onKey(e, false));
    window.addEventListener('blur', () => { this.keys = Object.create(null); this.stick.id = null; });
    el.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      this.press();
      this.begin('mouse', e.clientX, e.clientY);
    });
    window.addEventListener('mousemove', (e) => { if (this.stick.id === 'mouse') this.drag(e.clientX, e.clientY); });
    window.addEventListener('mouseup', () => { if (this.stick.id === 'mouse') this.end(); });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    const o = { passive: false };
    el.addEventListener('touchstart', (e) => this.onTouchStart(e), o);
    el.addEventListener('touchmove', (e) => this.onTouchMove(e), o);
    el.addEventListener('touchend', (e) => this.onTouchEnd(e), o);
    el.addEventListener('touchcancel', (e) => this.onTouchEnd(e), o);
  }

  press() { Sfx.init(); this.anyPress = true; }

  begin(id, x, y) {
    Object.assign(this.stick, { id, ox: x, oy: y, x, y });
    Object.assign(this.tapStart, { t: performance.now(), x, y, moved: 0 });
  }

  // Parmak kalkınca: kısa ve kıpırdamadan yapılan basış "dokunuş" sayılır.
  end() {
    const s = this.tapStart;
    if (performance.now() - s.t < 260 && s.moved < 14) this.taps.push({ x: s.x, y: s.y });
    this.stick.id = null;
  }

  // Parmak çok uzaklaşırsa joystick merkezi peşinden gelir: yön değiştirmek hep kolay kalır.
  drag(x, y) {
    const s = this.stick;
    s.x = x; s.y = y;
    this.tapStart.moved = Math.max(this.tapStart.moved, Math.hypot(x - this.tapStart.x, y - this.tapStart.y));
    const dx = x - s.ox, dy = y - s.oy, l = Math.hypot(dx, dy), max = this.stickR * 1.3;
    if (l > max) { s.ox = x - dx / l * max; s.oy = y - dy / l * max; }
  }

  onKey(e, down) {
    const c = e.code;
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(c)) e.preventDefault();
    if (down && !e.repeat) {
      this.press();
      if (c === 'Space') this.taps.push(null);
      if (this.onKeyAction) this.onKeyAction(c);
    }
    this.keys[c] = down;
  }

  onTouchStart(e) {
    e.preventDefault();
    this.press();
    this.touchMode = true;
    for (const t of e.changedTouches) {
      if (this.stick.id === null) this.begin(t.identifier, t.clientX, t.clientY);
    }
  }

  onTouchMove(e) {
    e.preventDefault();
    for (const t of e.changedTouches) if (t.identifier === this.stick.id) this.drag(t.clientX, t.clientY);
  }

  onTouchEnd(e) {
    e.preventDefault();
    Sfx.init();
    for (const t of e.changedTouches) if (t.identifier === this.stick.id) this.end();
  }

  // x sağ, y ileri; mag 0..1
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
      if (l > 6) { const m = clamp((l - 6) / (this.stickR - 6), 0, 1); x = dx / l * m; y = dy / l * m; }
    }
    let mag = Math.hypot(x, y);
    if (mag > 1) { x /= mag; y /= mag; mag = 1; }
    return { x, y, mag };
  }

  clear() { this.anyPress = false; this.taps.length = 0; }

  endFrame() { this.anyPress = false; }
}
