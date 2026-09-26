'use strict';

const MAX_STEP = 1 / 120;
const MAX_CORPSES = 26;
const CORPSE_LIFE = 14;
const HEAL_EVERY = 12;

const DEATH_QUIPS = [
  'Yer çekimi yine kazandı.',
  'Ragdoll fiziği 1 — Sen 0',
  'Parçalarını toplamak biraz sürecek.',
  'Kombo kırıldı. Sen de.',
  'Kılıcın keskin, refleksin değil.',
  'Hiç değilse güzel uçtun.',
];

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.input = new Input(canvas);
    this.input.onMute = () => { const m = Sfx.toggleMute(); this.fx.popup(this.player.x, -120, m ? 'SES KAPALI' : 'SES AÇIK', '#fff', 14); };
    this.fx = new Effects();
    this.best = loadBest();
    this.hintT = 9;
    this.realTime = 0;
    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.reset();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = window.innerWidth, H = window.innerHeight;
    this.dpr = dpr; this.W = W; this.H = H;
    this.canvas.width = Math.round(W * dpr);
    this.canvas.height = Math.round(H * dpr);
    this.canvas.style.width = W + 'px';
    this.canvas.style.height = H + 'px';
    // Dikey ekranda daha dar bir dünya göster ki karakterler minicik kalmasın.
    this.scale = H > W ? Math.min(H / 430, W / 400) : Math.min(H / 430, W / 540);
    this.groundSY = H * (H > W ? 0.72 : 0.8);
    this.viewW = W / this.scale;
    const r = clamp(Math.min(W, H) * 0.09, 30, 56);
    Object.assign(this.input.jumpBtn, { x: W - r * 1.6, y: H - r * 1.7, r });
  }

  reset() {
    this.player = new Player(0);
    this.enemies = [];
    this.spears = [];
    this.fx.clear();
    this.camX = 0;
    this.time = 0;
    this.score = 0;
    this.kills = 0;
    this.combo = 0;
    this.comboT = 0;
    this.comboPop = 0;
    this.healCount = 0;
    this.spawnT = 0.6;
    this.timeScale = 1;
    this.slowT = 0;
    this.slowScale = 1;
    this.shakeAmt = 0;
    this.flash = 0;
    this.deadT = 0;
    this.quip = '';
    this.h = MAX_STEP;
    this.lastH = MAX_STEP;
    this.input.clearBuffers();
  }

  // ---------- zaman ----------

  frame(realDt) {
    this.realTime += realDt;
    if (this.slowT > 0) {
      this.slowT -= realDt;
      this.timeScale = lerp(this.timeScale, this.slowScale, damp(40, realDt));
    } else {
      this.timeScale = lerp(this.timeScale, 1, damp(7, realDt));
    }
    // dt = 0 olan kareler (ilk rAF gibi) fizikte 1/dt yüzünden NaN üretir: atla.
    const sim = realDt * this.timeScale;
    if (sim > 1e-5) {
      const n = Math.ceil(sim / MAX_STEP - 1e-6);
      const h = sim / n;
      for (let i = 0; i < n; i++) this.step(h);
    }

    if (this.player.dead) {
      this.deadT += realDt;
      if ((this.deadT > 1.0 && this.input.anyPress) || this.deadT > 8) this.reset();
    } else if (this.input.restart) {
      this.reset();
    }
    if (this.hintT > 0 && this.kills > 0) this.hintT = Math.min(this.hintT, 2);
    this.hintT -= realDt;
    this.updateCamera(realDt);
    this.shakeAmt *= Math.exp(-9 * realDt);
    this.flash = Math.max(0, this.flash - realDt * 2.2);
    this.comboPop = Math.max(0, this.comboPop - realDt * 5);
    this.input.endFrame(realDt);
    this.render();
  }

  step(h) {
    this.h = h;
    this.time += h;
    const pl = this.player;
    pl.update(h, this.input, this);
    for (const e of this.enemies) e.update(h, this);
    this.separate();
    const hp = this.lastH;
    pl.rag.step(h, hp);
    if (pl.dead && pl.rag.impact > 600) Sfx.thud(pl.rag.impact);
    pl.rag.impact = 0;
    for (const e of this.enemies) {
      e.rag.step(h, hp);
      if (!e.alive && e.rag.impact > 600) Sfx.thud(e.rag.impact);
      e.rag.impact = 0;
    }
    pl.postStep(h, this);
    for (const e of this.enemies) e.postStep(h, this);
    for (const sp of this.spears) sp.update(h, this);
    this.fx.update(h);
    this.updateSpawn(h);
    if (this.comboT > 0) {
      this.comboT -= h;
      if (this.comboT <= 0) this.combo = 0;
    }
    this.cleanup();
    this.lastH = h;
  }

  slowmo(dur, scale) {
    this.slowScale = this.slowT > 0 ? Math.min(this.slowScale, scale) : scale;
    this.slowT = Math.max(this.slowT, dur);
  }

  shake(a) { this.shakeAmt = Math.min(20, this.shakeAmt + a); }

  // ---------- nişan ----------

  aimAngle(pl, aim) {
    const f = pl.facing;
    if (!aim || aim.type === 'fwd') return f > 0 ? 0.3 : Math.PI - 0.3;
    if (aim.type === 'key') {
      const m = this.input.moveX();
      const dir = Math.abs(m) > 0.1 ? sgn(m) : f;
      const dy = aim.up ? -1 : aim.down ? 0.9 : 0.32;
      return Math.atan2(dy, dir * (aim.up ? 0.55 : 1));
    }
    if (aim.type === 'dir') return Math.atan2(aim.dy, aim.dx);
    if (aim.type === 'mouse') {
      const w = this.screenToWorld(aim.sx, aim.sy);
      const nx = pl.rag.tgt[J.NECK * 2], ny = pl.rag.tgt[J.NECK * 2 + 1];
      return Math.atan2(w.y - ny, w.x - nx);
    }
    return f > 0 ? 0 : Math.PI;
  }

  screenToWorld(sx, sy) {
    return { x: this.camX + (sx - this.W / 2) / this.scale, y: (sy - this.groundSY) / this.scale };
  }

  worldToScreen(x, y) {
    return { x: this.W / 2 + (x - this.camX) * this.scale, y: this.groundSY + y * this.scale };
  }

  // ---------- savaş ----------

  bladeSweep(pb, H, T, sl, dt) {
    const x0 = Math.min(pb.hx, pb.tx, H.x, T.x) - 12, x1 = Math.max(pb.hx, pb.tx, H.x, T.x) + 12;
    const y0 = Math.min(pb.hy, pb.ty, H.y, T.y) - 12, y1 = Math.max(pb.hy, pb.ty, H.y, T.y) + 12;

    for (const sp of this.spears) {
      if (sp.state !== 'fly' || sp.friendly) continue;
      const g = sp.seg();
      if (sweepSeg(pb, H, T, g.H, g.T, 3)) {
        sp.deflect(this);
        this.fx.sparks(sp.x, sp.y, 16);
        this.fx.popup(sp.x, sp.y - 16, 'SEKTİ!', '#9be7ff', 16, 0.7);
        Sfx.clang();
        this.addScore(50);
        this.slowmo(0.1, 0.3);
        this.shake(3);
      }
    }

    // Bıçak nişan çizgisine gelmeden önceki temaslar beklemeye alınır; kesik,
    // bıçak o çizgiyi geçerken bıçağın o anki yerinde uygulanır.
    const core = sl.e >= sl.eAim || sl.t >= sl.dur;
    for (const e of this.enemies) {
      if (sl.hits.has(e)) continue;
      const bb = e.rag.bounds();
      if (bb.x1 < x0 || bb.x0 > x1 || bb.y1 < y0 || bb.y0 > y1) continue;

      if (e.alive && e.rag.tipKin && (e.state === 'attack' || e.state === 'windup')) {
        const EH = e.rag.pts[J.FHAND], ET = e.rag.pts[e.rag.tipIdx];
        if (sweepSeg(pb, H, T, EH, ET, 3)) {
          sl.hits.add(e);
          this.parry(e, H, T);
          continue;
        }
      }
      let hit = sweepTest(e.rag, pb, H, T, 4);
      if (!core) { if (hit) sl.pending.add(e); continue; }
      if (sl.pending.has(e)) hit = lineTest(e.rag, H, T) || hit || nearestBoneHit(e.rag, H, T, 24);
      if (!hit) continue;
      sl.hits.add(e);
      let vx = lerp((H.x - pb.hx) / dt, (T.x - pb.tx) / dt, hit.t);
      let vy = lerp((H.y - pb.hy) / dt, (T.y - pb.ty) / dt, hit.t);
      const sp = Math.hypot(vx, vy) || 1;
      const m = clamp(sp, 260, 760);
      vx = vx / sp * m; vy = vy / sp * m;
      this.cutEnemy(e, hit, vx, vy, sl);
    }
  }

  parry(e, H, T) {
    const x = (e.rag.pts[e.rag.tipIdx].x + T.x) / 2, y = (e.rag.pts[e.rag.tipIdx].y + T.y) / 2;
    this.fx.sparks(x, y, 18);
    this.fx.popup(x, y - 20, 'KLANG!', '#ffe38a', 16, 0.6);
    Sfx.clang();
    e.state = 'stagger';
    e.timer = 0.7;
    e.vx = sgn(e.x - this.player.x) * 260;
    e.rag.muscle = 0.3;
    this.addScore(20);
    this.slowmo(0.08, 0.3);
    this.shake(4);
  }

  // Kesik uygular; sonuç null ise (kemik çok kısa / zırh) sadece darbe olur.
  applyCut(rag, hit, allowCut) {
    let bi = hit.bone, u = hit.u;
    if (hit.head) {
      bi = rag.boneWith(J.HEAD);
      if (bi >= 0) u = rag.bones[bi].b === J.HEAD ? 0.65 : 0.35;
    }
    if (!allowCut || bi < 0 || rag.bones[bi].len < MIN_CUT_LEN * rag.S) return null;
    return rag.cut(bi, u);
  }

  gore(rag, res, hit, vx, vy) {
    const h = this.h;
    if (res) {
      // Küçük parça (kopan uzuv) daha sert fırlar.
      const c1 = rag.comp[res.i1], c2 = rag.comp[res.i2];
      const small = rag.compSize(c1) < rag.compSize(c2) ? c1 : c2;
      rag.addVel(vx * 0.45, vy * 0.45 - 140, h, small);
      this.fx.blood(res.x, res.y, vx, vy, 28, 0.9, 420);
      this.fx.blood(res.x, res.y, -vy, vx, 10, 1.4, 200);
      this.fx.sparks(res.x, res.y, 5, '#ffffff', 300);
      this.fx.bleed(rag, res.i1, rand(1.2, 2.0));
      this.fx.bleed(rag, res.i2, rand(1.2, 2.0));
      Sfx.slice();
    } else {
      this.fx.blood(hit.x, hit.y, vx, vy, 14, 1.1, 280);
      Sfx.wound();
    }
  }

  cutEnemy(e, hit, vx, vy, sl) {
    const rag = e.rag, wasAlive = e.alive;
    const kind = hit.head ? 'neck' : rag.bones[hit.bone].kind;
    // Zırhlı (hp > 1) düşmanın gövdesi son darbeye kadar kopmaz.
    const armored = wasAlive && e.hp > 1 && (kind === 'torso' || kind === 'neck');
    const res = this.applyCut(rag, hit, !armored);
    if (wasAlive) rag.flash = 0.04;
    rag.addVel(vx * 0.25, vy * 0.25 - 40, this.h);
    this.gore(rag, res, hit, vx, vy);
    this.player.blood = Math.min(1, this.player.blood + 0.05);

    if (!wasAlive) {
      this.addScore(10);
      this.fx.popup(hit.x, hit.y - 10, '+10', '#fff', 12, 0.6);
      return;
    }
    // Kol kesmek öldürmez, silahsız bırakır; diğer kesikler öldürür.
    if (res && res.kind !== 'arm') e.hp = 0;
    else if (!res) e.hp--;
    const decap = !!res && res.kind === 'neck';
    const halved = !!res && res.kind === 'torso';
    const legless = !rag.pts[J.BFOOT].attached || !rag.pts[J.FFOOT].attached;
    if (e.hp <= 0 || decap || halved || legless) {
      this.killEnemy(e, vx, vy, sl, decap, halved, legless && !halved);
      return;
    }
    // Hayatta kaldı: sendele ya da (silah kolu gittiyse) panikle kaç.
    rag.muscle = 0.12;
    e.vx = sgn(vx) * 240;
    e.vy = -140;
    this.addScore(25);
    this.slowmo(0.05, 0.4);
    this.shake(3);
    if (!rag.pts[J.FHAND].attached && e.state !== 'panic') {
      e.state = 'panic';
      this.fx.popup(e.x, -100 * e.T.S, 'AAAA!', '#fff', 18, 1.2);
    } else if (e.state !== 'panic') {
      e.state = 'stagger';
      e.timer = 0.45;
    }
  }

  killEnemy(e, vx, vy, sl, decap, halved, legless) {
    e.alive = false;
    e.state = 'dead';
    e.deathT = this.time;
    const rag = e.rag;
    rag.kill();
    rag.addVel(vx * 0.55, vy * 0.55 - 170, this.h);
    rag.addSpin(rand(-7, 7), this.h);

    this.kills++;
    this.combo++;
    this.comboT = 2.6;
    this.comboPop = 1;
    const pl = this.player;
    let pts = e.T.score + (this.combo - 1) * 15;
    const px = e.x, py = -95 * e.T.S;
    if (decap) { pts += 50; this.fx.popup(px, py - 18, 'KAFA GİTTİ!', '#ffd23f', 20, 1.1); }
    else if (halved) { pts += 50; this.fx.popup(px, py - 18, 'İKİYE BÖLÜNDÜ!', '#ffd23f', 20, 1.1); }
    else if (legless) { pts += 30; this.fx.popup(px, py - 18, 'BACAKSIZ!', '#ffd23f', 18, 1.1); }
    if (!pl.grounded && !pl.dead) { pts += 40; this.fx.popup(px, py - 40, 'HAVADA!', '#9be7ff', 16, 1); }
    if (sl) {
      sl.kills++;
      if (sl.kills >= 2) {
        const t = sl.isSpear ? 'ŞİŞ KEBAP!' : sl.kills === 2 ? 'ÇİFTE!' : sl.kills === 3 ? 'ÜÇLEME!' : 'KATLİAM!';
        this.fx.popup(pl.x, -150, t, '#ff5a36', 26, 1.3);
        pts += sl.kills * 60;
      }
    }
    this.addScore(pts);
    this.fx.popup(px, py, '+' + pts, '#fff', 14, 0.8);
    const big = decap || halved || (sl && sl.kills >= 2);
    this.slowmo(big ? 0.28 : 0.12, big ? 0.18 : 0.3);
    this.shake(big ? 8 : 5);
    Sfx.combo(this.combo);

    this.healCount++;
    if (this.healCount >= HEAL_EVERY) {
      this.healCount = 0;
      if (pl.hp < pl.maxHp && !pl.dead) {
        pl.hp++;
        this.fx.popup(pl.x, -120, '+1 CAN', '#ff6b81', 18, 1.2);
        Sfx.heal();
      }
    }
  }

  hurtPlayer(src, hit, vx, vy) {
    const pl = this.player;
    if (pl.dead || pl.invuln > 0) return;
    pl.hp--;
    const dir = sgn(pl.x - src.x);
    this.shake(10);
    this.flash = 0.45;
    this.fx.blood(pl.x, pl.y - 50, dir * 220, -120, 18, 1.2, 320);
    if (pl.hp <= 0) {
      pl.die(this, dir * src.T.knock * 1.2, -340);
      if (hit) {
        const res = this.applyCut(pl.rag, hit, true);
        this.gore(pl.rag, res, hit, vx || dir * 400, vy || -100);
      } else Sfx.punch();
      Sfx.die();
      this.slowmo(1.1, 0.25);
      this.deadT = 0;
      this.quip = pick(DEATH_QUIPS);
      if (this.score > this.best) { this.best = this.score; saveBest(this.best); }
    } else {
      pl.invuln = 1.1;
      pl.hurtT = 0.35;
      pl.vx = dir * src.T.knock;
      pl.vy = -240;
      pl.grounded = false;
      pl.slash = null;
      pl.rag.pts[J.FHAND].pin = false;
      Sfx.hurt();
      if (!hit) Sfx.punch();
      this.slowmo(0.15, 0.35);
    }
  }

  addScore(p) { this.score += p; }

  // ---------- dünya ----------

  separate() {
    const list = this.enemies.filter((e) => e.alive);
    list.sort((a, b) => a.x - b.x);
    for (let i = 1; i < list.length; i++) {
      const a = list[i - 1], b = list[i];
      const min = 15 * (a.T.S + b.T.S);
      const d = b.x - a.x;
      if (d < min) {
        const push = (min - d) * 0.25;
        a.x -= push; b.x += push;
      }
    }
  }

  difficulty() { return clamp(this.kills / 70 + this.time / 300, 0, 1); }

  updateSpawn(dt) {
    if (this.player.dead) return;
    this.spawnT -= dt;
    if (this.spawnT > 0) return;
    let alive = 0;
    for (const e of this.enemies) if (!e.harmless) alive++;
    const d = this.difficulty();
    const maxAlive = 2 + Math.floor(d * 9);
    if (alive >= maxAlive) { this.spawnT = 0.3; return; }
    const group = Math.random() < d * 0.45 ? randInt(2, 3) : 1;
    const side = this.time < 2 ? 1 : Math.random() < 0.5 ? -1 : 1;
    for (let i = 0; i < group; i++) {
      const x = this.camX + side * (this.viewW / 2 + 40 + i * 45 + rand(0, 40));
      this.enemies.push(new Enemy(this.pickType(d), x, d));
    }
    this.spawnT = lerp(2.1, 0.55, d) * rand(0.7, 1.3);
  }

  pickType(d) {
    if (this.kills >= 12 && Math.random() < 0.05 + d * 0.13) return 'brute';
    if (this.kills >= 8 && Math.random() < 0.12 + d * 0.1) return 'thrower';
    if (this.kills >= 4 && Math.random() < 0.28 + d * 0.15) return 'sword';
    return 'grunt';
  }

  cleanup() {
    const now = this.time;
    let corpses = 0;
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      if (e.alive) continue;
      corpses++;
      if (corpses > MAX_CORPSES && now - e.deathT < CORPSE_LIFE) e.deathT = now - CORPSE_LIFE;
    }
    const keep = [];
    for (const e of this.enemies) {
      const far = Math.abs(e.rag.pts[J.PELVIS].x - this.camX) > this.viewW / 2 + 1500;
      if (e.alive) {
        // Kaçan panikçiler ve oyuncunun çok geride bıraktıkları silinir; yoksa
        // "canlı" sayılmaya devam edip yeni düşman doğmasını tıkarlar.
        const off = Math.abs(e.x - this.camX) - this.viewW / 2;
        if ((e.state === 'panic' && off > 300) || off > 900) { e.rag.removed = true; continue; }
        keep.push(e);
        continue;
      }
      const age = now - e.deathT;
      if (age > CORPSE_LIFE) e.rag.alpha = Math.max(0, 1 - (age - CORPSE_LIFE) / 1.2);
      if (age > CORPSE_LIFE + 1.2 || far) { e.rag.removed = true; continue; }
      keep.push(e);
    }
    this.enemies = keep;
    this.spears = this.spears.filter((sp) => sp.alpha > 0 && Math.abs(sp.x - this.camX) < this.viewW + 800);
  }

  updateCamera(dt) {
    const pl = this.player;
    const tx = pl.dead ? pl.rag.pts[J.PELVIS].x : pl.x + pl.facing * 45 + pl.vx * 0.12;
    this.camX += (tx - this.camX) * damp(pl.dead ? 2.5 : 5, dt);
  }

  // ---------- çizim ----------

  render() {
    const ctx = this.ctx, W = this.W, H = this.H, dpr = this.dpr, s = this.scale;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const sx = (Math.random() - 0.5) * 2 * this.shakeAmt, sy = (Math.random() - 0.5) * 2 * this.shakeAmt;
    drawSky(ctx, W, H, this.groundSY + sy, this.camX, s);

    ctx.setTransform(s * dpr, 0, 0, s * dpr, (W / 2 - this.camX * s + sx) * dpr, (this.groundSY + sy) * dpr);
    const left = this.camX - this.viewW / 2, right = this.camX + this.viewW / 2;
    drawGround(ctx, left, right, (H - this.groundSY) / s + 30);
    this.fx.drawDecals(ctx, left, right);
    for (const e of this.enemies) if (!e.alive) e.draw(ctx);
    if (this.player.dead) this.player.draw(ctx);
    for (const e of this.enemies) if (e.alive) e.draw(ctx);
    for (const sp of this.spears) sp.draw(ctx);
    if (!this.player.dead) this.player.draw(ctx);
    this.player.drawTrail(ctx);
    this.fx.drawParticles(ctx);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.drawPopups(ctx);
    this.drawHUD(ctx);
  }

  drawPopups(ctx) {
    const k = clamp(this.scale, 0.9, 1.6);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    for (const p of this.fx.popups) {
      const q = this.worldToScreen(p.x, p.y);
      const pop = 1 + 0.6 * Math.max(0, 1 - p.age / 0.1);
      const a = 1 - Math.max(0, (p.age / p.life - 0.7) / 0.3);
      const size = Math.round(p.size * k * pop);
      ctx.globalAlpha = a;
      ctx.font = `900 ${size}px ${FONT}`;
      ctx.lineWidth = Math.max(3, size * 0.2);
      ctx.strokeStyle = '#1c0d0d';
      ctx.strokeText(p.text, q.x, q.y);
      ctx.fillStyle = p.col;
      ctx.fillText(p.text, q.x, q.y);
    }
    ctx.globalAlpha = 1;
  }

  drawHUD(ctx) {
    const W = this.W, H = this.H, pl = this.player;
    const u = clamp(Math.min(W, H) / 420, 0.8, 1.5);
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#2a1616';
    ctx.font = `900 ${Math.round(34 * u)}px ${FONT}`;
    ctx.fillText(String(this.score), 16 * u, 12 * u);
    ctx.font = `700 ${Math.round(13 * u)}px ${FONT}`;
    ctx.fillStyle = 'rgba(42,22,22,0.75)';
    ctx.fillText(`LEŞ ${this.kills}   ·   REKOR ${Math.max(this.best, this.score)}`, 17 * u, 50 * u);

    for (let i = 0; i < pl.maxHp; i++) {
      drawHeart(ctx, W - (22 + i * 30) * u, 26 * u, 11 * u, i < pl.hp ? '#d7263d' : 'rgba(42,22,22,0.25)');
    }

    if (this.combo >= 2) {
      const k = 1 + this.comboPop * 0.35;
      ctx.textAlign = 'center';
      ctx.font = `900 ${Math.round(26 * u * k)}px ${FONT}`;
      ctx.lineWidth = 5 * u;
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#2a1616';
      ctx.strokeText(`${this.combo}x KOMBO`, W / 2, 14 * u);
      ctx.fillStyle = '#ffd23f';
      ctx.fillText(`${this.combo}x KOMBO`, W / 2, 14 * u);
      ctx.fillStyle = 'rgba(42,22,22,0.35)';
      ctx.fillRect(W / 2 - 50 * u, 48 * u, 100 * u, 4 * u);
      ctx.fillStyle = '#ffd23f';
      ctx.fillRect(W / 2 - 50 * u, 48 * u, 100 * u * clamp(this.comboT / 2.6, 0, 1), 4 * u);
    }

    if (this.input.touchMode) this.drawTouchUI(ctx, u);
    else if (this.hintT > 0) {
      ctx.globalAlpha = clamp(this.hintT, 0, 1) * 0.85;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.font = `700 ${Math.round(14 * u)}px ${FONT}`;
      ctx.fillStyle = '#fff6ea';
      ctx.fillText('A/D koş  ·  W/Boşluk zıpla (2x takla)  ·  Tık veya J kes (fareye doğru)  ·  K yukarı kes  ·  M ses', W / 2, H - 14 * u);
      ctx.globalAlpha = 1;
    }

    if (this.flash > 0) {
      const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.3, W / 2, H / 2, Math.max(W, H) * 0.75);
      g.addColorStop(0, 'rgba(200,0,20,0)');
      g.addColorStop(1, `rgba(200,0,20,${(this.flash * 0.9).toFixed(3)})`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }

    if (pl.dead && this.deadT > 0.6) this.drawDeath(ctx, u);
  }

  drawDeath(ctx, u) {
    const W = this.W, H = this.H;
    const a = clamp((this.deadT - 0.6) * 3, 0, 1);
    ctx.globalAlpha = a;
    ctx.fillStyle = 'rgba(30,10,10,0.35)';
    ctx.fillRect(0, 0, W, H);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    ctx.font = `900 ${Math.round(64 * u)}px ${FONT}`;
    ctx.lineWidth = 8 * u;
    ctx.strokeStyle = '#1c0d0d';
    ctx.strokeText('ÖLDÜN', W / 2, H * 0.34);
    ctx.fillStyle = '#e8273d';
    ctx.fillText('ÖLDÜN', W / 2, H * 0.34);
    ctx.fillStyle = '#fff6ea';
    ctx.font = `700 ${Math.round(18 * u)}px ${FONT}`;
    ctx.fillText(this.quip, W / 2, H * 0.34 + 48 * u);
    ctx.font = `800 ${Math.round(22 * u)}px ${FONT}`;
    ctx.fillText(`Skor ${this.score}   ·   Rekor ${this.best}`, W / 2, H * 0.34 + 84 * u);
    if (this.deadT > 1.0) {
      ctx.globalAlpha = a * (0.55 + 0.45 * Math.sin(this.realTime * 5));
      ctx.font = `700 ${Math.round(15 * u)}px ${FONT}`;
      ctx.fillText(this.input.touchMode ? 'Tekrar için dokun' : 'Tekrar için bir tuşa bas', W / 2, H * 0.34 + 120 * u);
    }
    ctx.globalAlpha = 1;
  }

  drawTouchUI(ctx, u) {
    const st = this.input.stick, jb = this.input.jumpBtn, H = this.H, W = this.W;
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = '#fff6ea';
    ctx.fillStyle = '#fff6ea';
    ctx.lineWidth = 3;
    const bx = st.id !== null ? st.ox : 80 * u, by = st.id !== null ? st.oy : H - 80 * u;
    ctx.beginPath(); ctx.arc(bx, by, 44 * u, 0, TAU); ctx.stroke();
    let kx = bx, ky = by;
    if (st.id !== null) {
      const dx = st.x - st.ox, dy = st.y - st.oy, l = Math.hypot(dx, dy), m = Math.min(l, 44 * u) / (l || 1);
      kx = bx + dx * m; ky = by + dy * m;
    }
    ctx.beginPath(); ctx.arc(kx, ky, 20 * u, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(jb.x, jb.y, jb.r, 0, TAU); ctx.stroke();
    ctx.globalAlpha = 0.6;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `800 ${Math.round(jb.r * 0.42)}px ${FONT}`;
    ctx.fillText('ZIPLA', jb.x, jb.y);
    if (this.hintT > 0) {
      ctx.globalAlpha = clamp(this.hintT, 0, 1) * 0.85;
      ctx.font = `700 ${Math.round(13 * u)}px ${FONT}`;
      const x = H > W ? W / 2 : W * 0.7, y = H > W ? H * 0.3 : H * 0.45;
      ctx.fillText('sağ taraf: dokun = kes', x, y);
      ctx.fillText('kaydır = o yöne kes', x, y + 18 * u);
      ctx.fillText('sol taraf: sürükle = koş', x, y + 36 * u);
    }
    ctx.globalAlpha = 1;
  }
}

function drawHeart(ctx, x, y, r, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.moveTo(x, y + r * 0.9);
  ctx.bezierCurveTo(x - r * 1.6, y - r * 0.1, x - r * 0.8, y - r * 1.3, x, y - r * 0.45);
  ctx.bezierCurveTo(x + r * 0.8, y - r * 1.3, x + r * 1.6, y - r * 0.1, x, y + r * 0.9);
  ctx.fill();
}

// ---------- başlat: menü yok, doğrudan oyun ----------
const game = new Game(document.getElementById('game'));
window.game = game;
let lastFrame = performance.now();
function loop(now) {
  const dt = Math.min(0.05, Math.max(0, (now - lastFrame) / 1000));
  lastFrame = now;
  game.frame(dt);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
