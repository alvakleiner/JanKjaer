import { useEffect, useRef, useState } from "react"
import { Search, Globe, Check, X, Mail, FileText } from "lucide-react"
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
                menuOpen ? "rotate-45 translate-y-1.25" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-black transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-1.25" : ""
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
          <div className="relative z-[60]" ref={langRef}>
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
      className={`fixed z-50 bg-white md:hidden flex flex-col transform transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ top: headerHeight, left: 0, right: 0, bottom: 0 }}
    >
      <nav className="flex-1 flex flex-col px-8 mt-6 overflow-y-auto">
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
                    {item.subtitle ? <em>{item.title[lang]}</em> : item.title[lang]}
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
          <>
            <a
              href="/"
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
              {lang === "no" ? "Hjem" : "Home"}
            </a>
            {navLinks.map((link) => (
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
            ))}
          </>
        )}
      </nav>

      {/* Mobile menu footer */}
      <div className="border-t border-neutral-100 px-8 py-6">
        <ul className="space-y-3 text-sm text-neutral-500">
          <li>
            <a
              href="mailto:jankjaer@online.no"
              className="inline-flex items-center gap-3 hover:text-black transition"
            >
              <Mail size={16} strokeWidth={1.5} />
              jankjaer@online.no
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100049340204345#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 hover:text-black transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </a>
          </li>
          <li>
            <a
              href="/pressemateriale"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-3 hover:text-black transition"
            >
              <FileText size={16} strokeWidth={1.5} />
              {lang === "no" ? "Pressemateriale" : "Press material"}
            </a>
          </li>
        </ul>
        <p className="mt-4 text-xs text-neutral-400">
          © {new Date().getFullYear()} Jan Kjærstad
        </p>
      </div>
    </div>

    </header>
    <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

export default Header
