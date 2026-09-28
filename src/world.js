import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { hash, rand, clamp, GRAVITY } from './util.js';

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
const ROPE_LAYOUT = [[8.4, 8.4], [-8.4, 8.4], [8.4, -8.4], [-8.4, -8.4], [9.6, 1.3], [-9.6, -1.3], [-3.2, 9.6], [3.2, -9.6]];
for (let i = 0; i < 6; i++) {
  const a = (20 + i * 60) * Math.PI / 180, b = (50 + i * 60) * Math.PI / 180;
  ROPE_LAYOUT.push([+(Math.sin(a) * 4.5).toFixed(2), +(Math.cos(a) * 4.5).toFixed(2)]);
  ROPE_LAYOUT.push([+(Math.sin(b) * 7.2).toFixed(2), +(Math.cos(b) * 7.2).toFixed(2)]);
}
const TILT_K = 1.6, TILT_MAX = 0.42; // halat ağırlık merkezi kaydıkça eğim (dy/dx)

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
    };
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
    this.sun.color.set(e.sun[0]); this.sun.intensity = e.sun[1];
    this.sunDir.set(e.sun[2], e.sun[3], e.sun[4]).normalize();
    this.waterY = e.waterY;
    this.canFall = e.canFall;
    this.wallH = e.wallH || 0;          // alçak kenar duvarı (platform)
    this.overSpeed = e.overSpeed || 0;  // duvarın üstünden devrilmek için gereken hız
    this.fallDepth = e.fallDepth || 0.9;
    this.gx = this.gz = this.gvx = this.gvz = this.tgx = this.tgz = 0;
    this.noStick = !!e.grid;            // hareketli karoya kılıç saplanmasın
    if (e.roof) this.resetRoof();
    if (e.grid) this.resetGrid();
  }

  // Platform seviyesinde lekeler platformun yerel uzayında tutulur (yan yatınca onunla gider).
  get decalLocal() { return !!(this.env && (this.env.roof || this.env.grid)); }
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
    if (!e.floe) return 0;
    return Math.hypot(x, z) < this.floeRadius(Math.atan2(z, x)) ? 0 : -Infinity;
  }

  inside(x, z, m) {
    const e = this.env;
    if (e.grid) return Math.abs(x) < e.half - m && Math.abs(z) < e.half - m;
    if (e.roof) return Math.abs(x) < e.inner - m && Math.abs(z) < e.inner - m;
    if (e.floe) return Math.hypot(x, z) < this.floeRadius(Math.atan2(z, x)) - m;
    return Math.hypot(x, z) < this.radius - m;
  }

  // Sınırı aşan hareketi sınıra izdüşürür ve duvara giden hız bileşenini siler (c: karakter).
  // Sınıra yapışıp kalmayı önler. Buz sahanlığında false döner (eski eksen denemesi kalır).
  clampInside(x, z, m, c) {
    const e = this.env;
    if (e.floe) return false;
    if (e.roof || e.grid) {
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
  updateTilt() {
    const e = this.env;
    let n = 0, cx = 0, cz = 0;
    for (const r of e.ropes) if (r.intact) { cx += r.x; cz += r.z; n++; }
    if (n) { cx /= n; cz /= n; }
    let tx = TILT_K * cx / e.half, tz = TILT_K * cz / e.half;
    const m = Math.hypot(tx, tz);
    if (m > TILT_MAX) { tx *= TILT_MAX / m; tz *= TILT_MAX / m; }
    // Ani sarsıntı: hedefi biraz aşar, sallanarak oturur.
    this.gvx += (tx - this.tgx) * 3; this.gvz += (tz - this.tgz) * 3;
    this.tgx = tx; this.tgz = tz;
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
    if (!e || !e.roof) return;
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
    group.add(slab);

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
      group, floe, water, waterY: -0.35, canFall: true, radius: 16,
      clouds: this.clouds(group, 7, 170, 40, 80),
      sky: [0x8fc2ee, 0xf4f8fc, 0x6c70d0], fog: [35, 170],
      hemi: [0xeef6ff, 0x8aa6d6, 1.15], sun: [0xffffff, 2.5, -0.4, 1, 0.45],
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
