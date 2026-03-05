import { createFileRoute, useLocation } from "@tanstack/react-router"

export const Route = createFileRoute("/bibliografi/mr-woolf")({ component: MrWoolf })
import { useLanguage } from "../../context/LanguageContext"
import { BookPageBody, BookPageQuotes } from "../../components/BookPage"
import SEO, { SITE_URL } from "../../components/SEO"

const content = {
  title: { no: "Mr. Woolf", en: "Mr. Woolf" },
  meta: { no: "Roman (2019)", en: "Novel (2019)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/mr-woolf-2" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/mr-woolf-2" },
  },
  coverImage: {
    src: "/images/mr-woolf-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Quotes" },
  quotes: [
    {
      text: "«Raus fortellerglede. Jan Kjærstads nye roman er en vakker kjærlighetserklæring til en fars skjulte sider. Boka oser av fortellerglede, det er bare å gi seg hen og la seg føre gjennom Hong Kongs trange markeder, neonbelyste gater, futuristiske kjøpesentre, overjordiske gangveier, grønne åser og skumle kirkegårder.»",
      source: "Inger Bentzrud, Dagbladet",
      diceImg: "/images/terningkast5.png",
    },
    {
      text: <>«<em>Mr. Woolf</em> er en rik røverroman som glir sømløst mellom fortid og nåtid … Romanen innehar en dæsj Murakami-mystikk, er spennende som en detektivhistorie; den er både menneskevarm og underlig. Sier du yes til fortellingen er hans nye bok en skattkiste.»</>,
      source: "Ellen Sofie Lauritzen, Dagens Næringsliv",
    },
    {
      text: "«Jan Kjærstad leikar seg i denne romanen, det skulle berre mangle i ein roman der leiketøy står sentralt. Romanen byr på vakre passasjar om leik og leiker, og varme skildringar av far, leiketøysforhandlaren som kunne få fantasien i sving hjå ein liten gut. Han leikar seg også med sjangrar: biografisjangeren, som han filleristar, og krimsjangeren, som han godflørtar med.»",
      source: "Marta Norheim, NRK P2",
    },
    {
      text: "«… et nydelig farsportrett, rikelig av ytre spenning og friske spekulasjoner om årsakssammenhengene i tilværelsen.»",
      source: "Anne Merethe K. Prinos, Aftenposten",
    },
    {
      text: "«Vil leseren møte en kinesisk jente i Solskjær-trøye som deklamerer Olav H. Hauge i Ytre Filipstad i Hong Kong, eller kanskje kjenne smaken av slangesuppe i munnen? Da er det bare å kaste seg med på galeien når Jan Kjærstad byr på nok en ekspedisjon i landskap ingen kartograf har besudlet.»",
      source: "May Grethe Lerum, BOK 365",
      diceImg: "/images/terningkast5.png",
    },
  ],
  paragraphsBeforeImage: {
    no: [
      "Hvordan oppstår en idé som får betydning for hele menneskeheten?",
      "En dag møter William Abelson sin far til lunsj på Dovrehallen. William har en doktorgrad i fysikk, men har gått på en smell, han har i flere år arbeidet som barista i en trendy kafé ved Akerselva. Faren driver Stjerneplassen Leker, en butikk i Storgata, og William tror det skal bli en vanlig lunsj der faren lufter sine økonomiske bekymringer over et patentsmørbrød. Faren har imidlertid noe annet på hjertet: Elizabeth, Williams søster, har forsvunnet. Faren er bekymret, han tror det kan ha tilstøtt henne noe. At hun er i fare. William får et oppdrag, han må reise til Hongkong, der søsteren etter sigende oppholder seg.",
      "Hvor vanskelig kan det være? tenker William. Jeg skal bare finne en søster og hente henne hjem.",
      "På flyplassen i Hongkong venter en overraskelse: William blir hentet i en Rolls Royce og kjørt til The Peninsula, et av byens fineste hoteller. Uten å vite det skal han de neste dagene møte mennesker og miljøer som snur opp ned på alt og som setter ham på sporet av forbløffende innsikter.",
      "Mr. Woolf er en hyllest til alle alminnelige fedre, som kanskje ikke er så alminnelige som man tror.",
    ],
    en: [
      "How did the idea behind the Abelson Model, one of the greatest scientific breakthroughs of the 21st century, originate?",
      "One day William Abelson meets his father for lunch. William holds a doctorate degree in physics but has hit the wall and is now working as a barista in a trendy café in Oslo. His father runs Stjerneplassen Toys, a beloved but struggling independent toy store downtown. William expects nothing more than yet another of their regular conversations, where his father shares his financial troubles over a cheap meal. But this time, his father has bigger worries: Elizabeth, William's sister, has disappeared. The father thinks she may be in grave danger and asks William to travel to Hong Kong, where she might be located.",
      "How hard can that be? William thinks. All I need to do is to find my sister and bring her home.",
      "As soon as he arrives at the airport in Hong Kong, however, things start to take unexpected turns. William is picked up by a Rolls Royce and taken to The Peninsula, one of the most luxurious hotels in the city. Over the next few days, he will find himself in situations and strange encounters that will turn everything he thought he knew upside down and give him a taste of ground-breaking, new knowledge.",
      "Mr. Woolf is a tribute to all ordinary fathers, who perhaps are not as ordinary as one might think.",
    ],
  },
  paragraphsAfterImage: {
    no: [
      "Kjære leser,",
      "Denne romanen har en spesiell bakgrunn. Midtveis i arbeidet, mens alt fremdeles var kaos og jeg lette etter en kjøl for historien, døde faren min. Han ble 99 år. Så det var til å leve med. Og allikevel. I ukene etterpå – de fleste vil kjenne seg igjen i situasjonen – ble jeg sittende og gruble: Hvem var han?",
      "Dette er en bok til far. Dette er en bok om far.",
      "Selv om ikke mange vil se det, er Mr. Woolf også en selvbiografisk roman.",
      "Da jeg ryddet i fars hus, fant jeg en liten koffert med de gamle lekene mine. Jeg tok en Matchbox-bil i hånden, en flyttebil – og simsalabim. Jeg var gutt igjen, jeg satt i stuen og flyttet møbler fra det ene teppet til det andre, det vil si, det var ikke tepper, det var bydeler i Oslo.",
      "Bli med på et lite eksperiment: Lukk øynene og tenk på din yndlingsleke i barndommen. Eller se for deg at du er på loftet og finner en av lekene dine. Tenk så på de universene som stiger opp i deg når du tar den i hånden. Du vil nå ha en idé om hva Mr. Woolf handler om.",
      "Vennlig hilsen Jan Kjærstad",
    ],
    en: [
      "Dear Reader,",
      "This novel has a special background. Midway through the writing, while everything was still chaos and I was searching for a through-line for the story, my father died. He had reached the age of 99. So it was something one could live with. And yet. In the weeks that followed — most people will recognise the situation — I found myself sitting and wondering: Who was he?",
      "This is a book for my father. This is a book about my father.",
      "Even if not many will see it, Mr. Woolf is also an autobiographical novel.",
      "When I was clearing out my father's house, I found a small suitcase containing my old toys. I picked up a Matchbox car — a moving van — and abracadabra. I was a boy again, sitting in the living room moving furniture from one rug to another; or rather, they weren't rugs, they were neighbourhoods in Oslo.",
      "Join me in a small experiment: close your eyes and think of your favourite toy from childhood. Or imagine you are up in the attic and find one of your old toys. Then think of the universes that rise up inside you when you hold it in your hand. You will now have an idea of what Mr. Woolf is about.",
      "Yours sincerely, Jan Kjærstad",
    ],
  },
}

