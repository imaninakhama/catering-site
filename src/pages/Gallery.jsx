import { DARK, CREAM, GOLD, PARCH } from '../data/constants';
import { GALLERY_ITEMS } from '../data/constants';
import { useState } from 'react';
import corporateDirector from "../assets/corporateDirector.jpeg";
import servingGuests from "../assets/servingGuests.jpeg";
import weddingBuffet from "../assets/weddingBuffet.jpeg";
import Breakfast from "../assets/Breakfast.jpeg";
import grilledBeef from "../assets/grilledBeef.jpeg";
import spiceStation from "../assets/spiceStation.jpeg";

// Create a mapping from label to image
const imageMap = {
  "TS&CS Director at a past Corporate Event": corporateDirector,
  "Serving Guests at a past Private Event": servingGuests,
  "Buffet Set Up (Wedding)": weddingBuffet,
  "Breakfast Set Up (Corporate Seminar)": Breakfast,
  "Delicious & Tasty Grilled Beef ready to serve": grilledBeef,
  "Live Spice Station at a Gala Dinner": spiceStation,
};

function GalleryPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section - Responsive */}
      <div className="px-4 md:px-12 py-10 md:py-20 relative overflow-hidden" style={{ background: DARK }}>
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `radial-gradient(circle, ${GOLD} 1px, transparent 1px)`, 
            backgroundSize: "36px 36px" 
          }} 
        />
        <div className="relative max-w-175 text-center md:text-left mx-auto md:mx-0">
          <span className="font-mono text-[10px] tracking-[0.45em] block mb-3" style={{ color: "rgba(201,168,76,0.7)" }}>
            ✦ PAST EVENTS
          </span>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold uppercase tracking-widest leading-none mb-4" style={{ color: CREAM }}>
            Gallery
          </h1>
          <p className="text-[15px] md:text-[17px] leading-[1.75] max-w-130 mx-auto md:mx-0" style={{ color: "rgba(245,237,224,0.5)" }}>
            A glimpse of what we do — from intimate setups to grand buffets.
          </p>
        </div>
      </div>

      {/* Gallery Grid - Responsive columns */}
      <div className="px-4 md:px-12 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden hover-card cursor-pointer transition-transform duration-300 hover:scale-[1.02]" style={{ border: "1px solid rgba(122,14,32,0.1)" }}>
              {/* Image container */}
              <div className="h-48 md:h-56 overflow-hidden">
                <img 
                  src={imageMap[item.label]} 
                  alt={item.label}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-3 md:p-5" style={{ background: PARCH }}>
                <p className="text-[11px] md:text-[13px] leading-relaxed text-center" style={{ color: "rgba(42,26,10,0.65)" }}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Responsive */}
        <div className="mt-8 md:mt-12 p-6 md:p-8 rounded-xl text-center" style={{ background: DARK }}>
          <div className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] mb-3" style={{ color: "rgba(201,168,76,0.65)" }}>
            ✦ WANT TO SEE MORE?
          </div>
          <p className="text-[13px] md:text-[15px] mb-2" style={{ color: "rgba(245,237,224,0.5)" }}>
            Get in touch and we'll share our full event portfolio.
          </p>
          <div className="font-semibold mt-2 text-sm md:text-base break-all" style={{ color: CREAM }}>
            tastyspicescatering@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;