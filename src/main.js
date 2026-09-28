import { Game } from './game.js';

// Menü yok: sayfa açılır açılmaz seviye başlar.
function fail(err) {
  // WebGL açılamazsa boş ekran yerine ne yapılacağını söyle.
  const box = document.createElement('div');
  box.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;'
    + 'background:#1c1a2e;color:#fff;font:600 17px/1.5 system-ui,sans-serif;text-align:center;z-index:9';
  box.innerHTML = '<div style="max-width:420px"><div style="font-size:26px;font-weight:900;margin-bottom:10px">3D başlatılamadı</div>'
    + 'Bu tarayıcı WebGL açamadı. Telefonda Safari ya da Chrome\'un güncel sürümünü kullan; '
    + 'bilgisayarda tarayıcı ayarlarından donanım hızlandırmayı aç.</div>';
  document.body.appendChild(box);
  console.error(err);
}

let game = null;
try { game = new Game(); } catch (e) { fail(e); }
if (game) {
  window.game = game;
  let last = performance.now();
  const loop = (now) => {
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;
    game.frame(dt);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
