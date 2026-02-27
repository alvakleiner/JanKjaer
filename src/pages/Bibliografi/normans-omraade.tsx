import { BookPageBody, BookPageQuotes } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"
import { useLanguage } from "../../context/LanguageContext"


const normansOmraadeContent: BookPageContent = {
  title: { no: "Normans område", en: "Norman's Area" },
  meta: { no: "Roman (2011)", en: "Novel (2011)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/normans-omrade" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/normans-omrade" },
  },
  coverImage: {
    src: "/images/normans-omrade-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Reviews" },
  quotes: [
    {
      text: "«Suveren forteller! Det er fortellerdyktigheten og innsikten Kjærstad formidler, særlig om lesning og litteratur, som gjør boka til et godt sted å være.»",
      source: "Maya Troberg Djuve, Dagbladet",
    },
    {
      text: "«Det glitrer av Jan Kjærstads skrivekunst også i Normans område. … Normans område var ventet å bli en av høstens store, og kommer også til å bli det.»",
      source: "Geir Vestad, Hamar Arbeiderblad",
    },
    {
      text: "«… en skarp, fornøyelig skildring av den litterære norske offentlighet, sett fra innsiden. For de som kjenner miljøet er det fristende å lese den som en leken nøkkelroman med satirisk blikk på forfattere, journalister og forlagsfolk … Kjærstads mest interessante på mange år.»",
      source: "Terje Eidsvåg, Adresseavisen",
    },
    {
      text: "«Visst har Kjærstad vind i seilene i denne romanen som bæres av storartede ideer.»",
      source: "Anne Schäffer, Bergens Tidende",
    },
    {
      text: "«Igjen slår fantasien på ekte kjærstadsk vis gnister mot et rikt arsenal av leksikalsk kunnskap knyttet til geografi, religion og historie, musikk og film, malere, skulptører og fotografer, billedvev, arkitektur og nevrologi. Men størst av alt er selvsagt litteraturen.»",
      source: "Steinar Sivertsen, Stavanger Aftenblad",
    },
    {
      text: "«Jan Kjærstad vil blåse bort det tette skydekket som henger over den norske litteraturens forestillingsverden … den er et intenst uttrykk for forfatterens håpefulle poetikk. Den norske romanen kan lykkeligvis ha lunger og gjeller på samme tid.»",
      source: "Bernhard Ellefsen, Morgenbladet",
    },
    {
      text: "«Kjærstad har et poetisk språk og nydelig setningsoppbygging. Han er en mester i å antyde og fører oss fram og tilbake i tid. … Hvis du er Kjærstad-fan fra før av er Normans område en vinner. Hvis du ikke kjenner forfatteren, er dette en fin anledning til å begynne.»",
      source: "Elise Weseth, Oppland Arbeiderblad",
    },
    {
      text: "«Boka er ei gedigen kjærleikserklæring til den store litteraturen og eit heilhjarta forsvar for litteratur og kunst i danningsspørsmålet. Og ei viktig bok i rett tid for dei som meiner at no må litteraturen på nytt få plass, tid og rom i det som før vart kalla danningsfag i skoleverket. I norskfaget, til dømes.»",
      source: "Ole Karlsen, Dag og Tid",
    },
    {
      text: "«Få, om noen norsk forfatter, skriver bedre om kunstopplevelse enn han. … I strømmen av lettbeinte underholdningsromaner blir denne romanen … litterære lyspunkter i høstsesongens boktilbud.»",
      source: "Finn Stenstad, Tønsbergs Blad",
    },
    {
      text: "«Dramaturgien fungerer og boken er interessant på mange plan.»",
      source: "Nina Kjeøy, Trønder-Avisa",
    },
    {
      text: "«Normans område løftar opp spørsmål som burde interessere ein kvar lesande nordmann.»",
      source: "Marta Norheim, NRK",
    },
    {
      text: "«Kjærstad viser nok en gang sine spesielle forteller- og dikterevner og sine store språklige ferdigheter. Her inntar vi varer fra øverste hylle.»",
      source: "Audun Mosevoll, Dagen",
    },
  ],
  paragraphs: {
    no: [
      "Sett med hovedpersonens øyne handler Normans område om de to viktigste tingene i livet: kjærlighet og bøker. Og for å begynne med det siste: John Richard Normans livsberetning er et oppgjør med et aspekt som skimtes i romaner av typen Madame Bovary og Don Quijote: en forestilling om at det å lese romaner er å flykte inn i noe livsfjernt og kritikkverdig, noe som kan få en til å begå selvmord eller slåss med vindmøller.",
      "I Normans område forfektes et annet syn, nemlig at det å lese og det å leve er det samme. Bøker er ikke en annen verden, de er en del av verden. Bøker er mer verden. Å lese er å gjøre virkeligheten større.",
      "Ordet «område» i tittelen er mangetydig. Det kan spille på at man skal finne sitt spesialområde i livet, dette som ofte blir ens yrke. John Richard Norman vokser opp i Oslos fineste gate, Seilduksgata på Grünerløkka, med Freia Sjokoladefabrikk i den ene enden og Christiania Seildugsfabrik i den andre, fabrikken som i sin tid leverte seilene til polarskuta Fram. I dette spennet, mellom søtsaker og oppdagelsesferder, dannes John Richard Norman. At han til slutt blir en fremragende forlagsredaktør, skyldes en gave: Han vet alltid når en bok er seil og når den er sjokolade.",
      "John Richard Norman har ikke bare et sterkt forhold til bøker, han har et ekstraordinært forhold til bøker. (Det er heller ikke tilfeldig at Normans område er «tilegnet alle lesere»; banalt sagt er romanen en kjærlighetserklæring til litteraturen.) John Richard har gjennom hele sitt lesende liv ført en leselogg. Han kaller den Livserindringer. I hans øyne er disse opptegnelsene jevngode med en biografi. Når han kikker i den, ser titler som f.eks. Liker De Brahms? av Françoise Sagan og Lady Oracle av Margaret Atwood, åpner det seg tredimensjonale rom i ham. Det er ikke bare boktitler, det er lukt, smak, berøring, det er mennesker han har møtt, det er landskap han har oppholdt seg i.",
      "På sine eldre dager skaper John Richard Norman et sted på nettet for alle nysgjerrige lesere. Han gir det et navn som om det skulle være en redningsskøyte: R/S Plus Terrae. Mer jord.",
      "Normans område byr for øvrig på sju fantasieggende romanreferater. De er flettet inn i fortellingen og synes først å kunne å belyse hendelser i hovedpersonens liv. Etter hvert får leseren imidlertid en annen forklaring på hvorfor disse synopsisene er tatt med i fremstillingen.",
      "Tittelens «område» kan selvfølgelig også være et sted. I denne romanen er det et skjærgårdslandskap, nærmere bestemt en av de ytterste øyene på Hvaler. Etter at han blir uforklarlig kvalm av å lese manus, ja, til og med kaste opp, tar John Richard Norman tilflukt i et hus på en odde i havgapet for å finne ut av hva som har skjedd med ham. Særlig i begynnelsen opplever han en lindring ved å oppholde seg ved havet, ikke minst ved å spasere på stien som fører gjennom høye duftende einerkratt og små forvridde furuer før alt åpner seg og blir lyngheier og bølgende steinformasjoner. Det er som om disse myke buktningene av bart fjell stimulerer tankene hans på en uvant måte.",
      "Ordet område kan videre sikte til noen kvadratcentimeter hud, på ryggtavlen til den man elsker. I skjærgården treffer John Richard Norman en kvinne, med mange ukjente sider, og opplever at kjærlighet kan være fullstendig omkalfatrende.",
      "Sterkt forenklet kunne man si at Normans område er en roman om fiksjonens kraft. Og målt mot, eller parallellisert med, den kraft mange regner som den største: Kjærligheten.",
      "Til slutt kan «område» stå for et areal i hjernen, et til nå ikke kartlagt felt i pannelappene, et potensial vi ikke bruker. Denne muligheten blir i romanen lagt frem av Dr. Lumholtz, som tar hånd om John Richard Norman etter en alvorlig ulykke og siden skriver en oppsiktsvekkende artikkel om tilfellet Norman i det velrenommerte vitenskapelige tidsskriftet Humanity & Science. Enkelte hevder at Dr. Lumholtz står i samme tradisjon som sine landsmenn Fridtjof Nansen og Roald Amundsen, det vil si, han utvider vår viten om ukjente territorier. Denne gangen gjelder det ikke Nordpolen og Sørpolen, men et uutforsket areal som ligger i mennesket selv: Normans område.",
      "Darwinismen, som mener at tilværelsen dreier seg om ressurser og status, og om å skaffe seg avkom, har problemer med å forklare særlig to ting: romantisk kjærlighet og hvorfor vi skaper kunst / litteratur. Dette er hva Normans område handler om. Det dreier seg om kjærlighetens revolusjonerende kraft, og om litteraturens revolusjonerende kraft. De kan begge gi mennesket, også som art, et fortrinn, en særskilt livskapasitet. Det å elske og det å lese får verden til å utvide seg. Og når verden utvider seg, utvider også mennesket seg.",
      "Denne tanken signaliserer samtidig historiens underliggende konflikt: For når kjærligheten blir en klisjé eller romaner blir klisjeer, gjentakelser av oppbrukte historier, får vi problemer. Som også John Richard Norman får det.",
    ],
    en: [
      "Seen through the eyes of the protagonist, Norman's Area deals with the two most important things in life: love and books. To start with the latter, the story of John Richard Norman's life confronts an aspect seen in novels such as Madame Bovary and Don Quijote; a notion that reading novels is an escape into something detached from reality and deserving of criticism, something that can drive one to commit suicide or tilt at windmills.",
      "In Norman's Area, another view is advocated, namely that to read and to live are the same thing. Books are not a separate world, they are a part of the world. Books are more world; to read is to augment reality.",
      "The word \"area\" in the title is ambiguous. It may play on finding one's specialisation in life, that which often becomes one's profession. John Richard Norman grows up on Oslo's nicest street, Seilduksgata in Grünerløkka, with the Freia chocolate factory at one end and the Christiania Seildug factory at the other, a factory which once had supplied the sails for the polar vessel Fram. On this stretch, between sweets and exploration, John Richard Norman is created. His becoming a distinguished publishing editor is due to a gift: he always knows when a book is a sail and when it is chocolate.",
      "John Richard Norman has not only a strong relationship with books, he has an extraordinary relationship with them. (It is neither a coincidence that Norman's Area is \"dedicated to all readers\"; simply put, the novel is a proclamation of love to literature.) Throughout all his reading days, John Richard has kept a reading log. He calls it A Memento of Life. In his eyes, these records are the equivalent to a biography. When he browses the content, and sees titles such as Aimez-vous Brahms? by Françoise Sagan and Lady Oracle by Margaret Atwood, it opens up in him a three-dimensional space. It is not just the book titles: it is the smell, taste, touch; it is the people he has met; it is the landscape in which he has lived.",
      "In his later days, John Richard Norman creates a website for curious readers. He names it as if it were a rescue boat: RS Plus Terrae. More of the earth.",
      "Norman's Area offers, in addition, seven novel references to incite the imagination. They are woven into the story and seem, at first, to be able to shed light on the events in the protagonist's life. Gradually, however, the reader is given another explanation as to why these synopses are part of the representation.",
      "The title's \"area\" may also, of course, allude to a place. In this novel, that would be an archipelago, specifically one of the outermost islands in Hvaler municipality. After an inexplicable bout of nausea from reading manuscripts – indeed, even throwing up – John Richard Norman retreats to a house on a finger of land by the sea to try to understand what has happened to him. Particularly at first, he experiences a relief from being close to the sea, not least by strolling along paths which lead through tall, fragrant juniper thickets and small, buckled pines before opening out into moorlands and rolling rock formations. It is as if the soft bends of bare rock stimulate his thoughts in an unusual way.",
      "The word \"area\" can further refer to the few square inches of skin found on the back of one's lover. On the archipelago, John Richard Norman meets a woman – one with many unknown sides to her – and discovers that love can completely turn things upside down.",
      "In simplified terms, one could claim that Norman's Area is a novel about the power of fiction. And measured against or paralleled to this, the one power many rank as the strongest is Love.",
      "Finally \"area\" can pertain to a section of the brain, a region of the frontal lobe yet to be mapped, a potential we do not use. In the novel, this possibility is proposed by Dr Lumholtz, who takes care of John Richard Norman following a serious accident and later writes a sensationalist article about Norman's case in the prestigious scientific journal Humanity & Science. Some claim that Dr Lumholtz fills the same role as his fellow countrymen Fridtjof Nansen and Roald Amundsen – in other words, he broadens our knowledge of unknown territories. In this instance, it is not about the North Pole or the South Pole, but rather about an unexplored region found in the human itself: Norman's area.",
      "Darwinism, which states that existence involves resources and status, and the ability to procreate, encounters a problem in explaining two things in particular: romantic love and why we create art/literature. This is what Norman's area boils down to. It deals with the revolutionary power of love and the revolutionary power of literature. Both can give people (also as a species) an advantage, a distinct capacity for life. To love and to read opens up the world. And when the world opens up, so do humans.",
      "At the same time, this idea points to the story's underlying conflict: when love becomes a cliché, or novels become clichés – repetitions of exhausted stories – then we have a problem. Just as John Richard Norman experiences.",
    ],
  },
}

