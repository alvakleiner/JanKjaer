import BookPage from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"

const mennesketsFeltContent: BookPageContent = {
  title: { no: "Menneskets felt", en: "The Human Sphere" },
  meta: { no: "Essays (1997)", en: "Essays (1997)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/menneskets-felt" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/menneskets-felt" },
  },
  coverImage: {
    src: "/images/menneskets-felt-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Quotes" },
  quotes: [
    {
      text: {
        no: "«Som essaysamling av en skjønnlitterær forfatter vitner den om et kunnskapsnivå, en belesthet og intellektuell horisont som sannsynligvis savner sidestykke i norsk litteratur …»",
        en: "'As a collection of essays from a literary writer, this bears witness to a breadth of knowledge, a width of reading and an intellectual horizon that's probably unparalleled in Norwegian literature …'",
      },
      source: "Terje Holtet Larsen, Dagbladet",
    },
    {
      text: {
        no: "«Det er ikke annet å gjøre enn å anbefale leserne å fordype seg i Jan Kjærstad selv. Det er bryet verdt!»",
        en: "'One can only recommend that readers immerse themselves in Jan Kjærstad himself. It's well worth it!'",
      },
      source: "Kjell Olaf Jensen, Dagsavisen",
    },
  ],
  paragraphs: {
    no: [
      "I sin andre essaysamling har Jan Kjærstad samlet essays og artikler skrevet i tiden 1990–97, pluss nyskrevne essays. Flere av disse tekstene er en form for svar på den kritikk Kjærstads bøker har blitt utsatt for. I Menneskets felt leverer forfatteren motargumenter og viser at det finnes motforestillinger til rådende litterære oppfatninger. Derfor er det særlig fire motiver som går igjen i samlingens skriftstykker:",
      "1. Personene. Mange av tekstene inneholder tanker om en alternativ måte å skildre mennesket på. F.eks. i tittelessayet Menneskets felt diskuteres muligheten for å kunne skrive frem mennesket som et felt av fortellinger.",
      "2. Rammen. Flere av essayene tar opp synspunkter på rammens funksjon. Kjærstad mener at ramme-grepet dreier seg om å etablere mot-historier, noe som gir en ekstra dimensjon til selve hovedfortellingen.",
      "3. Konstruksjonen. De fleste essayene i boken søker på forskjellige måter å vise hvordan alle romaner er konstruerte, hvordan alle forfattere bruker en eller annen form for «system», bevisst eller ubevisst. Dette «systemet» (hvor også rammen inngår) gir romanen hva vi kaller form, og formen er det viktigste i en roman ettersom forfatteren legger sin verdensforståelse inn i formen heller enn inn i innholdet.",
      "4. Teksturen. Kjærstad svarer i et par av essayene på en gjentatt beskyldning om å være for «flink». Kjærstad skriver at han knytter til en internasjonal tradisjon hvor bruken av detaljer, lister, oppramsinger, ikke har noe med det leksikalske å gjøre, men med å skrive frem en ny tekstur, en tekstvev som speiler det samfunnet vi lever i. Det er simpelthen en mimesis av verdens stemme eller form. For øvrig kan nøye utvalgte detaljer betraktes som en mikrohistorie, elementer som kan skape skjulte forbindelser og spennende tråder i helheten.",
      "Boken fordeler essayene på fem deler: Det skapende, Fortellingen, Stedet, Vitenskapen og Metafysikken.",
      "På samme måte som Kjærstad kalte 80-tallet for «Åpenhetens tiår», foreslår han betegnelsen «Fortellingens tiår», eller bedre: «Den nye fortellingens tiår», på 90-tallet.",
    ],
    en: [
      "The Human Sphere is a collection of twenty-two essays of reflections, studies and arguments centred around spatial complexity. In these uncommonly rich texts, Kjærstad delves into the functions of lists and catalogues, the necessity of relating and listening to stories, the value of impurity, the importance of place. He sheds light on literature from different angles, vantages and points – such as film, quantum mechanics, the technological revolution, travel, history.",
      "This is an inspirational and thought-provoking collection from an author who clearly demonstrates his love of words, of literature, and of knowledge from many fields.",
    ],
  },
}

export default function mennesketsFelt() {
  return <BookPage content={mennesketsFeltContent} />
}

