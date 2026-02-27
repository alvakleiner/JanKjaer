import Collage from "../components/Collage"
import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"

const books = {
  en: [
    { title: "Election Days", meta: "Novel (2024)", slug: "valgdager" },
    { title: "The Human Waves", meta: "Essays (2022)", slug: "menneskets-bolger" },
    { title: "A Time to Live", meta: "Novel (2021)", slug: "en-tid-for-a-leve" },
    { title: "Mr Woolf", meta: "Novel (2019)", slug: "mr-woolf" },
    { title: "Berge", meta: "Novel (2017)", slug: "berge" },
    { title: "The Path of Kins", meta: "Novel (2015)", slug: "slekters-gang" },
    { title: "The Human Width", meta: "Essays (2013)", slug: "menneskets-vidde" },
    { title: "Stein Becomes a Captain", meta: "Picture book (2012)", slug: "stein-blir-kaptein" },
    { title: "Norman's Area", meta: "Novel (2011)", slug: "normans-omraade" },
    { title: "I Am The Walker Brothers", meta: "Novel (2008)", slug: "jeg-er-brodrene-walker" },
    { title: "Miranda's Treasury", meta: "Picture book (2008)", slug: "mirandas-skattkammer" },
    { title: "The Matrix of Kjærstad", meta: "Essay collection (2007)", slug: "kjaerstads-matrise" },
    { title: "The King of Europe", meta: "Novel (2005)", slug: "kongen-av-europa" },
    { title: "The Human Web", meta: "Essays (2004)", slug: "menneskets-nett" },
    { title: "Signs of Love", meta: "Novel (2002)", slug: "tegn-til-kjaerlighet" },
    { title: "The Discoverer", meta: "Novel (1999)", slug: "oppdageren" },
    { title: "The Human Sphere", meta: "Essays (1997)", slug: "menneskets-felt" },
    { title: "The Conqueror", meta: "Novel (1996)", slug: "erobreren" },
    { title: "The World of Scheherazade, Queen of Tales", meta: "Picture book (1995)", slug: "hos-sheherasad-fantasiens-dronning" },
    { title: "The Seducer", meta: "Novel (1993)", slug: "forforeren" },
    { title: "Brink", meta: "Novel (1990)", slug: "rand" },
    { title: "The Hunt for the Hidden Waffle Hearts", meta: "Picture book (1989/2005)", slug: "jakten-paa-de-skjulte-vaffelhjertene" },
    { title: "The Arabian Nights (Ed.)", meta: "(1989)"},
    { title: "The Matrix of Man", meta: "Essays (1989)", slug: "menneskets-matrise" },
    { title: "The Great Fairy Tale", meta: "Novel (1987)", slug: "det-store-eventyret" },
    { title: "Homo Falsus or The Perfect Murder", meta: "Novel (1984)", slug: "homo-falsus" },
    { title: "Mirrors", meta: "Novel (1982)", slug: "speil" },
    { title: "The Earth Turns Quietly", meta: "Short stories (1980)", slug: "kloden-dreier-stille-rundt" },
  ],

  no: [
    { title: "Valgdager", meta: "Roman (2024)", slug: "valgdager" },
    { title: "Menneskets bølger", meta: "Essays (2022)", slug: "menneskets-bolger" },
    { title: "En tid for å leve", meta: "Roman (2021)", slug: "en-tid-for-a-leve" },
    { title: "Mr. Woolf", meta: "Roman (2019)", slug: "mr-woolf" },
    { title: "Berge", meta: "Roman (2017)", slug: "berge" },
    { title: "Slekters gang", meta: "Roman (2015)", slug: "slekters-gang" },
    { title: "Menneskets vidde", meta: "Essays (2013)", slug: "menneskets-vidde" },
    { title: "Stein blir kaptein", meta: "Bildebok (2012)", slug: "stein-blir-kaptein" },
    { title: "Normans område", meta: "Roman (2011)", slug: "normans-omraade" },
    { title: "Jeg er brødrene Walker", meta: "Roman (2008)", slug: "jeg-er-brodrene-walker" },
    { title: "Mirandas skattkammer", meta: "Bildebok (2008)", slug: "mirandas-skattkammer" },
    { title: "Kjærstads matrise", meta: "Samlede essays med bonusspor (2007)", slug: "kjaerstads-matrise" },
    { title: "Kongen av Europa", meta: "Roman (2005)", slug: "kongen-av-europa" },
    { title: "Menneskets nett", meta: "Essays (2004)", slug: "menneskets-nett" },
    { title: "Tegn til kjærlighet", meta: "Roman (2002)", slug: "tegn-til-kjaerlighet" },
    { title: "Oppdageren", meta: "Roman (1999)", slug: "oppdageren" },
    { title: "Menneskets felt", meta: "Essays (1997)", slug: "menneskets-felt" },
    { title: "Erobreren", meta: "Roman (1996)", slug: "erobreren" },
    { title: "Hos Sheherasad, fantasiens dronning", meta: "Bildebok (1995)", slug: "hos-sheherasad-fantasiens-dronning" },
    { title: "Forføreren", meta: "Roman (1993)", slug: "forforeren" },
    { title: "Rand", meta: "Roman (1990)", slug: "rand" },
    { title: "Jakten på de skjulte vaffelhjertene", meta: "Bildebok (1989/2005)", slug: "jakten-paa-de-skjulte-vaffelhjertene" },
    { title: "Tusen og en natt", meta: "(1989)"},
    { title: "Menneskets matrise", meta: "Essays (1989)", slug: "menneskets-matrise" },
    { title: "Det store eventyret", meta: "Roman (1987)", slug: "det-store-eventyret" },
    { title: "Homo Falsus eller Det perfekte mord", meta: "Roman (1984)", slug: "homo-falsus" },
    { title: "Speil", meta: "Roman (1982)", slug: "speil" },
    { title: "Kloden dreier stille rundt", meta: "Noveller (1980)", slug: "kloden-dreier-stille-rundt" },
  ],
}

