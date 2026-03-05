import { useLanguage } from "../context/LanguageContext"
import { Download, X } from "lucide-react"
import { useState } from "react"
import SEO from "../components/SEO"

const photos = [
  {
    src: "/images/press/jkfr2.jpg",
    photographer: "Fartein Rudjord",
    photographerLink: "https://www.farteinrudjord.net/",
    downloadHref: "/images/press/Jan-Kjaerstad-7.zip",
    size: "7797 × 5198 px",
    ppi: "300 ppi – RGB",
  },
  {
    src: "/images/press/jkfr1.jpg",
    photographer: "Fartein Rudjord",
    photographerLink: "https://www.farteinrudjord.net/",
    downloadHref: "/images/press/Jan-Kjaerstad-6.zip",
    size: "3922 × 5894 px",
    ppi: "300 ppi – RGB",
  },
  {
    src: "/images/press/jkcl.jpg",
    photographer: "Cato Lein",
    photographerLink: "https://www.facebook.com/profile.php?id=100028312313728#",
    downloadHref: "/images/press/Jan-Kjaerstad-3.zip",
    size: "3328 × 4383 px",
    ppi: "250 ppi – RGB",
  },
  {
    src: "/images/press/jkmm.jpg",
    photographer: "Mimsy Møller",
    photographerLink: "https://en.wikipedia.org/wiki/Mimsy_M%C3%B8ller",
    downloadHref: "/images/press/Jan-Kjaerstad-1.zip",
    size: "3407 × 5120 px",
    ppi: "300 ppi – RGB",
  },
  {
    src: "/images/press/jkjm.jpg",
    photographer: "Jo Michael",
    photographerLink: "https://www.jomichael.com/",
    downloadHref: "/images/press/Jan-Kjaerstad-4.zip",
    size: "2973 × 4281 px",
    ppi: "267 ppi – Gråtoner",
  },
  {
    src: "/images/press/jkmfs.png",
    photographer: "Mette F. Solheim",
    photographerLink: "",
    downloadHref: "/images/press/Jan-Kjaerstad-5.zip",
    size: "800 × 534 px",
    ppi: "72 ppi – RGB",
  },
]

type Photo = typeof photos[number]

