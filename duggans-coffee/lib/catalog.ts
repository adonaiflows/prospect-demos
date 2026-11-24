// SAMPLE menu for the demo: item names and every price are placeholders.
// TODO: replace with Duggan's real menu board (ideally synced from their POS: Square, Toast or Clover).

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
    id: "espresso",
    title: "Espresso bar",
    items: [
      { id: "latte", name: "Latte", desc: "Double shot and steamed milk, poured with art.", price: 5.0, img: "/images/pour.webp", tag: "Most ordered", sizes: cup },
      { id: "americano", name: "Americano", desc: "Two shots over hot water. Strong and simple.", price: 3.75, img: "/images/shot.webp", sizes: cup },
      { id: "cortado", name: "Cortado", desc: "Espresso cut with a little warm milk.", price: 4.25, img: "/images/latte.webp" },
      { id: "cappuccino", name: "Cappuccino", desc: "Espresso, milk and a thick cap of foam.", price: 4.75, sizes: cup },
      { id: "mocha", name: "Mocha", desc: "Espresso, chocolate and steamed milk.", price: 5.5, sizes: cup },
      { id: "espresso", name: "Double espresso", desc: "Just the shots.", price: 3.0 },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    items: [
      { id: "burrito", name: "Breakfast burrito", desc: "Eggs, potatoes and cheese, with red or green.", price: 9.5 },
      { id: "plate", name: "Breakfast plate", desc: "Two eggs, potatoes, toast and a choice of meat.", price: 11.0 },
      { id: "sandwich", name: "Egg sandwich", desc: "Egg and cheese on a toasted roll. Add bacon or sausage.", price: 7.5 },
      { id: "oats", name: "Oatmeal bowl", desc: "Brown sugar, fruit and a little cream.", price: 6.0 },
    ],
  },
  {
    id: "drip",
    title: "Drip & cold",
    items: [
      { id: "drip", name: "Drip coffee", desc: "Brewed fresh all morning.", price: 2.75, sizes: cup },
      { id: "cold-brew", name: "Cold brew", desc: "Steeped overnight, served over ice.", price: 4.5, sizes: cup },
      { id: "iced-latte", name: "Iced latte", desc: "Espresso and cold milk over ice.", price: 5.25, sizes: cup },
    ],
  },
];

export const money = (n: number) => `$${n.toFixed(2)}`;
