"use client";
import { useEffect } from "react";

/** Adds .is-in to .reveal elements as they enter the viewport. Content stays visible without JS via <noscript> style. */
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -10% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return <noscript><style>{`.reveal{opacity:1!important;transform:none!important}`}</style></noscript>;
}
