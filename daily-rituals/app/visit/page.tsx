import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Stage from "@/components/Stage";
import { ADDRESS, MAPS, MAP_EMBED, PHONE, TEL, hours } from "@/lib/site";

export const metadata: Metadata = { title: "Visit", description: "Hours, directions and what to expect at Daily Rituals, 3409 Central Ave NE in Nob Hill, Albuquerque." };

export default function VisitPage() {
  return (
    <main id="main">
      <Reveal />
      <Stage />
      <section className="limewash">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-12 md:grid-cols-2 md:px-8 md:pb-24 md:pt-16">
          <div>
            <p className="caps text-[11px] text-olive">Visit</p>
            <h1 className="display mt-5 text-[3rem] md:text-[5rem]">On Central, <span className="accent text-wood">in Nob Hill.</span></h1>
            <address className="mt-6 not-italic text-lg">{ADDRESS}</address>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ink">Get directions</a>
              <a href={TEL} className="btn btn-line">Call {PHONE}</a>
            </div>
            <dl className="mt-10 max-w-sm divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {hours.map(([d, h]) => (
                <div key={d} className="flex justify-between py-4"><dt className="text-sm uppercase tracking-[.18em] text-muted">{d}</dt><dd className="text-lg">{h}</dd></div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-muted">From Google Maps, Nov 2026. TODO: confirm with the café.</p>
          </div>
          <div className="lift relative min-h-[360px] overflow-hidden bg-sand">
            <iframe title="Map to Daily Rituals" src={MAP_EMBED} className="absolute inset-0 h-full w-full border-0 grayscale-[.35]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* STOREFRONT + SISTER SHOP */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_1fr] md:px-8">
          <div className="scene reveal rise3d"><div data-stage="9">
            <Image data-z="0" src="/images/r-storefront.webp" alt="Daily Rituals and House of Stickks & Stones storefronts side by side at night" width={1360} height={875} sizes="(min-width: 768px) 55vw, 100vw" className="lift w-full" />
          </div></div>
          <div className="reveal">
            <p className="caps text-[11px] text-olive">Look for the star</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">Two shops, <span className="accent text-wood">one open doorway.</span></h2>
            <p className="mt-6 text-muted">Daily Rituals and our sister shop House of Stickks &amp; Stones share a wall, with an open doorway between them. Grab your coffee and wander through.</p>
          </div>
        </div>
      </section>

      {/* KIDS + SPACE */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <div className="reveal">
          <p className="caps text-[11px] text-olive">Bring the kids</p>
          <h2 className="display mt-4 text-4xl md:text-6xl">A kids area, <span className="accent text-wood">so grown-ups can sip.</span></h2>
          <p className="mt-6 text-muted">A play corner by the front window, with a little kitchen and a low table. TODO: confirm what&apos;s there now.</p>
          <Link href="/order" className="btn btn-ink mt-8">Order ahead</Link>
        </div>
        <div className="scene relative h-[420px]">
          <div data-stage="10" className="absolute inset-0">
            <div data-z="0" className="lift absolute inset-y-0 left-0 w-[70%] overflow-hidden"><Image src="/images/r-lounge.webp" alt="Lounge chair and menu board" fill sizes="(min-width: 768px) 35vw, 70vw" className="object-cover" /></div>
            <div data-z="120" className="absolute bottom-6 right-0 w-[44%]"><figure className="bob lift overflow-hidden border-[7px] border-paper"><Image src="/images/r-table.webp" alt="Live-edge wood table with log benches" width={750} height={906} sizes="220px" className="w-full" /></figure></div>
          </div>
        </div>
      </section>
    </main>
  );
}
