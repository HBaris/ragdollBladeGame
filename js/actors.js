'use strict';

const RUN_SPEED = 270;
const JUMP_V = 560;
const STRIDE = 78;
const BLADE_LEN = 46;
const REACH = 20;        // omuzdan kılıç kabzasına mesafe (kesme sırasında)
const FLIP_TIME = 0.42;

// Poz üreticileri: out nesnesine yazar (her karede yeni nesne üretmemek için).
const POSES = {
  idle(o, t) {
    o.lean = 0.08; o.head = -0.05;
    o.bUA = -0.3; o.bFA = 0.6; o.fUA = 0.45; o.fFA = 1.0;
    o.bTh = -0.2; o.bSh = 0.15; o.fTh = 0.3; o.fSh = 0.35;
    o.py = Math.sin(t * 2.6) * 0.8;
    return o;
  },
  run(o, ph) {
    const s = Math.sin(ph);
    o.lean = 0.36; o.head = -0.28;
    o.fTh = 0.2 + 0.75 * s;
    o.fSh = 0.3 + 1.4 * Math.max(0, Math.cos(ph + 0.5));
    o.bTh = 0.2 - 0.75 * s;
    o.bSh = 0.3 + 1.4 * Math.max(0, Math.cos(ph + Math.PI + 0.5));
    o.bUA = 0.2 + 0.9 * s; o.bFA = 1.5;
    o.fUA = -0.6 + 0.15 * s; o.fFA = 0.5;
    o.py = 1 - Math.abs(Math.cos(ph)) * 3;
    return o;
  },
  jump(o) {
    o.lean = 0.15; o.head = -0.1;
    o.bUA = 2.5; o.bFA = 0.4; o.fUA = -0.4; o.fFA = 0.6;
    o.bTh = 0.3; o.bSh = 1.3; o.fTh = 1.2; o.fSh = 1.7;
    o.py = -4;
    return o;
  },
  fall(o, t) {
    o.lean = 0.05; o.head = 0;
    o.bUA = 2.2 + Math.sin(t * 18) * 0.5; o.bFA = 0.3;
    o.fUA = -0.2 + Math.sin(t * 16 + 1) * 0.4; o.fFA = 0.5;
    o.bTh = -0.15; o.bSh = 0.5; o.fTh = 0.55; o.fSh = 0.3;
    o.py = 0;
    return o;
  },
  tuck(o) {
    o.lean = 0.5; o.head = 0.3;
    o.bUA = 1.2; o.bFA = 1.8; o.fUA = 0.9; o.fFA = 1.6;
    o.bTh = 1.9; o.bSh = 2.3; o.fTh = 2.0; o.fSh = 2.3;
    o.py = -6;
    return o;
  },
};

const _poseA = makePose();
const _poseB = makePose();

function drawSword(ctx, H, T, S, blood) {
  const dx = T.x - H.x, dy = T.y - H.y, L = Math.hypot(dx, dy) || 1;
  const ux = dx / L, uy = dy / L;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#2b1b17';
  ctx.lineWidth = 3.2 * S;
  ctx.beginPath(); ctx.moveTo(H.x - ux * 7 * S, H.y - uy * 7 * S); ctx.lineTo(H.x, H.y); ctx.stroke();
  ctx.strokeStyle = '#1d1d22';
  ctx.lineWidth = 4.2 * S;
  ctx.beginPath(); ctx.moveTo(H.x, H.y); ctx.lineTo(T.x, T.y); ctx.stroke();
  const b = clamp(blood, 0, 1);
  ctx.strokeStyle = `rgb(${Math.round(lerp(238, 190, b))},${Math.round(lerp(240, 40, b))},${Math.round(lerp(248, 50, b))})`;
  ctx.lineWidth = 2 * S;
  ctx.beginPath(); ctx.moveTo(H.x + ux * 2 * S, H.y + uy * 2 * S); ctx.lineTo(T.x - ux * S, T.y - uy * S); ctx.stroke();
  ctx.strokeStyle = '#c9a227';
  ctx.lineWidth = 2.6 * S;
  ctx.beginPath(); ctx.moveTo(H.x - uy * 4.5 * S, H.y + ux * 4.5 * S); ctx.lineTo(H.x + uy * 4.5 * S, H.y - ux * 4.5 * S); ctx.stroke();
}

