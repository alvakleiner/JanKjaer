import BookLink from "./BookLink";
import { useLanguage } from "../context/LanguageContext"

export default function TrilogyBooks() {
        const { lang } = useLanguage()

        return (
            <>
          {/* Bøkene i trilogien / Books in the trilogy */}
          <h3 className="
            uppercase
            text-xl
            tracking-[0.12em]
            font-['Playfair_Display_SC',serif]
            mt-14
            md:mt-8
            mb-6
          ">
            {lang === "no" ? "Bøkene i trilogien" : "Books in the trilogy"}
          </h3>
    
          <div className="border-l-2 border-black/10 pl-5 space-y-4">
            <div>
              <BookLink href="/bibliografi/forforeren" className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black italic decoration-neutral-400 hover:decoration-neutral-800 transition">
                {lang === "no" ? "Forføreren" : "The Seducer"}
              </BookLink>
              <p className="text-sm tracking-[0.08em] font-['Lora',serif] text-neutral-500 mt-1">
                Roman (1993)
              </p>
            </div>
            <div>
              <BookLink href="/bibliografi/erobreren" className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black italic decoration-neutral-400 hover:decoration-neutral-800 transition">
                {lang === "no" ? "Erobreren" : "The Conqueror"}
              </BookLink>
              <p className="text-sm tracking-[0.08em] font-['Lora',serif] text-neutral-500 mt-1">
                Roman (1996)
              </p>
            </div>
            <div>
              <BookLink href="/bibliografi/oppdageren" className="font-['Lora',serif] text-base leading-7 tracking-[0.04em] text-black italic decoration-neutral-400 hover:decoration-neutral-800 transition">
                {lang === "no" ? "Oppdageren" : "The Discoverer"}
              </BookLink>
              <p className="text-sm tracking-[0.08em] font-['Lora',serif] text-neutral-500 mt-1">
                Roman (1999)
              </p>
            </div>
          </div>
          </>
        )
    }