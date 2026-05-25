import { DARK, CREAM, GOLD, PARCH } from '../data/constants';
import { PACKAGES } from '../data/constants';
import { useState } from 'react';

function PackagesPage() {
  const [open, setOpen] = useState(null);

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
            ✦ CATERING PACKAGES
          </span>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold uppercase tracking-widest leading-none mb-4" style={{ color: CREAM }}>
            Our Packages
          </h1>
          <p className="text-[17px] leading-[1.75] max-w-120" style={{ color: "rgba(245,237,224,0.5)" }}>
            From budget-friendly to ultra-premium — every package includes Kids Menu (50 Pax) and full table setup for guests above 300.
          </p>
        </div>
      </div>

      <div className="px-12 py-12">
        <p 
          className="text-[13px] font-mono tracking-widest text-center mb-10 pb-6" 
          style={{ color: "rgba(42,26,10,0.4)", borderBottom: "1px solid rgba(42,26,10,0.08)" }}
        >
          ✦ Contact us for pricing — customised to your guest count and requirements ✦
        </p>

        <div className="grid grid-cols-2 gap-3">
          {PACKAGES.map((pkg, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(42,26,10,0.1)" }}>
              {/* Header */}
              <div 
                className="px-8 py-6 flex items-center justify-between cursor-pointer" 
                style={{ background: pkg.color }} 
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div>
                  <div className="font-mono text-[9px] tracking-[0.4em] mb-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {pkg.tag}
                  </div>
                  <h3 className="text-xl font-semibold italic" style={{ color: CREAM, fontFamily: "Georgia, serif" }}>
                    {pkg.name}
                  </h3>
                </div>
                <span 
                  className="text-xl" 
                  style={{ 
                    color: "rgba(255,255,255,0.6)", 
                    transform: open === i ? "rotate(180deg)" : "rotate(0)", 
                    transition: "transform 0.3s" 
                  }}
                >
                  ▾
                </span>
              </div>

              {/* Body */}
              {open === i && (
                <div className="px-8 py-6 page-enter" style={{ background: PARCH }}>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                    {pkg.starters?.length > 0 && (
                      <MenuSection title="Starters / Reception" items={pkg.starters} />
                    )}
                    <MenuSection title="Main Course" items={pkg.mains} />
                    <MenuSection title="Salads" items={pkg.salads} />
                    <MenuSection title="Drinks" items={pkg.drinks} />
                    <MenuSection title="Dessert" items={pkg.dessert} />
                    {pkg.extras && <MenuSection title="Bridal Party Extras" items={pkg.extras} />}
                    {pkg.photoshoot && <MenuSection title="Photo Shoot (30 Pax)" items={pkg.photoshoot} />}
                  </div>
                </div>
              )}

              {open !== i && (
                <div className="px-8 py-4 flex gap-2 flex-wrap" style={{ background: "rgba(42,26,10,0.03)" }}>
                  {["Starters","Mains","Salads","Drinks","Dessert"].map(t => (
                    <span 
                      key={t} 
                      className="font-mono text-[9px] tracking-[0.25em] px-3 py-1 rounded-full" 
                      style={{ background: `${pkg.color}18`, color: pkg.color }}
                    >
                      {t}
                    </span>
                  ))}
                  <span className="font-mono text-[9px] tracking-[0.2em] ml-auto" style={{ color: "rgba(42,26,10,0.3)" }}>
                    Tap to expand ▾
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center font-mono text-[10px] tracking-[0.2em] mt-10" style={{ color: "rgba(42,26,10,0.4)" }}>
          *Tea & Mandazi given to clients getting their wedding cake from Tasty Spices & Catering.
        </p>
      </div>
    </div>
  );
}

function MenuSection({ title, items }) {
  return (
    <div>
      <div className="font-mono text-[9px] tracking-[0.4em] mb-3 font-bold" style={{ color: DARK }}>
        {title.toUpperCase()}
      </div>
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2 mb-1.5">
          <span style={{ color: GOLD, fontSize: 10, marginTop: 4 }}>✦</span>
          <span className="text-[13px] leading-relaxed" style={{ color: "rgba(42,26,10,0.7)" }}>
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default PackagesPage;