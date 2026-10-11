import { createFileRoute } from "@tanstack/react-router";
import BookPage from "../../components/BookPage";
import type { BookPageContent } from "../../components/BookPage";

export const Route = createFileRoute("/bibliografi/en-verdig-sak-for-thomas-hegel")({ component: EnVerdigSak });

const content: BookPageContent = {
  title: { no: "En verdig sak for Thomas Hegel", en: "A Worthy Case for Thomas Hegel" },
  meta: { no: "Roman (2026)", en: "Novel (2026)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/en-verdig-sak-for-thomas-hegel-1" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/en-verdig-sak-for-thomas-hegel-1" },
  },
  coverImage: {
    src: "/images/thomas-hegel-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Reviews" },
  quotes: [
    {
      text: "«Et stykke pur leseglede! Elegant historie om kjærlighet, utroskap, sjelesorg og whisky. (...) I «En verdig sak for Thomas Hegel» lykkes Jan Kjærstad suverent med å kombinere stil, utførelse og innhold.»",
      source: "Sindre Hovdenakk, VG",
      diceImg: "/images/terningkast6.png",
    },
    {
      text: "«Med En verdig sak for Thomas Hegel bekrefter Kjærstad at han befinner seg på den aller øverste hylla sett med både norske og fremmedlandske briller. Jan Kjærstad er en usedvanlig belest og kunnskapsrik forfatter innenfor en rekke felt. Det benytter han på et svært flott og klokt vis. Om det er egyptologi, whisky eller musikk - og mye mer - så vever Kjærstad det sammen på et vis som løfter denne overraskende fortellinga opp til en roman som er av sjelden kvalitet. (...) For meg er dette litteratur på aller øverste hylle. Jan Kjærstad bekrefter sitt mesterskap på overraskende og flott vis, med en mer enn verdig roman.»",
      source: "Tor Hammerø, Nettavisen",
      diceImg: "/images/terningkast6.png",
    },
    {
      text: "«Herlig kynisme om kjærlighet. Jan Kjærstad leverer igjen, denne gangen i en thrilleraktig roman om utroskap i selvhøytidelige Oslo-miljøer.»",
      source: "Inger Bentzrud, Dagbladet",
      diceImg: "/images/terningkast5.png",
    },
    {
      text: "«Deilig detektivfortelling. En verdig sak for Thomas Hegel er en spennende og sjarmerende slukebok av det gode, gamle slaget, om kjærlighet i foodtruckenes tid og gleden over et godt nødrim. ... et nydelig stykke oslolitteratur, en fin hyllest til stort og smått i landets hovedstad. (...) I En verdig sak for Thomas Hegel er 73-årige Jan Kjærstad i toppform. Han svever høyt og sveiper lavt, språklig og tematisk, og lander stødig et sted midt imellom.»",
      source: "Gerd Elin Stava Sandve, Dagsavisen",
    },
    {
      text: "«En forførende Oslo-roman. Jan Kjærstad glimter til i en smekker roman om utroskap, kreativitet og byvandringer. (...) Jan Kjærstads nye roman er simpelthen behagelig å lese. Det utsøkte detaljnivået, rytmen og stilen, som veksler ubesværet mellom nåtid og fortid, gir en slags deilig luksusfølelse. Og så er det jeg-fortelleren, da. En aparte, fascinerende figur med et dobbeltliv. (...) Det skal litt til før jeg faller for rariteter og påfunn. En verdig sak for Thomas Hegel balanserer på den riktige siden av streken.»",
      source: "Anne Merethe K. Prinos, Aftenposten",
    },
  ],
  paragraphs: {
    no: [
      "«TILLAT MEG å betvile kjærligheten. Jo jo, jeg vet at mange vil protestere, de fleste vil protestere, gjennom hele livet blir vi tutet ørene fulle med at kjærligheten utholder alt, tror alt, håper alt, tåler alt; jeg beklager hvis jeg tar fra noen illusjonen, men det er en løgn. Og jeg snakker av erfaring. Straks skal jeg få et nytt bevis.»",
      "Slik begynner romanen om Thomas Hegel, som har to yrker. Han etterforsker utroskap og skriver sangtekster, og han vet godt at det ikke finnes et språk for kjærligheten. Romanen er rik, elegant og spennende - tidvis en slags spionroman, tidvis en kjærlighetsroman, tidvis en kjærlighetserklæring til Oslo, men aldri bare én av delene.",
      "Romanen tar leseren med inn i det gamle hovedpostkontoret i Oslo, der Thomas Hegel har sin leilighet, og hvor han i en kinkig sak kan finne støtte i noen dråper av den riktige whiskyen eller hente inspirasjon i bøker om det gamle Egypt.",
      "Vi blir med inn i Rådhuset på en dag da mange par vier seg, vi besøker The Dubliner, stampuben, og blir presentert for den mystiske hjelperen Alice - på et punkt må også Thomas Hegel stevne møte med en gravejournalist på Aker Brygge.",
      "De to sakene Hegel jobber med, bringer ham til barer og kafeer, tennisbaner og spesialbutikker, museer, biblioteker og konsertlokaler, filmklubber og fester; av og til må han også følge etter personer gjennom byens gater.",
      "Hvilke er de vanligste motivene når en person bedrar ens partner? Og hvilke er de uvanlige? Hvorfor blir en utro ektefelle, som ellers lever et vanlig liv, plutselig så forbausende oppfinnsom?",
      "Leseren blir innviet i kunsten å skrive et brev og hvilke knep som gjelder når man skal skrive teksten til en kjærlighetssang som får folk til å gråte.",
      "Her er Thomas Hegel med sine egne ord: «De aller fleste forbrytelser er i bunn og grunn enkle, mord også. Jeg ville jobbe med noe virkelig komplisert. Kjærligheten.»"
    ],
    en: ["Content in English missing. Please refer to the Norwegian version."],
  },
};

export default function EnVerdigSak() {
  return <BookPage content={content} />;
}