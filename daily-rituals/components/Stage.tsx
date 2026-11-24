"use client";
import { useEffect } from "react";

/**
 * Real 3D depth for photos, no WebGL:
 * - [data-stage] is a 3D scene. Its children with data-z sit at different depths (translateZ),
 *   and the whole scene turns toward the cursor, so the photos separate like layers.
 *   On touch screens the scene turns with scroll instead.
 * - data-rot adds a fixed rotation after the depth (e.g. "rotate(-6deg)").
 * - [data-depth] elements drift with scroll at their own speed (parallax float).
 * Everything eases with a spring-like lerp. Nothing runs with reduced motion.
 */
export default function Stage() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const fine = window.matchMedia("(pointer: fine)").matches;

    type S = { el: HTMLElement; tx: number; ty: number; x: number; y: number };
    let stages: S[] = [];
    let layers: { el: HTMLElement; cur: number }[] = [];
    // (re)collect stages; called again when a page swaps content in (e.g. the hero-style switcher)
    const scan = () => {
      stages = Array.from(document.querySelectorAll<HTMLElement>("[data-stage]")).map((el) => {
        el.querySelectorAll<HTMLElement>("[data-z]").forEach((c) => {
          c.style.transform = `translateZ(${c.dataset.z}px)${c.dataset.rot ? ` ${c.dataset.rot}` : ""}`;
        });
        return { el, tx: 0, ty: 0, x: 0, y: 0 };
      });
      layers = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]")).map((el) => ({ el, cur: 0 }));
    };
    scan();
    window.addEventListener("stage:scan", scan);

    const onMove = (e: PointerEvent) => {
      for (const s of stages) {
        const r = s.el.getBoundingClientRect();
        const inside = e.clientX > r.left - 120 && e.clientX < r.right + 120 && e.clientY > r.top - 120 && e.clientY < r.bottom + 120;
        if (!inside) { s.tx = 0; s.ty = 0; continue; }
        s.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        s.ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      }
    };
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    const tick = () => {
      const vh = window.innerHeight;
      for (const s of stages) {
        const r = s.el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) continue;
        if (!fine) {
          // phones: tilt follows the photo's position on screen as you scroll
          s.ty = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / (vh / 2)));
          s.tx = s.ty * -0.35;
        }
        s.x += (s.tx - s.x) * 0.08;
        s.y += (s.ty - s.y) * 0.08;
        const max = Number(s.el.dataset.stage || 12);
        s.el.style.transform = `rotateY(${(s.x * max).toFixed(2)}deg) rotateX(${(-s.y * max * 0.75).toFixed(2)}deg)`;
      }
      for (const l of layers) {
        const p = l.el.parentElement!.getBoundingClientRect();
        if (p.bottom < -200 || p.top > vh + 200) continue;
        const target = (p.top + p.height / 2 - vh / 2) * parseFloat(l.el.dataset.depth || "0");
        l.cur += (target - l.cur) * 0.12;
        l.el.style.translate = `0 ${l.cur.toFixed(1)}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onMove); window.removeEventListener("stage:scan", scan); };
  }, []);
  return null;
}
