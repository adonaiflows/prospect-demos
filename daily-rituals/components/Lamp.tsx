/** Rattan pendant lamp, drawn in SVG, like the ones over the café counter. */
export default function Lamp({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 220" className={className} aria-hidden>
      <line x1="60" y1="0" x2="60" y2="90" stroke="#1d1b18" strokeWidth="1.5" />
      <path d="M30 150 Q30 92 60 90 Q90 92 90 150 Z" fill="#c49a62" />
      {Array.from({ length: 7 }, (_, i) => <path key={i} d={`M${33 + i * 9} 150 Q${36 + i * 8} 110 60 92`} stroke="#8a5a36" strokeWidth="1" fill="none" opacity=".7" />)}
      {Array.from({ length: 5 }, (_, i) => <line key={i} x1="31" x2="89" y1={104 + i * 10} y2={104 + i * 10} stroke="#8a5a36" strokeWidth=".8" opacity=".5" />)}
      <ellipse cx="60" cy="151" rx="30" ry="4" fill="#8a5a36" />
      <ellipse cx="60" cy="175" rx="38" ry="22" fill="#ffd9a0" opacity=".28" />
    </svg>
  );
}
