import { useLanguage } from "../../context/LanguageContext"

type Quote = {
  text: string
  source: string
  diceImg?: string
}

const content = {
  title: { no: "Valgdager", en: "Election Days" },
  meta: { no: "Roman (2024)", en: "Novel (2024)" },
  buyLink: { no: "Kjøp boken her", en: "Buy the book here" },
  quotesTitle: { no: "Sitater", en: "Reviews" },
  quotes: [
    {
      text: "«Jan Kjærstad hører hjemme i det ypperste favorittsjiktet mitt når det gjelder nåtidige forfatterstemmer. Valgdager bekrefter den posisjonen. … Det er egentlig fire helt forskjellige historier som Kjærstad med sitt språklige og fortellermessige mesterskap knytter sammen på et helhetlig, troverdig og elegant vis. … Her er det et persongalleri så mangefasettert, rikt og troverdig som vel mulig og Kjærstad har et driv og naturlig eleganse i språket sitt som alle forfattere og andre som befatter seg med språk gjerne kan misunne han. Jan Kjærstad har nemlig skrevet et mesterstykke av en oppvekst- og samtidsroman (er det noe som heter det? Nå er det i alle fall det!) som mange vil både kjenne seg igjen i, lære av og hygge seg med. Ikke reint lite det, vil jeg mene.»",
      source: "Tor Hammerø, Nettavisen",
      diceImg: "/images/terningkast6.png",
    },
    {
      text: "«Valgdager spinn seg inn i nokre av dei mest ikoniske augneblinkane i norsk historie, akkurat slik Kjærstad har gjort fleire gonger før. Her kan årets roman frå Kjærstad minne ein del om storverket hans frå 2015, Slekters gang, sjølv om dei to bøkene tar for seg historiefortellinga på så ulikt vis at det bør vere god plass til begge i bokhylla. Det er fordi Jan Kjærstad har skrive haustens beste bok om Arbeidarpartiet og vår tid.»",
      source: "Emil André Erstad, Vårt Land",
    },
    {
      text: "«Valgdager er Jan Kjærstad på sitt mest kjærstadske. Fortellinger om kjendiser og luksus, om begjær og talismaner, veves sammen med trangen til å skape noe stort med tankens kraft. Det er ambisiøst, og det virker.»",
      source: "Anne Cathrine Straume, NRK",
    },
    {
      text: "«Norge regnes som et av verdens lykkeligste land. Kanskje har denne nasjonen av sosialdemokrater likevel mistet ett eller annet på veien fra Gerhardsens fellesskap til vår stappmette, nyrike individualisme. Vi har den fattige verdens blod på våre oljede hender. Hva gjør vi med det, nå og framover? Kjærstad har ingen fasit. Men han stiller spennende spørsmål, i en roman som på sitt beste er både rørende og klok.»",
      source: "Gerd Elin Stava Sandve, Dagsavisen",
    },
    {
      text: "«Flere av de nostalgiske skildringene av Einars barne- og ungdomsår er nydelige, og fortellingen om fire venner som følger hverandre livet gjennom, er både morsom, sår og vakker.»",
      source: "Eilif Guldvog Hartvedt, Aftenposten",
    },
    {
      text: "«Kjærstads vilje og evne til å framstille verda vi kjenner som framand og rik, er beundringsverdig …»",
      source: "Eivind Myklebust, Klassekampen",
    },
  ] as Quote[],
  paragraphs: {
    no: [
      "En sommerdag på Youngstorget, 1959. En liten gutt får en plomme og en femøring av statsminister Einar Gerhardsen. Mynten kjennes så behagelig i hånden, munnen renner nesten over av plommesaft. Gutten får en åpenbaring: én dag skal han bli en rik mann.",
      "Femøringen er fra den flunkende nye myntserien til kong Olav, antakelig verdens vakreste, med dyremotiver på den ene siden. Må du ikke da få en kjærlighet til penger? Og må ikke denne mynten gjøre deg uovervinnelig når du kaster på stikka?",
      "Hvordan kan man nå høyt opp og langt fram når man egentlig er utrygg og vil holde seg skjult for verden? Kan man grunnlegge sin rikdom på en femøring man har fått av Landsfaderen?",
      "Valgdager beretter livshistorien til en privatinvestor fra Grorud og lar leseren følge fire venner når de samles til seks stortingsvalg gjennom seks tiår. I hver av romanens seks deler står en leilighet, et hus eller en hytte sentralt. Og en kvinne. Vi får bli med på lange reiser til Zaïre og Singapore, og på kortere reiser til Alta og Åna Sira. Vi får høre om flyvende Cadillacer, om Soria Moria, om Procol Harum og et Steinway konsertflygel – en svart boks som rommer verdens gåte – og selvfølgelig møter vi Gro Harlem Brundtland på ski ved Mylla og blir med til OL på Lillehammer. Og hva er mer naturlig enn at hovedpersonen blir invitert til åpningen av den nye Operaen i 2008? Men hvorfor er kvinnen ved hans side fra et eskortebyrå?",
      "Kjærligheten – størst av alt og vanskeligst av alt.",
      "Valgdager er en utviklingshistorie, en roman om penger, politikk og livsvalg. Om et land som har gjennomgått en formidabel utvikling, men som på toppen av pyramiden synes å famle, ikke lenger å vite hva det skal sikte mot.",
      "Hovedpersonen tar stadig i bruk sin sjette sans. Men i barndommen lærer faren ham at vi også har en sjuende sans, og at denne sansen er den viktigste: hukommelsen.",
      "Hva koster kjærligheten? Hva koster en bror? Hva koster lykke?",
      "Akkurat dette siste får leseren svaret på: 1 krone og 93 øre.",
    ],
    en: [
      "A summer day at Oslo's main square, 1959. A little boy receives a plum and a small coin from the Prime Minister, Einar Gerhardsen. The coin feels so pleasant in his hand, his mouth almost overflows with plum juice. The boy has a revelation: one day he will become a rich man.",
      "Election Days follows the life story of a private investor from the suburbia Groruddalen. The novel is built around six parliamentary elections, and in each part, an apartment, a house, or a cabin plays a central role. And a woman. How can you reach great heights and go far when you are essentially insecure and want to stay hidden from the world? Can one build wealth on a coin given by the Father of the Nation?",
      "Election Days is a coming-of-age story, a novel about money, politics, and life choices. It's about a country that has undergone tremendous development but now, at the top of the pyramid, seems to be fumbling, no longer knowing what to aim for.",
    ],
  },
} as const

