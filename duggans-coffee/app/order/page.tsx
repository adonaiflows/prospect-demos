import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Stage from "@/components/Stage";
import AddToOrder from "@/components/AddToOrder";
import { OrderBar } from "@/components/Cart";
import { menu } from "@/lib/catalog";
import { hours } from "@/lib/site";

export const metadata: Metadata = { title: "Order ahead", description: "Order coffee and breakfast ahead for pickup at Duggan's Coffee on Lead Ave." };

export default function OrderPage() {
  return (
    <main id="main">
      <Reveal />
      <Stage />
      {/* HERO */}
      <section className="grain relative isolate overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-12 md:grid-cols-[1.1fr_1fr] md:px-8 md:pb-20 md:pt-16">
          <div className="relative z-10">
            <p className="caps text-[11px] text-amber">Order ahead · Pickup on Lead Ave</p>
            <h1 className="display mt-5 text-[16vw] md:text-[7rem]">Skip the line. <span className="text-amber">Keep the plate.</span></h1>
            <p className="mt-6 max-w-md text-lg text-muted">Order from your phone, pick a time, and it&apos;s bagged and waiting when you walk in.</p>
            <ol className="mt-8 grid max-w-md grid-cols-3 gap-3 text-center text-xs font-bold uppercase tracking-wider">
              {["Choose", "Pick a time", "Pick up"].map((s, i) => (
                <li key={s} className="rounded-md border border-[var(--line)] bg-bg2 px-2 py-4"><span className="display block text-3xl text-amber">{i + 1}</span>{s}</li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted">Pickup hours: {hours.map(([d, h]) => `${d} ${h}`).join(" · ")}</p>
          </div>

          <div className="scene relative mx-auto hidden h-[480px] w-full max-w-[480px] md:block">
            <div data-stage="14" className="absolute inset-0">
              <div data-z="0" className="lift absolute inset-x-10 bottom-0 top-0 overflow-hidden rounded-xl">
                <Image src="/images/pour.webp" alt="Latte art being poured" fill priority sizes="400px" className="object-cover" />
              </div>
              <div data-z="130" data-rot="rotate(-4deg)" className="absolute -left-2 bottom-8 w-[44%]">
                <figure className="bob lift overflow-hidden rounded-md border-[6px] border-cream"><Image src="/images/tamp.webp" alt="Barista tamping espresso" width={1100} height={733} sizes="210px" className="w-full" /></figure>
              </div>
              <div data-z="190" data-rot="rotate(4deg)" className="absolute -right-2 top-10 w-[40%]">
                <figure className="bob-2 lift overflow-hidden rounded-md border-[6px] border-cream"><Image src="/images/shot.webp" alt="Espresso pulling" width={1100} height={579} sizes="190px" className="w-full" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <nav aria-label="Menu sections" className="sticky top-[64px] z-30 border-y border-[var(--line)] bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-3 text-sm font-bold uppercase tracking-wider md:px-8">
          {menu.map((s) => <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap hover:text-amber">{s.title}</a>)}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-5 pb-28 pt-10 md:px-8">
        <p className="rounded-md border border-dashed border-[var(--line)] px-4 py-3 text-xs text-muted">Sample menu and prices for this demo. The live version pulls the real menu straight from Duggan&apos;s POS.</p>

        {menu.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-32 pt-14">
            <h2 className="reveal display text-5xl md:text-6xl">{sec.title}</h2>
            <div className={`mt-8 grid gap-6 ${sec.items.some((i) => i.img) ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {sec.items.map((item) =>
                item.img ? (
                  <article key={item.id} className="reveal scene">
                    <div data-stage="6" className="h-full">
                      <div data-z="0" className="lift flex h-full flex-col overflow-hidden rounded-xl border border-[var(--line)] bg-bg2">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image src={item.img} alt={item.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                          {item.tag && <span className="absolute left-3 top-3 rounded bg-amber px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1a0f08]">{item.tag}</span>}
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <h3 className="display text-3xl">{item.name}</h3>
                          <p className="mt-1 flex-1 text-sm text-muted">{item.desc}</p>
                          <AddToOrder item={item} kind="cafe" dark />
                        </div>
                      </div>
                    </div>
                  </article>
                ) : (
                  <article key={item.id} className="reveal border-b border-[var(--line)] pb-5">
                    <h3 className="display text-3xl">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted">{item.desc}</p>
                    <AddToOrder item={item} kind="cafe" dark />
                  </article>
                )
              )}
            </div>
          </section>
        ))}
      </div>
      <OrderBar kind="cafe" />
    </main>
  );
}
