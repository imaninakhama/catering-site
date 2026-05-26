import { useState, useEffect, useCallback } from 'react';
import { CREAM, GOLD, NAV_ITEMS } from '../data/constants';

function SiteFooter({ goTo }) {
  return (
    <footer className="px-4 sm:px-8 md:px-12 pt-10 md:pt-14 pb-6 md:pb-8" style={{ background: "#1A0308" }}>
      {/* Top section - stacked on mobile */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 mb-8 md:mb-12 pb-8 md:pb-12" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        
        {/* Left column - Brand info */}
        <div className="max-w-full md:max-w-75 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="text-2xl">🍴</span>
            <div>
              <div className="font-bold tracking-widest uppercase text-sm" style={{ color: CREAM }}>TASTY</div>
              <div className="italic text-xs sm:text-sm" style={{ color: GOLD }}>Spices & Catering Services</div>
            </div>
          </div>
          <p className="text-[12px] sm:text-[13px] leading-relaxed mb-4 md:mb-5 px-4 md:px-0" style={{ color: "rgba(245,237,224,0.35)" }}>
            Bringing you the difference in catering and hospitality. Corporate · Personal · Custom.
          </p>
          <div className="italic text-sm md:text-base" style={{ color: "rgba(201,168,76,0.6)" }}>The Difference</div>
        </div>

        {/* Right columns - Navigation & Contact - stacked on mobile */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16 w-full md:w-auto text-center sm:text-left">
          
          {/* Navigate column */}
          <div className="flex-1 sm:flex-none">
            <div className="font-mono text-[9px] tracking-[0.4em] mb-4 md:mb-5" style={{ color: "rgba(201,168,76,0.5)" }}>
              NAVIGATE
            </div>
            <div className="flex flex-col items-center sm:items-start">
              {NAV_ITEMS.map(({ label, path }) => (
                <button 
                  key={path} 
                  onClick={() => goTo(path)} 
                  className="font-mono text-[11px] tracking-[0.15em] mb-3 bg-transparent border-0 cursor-pointer hover:opacity-70 transition-opacity text-center sm:text-left" 
                  style={{ color: "rgba(245,237,224,0.4)" }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div className="flex-1 sm:flex-none">
            <div className="font-mono text-[9px] tracking-[0.4em] mb-4 md:mb-5" style={{ color: "rgba(201,168,76,0.5)" }}>
              CONTACT
            </div>
            <div className="text-[12px] sm:text-[13px] leading-relaxed">
              <div className="mb-2" style={{ color: "rgba(245,237,224,0.5)" }}>+254 722 116 085</div>
              <div className="mb-2" style={{ color: "rgba(245,237,224,0.5)" }}>+254 739 968 828</div>
              <div className="break-all" style={{ color: "rgba(245,237,224,0.5)" }}>tastyspicescatering@gmail.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - stacked on mobile */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
        <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.15em]" style={{ color: "rgba(245,237,224,0.2)" }}>
          © 2026 Tasty Spices & Catering Services. All Rights Reserved.
        </span>
        <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.15em]" style={{ color: "rgba(245,237,224,0.2)" }}>
          This is a Tasty Delights Profile. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default SiteFooter;