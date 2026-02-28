import { BookPageBody, BookPageQuotes } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"
import { useLanguage } from "../../context/LanguageContext"
import TrilogyBooks from "../../components/TrilogyBooks"
import { transformatorNo, transformatorEn } from "../../content/bibliografi/erobreren/excerpts"
import Drawer, { renderArticle } from "../../components/Drawer"
import { useState } from "react"
import perBuvikReview from "../../content/bibliografi/erobreren/perBuvikReview"


const erobrerenContent: BookPageContent = {
  title: { no: "Eroberen", en: "The Conqueror" },
  meta: { no: "Roman (1996)", en: "Novel (1996)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/erobreren" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/erobreren" },
  },
  coverImage: {
    src: "/images/erobreren-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Quotes" },
  quotes: [
    {
      text: {
        no: "«… maken til tekst er det ikke ofte jeg har fått til anmeldelse. Erobreren er etter mitt syn enda bedre enn Forføreren.»",
        en: "(In norwegian) '… maken til tekst er det ikke ofte jeg har fått til anmeldelse. Erobreren er etter mitt syn enda bedre enn Forføreren.'",
      },
      source: "Per Buvik, Bergens Tidende",
    },
    {
      text: {
        no: "«Med Erobreren erobrer Jan Kjærstad suverent en plass blant Europas betydeligste yngre romanforfattere akkurat nå … mesterskribent i full utfoldelse.»",
        en: "'With The Conqueror Jan Kjærstad has brilliantly taken his place amongst Europe's most outstanding younger novelists of the moment … a master in full flower.'",
      },
      source: "Niels Frid-Nielsen, Aktuelt",
    },
    {
      text: {
        no: "«Kjærstad trekker sin helt gjennom sølet for å skape en perle. Forrykende fortelling og filosofisk ro. Fem Yin/Yang-tegn til Kjærstad.»",
        en: "'Kjærstad drags his hero through the dirt to create a pearl. Scintillating story and philosophical equanimity. Five Yin/Yang stars to Kjærstad.'",
      },
      source: "Susanne Bjertrup, Politiken",
    },
    {
      text: {
        no: "«Romanene er mesterstykker … Det er mulig at jeg forandrer mening, men nå, etter bare én natt med denne tusensiders boken, kan jeg ikke tenke meg en eneste roman fra europeisk samtidslitteratur som jeg heller ville foretrekke enn disse to fra Jan Kjærstad.»",
        en: "'… It is possible that I'll change my mind, but now, after a single night with this thousand-pager, I can't think of a single novel from contemporary European literature I'd rather have than these two by Jan Kjærstad.'",
      },
      source: "Thomas Thura, Weekend-avisen",
    },
    {
      text: {
        no: "«Kjærstad's novels are redolent with the fantastic profusion of the stories they tell, of all that flows forth from them, presented in ever-new guises.»",
        en: "'Kjærstad's novels are redolent with the fantastic profusion of the stories they tell, of all that flows forth from them, presented in ever-new guises.'",
      },
      source: "Die Zeit, Hamburg",
    },
  ],
  paragraphs: {
    no: [
      "Erobreren er både en frittstående roman og en parallell-bok til Forføreren. Også Erobreren handler om den store fjernsynspersonligheten Jonas Wergeland. Man får høre nye historier fra Jonas' liv, og ettersom fortelleren nå er en annen, er det historier som til dels motsier de man får presentert i Forføreren. Om man ser Erobreren sammen med Forføreren vil leseren muligens kunne danne seg et stereoskopisk bilde av Jonas Wergelands liv.",
      "Fortelleren i Erobreren betoner sterkt den rekkefølgen historiene blir fortalt i, som om det skulle være en likhet mellom gener og fortellinger, eller som om forbindelsene mellom to historier er viktigere enn historiene i seg selv. Det er tydelig at DNA-molekylet utgjør en formmodell: Forføreren og Erobreren er kveilet i hverandre på samme måte som de to spiralene i DNA'ets dobbeltheliks. Om hjulet er det viktigste symbolet i Forføreren, er spiralen hovedmetafor i Erobreren.",
      "Ved å gi en helt annen – og like «sannsynlig» – versjon av Jonas Wergelands liv, driver Erobreren et spill med biografen, en av tidens mest populære sjangrer. I rammehistorien møter vi da også en professor som har fått i oppdrag å skrive «den definitive Wergeland-biografien». Men han har samlet så mye materiale at han står fast. Da dukker en ukjent hjelper opp, en kvinne som påstår hun har hele Jonas Wergelands historie i hodet. Hun tilbyr seg å fortelle alt hun vet, og mens hun forteller, sitter biografen og stenograferer. Dette er for øvrig en parallell til rammesituasjonen i det indiske eposet Mahabharata, der Vyasa dikterer mens Ganesha skriver.",
      "De historiene kvinnen forteller, er til dels av et litt mørkere slag enn historiene i Forføreren. Det gjennomgående spørsmålet er «Hvordan blir man en erobrer?», og det kan synes som om Erobreren er gjennomsyret av en Faust-tanke: For å bli en erobrer, har Jonas Wergeland inngått en pakt med djevelen. Det betyr at det må komme en dag da hans sjel vil bli innkrevd. Erobreren tar opp kreativitetens gåte og viser hvor kort avstanden kan være mellom et menneskes lyse og mørke sider.",
      "I noen viktige episoder fra barndommen spiller Jonas' bestevenn, Lille Ørn, en hovedrolle. I romanen følger vi ellers Jonas Wergeland på nye begivenhetsrike reiser i utlandet, på erotiske eventyr og i arbeidet med programmer til TV-serien «Å tenke stort». Et gjennomgående tema i Erobreren er muligheten for å kunne skape noe originalt ved å flette helt enkle ting sammen på en dristig måte. Dette lærer Jonas i barndommen, da han besøker Vikingskiphuset og oppdager et dragehode med et fint utskåret mønster.",
      "Sett fra én vinkel er Jonas Wergeland en kroppsliggjørelse av Norges etterkrigshistorie. Som en moderne Abraham er han er bærer av sin stammes historie. Derfor hører vi også om slike ting som Tandberg Radiofabrikk, fotturer på Finnmarksvidda og stresslesstolens avgjørende betydning for den norske mentaliteten.",
      "Sentralt i romanen står Jonas Wergelands stigende forståelse for viktigheten av software i et moderne samfunn. At Jonas Wergeland lager programmer, kan leses i to betydninger.",
      "Jonas Wergeland strever gjennom hele romanen med å strekke seg utover sin «alminnelighet»; han prøver å bli noe mer enn han kanskje er. I likhet med karbon, som i én form kan være grafitt og i en annen form kan være diamant, tror Jonas at også mennesket har muligheten i seg til å anta ulike former. For Jonas Wergeland er det viktig å bevare troen på at et hvilket som helst «alminnelig» menneske i en viss sammenheng kan bli et «geni».",
    ],
    en: [
      "We haven't heard the last of Jonas Wergeland, the TV wizard who gave a whole nation new self-confidence. A biographer is given the job of writing \"the definitive Wergeland biography\". While working on it he comes across a woman who has previously undisclosed stories to tell. Gaps are plugged, new relationships revealed. How does one become a conqueror?",
      "We follow Jonas from the time he swallows a button of dragon's horn as a child, to when he takes cities like Istanbul and Tokyo by storm as a grown-up. And as regards women, it isn't satisfaction Jonas Wergeland is searching for, but edification.",
      "While his story is being told, the main character languishes in prison, sentenced for a serious offence.",
      "The Conqueror is an independent parallel to The Seducer.",
    ],
  },
}

