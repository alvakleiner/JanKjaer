import { BookPageBody, BookPageQuotes } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"
import { useLanguage } from "../../context/LanguageContext"
import BookLink from "../../components/BookLink"


const kjærstadsMatriseContent: BookPageContent = {
  title: { no: "Kjærstads matrise", en: "The Matrix of Kjærstad" },
  meta: { no: "Samlede essays med bonusspor (2007)", en: "Essay collection (2007)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/kjaerstads-matrise" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/kjaerstads-matrise" },
  },
  coverImage: {
    src: "/images/kjaerstads-matrise-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Reviews" },
  quotes: [
    {
      text: "«På 950 sider får du den grensesprengende sakprosaen som Norges mest globalorienterte forfatter har produsert de siste 25 årene … Dette er bonusboka for deg som ønsker mer sesam-sesam i tilværelsen.»",
      source: "Dag Herbjørnsrud, Ny Tid",
    },
  ],
  paragraphs: {
    no: [
      "Kjærstads matrise inneholder tre av Jan Kjærstads essaysamlinger. Boken bringer også tre intervjuer med Kjærstad og seks intervjuer han selv har gjort med andre forfattere, samt en presentasjon av hans favorittverk, Tusen og én natt.",
    ],
    en: [
      "Kjærstad's Matrix contains Jan Kjærstad's three first essay collections. This book also contains three interviews with him and six interviews he has made with other authors, plus a presentation of his favourite book collection: One Thousand and One Nights.",
    ],
  },
}

export default function kjærstadsMatrise() {
  const { lang } = useLanguage()

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

      <BookPageBody content={kjærstadsMatriseContent} />

      {/* Bøkene i samlingen / Books in the collection */}
      <h3 className="
        uppercase
        text-xl
        tracking-[0.12em]
        font-['Playfair_Display_SC',serif]
        mt-14
        md:mt-8
        mb-6
      ">
        {lang === "no" ? "Bøkene i samlingen" : "Books in the collection"}
      </h3>

      <div className="border-l-2 border-black/10 pl-5 space-y-4">
        <div>
          <BookLink href="/bibliografi/menneskets-matrise" className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black italic decoration-neutral-400 hover:decoration-neutral-800 transition">
            {lang === "no" ? "Menneskets matrise" : "The Matrix of Man"}
          </BookLink>
          <p className="text-sm tracking-[0.08em] font-['Lora',serif] text-neutral-500 mt-1">
            Essays (1989)
          </p>
        </div>
        <div>
          <BookLink href="/bibliografi/menneskets-felt" className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black italic decoration-neutral-400 hover:decoration-neutral-800 transition">
            {lang === "no" ? "Menneskets felt" : "The Human Sphere"}
          </BookLink>
          <p className="text-sm tracking-[0.08em] font-['Lora',serif] text-neutral-500 mt-1">
            Essays (1997)
          </p>
        </div>
        <div>
          <BookLink href="/bibliografi/menneskets-nett" className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black italic decoration-neutral-400 hover:decoration-neutral-800 transition">
            {lang === "no" ? "Menneskets nett" : "The Human Web"}
          </BookLink>
          <p className="text-sm tracking-[0.08em] font-['Lora',serif] text-neutral-500 mt-1">
            Essays (2004)
          </p>
        </div>
      </div>

      {/* Intervju / Interview */}
      <h3 className="
        uppercase
        text-xl
        tracking-[0.12em]
        font-['Playfair_Display_SC',serif]
        mt-14
        md:mt-8
        mb-6
      ">
      {lang === "no" ? "Intervju" : "Interview"}
      </h3>

      <div className="border-l-2 border-black/10 pl-5">
        <p className="
          font-['Lora',serif]
          text-base
          leading-7
          tracking-[0.04em]
          text-black
        ">
          {lang === "no" ? "I forbindelse med utgivelsen av boken, publiserte Dagbladet et interju med forfatteren, " : "In connection with the publication of the book, Dagbladet published an interview with the author, "}
          <a  href="https://www.dagbladet.no/tekstarkiv/artikkel.php?id=5001070086712&tag=EMNEORD&words=PERSONALIA"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition italic"
          >
            Mitt liv med litteratur
          </a>
          .
        </p>
        <p className="
          text-sm
          tracking-[0.08em]
          font-['Lora',serif]
          text-neutral-500
          mt-2
        ">
          Merete Skogrand, Dagbladet
        </p>
      </div>

      <BookPageQuotes content={kjærstadsMatriseContent} />

      </div>
    </section>
  )
}