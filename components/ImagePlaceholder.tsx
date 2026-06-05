// Placeholder for image slots — replace with <Image> once you have real photos
export function ImagePlaceholder({ label }: { label?: string }) {
  return (
    <div className="ph w-full h-full">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"
        className="w-[46px] h-[46px] opacity-60">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
      {label && <span className="sr-only">{label}</span>}
    </div>
  );
}
