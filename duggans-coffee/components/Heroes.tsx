import Image from "next/image";
import Link from "next/link";

/** Three hero designs for the owner to choose from. All use real photo layers in 3D space (components/Stage.tsx). */

function Copy({ center = false, size = "md:text-[7.5rem]" }: { center?: boolean; size?: string }) {
  return (
    <>
      <p className={`caps inline-flex items-center gap-2 rounded-full border border-amber/50 bg-bg/60 px-3 py-1 text-[11px] text-amber backdrop-blur ${center ? "mx-auto" : ""}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-amber" /> Veteran-owned · 4.7★ from 390+ reviews
      </p>
      <h1 className={`display mt-5 text-[15vw] ${size}`}>
        Coffee &amp; <span className="text-amber">breakfast</span> on Lead&nbsp;Ave.
      </h1>
      <p className={`mt-5 max-w-md text-lg text-muted ${center ? "mx-auto" : ""}`}>
        A neighborhood spot by UNM. Order from your phone, pick a time, and walk in to a hot cup.
      </p>
      <div className={`mt-7 flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
        <Link href="/order" className="btn btn-amber">Order ahead <span aria-hidden>→</span></Link>
        <Link href="/#visit" className="btn btn-line">Hours &amp; directions</Link>
      </div>
    </>
  );
}

/** A: photos stacked like tickets on the rail, with a sample pickup ticket floating in front. */
export function HeroTickets() {
  return (
    <section className="grain relative isolate overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100svh-64px)] max-w-7xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-[1.05fr_1fr] md:px-8">
        <div className="relative z-10"><Copy /></div>
        <div className="scene relative mx-auto h-[440px] w-full max-w-[560px] md:h-[560px]">
          <div data-stage="14" className="absolute inset-0">
            <div data-z="0" className="lift absolute left-0 top-[6%] w-[80%] overflow-hidden rounded-md">
              <Image src="/images/hero.webp" alt="Two espresso shots pulling into dark cups" width={1600} height={1073} priority sizes="(min-width: 768px) 450px, 80vw" className="w-full" />
            </div>
            <div data-z="90" data-rot="rotate(5deg)" className="absolute right-0 top-0 w-[42%]">
              <figure className="lift overflow-hidden rounded-md border-[6px] border-cream"><Image src="/images/pour.webp" alt="Latte art being poured" width={1100} height={1101} sizes="240px" className="w-full" /></figure>
            </div>
            <div data-z="150" data-rot="rotate(-4deg)" className="absolute bottom-[4%] left-[2%] w-[44%]">
              <figure className="bob lift overflow-hidden rounded-md border-[6px] border-cream"><Image src="/images/portafilter.webp" alt="Portafilter packed with fresh espresso grounds" width={1200} height={920} sizes="250px" className="w-full" /></figure>
            </div>
            <div data-z="230" data-rot="rotate(3deg)" className="absolute bottom-[10%] right-[2%] w-[46%]">
              <div className="bob-2 lift rounded-md bg-paper p-3 text-ink md:p-4">
                <p className="caps text-[10px] text-wood">Pickup · Lead Ave</p>
                <p className="display mt-1 text-xl md:text-3xl">Order #0412</p>
                <ul className="mt-2 space-y-1 text-[11px] md:mt-3 md:space-y-1.5 md:text-sm">
                  <li className="flex justify-between border-b border-dashed border-ink/20 pb-1.5"><span>Latte, 16 oz</span><span>✓</span></li>
                  <li className="flex justify-between border-b border-dashed border-ink/20 pb-1.5"><span>Breakfast burrito</span><span>✓</span></li>
                  <li className="flex justify-between"><span>Drip coffee</span><span>✓</span></li>
                </ul>
                <p className="mt-2 rounded bg-ink py-1.5 text-center text-[11px] font-bold text-amber md:mt-3 md:py-2 md:text-xs">Ready at 7:45 am</p>
                <p className="mt-2 text-center text-[10px] text-ink/60">Sample order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** B: one full-bleed photo with the headline sitting between it and cut-out photos in front. */
export function HeroLayers() {
  return (
    <section className="scene relative isolate h-[calc(100svh-64px)] min-h-[620px] overflow-hidden">
      <div data-stage="5" className="absolute -inset-[6%]">
        <div data-z="0" className="absolute inset-0">
          <Image src="/images/hero.webp" alt="" fill priority sizes="112vw" className="object-cover object-[60%_center] opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_45%,transparent_0%,rgba(22,16,12,.5)_50%,#16100c_95%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent md:bg-gradient-to-tr md:from-bg md:via-bg/30" />
        </div>
        <div data-z="80" className="absolute inset-x-0 top-[12%] flex justify-center md:top-[14%] md:justify-end md:pr-[12%]">
          <p className="display select-none text-center text-[24vw] leading-[.8] text-cream/95 md:text-[12vw]" aria-hidden>
            Lead<br /><span className="text-amber">Ave.</span>
          </p>
        </div>
        <div data-z="170" className="pointer-events-none absolute bottom-[8%] right-[4%] w-[52%] md:w-[30%]" aria-hidden>
          <Image src="/images/bag.webp" alt="" width={900} height={608} sizes="(min-width: 768px) 32vw, 52vw" className="w-full drop-shadow-[0_40px_40px_rgba(0,0,0,.7)]" />
        </div>
        <div data-z="130" className="pointer-events-none absolute bottom-[16%] right-[24%] w-[50%] md:w-[30%]" aria-hidden>
          <Image src="/images/splash.webp" alt="" width={1000} height={475} sizes="(min-width: 768px) 36vw, 60vw" className="w-full opacity-90" />
        </div>
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-12 md:px-8 md:pb-16">
        <h1 className="display max-w-xl text-5xl md:text-6xl">Coffee &amp; <span className="text-amber">breakfast</span> near UNM.</h1>
        <p className="mt-4 max-w-md text-muted">Veteran-owned. Order from your phone, pick a time, walk in to a hot cup.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/order" className="btn btn-amber">Order ahead <span aria-hidden>→</span></Link>
          <Link href="/#visit" className="btn btn-line">Hours &amp; directions</Link>
        </div>
      </div>
    </section>
  );
}

const wall = [
  { src: "/images/pour.webp", w: 1100, h: 1101, alt: "Latte art", z: 40, cls: "row-span-2" },
  { src: "/images/shot.webp", w: 1100, h: 579, alt: "Espresso pulling into a cup", z: 0, cls: "" },
  { src: "/images/roast.webp", w: 1200, h: 800, alt: "Fresh-roasted beans in the roaster", z: 90, cls: "" },
  { src: "/images/tamp.webp", w: 1100, h: 733, alt: "Barista tamping espresso", z: 60, cls: "col-span-2" },
  { src: "/images/latte.webp", w: 1200, h: 805, alt: "Espresso pouring into a cup", z: 20, cls: "" },
  { src: "/images/mugs.webp", w: 1200, h: 812, alt: "A table of coffees from above", z: 110, cls: "" },
  { src: "/images/drip.webp", w: 1200, h: 800, alt: "Espresso streaming from the portafilter", z: 50, cls: "" },
];

/** C: a wall of photo tiles turned in 3D beside the headline, each tile at its own depth. */
export function HeroWall() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100svh-64px)] max-w-7xl items-center gap-6 px-5 pb-16 pt-10 md:grid-cols-[1fr_1.15fr] md:px-8">
        <div className="relative z-10"><Copy size="md:text-[5.6rem]" /></div>
        <div className="scene relative h-[420px] md:h-[600px]">
          <div data-stage="10" className="absolute inset-0">
            <div className="flat3d absolute inset-0" style={{ transform: "rotateY(-26deg) rotateX(6deg) scale(.92)" }}>
              <div className="flat3d grid h-full grid-cols-3 grid-rows-3 gap-3">
                {wall.map((t, i) => (
                  <div key={t.src} data-z={t.z} className={`lift relative overflow-hidden rounded-md ${t.cls}`}>
                    <Image src={t.src} alt={t.alt} fill priority={i < 2} sizes="(min-width: 768px) 260px, 33vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