class Player {
  constructor(x) {
    this.x = x; this.y = 0; this.vx = 0; this.vy = 0;
    this.grounded = true;
    this.facing = 1;
    this.rag = new Ragdoll(x, -33, 1, { col: '#15151a', colBack: '#474753', k: 1150, c: 28 });
    this.rag.addTip(BLADE_LEN);
    this.local = new Float32Array(JOINTS * 2);
    this.pose = POSES.idle(makePose(), 0);
    this.tpose = makePose();
    this.hp = 3; this.maxHp = 3;
    this.dead = false;
    this.invuln = 0; this.hurtT = 0;
    this.t = 0; this.phase = 0;
    this.jumps = 0; this.flipT = 0; this.landDip = 0;
    this.slash = null; this.comboStage = -1; this.comboWindow = 0; this.airSlashes = 0;
    this.swordAng = -0.9;
    this.trail = [];
    this.blood = 0;
    this.prevB = { hx: 0, hy: 0, tx: 0, ty: 0 };
    this.scarf = new Ribbon(10, 5.5, '#d7263d', 3.4);
  }

  update(dt, input, game) {
    this.t += dt;
    if (this.dead) return;
    const mx = input.moveX();
    const sl = this.slash;
    const slashing = sl && sl.t < sl.dur;

    let target = mx * RUN_SPEED;
    if (slashing && this.grounded) target *= 0.35;
    this.vx = approach(this.vx, target, (this.grounded ? 2600 : 1500) * dt);

    if (input.jumpBuf > 0) {
      if (this.grounded) {
        this.vy = -JUMP_V; this.grounded = false; this.jumps = 1; input.jumpBuf = 0;
        game.fx.dust(this.x, 6);
        Sfx.jump(1);
      } else if (this.jumps < 2) {
        this.vy = -JUMP_V * 0.92; this.jumps = 2; this.flipT = FLIP_TIME; input.jumpBuf = 0;
        Sfx.jump(1.35);
      }
    }

    // Havada kesmek kısa süre süzülmeyi sağlar: hava kombosu.
    const hover = slashing && !this.grounded && this.airSlashes <= 3;
    this.vy += GRAVITY * (hover ? 0.25 : 1) * dt;
    if (this.vy > 1100) this.vy = 1100;
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    if (this.y >= 0) {
      if (!this.grounded) {
        this.landDip = clamp(this.vy / 900, 0.15, 1);
        if (this.vy > 450) { game.shake(3); game.fx.dust(this.x, 8); }
      }
      this.y = 0; this.vy = 0;
      this.grounded = true; this.jumps = 0; this.airSlashes = 0; this.flipT = 0;
    }

    if (slashing) this.facing = sl.facing;
    else if (Math.abs(mx) > 0.15) this.facing = sgn(mx);
    this.phase += Math.abs(this.vx) * dt / STRIDE * TAU;

    this.invuln = Math.max(0, this.invuln - dt);
    this.hurtT = Math.max(0, this.hurtT - dt);
    this.landDip = Math.max(0, this.landDip - dt * 4);
    this.flipT = Math.max(0, this.flipT - dt);
    this.comboWindow = Math.max(0, this.comboWindow - dt);
    this.blood = Math.max(0, this.blood - dt * 0.02);

    if (input.slashBuf > 0 && this.canSlash()) {
      this.startSlash(game.aimAngle(this, input.slashAim));
      input.slashBuf = 0;
    }
    if (this.slash) {
      this.slash.t += dt;
      if (this.slash.t >= this.slash.dur + this.slash.rec) {
        this.slash = null;
        this.swordAng = wrapAngle(this.swordAng);
      }
    }
    this.rag.muscle = this.hurtT > 0 ? 0.22 : 1;
    this.animate(dt);
  }

  canSlash() {
    const s = this.slash;
    if (!s) return true;
    return s.stage === 2 ? s.t >= s.dur + s.rec * 0.6 : s.t >= s.dur * 0.8;
  }

