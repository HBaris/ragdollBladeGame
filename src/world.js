import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { hash, rand, clamp, GRAVITY } from './util.js';
import { J } from './ragdoll.js';

// Dört ortam: çayır, buz sahanlığı (düşersen suya), gün batımı dojo ve gökyüzünde
// halatlarla asılı platform (halat kesilirse yan yatar).
// Tüm dokular açılışta canvas ile üretilir; dışarıdan dosya yüklenmez.

function canvasTex(w, h, draw, repeat) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat, repeat); }
  t.anisotropy = 8;
  return t;
}

// Sarmalanan (tile edilebilir) ızgara-Voronoi: buz çatlakları için.
function voronoiIce(g, w, h) {
  const N = 7, cell = w / N;
  const pts = [];
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) pts.push([(i + 0.15 + Math.random() * 0.7) * cell, (j + 0.15 + Math.random() * 0.7) * cell, Math.random()]);
  const img = g.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const ci = Math.floor(x / cell), cj = Math.floor(y / cell);
      let d1 = 1e9, d2 = 1e9, shade = 0;
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        const ii = (ci + di + N) % N, jj = (cj + dj + N) % N;
        const p = pts[jj * N + ii];
        const px = p[0] + (ci + di - ii) * cell, py = p[1] + (cj + dj - jj) * cell;
        const d = Math.hypot(px - x, py - y);
        if (d < d1) { d2 = d1; d1 = d; shade = p[2]; } else if (d < d2) d2 = d;
      }
      const edge = clamp((d2 - d1) / 5, 0, 1);
      const k = (y * w + x) * 4;
      const base = 222 + shade * 18 - (d1 / cell) * 18;
      img.data[k] = lerp3(120, base - 14, edge);
      img.data[k + 1] = lerp3(160, base + 6, edge);
      img.data[k + 2] = lerp3(200, base + 20, edge);
      img.data[k + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
}
function lerp3(a, b, t) { return a + (b - a) * t; }

function grassTexture(g, w, h) {
  g.fillStyle = '#4c9427';
  g.fillRect(0, 0, w, h);
  const cols = ['#3d8420', '#5aab33', '#6fbd3f', '#2f6e17', '#83c94b', '#4a9a2a'];
  g.lineCap = 'round';
  for (let i = 0; i < 4200; i++) {
    const x = Math.random() * w, y = Math.random() * h, l = 4 + Math.random() * 9, a = -Math.PI / 2 + (Math.random() - 0.5) * 1.2;
    g.strokeStyle = cols[i % cols.length];
    g.lineWidth = 1 + Math.random() * 1.5;
    for (const [ox, oy] of [[0, 0], [w, 0], [-w, 0], [0, h], [0, -h]]) {
      g.beginPath();
      g.moveTo(x + ox, y + oy);
      g.lineTo(x + ox + Math.cos(a) * l, y + oy + Math.sin(a) * l);
      g.stroke();
    }
  }
}

function sandTexture(g, w, h) {
  g.fillStyle = '#d9a66e';
  g.fillRect(0, 0, w, h);
  for (let i = 0; i < 6000; i++) {
    g.fillStyle = Math.random() < 0.5 ? 'rgba(160,110,60,0.35)' : 'rgba(250,220,170,0.35)';
    g.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5);
  }
  g.strokeStyle = 'rgba(170,120,70,0.25)';
  g.lineWidth = 2;
  for (let y = 8; y < h; y += 22) {
    g.beginPath();
    for (let x = 0; x <= w; x += 8) g.lineTo(x, y + Math.sin(x / w * Math.PI * 4 + y) * 4);
    g.stroke();
  }
}

function fernTexture(g, w, h) {
  g.clearRect(0, 0, w, h);
  const cx = w / 2;
  g.strokeStyle = '#6f9a2b';
  g.lineWidth = 3;
  g.beginPath(); g.moveTo(cx, h); g.quadraticCurveTo(cx + 4, h * 0.5, cx, 6); g.stroke();
  for (let i = 0; i < 26; i++) {
    const t = i / 26, y = h - 14 - t * (h - 26), len = (1 - t * 0.85) * w * 0.44;
    const col = `rgb(${Math.round(120 + t * 60)},${Math.round(170 + t * 30)},${Math.round(50 + t * 10)})`;
    g.fillStyle = col;
    for (const s of [-1, 1]) {
      g.save();
      g.translate(cx, y);
      g.rotate(s * (1.05 - t * 0.25));
      g.beginPath();
      g.ellipse(0, -len / 2, len * 0.13, len / 2, 0, 0, Math.PI * 2);
      g.fill();
      g.restore();
    }
  }
}

function tuftTexture(g, w, h) {
  g.clearRect(0, 0, w, h);
  g.lineCap = 'round';
  for (let i = 0; i < 18; i++) {
    const x = w * (0.2 + Math.random() * 0.6), top = h * (0.05 + Math.random() * 0.4), bend = (Math.random() - 0.5) * w * 0.5;
    g.strokeStyle = ['#5fae36', '#7cc447', '#4a9429', '#8fd05a'][i % 4];
    g.lineWidth = 2 + Math.random() * 2;
    g.beginPath(); g.moveTo(x, h); g.quadraticCurveTo(x, h * 0.6, x + bend, top); g.stroke();
  }
}

function cloudTexture(g, w, h) {
  g.clearRect(0, 0, w, h);
  for (let i = 0; i < 14; i++) {
    const x = w * (0.2 + Math.random() * 0.6), y = h * (0.45 + Math.random() * 0.25), r = h * (0.15 + Math.random() * 0.2);
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, 'rgba(255,255,255,0.95)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
}

// Düz gölgeli, gürültüyle bozulmuş dağ.
function mountain(radius, height, seed, colors) {
  let geo = new THREE.ConeGeometry(radius, height, 11, 6);
  if (geo.index) geo = geo.toNonIndexed();
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const k = Math.round(v.x * 10) * 7.3 + Math.round(v.y * 10) * 3.1 + Math.round(v.z * 10) * 5.7 + seed;
    const f = 1 - (v.y + height / 2) / height;
    v.x += (hash(k) - 0.5) * radius * 0.35 * f;
    v.z += (hash(k + 1) - 0.5) * radius * 0.35 * f;
    v.y += (hash(k + 2) - 0.5) * height * 0.12 * f;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  const col = new Float32Array(pos.count * 3);
  const n = geo.attributes.normal, c = new THREE.Color();
  for (let i = 0; i < pos.count; i += 3) {
    const y = (pos.getY(i) + pos.getY(i + 1) + pos.getY(i + 2)) / 3;
    const h01 = (y + height / 2) / height, ny = n.getY(i);
    if (h01 > 0.82) c.set(colors.snow); else if (ny > 0.55 && h01 < 0.7) c.set(colors.top); else c.set(colors.rock);
    c.offsetHSL(0, 0, (hash(i * 1.7 + seed) - 0.5) * 0.06);
    for (let k = 0; k < 3; k++) { col[(i + k) * 3] = c.r; col[(i + k) * 3 + 1] = c.g; col[(i + k) * 3 + 2] = c.b; }
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 }));
  m.position.y = height / 2 - 1;
  return m;
}

function boulder(r, seed, color) {
  let geo = new THREE.DodecahedronGeometry(r, 0);
  if (geo.index) geo = geo.toNonIndexed();
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const k = Math.round(pos.getX(i) * 50) + Math.round(pos.getY(i) * 30) * 3 + Math.round(pos.getZ(i) * 70) * 7 + seed;
    pos.setXYZ(i, pos.getX(i) * (1 + (hash(k) - 0.5) * 0.3), pos.getY(i) * 0.7, pos.getZ(i) * (1 + (hash(k + 3) - 0.5) * 0.3));
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.9 }));
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

// Yere dik duran bitki: birkaç yaprak düzlemi, normalleri yukarı (her açıdan aynı aydınlık).
function plantGeometry(n, w, h, tilt) {
  const parts = [];
  for (let i = 0; i < n; i++) {
    const p = new THREE.PlaneGeometry(w, h, 1, 2);
    p.translate(0, h / 2, 0);
    p.rotateX(-tilt * (0.8 + Math.random() * 0.4));
    p.rotateY((i / n) * Math.PI * 2 + Math.random() * 0.5);
    parts.push(p);
  }
  const g = mergeGeometries(parts);
  const nrm = g.attributes.normal;
  for (let i = 0; i < nrm.count; i++) nrm.setXYZ(i, 0, 1, 0);
  return g;
}

function scatter(geo, mat, count, rMin, rMax, sMin, sMax, avoid) {
  const im = new THREE.InstancedMesh(geo, mat, count);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  let placed = 0;
  for (let i = 0; i < count * 3 && placed < count; i++) {
    const a = Math.random() * Math.PI * 2, r = rMin + Math.sqrt(Math.random()) * (rMax - rMin);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (avoid && avoid(x, z)) continue;
    const sc = sMin + Math.random() * (sMax - sMin);
    p.set(x, 0, z);
    q.setFromAxisAngle(up, Math.random() * Math.PI * 2);
    s.set(sc, sc * (0.8 + Math.random() * 0.4), sc);
    m.compose(p, q, s);
    im.setMatrixAt(placed++, m);
  }
  im.count = placed;
  return im;
}

// Beton zemin: açık gri, 1 m'lik ızgara çizgileri.
function gridTexture(g, w, h) {
  g.fillStyle = '#cfd3d8';
  g.fillRect(0, 0, w, h);
  for (let i = 0; i < 2600; i++) {
    g.fillStyle = Math.random() < 0.5 ? 'rgba(0,0,0,0.035)' : 'rgba(255,255,255,0.07)';
    g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
  }
  g.strokeStyle = '#a3a9b0';
  g.lineWidth = 3;
  const n = 4, c = w / n;
  for (let i = 0; i <= n; i++) {
    g.beginPath(); g.moveTo(i * c, 0); g.lineTo(i * c, h); g.stroke();
    g.beginPath(); g.moveTo(0, i * c); g.lineTo(w, i * c); g.stroke();
  }
}

