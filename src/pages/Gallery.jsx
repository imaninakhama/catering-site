import { GALLERY_ITEMS } from '../data/constants';
import PageHero from '../components/PageHero';
import corporateDirector from "../assets/corporateDirector.jpeg";
import servingGuests from "../assets/servingGuests.jpeg";
import weddingBuffet from "../assets/weddingBuffet.jpeg";
import Breakfast from "../assets/Breakfast.jpeg";
import grilledBeef from "../assets/grilledBeef.jpeg";
import spiceStation from "../assets/spiceStation.jpeg";

// Create a mapping from label to image
const imageMap = {
  "TS&CS Director at a past Corporate Event": corporateDirector,
  "Serving Guests at a past Private Event": servingGuests,
  "Buffet Set Up (Wedding)": weddingBuffet,
  "Breakfast Set Up (Corporate Seminar)": Breakfast,
  "Delicious & Tasty Grilled Beef ready to serve": grilledBeef,
  "Live Spice Station at a Gala Dinner": spiceStation,
};

function GalleryPage() {
  return (
    <div className="min-h-screen">
      <PageHero eyebrow="Past Events" title="Gallery">
        A glimpse of what we do, from intimate setups to grand buffets.
      </PageHero>

      <section className="px-4 sm:px-8 md:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {GALLERY_ITEMS.map((item, i) => (
            <figure
              key={item.label}
              className={`photo-zoom relative overflow-hidden rounded-2xl bg-wine/10 ${i === 0 ? "sm:col-span-2 lg:row-span-2 aspect-4/3 lg:aspect-auto" : "aspect-4/3"}`}
            >
              <img
                src={imageMap[item.label]}
                alt={item.label}
                loading={i < 3 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-night/85 to-transparent text-cream px-5 pt-12 pb-4 text-[14px] md:text-[15px] leading-snug">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 md:mt-14 p-8 md:p-12 rounded-2xl bg-wine text-cream flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="eyebrow text-gold/80 mb-3">Want to see more?</div>
            <p className="font-display text-[clamp(24px,3vw,36px)] font-bold leading-tight">
              Get in touch and we'll share our full event portfolio.
            </p>
          </div>
          <a href="mailto:tastyspicescatering@gmail.com" className="btn-gold shrink-0 normal-case! tracking-normal! break-all">
            tastyspicescatering@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
