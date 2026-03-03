import BookPage from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"

const mennesketsBolgerContent: BookPageContent = {
  title: { no: "Menneskets bølger", en: "The Human Waves" },
  meta: { no: "Essays (2022)", en: "Essays (2022)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/menneskets-bolger-essays-artikler-tekster" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/menneskets-bolger-essays-artikler-tekster" },
  },
  coverImage: {
    src: "/images/menneskets-bolger-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Quotes" },
  quotes: [
    {
      text: "«… et nydelig og klokt essay om å lese. Og om det merkelige kjærlighetsforholdet man kan utvikle til ei enkelt bok.»",
      source: "Marius Wulfsberg, Dagbladet",
      diceImg: "/images/terningkast5.png",
    },
    {
      text: "«Jan Kjærstad kaster et interessant lys på dagens tidsånd. I sin nye essaysamling Menneskets bølger skriver Jan Kjærstad om litterære forbilder, skjulte perler, norsk kulturpolitikk, egen skriveprosess og mye annet. Men uansett hvilket tema han belyser, så kommer hans kjærlighet til det skrevne ord klart fram.»",
      source: "Leif Gjerstad, Bok365",
      diceImg: "/images/terningkast5.png",
    },
    {
      text: "«Lærd, reflektert, raus dikter skaper leselyst og litterær innsikt.»",
      source: "Steinar Sivertsen, Stavanger Aftenblad",
      diceImg: "/images/terningkast5.png",
    },
  ],
paragraphs: {
  no: [
    "«Gi meg en god blyant og jeg skal rokke verden», skriver Jan Kjærstad i denne essaysamlingen. Han røper særtrekk ved sin arbeidsmetode og følger romanprosessen fra idé til ferdig bok.",
    "I det lange tittelessayet, som også er en kjærlighetserklæring til Virginia Woolf, forteller Kjærstad om hvordan det å lese The Waves fem ganger i løpet av førti år har satt tydelige spor i nær sagt alle hans romaner. Også stedene hvor han har lest The Waves er viktige: Han har lest boken i en høyblokk på Ammerud, på fjellet i Hemsedal, under et jacarandatre i Harare, Zimbabwe, i havgapet på Hvaler, i parker og på kafeer i London.",
    "Flere av tekstene i samlingen er av den mer polemiske sorten og tar opp forhold både i litteraturbransjen og i politikken – hva gjelder det siste, kommer Kjærstad blant annet med et bud på den nye fortellingen om Norge. Vi finner også et essay om hva som skjedde med forfatteren under pandemien. Kjærstad – av natur en munk, ifølge ham selv – ble så panisk sosial at han åpnet en Facebook-konto, hvilket ble opptakten til en av de merkeligste erfaringene i hans liv.",
    "Men de fleste tekstene handler om skjønnlitteratur. Her kan man lese om skjulte perler i norsk prosa, og om forfattere som tør å bryte forventningene, om hvor sørgelig raskt en dikter blir glemt, og om kvalitetskriterier som ikke brukes av kritikerne. Kjærstad foreslår for eksempel et kriterium han kaller «etterglød». Av og til liker vi ikke en bok vi har lest, men etter to måneder viser det seg at vi liker den allikevel.",
    "I tillegg skriver forfatteren om to litterære fenomener som har påvirket hans generasjon mer enn mange aner: Det ene er Donald Duck & Co, og i særdeleshet Carl Barks. Det andre er Hvem Hva Hvor.",
    "Det siste essayet handler om alle Kjærstads skriveredskaper fra 1. klasse på barneskolen til i dag. Et kapittel er viet fyllepenner og deres iboende magi. For det vet jo alle: en gullsplitt og blått blekk kan redde en forfatter i nød.",
    "Dette er Jan Kjærstads femte essaysamling, med en tittel som antyder både en poetikk og et menneskesyn. Samtidig er disse essayene en søken etter ideer som kan fornye dagens roman.",
  ],
  en: [
    "Content in English missing. Please refer to the Norwegian version.",
  ],
},
}

export default function MennesketsBolger() {
  return <BookPage content={mennesketsBolgerContent} />
}