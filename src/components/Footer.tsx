import { ArrowUp, Mail, Facebook, FileText } from "lucide-react"

function Footer() {
  return (
    <footer className="relative bg-neutral-900 text-neutral-100 overflow-hidden">
        {/* Scroll to top */}
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Til toppen"
            className="absolute cursor-pointer top-6 right-6 z-20 text-neutral-300 hover:text-white transition"
        >
            <ArrowUp size={28} strokeWidth={1.5} />
        </button>

        <div className="max-w-6xl mx-auto px-6 py-16 relative">
            {/* Innhold */}
            <div className="relative z-10">
            <ul className="space-y-3 text-sm text-neutral-200">
                <li>
                <a
                    href="mailto:jankjaer@online.no"
                    className="inline-flex items-center gap-3 hover:text-white transition"
                >
                    <Mail size={18} strokeWidth={1.5} />
                    jankjaer@online.no
                </a>
                </li>

                <li>
                <a
                    href="#"
                    className="inline-flex items-center gap-3 hover:text-white transition"
                >
                    <Facebook size={18} strokeWidth={1.5} />
                    Facebook
                </a>
                </li>

                <li>
                <a
                    href="#"
                    className="inline-flex items-center gap-3 hover:text-white transition"
                >
                    <FileText size={18} strokeWidth={1.5} />
                    Pressemateriale
                </a>
                </li>
            </ul>
            </div>
        </div>

        {/* Stor bakgrunnstekst (kant-til-kant) */}
        <div className="relative">
            <div 
                aria-hidden="true"
                className="
                        hidden sm:flex
                        pointer-events-none
                        absolute
                        left-1/2
                        -translate-x-1/2
                        w-screen
                        -top-12
                        z-0
                        justify-center
                        overflow-hidden
                    "
            >
                <span
                    className="
                        font-['Playfair_Display',serif]
                        text-neutral-800
                        leading-none
                        tracking-[-0.02em]
                        select-none
                        whitespace-nowrap
                        text-[clamp(120px,18vw,320px)]
                        scale-x-110
                    "
                >
                    KJÆRSTAD
                </span>
            </div>
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -translate-y-14

                    inset-0
                    z-0
                    flex
                    items-center
                    justify-center
                    sm:hidden
                    "
            >
                <span
                    className="
                    font-['Playfair_Display',serif]
                    text-neutral-800
                    leading-none
                    tracking-[-0.02em]
                    select-none
                    text-[clamp(180px,600vw,320px)]
                    "
                >
                    JK
                </span>
            </div>

            {/* Bottom bar */}
            <div className="relative z-10">
                <div className="max-w-6xl mx-auto px-6 py-6 text-center text-xs text-neutral-500">
                © {new Date().getFullYear()} Jan Kjærstad · Nettside utviklet av Alva Kjærstad Leiner
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
