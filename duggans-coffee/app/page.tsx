import Image from "next/image";
import Link from "next/link";
import Stage from "@/components/Stage";
import Reveal from "@/components/Reveal";
import HeroSwitch from "@/components/HeroSwitch";
import { HeroTickets, HeroLayers, HeroWall } from "@/components/Heroes";
import { ADDRESS, MAPS, PHONE, TEL, hours } from "@/lib/site";

const ticker = ["4.7 ★ on Google", "390+ reviews", "Veteran-owned", "Open 7 days", "Lead Ave, near UNM", "Order ahead"];

const board = [
  { img: "/images/pour.webp", w: 1100, h: 1101, alt: "Barista pouring latte art", kicker: "01", title: "Espresso bar", body: "Lattes, cappuccinos, americanos and the rest of the bar.", href: "/order#espresso" },
  { img: "/images/tamp.webp", w: 1100, h: 733, alt: "Barista tamping ground espresso", kicker: "02", title: "Breakfast", body: "Burritos, plates and sandwiches, made while your coffee pulls.", href: "/order#breakfast" },
  { img: "/images/drip.webp", w: 1200, h: 800, alt: "Espresso pouring from a portafilter", kicker: "03", title: "Drip & cold", body: "For the walk to class or the drive to work.", href: "/order#drip" },
];

