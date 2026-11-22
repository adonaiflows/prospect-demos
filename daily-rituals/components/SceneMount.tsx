"use client";
import { useEffect, useRef, useState, type ComponentType } from "react";

/**
 * Shows a static poster first, then mounts the lazy 3D scene only when:
 * the block is near the viewport, the device isn't asking for reduced motion,
 * and WebGL is available. The scene receives `active` so it can stop rendering off-screen.
 */
export default function SceneMount({
  load,
  poster,
  alt,
  className = "",
}: {
  load: () => Promise<{ default: ComponentType<{ active: boolean }> }>;
  poster?: string;
  alt?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [Scene, setScene] = useState<ComponentType<{ active: boolean }> | null>(null);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);
  // Wait for the first sign of a person (move, touch, scroll, key) so the 3D never competes with first paint.
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const evts = ["pointermove", "pointerdown", "touchstart", "scroll", "wheel", "keydown"] as const;
    const arm = () => { setArmed(true); evts.forEach((e) => window.removeEventListener(e, arm)); };
    evts.forEach((e) => window.addEventListener(e, arm, { passive: true, once: true }));
    return () => evts.forEach((e) => window.removeEventListener(e, arm));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let gl = false;
    try { gl = !!document.createElement("canvas").getContext("webgl2"); } catch { gl = false; }
    if (!armed || reduced || !gl) return;
    const io = new IntersectionObserver(([e]) => {
      setActive(e.isIntersecting);
      if (e.isIntersecting && !Scene) {
        const start = () => load().then((m) => setScene(() => m.default));
        if ("requestIdleCallback" in window) (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(start);
        else setTimeout(start, 200);
      }
    }, { rootMargin: "200px" });
    io.observe(el);
    return () => io.disconnect();
  }, [load, Scene, armed]);

  useEffect(() => { if (Scene) { const t = setTimeout(() => setReady(true), 400); return () => clearTimeout(t); } }, [Scene]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt={alt ?? ""} fetchPriority="high" decoding="async" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-0" : "opacity-100"}`} />
      )}
      {Scene && <div className={`absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`} aria-hidden><Scene active={active} /></div>}
    </div>
  );
}
