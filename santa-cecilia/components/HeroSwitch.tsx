"use client";
import { useEffect, useState } from "react";

type Option = { id: string; label: string; node: React.ReactNode };

/**
 * Demo-only: lets the owner flip between hero designs (?hero=b also works, so a link can open on one).
 * Remove the switcher and keep the chosen hero before launch.
 */
export default function HeroSwitch({ options }: { options: Option[] }) {
  const [id, setId] = useState(options[0].id);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("hero");
    if (q && options.some((o) => o.id === q)) setId(q);
  }, [options]);

  useEffect(() => {
    // let the 3D stage pick up the new hero's photo layers
    window.dispatchEvent(new Event("stage:scan"));
  }, [id]);

  const pick = (next: string) => {
    setId(next);
    const url = new URL(window.location.href);
    url.searchParams.set("hero", next);
    window.history.replaceState(null, "", url);
  };

  const active = options.find((o) => o.id === id) ?? options[0];
  return (
    <>
      {active.node}
      <div className="hero-switch fixed bottom-3 left-1/2 z-40 flex -translate-x-1/2 items-center gap-0.5 whitespace-nowrap rounded-full p-1 text-xs shadow-xl md:bottom-6 md:left-6 md:translate-x-0" role="group" aria-label="Demo: try a hero style">
        <span className="px-2 font-semibold md:px-3">Hero<span className="hidden md:inline"> style</span></span>
        {options.map((o) => (
          <button key={o.id} onClick={() => pick(o.id)} aria-pressed={o.id === active.id} title={o.label}
            className="rounded-full px-3 py-1.5 font-semibold uppercase">
            {o.id}<span className="sr-only">: {o.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
