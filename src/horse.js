import * as THREE from 'three';
import { clamp, lerp, approach, angApproach } from './util.js';

// Binilebilir at: kontrolcü + prosedürel dörtnala animasyon. Yönetimi yayadaki gibi:
// az itince durup döner, çok itince dörtnala koşar; hızlıyken yana tutunma azalır ve
// sert dönüşte drift atar. Yerel eksenler karakterlerle aynı: +z ileri, +y yukarı.

export const HORSE_MAX_SPEED = 13;
const GRIP_SLOW = 28, GRIP_FAST = 7.5, BRAKE_FAST = 7, ACC = 14;
const HORSE_SCALE = 0.85;
const SADDLE_Y = 1.72 * HORSE_SCALE;

const sphere = new THREE.SphereGeometry(1, 14, 10);
const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25 });
const pupilMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.3 });

function mesh(geo, mat, sx, sy, sz) {
  const m = new THREE.Mesh(geo, mat);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  return m;
}

export class Horse {
  // o.color / o.mane: gövde ve yele rengi (takımlar farklı renk at biner).
  constructor(scene, x, z, yaw, o = {}) {
    this.x = x; this.z = z; this.yaw = yaw;
    this.speed = 0; this.vx = 0; this.vz = 0;
    this.phase = Math.random() * 6;
    this.bob = 0;
    this.slip = 0; this.slipDir = 1;
    this.rider = null;
    const body = new THREE.MeshPhysicalMaterial({ color: o.color ?? 0x9a5a33, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.12 });
    const dark = new THREE.MeshPhysicalMaterial({ color: o.mane ?? 0x3a2214, roughness: 0.45, clearcoat: 0.6 });
    this.mats = [body, dark];
    const g = new THREE.Group();
    const root = new THREE.Group(); // gövde sallanması için
    g.add(root);
    root.add(mesh(sphere, body, 0.42, 0.44, 0.98).translateY(1.3));
    root.add(mesh(sphere, body, 0.36, 0.4, 0.42).translateY(1.36).translateZ(0.62));  // göğüs
    root.add(mesh(sphere, body, 0.4, 0.42, 0.45).translateY(1.33).translateZ(-0.6)); // sağrı
    // Boyun ve baş
    const neck = new THREE.Group();
    neck.position.set(0, 1.55, 0.78);
    neck.rotation.x = 0.75;
    root.add(neck);
    neck.add(mesh(new THREE.CapsuleGeometry(0.2, 0.6, 5, 12), body, 1, 1, 1).translateY(0.35));
    neck.add(mesh(new THREE.CapsuleGeometry(0.07, 0.62, 4, 8), dark, 1, 1, 1.4).translateY(0.35).translateZ(-0.16)); // yele
    const head = new THREE.Group();
    head.position.set(0, 0.78, 0.02);
    head.rotation.x = 1.25;
    neck.add(head);
    head.add(mesh(sphere, body, 0.17, 0.36, 0.2).translateY(0.2));
    head.add(mesh(sphere, dark, 0.13, 0.12, 0.15).translateY(0.5).translateZ(0.01)); // burun
    for (const sx of [-1, 1]) {
      const ear = mesh(new THREE.ConeGeometry(0.05, 0.16, 8), body, 1, 1, 1);
      ear.position.set(sx * 0.08, 0.02, -0.15);
      ear.rotation.x = -0.9;
      head.add(ear);
      const eye = mesh(sphere, eyeMat, 0.07, 0.07, 0.07);
      eye.position.set(sx * 0.13, 0.12, -0.06);
      const pupil = mesh(sphere, pupilMat, 0.03, 0.03, 0.03);
      ear.castShadow = eye.castShadow = pupil.castShadow = false;
      pupil.position.set(sx * 0.19, 0.14, -0.05);
      head.add(eye, pupil);
    }
    this.head = head;
    // Kuyruk
    this.tail = new THREE.Group();
    this.tail.position.set(0, 1.45, -1.0);
    this.tail.add(mesh(new THREE.CapsuleGeometry(0.08, 0.6, 4, 8), dark, 1, 1, 1).translateY(-0.35));
    root.add(this.tail);
    // Bacaklar: kalça pivotu -> üst bacak -> diz pivotu -> alt bacak + toynak
    this.legs = [];
    const legGeoU = new THREE.CapsuleGeometry(0.1, 0.5, 4, 10);
    const legGeoL = new THREE.CapsuleGeometry(0.07, 0.5, 4, 10);
    const hoofGeo = new THREE.CylinderGeometry(0.085, 0.1, 0.1, 10);
    for (const [lx, lz, off] of [[-0.22, 0.62, 0], [0.22, 0.62, 0.35], [-0.22, -0.62, Math.PI], [0.22, -0.62, Math.PI + 0.35]]) {
      const hip = new THREE.Group();
      hip.position.set(lx, 1.12, lz);
      const upper = mesh(legGeoU, body, 1, 1, 1);
      upper.position.y = -0.3;
      const knee = new THREE.Group();
      knee.position.y = -0.58;
      const lower = mesh(legGeoL, body, 1, 1, 1);
      lower.position.y = -0.28;
      const hoof = mesh(hoofGeo, dark, 1, 1, 1);
      hoof.position.y = -0.55;
      knee.add(lower, hoof);
      hip.add(upper, knee);
      root.add(hip);
      this.legs.push({ hip, knee, off, front: lz > 0 });
    }
    this.root = root;
    g.scale.setScalar(HORSE_SCALE);
    this.group = g;
    scene.add(g);
  }

