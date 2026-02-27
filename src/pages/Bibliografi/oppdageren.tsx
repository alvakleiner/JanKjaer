import { BookPageBody, BookPageQuotes } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"
import { useLanguage } from "../../context/LanguageContext"


const oppdagerenContent: BookPageContent = {
  title: { no: "Oppdageren", en: "The Discoverer" },
  meta: { no: "Roman (1999)", en: "Novel (2009)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/oppdageren-1" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/oppdageren-1" },
  },
  coverImage: {
    src: "/images/oppdageren-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Quotes" },
  quotes: [
    {
      text: {
        no: "«Med den storslåtte avslutningen på trilogien om Jonas Wergeland er Jan Kjærstad rykket opp i Nobelprisklassen.»",
        en: "'With this impressive conclusion to his trilogy about Jonas Wergeland, Jan Kjærstad has stepped up into the Nobel Prize class.'",
      },
      source: "Tom Ekeroth, Aktuelt, København",
    },
    {
      text: {
        no: "«… et opus magnum som kan ta pusten fra noen hver, et verk så rikt og sammensatt at det knapt kjenner sin make i nyere norsk litteratur …»",
        en: "'… a magnum opus that can take anyone's breath away, a work so rich and heterogeneous that its like can hardly be found in recent Norwegian literature …'",
      },
      source: "Øystein Rottem, Dagbladet",
    },
    {
      text: {
        no: "«… et hovedverk i vår litteratur ved slutten av århundret.»",
        en: "'… a major work in our literature at the end of the century.'",
      },
      source: "Hans H. Skei, Aftenposten",
    },
    {
      text: {
        no: "«… en roman som også appellerer til hjertet.»",
        en: "'… a novel that also appeals to the heart.'",
      },
      source: "Tone Solberg, Dagens Næringsliv",
    },
    {
      text: {
        no: "«For meg er Jan Kjærstad en praktfull forfatter som eier tematisk tyngde, mestrer melodramaets koder og tar sine lesere på alvor. Her fins sanselighet og refleksjonsvilje. Stor lykke og svart sorg.»",
        en: "'For me Jan Kjærstad is a splendid writer, thematically substantial, a master of melodramatic codes and a man who takes his readers seriously. He displays sensuality and a willingness to reflect. Great joy and deep sorrow.'",
      },
      source: "Steinar Sivertsen, Stavanger Aftenblad",
    },
    {
      text: {
        no: "«Man skal vidt omkring for å finne et nordisk romanverk som kan måle seg med Kjærstad-trilogiens dimensjoner både fortellermessig og analytisk, sanselig og intellektuelt med tredje bind er det fullbrakt.»",
        en: "'You would have to go far to find a Scandinavian work of fiction to compare with the magnitude of the Kjærstad trilogy, whether narratively or analytically, sensually or intellectually … this third volume rounds it off.'",
      },
      source: "Søren Vinterberg, Politiken",
    },
    {
      text: {
        no: "«En av 1990-tallets mest forførende, mest besettende og mest oppsiktsvekkende romaner i nordisk litteratur i sin helhet.»",
        en: "'One of the most seductive, most obsessing and most noteworthy novels in the whole of 1990s Scandinavian literature.'",
      },
      source: "Lars Handsten, Berlingske Tidende",
    },
    {
      text: {
        no: "«Kjærstad är en sådan gudabenådad berättare. Det är helt enkelt inte många färfattare förunnat att kunna dra samma historia en tredje gång på et omfång av 500 sidor, och göra det så att man som läsare inte för ett ögonblick tappar intresset.»",
        en: "'Kjærstad is such a divinely gifted story-teller. There simply aren't many authors who are capable of writing 500 pages on the same storyline for a third time, and doing so without losing reader interest for an instant.'",
      },
      source: "Svenska Dagbladet",
    },
    {
      text: {
        no: "«… this novel is one of the most lyrical that I've read in a long time. In a subtle-erotic way, this book is the Norwegian equivalent of the Indian book of love, the Kama Sutra, read by the young Wergeland.»",
        en: "'… this novel is one of the most lyrical that I've read in a long time. In a subtle-erotic way, this book is the Norwegian equivalent of the Indian book of love, the Kama Sutra, read by the young Wergeland.'",
      },
      source: "Kester Fredriks, NRC-Handelsblad",
    },
  ],
  paragraphs: {
    no: [
      "Oppdageren er den siste av de tre bøkene om TV-personligheten Jonas Wergeland, men det betyr ikke at leseren her får en «fasit». De tre bøkene er likeverdige; de blir fortalt som fra hvert sitt hjørne i en likesidet trekant. Hvis det eksisterer en «sannhet» om Jonas Wergeland, finnes den i forlengelsen av, eller bortenfor, de tre romanene.",
      "I Oppdageren er rammehistorien lagt til årene etter årtusenskiftet. Jonas Wergeland er igjen en fri mann etter sju år i fengsel; han har sonet ferdig dommen for drapet på sin kone – et drap han kanskje ikke har begått. Jonas er nå på en reise i Sognefjorden, en seilas med den samme gamle redningsskøyta som spilte en rolle i Forføreren og Erobreren, fordi datteren, Kristin, har et firma som arbeider med å kartlegge fjorden og områdene rundt; målet er muligens å lage et nettsted om Sognefjorden. Det er også Kristin som er fortelleren i Oppdageren, men Jonas selv slipper til i to av bokens åtte deler.",
      "Igjen blir Jonas Wergelands liv belyst gjennom en rekke historier, men nok en gang fra nye vinkler og med nye beretninger. Barndomsvennen heter nå verken Nerfertiti eller Lille Ørn, men Bo Wang Lee, en gutt som viser seg å være en jente og som tar med Jonas på en ekspedisjon inn i Nordmarka for å finne Vega-boernes skjulested. En leser vil uvilkårlig spørre seg om Jonas hadde tre barndomsvenner eller bare én, men én som var så mangfoldig at hver av fortellerne bare får tak i én side ved denne personen?",
      "I Oppdageren presenteres Jonas Wergelands liv som en reise gjennom en fjord, med alle sine forgreninger, og hvor de ulike stedene, der man ankrer opp, står for de forskjellige og viktige menneskene i hans liv; foreldre, søsken, besteforeldre, venner, lærere, naboer, kjærester. Romanen forteller bl.a. om en far, som Jonas trodde var venneløs, men som fylte kirkens over tusen plasser da han døde. Vi får høre om broren, Daniel, som ble kristen etter å ha hoppet 5,27 i lengde tre ganger etter hverandre og derfor slo opp i Bibelen. Vi møter mormoren, Jørgine, som under krigen tar knekken på en tyskvennlig entreprenør og gir formuen hun arver til det nye Rådhuset. Vi leser historien om onkel Lauritz som begår selvmord ved å fly inn i en høyspentledning – av ulykkelig kjærlighet. Vi blir presentert for Leonard – Leonardo – som klipper om sitt liv, og vi får høre om kjærester: Jonas' første kjæreste var ikke én, men tre på én gang: trillinger.",
      "Ellers møter vi Jonas tidlig der han ligger under vann i badekaret. Han trener på å holde pusten. Hvorfor? Fordi han vil skape seg et navn, han vil bli livredder. Utfordringen inntreffer lenge før han tror. Elleve år gammel er Jonas med broren til en nakenbadestrand for å se på damer gjennom en kikkert. Jonas synes ikke det er særlig opphissende. Men så ser han en liten pjokk gå under, på grunna. Han kvier seg for å løpe inn mellom disse nakne menneskene, men gjør det, vasser ut og drar opp gutten. All svømme- og dykketreningen – og så trenger han bare å vasse ut til knes og stikke hånden ned i vannet. Jonas føler at livet er ferdig. Han er 11 år og livsmålet er realisert. Hvor går man videre fra fjellets topp? Hva skal han gjøre de neste 80 årene?",
      "Så, ikke lenge etterpå er Jonas ved Svarttjern sammen med Margrete som han er forelsket i. Han får sin store sjanse: Margrete mister gull-armringen sin mens hun bader, og selv om alle guttene dykker, forsøker å finne den, er det Jonas som, gjennom sin trening i badekaret, endelig finner den. Jonas skjønner plutselig hva han egentlig har trent for: Holde pusten så han kan vinne en kjæreste.",
      "Oppdageren er først og sist en kjærlighetshistorie. En fortelling om forholdet mellom Jonas og Margrete. Om en mann som glemmer én ting. Det hjelper ikke bare å kunne holde pusten. Han må også holde mennesker. Margrete holder ham, men han glemmer å holde rundt henne.",
      "Oppdageren er også en roman som i mye handler om å ta feil av mennesker. Vi tror vi vet, men vi vet ikke. I barndommen har Jonas en nabo i byggelaget som folk kjenner lite til. Hun går i kjedelige klær, og man får av og til et gløtt inn i en entré med grå tapet. Man kaller henne for Den grå eminense. En dag åpner hun døren for Jonas, og innenfor entreen, stiger han inn i en annen verden, duftende av krydderurter; en verden inni verden; en stue innredet som om han befinner seg ved Middelhavet, med vinduslemmer og flislagt gulv, med planter og springvann, bur med hvite duer og det hele. Midt på Grorud trår Jonas inn i Provence. Han får snart høre historien bak dette. Som tjueåring, like før andre verdenskrig, hadde Karen Mohr reist i Europa. En dag kom hun til et sted i nærheten av Cannes. På en kafé her, møter hun Picasso som tegner henne. Hun forteller Jonas om hvordan det var å sitte foran disse øynene; at det var som å bli oppdaget. Det var så sterkt at hun forsøkte å bli i disse minuttene resten av livet. Jonas skjønner at Karen Mohrs leilighet ikke er en flukt, men et forsøk på å leve i to verdener. Til tross for dette avviste hun Picasso. Karen Mohr forteller Jonas at han var for enkel. Hun forteller Jonas at Picasso, altså verdens største maler, ikke var verdig. Det var Karen Mohr som lærte Jonas noe om kjærlighetens kompromissløshet og alvor. Det tok derfor lang tid før Jonas fant den verdige, men han fant henne til slutt, og hun het Margrete.",
      "Oppdageren er altså i alt vesentlig en kjærlighetsroman, en fortelling om forholdet mellom Jonas og Margrete. Om hvor vanskelig det er å forstå et annet menneske, selv det mennesket man deler seng med. Jonas Wergeland ønsker å skape seg et navn. Han lager en TV-serie som nesten får en hel nasjon til å forandre kurs; han står i noen år nest etter kongen i rang. Men han skaper seg et navn først når han ender som en fotnote, en dedikasjon i en kjærlighetshistorie.",
      "Hovedmetaforen i Oppdageren er fjorden, eller et tre lagt horisontalt. Kjærstad søker å vise en ny type dybde i mennesket ved å legge den horisontalt. I Kjærstads trilogi om Jonas Wergeland er mennesket et vesen med en hittil uant vidde. De tre bøkene hviler på en idé om at vi til nå bare har skrapt i overflaten av hva et menneske er. Selv Darwin, selv Nietzsche, selv Freud har bare skrapt i overflaten av hva et menneske er. Til tross for fire tusen år med sivilisasjon vet vi så godt som ingenting om menneskets vesen. Bare at mennesket er større, videre, enn vår innbilningskraft rekker. Det ligger mange liv pakket inn i ett liv. Alle mennesker forgrener seg like rikt og vakkert og nifst og trolsk som en norsk Sognefjord.",
    ],
    en: [
      "The Colin Archer boat \"Voyager\", named after the space probe that's travelling out of our solar system, sails along Sognefjorden, from deep in Luster to the sea at its mouth. Aboard is a group of young people engaged on a big project: to map the fjord, its communities, its natural history, its people and their culture and history. One member of the group is twenty-year-old Kristin, daughter of the television celebrity Jonas Wergeland, who is also on board, recently released after serving several years imprisonment for the murder of his wife Margrete. Half way along, various characters crop up: his sister and one of his brothers, as well as Kamala Varma, the Indian author of the first book about Jonas.",
      "This is merely the frame story. The history of Jonas' life is followed up in many ways, focussing on other periods of his upbringing, and here, too, a number of erotically charged situations with female figures emerge which, in an almost unseen way, link up with the television programmes we have heard about in the first two books. We also discover the truth about the events surrounding Margrete's death and eventually meet Jonas the writer and co-author – the latter as an element in the narrative, which is written by his daughter.",
      "On a higher plane, the novel draws links between natural growth, the landscape, the human mind and love itself, taking its perspective all the way into near space, where the outer planets and their moons affirm that everything is interrelated, if somewhat mysteriously. The three novels The Seducer, The Conqueror and The Discoverer are also connected in as much that many scraps of evidence in this year's book relate to its forerunners. But here there are also openings for a life for Jonas – and for us – beyond the limitations we thought we were bound by.",
      "The Discoverer concludes the trilogy about Jonas Wergeland.",
    ],
  },
}

