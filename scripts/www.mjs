// Mağaza uygulamaları (Capacitor) için web içeriğini www/ klasörüne toplar:
// index.html ve paketlenmiş oyun (dist/game.js). Başka dosya gerekmez, her şey tek pakette.
import { mkdirSync, copyFileSync, rmSync } from 'node:fs';

rmSync('www', { recursive: true, force: true });
mkdirSync('www/dist', { recursive: true });
copyFileSync('index.html', 'www/index.html');
copyFileSync('dist/game.js', 'www/dist/game.js');
console.log('www/ hazır');
