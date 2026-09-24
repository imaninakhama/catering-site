import { VALUES } from '../data/constants';
import PageHero from '../components/PageHero';
import corporateDirector from '../assets/corporateDirector.jpeg';

function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Our Story"
        title="Experience"
        accent="The Difference"
        image={corporateDirector}
        imageAlt="Our team serving guests along a buffet line at a corporate event"
      />

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-20 px-4 sm:px-8 md:px-12 py-16 md:py-24 items-start">
        <div>
          <p className="font-display text-[clamp(24px,3vw,34px)] font-semibold leading-snug mb-8 max-w-3xl">
            Tasty Spices & Catering brings you the difference in the catering and hospitality world. In this ever competitive food business, we strive to give our very best in the services we provide for our clients.
          </p>
          {[
            "With strong values on quality, delivery time, customer care and bringing an unforgettable experience to any event, we have built a reputation that speaks for itself.",
            "Our business serves Corporate, Private / Personal and Custom clients. We have perfected serving artistic, elegant, memorable yet practical spreads of dishes to be relished by all who grace the events we cater.",
            "With a wide range of cuisine choices, there is something for everyone, from traditional Kenyan favourites to globally inspired dishes, all made with the finest, freshest ingredients."
          ].map((p, i) => (
            <p key={i} className="text-[16px] md:text-[17px] leading-[1.8] mb-6 text-ink/70 max-w-2xl">
              {p}
            </p>
          ))}
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-3">
          {[
            ["Corporate", "Board meetings to large-scale conferences"],
            ["Personal", "Weddings, birthdays & private parties"],
            ["Custom", "Bespoke menus for any occasion"]
          ].map(([title, desc]) => (
            <div key={title} className="p-6 md:p-7 rounded-2xl bg-wine text-cream">
              <div className="eyebrow text-gold/80 mb-2">Service</div>
              <div className="font-display text-2xl font-bold mb-1">{title}</div>
              <div className="text-[14px] leading-relaxed text-cream/60">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-8 md:px-12 pb-16 md:pb-24">
        <div className="mb-8 md:mb-12">
          <span className="eyebrow text-wine block mb-3">Our Values</span>
          <h2 className="font-display font-extrabold text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-tight">What We Stand For</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-ink/15">
          {VALUES.map((v, i) => (
            <div key={v.title} className="py-6 pr-6 border-b border-ink/15 lg:border-b-0">
              <div className="font-display text-gold-deep text-3xl font-bold mb-3">0{i + 1}</div>
              <h3 className="font-display text-[19px] font-bold leading-snug">{v.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact strip */}
      <section className="px-4 sm:px-8 md:px-12 py-10 md:py-14 grid gap-6 sm:grid-cols-2 bg-wine text-cream">
        <div>
          <div className="eyebrow text-gold/80 mb-2">Get in Touch</div>
          <div className="font-display text-2xl md:text-3xl font-bold">
            <a href="tel:+254722116085" className="hover:text-gold transition-colors">+254 722 116 085</a>
            <span className="text-cream/40"> / </span>
            <a href="tel:+254739968828" className="hover:text-gold transition-colors">739 968 828</a>
          </div>
        </div>
        <div className="sm:text-right">
          <div className="eyebrow text-gold/80 mb-2">Email</div>
          <a href="mailto:tastyspicescatering@gmail.com" className="font-display text-xl md:text-2xl font-bold break-all hover:text-gold transition-colors">
            tastyspicescatering@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