// Kırmızı-beyaz çapraz şerit (silindire sarılınca sarmal çizgi olur). Döşenebilir.
function stripeTexture(g, w, h) {
  g.fillStyle = '#f3efe8';
  g.fillRect(0, 0, w, h);
  g.fillStyle = '#d7262d';
  for (let o = -w; o <= 2 * w; o += w / 2) {
    g.beginPath();
    g.moveTo(o, 0); g.lineTo(o + w / 4, 0); g.lineTo(o + w / 4 - h, h); g.lineTo(o - h, h);
    g.closePath(); g.fill();
  }
}

const STRIPE_PITCH = 0.45; // şerit dokusunun halat boyunca tekrar boyu (m)
const TUBE_RAD = 8;

// Konumları her kare yeniden hesaplanan esnek boru (kopan halatın yere yığılan parçası).
function tubeGeometry(rings, seg) {
  const g = new THREE.BufferGeometry();
  const n = rings * (TUBE_RAD + 1);
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3).setUsage(THREE.DynamicDrawUsage));
  g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(n * 3), 3).setUsage(THREE.DynamicDrawUsage));
  const uv = new Float32Array(n * 2), idx = [];
  for (let i = 0; i < rings; i++) {
    for (let j = 0; j <= TUBE_RAD; j++) {
      const k = i * (TUBE_RAD + 1) + j;
      uv[k * 2] = j / TUBE_RAD; uv[k * 2 + 1] = i * seg / STRIPE_PITCH;
      if (i < rings - 1 && j < TUBE_RAD) {
        const b = k + TUBE_RAD + 1;
        idx.push(k, b, k + 1, b, b + 1, k + 1);
      }
    }
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}

const _t = new THREE.Vector3(), _n = new THREE.Vector3(), _b = new THREE.Vector3(), _d = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);

function updateTube(geo, P, r) {
  const pos = geo.attributes.position.array, nrm = geo.attributes.normal.array;
  const last = P.length - 1;
  for (let i = 0; i <= last; i++) {
    const a = P[Math.max(0, i - 1)], b = P[Math.min(last, i + 1)];
    _t.set(b.x - a.x, b.y - a.y, b.z - a.z);
    if (_t.lengthSq() < 1e-10) _t.set(0, 1, 0);
    _t.normalize();
    // Paralel taşıma: halka çerçevesi boru boyunca bükülmeden ilerler.
    if (i === 0) { _n.crossVectors(_t, _d.set(1, 0, 0)); if (_n.lengthSq() < 1e-6) _n.crossVectors(_t, _d.set(0, 0, 1)); }
    else _n.addScaledVector(_t, -_t.dot(_n));
    _n.normalize();
    _b.crossVectors(_t, _n);
    const p = P[i];
    for (let j = 0; j <= TUBE_RAD; j++) {
      const ang = j / TUBE_RAD * Math.PI * 2, c = Math.cos(ang), s = Math.sin(ang);
      const k = (i * (TUBE_RAD + 1) + j) * 3;
      const nx = _n.x * c + _b.x * s, ny = _n.y * c + _b.y * s, nz = _n.z * c + _b.z * s;
      nrm[k] = nx; nrm[k + 1] = ny; nrm[k + 2] = nz;
      pos[k] = p.x + nx * r; pos[k + 1] = p.y + ny * r; pos[k + 2] = p.z + nz * r;
    }
  }
  geo.attributes.position.needsUpdate = true;
  geo.attributes.normal.needsUpdate = true;
}

// Silindiri a'dan b'ye uzatır (geometri tabanı 0'da, boyu L0).
function placeRope(mesh, L0, ax, ay, az, bx, by, bz) {
  _d.set(bx - ax, by - ay, bz - az);
  const len = _d.length() || 1e-3;
  mesh.position.set(ax, ay, az);
  mesh.scale.set(1, len / L0, 1);
  mesh.quaternion.setFromUnitVectors(_up, _d.multiplyScalar(1 / len));
}

// Platformu tutan halatlar (x, z): köşeler, kenarlar ve dövüşün döndüğü ortada 3 m'lik bir
// halka. Çiftler merkeze göre simetrik: hepsi sağlamken platform düz durur.
// Dört köşede dört halat. Biri kesilince platform o köşeye biraz, yan yana iki tanesi
// kesilince tamamen yatar; çapraz iki halat kalırsa dengesizdir, ağırlığın olduğu yana devrilir.
const ROPE_LAYOUT = [[8.4, 8.4], [-8.4, 8.4], [8.4, -8.4], [-8.4, -8.4]];
const TILT_K = 0.56, TILT_MAX = 0.42; // halat ağırlık merkezi kaydıkça eğim (dy/dx)
const ROOF_LOAD_K = 0.05;             // dengesiz platformda kenardaki bir kişinin eğime katkısı

// Testere arenası: dönen kollar [x, z, yarıçap, yükseklik, açısal hız, ritim kayması (s)].
// İkisi diz, biri bel hizası. Kollar sürekli dönmez: dönüp durur, dinlenir, yeniden hızlanır
// (sürekli dönünce ortadaki kol herkesi ilk 2 saniyede biçip dövüşü kendi bitiriyordu).
const SPINNERS = [[0, 0.5, 3.4, 0.42, 2.3, 6.3], [-8.5, 8, 3.0, 0.95, -2.7, 0], [8.5, 8, 3.0, 0.42, 2.6, 3.4]];
const SAW_ON = 5, SAW_DOWN = 0.9, SAW_OFF = 2.6, SAW_UP = 0.8;
const SAW_CYCLE = SAW_ON + SAW_DOWN + SAW_OFF + SAW_UP;
// Gemi güvertesi: z boyunca yarı uzunluk, yarı genişlik (pruvaya doğru daralır), direkler.
const SHIP_L = 12, SHIP_W = 4.4;
const MASTS = [[0, -3.5], [0, 4]];
function shipHalfW(z) {
  if (z > 6) return SHIP_W + (1.1 - SHIP_W) * Math.min(1, (z - 6) / (SHIP_L - 6));
  if (z < -10) return SHIP_W - 0.8 * Math.min(1, (-10 - z) / 2);
  return SHIP_W;
}

// Buz sahanlığı yüzer: üstündekilerin (cesetler dahil) ağırlığı hangi yana toplanırsa o yan
// suya gömülür. Suyun ICE_SINK kadar altında kalan buz su sayılır: orada duran batar.
const ICE_LOAD_K = 0.018, ICE_TILT_MAX = 0.07, ICE_SINK = 0.4;

// Karanlık ızgara: boşlukta asılı parlak karolar. Karolar dalga ve pistonlarla yükselip
// üstündekini havaya fırlatır.
const TILE = 1.4, GRID_N = 29;
const RING_COL = new THREE.Color(0x27e3ff), PISTON_COL = new THREE.Color(0xff2bd6), TILE_COL = new THREE.Color(0x2b2e34);

function skyDome() {
  const mat = new THREE.ShaderMaterial({
    uniforms: { top: { value: new THREE.Color() }, horizon: { value: new THREE.Color() }, bottom: { value: new THREE.Color() } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, clamp(-h * 4.0, 0.0, 1.0));
      gl_FragColor = vec4(c, 1.0); }`,
    side: THREE.BackSide, depthWrite: false, fog: false,
  });
  const m = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), mat);
  m.renderOrder = -10;
  m.frustumCulled = false;
  return m;
}

function waterMaterial(deep, light) {
  const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { time: { value: 0 }, deep: { value: new THREE.Color(deep) }, light: { value: new THREE.Color(light) } }]);
  return new THREE.ShaderMaterial({
    uniforms,
    fog: true,
    vertexShader: `varying vec3 vW;
      #include <fog_pars_vertex>
      void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,
    fragmentShader: `uniform float time; uniform vec3 deep; uniform vec3 light; varying vec3 vW;
      #include <fog_pars_fragment>
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      void main(){
        vec2 p = vW.xz;
        float wave = sin(p.x*0.35 + time*0.8) * sin(p.y*0.3 - time*0.6);
        vec3 c = mix(deep, light, 0.45 + 0.25 * wave);
        vec2 g = p * vec2(1.4, 3.2);
        vec2 id = floor(g);
        float r = h(id + floor(time * 1.5 + h(id) * 7.0));
        vec2 f = fract(g) - 0.5;
        float glint = step(0.93, r) * smoothstep(0.35, 0.0, abs(f.y) * 2.0 + abs(f.x) * 0.6);
        c = mix(c, vec3(1.0), glint * 0.9);
        gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
      }`,
  });
}

export class World {
  constructor(scene) {
    this.scene = scene;
    this.t = 0;
    this.sky = skyDome();
    scene.add(this.sky);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x777777, 1.1);
    scene.add(this.hemi);
    const sun = new THREE.DirectionalLight(0xffffff, 2.4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera;
    sc.left = -11; sc.right = 11; sc.top = 11; sc.bottom = -11; sc.near = 1; sc.far = 70;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.03;
    scene.add(sun, sun.target);
    this.sun = sun;
    this.sunDir = new THREE.Vector3(0.5, 1, 0.35).normalize();
    // Platform eğimi: zemin y = gx*x + gz*z (yaylı, sallanır).
    this.gx = 0; this.gz = 0; this.gvx = 0; this.gvz = 0; this.tgx = 0; this.tgz = 0;
    this.envs = {
      meadow: this.buildMeadow(),
      ice: this.buildIce(),
      dojo: this.buildDojo(),
      roof: this.buildRoof(),
      grid: this.buildGrid(),
      saw: this.buildSaw(),
      ship: this.buildShip(),
    };
    this.flashT = 0; this.night = false;
    this.bigWave = null;
    this._m4 = new THREE.Matrix4();
    this._col = new THREE.Color();
    for (const e of Object.values(this.envs)) { e.group.visible = false; scene.add(e.group); }
    this.env = null;
  }

