"use client";
import { useState } from "react";
import { useCart } from "./Cart";
import { money, type Item } from "@/lib/catalog";

/** Size picker (when an item has sizes) and an add button that drops the item into the shared cart. */
export default function AddToOrder({ item, kind, dark = false }: { item: Item; kind: "cafe" | "shop"; dark?: boolean }) {
  const { add } = useCart();
  const [size, setSize] = useState(0);
  const [added, setAdded] = useState(false);
  const price = item.price + (item.sizes?.[size].add ?? 0);
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {item.sizes && (
        <div className="flex" role="group" aria-label={`${item.name} size`}>
          {item.sizes.map((s, i) => (
            <button key={s.label} onClick={() => setSize(i)} aria-pressed={size === i}
              className={`border px-3 py-2 text-xs ${size === i ? (dark ? "border-paper bg-paper text-ink" : "border-ink bg-ink text-paper") : dark ? "border-paper/30" : "border-[var(--line)]"}`}>
              {s.label}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => { add({ id: item.id, name: item.name, option: item.sizes?.[size].label, price, img: item.img, kind }); setAdded(true); setTimeout(() => setAdded(false), 1400); }}
        className={`ml-auto px-4 py-2 text-xs uppercase tracking-[.18em] transition-colors ${dark ? "bg-paper text-ink hover:bg-sand" : "bg-ink text-paper hover:bg-wood"}`}
      >
        {added ? "Added ✓" : `Add · ${money(price)}`}
      </button>
    </div>
  );
}
