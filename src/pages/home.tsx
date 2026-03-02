import { useLanguage } from "../context/LanguageContext"
import BookLink from "../components/BookLink"
import SEO from "../components/SEO"

const books = [
  { title: "Menneskets bølger", year: "2022", src: "/images/menneskets-bolger.jpg", href: "/bibliografi/menneskets-bolger" },
  { title: "En tid for å leve", year: "2021", src: "/images/en-tid-for-a-leve.jpg", href: "/bibliografi/en-tid-for-a-leve" },
  { title: "Mr Woolf", year: "2019", src: "/images/mr-woolf.jpg", href: "/bibliografi/mr-woolf" },
  { title: "Berge", year: "2017", src: "/images/berge.jpg", href: "/bibliografi/berge" },
]

function Home() {
    const { lang } = useLanguage()

    const content = {
        title: { no: "Nylige utgivelser", en: "Latest releases" },
        bookTitle: { no: "Valgdager (2024)", en: "Election Days (2024)" },
        paragraphs: {
        no: [
            "En sommerdag på Youngstorget, 1959. En liten gutt får en plomme og en femøring av statsminister Einar Gerhardsen. Mynten kjennes så behagelig i hånden, munnen renner nesten over av plommesaft. Gutten får en åpenbaring: én dag skal han bli en rik mann.",
            "Femøringen er fra den flunkende nye myntserien til kong Olav, antakelig verdens vakreste, med dyremotiver på den ene siden. Må du ikke da få en kjærlighet til penger? Og må ikke denne mynten gjøre deg uovervinnelig når du kaster på stikka?",
            "Hvordan kan man nå høyt opp og langt fram når man egentlig er utrygg og vil holde seg skjult for verden? Kan man grunnlegge sin rikdom på en femøring man har fått av Landsfaderen?",
        ],
        en: [
            "A summer day at Oslo's main square, 1959. A little boy receives a plum and a small coin from the Prime Minister, Einar Gerhardsen. The coin feels so pleasant in his hand, his mouth almost overflows with plum juice. The boy has a revelation: one day he will become a rich man.",
            "Election Days follows the life story of a private investor from the suburb of Groruddalen. The novel is built around six parliamentary elections, and in each part, an apartment, a house, or a cabin plays a central role. And a woman.",
            "How can you reach great heights and go far when you are essentially insecure and want to stay hidden from the world? Can one build wealth on a coin given by the Father of the Nation?",
        ],
        },
    } as const

    const seo = {
        title: {
            no: "Jan Kjærstad – Storyteller",
            en: "Jan Kjærstad – Storyteller",
        },
        description: {
            no: "Jan Kjærstad er en av Norges fremste romanforfattere, kjent for Jonas Wergeland-trilogien og Nordisk råds litteraturpris 2001.",
            en: "Jan Kjærstad is one of Norway's foremost novelists, known for the Jonas Wergeland trilogy and the Nordic Council's Literature Prize 2001.",
        },
    } as const

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Jan Kjærstad",
        url: "https://jankjaerstad.no",
        birthDate: "1953-03-06",
        birthPlace: { "@type": "Place", name: "Oslo, Norway" },
        nationality: "Norwegian",
        jobTitle: "Novelist",
        award: [
            "Nordisk råds litteraturpris (2001)",
            "Det Norske Akademis Pris (2013)",
            "Kommandør av St. Olavs Orden (2024)",
        ],
        sameAs: ["https://nbl.snl.no/Jan_Kj%C3%A6rstad"],
    }

    return (
        <>
            <SEO
                title={seo.title[lang]}
                description={seo.description[lang]}
                path="/"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero / portrett */}
            <div className="md:pb-10 pb-4 flex justify-center">
                <div className="hidden sm:block">
                    <img src="/images/pappa.jpg" alt="portrett" />
                </div>
                <div className="sm:hidden">
                    <img src="/images/pappa-sm.jpg" alt="portrett" />
                </div>
            </div>
            <section className="bg-white">
                <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-8">
                    {/* Tittel */}
                    <h2 className="
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

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 md:gap-14 items-center">

                    {/* Bok – rett under tittelen på mobil */}
                    <div className="flex justify-center order-1 md:order-2 md:justify-end">
                        <BookLink href="/bibliografi/valgdager" className="no-underline">
                            <img
                            src="/images/valgdager-3d.png"
                            alt="Valgdager (2024) - bokcover"
                            className="w-56 md:w-72 lg:w-64 h-auto object-contain"
                            />
                        </BookLink>
                    </div>

                    {/* Tekst */}
                    <div className="order-2 md:order-1">
                        <h3
                            className="
                                uppercase
                                text-xl
                                tracking-[0.12em]
                                font-['Playfair_Display_SC',serif]
                                mb-6
                            "
                        >
                            <BookLink
                                href="/bibliografi/valgdager"
                                className="sm:no-underline decoration-[0.7px]"
                            >
                                {content.bookTitle[lang]}
                            </BookLink>
                        </h3>
                        <div className="
                            text-base
                            leading-6
                            tracking-[0.04em]
                            font-['Lora',serif]
                            text-black
                            space-y-6
                        "
                        >
                            {content.paragraphs[lang].map((p) => (
                                <p key={p}>{p}</p>
                            ))}
                        </div>
                    </div>

                    </div>
                </div>
            </section>
            <section className="mt-16 mb-20">
                <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-8 xl:px-10">

                    {/* < 800px: scroller */}
                    <div className="min-[800px]:hidden">
                    <div className="overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch]">
                        <div className="flex w-max min-w-full justify-center gap-6 px-6 snap-x snap-mandatory">
                            {books.map((b) => (
                                <div key={b.year} className="flex-none snap-start w-40">
                                    <div className="flex flex-col items-center">
                                    <BookLink href={b.href} className="no-underline">
                                        <img
                                        src={b.src}
                                        alt={b.title}
                                        className="w-40 h-auto object-contain"
                                        />
                                    </BookLink>

                                    <span className="mt-5 text-sm tracking-[0.12em] font-['Playfair_Display_SC',serif]">
                                        {b.year}
                                    </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>

                    {/* ≥ 800px: grid (4 på samme rad) */}
                    <div className="hidden min-[800px]:grid grid-cols-4 justify-items-center gap-4 min-[900px]:gap-6 lg:gap-8">
                        {books.map((b) => (
                            <div key={b.year} className="flex flex-col items-center">
                                <BookLink href={b.href} className="no-underline">
                                <img
                                    src={b.src}
                                    alt={b.title}
                                    className="h-auto object-contain w-[clamp(120px,14vw,176px)]"
                                />
                                </BookLink>

                                <span className="mt-6 text-sm tracking-[0.12em] font-['Playfair_Display_SC',serif]">
                                    {b.year}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
  )
}

export default Home

