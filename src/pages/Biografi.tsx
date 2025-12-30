import { useLanguage } from "../context/LanguageContext"
import ImageSlider from "../components/ImageSlider"

function Biografi() {
  const { lang } = useLanguage()

  const BookLink = ({
    href,
    children,
  }: {
    href: string
    children: React.ReactNode
  }) => (
    <a href={href} className="underline underline-offset-4">
      {children}
    </a>
  )

  const content = {
    title: { no: "Biografi", en: "Biography" },
    paragraphs: {
      no: [
        <>
          Jan Kjærstad ble født 6. mars 1953 i Oslo og vokste opp på Grorud sammen
          med moren, faren og broren. Etter fullført grunnskole i Grorud-området
          fortsatte han studiene i Oslo. Han gikk matematisk-naturvitenskapelig
          linje ved Oslo Katedralskole, før han senere studerte teologi ved
          Universitetet i Oslo og tok cand.theol.-grad i 1979.
        </>,
        <>
          I 1980 debuterte Kjærstad som forfatter med novellesamlingen{" "}
          <BookLink href="/Bibliografi/kloden-dreier-stille-rundt">
            Kloden dreier stille rundt
          </BookLink>
          . Før debuten hadde han også rukket å prøve seg i et par ganske ulike
          yrker: som postbud i Oslo og som ryddegutt i Speilsalen på Grand Hotel.
          I tillegg tjenestegjorde han i militæret fra 1974 til 1975 i Sambandet
          ved Brigade Nord.
        </>,
        <>
          Kjærstads litterære gjennombrudd kom med romanen{" "}
          <BookLink href="/Bibliografi/homo-falsus-eller-det-perfekte-mord">
            Homo Falsus eller det perfekte mord
          </BookLink>{" "}
          (1984). Romanen vakte oppmerksomhet for sin formbevisste konstruksjon
          og for hvordan den utforsker identitet, fortelling og sannhet, og den
          pekte ut en retning som skulle bli viktig i forfatterskapet.
        </>,
        <>
          Fra 1985 til 1989 var Kjærstad redaktør for Gyldendals litterære
          tidsskrift Vinduet. Her bidro han til å forme litterær debatt, både
          gjennom redaksjonelt arbeid og egne tekster. Noen av bidragene hans
          finner du digitalt{" "}
          <a
            href="https://www.vinduet.no/bidragsytere/jan-kjaerstad"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            her
          </a>
          .
        </>,
        <>
          I 1990-årene skrev Kjærstad sin kanskje mest kjente verkrekke: en
          trilogi om TV-personen Jonas Wergeland bestående av{" "}
          <BookLink href="/Bibliografi/forforeren">Forføreren</BookLink> (1993),{" "}
          <BookLink href="/Bibliografi/erobreren">Erobreren</BookLink> (1996) og{" "}
          <BookLink href="/Bibliografi/oppdageren">Oppdageren</BookLink> (1999).
          For Oppdageren ble Jan Kjærstad tildelt Nordisk råds litteraturpris i
          2001, en av de fremste anerkjennelsene innen nordisk litteratur.
        </>,
        <>
          Kjærstad skriver fortsatt, med{" "}
          <BookLink href="/Bibliografi/valgdager">Valgdager</BookLink> (2024) som
          sin foreløpig siste utgivelse. Romanene hans er oversatt til en rekke
          språk, og han regnes i dag som en av de mest markante norske forfatterne
          i sin generasjon.
        </>,
      ],
      en: [
        <>
          Jan Kjærstad was born on 6 March 1953 in Oslo and grew up in Grorud
          with his mother, father, and brother. After completing compulsory
          schooling in the Grorud area, he continued his studies in Oslo. He
          attended the mathematics and natural sciences program at Oslo Cathedral
          School and later studied theology at the University of Oslo, graduating
          with a cand.theol. degree in 1979.
        </>,
        <>
          In 1980, Kjærstad made his literary debut with the short-story
          collection{" "}
          <BookLink href="/Bibliografi/kloden-dreier-stille-rundt">
            The Earth Turns Quietly Around
          </BookLink>
          . Before his debut, he had already tried his hand at a few very
          different jobs—from working as a mail carrier in Oslo to clearing
          tables in Speilsalen (“the Mirror Hall”) at the Grand Hotel in Oslo. He
          also served in the military from 1974 to 1975 in the signals branch
          connected to Brigade North.
        </>,
        <>
          His breakthrough came with{" "}
          <BookLink href="/Bibliografi/homo-falsus-eller-det-perfekte-mord">
            Homo Falsus, or The Perfect Murder
          </BookLink>{" "}
          (1984). The novel drew attention for its carefully designed structure
          and its exploration of identity, storytelling, and truth, introducing
          themes that would become central to his work.
        </>,
        <>
          From 1985 to 1989, Kjærstad was editor of Gyldendal’s literary journal
          Vinduet, helping shape literary debate through both editorial work and
          his own writing. Some of his contributions can be found digitally{" "}
          <a
            href="https://www.vinduet.no/bidragsytere/jan-kjaerstad"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            here
          </a>
          .
        </>,
        <>
          In the 1990s, he wrote what is perhaps his best-known work: a trilogy
          about the TV figure Jonas Wergeland consisting of{" "}
          <BookLink href="/Bibliografi/forforeren">The Seducer</BookLink> (1993),{" "}
          <BookLink href="/Bibliografi/erobreren">The Conqueror</BookLink> (1996),
          and <BookLink href="/Bibliografi/oppdageren">The Discoverer</BookLink>{" "}
          (1999). For The Discoverer, he was awarded the Nordic Council’s
          Literature Prize in 2001, one of the most prestigious literary prizes
          in the Nordic countries.
        </>,
        <>
          Kjærstad continues to write, with{" "}
          <BookLink href="/Bibliografi/valgdager">Election Days</BookLink> (2024)
          as his most recent publication to date. His novels have been
          translated into many languages, and he is widely regarded as one of
          the most significant Norwegian writers of his generation.
        </>,
      ],
    },
  } as const

  return (
    <>
      {/* Hero / portrett */}
      <div className="md:pb-10 pb-4 flex justify-center">
        <div className="hidden sm:block">
          <img src="/images/hovedbilde-biografi-md.jpg" alt="portrett" />
        </div>
        <div className="sm:hidden">
          <img src="/images/hovedbilde-biografi.jpg" alt="portrett" />
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-8">
          {/* Tittel */}
          <h2
            className="
              text-center
              text-2xl
              font-medium
              tracking-widest
              font-['Playfair_Display',serif]
              mb-16
            "
          >
            {content.title[lang]}
          </h2>

          {/* Tekst */}
          <div className="max-w-3xl mx-auto">
            <h3
              className="
                uppercase
                text-xl
                tracking-[0.12em]
                font-['Playfair_Display_SC',serif]
                mb-6
              "
            >
              Jan Kjærstad
            </h3>

            <div
              className="
                text-base
                leading-6
                tracking-[0.04em]
                font-['Lora',serif]
                text-black
                space-y-6
              "
            >
              {content.paragraphs[lang].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Bildeslider */}
            <ImageSlider />
          </div>
        </div>
      </section>
    </>
  )
}

export default Biografi

