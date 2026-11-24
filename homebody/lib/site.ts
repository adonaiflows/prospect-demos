// Facts: Homebody Matcha's Google Maps listing and homebodymatcha.us (both checked Nov 24, 2026).
// Anything not verified is marked TODO.
export const NAME = "Homebody Matcha";
export const ADDRESS = "2100 Louisiana Blvd NE #434";
export const CITY = "Albuquerque, NM 87110";
export const WHERE = "Winrock Town Center, floor 1";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=Homebody+Matcha+2100+Louisiana+Blvd+NE+Albuquerque";
export const SHOP = "https://homebodymatcha.us/collections/all"; // their live online store
export const RATING = { stars: "4.4", count: 106 }; // Google, Nov 24, 2026
// TODO: phone number (none listed on Google or their site) and Instagram handle, to confirm with the owner.

export const hours = [
  ["Monday – Saturday", "8 am – 5 pm"],
  ["Sunday", "10 am – 4 pm"],
] as const;

/** Opening hours by weekday (0 = Sunday), in minutes after midnight, Albuquerque time. */
export const openByDay: Record<number, [number, number]> = {
  0: [600, 960], 1: [480, 1020], 2: [480, 1020], 3: [480, 1020], 4: [480, 1020], 5: [480, 1020], 6: [480, 1020],
};
