import { clamp } from './util.js';

// HUD: sol üstte seviye, sağ üstte ayar ve yeniden başlat, ortada duyurular.
// Üst kanvas: joystick, kaydırma izi ve 3D'den izdüşürülen yazılar.

const GEAR = '<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="currentColor" d="M19.4 13a7.7 7.7 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.6 7.6 0 0 0-1.7-1L15 3h-4l-.4 2.9a7.6 7.6 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.7 7.7 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1c.5.4 1.1.7 1.7 1L11 21h4l.4-2.9c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.5zM13 15.5A3.5 3.5 0 1 1 13 8.5a3.5 3.5 0 0 1 0 7z"/></svg>';
const RESTART = '<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" d="M19 12a7 7 0 1 1-2.05-4.95"/><path fill="currentColor" d="M20.5 3.5v6h-6z"/></svg>';

export class Hud {
  constructor(game, canvas) {
    this.game = game;
    this.cv = canvas;
    this.ctx = canvas.getContext('2d');
    const root = document.getElementById('hud');
    root.innerHTML = `
      <div id="lv">Lv 1</div>
      <div id="hearts"></div>
      <div id="btns"><button id="b-gear" aria-label="Ayarlar">${GEAR}</button><button id="b-restart" aria-label="Yeniden başlat">${RESTART}</button></div>
      <div id="banner"><div id="b-main"></div><div id="b-sub"></div></div>
      <div id="settings" hidden>
        <button id="s-sound"></button>
        <button id="s-quality"></button>
        <button id="s-close">Kapat</button>
      </div>`;
    this.lv = root.querySelector('#lv');
    this.hearts = root.querySelector('#hearts');
    this.banner = root.querySelector('#banner');
    this.bMain = root.querySelector('#b-main');
    this.bSub = root.querySelector('#b-sub');
    this.settings = root.querySelector('#settings');
    const stop = (e) => e.stopPropagation();
    for (const b of root.querySelectorAll('button')) { b.addEventListener('touchstart', stop, { passive: true }); b.addEventListener('mousedown', stop); }
    root.querySelector('#b-restart').addEventListener('click', () => game.restartLevel());
    root.querySelector('#b-gear').addEventListener('click', () => { this.settings.hidden = !this.settings.hidden; this.refreshSettings(); });
    root.querySelector('#s-close').addEventListener('click', () => { this.settings.hidden = true; });
    root.querySelector('#s-sound').addEventListener('click', () => { game.toggleSound(); this.refreshSettings(); });
    root.querySelector('#s-quality').addEventListener('click', () => { game.toggleQuality(); this.refreshSettings(); });
    this.bannerT = 0;
    this.flash = 0;
    this.resize();
  }

  refreshSettings() {
    const g = this.game;
    this.settings.querySelector('#s-sound').textContent = `Ses: ${g.soundOn ? 'Açık' : 'Kapalı'}`;
    this.settings.querySelector('#s-quality').textContent = `Grafik: ${g.highQuality ? 'Yüksek' : 'Düşük'}`;
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.dpr = dpr;
    this.W = window.innerWidth; this.H = window.innerHeight;
    this.cv.width = Math.round(this.W * dpr);
    this.cv.height = Math.round(this.H * dpr);
    this.cv.style.width = this.W + 'px';
    this.cv.style.height = this.H + 'px';
  }

  setLevel(n) { this.lv.textContent = `Lv ${n}`; }

  setHearts(hp, max) {
    let s = '';
    for (let i = 0; i < max; i++) s += `<span class="${i < hp ? 'on' : ''}">♥</span>`;
    this.hearts.innerHTML = s;
  }

  show(main, sub, dur, cls) {
    this.bMain.textContent = main;
    this.bSub.textContent = sub || '';
    this.banner.className = 'show ' + (cls || '');
    this.bannerT = dur || 0;
  }

  hide() { this.banner.className = ''; this.bannerT = 0; }

