import type { Motif as M } from "@/lib/types";

/** Decorative, aria-hidden ambient art. CSS-only animation, paused by prefers-reduced-motion. */
export default function Motif({ kind }: { kind: M }) {
  const common = { "aria-hidden": true, className: "w-full h-full", viewBox: "0 0 400 400" } as const;
  if (kind === "steam") {
    return (
      <svg {...common}>
        <circle cx="200" cy="210" r="150" fill="var(--surface)" />
        <g fill="none" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" opacity=".8">
          <path className="m-rise" d="M165 230c-20-30 20-45 0-80" />
          <path className="m-rise" style={{ animationDelay: "1.6s" }} d="M200 230c-20-30 20-45 0-80" />
          <path className="m-rise" style={{ animationDelay: "3.2s" }} d="M235 230c-20-30 20-45 0-80" />
        </g>
        <path d="M120 240h160v20a60 60 0 0 1-60 60h-40a60 60 0 0 1-60-60z" fill="var(--ink)" />
        <path d="M280 252h18a24 24 0 0 1 0 48h-22" fill="none" stroke="var(--ink)" strokeWidth="12" />
        <ellipse cx="200" cy="336" rx="110" ry="10" fill="var(--ink)" opacity=".15" />
      </svg>
    );
  }
  if (kind === "breath") {
    return (
      <svg {...common}>
        <circle className="m-breathe" cx="200" cy="200" r="170" fill="var(--surface)" />
        <circle className="m-breathe" style={{ animationDelay: ".6s" }} cx="200" cy="200" r="120" fill="none" stroke="var(--accent)" strokeWidth="2" />
        <circle className="m-breathe" style={{ animationDelay: "1.2s" }} cx="200" cy="200" r="72" fill="var(--accent)" opacity=".85" />
        <g className="m-spin" fill="none" stroke="var(--ink)" strokeWidth="1" opacity=".35">
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse key={i} cx="200" cy="200" rx="150" ry="40" transform={`rotate(${i * 15} 200 200)`} />
          ))}
        </g>
      </svg>
    );
  }
  if (kind === "leaf") {
    return (
      <svg {...common}>
        <circle cx="200" cy="200" r="165" fill="var(--surface)" />
        <g className="m-sway">
          <path d="M200 340V150" stroke="var(--ink)" strokeWidth="4" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <path d={`M200 ${300 - i * 42}c-60-10-80-50-70-80 40 0 70 30 70 80z`} fill="var(--accent)" opacity={0.95 - i * 0.12} />
              <path d={`M200 ${280 - i * 42}c60-10 80-50 70-80-40 0-70 30-70 80z`} fill="var(--accent)" opacity={0.85 - i * 0.12} />
            </g>
          ))}
        </g>
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="200" cy="200" r="160" fill="var(--surface)" />
      <path className="m-drip" d="M200 120c14 22 22 34 22 46a22 22 0 0 1-44 0c0-12 8-24 22-46z" fill="var(--accent)" />
      <path d="M110 250h180l-20 80H130z" fill="var(--ink)" />
      <path d="M110 250h180" stroke="var(--accent)" strokeWidth="8" />
      <path d="M150 80h100v30H150z" fill="var(--ink)" />
    </svg>
  );
}