export default function Oppdageren() {
  const { lang } = useLanguage()

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

      <BookPageBody content={oppdagerenContent} />

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
          {lang === "no" ? "Jan Kjærstad fikk i 2001 Nordisk Råds Litteraturpris for " : "In 2001, Jan Kjærstad received the Nordic Council Literature Prize for "}
          <span className="italic">Oppdageren</span>.
        </p>
      </div>

      {/* Anmeldelse / Review */}
      <h3 className="
        uppercase
        text-xl
        tracking-[0.12em]
        font-['Playfair_Display_SC',serif]
        mt-14
        md:mt-8
        mb-6
      ">
      {lang === "no" ? "Anmeldelse" : "Review"}
      </h3>

      <div className="border-l-2 border-black/10 pl-5">
        <p className="
          font-['Lora',serif]
          text-base
          leading-7
          tracking-[0.04em]
          text-black
          italic
        ">
          
          <a  href="https://www.dagbladet.no/kultur/forlagskjendis-med-sprekk-i-skallen/63584715"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
          >
            «Storslagen trilogi»
          </a>
        </p>
        <p className="
          text-sm
          tracking-[0.08em]
          font-['Lora',serif]
          text-neutral-500
          mt-2
        ">
          Øystein Rottem, Dagbladet
        </p>
      </div>

      <BookPageQuotes content={oppdagerenContent} />

      </div>
    </section>
  )
}