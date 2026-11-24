import Image from "next/image";
import Link from "next/link";
import { RATING } from "@/lib/site";
import { z } from "@/lib/z";

/**
 * Three hero designs for the owner to choose from. Each one is whole photos placed at different depths
 * in a 3D scene (no 3D objects, nothing moves on its own; on desktop the scene turns toward the cursor).
 */

function Proof({ center = false }: { center?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-paper/80 px-3 py-1.5 text-xs font-medium ${center ? "mx-auto" : ""}`}>
      <span className="text-matcha" aria-hidden>★</span> {RATING.stars} from {RATING.count} Google reviews <span className="text-muted" aria-hidden>·</span> <span className="text-muted">Winrock Town Center</span>
    </p>
  );
}

function Ctas({ center = false, light = false }: { center?: boolean; light?: boolean }) {
  return (
    <div className={`mt-7 flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
      <Link href="/order" className="btn btn-matcha">Order ahead <span aria-hidden>→</span></Link>
      <Link href="/#visit" className={`btn ${light ? "btn-light" : "btn-line"}`}>Hours &amp; directions</Link>
    </div>
  );
}

/** A: the living room. An arched window photo at the back, the scoop and an iced matcha floating in front of it. */
export function HeroLivingRoom() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pb-14 pt-8 md:min-h-[calc(100svh-64px)] md:grid-cols-[1fr_1.05fr] md:gap-10 md:px-8 md:pt-6">
        <div className="relative z-10">
          <Proof />
          <h1 className="display mt-5 text-[13.5vw] md:text-[6.4rem]">
            Matcha worth <span className="italic text-matcha">leaving the house</span> for.
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted">Whisked to order at Winrock. Order from your phone, pick a time, and it&apos;s waiting with your name on it.</p>
          <Ctas />
        </div>

        <div className="scene relative mx-auto h-[430px] w-full max-w-[560px] md:h-[620px]">
          <div data-stage="9" className="absolute inset-0">
            <div style={z(0)} className="lift arch absolute left-[16%] top-0 w-[62%] overflow-hidden">
              <Image src="/images/hb-cup.webp" alt="An iced latte in a Homebody cup, held up under the patio umbrella" width={870} height={1178} priority sizes="(min-width: 768px) 350px, 60vw" className="w-full" />
            </div>
            <figure style={z(110, "rotate(-5deg)")} className="lift frame absolute bottom-[3%] left-[3%] w-[50%]">
              <Image src="/images/hb-scoop.webp" alt="A Homebody Matcha scoop heaped with bright green matcha powder" width={1118} height={696} sizes="(min-width: 768px) 290px, 50vw" className="w-full" />
            </figure>
            <div style={z(190, "rotate(4deg)")} className="absolute bottom-[1%] right-0 w-[30%]">
              <Image src="/images/iced-cut.webp" alt="" width={640} height={1065} sizes="(min-width: 768px) 170px, 30vw" className="w-full drop-shadow-[0_40px_30px_rgba(40,30,15,.4)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** B: the mantel. Their script wordmark huge at the back, three whole photos standing in front of it at different depths. */
export function HeroMantel() {
  return (
    <section className="relative isolate overflow-hidden bg-bg2">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 text-center md:px-8 md:pt-8">
        <Proof center />
        <h1 className="display mx-auto mt-5 max-w-4xl text-[12.5vw] md:text-[4.9rem]">
          The one drink worth <span className="italic text-matcha">leaving the house</span> for.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted">Matcha whisked to order at Winrock. Order ahead and it&apos;s waiting when you walk in.</p>
        <Ctas center />

        <div className="scene relative mx-auto mt-6 h-[360px] max-w-5xl md:-mt-4 md:h-[500px]">
          <div data-stage="7" className="absolute inset-0">
            <p style={z(-120)} className="script pointer-events-none absolute inset-x-0 top-[2%] select-none text-[34vw] text-ink/[.08] md:text-[17rem]" aria-hidden>Homebody</p>
            <figure style={z(30, "rotate(-6deg)")} className="lift frame absolute bottom-[4%] left-[2%] w-[34%] md:left-[8%] md:w-[24%]">
              <Image src="/images/hb-cups.webp" alt="Three layered matcha cups with green-dusted lids" width={894} height={1066} sizes="(min-width: 768px) 240px, 34vw" className="w-full" />
            </figure>
            <figure style={z(120)} className="lift frame absolute bottom-0 left-1/2 w-[40%] -translate-x-1/2 md:w-[27%]">
              <Image src="/images/hb-cup.webp" alt="An iced latte in a Homebody cup under the patio umbrella" width={870} height={1178} priority sizes="(min-width: 768px) 280px, 40vw" className="w-full" />
            </figure>
            <figure style={z(60, "rotate(5deg)")} className="lift frame absolute bottom-[6%] right-[2%] w-[34%] md:right-[8%] md:w-[24%]">
              <Image src="/images/hb-ice.webp" alt="Homebody, a wellness bar: an ice cube dripping with matcha" width={1100} height={1109} sizes="(min-width: 768px) 240px, 34vw" className="w-full" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

const wall = [
  { src: "/images/hb-ice.webp", w: 1100, h: 1109, alt: "Homebody, a wellness bar: an ice cube dripping with matcha", z: 20 },
  { src: "/images/hb-scoop.webp", w: 1118, h: 696, alt: "Homebody Matcha scoop with matcha powder", z: 50 },
  { src: "/images/hot-latte.webp", w: 1026, h: 682, alt: "Hot matcha latte with leaf art", z: 0 },
  { src: "/images/hb-cup.webp", w: 870, h: 1178, alt: "Iced latte in a Homebody cup", z: 40 },
  { src: "/images/whisk.webp", w: 1100, h: 732, alt: "Bamboo whisk in a bowl of matcha", z: 10 },
  { src: "/images/hb-cups.webp", w: 894, h: 1066, alt: "Layered matcha cups", z: 30 },
];

/** C: the gallery wall. Framed photos hung on a wall that's turned in 3D, each frame at its own depth. */
export function HeroGallery() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 pb-14 pt-8 md:min-h-[calc(100svh-64px)] md:grid-cols-[1fr_1.2fr] md:gap-8 md:px-8">
        <div className="relative z-10">
          <Proof />
          <h1 className="display mt-5 text-[13.5vw] md:text-[5.8rem]">
            Made by <span className="italic text-matcha">homebodies.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted">For the people who&apos;d rather stay in: matcha whisked to order at Winrock, worth the drive. Order ahead and skip the wait.</p>
          <Ctas />
        </div>
        <div className="scene relative h-[400px] md:h-[640px]">
          <div data-stage="8" className="absolute inset-0">
            <div className="flat3d absolute inset-0" style={{ transform: "rotateY(-18deg) rotateX(3deg) scale(.9)" }}>
              <div className="flat3d grid h-full grid-cols-3 items-center gap-4 md:gap-7">
                {[0, 1, 2].map((col) => (
                  <div key={col} className={`flat3d flex flex-col gap-4 md:gap-7 ${col === 1 ? "translate-y-6" : ""}`}>
                    {wall.filter((_, i) => i % 3 === col).map((t, i) => (
                      <figure key={t.src} style={z(t.z)} className="lift frame">
                        <Image src={t.src} alt={t.alt} width={t.w} height={t.h} priority={col === 0 && i === 0} sizes="(min-width: 768px) 220px, 30vw" className="w-full" />
                      </figure>
                    ))}
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
