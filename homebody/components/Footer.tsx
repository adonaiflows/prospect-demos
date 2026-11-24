import Link from "next/link";
import { ADDRESS, CITY, MAPS, SHOP, WHERE, hours } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink px-4 pb-24 pt-16 text-paper md:px-8 md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="script text-7xl">Homebody</p>
          <p className="caps mt-2 text-[11px] text-leaf">The Matcha Society</p>
          <p className="mt-5 max-w-sm text-sm text-paper/75">Made by homebodies, for the one drink worth leaving the house for.</p>
        </div>
        <div className="text-sm">
          <p className="caps text-[11px] text-leaf">Visit</p>
          <p className="mt-3">{ADDRESS}<br />{CITY}</p>
          <p className="mt-1 text-paper/75">{WHERE}</p>
          {hours.map(([d, h]) => <p key={d} className="mt-1 text-paper/75">{d}: {h}</p>)}
          <a href={MAPS} className="mt-3 inline-block underline underline-offset-4 hover:text-leaf">Get directions</a>
        </div>
        <div className="text-sm">
          <p className="caps text-[11px] text-leaf">Pages</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/order" className="hover:text-leaf">Menu &amp; order ahead</Link>
            <Link href="/#matcha" className="hover:text-leaf">Our matcha</Link>
            <Link href="/#visit" className="hover:text-leaf">Hours &amp; directions</Link>
            <a href={SHOP} className="hover:text-leaf">Shop matcha tins</a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-7xl border-t border-paper/15 pt-6 text-center text-xs text-paper/65">
        Concept demo prepared for Homebody Matcha. Not the official website. Menu prices are samples, and some photos are stock placeholders.
      </p>
    </footer>
  );
}
