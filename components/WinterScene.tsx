"use client";

import { useEffect, useRef } from "react";

// Site-wide winter atmosphere: night sky, stars, faint aurora,
// mountains + pine forest in mist, and layered snowfall with wind.
// Background layers sit behind the cards; a few near flakes fall in front.

type Flake = {
  x: number;
  y: number;
  size: number;
  speed: number;
  sway: number;
  phase: number;
  alpha: number;
  depth: number; // 0 = far, 1 = near
  front: boolean; // drawn over the content
};

// Deterministic RNG so server and client render identical SVG paths
function seeded(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function mountainPath(seed: number, base: number, amp: number, w = 1600, h = 400) {
  const rand = seeded(seed);
  let d = `M0 ${h} L0 ${base}`;
  const steps = 14;
  for (let i = 1; i <= steps; i++) {
    const x = (w / steps) * i;
    const y = base - rand() * amp;
    const mx = x - w / steps / 2;
    const my = base - amp * (0.2 + rand() * 0.9);
    d += ` L${mx.toFixed(0)} ${my.toFixed(0)} L${x.toFixed(0)} ${y.toFixed(0)}`;
  }
  return d + ` L${w} ${h} Z`;
}

function forestPath(seed: number, baseY: number, minH: number, maxH: number, w = 1600, h = 400) {
  const rand = seeded(seed);
  let d = "";
  let x = -20;
  while (x < w + 20) {
    const th = minH + rand() * (maxH - minH);
    const tw = th * (0.32 + rand() * 0.1);
    const tiers = 4;
    // Stacked triangles make a pine silhouette
    for (let t = 0; t < tiers; t++) {
      const top = baseY - th + (th / tiers) * t * 0.85;
      const bottom = top + (th / tiers) * 1.5;
      const half = (tw / 2) * ((t + 1.4) / (tiers + 0.4));
      d += `M${(x - half).toFixed(1)} ${bottom.toFixed(1)} L${x.toFixed(1)} ${top.toFixed(1)} L${(x + half).toFixed(1)} ${bottom.toFixed(1)} Z `;
    }
    d += `M${(x - 2).toFixed(1)} ${baseY} h4 v-8 h-4 Z `;
    x += tw * (0.45 + rand() * 0.6);
  }
  d += `M0 ${baseY - 2} L${w} ${baseY - 2} L${w} ${h} L0 ${h} Z`;
  return d;
}

const FAR_MOUNTAINS = mountainPath(7, 300, 170);
const NEAR_MOUNTAINS = mountainPath(21, 330, 120);
const FAR_FOREST = forestPath(42, 360, 40, 80);
const NEAR_FOREST = forestPath(97, 392, 70, 130);

const STARS = (() => {
  const rand = seeded(3);
  return Array.from({ length: 90 }, () => ({
    x: rand() * 100,
    y: rand() * 55,
    s: rand() * 1.4 + 0.4,
    o: rand() * 0.6 + 0.2,
    d: rand() * 6,
  }));
})();

export default function WinterScene() {
  const backRef = useRef<HTMLCanvasElement>(null);
  const frontRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const back = backRef.current;
    const front = frontRef.current;
    const bctx = back?.getContext("2d");
    const fctx = front?.getContext("2d");
    if (!back || !front || !bctx || !fctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Soft round sprite: looks like a real flake, not a hard dot
    const sprite = document.createElement("canvas");
    sprite.width = sprite.height = 64;
    const sctx = sprite.getContext("2d")!;
    const g = sctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.35, "rgba(240,247,255,0.85)");
    g.addColorStop(1, "rgba(220,235,255,0)");
    sctx.fillStyle = g;
    sctx.fillRect(0, 0, 64, 64);

    let width = 0;
    let height = 0;
    let flakes: Flake[] = [];
    let frame = 0;

    const makeFlake = (randomY: boolean): Flake => {
      const roll = Math.random();
      // ~70% far, ~25% mid, ~5% near bokeh
      const depth = roll < 0.7 ? Math.random() * 0.35 : roll < 0.95 ? 0.35 + Math.random() * 0.35 : 0.75 + Math.random() * 0.25;
      const size = 1.5 + depth * depth * 16;
      return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : -size * 2,
        size,
        speed: 0.25 + depth * 1.4 + Math.random() * 0.2,
        sway: 0.2 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        alpha: depth > 0.75 ? 0.18 + Math.random() * 0.12 : 0.35 + depth * 0.5,
        depth,
        // Only some mid/near flakes cross over the content, to keep text readable
        front: depth > 0.45 && Math.random() < 0.5,
      };
    };

    const setup = (c: HTMLCanvasElement, ctx: CanvasRenderingContext2D, dpr: number) => {
      c.width = width * dpr;
      c.height = height * dpr;
      c.style.width = `${width}px`;
      c.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      setup(back, bctx, dpr);
      setup(front, fctx, dpr);
      const count = Math.round(Math.min(260, (width * height) / 6000));
      flakes = Array.from({ length: count }, () => makeFlake(true));
    };

    const draw = () => {
      bctx.clearRect(0, 0, width, height);
      fctx.clearRect(0, 0, width, height);
      for (const f of flakes) {
        const ctx = f.front ? fctx : bctx;
        ctx.globalAlpha = f.alpha;
        ctx.drawImage(sprite, f.x - f.size / 2, f.y - f.size / 2, f.size, f.size);
      }
      bctx.globalAlpha = 1;
      fctx.globalAlpha = 1;
    };

    const start = performance.now();
    const tick = (now: number) => {
      const t = now - start;
      // Slowly shifting breeze with occasional gusts
      const wind =
        Math.sin(t * 0.00023) * 0.5 +
        Math.sin(t * 0.00071 + 1.3) * 0.25 +
        Math.max(0, Math.sin(t * 0.00013)) ** 8 * 1.6;

      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        f.phase += 0.008 + f.depth * 0.01;
        f.y += f.speed;
        f.x += wind * (0.3 + f.depth) + Math.sin(f.phase) * f.sway * 0.4;
        if (f.x > width + 20) f.x = -20;
        else if (f.x < -20) f.x = width + 20;
        if (f.y > height + f.size) flakes[i] = makeFlake(false);
      }
      draw();
      frame = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduceMotion) draw();
    else frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div aria-hidden className="winter-backdrop pointer-events-none fixed inset-0 z-[-2] overflow-hidden">
        {/* Night sky */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#05070d_0%,#0a1020_45%,#101a2c_75%,#0c1220_100%)]" />

        {/* Stars */}
        <div className="absolute inset-0">
          {STARS.map((s, i) => (
            <span
              key={i}
              className="winter-star absolute rounded-full bg-white"
              style={
                {
                  left: `${s.x}%`,
                  top: `${s.y}%`,
                  width: s.s,
                  height: s.s,
                  opacity: s.o,
                  "--o": s.o,
                  animationDelay: `${s.d}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        {/* Faint aurora */}
        <div className="winter-aurora absolute -top-[10%] left-[10%] h-[45vh] w-[80vw] rounded-[50%] bg-[radial-gradient(closest-side,rgb(90_220_190/0.14),rgb(80_150_255/0.06)_60%,transparent)] blur-3xl" />
        <div className="winter-aurora-2 absolute top-[2%] right-[-10%] h-[35vh] w-[55vw] rounded-[50%] bg-[radial-gradient(closest-side,rgb(140_120_255/0.10),transparent)] blur-3xl" />

        {/* Moon glow */}
        <div className="absolute top-[8%] right-[12%] h-16 w-16 rounded-full bg-[#eef4ff] opacity-80 shadow-[0_0_60px_25px_rgb(190_215_255/0.18),0_0_160px_80px_rgb(150_190_255/0.08)]" />

        {/* Mountains + forest */}
        <svg
          className="absolute inset-x-0 bottom-0 h-[42vh] w-full"
          viewBox="0 0 1600 400"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="farMtn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a4d6e" />
              <stop offset="100%" stopColor="#1a2438" />
            </linearGradient>
            <linearGradient id="nearMtn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2b3a56" />
              <stop offset="100%" stopColor="#141c2c" />
            </linearGradient>
            <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8dcff" stopOpacity="0" />
              <stop offset="100%" stopColor="#c8dcff" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <path d={FAR_MOUNTAINS} fill="url(#farMtn)" opacity="0.55" />
          <path d={NEAR_MOUNTAINS} fill="url(#nearMtn)" opacity="0.75" />
          <rect x="0" y="230" width="1600" height="170" fill="url(#mist)" />
          <path d={FAR_FOREST} fill="#111a2a" opacity="0.9" />
          <rect x="0" y="300" width="1600" height="100" fill="url(#mist)" />
          <path d={NEAR_FOREST} fill="#0a101b" />
          {/* Snowbank */}
          <path
            d="M0 385 Q200 372 400 382 T800 380 T1200 383 T1600 378 L1600 400 L0 400 Z"
            fill="#dbe8ff"
            opacity="0.10"
          />
        </svg>

        {/* Drifting ground fog */}
        <div className="winter-fog absolute inset-x-[-20%] bottom-[-4vh] h-[22vh] bg-[radial-gradient(ellipse_at_center,rgb(200_220_255/0.10),transparent_70%)] blur-2xl" />
      </div>

      <canvas ref={backRef} aria-hidden className="pointer-events-none fixed inset-0 z-[-2]" />
      <canvas ref={frontRef} aria-hidden className="pointer-events-none fixed inset-0 z-40" />
    </>
  );
}
