import * as THREE from 'three';
import { GRAVITY, rand } from './util.js';

// Kan damlaları (Points), yerde kalan lekeler (InstancedMesh halkası), kıvılcımlar,
// su sıçraması ve güdüklerden fışkıran kan.

function dotTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  g.fillStyle = '#fff';
  g.beginPath(); g.arc(16, 16, 14, 0, Math.PI * 2); g.fill();
  const t = new THREE.CanvasTexture(c);
  return t;
}

// Çizgi film bulutu (buhar için): dolu gövde, yumuşak kenar, altı gri gölgeli. Açık gökte
// ve çimde de seçilsin diye yumuşak beyaz leke yerine hacimli görünür.
function puffTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const sh = g.createLinearGradient(0, 8, 0, 60);
  sh.addColorStop(0, '#ffffff');
  sh.addColorStop(0.5, '#f1efec');
  sh.addColorStop(1, '#a9a4a0');
  g.fillStyle = sh;
  g.fillRect(0, 0, 64, 64);
  const m = g.createRadialGradient(32, 32, 0, 32, 32, 31);
  m.addColorStop(0, 'rgba(0,0,0,1)');
  m.addColorStop(0.6, 'rgba(0,0,0,1)');
  m.addColorStop(0.85, 'rgba(0,0,0,0.55)');
  m.addColorStop(1, 'rgba(0,0,0,0)');
  g.globalCompositeOperation = 'destination-in';
  g.fillStyle = m;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

// Titan buharı: metrelerce büyüyüp yükselen, sönen bulutlar (küçük noktalar uzaktan görünmüyor).
class SteamPool {
  constructor(scene, max) {
    const tex = puffTexture();
    this.free = [];
    this.live = [];
    for (let i = 0; i < max; i++) {
      const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0 }));
      m.visible = false;
      m.renderOrder = 2;
      scene.add(m);
      this.free.push({ m, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, s: 1, a: 1, age: 0, life: 1 });
    }
  }

  add(x, y, z, vx, vy, vz, s, life, a) {
    const p = this.free.pop() || this.live.shift();
    if (!p) return;
    Object.assign(p, { x, y, z, vx, vy, vz, s, life, a, age: 0 });
    p.m.visible = true;
    this.live.push(p);
  }

  update(dt) {
    const L = this.live, f = Math.exp(-2.4 * dt);
    let k = 0;
    for (let i = 0; i < L.length; i++) {
      const p = L[i];
      p.age += dt;
      if (p.age >= p.life) { p.m.visible = false; this.free.push(p); continue; }
      p.vx *= f; p.vz *= f; p.vy = p.vy * f + 2.2 * dt; // sıcak: yavaşlar ve yükselir
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      L[k++] = p;
    }
    L.length = k;
  }

  flush() {
    for (const p of this.live) {
      const u = p.age / p.life;
      p.m.position.set(p.x, p.y, p.z);
      p.m.scale.setScalar(p.s * (1 + 1.5 * Math.sqrt(u)));
      p.m.material.opacity = p.a * Math.min(1, p.age / 0.08) * (1 - u * u);
    }
  }

  clear() {
    for (const p of this.live) { p.m.visible = false; this.free.push(p); }
    this.live.length = 0;
  }
}