  startSlash(aim) {
    const cx = Math.cos(aim);
    const f = Math.abs(cx) > 0.12 ? sgn(cx) : this.facing;
    this.facing = f;
    this.comboStage = this.comboWindow > 0 ? (this.comboStage + 1) % 3 : 0;
    const st = this.comboStage;
    let a0, a1, dur = 0.15;
    if (st === 2) { a0 = aim - f * Math.PI * 0.9; a1 = a0 + f * TAU; dur = 0.24; }  // dönen bitiriş
    else if (st === 0) { a0 = aim - f * 1.9; a1 = aim + f * 1.25; }                   // yukarıdan aşağı
    else { a0 = aim + f * 1.5; a1 = aim - f * 1.9; }                                  // aşağıdan yukarı
    // Kesik, bıçak nişan çizgisini (biraz rastgele) geçtiği anda uygulanır; böylece
    // yukarıdan inen her kesik kafayı uçurmaz, nişan nereyse orası kopar.
    // Dönen bitirişte bekleme yok: etrafındaki her şeyi değdiği yerden keser.
    const eAim = st === 2 ? 0 : clamp((aim + rand(-0.3, 0.3) - a0) / (a1 - a0), 0.15, 0.85);
    const rec = st === 2 ? 0.24 : 0.12;
    this.slash = { t: 0, dur, rec, a0, a1, e: 0, eAim, facing: f, hits: new Set(), pending: new Set(), kills: 0, stage: st, first: true };
    this.comboWindow = st === 2 ? 0 : dur + rec + 0.3;
    this.vx += Math.cos(aim) * (st === 2 ? 120 : 210);
    if (!this.grounded) {
      this.airSlashes++;
      if (this.airSlashes <= 3) this.vy = Math.min(this.vy, st === 2 ? -260 : -140);
    } else if (st === 2) {
      this.vy = -300; this.grounded = false;
    }
    Sfx.swoosh(st);
  }

  restBladeAngle() {
    if (!this.grounded) return this.vy < 0 ? -2.3 : -1.9;
    return Math.abs(this.vx) > RUN_SPEED * 0.35 ? Math.PI - 0.25 : -0.85;
  }

  animate(dt) {
    const P = this.tpose, d = this.rag.d, sl = this.slash;
    if (this.grounded) {
      const speed = Math.abs(this.vx) / RUN_SPEED;
      blendPose(P, POSES.idle(_poseA, this.t), POSES.run(_poseB, this.phase), clamp(speed * 1.3, 0, 1));
    } else if (this.vy < 0) POSES.jump(P, this.t);
    else POSES.fall(P, this.t);

    let rot = 0;
    if (this.flipT > 0) {
      rot = easeInOutSine(1 - this.flipT / FLIP_TIME) * TAU;
      POSES.tuck(P);
    } else if (sl) {
      // Kesme duruşu: bacaklar açık, boş kol geriye.
      P.bUA = -1.3; P.bFA = 0.3;
      if (this.grounded) { P.fTh = 0.65; P.fSh = 0.6; P.bTh = -0.55; P.bSh = 0.25; P.lean = 0.3; P.py = 3; }
      else { P.fTh = 0.9; P.fSh = 0.9; P.bTh = -0.6; P.bSh = 0.8; }
    }
    approachPose(this.pose, P, damp(this.flipT > 0 || sl ? 30 : 16, dt));
    poseFK(this.pose, d, this.local, rot, 0, -d.torso * 0.5);
    const pelvisY = this.y - (d.th + d.sh) * 0.96 + this.pose.py + this.landDip * 10;
    this.rag.facing = this.facing;
    this.rag.drive(this.x, pelvisY, this.facing, this.local, this.vx, this.vy);

    const H = this.rag.pts[J.FHAND];
    if (sl && sl.t <= sl.dur) {
      const p = clamp(sl.t / sl.dur, 0, 1);
      sl.e = sl.stage === 2 ? p : easeOutQuad(p);
      this.swordAng = lerp(sl.a0, sl.a1, sl.e);
      this.aimArm(this.swordAng, REACH);
      H.pin = true;
    } else {
      H.pin = false;
      if (sl) sl.e = 1;
      this.swordAng = angLerp(this.swordAng, toWorldAngle(this.restBladeAngle(), this.facing), damp(sl ? 12 : 18, dt));
    }
  }

  // Eli omuz etrafında verilen açıya kilitler; dirseği iki kemik boyunu koruyacak yere koyar.
  aimArm(ang, reach) {
    const tg = this.rag.tgt, d = this.rag.d;
    const nx = tg[J.NECK * 2], ny = tg[J.NECK * 2 + 1];
    tg[J.FHAND * 2] = nx + Math.cos(ang) * reach;
    tg[J.FHAND * 2 + 1] = ny + Math.sin(ang) * reach;
    const cb = clamp((d.ua * d.ua + reach * reach - d.fa * d.fa) / (2 * d.ua * reach), -1, 1);
    const ea = ang + this.facing * Math.acos(cb);
    tg[J.FELB * 2] = nx + Math.cos(ea) * d.ua;
    tg[J.FELB * 2 + 1] = ny + Math.sin(ea) * d.ua;
  }

