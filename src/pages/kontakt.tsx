import { useLanguage } from "../context/LanguageContext"
import SEO from "../components/SEO"

export default function Kontakt() {
  const { lang } = useLanguage()

  const seo = {
    title: { no: "Kontakt – Jan Kjærstad", en: "Contact – Jan Kjærstad" },
    description: {
      no: "Kontaktinformasjon for Jan Kjærstad.",
      en: "Contact information for Jan Kjærstad.",
    },
  } as const

  return (
    <section className="bg-white">
      <SEO title={seo.title[lang]} description={seo.description[lang]} path="/kontakt" />
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 mt-2 md:mt-4 mb-18">

        {/* h2 kun på mobil */}
        <h2
          className="
            md:hidden
            text-center
            text-[20px]
            font-medium
            tracking-widest
            font-['Playfair_Display',serif]
            mb-8
          "
        >
          {lang === "no" ? "Kontakt" : "Contact"}
        </h2>

        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:gap-10">

          {/* Bilde */}
          <div className="shrink-0 mb-6 md:mb-0">
            <img
              src="/images/jk-haand.jpg"
              alt=""
              className="w-2/3 md:w-auto md:h-80 h-auto mx-auto md:mx-0 block"
            />
            <p className="text-sm tracking-[0.04em] font-['Lora',serif] text-black/70 mt-3">
              Foto: Line Møller / VG
            </p>
          </div>

          {/* Tekst */}
          <div>


            <h3
              className="
                uppercase
                text-lg
                tracking-[0.12em]
                font-['Playfair_Display_SC',serif]
                mb-4
                mt-4
                md:mt-0
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

        </div>

      </div>
    </section>
  )
}
