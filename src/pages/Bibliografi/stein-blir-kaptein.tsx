import BookPage from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"

const steinBlirKapteinContent: BookPageContent = {
  title: { no: "Stein blir kaptein", en: "Stein Becomes a Captain" },
  meta: { no: "Bildebok (2012)", en: "Picture book (2012)" },
  buyLink: {
    no: { label: "Illustratør: Hilde Kramer", href: "https://no.wikipedia.org/wiki/Hilde_Kramer" },
    en: { label: "Illustrator: Hilde Kramer", href: "https://no.wikipedia.org/wiki/Hilde_Kramer" },
  },
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

export default function steinBlirKaptein() {
  return <BookPage content={steinBlirKapteinContent} />
}