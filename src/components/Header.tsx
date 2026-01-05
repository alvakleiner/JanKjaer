import { useEffect, useRef, useState } from "react"
import { Search, Globe, Menu, Check } from "lucide-react"
import { useLanguage } from "../context/LanguageContext" // <- juster sti ved behov

const navLinks = [
  { key: "bio", href: "/biografi", label: { no: "Biografi", en: "Biography" } },
  { key: "biblio", href: "/bibliografi", label: { no: "Bibliografi", en: "Bibliography" } },
  { key: "intervjuer", href: "/intervjuer", label: { no: "Intervjuer", en: "Interviews" } },
  { key: "galleri", href: "/galleri", label: { no: "Galleri", en: "Gallery" } },
  { key: "kontakt", href: "/kontakt", label: { no: "Kontakt", en: "Contact" } },
]


function Header() {
  const { lang, setLang } = useLanguage() // <- fra context

  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement | null>(null)

  // Lukk dropdown ved klikk utenfor + Escape
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!langRef.current) return
      if (!langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setLangOpen(false)
    }

    document.addEventListener("mousedown", onDocClick)
    document.addEventListener("keydown", onEsc)
    return () => {
      document.removeEventListener("mousedown", onDocClick)
      document.removeEventListener("keydown", onEsc)
    }
  }, [])

  return (
    <header className="bg-white pt-2 md:pb-8">
      <div className="flex justify-between p-4 pb-5 md:pb-0">
        <div className="flex-1 lg:px-4 md:px-4 py-2">
          <button
            aria-label="Menu"
            className="md:hidden p-2 rounded focus-visible:ring-2 focus-visible:ring-black"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>

        <div className="shrink-0">
          <a
            href="/"
            aria-label="Gå til forsiden"
            className="inline-block cursor-pointer"
          >
            <img
              src="/images/signatur.png"
              alt="Jan Kjærstad (signatur)"
              className="h-20 sm:h-24 md:h-28 max-w-md object-contain transition-opacity hover:opacity-80"
            />
          </a>
        </div>


        <div className="flex flex-1 justify-end items-start lg:px-4 md:px-4 py-2">
          <button
            aria-label="Search"
            className="p-2 rounded focus-visible:ring-2 focus-visible:ring-black hidden sm:block"
          >
            <Search size={22} strokeWidth={1.5} />
          </button>

          {/* Language dropdown */}
          <div className="relative" ref={langRef}>
            <button
              aria-label="Change language"
              aria-haspopup="menu"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((v) => !v)}
              className="p-2 rounded cursor-pointer focus-visible:ring-2 focus-visible:ring-black"
            >
              <Globe size={22} strokeWidth={1.5} />
            </button>

            {langOpen && (
              <div
                role="menu"
                aria-label="Language"
                className="absolute right-0 mt-2 w-52 rounded-xl border border-neutral-200 bg-white shadow-lg overflow-hidden"
              >
                <button
                  role="menuitemradio"
                  aria-checked={lang === "no"}
                  onClick={() => {
                    setLang("no")
                    setLangOpen(false)
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm cursor-pointer hover:bg-neutral-50"
                >
                  <span className="flex items-center gap-2">
                    <img
                      src="/images/flags/flag-of-Norway.png"
                      alt=""
                      className="h-4 w-6 object-cover rounded-sm"
                    />
                    Norsk
                  </span>
                  {lang === "no" && <Check size={16} />}
                </button>

                <button
                  role="menuitemradio"
                  aria-checked={lang === "en"}
                  onClick={() => {
                    setLang("en")
                    setLangOpen(false)
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm cursor-pointer hover:bg-neutral-50"
                >
                  <span className="flex items-center gap-2">
                    <img
                      src="/images/flags/flag-of-United-Kingdom.png"
                      alt=""
                      className="h-4 w-6 object-cover rounded-sm"
                    />
                    English
                  </span>
                  {lang === "en" && <Check size={16} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    <nav className="hidden md:flex justify-center md:gap-16 lg:gap-22 lg:p-4 md:p-2">
    {navLinks.map((link) => (
        <a
        key={link.key}
        href={link.href}
        className="lg:text-base md:text-sm tracking-wide pt-2 text-gray-700 hover:text-black"
        >
        {link.label[lang]}
        </a>
    ))}
    </nav>

    </header>
  )
}

export default Header
