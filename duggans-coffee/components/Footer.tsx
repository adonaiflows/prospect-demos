import Link from "next/link";
import { ADDRESS, PHONE, TEL, hours } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 pb-10 pt-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="display text-5xl">Duggan&apos;s</p>
          <p className="mt-4 max-w-sm text-sm text-muted">Veteran-owned coffee and breakfast on Lead Ave, near UNM.</p>
        </div>
        <div className="text-sm">
          <p className="caps text-[11px] text-amber">Visit</p>
          <p className="mt-3">{ADDRESS}</p>
          <a href={TEL} className="mt-1 block hover:text-amber">{PHONE}</a>
          {hours.map(([d, h]) => <p key={d} className="mt-1 text-muted">{d}: {h}</p>)}
        </div>
        <div className="text-sm">
          <p className="caps text-[11px] text-amber">Pages</p>
          <div className="mt-3 flex flex-col gap-1">
            <Link href="/order" className="hover:text-amber">Order ahead</Link>
            <Link href="/#story" className="hover:text-amber">Our story</Link>
            <Link href="/#visit" className="hover:text-amber">Hours &amp; directions</Link>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-7xl border-t border-[var(--line)] pt-6 text-center text-xs text-muted">
        Concept demo prepared for Duggan&apos;s Coffee. Not the official website. Menu items and prices are samples, and photos are stock placeholders.
      </p>
    </footer>
  );
}
