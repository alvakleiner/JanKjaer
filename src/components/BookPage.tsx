import { useLanguage } from "../context/LanguageContext"

export type BookQuote = {
  text: string
  source: string
  diceImg?: string
}

export type BookPageContent = {
  title: { no: string; en: string }
  meta: { no: string; en: string }
  buyLink?: {
    no: { label: string; href: string }
    en: { label: string; href: string }
  }
  coverImage: { src: string; alt?: { no: string; en: string } }
  quotesTitle: { no: string; en: string }
  quotes: BookQuote[]
  paragraphs: { no: string[]; en: string[] }
}

// ─── Body (title, cover image, paragraphs) ───────────────────────────────────

type BookPageBodyProps = {
  content: Pick<BookPageContent, "title" | "meta" | "buyLink" | "coverImage" | "paragraphs">
}

export function BookPageBody({ content }: BookPageBodyProps) {
  const { lang } = useLanguage()
  const buy = content.buyLink?.[lang]

  return (
    <>
      <h2
        className="
          text-center
          text-2xl
          font-medium
          tracking-widest
          font-['Playfair_Display',serif]
          mb-2
        "
      >
        {content.title[lang]}
      </h2>

      <p className="text-center text-sm tracking-[0.08em] text-neutral-500 font-['Lora',serif] mb-10">
        {content.meta[lang]}
      </p>

      {/* Cover image */}
      <div className="flex flex-col items-center md:float-right md:ml-10 md:mb-4 mb-8">
        <img
          src={content.coverImage.src}
          alt={content.coverImage.alt?.[lang] ?? content.title[lang]}
          className="w-44 md:w-48 md:mt-4 h-auto object-contain"
        />

        {buy && (
          <a
            href={buy.href}
            target="_blank"
            rel="noreferrer"
            className="
              mt-3
              mb-2
              md:mb-0
              text-sm
              tracking-[0.06em]
              font-['Lora',serif]
              text-neutral-600
              underline
              underline-offset-4
              decoration-neutral-400
              hover:text-black
              hover:decoration-neutral-800
              transition
            "
          >
            {buy.label}
          </a>
        )}
      </div>

      {/* Body text */}
      <div className="
        text-base
        leading-7
        tracking-[0.04em]
        font-['Lora',serif]
        text-black
        space-y-6
      ">
        {content.paragraphs[lang].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="clear-both" />
      </div>
    </>
  )
}

// ─── Quotes ──────────────────────────────────────────────────────────────────

type BookPageQuotesProps = {
  content: Pick<BookPageContent, "quotesTitle" | "quotes">
}

export function BookPageQuotes({ content }: BookPageQuotesProps) {
  const { lang } = useLanguage()

  return (
    <>
      <h3
        className="
          uppercase
          text-xl
          tracking-[0.12em]
          font-['Playfair_Display_SC',serif]
          mt-14
          md:mt-10
          mb-6
        "
      >
        {content.quotesTitle[lang]}
      </h3>

      <div className="space-y-8">
        {content.quotes.map((q, i) => (
          <div key={i} className="border-l-2 border-black/10 pl-5">
            <p className="
              font-['Lora',serif]
              text-base
              leading-7
              tracking-[0.04em]
              text-black
              italic
            ">
              {q.text}
            </p>
            <div className="flex items-center gap-3 mt-2">
              {q.diceImg && (
                <img
                  src={q.diceImg}
                  alt="Terningkast"
                  className="h-7 w-auto shrink-0"
                />
              )}
              <p className="
                text-sm
                tracking-[0.08em]
                font-['Lora',serif]
                text-neutral-500
              ">
                {q.source}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Default export (brukes når du ikke trenger noe i mellom) ─────────────────

type BookPageProps = {
  content: BookPageContent
}

export default function BookPage({ content }: BookPageProps) {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">
        <BookPageBody content={content} />
        <BookPageQuotes content={content} />
      </div>
    </section>
  )
}