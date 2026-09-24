import { VALUES } from '../data/constants';
import { MENU_SECTIONS } from '../data/menu';
import { Overline, WaveEdge, Stamp, Marquee } from '../components/Ornaments';
import homepagephoto from '../assets/homepagephoto.jpeg';
import corporateDirector from '../assets/corporateDirector.jpeg';
import weddingBuffet from '../assets/weddingBuffet.jpeg';
import spiceStation from '../assets/spiceStation.jpeg';
import grilledBeef from '../assets/grilledBeef.jpeg';
import Breakfast from '../assets/Breakfast.jpeg';
import servingGuests from '../assets/servingGuests.jpeg';

const SERVICES = [
  {
    title: "Corporate Events",
    desc: "Board lunches, seminars, AGMs and product launches, served on schedule so your programme runs on time.",
    image: corporateDirector,
    alt: "Guests in company polo shirts being served at a buffet line",
  },
  {
    title: "Personal Events",
    desc: "Weddings, birthdays and private dining, with a menu built around your family and your guests.",
    image: weddingBuffet,
    alt: "Wedding guests serving themselves from chafing dishes in a garden tent",
  },
  {
    title: "Custom Packages",
    desc: "Bespoke menus planned around your occasion, guest count and any dietary needs.",
    image: spiceStation,
    alt: "Chips with sausages, pilau and chapati in a chafing dish",
  },
];

const MENU_PHOTO_TILES = [
  { id: "mains",  image: grilledBeef,   alt: "Fried chicken, grilled meat and beef stew in a chafing dish" },
  { id: "bistro", image: Breakfast,     alt: "Trays of samosas and boiled eggs laid out for a morning event" },
  { id: "drinks", image: servingGuests, alt: "Drinks table with juices and sodas set up in a garden" },
];

const sectionById = (id) => MENU_SECTIONS.find((s) => s.id === id);

// Dish names for the scrolling strip, taken straight from the menus.
const MARQUEE_DISHES = [
  ...sectionById("mains").dishes.slice(0, 10).map((d) => d.name),
  ...sectionById("bistro").dishes.slice(0, 6).map((d) => d.name),
];

const STATS = [
  ["2019", "Established in Nairobi"],
  ["4", "Catering packages, Emerald to Platinum"],
  ["300+", "Guests get a free kids menu (50 Pax) and table setup"],
  ["48h", "Our response time on enquiries"],
];

