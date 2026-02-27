import BookPage from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"

const enTidForALeveContent: BookPageContent = {
  title: { no: "Rand", en: "Brink" },
  meta: { no: "Roman (1990)", en: "Novel (1990)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/rand-3" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/rand-3" },
  },
  coverImage: {
    src: "/images/rand-3d.png",
  },
  quotesTitle: { no: "Sitat", en: "Quote" },
  quotes: [
    {
      text: {
        no: "«Rand er et unikt litterært vitnesbyrd om hvordan det var mulig å tenke og skrive i Norge mot slutten av ekstremismens århundre, ved overgangen til informasjonssamfunnet.»",
        en: "(In norwegian) 'Rand er et unikt litterært vitnesbyrd om hvordan det var mulig å tenke og skrive i Norge mot slutten av ekstremismens århundre, ved overgangen til informasjonssamfunnet.'",
      },
      source: "Tom Egil Hverven, Å lese etter familien",
    },
  ],
  paragraphs: {
    no: [
      "I romanen Rand forteller en mann om hvordan han myrder seks mennesker i Oslo. Det første mordet skjer nærmest av vanvare; kanskje bare fordi hovedpersonen ønsker å lese i avisen hvilket yrke den drepte hadde. Morderen blir aldri tatt. Han ender opp i politiet, i den gruppen som etterforsker de mordene han selv har begått. Slik sett er Rand historien om hvordan forbryterne i dag er blitt etterforskere.",
      "På et annet plan handler Rand om en logikk som begynner med «a» og slutter med «omega», altså i et annet alfabet. Et sted underveis oppstår en dimensjonsforskyvning; det skjer noe med årsakssammenhengen: Det kan se ut som om hovedpersonen myrder for å finne årsaken til at han myrder.",
      "I romanen får drapene to følger: Fortelleren begynner å forandre livet sitt gjennom kjennskapet til de personene han har drept. Han blir opptatt av arkitektur fordi et offer er arkitekt; han går for første gang på en eksklusiv restaurant fordi et annet offer er servitør osv.",
      "For det andre blir politiets etterforskning en overflod av data og spor. I tillegg finner man stadig flere korrespondanser mellom de drepte. De har alle sett den samme filmen; de bruker alle samme slags sko; flere har vært på Tonga i Stillehavet osv. Politiet er offer for en tolkningsparanoia. Etterforskningslederen siterer Winston Churchill: Saken «er en gåte pakket inn i et mysterium inni en hemmelighet». I så måte er Rand en roman som sprenger grensene for kriminallitteraturen, samtidig som den fører tankene til de mye omtalte mordene på president John F. Kennedy og statsminister Olof Palme.",
      "I Rand er språket viktig. Selve stemmen. Hovedpersonen tenker på randen til det umulige. Beskrivelsene hans er en underlig blanding av henrykkelse og famling. De er fulle av prøvende metaforer som vipper både mot det erotiske og det metafysiske. Romanen forsøker i grunnen å beskrive et menneske det ikke finnes språk for. Han er kanskje en fjern slektning av hovedpersonene i Sult av Knut Hamsun, Opptegnelser fra en kjellerbolig av Fjodor Dostojevskij og Den fremmede av Albert Camus.",
      "Selv om Rand handler om en person som dreper andre mennesker – altså på sett og vis er en ond historie – kan erkjennelsen fremkalt av fortellingen være verdifull. Romanen handler om en morder og dermed også om moral; den handler om moral fordi den handler om menneskets grenseløse innbilningskraft og kreativitet. Og moral og innbilningskraft henger sammen. Til sjuende og sist er Rand en bok som søker et svar på det grunnleggende spørsmålet: Hva er et menneske?",
    ],
    en: [
      "A newspaper article under a comparatively small headline says that a man has been found dead \"in the street\" behind the Deichmanske Library in Oslo. This is the first of a number of inexplicable deaths in the city. There are strong indications that these people, each with surprising qualities and interests, have been murdered by one and the same person. Who is this unscrupulous and impulsive killer who is stalking Oslo's post-modern clique? The case soon becomes fraught with extra difficulties, not least when the murderer is given the responsibility for co-ordinating the police computer files. Gradually, as he is introduced to more and more facts about his victims, he begins to realise that, as a group, they hold the key to the riddle of modern civilisation.",
      "Earnestly and ironically the reader is taken on an intellectual murder hunt, a journey on the floodtide towards the heart of darkness and a foray into our contemporary Western culture.",
    ],
  },
}

export default function enTidForALeve() {
  return <BookPage content={enTidForALeveContent} />
}
