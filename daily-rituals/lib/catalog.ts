// SAMPLE menu and shop items for the demo. Item names beyond the lavender latte, and every price, are placeholders.
// TODO: replace with the real menu board and gift-shop inventory (ideally synced from their POS: Square, Toast or Clover).

export type Item = {
  id: string;
  name: string;
  desc: string;
  price: number; // dollars, SAMPLE
  img?: string;
  tag?: string;
  sizes?: { label: string; add: number }[];
};

export type Section = { id: string; title: string; items: Item[] };

const cup = [{ label: "12 oz", add: 0 }, { label: "16 oz", add: 0.75 }];

export const menu: Section[] = [
  {
    id: "signature",
    title: "House favorites",
    items: [
      { id: "lavender-latte", name: "Lavender latte", desc: "Espresso, steamed milk and our house lavender syrup.", price: 6.0, img: "/images/r-lavender.webp", tag: "House syrup", sizes: cup },
      { id: "pistachio-latte", name: "Pistachio latte", desc: "Topped with crushed pistachio. TODO: confirm the name and recipe.", price: 6.25, img: "/images/r-pistachio.webp", sizes: cup },
      { id: "latte", name: "Latte", desc: "Double shot and silky steamed milk.", price: 5.25, img: "/images/r-lattes.webp", sizes: cup },
    ],
  },
  {
    id: "espresso",
    title: "Espresso & coffee",
    items: [
      { id: "cappuccino", name: "Cappuccino", desc: "Equal parts espresso, milk and foam.", price: 4.75, sizes: cup },
      { id: "americano", name: "Americano", desc: "Espresso and hot water.", price: 3.75, sizes: cup },
      { id: "drip", name: "Drip coffee", desc: "Brewed fresh through the morning.", price: 3.0, sizes: cup },
      { id: "cold-brew", name: "Cold brew", desc: "Steeped slow, served over ice.", price: 4.5, sizes: cup },
    ],
  },
  {
    id: "more",
    title: "Tea, kids & more",
    items: [
      { id: "chai", name: "Chai latte", desc: "Spiced chai with steamed milk.", price: 5.5, sizes: cup },
      { id: "kids-cocoa", name: "Kids hot chocolate", desc: "Warm, not hot. For the kids-area crew.", price: 3.0 },
      { id: "pastry", name: "Pastry of the day", desc: "TODO: list what's in the case.", price: 4.0 },
    ],
  },
];

export const shop: Section[] = [
  {
    id: "home",
    title: "For the home",
    items: [
      { id: "basket", name: "Woven market basket", desc: "Hand-woven, with a wrapped handle.", price: 48, img: "/images/p-baskets.webp" },
      { id: "stoneware", name: "Speckled stoneware", desc: "Bowls, plates and mugs in a speckled glaze.", price: 28, img: "/images/p-stoneware.webp" },
      { id: "pottery", name: "Painted pottery", desc: "Small hand-painted vessels.", price: 34, img: "/images/p-pottery.webp" },
      { id: "bowls", name: "Carved wood bowls", desc: "Small wooden bowls for keys, rings or sage.", price: 22, img: "/images/p-bowls.webp" },
    ],
  },
  {
    id: "wellness",
    title: "Wellness & apothecary",
    items: [
      { id: "tincture", name: "Herbal tinctures", desc: "Dropper bottles from the counter shelf.", price: 24, img: "/images/p-tinctures.webp" },
      { id: "soap", name: "Handmade soap", desc: "Bar soap from the counter display.", price: 9, img: "/images/p-soap.webp" },
      { id: "jars", name: "Shelf jars", desc: "TODO: what's in the jars on the gift wall?", price: 18, img: "/images/p-jars.webp" },
    ],
  },
  {
    id: "gifts",
    title: "Gifts & paper",
    items: [
      { id: "cards", name: "Greeting cards", desc: "Cards and prints from the gift table.", price: 6, img: "/images/p-cards.webp" },
      { id: "pouch", name: "Woven pouches", desc: "Patterned zip pouches.", price: 26, img: "/images/p-pouches.webp" },
    ],
  },
];

export const money = (n: number) => `$${n.toFixed(2)}`;
