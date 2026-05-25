import { DARK, CREAM, GOLD } from '../data/constants';
import { SNACK_ITEMS, SNACK_ALSO } from '../data/constants';
import { useState } from 'react';

function BistroPage({ goTo }) {
  return (
    <div className="pt-16 min-h-screen">
      <div className="px-12 py-20 relative overflow-hidden" style={{ background: DARK }}>
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `radial-gradient(circle, ${GOLD} 1px, transparent 1px)`, 
            backgroundSize: "36px 36px" 
          }} 
        />
        <div className="relative max-w-175">
          <span className="font-mono text-[10px] tracking-[0.45em] block mb-3" style={{ color: "rgba(201,168,76,0.7)" }}>
            ✦ LIGHT BITES & FINGER FOOD
          </span>
          <h1 
            className="text-[clamp(36px,6vw,72px)] font-bold leading-none mb-3" 
            style={{ color: CREAM, fontFamily: "Georgia, serif", fontWeight: 400, fontStyle: "italic" }}
          >
            Snack Bistro
          </h1>
          <p className="text-[17px] leading-[1.75] max-w-130" style={{ color: "rgba(245,237,224,0.5)" }}>
            Perfect for receptions, cocktail hours, and informal gatherings. Unit prices on request.
          </p>
        </div>
      </div>

      <div className="px-12 py-16">
        <div className="grid grid-cols-2 gap-0.5 max-w-200">
          {SNACK_ITEMS.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 py-5 px-6 hover-card" 
              style={{ 
                background: i % 2 === 0 ? "rgba(122,14,32,0.03)" : "rgba(122,14,32,0.02)", 
                border: "1px solid rgba(122,14,32,0.07)" 
              }}
            >
              <span className="text-base" style={{ color: GOLD }}>✦</span>
              <span className="text-[16px]">{item}</span>
            </div>
          ))}
        </div>

        <div 
          className="mt-10 p-8 rounded-xl max-w-200" 
          style={{ background: DARK, border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <div className="font-mono text-[9px] tracking-[0.4em] mb-4" style={{ color: "rgba(201,168,76,0.65)" }}>
            ALSO AVAILABLE
          </div>
          <div className="flex gap-3 flex-wrap mb-6">
            {SNACK_ALSO.map(item => (
              <span 
                key={item} 
                className="px-4 py-2 rounded-full font-mono text-[10px] tracking-[0.2em]" 
                style={{ background: "rgba(201,168,76,0.12)", color: GOLD, border: "1px solid rgba(201,168,76,0.2)" }}
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-[13px] italic mb-4" style={{ color: "rgba(245,237,224,0.45)" }}>
            Contact us for more information, inquiries, custom orders & other varieties and deliveries.
          </p>
          <div className="font-semibold" style={{ color: CREAM }}>+254 722 116 085 / 739 968 828</div>
        </div>
      </div>
    </div>
  );
}

export default BistroPage;