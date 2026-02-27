import { BookPageBody, BookPageQuotes } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"

const steinBlirKapteinContent: BookPageContent = {
  title: { no: "Stein blir kaptein", en: "Stein Becomes a Captain" },
  meta: { no: "Bildebok (2012)", en: "Picture book (2012)" },
  coverImage: {
    src: "/images/stein-blir-kaptein-3d.png",
  },
  quotesTitle: { no: "Sitat", en: "Review" },
  quotes: [
    {
      text: "«Ei nydelig bok med en tydelig ettersmak av tårer.»",
      source: "Ingeborg Marie Jensen, Stavanger Aftenblad",
    },
  ],
  paragraphs: {
    no: [
      "Stein har mistet det fineste han eide. Den tunge gullringen han har fått av bestefar. Som er død. Og nå er ringen også borte. Forsvunnet på havets dyp.",
      "Alva vil gjerne hjelpe ham å lete. Men tør Stein være med ned i havet? I Alvas ubåt? Han som ikke kan svømme en gang. Og som heter Stein.",
      "Alle vet jo det: Stein synker.",
      "En magisk undersjøisk eventyrreise.",
    ],
    en: [
      "Content in English missing. Please refer to the Norwegian version.",
    ],
  },
}

export default function SteinBlirKaptein() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

        <BookPageBody content={steinBlirKapteinContent} />

        <p className="
          text-base
          leading-7
          tracking-[0.04em]
          font-['Lora',serif]
          text-black
          mt-12
          md:mt-4
          mb-14
        ">
          Illustratør:{" "}
          
          <a  href="https://no.wikipedia.org/wiki/Hilde_Kramer"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
          >
            Hilde Kramer
          </a>
        </p>

        <BookPageQuotes content={steinBlirKapteinContent} />

      </div>
    </section>
  )
}