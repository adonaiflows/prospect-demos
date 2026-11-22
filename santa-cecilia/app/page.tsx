import Image from "next/image";
import Liquid3D from "@/components/Liquid3D";
import OpenNow from "@/components/OpenNow";
import Depth from "@/components/Depth";
import Reveal from "@/components/Reveal";

// Facts below come from Santa Cecilia's Google Maps listing (checked Nov 22, 2026). Anything not verified is marked TODO.
const ADDRESS = "111 Romero St NW, Albuquerque, NM 87104";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Santa+Cecilia+111+Romero+St+NW+Albuquerque";

const hours = [
  ["Thursday", "8:30 am – 3 pm"],
  ["Friday", "8:30 am – 3 pm"],
  ["Saturday", "8:30 am – 3 pm"],
  ["Sunday", "8:30 am – 3 pm"],
  ["Monday", "8:30 am – 3 pm"],
  ["Tuesday & Wednesday", "Closed"],
];

const menu = [
  { img: "/images/shot.webp", alt: "Two espresso shots pulling", title: "Espresso", note: "TODO: espresso drinks and prices" },
  { img: "/images/beanscup.webp", alt: "Latte on a bed of coffee beans", title: "Lattes & specials", note: "TODO: house specials" },
  { img: "/images/drip.webp", alt: "Espresso pouring from a portafilter", title: "Something to eat", note: "TODO: pastries or food, if served" },
];

export default function Home() {
  return (
    <>
      <Depth />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-bg">Skip to content</a>

      <header className="relative z-30">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8" aria-label="Main">
          <a href="#" className="display text-2xl italic md:text-3xl">Santa Cecilia</a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#menu" className="hover:text-terra">Menu</a>
            <a href="#patio" className="hover:text-terra">The patio</a>
            <a href="#visit" className="hover:text-terra">Hours &amp; directions</a>
          </div>
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-bg">Directions</a>
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="plaster relative isolate overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 pb-16 pt-6 md:grid-cols-[1.1fr_1fr] md:px-8 md:pb-24 md:pt-10">
            <div className="order-1">
              <OpenNow />
              <h1 className="display mt-6 text-[3.5rem] md:text-[6.4rem]">
                Coffee on the <em className="text-terra-deep">patio</em> in Old&nbsp;Town.
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted">
                A small café on Romero Street, a short walk from the Plaza. Grab a cup, then take it out onto the patio.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-terra">Get directions</a>
                <a href="#menu" className="btn btn-line">See the menu</a>
              </div>
              <p className="mt-6 text-sm text-muted"><span className="tracking-widest text-terra" aria-hidden>★★★★★</span> 4.8 on Google</p>
            </div>

            <div className="relative order-2 mx-auto h-[400px] w-full max-w-[440px] md:h-[540px]">
              <div className="archway absolute inset-x-2 bottom-0 top-0 overflow-hidden bg-terra shadow-[inset_0_-40px_80px_rgba(0,0,0,.25)]">
                <div className="sun absolute left-1/2 top-[12%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[repeating-conic-gradient(from_0deg,#e9a25f_0deg_6deg,transparent_6deg_15deg)] opacity-60" aria-hidden />
                <div className="absolute left-1/2 top-[22%] h-40 w-40 -translate-x-1/2 rounded-full bg-[#f2b872]" aria-hidden />
              </div>
              <div className="absolute inset-x-0 bottom-0 top-[14%] cursor-pointer"><Liquid3D /></div>
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-bg/85 px-3 py-1 text-xs text-muted">Touch the coffee</p>
            </div>
          </div>
        </section>

        {/* STRIP */}
        <section className="bg-ink text-bg">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-center text-sm md:flex-row md:px-8 md:text-left">
            <p><span className="font-semibold">Open Thursday – Monday</span> · 8:30 am – 3 pm</p>
            <p className="text-bg/70">Closed Tuesday &amp; Wednesday</p>
            <p className="text-bg/70">{ADDRESS}</p>
          </div>
        </section>

        {/* MENU */}
        <section id="menu" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <div className="reveal grid items-end gap-6 md:grid-cols-2">
            <h2 className="display text-5xl md:text-7xl">From the <em className="text-terra-deep">counter</em></h2>
            <p className="text-muted">TODO: the real menu and prices go here, so visitors can check before they walk over.</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {menu.map((m, i) => (
              <article key={m.title} className={`reveal tilt relative ${i === 1 ? "md:-mt-8" : "md:mt-8"}`}>
                <div className="archway relative aspect-[3/4] overflow-hidden border-[6px] border-plaster shadow-[0_30px_50px_-25px_rgba(43,29,22,.6)]">
                  <Image src={m.img} alt={m.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                </div>
                <div className="pop mt-5 text-center">
                  <h3 className="display text-3xl">{m.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-terra">{m.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PATIO band with depth layers */}
        <section id="patio" className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-terra-deep text-[#fff6ea]">
          <div className="absolute inset-x-0 -bottom-[30%] -top-[30%] -z-20 opacity-50 mix-blend-multiply" data-depth="0.25">
            <Image src="/images/swirl2.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="pointer-events-none absolute -right-24 top-1/2 -z-10 w-[520px] -translate-y-1/2 opacity-90 md:right-0" data-depth="-0.15" aria-hidden>
            <Image src="/images/cup.webp" alt="" width={900} height={842} sizes="520px" className="rotate-12 drop-shadow-[0_50px_50px_rgba(0,0,0,.45)]" />
          </div>
          <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8">
            <p className="reveal text-xs font-semibold uppercase tracking-[.3em] text-[#f2b872]">The patio</p>
            <h2 className="reveal display mt-4 max-w-2xl text-6xl md:text-8xl">Take it <em>outside.</em></h2>
            <p className="reveal mt-6 max-w-md text-lg text-[#fff6ea]/85">
              New Mexico sun, Old Town around you, and a cup that&apos;s still hot when you sit down.
            </p>
            <p className="reveal mt-4 max-w-md text-xs text-[#fff6ea]/60">TODO: replace with a photo of your real patio.</p>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
          <div className="reveal">
            <h2 className="display text-5xl md:text-7xl">Find us off the <em className="text-terra-deep">Plaza</em>.</h2>
            <address className="mt-6 not-italic text-lg">{ADDRESS}</address>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-terra">Open in Maps</a>
            </div>
            <p className="mt-4 text-xs text-muted">No phone number is listed publicly. TODO: add a phone or Instagram link.</p>
            <div className="tilt relative mt-10 overflow-hidden rounded-2xl">
              <Image src="/images/hero.webp" alt="Barista pouring steamed milk into a latte" width={1600} height={898} sizes="(min-width: 768px) 50vw, 100vw" className="w-full" />
            </div>
          </div>
          <div className="reveal archway plaster flex flex-col justify-end px-8 pb-10 pt-28">
            <h3 className="display text-center text-4xl italic">Hours</h3>
            <dl className="mt-6 divide-y divide-[var(--line)]">
              {hours.map(([d, h]) => (
                <div key={d} className="flex justify-between py-3"><dt>{d}</dt><dd className={h === "Closed" ? "text-terra" : "text-muted"}>{h}</dd></div>
              ))}
            </dl>
            <p className="mt-4 text-center text-xs text-muted">From Google Maps, Nov 2026. TODO: confirm with the café.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-5 py-8 text-center text-xs text-muted">
        Concept demo prepared for Santa Cecilia. Not the official website. Photos are stock placeholders until we shoot the real café.
      </footer>
    </>
  );
}
