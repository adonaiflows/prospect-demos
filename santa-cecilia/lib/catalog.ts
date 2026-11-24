// SAMPLE menu for the demo: item names and every price are placeholders.
// TODO: replace with Santa Cecilia's real menu (ideally synced from their POS: Square, Toast or Clover).

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
    id: "house",
    title: "House cups",
    items: [
      { id: "latte", name: "Latte", desc: "Double shot and steamed milk, poured with art.", price: 5.25, img: "/images/beanscup.webp", tag: "Patio favorite", sizes: cup },
      { id: "cafe-de-olla", name: "Café de olla", desc: "Coffee with cinnamon and piloncillo.", price: 4.75, img: "/images/paper.webp", sizes: cup },
      { id: "cappuccino", name: "Cappuccino", desc: "Espresso, milk and a thick cap of foam.", price: 4.75, img: "/images/art.webp", sizes: cup },
    ],
  },
  {
    id: "espresso",
    title: "Espresso & coffee",
    items: [
      { id: "espresso", name: "Double espresso", desc: "Just the shots.", price: 3.25 },
      { id: "americano", name: "Americano", desc: "Espresso and hot water.", price: 3.75, sizes: cup },
      { id: "cortado", name: "Cortado", desc: "Espresso cut with a little warm milk.", price: 4.25 },
      { id: "drip", name: "Drip coffee", desc: "Brewed fresh through the morning.", price: 3.0, sizes: cup },
      { id: "iced", name: "Iced latte", desc: "Espresso and cold milk over ice.", price: 5.5, sizes: cup },
    ],
  },
  {
    id: "bites",
    title: "Something sweet",
    items: [
      { id: "biscochitos", name: "Biscochitos", desc: "Anise and cinnamon cookies, three to a bag.", price: 3.5 },
      { id: "pastry", name: "Pastry of the day", desc: "Whatever is in the case this morning.", price: 4.0 },
    ],
  },
];

export const money = (n: number) => `$${n.toFixed(2)}`;
