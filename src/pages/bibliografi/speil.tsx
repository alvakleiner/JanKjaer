import BookPage from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"

const speilContent: BookPageContent = {
  title: { no: "Speil", en: "Mirror" },
  meta: { no: "Roman (1982)", en: "Novel (1982)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/speil" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/speil" },
  },
  coverImage: {
    src: "/images/speil-3d.png",
  },
  quotesTitle: { no: "Sitat", en: "Quote" },
  quotes: [
    {
      text: {
        no: "«Her har vi med et av etterkrigstidens største norske diktverk å gjøre.»",
        en: "(In Norwegian) 'Her har vi med et av etterkrigstidens største norske diktverk å gjøre.'",
      },
      source: "Alfred Hauge, Stavanger Aftenblad",
    },
  ],
  paragraphs: {
    no: [
      "Speil er en bredt anlagt roman med episke trekk. Vi følger hovedpersonen David Dal på en slags odyssé gjennom store deler av det 20. århundre. Romanen er ikke en fortløpende skildring av Davids utvikling, den tar isteden for seg tjue dager eller kortere tidsrom i hans liv. Det første kapitlet er fra 1911, da David er seks år; det andre er fra 1917 osv. Tjuende og siste kapittel er fra 1980. Alle kapitlene er skrevet i forskjellig stil; romanen har således en klar forankring i et modernistisk prosjekt. Bokens hovedsymbol er naturligvis speil, i alle tenkelige betydninger, ikke minst slik vi finner det i diamanten, slipt som en briljant.",
      "David Dal utdanner seg til ingeniør ved NTH i Trondheim, men satser snart alt på en karriere som maler. Malerkunsten får derfor en fremtredende plass i romanen. Handlingen er lagt både til Norge og til utlandet. I løpet av romanen er man, via David Dals liv, innom en rekke mer eller mindre kjente hendelser i det 20. århundre, som krakket på Wall Street, B-25 bombeflyet som kolliderte med Empire State Building, likbålene langs Ganges og verdensutstillingen i Osaka. Innholdselementene strekker seg fra pinsevennenes tungetale til japansk erotikk, fra giftkjertlene hos en spyttende kobra til Tyldums gull på 5-mila i Sapporo-OL – alt sammen er brikker i et tredimensjonalt puslespill som leseren selv kan være med på å sette sammen.",
      "Først og sist er allikevel Speil en bok som skildrer krigen i alle sine fasetter. Romanen blir et slags kart over mulighetene for å overleve og for å gå under. Kjærstad har selv uttalt at han med denne boken ville antyde menneskets anledning til å bygge en redningsflåte av vrakrestene fra tidligere forlis.",
      "Speil ble opprinnelig publisert med undertittelen Leseserie fra det 20. århundre.",
    ],
    en: [
      "Mirrors; a novel about David Dal's odyssey through the 20th century. We share in key episodes in the main character's life and decisive events in Western history. Eventually they all end up as pieces in a three-dimensional jigsaw that the reader must help to solve.",
    ],
  },
}

export default function Speil() {
  return <BookPage content={speilContent} />
}