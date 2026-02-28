import { useLanguage } from "../context/LanguageContext"

export default function Galleri() {
  const { lang } = useLanguage()

  const paragraphs = {
    no: [
      "Jan Kjærstad forteller følgende om fotografiet nedenfor:",
      "«Av alle de bilder fotografer har tatt av meg opp gjennom årene, liker jeg dette best. Jeg sitter under den store bøken som vokser like ved Karen Blixens grav på høyden ved Rungstedlund nord for København. Jeg er nesten ikke synlig; man kunne tro jeg var en del av roten. Og sånn er det: Vi mennesker overdriver kanskje vår egen betydning. Sett i perspektiv, sett i forhold til naturen, alt liv, er vi bare en liten brikke. Det var Tom Martinsen som tok bildet. Han kalte det Storyteller. Takk.»",
      "NB! Bildet er copyright-beskyttet og benyttes med tillatelse.",
    ],
    en: [
      "Jan Kjærstad about the photograph below:",
      "'Of all the photographs taken of me over the years, this is my favourite. I am sitting under the great beech tree that grows close to Karen Blixen's grave on the hill at Rungstedlund, north of Copenhagen. I am barely visible; one might think I was part of the root. And that is how it is: we human beings perhaps overestimate our own importance. Seen in perspective, in relation to nature, all life, we are just a small piece. It was Tom Martinsen who took the photograph. He called it Storyteller. Thank you.'",
      "NB! The photograph is copyright protected and is to be used with permission. Below the photograph can be seen uncropped.",
    ],
  }

  const facsimiles = [
    {
        filename: "vg-berge",
        ext: "jpg",
        caption: { no: "Berge (VG, 18. august 2017)", en: "Berge (VG, August 18, 2017)" },
    },
    {
        filename: "DN-normans",
        ext: "jpg",
        caption: { no: "Normans område (Dagens Nyheter, 5. oktober 2012).", en: "Norman's area (Dagens Nyheter, October 5, 2012)" },
    },
    {
        filename: "vg-kongen-av-europa",
        ext: "png",
        caption: { no: "Kongen av Europa (VG, 16. oktober 2005).", en: "The King of Europe (VG, October 16, 2005)" },
    },
    {
        filename: "aftenposten-og-dagsavisen",
        ext: "png",
        caption: { no: "Kongen av Europa (Aftenposten, 10. oktober 2005) og Tegn til kjærlighet (Dagsavisen, 25. september 2002).", en: "The King of Europe (Aftenposten, October 10, 2005) and Signs of Love (Dagsavisen, September 25, 2002)" },
    },
    {
        filename: "dagbladet-oppdageren",
        ext: "jpg",
        caption: { no: "Oppdageren (Dagbladet, 1999).", en: "The Discoverer (Dagbladet, 1999)" },
    },
  ]

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
          {lang === "no" ? "Galleri" : "Gallery"}
        </h2>

        <h3
              className="
                uppercase
                text-xl
                tracking-[0.12em]
                font-['Playfair_Display_SC',serif]
                mb-6
              "
            >
              Storyteller
        </h3>

        <div className="
          text-base
          leading-7
          tracking-[0.04em]
          font-['Lora',serif]
          text-black
          space-y-6
        ">
          {paragraphs[lang].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="flex justify-center my-10 md:my-8">
          <img
            src="/images/storyteller.jpg"
            alt="Storyteller"
            className="w-full max-w-3xl h-auto object-contain"
          />
        </div>

        <h3
            className="
            uppercase
            text-xl
            tracking-[0.12em]
            font-['Playfair_Display_SC',serif]
            mt-12
            mb-6
            "
        >
            {lang === "no" ? "Faksimiler" : "Facsimiles"}
        </h3>

        {facsimiles.map((item) => (
        <div key={item.filename} className="flex flex-col gap-2">
            <div className="border border-neutral-200 p-3">
            <img
                src={`/images/${item.filename}.${item.ext}`}
                alt={item.caption[lang]}
                className="w-full h-auto object-contain"
            />
            </div>
            <p className="text-sm tracking-[0.04em] font-['Lora',serif] text-black/80 mt-1 mb-7 md:mb-8">
            {item.caption[lang]}
            </p>
        </div>
        ))}

        <h3
            className="
            uppercase
            text-xl
            tracking-[0.12em]
            font-['Playfair_Display_SC',serif]
            mt-3
            md:mt-4
            mb-6
            "
        >
            {lang === "no" ? "Nostalgi" : "Nostalgia"}
        </h3>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-1 md:gap-2">
          {Array.from({ length: 44 }, (_, i) => (
            <div key={i} className="aspect-2/3 overflow-hidden bg-neutral-100 rounded-xs">
              <img
                src={`/images/nostalgia/n${i + 1}.jpg`}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