function HomePage({ goTo }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-wine text-cream pt-16">
        <div className="grid lg:grid-cols-[1.1fr_1fr] items-center gap-12 lg:gap-8 px-4 sm:px-8 md:px-12 pt-12 md:pt-20 pb-6 lg:pb-10">
          <div className="relative z-10">
            <Overline align="left" className="text-gold mb-6">Serving Nairobi since 2019</Overline>
            <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(44px,6.4vw,96px)]">
              Catering for corporate, personal and custom events
            </h1>
            <p className="font-display italic text-gold text-[clamp(26px,3vw,40px)] leading-tight mt-4 mb-6">
              The Difference
            </p>
            <p className="text-[17px] md:text-[18px] leading-relaxed text-cream/70 max-w-lg mb-10">
              Buffets, finger food and full event service across Nairobi and the surrounding regions. Pick one of our four packages, or we'll build a menu around your event.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn-gold" onClick={() => goTo("/contact")}>Book an Event →</button>
              <button className="btn-ghost" onClick={() => goTo("/menu")}>See the Menu</button>
            </div>
            <a href="tel:+254722116085" className="inline-block mt-6 text-[15px] text-cream/60 hover:text-gold transition-colors">
              Or call us on <span className="font-semibold text-cream">+254 722 116 085</span>
            </a>
          </div>

          {/* Arched photo */}
          <div className="relative mx-auto w-full max-w-90 sm:max-w-110 lg:max-w-130">
            <div className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 rounded-t-full rounded-b-3xl border border-gold/60" />
            <div className="relative aspect-4/5 overflow-hidden rounded-t-full rounded-b-3xl bg-wine-deep">
              <img
                src={homepagephoto}
                alt="Buffet trays of fried plantain, beef fry, chicken and creamed greens"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <Stamp
              ring="CORPORATE · PERSONAL · CUSTOM · NAIROBI · "
              center="Est. 2019"
              className="absolute -left-4 bottom-8 sm:-left-10 md:bottom-14"
            />
          </div>
        </div>
        <WaveEdge className="text-parch -mb-px" />
      </section>

      {/* Stats */}
      <section className="bg-parch px-4 sm:px-8 md:px-12 pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map(([big, small]) => (
            <div key={big} className="text-center lg:border-r lg:last:border-r-0 border-ink/10 px-2">
              <div className="font-display font-extrabold text-wine leading-none text-[clamp(48px,7vw,96px)]">{big}</div>
              <div className="text-[14px] md:text-[15px] text-ink/65 mt-3 max-w-52 mx-auto leading-snug">{small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services, round photos */}
      <section className="bg-cream px-4 sm:px-8 md:px-12 py-16 md:py-28 text-center">
        <Overline className="text-wine mb-4">Core Services</Overline>
        <h2 className="font-display font-extrabold text-[clamp(40px,6vw,80px)] leading-[0.95] tracking-tight">What We Do</h2>
        <p className="text-[16px] leading-relaxed text-ink/60 max-w-md mx-auto mt-4">
          We cook, set up and serve. You choose the kind of event and we plan the food around it.
        </p>

        <div className="grid gap-14 md:gap-8 md:grid-cols-3 mt-14 md:mt-20">
          {SERVICES.map(({ title, desc, image, alt }) => (
            <article key={title} className="flex flex-col items-center">
              <div className="photo-zoom relative w-60 h-60 md:w-full md:h-auto md:max-w-72 md:aspect-square rounded-full bg-parch p-3 md:p-4">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src={image} alt={alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="font-display text-[26px] md:text-[30px] font-bold leading-tight mt-8 mb-3">{title}</h3>
              <p className="text-[15px] leading-relaxed text-ink/65 max-w-xs">{desc}</p>
            </article>
          ))}
        </div>

        <button className="btn-wine mt-14" onClick={() => goTo("/packages")}>View Packages</button>
      </section>

      {/* Dish strip */}
      <Marquee items={MARQUEE_DISHES} className="bg-gold text-ink" />

      {/* Menu preview */}
      <section className="px-4 sm:px-8 md:px-12 py-16 md:py-28 bg-parch">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <Overline align="left" className="text-wine mb-4">Food & Drinks</Overline>
            <h2 className="font-display font-extrabold text-[clamp(40px,6vw,80px)] leading-[0.95] tracking-tight">The Menu</h2>
            <p className="text-[16px] leading-relaxed text-ink/60 max-w-md mt-4">
              Kenyan favourites and international dishes across four packages, plus a snack bistro for receptions, cocktail hours and informal gatherings.
            </p>
          </div>
          <button className="btn-wine self-start md:self-auto" onClick={() => goTo("/menu")}>Browse the Full Menu →</button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {MENU_PHOTO_TILES.map(({ id, image, alt }) => {
            const section = sectionById(id);
            return (
              <button key={id} onClick={() => goTo("/menu")} className="photo-zoom group relative overflow-hidden rounded-2xl aspect-4/3 md:aspect-3/4 text-left cursor-pointer">
                <img src={image} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-night/90 via-night/20 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 p-5 md:p-6 text-cream">
                  <div className="text-[13px] text-cream/70 mb-1">{section.dishes.length} items</div>
                  <div className="font-display text-[28px] md:text-[32px] font-bold leading-none">{section.title}</div>
                  <div className="text-[14px] mt-3 text-cream/80 line-clamp-2">
                    {section.dishes.slice(0, 4).map((d) => d.name).join(" · ")}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px mt-4 rounded-2xl overflow-hidden bg-ink/10 border border-ink/10">
          {MENU_SECTIONS.filter((s) => !MENU_PHOTO_TILES.some((t) => t.id === s.id)).map((s) => (
            <button key={s.id} onClick={() => goTo("/menu")} className="bg-cream hover:bg-white text-left p-5 cursor-pointer transition-colors">
              <div className="font-display text-[20px] font-bold leading-tight">{s.title}</div>
              <div className="text-[13px] text-ink/55 mt-1">{s.dishes.length} items</div>
            </button>
          ))}
          <button onClick={() => goTo("/packages")} className="bg-wine text-cream hover:bg-wine-deep text-left p-5 cursor-pointer transition-colors">
            <div className="font-display text-[20px] font-bold leading-tight">Compare Packages</div>
            <div className="text-[13px] text-cream/60 mt-1">Emerald to Platinum</div>
          </button>
        </div>
      </section>

      {/* Values */}
      <section className="bg-wine text-cream">
        <WaveEdge flip className="text-parch -mt-px" />
        <div className="px-4 sm:px-8 md:px-12 py-14 md:py-24 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <Overline align="left" className="text-gold mb-4">Our Values</Overline>
            <h2 className="font-display font-extrabold text-[clamp(40px,6vw,80px)] leading-[0.95] tracking-tight">Why Choose Us</h2>
            <p className="font-display italic text-gold text-2xl mt-4">The Difference</p>
          </div>
          <ol className="divide-y divide-cream/15 border-y border-cream/15">
            {VALUES.map((v, i) => (
              <li key={v.title} className="grid grid-cols-[48px_1fr] md:grid-cols-[72px_1fr_1.2fr] gap-x-4 gap-y-1 py-6 md:py-7 items-baseline">
                <span className="font-display text-gold text-2xl md:text-3xl font-bold">0{i + 1}</span>
                <h3 className="font-display text-[22px] md:text-[24px] font-bold leading-snug">{v.title}</h3>
                <p className="col-start-2 md:col-start-3 text-[15px] leading-relaxed text-cream/60">{v.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-night text-cream px-4 sm:px-8 md:px-12 py-20 md:py-32 text-center">
        <Overline className="text-gold mb-6">Get Started</Overline>
        <h2 className="font-display font-extrabold text-[clamp(40px,7vw,96px)] leading-[0.95] tracking-tight max-w-5xl mx-auto">
          Ready to experience <span className="italic font-semibold text-gold">the difference?</span>
        </h2>
        <p className="text-[16px] md:text-[18px] leading-relaxed text-cream/60 max-w-xl mx-auto mt-6 mb-10">
          Tell us the date, the number of guests and the kind of event, and we'll put a menu together for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="btn-gold" onClick={() => goTo("/contact")}>Contact Us →</button>
          <a className="btn-ghost" href="tel:+254722116085">Call +254 722 116 085</a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
