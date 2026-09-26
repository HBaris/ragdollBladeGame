import { clamp, rand } from './util.js';

// Tüm sesler WebAudio ile anlık sentezlenir; dosya yok. Tarayıcılar sesi ilk
// kullanıcı etkileşimine kadar kilitler, bu yüzden init() ilk tuş/dokunuşta çağrılır.
export const Sfx = (() => {
  let ac = null, out = null, noise = null, muted = false;
  const last = {};

  function init() {
    if (ac) { if (ac.state === 'suspended') ac.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try { ac = new AC(); } catch (e) { ac = null; return; }
    out = ac.createGain();
    out.gain.value = 0.5;
    const comp = ac.createDynamicsCompressor();
    out.connect(comp);
    comp.connect(ac.destination);
    noise = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
    const d = noise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }

  // Aynı sesin kısa aralıkla üst üste binmesini engeller.
  function ok(name, gap) {
    if (!ac || muted || ac.state !== 'running') return false;
    const t = ac.currentTime;
    if (last[name] !== undefined && t - last[name] < gap) return false;
    last[name] = t;
    return true;
  }

  function env(g, t0, dur, vol) {
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + Math.min(0.012, dur * 0.25));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  }

  function nz(t0, dur, type, f0, f1, q, vol) {
    const src = ac.createBufferSource();
    src.buffer = noise;
    src.loop = true;
    const f = ac.createBiquadFilter();
    f.type = type;
    f.Q.value = q;
    f.frequency.setValueAtTime(f0, t0);
    f.frequency.exponentialRampToValueAtTime(f1, t0 + dur);
    const g = ac.createGain();
    env(g, t0, dur, vol);
    src.connect(f); f.connect(g); g.connect(out);
    src.start(t0, Math.random() * 0.8);
    src.stop(t0 + dur + 0.05);
  }

  function tone(t0, dur, type, f0, f1, vol) {
    const o = ac.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t0);
    o.frequency.exponentialRampToValueAtTime(f1, t0 + dur);
    const g = ac.createGain();
    env(g, t0, dur, vol);
    o.connect(g); g.connect(out);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }

  return {
    init,
    toggleMute() { muted = !muted; return muted; },
    get muted() { return muted; },
    swoosh(stage) {
      if (!ok('swoosh', 0.03)) return;
      const t = ac.currentTime, long = stage === 2;
      nz(t, long ? 0.28 : 0.16, 'bandpass', long ? 400 : 700, long ? 2600 : 3400, 1.4, 0.32);
    },
    slice() {
      if (!ok('slice', 0.02)) return;
      const t = ac.currentTime;
      nz(t, 0.08, 'highpass', 2500, 7000, 0.7, 0.3);
      tone(t, 0.2, 'triangle', rand(1800, 2300), 1100, 0.06);
      nz(t + 0.01, 0.24, 'lowpass', 1100, 180, 1.2, 0.45);
    },
    wound() {
      if (!ok('wound', 0.03)) return;
      const t = ac.currentTime;
      nz(t, 0.18, 'lowpass', 900, 150, 1, 0.45);
      tone(t, 0.12, 'sine', 160, 60, 0.25);
    },
    punch() {
      if (!ok('punch', 0.05)) return;
      const t = ac.currentTime;
      tone(t, 0.15, 'sine', 140, 45, 0.5);
      nz(t, 0.1, 'lowpass', 1500, 200, 1, 0.35);
    },
    hurt() {
      if (!ok('hurt', 0.1)) return;
      const t = ac.currentTime;
      tone(t, 0.3, 'sawtooth', 320, 90, 0.12);
    },
    die() {
      if (!ok('die', 0.5)) return;
      const t = ac.currentTime;
      tone(t, 1.0, 'sawtooth', 240, 40, 0.14);
      nz(t, 0.6, 'lowpass', 800, 60, 1, 0.3);
    },
    thud(v) {
      if (!ok('thud', 0.06)) return;
      const t = ac.currentTime;
      const vol = clamp(v / 2500, 0.04, 0.3);
      tone(t, 0.12, 'sine', 120, 45, vol);
      nz(t, 0.07, 'lowpass', 500, 120, 1, vol * 0.8);
    },
    clang() {
      if (!ok('clang', 0.05)) return;
      const t = ac.currentTime;
      tone(t, 0.35, 'square', 1750, 1600, 0.05);
      tone(t, 0.3, 'triangle', 2650, 2500, 0.07);
      nz(t, 0.06, 'highpass', 4000, 8000, 1, 0.25);
    },
    jump(p) {
      if (!ok('jump', 0.05)) return;
      const t = ac.currentTime, k = p || 1;
      tone(t, 0.12, 'sine', 260 * k, 560 * k, 0.07);
    },
    combo(n) {
      if (!ok('combo', 0.04)) return;
      const t = ac.currentTime, f = 520 * Math.pow(1.06, Math.min(n, 24));
      tone(t, 0.14, 'triangle', f, f * 1.5, 0.07);
    },
    enemySwing() {
      if (!ok('eswing', 0.05)) return;
      nz(ac.currentTime, 0.14, 'bandpass', 500, 1800, 1.2, 0.18);
    },
    splash() {
      if (!ok('splash', 0.1)) return;
      const t = ac.currentTime;
      nz(t, 0.5, 'lowpass', 2400, 300, 0.8, 0.4);
      nz(t + 0.03, 0.3, 'bandpass', 1200, 500, 1, 0.2);
    },
    win() {
      if (!ok('win', 1)) return;
      const t = ac.currentTime;
      [523, 659, 784, 1047].forEach((f, i) => tone(t + i * 0.09, 0.22, 'triangle', f, f, 0.08));
    },
    heal() {
      if (!ok('heal', 0.2)) return;
      const t = ac.currentTime;
      tone(t, 0.12, 'sine', 660, 660, 0.08);
      tone(t + 0.1, 0.18, 'sine', 990, 990, 0.08);
    },
  };
})();
