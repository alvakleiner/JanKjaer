import { useLanguage } from "../../context/LanguageContext"

const content = {
  title: { no: "Berge", en: "Berge" },
  meta: { no: "Roman (2017)", en: "Novel (2017)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/berge" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/berge" },
  },
  coverImage: {
    src: "/images/berge-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Reviews" },
  quotes: [
    {
      text: "«GLIMRENDE! … Jeg tar sats og utroper med dette Berge til en sikker vinner bokhøsten 2017!»",
      source: "Sindre Hovdenakk, VG",
      diceImg: "/images/terningkast6.png",
    },
    {
      text: "«Berge er både særdeles tankevekkende og en klassisk pageturner … Den som ikke blir grepet og rystet av denne beretningen, er enten fullstendig uinteressert i slik litteratur, eller på en eller annen måte emosjonelt avstumpet. Det er både ønskelig og fullt mulig at Kjærstad når sitt gamle tallrike publikum med denne utgivelsen.»",
      source: "Espen Grønlie, Dagbladet",
      diceImg: "/images/terningkast5.png",
    },
    {
      text: "«Åpner opp 22. juli i spenstig roman. … Kjærstad gjør sinnrike forskyvninger i sted og tid for å skaffe seg kunstnerisk frihet til å skrive satirisk, kritisk og underholdende om et ladet tema. … Ja, forfatterens beste kvaliteter kommer helt til sin rett i høstens utgivelse: Kjærstad har et viktig anliggende som han utmynter innenfor rammene av en utpreget litterær konstruksjon. … Språklig er Berge et smart flettverk av stemmer og stilarter.»",
      source: "Ingunn Økland, Aftenposten",
    },
    {
      text: "«Kjærstad på topp … Alt tyder på at Jan Kjærstad har skrevet årets vesentligste norske roman. Berge er også en av hans beste noensinne.»",
      source: "Geir Vestad, Hamar Arbeiderblad",
      diceImg: "/images/terningkast6.png",
    },
    {
      text: "«Presis samtidskritikk … forfattar Kjærstad løyser oppgåva på ein utmerka måte. … Berge er ein spennande og insisterande roman om tvil, håp og kjærleik under neokapitalismen. Eg er sanneleg ikkje sikker på kven som er størst av dei tre. Men eg er sikker på at Kjærstad har skrive ein av sine viktigaste romanar.»",
      source: "Marta Norheim, NRK P2",
    },
    {
      text: "«Spennende og tankevekkende, svært leseverdig roman om vårt lille land.»",
      source: "Gerd Elin Stava Sandve, Dagsavisen",
    },
    {
      text: "«Kjærstad befester med sin nye roman posisjonen som en av Nordens mest mangesidige, kreative og betydningsfulle forfattere.»",
      source: "Magnus Persson, Svenska Dagbladet",
    },
    {
      text: "«Jan Kjærstad er den postmoderne metalitteraturens krimkonge par exellence.»",
      source: "Sinziana Ravini, Aftonbladet",
    },
    {
      text: "«Det som gjør Berge til en så rik opplevelse, er den dype dramaturgiske bevisstheten hos en forfatter som kan bringer leseren akkurat dit han vil.»",
      source: "Kristina Lindquist, Dagens Nyheter",
    },
    {
      text: [],
      source: "Stavanger Aftenblad",
      diceImg: "/images/terningkast6.png",
    },
    {
      text: [],
      source: "Bok365",
      diceImg: "/images/terningkast6.png",
    },
    {
      text: [],
      source: "Adresseavisen",
      diceImg: "/images/terningkast5.png",
    },
    {
      text: [],
      source: "Fædrelandsvennen",
      diceImg: "/images/terningkast5.png",
    },
  ],
  paragraphs: {
    no: [
      "En augustdag i 2008 blir Ap-nestoren Arve Storefjeld og flere i familien hans funnet drept i hytta ved Blankvann i Nordmarka. Fem mennesker har fått strupen skåret over. Hele Norge stopper opp. Også verden ser hitover i tiden etterpå. Det ingen skulle tro kunne skje i idylliske Norge, har skjedd nettopp her.",
      "I Berge fortelles historien i tre deler, fra tre ulike synsvinkler:",
      "Journalist Ine Wang har lenge følt seg akterutseilt, men drapene på Storefjeld-familien endrer alt.",
      "Tingrettsdommer Peter Malm foretrekker en anonym tilværelse med spaserturer i byen og rolige stunder i baren på Grand Hotel. På grunn av ugjerningen i skogen blir han tvunget frem i det offentlige lyset.",
      "Nicolai Berge var kjæreste med Gry, datteren til Arve Storefjeld. Så gjorde hun det slutt. Nå er hun død, og journalist Ine Wang spør om Berge vil la seg intervjue om sitt forhold til Gry.",
      "En journalist, en dommer, en ekskjæreste – alle med sin historie.",
      "Berge er en roman som reiser flere spørsmål. Går det an å kartlegge – for ikke å snakke om forstå – et menneskes mange sider? Hvordan takler vi det meningsløse? Hva er ondskap? Er det mulig å bruke et ord som rettferdighet i dag – snakke om et rettferdig samfunn? En rettferdig dom?",
      "Et av menneskets fremste kjennetegn er evnen til å kunne forestille seg ting som ennå ikke finnes. Berge handler om imaginasjon, om viktigheten av å være forutseende – noe som også innbefatter at vi tar høyde for det usannsynlige. Allikevel: Når det usannsynlige skjer, er vi sjelden forberedt.",
    ],
    en: [
      "On a warm day in August 2008, Labor Party minister Arve Storefjeld and several members of his family, are found murdered in their family cabin at Blankwater, in the Nordmarka forest. Five people with their throats slit. Everyone thinks terrorists are behind the atrocity.",
      "Journalist Ine Wang has felt out of touch lately. But the Storefjeld murders changes everything.",
      "Judge Peter Malm lives a withdrawn life and attends his hobbies in happy solitude. The last thing he wants is attention drawn to himself because of a case.",
      "Nicolai Berge was head over heels in love with Gry, Arve Storefjeld's daughter, for years. Then she broke up with him. Now she is dead.",
      "The most unlikely things happen in this world, again and again. Yet, we are never prepared for them. Berge is a story of horrible events, told from three different points of view. A journalist, a judge and an ex-boyfriend. Without touching upon the July 22nd attack in Norway, Berge is a novel that would not have been written without it.",
    ],
  },
}


export default function Berge() {
  const { lang } = useLanguage()

  const buy = content.buyLink[lang]

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

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

        {/* Cover image */}
        <div className="flex flex-col items-center md:float-right md:ml-10 md:mb-4 mb-8">
          <img
            src={content.coverImage.src}
            alt={content.title[lang]}
            className="w-44 md:w-48 md:mt-4 h-auto object-contain"
          />

          <a
            href={buy.href}
            target="_blank"
            rel="noreferrer"
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
            {buy.label}
          </a>
        </div>

        {/* Body text */}
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

        {/* Quotes / Reviews */}
        <h3
          className="
            uppercase
            text-xl
            tracking-[0.12em]
            font-['Playfair_Display_SC',serif]
            mt-14
            md:mt-10
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

        {/* Cover art credit */}
        <div className="flex flex-col items-center mt-14">
          <img
            src="/images/omslag-berge.jpg"
            alt="Bokomslag Berge"
            className="w-full h-auto object-contain"
          />
          <p className="
            self-start
            text-sm
            tracking-[0.08em]
            font-['Lora',serif]
            text-neutral-500
            mt-4
          ">
            Omslag: Terese Moe Leiner
          </p>
        </div>

      </div>
    </section>
  )
}
