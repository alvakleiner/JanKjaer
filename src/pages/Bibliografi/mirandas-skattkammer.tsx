import { BookPageBody, BookPageQuotes } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"
import { useLanguage } from "../../context/LanguageContext"

const mirandasSkattkammerContent: BookPageContent = {
  title: { no: "Mirandas skattekammer", en: "Miranda's Treasury" },
  meta: { no: "Bildebok (2008)", en: "Picture book (2008)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://magikon.no/products/mirandas-skattkammer-jan-kjaerstad-og-kristin-roskifte?_pos=1&_sid=6805d1185&_ss=r" },
    en: { label: "Buy the book here", href: "https://magikon.no/products/mirandas-skattkammer-jan-kjaerstad-og-kristin-roskifte?_pos=1&_sid=6805d1185&_ss=r" },
  },
  coverImage: {
    src: "/images/mirandas-skattkammer-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Reviews" },
  quotes: [
    {
      text: "«Nyttig og viktig barnebok i en tid da tempo, aktivitet og flyktighet i så sterk grad preger også små barns hverdag. For dem og foreldrene kan Mirandas skattkammer bli en motvekt som virker samlende, roende og meningsskapende.»",
      source: "Finn Stenstad, Tønsbergs blad",
    },
    {
      text: "«En god idé. Jan Kjærstad og Kristin Roskifte har sammen laget en veldig fiks barnebok.»",
      source: "Morten Abrahamsen, VG",
    },
    {
      text: "«Ideen er like enkel som god. Det hele får en pedagogisk vri ved at deler av historien fortelles uten ord … Resultatet er en frodig bok hvor man kan gå på oppdagelsesferd i bildene … En tradisjonell bok, morsom og innholdsrik.»",
      source: "Kirsti Grotmol, Numer",
    },
    {
      text: "«En fin, litt lang, historie for barn – med illustrasjoner det er klasse over!»",
      source: "Marie Laland Ekeli, Mamma",
    },
  ],
  paragraphs: {
    no: [
      "Denne bildeboken handler om Miranda, en eldre dame som eier en bruktbutikk. En dag får hun besøk av seksåringen Nora, som aldri har vært der før. Nora blir nysgjerrig på alle de gamle tingene og synes butikken er veldig fin, dessuten byr Miranda på saft og sjokoladekjeks. Når Nora stiller mange spørsmål, får Miranda anledning til å fortelle historier fra sitt spennende og mangfoldige liv.",
      "Boken er både et eventyr om å søke etter noe verdifullt og en slags biografi som forteller om et menneskes liv på et litt overraskende vis. Leseren presenteres for momenter i Mirandas liv, og på en mer tematisk enn kronologisk måte. Innflettet i hovedfortellingen finner man oppslag som viser f.eks. kjæledyr Miranda har hatt, klær hun har brukt fra barndom til voksen alder, hvor hun har bodd, eller hvilke kjærester hun har hatt. Gjennom Nora og Mirandas samtale synliggjøres det at et liv kan ha mange fasetter og at det i et barns fremtid kan ligge store muligheter.",
      "Kristin Roskiftes illustrasjoner er detaljrike og leseren kan gå på oppdagelsesferd i dem og stadig finne nye ting og sammenhenger.",
      "Boken er velegnet for samlesing på tvers av generasjoner, historien danner et utmerket utgangspunkt for samtaler om små og store ting i livet.",
      "\u00A0",
      "Illustratør: Kristin Roskifte",
    ],
    en: [
      "Content in English missing. Please refer to the Norwegian version.",
    ],
  },
}

export default function MirandaSkattkammer() {
  const { lang } = useLanguage()
  
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

        <BookPageBody content={mirandasSkattkammerContent} />

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
          {lang === "no" ? "Illustratør" : "Illustrator"}:{" "}
          
          <a  href="https://www.kristinroskifte.no/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
          >
            Kristin Roskifte
          </a>
        </p>

        <BookPageQuotes content={mirandasSkattkammerContent} />

      </div>
    </section>
  )
}