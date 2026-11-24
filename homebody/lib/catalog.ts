// SAMPLE menu for the demo. The drink names are ones Google reviewers mention by name (Nov 24, 2026);
// descriptions are kept to what reviewers describe, and EVERY price is a placeholder.
// TODO: replace with Homebody's real menu board (ideally synced from their POS: Square, Toast or Clover).

export type Item = {
  id: string;
  name: string;
  desc: string;
  price: number; // dollars, SAMPLE
  img?: string;
  alt?: string;
  tag?: string;
  sizes?: { label: string; add: number }[];
};

export type Section = { id: string; title: string; note?: string; items: Item[] };

const temp = [{ label: "Iced", add: 0 }, { label: "Hot", add: 0 }];

export const menu: Section[] = [
  {
    id: "matcha",
    title: "Matcha",
    note: "Whisked to order, one cup at a time.",
    items: [
      { id: "iced", name: "Iced Matcha Latte", desc: "Matcha and cold milk over ice, bright and smooth.", price: 6.0, img: "/images/iced-cut.webp", alt: "Iced matcha latte" },
      { id: "hot", name: "Hot Matcha Latte", desc: "Whisked matcha and steamed milk.", price: 6.0, img: "/images/hot-latte.webp", alt: "Hot matcha latte with leaf art" },
      { id: "daydream", name: "The Daydream", desc: "Banana matcha under a sweet cold foam. The one regulars write reviews about.", price: 7.5, tag: "Most talked about" },
      { id: "banana-pudding", name: "Banana Pudding Matcha", desc: "Matcha with banana pudding, finished with cold foam.", price: 7.5 },
      { id: "ube", name: "Ube Matcha", desc: "Matcha and ube together. Try it with coconut milk.", price: 7.5 },
    ],
  },
  {
    id: "lattes",
    title: "Lattes",
    note: "For the coffee people.",
    items: [
      { id: "cookie-butter", name: "Cookie Butter Latte", desc: "Espresso, milk and cookie butter.", price: 6.75, sizes: temp },
      { id: "banana-bread", name: "Banana Bread Iced Latte", desc: "Espresso and milk over ice, with banana bread flavor.", price: 6.75 },
      { id: "latte", name: "Latte", desc: "Espresso and steamed milk.", price: 5.25, sizes: temp },
    ],
  },
  {
    id: "extras",
    title: "Make it yours",
    items: [
      { id: "cold-foam", name: "Add cold foam", desc: "Sweet cold foam on top.", price: 1.0 },
      { id: "coconut", name: "Coconut milk", desc: "Swap in coconut milk.", price: 0.75 },
      { id: "extra-matcha", name: "Extra scoop of matcha", desc: "For when you want it greener.", price: 1.5 },
    ],
  },
];

export const money = (n: number) => `$${n.toFixed(2)}`;
