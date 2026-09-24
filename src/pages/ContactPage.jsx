import PageHero from '../components/PageHero';

const CARDS = [
  {
    label: "Phone",
    body: (
      <>
        <a href="tel:+254722116085" className="block hover:text-gold transition-colors">+254 722 116 085</a>
        <a href="tel:+254739968828" className="block hover:text-gold transition-colors">+254 739 968 828</a>
      </>
    ),
  },
  {
    label: "Email",
    body: <a href="mailto:tastyspicescatering@gmail.com" className="break-all hover:text-gold transition-colors">tastyspicescatering@gmail.com</a>,
  },
  { label: "Service Area", body: "Nairobi & Surrounding Regions" },
  { label: "Response Time", body: "Within 48 business hours" },
];

function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHero eyebrow="Get in Touch" title="Contact Us">
        We'd love to hear from you. Reach out for inquiries, bookings, or any questions.
      </PageHero>

      <section className="px-4 sm:px-8 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {CARDS.map(({ label, body }) => (
            <div key={label} className="p-6 md:p-8 rounded-2xl bg-wine text-cream">
              <div className="eyebrow text-gold mb-4">{label}</div>
              <div className="font-display text-[20px] md:text-[22px] font-semibold leading-snug">{body}</div>
            </div>
          ))}
        </div>

        {/* Note on Packages */}
        <div className="max-w-3xl mx-auto p-6 md:p-10 rounded-2xl text-center bg-cream border border-ink/10">
          <div className="eyebrow text-wine mb-3">Note on Packages</div>
          <p className="text-[15px] md:text-[16px] leading-relaxed text-ink/70">
            Free Kids Menu (50 Pax) for guests above 300 Pax, inclusive of table set up.
            Prices vary by guest count and package tier.
          </p>
        </div>

        <p className="mt-12 text-center font-display italic text-xl text-wine">
          We look forward to making your event unforgettable.
        </p>
      </section>
    </div>
  );
}

export default ContactPage;
