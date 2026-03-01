import { useEffect, useRef, useState } from "react"
import { Search, Globe, Check, X } from "lucide-react"
import { useLanguage } from "../context/LanguageContext" // <- juster sti ved behov
import SearchOverlay from "./SearchOverlay"
import { search } from "../data/searchIndex"

const navLinks = [
  { key: "bio", href: "/biografi", label: { no: "Biografi", en: "Biography" } },
  { key: "biblio", href: "/bibliografi", label: { no: "Bibliografi", en: "Bibliography" } },
  { key: "intervjuer", href: "/intervjuer", label: { no: "Intervjuer", en: "Interviews" } },
  { key: "galleri", href: "/galleri", label: { no: "Galleri", en: "Gallery" } },
  { key: "kontakt", href: "/kontakt", label: { no: "Kontakt", en: "Contact" } },
]


function Header() {
  const { lang, setLang } = useLanguage() // <- fra context

  const [searchOpen, setSearchOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [mobileQuery, setMobileQuery] = useState("")
  const mobileResults = search(mobileQuery, lang)
  const langRef = useRef<HTMLDivElement | null>(null)

  const [menuOpen, setMenuOpen] = useState(false)

  const headerRef = useRef<HTMLElement | null>(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    if (!headerRef.current) return
    const observer = new ResizeObserver(() => {
      setHeaderHeight(headerRef.current?.offsetHeight ?? 0)
    })
    observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      setMobileQuery("")
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

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
    <>
    <header ref={headerRef} className="bg-white pt-2 md:pb-8">
      <div className="flex justify-between p-4 pb-5 md:pb-0">
        <div className="flex-1 lg:px-4 md:px-4 py-2">
          <button
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded focus-visible:ring-2 focus-visible:ring-black flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer"
          >
            <span
              className={`block h-px w-6 bg-black transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-black transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
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
            onClick={() => setSearchOpen(true)}
            className="p-2 rounded focus-visible:ring-2 focus-visible:ring-black hidden md:block cursor-pointer"
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
    <div
      className={`fixed z-50 bg-white md:hidden transform transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ top: headerHeight, left: 0, right: 0, bottom: 0 }}
    >
      <nav className="flex flex-col px-8 mt-6">
        {/* Inline search input */}
        <div className="flex items-center gap-3 border-b border-neutral-200 pb-4 mb-2">
          <Search size={18} className="text-neutral-400 shrink-0" strokeWidth={1.5} />
          <input
            value={mobileQuery}
            onChange={(e) => setMobileQuery(e.target.value)}
            placeholder={lang === "no" ? "Søk…" : "Search…"}
            className="flex-1 text-base outline-none font-['Lora',serif] tracking-[0.02em] bg-transparent"
          />
          {mobileQuery && (
            <button onClick={() => setMobileQuery("")} className="text-neutral-400 cursor-pointer">
              <X size={16} strokeWidth={1.5} />
            </button>
          )}
        </div>

        {/* Results when typing, nav links otherwise */}
        {mobileQuery ? (
          mobileResults.length === 0 ? (
            <p className="py-4 text-sm text-neutral-400 font-['Lora',serif] italic">
              {lang === "no" ? "Ingen resultater" : "No results"}
            </p>
          ) : (
            mobileResults.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => { setMenuOpen(false); setMobileQuery("") }}
                className="flex items-center gap-4 py-3 text-gray-700 hover:text-black"
              >
                {item.image && (
                  <img src={item.image} alt="" className="h-10 w-auto object-contain shrink-0" />
                )}
                <div>
                  <p className="text-base tracking-[0.04em] font-['Playfair_Display',serif]">
                    {item.title[lang]}
                  </p>
                  {item.subtitle && (
                    <p className="text-xs text-neutral-400 font-['Lora',serif] mt-0.5">
                      {item.subtitle[lang]}
                    </p>
                  )}
                </div>
              </a>
            ))
          )
        ) : (
          navLinks.map((link) => (
            <a key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                py-4
                text-xl
                tracking-[0.12em]
                uppercase
                font-['Playfair_Display_SC',serif]
                text-gray-700
                hover:text-black
              "
            >
              {link.label[lang]}
            </a>
          ))
        )}
      </nav>
    </div>

    </header>
    <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

export default Header