class PointPool {
  constructor(scene, max, mat) {
    this.max = max;
    this.list = [];
    this.pos = new Float32Array(max * 3);
    this.geo = new THREE.BufferGeometry();
    this.attr = new THREE.BufferAttribute(this.pos, 3);
    this.attr.setUsage(THREE.DynamicDrawUsage);
    this.geo.setAttribute('position', this.attr);
    this.geo.setDrawRange(0, 0);
    this.points = new THREE.Points(this.geo, mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  // Havuz doluysa rastgele eski bir damlanın yerine yazar (baştan kaydırmak yoğun kanamada pahalı).
  add(p) {
    if (this.list.length >= this.max) this.list[(Math.random() * this.max) | 0] = p;
    else this.list.push(p);
  }

  flush() {
    const n = this.list.length;
    for (let i = 0; i < n; i++) {
      const p = this.list[i];
      this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
    }
    this.geo.setDrawRange(0, n);
    this.attr.needsUpdate = true;
  }
}

export class Effects {
  constructor(scene) {
    const tex = dotTexture();
    this.blood = new PointPool(scene, 2600, new THREE.PointsMaterial({ color: 0xc4001a, size: 0.05, map: tex, alphaTest: 0.5, sizeAttenuation: true }));
    // Titan kanı: dev gövdeye göre iri damlalar (aynı boyutta damla titanda görünmüyordu).
    this.bigBlood = new PointPool(scene, 1800, new THREE.PointsMaterial({ color: 0xb3001a, size: 0.24, map: tex, alphaTest: 0.5, sizeAttenuation: true }));
    this.quiet = false; // titanlarla savaşta vuruş yazıları çıkmaz
    this.spark = new PointPool(scene, 400, new THREE.PointsMaterial({ color: 0xfff1a8, size: 0.06, map: tex, alphaTest: 0.5, sizeAttenuation: true }));
    this.water = new PointPool(scene, 600, new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, map: tex, alphaTest: 0.5, sizeAttenuation: true }));
    this.steamPool = new SteamPool(scene, 56);
    this.dustPool = new PointPool(scene, 500, new THREE.PointsMaterial({ color: 0xe9e2d4, size: 0.11, map: tex, alphaTest: 0.5, sizeAttenuation: true, transparent: true, opacity: 0.75 }));

    this.maxDecals = 1100;
    const dg = new THREE.CircleGeometry(1, 12).rotateX(-Math.PI / 2);
    const dm = new THREE.MeshBasicMaterial({ color: 0xa50016, transparent: true, opacity: 0.92, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    this.decals = new THREE.InstancedMesh(dg, dm, this.maxDecals);
    this.decals.count = 0;
    this.decals.frustumCulled = false;
    this.decals.renderOrder = 1;
    scene.add(this.decals);
    this.decalNext = 0;
    this.decalTotal = 0;
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._s = new THREE.Vector3();
    this._p = new THREE.Vector3();
    this.bleeders = [];
    this.popups = [];
  }

  clear() {
    this.blood.list.length = 0;
    this.bigBlood.list.length = 0;
    this.spark.list.length = 0;
    this.water.list.length = 0;
    this.dustPool.list.length = 0;
    this.steamPool.clear();
    this.bleeders.length = 0;
    this.popups.length = 0;
    this.decals.count = 0;
    this.decalNext = 0;
    this.decalTotal = 0;
  }

  spray(x, y, z, vx, vy, vz, n, spread, spd, big = false) {
    const l = Math.hypot(vx, vy, vz) || 1;
    const ux = vx / l, uy = vy / l, uz = vz / l;
    const pool = big ? this.bigBlood : this.blood;
    for (let i = 0; i < n; i++) {
      const s = spd * rand(0.25, 1.15);
      pool.add({
        x, y, z,
        vx: (ux + rand(-spread, spread)) * s, vy: (uy + rand(-spread, spread)) * s + rand(0, 1), vz: (uz + rand(-spread, spread)) * s,
        life: rand(1, 2),
      });
    }
  }

  sparks(x, y, z, n) {
    for (let i = 0; i < n; i++) {
      this.spark.add({ x, y, z, vx: rand(-5, 5), vy: rand(-2, 5), vz: rand(-5, 5), life: rand(0.15, 0.35) });
    }
  }

  // Drift tozu: ayağın altından geriye savrulan küçük bulut.
  dust(x, y, z, vx, vz) {
    for (let i = 0; i < 2; i++) {
      this.dustPool.add({ x: x + rand(-0.08, 0.08), y: y + 0.03, z: z + rand(-0.08, 0.08), vx: vx + rand(-0.5, 0.5), vy: rand(0.3, 1.1), vz: vz + rand(-0.5, 0.5), life: rand(0.3, 0.6) });
    }
  }

  // Buhar bulutu: s başlangıç çapı (m), ömrünce 2.5 katına büyür.
  steam(x, y, z, vx, vy, vz, s, life, a = 0.85) {
    this.steamPool.add(x, y, z, vx, vy, vz, s, life, a);
  }

  // Lekeler yan yatabilen zemine (platform) yapışsın diye onun altına taşınabilir.
  setDecalParent(obj) {
    if (this.decals.parent !== obj) obj.add(this.decals);
  }

  splash(x, y, z) {
    for (let i = 0; i < 40; i++) {
      this.water.add({ x: x + rand(-0.3, 0.3), y, z: z + rand(-0.3, 0.3), vx: rand(-1.5, 1.5), vy: rand(2, 6), vz: rand(-1.5, 1.5), life: rand(0.5, 1) });
    }
  }

  // Güdükten fışkıran kan. o.big: titan (iri damla, güçlü fışkırma), o.rate: saniyede damla.
  bleed(rag, idx, dur, o = {}) {
    this.bleeders.push({ rag, idx, t: 0, dur, acc: 0, big: !!o.big, rate: o.rate || 120, spd: o.spd || 1 });
  }

  // Kemiğin üstünde açılan yara (kopmadan): kemik boyunca u noktasından, kemiğe dik ve
  // sabit bir yöne doğru akar. Titanın sıyrıkları ve boyun yaraları.
  wound(rag, bone, u, dur, o = {}) {
    let n = 0;
    for (const b of this.bleeders) if (b.rag === rag && b.bone !== undefined) n++;
    if (n >= (o.max || 10)) return; // aynı gövdede çok yara: en eskisi kurusun diye yenisi açılmaz
    const d = [rand(-1, 1), rand(-0.2, 1), rand(-1, 1)];
    this.bleeders.push({ rag, bone, u, d, t: 0, dur, acc: 0, big: o.big !== false, rate: o.rate || 50, spd: o.spd || 1 });
  }

  // force: titan savaşında da gösterilecek yazı (dost geldi, sistem notu).
  popup(x, y, z, text, col, size, life, force = false) {
    if (this.quiet && !force) return;
    let n = 0;
    for (const p of this.popups) if (p.age < 0.4 && Math.hypot(p.x - x, p.z - z) < 1.2) n++;
    this.popups.push({ x, y: y + n * 0.42, z, text, col: col || '#fff', size: size || 22, age: 0, life: life || 1 });
  }

  addDecal(x, y, z, r) {
    const m = this._m;
    this._p.set(x, y + 0.004 + (this.decalTotal % 50) * 0.00005, z);
    this._q.setFromAxisAngle(this._s.set(0, 1, 0), rand(0, Math.PI));
    const sx = r * rand(0.8, 1.4);
    m.compose(this._p, this._q, new THREE.Vector3(sx, 1, r));
    this.decals.setMatrixAt(this.decalNext, m);
    this.decalNext = (this.decalNext + 1) % this.maxDecals;
    this.decalTotal++;
    this.decals.count = Math.min(this.decalTotal, this.maxDecals);
    this.decals.instanceMatrix.needsUpdate = true;
  }

  update(dt, env) {
    for (const b of this.bleeders) {
      b.t += dt;
      const rag = b.rag;
      if (rag.removed) { b.t = b.dur; continue; }
      let px, py, pz, ux, uy, uz, pvx, pvy, pvz;
      if (b.bone !== undefined) {
        const bn = rag.bones[b.bone];
        if (!bn) { b.t = b.dur; continue; }
        const A = rag.pts[bn.a], B = rag.pts[bn.b];
        px = A.x + (B.x - A.x) * b.u; py = A.y + (B.y - A.y) * b.u; pz = A.z + (B.z - A.z) * b.u;
        // Kemik eksenine dik yön: yara hep aynı yana doğru akar.
        let ax = B.x - A.x, ay = B.y - A.y, az = B.z - A.z;
        const al = Math.hypot(ax, ay, az) || 1;
        ax /= al; ay /= al; az /= al;
        const dd = b.d[0] * ax + b.d[1] * ay + b.d[2] * az;
        ux = b.d[0] - ax * dd; uy = b.d[1] - ay * dd; uz = b.d[2] - az * dd;
        const r = bn.r * 0.9;
        const ul = Math.hypot(ux, uy, uz) || 1;
        ux /= ul; uy /= ul; uz /= ul;
        px += ux * r; py += uy * r; pz += uz * r;
        pvx = ((A.x - A.px) + (B.x - B.px)) * 0.5 / dt; pvy = ((A.y - A.py) + (B.y - B.py)) * 0.5 / dt; pvz = ((A.z - A.pz) + (B.z - B.pz)) * 0.5 / dt;
      } else {
        const p = rag.pts[b.idx], nb = rag.neighborOf(b.idx);
        if (nb < 0) continue;
        const q = rag.pts[nb];
        ux = p.x - q.x; uy = p.y - q.y; uz = p.z - q.z;
        const l = Math.hypot(ux, uy, uz) || 1;
        ux /= l; uy /= l; uz /= l;
        px = p.x; py = p.y; pz = p.z;
        pvx = (p.x - p.px) / dt; pvy = (p.y - p.py) / dt; pvz = (p.z - p.pz) / dt;
      }
      // Titanın yarası süresinin sonuna kadar güçlü akar, en sonda kurur; kalbi yavaş atar.
      const f = b.t / b.dur, k = b.big ? 1 - f * f * f : 1 - f;
      const pulse = b.big ? 0.72 + 0.28 * Math.sin(b.t * 9) : 0.55 + 0.45 * Math.sin(b.t * 16);
      b.acc += dt * b.rate * k * pulse;
      const pool = b.big ? this.bigBlood : this.blood;
      while (b.acc >= 1) {
        b.acc -= 1;
        const sp = rand(1.5, 3.8) * (0.4 + k) * b.spd, j = b.big ? 1.5 : 0.6;
        pool.add({
          x: px, y: py, z: pz,
          vx: ux * sp + rand(-j, j) + pvx * 0.5, vy: uy * sp + rand(-j, j) + pvy * 0.5, vz: uz * sp + rand(-j, j) + pvz * 0.5,
          life: rand(0.8, 1.5) * (b.big ? 1.8 : 1),
        });
      }
    }
    this.bleeders = this.bleeders.filter((b) => b.t < b.dur);

    for (const pool of [this.blood, this.bigBlood]) {
      const bl = pool.list, big = pool === this.bigBlood;
      let w = 0;
      for (let i = 0; i < bl.length; i++) {
        const p = bl[i];
        p.life -= dt;
        p.vy -= GRAVITY * 0.8 * dt;
        p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
        const g = env.ground(p.x, p.z);
        if (p.y <= g + 0.01) {
          if (Math.random() < (big ? 0.35 : 0.55)) this.addDecal(p.x, env.decalLocal ? 0 : g, p.z, big ? rand(0.12, 0.34) : rand(0.025, 0.07));
          continue;
        }
        if (p.y < env.waterY) continue;
        if (p.life > 0) bl[w++] = p;
      }
      bl.length = w;
    }

    for (const pool of [this.spark, this.water, this.dustPool]) {
      const L = pool.list;
      let k = 0;
      for (let i = 0; i < L.length; i++) {
        const p = L[i];
        p.life -= dt;
        if (pool === this.spark) { p.vx *= 0.92; p.vz *= 0.92; p.vy -= 6 * dt; }
        else if (pool === this.dustPool) { const f = Math.exp(-3 * dt); p.vx *= f; p.vz *= f; p.vy *= f; }
        else p.vy -= GRAVITY * 0.6 * dt;
        p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
        if (p.life > 0) L[k++] = p;
      }
      L.length = k;
    }

    this.steamPool.update(dt);
    for (const p of this.popups) { p.age += dt; p.y += 0.5 * dt; }
    this.popups = this.popups.filter((p) => p.age < p.life);
  }

  flush() {
    this.blood.flush();
    this.bigBlood.flush();
    this.spark.flush();
    this.water.flush();
    this.dustPool.flush();
    this.steamPool.flush();
  }
}