  update(dt) {
    this.flash = Math.max(0, this.flash - dt * 1.6);
    if (this.bannerT > 0) {
      this.bannerT -= dt;
      if (this.bannerT <= 0) this.hide();
    }
  }

  draw(project, popups, input, hintT) {
    const c = this.ctx, dpr = this.dpr;
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    c.clearRect(0, 0, this.W, this.H);
    const u = clamp(Math.min(this.W, this.H) / 400, 0.8, 1.6);

    // Kaydırma izi
    const tr = input.trail;
    if (tr.length > 1) {
      c.lineCap = 'round';
      for (let i = 1; i < tr.length; i++) {
        const a = 1 - tr[i].a / 0.18;
        c.strokeStyle = `rgba(255,255,255,${(a * 0.7).toFixed(3)})`;
        c.lineWidth = 6 * a * u;
        c.beginPath(); c.moveTo(tr[i - 1].x, tr[i - 1].y); c.lineTo(tr[i].x, tr[i].y); c.stroke();
      }
    }

    // Joystick
    if (input.touchMode) {
      const st = input.stick;
      const bx = st.id !== null ? st.ox : 90 * u, by = st.id !== null ? st.oy : this.H - 110 * u;
      c.globalAlpha = st.id !== null ? 0.5 : 0.22;
      c.strokeStyle = '#fff'; c.fillStyle = '#fff'; c.lineWidth = 3;
      c.beginPath(); c.arc(bx, by, 48 * u, 0, Math.PI * 2); c.stroke();
      let kx = bx, ky = by;
      if (st.id !== null) {
        const dx = st.x - st.ox, dy = st.y - st.oy, l = Math.hypot(dx, dy), m = Math.min(l, 48 * u) / (l || 1);
        kx += dx * m; ky += dy * m;
      }
      c.beginPath(); c.arc(kx, ky, 22 * u, 0, Math.PI * 2); c.fill();
      c.globalAlpha = 1;
    }

    // 3D yazılar
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.lineJoin = 'round';
    for (const p of popups) {
      const q = project(p.x, p.y, p.z);
      if (!q) continue;
      const pop = 1 + 0.6 * Math.max(0, 1 - p.age / 0.1);
      const a = 1 - Math.max(0, (p.age / p.life - 0.7) / 0.3);
      const size = Math.round(p.size * u * pop);
      c.globalAlpha = a;
      c.font = `900 ${size}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;
      c.lineWidth = Math.max(3, size * 0.2);
      c.strokeStyle = '#1a0d14';
      c.strokeText(p.text, q.x, q.y);
      c.fillStyle = p.col;
      c.fillText(p.text, q.x, q.y);
    }
    c.globalAlpha = 1;

    if (this.flash > 0) {
      const g = c.createRadialGradient(this.W / 2, this.H / 2, Math.min(this.W, this.H) * 0.3, this.W / 2, this.H / 2, Math.max(this.W, this.H) * 0.75);
      g.addColorStop(0, 'rgba(210,0,20,0)');
      g.addColorStop(1, `rgba(210,0,20,${(this.flash * 0.8).toFixed(3)})`);
      c.fillStyle = g;
      c.fillRect(0, 0, this.W, this.H);
    }

    if (hintT > 0) {
      c.globalAlpha = clamp(hintT, 0, 1) * 0.9;
      c.font = `700 ${Math.round(14 * u)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;
      c.fillStyle = '#fff';
      c.strokeStyle = 'rgba(0,0,0,0.35)';
      c.lineWidth = 3;
      const lines = input.touchMode
        ? ['Sol: sürükle ve koş', 'Sağ: kaydır = o yöne kes · dokun = kes']
        : ['WASD koş', 'Fareyle sürükle = o yöne kes · tıkla / J = kes'];
      lines.forEach((l, i) => { const y = this.H * 0.78 + i * 22 * u; c.strokeText(l, this.W / 2, y); c.fillText(l, this.W / 2, y); });
      c.globalAlpha = 1;
    }
  }
}
