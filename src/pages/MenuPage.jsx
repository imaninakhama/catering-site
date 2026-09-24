import { useState, useEffect } from 'react';
import { PACKAGES } from '../data/constants';
import { MENU_SECTIONS } from '../data/menu';
import { Overline, DoubleRule, WaveEdge } from '../components/Ornaments';
import spiceStation from '../assets/spiceStation.jpeg';
import grilledBeef from '../assets/grilledBeef.jpeg';
import servingGuests from '../assets/servingGuests.jpeg';
import Breakfast from '../assets/Breakfast.jpeg';

// Only sections with a photo that actually shows that kind of food get one.
const SECTION_PHOTOS = {
  mains:  { src: grilledBeef,   alt: "Fried chicken, grilled meat and beef stew in a chafing dish" },
  drinks: { src: servingGuests, alt: "Drinks table with juices and sodas set up in a garden" },
  bistro: { src: Breakfast,     alt: "Trays of samosas and boiled eggs laid out for a morning event" },
};

const SECTION_NOTES = {
  bistro: "Unit prices on request.",
};

const shortName = (pkg) => pkg.name.replace(" Delight", "");

function MenuPage({ goTo }) {
  const [pkgFilter, setPkgFilter] = useState(null);
  const [activeId, setActiveId] = useState(MENU_SECTIONS[0].id);

  const sections = MENU_SECTIONS
    .map((s) => ({
      ...s,
      dishes: pkgFilter ? s.dishes.filter((d) => d.packages.some((p) => p.name === pkgFilter)) : s.dishes,
    }))
    .filter((s) => s.dishes.length > 0);

  // Highlight the section currently in view in the quick-access list.
  useEffect(() => {
    const els = document.querySelectorAll("[data-menu-section]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveId(e.target.dataset.menuSection)),
      { rootMargin: "-35% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pkgFilter]);

  const jumpTo = (id) => {
    const el = document.getElementById(`menu-${id}`);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 130, behavior: "smooth" });
  };

  const activePkg = PACKAGES.find((p) => p.name === pkgFilter);

  return (
    <div className="min-h-screen">
      {/* Menu header */}
      <section className="relative bg-wine text-cream pt-16 overflow-hidden">
        <div className="grid md:grid-cols-[1.4fr_1fr] items-center gap-10 px-4 sm:px-8 md:px-12 pt-12 md:pt-20 pb-4">
          <div>
            <Overline align="left" className="text-gold mb-5">Food & Drinks</Overline>
            <h1 className="font-display font-extrabold leading-[0.9] tracking-tight text-[clamp(56px,9vw,128px)]">The Menu</h1>
            <p className="text-[17px] md:text-[18px] leading-relaxed text-cream/70 max-w-xl mt-6">
              Every dish from our four catering packages and the Snack Bistro, in one place. Choose a package to see exactly what it includes.
            </p>
            <p className="eyebrow text-[10px]! text-gold/80 mt-6 leading-relaxed">
              Prices vary by guest count and package tier
            </p>
          </div>
          <div className="hidden md:block justify-self-end w-full max-w-80 lg:max-w-96">
            <div className="aspect-square rounded-full bg-cream/10 p-4">
              <img src={spiceStation} alt="Chips with sausages, pilau and chapati in a chafing dish" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </div>
        <WaveEdge className="text-parch -mb-px" />
      </section>

      {/* Mobile: sticky category chips */}
      <div className="lg:hidden sticky top-16 z-30 bg-parch/95 backdrop-blur border-b border-ink/10">
        <div className="flex gap-2 overflow-x-auto px-4 sm:px-8 py-3 [scrollbar-width:none]">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => jumpTo(s.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold border cursor-pointer transition-colors ${activeId === s.id ? "bg-wine text-cream border-wine" : "bg-cream border-ink/10"}`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr] gap-10 xl:gap-16 px-4 sm:px-8 md:px-12 pt-8 md:pt-10 pb-16 md:pb-24">
        {/* Desktop: quick access */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="eyebrow text-ink/50 mb-3">Quick access</div>
            <nav className="border-t border-ink/15 mb-8">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => jumpTo(s.id)}
                  className={`w-full flex items-baseline justify-between gap-3 py-2.5 border-b border-ink/10 text-left cursor-pointer transition-colors ${activeId === s.id ? "text-wine" : "text-ink/75 hover:text-wine"}`}
                >
                  <span className={`font-display text-[17px] ${activeId === s.id ? "font-bold" : "font-semibold"}`}>{s.title}</span>
                  <span className="text-[12px] text-ink/45">{s.dishes.length}</span>
                </button>
              ))}
            </nav>
            <PackageFilter value={pkgFilter} onChange={setPkgFilter} vertical />
          </div>
        </aside>

        <div>
          {/* Mobile / tablet filter */}
          <div className="lg:hidden mb-8">
            <PackageFilter value={pkgFilter} onChange={setPkgFilter} />
          </div>

          {activePkg && (
            <div className="mb-8 px-5 py-4 rounded-xl text-cream flex flex-wrap items-center justify-between gap-3" style={{ background: activePkg.color }}>
              <span className="text-[15px]">
                Showing the <span className="font-display italic text-[18px]">{activePkg.name}</span> menu
              </span>
              <button className="text-[12px] font-semibold uppercase tracking-[0.14em] underline underline-offset-4 cursor-pointer" onClick={() => setPkgFilter(null)}>
                Show all
              </button>
            </div>
          )}

          {sections.map((s) => {
            const photo = SECTION_PHOTOS[s.id];
            const note = SECTION_NOTES[s.id];
            return (
              <section
                key={s.id}
                id={`menu-${s.id}`}
                data-menu-section={s.id}
                className="mb-14 md:mb-20 last:mb-0 scroll-mt-32"
              >
                <div className="flex items-end justify-between gap-6 mb-4">
                  <div>
                    <h2 className="font-display font-extrabold text-[clamp(32px,4.5vw,56px)] leading-none tracking-tight">
                      {s.title}
                    </h2>
                    <p className="text-[14px] text-ink/60 mt-2">
                      {s.dishes.length} {s.dishes.length === 1 ? "item" : "items"}{note ? ` · ${note}` : ""}
                    </p>
                  </div>
                  {photo && (
                    <div className="shrink-0 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-cream p-1.5 md:p-2.5 -mb-2">
                      <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-full rounded-full object-cover" />
                    </div>
                  )}
                </div>
                <DoubleRule className="text-wine/70 mb-2" />

                <ul className="grid md:grid-cols-2 md:gap-x-12">
                  {s.dishes.map((d) => (
                    <li key={d.name} className="py-3.5 border-b border-ink/10">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-[18px] md:text-[20px] font-semibold leading-snug">{d.name}</span>
                        {d.packages.length > 0 && (
                          <>
                            <span className="hidden sm:block flex-1 min-w-4 border-b-2 border-dotted border-ink/20 translate-y-[-4px]" />
                            <span className="hidden sm:flex shrink-0 gap-1" aria-label={`In ${d.packages.map(shortName).join(", ")}`}>
                              {d.packages.map((p) => (
                                <span key={p.name} title={p.name} className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
                              ))}
                            </span>
                          </>
                        )}
                      </div>
                      {d.packages.length > 0 && (
                        <div className="text-[13px] text-ink/55 mt-1">
                          {d.packages.length === PACKAGES.length ? "All packages" : d.packages.map(shortName).join(" · ")}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                {s.id === "bistro" && (
                  <button className="btn-wine mt-6" onClick={() => goTo("/bistro")}>More on the Snack Bistro</button>
                )}
              </section>
            );
          })}

          {/* Dietary callout */}
          <div className="mt-16 md:mt-20 rounded-2xl bg-wine text-cream p-7 md:p-10 grid gap-6 md:grid-cols-[1.5fr_auto] md:items-center">
            <div>
              <Overline align="left" className="text-gold mb-3">Custom Packages</Overline>
              <h2 className="font-display font-extrabold text-[clamp(26px,3.5vw,40px)] leading-tight">
                Dietary needs, or something not listed?
              </h2>
              <p className="text-[16px] leading-relaxed text-cream/65 mt-3 max-w-xl">
                We plan bespoke menus around your occasion, guest count and dietary needs. Tell us what you have in mind.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <button className="btn-gold" onClick={() => goTo("/contact")}>Enquire Now</button>
              <button className="btn-ghost" onClick={() => goTo("/packages")}>Compare Packages</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PackageFilter({ value, onChange, vertical = false }) {
  const options = [{ name: null, label: "All packages", color: "#7A0E20" }, ...PACKAGES.map((p) => ({ name: p.name, label: p.name, color: p.color }))];
  return (
    <fieldset>
      <legend className="eyebrow text-ink/50 mb-3">Show dishes in</legend>
      <div className={vertical ? "flex flex-col gap-1.5" : "flex flex-wrap gap-2"}>
        {options.map((o) => {
          const active = value === o.name;
          return (
            <button
              key={o.label}
              onClick={() => onChange(o.name)}
              aria-pressed={active}
              className={`flex items-center gap-2.5 rounded-full border px-4 py-2 text-[13px] font-semibold cursor-pointer transition-colors ${vertical ? "w-full" : ""}`}
              style={active ? { background: o.color, borderColor: o.color, color: "#F5EDE0" } : { borderColor: `${o.color}40`, color: o.color }}
            >
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: active ? "#F5EDE0" : o.color }} />
              {o.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default MenuPage;
