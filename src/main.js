import { Game } from './game.js';

// Menü yok: sayfa açılır açılmaz seviye başlar.
const game = new Game();
window.game = game;
let last = performance.now();
function loop(now) {
  const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
  last = now;
  game.frame(dt);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
