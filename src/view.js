import * as THREE from 'three';
import { J, JOINTS } from './ragdoll.js';
import { clamp, rand } from './util.js';

// Ragdoll'un Three.js görünümü: her görünür kemik bir kapsül, kafa + oynak gözler,
// kesik uçlarında kırmızı kesit. Kesikten sonra kemik listesi değişince yeniden eşitlenir.

// Kemik kalınlık profilleri (S = 1 için metre). Gövde: s=0 kalça, s=1 boyun dibi.
// İnce, uzun "ucube" vücut: dar bel, biraz geniş göğüs, çubuk gibi kollar ve bacaklar.
const TORSO_KEYS = [[0, 0.1], [0.2, 0.094], [0.45, 0.078], [0.72, 0.106], [0.9, 0.1], [1, 0.064]];
function torsoR(s) {
  for (let i = 1; i < TORSO_KEYS.length; i++) {
    const [s1, r1] = TORSO_KEYS[i];
    if (s <= s1) {
      const [s0, r0] = TORSO_KEYS[i - 1];
      const t = (s - s0) / (s1 - s0);
      return r0 + (r1 - r0) * (0.5 - 0.5 * Math.cos(Math.PI * t));
    }
  }
  return TORSO_KEYS[TORSO_KEYS.length - 1][1];
}
const LIMB_R = {
  100: [0.04, 0.036], // boyun
  304: [0.04, 0.032], 607: [0.04, 0.032], // üst kollar
  405: [0.033, 0.027], 708: [0.033, 0.027], // ön kollar
  910: [0.06, 0.042], 1213: [0.06, 0.042], // uyluklar
  1011: [0.044, 0.03], 1314: [0.044, 0.03], // baldırlar
};
function profileR(b, s) {
  if (b.kind === 'torso') return torsoR(s);
  const r = LIMB_R[b.part] || [b.r, b.r];
  return r[0] + (r[1] - r[0]) * s;
}

// Torna geometrisi: y=0 a ucu, y=len b ucu. Kesik olmayan uçlar yuvarlak kapaklı,
// kesik uçlar düz (üstüne kırmızı kesit oturur).
const geoCache = new Map();
function boneGeo(b, S, capA, capB) {
  const key = `${b.part}|${b.sa.toFixed(3)}|${b.sb.toFixed(3)}|${S}|${capA ? 1 : 0}${capB ? 1 : 0}`;
  let g = geoCache.get(key);
  if (g) return g;
  const len = b.len;
  const pts = [];
  const rA = profileR(b, b.sa) * S, rB = profileR(b, b.sb) * S;
  if (capA) for (let k = 0; k < 5; k++) { const t = -Math.PI / 2 + (k / 5) * Math.PI / 2; pts.push(new THREE.Vector2(rA * Math.cos(t), rA * Math.sin(t))); }
  else pts.push(new THREE.Vector2(0.0001, 0));
  const N = b.kind === 'torso' ? 14 : 4;
  for (let i = 0; i <= N; i++) {
    const f = i / N;
    pts.push(new THREE.Vector2(profileR(b, b.sa + (b.sb - b.sa) * f) * S, f * len));
  }
  if (capB) for (let k = 1; k <= 5; k++) { const t = (k / 5) * Math.PI / 2; pts.push(new THREE.Vector2(Math.max(0.0001, rB * Math.cos(t)), len + rB * Math.sin(t))); }
  else pts.push(new THREE.Vector2(0.0001, len));
  g = new THREE.LatheGeometry(pts, 12);
  geoCache.set(key, g);
  return g;
}
const sphereGeo = new THREE.SphereGeometry(1, 18, 12);
const smallSphereGeo = new THREE.SphereGeometry(1, 10, 8);
const eyeGeo = new THREE.SphereGeometry(1, 14, 10);
const limbGeo = new THREE.SphereGeometry(1, 12, 8);
const stumpMat = new THREE.MeshStandardMaterial({ color: 0xe0001c, roughness: 0.45, emissive: 0x3a0005 });
const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25 });
const pupilMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.3 });

const Y = new THREE.Vector3(0, 1, 0);
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _d = new THREE.Vector3();
const _x = new THREE.Vector3(), _z = new THREE.Vector3(), _m = new THREE.Matrix4();

