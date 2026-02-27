import { useLanguage } from "../../context/LanguageContext"

const content = {
  title: { no: "Slekters gang", en: "The Path of Kins" },
  meta: { no: "Roman (2015)", en: "Novel (2015)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/slekters-gang-4" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/slekters-gang-4" },
  },
  coverImage: {
    src: "/images/slekters-gang-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Reviews" },
  quotes: [
    {
      text: "«Så Jan Kjærstad har igjen skrevet en episk triatlontekst der dikterfantasien gnistrer mot et rikt arsenal av leksikalsk kunnskap knyttet til litteratur, musikk og arkitektur, historie og geografi, religion, billedkunst og film, biologi og geologi. … Den er ettertenksom, klok og sensuell, krass og morsom … Les Jan Kjærstads perspektivskapende legering av romantikk og rasjonalisme, høyt og lavt, alvor og fleip.»",
      source: "Steinar Sivertsen, Stavanger Aftenblad",
      diceImg: "/images/terningkast6.png",
    },
    {
      text: "«Slekters gang – et av høstens viktigste romanverk.»",
      source: "Finn Stenstad, Tønsberg Blad",
      diceImg: "/images/terningkast5.png",
    },
    {
      text: "«Det er Kjærstad på sitt beste vi møter att i denne historia om familien Bohre … Med Kjærstad på sitt beste meiner eg forteljaren bak Wergelandtrilogien. Det handlar igjen om dei livsviktige historiene … Vi har alle godt av å gruble. Ære være den som skriv romanar med store svev, med eller utan kinesarar. Det er inspirerande å gå i dialog med ein kjærstadroman.»",
      source: "Martha Norheim, NRK P2",
    },
    {
      text: "«Her er innfall og utfall og vilje og evne til å slå opp eit digert lerret. I følgje ein kvinneleg norsk statsminister ‘heng alt saman med alt’, og det gjer det verkeleg hos Kjærstad.»",
      source: "Ole Karlsen, Dag og Tid",
    },
    {
      text: "«En påminnelse om att litteraturen kan vara en fest. … … en utforskning av, och en lovsång till, litteraturens enorma möjligheter.»",
      source: "Magnus Persson, Svenska Dagbladet",
    },
    {
      text: "«Jan Kjærstads gestalter är föränderliga, de väljer sitt öde och det finns något oerhört uppmuntrande i den människosynen.»",
      source: "Ingrid Elam, Dagens Nyheter",
    },
    {
      text: "«… en roman väldig som Jotunheimen och förtrollande som Hurtigruten.»",
      source: "Åke Leijonhufvud, Sydsvenskan",
    },
    {
      text: "«Kjærstad är en lysande berättare och en av de skickligaste i Norden.»",
      source: "Thomas Almqvist, Skånska Dagbladet",
    },
    {
      text: "«Den fortæller læseren om alle de skuffer, vi efterlader, om hvor meget et liv kan rumme, hvor mange nye muligheder, der kan åbne sig og hvor vågen du skal være. Du kan forvandles. Og dermed kan du selv forvandle!»",
      source: "Liselotte Wiemer, Weekendavisen",
    },
    {
      text: "«… en begavet, forlokkende og intens roman, en fiktion, der føles så virkelig, at man lever med til sidste side.»",
      source: "Iben Tandgaard, Kristeligt Dagblad",
    },
    {
      text: "«Slægters gang bør ende i feriekufferten. Den kan så let som ingenting udfylde tunge regnvejrsdage, men også forgylde solskinstimer. Eneste ulempe vil være, at ens egen slægt oplever en selv forsvinde helt væk. I fortiden og nutiden set fra fremtiden.»",
      source: "Marianne Koch, Fyens Stiftstidende",
    },
  ],
  paragraphs: {
    no: [
      "Slekters gang er en roman med et stort persongalleri. Vi møter blant andre Albert Bohre som på en kajakktur i barndommen nesten skremmes til døde av en knølhval og som i voksen alder blir en av verdens største og mest blodtørstige hvalfangstredere. I 1956 er han til stede under OL i Melbourne og ser Egil Danielsen vinne gull for Norge, og noe med verdensrekordkastet, synet av spydet gjennom luften, får ham til å revurdere alt.",
      "Maud Evensen holder til på Krokskogen, i Mauds land. Etter andre verdenskrig reiser hun Jorden rundt for å lete etter en kjæreste, men hun finner ham først ved hjemkomsten, i «Tapt Baggasje»-luken på Fornebu. Hun vet allikevel ikke da at hun skal bli en mer populær programleder i radioen enn Rolf Kirkvåg, takket være sin behagelige stemme.",
      "Eller ta for eksempel Konrad Steen som har arbeiderklassebakgrunn og er prest i Tøyen kirke. I 1938, på selveste julaften, mister han troen, midt i prekenen.",
      "Men romanen åpner slik:",
      "Norge var et land i utkanten av den verdensdelen som ble kalt Europa. For en som har fløyet over den store halvøya, nordvest i Slavia, er det sikkert uforståelig at denne villmarka en gang har vært befolket, at det har vært byer og en velfungerende infrastruktur her. På sitt høydepunkt som nasjon, på 2000-tallet, skal Norge ha rommet rundt sju millioner innbyggere. Vi vet ikke eksakt hvor mange «nordmenn» eller etterkommere av nordmenn som lever i dette landskapet i dag, men det kan neppe være mer enn noen få tusen. De kalles «den norske stammen» og består dels av kremmer-barbarer som streifer om i randsonen av den veldige ødemarka vi kjenner som Forum Europeum, dels av grupper som roter i jorden om dagen og drikker potetbrennevin om kvelden.",
      "Det har gått cirka 2000 år fra nå, og vi befinner oss i Den kinesiske føderasjon. Alle lagrede data og informasjoner gikk tapt under en veldig katastrofe for tusen år siden, men fordi personer fra Long-dynastiet sitter i mange sentrale stillinger, og fordi Long-dynastiet regner Norge som sitt opprinnelige hjemsted, har en gruppe ledet av tre kvinner fått i oppgave å fortelle om Long-dynastiets norske aner, det vil si slekten Bohre, i århundret før de første medlemmene emigrerer til Kina. Det innebærer at det norske 20. århundret må rekonstrueres, og dette gjøres via en metode som kalles «fiksjonalisert historie» – hvilket betyr at fiksjonen nå regnes for å være den sjanger som kan gi størst innsikt om fortiden. Man har med andre ord gjenoppdaget fortellingens uvurderlige funksjon i menneskenes liv.",
      "Det er derfor vi får høre om en ganske spesiell villa på Lysaker, og en familie som har sitt utspring i denne. Det er derfor det fortelles om pasifisten Harald Bohre, som ombestemmer seg da tyskerne invaderer Norge, og som legger seg i forsvarsstilling bak en Colt-mitraljøse ved Fossum bro.",
      "Det er derfor det fortelles om Laila Bohre, som i barndommen blir mobbet fordi moren er på Gaustad sykehus, men som senere er nær ved å bli sammen med kronprins Harald. Isteden går hun om bord i MS Bergensfjord som lugarpike, bare for å bli filmstjerne og ende opp i baugen på SS Norway, idet skipet seiler inn Geirangerfjorden.",
      "Videre får vi høre om bluesgitaristen Bård, som blir kjæreste med Joni Mitchell i Laurel Canyon; vi møter radikaleren Roar i Paris under studentopprøret i 1968 – Roar som siden skriver Den store røde; vi møter den unge ministeren Ingri, datter av innvandreren Prem Bhandari, som bestemmer seg for å hoppe av hele det politiske sirkuset; vi møter Statoil-ansatte Marcus som blir kidnappet under et oppdrag i Lagos, Nigeria; vi møter ikke minst tvillingene Karl og Fredrik som forsøker å gjøre verden om til Kardemommeby.",
      "Men først og sist møter vi Rita Bohre, som vi følger fra samtalene med Fridtjof Nansen, tidlig på 1900-tallet, gjennom flere kjærlighetsforhold og en karriere som paleontolog, med urfisk på Svalbard som spesialitet, til hun dør under eiketreet i hagen mens hun minnes den kvelden hun sto på talerstolen i Universitetets Aula og tok et drabelig oppgjør med sin livslange motstander Max Qviller.",
      "Slekters gang er kanskje mest av alt en fortelling om staute kvinner, om et århundre da kvinner forbedret sine livsvilkår og grep sine muligheter på en radikalt ny måte. Rita Bohres livsverk kalles Femina erecta og handler om at kvinnen må stå oppreist. Samtidig er det et oppgjør med menns krokoddilementalitet.",
      "Romanen er formet som tre konsentriske sirkler. Første del tar for seg begivenheter under den andre verdenskrigen. Neste del beveger seg fremover mot 1970-årene og bakover mot 1920-årene. Tredje del bringer fortellingene frem til 2012, samtidig som de går helt tilbake til 1800-tallet.",
      "Gjennom sin komposisjon søker romanen etter alternative årsakssammenhenger. Slekters gang viser hvordan skjebner kan være flettet sammen på uventede måter. Det spekuleres om diagonale, kanskje også sirkulære, virkninger. De kinesiske fortellerne leter etter emblematiske historier, historier som har blitt fortalt så mange ganger, utgjør en så sterk «narrativ ballast», at de har preget etterkommerne, med andre ord også dem selv.",
    ],
    en: [
      "The Path of Kins is a novel with a large cast of characters. Among them we meet Albert Bohre who on a kayaking trip in his childhood is frightened almost to death by a humpback whale and who as an adult becomes one of the world's greatest and most bloodthirsty whaling magnates. In 1956 he attends the Olympics in Melbourne and sees Egil Danielsen win the gold medal for Norway. Something about the world-record throw, the sight of the javelin soaring through the air, causes him to re-evaluate everything.",
      "Maud Evensen lives in Krokskogen, in Maud's Land. After the Second World War she travels around the world in search of a boyfriend, but does not find him until she comes home again, at the \"Lost Luggage\" window at the Fornebu airport. Nonetheless, she does not know then that she will become a radio presenter more popular than Rolf Kirkvåg, thanks to her agreeable voice.",
      "Or take, for example, Konrad Steen who comes from a working class background and is a vicar at the Tøyen Church. On Christmas Eve in 1938 he loses his faith, right in the middle of his sermon.",
      "But the novel opens as follows:",
      "Norway was a country on the outskirts of the part of the world called Europe. For somebody who has flown over the large peninsula, in northwest Slavia, it is undoubtedly incomprehensible that this wilderness was once inhabited, that there were cities here and an efficiently functioning infrastructure. At the time of its zenith as a nation, in the 2000s, Norway is to have been inhabited by a population of around seven million. We don't know exactly how many \"Norwegians\" or descendants of Norwegians are living in this landscape today, but it can hardly be more than a few thousand. They are called \"the Norwegian tribe\" and in part are mercenary barbarians who roam about in the border zone of the enormous wasteland we know as Forum Europeum, and in part groups who forage in the dirt by day and drink potato spirits by night.",
      "Approximately 2000 years have passed in relation to the present day, and we find ourselves in the Chinese Federation. All stored data and information were lost during an enormous catastrophe a thousand years before, but because individuals from the Long dynasty hold many key positions, and because the Long dynasty considers Norway to be its original homeland, a group led by three women has been assigned the task of telling the story of the Long dynasty's Norwegian ancestry, in other words the Bohre family, during the century before the first members emigrate to China. This implies that 20th century Norway must be reconstructed and this is done using a method called \"fictionalized history\" – which means that fiction is now considered the genre that can provide the greatest insight on the past. In other words, the invaluable function of storytelling in people's lives has been rediscovered.",
      "For this reason we read about a villa in Lysaker that is quite special, and a family conceived within it. For this reason a story is told about the pacifist Harald Bohre, who reverses his stance when the Germans invade Norway and lies behind a Colt machine gun near the Fossum Bridge ready to defend his country.",
      "For this reason the story of Laila Bohre is told, who in her childhood is bullied because her mother is in the Gaustad Psychiatric Hospital, but who later finds herself on the verge of entering into a romantic relationship with Crown Prince Harald. Instead, she boards the MS Bergensfjord as a cabin stewardess, and goes on to become a film star and ends up on the bow of the SS Norway, as the ship sails into the Geiranger Fjord.",
      "We also read about the blues guitarist Bård, who becomes Joni Mitchell's boyfriend in Laurel Canyon; we meet Roar the radical in Paris during the student protests in 1968 – Roar who later writes The Red Wine Bible; we meet the young minister Ingri, daughter of the immigrant Prem Bhandari, who decides to abandon the entire political circus; we meet the Statoil employee Marcus who is kidnapped while on assignment in Lagos, Nigeria; and finally, we meet the twins Karl and Fredrik who try to transform the world into Cardamom Town.",
      "But first and foremost we meet Rita Bohre, as we follow her conversations with Fridtjof Nansen in the early 20th century, through a number of love affairs and a career as a palaeontologist with primitive fish of Svalbard as her area of expertise, until she dies beneath the oak tree in her garden, reminiscing about the evening she stood behind the podium in the University Aula and staged a dramatic showdown with her life-long nemesis Max Qviller.",
      "The Path of Kins is perhaps above all a story about robust women, about a century during which women improved their living conditions and grasped opportunities in a radically new fashion. Rita Bohre's life's work is called Femina erecta and is about how women must stand tall. At the same time, it is a taking to task of the male reptilian mindset.",
      "The novel is structured in three concentric circles. The first part addresses events during the Second World War. The next part moves forward to the 1970s and backwards to the 1920s. The third part continues the stories up to 2012, while simultaneously going all the way back to the 19th century.",
      "Through its composition the novel seeks alternative causal connections. The Path of Kins shows how destinies can be intertwined in unexpected ways. The Chinese story-tellers search for emblematic stories, stories that have been told so many times, constitute such powerful \"narrative ballast\" that they have made a lasting impression on the descendants, in other words also on themselves.",
    ],
  },
}


