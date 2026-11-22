"use client";
import { useEffect, useState } from "react";

// Hours from Google Maps (Nov 2026): Thu–Mon 8:30 am–3 pm, closed Tue & Wed. TODO: confirm with the café.
const OPEN_DAYS = new Set([0, 1, 4, 5, 6]);

function status() {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Denver" }));
  const mins = now.getHours() * 60 + now.getMinutes();
  const open = OPEN_DAYS.has(now.getDay()) && mins >= 510 && mins < 900;
  return open ? "Open now until 3 pm" : "Closed now · opens 8:30 am Thu–Mon";
}

export default function OpenNow() {
  const [label, setLabel] = useState<string | null>(null);
  useEffect(() => { setLabel(status()); const t = setInterval(() => setLabel(status()), 60000); return () => clearInterval(t); }, []);
  const open = label?.startsWith("Open");
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-bg/70 px-3 py-1 text-xs font-semibold uppercase tracking-[.18em] backdrop-blur">
      <span className={`h-2 w-2 rounded-full ${label === null ? "bg-muted" : open ? "bg-turq" : "bg-terra"}`} aria-hidden />
      {label ?? "Thu–Mon · 8:30 am – 3 pm"}
    </span>
  );
}