  postStep(dt, game) {
    const rag = this.rag, H = rag.pts[J.FHAND], T = rag.pts[rag.tipIdx];
    if (rag.tipKin) {
      T.px = T.x; T.py = T.y;
      T.x = H.x + Math.cos(this.swordAng) * BLADE_LEN;
      T.y = H.y + Math.sin(this.swordAng) * BLADE_LEN;
    }
    const sl = this.slash;
    if (sl && !this.dead && sl.t > 0 && sl.t <= sl.dur + 0.02) {
      if (!sl.first) game.bladeSweep(this.prevB, H, T, sl, dt);
      sl.first = false;
      this.trail.push({ hx: H.x, hy: H.y, tx: T.x, ty: T.y, age: 0 });
    }
    const pb = this.prevB;
    pb.hx = H.x; pb.hy = H.y; pb.tx = T.x; pb.ty = T.y;
    for (const tr of this.trail) tr.age += dt;
    while (this.trail.length && this.trail[0].age > 0.11) this.trail.shift();

    const N = rag.pts[J.NECK];
    this.scarf.update(dt, N.x, N.y - 3, -80);
  }

  die(game, vx, vy) {
    this.dead = true;
    this.slash = null;
    this.trail.length = 0;
    this.rag.kill();
    this.rag.addVel(vx, vy, game.h);
    this.rag.addSpin(rand(-5, 5), game.h);
  }

  draw(ctx) {
    const blink = this.invuln > 0 && !this.dead && Math.floor(this.t * 18) % 2 === 0;
    this.rag.alpha = blink ? 0.35 : 1;
    this.scarf.draw(ctx, this.rag.alpha);
    this.rag.draw(ctx);
    ctx.globalAlpha = this.rag.alpha;
    drawSword(ctx, this.rag.pts[J.FHAND], this.rag.pts[this.rag.tipIdx], 1, this.blood);
    ctx.globalAlpha = 1;
  }

