'use strict';

// Klavye + fare + dokunmatik. Basışlar kısa bir süre tamponlanır ki
// kesme/zıplama tam doğru karede basılmasa bile kaçmasın.
class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = Object.create(null);
    this.jumpBuf = 0;
    this.slashBuf = 0;
    this.slashAim = null;
    this.anyPress = false;
    this.restart = false;
    this.touchMode = false;
    this.mouse = { x: 0, y: 0 };
    this.stick = { id: null, ox: 0, oy: 0, x: 0, y: 0, jumped: false };
    this.swipe = { id: null, sx: 0, sy: 0, lx: 0, ly: 0, fired: false };
    this.jumpBtn = { x: 0, y: 0, r: 0, id: null };
    this.onMute = null;

    window.addEventListener('keydown', (e) => this.onKey(e, true));
    window.addEventListener('keyup', (e) => this.onKey(e, false));
    window.addEventListener('blur', () => { this.keys = Object.create(null); });
    canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
    window.addEventListener('mousemove', (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    const opt = { passive: false };
    canvas.addEventListener('touchstart', (e) => this.onTouchStart(e), opt);
    canvas.addEventListener('touchmove', (e) => this.onTouchMove(e), opt);
    canvas.addEventListener('touchend', (e) => this.onTouchEnd(e), opt);
    canvas.addEventListener('touchcancel', (e) => this.onTouchEnd(e), opt);
  }

  onKey(e, down) {
    const c = e.code;
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(c)) e.preventDefault();
    if (down && !e.repeat) {
      Sfx.init();
      this.anyPress = true;
      if (c === 'KeyW' || c === 'ArrowUp' || c === 'Space') this.jumpBuf = 0.15;
      if (c === 'KeyJ' || c === 'KeyX') { this.slashBuf = 0.18; this.slashAim = { type: 'key', up: this.up(), down: this.down() }; }
      if (c === 'KeyK' || c === 'KeyC') { this.slashBuf = 0.18; this.slashAim = { type: 'key', up: true, down: false }; }
      if (c === 'KeyR') this.restart = true;
      if (c === 'KeyM' && this.onMute) this.onMute();
    }
    this.keys[c] = down;
  }

  up() { return !!(this.keys.KeyW || this.keys.ArrowUp); }
  down() { return !!(this.keys.KeyS || this.keys.ArrowDown); }

  onMouseDown(e) {
    Sfx.init();
    this.anyPress = true;
    this.mouse.x = e.clientX; this.mouse.y = e.clientY;
    if (e.button === 2) { this.jumpBuf = 0.15; return; }
    this.slashBuf = 0.18;
    this.slashAim = { type: 'mouse', sx: e.clientX, sy: e.clientY };
  }

  onTouchStart(e) {
    e.preventDefault();
    Sfx.init();
    this.touchMode = true;
    this.anyPress = true;
    const W = window.innerWidth;
    for (const t of e.changedTouches) {
      const x = t.clientX, y = t.clientY, jb = this.jumpBtn;
      if (jb.r > 0 && Math.hypot(x - jb.x, y - jb.y) < jb.r * 1.25) {
        this.jumpBuf = 0.15; jb.id = t.identifier;
      } else if (x < W * 0.45 && this.stick.id === null) {
        Object.assign(this.stick, { id: t.identifier, ox: x, oy: y, x, y, jumped: false });
      } else if (this.swipe.id === null) {
        Object.assign(this.swipe, { id: t.identifier, sx: x, sy: y, lx: x, ly: y, fired: false });
      }
    }
  }

  onTouchMove(e) {
    e.preventDefault();
    for (const t of e.changedTouches) {
      const x = t.clientX, y = t.clientY;
      const st = this.stick, sw = this.swipe;
      if (t.identifier === st.id) {
        st.x = x; st.y = y;
        // Joystick'i yukarı fırlatmak da zıplatır.
        if (st.oy - y > 45 && !st.jumped) { this.jumpBuf = 0.15; st.jumped = true; }
        if (st.oy - y < 20) st.jumped = false;
      } else if (t.identifier === sw.id) {
        const dx = x - sw.lx, dy = y - sw.ly;
        if (Math.hypot(dx, dy) > 28) {
          this.slashBuf = 0.18;
          this.slashAim = { type: 'dir', dx, dy };
          sw.lx = x; sw.ly = y; sw.fired = true;
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
        if (!this.swipe.fired) { this.slashBuf = 0.18; this.slashAim = { type: 'fwd' }; }
        this.swipe.id = null;
      } else if (t.identifier === this.jumpBtn.id) this.jumpBtn.id = null;
    }
  }

  moveX() {
    let m = 0;
    if (this.keys.KeyA || this.keys.ArrowLeft) m -= 1;
    if (this.keys.KeyD || this.keys.ArrowRight) m += 1;
    if (this.stick.id !== null) {
      const dx = this.stick.x - this.stick.ox;
      if (Math.abs(dx) > 10) m = clamp((dx - sgn(dx) * 10) / 40, -1, 1);
    }
    return m;
  }

  clearBuffers() {
    this.jumpBuf = 0;
    this.slashBuf = 0;
    this.anyPress = false;
    this.restart = false;
  }

  endFrame(dt) {
    this.jumpBuf = Math.max(0, this.jumpBuf - dt);
    this.slashBuf = Math.max(0, this.slashBuf - dt);
    this.anyPress = false;
    this.restart = false;
  }
}
