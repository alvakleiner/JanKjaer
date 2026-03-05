import BookLink from "./BookLink";
import { useLanguage } from "../context/LanguageContext";

export default function TrilogyBooks() {
  const { lang } = useLanguage();

  return (
    <>
      {/* Bøkene i trilogien / Books in the trilogy */}
      <h3
        className="
            uppercase
            text-xl
            tracking-[0.12em]
            font-playfair-sc
            mt-14
            md:mt-8
            mb-6
          "
      >
        {lang === "no" ? "Bøkene i trilogien" : "Books in the trilogy"}
      </h3>

      <div className="border-l-2 border-black/10 pl-5 space-y-4">
        <div>
          <BookLink
            link={{ to: "/bibliografi/forforeren" }}
            className="font-lora text-base leading-7 tracking-[0.04em] text-black italic decoration-neutral-400 hover:decoration-neutral-800 transition"
          >
            {lang === "no" ? "Forføreren" : "The Seducer"}
          </BookLink>
          <p className="text-sm tracking-[0.08em] font-lora text-neutral-500 mt-1">Roman (1993)</p>
        </div>
        <div>
          <BookLink
            link={{ to: "/bibliografi/erobreren" }}
            className="font-lora text-base leading-7 tracking-[0.04em] text-black italic decoration-neutral-400 hover:decoration-neutral-800 transition"
          >
            {lang === "no" ? "Erobreren" : "The Conqueror"}
          </BookLink>
          <p className="text-sm tracking-[0.08em] font-lora text-neutral-500 mt-1">Roman (1996)</p>
        </div>
        <div>
          <BookLink
            link={{ to: "/bibliografi/oppdageren" }}
            className="font-lora text-base leading-7 tracking-[0.04em] text-black italic decoration-neutral-400 hover:decoration-neutral-800 transition"
          >
            {lang === "no" ? "Oppdageren" : "The Discoverer"}
          </BookLink>
          <p className="text-sm tracking-[0.08em] font-lora text-neutral-500 mt-1">Roman (1999)</p>
        </div>
      </div>
    </>
  );
}
