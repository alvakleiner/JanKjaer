import { useLanguage } from "../context/LanguageContext"

export default function Kontakt() {
  const { lang } = useLanguage()

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 mt-2 md:mt-4 mb-18">

        <h2
          className="
            text-center
            text-[20px]
            sm:text-2xl
            font-medium
            tracking-widest
            font-['Playfair_Display',serif]
            mb-8 md:mb-10
          "
        >
          {lang === "no" ? "Kontakt" : "Contact"}
        </h2>

        <h3
          className="
            uppercase
            text-lg
            tracking-[0.12em]
            font-['Playfair_Display_SC',serif]
            mt-10
            mb-4
          "
        >
          {lang === "no" ? "Hva er et menneske?" : "What is a human being?"}
        </h3>

        <p className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black">
        <a
            href="mailto:jankjaer@online.no"
            className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
        >
            {lang === "no" ? "Kontakt forfatteren" : "Contact the author"}
        </a>
        </p>

      </div>
    </section>
  )
}