export default function Pressemateriale() {
  const { lang } = useLanguage()
  const [selected, setSelected] = useState<Photo | null>(null)

  const seo = {
    title: { no: "Pressemateriale – Jan Kjærstad", en: "Press Material – Jan Kjærstad" },
    description: {
      no: "Pressemateriale og pressebilder for journalister og medier om Jan Kjærstad.",
      en: "Press material and press photos for journalists and media about Jan Kjærstad.",
    },
  } as const

  return (
    <section className="bg-white">
      <SEO title={seo.title[lang]} description={seo.description[lang]} path="/pressemateriale" />
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 mt-2 md:mt-4 mb-18">

        <h2 className="
          text-center text-[20px] sm:text-2xl font-medium tracking-widest
          font-['Playfair_Display',serif] mb-8 md:mb-10
        ">
          {lang === "no" ? "Pressemateriale" : "Press material"}
        </h2>

        <p className="text-base leading-7 tracking-[0.04em] font-['Lora',serif] text-black mb-12">
          {lang === "no" ? (
            <>
              Tekst og bilder som lastes ned fra denne siden, kan benyttes fritt i forbindelse med artikler, intervjuer, anmeldelser og annen informasjon relatert til forfatteren. Materialet er stilt til rådighet av{" "}
              <a href="https://aschehoug.no/" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition">H. Aschehoug & Co</a>
              {" "}og Aschehoug Agency (nå{" "}
              <a href="https://osloliteraryagency.no/" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition">Oslo Literary Agency</a>
              ).
            </>
          ) : (
            <>
              Text and images downloaded from this page may be used freely in connection with articles, interviews, reviews and other information related to the author. The material is provided by{" "}
              <a href="https://aschehoug.no/" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition">H. Aschehoug & Co</a>
              {" "}and Aschehoug Agency (now{" "}
              <a href="https://osloliteraryagency.no/" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition">Oslo Literary Agency</a>
              ).
            </>
          )}
        </p>

        <h3 className="uppercase text-xl tracking-[0.12em] font-['Playfair_Display_SC',serif] mb-6">
          {lang === "no" ? "Pressefoto" : "Press photos"}
        </h3>

        <p className="text-sm font-['Lora',serif] tracking-[0.04em] text-black/60 mb-6">
          {lang === "no" ? "Trykk på bildene for å se dem ubeskåret og få mer informasjon. Fotografene må krediteres." : "Click the photos to view them in full size and get more information. Photographers must be credited."}
        </p>

        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo) => (
            <button
              key={photo.src}
              onClick={() => setSelected(photo)}
              className="group relative block overflow-hidden text-left"
            >
              <img
                src={photo.src}
                alt={`Foto: ${photo.photographer}`}
                className="w-full h-64 sm:h-80 md:h-90 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="
                absolute inset-0 bg-black/0 group-hover:bg-black/40
                transition-all duration-300 flex items-center justify-center
              ">
                <span className="
                  text-white text-sm font-['Lora',serif] tracking-[0.06em]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ">
                  {lang === "no" ? "Se info" : "View info"}
                </span>
              </div>
              <p className="mt-2 text-sm font-['Lora',serif] tracking-[0.04em] text-black/50">
                © {photo.photographer}
              </p>
            </button>
          ))}
        </div>

        <h3 className="uppercase text-xl tracking-[0.12em] font-['Playfair_Display_SC',serif] mt-12 mb-6">
          {lang === "no" ? "Brosjyre" : "Pamphlet"}
        </h3>

        <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start mb-12">

          {/* Bilde – vises under tekst på xs, til høyre på sm+ */}
          <div className="order-2 shrink-0 mt-6 sm:mt-0 flex flex-col items-center sm:items-start">
            <img
              src="/images/press/brosjyre.png"
              alt=""
              className="w-40 h-auto"
            />
            {/* Last ned – kun på xs */}
            <p className="sm:hidden mt-2 text-sm font-['Lora',serif] tracking-[0.04em] text-black/60">
              <a
                href="/images/press/Walker-pamphlet.zip"
                download
                className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
              >
                {lang === "no" ? "Last ned PDF" : "Download PDF"}
              </a>
            </p>
          </div>

          {/* Tekst – vises først på xs, til venstre på sm+ */}
          <div className="order-1">
            <p className="text-base leading-7 tracking-[0.04em] font-['Lora',serif] text-black">
              {lang === "no" ? (
                <>
                  Aschehoug Agency har gitt ut en 19 siders brosjyre med informasjon om, og utdrag fra,{" "}
                  <a href="/bibliografi/jeg-er-brodrene-walker" className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"><em>Jeg er brødrene Walker</em></a>
                  . Brosjyren er på engelsk.
                </>
              ) : (
                <>
                  Aschehoug Agency has published a 19-page pamphlet with information about and excerpts from{" "}
                  <a href="/bibliografi/jeg-er-brodrene-walker" className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"><em>I Am the Brothers Walker</em></a>
                  . The pamphlet is in English.
                </>
              )}
            </p>
            {/* Last ned – kun på sm+ */}
            <p className="hidden sm:block mt-3 text-sm font-['Lora',serif] tracking-[0.04em] text-black/60">
              <a
                href="/images/press/Walker-pamphlet.zip"
                download
                className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
              >
                {lang === "no" ? "Last ned PDF" : "Download PDF"}
              </a>
            </p>
          </div>

        </div>

      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white shadow-2xl w-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selected.src}
                alt={`Foto: ${selected.photographer}`}
                style={{ maxHeight: "calc(95dvh - 160px)" }}
                className="w-auto block"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded p-1"
                aria-label="Lukk"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-3">
              <p className="font-['Playfair_Display',serif] text-lg">
                ©{" "}
                {selected.photographerLink ? (
                  <a
                    href={selected.photographerLink}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
                  >
                    {selected.photographer}
                  </a>
                ) : (
                  selected.photographer
                )}
              </p>
              <p className="text-sm font-['Lora',serif] tracking-[0.04em] text-black/60">
                {selected.size}
              </p>
              <p className="text-sm font-['Lora',serif] tracking-[0.04em] text-black/60">
                {selected.ppi}
              </p>
              
                <a href={selected.downloadHref}
                download
                className="
                  inline-flex items-center gap-2 mt-2
                  text-sm font-['Lora',serif] tracking-[0.04em]
                  underline underline-offset-4 hover:opacity-70
                "
              >
                <Download size={14} />
                {lang === "no" ? "Last ned zip" : "Download zip"}
              </a>
            </div>
          </div>

        </div>
      )}
    </section>
  )
}