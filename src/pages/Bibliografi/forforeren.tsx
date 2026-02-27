import { BookPageBody, BookPageQuotes } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"
import TrilogyBooks from "../../components/TrilogyBooks"


const forforerenContent: BookPageContent = {
  title: { no: "Forføreren", en: "The Seducer" },
  meta: { no: "Roman (1993)", en: "Novel (1993)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/forforeren" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/forforeren" },
  },
  coverImage: {
    src: "/images/forforeren-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Quotes" },
  quotes: [
    {
      text: {
        no: "«Forføreren av norske Jan Kjærstad er et moderne nasjonalepos … Les, kjære leser, les! Store bøker får vi så sjelden.»",
        en: "'The Seducer by the Norwegian Jan Kjærstad is a modern national epic … Read on, reader, read on – great books are so rare!'",
      },
      source: "Die Welt, Tyskland",
    },
    {
      text: {
        no: "«Det er ikke ofte det blir utgitt en roman av dette kaliber i Norge. Også i det store utland forekommer det langt sjeldnere enn man tror.»",
        en: "(In norwegian) 'Det er ikke ofte det blir utgitt en roman av dette kaliber i Norge. Også i det store utland forekommer det langt sjeldnere enn man tror.'",
      },
      source: "Per Buvik, Bergens Tidende",
    },
    {
      text: {
        no: "«… en vidunderlig rik bok … uhyre elegant og forfriskende.»",
        en: "(In norwegian) '… en vidunderlig rik bok … uhyre elegant og forfriskende.'",
      },
      source: "Kjell Olaf Jensen, Arbeiderbladet",
    },
    {
      text: {
        no: "«En forrykende fortelling, rik og bevegende, festlig og tragisk … Sannelig. Det er lenge siden jeg har vært så intenst opptatt av en bok.»",
        en: "'A tremendous story, rich and moving, delightful and tragic … Veracious. It's a long time since I was so intensely taken with a book.'",
      },
      source: "Erik Svendsen, Politiken",
    },
    {
      text: {
        no: "«Forføreren er nemlig så livsbekreftende at det er en ren fryd å lese den. Den er stort tenkt, og den er storslått og formidabelt godt skrevet.»",
        en: "'The Seducer is really so life-affirming, that it is a pure joy to read. It's a great concept, it's impressive and formidably well written.'",
      },
      source: "Lars Handesten, Berlingske Tidende",
    },
    {
      text: {
        no: "«Romanene er mesterstykker … Det er mulig at jeg forandrer mening, men nå, etter bare én natt med denne tusensiders boken, kan jeg ikke tenke meg en eneste roman fra europeisk samtidslitteratur som jeg heller ville foretrekke enn disse to fra Jan Kjærstad.»",
        en: "'… It is possible that I'll change my mind, but now, after a single night with this thousand-pager, I can't think of a single novel from contemporary European literature I'd rather have than these two by Jan Kjærstad.'",
      },
      source: "Thomas Thura, Weekend-avisen",
    },
  ],
  paragraphs: {
    no: [
      "Forføreren åpner med at hovedpersonen, Jonas Wergeland, kommer hjem fra en reise og finner sin kone på gulvet i stuen, drept. Mens han står der og ser på sin døde hustru, dukker historier opp, som om han holder på å drukne og livet passerer forbi i revy.",
      "Det er ikke Jonas Wergeland, men en annen som gir stemme til denne rekken med historier, over åtti, og som stadig vender tilbake til og tiltaler Jonas der han står omtumlet, som i sentrum av en syklon, i stuen foran liket av hustruen. Fortelleren har noe av den samme funksjonen som Sheherasad i Tusen og én natt; hun forteller for å redde liv.",
      "Historiene beretter om hvordan Jonas Wergeland allerede som barn viser uvanlige egenskaper. Han kan kjenne igjen gode malerier, bilder overhodet, på grunn av en kilende fornemmelse mellom skulderbladene. Ikke så rart ender han – etter å ha studert astrofysikk og arkitektur – opp i NRK-fjernsynet, først som «hallomann» med eventyrlig seerappell, deretter som programskaper. Hans mesterverk blir serien «Å tenke stort», over tjue portretter av nordmenn som er blitt berømte utenfor Norges grenser, personer som Ibsen, Grieg og Munch, men også Sonja Henie, Per Spook og Gro Harlem Brundtland.",
      "Foruten å gi et innblikk i skjellsettende episoder i Jonas Wergelands liv og moderne norsk historie – særlig flaksen som gjorde Norge til en oljenasjon – følger man Jonas på lange reiser og ikke minst på erotiske eventyr. Romanen påstår at Jonas Wergeland er i besittelse av en «magisk penis», noe som innebærer at han gjennom et samleie kan oppdage nye talenter ved seg selv. Etter f.eks. å ha vært sammen med en jente som er et matematisk geni, får også Jonas plutselig gode karakterer i matematikk.",
      "Fortelleren beretter ikke kronologisk, dvs. slik at barndomshistoriene kommer først og historiene fra Jonas' voksne liv til slutt; fortellingene kommer i en rekkefølge som antyder andre årsakssammenhenger – som f.eks. at Jonas Wergeland holdt på å bli sugd inn i en propell da han er seks år fordi han dro til Timbuktu som nittenåring. Forføreren er i det hele tatt en roman som vil avsløre uante og overraskende forbindelser mellom historier som ligger langt fra hverandre i tid og sted. Forføreren forsøker å komme med alternative forklaringer til hvordan et liv henger sammen. Hjulet er et hovedsymbol; alle eikene – fortellingene, om man vil – har kontakt med det samme navet.",
      "I Forføreren står mennesket fram som forteller. Det hevdes at fortellingen gir en innsikt som ikke kan gis på noen annen måte. Selv når vi ikke forstår, kan vi fortelle en historie om det vi ikke forstår.",
    ],
    en: [
      "In The Seducer we are introduced to the charismatic Jonas Wergeland who has achieved stardom with his television series \"Thinking Big\". He returns home from a trip abroad to find his wife dead. Taking this as a starting point, the hero's sensational life history is revealed by a stream of dramatic narratives.",
      "Jan Kjærstad is an author who knows how to use effect – the reader is swept along from Grorud and Oslo to locations such as Timbuktu and Shanghai, from a boy's first encounter with the Kama Sutra to his use of that knowledge in front of the cameras in Oslo's main television studios.",
      "The Seducer is an easily read, thrilling and erotic book – one huge collection of narratives.",
    ],
  },
}

export default function Forforeren() {

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

      <BookPageBody content={forforerenContent} />

      <TrilogyBooks />

      <BookPageQuotes content={forforerenContent} />

      </div>
    </section>
  )
}