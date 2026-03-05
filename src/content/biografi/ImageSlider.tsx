import { useState, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

const images = [
  {
    src: "/images/jan-barn.jpg",
    caption: {
      no: "Jan Kjærstad på 17. mai (1960) utenfor blokken i Hagelundveien der han vokste opp, rett ved «skråningen». Han begynte i 1. klasse samme høst. Foto: privat",
      en: "Jan Kjærstad on 17th of May (1960) outside the apartment block in Hagelundveien where he grew up, right next to 'the slope'. He started first grade that same autumn. Photo: private",
    },
  },
  {
    src: "/images/jan-herfol.jpg",
    srcSm: "/images/jan-herfol-sm.jpg",
    caption: {
      no: "Jan Kjærstad på Herføl, stedet hvor moren vokste opp. Barndomshjemmet til moren brukes i dag som sommerhus, og har vært et viktig arbeidssted for forfatteren. Foto: Frode Hansen / VG",
      en: "Jan Kjærstad on Herføl, where his mother grew up. The house is now used as a summer house and has been an important place of work for the author. Photo: Frode Hansen / VG",
    },
  },
  {
    src: "/images/jkeh.jpg",
    srcSm: "/images/jkeh-sm.jpg",
    caption: {
      no: "Jan Kjærstad på kontoret hans i familiens tidligere hjem på Frogner i Oslo. Foto: Elin Høyland",
      en: "Jan Kjærstad pictured in his office at the family's previous home in Frogner, Oslo. Photo: Elin Høyland",
    },
  },
];

function ImageSlider() {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    startX.current = null;
  };

  return (
    <div className="mt-12 sm:mt-16 mb-10 max-w-4xl mx-auto">
      {/* Wrapper som gir plass til piler utenfor bildet */}
      <div className="relative px-10 sm:px-12 lg:px-14">
        {/* Selve “rammen” for bildet */}
        <div
          className="
          relative overflow-hidden
          h-65
          sm:h-90
        "
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <picture>
            {images[index].srcSm && (
              <source media="(max-width: 479px)" srcSet={images[index].srcSm} />
            )}
            <img
              src={images[index].src}
              alt={images[index].caption[lang]}
              className="h-full w-auto mx-auto object-contain transition-opacity duration-300"
            />
          </picture>
        </div>

        {/* Piler – alltid utenfor bildet, fast plass */}
        <button
          onClick={prev}
          aria-label="Forrige bilde"
          className="
          absolute left-0 top-1/2 -translate-y-1/2
          text-4xl sm:text-5xl
          leading-none
          select-none
          cursor-pointer
          hover:opacity-70
        "
        >
          ‹
        </button>

        <button
          onClick={next}
          aria-label="Neste bilde"
          className="
          absolute right-0 top-1/2 -translate-y-1/2
          text-4xl sm:text-5xl
          leading-none
          select-none
          cursor-pointer
          hover:opacity-70
        "
        >
          ›
        </button>
      </div>

      {/* Bildetekst – alle i samme grid-celle så høyden alltid = lengste tekst */}
      <div className="mt-6 sm:mt-8 grid">
        {images.map((img, i) => (
          <p
            key={i}
            aria-hidden={i !== index}
            style={{ gridArea: "1 / 1" }}
            className={`
              text-center text-[12px] sm:text-sm italic tracking-[0.08em] font-playfair-sc
              transition-opacity duration-300
              ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            {img.caption[lang]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
