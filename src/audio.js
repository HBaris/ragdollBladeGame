import { clamp, rand } from './util.js';

// Tüm sesler WebAudio ile anlık sentezlenir; dosya yok. Tarayıcılar sesi ilk
// kullanıcı etkileşimine kadar kilitler, bu yüzden init() ilk tuş/dokunuşta çağrılır.
export const Sfx = (() => {
  let ac = null, out = null, noise = null, muted = false;
  let musicBus = null, ambBus = null;
  const MUSIC_VOL = 0.45;
  const last = {};
  const onReady = [];

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
    musicBus = ac.createGain(); musicBus.gain.value = MUSIC_VOL; musicBus.connect(out);
    ambBus = ac.createGain(); ambBus.gain.value = 0.35; ambBus.connect(out);
    for (const f of onReady) f();
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

  function nz(t0, dur, type, f0, f1, q, vol, dest) {
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
    src.connect(f); f.connect(g); g.connect(dest || out);
    src.start(t0, Math.random() * 0.8);
    src.stop(t0 + dur + 0.05);
  }

  function tone(t0, dur, type, f0, f1, vol, dest) {
    const o = ac.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t0);
    o.frequency.exponentialRampToValueAtTime(f1, t0 + dur);
    const g = ac.createGain();
    env(g, t0, dur, vol);
    o.connect(g); g.connect(dest || out);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }

  // Filtreli nota (müzik): dalga tipi, frekans, süre, filtre zarfı, ses.
  function note(t0, dur, type, f, vol, cut0, cut1, attack = 0.005, dest) {
    const o = ac.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f, t0);
    const fl = ac.createBiquadFilter();
    fl.type = 'lowpass';
    fl.frequency.setValueAtTime(cut0, t0);
    fl.frequency.exponentialRampToValueAtTime(Math.max(60, cut1), t0 + dur);
    const g = ac.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(fl); fl.connect(g); g.connect(dest || musicBus);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }

  // ---------- müzik: kodla üretilen, dövüşün yoğunluğuna göre katman ekleyen döngü ----------
  // Üsluplar: samuray (pentatonik koto + taiko), savaş (dörtnala ritim), destansı (titan:
  // ağır davul + koro dolgusu), denizci (6/8). Katmanlar: 0 bas ve zil, 1 davul, 2 melodi.
  const midi = (m) => 440 * Math.pow(2, (m - 69) / 12);
  const STYLES = {
    samurai: { bpm: 104, steps: 16, root: 50, scale: [0, 3, 5, 7, 10], lead: 'pluck', drums: 'taiko', chords: [[0], [-2], [-4], [-5]] },
    war: { bpm: 132, steps: 16, root: 45, scale: [0, 2, 3, 5, 7, 8, 10], lead: 'brass', drums: 'gallop', chords: [[0], [-4], [-2], [-5]] },
    epic: { bpm: 88, steps: 16, root: 45, scale: [0, 2, 3, 5, 7, 8, 10], lead: 'brass', drums: 'epic', chords: [[0, 3, 7], [-4, 0, 3], [-9, -5, -2], [-2, 2, 5]] },
    sea: { bpm: 104, steps: 12, root: 50, scale: [0, 2, 3, 5, 7, 9, 10], lead: 'squeeze', drums: 'sea', chords: [[0, 3, 7], [-2, 2, 5], [-5, -2, 2], [-7, -3, 0]] },
  };
  const M = { style: null, want: null, on: true, timer: null, next: 0, step: 0, bar: 0, inten: 0, target: 0, motif: null, seed: 1 };
  try { M.on = localStorage.getItem('rk3dMusic') !== '0'; } catch (e) { /* gizli sekme */ }
  const rnd = () => { M.seed = (M.seed * 16807) % 2147483647; return M.seed / 2147483647; };
  function newMotif(st) {
    // İki ölçülük motif: sekizlik notalar, ara ara es; pentatonik/dizi üzerinde rastgele yürüyüş.
    const n = st.steps === 12 ? 12 : 16, out = [];
    let deg = 2 + Math.floor(rnd() * 3);
    for (let i = 0; i < n; i++) {
      if (rnd() < 0.3) { out.push(null); continue; }
      deg = Math.max(0, Math.min(9, deg + Math.floor(rnd() * 5) - 2));
      out.push(deg);
    }
    return out;
  }
  function degToMidi(st, deg, oct) {
    const L = st.scale.length;
    return st.root + 12 * (oct + Math.floor(deg / L)) + st.scale[deg % L];
  }
  function drum(st, i, t, lv) {
    const S = st.steps;
    if (st.drums === 'taiko') {
      if (lv >= 1 && (i === 0 || i === 6 || i === 8 || (i === 14 && M.bar % 2))) { tone(t, 0.3, 'sine', 120, 48, 0.55, musicBus); nz(t, 0.07, 'lowpass', 900, 200, 1, 0.25, musicBus); }
      if (lv >= 1 && (i === 4 || i === 12)) nz(t, 0.05, 'bandpass', 2600, 2000, 3, 0.18, musicBus);
      if (i % 2 === 0) nz(t, 0.03, 'highpass', 7000, 9000, 1, lv >= 1 ? 0.06 : 0.035, musicBus);
    } else if (st.drums === 'gallop') {
      if (lv >= 1 && [0, 3, 6, 8, 11, 14].includes(i)) { tone(t, 0.18, 'sine', 110, 50, i % 8 === 0 ? 0.5 : 0.32, musicBus); }
      if (lv >= 1 && (i === 4 || i === 12)) nz(t, 0.08, 'bandpass', 1800, 1200, 1.5, 0.22, musicBus);
      nz(t, 0.025, 'highpass', 8000, 9000, 1, 0.04, musicBus);
    } else if (st.drums === 'epic') {
      if (lv >= 1 && (i === 0 || i === 10)) { tone(t, 0.7, 'sine', 80, 30, 0.7, musicBus); nz(t, 0.4, 'lowpass', 400, 60, 1, 0.3, musicBus); }
      if (lv >= 1 && (i === 6 || i === 14)) tone(t, 0.25, 'sine', 140, 70, 0.3, musicBus);
      if (lv >= 2 && i % 2 === 1) nz(t, 0.04, 'bandpass', 3000, 2500, 2, 0.06, musicBus);
    } else {
      if (lv >= 1 && (i === 0 || i === 6)) tone(t, 0.25, 'sine', 100, 50, 0.45, musicBus);
      if (lv >= 1 && (i === 3 || i === 9)) nz(t, 0.06, 'bandpass', 2200, 1600, 2, 0.16, musicBus);
      if (i % 3 === 0) nz(t, 0.03, 'highpass', 7000, 9000, 1, 0.04, musicBus);
    }
    return S;
  }
  function schedStep(t) {
    const st = STYLES[M.style];
    const i = M.step % st.steps, lv = M.inten > 0.5 ? 2 : M.inten > 0.25 ? 1 : 0;
    if (i === 0) {
      M.bar++;
      if (!M.motif || M.bar % 8 === 1) M.motif = newMotif(st);
    }
    const chord = st.chords[Math.floor(M.bar / 2) % st.chords.length];
    const beat = 60 / st.bpm, stepDur = st.steps === 12 ? beat / 3 : beat / 4;
    drum(st, i, t, lv);
    // Bas: her ölçünün başında ve ortasında akorun kökü.
    if (i === 0 || i === st.steps / 2) note(t, beat * 1.6, 'triangle', midi(st.root - 12 + chord[0]), 0.32, 700, 200, 0.01);
    if (st.drums === 'gallop' && (i % 4 === 2)) note(t, beat * 0.4, 'sawtooth', midi(st.root - 12 + chord[0]), 0.12, 900, 300, 0.01);
    // Destansı/denizci: akor dolgusu ölçü başında.
    if ((M.style === 'epic' || M.style === 'sea') && i === 0) {
      for (const c of chord) for (const det of [-6, 6]) {
        const o = ac.createOscillator(); o.type = 'sawtooth'; o.frequency.value = midi(st.root + c); o.detune.value = det;
        const fl = ac.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = M.style === 'epic' ? 700 : 1100;
        const g = ac.createGain(); const d = beat * (st.steps === 12 ? 3 : 4);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.03, t + 0.35); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
        o.connect(fl); fl.connect(g); g.connect(musicBus); o.start(t); o.stop(t + d + 0.05);
      }
    }
    // Melodi (yoğunluk yüksekken): motifin sekizlikleri.
    const mi = st.steps === 12 ? i : i >> 1;
    if (lv >= 2 && (st.steps === 12 || i % 2 === 0)) {
      const deg = M.motif[(mi + (M.bar % 2) * (st.steps === 12 ? 6 : 8)) % M.motif.length];
      if (deg !== null) {
        const f = midi(degToMidi(st, deg, 1) + chord[0] * 0);
        if (st.lead === 'pluck') { note(t, 0.7, 'square', f, 0.07, 4200, 700, 0.003); note(t, 0.5, 'triangle', f * 2, 0.03, 3000, 900, 0.003); }
        else if (st.lead === 'brass') note(t, stepDur * 2.2, 'sawtooth', f, 0.06, 2200, 900, 0.03);
        else note(t, stepDur * 2.4, 'square', f, 0.045, 1800, 1100, 0.02);
      }
    }
    return stepDur;
  }
  function tick() {
    if (!ac || ac.state !== 'running' || !M.style) return;
    M.inten += (M.target - M.inten) * 0.08;
    while (M.next < ac.currentTime + 0.15) {
      if (M.next < ac.currentTime - 0.3) M.next = ac.currentTime + 0.05; // sekme döndüyse atla
      M.next += schedStep(M.next);
      M.step++;
    }
  }
  function startMusic() {
    if (!ac || !M.on || !M.want) return;
    if (M.style !== M.want) { M.style = M.want; M.step = 0; M.bar = 0; M.motif = null; M.seed = 1 + Math.floor(Math.random() * 1e6); M.next = ac.currentTime + 0.1; }
    musicBus.gain.cancelScheduledValues(ac.currentTime);
    musicBus.gain.setTargetAtTime(MUSIC_VOL, ac.currentTime, 0.3);
    if (!M.timer) M.timer = setInterval(tick, 40);
  }
  onReady.push(startMusic);

  // ---------- ortam sesi: deniz / rüzgâr (sürekli, yavaşça dalgalanan filtreli gürültü) ----------
  const A = { kind: null, nodes: null, want: null };
  function startAmb() {
    if (!ac || A.kind === A.want) return;
    if (A.nodes) { const n = A.nodes; n.g.gain.setTargetAtTime(0.0001, ac.currentTime, 0.3); setTimeout(() => { try { n.src.stop(); n.lfo.stop(); } catch (e) { /* bitti */ } }, 1500); A.nodes = null; }
    A.kind = A.want;
    if (!A.kind) return;
    const src = ac.createBufferSource(); src.buffer = noise; src.loop = true;
    const f = ac.createBiquadFilter(); f.type = A.kind === 'sea' ? 'lowpass' : 'bandpass'; f.frequency.value = A.kind === 'sea' ? 520 : 420; f.Q.value = A.kind === 'sea' ? 0.7 : 0.9;
    const g = ac.createGain(); g.gain.value = 0.0001;
    const lfo = ac.createOscillator(); lfo.frequency.value = A.kind === 'sea' ? 0.13 : 0.07;
    const lg = ac.createGain(); lg.gain.value = A.kind === 'sea' ? 0.25 : 0.12;
    lfo.connect(lg); lg.connect(g.gain);
    src.connect(f); f.connect(g); g.connect(ambBus);
    g.gain.setTargetAtTime(A.kind === 'sea' ? 0.4 : 0.2, ac.currentTime, 0.8);
    src.start(); lfo.start();
    A.nodes = { src, lfo, g };
  }
  onReady.push(startAmb);

  return {
    init,
    toggleMute() { muted = !muted; if (out) out.gain.setTargetAtTime(muted ? 0 : 0.5, ac.currentTime, 0.05); return muted; },
    // Müzik: üslup seç (ses motoru ilk dokunuşla açılınca başlar), yoğunluk 0..1.
    music(style) { M.want = style; startMusic(); },
    intensity(x) { M.target = Math.max(0, Math.min(1, x)); },
    get musicOn() { return M.on; },
    toggleMusic() {
      M.on = !M.on;
      try { localStorage.setItem('rk3dMusic', M.on ? '1' : '0'); } catch (e) { /* gizli sekme */ }
      if (!ac) return M.on;
      if (M.on) { M.style = null; startMusic(); } else { musicBus.gain.setTargetAtTime(0.0001, ac.currentTime, 0.2); M.style = null; }
      return M.on;
    },
    ambience(kind) { A.want = kind || null; startAmb(); },
    // Uygulama arka plana geçince ses motoru uyusun (pil), dönünce uyansın.
    suspend() { if (ac && ac.state === 'running') ac.suspend(); },
    resume() { if (ac && ac.state === 'suspended') ac.resume(); },
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
    // Drift: kısa bir gıcırtı ve sürtünme.
    skid() {
      if (!ok('skid', 0.2)) return;
      const t = ac.currentTime;
      tone(t, 0.22, 'sine', rand(950, 1150), 720, 0.05);
      nz(t, 0.25, 'bandpass', 2200, 1400, 2, 0.12);
    },
    // Kılıç ucu yere sürtünce: kısa, tiz bir cızırtı.
    scrape() {
      if (!ok('scrape', 0.12)) return;
      const t = ac.currentTime;
      nz(t, 0.12, 'bandpass', 3200, 1700, 3, 0.1);
    },
    // Gergin halat kopunca: kalın bir "tıng" ve şaklama.
    twang() {
      if (!ok('twang', 0.08)) return;
      const t = ac.currentTime;
      tone(t, 0.6, 'triangle', rand(170, 210), 70, 0.22);
      tone(t, 0.35, 'sawtooth', 340, 120, 0.05);
      nz(t, 0.07, 'highpass', 2500, 6000, 1, 0.35);
    },
    // Buhar: uyarıda uzun ince tıslama, patlamada kalın bir fış.
    hiss(blast) {
      if (!ok(blast ? 'hissB' : 'hiss', 0.3)) return;
      const t = ac.currentTime;
      if (blast) { nz(t, 0.9, 'lowpass', 3000, 400, 0.7, 0.4); tone(t, 0.4, 'sine', 90, 40, 0.3); }
      else nz(t, 1.2, 'highpass', 5000, 3000, 0.8, 0.09);
    },
    // Savaş borusu: yeni dalga.
    horn() {
      if (!ok('horn', 1)) return;
      const t = ac.currentTime;
      for (const [f, d] of [[146.8, 0], [220, 0.05]]) note(t + d, 1.1, 'sawtooth', f, 0.16, 900, 500, 0.15, out);
    },
    // Büyük dalga: yükselip alçalan uğultu.
    wave() {
      if (!ok('wave', 1)) return;
      const t = ac.currentTime;
      nz(t, 1.6, 'lowpass', 300, 1400, 0.8, 0.35);
      nz(t + 0.6, 1.2, 'lowpass', 1400, 200, 0.8, 0.3);
    },
    // Gök gürültüsü: şimşekten biraz sonra çatırtı ve uzun gümbürtü.
    thunder() {
      if (!ok('thunder', 2)) return;
      const t = ac.currentTime + rand(0.15, 0.6);
      nz(t, 0.25, 'highpass', 1500, 600, 0.7, 0.25);
      nz(t + 0.05, 2.4, 'lowpass', 500, 60, 0.9, 0.55);
    },
    // Halat atma: fermuar gibi yükselen vızıltı.
    rope() {
      if (!ok('rope', 0.08)) return;
      const t = ac.currentTime;
      nz(t, 0.22, 'bandpass', 900, 3600, 4, 0.22);
      tone(t, 0.12, 'triangle', 600, 1400, 0.04);
    },
    // Kanca titana saplandı.
    thunk() {
      if (!ok('thunk', 0.08)) return;
      const t = ac.currentTime;
      tone(t, 0.14, 'sine', 190, 70, 0.3);
      nz(t, 0.06, 'lowpass', 1600, 300, 1, 0.25);
    },
    // At nalı (v: 0..1 uzaklığa ve hıza göre).
    hoof(v) {
      if (!ok('hoof', 0.05) || v < 0.03) return;
      const t = ac.currentTime;
      tone(t, 0.08, 'sine', 95, 50, 0.22 * v);
      nz(t, 0.05, 'bandpass', 500, 300, 1.5, 0.18 * v);
    },
    // Titan adımı: yeri döven gümbürtü.
    titanStep(v) {
      if (!ok('titanStep', 0.12) || v < 0.03) return;
      const t = ac.currentTime;
      tone(t, 0.6, 'sine', 62, 26, 0.6 * v);
      nz(t, 0.35, 'lowpass', 300, 60, 1, 0.35 * v);
    },
    // Testere kolu yakından geçerken vızıltı.
    saw(v) {
      if (!ok('saw', 0.28) || v < 0.05) return;
      const t = ac.currentTime;
      nz(t, 0.16, 'bandpass', 2600, 1800, 6, 0.12 * v);
      tone(t, 0.14, 'sawtooth', 210, 180, 0.03 * v);
    },
    click() {
      if (!ok('click', 0.03)) return;
      tone(ac.currentTime, 0.04, 'triangle', 1500, 900, 0.06);
    },
    heal() {
      if (!ok('heal', 0.2)) return;
      const t = ac.currentTime;
      tone(t, 0.12, 'sine', 660, 660, 0.08);
      tone(t + 0.1, 0.18, 'sine', 990, 990, 0.08);
    },
  };
})();
