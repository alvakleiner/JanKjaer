import { BookPageBody, BookPageQuotes } from "../../components/BookPage"
import type { BookPageContent } from "../../components/BookPage"

const enTidForALeveContent: BookPageContent = {
  title: { no: "En tid for å leve", en: "A Time to Live" },
  meta: { no: "Roman (2021)", en: "Novel (2021)" },
  buyLink: {
    no: { label: "Kjøp boken her", href: "https://aschehoug.no/en-tid-for-a-leve-3" },
    en: { label: "Buy the book here", href: "https://aschehoug.no/en-tid-for-a-leve-3" },
  },
  coverImage: {
    src: "/images/en-tid-for-a-leve-3d.png",
  },
  quotesTitle: { no: "Sitater", en: "Quotes" },
  quotes: [
    {
      text: "«Det som skjer i og med En tid for å leve er intet mindre enn stor romankunst. Jan Kjærstad trenger ikke å bekrefte noe som helst lenger, men du verden som han gjør det likevel.»",
      source: "Tom Hammerø, Nettavisen",
      diceImg: "/images/terningkast6.png",
    },
    {
      text: "«Romanen har karakter av en thriller, med mye attåt. Det er litterært snop til glede for lesenerder. Alt innenfor en stram og stilsikker komposisjon.»",
      source: "Inger Bentzrud, Dagbladet",
      diceImg: "/images/terningkast5.png",
    },
    {
      text: "«Målbevisst, mangesidig og thrilleraktig om liv og død. Det hele er dyktig og medrykkende gjort.»",
      source: "Steinar Sivertsen, Stavanger Aftenblad",
      diceImg: "/images/terningkast5.png",
    },
    {
      text: "«Jan Kjærstad har skrive ein glimrande kjærstadsk roman, rik på detaljar, spenning og saker til ettertanke.»",
      source: "Marta Norheim, NRK",
    },
    {
      text: "«Lekent om livet. Jan Kjærstads nyeste er et godt valg for godstolen utover høsten.»",
      source: "Gerd Elin Stava Sandve, Dagsavisen",
    },
    {
      text: "«Leken, kritisk og nyansert. … Jan Kjærstad mestrer sin valgte form. De mange synsvinklene tilfører en tredimensjonal nyanserikdom og lekenhet, uten å fjerne romanens kritiske brodd.»",
      source: "Leif Bull, Dagens Næringsliv",
    },
    {
      text: "«… en fascinerende roman som kombinerer mer eller mindre raffinert nasjonal selvpisking og selvhevdelse med hyllest til gode ting.»",
      source: "Terje Eidsvåg, Adresseavisen",
    },
    {
      text: "«Kjærstads mesterlige evne til å komponere fortellinger, legge ut ledetråder, belyse mennesker fra ulike vinkler – noe som også var fremtredende i trilogien om Jonas Wergeland – kommer også fram i denne romanen. Her er dessuten samtidskritikk av kjendisliv, sosiale medier og hysteriet rundt avisenes anmeldelser i et herlig satirisk og lekent språk. … Lesningen av denne boken blir uunngåelig en kommentar til tiden vi nettopp har vært gjennom.»",
      source: "Valborg Orset Stene, Vårt Land",
    },
    {
      text: "«Òg i årets roman er Kjærstad ute etter å kartlegge kva som særmerkjer vår tid. … Kjærstads forteljing er på si side ikkje keisam. Den er på alle måtar dramatisk med eit episenter lagt til hovudscenen på Nationaltheatret. … Kjærstad leiker seg med dramatikk, sjanger, verkelegheitseffektar, litterære referansar, krysspunkt og puslespelbrikker som knyter menneska i teatersalen saman.»",
      source: "Margunn Vikingstad, Morgenbladet",
    },
    {
      text: "«… en kløktig studie av det største spørsmålet i hans eget felt: Hvilke krefter befinner seg i litteraturen? Kan også litteratur skape liv. … I Kjærstads laboratorium finner vi både tunge og lette svar om litteraturens mulighet til inngripen i verden …»",
      source: "Elin Kittelsen, Bokmagasinet Klassekampen",
    },
  ],
  paragraphs: {
    no: [
      "Vi er i mars 2019, og tolv mennesker kommer fra hver sin kant av byen – noen også med båt, tog og fly – og møtes i Nationaltheatret for å overvære premieren på Hedda Gabler.",
      "Men dette er ikke en roman om teater. Det er en roman om den umistelige verdien av å møtes, sitte tett sammen i en sal – noe som ble et dypt savn ett år senere, da koronaen tvang oss inn i isolasjon. Vekten ligger på den historien hvert av disse menneskene bringer med seg inn i dette krysspunktet, og på hvordan disse personene påvirker hverandres liv uten at de er klar over det. Det er en roman om det kraftfeltet som oppstår når vi møtes. Om hvordan historiene våre er koblet til hverandre.",
      "Vi er alle hverandres ukjente faktor. Vi bærer hverandres løsninger.",
      "En av personene er Eystein Laudal, 29 år, og lærer ved Hadeland videregående. Han er i teateret sammen med klassen sin for å se på det stykket de har gjennomgått på skolen. Problemet er at han ikke klarer å konsentrere seg, han tenker bare på Jenny, en elev han har stått altfor tett inntil ved et flygel da de befant seg alene på et av skolens øverom. I flere døgn har han sett for seg avisoverskriftene: «Lærer antastet elev på Hadeland.» Han frykter at han vil bli rammet av en metoo-skandale og miste jobben. Det eneste han tenker på, er at han må få snakket med Jenny i pausen.",
      "En annen er Rakel Borg, 23 år, som er i teater sammen med faren, en mann som har lidd et offentlig nederlag og tilbringer dagene sammen med en flaske gin i vinterhagen sin. Hun vil nå støtte ham ved å reise seg midt under forestillingen og rope høyt, som en protest. Også mot en verden som er ferd med å bli kjørt fullstendig i grøfta. Hun har studert stykket og vet nøyaktig etter hvilken replikk hun skal stå opp og rope. Spørsmålet er om hun våger det. Og hvis hun våger det: hva som da vil skje?",
      "En tredje person er Frans Otteren, 53 år, som holder på å snu i vestibylen i Nationaltheatret, fordi han ikke vet om han orker å se Ibsens stykke. Det er bare noen år siden han fant datteren sin i en nedsnødd hytte ved Tyin i Jotunheimen, hvor hun hadde begått selvmord. Tilsynelatende helt uten grunn. I tiden etterpå har han grublet på hvorfor hun gjorde det. Å se et teaterstykke hvor hovedrolleinnehaversken skyter seg selv i siste akt, er et ledd i det psykologene kaller eksponeringsterapi. Men vil han klare å utholde det?",
      "Denne romanen, lagt til mars 2019, handler om alt vi ikke vet om hva som vil skje til neste år. Den handler om å ta vare på de avgjørende øyeblikkene i våre liv.",
      "Romanen handler også om den desperate lengselen etter å få oppmerksomhet som preger mange mennesker i dag.",
      "Den tolvte personen er Hedda Christine Foss som spiller hovedrollen i Ibsens stykke. Teateret har lagd et slagord for forestillingen: Hedda er Hedda. Hva verken publikum eller de andre personene i romanen vet, er at Hedda står på scenen med en pistol som er ladd med skarpe skudd.",
      "På tredje rad sitter en forhenværende kjæreste. På fjerde rad sitter en forhatt kritiker. På første rad sitter landets statsminister.",
      "Jo da, dette er også en spennende roman.",
    ],
    en: [
      "Twelve people are heading to the National Theatre in Oslo. Each of them with a ticket to the opening night of a new staging of Henrik Ibsen's Hedda Gabler.",
      "Amongst them, a teacher who got a little too close to his student and is now dreading a public scandal. A father, who has recently lost his daughter to suicide, unsure of whether he can handle watching someone get shot in the final act. And a young activist planning to get up and shout out her protest in the middle of the play.",
      "Ready to take the stage is Hedda Christine Foss, playing the part of Ibsen's Hedda. No one knows that the gun she will carry with her on stage is real and loaded.",
      "Seated in the third row is her former lover. In the fourth, a hated critic. And in the very first, the Norwegian Prime Minister.",
    ],
  },
}

export default function enTidForALeve() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-4 mb-16">
        <BookPageBody content={enTidForALeveContent} />
        <BookPageQuotes content={enTidForALeveContent} />

        <div className="flex flex-col items-center sm:flex-row gap-3 sm:gap-4 mt-10 sm:justify-center">
          <img
            src="/images/en-tid-for-a-leve-utdrag.jpg"
            alt=""
            className="w-2/3 sm:w-auto sm:h-96 object-contain object-top"
          />
          <img
            src="/images/press/jkfr1.jpg"
            alt=""
            className="w-2/3 sm:w-auto sm:h-96 object-contain object-top"
          />
        </div>
      </div>
    </section>
  )
}