function basisFrom(up, lateral, outQuat) {
  _x.copy(lateral).addScaledVector(up, -lateral.dot(up));
  if (_x.lengthSq() < 1e-8) _x.set(1, 0, 0).addScaledVector(up, -up.x);
  _x.normalize();
  _z.crossVectors(_x, up);
  _m.makeBasis(_x, up, _z);
  outQuat.setFromRotationMatrix(_m);
}

export class CharacterView {
  constructor(ch, color) {
    this.ch = ch;
    this.rag = ch.rag;
    const S = ch.S;
    this.group = new THREE.Group();
    this.mat = new THREE.MeshPhysicalMaterial({
      color, roughness: 0.24, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.07, emissive: 0x000000,
    });
    this.boneMeshes = new Map();
    this.stumpMeshes = new Map();
    this.version = -1;

    this.headGroup = new THREE.Group();
    const head = new THREE.Mesh(sphereGeo, this.mat);
    // Kafa ince gövdeye göre küçük; gözler aynı boyda kalıp kafadan dışarı fırlar.
    const hr = this.rag.d.headR * 0.8;
    head.scale.set(hr * 0.95, hr * 1.12, hr * 1.08);
    head.castShadow = true;
    this.headGroup.add(head);
    this.pupils = [];
    for (const sx of [-1, 1]) {
      const eye = new THREE.Mesh(eyeGeo, eyeMat);
      eye.scale.setScalar(0.058 * S);
      eye.position.set(sx * 0.05 * S, 0.06 * S, 0.088 * S);
      const pupil = new THREE.Mesh(smallSphereGeo, pupilMat);
      pupil.scale.setScalar(0.025 * S);
      pupil.userData.base = new THREE.Vector3(sx * 0.05 * S, 0.06 * S, 0.088 * S + 0.047 * S);
      pupil.position.copy(pupil.userData.base);
      this.headGroup.add(eye, pupil);
      this.pupils.push(pupil);
    }
    this.group.add(this.headGroup);
    this.lateral = new THREE.Vector3(1, 0, 0);
    this.headLateral = new THREE.Vector3(1, 0, 0);
    this.pupilOff = new THREE.Vector2();
    this.pupilVel = new THREE.Vector2();
    this.prevHead = new THREE.Vector3();
    this.deadLook = [new THREE.Vector2(rand(-1, 1), rand(-1, 1)), new THREE.Vector2(rand(-1, 1), rand(-1, 1))];

    this.extremities = [];
    for (const [i, r, sy] of [[J.LHAND, 0.045, 1], [J.RHAND, 0.045, 1], [J.LFOOT, 0.058, 0.75], [J.RFOOT, 0.058, 0.75]]) {
      const m = new THREE.Mesh(limbGeo, this.mat);
      m.scale.set(r * S, r * S * sy, r * S * (sy < 1 ? 1.35 : 1));
      m.castShadow = true;
      m.userData.idx = i;
      this.extremities.push(m);
      this.group.add(m);
    }
    this.sync();
  }

  sync() {
    const rag = this.rag;
    if (this.version === rag.version) return;
    this.version = rag.version;
    const live = new Set();
    for (const b of rag.bones) {
      if (!b.vis) continue;
      live.add(b);
      if (this.boneMeshes.has(b)) continue;
      const m = new THREE.Mesh(boneGeo(b, this.ch.S, !rag.pts[b.a].stump, !rag.pts[b.b].stump), this.mat);
      m.castShadow = !this.shadowOff;
      if (b.kind === 'torso') m.scale.set(1.15, 1, 0.86);
      this.boneMeshes.set(b, m);
      this.group.add(m);
    }
    for (const [b, m] of this.boneMeshes) {
      if (live.has(b)) continue;
      this.group.remove(m);
      this.boneMeshes.delete(b);
    }
    rag.pts.forEach((p, i) => {
      if (!p.stump || this.stumpMeshes.has(i)) return;
      const m = new THREE.Mesh(limbGeo, stumpMat);
      m.userData.r = p.stumpR;
      this.stumpMeshes.set(i, m);
      this.group.add(m);
    });
  }

