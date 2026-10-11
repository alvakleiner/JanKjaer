import { useEffect, useRef, useState } from "react";
import { Search, Globe, Check, X, Mail, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; // <- juster sti ved behov
import SearchOverlay from "./SearchOverlay";
import { search } from "../data/searchIndex";
import { Link, linkOptions } from "@tanstack/react-router";
const navLinks = [
  {
    key: "bio",
    link: linkOptions({ to: "/biografi" }),
    label: { no: "Biografi", en: "Biography" },
  },
  {
    key: "biblio",
    link: linkOptions({ to: "/bibliografi" }),
    label: { no: "Bibliografi", en: "Bibliography" },
  },
  {
    key: "intervjuer",
    link: linkOptions({ to: "/intervjuer" }),
    label: { no: "Intervjuer", en: "Interviews" },
  },
  {
    key: "galleri",
    link: linkOptions({ to: "/galleri" }),
    label: { no: "Galleri", en: "Gallery" },
  },
  {
    key: "kontakt",
    link: linkOptions({ to: "/kontakt" }),
    label: { no: "Kontakt", en: "Contact" },
  },
];

function Header() {
  const { lang, setLang } = useLanguage(); // <- fra context

  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileQuery, setMobileQuery] = useState("");
  const mobileResults = search(mobileQuery, lang);
  const langRef = useRef<HTMLDivElement | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (!headerRef.current) return;
    const observer = new ResizeObserver(() => {
      setHeaderHeight(headerRef.current?.offsetHeight ?? 0);
    });
    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Krymp headeren på mobil i takt med scrollingen: --p går fra 0 til 1 over de første
  // --shrink pikslene, og headeren blir like mange piksler lavere som man har scrollet.
  // margin-bottom vokser like mye, så innholdet under ligger i ro og følger kanten nøyaktig.
  useEffect(() => {
    function onScroll() {
      const el = headerRef.current;
      if (!el) return;
      const shrink = parseFloat(getComputedStyle(el).getPropertyValue("--shrink")) || 0;
      const p = shrink ? Math.min(Math.max(window.scrollY / shrink, 0), 1) : 0;
      el.style.setProperty("--p", String(p));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lås scrolling mens menyen er åpen. Kun på <html>: settes overflow også på <body>,
  // blir body en egen scrollcontainer, og den sticky headeren forsvinner ut av syne.
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      setMobileQuery("");
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  // Lukk dropdown ved klikk utenfor + Escape
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setLangOpen(false);
    }

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="relative bg-white pt-2 md:pb-8 max-md:sticky max-md:top-0 max-md:z-50 max-md:bg-transparent [--p:0] max-md:[--shrink:48] sm:max-md:[--shrink:64] max-md:mb-[calc(var(--shrink)*var(--p)*1px)]"
      >
        {/* Bakgrunn på mobil: lett gjennomsiktig med blur. Ligger i eget lag fordi
            backdrop-filter på selve headeren ville ødelagt plasseringen av menyen (fixed). */}
        <div
          aria-hidden="true"
          className={`md:hidden absolute inset-0 -z-10 backdrop-blur-md transition-colors duration-300 ${
            menuOpen ? "bg-white" : "bg-white/85"
          }`}
        />
        <div
          className="flex justify-between px-4 md:pt-4 md:pb-0 max-md:pt-[calc(16px-12px*var(--p))] max-md:pb-[calc(20px-12px*var(--p))]"
        >
          <div className="flex-1 lg:px-4 md:px-4 py-2">
            <button
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded focus-visible:ring-2 focus-visible:ring-black flex flex-col justify-center gap-1.5 w-8 h-8 scale-[0.85] cursor-pointer"
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
            <Link to="/" aria-label="Gå til forsiden" className="inline-block cursor-pointer" onClick={() => setMenuOpen(false)}>
              <img
                src="/images/signatur.png"
                alt="Jan Kjærstad - Storyteller"
                className="h-[calc(80px-24px*var(--p))] sm:max-md:h-[calc(96px-40px*var(--p))] md:h-28 max-md:translate-y-[calc(-1px+5px*var(--p))] max-w-md object-contain transition-opacity hover:opacity-80"
              />
            </Link>
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
            <div className="relative z-60" ref={langRef}>
              <button
                aria-label="Change language"
                aria-haspopup="menu"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
                className="p-2 rounded cursor-pointer focus-visible:ring-2 focus-visible:ring-black"
              >
                <Globe size={22} strokeWidth={1.5} className="max-md:size-[19px]" />
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
                      setLang("no");
                      setLangOpen(false);
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
                      setLang("en");
                      setLangOpen(false);
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
            <Link
              {...link.link}
              key={link.key}
              className="lg:text-base md:text-sm tracking-wide pt-2 text-gray-700 hover:text-black"
            >
              {link.label[lang]}
            </Link>
          ))}
        </nav>
        <div
          className={`fixed z-50 bg-white md:hidden flex flex-col transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full pointer-events-none"
          }`}
          // -1 px overlapp: headerhøyden kan være en brøkdel av en piksel, og da ble det en tynn glipe
          style={{ top: headerHeight - 1, left: 0, right: 0, bottom: 0 }}
        >
          <nav className="flex-1 flex flex-col px-8 mt-6 overflow-y-auto">
            {/* Inline search input */}
            <div className="flex items-center gap-3 border-b border-neutral-200 pb-4 mb-2">
              <Search size={18} className="text-neutral-400 shrink-0" strokeWidth={1.5} />
              <input
                value={mobileQuery}
                onChange={(e) => setMobileQuery(e.target.value)}
                placeholder={lang === "no" ? "Søk…" : "Search…"}
                className="flex-1 text-base outline-none font-lora tracking-[0.02em] bg-transparent"
              />
              {mobileQuery && (
                <button
                  onClick={() => setMobileQuery("")}
                  className="text-neutral-400 cursor-pointer"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              )}
            </div>

            {/* Results when typing, nav links otherwise */}
            {mobileQuery ? (
              mobileResults.length === 0 ? (
                <p className="py-4 text-sm text-neutral-400 font-lora italic">
                  {lang === "no" ? "Ingen resultater" : "No results"}
                </p>
              ) : (
                mobileResults.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileQuery("");
                    }}
                    className="flex items-center gap-4 py-3 text-gray-700 hover:text-black"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt=""
                        className="h-10 w-auto object-contain shrink-0"
                      />
                    )}
                    <div>
                      <p className="text-base tracking-[0.04em] font-playfair">
                        {item.subtitle ? <em>{item.title[lang]}</em> : item.title[lang]}
                      </p>
                      {item.subtitle && (
                        <p className="text-xs text-neutral-400 font-lora mt-0.5">
                          {item.subtitle[lang]}
                        </p>
                      )}
                    </div>
                  </Link>
                ))
              )
            ) : (
              <>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="
                py-4
                text-xl
                tracking-[0.12em]
                uppercase
                font-playfair-sc
                text-gray-700
                hover:text-black
              "
                >
                  {lang === "no" ? "Hjem" : "Home"}
                </Link>
                {navLinks.map((link) => (
                  <Link
                    {...link.link}
                    key={link.key}
                    onClick={() => setMenuOpen(false)}
                    className="py-4 text-xl tracking-[0.12em] uppercase font-playfair-sc text-gray-700 hover:text-black"
                  >
                    {link.label[lang]}
                  </Link>
                ))}
              </>
            )}
          </nav>

          {/* Mobile menu footer */}
          <div className="border-t border-neutral-100 px-8 py-4">
            <ul className="flex gap-5 text-sm text-neutral-500">
              <li>
                <a
                  href="mailto:jankjaer@online.no"
                  className="inline-flex items-center gap-2 hover:text-black transition"
                >
                  <Mail size={16} strokeWidth={1.5} />
                  E-post
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100049340204345#"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-black transition"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <Link
                  to="/pressemateriale"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 hover:text-black transition"
                >
                  <FileText size={16} strokeWidth={1.5} />
                  {lang === "no" ? "Presse" : "Press"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

export default Header;
