"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CartButton } from "./Cart";
import { TEL } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/order", label: "Order ahead" },
  { href: "/#story", label: "Our story" },
  { href: "/#visit", label: "Hours" },
];

export default function Header() {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  useEffect(() => setMenu(false), [path]);
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8" aria-label="Main">
        <Link href="/" className="display text-2xl tracking-wide md:text-3xl">Duggan&apos;s</Link>
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {links.slice(1).map((l) => (
            <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined} className={`hover:text-amber ${path === l.href ? "text-amber" : ""}`}>{l.label}</Link>
          ))}
          <a href={TEL} className="hover:text-amber">Call</a>
        </div>
        <div className="flex items-center gap-2">
          <CartButton kind="cafe" className="inline-flex min-h-10 items-center rounded-md bg-amber px-4 text-sm font-bold text-[#1a0f08]" />
          <button onClick={() => setMenu((m) => !m)} className="px-2 py-2 text-sm font-semibold md:hidden" aria-expanded={menu} aria-controls="mobile-nav">Menu</button>
        </div>
      </nav>
      {menu && (
        <div id="mobile-nav" className="border-t border-[var(--line)] px-5 pb-4 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`display block py-3 text-3xl ${path === l.href ? "text-amber" : ""}`}>{l.label}</Link>
          ))}
          <a href={TEL} className="display block py-3 text-3xl">Call</a>
        </div>
      )}
    </header>
  );
}
