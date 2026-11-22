import Image from "next/image";
import Hero3D from "@/components/Hero3D";
import Depth from "@/components/Depth";
import Reveal from "@/components/Reveal";

// Facts below come from Duggan's Google Maps listing (checked Nov 22, 2026). Anything not verified is marked TODO.
const PHONE = "(505) 525-8190";
const TEL = "tel:+15055258190";
const ADDRESS = "2227 Lead Ave SE, Albuquerque, NM 87106";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Duggan%27s+Coffee+2227+Lead+Ave+SE+Albuquerque";
const ORDER = "#order"; // TODO: swap for the real online-ordering link (Square, Toast, etc.) once it exists

const hours = [
  ["Monday", "7:30 am – 3 pm"],
  ["Tuesday – Friday", "7:30 am – 5 pm"],
  ["Saturday", "7:30 am – 2 pm"],
  ["Sunday", "7:30 am – 2 pm"],
];

const ticker = ["4.7 ★ on Google", "390+ reviews", "Veteran-owned", "Open 7 days", "Lead Ave, near UNM", "Coffee + breakfast"];

const menu = [
  { img: "/images/pour.webp", alt: "Barista pouring latte art", kicker: "01", title: "Espresso bar", body: "Lattes, cappuccinos, americanos and the rest of the bar.", todo: "TODO: list drinks and prices from the menu board" },
  { img: "/images/tamp.webp", alt: "Barista tamping ground espresso", kicker: "02", title: "Breakfast", body: "Breakfast plates served alongside the coffee.", todo: "TODO: add 4–6 breakfast plates with your own food photos" },
  { img: "/images/drip.webp", alt: "Espresso pouring from a portafilter", kicker: "03", title: "Drip & iced", body: "For the walk to class or the drive to work.", todo: "TODO: list drip, cold brew and iced drinks" },
];

