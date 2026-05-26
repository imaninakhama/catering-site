import { DARK, CREAM, GOLD, PARCH } from '../data/constants';
import { VALUES } from '../data/constants';
import { useState } from 'react';
import homepagephoto from '../assets/homepagephoto.jpeg';

function HomePage({ goTo }) {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen flex items-center px-4 md:px-12 pt-24 pb-16">
        <div 
          className="absolute inset-0" 
          style={{ background: `linear-gradient(135deg, ${DARK} 0%, #4A0E1A 60%, #2A0808 100%)` }} 
        />
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: `radial-gradient(circle, ${GOLD} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} 
        />

        <div className="relative z-10 max-w-160 text-center md:text-left">
          <div className="font-mono text-[10px] tracking-[0.5em] mb-6 flex items-center justify-center md:justify-start gap-3" style={{ color: "rgba(201,168,76,0.75)" }}>
            <span className="w-8 h-px inline-block" style={{ background: GOLD }} />
            CORPORATE · PERSONAL · CUSTOM
          </div>
          <h1 className="font-bold uppercase leading-none tracking-widest mb-3" style={{ fontSize: "clamp(48px,7vw,88px)", color: CREAM }}>
            TASTY
          </h1>
          <h2 className="text-[clamp(28px,4vw,52px)] italic font-normal mb-2" style={{ color: GOLD, fontFamily: "Georgia, serif" }}>
            Spices & Catering
          </h2>
          <p className="font-mono text-[11px] tracking-[0.4em] mb-8" style={{ color: "rgba(201,168,76,0.55)" }}>· SERVICES ·</p>
          <div className="flex items-center justify-center md:justify-start gap-4 mb-10">
            <div className="h-px w-16" style={{ background: GOLD }} />
            <p className="italic text-xl" style={{ color: "rgba(201,168,76,0.9)" }}>The Difference</p>
            <div className="h-px flex-1" style={{ background: "rgba(201,168,76,0.2)" }} />
          </div>
          <p className="text-[17px] leading-[1.8] mb-10 max-w-125 mx-auto md:mx-0" style={{ color: "rgba(245,237,224,0.6)" }}>
            Tasty Spices & Catering brings you the difference in the catering and hospitality world. With strong values on quality, delivery time, and customer care — an unforgettable experience at every event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              className="font-mono text-[11px] tracking-[0.25em] border-0 px-8 py-4 rounded cursor-pointer hover:opacity-85 transition-opacity font-bold w-full sm:w-auto"
              style={{ background: GOLD, color: "#2A1A0A" }} 
              onClick={() => goTo("/packages")}
            >
              View Packages
            </button>
            <button 
              className="font-mono text-[11px] tracking-[0.2em] px-6 py-4 rounded cursor-pointer hover:opacity-85 transition-opacity w-full sm:w-auto"
              style={{ background: "transparent", color: CREAM, border: "1px solid rgba(245,237,224,0.2)" }} 
              onClick={() => goTo("/contact")}
            >
              Book an Event →
            </button>
          </div>
        </div>

        {/* Right — diamond food card */}
        <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2">
          <div className="relative w-85 h-85">
            <div className="absolute inset-0 rotate-45 rounded-2xl overflow-hidden" style={{ border: "2px solid rgba(201,168,76,0.4)", background: "rgba(201,168,76,0.05)" }}>
              <div className="w-full h-full flex items-center justify-center -rotate-45">
                <div className="text-center">
                  <img 
                    src={homepagephoto} 
                    alt="Tasty Spices & Catering" 
                    className="w-full h-full object-cover -rotate-45 scale-150"
                  />
                  <div className="font-mono text-[9px] tracking-[0.4em]" style={{ color: "rgba(201,168,76,0.6)" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Responsive grid */}
      <section className="px-4 md:px-12 py-10 md:py-20" style={{ background: PARCH }}>
        <div className="text-center mb-8 md:mb-14">
          <span className="font-mono text-[10px] tracking-[0.45em] block mb-3" style={{ color: DARK }}>✦ OUR VALUES</span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-normal tracking-tight">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {VALUES.map((v, i) => (
            <div 
              key={i} 
              className="p-4 md:p-7 text-center hover-card" 
              style={{ background: "rgba(122,14,32,0.03)", border: "1px solid rgba(122,14,32,0.08)" }}
            >
              <div className="text-3xl mb-3 md:mb-4">{v.icon}</div>
              <h3 className="text-[13px] md:text-[14px] font-semibold mb-2 leading-snug">{v.title}</h3>
              <p className="text-[11px] md:text-[12px] leading-relaxed" style={{ color: "rgba(42,26,10,0.55)" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services strip - Responsive grid */}
      <section className="px-4 md:px-12 py-10 md:py-20" style={{ background: DARK }}>
        <div className="text-center mb-8 md:mb-14">
          <span className="font-mono text-[10px] tracking-[0.45em] block mb-3" style={{ color: "rgba(201,168,76,0.7)" }}>✦ CORE SERVICES</span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-normal" style={{ color: CREAM }}>What We Do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2">
          {[
            ["🏢", "Corporate Events", "Board lunches, seminars, AGMs & product launches — executed with precision."],
            ["💍", "Personal Events", "Weddings, birthdays & private dining — crafted with heart and elegance."],
            ["🎨", "Custom Packages", "Bespoke menus tailored exactly to your occasion, guest count & dietary needs."]
          ].map(([icon, title, desc], i) => (
            <div 
              key={i} 
              className="p-6 md:p-10 rounded-lg" 
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <div className="text-4xl mb-4 md:mb-5">{icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3" style={{ color: CREAM }}>{title}</h3>
              <p className="text-[13px] md:text-[14px] leading-relaxed" style={{ color: "rgba(245,237,224,0.45)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - Responsive padding */}
      <section className="px-4 md:px-12 py-16 md:py-24 text-center" style={{ background: PARCH }}>
        <span className="font-mono text-[10px] tracking-[0.45em] block mb-4" style={{ color: DARK }}>✦ GET STARTED</span>
        <h2 className="text-[clamp(28px,4vw,52px)] font-normal tracking-tight mb-4">Ready to Experience the Difference?</h2>
        <p className="text-[14px] md:text-[16px] mb-8 md:mb-10 max-w-110 mx-auto" style={{ color: "rgba(42,26,10,0.5)" }}>
          Let's plan your next unforgettable event together.
        </p>
        <button 
          className="font-mono text-[11px] tracking-[0.25em] border-0 px-8 md:px-10 py-3 md:py-4 rounded cursor-pointer hover:opacity-85 transition-opacity font-bold w-full sm:w-auto"
          style={{ background: DARK, color: CREAM, boxShadow: "0 8px 32px rgba(122,14,32,0.3)" }}
          onClick={() => goTo("/contact")}
        >
          Contact Us →
        </button>
      </section>
    </div>
  );
}

export default HomePage;