  update(dt) {
    this.sync();
    const rag = this.rag, P = rag.pts, ch = this.ch;
    const comp = rag.comp;
    // Omuz çizgisi (sol - sağ) gövde yönünü verir; kopan parçalar son yönü korur.
    _a.set(P[J.LSH].x - P[J.RSH].x, P[J.LSH].y - P[J.RSH].y, P[J.LSH].z - P[J.RSH].z);
    if (_a.lengthSq() > 1e-6) this.lateral.copy(_a).normalize();
    _b.set(P[J.LHIP].x - P[J.RHIP].x, P[J.LHIP].y - P[J.RHIP].y, P[J.LHIP].z - P[J.RHIP].z).normalize();
    for (const [b, m] of this.boneMeshes) {
      const A = P[b.a], B = P[b.b];
      _d.set(B.x - A.x, B.y - A.y, B.z - A.z);
      const len = _d.length();
      if (len < 1e-6) continue;
      _d.multiplyScalar(1 / len);
      m.position.set(A.x, A.y, A.z);
      if (b.kind === 'torso') {
        // Göğüs omuz çizgisine, karın kalça çizgisine göre döner (bel burulabilir).
        const belly = b.part === J.SPINE * 100 + J.PELVIS;
        const upper = !belly && (comp[b.a] === comp[J.NECK] || comp[b.b] === comp[J.NECK]);
        basisFrom(_d, upper ? this.lateral : _b, m.quaternion);
      } else m.quaternion.setFromUnitVectors(Y, _d);
    }

    // Kafa
    const H = P[J.HEAD];
    const nb = rag.neighborOf(J.HEAD);
    if (nb >= 0) _d.set(H.x - P[nb].x, H.y - P[nb].y, H.z - P[nb].z).normalize(); else _d.set(0, 1, 0);
    if (comp[J.HEAD] === comp[J.LSH]) this.headLateral.copy(this.lateral);
    basisFrom(_d, this.headLateral, this.headGroup.quaternion);
    this.headGroup.position.set(H.x, H.y, H.z);

    // Oynak göz bebekleri: kafanın hareketine ters yönde sallanır.
    if (dt > 0) {
      _a.set(H.x, H.y, H.z).sub(this.prevHead).multiplyScalar(1 / dt);
      this.prevHead.set(H.x, H.y, H.z);
      _x.set(1, 0, 0).applyQuaternion(this.headGroup.quaternion);
      _z.set(0, 1, 0).applyQuaternion(this.headGroup.quaternion);
      const ax = -_a.dot(_x) * 0.004, ay = -_a.dot(_z) * 0.004;
      const po = this.pupilOff, pv = this.pupilVel;
      pv.x += ((ax - po.x) * 260 - pv.x * 10) * dt;
      pv.y += ((ay - po.y) * 260 - pv.y * 10) * dt;
      po.x = clamp(po.x + pv.x * dt, -0.022, 0.022);
      po.y = clamp(po.y + pv.y * dt, -0.022, 0.022);
    }
    const S = ch.S;
    this.pupils.forEach((pu, k) => {
      const base = pu.userData.base;
      if (ch.alive) pu.position.set(base.x + this.pupilOff.x * S, base.y + this.pupilOff.y * S, base.z);
      else { const l = this.deadLook[k]; pu.position.set(base.x + l.x * 0.02 * S, base.y + l.y * 0.02 * S, base.z - 0.004 * S); }
    });

    for (const m of this.extremities) {
      const p = P[m.userData.idx];
      m.position.set(p.x, p.y, p.z);
      if (ch.alive) m.rotation.set(0, ch.yaw, 0);
    }

    for (const [i, m] of this.stumpMeshes) {
      const p = P[i];
      const n = rag.neighborOf(i);
      if (n < 0) { m.visible = false; continue; }
      _d.set(p.x - P[n].x, p.y - P[n].y, p.z - P[n].z).normalize();
      const r = m.userData.r;
      m.position.set(p.x + _d.x * r * 0.45, p.y + _d.y * r * 0.45, p.z + _d.z * r * 0.45);
      m.quaternion.setFromUnitVectors(Y, _d);
      m.scale.set(r * 1.06, r * 0.55, r * 1.06);
    }

    const f = ch.flash > 0 ? 0.55 : 0;
    this.mat.emissive.setScalar(f);
    // Cesetler 3 sn sonra gölge düşürmez: kalabalık muharebede çizim yükü yarıya iner.
    if (!ch.alive && !this.shadowOff && ch.game.time - ch.deathT > 3) {
      this.shadowOff = true;
      this.group.traverse((o) => { o.castShadow = false; });
    }
  }

  addTo(scene) { scene.add(this.group); }

  dispose(scene) {
    scene.remove(this.group);
    this.mat.dispose();
  }
}

export { JOINTS };
