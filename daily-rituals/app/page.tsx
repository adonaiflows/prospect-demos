import Image from "next/image";
import Reveal from "@/components/Reveal";
import Star from "@/components/Star";
import Lamp from "@/components/Lamp";

// Facts: Google Maps listing (checked Nov 22, 2026) and Adonai (sister shop House of Stickks & Stones shares a wall and an open doorway).
// Photos: supplied by Adonai from the café's public listings. TODO: get the owners' OK or swap in their own photos before launch.
const PHONE = "(504) 377-1751";
const TEL = "tel:+15043771751";
const ADDRESS = "3409 Central Ave NE, Albuquerque, NM 87106";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Daily+Rituals+3409+Central+Ave+NE+Albuquerque";

const hours = [
  ["Sunday – Thursday", "8 am – 3 pm"],
  ["Friday – Saturday", "8 am – 5 pm"],
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[.5em] caps ${className}`}>
      Daily <Star className="h-[1.3em] w-[1.3em]" /> Rituals
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">Skip to content</a>

      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-plaster/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8" aria-label="Main">
          <a href="#" aria-label="Daily Rituals home"><Wordmark className="text-sm md:text-base" /></a>
          <div className="hidden items-center gap-8 text-xs uppercase tracking-[.2em] md:flex">
            <a href="#space" className="hover:text-wood">The space</a>
            <a href="#lavender" className="hover:text-wood">Lavender latte</a>
            <a href="#shop" className="hover:text-wood">Gift shop</a>
            <a href="#visit" className="hover:text-wood">Visit</a>
          </div>
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="bg-ink px-4 py-2 text-xs uppercase tracking-[.2em] text-paper">Directions</a>
        </nav>
      </header>

      <main id="main">
        {/* HERO: limewash wall, hanging rattan lamps, 3D stoneware cup */}
        <section className="limewash relative isolate overflow-hidden">
          <Lamp className="pointer-events-none absolute -top-2 left-[6%] hidden w-20 md:block" />
          <Lamp className="pointer-events-none absolute -top-10 right-[4%] w-16 md:w-24" />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-[1.05fr_1fr] md:px-8 md:pb-24 md:pt-16">
            <div>
              <p className="caps text-[11px] text-olive">Coffee · Gift shop · Nob Hill</p>
              <h1 className="display mt-5 text-[3.2rem] md:text-[5.4rem]">
                A daily ritual, <span className="accent text-wood">poured slow.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted">
                Coffee, house lavender lattes, a gift shop and a kids area on Central Ave. Women-owned and Latino-owned, with our sister shop House of Stickks &amp; Stones right through the doorway.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#visit" className="btn btn-ink">Plan your visit</a>
                <a href="#lavender" className="btn btn-line">The lavender latte</a>
              </div>
              <p className="mt-8 flex items-center gap-3 text-sm text-muted">
                <span className="tracking-[.3em] text-wood" aria-hidden>★★★★★</span>
                4.9 on Google
              </p>
            </div>

            <div className="relative mx-auto h-[430px] w-full max-w-[420px] md:h-[540px]">
              <div className="arch absolute inset-x-4 bottom-0 top-0 overflow-hidden bg-sand">
                <Image src="/images/r-lattes.webp" alt="Two lattes with leaf art in black stoneware cups" fill priority sizes="(min-width: 768px) 400px, 90vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="border-y border-[var(--line)] bg-ink text-paper">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 px-5 text-center md:grid-cols-4 md:px-8">
            {["Women-owned", "Latino-owned", "Gift shop", "Kids area"].map((a) => (
              <li key={a} className="flex items-center justify-center gap-3 py-5 text-[11px] uppercase tracking-[.28em]"><Star className="h-3 w-3 text-sand" />{a}</li>
            ))}
          </ul>
        </section>

        {/* THE SPACE: layered real photos */}
        <section id="space" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid items-end gap-6 md:grid-cols-2">
            <div className="reveal">
              <p className="caps text-[11px] text-olive">The space</p>
              <h2 className="display mt-4 text-5xl md:text-7xl">Rattan light, raw wood, <span className="accent text-wood">room to stay.</span></h2>
            </div>
            <p className="reveal text-muted md:pb-3">Long wood tables, soft chairs and plants in the window. Come for a cup and stay for the afternoon.</p>
          </div>

          <div className="relative mt-14 grid gap-6 md:h-[640px] md:grid-cols-12 md:gap-0">
            <figure className="reveal relative overflow-hidden md:col-span-7 md:col-start-1 md:row-start-1 md:h-[560px]">
              <Image src="/images/r-counter.webp" alt="The Daily Rituals counter under rattan pendant lights" width={736} height={884} sizes="(min-width: 768px) 58vw, 100vw" className="h-full w-full object-cover" />
            </figure>
            <figure className="reveal relative z-10 overflow-hidden border-[10px] border-plaster shadow-[0_40px_60px_-30px_rgba(29,27,24,.6)] md:col-span-5 md:col-start-7 md:row-start-1 md:mt-24 md:h-[440px]">
              <Image src="/images/r-lounge.webp" alt="Lounge chair and menu board inside the café" width={754} height={922} sizes="(min-width: 768px) 40vw, 100vw" className="h-full w-full object-cover" />
            </figure>
            <figure className="reveal relative z-20 hidden w-56 overflow-hidden border-[8px] border-plaster shadow-xl md:absolute md:-bottom-10 md:right-0 md:block">
              <Image src="/images/r-table.webp" alt="Live-edge wood table with log benches" width={750} height={906} sizes="224px" className="w-full" />
            </figure>
          </div>
        </section>

        {/* LAVENDER LATTE (Adonai's photo) */}
        <section id="lavender" className="relative isolate overflow-hidden bg-ink text-paper">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden md:min-h-[640px]">
              <div className="absolute inset-0">
                <Image src="/images/r-lavender.webp" alt="Lavender latte with leaf art and dried lavender on a wooden table" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="flex items-center px-6 py-20 md:px-16">
              <div>
                <p className="reveal caps text-[11px] text-lav">House favorite</p>
                <h2 className="reveal display mt-4 text-5xl md:text-7xl">The <span className="accent text-lav">lavender</span> latte.</h2>
                <p className="reveal mt-6 max-w-md text-lg text-paper/80">Espresso, steamed milk and our house lavender syrup.</p>
                <p className="reveal mt-4 text-xs text-paper/55">TODO: price, milk options and whether it comes iced.</p>
                <div className="reveal mt-10 max-w-[260px]">
                                    <figure className="relative overflow-hidden">
                    <Image src="/images/r-pistachio.webp" alt="Latte topped with crushed pistachio" width={754} height={780} sizes="(min-width: 768px) 20vw, 45vw" className="w-full" />
                    <figcaption className="mt-2 text-[11px] uppercase tracking-[.2em] text-paper/60">TODO: name this drink</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GIFT SHOP */}
        <section id="shop" className="limewash py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid items-end gap-8 md:grid-cols-2">
              <div className="reveal">
                <p className="caps text-[11px] text-olive">Gift shop</p>
                <h2 className="display mt-4 text-5xl md:text-7xl">Take a little <span className="accent text-wood">ritual</span> home.</h2>
              </div>
              <p className="reveal text-muted md:pb-3">Woven baskets, stoneware, jars and cards. TODO: name the makers you carry, and add online orders for pickup.</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <figure className="reveal relative overflow-hidden"><Image src="/images/r-shelves.webp" alt="Gift-shop shelves with jars, cards and woven baskets on a driftwood stand" width={744} height={922} sizes="(min-width: 768px) 50vw, 100vw" className="w-full" /></figure>
              <figure className="reveal relative overflow-hidden md:mt-20"><Image src="/images/r-shop.webp" alt="Wood tables of gifts, textiles and stoneware" width={752} height={926} sizes="(min-width: 768px) 50vw, 100vw" className="w-full" /></figure>
            </div>
          </div>
        </section>

        {/* SISTER SHOP: House of Stickks & Stones */}
        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_1fr] md:px-8">
            <div className="reveal relative">
              <Image src="/images/r-storefront.webp" alt="Daily Rituals and House of Stickks & Stones storefronts side by side at night" width={1360} height={875} sizes="(min-width: 768px) 55vw, 100vw" className="w-full" />
            </div>
            <div className="reveal">
              <p className="caps text-[11px] text-olive">Next door</p>
              <h2 className="display mt-4 text-5xl md:text-6xl">Through the doorway: <span className="accent text-wood">House of Stickks &amp; Stones.</span></h2>
              <p className="mt-6 text-muted">Our sister shop shares a wall with the café, with an open doorway between the two. Grab your coffee and wander through.</p>
              <p className="mt-4 text-xs text-muted">TODO: one line on what Stickks &amp; Stones carries, plus its link.</p>
              <div className="mt-8 overflow-hidden">
                <Image src="/images/r-boutique.webp" alt="Clothing racks and home goods in the shop" width={1155} height={874} sizes="(min-width: 768px) 40vw, 100vw" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* KIDS */}
        <section className="mx-auto max-w-4xl px-5 py-24 text-center md:py-28">
          <Star className="reveal mx-auto h-8 w-8 text-wood" />
          <h2 className="reveal display mt-6 text-4xl md:text-6xl">A kids area, <span className="accent text-wood">so grown-ups can sip.</span></h2>
          <p className="reveal mx-auto mt-5 max-w-lg text-muted">A play corner by the front window, with a little kitchen and a low table. TODO: confirm what&apos;s there now.</p>
        </section>

        {/* VISIT */}
        <section id="visit" className="bg-ink py-24 text-paper md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
            <div className="reveal">
              <Wordmark className="text-sm text-sand" />
              <h2 className="display mt-6 text-5xl md:text-7xl">On Central, <span className="accent text-sand">in Nob Hill.</span></h2>
              <address className="mt-6 not-italic text-lg text-paper/85">{ADDRESS}</address>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn bg-paper text-ink">Get directions</a>
                <a href={TEL} className="btn border border-paper/60">Call {PHONE}</a>
              </div>
            </div>
            <div className="reveal arch border border-paper/20 px-8 pb-10 pt-20 text-center">
              <h3 className="caps text-xs text-sand">Hours</h3>
              <dl className="mt-6 space-y-5">
                {hours.map(([d, h]) => (
                  <div key={d}><dt className="text-[11px] uppercase tracking-[.25em] text-paper/60">{d}</dt><dd className="display mt-1 text-3xl">{h}</dd></div>
                ))}
              </dl>
              <p className="mt-6 text-xs text-paper/50">From Google Maps, Nov 2026. TODO: confirm with the café.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink px-5 pb-8 text-center text-xs text-paper/50">
        Concept demo prepared for Daily Rituals. Not the official website.
      </footer>
    </>
  );
}