export default function Valgdager() {
  const { lang } = useLanguage()

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

        <h2
          className="
            text-center
            text-2xl
            font-medium
            tracking-widest
            font-['Playfair_Display',serif]
            mb-2
          "
        >
          {content.title[lang]}
        </h2>

        <p className="text-center text-sm tracking-[0.08em] text-neutral-500 font-['Lora',serif] mb-10">
          {content.meta[lang]}
        </p>

        {/* Bilde */}
        <div className="flex flex-col items-center md:float-right md:ml-10 md:mb-4 mb-8">
          <img
            src="/images/valgdager-3d.png"
            alt={content.title[lang]}
            className="w-44 md:w-48 md:mt-4 h-auto object-contain"
          />
          
          <a  href="https://aschehoug.no/valgdager-1" target="_blank"
            className="
              mt-3
              mb-2
              md:mb-0
              text-sm
              tracking-[0.06em]
              font-['Lora',serif]
              text-neutral-600
              underline
              underline-offset-4
              decoration-neutral-400
              hover:text-black
              hover:decoration-neutral-800
              transition
            "
          >
            {content.buyLink[lang]}
          </a>
        </div>

        {/* Brødtekst */}
        <div className="
          text-base
          leading-7
          tracking-[0.04em]
          font-['Lora',serif]
          text-black
          space-y-6
        ">
          {content.paragraphs[lang].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="clear-both" />
        </div>

        {/* Sitater */}
        <h3
          className="
            uppercase
            text-xl
            tracking-[0.12em]
            font-['Playfair_Display_SC',serif]
            mt-14
            mb-6
          "
        >
          {content.quotesTitle[lang]}
        </h3>

        <div className="space-y-8">
          {content.quotes.map((q, i) => (
            <div key={i} className="border-l-2 border-black/10 pl-5">
              <p className="
                font-['Lora',serif]
                text-base
                leading-7
                tracking-[0.04em]
                text-black
                italic
              ">
                {q.text}
              </p>
              <div className="flex items-center gap-3 mt-2">
                {q.diceImg && (
                  <img
                    src={q.diceImg}
                    alt="Terningkast"
                    className="h-7 w-auto shrink-0"
                  />
                )}
                <p className="
                  text-sm
                  tracking-[0.08em]
                  font-['Lora',serif]
                  text-neutral-500
                ">
                  {q.source}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}