import type { Metadata } from "next";
import Image from "next/image";
import AddToOrder from "@/components/AddToOrder";
import { OrderBar } from "@/components/Cart";
import { menu } from "@/lib/catalog";
import { WHERE, hours } from "@/lib/site";
import { z } from "@/lib/z";

export const metadata: Metadata = { title: "Menu & order ahead", description: "Order matcha and lattes ahead for pickup at Homebody Matcha, Winrock Town Center, Albuquerque." };

export default function OrderPage() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-10 md:grid-cols-[1.15fr_1fr] md:px-8 md:pb-16 md:pt-14">
          <div>
            <p className="caps text-[11px] text-matcha">Order ahead · Pickup at Winrock</p>
            <h1 className="display mt-4 text-[13vw] md:text-[6rem]">Your order, <span className="italic text-matcha">waiting with your name.</span></h1>
            <p className="mt-5 max-w-md text-lg text-muted">Pick your drinks, choose a pickup time, and walk straight to the counter. {WHERE}.</p>
            <ol className="mt-8 grid max-w-md grid-cols-3 gap-3 text-center text-xs font-semibold">
              {["Choose drinks", "Pick a time", "Walk in, grab it"].map((s, i) => (
                <li key={s} className="rounded-2xl border border-[var(--line)] bg-paper px-2 py-4"><span className="display block text-4xl text-matcha">{i + 1}</span>{s}</li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted">Pickup hours: {hours.map(([d, h]) => `${d} ${h}`).join(" · ")}</p>
          </div>
          <div className="scene relative mx-auto hidden h-[480px] w-full max-w-[460px] md:block">
            <div data-stage="9" className="absolute inset-0">
              <figure style={z(0)} className="lift arch absolute left-[8%] top-0 w-[70%] overflow-hidden">
                <Image src="/images/hb-cup.webp" alt="An iced latte in a Homebody cup" width={870} height={1178} priority sizes="320px" className="w-full" />
              </figure>
              <div style={z(170, "rotate(5deg)")} className="absolute bottom-0 right-0 w-[34%]">
                <Image src="/images/iced-cut.webp" alt="" width={640} height={1065} sizes="160px" className="w-full drop-shadow-[0_40px_30px_rgba(40,30,15,.45)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <nav aria-label="Menu sections" className="sticky top-16 z-30 border-y border-[var(--line)] bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-4 py-3 text-sm font-semibold md:px-8">
          {menu.map((s) => <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap hover:text-matcha">{s.title}</a>)}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 pb-28 pt-8 md:px-8">
        <p className="rounded-2xl border border-dashed border-[var(--line)] px-4 py-3 text-xs text-muted">
          Sample menu for this demo. Drink names come from what Homebody regulars order; every price is a placeholder. The live version pulls the real menu and prices straight from Homebody&apos;s register.
        </p>

        {menu.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-32 pt-14">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="display text-5xl md:text-6xl">{sec.title}</h2>
              {sec.note && <p className="text-muted">{sec.note}</p>}
            </div>
            {sec.items.some((i) => i.img) && (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {sec.items.filter((i) => i.img).map((item) => (
                  <article key={item.id} className="grid grid-cols-[38%_1fr] overflow-hidden rounded-2xl border border-[var(--line)] bg-paper">
                    <div className="relative flex items-center justify-center bg-bg2 p-3">
                      <Image src={item.img!} alt={item.alt ?? item.name} width={640} height={640} sizes="(min-width: 768px) 220px, 38vw" className="max-h-56 w-auto object-contain" />
                    </div>
                    <div className="flex flex-col p-5">
                      <h3 className="display text-3xl">{item.name}</h3>
                      <p className="mt-1 flex-1 text-sm text-muted">{item.desc}</p>
                      <AddToOrder item={item} kind="cafe" />
                    </div>
                  </article>
                ))}
              </div>
            )}
            <div className="mt-6 grid gap-x-10 md:grid-cols-2">
              {sec.items.filter((i) => !i.img).map((item) => (
                <article key={item.id} className="border-b border-[var(--line)] py-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="display text-3xl">{item.name}</h3>
                    {item.tag && <span className="caps shrink-0 rounded-full bg-matcha px-2.5 py-1 text-[10px] text-white">{item.tag}</span>}
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.desc}</p>
                  <AddToOrder item={item} kind="cafe" />
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      <OrderBar kind="cafe" />
    </main>
  );
}
