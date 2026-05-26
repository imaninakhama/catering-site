import { useState, useEffect } from 'react';
import { DARK, CREAM, GOLD, PARCH } from '../data/constants';
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
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-10 h-16 transition-all duration-300"
        style={{ 
          background: scrolled ? "rgba(122,14,32,0.97)" : DARK, 
          backdropFilter: "blur(16px)", 
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.3)" : "none" 
        }}
      >
        {/* Logo */}
        <button className="flex items-center gap-2 border-0 bg-transparent cursor-pointer z-50" onClick={() => handleNavClick("/")}>
          <span className="text-xl">🍴</span>
          <div className="text-left leading-none">
            <div className="text-sm font-bold tracking-widest uppercase" style={{ color: CREAM }}>TASTY</div>
            <div className="text-[10px] italic hidden sm:block" style={{ color: GOLD }}>Spices & Catering</div>
          </div>
        </button>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden md:flex gap-1">
          {NAV_ITEMS.map(({ label, path }) => (
            <button 
              key={path} 
              onClick={() => goTo(path)}
              className="font-mono text-[10px] tracking-[0.2em] border-0 cursor-pointer px-3 py-2 rounded transition-all duration-200"
              style={{ 
                background: current === path ? "rgba(201,168,76,0.15)" : "transparent", 
                color: current === path ? GOLD : "rgba(245,237,224,0.55)" 
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Book Now Button - hidden on mobile (goes inside hamburger) */}
        <button 
          className="hidden md:block font-mono text-[10px] tracking-[0.2em] border-0 px-5 py-2.5 rounded cursor-pointer hover:opacity-85 transition-opacity"
          style={{ background: GOLD, color: "#2A1A0A", fontWeight: 700 }}
          onClick={() => goTo("/contact")}
        >
          Book Now
        </button>

        {/* Hamburger Menu Button - visible on mobile only */}
        <button 
          className="md:hidden z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ background: "transparent", border: "none" }}
        >
          <span 
            className="w-6 h-0.5 transition-all duration-300"
            style={{ 
              background: CREAM,
              transform: isMenuOpen ? "rotate(45deg) translate(4px, 4px)" : "rotate(0)"
            }}
          />
          <span 
            className="w-6 h-0.5 transition-all duration-300"
            style={{ 
              background: CREAM,
              opacity: isMenuOpen ? 0 : 1
            }}
          />
          <span 
            className="w-6 h-0.5 transition-all duration-300"
            style={{ 
              background: CREAM,
              transform: isMenuOpen ? "rotate(-45deg) translate(4px, -4px)" : "rotate(0)"
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ background: DARK, top: "64px" }}
      >
        <div className="flex flex-col items-center justify-center gap-6 h-full px-4">
          {/* Mobile Navigation Items */}
          {NAV_ITEMS.map(({ label, path }) => (
            <button 
              key={path} 
              onClick={() => handleNavClick(path)}
              className="font-mono text-[14px] tracking-[0.3em] border-0 cursor-pointer px-4 py-3 rounded transition-all duration-200 w-full max-w-50"
              style={{ 
                background: current === path ? "rgba(201,168,76,0.15)" : "transparent", 
                color: current === path ? GOLD : CREAM,
                border: current === path ? `1px solid ${GOLD}` : "1px solid rgba(201,168,76,0.3)"
              }}
            >
              {label}
            </button>
          ))}
          
          {/* Mobile Book Now Button */}
          <button 
            className="font-mono text-[14px] tracking-[0.3em] border-0 px-6 py-3 rounded cursor-pointer hover:opacity-85 transition-opacity w-full max-w-50 mt-4"
            style={{ background: GOLD, color: "#2A1A0A", fontWeight: 700 }}
            onClick={() => handleNavClick("/contact")}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}