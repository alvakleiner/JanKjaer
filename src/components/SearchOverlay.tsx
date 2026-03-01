import { useEffect, useRef, useState } from "react"
import { Search, X } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"
import { search } from "../data/searchIndex"

type Props = {
  open: boolean
  onClose: () => void
}

export default function SearchOverlay({ open, onClose }: Props) {
  const { lang } = useLanguage()
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = search(query, lang)

  // Reset and focus when opening
  useEffect(() => {
    if (open) {
      setQuery("")
      setActiveIndex(0)
      const id = setTimeout(() => inputRef.current?.focus(), 30)
      return () => clearTimeout(id)
    }
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  // Keyboard navigation
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, results.length - 1))
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === "Enter" && results[activeIndex]) {
        window.location.href = results[activeIndex].href
        onClose()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, results, activeIndex, onClose])

  return (
    // Outer: fade backdrop in/out; pointer-events-none when closed so nothing is blocked
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-200 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Panel wrapper — positions the card */}
      <div className="relative flex items-start justify-center pt-20 px-4">
        <div
          className={`w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ease-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Input row */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-100">
            <Search size={18} className="text-neutral-400 shrink-0" strokeWidth={1.5} />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={lang === "no" ? "Søk etter titler, sider…" : "Search titles, pages…"}
              className="flex-1 text-base outline-none font-['Lora',serif] tracking-[0.02em] bg-transparent"
            />
            <button
              onClick={onClose}
              aria-label="Close search"
              className="text-neutral-400 hover:text-black transition-colors duration-150 cursor-pointer"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Results */}
          {query && (
            <div className="max-h-112 overflow-y-auto">
              {results.length === 0 ? (
                <p className="px-5 py-6 text-sm text-neutral-400 font-['Lora',serif] italic">
                  {lang === "no" ? "Ingen resultater" : "No results"}
                </p>
              ) : (
                <ul>
                  {results.map((item, i) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center gap-4 px-5 py-3 transition-colors duration-100 ${
                          i === activeIndex ? "bg-neutral-50" : "hover:bg-neutral-50"
                        }`}
                        onMouseEnter={() => setActiveIndex(i)}
                      >
                        <div className="w-9 shrink-0 flex items-center justify-center">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt=""
                              className="h-12 w-auto object-contain"
                            />
                          ) : (
                            <div className="h-12" />
                          )}
                        </div>

                        <div>
                          <p className="text-sm tracking-[0.04em] font-['Playfair_Display',serif]">
                            {item.title[lang]}
                          </p>
                          {item.subtitle && (
                            <p className="text-xs text-neutral-400 tracking-[0.04em] font-['Lora',serif] mt-0.5">
                              {item.subtitle[lang]}
                            </p>
                          )}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
