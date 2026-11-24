import Link from "next/link";
import { Wordmark } from "./Header";
import { ADDRESS, PHONE, TEL, hours } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-16 text-paper md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Wordmark className="text-sm text-sand" />
          <p className="mt-4 max-w-sm text-sm text-paper/70">Coffee, a gift shop and a kids area on Central Ave in Nob Hill. Our sister shop House of Stickks &amp; Stones is right through the doorway.</p>
        </div>
        <div className="text-sm text-paper/80">
          <p className="caps text-[11px] text-sand">Visit</p>
          <p className="mt-3">{ADDRESS}</p>
          <a href={TEL} className="mt-1 block hover:text-sand">{PHONE}</a>
          {hours.map(([d, h]) => <p key={d} className="mt-1 text-paper/60">{d}: {h}</p>)}
        </div>
        <div className="text-sm">
          <p className="caps text-[11px] text-sand">Pages</p>
          <div className="mt-3 flex flex-col gap-1">
            <Link href="/order" className="hover:text-sand">Order ahead</Link>
            <Link href="/shop" className="hover:text-sand">Shop</Link>
            <Link href="/visit" className="hover:text-sand">Visit</Link>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-6xl border-t border-paper/15 pt-6 text-center text-xs text-paper/65">
        Concept demo prepared for Daily Rituals. Not the official website. Menu items and prices are samples.
      </p>
    </footer>
  );
}