  // stick: dünya yönü (x, z) ve itme miktarı mag (null = binicisi yok, yavaşlayıp durur).
  update(dt, stick, env) {
    let wx = 0, wz = 0;
    const mag = stick ? stick.mag : 0;
    if (mag > 0.18) {
      // Gövde çubuğun yönüne hızla döner (yayadaki gibi); hız vektörü ise geride kalabilir.
      const sp0 = Math.hypot(this.vx, this.vz);
      this.yaw = angApproach(this.yaw, Math.atan2(stick.x, stick.z), lerp(6, 4, clamp(sp0 / HORSE_MAX_SPEED, 0, 1)) * dt);
      const run = clamp((mag - 0.4) / 0.45, 0, 1) * HORSE_MAX_SPEED;
      wx = stick.x * run; wz = stick.z * run;
    }
    this.drive(wx, wz, dt);
    let nx = this.x + this.vx * dt, nz = this.z + this.vz * dt;
    if (!env.inside(nx, nz, 1.3)) {
      // Sınırda sekip içeri dön.
      nx = this.x; nz = this.z;
      this.vx *= -0.3; this.vz *= -0.3;
      this.yaw = angApproach(this.yaw, Math.atan2(-this.x, -this.z), 3 * dt);
    }
    this.x = nx; this.z = nz;
    this.speed = Math.hypot(this.vx, this.vz);
    // Kayma: atın baktığı yöne göre yan hız (drift görüntüsü ve toz için).
    const sn = Math.sin(this.yaw), cs = Math.cos(this.yaw);
    const vR = -this.vx * cs + this.vz * sn;
    this.slip += (clamp((Math.abs(vR) - 1.2) / 4, 0, 1) - this.slip) * Math.min(1, dt * 10);
    if (Math.abs(vR) > 0.5) this.slipDir = Math.sign(vR);
    const gait = this.speed > 0.3 ? 1.3 + this.speed * 0.17 : 0;
    this.phase += dt * Math.PI * 2 * gait;
    this.bob = this.speed > 0.3 ? -Math.abs(Math.sin(this.phase)) * 0.09 * clamp(this.speed / 6, 0, 1) : 0;
  }

  // Yayadakiyle aynı drift sürüşü, at sabitleriyle: düz koşu düz, hızlıyken dönüş savurur.
  drive(wx, wz, dt) {
    const sp = Math.hypot(this.vx, this.vz);
    if (sp < 0.3) {
      const a = GRIP_SLOW * dt, ddx = wx - this.vx, ddz = wz - this.vz, dl = Math.hypot(ddx, ddz);
      if (dl > a) { this.vx += ddx / dl * a; this.vz += ddz / dl * a; } else { this.vx = wx; this.vz = wz; }
      return;
    }
    const top = HORSE_MAX_SPEED;
    const k = Math.sqrt(clamp((sp - 0.15 * top) / (0.55 * top), 0, 1));
    const grip = lerp(GRIP_SLOW, GRIP_FAST, k), brake = lerp(GRIP_SLOW, BRAKE_FAST, k);
    const fx = this.vx / sp, fz = this.vz / sp;
    const wl = wx * fx + wz * fz, wlat = -wx * fz + wz * fx;
    const dl = clamp(wl - sp, -brake * dt, ACC * dt);
    const dlat = clamp(wlat, -grip * dt, grip * dt);
    this.vx += fx * dl - fz * dlat;
    this.vz += fz * dl + fx * dlat;
  }

  saddle(out) {
    out.x = this.x - Math.sin(this.yaw) * 0.05;
    out.y = SADDLE_Y + this.bob;
    out.z = this.z - Math.cos(this.yaw) * 0.05;
    return out;
  }

  render() {
    const g = this.group;
    g.position.set(this.x, 0, this.z);
    g.rotation.y = this.yaw;
    const k = clamp(this.speed / 6, 0, 1), ph = this.phase;
    this.root.position.y = this.bob;
    this.root.rotation.x = Math.sin(ph) * 0.06 * k;
    // Drift: gövde dönüşün içine, kayılan yöne ters yatar.
    this.root.rotation.z = -this.slip * this.slipDir * 0.22;
    for (const l of this.legs) {
      const p = ph + l.off;
      // Pozitif x dönüşü ayağı geri götürür.
      l.hip.rotation.x = -Math.sin(p) * 0.6 * k;
      const bend = (0.15 + 0.9 * Math.max(0, Math.sin(p + 1.2))) * k;
      l.knee.rotation.x = l.front ? bend : -bend * 0.8;
    }
    this.tail.rotation.x = 0.4 + Math.sin(ph * 0.5) * 0.15 + k * 0.5;
    this.head.rotation.x = 1.25 + Math.sin(ph) * 0.08 * k;
  }

  dispose(scene) {
    scene.remove(this.group);
    for (const m of this.mats) m.dispose();
  }
}