  drawTrail(ctx) {
    const tr = this.trail;
    for (let i = 1; i < tr.length; i++) {
      const a = tr[i - 1], b = tr[i];
      const al = (1 - b.age / 0.11) * 0.6;
      if (al <= 0) continue;
      ctx.fillStyle = `rgba(255,255,255,${al.toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(lerp(a.hx, a.tx, 0.3), lerp(a.hy, a.ty, 0.3));
      ctx.lineTo(a.tx, a.ty);
      ctx.lineTo(b.tx, b.ty);
      ctx.lineTo(lerp(b.hx, b.tx, 0.3), lerp(b.hy, b.ty, 0.3));
      ctx.closePath();
      ctx.fill();
    }
  }
}

const ETYPES = {
  grunt: { name: 'grunt', S: 1, hp: 1, spd: [90, 125], col: '#4a5670', colBack: '#78829b', k: 700, c: 16, weapon: 'fist', reach: 34, windup: 0.42, atk: 0.14, rec: 0.55, knock: 330, score: 100 },
  sword: { name: 'sword', S: 1.02, hp: 1, spd: [70, 95], col: '#2d4f43', colBack: '#5d7b6f', k: 760, c: 18, weapon: 'sword', reach: 60, windup: 0.55, atk: 0.17, rec: 0.65, knock: 380, score: 150, band: '#f29e1f' },
  thrower: { name: 'thrower', S: 0.95, hp: 1, spd: [85, 105], col: '#58396a', colBack: '#8a6c9c', k: 700, c: 16, weapon: 'spear', reach: 330, windup: 0.75, atk: 0.14, rec: 1.1, knock: 300, score: 150 },
  brute: { name: 'brute', S: 1.38, hp: 3, spd: [55, 72], col: '#6a3326', colBack: '#955c4d', k: 900, c: 22, weapon: 'fist', reach: 46, windup: 0.62, atk: 0.2, rec: 0.8, knock: 620, score: 300 },
};

class Enemy {
  constructor(type, x, diff) {
    const T = ETYPES[type];
    this.T = T;
    // Zorluk arttıkça saldırı hazırlığı kısalır.
    this.wmul = lerp(1, 0.7, diff || 0);
    this.pref = rand(190, 290);
    this.throwAng = 0;
    this.x = x; this.y = 0; this.vx = 0; this.vy = 0;
    this.facing = 1;
    this.speed = rand(T.spd[0], T.spd[1]);
    this.hp = T.hp;
    this.alive = true;
    this.state = 'approach';
    this.timer = 0;
    this.cool = rand(0.2, 0.8);
    this.rag = new Ragdoll(x, -33 * T.S, T.S, T);
    this.bladeLen = 40 * T.S;
    if (T.weapon === 'sword') this.rag.addTip(this.bladeLen);
    this.local = new Float32Array(JOINTS * 2);
    this.pose = POSES.idle(makePose(), 0);
    this.tpose = makePose();
    this.phase = rand(0, TAU);
    this.t = rand(0, 10);
    this.swordAng = toWorldAngle(-0.9, 1);
    this.prevB = { hx: 0, hy: 0, tx: 0, ty: 0 };
    this.hasPrevB = false;
    this.atkHit = false;
    this.deathT = 0;
    this.band = T.band ? new Ribbon(5, 4, T.band, 2.4) : null;
  }

  get harmless() { return !this.alive || this.state === 'panic'; }

  update(dt, game) {
    this.t += dt;
    if (!this.alive) return;
    const T = this.T, pl = game.player;
    const dx = pl.x - this.x, dist = Math.abs(dx);
    this.timer -= dt;
    this.cool -= dt;
    let tvx = 0;
    switch (this.state) {
      case 'approach':
        this.facing = sgn(dx);
        if (pl.dead) { this.state = 'cheer'; break; }
        if (T.weapon === 'spear') {
          // Mesafeyi korur, yakına gelince geri geri kaçar, ekrandayken fırlatır.
          if (dist > this.pref + 20) tvx = this.facing * this.speed;
          else if (dist < 130) tvx = -this.facing * this.speed * 0.9;
          const onScreen = Math.abs(this.x - game.camX) < game.viewW / 2 - 20;
          if (onScreen && dist > 110 && dist < 380 && this.cool <= 0) {
            this.state = 'windup'; this.timer = T.windup * this.wmul;
          }
          break;
        }
        if (dist > T.reach * 0.8) tvx = this.facing * this.speed;
        if (dist < T.reach && this.cool <= 0 && pl.y > -60 * T.S) {
          this.state = 'windup'; this.timer = T.windup * this.wmul;
        }
        break;
      case 'windup':
        if (T.weapon === 'spear') this.facing = sgn(dx);
        if (this.timer <= 0) {
          this.state = 'attack'; this.timer = T.atk; this.atkHit = false; this.hasPrevB = false;
          if (T.weapon === 'fist') this.vx = this.facing * 200;
          if (T.weapon === 'spear') this.throwSpear(game);
          Sfx.enemySwing();
        }
        break;
      case 'attack':
        if (this.timer <= 0) { this.state = 'recover'; this.timer = T.rec; }
        break;
      case 'recover':
        if (this.timer <= 0) { this.state = 'approach'; this.cool = T.weapon === 'spear' ? rand(0.6, 1.6) : rand(0.1, 0.6); }
        break;
      case 'stagger':
        if (this.timer <= 0) this.state = 'approach';
        break;
      case 'panic':
        this.facing = -sgn(dx);
        tvx = this.facing * this.speed * 1.7;
        break;
      case 'cheer':
        if (!pl.dead) { this.state = 'approach'; break; }
        if (this.y >= 0 && Math.random() < dt * 2.5) this.vy = -rand(220, 340);
        break;
    }
    const acc = this.state === 'attack' || this.state === 'stagger' ? 350 : 900;
    this.vx = approach(this.vx, tvx, acc * dt);
    this.vy += GRAVITY * dt;
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    if (this.y >= 0) { this.y = 0; this.vy = 0; }
    this.phase += Math.abs(this.vx) * dt / (STRIDE * T.S) * TAU;
    this.rag.muscle = approach(this.rag.muscle, 1, dt * 1.6);
    this.animate(dt);
  }

  throwSpear(game) {
    const pl = game.player, H = this.rag.pts[J.FHAND];
    const g = GRAVITY * SPEAR_GRAV;
    const tf = clamp(Math.abs(pl.x - H.x) / 520, 0.45, 0.9);
    const tx = pl.x + pl.vx * tf * 0.4, ty = pl.y - 52;
    const vx = (tx - H.x) / tf, vy = (ty - H.y - 0.5 * g * tf * tf) / tf;
    game.spears.push(new Spear(H.x, H.y, vx, vy));
  }

  animate(dt) {
    const P = this.tpose, T = this.T, st = this.state, rag = this.rag, d = rag.d;
    const grounded = this.y >= -0.5;
    if (!grounded) POSES.jump(P, this.t);
    else blendPose(P, POSES.idle(_poseA, this.t), POSES.run(_poseB, this.phase), clamp(Math.abs(this.vx) / 110, 0, 1));
    // Düşmanların koşusu biraz daha dik ve kollar önde.
    P.fUA = lerp(P.fUA, 0.5 + Math.sin(this.phase) * -0.8, clamp(Math.abs(this.vx) / 110, 0, 1));
    P.fFA = Math.max(P.fFA, 1.2);
    if (T.weapon === 'fist') {
      if (st === 'windup') { P.lean = -0.15; P.fUA = -1.4; P.fFA = 1.9; P.bUA = 0.7; P.bFA = 1.3; }
      else if (st === 'attack') { P.lean = 0.45; P.fUA = 1.65; P.fFA = 0.05; P.bUA = -0.8; P.bFA = 1; }
    } else if (T.weapon === 'spear') {
      if (st === 'windup') { P.lean = -0.25; P.fUA = -2.2; P.fFA = -0.5; P.bUA = 1.4; P.bFA = 0.3; P.fTh = 0.5; P.bTh = -0.4; }
      else if (st === 'attack') { P.lean = 0.4; P.fUA = 2.0; P.fFA = 0.2; P.bUA = -0.9; P.bFA = 0.6; P.fTh = 0.6; P.bTh = -0.5; }
      else P.fFA = 1.6;
    } else if (st === 'windup') P.lean = -0.1;
    else if (st === 'attack') P.lean = 0.35;
    if (st === 'panic') {
      P.bUA = 2.6 + Math.sin(this.t * 25) * 0.7; P.bFA = 0.3;
      P.fUA = 2.8 + Math.sin(this.t * 23 + 1) * 0.7; P.fFA = 0.3;
      P.head = -0.5;
    } else if (st === 'cheer') {
      P.bUA = 2.8 + Math.sin(this.t * 12) * 0.3; P.fUA = 2.6 + Math.cos(this.t * 12) * 0.3; P.bFA = P.fFA = 0.2;
    } else if (st === 'stagger') { P.lean = -0.35; P.head = 0.4; }
    approachPose(this.pose, P, damp(st === 'attack' ? 30 : 14, dt));
    poseFK(this.pose, d, this.local, 0, 0, 0);
    const pelvisY = this.y - (d.th + d.sh) * 0.96 + this.pose.py;
    rag.facing = this.facing;
    rag.drive(this.x, pelvisY, this.facing, this.local, this.vx, this.vy);
    if (T.weapon === 'sword' && rag.tipKin) this.animSword(dt);
  }

  animSword(dt) {
    const st = this.state, f = this.facing, rag = this.rag;
    const H = rag.pts[J.FHAND];
    if (st === 'attack') {
      const p = clamp(1 - this.timer / this.T.atk, 0, 1);
      this.swordAng = toWorldAngle(lerp(-2.35, 1.1, easeOutQuad(p)), f);
      Player.prototype.aimArm.call(this, this.swordAng, REACH * this.T.S);
      H.pin = true;
      return;
    }
    H.pin = false;
    let local = -0.9 + 0.08 * Math.sin(this.t * 2);
    if (st === 'windup') {
      local = -2.35;
      Player.prototype.aimArm.call(this, toWorldAngle(local, f), REACH * this.T.S);
    }
    this.swordAng = angLerp(this.swordAng, toWorldAngle(local, f), damp(st === 'windup' ? 14 : 10, dt));
  }

  postStep(dt, game) {
    const rag = this.rag, T = this.T;
    const H = rag.pts[J.FHAND];
    if (this.band) {
      const hd = rag.pts[J.HEAD];
      this.band.update(dt, hd.x - this.facing * rag.d.head * 0.9, hd.y - rag.d.head * 0.25, -60);
    }
    let Tp = null;
    if (rag.tipIdx >= 0) {
      Tp = rag.pts[rag.tipIdx];
      if (rag.tipKin) {
        Tp.px = Tp.x; Tp.py = Tp.y;
        Tp.x = H.x + Math.cos(this.swordAng) * this.bladeLen;
        Tp.y = H.y + Math.sin(this.swordAng) * this.bladeLen;
      }
    }
    const pl = game.player;
    if (this.alive && this.state === 'attack' && !this.atkHit && !pl.dead) {
      if (T.weapon === 'sword' && Tp && rag.tipKin) {
        if (this.hasPrevB) {
          const hit = sweepTest(pl.rag, this.prevB, H, Tp, 3);
          if (hit) {
            this.atkHit = true;
            const vx = (Tp.x - this.prevB.tx) / dt, vy = (Tp.y - this.prevB.ty) / dt;
            game.hurtPlayer(this, hit, vx, vy);
          }
        }
      } else if (T.weapon === 'fist' && H.attached) {
        const hit = pointHitRag(pl.rag, H.x, H.y, 5 * T.S);
        if (hit) {
          this.atkHit = true;
          game.hurtPlayer(this, null, this.facing * T.knock, -200);
        }
      }
    }
    if (Tp) {
      const pb = this.prevB;
      pb.hx = H.x; pb.hy = H.y; pb.tx = Tp.x; pb.ty = Tp.y;
      this.hasPrevB = true;
    }
  }

  draw(ctx) {
    this.rag.draw(ctx);
    const rag = this.rag;
    if (this.band) {
      // Alın bandı: kafanın boyuna göre yönüne dik bir şerit.
      const hd = rag.pts[J.HEAD], r = rag.d.head;
      const nb = rag.neighborOf(J.HEAD, -1);
      let ux = 0, uy = -1;
      if (nb >= 0) { const n = rag.pts[nb], l = Math.hypot(hd.x - n.x, hd.y - n.y) || 1; ux = (hd.x - n.x) / l; uy = (hd.y - n.y) / l; }
      const cx = hd.x + ux * r * 0.3, cy = hd.y + uy * r * 0.3;
      this.band.draw(ctx, rag.alpha);
      ctx.globalAlpha = rag.alpha;
      ctx.strokeStyle = this.T.band;
      ctx.lineWidth = 3 * this.T.S;
      ctx.lineCap = 'butt';
      ctx.beginPath();
      ctx.moveTo(cx - uy * r * 0.98, cy + ux * r * 0.98);
      ctx.lineTo(cx + uy * r * 0.98, cy - ux * r * 0.98);
      ctx.stroke();
      ctx.lineCap = 'round';
    }
    if (this.T.weapon === 'spear' && this.alive && this.state !== 'attack' && this.state !== 'recover' && rag.pts[J.FHAND].attached) {
      const H = rag.pts[J.FHAND];
      const a = this.state === 'windup' ? toWorldAngle(-0.35, this.facing) : toWorldAngle(-1.3, this.facing);
      ctx.globalAlpha = rag.alpha;
      drawSpear(ctx, H.x - Math.cos(a) * SPEAR_LEN * 0.35, H.y - Math.sin(a) * SPEAR_LEN * 0.35, a);
    }
    if (rag.tipIdx >= 0) {
      ctx.globalAlpha = rag.alpha;
      drawSword(ctx, rag.pts[J.FHAND], rag.pts[rag.tipIdx], this.T.S * 0.9, 0);
      ctx.globalAlpha = 1;
    }
    if (this.alive && this.state === 'windup') {
      const hd = rag.pts[J.HEAD];
      const k = 1 + 0.25 * Math.sin(this.t * 30);
      ctx.fillStyle = '#e0231c';
      ctx.font = `900 ${Math.round(18 * this.T.S * k)}px ${FONT}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText('!', hd.x, hd.y - rag.d.head - 3);
    }
  }
}

