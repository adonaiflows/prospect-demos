"use client";
import { useEffect } from "react";

/**
 * Adds depth without WebGL:
 * - [data-depth="0.2"] elements drift with scroll (positive = slower than the page, so they feel further away).
 * - .tilt elements lean toward the pointer in 3D.
 * Both are skipped for reduced motion and on coarse pointers (tilt only).
 */
export default function Depth() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of layers) {
        const r = el.parentElement!.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const d = parseFloat(el.dataset.depth || "0");
        const offset = (r.top + r.height / 2 - vh / 2) * d;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const fine = window.matchMedia("(pointer: fine)").matches;
    const tilts = fine ? Array.from(document.querySelectorAll<HTMLElement>(".tilt")) : [];
    const handlers = tilts.map((el) => {
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(-y * 10).toFixed(2)}deg) translateZ(0)`;
        el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
        el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
      };
      const leave = () => { el.style.transform = ""; };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      return () => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); };
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      handlers.forEach((h) => h());
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
