export default function PageHero({ eyebrow, title, accent, children, image, imageAlt, caption }) {
  return (
    <section className="relative overflow-hidden bg-wine text-cream pt-16">
      <div className={`grid ${image ? "lg:grid-cols-[1.05fr_1fr]" : ""}`}>
        <div className="relative px-4 sm:px-8 md:px-12 py-14 md:py-24 flex flex-col justify-center">
          <span className="eyebrow text-gold mb-5">{eyebrow}</span>
          <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(44px,8vw,104px)]">
            {title}
          </h1>
          {accent && (
            <p className="font-display italic text-gold text-[clamp(22px,3vw,36px)] mt-3">{accent}</p>
          )}
          {children && (
            <div className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-cream/70 max-w-xl">{children}</div>
          )}
        </div>

        {image && (
          <figure className="relative h-64 sm:h-96 lg:h-auto lg:min-h-130">
            <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
            {caption && (
              <figcaption className="absolute left-4 bottom-4 right-4 sm:right-auto sm:max-w-xs bg-night/85 text-cream/85 text-[13px] leading-snug px-4 py-3 rounded-lg backdrop-blur">
                {caption}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}
