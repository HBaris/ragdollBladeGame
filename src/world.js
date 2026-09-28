import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { hash, rand, clamp } from './util.js';

// Üç ortam: çayır, buz sahanlığı (düşersen suya), gün batımı dojo.
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
    this.envs = {
      meadow: this.buildMeadow(),
      ice: this.buildIce(),
      dojo: this.buildDojo(),
    };
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
    const sc = this.sun.shadow.camera, r = big ? 26 : 11;
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
  }

  // Zemin yüksekliği; zemin yoksa (buzun dışı) -Infinity.
  ground(x, z) {
    const e = this.env;
    if (!e.floe) return 0;
    return Math.hypot(x, z) < this.floeRadius(Math.atan2(z, x)) ? 0 : -Infinity;
  }

  inside(x, z, m) {
    const e = this.env;
    if (e.floe) return Math.hypot(x, z) < this.floeRadius(Math.atan2(z, x)) - m;
    return Math.hypot(x, z) < this.radius - m;
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

  buildMeadow() {
    const group = new THREE.Group();
    const grass = canvasTex(256, 256, grassTexture, 70);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), new THREE.MeshStandardMaterial({ map: grass, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    group.add(ground);

    const fernMat = new THREE.MeshStandardMaterial({ map: canvasTex(128, 256, fernTexture), alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.9 });
    // Dövüş alanının ortası seyrek kalsın ki görüşü kapatmasın.
    const sparseCenter = (x, z) => Math.hypot(x, z) < 6 && Math.random() < 0.85;
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
      const a = Math.random() * Math.PI * 2, r = rand(15, 30);
      const b = boulder(rand(0.6, 2.2), i * 31, 0x8a867e);
      b.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
      group.add(b);
      props.push(b);
    }
    return {
      group, props, radius: 13, floe: null, water: null, waterY: -Infinity, canFall: false,
      clouds: this.clouds(group, 9, 170, 45, 90),
      sky: [0x5ea8ea, 0xe6f2fb, 0x9fc58a], fog: [45, 190],
      hemi: [0xd8ecff, 0x4f7a2c, 1.0], sun: [0xfff4e0, 2.6, 0.45, 1, 0.3],
    };
  }

  buildIce() {
    const group = new THREE.Group();
    // Düzensiz çokgen buz sahanlığı.
    const n = 9, floe = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + rand(-0.12, 0.12) - Math.PI;
      const r = rand(7.4, 8.8);
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
    makeBerg(7, 20, 6, 9, 34, 1);
    makeBerg(5, 9, 5, -30, 26, 2);
    makeBerg(9, 6, 7, -18, -40, 3);
    makeBerg(4, 13, 4, 38, -12, 4);
    for (let i = 0; i < 12; i++) {
      const a = Math.random() * Math.PI * 2, r = rand(11, 30);
      const c = boulder(rand(0.4, 1.3), i * 7, 0xd9ecfa);
      c.position.set(Math.cos(a) * r, -0.35, Math.sin(a) * r);
      c.castShadow = false;
      group.add(c);
    }
    return {
      group, floe, water, waterY: -0.35, canFall: true, radius: 8,
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
    for (let i = 0; i < 44; i++) {
      const a = (i / 44) * Math.PI * 2;
      const s = new THREE.Mesh(new THREE.DodecahedronGeometry(rand(0.22, 0.34), 0), stoneMat);
      s.position.set(Math.cos(a) * 11.6, 0.08, Math.sin(a) * 11.6);
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
    torii.position.set(0, 0, 18);
    group.add(torii);
    // Taş fenerler
    for (const [x, z] of [[-6, 15], [6, 15], [-15, -4], [15, -4], [-9, -14], [9, -14]]) {
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
      group, radius: 11, floe: null, water: null, waterY: -Infinity, canFall: false,
      clouds: this.clouds(group, 5, 170, 50, 90),
      sky: [0xf4cfa8, 0xf39a66, 0xc98a5a], fog: [40, 170],
      hemi: [0xffe0c0, 0x9a6a40, 1.0], sun: [0xffc08a, 2.4, -0.2, 0.55, 0.8],
    };
  }
}
