import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { clamp, lerp, rand, pick, damp, easeOutQuad, wrapAngle, loadNum, saveNum, segSeg, segOut, ptSeg, ptOut } from './util.js';
import { Sfx } from './audio.js';
import { J, MIN_CUT_LEN, sweepRagdoll, sweepBlade, sweepNeckZone } from './ragdoll.js';
import { Character, BLADE_LEN, HORSE_BLADE_LEN, PLAYER_SPEED, TITAN_DAGGER } from './character.js';
import { LooseSword, placeSword, BLADE_START, disposeSwordMesh } from './sword.js';
import { Effects } from './effects.js';
import { World } from './world.js';
import { Input } from './input.js';
import { Hud } from './hud.js';
import { Horse } from './horse.js';

const MAX_STEP = 1 / 120;
const STEAM_WARN = 1.3; // titanın ensesi patlamadan bu kadar önce tüter (s)
const PLAYER_COLOR = 0xffa51f;
const ENEMY_COLOR = 0xa51cff;
const ALLY_COLOR = 0x4fb4ff;
const FLYER_COLOR = 0x3fd6c8; // halatlı dostlar biraz yeşilimsi: ayırt edilsin
const BOSS_COLOR = 0x6a12c2;
const TITAN_COLOR = 0xb45cf0;
const ENV_NAMES = { meadow: 'Çayır', ice: 'Buz Sahanlığı', dojo: 'Gün Batımı Dojo', roof: 'Halatlı Platform', grid: 'Karanlık Izgara', saw: 'Testere Arenası', ship: 'Fırtınalı Gemi' };
// Düello ortamları: tek numaralı düello/boss seviyeleri karanlık ızgara; çift numaralılar buz,
// çayır ve dojo arasında sırayla döner.
const DUEL_ENVS = ['ice', 'meadow', 'dojo'];
// İlk tur elle sıralı (zorluk yavaşça artar); sonraki her turda aynı türler karışık sırayla
// gelir (seviye numarasından türetilir: aynı seviye hep aynıdır), yan yana aynı tür gelmez.
const LEVEL_CYCLE = ['duel', 'duel', 'roof', 'battle', 'saw', 'duel', 'boss', 'horse', 'ship', 'waves', 'roof', 'titan', 'titanwar'];
// Değiştiriciler: 15. seviyeden sonra seviyelere rastgele eklenir (aynı seviye hep aynı).
const MUTATORS = {
  night: { name: 'GECE', w: 3, types: ['duel', 'boss', 'roof', 'battle', 'saw', 'horse', 'ship', 'waves', 'titan', 'titanwar'] },
  giants: { name: 'DEVLER', w: 2, types: ['duel', 'boss', 'roof', 'saw', 'ship', 'waves'] },
  dwarves: { name: 'CÜCELER', w: 2, types: ['duel', 'roof', 'saw', 'ship', 'waves'] },
  dual: { name: 'ÇİFT KILIÇLI DÜŞMAN', w: 2, types: ['duel', 'boss', 'roof', 'battle', 'saw', 'ship', 'waves'] },
  onehit: { name: 'TEK VURUŞ', w: 0.7, types: ['duel', 'boss', 'roof', 'saw', 'ship', 'waves'] }, // en acımasızı: nadir
};
const MUTATOR_FROM = 15;
// Boyun darbe sayısı (son darbe keser). Son kesiş yeni bir dalış ister: iki bıçak aynı
// dalışta hem son darbeyi vurup hem kesemez. Çift kılıçla temiz üç dalış.
const TITAN_NECK_HP = 4, NECK_CUT_GAP = 0.8;
const NPC_TITAN_CUT = 0.12; // müttefikin darbesi titanın uzvunu bu olasılıkla koparır (çoğu sıyırır)
// Titan muharebesi takviyeleri: ilk 60 sn boyunca WAVE_GAP'te bir üçer kişi; sıra halatlı,
// atlı, piyade karışık (~%30 halatlı, ~%30 atlı).
const WAVE_GAP = 7.5, WAVE_END = 60, WAVE_MAX_ALIVE = 18;
const WAVE_MIX = ['flyer', 'cav', 'foot', 'foot', 'flyer', 'cav', 'foot', 'flyer', 'foot', 'cav'];
const DEATH_QUIPS = [
  'Ragdoll fiziği 1 — Sen 0',
  'Parçalarını toplamak biraz sürecek.',
  'Kılıcın keskin, refleksin değil.',
  'Hiç değilse güzel uçtun.',
];

// Çift numaralı düello/boss seviyelerini sayarak ortam seçer: seviye numarasına göre seçince
// döngü uzunluğu değişince bir ortam (buz) 24 seviyede bir gelecek kadar seyrekleşmişti.
function duelEnv(n) {
  if (n % 2) return 'grid';
  let k = 0;
  for (let m = 2; m < n; m += 2) {
    const t = typeAt(m);
    if (t === 'duel' || t === 'boss') k++;
  }
  return DUEL_ENVS[k % DUEL_ENVS.length];
}

