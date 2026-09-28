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

  add(p) {
    if (this.list.length >= this.max) this.list.shift();
    this.list.push(p);
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
    this.spark = new PointPool(scene, 400, new THREE.PointsMaterial({ color: 0xfff1a8, size: 0.06, map: tex, alphaTest: 0.5, sizeAttenuation: true }));
    this.water = new PointPool(scene, 600, new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, map: tex, alphaTest: 0.5, sizeAttenuation: true }));
    this.dustPool = new PointPool(scene, 500, new THREE.PointsMaterial({ color: 0xe9e2d4, size: 0.11, map: tex, alphaTest: 0.5, sizeAttenuation: true, transparent: true, opacity: 0.75 }));

    this.maxDecals = 700;
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
    this.spark.list.length = 0;
    this.water.list.length = 0;
    this.dustPool.list.length = 0;
    this.bleeders.length = 0;
    this.popups.length = 0;
    this.decals.count = 0;
    this.decalNext = 0;
    this.decalTotal = 0;
  }

  spray(x, y, z, vx, vy, vz, n, spread, spd) {
    const l = Math.hypot(vx, vy, vz) || 1;
    const ux = vx / l, uy = vy / l, uz = vz / l;
    for (let i = 0; i < n; i++) {
      const s = spd * rand(0.25, 1.15);
      this.blood.add({
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

  // Lekeler yan yatabilen zemine (platform) yapışsın diye onun altına taşınabilir.
  setDecalParent(obj) {
    if (this.decals.parent !== obj) obj.add(this.decals);
  }

  splash(x, y, z) {
    for (let i = 0; i < 40; i++) {
      this.water.add({ x: x + rand(-0.3, 0.3), y, z: z + rand(-0.3, 0.3), vx: rand(-1.5, 1.5), vy: rand(2, 6), vz: rand(-1.5, 1.5), life: rand(0.5, 1) });
    }
  }

  bleed(rag, idx, dur) {
    this.bleeders.push({ rag, idx, t: 0, dur, acc: 0 });
  }

  popup(x, y, z, text, col, size, life) {
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
      const p = rag.pts[b.idx], nb = rag.neighborOf(b.idx);
      if (nb < 0) continue;
      const q = rag.pts[nb];
      let ux = p.x - q.x, uy = p.y - q.y, uz = p.z - q.z;
      const l = Math.hypot(ux, uy, uz) || 1;
      ux /= l; uy /= l; uz /= l;
      const k = 1 - b.t / b.dur;
      const pulse = 0.55 + 0.45 * Math.sin(b.t * 16);
      b.acc += dt * 120 * k * pulse;
      const pvx = (p.x - p.px) / dt, pvy = (p.y - p.py) / dt, pvz = (p.z - p.pz) / dt;
      while (b.acc >= 1) {
        b.acc -= 1;
        const s = rand(1.5, 3.8) * (0.4 + k);
        this.blood.add({
          x: p.x, y: p.y, z: p.z,
          vx: ux * s + rand(-0.6, 0.6) + pvx * 0.5, vy: uy * s + rand(-0.6, 0.6) + pvy * 0.5, vz: uz * s + rand(-0.6, 0.6) + pvz * 0.5,
          life: rand(0.8, 1.5),
        });
      }
    }
    this.bleeders = this.bleeders.filter((b) => b.t < b.dur);

    const bl = this.blood.list;
    let w = 0;
    for (let i = 0; i < bl.length; i++) {
      const p = bl[i];
      p.life -= dt;
      p.vy -= GRAVITY * 0.8 * dt;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      const g = env.ground(p.x, p.z);
      if (p.y <= g + 0.01) {
        if (Math.random() < 0.55) this.addDecal(p.x, env.decalLocal ? 0 : g, p.z, rand(0.025, 0.07));
        continue;
      }
      if (p.y < env.waterY) continue;
      if (p.life > 0) bl[w++] = p;
    }
    bl.length = w;

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

    for (const p of this.popups) { p.age += dt; p.y += 0.5 * dt; }
    this.popups = this.popups.filter((p) => p.age < p.life);
  }

  flush() {
    this.blood.flush();
    this.spark.flush();
    this.water.flush();
    this.dustPool.flush();
  }
}
