/** Four-point compass star, echoing the star on the storefront sign. */
export default function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden fill="currentColor">
      <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
      <path d="M50 22 L52.5 47.5 L78 50 L52.5 52.5 L50 78 L47.5 52.5 L22 50 L47.5 47.5 Z" transform="rotate(45 50 50)" opacity=".55" />
    </svg>
  );
}
