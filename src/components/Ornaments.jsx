// Small decorative pieces shared by the landing and menu pages.

// Uppercase label framed by short rules.
export function Overline({ children, className = "", align = "center" }) {
  return (
    <span className={`eyebrow inline-flex items-center gap-3 ${className}`}>
      <span className="w-8 h-px bg-current opacity-70" />
      {children}
      {align === "center" && <span className="w-8 h-px bg-current opacity-70" />}
    </span>
  );
}

// Thin double rule used to open a menu section.
export function DoubleRule({ className = "" }) {
  return <hr className={`h-1 border-y border-current border-x-0 m-0 ${className}`} />;
}

// Soft, uneven edge where one section meets the next. `className` sets the fill via text colour.
export function WaveEdge({ className = "", flip = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={`block w-full h-10 md:h-16 lg:h-20 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        fill="currentColor"
        d="M0 58 C 150 22, 320 84, 520 52 S 860 6, 1060 40 S 1320 78, 1440 34 V90 H0 Z"
      />
    </svg>
  );
}

// Circular "stamp" with text running round the edge.
export function Stamp({ ring, center, className = "" }) {
  return (
    <div className={`relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-gold text-ink shadow-xl ${className}`}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite]" aria-hidden="true">
        <defs>
          <path id="stamp-ring" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text className="font-sans" fontSize="14" fontWeight="700" fill="currentColor">
          <textPath href="#stamp-ring" textLength="462" lengthAdjust="spacing">{ring}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-center font-display italic text-[17px] leading-tight px-8">
        {center}
      </div>
    </div>
  );
}

// Slow scrolling strip of words. Content is duplicated so the loop is seamless.
export function Marquee({ items, className = "" }) {
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i} className="flex items-center shrink-0">
          <span className="font-display italic text-[22px] md:text-[30px] px-6 md:px-8 whitespace-nowrap">{item}</span>
          <span className="w-2 h-2 rounded-full bg-current opacity-50" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`overflow-hidden py-4 md:py-5 ${className}`}>
      <div className="flex w-max animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
