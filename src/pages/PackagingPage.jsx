import { PACKAGES } from '../data/constants';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import weddingBuffet from '../assets/weddingBuffet.jpeg';

function PackagesPage() {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Catering Packages"
        title="Our Packages"
        image={weddingBuffet}
        imageAlt="Guests at a wedding serving themselves from the buffet"
      >
        From budget friendly to ultra premium. Every package includes a Kids Menu (50 Pax) and full table setup for guests above 300.
      </PageHero>

      <section className="px-4 sm:px-8 md:px-12 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-8 md:mb-12 pb-6 border-b border-ink/10">
          <h2 className="font-display font-extrabold text-[clamp(28px,4vw,44px)] leading-none tracking-tight">Choose a menu</h2>
          <p className="text-[15px] text-ink/60">Contact us for pricing, customised to your guest count and requirements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
          {PACKAGES.map((pkg, i) => (
            <div key={pkg.name} className="rounded-2xl overflow-hidden bg-cream shadow-[0_1px_0_rgba(42,26,10,0.08)] border border-ink/10">
              {/* Header */}
              <button
                className="w-full text-left px-5 md:px-8 py-6 md:py-8 flex items-center justify-between gap-4 cursor-pointer"
                style={{ background: pkg.color }}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <div>
                  <div className="eyebrow text-[10px]! text-white/70 mb-2">{pkg.tag}</div>
                  <h3 className="font-display text-[28px] md:text-[34px] font-bold leading-none text-cream">
                    {pkg.name}
                  </h3>
                  <div className="text-[13px] text-white/65 mt-2">{pkg.mains.length} main course dishes</div>
                </div>
                <span
                  className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-cream transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(180deg)" : "none" }}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </button>

              {/* Body - Expanded content */}
              {open === i && (
                <div className="px-5 md:px-8 py-6 md:py-8 page-enter">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-7">
                    {pkg.starters?.length > 0 && (
                      <MenuSection title="Starters / Reception" items={pkg.starters} color={pkg.color} />
                    )}
                    <MenuSection title="Main Course" items={pkg.mains} color={pkg.color} />
                    <MenuSection title="Salads" items={pkg.salads} color={pkg.color} />
                    <MenuSection title="Drinks" items={pkg.drinks} color={pkg.color} />
                    <MenuSection title="Dessert" items={pkg.dessert} color={pkg.color} />
                    {pkg.extras && <MenuSection title="Bridal Party Extras" items={pkg.extras} color={pkg.color} />}
                    {pkg.photoshoot && <MenuSection title="Photo Shoot (30 Pax)" items={pkg.photoshoot} color={pkg.color} />}
                  </div>
                </div>
              )}

              {/* Body - Collapsed preview */}
              {open !== i && (
                <div className="px-5 md:px-8 py-4 flex gap-2 flex-wrap items-center">
                  {["Starters", "Mains", "Salads", "Drinks", "Dessert"].map(t => (
                    <span
                      key={t}
                      className="text-[12px] font-medium px-3 py-1 rounded-full"
                      style={{ background: `${pkg.color}18`, color: pkg.color }}
                    >
                      {t}
                    </span>
                  ))}
                  <button
                    className="ml-auto text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/50 hover:text-ink cursor-pointer"
                    onClick={() => setOpen(i)}
                  >
                    View menu
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-ink/50 mt-10">
          *Tea & Mandazi given to clients getting their wedding cake from Tasty Spices & Catering.
        </p>
      </section>
    </div>
  );
}

function MenuSection({ title, items, color }) {
  return (
    <div>
      <div className="eyebrow text-[10px]! mb-3 pb-2 border-b border-ink/10" style={{ color }}>
        {title}
      </div>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 mb-2 text-[15px] leading-snug text-ink/80">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackagesPage;
