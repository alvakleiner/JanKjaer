import type { Lang } from "../context/LanguageContext"

export type SearchItem = {
  title: { no: string; en: string }
  subtitle?: { no: string; en: string }
  href: string
  image?: string
}

export const searchItems: SearchItem[] = [
  // ── Pages ────────────────────────────────────────────────────────────────
  { title: { no: "Biografi", en: "Biography" }, href: "/biografi" },
  { title: { no: "Bibliografi", en: "Bibliography" }, href: "/bibliografi" },
  { title: { no: "Intervjuer", en: "Interviews" }, href: "/intervjuer" },
  { title: { no: "Galleri", en: "Gallery" }, href: "/galleri" },
  { title: { no: "Kontakt", en: "Contact" }, href: "/kontakt" },
  { title: { no: "Pressemateriale", en: "Press Material" }, href: "/pressemateriale" },

  // ── Books ─────────────────────────────────────────────────────────────────
  {
    title: { no: "Valgdager", en: "Election Days" },
    subtitle: { no: "Roman (2024)", en: "Novel (2024)" },
    href: "/bibliografi/valgdager",
    image: "/images/valgdager-3d.png",
  },
  {
    title: { no: "Menneskets bølger", en: "The Human Waves" },
    subtitle: { no: "Essays (2022)", en: "Essays (2022)" },
    href: "/bibliografi/menneskets-bolger",
    image: "/images/menneskets-bolger-3d.png",
  },
  {
    title: { no: "En tid for å leve", en: "A Time to Live" },
    subtitle: { no: "Roman (2021)", en: "Novel (2021)" },
    href: "/bibliografi/en-tid-for-a-leve",
    image: "/images/en-tid-for-a-leve-3d.png",
  },
  {
    title: { no: "Mr. Woolf", en: "Mr. Woolf" },
    subtitle: { no: "Roman (2019)", en: "Novel (2019)" },
    href: "/bibliografi/mr-woolf",
    image: "/images/mr-woolf-3d.png",
  },
  {
    title: { no: "Berge", en: "Berge" },
    subtitle: { no: "Roman (2017)", en: "Novel (2017)" },
    href: "/bibliografi/berge",
    image: "/images/berge-3d.png",
  },
  {
    title: { no: "Slekters gang", en: "The Path of Kins" },
    subtitle: { no: "Roman (2015)", en: "Novel (2015)" },
    href: "/bibliografi/slekters-gang",
    image: "/images/slekters-gang-3d.png",
  },
  {
    title: { no: "Menneskets vidde", en: "The Human Width" },
    subtitle: { no: "Essays (2013)", en: "Essays (2013)" },
    href: "/bibliografi/menneskets-vidde",
    image: "/images/menneskets-vidde-3d.png",
  },
  {
    title: { no: "Stein blir kaptein", en: "Stein Becomes a Captain" },
    subtitle: { no: "Bildebok (2012)", en: "Picture book (2012)" },
    href: "/bibliografi/stein-blir-kaptein",
    image: "/images/stein-blir-kaptein-3d.png",
  },
  {
    title: { no: "Normans område", en: "Norman's Area" },
    subtitle: { no: "Roman (2011)", en: "Novel (2011)" },
    href: "/bibliografi/normans-omraade",
    image: "/images/normans-omrade-3d.png",
  },
  {
    title: { no: "Jeg er brødrene Walker", en: "I Am the Walker Brothers" },
    subtitle: { no: "Roman (2008)", en: "Novel (2008)" },
    href: "/bibliografi/jeg-er-brodrene-walker",
    image: "/images/jeg-er-brodrene-walker-3d.png",
  },
  {
    title: { no: "Mirandas skattekammer", en: "Miranda's Treasury" },
    subtitle: { no: "Bildebok (2008)", en: "Picture book (2008)" },
    href: "/bibliografi/mirandas-skattkammer",
    image: "/images/mirandas-skattkammer-3d.png",
  },
  {
    title: { no: "Kjærstads matrise", en: "The Matrix of Kjærstad" },
    subtitle: { no: "Essays (2007)", en: "Essays (2007)" },
    href: "/bibliografi/kjaerstads-matrise",
    image: "/images/kjaerstads-matrise-3d.png",
  },
  {
    title: { no: "Kongen av Europa", en: "The King of Europe" },
    subtitle: { no: "Roman (2005)", en: "Novel (2005)" },
    href: "/bibliografi/kongen-av-europa",
    image: "/images/kongen-av-europa-3d.png",
  },
  {
    title: { no: "Menneskets nett", en: "The Human Web" },
    subtitle: { no: "Roman (2005)", en: "Novel (2005)" },
    href: "/bibliografi/menneskets-nett",
    image: "/images/menneskets-nett-3d.png",
  },
  {
    title: { no: "Tegn til kjærlighet", en: "Signs of Love" },
    subtitle: { no: "Roman (2002)", en: "Novel (2002)" },
    href: "/bibliografi/tegn-til-kjaerlighet",
    image: "/images/tegn-til-kjaerlighet-3d.png",
  },
  {
    title: { no: "Oppdageren", en: "The Discoverer" },
    subtitle: { no: "Roman (1999)", en: "Novel (1999)" },
    href: "/bibliografi/oppdageren",
    image: "/images/oppdageren-3d.png",
  },
  {
    title: { no: "Menneskets felt", en: "The Human Sphere" },
    subtitle: { no: "Essays (1997)", en: "Essays (1997)" },
    href: "/bibliografi/menneskets-felt",
    image: "/images/menneskets-felt-3d.png",
  },
  {
    title: { no: "Erobreren", en: "The Conqueror" },
    subtitle: { no: "Roman (1996)", en: "Novel (1996)" },
    href: "/bibliografi/erobreren",
    image: "/images/erobreren-3d.png",
  },
  {
    title: { no: "Hos Sheherasad, fantasiens dronning", en: "The World of Scheherazade" },
    subtitle: { no: "Bildebok (1995)", en: "Picture book (1995)" },
    href: "/bibliografi/hos-sheherasad-fantasiens-dronning",
    image: "/images/sheherasad-3d.png",
  },
  {
    title: { no: "Forføreren", en: "The Seducer" },
    subtitle: { no: "Roman (1993)", en: "Novel (1993)" },
    href: "/bibliografi/forforeren",
    image: "/images/forforeren-3d.png",
  },
  {
    title: { no: "Rand", en: "Brink" },
    subtitle: { no: "Roman (1990)", en: "Novel (1990)" },
    href: "/bibliografi/rand",
    image: "/images/rand-3d.png",
  },
  {
    title: { no: "Jakten på de skjulte vaffelhjertene", en: "The Hunt for the Hidden Waffle Hearts" },
    subtitle: { no: "Bildebok (1989/2005)", en: "Picture book (1989/2005)" },
    href: "/bibliografi/jakten-paa-de-skjulte-vaffelhjertene",
    image: "/images/vaffelhjertene-3d.png",
  },
  {
    title: { no: "Menneskets matrise", en: "The Matrix of Man" },
    subtitle: { no: "Essays (1989)", en: "Essays (1989)" },
    href: "/bibliografi/menneskets-matrise",
    image: "/images/menneskets-matrise-3d.png",
  },
  {
    title: { no: "Det store eventyret", en: "The Great Fairy Tale" },
    subtitle: { no: "Roman (1987)", en: "Novel (1987)" },
    href: "/bibliografi/det-store-eventyret",
    image: "/images/det-store-eventyret-3d.png",
  },
  {
    title: { no: "Homo Falsus eller Det perfekte mord", en: "Homo Falsus or The Perfect Murder" },
    subtitle: { no: "Roman (1984)", en: "Novel (1984)" },
    href: "/bibliografi/homo-falsus",
    image: "/images/homo-falsus-3d.png",
  },
  {
    title: { no: "Speil", en: "Mirror" },
    subtitle: { no: "Roman (1982)", en: "Novel (1982)" },
    href: "/bibliografi/speil",
    image: "/images/speil-3d.png",
  },
  {
    title: { no: "Kloden dreier stille rundt", en: "The Earth Turns Quietly" },
    subtitle: { no: "Noveller (1980)", en: "Short stories (1980)" },
    href: "/bibliografi/kloden-dreier-stille-rundt",
    image: "/images/kloden-dreier-stille-rundt-3d.png",
  },
]

export function search(query: string, lang: Lang): SearchItem[] {
  const q = query.toLowerCase().trim()
  if (!q) return []
  const other: Lang = lang === "no" ? "en" : "no"
  return searchItems.filter((item) =>
    item.title[lang].toLowerCase().includes(q) ||
    item.title[other].toLowerCase().includes(q) ||
    (item.subtitle?.[lang].toLowerCase().includes(q) ?? false)
  )
}
