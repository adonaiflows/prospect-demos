import Image from "next/image";
import Cup3D from "@/components/Cup3D";
import Depth from "@/components/Depth";
import Reveal from "@/components/Reveal";

// Facts below come from Daily Rituals' Google Maps listing and reviews (checked Nov 22, 2026). Anything not verified is marked TODO.
const PHONE = "(504) 377-1751";
const TEL = "tel:+15043771751";
const ADDRESS = "3409 Central Ave NE, Albuquerque, NM 87106";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Daily+Rituals+3409+Central+Ave+NE+Albuquerque";

const hours = [
  ["Sunday – Thursday", "8 am – 3 pm"],
  ["Friday – Saturday", "8 am – 5 pm"],
];

const rituals = [
  { img: "/images/circle.webp", alt: "Friends sharing a table of lattes", n: "I", title: "Gather", body: "A calm room on Central to meet a friend, read, or just sit for a minute." },
  { img: "/images/latte3.webp", alt: "Latte being finished at the espresso machine", n: "II", title: "Sip", body: "Coffee drinks made to order, including lattes with our house lavender syrup." },
  { img: "/images/mugs.webp", alt: "A ring of coffee cups on a wooden table", n: "III", title: "Take a little home", body: "Browse the gift shop on your way out. TODO: name the makers and products you carry." },
];

