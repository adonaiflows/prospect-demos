import Image from "next/image";
import Link from "next/link";
import { ADDRESS, MAPS, PHONE, TEL, hours } from "@/lib/site";
import { Wordmark } from "@/components/Header";
import Reveal from "@/components/Reveal";
import Stage from "@/components/Stage";
import Star from "@/components/Star";
import Lamp from "@/components/Lamp";

// Facts: Google Maps listing (checked Nov 22, 2026) and Adonai (sister shop House of Stickks & Stones shares a wall and an open doorway).
// Photos: supplied by Adonai from the café's public listings. TODO: get the owners' OK or swap in their own photos before launch.
export default function Home() {
  return (
    <>
      <Reveal />
      <Stage />

      <main id="main">
        {/* HERO: limewash wall, rattan lamps, a 3D stack of real photos that turns toward the cursor */}
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
                <Link href="/order" className="btn btn-ink">Order ahead</Link>
                <Link href="/shop" className="btn btn-line">Shop the gift shop</Link>
              </div>
              <p className="mt-8 flex items-center gap-3 text-sm text-muted">
                <span className="tracking-[.3em] text-wood" aria-hidden>★★★★★</span>
                4.9 on Google
              </p>
            </div>

            <div className="scene relative mx-auto h-[440px] w-full max-w-[440px] md:h-[560px]">
              <div data-stage="14" className="absolute inset-0">
                <div data-z="0" className="arch lift absolute inset-x-10 bottom-0 top-0 overflow-hidden bg-sand">
                  <Image src="/images/r-counter.webp" alt="The Daily Rituals counter under rattan pendant lights" fill priority sizes="(min-width: 768px) 360px, 80vw" className="object-cover" />
                </div>
                <div data-z="110" className="absolute -left-1 bottom-10 w-[44%]">
                  <figure className="bob lift overflow-hidden border-[7px] border-paper">
                    <Image src="/images/r-lattes.webp" alt="Two lattes with leaf art in black stoneware cups" width={734} height={619} sizes="200px" className="w-full" />
                  </figure>
                </div>
                <div data-z="170" className="absolute -right-1 top-14 w-[36%]">
                  <figure className="bob-2 lift overflow-hidden border-[7px] border-paper">
                    <Image src="/images/r-pistachio.webp" alt="Latte topped with crushed pistachio" width={754} height={780} sizes="170px" className="w-full" />
                  </figure>
                </div>
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

          <div className="scene mt-14"><div data-stage="7" className="relative grid gap-6 md:h-[640px] md:grid-cols-12 md:gap-0">
            <figure data-z="0" className="reveal relative overflow-hidden md:col-span-7 md:col-start-1 md:row-start-1 md:h-[560px]">
              <Image src="/images/r-lounge.webp" alt="Lounge chair and menu board inside the café" width={754} height={922} sizes="(min-width: 768px) 58vw, 100vw" className="h-full w-full object-cover" />
            </figure>
            <figure data-z="60" className="reveal lift relative z-10 overflow-hidden border-[10px] border-plaster md:col-span-5 md:col-start-7 md:row-start-1 md:mt-24 md:h-[440px]" data-depth="-0.08">
              <Image src="/images/r-boutique.webp" alt="The open shop floor with clothing racks, home goods and lounge seating" width={1155} height={874} sizes="(min-width: 768px) 40vw, 100vw" className="h-full w-full object-cover" />
            </figure>
            <figure data-z="130" className="reveal lift relative z-20 hidden w-56 overflow-hidden border-[8px] border-plaster md:absolute md:-bottom-6 md:left-[52%] md:block" data-depth="-0.18">
              <Image src="/images/r-table.webp" alt="Live-edge wood table with log benches" width={750} height={906} sizes="224px" className="w-full" />
            </figure>
          </div>
          </div>
        </section>

        {/* LAVENDER LATTE (Adonai's photo) */}
        <section id="lavender" className="relative isolate overflow-hidden bg-ink text-paper">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden md:min-h-[640px]">
              <div className="absolute inset-x-0 -bottom-[12%] -top-[12%]" data-depth="0.12">
                <Image src="/images/r-lavender.webp" alt="Lavender latte with leaf art and dried lavender on a wooden table" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="flex items-center px-6 py-20 md:px-16">
              <div>
                <p className="reveal caps text-[11px] text-lav">House favorite</p>
                <h2 className="reveal display mt-4 text-5xl md:text-7xl">The <span className="accent text-lav">lavender</span> latte.</h2>
                <p className="reveal mt-6 max-w-md text-lg text-paper/80">Espresso, steamed milk and our house lavender syrup.</p>
                <p className="reveal mt-4 text-xs text-paper/55">TODO: price, milk options and whether it comes iced.</p>
                <Link href="/order" className="reveal btn mt-8 bg-paper text-ink hover:bg-sand">Order one ahead</Link>
                
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
              <div className="reveal md:pb-3"><p className="text-muted">Woven baskets, speckled stoneware, apothecary bottles and cards. Now you can shop them online and pick them up any day we&apos;re open.</p><Link href="/shop" className="btn btn-ink mt-6">Shop online</Link></div>
            </div>
            <div className="scene mt-12">
              <div data-stage="8" className="grid gap-6 md:grid-cols-2">
                <figure data-z="0" className="reveal rise3d lift relative self-start overflow-hidden"><Image src="/images/r-shelves.webp" alt="Gift-shop shelves with jars, cards and woven baskets on a driftwood stand" width={744} height={922} sizes="(min-width: 768px) 50vw, 100vw" className="w-full" /></figure>
                <figure data-z="80" className="reveal rise3d lift relative self-start overflow-hidden md:-ml-16 md:mt-24" data-depth="-0.1"><Image src="/images/r-shop.webp" alt="Wood tables of gifts, textiles and stoneware" width={752} height={926} sizes="(min-width: 768px) 50vw, 100vw" className="w-full" /></figure>
              </div>
            </div>
          </div>
        </section>

        {/* SISTER SHOP: House of Stickks & Stones */}
        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_1fr] md:px-8">
            <div className="scene reveal rise3d relative"><div data-stage="9">
              <Image data-z="0" src="/images/r-storefront.webp" alt="Daily Rituals and House of Stickks & Stones storefronts side by side at night" width={1360} height={875} sizes="(min-width: 768px) 55vw, 100vw" className="lift w-full" />
              </div>
            </div>
            <div className="reveal">
              <p className="caps text-[11px] text-olive">Next door</p>
              <h2 className="display mt-4 text-5xl md:text-6xl">Through the doorway: <span className="accent text-wood">House of Stickks &amp; Stones.</span></h2>
              <p className="mt-6 text-muted">Our sister shop shares a wall with the café, with an open doorway between the two. Grab your coffee and wander through.</p>
              <p className="mt-4 text-xs text-muted">TODO: one line on what Stickks &amp; Stones carries, plus its link.</p>
              
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
                <Link href="/visit" className="btn bg-paper text-ink">Hours &amp; directions</Link>
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

    </>
  );
}
