import BookPage from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"

const detStoreEventyretContent: BookPageContent = {
  title: { no: "Det store eventyret", en: "The Great Fairy Tale" },
  meta: { no: "Roman (1987)", en: "Novel (1987)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/det-store-eventyret" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/det-store-eventyret" },
  },
  coverImage: {
    src: "/images/det-store-eventyret-3d.png",
  },
  quotesTitle: { no: "Sitat", en: "Quote" },
  quotes: [
    {
      text: {
        no: "«Hans intellektuelle aksjonsradius får de fleste andre norske forfattere til å virke som beitende kyr i tjor.»",
        en: "(In Norwegian) 'Hans intellektuelle aksjonsradius får de fleste andre norske forfattere til å virke som beitende kyr i tjor.'",
      },
      source: "Øystein Rottem, Arbeiderbladet",
    },
  ],
  paragraphs: {
    no: [
      "Det store eventyret åpner med en mann som sitter foran TV-skjermen og fingrer tankeløst med fjernkontrollen. Plutselig, idet han bytter kanal, får han øye på ansiktet til en kvinne som gjør et veldig inntrykk på ham. Han bestemmer seg for å finne henne, koste hva det koste vil.",
      "Mannen heter Peter Beauvoir og kvinnen Shoshana Moira. Det store eventyret er, som tittelen antyder, en bok breddfull av eventyr, i alle betydninger av ordet. Men først og sist handler den om kjærlighet; hele romanen kan betraktes som et langt kjærlighetsbrev fra Peter til Shoshana.",
      "Peter Beauvoir er suksessrik bilderedaktør i et stort leksikon kalt Nye Norske, men da han møter Shoshana, en kvinne som er totalt annerledes, blir han tvunget ut av sitt komfortable univers. Det Peter tror skal bli en lett seksuell erobring, utvikler seg til å bli en grensesprengende opplevelse. Han finner seg stadig i ukjente situasjoner, på ukjente steder, foran ukjente mennesker. Og alle han spør om Shoshana, forteller ham motstridende historier om hvem hun er. Underveis dumper han over en veldig eventyrsamling, Hazar, som viser seg å kunne bli selve nøkkelen til å vinne henne. Men skal han makte det, må han først løse dens store gåte, kalt Enigma. Og for å klare det igjen, må han legge fra seg bildene og ta fatt på skriften.",
      "I Det store eventyret er Norge plutselig et land med vulkanske fjell, med palmestrender og med moskeer, hindutempler og pagoder. Norge er rett og slett en øy i Det indiske hav, men ellers på mange måter identisk med «vårt» Norge. Det går fram at vi befinner oss i en annen yuga, i en annen tidssyklus, hvor brokker av det vi kjenner fra det 20. århundre og ellers i historien opptrer i helt nye sammenhenger. Fra en vinkel kan Det store eventyret derfor leses som en bok i slekt med fantastisk litteratur eller science fiction, men fra en annen vinkel kan den drastiske forandringen av vår kjente virkelighet like gjerne betraktes som et utslag av kjærlighetens makt, av hvordan kjærligheten kan snu opp ned på alt. Eller som et bevis på hvordan skrift – selve skriften – til og med kan rykke hele den tilvante virkeligheten ut av tid og rom.",
      "Fordi Hazar, en eventyrsamling og dens tolkning, står i sentrum av romanen, blir Det store eventyret også mye en bok om eventyr og folkediktning. Kjærstad trekker tydelige forbindelser til Tusen og én natt, men også til andre store verk bygd opp av mindre fortellinger, som Pentateuken i Det gamle testamente, Decameronen av Boccaccio og Orlando furioso av Ariosto.",
      "I romanen finnes innskutte «eventyr», som er basert på virkelige personer fra det 20. århundre, f.eks. Lawrence av Arabia eller Elizabeth Taylor. Ved siden av dette møter man parodier eller pastisjer på det 20. århundres mest innflytelsesrike teorier, f.eks. Freuds psykoanalyse, Einsteins relativitetsteori og Che Guevaras politiske geriljastrategi.",
      "I Det store eventyret er Skriften kjærlighetens viktigste redskap. For med Skriften kan man utrette alt, til og med rykke hele den tilvante virkeligheten ut av tid og rom, slik at Norge plutselig skildres som et land med vulkanske fjell, palmestrender og minareter langs Karl Johans gate.",
    ],
    en: [
      "A book crammed full of fairy tale, in every sense of the word. But more than anything it's about love, about a man meeting a woman who is totally different and, because of her, being forced out of his comfortable little world. He continually finds himself in unfamiliar situations, and everyone he asks gives contradictory accounts of who she is. In the midst of all this he chances across a massive collection of fairy tales which, it appears, may hold the key to her heart. But if he's to succeed, he must first solve its great riddle.",
      "In The Great Fairy Tale love's greatest tool is the Written Word. With the Written Word one can achieve anything, even jolt humdrum reality out of time and place, so that Norway suddenly manifests itself as a land of volcanic mountains, palm beaches and minarets lining Oslo's main shopping street.",
    ],
  },
}

export default function DetStoreEventyret() {
  return <BookPage content={detStoreEventyretContent} />
}
