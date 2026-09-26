'use strict';

// Arka plan: gökyüzü, güneş ve paralaks dağlar ekran uzayında; zemin ve
// süsler dünya uzayında (koşarken hız hissi versin diye).

function drawSky(ctx, W, H, gy, camX, s) {
  const g = ctx.createLinearGradient(0, 0, 0, gy);
  g.addColorStop(0, '#fbefdf');
  g.addColorStop(1, '#f2c29a');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, gy + 2);

  const sunR = 80 * s;
  const sunX = W * 0.68 - camX * s * 0.02;
  const sunY = gy - Math.min(gy * 0.62, 250 * s);
  ctx.fillStyle = 'rgba(234,90,61,0.18)';
  ctx.beginPath(); ctx.arc(sunX, sunY, sunR * 1.35, 0, TAU); ctx.fill();
  ctx.fillStyle = '#e8573d';
  ctx.beginPath(); ctx.arc(sunX, sunY, sunR, 0, TAU); ctx.fill();

  mountainLayer(ctx, W, gy, camX, s, 0.1, '#e9b393', 150, 0.0026, 1.3);
  mountainLayer(ctx, W, gy, camX, s, 0.25, '#d9937a', 105, 0.0045, 4.1);
  mountainLayer(ctx, W, gy, camX, s, 0.45, '#b8705f', 55, 0.009, 7.7);
}

function mountainLayer(ctx, W, gy, camX, s, par, col, amp, freq, seed) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.moveTo(0, gy);
  for (let x = 0; x <= W + 12; x += 12) {
    const wx = camX * par + (x - W / 2) / s;
    const n = Math.sin(wx * freq + seed) * 0.5
      + Math.sin(wx * freq * 2.3 + seed * 3.1) * 0.3
      + Math.abs(Math.sin(wx * freq * 5.3 + seed * 1.7)) * 0.2;
    ctx.lineTo(x, gy - (n * 0.5 + 0.75) * amp * s);
  }
  ctx.lineTo(W, gy);
  ctx.closePath();
  ctx.fill();
}

// Dünya koordinatlarında çizilir (dönüşüm ayarlı).
function drawGround(ctx, left, right, bottom) {
  const w = right - left + 100;
  ctx.fillStyle = '#c79a74';
  ctx.fillRect(left - 50, 0, w, 14);
  ctx.fillStyle = '#b3845f';
  ctx.fillRect(left - 50, 14, w, 26);
  ctx.fillStyle = '#9e7150';
  ctx.fillRect(left - 50, 40, w, Math.max(0, bottom - 40));
  ctx.fillStyle = '#7d5840';
  ctx.fillRect(left - 50, -1.5, right - left + 100, 3);

  const step = 70;
  for (let i = Math.floor(left / step) - 1; i <= Math.ceil(right / step) + 1; i++) {
    const h = hash1(i), x = i * step + hash1(i + 91) * step;
    if (h < 0.35) {
      // çimen tutamı
      ctx.strokeStyle = '#7c6a3c';
      ctx.lineWidth = 1.6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      for (let k = -2; k <= 2; k++) {
        ctx.moveTo(x + k * 2, 0);
        ctx.lineTo(x + k * 3.5, -6 - Math.abs(2 - Math.abs(k)) * 2.5);
      }
      ctx.stroke();
    } else if (h < 0.45) {
      ctx.fillStyle = '#8f6a4f';
      ctx.beginPath();
      ctx.ellipse(x, 1, 7 + hash1(i + 3) * 6, 4, 0, Math.PI, 0);
      ctx.fill();
    } else if (h < 0.6) {
      ctx.fillStyle = '#a57a58';
      ctx.fillRect(x, 20 + hash1(i + 7) * 25, 10 + hash1(i + 5) * 14, 3);
    } else if (h > 0.965) {
      drawLantern(ctx, x);
    }
  }
}

function drawLantern(ctx, x) {
  ctx.fillStyle = '#5b3d31';
  ctx.fillRect(x - 2.5, -46, 5, 46);
  ctx.fillRect(x - 11, -50, 22, 4);
  ctx.fillStyle = '#e8573d';
  ctx.fillRect(x - 7, -64, 14, 14);
  ctx.fillStyle = '#5b3d31';
  ctx.fillRect(x - 10, -67, 20, 3);
}