export default function MrWoolf() {
  const { lang } = useLanguage()
  const { pathname } = useLocation()

  const rawDesc = content.paragraphsBeforeImage[lang][0]
  const description = rawDesc.length > 155 ? rawDesc.slice(0, 152) + "…" : rawDesc

  return (
    <>
      <SEO
        title={`${content.title[lang]} – Jan Kjærstad`}
        description={description}
        path={pathname}
        image={`${SITE_URL}${content.coverImage.src}`}
      />
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

          <BookPageBody content={{ ...content, paragraphs: content.paragraphsBeforeImage }} />

          {/* Inline image */}
          <div className="flex justify-center my-10 md:my-4">
            <img
              src="/images/jan-og-leif.jpg"
              alt="Jan & Leif"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>

          {/* Body text — after inline image */}
          {content.paragraphsAfterImage[lang].length > 0 && (
            <div className="text-base leading-7 tracking-[0.04em] font-['Lora',serif] text-black space-y-6">
              <div className="clear-both my-10" />
              {content.paragraphsAfterImage[lang].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          <BookPageQuotes content={content} />

          {/* Cover art */}
          <div className="flex flex-col items-center mt-14">
            <img
              src="/images/omslag-mr-woolf.jpg"
              alt="Bokomslag Mr. Woolf"
              className="w-full h-auto object-contain"
            />
            <p className="self-start text-sm tracking-[0.08em] font-['Lora',serif] text-neutral-500 mt-4">
              Omslag: Terese Moe Leiner
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