export default function Home() {
  return (
    <main id="main">
      <Stage />
      <Reveal />
      <HeroSwitch
        options={[
          { id: "a", label: "Ticket stack", node: <HeroTickets /> },
          { id: "b", label: "Full-bleed layers", node: <HeroLayers /> },
          { id: "c", label: "Photo wall", node: <HeroWall /> },
        ]}
      />

      {/* PROOF TICKER */}
      <div className="overflow-hidden border-y border-[var(--line)] bg-amber py-3 text-[#1a0f08]" aria-label="Highlights">
        <div className="ticker">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="display mx-6 whitespace-nowrap text-2xl" aria-hidden={i >= ticker.length}>{t} <span className="ml-6">✦</span></span>
          ))}
        </div>
      </div>

      {/* ON THE BOARD: photo cards that lift off the page in 3D */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display text-6xl md:text-8xl">What&apos;s<br />on the board</h2>
          <p className="max-w-sm text-muted">Coffee and breakfast, seven days a week. The whole menu is on the order page, ready for pickup.</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {board.map((m) => (
            <Link key={m.title} href={m.href} className="reveal scene group block">
              <article data-stage="8" className="relative">
                <div data-z="0" className="lift overflow-hidden rounded-xl border border-[var(--line)] bg-bg2">
                  <Image src={m.img} alt={m.alt} width={m.w} height={m.h} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-6">
                    <h3 className="display text-4xl">{m.title}</h3>
                    <p className="mt-2 text-muted">{m.body}</p>
                    <p className="mt-4 text-sm font-bold text-amber">Order this <span aria-hidden>→</span></p>
                  </div>
                </div>
                <span data-z="70" className="display pointer-events-none absolute left-4 top-2 text-7xl text-cream drop-shadow-[0_10px_20px_rgba(0,0,0,.8)]" aria-hidden>{m.kicker}</span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* ORDER AHEAD */}
      <section className="relative overflow-hidden bg-bg2 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:grid-cols-2 md:px-8">
          <div className="scene relative mx-auto h-[420px] w-full max-w-[480px] md:h-[500px]">
            <div data-stage="12" className="absolute inset-0">
              <div data-z="0" className="lift absolute inset-x-[10%] bottom-0 top-0 overflow-hidden rounded-xl">
                <Image src="/images/latte.webp" alt="Espresso pouring into a cup on the machine" fill sizes="400px" className="object-cover" />
              </div>
              <div data-z="140" data-rot="rotate(-5deg)" className="absolute -left-1 top-[12%] w-[46%]">
                <figure className="bob lift overflow-hidden rounded-md border-[6px] border-cream"><Image src="/images/mugs.webp" alt="A table full of coffees from above" width={1200} height={812} sizes="220px" className="w-full" /></figure>
              </div>
              <div data-z="200" data-rot="rotate(4deg)" className="absolute -right-1 bottom-[10%] w-[44%]">
                <figure className="bob-2 lift overflow-hidden rounded-md border-[6px] border-cream"><Image src="/images/roast.webp" alt="Freshly roasted beans" width={1200} height={800} sizes="220px" className="w-full" /></figure>
              </div>
            </div>
          </div>
          <div>
            <p className="reveal caps text-sm text-amber">Order ahead</p>
            <h2 className="reveal display mt-3 text-6xl md:text-8xl">Busy morning?<br />Skip the line.</h2>
            <ol className="mt-10 space-y-6">
              {[
                ["Pick", "Choose coffee and breakfast from your phone."],
                ["Pick a time", "As soon as possible, or any 15-minute slot while we're open."],
                ["Pick up", "Walk in, grab your order, and go."],
              ].map(([t, d], i) => (
                <li key={t} className="reveal flex gap-5">
                  <span className="display flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-amber text-2xl text-amber">{i + 1}</span>
                  <div><h3 className="display text-3xl">{t}</h3><p className="text-muted">{d}</p></div>
                </li>
              ))}
            </ol>
            <div className="reveal mt-10 flex flex-wrap gap-3">
              <Link href="/order" className="btn btn-amber">Start an order</Link>
              <a href={TEL} className="btn btn-line">Or call {PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      {/* STORY: beans photo far back, splash photo up front */}
      <section id="story" className="scene relative isolate flex min-h-[80vh] scroll-mt-16 items-center overflow-hidden">
        <div data-stage="4" className="absolute -inset-[8%] -z-10">
          <div data-z="0" className="absolute inset-0">
            <Image src="/images/beans.webp" alt="" fill sizes="116vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/65 to-bg" />
          </div>
          <div data-z="160" className="pointer-events-none absolute -bottom-[4%] left-1/2 w-[110%] max-w-[1000px] -translate-x-1/2 opacity-80" aria-hidden>
            <Image src="/images/splash.webp" alt="" width={1000} height={475} sizes="100vw" className="w-full" />
          </div>
        </div>
        <div className="relative mx-auto max-w-4xl px-5 pb-48 pt-24 text-center">
          <p className="reveal caps text-sm text-amber">Veteran-owned</p>
          <h2 className="reveal display mt-4 text-6xl md:text-[8rem]">Served by neighbors.</h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-cream/85">
            TODO: two or three sentences in the owner&apos;s own words. Who started Duggan&apos;s, the service background, and why Lead Ave.
          </p>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="mx-auto grid max-w-7xl scroll-mt-16 gap-12 px-5 py-24 md:grid-cols-[1.1fr_1fr] md:px-8 md:py-32">
        <div className="reveal">
          <h2 className="display text-6xl md:text-8xl">Come by.</h2>
          <address className="mt-6 not-italic text-xl">{ADDRESS}</address>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={MAPS} className="btn btn-amber" target="_blank" rel="noopener noreferrer">Get directions</a>
            <a href={TEL} className="btn btn-line">Call {PHONE}</a>
          </div>
          <div className="scene mt-12">
            <div data-stage="8">
              <div data-z="0" className="lift overflow-hidden rounded-xl">
                <Image src="/images/shot.webp" alt="Espresso pulling into a dark cup" width={1100} height={579} sizes="(min-width: 768px) 50vw, 100vw" className="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="reveal rounded-xl border border-[var(--line)] bg-bg2 p-8">
          <h3 className="display text-4xl text-amber">Hours</h3>
          <dl className="mt-6 divide-y divide-[var(--line)]">
            {hours.map(([d, h]) => (
              <div key={d} className="flex justify-between py-4 text-lg"><dt>{d}</dt><dd className="text-muted">{h}</dd></div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-muted">Hours from Google Maps, Nov 2026. TODO: confirm with the shop.</p>
          <Link href="/order" className="btn btn-amber mt-8 w-full">Order ahead for pickup</Link>
        </div>
      </section>
    </main>
  );
}