export default function Home() {
  return (
    <>
      <Depth />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">Skip to content</a>

      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-bg/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8" aria-label="Main">
          <a href="#" className="display text-2xl italic md:text-3xl">Daily Rituals</a>
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#rituals" className="hover:text-lav">The café</a>
            <a href="#lavender" className="hover:text-lav">Lavender latte</a>
            <a href="#shop" className="hover:text-lav">Gift shop</a>
            <a href="#visit" className="hover:text-lav">Visit</a>
          </div>
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper">Directions</a>
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <div className="blob absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-lav-soft" aria-hidden />
          <div className="blob absolute -right-10 bottom-0 -z-10 h-96 w-96 rounded-full bg-sage-soft [animation-delay:-6s]" aria-hidden />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-[1.05fr_1fr] md:px-8 md:pb-24 md:pt-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.3em] text-sage">Holistic café · Nob Hill</p>
              <h1 className="display mt-5 text-[3.6rem] md:text-[6.2rem]">
                Make room for a <em className="text-lav">slower</em> morning.
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted">
                Coffee, house lavender lattes and a little gift shop on Central Ave. Women-owned, Latino-owned, and kid-friendly.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#visit" className="btn btn-ink">Plan your visit</a>
                <a href="#lavender" className="btn btn-soft">The lavender latte</a>
              </div>
              <p className="mt-8 flex items-center gap-3 text-sm text-muted">
                <span className="text-lg tracking-widest text-lav" aria-hidden>★★★★★</span>
                4.9 on Google · TODO: update review count before launch
              </p>
            </div>

            <div className="relative mx-auto h-[440px] w-full max-w-[420px] md:h-[560px]">
              <div className="arch absolute inset-x-6 bottom-0 top-8 overflow-hidden" data-depth="0.08">
                <Image src="/images/hero.webp" alt="" fill priority sizes="(min-width: 768px) 420px, 90vw" className="object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-lav-soft via-lav-soft/50 to-transparent" />
              </div>
              <div className="absolute inset-0 cursor-grab"><Cup3D /></div>
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-paper/80 px-3 py-1 text-xs text-muted backdrop-blur">Drag to turn · hover to stir</p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="border-y border-[var(--line)] bg-paper">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 divide-[var(--line)] px-5 text-center md:grid-cols-4 md:divide-x md:px-8">
            {[["Women-owned", "per Google"], ["Latino-owned", "per Google"], ["Gift shop", "on site"], ["Kids corner", "bring the little ones"]].map(([a, b]) => (
              <li key={a} className="py-6"><p className="display text-2xl italic md:text-3xl">{a}</p><p className="mt-1 text-xs uppercase tracking-widest text-muted">{b}</p></li>
            ))}
          </ul>
        </section>

        {/* RITUALS */}
        <section id="rituals" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[.3em] text-sage">The café</p>
            <h2 className="display mt-4 text-5xl md:text-7xl">Three small rituals, <em>one stop.</em></h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {rituals.map((r, i) => (
              <article key={r.title} className={`reveal tilt relative ${i === 1 ? "md:mt-16" : ""}`}>
                <div className="arch relative aspect-[3/4] overflow-hidden shadow-[0_30px_60px_-30px_rgba(46,42,37,.45)]">
                  <Image src={r.img} alt={r.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                </div>
                <div className="pop -mt-10 ml-6 mr-6 rounded-2xl bg-paper p-6 shadow-lg">
                  <p className="display text-xl italic text-lav">{r.n}</p>
                  <h3 className="display text-3xl">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted">{r.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* LAVENDER feature with layered depth */}
        <section id="lavender" className="relative isolate overflow-hidden bg-[#2f2a36] py-24 text-paper md:py-32">
          <div className="absolute inset-x-0 -bottom-[20%] -top-[20%] -z-10 opacity-35" data-depth="0.2">
            <Image src="/images/swirl.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2f2a36] via-[#2f2a36]/85 to-[#2f2a36]/40" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
            <div>
              <p className="reveal text-xs font-semibold uppercase tracking-[.3em] text-lav-soft">House favorite</p>
              <h2 className="reveal display mt-4 text-5xl md:text-7xl">The <em className="text-[#c9b6ea]">lavender</em> latte.</h2>
              <p className="reveal mt-6 max-w-md text-lg text-paper/80">
                Espresso, steamed milk and our house lavender syrup. Floral, soft and made in house.
              </p>
              <p className="reveal mt-4 text-xs text-paper/60">TODO: add price, milk options and whether it comes iced.</p>
            </div>
            <div className="relative mx-auto w-full max-w-[460px]">
              <div className="absolute inset-8 rounded-full bg-lav/40 blur-3xl" aria-hidden />
              <div data-depth="-0.12">
                <Image src="/images/cup.webp" alt="A latte with leaf art seen from above" width={900} height={873} sizes="(min-width: 768px) 460px, 90vw" className="float relative drop-shadow-[0_40px_50px_rgba(0,0,0,.5)]" />
              </div>
            </div>
          </div>
        </section>

        {/* GIFT SHOP */}
        <section id="shop" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <div className="reveal">
              <p className="text-xs font-semibold uppercase tracking-[.3em] text-sage">Gift shop</p>
              <h2 className="display mt-4 text-5xl md:text-7xl">Bring the <em>ritual</em> home.</h2>
            </div>
            <p className="reveal text-muted md:pb-3">
              The shelves by the counter, online. Guests could browse and reserve gifts for pickup, so a visit can start before they walk in.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {["Product 1", "Product 2", "Product 3", "Product 4"].map((p, i) => (
              <div key={p} className={`reveal tilt relative overflow-hidden rounded-2xl border border-[var(--line)] ${i % 2 ? "bg-lav-soft" : "bg-sage-soft"}`}>
                <div className="flex aspect-square items-center justify-center p-6 text-center">
                  <p className="pop display text-xl italic text-muted">TODO: photo of a real gift-shop item</p>
                </div>
                <div className="border-t border-[var(--line)] bg-paper px-4 py-3 text-sm"><span className="font-semibold">{p}</span> <span className="text-muted">· TODO price</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* KIDS + PHOTO */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-24 md:grid-cols-2 md:px-8">
          <div className="reveal relative overflow-hidden rounded-[2rem]">
            <Image src="/images/paper.webp" alt="Latte on a saucer beside a sketchbook" width={1200} height={799} sizes="(min-width: 768px) 50vw, 100vw" className="w-full" />
          </div>
          <div className="reveal">
            <h2 className="display text-5xl md:text-6xl">A kids corner, <em>so grown-ups can sip.</em></h2>
            <p className="mt-5 text-muted">Little ones have their own space while you finish your coffee. TODO: describe what&apos;s in the kids corner.</p>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" className="bg-paper py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
            <div className="reveal">
              <p className="text-xs font-semibold uppercase tracking-[.3em] text-sage">Visit</p>
              <h2 className="display mt-4 text-5xl md:text-7xl">On Central, <em>in Nob Hill.</em></h2>
              <address className="mt-6 not-italic text-lg">{ADDRESS}</address>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ink">Get directions</a>
                <a href={TEL} className="btn btn-soft">Call {PHONE}</a>
              </div>
            </div>
            <div className="reveal arch bg-lav-soft px-8 pb-10 pt-20 text-center">
              <h3 className="display text-4xl italic">Hours</h3>
              <dl className="mt-6 space-y-4">
                {hours.map(([d, h]) => (
                  <div key={d}><dt className="text-xs uppercase tracking-widest text-muted">{d}</dt><dd className="display text-3xl">{h}</dd></div>
                ))}
              </dl>
              <p className="mt-6 text-xs text-muted">From Google Maps, Nov 2026. TODO: confirm with the café.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-5 py-8 text-center text-xs text-muted">
        Concept demo prepared for Daily Rituals. Not the official website. Photos are stock placeholders until we shoot the real café.
      </footer>
    </>
  );
}