export default function NormansOmraade() {
  const { lang } = useLanguage()

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

      <BookPageBody content={normansOmraadeContent} />

      {/* Introduksjonsvideo / Introduction video */}
      <h3 className="
        uppercase
        text-xl
        tracking-[0.12em]
        font-['Playfair_Display_SC',serif]
        mt-14
        md:mt-8
        mb-6
      ">
      {lang === "no" ? "Introduksjonsvideo" : "Introduction video"}
      </h3>

      <div className="border-l-2 border-black/10 pl-5">
        <p className="
          font-['Lora',serif]
          text-base
          leading-7
          tracking-[0.04em]
          text-black
        ">
          
          <a  href="https://www.youtube.com/watch?v=yevrFgIkt6g"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
          >
            Jan Kjærstad - Normans område
          </a>
        </p>
        <p className="
          text-sm
          tracking-[0.08em]
          font-['Lora',serif]
          text-neutral-500
          mt-2
        ">
          (YouTube)
        </p>
      </div>

      {/* Anmeldelse / Article */}
      <h3 className="
        uppercase
        text-xl
        tracking-[0.12em]
        font-['Playfair_Display_SC',serif]
        mt-14
        md:mt-8
        mb-6
      ">
      {lang === "no" ? "Anmeldelse" : "Article"}
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
            «Forlagskjendis med sprekk i skallen»
          </a>
        </p>
        <p className="
          text-sm
          tracking-[0.08em]
          font-['Lora',serif]
          text-neutral-500
          mt-2
        ">
          Dagbladet
        </p>
      </div>

      <BookPageQuotes content={normansOmraadeContent} />

      </div>
    </section>
  )
}