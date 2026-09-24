import { SNACK_ITEMS, SNACK_ALSO } from '../data/constants';
import PageHero from '../components/PageHero';
import Breakfast from '../assets/Breakfast.jpeg';

function BistroPage({ goTo }) {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Light Bites & Finger Food"
        title="Snack Bistro"
        image={Breakfast}
        imageAlt="Trays of samosas and boiled eggs set out for a morning event"
      >
        Perfect for receptions, cocktail hours and informal gatherings. Unit prices on request.
      </PageHero>

      <section className="px-4 sm:px-8 md:px-12 py-14 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16 items-start">
          <div>
            <span className="eyebrow text-wine block mb-3">On the Menu</span>
            <h2 className="font-display font-extrabold text-[clamp(32px,4.5vw,56px)] leading-[0.95] tracking-tight mb-8">
              Snacks we serve
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-ink/15">
              {SNACK_ITEMS.map((item, i) => (
                <li key={item} className="flex items-baseline gap-4 py-4 border-b border-ink/15">
                  <span className="font-display text-gold-deep font-bold text-sm w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[20px] md:text-[22px] font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="p-6 md:p-10 rounded-2xl bg-wine text-cream lg:sticky lg:top-24">
            <div className="eyebrow text-gold/80 mb-4">Also Available</div>
            <div className="flex gap-2 flex-wrap mb-8">
              {SNACK_ALSO.map(item => (
                <span key={item} className="px-4 py-2 rounded-full text-[14px] bg-gold/15 text-gold border border-gold/25">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-[15px] leading-relaxed text-cream/65 mb-6">
              Contact us for more information, inquiries, custom orders, other varieties and deliveries.
            </p>
            <div className="font-display text-xl md:text-2xl font-bold mb-8">
              <a href="tel:+254722116085" className="hover:text-gold transition-colors">+254 722 116 085</a>
              <span className="text-cream/40"> / </span>
              <a href="tel:+254739968828" className="hover:text-gold transition-colors">739 968 828</a>
            </div>
            <button className="btn-gold w-full" onClick={() => goTo("/contact")}>Place an Order</button>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default BistroPage;
