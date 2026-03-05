import { BookPageBody, BookPageQuotes } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"
import { useLanguage } from "../../context/LanguageContext"

const homoFalsusContent: BookPageContent = {
  title: { no: "Homo falsus eller det perfekte mord", en: "Homo Falsus or The Perfect Murder" },
  meta: { no: "Roman (1984)", en: "Novel (1984)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/homo-falsus-2" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/homo-falsus-2" },
  },
  coverImage: {
    src: "/images/homo-falsus-3d.png",
  },
  quotesTitle: { no: "Sitat", en: "Quote" },
  quotes: [
    {
      text: {
        no: "«Han er uten tvil en av våre mest spennende og betydningsfulle forfattere akkurat nå.»",
        en: "(In Norwegian) 'Han er uten tvil en av våre mest spennende og betydningsfulle forfattere akkurat nå.'",
      },
      source: "Øystein Rottem, Ny Tid",
    },
  ],
  paragraphs: {
    no: [
      "Når en romanskikkelse bukker under, skyldes det vanligvis at hun eller han møter for mye motstand. I Homo Falsus skjer nærmest det motsatte. En ung kvinne kollapser på grunn av for stor suksess. Hun har fått til alt. Hun har feiret triumfer på tre områder: som akademiker på universitetet, som rockemusiker og som politisk kvinneaktivist. I hennes øyne er seirene og vellykketheten et tegn på at hun er forført og ufarliggjort av samfunnet. Samtidig er hun sjokkert over hvor lett det er å bløffe seg fram.",
      "Romanen speiler denne kvinnen i en periode da hun gjennomtenker sitt liv, i noen uker da hun bestreber seg på å komme tilbake til et slags nullpunkt, hvor hun igjen kan skritte ut i virkeligheten. Og i denne fasen velger hun samme strategi som Greta Garbo, den berømte filmstjernen fra 30-årene: Hun så å si «abdiserer» fra tronen og trekker seg tilbake. Hun kutter alle bånd, til venner og til foreldre. Hun tar seg jobb i en nattklubb, sover om dagen og lever om natten. I ly av mørket, og iført klær som minner om Garbos, spaserer hun rundt i Oslos øde gater og reflekterer over den løgnen hun er omgitt av på alle kanter. Derfor er også teksten preget av detaljer, både sanne og falske – i likhet med den «informasjonsstrøm» som omgir alle mennesker i dag.",
      "I romanen opptrer også tre menn, tre representanter for gamle og tradisjonelle maktgrupper, en jurist, en prest og en major. I løpet av karrieren har alle tre blitt så desillusjonerte over løgnaktigheten i sitt yrke at de har skiftet jobb. De befinner seg nå i «grå» byråkratiske stillinger; de er blitt en del av den ansiktsløse makt. Disse tre mennene har etter tur et stevnemøte med Greta, den unge kvinnen, i en leilighet i Camilla Colletts vei. Og etter at de først mer eller mindre frivillig blir aktører i hver sin scene fra en Garbo-film, blir de forført og deretter simpelthen elsket bort fra jordens overflate, eliminert, ved hjelp av en tantristisk elskovsteknikk. Dette er tilsynelatende et perfekt mord, men det dreier seg like mye om et «språkmord», om en kvinne som nøytraliserer de språk som har kneblet henne.",
      "Homo Falsus har en forholdsvis radikal form, i og med at mye av fortellingen er tuftet på mønstre eller prinsipper man kan finne igjen i EDB'ens programmering. Det kan se ut som om bokens tre hovedavsnitt er tre «sløyfer» (innen EDB kalt «loops»), hvor den samme grunnleggende historien gjentas med ulike variabler. («Tittelen» på hvert kapittel utgjøres av en tangram-figur, noe som styrker en slik tolkning.) Dessuten har Kjærstad tydeligvis benyttet seg av noe man kunne kalle computer-mytologi, altså «overtroen» på dette feltet.",
      "I romanen finnes et element av det som kalles metafiksjon – en term som ofte knyttes til den litterære retningen postmodernisme – det vil i dette tilfellet si at det opptrer en forfatter som langsomt trekkes inn i den romanen han sitter og dikter fram. Den kvinnen han skriver om, henvender seg plutselig til ham i virkeligheten. Til slutt er det bare forfatterens egen kreativitet eller skriftlige formuleringsevne som kan redde livet hans – hvis da ikke forfatteren til sjuende og sist er en forestilling som befinner seg i kvinnens hode. I motsetning til i en tradisjonell krimbok er spørsmålet kanskje ikke så mye «Hvem har gjort det?» som «Hvem skriver?».",
      "Homo Falsus er en roman som gjør utstrakt bruk av film. I teksten refereres det stadig til filmer, samtidig som både metaforer og symboler hentes fra dette universet. Boken er også blitt filmet, under tittelen Det perfekte mord.",
    ],
    en: [
      "In Homo Falsus or The Perfect Murder Kjærstad puts his finger on the pulse of the Eighties. The main burden of the book is seduction and deceit. Language as a channel of power is a key theme.",
    ],
  },
}

export default function HomoFalsus() {
  const { lang } = useLanguage()

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

      <BookPageBody content={homoFalsusContent} />


      {/* Pris / Award */}
      <h3 className="
        uppercase
        text-xl
        tracking-[0.12em]
        font-['Playfair_Display_SC',serif]
        mt-14
        md:mt-8
        mb-6
      ">
      {lang === "no" ? "Pris" : "Award"}
      </h3>

      <div className="border-l-2 border-black/10 pl-5">
        <p className="
          font-['Lora',serif]
          text-base
          leading-7
          tracking-[0.04em]
          text-black
        ">
          {lang === "no" ? "For romanen mottok Jan Kjærstad i 1984 Norsk Litteraturkritikerlags pris." : "This novel won Jan Kjærstad The Norwegian Literary Critics Association’s Prize in 1984."}
        </p>
      </div>

      <BookPageQuotes content={homoFalsusContent} />

      </div>
    </section>
  )
}