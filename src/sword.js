import * as THREE from 'three';
import { GRAVITY } from './util.js';

// Kılıç yerel eksenleri: y bıçak boyunca, x bıçağın genişliği, orijin kabzanın ortası.
export const BLADE_START = 0.135;

function bladeGeometry(L, w, th) {
  const y0 = BLADE_START, y1 = BLADE_START + L * 0.86, y2 = BLADE_START + L;
  // Elmas kesitli bıçak, uçta sivrilir.
  const ring0 = [[w / 2, y0, 0], [0, y0, th / 2], [-w / 2, y0, 0], [0, y0, -th / 2]];
  const ring1 = ring0.map(([x, , z]) => [x, y1, z]);
  const tip = [0, y2, 0];
  const pos = [];
  const tri = (a, b, c) => pos.push(...a, ...b, ...c);
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4;
    tri(ring0[i], ring1[i], ring1[j]);
    tri(ring0[i], ring1[j], ring0[j]);
    tri(ring1[i], tip, ring1[j]);
  }
  tri(ring0[0], ring0[2], ring0[1]);
  tri(ring0[0], ring0[3], ring0[2]);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

const sharedMats = {};
function mats() {
  if (!sharedMats.guard) {
    sharedMats.guard = new THREE.MeshStandardMaterial({ color: 0x4a4f57, metalness: 0.85, roughness: 0.35 });
    sharedMats.grip = new THREE.MeshStandardMaterial({ color: 0x2a211d, roughness: 0.85 });
  }
  return sharedMats;
}

// Ölçeksiz kurulur; iri karakterler için mesh.scale ayarlanır.
export function createSwordMesh(L) {
  const S = 1;
  const m = mats();
  const g = new THREE.Group();
  const bladeMat = new THREE.MeshStandardMaterial({ color: 0xe3e8ee, metalness: 0.95, roughness: 0.2 });
  const blade = new THREE.Mesh(bladeGeometry(L, 0.07 * S, 0.018 * S), bladeMat);
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.24 * S, 0.035 * S, 0.05 * S), m.guard);
  guard.position.y = 0.12 * S;
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.019 * S, 0.022 * S, 0.22 * S, 10), m.grip);
  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.032 * S, 12, 8), m.guard);
  pommel.position.y = -0.125 * S;
  for (const o of [blade, guard, grip, pommel]) { o.castShadow = true; g.add(o); }
  g.userData.bladeMat = bladeMat;
  return g;
}

export function disposeSwordMesh(g) {
  g.traverse((o) => {
    if (!o.isMesh) return;
    o.geometry.dispose();
    if (o.material !== sharedMats.guard && o.material !== sharedMats.grip) o.material.dispose();
  });
}

const _m = new THREE.Matrix4();
const _x = new THREE.Vector3(), _y = new THREE.Vector3(), _z = new THREE.Vector3();

// Kılıç ağını kabza konumu (g), bıçak yönü (d) ve genişlik yönüne (w) göre yerleştirir.
export function placeSword(mesh, gx, gy, gz, dx, dy, dz, wx, wy, wz) {
  _y.set(dx, dy, dz).normalize();
  _x.set(wx, wy, wz);
  _x.addScaledVector(_y, -_x.dot(_y));
  if (_x.lengthSq() < 1e-8) _x.set(1, 0, 0).addScaledVector(_y, -_y.x);
  _x.normalize();
  _z.crossVectors(_x, _y);
  _m.makeBasis(_x, _y, _z);
  mesh.quaternion.setFromRotationMatrix(_m);
  mesh.position.set(gx, gy, gz);
}

// Elden düşen kılıç: iki noktalı (kabza, uç) Verlet çubuğu. Ucu hızla toprağa
// girerse saplanıp kalır.
export class LooseSword {
  // totalLen: kabza ortasından uca fiziksel uzunluk.
  constructor(mesh, g, d, w, vel, totalLen) {
    this.mesh = mesh;
    this.a = { x: g.x, y: g.y, z: g.z, px: g.x - vel.x / 60, py: g.y - vel.y / 60, pz: g.z - vel.z / 60 };
    const L = totalLen;
    this.b = { x: g.x + d.x * L, y: g.y + d.y * L, z: g.z + d.z * L };
    this.b.px = this.b.x - vel.x / 60 + (Math.random() - 0.5) * 0.05;
    this.b.py = this.b.y - vel.y / 60 - 0.03;
    this.b.pz = this.b.z - vel.z / 60 + (Math.random() - 0.5) * 0.05;
    this.w = { x: w.x, y: w.y, z: w.z };
    this.L = L;
    this.stuck = false;
  }

  step(dt, dtPrev, env) {
    if (this.stuck) return;
    const ratio = dtPrev > 0 ? dt / dtPrev : 1;
    for (const p of [this.a, this.b]) {
      let vx = (p.x - p.px) * ratio, vy = (p.y - p.py) * ratio, vz = (p.z - p.pz) * ratio;
      if (p.y < env.waterY) { vx *= 0.9; vy *= 0.9; vz *= 0.9; }
      p.px = p.x; p.py = p.y; p.pz = p.z;
      p.x += vx; p.y += vy - GRAVITY * dt * dt; p.z += vz;
    }
    const tip = this.b;
    const tipVy = (tip.y - tip.py) / dt;
    for (let it = 0; it < 3; it++) {
      const dx = this.b.x - this.a.x, dy = this.b.y - this.a.y, dz = this.b.z - this.a.z;
      const d = Math.hypot(dx, dy, dz) || 1, f = (d - this.L) / (2 * d);
      this.a.x += dx * f; this.a.y += dy * f; this.a.z += dz * f;
      this.b.x -= dx * f; this.b.y -= dy * f; this.b.z -= dz * f;
      for (const p of [this.a, this.b]) {
        const g = env.ground(p.x, p.z);
        if (p.y < g + 0.02 && p.py > g - 0.2) {
          if (p === tip && !env.noStick && tipVy < -4 && (this.b.y - this.a.y) / this.L < -0.55) {
            // Uç önce, dik ve hızlı: toprağa saplan.
            this.stuck = true;
            p.y = g - 0.12;
            return;
          }
          p.y = g + 0.02;
          p.px = p.x - (p.x - p.px) * 0.6;
          p.pz = p.z - (p.z - p.pz) * 0.6;
        }
      }
    }
  }

  render() {
    const a = this.a, b = this.b;
    placeSword(this.mesh, a.x, a.y, a.z, b.x - a.x, b.y - a.y, b.z - a.z, this.w.x, this.w.y, this.w.z);
  }
}
