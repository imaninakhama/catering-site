import { useState, useEffect, useCallback } from 'react';
import { CREAM, GOLD, NAV_ITEMS } from '../data/constants';

function SiteFooter({ goTo }) {
  return (
    <footer className="px-12 pt-14 pb-8" style={{ background: "#1A0308" }}>
      <div className="flex justify-between items-start mb-12 pb-12" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="max-w-75">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🍴</span>
            <div>
              <div className="font-bold tracking-widest uppercase text-sm" style={{ color: CREAM }}>TASTY</div>
              <div className="italic text-sm" style={{ color: GOLD }}>Spices & Catering Services</div>
            </div>
          </div>
          <p className="text-[13px] leading-relaxed mb-5" style={{ color: "rgba(245,237,224,0.35) "}}>
            Bringing you the difference in catering and hospitality. Corporate · Personal · Custom.
          </p>
          <div className="italic text-base" style={{ color: "rgba(201,168,76,0.6)" }}>The Difference</div>
        </div>

        <div className="flex gap-16">
          <div>
            <div className="font-mono text-[9px] tracking-[0.4em] mb-5" style={{ color: "rgba(201,168,76,0.5)" }}>NAVIGATE</div>
            {NAV_ITEMS.map(({ label, path }) => (
              <button key={path} onClick={() => goTo(path)} className="block font-mono text-[11px] tracking-[0.15em] mb-3 bg-transparent border-0 cursor-pointer hover:opacity-70 transition-opacity text-left" style={{ color: "rgba(245,237,224,0.4)" }}>{label}</button>
            ))}
          </div>
          <div>
            <div className="font-mono text-[9px] tracking-[0.4em] mb-5" style={{ color: "rgba(201,168,76,0.5)" }}>CONTACT</div>
            <div className="text-[13px] mb-2" style={{ color: "rgba(245,237,224,0.5)" }}>+254 722 116 085</div>
            <div className="text-[13px] mb-2" style={{ color: "rgba(245,237,224,0.5)" }}>+254 739 968 828</div>
            <div className="text-[13px]" style={{ color: "rgba(245,237,224,0.5)" }}>tastyspicescatering@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-mono text-[9px] tracking-[0.15em]" style={{ color: "rgba(245,237,224,0.2)" }}>
          © 2026 Tasty Spices & Catering Services. All Rights Reserved.
        </span>
        <span className="font-mono text-[9px] tracking-[0.15em]" style={{ color: "rgba(245,237,224,0.2)" }}>
          This is a Tasty Delights Profile. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
export default SiteFooter;