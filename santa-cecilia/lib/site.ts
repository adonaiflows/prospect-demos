// Facts: Santa Cecilia's Google Maps listing (checked Nov 22, 2026). No public phone number is listed. Anything not verified is marked TODO.
export const ADDRESS = "111 Romero St NW, Albuquerque, NM 87104";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=Santa+Cecilia+111+Romero+St+NW+Albuquerque";

export const hours = [
  ["Thursday – Monday", "8:30 am – 3 pm"],
  ["Tuesday & Wednesday", "Closed"],
] as const;

/** Opening hours by weekday (0 = Sunday), in minutes after midnight, Albuquerque time. [0, 0] = closed. */
export const openByDay: Record<number, [number, number]> = {
  0: [510, 900], 1: [510, 900], 2: [0, 0], 3: [0, 0], 4: [510, 900], 5: [510, 900], 6: [510, 900],
};
