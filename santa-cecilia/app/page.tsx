import Image from "next/image";
import Link from "next/link";
import Stage from "@/components/Stage";
import Reveal from "@/components/Reveal";
import HeroSwitch from "@/components/HeroSwitch";
import { HeroArch, HeroPostcards, HeroSun } from "@/components/Heroes";
import { ADDRESS, MAPS, hours } from "@/lib/site";

const counter = [
  { img: "/images/shot.webp", w: 1100, h: 579, alt: "Two espresso shots pulling", title: "Espresso", body: "Shots, cortados and americanos.", href: "/order#espresso" },
  { img: "/images/beanscup.webp", w: 1200, h: 800, alt: "Latte on a bed of coffee beans", title: "House cups", body: "Lattes, café de olla and the patio favorites.", href: "/order#house" },
  { img: "/images/paper.webp", w: 1200, h: 799, alt: "A latte beside a sketchbook", title: "Café de olla", body: "Cinnamon and piloncillo, plus biscochitos on the side.", href: "/order#house" },
];

export default function Home() {
  return (
    <main id="main">
      <Stage />
      <Reveal />
      <HeroSwitch
        options={[
          { id: "a", label: "Archway window", node: <HeroArch /> },
          { id: "b", label: "Patio postcards", node: <HeroPostcards /> },
          { id: "c", label: "Sun and cup", node: <HeroSun /> },
        ]}
      />

      {/* STRIP */}
      <section className="bg-ink text-bg">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-center text-sm md:flex-row md:px-8 md:text-left">
          <p><span className="font-semibold">Open Thursday – Monday</span> · 8:30 am – 3 pm</p>
          <p className="text-bg/70">Closed Tuesday &amp; Wednesday</p>
          <p className="text-bg/70">{ADDRESS}</p>
        </div>
      </section>

      {/* FROM THE COUNTER: arched photo cards lifting off the wall */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="reveal grid items-end gap-6 md:grid-cols-2">
          <h2 className="display text-5xl md:text-7xl">From the <em className="text-terra-deep">counter</em></h2>
          <p className="text-muted">Order from your phone before you walk over from the Plaza. It&apos;ll be on the counter, ready for the patio.</p>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {counter.map((m, i) => (
            <Link key={m.title} href={m.href} className={`reveal scene group block ${i === 1 ? "md:-mt-8" : "md:mt-8"}`}>
              <article data-stage="8" className="relative">
                <div data-z="0" className="archway lift relative aspect-[3/4] overflow-hidden border-[6px] border-plaster">
                  <Image src={m.img} alt={m.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                </div>
                <div data-z="60" className="relative -mt-10 mx-6 rounded-2xl bg-paper px-5 py-4 text-center shadow-lg">
                  <h3 className="display text-3xl">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted">{m.body}</p>
                  <p className="mt-2 text-sm font-semibold text-terra-deep">Order <span aria-hidden>→</span></p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* PATIO: photos float in front of the terracotta wall */}
      <section id="patio" className="relative isolate scroll-mt-16 overflow-hidden bg-terra-deep text-[#fff6ea]">
        <div className="absolute inset-0 -z-10 opacity-40 mix-blend-multiply">
          <Image src="/images/swirl2.webp" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
          <div>
            <p className="reveal caps text-xs text-[#f2b872]">The patio</p>
            <h2 className="reveal display mt-4 max-w-2xl text-6xl md:text-8xl">Take it <em>outside.</em></h2>
            <p className="reveal mt-6 max-w-md text-lg text-[#fff6ea]/85">
              New Mexico sun, Old Town around you, and a cup that&apos;s still hot when you sit down.
            </p>
            <Link href="/order" className="reveal btn mt-8 bg-[#fff6ea] text-ink hover:bg-[#f2b872]">Order for the patio</Link>
            <p className="reveal mt-4 max-w-md text-xs text-[#fff6ea]/70">TODO: swap in photos of the real patio.</p>
          </div>
          <div className="scene relative mx-auto h-[440px] w-full max-w-[460px] md:h-[520px]">
            <div data-stage="12" className="absolute inset-0">
              <div data-z="0" className="archway lift absolute inset-x-[12%] bottom-0 top-0 overflow-hidden border-[6px] border-[#fff6ea]/80">
                <Image src="/images/circle.webp" alt="Friends reaching for lattes on a wooden table" fill sizes="360px" className="object-cover" />
              </div>
              <div data-z="140" data-rot="rotate(-5deg)" className="absolute -left-2 bottom-[8%] w-[46%]">
                <figure className="bob lift overflow-hidden rounded-lg border-[6px] border-[#fff6ea]"><Image src="/images/paper.webp" alt="Latte next to a sketchbook" width={1200} height={799} sizes="220px" className="w-full" /></figure>
              </div>
              <div data-z="200" data-rot="rotate(5deg)" className="absolute -right-2 top-[8%] w-[40%]">
                <figure className="bob-2 lift overflow-hidden rounded-lg border-[6px] border-[#fff6ea]"><Image src="/images/drip.webp" alt="Espresso streaming from the machine" width={1100} height={826} sizes="200px" className="w-full" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="mx-auto grid max-w-6xl scroll-mt-16 gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <div className="reveal">
          <h2 className="display text-5xl md:text-7xl">Find us off the <em className="text-terra-deep">Plaza</em>.</h2>
          <address className="mt-6 not-italic text-lg">{ADDRESS}</address>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-terra">Open in Maps</a>
            <Link href="/order" className="btn btn-line">Order ahead</Link>
          </div>
          <p className="mt-4 text-xs text-muted">No phone number is listed publicly. TODO: add a phone or Instagram link.</p>
          <div className="scene mt-10">
            <div data-stage="8">
              <div data-z="0" className="lift overflow-hidden rounded-2xl">
                <Image src="/images/hero.webp" alt="Barista pouring steamed milk into a latte" width={1600} height={898} sizes="(min-width: 768px) 50vw, 100vw" className="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="reveal archway plaster flex flex-col justify-end px-8 pb-10 pt-28">
          <h3 className="display text-center text-4xl italic">Hours</h3>
          <dl className="mt-6 divide-y divide-[var(--line)]">
            {hours.map(([d, h]) => (
              <div key={d} className="flex justify-between gap-4 py-3"><dt>{d}</dt><dd className={h === "Closed" ? "text-terra-deep" : "text-muted"}>{h}</dd></div>
            ))}
          </dl>
          <p className="mt-4 text-center text-xs text-muted">From Google Maps, Nov 2026. TODO: confirm with the café.</p>
        </div>
      </section>
    </main>
  );
}
