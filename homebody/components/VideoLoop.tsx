"use client";
import { useEffect, useRef } from "react";

/** Muted process clip: loads only when it scrolls into view, never plays with reduced motion (poster stays). */
export default function VideoLoop({ src, poster, label, className = "" }: { src: string; poster: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { if (!v.src) v.src = src; v.play().catch(() => {}); } else v.pause();
    }, { rootMargin: "200px" });
    io.observe(v);
    return () => io.disconnect();
  }, [src]);
  return <video ref={ref} poster={poster} muted loop playsInline preload="none" aria-label={label} className={className} />;
}
