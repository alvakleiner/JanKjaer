import { BookPageBody } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"
import { useLanguage } from "../../context/LanguageContext"

const HosSheherasadFantasiensDronningContent: BookPageContent = {
  title: { no: "Jakten på de skjulte vaffelhjertene", en: "The Hunt for the Hidden Waffle Hearts" },
  meta: { no: "Bildebok (1989/2005)", en: "Picture Book (1989/2005)" },
  coverImage: {
    src: "/images/vaffelhjertene-3d.png",
  },
  quotesTitle: { no: "", en: "" },
  quotes: [],
  paragraphs: {
    no: [
      "Jakten på de skjulte vaffelhjertene forteller om en familie som har flyttet til en drabantby. Barna, Marit og Jon-Jon, synes blokken ser fryktelig trist ut. De tror også at de som bor der, må være verdens mest kjedelige mennesker. For å få dem i bedre humør, foreslår faren at de skal lage vafler. Men ettersom de mangler alle råvarene og butikkene er stengt, må Marit og Jon-Jon gå en runde i oppgangen og låne det de trenger av naboene.",
      "Under denne «store vaffel-ekspedisjonen» møter ikke Marit og Jon-Jon bare en rekke hjelpsomme mennesker – de får også et blikk inn i leiligheter som både er forbausende innredet og temmelig ulike. De møter originale personer som oberst Bang-Dhue med frue, flyvertinne Kathrine Winge, samt Pastor Glad og hans tallrike familie. De blir kjent med Raymond Stålhammer, enkefru Felix-Hansen og familien Ahmed fra Pakistan. Overalt får de låne ingredienser til vaflene – til gjengjeld blir de satt til å løse diverse oppgaver. De må pusse pokaler og vanne blomster og trøste skrikerunger og sette opp stereoanlegg og stave ord.",
      "Til slutt er det duket for et stort vaffelkalas hos de nyinnflyttede. Alle naboene blir invitert. Og alle har med gaver, ting, som Marit og Jon-Jon kjenner igjen fra leilighetene de har besøkt.",
      "Når de tar seg en tur ut om kvelden, synes Marit og Jon-Jon at blokken plutselig fortoner seg helt annerledes. De blir enige om å ha et vaffelkalas så ofte som mulig.",
    ],
    en: [
      "Content in English missing. Please refer to the Norwegian version.",
    ],
  },
}

export default function HosSheherasadFantasiensDronning() {
    const { lang } = useLanguage()
  
    return (
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">
          <BookPageBody content={HosSheherasadFantasiensDronningContent} />

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
            {lang === "no" ? "Jakten på de skjulte vaffelhjertene er en bildebok for barn hvor Jan Kjærstad har skrevet teksten. Illustrasjonene i 1989-utgaven var laget av" : "The Hunt for the Hidden Waffle Hearts is a children's picture book with text by Jan Kjærstad. The illustrations in the 1989 edition were made by"}{" "}
            
            <a  href="https://no.wikipedia.org/wiki/Vivian_Zahl_Olsen"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
            >
              Vivian Zahl Olsen
            </a>
            {" "}{lang === "no" ? "mens 2005-utgaven er illustrert av" : "while the 2005 edition is illustrated by"}{" "}
            <a  href="https://jillmoursund.blogspot.com/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
            >
              Jill Moursund
            </a>
            .
          </p>
        </div>
      </section>
    )
}