export default function SlektersGang() {
  const { lang } = useLanguage()

  const buy = content.buyLink[lang]

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">

        <h2
          className="
            text-center
            text-2xl
            font-medium
            tracking-widest
            font-['Playfair_Display',serif]
            mb-2
          "
        >
          {content.title[lang]}
        </h2>

        <p className="text-center text-sm tracking-[0.08em] text-neutral-500 font-['Lora',serif] mb-10">
          {content.meta[lang]}
        </p>

        {/* Cover image */}
        <div className="flex flex-col items-center md:float-right md:ml-10 md:mb-4 mb-8">
          <img
            src={content.coverImage.src}
            alt={content.title[lang]}
            className="w-44 md:w-48 md:mt-4 h-auto object-contain"
          />

          <a
            href={buy.href}
            target="_blank"
            rel="noreferrer"
            className="
              mt-3
              mb-2
              md:mb-0
              text-sm
              tracking-[0.06em]
              font-['Lora',serif]
              text-neutral-600
              underline
              underline-offset-4
              decoration-neutral-400
              hover:text-black
              hover:decoration-neutral-800
              transition
            "
          >
            {buy.label}
          </a>
        </div>

        {/* Body text */}
        <div className="
          text-base
          leading-7
          tracking-[0.04em]
          font-['Lora',serif]
          text-black
          space-y-6
        ">
          {content.paragraphs[lang].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="clear-both" />
        </div>

        {/* Quotes / Reviews */}
        <h3
          className="
            uppercase
            text-xl
            tracking-[0.12em]
            font-['Playfair_Display_SC',serif]
            mt-14
            md:mt-10
            mb-6
          "
        >
          {content.quotesTitle[lang]}
        </h3>

        <div className="space-y-8">
          {content.quotes.map((q, i) => (
            <div key={i} className="border-l-2 border-black/10 pl-5">
              <p className="
                font-['Lora',serif]
                text-base
                leading-7
                tracking-[0.04em]
                text-black
                italic
              ">
                {q.text}
              </p>
              <div className="flex items-center gap-3 mt-2">
                {q.diceImg && (
                  <img
                    src={q.diceImg}
                    alt="Terningkast"
                    className="h-7 w-auto shrink-0"
                  />
                )}
                <p className="
                  text-sm
                  tracking-[0.08em]
                  font-['Lora',serif]
                  text-neutral-500
                ">
                  {q.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cover art credit */}
        <div className="flex flex-col items-center mt-14">
          <img
            src="/images/omslag-slekters-gang.jpg"
            alt="Bokomslag Slekters gang"
            className="w-full h-auto object-contain"
          />
          <p className="
            self-start
            text-sm
            tracking-[0.08em]
            font-['Lora',serif]
            text-neutral-500
            mt-4
          ">
            Omslag: Terese Moe Leiner
          </p>
        </div>

      </div>
    </section>
  )
}
