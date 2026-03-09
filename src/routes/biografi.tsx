import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import ImageSlider from "../content/biografi/ImageSlider";
import article from "../content/biografi/taraChanceArticle";
import AwardsTimeline from "../components/AwardsTimeline";
import BookLink from "../components/BookLink";
import Drawer, { renderArticle } from "../components/Drawer";

export const Route = createFileRoute("/biografi")({ component: Biografi });

function Biografi() {
  const { lang } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const UiLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      onClick={onClick}
      className="
        underline underline-offset-4
        cursor-pointer
        hover:opacity-80
        focus:outline-none
      "
    >
      {children}
    </button>
  );

  const content = {
    title1: { no: "Biografi", en: "Biography" },
    paragraphs1: {
      no: [
        <>
          Jan Kjærstad ble født 6. mars 1953 i Oslo og vokste opp på Grorud. Etter
          grunnskolen valgte han matematisk-naturvitenskapelig linje ved Oslo
          Katedralskole og tok artium i 1972. Senere studerte han teologi ved
          Universitetet i Oslo og tok embetseksamen i 1979.
        </>,
        <>
          Kjærstad debuterte som forfatter i 1980 med novellesamlingen{" "}
          <BookLink link={{ to: "/bibliografi/kloden-dreier-stille-rundt" }}>
            Kloden dreier stille rundt
          </BookLink>
          . Før debuten rakk han å prøve seg i ulike yrker: som ryddegutt i Speilsalen
          på Grand Hotel, som postbud i Oslo 9, og som lærervikar. Han avtjente
          førstegangstjenesten i 1974–75 i Sambandskompaniet, Brigade Nord.
        </>,
        <>
          Kjærstad har spilt klassisk piano i ti år, og på 1970-tallet spilte han i
          flere band, som gitarist og keyboardist. Musikk har en fremtredende plass i
          bøkene hans.
        </>,
        <>
          Kjærstad fikk sitt litterære gjennombrudd med romanen{" "}
          <BookLink link={{ to: "/bibliografi/homo-falsus" }}>
            Homo Falsus
          </BookLink>{" "}
          (1984), som også innbrakte ham Kritikerprisen. Romanen vakte oppmerksomhet
          for sin formbevisste konstruksjon og for hvordan den utforsker identitet,
          fortelling og sannhet. Skrivemåten pekte ut en retning som skulle bli viktig
          i forfatterskapet.
        </>,
        <>
          Fra 1985 til 1989 var Kjærstad redaktør for Vinduet, Gyldendals litterære
          tidsskrift. Her bidro han til å forme litterær debatt, både gjennom
          redaksjonelt arbeid og egne tekster. Noen av bidragene hans finner du
          digitalt{" "}
          
          <a href="https://www.vinduet.no/bidragsytere/jan-kjaerstad"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            her
          </a>
          . Fra 1993 til 1997 var Kjærstad, sammen med Jon Fosse, redaktør for
          tidsskriftet BØK.
        </>,
        <>
          Fra 1989 til 1991 bodde Kjærstad sammen med familien i Zimbabwe, noe som ga
          anledning til å utvikle nye ideer og andre perspektiver, ikke minst på
          nasjonen Norge. Dette dannet et viktig grunnlag for den trilogien han skrev
          om TV-personligheten Jonas Wergeland,{" "}
          <BookLink link={{ to: "/bibliografi/forforeren" }}>Forføreren</BookLink>{" "}
          (1993),{" "}
          <BookLink link={{ to: "/bibliografi/erobreren" }}>Erobreren</BookLink>{" "}
          (1996) og{" "}
          <BookLink link={{ to: "/bibliografi/oppdageren" }}>Oppdageren</BookLink>{" "}
          (1999). For Oppdageren fikk han Nordisk råds litteraturpris.
        </>,
        <>
          På 2000-tallet har Kjærstad markert seg med en rekke nye utgivelser, samtidig
          som han har deltatt i den offentlige debatten. Romanen{" "}
          <BookLink link={{ to: "/bibliografi/berge" }}>Berge</BookLink> (2017) ble
          utropt til Årets bok av VG. Kjærstads foreløpig seneste romaner er{" "}
          <BookLink link={{ to: "/bibliografi/en-tid-for-a-leve" }}>
            En tid for å leve
          </BookLink>{" "}
          (2021) og{" "}
          <BookLink link={{ to: "/bibliografi/valgdager" }}>Valgdager</BookLink>{" "}
          (2024). Ved siden av fire billedbøker for barn har han også gitt ut fem
          essaysamlinger. Han regnes i dag som en av de mest toneangivende forfatterne
          i sin generasjon.
        </>,
      ],
      en: [
        <>
          Jan Kjærstad was born on 6 March 1953 in Oslo and grew up in Grorud. After
          compulsory schooling he attended the mathematics and natural sciences program
          at Oslo Cathedral School, graduating in 1972. He later studied theology at
          the University of Oslo, graduating in 1979.
        </>,
        <>
          Kjærstad made his literary debut in 1980 with the short-story collection{" "}
          <BookLink link={{ to: "/bibliografi/kloden-dreier-stille-rundt" }}>
            The Earth Turns Quietly Around
          </BookLink>
          . Before his debut he had already tried his hand at various jobs: as a busboy at the Grand Hotel's Mirror Hall, as a postman in Oslo, and 
          as a substitute teacher. He completed his military service in 1974–75 in
          the signals company of Northern Brigade.
        </>,
        <>
          Kjærstad played classical piano for ten years and in the 1970s performed in
          several bands as guitarist and keyboard player. Music plays a prominent role
          throughout his books.
        </>,
        <>
          His literary breakthrough came with the novel{" "}
          <BookLink link={{ to: "/bibliografi/homo-falsus" }}>
            Homo Falsus
          </BookLink>{" "}
          (1984), which also earned him the Norwegian Critics' Prize. The novel drew
          attention for its carefully designed structure and its exploration of
          identity, storytelling, and truth — a way of writing that would become
          central to his authorship.
        </>,
        <>
          From 1985 to 1989, Kjærstad was editor of Vinduet, Gyldendal's literary
          journal, helping shape literary debate through both editorial work and his
          own writing. Some of his contributions can be found digitally{" "}
          
          <a href="https://www.vinduet.no/bidragsytere/jan-kjaerstad"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            here
          </a>
          . From 1993 to 1997, he co-edited the journal BØK together with Jon Fosse.
        </>,
        <>
          From 1989 to 1991, Kjærstad lived with his family in Zimbabwe, an experience
          that opened up new ideas and perspectives — not least on Norway as a nation.
          This formed an important foundation for the trilogy he wrote about TV
          personality Jonas Wergeland:{" "}
          <BookLink link={{ to: "/bibliografi/forforeren" }}>The Seducer</BookLink>{" "}
          (1993),{" "}
          <BookLink link={{ to: "/bibliografi/erobreren" }}>The Conqueror</BookLink>{" "}
          (1996), and{" "}
          <BookLink link={{ to: "/bibliografi/oppdageren" }}>The Discoverer</BookLink>{" "}
          (1999). For The Discoverer he received the Nordic Council's Literature Prize.
        </>,
        <>
          In the 2000s, Kjærstad has continued to publish widely while also
          participating in public debate. His novel{" "}
          <BookLink link={{ to: "/bibliografi/berge" }}>Berge</BookLink> (2017) was
          named Book of the Year by VG. His most recent novels are{" "}
          <BookLink link={{ to: "/bibliografi/en-tid-for-a-leve" }}>
            A Time to Live
          </BookLink>{" "}
          (2021) and{" "}
          <BookLink link={{ to: "/bibliografi/valgdager" }}>Election Days</BookLink>{" "}
          (2024). In addition to four picture books for children, he has also published
          five essay collections. He is widely regarded as one of the most influential
          authors of his generation.
        </>,
      ],
    },
    title2: { no: "Biografiske artikler", en: "Biographical articles" },

    // Intro-tekstene under (lokaliserte, men selve artikkelen forblir engelsk)
    bioArticlesIntro: {
      no: {
        nbl: (
          <>
            Norsk biografisk leksikon har en utdypningsartikkel om forfatteren skrevet av Øystein
            Rottem. Du finner den{" "}
            <a
              href="https://nbl.snl.no/Jan_Kj%C3%A6rstad"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              her
            </a>{" "}
            (norsk).
          </>
        ),
        tara: (
          <>
            Tara F. Chance har også skrevet en biografisk artikkel om Kjærstad. Trykk{" "}
            <UiLink onClick={() => setIsDrawerOpen(true)}>her</UiLink> for å lese (engelsk).
          </>
        ),
      },
      en: {
        nbl: (
          <>
            Norsk biografisk leksikon has an in-depth article about the author, written by Øystein
            Rottem. You can find it{" "}
            <a
              href="https://nbl.snl.no/Jan_Kj%C3%A6rstad"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              here
            </a>{" "}
            (Norwegian).
          </>
        ),
        tara: (
          <>
            Tara F. Chance has also written a biographical article about Kjærstad. Click{" "}
            <UiLink onClick={() => setIsDrawerOpen(true)}>here</UiLink> to read it (English).
          </>
        ),
      },
    },
    title3: { no: "Monografi", en: "Monograph" },

    monograph: {
      no: {
        text: (
          <>
            Rikke Andersen Kraglund har gitt ut en monografi om Jan Kjærstad, som ganske enkelt
            heter <em>Kjærstad</em> (2018). Les NRKs omtale,{" "}
            <a
              href="https://www.nrk.no/kultur/innsiktsfullt-om-kjaerstads-metode-1.14387108"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              «Innsiktsfullt om Kjærstads metode»
            </a>
            .
          </>
        ),
        publisherLabel: "Ill.: Aarhus Universitetsforlag",
      },
      en: {
        text: (
          <>
            Rikke Andersen Kraglund has published a monograph on Jan Kjærstad, simply titled{" "}
            <em>Kjærstad</em> (2018). Read NRK's review,{" "}
            <a
              href="https://www.nrk.no/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              “Insightful on Kjærstad's method”
            </a>
            .
          </>
        ),
      },
    },
    title4: { no: "Priser", en: "Awards" },

    awards: {
      no: [
        {
          year: "2024",
          title: "Kommandør av St. Olavs Orden",
          description: "I 2024 ble Jan Kjærstad utnevnt til kommandør av St. Olavs Orden.",
        },
        {
          year: "2016",
          title: "Admiral Carl Hammerichs minnelegat",
          description: (
            <>
              Legatet deles ut av{" "}
              <a
                href="https://dansk-norsk.no/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                Fondet for dansk-norsk samarbeid
              </a>{" "}
              som en hedersgave til personer som i sitt virke bidrar eller har bidratt til økt
              forståelse og samarbeid mellom Danmark og Norge på kulturelle eller andre områder.
            </>
          ),
        },
        {
          year: "2013",
          title: (
            <a
              href="https://www.riksmalsforbundet.no/det-norske-akademis-pris/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Det Norske Akademis Pris
            </a>
          ),
        },
        {
          year: "2001",
          title: "Nordisk Råds Litteraturpris",
          description: (
            <>
              Jan Kjærstad fikk i 2001 Nordisk Råds Litteraturpris for{" "}
              <BookLink link={{ to: "/bibliografi/oppdageren" }}>Oppdageren</BookLink>, den siste
              romanen i trilogien om Jonas Wergeland.
            </>
          ),
        },
        {
          year: "2000",
          title: "Det svenske litteraturakademiets Dobloug-pris",
        },
        {
          year: "1998",
          title: (
            <a
              href="https://no.wikipedia.org/wiki/Henrik_Steffens-prisen"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Henrik Steffens-prisen
            </a>
          ),
          description:
            "Denne høythengende tyske prisen er en utmerkelse til skandinaver som på en fremragende måte har beriket europeisk kunst- og åndsliv. I utnevnelsen heter det blant annet at Jan Kjærstad er en av Norges viktigste forfattere og at han allerede har utgitt en rekke betydelige romaner, noveller og essays.",
        },
        {
          year: "1993",
          title: (
            <a
              href="https://no.wikipedia.org/wiki/Aschehougprisen"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Aschehougprisen
            </a>
          ),
        },
        {
          year: "1984",
          title: "Norsk Litteraturkritikerlags pris",
          description: (
            <>
              Mottok i 1984 Norsk Litteraturkritikerlags pris for{" "}
              <BookLink link={{ to: "/bibliografi/homo-falsus" }}>
                Homo Falsus eller Det perfekte mord
              </BookLink>
              .
            </>
          ),
        },
        {
          year: "1984",
          title: (
            <a
              href="https://no.wikipedia.org/wiki/Mads_Wiel_Nygaards_legat"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Mads Wiel Nygaards legat
            </a>
          ),
        },
      ],
      en: [
        {
          year: "2024",
          title: "Commander of the Order of St. Olav",
          description: "In 2024, Jan Kjærstad was appointed Commander of the Order of St. Olav.",
        },
        {
          year: "2016",
          title: "Admiral Carl Hammerich Memorial Grant",
          description: (
            <>
              The grant is awarded by{" "}
              <a
                href="https://dansk-norsk.no/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                the Danish–Norwegian Cooperation Fund
              </a>{" "}
              as an honorary gift to individuals who, through their work, contribute or have
              contributed to increased understanding and cooperation between Denmark and Norway in
              cultural or other fields.
            </>
          ),
        },
        {
          year: "2013",
          title: (
            <a
              href="https://www.riksmalsforbundet.no/det-norske-akademis-pris/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              The Norwegian Academy Prize
            </a>
          ),
        },
        {
          year: "2001",
          title: "Nordic Council’s Literature Prize",
          description: (
            <>
              In 2001, Jan Kjærstad received the Nordic Council’s Literature Prize for{" "}
              <BookLink link={{ to: "/bibliografi/oppdageren" }}>The Discoverer</BookLink>, the
              final novel in the Jonas Wergeland trilogy.
            </>
          ),
        },
        {
          year: "2000",
          title: "Dobloug Prize (Swedish Academy of Literature)",
        },
        {
          year: "1998",
          title: (
            <a
              href="https://no.wikipedia.org/wiki/Henrik_Steffens-prisen"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Henrik Steffens Prize
            </a>
          ),
          description:
            "A prestigious German prize awarded to Scandinavians who have made outstanding contributions to European arts and cultural life.",
        },
        {
          year: "1993",
          title: (
            <a
              href="https://no.wikipedia.org/wiki/Aschehougprisen"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Aschehoug Prize
            </a>
          ),
        },
        {
          year: "1984",
          title: "Norwegian Critics’ Association Prize",
          description: (
            <>
              Received in 1984 for{" "}
              <BookLink link={{ to: "/bibliografi/homo-falsus" }}>
                Homo Falsus, or The Perfect Murder
              </BookLink>
              .
            </>
          ),
        },
        {
          year: "1984",
          title: (
            <a
              href="https://no.wikipedia.org/wiki/Mads_Wiel_Nygaards_legat"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Mads Wiel Nygaards Grant
            </a>
          ),
        },
      ],
    },
  } as const;

  const _seo = {
    title: { no: "Biografi – Jan Kjærstad", en: "Biography – Jan Kjærstad" },
    description: {
      no: "Les om Jan Kjærstads liv, forfatterskap og priser. Norsk forfatter og vinner av Nordisk råds litteraturpris 2001.",
      en: "Read about Jan Kjærstad's life, works and awards. Norwegian author and winner of the Nordic Council's Literature Prize 2001.",
    },
  } as const;

  return (
    <>
      {/* Hero / portrett */}
      <div className="md:pb-10 pb-4 flex justify-center px-2 md:px-0">
        <div className="hidden sm:block">
          <img src="/images/hovedbilde-biografi-md.jpg" alt="portrett" />
        </div>
        <div className="sm:hidden">
          <img src="/images/hovedbilde-biografi.jpg" alt="portrett" />
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 mt-6 md:mt-4 mb-18">
          {/* Tittel */}
          <h2
            className="
              text-center
              text-2xl
              font-medium
              tracking-widest
              font-playfair
              mb-10
            "
          >
            {content.title1[lang]}
          </h2>

          {/* Tekst */}
          <div className="max-w-3xl mx-auto">
            <h3
              className="
                uppercase
                text-xl
                tracking-[0.12em]
                font-playfair-sc
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
                font-lora
                text-black
                space-y-6
              "
            >
              {content.paragraphs1[lang].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Bildeslider */}
            <ImageSlider />

            {/* Biografiske artikler (under slider) */}
            <h3
              className="
                uppercase
                text-xl
                tracking-[0.12em]
                font-playfair-sc
                md:mt-16
                mt-14
                mb-6
              "
            >
              {content.title2[lang]}
            </h3>

            <div
              className="
                text-base
                leading-6
                tracking-[0.04em]
                font-lora
                text-black
                space-y-4
                
              "
            >
              <p>{content.bioArticlesIntro[lang].nbl}</p>
              <p>{content.bioArticlesIntro[lang].tara}</p>
            </div>

            <Drawer
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              title="Tara F. Chance, University of Washington"
              subtitle={lang === "no" ? "Biografisk artikkel" : "Biographical article"}
            >
              {renderArticle(article)}
            </Drawer>

            {/* Monografi */}
            <h3
              className="
                uppercase
                text-xl
                tracking-[0.12em]
                font-playfair-sc
                mt-14
                md:mt-12
                mb-6
              "
            >
              {content.title3[lang]}
            </h3>

            {/* Tekst */}
            <div className="max-w-2xl">
              <p
                className="
                  text-base
                  leading-7
                  tracking-[0.04em]
                  font-lora
                  text-black
                "
              >
                {content.monograph[lang].text}
              </p>
            </div>

            <h3
              className="
              uppercase
              text-xl
              tracking-[0.12em]
              font-playfair-sc
              mt-14
              md:mt-12
              mb-6
            "
            >
              {content.title4[lang]}
            </h3>

            <AwardsTimeline items={content.awards[lang]} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Biografi;
