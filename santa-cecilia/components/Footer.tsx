import Link from "next/link";
import { ADDRESS, MAPS, hours } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-16 text-bg md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="display text-4xl italic">Santa Cecilia</p>
          <p className="mt-4 max-w-sm text-sm text-bg/70">A patio café on Romero Street, a short walk from the Old Town Plaza.</p>
        </div>
        <div className="text-sm">
          <p className="caps text-[11px] text-[#f2b872]">Visit</p>
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-3 block hover:text-[#f2b872]">{ADDRESS}</a>
          {hours.map(([d, h]) => <p key={d} className="mt-1 text-bg/70">{d}: {h}</p>)}
        </div>
        <div className="text-sm">
          <p className="caps text-[11px] text-[#f2b872]">Pages</p>
          <div className="mt-3 flex flex-col gap-1">
            <Link href="/order" className="hover:text-[#f2b872]">Order ahead</Link>
            <Link href="/#patio" className="hover:text-[#f2b872]">The patio</Link>
            <Link href="/#visit" className="hover:text-[#f2b872]">Hours &amp; directions</Link>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-6xl border-t border-bg/15 pt-6 text-center text-xs text-bg/65">
        Concept demo prepared for Santa Cecilia. Not the official website. Menu items and prices are samples, and photos are stock placeholders.
      </p>
    </footer>
  );
}