export default function Erobreren() {
  const { lang } = useLanguage()
  const [excerptOpen, setExcerptOpen] = useState(false)
  const [reviewOpen, setReviewOpen] = useState(false)

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

        <BookPageBody content={erobrerenContent} />

        <TrilogyBooks />

        {/* Utdrag / Excerpt */}
        <h3 className="
          uppercase
          text-xl
          tracking-[0.12em]
          font-['Playfair_Display_SC',serif]
          mt-14
          md:mt-8
          mb-6
        ">
          {lang === "no" ? "Utdrag" : "Excerpt"}
        </h3>

        <div className="border-l-2 border-black/10 pl-5">
          <p className="
            font-['Lora',serif]
            text-base
            leading-7
            tracking-[0.04em]
            text-black
          ">
            {lang === "no" ? (
              <>
                Trykk{" "}
                <button
                  type="button"
                  onClick={() => setExcerptOpen(true)}
                  className="underline underline-offset-4 cursor-pointer hover:opacity-80 focus:outline-none"
                >
                  her
                </button>
                {" "}for å lese et utdrag fra boken.
              </>
            ) : (
              <>
                Click{" "}
                <button
                  type="button"
                  onClick={() => setExcerptOpen(true)}
                  className="underline underline-offset-4 cursor-pointer hover:opacity-80 focus:outline-none"
                >
                  here
                </button>
                {" "}to read an excerpt from the book.
              </>
            )}
          </p>
        </div>

        <Drawer
          open={excerptOpen}
          onClose={() => setExcerptOpen(false)}
          title={lang === "no" ? "Inne i transformatoren" : "Inside the transformer"}
          subtitle={lang === "no" ? "Utdrag fra Erobreren" : "Excerpt from The Conqueror"}
        >
          {renderArticle(lang === "no" ? transformatorNo : transformatorEn)}
        </Drawer>

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
          ">
            {lang === "no" ? (
              <>
                Trykk{" "}
                <button
                  type="button"
                  onClick={() => setReviewOpen(true)}
                  className="underline underline-offset-4 cursor-pointer hover:opacity-80 focus:outline-none"
                >
                  her
                </button>
                {" "}litteraturprofessor Per Buviks anmeldelse av boken.
              </>
            ) : (
              <>
                Click{" "}
                <button
                  type="button"
                  onClick={() => setReviewOpen(true)}
                  className="underline underline-offset-4 cursor-pointer hover:opacity-80 focus:outline-none"
                >
                  here
                </button>
                {" "}to read literature professor Per Buvik's review of the book. (Only available in Norwegian)
              </>
            )}
          </p>
        </div>

        <Drawer
          open={reviewOpen}
          onClose={() => setReviewOpen(false)}
          title="Kan man forstå et liv?"
          subtitle={lang === "no" ? "Per Buvik, professor ved Universitetet i Bergen" : "Per Buvik, professor at the University of Bergen"}
        >
          {renderArticle(perBuvikReview)}
        </Drawer>

        <BookPageQuotes content={erobrerenContent} />

      </div>
    </section>
  )
}