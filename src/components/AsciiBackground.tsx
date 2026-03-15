"use client";

import { useEffect, useRef, useCallback } from "react";

/*
 * ASCII Dithering Shader Background
 * ----------------------------------
 * Renders a flowing ASCII wave-field with a rotating morphing
 * geometric crystal. Pure Canvas 2D, zero dependencies.
 *
 * Responsive: adapts cell size & projection to viewport width.
 * Frame-capped at ~28 fps for performance.
 */

const RAMP = " .·:;+*?%S#@█";

// Simple pseudo-noise for the wave field
function noise(x: number, y: number, t: number): number {
  const v1 = Math.sin(x * 0.8 + t * 0.6) * Math.cos(y * 0.6 - t * 0.4);
  const v2 = Math.sin((x + y) * 0.5 + t * 0.3) * 0.5;
  const v3 = Math.cos(x * 1.2 - t * 0.5) * Math.sin(y * 0.9 + t * 0.7) * 0.4;
  const v4 = Math.sin(x * 0.3 + y * 0.7 + t * 0.2) * 0.3;
  return (v1 + v2 + v3 + v4) * 0.5;
}

// Icosahedron-ish vertices for the crystal shape
function createCrystalVerts(): [number, number, number][] {
  const phi = (1 + Math.sqrt(5)) / 2;
  const verts: [number, number, number][] = [
    [-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0], [ 1, -phi, 0],
    [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
    [ phi, 0, -1], [ phi, 0,  1], [-phi, 0, -1], [-phi, 0,  1],
  ];
  // Normalize to unit sphere
  const len = Math.sqrt(1 + phi * phi);
  return verts.map(([x, y, z]) => [x / len, y / len, z / len]);
}

// Icosahedron faces (triangles)
const FACES = [
  [0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],
  [1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],
  [3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],
  [4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1],
];

const BASE_VERTS = createCrystalVerts();

export default function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef  = useRef<number>(0);
  const clockRef  = useRef<number>(0);
  const prevRef   = useRef<number>(0);

  const draw = useCallback(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d", { alpha: true });
    if (!ctx) return;

    const now = performance.now();
    const dt  = now - prevRef.current;

    // ~28 fps
    if (dt < 35) {
      frameRef.current = requestAnimationFrame(draw);
      return;
    }
    prevRef.current = now;
    clockRef.current += dt * 0.001;

    const t = clockRef.current;
    const W = cvs.width;
    const H = cvs.height;

    // ── Responsive cell sizing ───────────────────────
    const isMobile = W < 640;
    const isTablet = W >= 640 && W < 1024;
    const cell = isMobile ? 10 : isTablet ? 11 : 12;
    const cols = Math.ceil(W / cell);
    const rows = Math.ceil(H / cell);
    const total = cols * rows;

    const zBuf   = new Float32Array(total).fill(-1e9);
    const lumBuf = new Float32Array(total);
    const typBuf = new Uint8Array(total); // 0=empty, 1=wave, 2=crystal, 3=trail

    // ── 1. Flowing Wave Field ────────────────────────
    // Creates an ambient ASCII texture across the background
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Normalized coords
        const nx = (c / cols) * 6 - 3;
        const ny = (r / rows) * 4 - 2;

        const n = noise(nx, ny, t);

        // Distance from center for vignette
        const dx = (c / cols - 0.52);
        const dy = (r / rows - 0.48);
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Vignette: fade at edges, strongest in center
        const vignette = Math.max(0, 1 - dist * 1.6);

        // Only show characters where noise is high enough (creates organic patches)
        const threshold = 0.15;
        if (Math.abs(n) > threshold && vignette > 0.1) {
          const idx = r * cols + c;
          const lum = (Math.abs(n) - threshold) / (1 - threshold);
          lumBuf[idx] = lum * vignette;
          typBuf[idx] = 1;
          zBuf[idx] = -0.5;  // behind crystal
        }
      }
    }

    // ── 2. Rotating Crystal (Icosahedron) ────────────
    const rotX = t * 0.5;
    const rotY = t * 0.35;
    const rotZ = t * 0.2;

    const sx1 = Math.sin(rotX), cx1 = Math.cos(rotX);
    const sy1 = Math.sin(rotY), cy1 = Math.cos(rotY);
    const sz1 = Math.sin(rotZ), cz1 = Math.cos(rotZ);

    // Morphing: gently pulse the crystal
    const morph = 1 + Math.sin(t * 0.8) * 0.15;

    const projScale = isMobile
      ? Math.min(cols, rows) * 0.32
      : Math.min(cols, rows) * 0.36;
    const crystalScale = (isMobile ? 0.9 : 1.2) * morph;
    const cx = cols * (isMobile ? 0.5 : 0.52);
    const cy = rows * (isMobile ? 0.42 : 0.46);
    const camDist = 2.8;

    // Transform and project vertices
    const projected: { x: number; y: number; z: number }[] = [];

    for (const [vx, vy, vz] of BASE_VERTS) {
      let x = vx * crystalScale;
      let y = vy * crystalScale;
      let z = vz * crystalScale;

      // Rotate X
      let y1 = y * cx1 - z * sx1;
      let z1 = y * sx1 + z * cx1;
      // Rotate Y
      let x2 = x * cy1 + z1 * sy1;
      let z2 = -x * sy1 + z1 * cy1;
      // Rotate Z
      let x3 = x2 * cz1 - y1 * sz1;
      let y3 = x2 * sz1 + y1 * cz1;

      projected.push({ x: x3, y: y3, z: z2 });
    }

    // Draw crystal edges with characters
    const drawEdge = (p1: typeof projected[0], p2: typeof projected[0]) => {
      const steps = isMobile ? 20 : 35;
      for (let s = 0; s <= steps; s++) {
        const frac = s / steps;
        const x = p1.x + (p2.x - p1.x) * frac;
        const y = p1.y + (p2.y - p1.y) * frac;
        const z = p1.z + (p2.z - p1.z) * frac;

        const ooz = 1 / (z + camDist);
        const xi = ~~(cx + projScale * ooz * x);
        const yi = ~~(cy - projScale * ooz * y);

        if (xi < 0 || xi >= cols || yi < 0 || yi >= rows) continue;
        const idx = yi * cols + xi;

        if (ooz > zBuf[idx]) {
          zBuf[idx] = ooz;
          // Luminance from position on edge + flicker
          const edgeLum = 0.5 + Math.sin(frac * 6.28 + t * 2) * 0.3 + 0.2;
          lumBuf[idx] = Math.min(1, edgeLum);
          typBuf[idx] = 2;
        }
      }
    };

    // Draw all icosahedron edges (from face adjacency)
    const edgeSet = new Set<string>();
    for (const face of FACES) {
      for (let i = 0; i < 3; i++) {
        const a = face[i], b = face[(i + 1) % 3];
        const key = `${Math.min(a, b)}-${Math.max(a, b)}`;
        if (!edgeSet.has(key)) {
          edgeSet.add(key);
          drawEdge(projected[a], projected[b]);
        }
      }
    }

    // Fill crystal faces with dithered characters
    for (const face of FACES) {
      const [a, b, c] = face;
      const pa = projected[a], pb = projected[b], pc = projected[c];

      // Face normal for backface culling and lighting
      const abx = pb.x - pa.x, aby = pb.y - pa.y, abz = pb.z - pa.z;
      const acx = pc.x - pa.x, acy = pc.y - pa.y, acz = pc.z - pa.z;
      const fnx = aby * acz - abz * acy;
      const fny = abz * acx - abx * acz;
      const fnz = abx * acy - aby * acx;

      // Backface culling
      const centerZ = (pa.z + pb.z + pc.z) / 3;
      if (fnz < 0) continue;

      // Lighting
      const fnLen = Math.sqrt(fnx * fnx + fny * fny + fnz * fnz) || 1;
      const lx = 0.5, ly = 0.6, lz = 0.7;
      const dot = Math.max(0, (fnx * lx + fny * ly + fnz * lz) / fnLen);
      const faceLum = dot * 0.7 + 0.2;

      // Rasterize triangle with sparse sampling for dithered look
      const fillSteps = isMobile ? 8 : 12;
      for (let u = 0; u <= fillSteps; u++) {
        for (let v = 0; v <= fillSteps - u; v++) {
          const w = fillSteps - u - v;
          const fu = u / fillSteps, fv = v / fillSteps, fw = w / fillSteps;

          const x = pa.x * fu + pb.x * fv + pc.x * fw;
          const y = pa.y * fu + pb.y * fv + pc.y * fw;
          const z = pa.z * fu + pb.z * fv + pc.z * fw;

          const ooz = 1 / (z + camDist);
          const xi = ~~(cx + projScale * ooz * x);
          const yi = ~~(cy - projScale * ooz * y);

          if (xi < 0 || xi >= cols || yi < 0 || yi >= rows) continue;
          const idx = yi * cols + xi;

          if (ooz > zBuf[idx]) {
            zBuf[idx] = ooz;
            lumBuf[idx] = faceLum;
            typBuf[idx] = 2;
          }
        }
      }
    }

    // ── 3. Orbiting particle trails ──────────────────
    const numTrails = 3;
    for (let tr = 0; tr < numTrails; tr++) {
      const phase = (tr / numTrails) * 6.2832;
      const trailLen = 40;
      for (let s = 0; s < trailLen; s++) {
        const tt = t - s * 0.04;
        const radius = 1.6 + Math.sin(tt * 0.3 + phase) * 0.3;
        const px = Math.cos(tt * 0.7 + phase) * radius;
        const py = Math.sin(tt * 0.5 + phase) * 0.6;
        const pz = Math.sin(tt * 0.7 + phase) * radius * 0.5;

        const ooz = 1 / (pz + camDist);
        const xi = ~~(cx + projScale * ooz * px);
        const yi = ~~(cy - projScale * ooz * py);

        if (xi < 0 || xi >= cols || yi < 0 || yi >= rows) continue;
        const idx = yi * cols + xi;

        const trailFade = 1 - (s / trailLen);
        if (ooz > zBuf[idx] - 0.1) {
          zBuf[idx] = ooz;
          lumBuf[idx] = trailFade * 0.8 + 0.1;
          typBuf[idx] = 3;
        }
      }
    }

    // ── Render ───────────────────────────────────────
    ctx.clearRect(0, 0, W, H);

    const fontSize = cell + 1;
    ctx.font = `${fontSize}px "SF Mono","Fira Code","Cascadia Code","Consolas",monospace`;
    ctx.textBaseline = "top";

    const rampLen = RAMP.length;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const typ = typBuf[idx];
        if (!typ) continue;

        const lum = lumBuf[idx];
        const ci  = Math.min(rampLen - 1, ~~(lum * (rampLen - 1)));
        const ch  = RAMP[ci];
        if (ch === " ") continue;

        let alpha: number;
        let color: string;

        switch (typ) {
          case 1: // Wave field — dark muted green
            alpha = 0.08 + lum * 0.2;
            color = `rgba(45,65,45,${alpha.toFixed(2)})`;
            break;
          case 2: // Crystal — dark charcoal with lime accent
            alpha = 0.4 + lum * 0.5;
            color = `rgba(35,50,35,${alpha.toFixed(2)})`;
            break;
          case 3: // Trails — brand lime, punchy
            alpha = 0.3 + lum * 0.55;
            color = `rgba(80,130,10,${alpha.toFixed(2)})`;
            break;
          default:
            continue;
        }

        ctx.fillStyle = color;
        ctx.fillText(ch, c * cell, r * cell);
      }
    }

    frameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;

    const resize = () => {
      const r = cvs.getBoundingClientRect();
      cvs.width  = r.width;
      cvs.height = r.height;
    };

    resize();
    window.addEventListener("resize", resize);
    prevRef.current = performance.now();
    frameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        maskImage:
          "radial-gradient(ellipse 95% 90% at 52% 46%, black 20%, transparent 70%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 95% 90% at 52% 46%, black 20%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
