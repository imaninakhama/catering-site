import { DARK, CREAM, GOLD, PARCH } from '../data/constants';
import { GALLERY_ITEMS } from '../data/constants';
import { useState } from 'react';

function GalleryPage() {
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
            ✦ PAST EVENTS
          </span>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold uppercase tracking-widest leading-none mb-4" style={{ color: CREAM }}>
            Gallery
          </h1>
          <p className="text-[17px] leading-[1.75] max-w-130" style={{ color: "rgba(245,237,224,0.5)" }}>
            A glimpse of what we do — from intimate setups to grand buffets.
          </p>
        </div>
      </div>

      <div className="px-12 py-16">
        <div className="grid grid-cols-3 gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden hover-card cursor-pointer" style={{ border: "1px solid rgba(122,14,32,0.1)" }}>
              <div 
                className="flex items-center justify-center" 
                style={{ 
                  background: `linear-gradient(135deg, ${DARK}, #4A0E1A)`, 
                  height: "200px" 
                }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-3">{item.emoji}</div>
                  <div className="font-mono text-[9px] tracking-[0.3em]" style={{ color: "rgba(201,168,76,0.5)" }}>
                    EVENT PHOTO
                  </div>
                </div>
              </div>
              <div className="p-5" style={{ background: PARCH }}>
                <p className="text-[13px] leading-relaxed text-center" style={{ color: "rgba(42,26,10,0.65)" }}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-xl text-center" style={{ background: DARK }}>
          <div className="font-mono text-[10px] tracking-[0.4em] mb-3" style={{ color: "rgba(201,168,76,0.65)" }}>
            ✦ WANT TO SEE MORE?
          </div>
          <p className="text-[15px] mb-2" style={{ color: "rgba(245,237,224,0.5)" }}>
            Get in touch and we'll share our full event portfolio.
          </p>
          <div className="font-semibold mt-2" style={{ color: CREAM }}>
            tastyspicescatering@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;