import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Stage from "@/components/Stage";
import AddToOrder from "@/components/AddToOrder";
import { OrderBar } from "@/components/Cart";
import { menu } from "@/lib/catalog";
import { hours } from "@/lib/site";

export const metadata: Metadata = { title: "Order ahead", description: "Order coffee and lavender lattes ahead for pickup at Daily Rituals in Nob Hill." };

export default function OrderPage() {
  return (
    <main id="main">
      <Reveal />
      <Stage />
      {/* HERO */}
      <section className="limewash relative isolate overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-12 md:grid-cols-[1.1fr_1fr] md:px-8 md:pb-20 md:pt-16">
          <div>
            <p className="caps text-[11px] text-olive">Order ahead · Pickup on Central</p>
            <h1 className="display mt-5 text-[3rem] md:text-[5rem]">Skip the line, <span className="accent text-wood">keep the ritual.</span></h1>
            <p className="mt-6 max-w-md text-lg text-muted">Order from your phone, pick a time, and your drinks are waiting when you walk in.</p>
            <ol className="mt-8 grid max-w-md grid-cols-3 gap-3 text-center text-[11px] uppercase tracking-[.18em]">
              {["Choose", "Pick a time", "Pick up"].map((s, i) => (
                <li key={s} className="border border-[var(--line)] bg-paper/70 px-2 py-4"><span className="accent block text-2xl normal-case tracking-normal text-wood">{i + 1}</span>{s}</li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted">Pickup hours: {hours.map(([d, h]) => `${d} ${h}`).join(" · ")}</p>
          </div>

          <div className="scene relative mx-auto hidden h-[480px] w-full max-w-[460px] md:block">
            <div data-stage="14" className="absolute inset-0">
              <div data-z="0" className="arch lift absolute inset-x-12 bottom-0 top-0 overflow-hidden">
                <Image src="/images/r-lavender.webp" alt="Lavender latte with dried lavender" fill priority sizes="360px" className="object-cover object-[42%_50%]" />
              </div>
              <div data-z="120" className="absolute -left-2 bottom-8 w-[40%]">
                <figure className="bob lift overflow-hidden border-[7px] border-paper"><Image src="/images/r-lattes.webp" alt="Lattes with leaf art" width={734} height={619} sizes="190px" className="w-full" /></figure>
              </div>
              <div data-z="180" className="absolute -right-2 top-10 w-[34%]">
                <figure className="bob-2 lift overflow-hidden border-[7px] border-paper"><Image src="/images/r-pistachio.webp" alt="Pistachio latte" width={754} height={780} sizes="160px" className="w-full" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <nav aria-label="Menu sections" className="sticky top-[61px] z-30 border-y border-[var(--line)] bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3 text-xs uppercase tracking-[.2em] md:px-8">
          {menu.map((s) => <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap hover:text-wood">{s.title}</a>)}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-5 pb-28 pt-10 md:px-8">
        <p className="border border-dashed border-[var(--line)] px-4 py-3 text-xs text-muted">Sample menu and prices for this demo. The live version pulls the real menu straight from the café&apos;s POS.</p>
        <p className="mt-3 text-sm text-muted">Shopping for gifts? The <a href="/shop" className="underline underline-offset-2 hover:text-wood">gift shop</a> has its own bag, with pickup any day we&apos;re open.</p>

        {menu.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-32 pt-14">
            <h2 className="reveal display text-4xl md:text-5xl">{sec.title}</h2>
            <div className={`mt-8 grid gap-6 ${sec.items.some((i) => i.img) ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {sec.items.map((item) =>
                item.img ? (
                  <article key={item.id} className="reveal scene">
                    <div data-stage="6" className="h-full">
                      <div data-z="0" className="lift flex h-full flex-col bg-paper">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image src={item.img} alt={item.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                          {item.tag && <span className="absolute left-3 top-3 bg-paper/90 px-2 py-1 text-[10px] uppercase tracking-[.2em]">{item.tag}</span>}
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <h3 className="text-lg font-medium">{item.name}</h3>
                          <p className="mt-1 flex-1 text-sm text-muted">{item.desc}</p>
                          <AddToOrder item={item} kind="cafe" />
                        </div>
                      </div>
                    </div>
                  </article>
                ) : (
                  <article key={item.id} className="reveal border-b border-[var(--line)] pb-5">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted">{item.desc}</p>
                    <AddToOrder item={item} kind="cafe" />
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
