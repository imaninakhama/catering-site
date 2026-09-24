import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/constants';

export default function Nav({ current, goTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu when clicking a link
  const handleNavClick = (path) => {
    goTo(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 h-16 bg-wine transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.3)]" : ""}`}
      >
        {/* Logo */}
        <button className="flex items-baseline gap-2 border-0 bg-transparent cursor-pointer z-50" onClick={() => handleNavClick("/")}>
          <span className="font-display text-[22px] font-extrabold tracking-[0.12em] text-cream leading-none">TASTY</span>
          <span className="font-display italic text-[14px] text-gold hidden sm:inline">Spices & Catering</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 lg:gap-3">
          {NAV_ITEMS.map(({ label, path }) => (
            <button
              key={path}
              onClick={() => goTo(path)}
              aria-current={current === path ? "page" : undefined}
              className={`relative text-[12px] font-semibold uppercase tracking-[0.16em] border-0 bg-transparent cursor-pointer px-3 py-2 transition-colors duration-200 ${current === path ? "text-gold" : "text-cream/65 hover:text-cream"}`}
            >
              {label}
              <span className={`absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gold transition-transform duration-200 origin-left ${current === path ? "scale-x-100" : "scale-x-0"}`} />
            </button>
          ))}
        </div>

        {/* Book Now Button - desktop */}
        <button className="hidden lg:inline-flex btn-gold px-5! py-2.5! text-[12px]!" onClick={() => goTo("/contact")}>
          Book Now
        </button>

        {/* Hamburger Menu Button - mobile */}
        <button
          className="lg:hidden z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer bg-transparent border-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="w-6 h-0.5 bg-cream transition-all duration-300" style={{ transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span className="w-6 h-0.5 bg-cream transition-all duration-300" style={{ opacity: isMenuOpen ? 0 : 1 }} />
          <span className="w-6 h-0.5 bg-cream transition-all duration-300" style={{ transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-wine transition-all duration-300 lg:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex flex-col justify-center min-h-full px-6 py-8 gap-1">
          {NAV_ITEMS.map(({ label, path }) => (
            <button
              key={path}
              onClick={() => handleNavClick(path)}
              className={`text-left font-display text-[32px] font-bold leading-tight py-2 border-0 bg-transparent cursor-pointer border-b border-cream/10 ${current === path ? "text-gold" : "text-cream"}`}
            >
              {label}
            </button>
          ))}

          <button className="btn-gold mt-8 w-full" onClick={() => handleNavClick("/contact")}>
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
