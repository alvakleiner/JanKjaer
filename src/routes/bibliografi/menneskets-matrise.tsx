import BookLink from "../../components/BookLink"
import { BookPageBody } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"
import { useLanguage } from "../../context/LanguageContext"

const mennesketsMatriseContent: BookPageContent = {
  title: { no: "Menneskets matrise", en: "The Matrix of Man" },
  meta: { no: "Essays (1989)", en: "Essays (1989)" },
  coverImage: {
    src: "/images/menneskets-matrise-3d.png",
  },
  quotesTitle: { no: "", en: "" },
  quotes: [],
  paragraphs: {
    no: [
      "Jan Kjærstad har helt fra han debuterte deltatt aktivt i den litterære debatten. Han har også med jevne mellomrom formulert sine overveielser om litteratur, dvs. poetikk, i tidsskrifter. Noen av disse innleggene og essayene er samlet i Menneskets matrise. Denne boken gir et godt innblikk i hvordan Jan Kjærstad selv betrakter sitt litterære ståsted. I forordet oppsummerer han hva han har forsøkt å vinne gehør for, særlig i 80-årene:",
      "1. Nødvendigheten av bredde i norsk litteratur.",
      "2. At mange yngre forfattere skriver politiske bøker, men på en annen måte enn i 70-årene.",
      "3. Nysgjerrigheten, viljen til utvidelse av litteraturens rom, bruken av ikke-litterære impulser.",
      "4. At det må gå an å skildre mennesket i en roman også indirekte, f.eks. gjennom romanens plot.",
      "5. Sammenhengen mellom verdensforståelse og romanskriving.",
      "Hvis 80-årene skulle betegnes med ett ord, foreslår Kjærstad ordet «åpenhet».",
    ],
    en: [
      "What singled out Norwegian novels of the 1980s? In this book, The Matrix of Man, Jan Kjærstad provides his viewpoint, and tries to become part of the creation of the myth.",
      "In retrospect, the Eighties seem to have been characterised by consolidation, cautious probing into unknown literary landscapes, and by trial and error. Many authors used these years in the enormous effort required to do an about face, from the past to the future.",
      "The discussions, articles and essays in this collection are written by a man who is in transit, they are theses in a learning process and are not meant as definitive opinions. The introductions and notes form their own small history of the literary Eighties as they appeared to an author who made his debut in 1980.",
    ],
  },
}

export default function mennesketsMatrise() {
  const { lang } = useLanguage()

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

        <BookPageBody content={mennesketsMatriseContent} />

        <p className="
          text-base
          leading-7
          tracking-[0.04em]
          font-['Lora',serif]
          text-black
          mt-8
          mb-14
        ">
          {lang === "no" ? "Menneskets matrise er ikke lenger i salg som egen bok, men tilgjengelig i essaysamlingen " : "The Matrix of Man is no longer available as a standalone book, but can be found in the essay collection "}{" "}
          <BookLink href="/bibliografi/kjaerstads-matrise" className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black italic decoration-neutral-400 hover:decoration-neutral-800 transition">
            {lang === "no" ? "Kjærstads matrise" : "The Matrix of Kjærstad"}
          </BookLink>
          .
        </p>
      </div>
    </section>
  )
}