export default function Home() {
  return (
    <>
      <Depth />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-amber focus:px-4 focus:py-2 focus:text-black">Skip to content</a>

      <header className="absolute inset-x-0 top-0 z-30">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8" aria-label="Main">
          <a href="#" className="display text-2xl tracking-wide md:text-3xl">Duggan&apos;s</a>
          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#menu" className="hover:text-amber">Menu</a>
            <a href="#order" className="hover:text-amber">Order ahead</a>
            <a href="#visit" className="hover:text-amber">Hours</a>
          </div>
          <a href={TEL} className="rounded-md border border-cream/40 px-3 py-2 text-sm font-semibold hover:border-amber hover:text-amber">Call</a>
        </nav>
      </header>

      <main id="main">
        {/* HERO: real HTML first, 3D beans layered between photo and type */}
        <section className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden pb-14 pt-28 md:items-center md:pb-0">
          <div className="absolute inset-0 -z-20" data-depth="-0.25">
            <Image src="/images/hero.webp" alt="" fill priority sizes="100vw" className="scale-110 object-cover object-[65%_center] opacity-60" />
          </div>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,rgba(22,16,12,.55)_45%,#16100c_92%)]" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/40 to-transparent md:bg-gradient-to-r md:from-bg md:via-bg/70" />
          <div className="absolute inset-0 -z-[5]"><Hero3D /></div>

          <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber/50 bg-bg/60 px-3 py-1 text-xs font-bold uppercase tracking-[.2em] text-amber backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" /> Open today from 7:30 am
            </p>
            <h1 className="display max-w-4xl text-[17vw] md:text-[9.5rem]">
              Coffee &amp; <span className="text-amber">breakfast</span> on Lead&nbsp;Ave.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted md:text-xl">
              A veteran-owned neighborhood spot by UNM. Order ahead, skip the wait, and grab a seat.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={ORDER} className="btn btn-amber">Order ahead <span aria-hidden>→</span></a>
              <a href="#menu" className="btn btn-line">See the menu</a>
            </div>
          </div>
          <p className="absolute bottom-4 right-5 hidden text-xs text-muted/70 md:block">Move your cursor through the beans</p>
        </section>

        {/* PROOF TICKER */}
        <div className="overflow-hidden border-y border-[var(--line)] bg-amber py-3 text-[#1a0f08]" aria-label="Highlights">
          <div className="ticker">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} className="display mx-6 whitespace-nowrap text-2xl" aria-hidden={i >= ticker.length}>{t} <span className="ml-6">✦</span></span>
            ))}
          </div>
        </div>

        {/* MENU: tilting 3D cards */}
        <section id="menu" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="display text-6xl md:text-8xl">What&apos;s<br />on the board</h2>
            <p className="max-w-sm text-muted">Coffee and a full breakfast menu, seven days a week. <span className="text-amber">TODO:</span> the full menu goes here once we copy it from the board.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {menu.map((m) => (
              <article key={m.title} className="reveal tilt relative overflow-hidden rounded-2xl border border-[var(--line)] bg-bg2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={m.img} alt={m.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                  <span className="display absolute left-4 top-3 text-6xl text-cream/90 drop-shadow-lg">{m.kicker}</span>
                </div>
                <div className="pop p-6">
                  <h3 className="display text-4xl">{m.title}</h3>
                  <p className="mt-2 text-muted">{m.body}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-amber/80">{m.todo}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ORDER AHEAD: phone mock + steps, with floating cutouts for depth */}
        <section id="order" className="relative overflow-hidden bg-bg2 py-24 md:py-32">
          <div className="pointer-events-none absolute -bottom-16 -right-24 z-0 w-[300px] opacity-80 md:-right-10 md:w-[380px]" data-depth="0.12" aria-hidden>
            <Image src="/images/bag.webp" alt="" width={900} height={608} sizes="420px" className="rotate-[-8deg] drop-shadow-[0_40px_40px_rgba(0,0,0,.6)]" />
          </div>
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 md:grid-cols-2 md:px-8">
            <div className="reveal relative mx-auto w-[280px]">
              <div className="tilt relative rounded-[2.6rem] border-[10px] border-[#0b0806] bg-cream p-4 text-[#1a0f08] shadow-[0_50px_80px_-30px_rgba(0,0,0,.9)]">
                <div className="pop">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8a5a2b]">Pickup at Lead Ave</p>
                  <p className="display mt-1 text-4xl">Your order</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    {["Latte, 12 oz", "Breakfast plate", "Drip coffee, 16 oz"].map((i) => (
                      <li key={i} className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-3"><span>{i}</span><span className="text-xs text-[#8a5a2b]">TODO $</span></li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-lg bg-[#1a0f08] py-3 text-center text-sm font-bold text-amber">Ready for pickup</div>
                </div>
              </div>
              <div className="absolute -bottom-10 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-full bg-black/60 blur-2xl" aria-hidden />
            </div>
            <div>
              <p className="reveal text-sm font-bold uppercase tracking-[.25em] text-amber">Order ahead</p>
              <h2 className="reveal display mt-3 text-6xl md:text-8xl">Busy morning?<br />Skip the line.</h2>
              <ol className="mt-10 space-y-6">
                {[
                  ["Pick", "Choose coffee and breakfast from your phone."],
                  ["Pay", "Pay online so there's nothing to wait for at the register."],
                  ["Pick up", "Walk in, grab your order, and go."],
                ].map(([t, d], i) => (
                  <li key={t} className="reveal flex gap-5">
                    <span className="display flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-amber text-2xl text-amber">{i + 1}</span>
                    <div><h3 className="display text-3xl">{t}</h3><p className="text-muted">{d}</p></div>
                  </li>
                ))}
              </ol>
              <div className="reveal mt-10 flex flex-wrap gap-3">
                <a href={ORDER} className="btn btn-amber">Start an order</a>
                <a href={TEL} className="btn btn-line">Or call {PHONE}</a>
              </div>
              <p className="mt-4 text-xs text-muted/80">TODO: connect online ordering (Square, Toast or similar). Until then, the button can call the shop.</p>
            </div>
          </div>
        </section>

        {/* STORY band: parallax beans with a splash cutout in front */}
        <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
          <div className="absolute inset-x-0 -bottom-[35%] -top-[35%] -z-20" data-depth="0.22">
            <Image src="/images/beans.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg/60 to-bg" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-[5] w-[120%] max-w-[1000px] -translate-x-1/2 opacity-70" data-depth="-0.1" aria-hidden>
            <Image src="/images/splash.webp" alt="" width={1000} height={475} sizes="100vw" className="w-full opacity-90" />
          </div>
          <div className="relative mx-auto max-w-4xl px-5 pb-48 pt-24 text-center">
            <p className="reveal text-sm font-bold uppercase tracking-[.25em] text-amber">Veteran-owned</p>
            <h2 className="reveal display mt-4 text-6xl md:text-[8rem]">Served by neighbors.</h2>
            <p className="reveal mx-auto mt-6 max-w-xl text-lg text-cream/85">
              TODO: two or three sentences in the owner&apos;s own words. Who started Duggan&apos;s, the service background, and why Lead Ave.
            </p>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[1.1fr_1fr] md:px-8 md:py-32">
          <div className="reveal">
            <h2 className="display text-6xl md:text-8xl">Come by.</h2>
            <address className="mt-6 not-italic text-xl">{ADDRESS}</address>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS} className="btn btn-amber" target="_blank" rel="noopener noreferrer">Get directions</a>
              <a href={TEL} className="btn btn-line">Call {PHONE}</a>
            </div>
            <div className="tilt relative mt-12 overflow-hidden rounded-2xl">
              <Image src="/images/shot.webp" alt="Two espresso shots pulling into cups" width={1100} height={579} sizes="(min-width: 768px) 50vw, 100vw" className="w-full" />
            </div>
          </div>
          <div className="reveal rounded-2xl border border-[var(--line)] bg-bg2 p-8">
            <h3 className="display text-4xl text-amber">Hours</h3>
            <dl className="mt-6 divide-y divide-[var(--line)]">
              {hours.map(([d, h]) => (
                <div key={d} className="flex justify-between py-4 text-lg"><dt>{d}</dt><dd className="text-muted">{h}</dd></div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted/80">Hours from Google Maps, Nov 2026. TODO: confirm with the shop.</p>
          </div>
        </section>

        {/* CLOSING */}
        <section className="border-t border-[var(--line)] px-5 py-24 text-center">
          <h2 className="display text-[15vw] text-amber md:text-[11rem]">See you at 7:30.</h2>
          <a href={ORDER} className="btn btn-amber mt-8">Order ahead</a>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-5 py-8 text-center text-xs text-muted/80">
        Concept demo prepared for Duggan&apos;s Coffee. Not the official website. Photos are stock placeholders until we shoot the real shop.
      </footer>
    </>
  );
}
