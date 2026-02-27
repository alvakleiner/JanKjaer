import BookLink from "../../components/BookLink"
import { BookPageBody, BookPageQuotes } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"
import { useLanguage } from "../../context/LanguageContext"

const mennesketsNettContent: BookPageContent = {
  title: { no: "Menneskets nett", en: "The Human Net" },
  meta: { no: "Roman (2005)", en: "Novel (2005)" },
  coverImage: {
    src: "/images/menneskets-nett-3d.png",
  },
  quotesTitle: { no: "", en: "" },
  quotes: [],
  paragraphs: {
    no: [
      "Dette er Jan Kjærstads tredje essay- og artikkelsamling. I forordet skriver Kjærstad om sitt eget forhold til forfatteres essaysamlinger. Den typiske erfaringen er at man først blir fanget av et forfatterskap gjennom fiksjonene og deretter også søker etter andre ting forfatteren har skrevet. Kjærstad håper at noen lesere kommer til Menneskets nett på den samme måten.",
      "Romanen er Kjærstads gebet, og de fleste artiklene og essayene dreier seg om problemer innen denne sjangeren, er fragmenter av en poetikk. Noen av dem fortsetter og videreutvikler også tanker og ideer Kjærstad har skrevet om i de to tidligere samlingene sine. Tittelessayet Menneskets nett, som forsøker å applisere en nettanalogi på Robert Musil og Mannen uten egenskaper, følger opp Romanen som menneskets matrise (1988), der Kjærstad prøvde å tenke hinsides modernismen og postmodernismen via James Joyce og Thomas Pynchon, og Menneskets felt (1994) hvor Kjærstad med utgangspunkt i rommet nærleste Peer Hultbergs Byen og Verden. På samme måte er Internettets dramaturgiske knep i denne boken en videreføring av EDB og romanen og Litteraturens mulighet i de to foregående bøkene. Kritikernes troverdighet i Menneskets matrise fortsatte i Kritikkens (u)mulighet i Menneskets felt og når en ny etappe i Menneskets nett med Kritikken versjon 2.0.",
      "I de tidligere samlingene kalte Kjærstad 80- og 90-årene for henholdsvis «Åpenhetens tiår» og «Fortellingens tiår». I forordet til Menneskets nett følger han opp denne uhøytidelige leken med å kalle 00-årene «Forbindelsenes tiår». Dette forslaget forutsetter i grunnen de to foregående. Forbindelser krever åpenhet, at ikke alt befinner seg på samme sted, og fortellinger, noe som kan skape mening når ting fra vidt forskjellige felter bindes sammen.",
      "I forordet skriver Kjærstad tre ganger om nysgjerrighet og sier at ordet også er et av dem han liker best – å være «nysgjerrig», som betyr at man er ivrig etter å få vite ting, få høre nytt. Menneskets nett er tilegnet den nysgjerrige leser.",
      "I boken kan man blant annet lese om konfektesker, om tilværelsens uutholdelige tetthet, om Agnar Mykle, om forfatteren som nasjonalpark, om romanens lys, om stream of information, om karakterer uten egenskaper, om biografiens løgn, om Marilyn Monroe, om et skip til å ha i lommen, om profeter og fortellere, om redselen for Marguerite Duras, om Herodot som notisbok, om en perfekt historie, om det jødiske museet i Berlin, om å være amatør, om kritikerens påfuglhale, om «Make it new»-problematikken, om litteraturens himmel og helvete, om tvillingtanker, om de 36 rettferdige, om Internett som torg og labyrint, om forfattere på pengesedlene.",
    ],
    en: [
      "Content in English missing. Please refer to the Norwegian version.",
    ],
  },
}

export default function mennesketsNett() {
  const { lang } = useLanguage()

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

        <BookPageBody content={mennesketsNettContent} />

        <p className="
          text-base
          leading-7
          tracking-[0.04em]
          font-['Lora',serif]
          text-black
          mt-8
          mb-14
        ">
          {lang === "no" ? "Menneskets nett er ikke lenger i salg som egen bok, men tilgjengelig i essaysamlingen " : "The Human Net is no longer available as a standalone book, but can be found in the essay collection "}{" "}
          <BookLink href="/bibliografi/kjaerstads-matrise" className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black italic decoration-neutral-400 hover:decoration-neutral-800 transition">
            {lang === "no" ? "Kjærstads matrise" : "The Matrix of Kjærstad"}
          </BookLink>
          .
        </p>

        <BookPageQuotes content={mennesketsNettContent} />

      </div>
    </section>
  )
}
