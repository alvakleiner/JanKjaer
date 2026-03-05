import { BookPageBody, BookPageQuotes } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"
import { useLanguage } from "../../context/LanguageContext"

const klodenDreierStilleRundtContent: BookPageContent = {
  title: { no: "Kloden dreier stille rundt", en: "The Earth Turns Quietly" },
  meta: { no: "Noveller (1980)", en: "Short stories (1980)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/kloden-dreier-stille-rundt" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/kloden-dreier-stille-rundt" },
  },
  coverImage: {
    src: "/images/kloden-dreier-stille-rundt-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Quotes" },
  quotes: [
    {
      text: {
        no: "«Er så dyktig at ein mest blir slått i svime.»",
        en: "(In Norwegian) 'Er så dyktig at ein mest blir slått i svime.'",
      },
      source: "Eli Oftedal, VG",
    },
    {
      text: {
        no: "«Den sier vesentlige ting om virkeligheten i vår tid. Og det ser ut som om vi har fått en ny dikter.»",
        en: "'It says essential things about the reality of our time. And we have found a new writer, it seems.'",
      },
      source: "Eiliv Eide, Bergens Tidende",
    },
  ],
  paragraphs: {
    no: [
      "Kloden dreier stille rundt er Jan Kjærstads debutbok og inneholder 14 noveller med svært varierende opplegg. Etter 1970-årenes sterke sosialrealistiske dominans, kom Kjærstads novellesamling til å virke som et klart signal om en litterær nyorientering. Både formelt og innholdsmessig er novellene preget av vilje til eksperiment og uventede innfallsvinkler. Flere av dem gir bredt anlagte utsyn over generasjons- og samtidstendenser. Temaer kan være forurensing, narkomani eller rasisme, men også ungdommelig forelskelse og opprørstrang.",
      "Noen eksempler på variasjonen: I novellen Midnatt forsøker en gutt, i desperasjonen over en venns død, å spille i stykker Rådhuset i Oslo ved hjelp av hardingfelemusikkens trolldom, omtrent som jødene fikk Jerikos murer til å styrte ved å blåse på trompeter – og han klarer det. I novellen I mørket antydes en moderne immunitet mot vold ved at en mannlig tilskuer elsker med en kvinne han knapt kjenner mellom benkeradene, mens filmen Apokalypse nå vises på lerretet i Colosseum kino. I ditt bilde forteller om en dikter som plutselig blir hentet midt på natten og stilt innfor Guds domstol i himmelen. Her må han stå til ansvar for det han har skrevet.",
      "Som eksempler på formeksperiment kan nevnes Troen på et slott der tiden i deler av novellen går baklengs (for å illustrere hva viljen og troen kan makte). I Tirsdag i kirken skrider fortellingen fram, samtidig som det skiftes radikalt mellom de ulike aktørenes synsvinkler (for å få fram mangelen på kommunikasjon). I Maleren med rødt kinn skritter hovedpersonen fra virkeligheten og inn i et bilde, inn i et annet «rom» (for å fremheve det problematiske forholdet mellom kunst og virkelighet). Talkin' 'bout my g-g-generation bygger på at leseren selv skal skrive inn sine assosiasjoner til visse ord i åpne felt på sidene.",
      "I den lange tittelnovellen Kloden dreier stille rundt møtes tolv unge mennesker til en vilter fest med diverse erotiske utskeielser. Mer enn å skildre personene i seg selv, forsøker Kjærstad å legge vekten på det mønstret som oppstår i forholdene mellom dem: Et nett av kryssforbindelser dannes av de opprinnelige, de tenkte og de faktiske og tilfeldige parforhold som oppstår i løpet av festen.",
      "Flere av novellene har for øvrig en dialog som er farget av Grorud-dialekt eller såkalt østkant-dialekt.",
    ],
    en: [
      "The debut novel from 1980; a work which in both shape and content is characterised by a desire for experiment and new perspectives.",
      "The Earth Turns Quietly contains fourteen short stories with extremely varied subject matter and form. The author examines his generation and time, picking up themes like the arms race, pollution and environmental destruction, drugs, the hypnotic power of the mass media and racism. The stories utter a protest about the use of power, aggression and violence. Paradoxically, this protest often comes in wordless, contorted and disenfranchised forms. The communications problem is the nub here, and the stories often reveal misinterpretations and wasted opportunities for understanding. With its sensitive consciousness of the contemporary world the book articulates incidents and experiences that are valid for an entire generation.",
    ],
  },
}

export default function KlodenDreierStilleRundt() {
  const { lang } = useLanguage()
  
  return (
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">
  
        <BookPageBody content={klodenDreierStilleRundtContent} />
        <div className="flex flex-col items-center mt-12 md:mt-10 mb-4">
          <img
            src="/images/kloden-gammelt-omslag.jpg"
            alt="Originalomslaget til Kloden dreier stille rundt"
            className="max-w-56 w-full object-contain"
          />
          <p className="
            mt-4
            text-sm
            tracking-[0.04em]
            font-['Lora',serif]
            text-black/80
            text-center
          ">
            {lang === "no"
              ? "Originalomslaget til Kloden dreier stille rundt"
              : "The original cover of The Earth Turns Quietly"}
          </p>
        </div>

        <BookPageQuotes content={klodenDreierStilleRundtContent} />
  
        </div>
      </section>
  )
}