  // big: at ve titan seviyeleri için geniş alan (kayalar gizlenir, gölge alanı büyür).
  set(name, big = false) {
    if (this.env) this.env.group.visible = false;
    const e = this.envs[name];
    this.env = e;
    this.name = name;
    e.group.visible = true;
    this.radius = big ? 62 : e.radius;
    for (const p of e.props || []) p.visible = !big;
    const sc = this.sun.shadow.camera, r = big ? 26 : 14;
    if (sc.right !== r) {
      sc.left = -r; sc.right = r; sc.top = r; sc.bottom = -r; sc.far = big ? 120 : 70;
      sc.updateProjectionMatrix();
    }
    this.shadowDist = big ? 60 : 30;
    const u = this.sky.material.uniforms;
    u.top.value.set(e.sky[0]); u.horizon.value.set(e.sky[1]); u.bottom.value.set(e.sky[2]);
    this.scene.fog = new THREE.Fog(e.sky[1], e.fog[0], e.fog[1]);
    this.hemi.color.set(e.hemi[0]); this.hemi.groundColor.set(e.hemi[1]); this.hemi.intensity = e.hemi[2];
    this.baseHemi = e.hemi[2];
    this.sun.color.set(e.sun[0]); this.sun.intensity = e.sun[1];
    this.sunDir.set(e.sun[2], e.sun[3], e.sun[4]).normalize();
    this.waterY = e.waterY;
    this.canFall = e.canFall;
    this.wallH = e.wallH || 0;          // alçak kenar duvarı (platform)
    this.overSpeed = e.overSpeed || 0;  // duvarın üstünden devrilmek için gereken hız
    this.fallDepth = e.fallDepth || 0.9;
    this.gx = this.gz = this.gvx = this.gvz = this.tgx = this.tgz = 0;
    this.loadX = this.loadZ = 0;
    this.night = false; this.flashT = 0; this.bigWave = null; this.shipT = 0;
    if (this.dayEnvI !== undefined) this.scene.environmentIntensity = this.dayEnvI;
    if (e.spinners) for (const sp of e.spinners) { sp.a = sp.a0; sp.t = sp.t0; sp.k = 0; sp.prev = null; sp.cur = null; }
    this.slideMin = e.floe ? 0.004 : 0.07; // buz kaygan: çok az eğimde bile kaydırır
    this.slideGain = e.floe ? 2.5 : 1;
    this.noStick = !!e.grid;            // hareketli karoya kılıç saplanmasın
    if (e.roof) this.resetRoof();
    if (e.grid) this.resetGrid();
  }

  // Platform seviyesinde lekeler platformun yerel uzayında tutulur (yan yatınca onunla gider).
  get decalLocal() { return !!(this.env && (this.env.roof || this.env.grid || this.env.floe || this.env.ship)); }
  get traps() { return this.env && this.env.spinners ? this.env.spinners : null; }
  get ropes() { return this.env && this.env.roof ? this.env.ropes : null; }
  get grid() { return !!(this.env && this.env.grid); }
  get tilt() { return Math.hypot(this.tgx, this.tgz); }

  // Zemin yüksekliği; zemin yoksa (buzun dışı) -Infinity.
  ground(x, z) {
    const e = this.env;
    if (e.grid) {
      const k = this.tileAt(x, z);
      return k < 0 ? -Infinity : e.h[k];
    }
    if (e.roof) return Math.abs(x) <= e.half && Math.abs(z) <= e.half ? this.gx * x + this.gz * z : -Infinity;
    if (e.ship) return Math.abs(z) <= SHIP_L && Math.abs(x) <= shipHalfW(z) ? this.gx * x + this.gz * z : -Infinity;
    if (!e.floe) return 0;
    if (Math.hypot(x, z) >= this.floeRadius(Math.atan2(z, x))) return -Infinity;
    const y = this.gx * x + this.gz * z;
    return y < e.waterY - ICE_SINK ? -Infinity : y; // gömülen kenar su olur
  }

  inside(x, z, m) {
    const e = this.env;
    if (e.grid) return Math.abs(x) < e.half - m && Math.abs(z) < e.half - m;
    if (e.roof) return Math.abs(x) < e.inner - m && Math.abs(z) < e.inner - m;
    if (e.floe) return Math.hypot(x, z) < this.floeRadius(Math.atan2(z, x)) - m;
    if (e.ship) {
      if (Math.abs(z) >= SHIP_L - 0.25 - m || Math.abs(x) >= shipHalfW(z) - 0.25 - m) return false;
      for (const [mx, mz] of MASTS) if (Math.hypot(x - mx, z - mz) < 0.4 + m) return false; // direkler
      return true;
    }
    return Math.hypot(x, z) < this.radius - m;
  }

  // Alçak duvarın/küpeştenin dış normali (devrilme yönü için).
  wallNormal(x, z) {
    const e = this.env;
    if (e.ship) return Math.abs(x) / shipHalfW(z) > Math.abs(z) / SHIP_L ? [Math.sign(x), 0] : [0, Math.sign(z)];
    return Math.abs(x) > Math.abs(z) ? [Math.sign(x), 0] : [0, Math.sign(z)];
  }

  // Sınırı aşan hareketi sınıra izdüşürür ve duvara giden hız bileşenini siler (c: karakter).
  // Sınıra yapışıp kalmayı önler. Buz sahanlığında false döner (eski eksen denemesi kalır).
  clampInside(x, z, m, c) {
    const e = this.env;
    if (e.floe) return false;
    if (e.ship) {
      const Lz = SHIP_L - 0.25 - m - 1e-3;
      if (Math.abs(z) > Lz) { z = Math.sign(z) * Lz; c.vz = 0; c.slideZ = 0; }
      const Lx = shipHalfW(z) - 0.25 - m - 1e-3;
      if (Math.abs(x) > Lx) { x = Math.sign(x) * Lx; c.vx = 0; c.slideX = 0; }
      for (const [mx, mz] of MASTS) if (Math.hypot(x - mx, z - mz) < 0.4 + m) return false;
    } else if (e.roof || e.grid) {
      const L = (e.grid ? e.half : e.inner) - m - 1e-3;
      if (Math.abs(x) > L) { x = Math.sign(x) * L; c.vx = 0; c.slideX = 0; }
      if (Math.abs(z) > L) { z = Math.sign(z) * L; c.vz = 0; c.slideZ = 0; }
    } else {
      const R = Math.hypot(x, z), lim = this.radius - m - 1e-3;
      if (R > lim) {
        const nx = x / R, nz = z / R;
        x = nx * lim; z = nz * lim;
        const vo = c.vx * nx + c.vz * nz;
        if (vo > 0) { c.vx -= nx * vo; c.vz -= nz * vo; }
        const so = c.slideX * nx + c.slideZ * nz;
        if (so > 0) { c.slideX -= nx * so; c.slideZ -= nz * so; }
      }
    }
    c.x = x; c.z = z;
    return true;
  }

  // Buz sahanlığının sınırı: köşeli çokgenin verilen açıdaki yarıçapı.
  floeRadius(a) {
    const V = this.envs.ice.floe;
    const n = V.length;
    if (a < V[0].a) a += Math.PI * 2;
    for (let i = 0; i < n; i++) {
      const p = V[i], q = V[(i + 1) % n];
      const qa = i + 1 < n ? q.a : q.a + Math.PI * 2;
      if (a >= p.a && a <= qa) {
        const dx = Math.cos(a), dz = Math.sin(a);
        const ex = q.x - p.x, ez = q.z - p.z;
        const den = dx * ez - dz * ex;
        return Math.abs(den) < 1e-9 ? p.r : (p.x * ez - p.z * ex) / den;
      }
    }
    return V[0].r;
  }

  followShadow(x, z) {
    const d = this.sunDir;
    this.sun.target.position.set(x, 0, z);
    const k = this.shadowDist || 30;
    this.sun.position.set(x + d.x * k, d.y * k, z + d.z * k);
  }

