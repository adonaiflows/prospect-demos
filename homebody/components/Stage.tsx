"use client";
import { useEffect } from "react";

/**
 * Real 3D depth for photos, no WebGL and no decorative motion:
 * - [data-stage] is a 3D scene. Its layers sit at different depths via z() from lib/z.ts
 *   (translateZ plus an optional fixed rotation). That depth is always there, on every device.
 * - On desktop only, the scene turns a few degrees toward the cursor so the layers separate.
 *   Nothing moves by itself, nothing moves on phones, and nothing moves with reduced motion.
 */
export default function Stage() {
  useEffect(() => {
    type S = { el: HTMLElement; tx: number; ty: number; x: number; y: number };
    let stages: S[] = [];
    const scan = () => {
      // layer depth is set in the markup (lib/z.ts) so it renders before any JS runs
      stages = Array.from(document.querySelectorAll<HTMLElement>("[data-stage]")).map((el) => {
        el.style.transform = "";
        return { el, tx: 0, ty: 0, x: 0, y: 0 };
      });
    };
    scan();
    window.addEventListener("stage:scan", scan);

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches;
    if (still) return () => window.removeEventListener("stage:scan", scan);

    let raf = 0;
    const tick = () => {
      raf = 0;
      let moving = false;
      for (const s of stages) {
        s.x += (s.tx - s.x) * 0.1;
        s.y += (s.ty - s.y) * 0.1;
        if (Math.abs(s.tx - s.x) > 0.002 || Math.abs(s.ty - s.y) > 0.002) moving = true;
        const max = Number(s.el.dataset.stage || 10);
        s.el.style.transform = `rotateY(${(s.x * max).toFixed(2)}deg) rotateX(${(-s.y * max * 0.7).toFixed(2)}deg)`;
      }
      if (moving) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      for (const s of stages) {
        const r = s.el.getBoundingClientRect();
        const inside = e.clientX > r.left - 100 && e.clientX < r.right + 100 && e.clientY > r.top - 100 && e.clientY < r.bottom + 100;
        s.tx = inside ? ((e.clientX - r.left) / r.width - 0.5) * 2 : 0;
        s.ty = inside ? ((e.clientY - r.top) / r.height - 0.5) * 2 : 0;
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onMove); window.removeEventListener("stage:scan", scan); };
  }, []);
  return null;
}
