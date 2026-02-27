import BookLink from "../../components/BookLink"
import { BookPageBody } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"
import { useLanguage } from "../../context/LanguageContext"

const mennesketsNettContent: BookPageContent = {
  title: { no: "Hos Sheherasad, fantasiens dronning", en: "The World of Scheherazade, Queen of Tales" },
  meta: { no: "Bildebok (1995)", en: "Picture Book (1995)" },
  coverImage: {
    src: "/images/sheherasad-3d.png",
  },
  quotesTitle: { no: "", en: "" },
  quotes: [],
  paragraphs: {
    no: [
      "Hos Sheherasad, fantasiens dronning er en bildebok. Jan Kjærstad har skrevet teksten og Judith Allan har illustrert. Historien er et forsøk på å formidle noen av hovedtankene i eventyrsamlingen Tusen og én natt til barn.",
      "Boken åpner med at jeg-personen står foran treet hvor de store guttene har bygd sin hemmelige hytte. Han må selvfølgelig klatre opp for å se hva som er inni. Mens han undersøker hytta, kommer imidlertid de store guttene brasende ut av krattet foran lysningen under treet. Jeg-personen vet han må finne på noe veldig lurt om han skal komme seg helskinnet ut av situasjonen.",
      "Akkurat da letter den filleryen han sitter på, og flyr ham av gårde til et ukjent sted. Etter å ha seilt inn gjennom vinduet i et marmorpallass, lander han foran en pike i underlige klær, en pike som viser seg å være prinsesse Sheherasad.",
      "Da han forteller henne om knipen han er i, om den julingen som venter ham, sier Sheherasad at hun kanskje kan hjelpe ham. Hun tar ham med rundt i palasset og forteller ham sin egen historie. Hun er gift med en konge som lenge var så sint på kvinner at han drepte dem morgenen etter bryllupet. Sheherasad hadde overlevd ved å fortelle historier som var så spennende at han heller ville høre fortsettelsen på dem neste natt enn å drepe henne. Til slutt var hatet hans forduftet; hun hadde kurert ham.",
      "Sheherasad foreslår for gutten at også han kan fortelle en historie for å komme seg ut av knipen. Hun tilbyr seg sågar å lære ham noen fortellerknep. De besøker basarene sammen, og hun viser ham den imponerende boksamlingen sin.",
      "Etter å ha hørt på hvordan prinsessen forteller til kongen om kvelden, sovner gutten og kommer til seg selv i hytta oppe i treet. De store guttene går med på å ikke gi ham bank hvis han bare forteller en historie som er spennende nok. Og rundt et bål hvor de steker poteter i sølvpapir, forteller så jeg-personen en historie, en historie som minner mistenkelig om noen av Thor Heyerdahls ekspedisjoner, men som uansett redder ham ut av knipen. Etter dette bestemmer jeg-personen seg for å begynne å samle på gode historier.",
    ],
    en: [
      "Content in English missing. Please refer to the Norwegian version.",
    ],
  },
}

export default function mennesketsNett() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">
        <BookPageBody content={mennesketsNettContent} />
      </div>
    </section>
  )
}