  update(dt, camPos) {
    this.t += dt;
    this.sky.position.copy(camPos);
    if (this.env.water) this.env.water.material.uniforms.time.value = this.t;
    if (this.env.roof) this.renderRoof(camPos);
    if (this.env.ship) {
      // Gemi gerçekten yalpalar: direkler de yatar (küçük açılarda zemin yüksekliğiyle uyumlu).
      const pl = this.env.plat;
      pl.rotation.set(-Math.asin(clamp(this.gz, -0.9, 0.9)), 0, Math.asin(clamp(this.gx, -0.9, 0.9)));
      this.updateRain(dt, camPos);
    }
    if (this.env.spinners) {
      for (const sp of this.env.spinners) { sp.arm.rotation.y = -sp.a; for (const d of sp.discs) d.rotation.y += dt * 30 * sp.k; }
    }
    if (this.flashT > 0) {
      this.flashT = Math.max(0, this.flashT - dt);
      this.hemi.intensity = this.baseHemi + 4 * this.flashT / 0.18;
    }
    if (this.env.floe) {
      // Buzun eğimi: platformdaki gibi kayma matrisi (dikeyler dik kalır).
      const pl = this.env.plat;
      pl.matrix.set(1, 0, 0, 0, this.gx, 1, this.gz, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      pl.matrixWorldNeedsUpdate = true;
    }
    if (this.env.grid) this.renderGrid();
    for (const c of this.env.clouds || []) {
      c.position.x += dt * 0.6;
      if (c.position.x > 220) c.position.x = -220;
    }
  }

  clouds(group, n, dist, hMin, hMax) {
    const tex = canvasTex(256, 128, cloudTexture);
    const list = [];
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, fog: false, transparent: true, depthWrite: false, opacity: 0.9 }));
      const a = Math.random() * Math.PI * 2, r = dist * (0.7 + Math.random() * 0.5);
      s.position.set(Math.cos(a) * r, rand(hMin, hMax), Math.sin(a) * r);
      const sc = rand(60, 120);
      s.scale.set(sc, sc * 0.45, 1);
      group.add(s);
      list.push(s);
    }
    return list;
  }

  // ---------- karanlık ızgara ----------

  tileAt(x, z) {
    const e = this.env, N = e.N;
    const i = Math.floor(x / e.S + N / 2), j = Math.floor(z / e.S + N / 2);
    return i < 0 || j < 0 || i >= N || j >= N ? -1 : j * N + i;
  }

  // Ayağının altındaki karonun dikey hızı ve (halka dalgasında) dışa itişi.
  tileMotion(x, z, out) {
    const e = this.env;
    out.vy = 0; out.px = 0; out.pz = 0;
    if (!e.grid) return out;
    const k = this.tileAt(x, z);
    if (k < 0) return out;
    out.vy = e.v[k]; out.px = e.px[k]; out.pz = e.pz[k];
    return out;
  }

  // Yükselmiş karo duvar gibidir: y yüksekliğindeki biri içine yürüyemez.
  solidAt(x, z, y) {
    const e = this.env;
    if (!e.grid) return false;
    const k = this.tileAt(x, z);
    return k >= 0 && e.h[k] > y + 0.45;
  }

  resetGrid() {
    const e = this.envs.grid;
    e.h.fill(0); e.v.fill(0); e.px.fill(0); e.pz.fill(0); e.glow.fill(0);
    e.events.length = 0;
    e.nextEv = 3;
    e.dirty.fill(1);
    this.renderGrid();
  }

  // Olaylar: (1) halka dalgası: bir noktadan genişleyen halka karoları kaldırır, üstündekini
  // yukarı ve dışarı fırlatır; (2) piston deseni: karolar önce yanıp söner, sonra bir anda
  // fırlar. İkisi de önce parlayarak uyarır.
  spawnGridEvent(f) {
    const e = this.env, N = e.N, S = e.S;
    const fx = f ? f.x : 0, fz = f ? f.z : 0;
    const lim = e.half - 2;
    if (Math.random() < 0.5) {
      const a = rand(0, Math.PI * 2), r = rand(2, 7);
      e.events.push({ kind: 'ring', t: 0, warn: 1.1, x: clamp(fx + Math.cos(a) * r, -lim, lim), z: clamp(fz + Math.sin(a) * r, -lim, lim), speed: 9, maxR: 24, amp: 1.25, width: 1.9 });
      return;
    }
    const ci = clamp(Math.floor(fx / S + N / 2), 0, N - 1), cj = clamp(Math.floor(fz / S + N / 2), 0, N - 1);
    const tiles = [];
    const pat = Math.floor(rand(0, 3));
    if (pat === 0) {
      // Dama: oyuncunun etrafında 9x9 alanın yarısı.
      const par = Math.random() < 0.5 ? 0 : 1;
      for (let j = cj - 4; j <= cj + 4; j++) for (let i = ci - 4; i <= ci + 4; i++) if (i >= 0 && j >= 0 && i < N && j < N && (i + j) % 2 === par) tiles.push(j * N + i);
    } else if (pat === 1) {
      // Artı: yakındaki bir satır ve sütun boydan boya.
      const i0 = clamp(ci + Math.floor(rand(-2, 3)), 0, N - 1), j0 = clamp(cj + Math.floor(rand(-2, 3)), 0, N - 1);
      for (let k = 0; k < N; k++) { tiles.push(j0 * N + k); if (k !== j0) tiles.push(k * N + i0); }
    } else {
      // Serpiştir: yakında rastgele 16 karo.
      for (let n = 0; n < 16; n++) {
        const i = clamp(ci + Math.floor(rand(-5, 6)), 0, N - 1), j = clamp(cj + Math.floor(rand(-5, 6)), 0, N - 1);
        tiles.push(j * N + i);
      }
    }
    e.events.push({ kind: 'piston', t: 0, warn: 1.0, up: 0.2, hold: 0.7, down: 0.6, amp: 1.6, tiles });
  }

  stepGrid(h, focus) {
    const e = this.env, N = e.N, S = e.S, H = e.h, V = e.v;
    e.nextEv -= h;
    if (e.nextEv <= 0) { this.spawnGridEvent(focus); e.nextEv = rand(3.5, 6.5); }
    const tgt = e.tgt, glow = e.glow, px = e.px, pz = e.pz;
    tgt.fill(0); glow.fill(0); px.fill(0); pz.fill(0);
    for (const ev of e.events) {
      ev.t += h;
      if (ev.kind === 'ring') {
        // Halka merkezden sıfır yükseklikle doğar (ani sıçrama karoyu ışınlamasın).
        const R = (ev.t - ev.warn) * ev.speed - ev.width;
        const i0 = Math.floor(ev.x / S + N / 2), j0 = Math.floor(ev.z / S + N / 2);
        if (ev.t < ev.warn) {
          // Uyarı: merkez karolar yanıp söner.
          const p = 0.5 + 0.5 * Math.sin(ev.t * 22);
          for (let j = j0 - 1; j <= j0 + 1; j++) for (let i = i0 - 1; i <= i0 + 1; i++) {
            if (i < 0 || j < 0 || i >= N || j >= N) continue;
            const k = j * N + i;
            glow[k] = Math.max(glow[k], p * (i === i0 && j === j0 ? 1 : 0.5));
            e.gcol[k] = 0;
          }
          continue;
        }
        const amp = ev.amp * (1 - 0.5 * R / ev.maxR);
        const r0 = Math.max(0, R - ev.width), r1 = R + ev.width;
        const ia = Math.max(0, Math.floor((ev.x - r1) / S + N / 2)), ib = Math.min(N - 1, Math.floor((ev.x + r1) / S + N / 2));
        const ja = Math.max(0, Math.floor((ev.z - r1) / S + N / 2)), jb = Math.min(N - 1, Math.floor((ev.z + r1) / S + N / 2));
        for (let j = ja; j <= jb; j++) for (let i = ia; i <= ib; i++) {
          const cx = (i - N / 2 + 0.5) * S, cz = (j - N / 2 + 0.5) * S;
          const dx = cx - ev.x, dz = cz - ev.z, d = Math.hypot(dx, dz);
          if (d < r0 || d > r1) continue;
          const u = (d - R) / ev.width, b = (1 - u * u) * (1 - u * u);
          const k = j * N + i;
          if (amp * b > tgt[k]) {
            tgt[k] = amp * b; glow[k] = Math.max(glow[k], b); e.gcol[k] = 0;
            const l = d || 1;
            px[k] = dx / l * 3.5 * b; pz[k] = dz / l * 3.5 * b;
          }
        }
        ev.done = R > ev.maxR + ev.width;
      } else {
        const t = ev.t;
        let y = 0, gl = 0;
        if (t < ev.warn) gl = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 26));
        else if (t < ev.warn + ev.up) { y = ev.amp * (t - ev.warn) / ev.up; gl = 1; }
        else if (t < ev.warn + ev.up + ev.hold) { y = ev.amp; gl = 1; }
        else { y = ev.amp * Math.max(0, 1 - (t - ev.warn - ev.up - ev.hold) / ev.down); gl = y / ev.amp; }
        for (const k of ev.tiles) {
          if (y > tgt[k]) tgt[k] = y;
          if (gl > glow[k]) { glow[k] = gl; e.gcol[k] = 1; }
        }
        ev.done = t > ev.warn + ev.up + ev.hold + ev.down;
      }
    }
    if (e.events.length) e.events = e.events.filter((ev) => !ev.done);
    const inv = 1 / h;
    for (let k = 0; k < N * N; k++) {
      const y = tgt[k];
      V[k] = clamp((y - H[k]) * inv, -20, 12);
      if (y !== H[k] || glow[k] !== e.lastGlow[k]) e.dirty[k] = 1;
      H[k] = y;
    }
  }

  renderGrid() {
    const e = this.env, N = e.N, S = e.S, m = this._m4, c = this._col;
    let any = false, anyCol = false;
    for (let k = 0; k < N * N; k++) {
      if (!e.dirty[k]) continue;
      e.dirty[k] = 0;
      const i = k % N, j = (k / N) | 0;
      m.makeTranslation((i - N / 2 + 0.5) * S, e.h[k], (j - N / 2 + 0.5) * S);
      e.tiles.setMatrixAt(k, m);
      any = true;
      const g = e.glow[k];
      if (g !== e.lastGlow[k]) {
        e.lastGlow[k] = g;
        c.copy(e.base[k]).lerp(e.gcol[k] ? PISTON_COL : RING_COL, clamp(g, 0, 1) * 0.85);
        e.tiles.setColorAt(k, c);
        anyCol = true;
      }
    }
    if (any) e.tiles.instanceMatrix.needsUpdate = true;
    if (anyCol) e.tiles.instanceColor.needsUpdate = true;
  }

  buildGrid() {
    const group = new THREE.Group();
    const N = GRID_N, S = TILE, half = N * S / 2;
    // Karolar 4 m derin kutular: yükselince altlarında boşluk görünmez, lekeler içinde saklanır.
    const geo = new THREE.BoxGeometry(S - 0.08, 4, S - 0.08).translate(0, -2, 0);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.28, metalness: 0.3, envMapIntensity: 0.45 });
    const tiles = new THREE.InstancedMesh(geo, mat, N * N);
    tiles.receiveShadow = true;
    tiles.castShadow = true;
    tiles.frustumCulled = false;
    const base = [];
    for (let k = 0; k < N * N; k++) {
      const col = TILE_COL.clone().offsetHSL(0, 0, (hash(k * 3.7) - 0.5) * 0.025);
      base.push(col);
      tiles.setColorAt(k, col);
    }
    group.add(tiles);
    // Karo aralıkları siyah görünsün.
    const under = new THREE.Mesh(new THREE.PlaneGeometry(half * 2, half * 2), new THREE.MeshBasicMaterial({ color: 0x030303 }));
    under.rotation.x = -Math.PI / 2;
    under.position.y = -0.35;
    group.add(under);
    const n2 = N * N;
    return {
      group, grid: true, tiles, base, N, S, half,
      h: new Float32Array(n2), v: new Float32Array(n2), tgt: new Float32Array(n2), px: new Float32Array(n2), pz: new Float32Array(n2),
      glow: new Float32Array(n2), lastGlow: new Float32Array(n2).fill(-1), gcol: new Uint8Array(n2), dirty: new Uint8Array(n2).fill(1),
      events: [], nextEv: 3,
      radius: half - 0.3, floe: null, water: null, waterY: -Infinity, canFall: true, fallDepth: 2.5,
      clouds: [], sky: [0x100b0c, 0x1d1416, 0x030202], fog: [16, 55],
      hemi: [0xfff4ec, 0x1a1a1a, 0.6], sun: [0xffffff, 2.4, 0.35, 1, 0.25],
    };
  }

  // ---------- halatlı platform ----------

  resetRoof() {
    const e = this.envs.roof;
    for (const r of e.ropes) {
      r.intact = true; r.up = null;
      if (r.stub) { e.group.remove(r.stub.mesh); r.stub.mesh.geometry.dispose(); r.stub = null; }
      r.mesh.visible = true;
    }
    this.renderRoof();
  }

  // Kalan halatların ağırlık merkezi ortadan kaydıkça platform halatsız tarafa yatar.
  // jolt: halat yeni koptuysa platform hedefi biraz aşıp sallanarak oturur.
  updateTilt(jolt = true) {
    const e = this.env;
    let n = 0, cx = 0, cz = 0;
    for (const r of e.ropes) if (r.intact) { cx += r.x; cz += r.z; n++; }
    if (n) { cx /= n; cz /= n; }
    let tx = TILT_K * cx / e.half, tz = TILT_K * cz / e.half;
    // Az halatla platform dengesiz: üstündekilerin ağırlığı da onu yatırır (çapraz iki halat
    // kaldıysa asıl belirleyen budur).
    const unstable = n >= 4 ? 0 : n === 3 ? 0.3 : 1;
    tx -= unstable * ROOF_LOAD_K * this.loadX; tz -= unstable * ROOF_LOAD_K * this.loadZ; // ağır yan aşağı
    const m = Math.hypot(tx, tz);
    if (m > TILT_MAX) { tx *= TILT_MAX / m; tz *= TILT_MAX / m; }
    if (jolt) { this.gvx += (tx - this.tgx) * 3; this.gvz += (tz - this.tgz) * 3; }
    this.tgx = tx; this.tgz = tz;
  }

  // Üstündekilerin ağırlık momenti (kenardaki bir kişi = 1). Buz ve platform eğimi için.
  setLoad(chars) {
    const e = this.env;
    if (!e || !(e.floe || e.roof)) return;
    const R = e.floe ? 15.5 : e.half;
    let lx = 0, lz = 0;
    for (const c of chars) {
      if (c.S > 2 || c.falling) continue;
      const P = c.rag.pts[J.PELVIS], x = c.alive ? c.x : P.x, z = c.alive ? c.z : P.z;
      const g = this.ground(x, z);
      if (g === -Infinity || (c.alive ? c.y : P.y) > g + 1.5) continue; // havada ya da suda
      const w = c.alive ? 1 : 0.8;
      lx += w * x / R; lz += w * z / R;
    }
    this.loadX = lx; this.loadZ = lz;
  }

  // hc: kesiğin zeminden yüksekliği. (vx, vz): bıçağın hızı (alt parça o yöne devrilir).
  cutRope(r, hc, vx, vz) {
    const e = this.env;
    r.intact = false;
    hc = clamp(hc, 0.3, 3.2);
    const gy = this.ground(r.x, r.z);
    // Alt parça: zemine bağlı kısa bir zincir; devrilip yere kıvrılır.
    const n = Math.max(3, Math.round(hc / 0.2)), seg = hc / n;
    const l = Math.hypot(vx, vz) || 1, kx = vx / l * 0.03, kz = vz / l * 0.03;
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const f = i / n, y = gy + hc * f;
      pts.push({ x: r.x, y, z: r.z, px: r.x - kx * f, py: y, pz: r.z - kz * f });
    }
    const mesh = new THREE.Mesh(tubeGeometry(n + 1, seg), e.ropeMat);
    mesh.castShadow = true;
    mesh.frustumCulled = false;
    e.group.add(mesh);
    r.stub = { pts, seg, mesh };
    updateTube(mesh.geometry, pts, r.r);
    // Üst parça gergin olduğu için yukarı fırlar ve gökyüzünde kaybolur.
    r.up = { y: gy + hc, len: r.top - (gy + hc), v: 0, t: 0, wx: kx / 0.03, wz: kz / 0.03 };
    this.updateTilt();
  }

  // Simülasyon adımı: platform eğim yayı ve kopan halatlar ya da ızgara olayları.
  // focus: olayların yakınında çıkacağı karakter (oyuncu).
  step(h, focus) {
    const e = this.env;
    if (e && e.grid) { this.stepGrid(h, focus); return; }
    if (e && e.floe) { this.stepFloe(h); return; }
    if (e && e.ship) { this.stepShip(h); return; }
    if (e && e.spinners) { this.stepSaw(h); return; }
    if (!e || !e.roof) return;
    this.updateTilt(false);
    const K = 18, C = 3.4;
    this.gvx += (K * (this.tgx - this.gx) - C * this.gvx) * h; this.gx += this.gvx * h;
    this.gvz += (K * (this.tgz - this.gz) - C * this.gvz) * h; this.gz += this.gvz * h;
    for (const r of e.ropes) {
      if (r.up) {
        r.up.t += h; r.up.v += 60 * h; r.up.y += r.up.v * h;
        if (r.up.t > 2.5) r.up = null;
      }
      if (r.stub) this.stepStub(r, h);
    }
  }

  // Gemi: dalgalar güverteyi yatırır (yalpa x, baş-kıç z); büyük dalga bir yana sert yatırır.
  stepShip(h) {
    const t = (this.shipT += h);
    let roll = 0.15 * Math.sin(0.85 * t) + 0.05 * Math.sin(2.1 * t + 1.3);
    const pitch = 0.05 * Math.sin(0.62 * t + 0.4) + 0.02 * Math.sin(1.7 * t);
    const w = this.bigWave;
    if (w) {
      w.t += h;
      const k = w.t < 0.9 ? w.t / 0.9 : w.t < 2.3 ? 1 : Math.max(0, 1 - (w.t - 2.3) / 1.2);
      roll += w.dir * 0.24 * k;
      if (w.t > 3.5) this.bigWave = null;
    }
    // Büyük dalganın tepesinde alçak küpeşteye kayan denize düşer.
    this.overSpeed = w && w.t > 0.6 && w.t < 2.8 ? 2.2 : this.env.overSpeed;
    this.gvx = (roll - this.gx) / h; this.gvz = (pitch - this.gz) / h;
    this.gx = roll; this.gz = pitch; this.tgx = roll; this.tgz = pitch;
  }

  // Testere: kollar döner; bıçağın önceki ve şimdiki konumu kesme taraması için saklanır.
  // sp.k dönüş hızının oranı (0 duruyor, 1 tam hız); yavaşken kesmez (sp.armed).
  stepSaw(h) {
    for (const sp of this.env.spinners) {
      sp.t = (sp.t + h) % SAW_CYCLE;
      const t = sp.t;
      sp.k = t < SAW_ON ? 1 : t < SAW_ON + SAW_DOWN ? 1 - (t - SAW_ON) / SAW_DOWN
        : t < SAW_ON + SAW_DOWN + SAW_OFF ? 0 : (t - SAW_ON - SAW_DOWN - SAW_OFF) / SAW_UP;
      sp.armed = sp.k > 0.4;
      // NPC'ler için tehlike: dönüyor ya da birazdan dönmeye başlayacak.
      sp.danger = sp.k > 0.1 || t > SAW_CYCLE - SAW_UP - 0.7;
      sp.a += sp.w * sp.k * h;
      const c = Math.cos(sp.a), s2 = Math.sin(sp.a);
      const cur = { bx: sp.x - c * sp.r, by: sp.h, bz: sp.z - s2 * sp.r, tx: sp.x + c * sp.r, ty: sp.h, tz: sp.z + s2 * sp.r };
      sp.prev = sp.cur || cur;
      sp.cur = cur;
    }
  }

  // Gece: ay ışığı, koyu gök ve sis.
  applyNight() {
    this.night = true;
    const u = this.sky.material.uniforms;
    u.top.value.set(0x05070f); u.horizon.value.set(0x1b2440); u.bottom.value.set(0x05060a);
    this.scene.fog.color.set(0x141b30);
    this.hemi.color.set(0x8fa6ff); this.hemi.groundColor.set(0x1a1c26); this.hemi.intensity *= 0.42;
    this.sun.color.set(0xb8c8ff); this.sun.intensity *= 0.38;
    this.baseHemi = this.hemi.intensity;
    // Asıl ışık ortam haritasından geliyor: kısılmazsa gökyüzü kararır ama zemin gündüz kalır.
    if (this.dayEnvI === undefined) this.dayEnvI = this.scene.environmentIntensity;
    this.scene.environmentIntensity = this.dayEnvI * 0.22;
    // Karanlıkta görüş kısalır: uzak yer koyu maviye gömülür.
    const fog = this.scene.fog;
    fog.near = Math.min(fog.near, 6); fog.far = Math.min(fog.far * 0.5, 55);
  }

  // Şimşek: kısa süre her şey aydınlanır.
  flash() { this.flashT = 0.18; }

  // Buz: ağırlık momentine göre eğim hedefi; ağır kütle yavaş, sallanarak yatar.
  stepFloe(h) {
    let tx = -ICE_LOAD_K * this.loadX, tz = -ICE_LOAD_K * this.loadZ; // ağır yan aşağı (zemin = gx*x + gz*z)
    const m = Math.hypot(tx, tz);
    if (m > ICE_TILT_MAX) { tx *= ICE_TILT_MAX / m; tz *= ICE_TILT_MAX / m; }
    this.tgx = tx; this.tgz = tz;
    const K = 5, C = 2.2;
    this.gvx += (K * (tx - this.gx) - C * this.gvx) * h; this.gx += this.gvx * h;
    this.gvz += (K * (tz - this.gz) - C * this.gvz) * h; this.gz += this.gvz * h;
  }

  stepStub(r, h) {
    const P = r.stub.pts, seg = r.stub.seg, rad = r.r;
    const p0 = P[0];
    p0.x = r.x; p0.y = this.ground(r.x, r.z); p0.z = r.z;
    for (let i = 1; i < P.length; i++) {
      const p = P[i];
      const vx = (p.x - p.px) * 0.99, vy = (p.y - p.py) * 0.99, vz = (p.z - p.pz) * 0.99;
      p.px = p.x; p.py = p.y; p.pz = p.z;
      p.x += vx; p.y += vy - GRAVITY * h * h; p.z += vz;
    }
    for (let it = 0; it < 6; it++) {
      for (let i = 1; i < P.length; i++) {
        const a = P[i - 1], b = P[i];
        const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z, d = Math.hypot(dx, dy, dz) || 1e-6;
        const f = (d - seg) / d, wa = i === 1 ? 0 : 0.5, wb = 1 - wa;
        a.x += dx * f * wa; a.y += dy * f * wa; a.z += dz * f * wa;
        b.x -= dx * f * wb; b.y -= dy * f * wb; b.z -= dz * f * wb;
      }
      for (let i = 1; i < P.length; i++) {
        const p = P[i], g = this.ground(p.x, p.z);
        if (p.y < g + rad) {
          p.y = g + rad;
          p.px = p.x - (p.x - p.px) * 0.8; p.pz = p.z - (p.z - p.pz) * 0.8;
        }
      }
    }
  }

  renderRoof(cam) {
    const e = this.env;
    // Kayma (shear) matrisi: yerel (x, y, z) -> (x, y + gx*x + gz*z, z). Dikeyler dik kalır.
    e.plat.matrix.set(1, 0, 0, 0, this.gx, 1, this.gz, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    e.plat.matrixWorldNeedsUpdate = true;
    for (const r of e.ropes) {
      const m = r.mesh;
      // Kameranın dibindeki halat ekranı kapatmasın: yaklaştıkça saydamlaşır.
      const cd = cam ? Math.hypot(cam.x - r.x, cam.z - r.z) : 9;
      const op = clamp((cd - 0.7) / 1.6, 0.12, 1);
      m.material.opacity = op;
      m.material.transparent = op < 1;
      m.material.depthWrite = op >= 1;
      if (r.intact) {
        m.visible = true;
        placeRope(m, r.L0, r.x, this.ground(r.x, r.z), r.z, r.x, r.top, r.z);
      } else if (r.up) {
        // Kopunca kırbaç gibi sallanarak yukarı çekilir.
        const u = r.up, w = Math.sin(u.t * 24) * 0.6 * Math.exp(-u.t * 2.2);
        m.visible = true;
        placeRope(m, r.L0, r.x + u.wx * w, u.y, r.z + u.wz * w, r.x, u.y + u.len, r.z);
      } else m.visible = false;
      if (r.stub) updateTube(r.stub.mesh.geometry, r.stub.pts, r.r);
    }
  }

  buildRoof() {
    const group = new THREE.Group();
    const plat = new THREE.Group();
    plat.matrixAutoUpdate = false;
    group.add(plat);
    const half = 11, wallT = 0.3, wallH = 0.45;
    const grid = canvasTex(256, 256, gridTexture);
    grid.wrapS = grid.wrapT = THREE.RepeatWrapping;
    grid.repeat.set(half * 2 / 4, half * 2 / 4);
    const top = new THREE.MeshStandardMaterial({ map: grid, roughness: 0.85 });
    const side = new THREE.MeshStandardMaterial({ color: 0x8d949c, roughness: 0.9 });
    const under = new THREE.MeshStandardMaterial({ color: 0x5f666e, roughness: 0.9 });
    const slab = new THREE.Mesh(new THREE.BoxGeometry(half * 2, 0.8, half * 2), [side, side, top, under, side, side]);
    slab.position.y = -0.4;
    slab.receiveShadow = true;
    slab.castShadow = true;
    plat.add(slab);
    // Alt kirişler (platform yan yatınca görünür).
    for (const [w, d, x, z] of [[half * 2, 0.5, 0, -5], [half * 2, 0.5, 0, 5], [0.5, half * 2, -5, 0], [0.5, half * 2, 5, 0]]) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, 0.5, d), under);
      b.position.set(x, -1.05, z);
      plat.add(b);
    }
    // Alçak kenar duvarı
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xb2b8bf, roughness: 0.8 });
    for (const [w, d, x, z] of [[half * 2, wallT, 0, half - wallT / 2], [half * 2, wallT, 0, -half + wallT / 2], [wallT, half * 2 - wallT * 2, half - wallT / 2, 0], [wallT, half * 2 - wallT * 2, -half + wallT / 2, 0]]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, wallH, d), wallMat);
      m.position.set(x, wallH / 2, z);
      m.castShadow = true;
      m.receiveShadow = true;
      plat.add(m);
    }
    // Halatlar
    const stripe = canvasTex(64, 64, stripeTexture);
    stripe.wrapS = stripe.wrapT = THREE.RepeatWrapping;
    const ropeMat = new THREE.MeshStandardMaterial({ map: stripe, roughness: 0.55 });
    const plateMat = new THREE.MeshStandardMaterial({ color: 0x4a5058, roughness: 0.4, metalness: 0.6 });
    const ropes = [];
    const R = 0.075, TOP = 46;
    for (const [x, z] of ROPE_LAYOUT) {
      const L0 = TOP;
      const geo = new THREE.CylinderGeometry(R, R, L0, 10, 1, true).translate(0, L0 / 2, 0);
      const uv = geo.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i) * L0 / STRIPE_PITCH);
      const mesh = new THREE.Mesh(geo, ropeMat.clone());
      mesh.castShadow = true;
      group.add(mesh);
      const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.07, 14), plateMat);
      plate.position.set(x, 0.035, z);
      plate.receiveShadow = true;
      plat.add(plate);
      ropes.push({ x, z, r: R, top: TOP, L0, mesh, intact: true, stub: null, up: null });
    }
    // Aşağıda bulut denizi, uzakta sisin içinde gökdelen tepeleri.
    const cloudTex = canvasTex(256, 128, cloudTexture);
    const low = [];
    for (let i = 0; i < 16; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloudTex, fog: false, transparent: true, depthWrite: false, opacity: 0.95 }));
      const a = Math.random() * Math.PI * 2, r = rand(25, 150);
      s.position.set(Math.cos(a) * r, rand(-48, -12), Math.sin(a) * r);
      const sc = rand(40, 95);
      s.scale.set(sc, sc * 0.45, 1);
      group.add(s);
      low.push(s);
    }
    const towerMat = new THREE.MeshStandardMaterial({ color: 0x9fb4c9, roughness: 0.9 });
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2 + rand(-0.15, 0.15), r = rand(40, 120), w = rand(6, 13), topY = rand(-30, 5);
      const t = new THREE.Mesh(new THREE.BoxGeometry(w, 200, w * rand(0.7, 1.3)), towerMat);
      t.position.set(Math.cos(a) * r, topY - 100, Math.sin(a) * r);
      t.rotation.y = rand(0, Math.PI);
      group.add(t);
    }
    return {
      group, plat, roof: true, half, inner: half - wallT, wallH, overSpeed: 5, fallDepth: 1.5,
      ropes, ropeMat, radius: half - wallT, floe: null, water: null, waterY: -Infinity, canFall: true,
      clouds: low.concat(this.clouds(group, 8, 170, 25, 70)),
      sky: [0x3f8fe0, 0xd6e9f8, 0xf1f6fb], fog: [55, 240],
      hemi: [0xeaf4ff, 0xa9b8c8, 1.1], sun: [0xffffff, 2.6, 0.4, 1, 0.5],
    };
  }

  buildMeadow() {
    const group = new THREE.Group();
    const grass = canvasTex(256, 256, grassTexture, 70);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), new THREE.MeshStandardMaterial({ map: grass, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    group.add(ground);

    const fernMat = new THREE.MeshStandardMaterial({ map: canvasTex(128, 256, fernTexture), alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.9 });
    // Dövüş alanının ortası seyrek kalsın ki görüşü kapatmasın.
    const sparseCenter = (x, z) => Math.hypot(x, z) < 20 && Math.random() < 0.85;
    group.add(scatter(plantGeometry(6, 0.42, 1.0, 0.75), fernMat, 320, 1.5, 45, 0.6, 1.5, sparseCenter));
    const tuftMat = new THREE.MeshStandardMaterial({ map: canvasTex(64, 64, tuftTexture), alphaTest: 0.4, side: THREE.DoubleSide, roughness: 1 });
    group.add(scatter(plantGeometry(3, 0.35, 0.3, 0.2), tuftMat, 1400, 0.5, 40, 0.6, 1.3));

    const colors = { rock: 0x7f7c77, top: 0x5c9b33, snow: 0xf3f5f6 };
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2 + rand(-0.15, 0.15);
      const r = rand(85, 130);
      const m = mountain(rand(28, 50), rand(26, 55), i * 13.7, colors);
      m.position.x = Math.cos(a) * r;
      m.position.z = Math.sin(a) * r;
      group.add(m);
    }
    const props = [];
    for (let i = 0; i < 16; i++) {
      const a = Math.random() * Math.PI * 2, r = rand(31, 48);
      const b = boulder(rand(0.8, 2.6), i * 31, 0x8a867e);
      b.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
      group.add(b);
      props.push(b);
    }
    return {
      group, props, radius: 28, floe: null, water: null, waterY: -Infinity, canFall: false,
      clouds: this.clouds(group, 9, 170, 45, 90),
      sky: [0x5ea8ea, 0xe6f2fb, 0x9fc58a], fog: [45, 190],
      hemi: [0xd8ecff, 0x4f7a2c, 1.0], sun: [0xfff4e0, 2.6, 0.45, 1, 0.3],
    };
  }

  buildIce() {
    const group = new THREE.Group();
    // Düzensiz çokgen buz sahanlığı.
    const n = 12, floe = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + rand(-0.1, 0.1) - Math.PI;
      const r = rand(14.5, 17);
      floe.push({ a, r, x: Math.cos(a) * r, z: Math.sin(a) * r });
    }
    const shape = new THREE.Shape();
    floe.forEach((p, i) => (i ? shape.lineTo(p.x, -p.z) : shape.moveTo(p.x, -p.z)));
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 1.4, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 1 });
    geo.rotateX(-Math.PI / 2);
    geo.translate(0, -1.4 - 0.08, 0);
    const iceTex = canvasTex(256, 256, voronoiIce);
    iceTex.wrapS = iceTex.wrapT = THREE.RepeatWrapping;
    iceTex.repeat.set(0.28, 0.28);
    const top = new THREE.MeshStandardMaterial({ map: iceTex, roughness: 0.35, metalness: 0 });
    const side = new THREE.MeshStandardMaterial({ color: 0x86b9e0, roughness: 0.3 });
    const slab = new THREE.Mesh(geo, [top, side]);
    slab.receiveShadow = true;
    slab.castShadow = true;
    const plat = new THREE.Group();
    plat.matrixAutoUpdate = false;
    plat.add(slab);
    group.add(plat);

    const water = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), waterMaterial(0x4a4dc2, 0x8a8ff0));
    water.rotation.x = -Math.PI / 2;
    water.position.y = -0.35;
    group.add(water);

    const bergMat = new THREE.MeshStandardMaterial({ color: 0xa6c8e8, roughness: 0.35, flatShading: true });
    const makeBerg = (w, h, d, x, z, seed) => {
      let g = new THREE.BoxGeometry(w, h, d, 3, 6, 3);
      if (g.index) g = g.toNonIndexed();
      const pos = g.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const k = Math.round(pos.getX(i) * 10) * 3.3 + Math.round(pos.getY(i) * 10) * 1.7 + Math.round(pos.getZ(i) * 10) * 5.1 + seed;
        pos.setXYZ(i, pos.getX(i) + (hash(k) - 0.5) * w * 0.25, pos.getY(i) + (hash(k + 1) - 0.5) * 0.6, pos.getZ(i) + (hash(k + 2) - 0.5) * d * 0.25);
      }
      g.computeVertexNormals();
      const m = new THREE.Mesh(g, bergMat);
      m.position.set(x, h / 2 - 1.5, z);
      m.rotation.y = rand(0, Math.PI);
      group.add(m);
    };
    makeBerg(7, 20, 6, 12, 44, 1);
    makeBerg(5, 9, 5, -38, 30, 2);
    makeBerg(9, 6, 7, -22, -46, 3);
    makeBerg(4, 13, 4, 46, -14, 4);
    for (let i = 0; i < 14; i++) {
      const a = Math.random() * Math.PI * 2, r = rand(20, 40);
      const c = boulder(rand(0.4, 1.3), i * 7, 0xd9ecfa);
      c.position.set(Math.cos(a) * r, -0.35, Math.sin(a) * r);
      c.castShadow = false;
      group.add(c);
    }
    return {
      group, plat, floe, water, waterY: -0.35, canFall: true, radius: 16,
      clouds: this.clouds(group, 7, 170, 40, 80),
      sky: [0x8fc2ee, 0xf4f8fc, 0x6c70d0], fog: [35, 170],
      hemi: [0xeef6ff, 0x8aa6d6, 1.15], sun: [0xffffff, 2.5, -0.4, 1, 0.45],
    };
  }

  // Yağmur: kameranın çevresinde düşen damlalar (gemi seviyesi).
  updateRain(dt, cam) {
    const r = this.env.rain;
    if (!r) return;
    const P = r.geo.attributes.position, a = P.array;
    for (let i = 0; i < a.length; i += 3) {
      a[i + 1] -= 22 * dt; a[i] += 3 * dt;
      if (a[i + 1] < cam.y - 6 || Math.abs(a[i] - cam.x) > 14 || Math.abs(a[i + 2] - cam.z) > 14) {
        a[i] = cam.x + rand(-14, 14); a[i + 1] = cam.y + rand(2, 12); a[i + 2] = cam.z + rand(-14, 14);
      }
    }
    P.needsUpdate = true;
  }

  buildSaw() {
    const group = new THREE.Group();
    const floorTex = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#5c6066'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 1800; i++) { g.fillStyle = Math.random() < 0.5 ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.05)'; g.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
      g.strokeStyle = '#3d4045'; g.lineWidth = 4;
      for (let i = 0; i <= 2; i++) { g.beginPath(); g.moveTo(i * w / 2, 0); g.lineTo(i * w / 2, h); g.stroke(); g.beginPath(); g.moveTo(0, i * h / 2); g.lineTo(w, i * h / 2); g.stroke(); }
      g.fillStyle = '#7a7f86';
      for (const [x, y] of [[20, 20], [w - 20, 20], [20, h - 20], [w - 20, h - 20], [w / 2 - 20, h / 2 - 20]]) { g.beginPath(); g.arc(x, y, 5, 0, Math.PI * 2); g.fill(); }
    }, 0);
    floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping; floorTex.repeat.set(14, 14);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(19, 48).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.6, metalness: 0.3 }));
    floor.receiveShadow = true;
    group.add(floor);
    const pit = new THREE.Mesh(new THREE.PlaneGeometry(300, 300).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x2a2622, roughness: 1 }));
    pit.position.y = -0.02;
    group.add(pit);
    // Arena duvarı: kalın taş halka ve üstünde demir parmaklık.
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x6e655c, roughness: 0.95, flatShading: true });
    const wall = new THREE.Mesh(new THREE.CylinderGeometry(19.8, 19.8, 1.6, 48, 1, true), wallMat);
    wall.material.side = THREE.DoubleSide;
    wall.position.y = 0.8;
    wall.receiveShadow = true;
    group.add(wall);
    // Dönen kollar: direk, uyarı şeritli taban, kol ve uçlarında dairesel testereler.
    const hazard = canvasTex(128, 32, (g, w, h) => { g.fillStyle = '#f2c230'; g.fillRect(0, 0, w, h); g.fillStyle = '#1b1b1b'; for (let o = -h; o < w + h; o += 24) { g.beginPath(); g.moveTo(o, 0); g.lineTo(o + 12, 0); g.lineTo(o + 12 - h, h); g.lineTo(o - h, h); g.closePath(); g.fill(); } }, 0);
    hazard.wrapS = THREE.RepeatWrapping; hazard.repeat.set(6, 1);
    const steel = new THREE.MeshStandardMaterial({ color: 0xc9cfd6, metalness: 0.9, roughness: 0.25 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x2c2f33, metalness: 0.6, roughness: 0.5 });
    const ringMat = new THREE.MeshStandardMaterial({ map: hazard, roughness: 0.7 });
    const spinners = [];
    for (const [x, z, r, hgt, w, t0] of SPINNERS) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(r + 0.1, r + 0.45, 40).rotateX(-Math.PI / 2), ringMat);
      ring.position.set(x, 0.01, z);
      group.add(ring);
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, hgt + 0.25, 12), dark);
      post.position.set(x, (hgt + 0.25) / 2, z);
      post.castShadow = true;
      group.add(post);
      const arm = new THREE.Group();
      arm.position.set(x, hgt, z);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(r * 2, 0.07, 0.22), steel);
      bar.castShadow = true;
      arm.add(bar);
      const discs = [];
      for (const sx of [-1, 1]) {
        const d = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.04, 20), steel);
        d.position.x = sx * r;
        d.castShadow = true;
        arm.add(d);
        discs.push(d);
      }
      group.add(arm);
      const a0 = Math.random() * Math.PI * 2;
      spinners.push({ x, z, r, h: hgt, w, a: a0, a0, t: t0, t0, k: 0, armed: false, danger: false, arm, discs, cur: null, prev: null });
    }
    // Duvar dibinde meşaleler
    const torchMat = new THREE.MeshBasicMaterial({ color: 0xffa040 });
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      const f = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.45, 8), torchMat);
      f.position.set(Math.cos(a) * 19.4, 1.9, Math.sin(a) * 19.4);
      group.add(f);
    }
    return {
      group, spinners, radius: 18.6, floe: null, water: null, waterY: -Infinity, canFall: false,
      clouds: this.clouds(group, 4, 170, 50, 90),
      sky: [0x3b2a33, 0x8a5a4a, 0x2a2420], fog: [30, 120],
      hemi: [0xffd9b8, 0x3a3030, 0.9], sun: [0xffc896, 2.3, 0.3, 1, 0.4],
    };
  }

  buildShip() {
    const group = new THREE.Group();
    const plat = new THREE.Group();
    group.add(plat);
    // Güverte ve gövde: yandan bakınca pruvaya daralan bir dış hat.
    const outline = [];
    for (let z = -SHIP_L; z <= SHIP_L + 1e-6; z += 0.5) outline.push([shipHalfW(z), z]);
    const shape = new THREE.Shape();
    outline.forEach(([w, z], i) => (i ? shape.lineTo(w, -z) : shape.moveTo(w, -z)));
    for (let i = outline.length - 1; i >= 0; i--) shape.lineTo(-outline[i][0], -outline[i][1]);
    shape.closePath();
    const plank = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#8a5e3b'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#80552f' : '#946640'; g.fillRect(i * w / 8, 0, w / 8 - 2, h); }
      g.fillStyle = 'rgba(30,15,5,0.5)'; for (let i = 0; i < 8; i++) g.fillRect(i * w / 8 - 2, 0, 2, h);
      for (let i = 0; i < 900; i++) { g.fillStyle = 'rgba(0,0,0,0.06)'; g.fillRect(Math.random() * w, Math.random() * h, 1, 5); }
    }, 0);
    plank.wrapS = plank.wrapT = THREE.RepeatWrapping; plank.repeat.set(0.35, 0.35);
    const deckGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.4, bevelEnabled: false });
    deckGeo.rotateX(-Math.PI / 2); deckGeo.translate(0, -0.4, 0);
    const deck = new THREE.Mesh(deckGeo, [new THREE.MeshStandardMaterial({ map: plank, roughness: 0.8 }), new THREE.MeshStandardMaterial({ color: 0x4a2f1c, roughness: 0.9 })]);
    deck.receiveShadow = true;
    plat.add(deck);
    const hullGeo = new THREE.ExtrudeGeometry(shape, { depth: 3.2, bevelEnabled: true, bevelThickness: 0.2, bevelSize: 0.25, bevelSegments: 2 });
    hullGeo.rotateX(-Math.PI / 2); hullGeo.translate(0, -3.6, 0);
    const hull = new THREE.Mesh(hullGeo, new THREE.MeshStandardMaterial({ color: 0x3b2416, roughness: 0.9 }));
    plat.add(hull);
    // Küpeşte: dikmeler ve üst parmaklık.
    const railMat = new THREE.MeshStandardMaterial({ color: 0x6b4426, roughness: 0.8 });
    const railH = 0.55;
    const side = [];
    for (let z = -SHIP_L; z <= SHIP_L + 1e-6; z += 1.5) side.push([shipHalfW(z), z]);
    for (const sx of [-1, 1]) {
      for (let i = 0; i < side.length; i++) {
        const [w, z] = side[i];
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, railH, 0.12), railMat);
        post.position.set(sx * w, railH / 2, z);
        post.castShadow = true;
        plat.add(post);
        if (i) {
          const [w0, z0] = side[i - 1];
          const len = Math.hypot(w - w0, z - z0);
          const rail = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, len), railMat);
          rail.position.set(sx * (w + w0) / 2, railH, (z + z0) / 2);
          rail.rotation.y = Math.atan2(sx * (w - w0), z - z0);
          plat.add(rail);
        }
      }
    }
    const stern = new THREE.Mesh(new THREE.BoxGeometry(shipHalfW(-SHIP_L) * 2, 0.1, 0.14), railMat);
    stern.position.set(0, railH, -SHIP_L);
    plat.add(stern);
    // Direkler, serenler ve yelkenler.
    const mastMat = new THREE.MeshStandardMaterial({ color: 0x5a3a22, roughness: 0.8 });
    const sailMat = new THREE.MeshStandardMaterial({ color: 0xe8dfc8, roughness: 0.9, side: THREE.DoubleSide });
    for (const [mx, mz] of MASTS) {
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 11, 10), mastMat);
      mast.position.set(mx, 5.5, mz);
      mast.castShadow = true;
      plat.add(mast);
      for (const [y, w] of [[4.2, 6], [8, 4.4]]) {
        const yard = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, w, 8), mastMat);
        yard.rotation.z = Math.PI / 2;
        yard.position.set(mx, y + 2.6, mz);
        plat.add(yard);
        const sailGeo = new THREE.PlaneGeometry(w * 0.92, 2.5, 6, 3);
        const pos = sailGeo.attributes.position;
        for (let i = 0; i < pos.count; i++) pos.setZ(i, 0.45 * (1 - (pos.getX(i) / (w * 0.46)) ** 2));
        const sail = new THREE.Mesh(sailGeo, sailMat);
        sail.position.set(mx, y + 1.3, mz + 0.05);
        sail.castShadow = true;
        plat.add(sail);
      }
    }
    // Fırtınalı deniz ve yağmur.
    const water = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), waterMaterial(0x1d2a3a, 0x4d6278));
    water.rotation.x = -Math.PI / 2;
    water.position.y = -2.4;
    group.add(water);
    const rainGeo = new THREE.BufferGeometry();
    const ra = new Float32Array(700 * 3);
    for (let i = 0; i < ra.length; i += 3) { ra[i] = rand(-14, 14); ra[i + 1] = rand(-4, 12); ra[i + 2] = rand(-14, 14); }
    rainGeo.setAttribute('position', new THREE.BufferAttribute(ra, 3));
    const rainPts = new THREE.Points(rainGeo, new THREE.PointsMaterial({ color: 0xbfd0e6, size: 0.06, transparent: true, opacity: 0.7, depthWrite: false }));
    rainPts.frustumCulled = false;
    group.add(rainPts);
    return {
      group, plat, ship: true, rain: { geo: rainGeo },
      wallH: railH, overSpeed: 5.5, fallDepth: 2.6,
      radius: SHIP_L, floe: null, water, waterY: -2.4, canFall: true,
      clouds: this.clouds(group, 9, 160, 30, 60),
      sky: [0x2b3442, 0x6d7a88, 0x1a2029], fog: [22, 110],
      hemi: [0xc8d4e4, 0x30343a, 0.75], sun: [0xd8e2f0, 1.4, 0.3, 1, 0.5],
    };
  }

  buildDojo() {
    const group = new THREE.Group();
    const sand = canvasTex(256, 256, sandTexture, 60);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), new THREE.MeshStandardMaterial({ map: sand, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    group.add(ground);
    // Arena sınırı: taş halka.
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x9a8a78, flatShading: true, roughness: 0.9 });
    for (let i = 0; i < 84; i++) {
      const a = (i / 84) * Math.PI * 2;
      const s = new THREE.Mesh(new THREE.DodecahedronGeometry(rand(0.22, 0.34), 0), stoneMat);
      s.position.set(Math.cos(a) * 22.6, 0.08, Math.sin(a) * 22.6);
      s.castShadow = true;
      group.add(s);
    }
    // Torii kapısı
    const red = new THREE.MeshStandardMaterial({ color: 0xc8261e, roughness: 0.6 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x2a1a16, roughness: 0.7 });
    const torii = new THREE.Group();
    for (const sx of [-2.6, 2.6]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 6, 12), red);
      p.position.set(sx, 3, 0);
      torii.add(p);
    }
    const beam = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.45, 0.6), dark);
    beam.position.y = 6.2;
    const beam2 = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.35, 0.45), red);
    beam2.position.y = 5.1;
    torii.add(beam, beam2);
    torii.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    torii.position.set(0, 0, 30);
    group.add(torii);
    // Taş fenerler
    for (const [x, z] of [[-9, 27], [9, 27], [-27, -6], [27, -6], [-16, -24], [16, -24]]) {
      const l = new THREE.Group();
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 1.2, 8), stoneMat);
      base.position.y = 0.6;
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.8), stoneMat);
      box.position.y = 1.5;
      const roof = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.5, 4), stoneMat);
      roof.position.y = 2.05;
      roof.rotation.y = Math.PI / 4;
      l.add(base, box, roof);
      l.traverse((o) => { if (o.isMesh) o.castShadow = true; });
      l.position.set(x, 0, z);
      group.add(l);
    }
    // Uzak kum tepeleri ve güneş
    const duneColors = { rock: 0xc98e5a, top: 0xd69c62, snow: 0xe2ad72 };
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const m = mountain(rand(40, 70), rand(10, 22), i * 5.3, duneColors);
      m.position.x = Math.cos(a) * rand(90, 130);
      m.position.z = Math.sin(a) * rand(90, 130);
      group.add(m);
    }
    const sunTex = canvasTex(128, 128, (g, w) => {
      const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
      gr.addColorStop(0, 'rgba(255,90,50,1)'); gr.addColorStop(0.55, 'rgba(255,90,50,1)'); gr.addColorStop(0.6, 'rgba(255,140,90,0.35)'); gr.addColorStop(1, 'rgba(255,160,100,0)');
      g.fillStyle = gr; g.fillRect(0, 0, w, w);
    });
    const sunSpr = new THREE.Sprite(new THREE.SpriteMaterial({ map: sunTex, fog: false, depthWrite: false }));
    sunSpr.position.set(0, 38, 190);
    sunSpr.scale.set(90, 90, 1);
    group.add(sunSpr);
    return {
      group, radius: 22, floe: null, water: null, waterY: -Infinity, canFall: false,
      clouds: this.clouds(group, 5, 170, 50, 90),
      sky: [0xf4cfa8, 0xf39a66, 0xc98a5a], fog: [40, 170],
      hemi: [0xffe0c0, 0x9a6a40, 1.0], sun: [0xffc08a, 2.4, -0.2, 0.55, 0.8],
    };
  }
}