// ---------- Mızrak: mızrakçıların fırlattığı, kılıçla sektirilebilen mermi ----------
const SPEAR_LEN = 38;
const SPEAR_GRAV = 0.55;

function drawSpear(ctx, tx, ty, a) {
  const ux = Math.cos(a), uy = Math.sin(a);
  const hx = tx + ux * SPEAR_LEN, hy = ty + uy * SPEAR_LEN;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#5e3f26';
  ctx.lineWidth = 2.4;
  ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(hx, hy); ctx.stroke();
  ctx.fillStyle = '#d8d8e0';
  ctx.strokeStyle = '#1d1d22';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(hx + ux * 8, hy + uy * 8);
  ctx.lineTo(hx - uy * 3, hy + ux * 3);
  ctx.lineTo(hx + uy * 3, hy - ux * 3);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

class Spear {
  constructor(x, y, vx, vy) {
    this.x = x; this.y = y; this.vx = vx; this.vy = vy;
    this.a = Math.atan2(vy, vx);
    this.state = 'fly';
    this.friendly = false;
    this.t = 0;
    this.alpha = 1;
    this.hits = new Set();
    this.kills = 0;
    this.isSpear = true;
    this.T = { knock: 300 };
    this.prev = { hx: 0, hy: 0, tx: 0, ty: 0 };
    this.savePrev();
  }

  // Uç (tip) ve kuyruk (tail) — sweepTest'in beklediği {hx,hy,tx,ty} biçiminde.
  savePrev() {
    const p = this.prev, ux = Math.cos(this.a), uy = Math.sin(this.a);
    p.tx = this.x + ux * 8; p.ty = this.y + uy * 8;
    p.hx = this.x - ux * SPEAR_LEN; p.hy = this.y - uy * SPEAR_LEN;
  }

  seg() {
    const ux = Math.cos(this.a), uy = Math.sin(this.a);
    return { H: { x: this.x - ux * SPEAR_LEN, y: this.y - uy * SPEAR_LEN }, T: { x: this.x + ux * 8, y: this.y + uy * 8 } };
  }

  update(dt, game) {
    this.t += dt;
    if (this.state === 'stuck') {
      if (this.t > 4) this.alpha = Math.max(0, 1 - (this.t - 4) / 0.8);
      return;
    }
    this.savePrev();
    const g = GRAVITY * (this.friendly ? 0.15 : SPEAR_GRAV) * (this.state === 'drop' ? 1.6 : 1);
    this.vy += g * dt;
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    if (this.state === 'drop') this.a += dt * 14 * sgn(this.vx);
    else this.a = Math.atan2(this.vy, this.vx);
    if (this.y >= -2) {
      this.y = -2 + (this.state === 'fly' ? 6 : 0);
      this.state = 'stuck';
      this.t = 0;
      if (Math.sin(this.a) < 0.3) this.a = Math.atan2(0.5, sgn(this.vx));
      game.fx.dust(this.x, 4);
      return;
    }
    if (this.state !== 'fly') return;
    const s = this.seg();
    if (!this.friendly) {
      const pl = game.player;
      if (!pl.dead && pl.invuln <= 0) {
        const hit = sweepTest(pl.rag, this.prev, s.H, s.T, 3);
        if (hit) {
          game.hurtPlayer(this, null, this.vx, this.vy);
          this.drop(-0.3);
        }
      }
      return;
    }
    // Sektirilmiş mızrak düşmanları delip geçer.
    for (const e of game.enemies) {
      if (!e.alive || this.hits.has(e)) continue;
      const hit = sweepTest(e.rag, this.prev, s.H, s.T, 3);
      if (!hit) continue;
      this.hits.add(e);
      game.fx.blood(hit.x, hit.y, this.vx, this.vy, 20, 0.6, 380);
      Sfx.wound();
      game.killEnemy(e, this.vx * 0.7, this.vy * 0.7, this, false, false);
    }
  }

  drop(k) {
    this.state = 'drop';
    this.vx *= k;
    this.vy = -180;
  }

  deflect(game) {
    const pl = game.player;
    const side = sgn(this.x - pl.x);
    // Geldiği taraftaki en yakın düşmana doğru geri yolla (hafif otomatik nişan).
    let target = null, bd = Infinity;
    for (const e of game.enemies) {
      if (!e.alive || sgn(e.x - pl.x) !== side) continue;
      const d = Math.abs(e.x - pl.x);
      if (d < bd) { bd = d; target = e; }
    }
    const tx = target ? target.x : this.x + side * 300;
    const ty = target ? -50 * target.T.S : this.y;
    const dx = tx - this.x, dy = ty - this.y, l = Math.hypot(dx, dy) || 1;
    this.vx = dx / l * 950;
    this.vy = dy / l * 950;
    this.a = Math.atan2(this.vy, this.vx);
    this.friendly = true;
    this.savePrev();
  }

  draw(ctx) {
    ctx.globalAlpha = this.alpha;
    const ux = Math.cos(this.a), uy = Math.sin(this.a);
    drawSpear(ctx, this.x - ux * SPEAR_LEN, this.y - uy * SPEAR_LEN, this.a);
    ctx.globalAlpha = 1;
  }
}
