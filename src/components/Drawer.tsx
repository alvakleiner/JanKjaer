import { useEffect } from "react"
import { useLanguage } from "../context/LanguageContext"

type DrawerProps = {
  open: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: React.ReactNode
}

// Renderer som håndterer ### overskrifter i string-innhold
export function renderArticle(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("### ")) {
      return (
        <h4
          key={i}
          className="
            uppercase
            text-sm
            tracking-[0.14em]
            font-['Playfair_Display_SC',serif]
            mt-10
            mb-3
            text-black/70
          "
        >
          {line.replace("### ", "")}
        </h4>
      )
    }
    if (line.trim() === "") {
      return <div key={i} className="h-3" />
    }
    return (
      <p key={i} className="text-base leading-7 tracking-[0.04em] font-['Lora',serif] text-black">
        {line}
      </p>
    )
  })
}

export default function Drawer({ open, onClose, title, subtitle, children }: DrawerProps) {
  const { lang } = useLanguage()

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  return (
    <div
      className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`absolute inset-0 bg-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="px-5 sm:px-6 py-4 border-b flex items-start justify-between gap-4">
            <div>
              {subtitle && (
                <div className="text-xs tracking-[0.16em] uppercase text-black/60 font-['Lora',serif]">
                  {subtitle}
                </div>
              )}
              <h3 className="mt-1 text-lg tracking-[0.06em] font-['Playfair_Display',serif]">
                {title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-md px-3 py-2 hover:bg-black/5"
              aria-label={lang === "no" ? "Lukk" : "Close"}
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-2">
            {children}
          </div>
        </div>
      </aside>
    </div>
  )
}