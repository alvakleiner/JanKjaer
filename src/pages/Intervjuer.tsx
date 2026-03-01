import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import SEO from "../components/SEO"
import Drawer, { renderArticle } from "../components/Drawer"
import mmInterview from "../content/intervju/mmInterview"
import tegnTilKjaerlighet from "../content/intervju/tegnTilKjaerlighet"

export default function Intervjuer() {
  const { lang } = useLanguage()
  const [bokvennenOpen, setBokvennenOpen] = useState(false)
  const [lundbergOpen, setLundbergOpen] = useState(false)

  const paragraphs = {
    no: [
      "Et avispapir gulner og vitner om tidens tann; et digitalt dokument ser alltid like ferskt ut. På denne siden finner du intervjuer samt lenker til eksterne nettsider med Kjærstad-intervjuer. Noen av dem har noen år på nakken, men ta reisen, les eller lytt til intervjuene, lær av dem eller forkast dem, se på dem som evige sannheter eller som historiske dokumenter.",
    ],
    en: [
      "A newspaper yellows and bears witness to the ravages of time; a digital document always looks equally fresh. On this page you will find interviews as well as links to external websites featuring Kjærstad interviews. Some of them are a few years old, but take the journey, read or listen to the interviews, learn from them or dismiss them, see them as eternal truths or as historical documents.",
    ],
  }

  const seo = {
    title: { no: "Intervjuer – Jan Kjærstad", en: "Interviews – Jan Kjærstad" },
    description: {
      no: "Utvalgte intervjuer med Jan Kjærstad om forfatterskap, bøker og litteratur.",
      en: "Selected interviews with Jan Kjærstad about writing, books and literature.",
    },
  } as const

  return (
    <section className="bg-white">
      <SEO title={seo.title[lang]} description={seo.description[lang]} path="/intervjuer" />
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 mt-2 md:mt-4 mb-18">

        <h2
          className="
            text-center
            text-[20px]
            sm:text-2xl
            font-medium
            tracking-widest
            font-['Playfair_Display',serif]
            mb-8 md:mb-10
          "
        >
          {lang === "no" ? "Intervjuer" : "Interviews"}
        </h2>

        <div className="float-right ml-8 mb-4 mt-2 flex flex-col items-center">
          <img
            src="/images/press/jkcl.jpg"
            alt="Jan Kjærstad"
            className="w-48 md:w-56 h-auto object-cover"
          />
          <p className="text-sm tracking-[0.04em] font-['Lora',serif] text-black/70 mt-2 self-start">
            <a
              href="/pressemateriale"
              className="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-700 transition"
            >
              Foto: Cato Lein
            </a>
          </p>
        </div>

        <div className="
          text-base
          leading-7
          tracking-[0.04em]
          font-['Lora',serif]
          text-black
          space-y-6
        ">
          {paragraphs[lang].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <h3
          className="
            uppercase
            text-lg
            tracking-[0.12em]
            font-['Playfair_Display_SC',serif]
            mt-10
            mb-4
          "
        >
          Books as Sharp as Knives
        </h3>

        <div className="border-l-2 border-black/10 pl-5">
          <p className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black">
            <a
              href="https://channel.louisiana.dk/video/jan-kjaerstad-books-as-sharp-as-knives"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
            >
              {lang === "no" ? "Video-intervju" : "Video interview"}
            </a>
            {lang === "no"
              ? " med forfatteren fra Louisiana Literature festival, 2018."
              : " with the author on Louisiana Channel. English subtitles."}
          </p>
        </div>

        <h3
          className="
            uppercase
            text-lg
            tracking-[0.12em]
            font-['Playfair_Display_SC',serif]
            mt-10
            mb-4
          "
        >
          «Jeg har nok for lengst skrevet min beste roman»
        </h3>

        <div className="border-l-2 border-black/10 pl-5">
          <p className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black">
            {lang === "no" ? (
              <>
                Trykk{" "}
                <button
                  type="button"
                  onClick={() => setBokvennenOpen(true)}
                  className="underline underline-offset-4 cursor-pointer hover:opacity-80 focus:outline-none"
                >
                  her
                </button>
                {" "}for å vise intervju av Marius Fossøy Mohaugen og Kristian Meisingset i Bokvennen, 2014.
              </>
            ) : (
              <>
                Click{" "}
                <button
                  type="button"
                  onClick={() => setBokvennenOpen(true)}
                  className="underline underline-offset-4 cursor-pointer hover:opacity-80 focus:outline-none"
                >
                  here
                </button>
                {" "}to read the interview by Marius Fossøy Mohaugen and Kristian Meisingset in Bokvennen, 2014. (Only available in Norwegian)
              </>
            )}
          </p>
        </div>

        <h3
          className="
            uppercase
            text-lg
            tracking-[0.12em]
            font-['Playfair_Display_SC',serif]
            mt-10
            mb-4
          "
        >
          {lang === "no" ? "Samtale med Isabella Miehe-Renard" : "Conversation with Isabella Miehe-Renard"}
        </h3>

        <div className="border-l-2 border-black/10 pl-5">
          <p className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black">
            <a
              href="https://www.youtube.com/watch?v=1FSrH-AGgrs"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
            >
              {lang === "no" ? "Video-intervju" : "Video interview"}
            </a>
            {lang === "no" ? (
              <> om boken <em>Jeg er brødrene Walker</em> på International Forfatterscene, Den Sorte Diamant, Det Kongelige Bibliotek i Danmark, 2009.</>
            ) : (
              <> about the book <em>I am the Walker Brothers</em> at the International Author Stage, The Black Diamond, The Royal Library of Denmark, 2009.</>
            )}
          </p>
        </div>

        <h3
          className="
            uppercase
            text-lg
            tracking-[0.12em]
            font-['Playfair_Display_SC',serif]
            mt-10
            mb-4
          "
        >
          {lang === "no" ? "Kjærstad gjør det umulige" : "Kjærstad Does the Impossible"}
        </h3>

        <div className="border-l-2 border-black/10 pl-5">
          <p className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black">
            {lang === "no" ? (
              <>
                Klikk{" "}
                <button
                  type="button"
                  onClick={() => setLundbergOpen(true)}
                  className="underline underline-offset-4 cursor-pointer hover:opacity-80 focus:outline-none"
                >
                  her
                </button>
                {" "}for å vise intervju med Trond Lundberg. Første gang publisert i Aschehoug informerer, 2002.
              </>
            ) : (
              <>
                Click{" "}
                <button
                  type="button"
                  onClick={() => setLundbergOpen(true)}
                  className="underline underline-offset-4 cursor-pointer hover:opacity-80 focus:outline-none"
                >
                  here
                </button>
                {" "}to read the interview with Trond Lundberg. First published in Aschehoug informerer, 2002. (Only available in Norwegian)
              </>
            )}
          </p>
        </div>

        <h3
          className="
            uppercase
            text-lg
            tracking-[0.12em]
            font-['Playfair_Display_SC',serif]
            mt-10
            mb-4
          "
        >
          {lang === "no" ? "Spørsmål og svar" : "Questions and Answers"}
        </h3>

        <div className="border-l-2 border-black/10 pl-5">
          <p className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black">
            {lang === "no" ? (
              <>
                Dagbladet inviterte i 1999 Kjærstad til sin nettutgave for å svare på spørsmål fra leserne.{" "}
                <a
                  href="https://www.dagbladet.no/kultur/kjaerstad-pa-nettet/65521172"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
                >
                  Det første møtet
                </a>
                {" "}var så vellykket at det ble arrangert{" "}
                <a
                  href="https://www.dagbladet.no/kultur/jan-kjaerstad-motte-leserne-pa-nettet/65579913"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
                >
                  ett nytt møte
                </a>
                . Fire timer med over førti spørsmål og svar var resultatet andre gang.
              </>
            ) : (
              <>
                In 1999, Dagbladet invited Kjærstad to their online edition to answer questions from readers.{" "}
                <a
                  href="https://www.dagbladet.no/kultur/kjaerstad-pa-nettet/65521172"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
                >
                  The first meeting
                </a>
                {" "}was so successful that{" "}
                <a
                  href="https://www.dagbladet.no/kultur/jan-kjaerstad-motte-leserne-pa-nettet/65579913"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
                >
                  a new meeting
                </a>
                {" "}was arranged. Four hours with over forty questions and answers was the result the second time.
              </>
            )}
          </p>
        </div>

        <Drawer
          open={lundbergOpen}
          onClose={() => setLundbergOpen(false)}
          title={lang === "no" ? "Kjærstad gjør det umulige" : "Kjærstad Does the Impossible"}
          subtitle={lang === "no" ? "Aschehoug informerer, 2002" : "Aschehoug informerer, 2002"}
        >
          {renderArticle(tegnTilKjaerlighet)}
        </Drawer>

        <Drawer
          open={bokvennenOpen}
          onClose={() => setBokvennenOpen(false)}
          title="«Jeg har nok for lengst skrevet min beste roman»"
          subtitle="Bokvennen, 2014"
        >
          {renderArticle(mmInterview)}
        </Drawer>

        <div className="mt-12">
          <img
            src="/images/jk-pc.jpg"
            alt=""
            className="w-full h-auto"
          />
          <p className="text-sm tracking-[0.04em] font-['Lora',serif] text-black/70 mt-4">
            Foto: Rolf Øhman
          </p>
        </div>

      </div>
    </section>
  )
}
