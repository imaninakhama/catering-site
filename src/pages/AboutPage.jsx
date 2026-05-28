import { DARK, CREAM, GOLD } from '../data/constants';
import { VALUES } from '../data/constants';
import { useState } from 'react';

function AboutPage() {
  const [open, setOpen] = useState(null);
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero - Responsive */}
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
            ✦ OUR STORY
          </span>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold uppercase tracking-widest leading-none mb-4" style={{ color: CREAM }}>
            Experience
          </h1>
          <p className="text-[clamp(24px,3vw,40px)] italic font-normal" style={{ color: GOLD }}>
            The Difference
          </p>
        </div>
      </div>

      {/* Main Content - Responsive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 md:gap-16 px-4 md:px-12 py-10 md:py-20 items-start">
        {/* Text content */}
        <div>
          {[
            "Tasty Spices & Catering brings you the difference in the catering and hospitality world. In this ever competitive food business, we strive to give our very best in the services we provide for our clients.",
            "With strong values on quality, delivery time, customer care and bringing an unforgettable experience to any event — we have built a reputation that speaks for itself.",
            "Our business services both Corporate, Private / Personal & Custom entities. We perfected ourselves in serving artistic, elegant, memorable yet practical spreads of dishes to be relished by all who grace the events that we cater at.",
            "With a wide range of cuisine choices, there is something for everyone — from traditional Kenyan favourites to globally inspired dishes, all made with the finest, freshest ingredients."
          ].map((p, i) => (
            <p key={i} className="text-[14px] md:text-[16px] leading-[1.85] mb-6" style={{ color: "rgba(42,26,10,0.68)" }}>
              {p}
            </p>
          ))}
        </div>

        {/* Service cards - Responsive */}
        <div className="flex flex-col gap-3">
          {[
            ["Corporate", "Board meetings to large-scale conferences"],
            ["Personal", "Weddings, birthdays & private parties"],
            ["Custom", "Bespoke menus for any occasion"]
          ].map(([title, desc]) => (
            <div 
              key={title} 
              className="p-5 md:p-7 rounded-xl text-center md:text-left" 
              style={{ background: DARK, border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <div className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] mb-2" style={{ color: "rgba(201,168,76,0.65)" }}>
                SERVICE
              </div>
              <div className="text-base md:text-lg font-semibold mb-1" style={{ color: CREAM }}>
                {title}
              </div>
              <div className="text-[11px] md:text-xs leading-relaxed" style={{ color: "rgba(245,237,224,0.4)" }}>
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values grid - Responsive */}
      <div className="px-4 md:px-12 pb-10 md:pb-20">
        <div className="mb-6 md:mb-10 text-center md:text-left">
          <span className="font-mono text-[10px] tracking-[0.45em] block mb-3" style={{ color: DARK }}>
            ✦ OUR VALUES
          </span>
          <h2 className="text-[clamp(26px,4vw,44px)] font-normal tracking-tight">What We Stand For</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-0.5">
          {VALUES.map((v, i) => (
            <div 
              key={i} 
              className="p-4 md:p-7 text-center hover-card" 
              style={{ background: "rgba(122,14,32,0.03)", border: "1px solid rgba(122,14,32,0.08)" }}
            >
              <div className="text-2xl md:text-3xl mb-2 md:mb-3">{v.icon}</div>
              <h3 className="text-[11px] md:text-[13px] font-semibold leading-snug">{v.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Contact strip - Responsive */}
      <div className="px-4 md:px-12 py-6 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left" style={{ background: DARK }}>
        <div>
          <div className="text-xs md:text-sm font-mono tracking-widest mb-1" style={{ color: "rgba(201,168,76,0.6)" }}>
            GET IN TOUCH
          </div>
          <div className="text-base md:text-xl font-semibold" style={{ color: CREAM }}>
            +254 722 116 085 / 739 968 828
          </div>
        </div>
        <div className="text-center sm:text-right">
          <div className="text-xs md:text-sm font-mono tracking-widest mb-1" style={{ color: "rgba(201,168,76,0.6)" }}>
            EMAIL
          </div>
          <div className="text-sm md:text-lg break-all" style={{ color: CREAM }}>
            tastyspicescatering@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;