// Seviye numarasından sabit rastgele sayı üreteci (aynı seviye her açılışta aynı çıkar).
function seeded(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// Turun sırası: ilk tur sabit, sonrakiler karışık; tur sınırında da aynı tür üst üste gelmez.
const _rounds = [LEVEL_CYCLE.slice()];
function roundOrder(r) {
  while (_rounds.length <= r) {
    const k = _rounds.length, rnd = seeded(9173 + k * 7919), prev = _rounds[k - 1][LEVEL_CYCLE.length - 1];
    let o;
    // Karıştır; yan yana aynı tür (tur sınırı dahil) çıkarsa yeniden karıştır.
    for (let tries = 0; tries < 200; tries++) {
      o = LEVEL_CYCLE.slice();
      for (let i = o.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [o[i], o[j]] = [o[j], o[i]]; }
      if (o.every((t, i) => t !== (i ? o[i - 1] : prev))) break;
    }
    _rounds.push(o);
  }
  return _rounds[r];
}
export function typeAt(n) {
  const L = LEVEL_CYCLE.length, r = Math.floor((n - 1) / L);
  return roundOrder(r)[(n - 1) % L];
}

// 15. seviyeden sonra bir değiştirici (40'tan sonra bazen iki), seviye numarasından türetilir.
function mutatorsFor(n, type) {
  if (n < MUTATOR_FROM) return [];
  const rnd = seeded(n * 2654435761);
  const p = Math.min(0.7, 0.4 + 0.015 * (n - MUTATOR_FROM));
  if (rnd() > p) return [];
  const pool = Object.keys(MUTATORS).filter((k) => MUTATORS[k].types.includes(type));
  const out = [];
  const count = n >= 40 && rnd() < 0.3 ? 2 : 1;
  while (out.length < count && pool.length) {
    // Ağırlıklı seçim: gece sık, tek vuruş nadir.
    let x = rnd() * pool.reduce((a, k) => a + MUTATORS[k].w, 0), idx = 0;
    while (idx < pool.length - 1 && (x -= MUTATORS[pool[idx]].w) > 0) idx++;
    const k = pool.splice(idx, 1)[0];
    if ((k === 'giants' && out.includes('dwarves')) || (k === 'dwarves' && out.includes('giants'))) continue;
    out.push(k);
  }
  return out;
}

// Seviye tasarımı: düello, düello, platform, muharebe, düello, boss, at, platform, titan,
// titan muharebesi döngüsü; zorluk yavaşça artar.
export function levelSpec(n) {
  const spec = baseSpec(n);
  spec.mutators = mutatorsFor(n, spec.type);
  if (spec.mutators.includes('dwarves')) for (let i = 0; i < 2; i++) spec.enemies.push('normal');
  return spec;
}

function baseSpec(n) {
  const type = typeAt(n);
  const round = Math.floor((n - 1) / LEVEL_CYCLE.length);
  const skill = clamp((n - 1) / 24, 0, 1);
  // Dalga savunması: dojo arenasında art arda gelen, gittikçe kalabalıklaşan dalgalar.
  if (type === 'waves') {
    const waves = [];
    const W = Math.min(6, 4 + round);
    for (let w = 0; w < W; w++) {
      const g = [];
      for (let i = 0; i < Math.min(7, 2 + w + Math.floor(round / 2)); i++) g.push('normal');
      if (w === W - 1) g.push('boss');
      waves.push(g);
    }
    return { type, env: 'dojo', big: false, skill: skill * 0.85, boss: false, enemies: waves[0], waves };
  }
  // Testere arenası: dönen dev bıçaklar herkesi keser.
  if (type === 'saw') return { type, env: 'saw', big: false, skill, boss: false, enemies: new Array(Math.min(5, 3 + round)).fill('normal') };
  // Fırtınalı gemi: dalgalarla sallanan güverte, düşen boğulur.
  if (type === 'ship') return { type, env: 'ship', big: false, skill, boss: false, enemies: new Array(Math.min(5, 2 + round)).fill('normal') };
  // Halatlı platform küçük: sadece normal düşmanlar sığar.
  if (type === 'roof') return { type, env: 'roof', big: false, skill, boss: false, enemies: new Array(Math.min(4, 2 + round)).fill('normal') };
  if (type === 'horse') return { type, env: 'meadow', big: true, skill, boss: false, enemies: new Array(Math.min(6, 3 + round)).fill('big') };
  if (type === 'titan') return { type, env: 'meadow', big: true, skill, boss: false, enemies: ['titan'] };
  // Titan muharebesi: yanında kalabalık bir piyade birliği, karşında üç titan.
  // İlk birlik küçük; gerisi ilk 60 saniyede dalga dalga gelir (bkz. allyWaves).
  if (type === 'titanwar') return { type, env: 'meadow', big: true, skill, boss: false, enemies: ['titan', 'titan', 'titan'], allies: ['foot', 'flyer', 'foot', 'cav', 'foot', 'flyer', 'foot', 'cav'] };
  if (type === 'battle') {
    // Muharebe: at sırtında, kalabalık bir düşman ordusuna karşı birkaç müttefikle. Düşmanın
    // dörtte biri, müttefiklerin ikisi atlı.
    const n = Math.min(24, 14 + 3 * round), cav = Math.floor(n / 4);
    const enemies = [];
    for (let i = 0; i < n; i++) enemies.push(i < cav ? 'cav' : 'normal');
    return { type, env: 'meadow', big: true, skill: skill * 0.8, boss: false, enemies, allies: ['cav', 'cav', 'foot', 'foot', 'foot'] };
  }
  const env = duelEnv(n);
  const boss = type === 'boss';
  const enemies = [];
  if (boss) {
    enemies.push('boss');
    for (let i = 0; i < round; i++) enemies.push('normal');
  } else {
    const c = Math.min(4, 1 + Math.floor((n - 1) / 4));
    for (let i = 0; i < c; i++) enemies.push('normal');
  }
  return { type, env, big: false, skill, boss, enemies };
}

const _v = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _seg = { bx: 0, by: 0, bz: 0, tx: 0, ty: 0, tz: 0 };

export class Game {
  constructor() {
    const gl = document.getElementById('gl');
    const r = new THREE.WebGLRenderer({ canvas: gl, antialias: true, powerPreference: 'high-performance' });
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.0;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    this.renderer = r;
    this.scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(r);
    this.scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.85;
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 900);
    this.world = new World(this.scene);
    this.fx = new Effects(this.scene);
    const ui = document.getElementById('ui');
    this.input = new Input(ui);
    this.input.onKeyAction = (c) => {
      if (c === 'KeyR') this.restartLevel();
      if (c === 'KeyM') this.toggleSound();
    };
    this.hud = new Hud(this, ui);
    this.soundOn = true;
    this.highQuality = loadNum('rk3dQuality', 1) === 1;
    this.chars = [];
    this.enemies = [];
    this.allies = [];
    this.goodGuys = [];   // oyuncu + müttefikler
    this.horses = [];
    this.loose = [];
    this.time = 0;
    this.timeScale = 1; this.slowT = 0; this.slowScale = 1;
    this.shakeAmt = 0;
    this.camYaw = 0;
    this.camTarget = null;
    this.lookAt = new THREE.Vector3();
    this.hintT = 8;
    this.lastH = MAX_STEP;
    this.lastAttackT = -9;
    this._bb = {};
    this.titan = null;
    this.titans = [];
    this.allyRopes = [];
    this.hookSide = 1;
    this.raycaster = new THREE.Raycaster();
    this.ropeMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1, 6).translate(0, 0.5, 0), new THREE.MeshStandardMaterial({ color: 0x2b2b30, roughness: 0.6 }));
    this.ropeMesh.visible = false;
    this.ropeMesh.frustumCulled = false;
    this.scene.add(this.ropeMesh);
    this.projectFn = (x, y, z) => this.project(x, y, z);
    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.applyQuality();
    this.startLevel(loadNum('rk3dLevel', 1));
  }

  // ---------- kurulum ----------

  resize() {
    const W = window.innerWidth, H = window.innerHeight;
    this.W = W; this.H = H;
    this.renderer.setSize(W, H, false);
    this.renderer.domElement.style.width = W + 'px';
    this.renderer.domElement.style.height = H + 'px';
    const aspect = W / H;
    this.camera.aspect = aspect;
    // Dikey ekranda da yatayda yeterli görüş olsun.
    this.camera.fov = clamp(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(27)) / aspect) * 180 / Math.PI, 50, 86);
    this.camera.updateProjectionMatrix();
    this.hud.resize();
  }

  applyQuality() {
    const q = this.highQuality;
    this.renderer.setPixelRatio(q ? Math.min(window.devicePixelRatio || 1, 2) : 1);
    this.renderer.shadowMap.enabled = q;
    this.world.sun.castShadow = q;
    this.scene.traverse((o) => { if (o.material && o.isMesh) o.material.needsUpdate = true; });
    this.resize();
  }

  toggleQuality() {
    this.highQuality = !this.highQuality;
    saveNum('rk3dQuality', this.highQuality ? 1 : 0);
    this.applyQuality();
  }

  toggleSound() {
    Sfx.init();
    Sfx.toggleMute();
    this.soundOn = !Sfx.muted;
  }

  clearLevel() {
    for (const c of this.chars) {
      c.rag.removed = true;
      c.dispose(this.scene);
      if (c.swordMesh) { this.scene.remove(c.swordMesh); disposeSwordMesh(c.swordMesh); }
      if (c.sword2Mesh) { this.scene.remove(c.sword2Mesh); disposeSwordMesh(c.sword2Mesh); }
    }
    for (const l of this.loose) { this.scene.remove(l.mesh); disposeSwordMesh(l.mesh); }
    for (const h of this.horses) h.dispose(this.scene);
    this.horses = [];
    this.titan = null;
    this.titans = [];
    this.ropeMesh.visible = false;
    this.chars = [];
    this.enemies = [];
    this.allies = [];
    this.goodGuys = [];
    this.loose = [];
    this.fx.clear();
  }

  addChar(o) {
    const c = new Character(this, o);
    c.view.addTo(this.scene);
    this.scene.add(c.swordMesh);
    if (c.sword2Mesh) this.scene.add(c.sword2Mesh);
    this.chars.push(c);
    return c;
  }

  startLevel(n) {
    this.clearLevel();
    this.level = n;
    saveNum('rk3dLevel', n);
    const spec = levelSpec(n);
    this.spec = spec;
    this.world.set(spec.env, spec.big);
    this.fx.setDecalParent(this.world.env.plat || this.scene);
    const mut = spec.mutators || [];
    if (mut.includes('night')) this.world.applyNight();
    this.oneHit = mut.includes('onehit');
    // Dalga savunması: ilk dalga hemen, gerisi sırayla. Gemi: büyük dalga ve şimşek sayaçları.
    this.foeWaves = spec.waves ? spec.waves.slice(1) : null;
    this.foeWaveNo = 1; this.foeWaveT = 0;
    this.shipWaveT = rand(9, 13); this.shipWarned = false; this.lightT = rand(4, 8);
    this.trapHit = new Map();
    this.tiltWarned = false;
    this.titanHinted = false;
    const mounted = spec.type === 'horse' || spec.type === 'battle';
    // Titanlara karşı: halat ve çift kılıç.
    this.titanMode = spec.type === 'titan' || spec.type === 'titanwar';
    // Titanlarla savaşta vuruş/kopma yazıları çıkmaz (sadece dost geldi yazısı kalır).
    this.fx.quiet = this.titanMode;
    const pz = spec.type === 'titan' ? -30 : spec.type === 'horse' ? 0 : spec.type === 'battle' || spec.type === 'titanwar' ? -22 : -6;
    this.player = this.addChar({ team: 'player', x: 0, z: pz, yaw: 0, hp: 1, color: PLAYER_COLOR, speed: PLAYER_SPEED, bladeLen: mounted ? HORSE_BLADE_LEN : BLADE_LEN, dual: this.titanMode });
    if (mounted) this.mountOn(this.player, 0x9a5a33, 0x3a2214);
    this.goodGuys = [this.player];
    const m = spec.enemies.length;
    const lineW = Math.min(44, m * 2.4);
    spec.enemies.forEach((type, i) => {
      const o = { team: 'enemy', hp: 1, skill: spec.skill, color: ENEMY_COLOR, yaw: Math.PI };
      if (type === 'cav' || (spec.type === 'battle' && type === 'normal')) {
        // Muharebe: piyade geniş bir hat halinde, atlılar kanatlarda.
        const cav = type === 'cav';
        const k = cav ? (i % 2 ? 1 : -1) * rand(17, 26) : (m > 1 ? (i / (m - 1) - 0.5) * lineW : 0) + rand(-1, 1);
        Object.assign(o, { x: k, z: cav ? rand(22, 28) : rand(16, 24), speed: lerp(3.4, 5.4, spec.skill), bladeLen: cav ? HORSE_BLADE_LEN : BLADE_LEN });
      } else if (type === 'titan') {
        // Titan: ~12 m boyunda, yavaş; tek elinde (ona göre) küçük bir hançer. Muharebede üçü
        // geniş bir hatta gelir.
        const k = m > 1 ? i - (m - 1) / 2 : 0;
        Object.assign(o, { x: k * 17, z: 28 + Math.abs(k) * 5, scale: 7, titan: true, hp: 1, speed: 2.6, skill: 0.4 + spec.skill * 0.6, color: TITAN_COLOR, bladeLen: TITAN_DAGGER });
      } else if (type === 'big') {
        // At seviyesi: normalden iri ama ağır düşmanlar, geniş alana dağılmış.
        const a = (i / m) * Math.PI * 2 + rand(-0.3, 0.3), r = rand(16, 28);
        Object.assign(o, { x: Math.sin(a) * r, z: Math.cos(a) * r, scale: 1.6, speed: 2.4, skill: spec.skill * 0.5, heavy: true });
      } else {
        const boss = type === 'boss';
        Object.assign(o, {
          x: (i - (m - 1) / 2) * 2.6, z: 6.5 + (i % 2) * 1.2,
          hp: boss ? 3 : 1, armored: boss, scale: boss ? 1.38 : 1,
          // Boss iri ve dayanıklı ama ağırkanlı: yavaş hazırlanır, seyrek saldırır.
          skill: boss ? spec.skill * 0.5 : spec.skill, boss,
          color: boss ? BOSS_COLOR : ENEMY_COLOR, speed: boss ? 3.2 : lerp(3.4, 5.4, spec.skill),
        });
      }
      if (spec.env === 'ship' && !o.titan) { o.x = (i - (m - 1) / 2) * 1.5; o.z = 4.5 + (i % 2) * 1.6; }
      if (spec.type === 'waves') { const a = (m > 1 ? i / (m - 1) - 0.5 : 0) * 2.2; o.x = Math.sin(a) * 16; o.z = Math.cos(a) * 16; }
      this.mutate(o, type);
      const e = this.addChar(o);
      if (e.titan) { this.titan = this.titan || e; this.titans.push(e); e.neckHp = TITAN_NECK_HP; e.steamT = rand(5, 7) + i * 1.7; }
      if (type === 'cav') this.mountOn(e, 0x2b2522, 0x0f0c0b);
      this.enemies.push(e);
    });
    // Müttefikler oyuncunun etrafında: maviler dost.
    (spec.allies || []).forEach((type, i) => {
      const cav = type === 'cav', sx = i % 2 ? 1 : -1, crowd = spec.type === 'titanwar';
      this.spawnAlly(type,
        crowd ? sx * (2.5 + Math.floor(i / 2) * 2.2) + rand(-0.5, 0.5) : sx * (cav ? rand(6, 9) : rand(2.5, 5)),
        pz + (crowd ? rand(-1, 4) : cav ? rand(-2, 0) : rand(1.5, 4)));
    });
    this.waveT = WAVE_GAP; this.waveI = 0;
    this.phase = 'play';
    this.endT = 0;
    this.time = 0;
    this.slowT = 0;
    this.timeScale = 1;
    this.lastAttackT = -9;
    this.camYaw = 0;
    this.camTarget = null;
    this.updateCamera(0, true);
    this.hud.setLevel(n);
    let sub = spec.type === 'titan' ? 'TİTAN!' : spec.type === 'titanwar' ? `TİTAN MUHAREBESİ! ${m} titan, ${this.allies.length} dost` : spec.type === 'battle' ? `MUHAREBE! ${m} düşman` : spec.type === 'horse' ? 'At Sırtında' : spec.type === 'waves' ? `DALGA SAVUNMASI! ${spec.waves.length} dalga` : spec.boss ? 'BOSS!' : ENV_NAMES[spec.env];
    if (mut.length) sub += ' · ' + mut.map((k) => MUTATORS[k].name).join(' · ');
    this.hud.show(`SEVİYE ${n}`, sub, mut.length ? 2.6 : 1.8, spec.boss || this.titanMode || spec.type === 'battle' || spec.type === 'waves' || mut.length ? 'boss' : '');
    if ((spec.type !== 'duel' && spec.type !== 'boss') || spec.env === 'grid' || spec.env === 'ice') this.hintT = Math.max(this.hintT, 6);
    const t = spec.type;
    Sfx.music(this.titanMode ? 'epic' : t === 'battle' || t === 'horse' || t === 'waves' ? 'war' : t === 'ship' ? 'sea' : 'samurai');
    Sfx.ambience(spec.env === 'ship' ? 'sea' : spec.env === 'ice' || spec.env === 'roof' ? 'wind' : null);
    this.input.clear();
  }

  restartLevel() { this.startLevel(this.level); }

  // Değiştiriciler düşmanı değiştirir: devler iri ve yavaş, cüceler küçük ve çevik, çift kılıç.
  mutate(o, type) {
    const mut = this.spec.mutators || [];
    if (o.titan || type === 'cav') return;
    if (mut.includes('giants')) { o.scale = (o.scale || 1) * 1.5; o.speed = (o.speed || 3) * 0.8; }
    if (mut.includes('dwarves')) { o.scale = (o.scale || 1) * 0.7; o.speed = (o.speed || 3) * 1.15; }
    if (mut.includes('dual')) o.dual = true;
  }

  // Dalga savunması: arenanın kenarından, oyuncudan uzakta yeni bir dalga.
  spawnWave(types) {
    const spec = this.spec, pl = this.player, n = types.length;
    const base = Math.atan2(-pl.x, -pl.z); // oyuncunun karşı tarafı
    types.forEach((type, i) => {
      const boss = type === 'boss';
      const a = base + (n > 1 ? i / (n - 1) - 0.5 : 0) * 2.4 + rand(-0.15, 0.15), r = 17.5;
      const o = {
        team: 'enemy', yaw: a + Math.PI, x: Math.sin(a) * r, z: Math.cos(a) * r,
        hp: boss ? 3 : 1, armored: boss, scale: boss ? 1.38 : 1, boss,
        skill: boss ? spec.skill * 0.5 : spec.skill, color: boss ? BOSS_COLOR : ENEMY_COLOR, speed: boss ? 3.2 : lerp(3.4, 5.4, spec.skill),
      };
      this.mutate(o, type);
      const e = this.addChar(o);
      e.state = 'approach';
      this.enemies.push(e);
    });
    this.foeWaveNo++;
    this.foeWaveT = 0;
    this.fx.popup(pl.x, pl.y + 2.6, pl.z, `DALGA ${this.foeWaveNo}/${spec.waves.length}`, '#ffb347', 26, 1.4);
    Sfx.horn();
  }

  // Dalga sırası: sahadaki rakipler azalınca (ya da 22 sn geçince) sıradaki dalga gelir.
  stepWaves(h) {
    if (!this.foeWaves || !this.foeWaves.length || this.phase !== 'play') return;
    this.foeWaveT += h;
    const alive = this.enemies.filter((e) => e.alive).length;
    if (alive <= 1 || this.foeWaveT > 22) this.spawnWave(this.foeWaves.shift());
  }

  // Testere kolları: değdiği herkesi (oyuncu, rakip, ceset) keser; aynı kola kısa aralıkla bir kez.
  trapHits(h) {
    const traps = this.world.traps;
    if (!traps) return;
    const pl = this.player;
    for (const sp of traps) {
      if (!sp.prev) continue;
      const pd = Math.abs(Math.hypot(pl.x - sp.x, pl.z - sp.z) - sp.r * 0.6);
      if (pd < sp.r + 3 && sp.k > 0.15) Sfx.saw((1 - pd / (sp.r + 3)) * sp.k);
      if (!sp.armed) continue;
      if (!sp.actor) sp.actor = { isPlayer: false, titan: false, side: -1, team: 'trap', x: sp.x, z: sp.z, swordMesh: null, curEp: null };
      const pb = sp.prev, cb = sp.cur;
      for (const o of this.chars) {
        const dx = o.x - sp.x, dz = o.z - sp.z;
        if (o.alive ? Math.hypot(dx, dz) > sp.r + 1.2 : false) continue;
        const key = sp.x * 1000 + sp.z;
        const m = this.trapHit.get(o) || {};
        if (this.time < (m[key] || 0)) continue;
        const bb = o.rag.bounds(this._bb);
        if (bb.y0 > sp.h + 0.2 || bb.y1 < sp.h - 0.2) continue;
        const hit = sweepRagdoll(o.rag, pb, cb, 3);
        if (!hit) continue;
        m[key] = this.time + 0.45;
        this.trapHit.set(o, m);
        // Kolun ucunun hızı: dönüş yönünde, yarıçapla orantılı.
        const tx = -(hit.z - sp.z), tz = hit.x - sp.x, tl = Math.hypot(tx, tz) || 1, sv = Math.sign(sp.w) * 9 * sp.k;
        sp.actor.x = sp.x; sp.actor.z = sp.z;
        this.onHit(sp.actor, o, hit, tx / tl * sv, 1, tz / tl * sv);
        Sfx.slice();
      }
    }
  }

  // Gemi: ara ara büyük dalga (önce uyarı) ve şimşek.
  shipEvents(h) {
    const pl = this.player;
    this.shipWaveT -= h;
    if (!this.shipWarned && this.shipWaveT < 1.6) {
      this.shipWarned = true;
      this.shipWaveDir = Math.random() < 0.5 ? -1 : 1;
      this.fx.popup(pl.x, pl.y + 2.6, pl.z, this.shipWaveDir > 0 ? 'BÜYÜK DALGA! (sol yana)' : 'BÜYÜK DALGA! (sağ yana)', '#9be7ff', 24, 1.5);
      Sfx.wave();
    }
    if (this.shipWaveT <= 0) {
      this.world.bigWave = { t: 0, dir: this.shipWaveDir };
      this.shipWaveT = rand(11, 17); this.shipWarned = false;
      this.shake(0.12);
    }
    this.lightT -= h;
    if (this.lightT <= 0) { this.lightT = rand(6, 12); this.world.flash(); Sfx.thunder(); }
  }

  // type: 'foot' piyade, 'cav' atlı, 'flyer' halatla uçan (çift kılıçlı).
  spawnAlly(type, x, z) {
    const sk = this.spec.skill, cav = type === 'cav', flyer = type === 'flyer';
    const a = this.addChar({
      team: 'ally', hp: 1, color: flyer ? FLYER_COLOR : ALLY_COLOR, yaw: 0, skill: Math.min(1, sk + (flyer ? 0.3 : 0.2)), speed: lerp(3.4, 5.4, sk),
      x, z, bladeLen: cav ? HORSE_BLADE_LEN : BLADE_LEN, flyer, dual: flyer,
    });
    if (cav) this.mountOn(a, 0xe8dcc4, 0x8a6a4a);
    this.allies.push(a);
    this.goodGuys.push(a);
    return a;
  }

  // Titan muharebesi: ilk 60 saniye boyunca oyuncunun arkasından (en yakın titanın tersi
  // yönde) üçer kişilik dalgalar gelir. Atlılar daha geriden, dörtnala yetişir.
  allyWaves(h) {
    if (this.time > WAVE_END + 0.5 || this.phase !== 'play') return;
    this.waveT -= h;
    if (this.waveT > 0) return;
    this.waveT = WAVE_GAP;
    const alive = this.allies.filter((a) => a.alive).length;
    const n = Math.min(3, WAVE_MAX_ALIVE - alive);
    if (n <= 0) return;
    const pl = this.player, t = this.titans.find((x) => x.alive) || pl;
    let bx = pl.x - t.x, bz = pl.z - t.z;
    const bl = Math.hypot(bx, bz) || 1;
    bx /= bl; bz /= bl;
    for (let i = 0; i < n; i++) {
      const type = WAVE_MIX[this.waveI++ % WAVE_MIX.length];
      const back = type === 'cav' ? rand(18, 24) : rand(11, 15), side = (i - 1) * 3 + rand(-0.8, 0.8);
      let x = pl.x + bx * back + bz * side, z = pl.z + bz * back - bx * side;
      if (!this.world.inside(x, z, 3)) { const k = (this.world.radius - 6) / (Math.hypot(x, z) || 1); x *= k; z *= k; }
      this.spawnAlly(type, x, z);
    }
    if (pl.alive) this.fx.popup(pl.x, pl.y + 2.6, pl.z, `+${n} DOST GELDİ`, '#7cc8ff', 18, 1.1, true);
  }

  // Halatlı dost titana halat atar: çoğunlukla ensesine (usta olan daha sık), bazen sırtına
  // ya da omzuna. Halat o noktayla birlikte hareket eder.
  allyHook(c, t) {
    const rag = t.rag, r = Math.random();
    let idx = r < 0.5 + 0.3 * c.skill ? J.NECK : r < 0.85 ? J.SPINE : pick([J.LSH, J.RSH, J.PELVIS]);
    if (!rag.pts[idx].attached) idx = J.NECK;
    const P = rag.pts[idx], pt = { x: P.x, y: P.y, z: P.z };
    c.rope = {
      pt, pull: 44, release: 1.6, maxT: 2.2, t: 0, titan: true,
      anchor() { const q = rag.pts[idx]; pt.x = q.x; pt.y = q.y; pt.z = q.z; return pt; },
      valid: () => t.alive && rag.pts[idx].attached,
    };
    if (c.y < c.gy + 0.05) { c.vy = Math.max(c.vy, 4.5); c.y = c.gy + 0.03; }
    if (this.near(c, 14)) Sfx.rope();
  }

  // Karakteri kendi rengindeki bir ata bindirir.
  mountOn(c, color, mane) {
    const h = new Horse(this.scene, c.x, c.z, c.yaw, { color, mane });
    h.rider = c;
    c.mount = h;
    this.horses.push(h);
    return h;
  }

  // Takımlar: düşmanın hedefleri oyuncu ve müttefikler, müttefiklerinki düşmanlar.
  hostilesOf(c) { return c.side ? this.goodGuys : this.enemies; }
  matesOf(c) { return c.side ? this.enemies : this.goodGuys; }

  // Ayarlardan: bulunduğun seviyeden sonraki ilk at / titan / platform seviyesine ya da
  // ızgara ortamına atla.
  jumpTo(type) {
    let n = this.level;
    while (levelSpec(n).type !== type && levelSpec(n).env !== type) n++;
    this.startLevel(n);
  }

  // ---------- zaman ----------

  frame(dt) {
    // Telefon zorlanırsa (iki kez üst üste 3 sn boyunca 35 fps altı) gölgeleri kapat.
    if (this.highQuality && this.time > 3) {
      this.perfT = (this.perfT || 0) + dt; this.perfN = (this.perfN || 0) + 1;
      if (this.perfT > 3) {
        this.perfSlow = this.perfT / this.perfN > 1 / 35 ? (this.perfSlow || 0) + 1 : 0;
        this.perfT = 0; this.perfN = 0;
        if (this.perfSlow >= 2) { this.toggleQuality(); this.fx.popup(this.player.x, 3, this.player.z, 'Akıcılık için grafik düşürüldü', '#fff', 16, 2.2, true); }
      }
    }
    const taps = this.input.taps;
    if (this.titanMode && this.phase === 'play' && this.player.alive) for (const t of taps) this.fireHook(t);
    taps.length = 0;
    if (this.slowT > 0) {
      this.slowT -= dt;
      this.timeScale = lerp(this.timeScale, this.slowScale, damp(40, dt));
    } else this.timeScale = lerp(this.timeScale, 1, damp(6, dt));
    const sim = dt * this.timeScale;
    if (sim > 1e-5) {
      const n = Math.ceil(sim / MAX_STEP - 1e-6);
      const h = sim / n;
      for (let i = 0; i < n; i++) this.step(h);
    }
    if (this.phase === 'win') {
      this.endT += dt;
      if (this.endT > 2.7) this.startLevel(this.level + 1);
    } else if (this.phase === 'lose') {
      this.endT += dt;
      if ((this.endT > 1.2 && this.input.anyPress) || this.endT > 5) this.restartLevel();
    }
    if (this.hintT > 0 && this.level > 1) this.hintT = Math.min(this.hintT, 3);
    this.hintT -= dt;
    this.shakeAmt *= Math.exp(-8 * dt);
    this.hud.update(dt);
    this.updateCamera(dt, false);
    this.musicIntensity();
    this.render(dt);
    this.input.endFrame(dt);
  }

  step(h) {
    this.h = h;
    this.time += h;
    this.world.setLoad(this.chars);
    this.world.step(h, this.player);
    for (const t of this.titans) if (t.alive) { this.titanSteam(t, h); this.titanDodge(t); }
    if (this.spec.type === 'titanwar') this.allyWaves(h);
    if (this.foeWaves) this.stepWaves(h);
    if (this.world.env.ship && this.phase === 'play') this.shipEvents(h);
    for (const hs of this.horses) {
      const r = hs.rider;
      hs.update(h, r && r.alive ? r.stickW : null, this.world);
      // Drift atan atın toynaklarından toz kalkar.
      if (hs.slip > 0.35 && Math.random() < h * 30 * hs.slip) this.fx.dust(hs.x + rand(-0.5, 0.5), 0.05, hs.z + rand(-0.8, 0.8), -hs.vx * 0.15, -hs.vz * 0.15);
      if (r === this.player && hs.slip > 0.55) Sfx.skid();
      // Nal sesleri: adım döngüsünde dört vuruş; yakındaki atlar duyulur.
      const beat = Math.floor(hs.phase / (Math.PI / 2));
      if (beat !== hs._beat) {
        hs._beat = beat;
        const sp = Math.hypot(hs.vx, hs.vz), d = Math.hypot(hs.x - this.player.x, hs.z - this.player.z);
        if (sp > 1.5) Sfx.hoof(Math.min(1, sp / 9) * Math.max(0, 1 - d / 22));
      }
    }
    // Titan adımları: ayak yere değdiği an gümbürtü (yakındaysa kamera da sarsılır).
    for (const t of this.titans) {
      if (!t.alive) continue;
      for (const fi of [J.LFOOT, J.RFOOT]) {
        const F = t.rag.pts[fi];
        if (!F.attached) continue;
        const down = F.y < t.gy + 0.9 && F.y - F.py < 0;
        const key = fi === J.LFOOT ? '_stepL' : '_stepR';
        if (down && !t[key]) {
          const d = Math.hypot(t.x - this.player.x, t.z - this.player.z), v = Math.max(0, 1 - d / 45);
          Sfx.titanStep(v);
          if (d < 14) this.shake(0.05 * (1 - d / 14));
        }
        t[key] = down;
      }
    }
    for (const c of this.chars) { c.copyBlade(); c.update(h); }
    this.separate();
    const env = this.world, hp = this.lastH;
    for (const c of this.chars) {
      const rag = c.rag;
      rag.step(h, hp, env);
      if (!c.alive && rag.impact > 6) Sfx.thud(rag.impact * 250);
      rag.impact = 0;
      const P = rag.pts[J.PELVIS];
      if (!rag.splashed && P.y < env.waterY) {
        rag.splashed = true;
        this.fx.splash(P.x, env.waterY, P.z);
        Sfx.splash();
      }
    }
    for (const l of this.loose) l.step(h, hp, env);
    this.combat(h);
    if (this.world.traps) this.trapHits(h);
    this.fx.update(h, env);
    this.lastH = h;
  }

  // Müziğin yoğunluğu: yakındaki rakip sayısı (titan ve büyük kalabalık daha çok sayılır).
  musicIntensity() {
    const pl = this.player;
    let k = 0;
    if (this.phase === 'play' && pl.alive) {
      for (const e of this.enemies) {
        if (!e.alive) continue;
        const d = Math.hypot(e.x - pl.x, e.z - pl.z);
        if (e.titan) k += d < 30 ? 2.2 : 0.6; else if (d < 9) k += 1 - d / 12;
      }
      k += 0.7; // seviye sürerken davul hep çalar; düşman 6 m'ye girince melodi de
    }
    Sfx.intensity(k / 2.4);
  }

  slowmo(dur, scale) {
    this.slowScale = this.slowT > 0 ? Math.min(this.slowScale, scale) : scale;
    this.slowT = Math.max(this.slowT, dur);
  }

  shake(a) { this.shakeAmt = Math.min(0.35, this.shakeAmt + a); }

  // ---------- yardımcılar ----------

  nearestEnemy(from, maxD) {
    let best = null, bd = maxD;
    let panic = null, pd = maxD;
    for (const e of this.enemies) {
      if (!e.alive) continue;
      const d = Math.hypot(e.x - from.x, e.z - from.z);
      if (e.state === 'panic') { if (d < pd) { pd = d; panic = e; } continue; }
      if (d < bd) { bd = d; best = e; }
    }
    return best || panic;
  }

  // Aynı anda saldıran düşman sayısını ve saldırılar arası süreyi sınırlar.
  takeAttackToken() {
    const sk = this.spec.skill;
    const max = 1 + Math.floor(sk * 2);
    let n = 0;
    for (const e of this.enemies) if (e.alive && e.state === 'attack') n++;
    if (n >= max || this.time - this.lastAttackT < lerp(0.9, 0.15, sk)) return false;
    this.lastAttackT = this.time;
    return true;
  }

  separate() {
    const cs = this.chars;
    const ropes = this.world.ropes, horses = this.horses;
    // Atlar birbirinin içinden geçmez.
    for (let i = 0; i < horses.length; i++) {
      for (let j = i + 1; j < horses.length; j++) {
        const A = horses[i], B = horses[j];
        const dx = B.x - A.x, dz = B.z - A.z, d = Math.hypot(dx, dz), min = 1.5;
        if (d < min && d > 1e-4) { const p = (min - d) * 0.5, nx = dx / d, nz = dz / d; A.x -= nx * p; A.z -= nz * p; B.x += nx * p; B.z += nz * p; }
      }
    }
    for (let i = 0; i < cs.length; i++) {
      const a = cs[i];
      if (!a.alive || a.falling || a.mount || ((a.isPlayer || a.flyer) && a.y - a.gy > 0.5)) continue;
      if (ropes) {
        // Sağlam halatlar direk gibi: içinden geçilmez.
        for (const r of ropes) {
          if (!r.intact) continue;
          const dx = a.x - r.x, dz = a.z - r.z, d = Math.hypot(dx, dz), min = 0.28 * a.S + r.r;
          if (d < min && d > 1e-4) { a.x = r.x + dx / d * min; a.z = r.z + dz / d * min; }
        }
      }
      for (const hs of horses) {
        // Atın gövdesi de engel: yayalar içinden geçmesin (ezilmez, sadece kenara itilir).
        // Titanı at itemez; at titanın bacaklarının etrafından dolaşır.
        const dx = a.x - hs.x, dz = a.z - hs.z, d = Math.hypot(dx, dz) || 1, min = a.titan ? 1.0 + 0.25 * a.S : 1.0 + 0.3 * a.S;
        if (d < min) {
          if (a.titan) { hs.x = a.x - dx / d * min; hs.z = a.z - dz / d * min; } else { a.x = hs.x + dx / d * min; a.z = hs.z + dz / d * min; }
        }
      }
      for (let j = i + 1; j < cs.length; j++) {
        const b = cs[j];
        if (!b.alive || b.falling || b.mount || ((b.isPlayer || b.flyer) && b.y - b.gy > 0.5)) continue;
        const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz);
        // Titanın ayakları arasına sokulabilirsin (bacağını kesmek için); küçükler titanı
        // itemez, o onları iter.
        const lo = Math.min(a.S, b.S), hi = Math.max(a.S, b.S);
        const min = hi > 2 * lo ? 0.34 * lo + 0.2 * hi : 0.34 * (a.S + b.S);
        if (d < min && d > 1e-4) {
          const over = min - d, nx = dx / d, nz = dz / d, pa = over * b.S / (a.S + b.S), pb = over * a.S / (a.S + b.S);
          if (this.world.inside(a.x - nx * pa, a.z - nz * pa, 0.3)) { a.x -= nx * pa; a.z -= nz * pa; }
          if (this.world.inside(b.x + nx * pb, b.z + nz * pb, 0.3)) { b.x += nx * pb; b.z += nz * pb; }
        }
      }
    }
  }

  // ---------- halat (titan seviyesi) ----------

  // Titana dokunulduysa onun o noktasına, yoksa ekran dışında önde-yukarıda bir noktaya halat.
  fireHook(tap) {
    const pl = this.player;
    let rope = null, hit = null;
    // Dokunulan yerden geçen ışına en yakın titan (muharebede üç tane).
    for (const tt of this.titans) {
      if (!tt.alive || !tap) continue;
      const h = this.pickTitan(tt, tap.x, tap.y);
      if (h && (!hit || h.s < hit.s)) hit = h;
    }
    const t = this.camTarget && this.camTarget.titan && this.camTarget.alive ? this.camTarget : this.titans.find((x) => x.alive);
    if (hit) {
      const rag = hit.t.rag, bone = hit.bone, pt = { x: hit.x, y: hit.y, z: hit.z };
      const tt = hit.t;
      rope = {
        pt, pull: 48, release: 1.6, maxT: 2.2, t: 0, titan: true, valid: () => tt.alive,
        anchor() {
          if (bone === 'head') { const h = rag.pts[J.HEAD]; pt.x = h.x; pt.y = h.y; pt.z = h.z; } else if (rag.bones.includes(bone)) {
            const A = rag.pts[bone.a], B = rag.pts[bone.b];
            pt.x = lerp(A.x, B.x, hit.u); pt.y = lerp(A.y, B.y, hit.u); pt.z = lerp(A.z, B.z, hit.u);
          }
          return pt;
        },
      };
    } else {
      let fx = Math.sin(this.camYaw), fz = Math.cos(this.camYaw), d = 30;
      if (t && t.alive) { fx = t.x - pl.x; fz = t.z - pl.z; d = Math.hypot(fx, fz) || 1; fx /= d; fz /= d; }
      this.hookSide = -this.hookSide;
      // Ekran dışına, önde ve yukarıda bir nokta: titanın boyu kadar yükseklikte salınırsın.
      const fwd = clamp(d - 8, 5, 18), side = 6 * this.hookSide;
      const pt = { x: pl.x + fx * fwd + fz * side, y: clamp(pl.y + 7, 10, 16), z: pl.z + fz * fwd - fx * side };
      rope = { pt, pull: 24, release: 4, maxT: 1.2, t: 0, anchor: () => pt };
    }
    pl.rope = rope;
    if (pl.y < 0.05) { pl.vy = Math.max(pl.vy, 4.5); pl.y = 0.03; }
    Sfx.rope();
    if (hit) Sfx.thunk();
  }

  pickTitan(t, sx, sy) {
    const rag = t.rag;
    this.raycaster.setFromCamera({ x: sx / this.W * 2 - 1, y: -(sy / this.H) * 2 + 1 }, this.camera);
    const o = this.raycaster.ray.origin, d = this.raycaster.ray.direction;
    const fx = o.x + d.x * 400, fy = o.y + d.y * 400, fz = o.z + d.z * 400;
    let best = null, bs = Infinity;
    for (const b of rag.bones) {
      if (!b.vis) continue;
      const A = rag.pts[b.a], B = rag.pts[b.b];
      segSeg(o.x, o.y, o.z, fx, fy, fz, A.x, A.y, A.z, B.x, B.y, B.z);
      const r = b.r * 1.3 + 0.6;
      if (segOut.d2 < r * r && segOut.s < bs) {
        bs = segOut.s;
        best = { t, s: bs, bone: b, u: segOut.t, x: lerp(A.x, B.x, segOut.t), y: lerp(A.y, B.y, segOut.t), z: lerp(A.z, B.z, segOut.t) };
      }
    }
    const h = rag.pts[J.HEAD];
    ptSeg(h.x, h.y, h.z, o.x, o.y, o.z, fx, fy, fz);
    const hr = rag.d.headR * 1.3 + 0.6;
    if (ptOut.d2 < hr * hr && ptOut.t < bs) best = { t, s: ptOut.t, bone: 'head', u: 0, x: h.x, y: h.y, z: h.z };
    return best;
  }

  // Titan ara ara ensesinden buhar püskürtür: yakınındakini halatıyla birlikte savurur.
  // Önce ensesi tüter ve tıslar (uyarı), sonra patlar. Enseye darbe yiyince hemen üfler.
  // Kopan uzuvlarının güdükleri de hafifçe tüter.
  titanSteam(t, h) {
    const N = t.rag.pts[J.NECK], pl = this.player, S = t.S;
    const fx = Math.sin(t.yaw), fz = Math.cos(t.yaw);
    const nx = N.x - fx * 0.12 * S, ny = N.y + 0.05 * S, nz = N.z - fz * 0.12 * S; // ense
    t.steamT -= h;
    const warn = t.steamT < STEAM_WARN && t.steamT > 0;
    if (warn) {
      if (!t.hissing) { t.hissing = true; if (this.near(t, 40)) Sfx.hiss(); }
      const k = 1 - t.steamT / STEAM_WARN;
      if (Math.random() < h * (12 + 30 * k)) this.fx.steam(nx + rand(-0.4, 0.4), ny, nz + rand(-0.4, 0.4), rand(-1, 1) - fx * 1.5, rand(3, 6), rand(-1, 1) - fz * 1.5, rand(1.2, 2) * (0.7 + 0.6 * k), rand(0.7, 1.1), 0.9);
    }
    for (const p of t.rag.pts) {
      if (p.stump && Math.random() < h * 5) this.fx.steam(p.x, p.y, p.z, rand(-0.4, 0.4), rand(1, 2), rand(-0.4, 0.4), rand(0.6, 1.1), rand(0.8, 1.3), 0.55);
    }
    if (t.steamT > 0) return;
    t.hissing = false;
    t.steamT = rand(6, 9) * lerp(1, 0.7, t.skill);
    for (let i = 0; i < 24; i++) {
      const a = rand(0, Math.PI * 2), up = rand(-0.2, 0.9), sp = rand(8, 17), c = Math.sqrt(1 - up * up);
      this.fx.steam(nx, ny, nz, Math.cos(a) * c * sp, up * sp + 2, Math.sin(a) * c * sp, rand(2, 3.3), rand(0.8, 1.3), 1);
    }
    for (let i = 0; i < 20; i++) this.fx.dust(nx + rand(-1.5, 1.5), ny + rand(-1, 1.5), nz + rand(-1.5, 1.5), rand(-9, 9), rand(-9, 9));
    if (this.near(t, 40)) { Sfx.splash(); Sfx.hiss(true); }
    // Dibindeki müttefikler de savrulur.
    for (const a of this.allies) {
      if (!a.alive) continue;
      const dx = a.x - nx, dy = a.y + 1 - ny, dz = a.z - nz, d = Math.hypot(dx, dy, dz) || 1;
      if (d > 11) continue;
      const k = 14 * (1 - d / 14), hl = Math.hypot(dx, dz) || 1;
      a.vx += dx / hl * k; a.vz += dz / hl * k; a.kb = 0.5;
      if (a.rope) { a.rope = null; a.vy = Math.max(a.vy, 4); }
    }
    if (!pl.alive) return;
    const dx = pl.x - nx, dy = pl.y + 1 - ny, dz = pl.z - nz, d = Math.hypot(dx, dy, dz) || 1;
    if (d > 11) return;
    const k = 16 * (1 - d / 14);
    pl.vx += dx / d * k; pl.vz += dz / d * k; pl.vy = Math.max(pl.vy, 5);
    pl.y = Math.max(pl.y, pl.gy + 0.05);
    pl.rope = null;
    pl.kb = 0.5;
    this.fx.popup(pl.x, pl.y + 2, pl.z, 'BUHAR!', '#ffffff', 26, 1.1);
    this.shake(0.2);
  }

  // Titanın hançeri inmeden hemen önce dibindeki müttefikler (becerisine göre) geri sıçrar.
  titanDodge(t) {
    const s = t.swing;
    if (!s || s.dodged || s.t < s.wind - 0.05) return;
    s.dodged = true;
    for (const a of this.allies) {
      if (!a.alive || a.stun > 0 || a.kb > 0 || a.mount) continue;
      const dx = a.x - t.x, dz = a.z - t.z, d = Math.hypot(dx, dz);
      if (d > 8 || Math.random() > lerp(0.35, 0.7, a.skill)) continue;
      this.knock(a, dx, dz, 9);
      a.vy = Math.max(a.vy, 3.5);
    }
  }

  knock(c, dx, dz, speed) {
    const l = Math.hypot(dx, dz) || 1;
    c.vx += dx / l * speed;
    c.vz += dz / l * speed;
    c.kb = 0.3;
  }

  // Oyuncu savurmaya başlayınca yakındaki düşman geri sıçrayabilir.
  onSwingStart(c) {
    if (!c.isPlayer) return;
    for (const e of this.enemies) {
      if (!e.alive || e.state !== 'fight' || e.stun > 0) continue;
      const d = Math.hypot(e.x - c.x, e.z - c.z);
      if (d < 2 && Math.random() < lerp(0.04, 0.3, e.skill)) this.knock(e, e.x - c.x, e.z - c.z, 4.2);
    }
  }

  cancelSwing(c) {
    if (c.aimCtl) {
      // Kılıç çarptığı yerden geri seker; düşmanın saldırı planı da biter.
      c.swW = -c.swW * 0.5;
      c.aimYaw = c.swYaw;
      c.episode = null;
      c.bounceBlade();
      if (!c.isPlayer) {
        c.aimA = c.swYaw;
        c.plan = null;
        if (c.state === 'attack') { c.state = 'fight'; c.cool = rand(0.4, 0.9); }
      }
      return;
    }
    const s = c.swing;
    if (!s) return;
    const mode = c.swingMode();
    if (mode === 1) c.swing = null;
    else if (mode === 2) {
      // Bıçak durduğu yerden bekleme duruşuna dönsün.
      s.a1 = lerp(s.a0, s.a1, easeOutQuad((s.t - s.wind) / s.dur));
      s.t = s.wind + s.dur;
    }
  }

  dropSword(c) {
    if (!c.hasSword || !c.swordMesh) return;
    if (c.hasSword2) this.dropSword2(c, false);
    c.hasSword = false;
    const s = c.sw, h = this.h || MAX_STEP;
    const vel = { x: (c.bCur.bx - c.bPrev.bx) / h, y: (c.bCur.by - c.bPrev.by) / h, z: (c.bCur.bz - c.bPrev.bz) / h };
    const L = (BLADE_START + c.bladeLen) * c.S;
    this.loose.push(new LooseSword(c.swordMesh, { x: s.gx, y: s.gy, z: s.gz }, { x: s.dx, y: s.dy, z: s.dz }, { x: s.wx, y: s.wy, z: s.wz }, vel, L));
    c.swordMesh = null;
  }

  // Çift kılıçtan biri düşer. right: sağ el gitti; onun (birinci) kılıcı uçar, sol eldeki
  // kılıç tek kılıç olarak devam eder.
  dropSword2(c, right) {
    if (!c.hasSword2) return;
    c.hasSword2 = false;
    const s = right ? c.sw : c.sw2, bc = right ? c.bCur : c.b2Cur, bp = right ? c.bPrev : c.b2Prev, h = this.h || MAX_STEP;
    const vel = { x: (bc.bx - bp.bx) / h, y: (bc.by - bp.by) / h, z: (bc.bz - bp.bz) / h };
    const L = (BLADE_START + c.bladeLen) * c.S;
    const mesh = right ? c.swordMesh : c.sword2Mesh;
    this.loose.push(new LooseSword(mesh, { x: s.gx, y: s.gy, z: s.gz }, { x: s.dx, y: s.dy, z: s.dz }, { x: s.wx, y: s.wy, z: s.wz }, vel, L));
    if (right) c.swordMesh = c.sword2Mesh;
    c.sword2Mesh = null;
  }

  // ---------- dövüş ----------

  combat(h) {
    for (const a of this.chars) {
      if (!a.alive || !a.swingActive) continue;
      // Çift kılıçlı iki bıçakla keser; her bıçak aynı hedefe bir dalgada bir kez.
      for (let bi = 0; bi < (a.hasSword2 ? 2 : 1); bi++) this.bladeHits(a, bi, h);
    }
    this.poke();
  }

  bladeHits(a, bi, h) {
    const pb = bi ? a.b2Prev : a.bPrev, cb = bi ? a.b2Cur : a.bCur;
    const x0 = Math.min(pb.bx, pb.tx, cb.bx, cb.tx) - 0.2, x1 = Math.max(pb.bx, pb.tx, cb.bx, cb.tx) + 0.2;
    const y0 = Math.min(pb.by, pb.ty, cb.by, cb.ty) - 0.2, y1 = Math.max(pb.by, pb.ty, cb.by, cb.ty) + 0.2;
    const z0 = Math.min(pb.bz, pb.tz, cb.bz, cb.tz) - 0.2, z1 = Math.max(pb.bz, pb.tz, cb.bz, cb.tz) + 0.2;
    if (this.world.ropes) this.cutRopes(a, pb, cb, x0, x1, z0, z1);
    // Oyuncu herkesi (cesetleri de) keser; düşmanlar oyuncuyu ve yollarındaki arkadaşlarını.
    // Titan sadece karşı takımı (oyuncu ve müttefikler) keser.
    const targets = a.titan ? this.goodGuys : this.chars;
    for (const o of targets) {
      const ep = a.curEp;
      if (!ep || (a.titan && !a.swingActive)) break;
      const hits = bi ? ep.hits2 : ep.hits;
      // Titan dev: bir dalışta her bıçak onun farklı yerlerine (boyun, kol, bacak) birer kez
      // değebilir; kalın göğüs dalışı yakmaz.
      const big = o.titan && o.alive;
      if (o === a || (!big && hits.has(o))) continue;
      if (!a.isPlayer && !o.alive) continue;
      if (a.isPlayer && !o.alive && o.side === 0) continue; // dost cesedini doğrama
      const bb = o.rag.bounds(this._bb);
      if (bb.x1 < x0 || bb.x0 > x1 || bb.y1 < y0 || bb.y0 > y1 || bb.z1 < z0 || bb.z0 > z1) continue;

      if (o.alive && o.hasSword && !o.titan && !a.titan && !ep.rolled.has(o) && !(a.side === o.side && this.spec.type === 'titanwar')) {
        // Kılıç kılıca: ikisi de savuruyorsa KLANG, değilse savunan şansla bloklar.
        const pt = sweepBlade(pb, cb, o.bCur, 3, 0.05);
        if (pt) {
          if (o.swingActive) { this.parry(a, o, pt); break; }
          ep.rolled.add(o);
          if (Math.random() < (o.isPlayer ? 0.4 : lerp(0.15, 0.45, o.skill))) { this.block(a, o, pt); break; }
        }
      }
      // Titanın boyun bölgesi önceliklidir: bıçak oraya değdiyse göğse gömülmesi sayılmaz.
      const hit = (big && sweepNeckZone(o.rag, pb, cb, 4)) || sweepRagdoll(o.rag, pb, cb, 4);
      if (!hit) continue;
      if (big) {
        const part = hit.head || hit.zone ? 'neck' : o.rag.bones[hit.bone].kind;
        if (part === 'torso') {
          // Kalın göğüs: bir kez "ÇOK KALIN" der, dalış boyuna devam eder.
          if (!ep.thick) ep.thick = new Set();
          if (ep.thick.has(o)) continue;
          ep.thick.add(o);
        } else {
          const key = o.rag.id * 100 + (part === 'neck' ? 99 : hit.bone);
          if (hits.has(key)) continue;
          hits.add(key);
        }
      }
      // Düşman, oyuncunun vuruşunu kılıcıyla karşılayabilir (seviye arttıkça daha sık).
      // Arkadaşından gelen darbeyi beklemez.
      if (a.side !== o.side && !o.isPlayer && !o.titan && o.alive && o.hasSword && o.stun <= 0 && o.state !== 'attack' && o.state !== 'panic' && !ep.rolled.has(o)) {
        ep.rolled.add(o);
        if (Math.random() < lerp(0.08, 0.45, o.skill)) {
          o.blockT = 0.35;
          o.blockUx = ep.ux; o.blockUy = ep.uy;
          o.counterT = 0.3;
          this.block(a, o, hit);
          break;
        }
      }
      if (!big) hits.add(o);
      hit.blade = bi;
      let vx = lerp(cb.bx - pb.bx, cb.tx - pb.tx, hit.t) / h;
      let vy = lerp(cb.by - pb.by, cb.ty - pb.ty, hit.t) / h;
      let vz = lerp(cb.bz - pb.bz, cb.tz - pb.tz, hit.t) / h;
      const sp = Math.hypot(vx, vy, vz) || 1, m = clamp(sp, 4, 13);
      vx = vx / sp * m; vy = vy / sp * m; vz = vz / sp * m;
      this.onHit(a, o, hit, vx, vy, vz);
    }
  }

  // Platform halatları: savrulan bıçak değdiği halatı keser, kimin olduğuna bakmaz.
  cutRopes(a, pb, cb, x0, x1, z0, z1) {
    const w = this.world, h = this.h;
    for (const r of w.ropes) {
      if (!r.intact || r.x < x0 - r.r || r.x > x1 + r.r || r.z < z0 - r.r || r.z > z1 + r.r) continue;
      const gy = w.ground(r.x, r.z);
      _seg.bx = r.x; _seg.by = gy; _seg.bz = r.z; _seg.tx = r.x; _seg.ty = gy + 3.2; _seg.tz = r.z;
      const pt = sweepBlade(pb, cb, _seg, 3, r.r + 0.03);
      if (!pt) continue;
      w.cutRope(r, pt.y - gy, (cb.tx - pb.tx) / h, (cb.tz - pb.tz) / h);
      this.fx.sparks(pt.x, pt.y, pt.z, 16);
      this.fx.popup(pt.x, pt.y + 0.6, pt.z, 'HALAT KOPTU!', '#ff7a5c', 22, 1.2);
      Sfx.twang();
      this.shake(0.14);
      this.slowmo(0.15, 0.35);
      if (!this.tiltWarned && w.tilt > 0.17) {
        this.tiltWarned = true;
        this.fx.popup(this.player.x, 2.6, this.player.z, 'PLATFORM YATIYOR!', '#ffd23f', 26, 1.6);
      }
    }
  }

  // Yavaş dönen / ileri uzatılmış kılıç kesmez, değdiğini iter (bıçak gövdeye gömülmesin).
  // Herkes için geçerli: düşmanın uzattığı kılıç da seni ya da arkadaşını iter.
  poke() {
    for (const a of this.chars) {
      if (!a.alive || !a.aimCtl || !a.hasSword || a.swingActive || a.pokeCd > 0 || (a.y - a.gy > 0.3 && !a.mount)) continue;
      const list = this.chars;
      for (const o of list) {
        if (o === a || !o.alive || o.kb > 0 || o.titan) continue;
        const bb = o.rag.bounds(this._bb), c = a.bCur;
        if (bb.x1 < Math.min(c.bx, c.tx) || bb.x0 > Math.max(c.bx, c.tx) || bb.z1 < Math.min(c.bz, c.tz) || bb.z0 > Math.max(c.bz, c.tz)) continue;
        const hit = sweepRagdoll(o.rag, a.bPrev, a.bCur, 2);
        if (!hit) continue;
        if (a.isPlayer && o.state === 'panic') {
          // Silahsız kaçan düşman dürtmeyle de şişlenir; yoksa itip durursun, yakalayamazsın.
          this.fx.popup(o.x, 2.3 * o.S, o.z, 'ŞİŞLENDİ!', '#ffd23f', 22, 1.1);
          this.onHit(a, o, hit, a.sw.dx * 7, a.sw.dy * 7, a.sw.dz * 7);
          if (o.alive) this.killEnemy(o, a, null, a.sw.dx * 7, 1, a.sw.dz * 7);
          a.pokeCd = 0.2;
          break;
        }
        this.knock(o, a.sw.dx, a.sw.dz, a.isPlayer ? 2.4 : o.isPlayer ? 1.8 : 1.4);
        this.knock(a, -a.sw.dx, -a.sw.dz, 1.0);
        a.pokeCd = 0.35;
        Sfx.punch();
        break;
      }
    }
  }

  parry(a, o, pt) {
    this.cancelSwing(a);
    this.cancelSwing(o);
    for (const c of [a, o]) {
      c.stun = 0.35;
      if (!c.isPlayer) c.state = 'stagger';
    }
    this.knock(a, a.x - o.x, a.z - o.z, 2.6);
    this.knock(o, o.x - a.x, o.z - a.z, 2.6);
    this.fx.sparks(pt.x, pt.y, pt.z, 26);
    this.fx.popup(pt.x, pt.y + 0.3, pt.z, 'KLANG!', '#ffe38a', 20, 0.7);
    Sfx.clang();
    this.slowmo(0.1, 0.3);
    this.shake(0.08);
  }

  block(a, o, pt) {
    this.cancelSwing(a);
    a.stun = a.isPlayer ? 0.6 : 0.45;
    if (!a.isPlayer) a.state = 'stagger';
    this.knock(a, a.x - o.x, a.z - o.z, 2.2);
    this.fx.sparks(pt.x, pt.y, pt.z, 18);
    this.fx.popup(pt.x, pt.y + 0.3, pt.z, 'BLOK!', '#9be7ff', 18, 0.7);
    Sfx.clang();
    this.shake(0.05);
  }

  // Kesik uygular; kemik çok kısaysa null döner (sadece darbe).
  applyCut(rag, hit) {
    let bi = hit.bone, u = hit.u;
    if (hit.head) {
      bi = rag.boneWith(J.HEAD);
      if (bi >= 0) u = rag.bones[bi].b === J.HEAD ? 0.7 : 0.3;
    }
    if (bi < 0 || rag.bones[bi].len < MIN_CUT_LEN * rag.S) return null;
    return rag.cut(bi, u);
  }

  gore(rag, res, hit, vx, vy, vz) {
    const h = this.h, big = rag.S > 3;
    if (res) {
      // Kopan küçük parça daha sert fırlar.
      const c1 = rag.comp[res.i1], c2 = rag.comp[res.i2];
      const small = rag.compSize(c1) < rag.compSize(c2) ? c1 : c2;
      rag.addVel(vx * 0.35, vy * 0.35 + 2, vz * 0.35, h, small);
      if (big) {
        // Titan: kesikten kan fışkırır, iki güdük de saniyelerce akar (boyun daha da uzun).
        this.fx.spray(res.x, res.y, res.z, vx, vy, vz, 70, 0.6, 9, true);
        this.fx.spray(res.x, res.y, res.z, 0, 1, 0, 34, 0.9, 7, true);
        const neck = res.kind === 'neck', o = { big: true, rate: neck ? 130 : 100, spd: 2.6 };
        this.fx.bleed(rag, res.i1, neck ? rand(9, 12) : rand(5, 8), o);
        this.fx.bleed(rag, res.i2, neck ? rand(9, 12) : rand(5, 8), o);
      } else {
        this.fx.spray(res.x, res.y, res.z, vx, vy, vz, 34, 0.5, 5);
        this.fx.spray(res.x, res.y, res.z, 0, 1, 0, 14, 0.9, 3);
        this.fx.bleed(rag, res.i1, rand(1.2, 2.2));
        this.fx.bleed(rag, res.i2, rand(1.2, 2.2));
      }
      this.fx.sparks(res.x, res.y, res.z, 5);
      Sfx.slice();
    } else if (big) {
      // Titan kesilmeden yaralandı: iri bir fışkırma ve birkaç saniye akan yara.
      this.fx.spray(hit.x, hit.y, hit.z, vx, vy, vz, 24, 0.8, 6, true);
      const bone = hit.head ? rag.boneWith(J.HEAD) : hit.bone;
      if (bone >= 0) this.fx.wound(rag, bone, hit.head ? 0.8 : hit.u, rand(3, 5), { rate: 35, spd: 1.6 });
      Sfx.wound();
    } else {
      this.fx.spray(hit.x, hit.y, hit.z, vx, vy, vz, 16, 0.7, 3);
      Sfx.wound();
    }
  }

  onHit(a, o, hit, vx, vy, vz) {
    const rag = o.rag, wasAlive = o.alive;
    // Arkadaşını kesen düşman: kurban bazen kin tutup ona döner.
    const friendly = a.side === o.side && a !== o;
    if (friendly && wasAlive && Math.random() < 0.55) { o.grudge = a; o.grudgeT = 4; }
    // Titan muharebesinde herkes titanın ayak dibine yığılır: dost ateşi öldürmez, iter.
    if (friendly && wasAlive && this.spec.type === 'titanwar') {
      this.knock(o, o.x - a.x, o.z - a.z, 3);
      if (this.time > (o.heyT || 0) && this.near(o)) { o.heyT = this.time + 2; this.fx.popup(o.x, 2.2, o.z, 'HEY!', '#fff', 16, 0.8); }
      return;
    }
    // Titanın hançeri bir müttefike saplanınca savuruş biter: bir savuruşta bir kişi.
    if (a.titan && !o.isPlayer && wasAlive) this.cancelSwing(a);

    if (o.isPlayer && wasAlive) {
      this.hitPlayer(a, o, hit, vx, vy, vz);
      return;
    }

    const kind = hit.head ? 'neck' : rag.bones[hit.bone].kind;
    // Kopmuş parçaya vurmak gövdeye vurmak sayılmaz.
    const onBody = hit.head || rag.pts[rag.bones[hit.bone].a].attached;
    // Boss son canına kadar hiç kopmaz, sadece yaralanır. Titanın gövdesi kesilemeyecek kadar
    // kalın; ensesi ancak üçüncü darbede kopar.
    // Çift kılıçta her bıçağın ensede kendi bekleme süresi var: iki bıçak birden isabet
    // ederse bir dalışta iki darbe sayılır.
    const cdKey = hit.blade ? 'neckCd2' : 'neckCd';
    const neckSafe = o.titan && (o.neckHp > 1 || this.time < (o[cdKey] || 0) || this.time < (o.neckCutT || 0));
    // Müttefiklerin küçük kılıçları titanın bacağını çoğunlukla sadece sıyırır.
    const scratch = o.titan && !a.isPlayer && Math.random() > NPC_TITAN_CUT;
    const armored = wasAlive && ((o.armored && o.hp > 1) || (o.titan && (kind === 'torso' || (kind === 'neck' && (neckSafe || !a.isPlayer)) || scratch)));
    const P = rag.pts, ends = [J.LHAND, J.RHAND, J.LFOOT, J.RFOOT].map((i) => P[i].attached);
    const res = armored ? null : this.applyCut(rag, hit);
    // Bu darbeyle yeni kopan el/ayak var mı (güdüğü tekrar kesmek sayılmaz)?
    const lost = [J.LHAND, J.RHAND, J.LFOOT, J.RFOOT].some((i, k) => ends[k] && !P[i].attached);
    // Dev titan küçük bir kılıçla savrulmaz (her sıyırık bütün ragdoll'u, yerdeki kopuk
    // parçaları dahil, itip göğe fırlatıyordu).
    if (!o.titan) rag.addVel(vx * 0.2, vy * 0.2 + 0.6, vz * 0.2, this.h);
    this.gore(rag, res, hit, vx, vy, vz);
    const sm = hit.blade ? a.sword2Mesh : a.swordMesh;
    if (sm) {
      const bm = sm.userData.bladeMat;
      a.blood = Math.min(1, (a.blood || 0) + 0.12);
      bm.color.setRGB(lerp(0.89, 0.75, a.blood), lerp(0.91, 0.12, a.blood), lerp(0.93, 0.15, a.blood));
    }
    if (!wasAlive) return;
    if (o.titan) { if (onBody) this.hitTitan(o, a, (res && res.kind === 'neck') || lost ? res : null, kind, vx, vy, vz, cdKey); return; }

    // Sıradan düşman tek vuruşta ölür (kol dahil); boss canı bitene kadar dayanır.
    if (!res) o.hp--; else o.hp = 0;
    if (o.hp > 0) {
      o.flash = 0.12; o.stun = 0.5; o.state = 'stagger';
      o.rag.muscle = 0.3;
      this.knock(o, vx, vz, 3);
      this.fx.popup(o.x, 2.3 * o.S, o.z, friendly ? 'HEY!' : `${o.hp} CAN KALDI`, '#fff', 16, 0.9);
      this.slowmo(0.08, 0.35);
      this.shake(0.06);
      return;
    }
    this.killEnemy(o, a, res, vx, vy, vz);
  }

  // Titan: kolu, bacağı gitse de savaşır (bacaksızsa sürünür), gövdesi kesilmeyecek kadar
  // kalın. Sadece boyun bölgesi (önden ya da arkadan boyun, gırtlak, kafa) kesilince düşer.
  hitTitan(o, a, res, kind, vx, vy, vz, cdKey = 'neckCd') {
    if (res && res.kind === 'neck') { this.killEnemy(o, a, res, vx, vy, vz); return; }
    o.flash = 0.15;
    const y = o.rag.pts[J.NECK].y + 1;
    if (!a.isPlayer && !res) {
      // Halatlı dost boynu yarabilir ama son kesiş hep senin: boynunu 1 darbeye kadar indirir.
      if (kind === 'neck' && a.flyer && o.neckHp > 1 && this.time > (o.neckCdAlly || 0)) {
        o.neckCdAlly = this.time + 1.5;
        o.neckHp--;
        o.neckCutT = this.time + NECK_CUT_GAP;
        o.stun = Math.max(o.stun, 0.3);
        // Kalan darbe sayısı titan savaşında da gösterilen tek vuruş yazısı.
        if (this.near(o, 30)) { this.fx.popup(o.x, y, o.z, `DOST BOYNUNU YARDI! ${o.neckHp} darbe kaldı`, '#7cf0e0', 22, 1.3, true); Sfx.slice(); }
        return;
      }
      if (this.near(o, 14)) Sfx.thud(600);
      return;
    }
    if (kind === 'neck') {
      // Boyna isabet ama kopmadı: titan sendeler, öfkelenir (hemen buhar üfler).
      // Aynı bıçakla aynı dalışta ikinci kez sayılmaz.
      if (this.time < (o[cdKey] || 0) || o.neckHp <= 1) return;
      o[cdKey] = this.time + 0.8;
      o.neckHp--;
      o.neckCutT = this.time + NECK_CUT_GAP;
      o.stun = 0.6; o.state = 'stagger'; this.cancelSwing(o);
      o.steamT = Math.min(o.steamT, 1.0);
      this.fx.popup(o.x, y, o.z, `BOYUN! ${o.neckHp} darbe kaldı`, '#ffd23f', 26, 1.3, true);
      this.slowmo(0.2, 0.3);
      this.shake(0.2);
      Sfx.slice();
      return;
    }
    if (res) {
      if (res.kind === 'arm') o.checkGrip();
      o.stun = 0.35; o.state = 'stagger'; this.cancelSwing(o);
      if (a.isPlayer || this.near(o, 25)) this.fx.popup(o.x, y, o.z, res.kind === 'leg' ? 'BACAĞI GİTTİ!' : 'KOLU GİTTİ!', '#ffd23f', 26, 1.2);
      if (!this.titanHinted) { this.titanHinted = true; this.fx.popup(o.x, y - 1.6, o.z, 'Ölmedi! BOYNUNU kes', '#fff', 20, 1.8); }
      this.slowmo(0.15, 0.35);
      this.shake(0.15);
    } else {
      this.fx.popup(a.x, a.y + 2.2, a.z, kind === 'torso' ? 'ÇOK KALIN!' : 'SIYRIK', '#fff', 18, 0.8);
      Sfx.thud(900);
    }
  }

  // Oyuncunun tek canı var ama rakipler kadar kolay ölmez: gövde darbesi kesmez, savurur;
  // bacak gidince tek ayakla seker, ikisi gidince güdüklerle sürünür; bir kol gidince
  // diğeriyle tutar. Kafa ya da iki kol giderse ölüm.
  hitPlayer(a, o, hit, vx, vy, vz) {
    if (o.invuln > 0) return;
    const rag = o.rag;
    const kind = hit.head ? 'neck' : rag.bones[hit.bone].kind;
    if (this.oneHit) {
      // Tek vuruş değiştiricisi: ilk darbe öldürür.
      const r1 = kind === 'torso' ? null : this.applyCut(rag, hit);
      this.gore(rag, r1, hit, vx, vy, vz);
      this.hud.flash = 0.6;
      o.die();
      rag.addVel(vx * 0.5, 3, vz * 0.5, this.h);
      this.lose('Tek vuruş: bir darbe yetti.');
      return;
    }
    this.hud.flash = 0.6;
    this.shake(0.15);
    this.cancelSwing(o);
    // Titanın hançeri kafaya gelse de kafa uçmaz (üç titanla piyango olmasın), bir uzuv gider.
    let res = kind === 'torso' || (a.titan && kind === 'neck') ? null : this.applyCut(rag, hit);
    if (!res && a.titan) {
      // Titanın darbesi gövdeye gelse de bir uzvunu koparır.
      const limbs = [];
      rag.bones.forEach((b, i) => { if ((b.kind === 'arm' || b.kind === 'leg') && rag.pts[b.a].attached && rag.pts[b.b].attached && b.len > MIN_CUT_LEN) limbs.push(i); });
      if (limbs.length) res = rag.cut(pick(limbs), 0.5);
    }
    rag.addVel(vx * 0.25, vy * 0.2 + 1.2, vz * 0.25, this.h);
    this.gore(rag, res, hit, vx, vy, vz);
    const P = rag.pts;
    if (res && (res.kind === 'neck' || (!P[J.LHAND].attached && !P[J.RHAND].attached))) {
      o.die();
      rag.addVel(vx * 0.5, 3, vz * 0.5, this.h);
      this.lose(res.kind === 'neck' ? 'Kafan gitti.' : 'İki kolun da gitti.');
      return;
    }
    o.hurtT = 0.3; o.invuln = res ? 0.9 : 0.6; o.flash = 0.12;
    this.knock(o, o.x - a.x, o.z - a.z, a.titan ? 10 : res ? 4 : 5);
    if (a.titan && !o.mount) { o.vy = 7; o.y = Math.max(o.y, 0.05); o.rope = null; }
    Sfx.hurt();
    if (!res) { this.slowmo(0.12, 0.4); return; }
    o.checkGrip();
    const y = 2.1 * o.S;
    if (res.kind === 'arm') this.fx.popup(o.x, y, o.z, 'KOLUN GİTTİ!', '#ff5a6e', 22, 1.3);
    else if (res.kind === 'leg') this.fx.popup(o.x, y, o.z, o.legMask ? 'TEK AYAK!' : 'BACAKSIZ DEVAM!', '#ff5a6e', 22, 1.3);
    this.slowmo(0.25, 0.3);
  }

  // Oyuncunun yakınında mı (uzaktaki muharebe yazı, sarsıntı ve ağır çekim üretmesin)?
  near(o, r = 12) { const p = this.player; return !!p && Math.hypot(o.x - p.x, o.z - p.z) < r; }

  killEnemy(o, a, res, vx, vy, vz) {
    o.die();
    const h = this.h;
    if (o.titan) {
      // Titan kendi ağırlığıyla çöker: sadece gövdesine hafif bir itme, dönme yok.
      o.rag.addVel(vx * 0.08, 1, vz * 0.08, h, o.rag.comp ? o.rag.comp[J.PELVIS] : undefined);
    } else {
      o.rag.addVel(vx * 0.45, vy * 0.3 + 2.5, vz * 0.45, h);
      o.rag.addSpin(rand(-5, 5), rand(-3, 3), rand(-5, 5), h);
    }
    const y = 2.2 * o.S;
    if (o.titan) { this.fx.popup(o.x, 8, o.z, 'BOYNU KESİLDİ! TİTAN DÜŞTÜ!', '#ffd23f', 30, 1.8); this.shake(0.3); }
    const loud = !a || a.isPlayer || o.titan || this.near(o);
    if (!loud) { this.checkWin(); return; }
    if (res) {
      if (res.kind === 'neck') this.fx.popup(o.x, y, o.z, 'KAFA GİTTİ!', '#ffd23f', 26, 1.2);
      else if (res.kind === 'torso') this.fx.popup(o.x, y, o.z, 'İKİYE BÖLÜNDÜ!', '#ffd23f', 26, 1.2);
      else if (res.kind === 'leg') this.fx.popup(o.x, y, o.z, 'BACAKSIZ!', '#ffd23f', 24, 1.2);
      else if (res.kind === 'arm') this.fx.popup(o.x, y, o.z, 'KOL GİTTİ!', '#ffd23f', 24, 1.2);
    }
    const ep = a ? a.curEp : null;
    if (ep) {
      ep.kills++;
      if (ep.kills >= 2 && a.isPlayer) this.fx.popup(a.x, 2.6, a.z, ep.kills === 2 ? 'ÇİFTE!' : 'KATLİAM!', '#ff5a36', 30, 1.3);
    }
    if (a && a.side === o.side && !o.titan) this.fx.popup(o.x, y + 0.5, o.z, 'DOST ATEŞİ!', '#ff8ad8', 24, 1.3);
    else if (o.team === 'ally') this.fx.popup(o.x, y + 0.5, o.z, 'DOSTUMUZ DÜŞTÜ!', '#7cc8ff', 20, 1.2);
    Sfx.combo(3);
    this.shake(0.12);
    this.checkWin();
    if (this.phase !== 'win') this.slowmo(0.16, 0.28);
  }

  checkWin() {
    if (this.phase !== 'play') return;
    if (this.enemies.some((e) => e.alive)) return;
    if (this.foeWaves && this.foeWaves.length) { this.spawnWave(this.foeWaves.shift()); return; }
    this.phase = 'win';
    this.endT = 0;
    this.slowmo(1.1, 0.2);
    this.hud.show('TEMİZLENDİ!', `Lv ${this.level} geçildi`, 2.6, 'win');
    Sfx.win();
  }

  lose(reason) {
    if (this.phase !== 'play') return;
    this.phase = 'lose';
    this.endT = 0;
    this.slowmo(1.2, 0.25);
    Sfx.die();
    this.hud.show('ÖLDÜN', `${reason || pick(DEATH_QUIPS)}  ·  Tekrar için dokun`, 0, 'lose');
  }

  onFell(c) {
    if (!c.alive) return;
    c.die();
    const e = this.world.env, drop = !!(e.roof || e.grid);
    this.fx.popup(c.x, c.gy + 1.2, c.z, drop ? 'AŞAĞI DÜŞTÜ!' : 'SUYA DÜŞTÜ!', '#9be7ff', 24, 1.3);
    if (c.isPlayer) this.lose(e.roof ? 'Platformdan düştün.' : e.grid ? 'Boşluğa düştün.' : 'Suya düştün.'); else {
      Sfx.combo(5);
      this.checkWin();
    }
  }

  // ---------- kamera ve çizim ----------

  updateCamera(dt, snap) {
    const pl = this.player;
    const P = pl.rag.pts[J.PELVIS];
    const fx = pl.alive ? pl.x : P.x, fz = pl.alive ? pl.z : P.z;
    // Kilitlenme hedefi yapışkandır: ölmedikçe ya da başkası çok daha yakın olmadıkça değişmez.
    const type = this.spec.type;
    const py = pl.alive ? pl.y : Math.max(pl.gy, P.y - 0.8);
    let t = this.camTarget;
    if (this.titanMode) {
      // En yakın titana kilitlenir (muharebede o ölünce sıradakine geçer).
      let near = null, nd = Infinity;
      for (const x of this.titans) { if (!x.alive) continue; const d = Math.hypot(x.x - fx, x.z - fz); if (d < nd) { nd = d; near = x; } }
      if (!t || !t.alive || !t.titan || (near && near !== t && nd < 0.6 * Math.hypot(t.x - fx, t.z - fz))) t = near;
    }
    else if (type === 'horse') t = null;
    else if (type === 'battle') {
      // Muharebede kamera yavaşça en yakın düşmana döner: kalabalığı geçip gidince "ileri"
      // itmek seni yine kavgaya götürür.
      const near = pl.alive ? this.nearestEnemy(pl, 24) : null;
      if (!t || !t.alive || (near && near !== t && Math.hypot(near.x - fx, near.z - fz) < 0.6 * Math.hypot(t.x - fx, t.z - fz))) t = near;
    }
    else {
      // Kilitlenme hedefi yapışkandır: ölmedikçe ya da başkası çok daha yakın olmadıkça değişmez.
      const near = pl.alive ? this.nearestEnemy(pl, 14) : null;
      if (!t || !t.alive || (t.state === 'panic' && near && near.state !== 'panic')) t = near;
      else if (near && near !== t && Math.hypot(near.x - fx, near.z - fz) < 0.6 * Math.hypot(t.x - fx, t.z - fz)) t = near;
    }
    this.camTarget = t;
    let yawT = this.camYaw;
    if (t && pl.alive) yawT = Math.atan2(t.x - fx, t.z - fz);
    else if (pl.alive && Math.hypot(pl.vx, pl.vz) > 1) yawT = pl.yaw;
    else if (!pl.alive) yawT = this.camYaw + dt * 0.3;
    // Yakın dövüşte kamera yavaş döner ki joystick yönleri ayağının altından kaymasın.
    const close = t && Math.hypot(t.x - fx, t.z - fz) < 2.4 * t.S;
    const rate = type === 'battle' ? (t ? 1.0 : 1.8) : type === 'horse' ? 1.8 : close ? 0.6 : t ? 2.5 : 1.2;
    this.camYaw = snap ? yawT : this.camYaw + wrapAngle(yawT - this.camYaw) * damp(rate, dt);
    const portrait = this.H > this.W;
    let dist = portrait ? 4.0 : 4.1, height = portrait ? 3.5 : 2.6, ahead = 1.9, lookY = portrait ? 0.55 : 0.8;
    if (type === 'horse') { dist = portrait ? 6.8 : 6.2; height = portrait ? 5.2 : 4.2; ahead = 3.5; lookY = 1.2; }
    if (type === 'battle') { dist = portrait ? 8.5 : 7.5; height = portrait ? 6.5 : 5.2; ahead = 5; lookY = 1.2; }
    if (this.titanMode) { dist = portrait ? 9.5 : 8.5; height = portrait ? 4.5 : 3.6; ahead = 7; lookY = 3 + py * 0.5; }
    const s = Math.sin(this.camYaw), c = Math.cos(this.camYaw);
    _v.set(fx - s * dist, height + py * (this.titanMode ? 0.85 : 1), fz - c * dist);
    if (snap) this.camera.position.copy(_v); else this.camera.position.lerp(_v, damp(7, dt));
    const look = _v.set(fx + s * ahead, lookY + (this.titanMode ? py * 0.5 : type === 'horse' || type === 'battle' ? 0 : py), fz + c * ahead);
    if (snap) this.lookAt.copy(look); else this.lookAt.lerp(look, damp(9, dt));
    this.camera.lookAt(this.lookAt);
    if (this.shakeAmt > 0.001) {
      this.camera.position.x += (Math.random() - 0.5) * this.shakeAmt;
      this.camera.position.y += (Math.random() - 0.5) * this.shakeAmt;
    }
  }

  // Halat: oyuncunun göğsünden bağlandığı noktaya ince bir silindir.
  updateRope() {
    this.placeRope(this.ropeMesh, this.player);
    // Halatlı dostların halatları (gerektikçe büyüyen bir havuzdan).
    let k = 0;
    for (const c of this.allies) {
      if (!c.flyer || !c.alive || !c.rope) continue;
      if (k >= this.allyRopes.length) {
        const m = new THREE.Mesh(this.ropeMesh.geometry, this.ropeMesh.material);
        m.frustumCulled = false;
        this.scene.add(m);
        this.allyRopes.push(m);
      }
      this.placeRope(this.allyRopes[k++], c);
    }
    for (; k < this.allyRopes.length; k++) this.allyRopes[k].visible = false;
  }

  placeRope(m, c) {
    const r = c.alive ? c.rope : null;
    if (!r) { m.visible = false; return; }
    const a = r.anchor(), N = c.rag.pts[J.NECK];
    _v.set(a.x - N.x, a.y - N.y, a.z - N.z);
    const len = _v.length() || 1e-3;
    m.visible = true;
    m.position.set(N.x, N.y, N.z);
    m.scale.set(1, len, 1);
    m.quaternion.setFromUnitVectors(_up, _v.multiplyScalar(1 / len));
  }

  project(x, y, z) {
    _v.set(x, y, z).project(this.camera);
    if (_v.z > 1) return null;
    return { x: (_v.x + 1) / 2 * this.W, y: (1 - _v.y) / 2 * this.H };
  }

  render(dt) {
    for (const c of this.chars) {
      c.view.update(dt);
      if (c.alive && c.hasSword && c.swordMesh) {
        const s = c.sw;
        placeSword(c.swordMesh, s.gx, s.gy, s.gz, s.dx, s.dy, s.dz, s.wx, s.wy, s.wz);
        if (c.hasSword2 && c.sword2Mesh) { const q = c.sw2; placeSword(c.sword2Mesh, q.gx, q.gy, q.gz, q.dx, q.dy, q.dz, q.wx, q.wy, q.wz); }
      }
    }
    for (const l of this.loose) l.render();
    for (const hs of this.horses) hs.render();
    this.updateRope();
    this.fx.flush();
    this.world.update(dt, this.camera.position);
    const pl = this.player, P = pl.rag.pts[J.PELVIS];
    this.world.followShadow(P.x, P.z);
    this.renderer.render(this.scene, this.camera);
    this.hud.draw(this.projectFn, this.fx.popups, this.input, this.hintT, this.player, this.spec.env === 'grid' || this.spec.env === 'ice' ? this.spec.env : this.spec.type);
  }
}
