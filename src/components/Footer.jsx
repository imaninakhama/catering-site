import { NAV_ITEMS } from '../data/constants';

function SiteFooter({ goTo }) {
  return (
    <footer className="bg-night text-cream px-4 sm:px-8 md:px-12 pt-14 md:pt-20 pb-8">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] pb-10 md:pb-14 mb-6 border-b border-gold/15">
        {/* Brand */}
        <div>
          <div className="font-display text-[40px] md:text-[52px] font-extrabold tracking-[0.1em] leading-none">TASTY</div>
          <div className="font-display italic text-gold text-lg md:text-xl mt-1">Spices & Catering Services</div>
          <p className="text-[14px] leading-relaxed text-cream/50 mt-5 max-w-sm">
            Bringing you the difference in catering and hospitality. Corporate · Personal · Custom.
          </p>
          <div className="font-display italic text-gold/70 text-lg mt-4">The Difference</div>
        </div>

        {/* Navigate */}
        <div>
          <div className="eyebrow text-gold/70 mb-5">Navigate</div>
          <div className="flex flex-col items-start gap-3">
            {NAV_ITEMS.map(({ label, path }) => (
              <button
                key={path}
                onClick={() => goTo(path)}
                className="text-[15px] text-cream/60 hover:text-gold bg-transparent border-0 cursor-pointer transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="eyebrow text-gold/70 mb-5">Contact</div>
          <div className="flex flex-col gap-3 text-[15px] text-cream/60">
            <a href="tel:+254722116085" className="hover:text-gold transition-colors">+254 722 116 085</a>
            <a href="tel:+254739968828" className="hover:text-gold transition-colors">+254 739 968 828</a>
            <a href="mailto:tastyspicescatering@gmail.com" className="break-all hover:text-gold transition-colors">tastyspicescatering@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-2 text-[12px] text-cream/35">
        <span>© 2026 Tasty Spices & Catering Services. All Rights Reserved.</span>
        <span>This is a Tasty Delights Profile. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
