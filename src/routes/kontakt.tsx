import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "../context/LanguageContext";

export const Route = createFileRoute("/kontakt")({ component: Kontakt });

export default function Kontakt() {
  const { lang } = useLanguage();

  const seo = {
    title: { no: "Kontakt – Jan Kjærstad", en: "Contact – Jan Kjærstad" },
    description: {
      no: "Kontaktinformasjon for Jan Kjærstad.",
      en: "Contact information for Jan Kjærstad.",
    },
  } as const;

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 mt-2 md:mt-4 mb-18">
        {/* h2 kun på mobil */}
        <h2
          className="
            md:hidden
            text-center
            text-[20px]
            font-medium
            tracking-widest
            font-playfair
            mb-8
          "
        >
          {lang === "no" ? "Kontakt" : "Contact"}
        </h2>

        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:gap-10">
          {/* Bilde */}
          <div className="shrink-0 mb-6 md:mb-0 w-2/3 md:w-auto mx-auto md:mx-0">
            <img
              src="/images/jk-haand.jpg"
              alt=""
              className="w-full md:w-auto md:h-80 h-auto block"
            />
            <p className="text-xs md:text-sm tracking-[0.04em] font-lora text-black/70 mt-3">
              {lang === "no" ? "Foto: Line Møller / VG. Bildet kan ikke brukes av andre medier." : "Photo: Line Møller / VG. The image cannot be used by other media outlets."}
            </p>
          </div>

          {/* Tekst */}
          <div>
            <h3
              className="
                uppercase
                text-lg
                tracking-[0.12em]
                font-playfair-sc
                mb-4
                mt-4
                md:mt-0
              "
            >
              {lang === "no" ? "Hva er et menneske?" : "What is a human being?"}
            </h3>

            <p className="font-lora text-base leading-7 tracking-[0.04em] text-black">
              <a
                href="mailto:jankjaer@online.no"
                className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition"
              >
                {lang === "no" ? "Kontakt forfatteren" : "Contact the author"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
