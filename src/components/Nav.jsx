import { useState, useEffect } from 'react';
import { DARK, CREAM, GOLD, PARCH } from '../data/constants';
import { NAV_ITEMS } from '../data/constants';

export default function Nav({ current, goTo }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 transition-all duration-300"
      style={{ background: scrolled ? "rgba(122,14,32,0.97)" : DARK, backdropFilter: "blur(16px)", boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.3)" : "none" }}>
      <button className="flex items-center gap-2 border-0 bg-transparent cursor-pointer" onClick={() => goTo("/")}>
        <span className="text-xl">🍴</span>
        <div className="text-left leading-none">
          <div className="text-sm font-bold tracking-widest uppercase" style={{ color: CREAM }}>TASTY</div>
          <div className="text-[10px] italic" style={{ color: GOLD }}>Spices & Catering</div>
        </div>
      </button>

      <div className="flex gap-1">
        {NAV_ITEMS.map(({ label, path }) => (
          <button key={path} onClick={() => goTo(path)}
            className="font-mono text-[10px] tracking-[0.2em] border-0 cursor-pointer px-3 py-2 rounded transition-all duration-200"
            style={{ background: current === path ? "rgba(201,168,76,0.15)" : "transparent", color: current === path ? GOLD : "rgba(245,237,224,0.55)" }}>
            {label}
          </button>
        ))}
      </div>

      <button className="font-mono text-[10px] tracking-[0.2em] border-0 px-5 py-2.5 rounded cursor-pointer hover:opacity-85 transition-opacity"
        style={{ background: GOLD, color: "#2A1A0A", fontWeight: 700 }}
        onClick={() => goTo("/contact")}>Book Now</button>
    </nav>
  );
}