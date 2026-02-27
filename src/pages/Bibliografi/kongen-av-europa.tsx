import BookPage from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"

const kongenAvEuropaContent: BookPageContent = {
  title: { no: "Kongen av Europa", en: "The King of Europe" },
  meta: { no: "Roman (2005)", en: "Novel (2005)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/kongen-av-europa-4" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/kongen-av-europa-4" },
  },
  coverImage: {
    src: "/images/kongen-av-europa-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Quotes" },
  quotes: [
    {
      text: "«En riktig majestetisk roman og en hovedperson med atskillig sjarm, kaos og uorden rundt seg … en roman som faktisk er god lesning.»",
      source: "Guri Hjeltnes, VG",
      diceImg: "/images/terningkast5.png",
    },
    {
      text: "«En roman som Kongen av Europa kan ikke, når man akkurat har lest den, ytes rettferdighet gjennom en anmeldelse … Det er en roman som må leses langsomt, og gjenleses.»",
      source: "Hans H. Skei, Aftenposten",
    },
    {
      text: "«En norsk berättarkung.»",
      source: "Eva Ström, Sydsvenska Dagbladet",
    },
  ],
  paragraphs: {
    no: [
      "Det viktigste man kan si om Alf I. Veber, hovedpersonen i Kongen av Europa, er at han er en søker. Hans favorittgruppe som barn er ikke for ingenting The Searchers. Historien om Alf I. Veber hevder, mellom linjene, at søkingen er menneskets vesenskjennemerke nr. 1. Allerede tidlig i romanen møter leseren en fortelling som konkretiserer det savn som er søkingens årsak: Alf lider, rent fysisk, av en mangel. Han har bygd en praktfull olakjerre, men under et løp blir han presset ut av veien og kolliderer så stygt med et tre at milten sprekker. Under operasjonen på sykehuset må de fjerne den. Alf mangler altså et indre organ. At hans beste venn, en sju år eldre jente, like etter tar sitt eget liv, gjør ikke saken bedre. Alf går etter dette med et tomrom i seg som han forsøker å fylle. Livet hans er preget av et udefinertbart savn.",
      "Romanen starter med nettopp dette. Alf i voksen alder. I et nullpunkt. I 00.00.00. Nyttårsaften 1999. Alf Veber befinner seg i Jotunheimen. I en nedsnødd hytte. Mutters alene. Han vil markere årtusenskiftet på en topp der han ble kysset uforglemmelig av en kvinne. Det ender med at han går seg vill og må tilbringe årtusenskiftet i en snøhule. Like etter drar han til London for å lete etter denne kvinnen, Anna Fleischer, en fjern slektning av generalen som sto imot tyskerne i Nord-Norge i 1940, en general hvis motto var å alltid være i angrep.",
      "Romanens nåtidsplan er lagt til London, og mens handlingen ruller og går i denne metropolen, får leseren stadige tilbakeblikk på Alfs fortidige liv og karriere.",
      "Det er heller ingen tilfeldighet at mye av handlingen er lagt til London, til Europa. Dette er en roman som ble utgitt i 2005, et år preget av hundreårsjubileet, et år da nordmenn kanskje litt for mye feiret seg selv og sin egen fortreffelighet. Kongen av Europa forsøker å se ut, vise at vi bare kan overleve som nasjon hvis vi henter inspirasjon utenfor landets grenser.",
      "Alf er en søker på alle plan; han søker etter et livsprosjekt, han søker etter en far og en mor, han søker etter en venn, han søker ikke minst etter en kjæreste. Og dette siste er naturligvis et hovedspor gjennom hele romanen. Allerede tidlig i historien ser han en jente og følger etter henne inn i en høyblokk hvor han må ringe på alle de førti dørene for å finne henne.",
      "Han sneier innom flere kvinner i løpet av historien, og da han er i London, etter å ha blitt avvist av Anna Fleischer, møter han en annen, en ung kvinne, og innleder et slags forhold til henne.",
      "Alf rommer en motsetning, og det er den samme motsetningen de fleste mennesker rommer. Han er en romantiker som ønsker å være et opplysningsmenneske. Eller omvendt: Han forsøker å leve etter fornuften, men oppdager stadig hvordan følelsen stikker av med seieren. Denne konflikten er kanskje ikke så overraskende i og med at Alfs far arbeider ved den farmasøytiske bedriften Nyegaard & Co, kalt Nyco, der han er involvert i arbeidet med å gjennomlyse menneskets hjerne, finne nye kontrastmidler som kan brukes i røntgen. Alfs mor arbeider derimot i Gyldendal Norsk Forlag, men hun har aldri lest en bok. Hun er imidlertid en kløpper på slagere, kan alle tidens populære sanger som hun hele tiden går rundt og nynner.",
      "Det er altså mye musikk i boken, og det er ingen grunn til å skjule at også Alf, i lange passasjer av livet, tar sin tilflukt til musikken – både med å spille og å komponere. For det er faktisk sånn at av og til kan en popsang på 2 minutter og 37 sekunder si mer enn hele Store Norske leksikon til sammen.",
      "Men ingenting er som en roman, som kan kombinere både popsangens magi og de uutsigelige innsikter bare skriften kan gi. I romanen kan man nemlig oppleve at hjertet og hjernen ligger vegg i vegg.",
    ],
    en: [
      "Alf I. Veber is an individual who suffers from serious shortcomings. As a child, he loses his spleen after an accident, and shortly after, his best friend commits suicide. Alf's existence is marked by a feeling of loss that manifests itself in various ways, and by a hunger for enlightenment which drives him to launch into a series of breakneck projects. The novel opens on New Year's Eve 1999, which Alf spends alone in a snow cave in the mountains. Shortly after, he goes to London, where the remainder of the novel is set, to find the woman he thinks he loves. Drawn between the rational and the romantic, and constantly having to confront stories from his past, Alf is light years away from being a king. But perhaps it is possible to be a winner even if you are, on the surface of things, a loser?",
    ],
  },
}

export default function kongenAvEuropa() {
  return <BookPage content={kongenAvEuropaContent} />
}
