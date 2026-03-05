import { useState, useRef } from "react"
import { useLanguage } from "../../context/LanguageContext"

const images = [
  {
    src: "/images/jan-barn.jpg",
    caption: { no: "Jan Kjærstad på 17. mai (1960) utenfor blokken i Hagelundveien der han vokste opp, rett ved «skråningen». Han begynte i 1. klasse samme høst. Foto: privat", en: "Jan Kjærstad on 17th of May (1960) outside the apartment block in Hagelundveien where he grew up, right next to 'the slope'. He started first grade that same autumn. Photo: private" },
  },
  {
    src: "/images/jan-herfol.jpg",
    caption: { no: "Jan Kjærstad på Herføl, stedet hvor moren vokste opp. Barndomshjemmet til moren brukes i dag som sommerhus, og har vært et viktig arbeidssted for forfatteren. Foto: Frode Hansen / VG", en: "Jan Kjærstad on Herføl, where his mother grew up. The house is now used as a summer house and has been an important place of work for the author. Photo: Frode Hansen / VG" },
  },
  {
    src: "/images/jan-m-camus.jpg",
    caption: { no: "Jan Kjærstad hjemme på Holtet i Oslo sammen med hunden Camus, oppkalt etter den franske forfatteren Albert Camus. Foto: Anniken C. Mohr / Klassekampen", en: "Jan Kjærstad pictured at home with his dog Camus, named after the French writer Albert Camus. Photo: Klassekampen" },
  },
]


function ImageSlider() {
  const { lang } = useLanguage()
  const [index, setIndex] = useState(0)
  const startX = useRef<number | null>(null)

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1))

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (diff > 50) next()
    if (diff < -50) prev()
    startX.current = null
  }

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
        <img
          src={images[index].src}
          alt={images[index].caption[lang]}
          className="
            h-full w-auto mx-auto object-contain
            transition-opacity duration-300
          "
        />
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

    {/* Bildetekst */}
    <p
      className="
        mt-6
        sm:mt-8
        text-center
        text-[12px]
        sm:text-sm
        italic
        tracking-[0.08em]
        font-['Playfair_Display_SC',serif]
      "
    >
      {images[index].caption[lang]}
    </p>
  </div>
  )
}

export default ImageSlider