const publisherNote = {
  no: (
    <>
      Alle Jan Kjærstads bøker er utgitt av H. Aschehoug & Co (W. Nygaard), med unntak av:
      <div className="h-2"/>
      Stein blir kaptein (Gyldendal), Mirandas skattkammer (Magikon), Hos Sheherasad,
      fantasiens dronning (N.W. Damm & Søn), og Tusen og en natt 1-2 (De norske bokklubbene).
    </>
  ),
  en: (
    <>
      All books by Jan Kjærstad are published by H. Aschehoug & Co (W. Nygaard), with the exception of:
      <div className="h-2"/>
      Stein blir kaptein (Gyldendal), Mirandas skattkammer (Magikon), Hos Sheherasad,
      fantasiens dronning (N.W. Damm & Søn), and Tusen og en natt 1-2 (De norske bokklubbene).
    </>
  ),
}

export default function Bibliografi() {
  const { lang } = useLanguage()
  const isEn = lang === "en"
  const list = isEn ? books.en : books.no

  return (
    <section className="bg-white">
      <Collage />
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
          {isEn ? "Bibliography" : "Bibliografi"}
        </h2>

        <div
          className="
            text-center
            font-['Playfair_Display',serif]
            text-[14px]
            sm:text-[16px]
            leading-8
          "
        >
          {list.map((book, i) => (
            <div key={i} className="py-1">
              {book.slug ? (
                <Link
                  to={`/bibliografi/${book.slug}`}
                  className="
                    underline
                    underline-offset-4
                    decoration-neutral-400
                    decoration-1
                    hover:decoration-neutral-800
                    transition
                    text-gray-700
                    hover:text-black
                  "
                >
                  {book.title} - {book.meta}
                </Link>
              ) : (
                <span className="text-gray-700">
                  {book.title} - {book.meta}
                </span>
              )}
            </div>
          ))}
            <div
                className="
                    mt-14
                    text-center
                    font-['Playfair_Display',serif]
                    text-[14px]
                    sm:text-[16px]
                    leading-7
                    text-neutral-600
                "
                >
                {lang === "en" ? publisherNote.en : publisherNote.no}
            </div>
        </div>
      </div>
    </section>
  )
}
