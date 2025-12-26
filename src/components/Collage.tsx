const covers = [
    "/images/kdsr1.jpg",
    "/images/valgdager.jpg",
    "/images/toenatt1b1.jpg",
    "/images/toenatt2b1.jpg",
    "/images/mr-woolf.jpg",
    "/images/menneskets-bolger.jpg",
    "/images/rand1.jpg",
    "/images/jpdsv1.jpg",


    "/images/menneskets-vidde1.jpg",
    "/images/Kongen-av-Europa1.jpg",
    "/images/mirandas1.jpg",
    "/images/forforeren1.jpg",
    "/images/erobreren1.jpg",
    "/images/oppdageren1.jpg",
    "/images/kjaerstads-matrise1.jpg",
    "/images/stein1.jpg",


    "/images/berge.jpg",
    "/images/slekters-gang1.jpg",
    "/images/homo-falsus1.jpg",
    "/images/en-tid-for-a-leve.jpg",
    "/images/walker1.jpg",
    "/images/ttk1.jpg",
    "/images/hsfd1.jpg",
    "/images/normans-omraade1.jpg",
]



function BibliografiHeaderCollage() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-10">
        <div
        className="
            grid
            grid-cols-6
            grid-rows-4
            gap-3
            md:grid-cols-8
            md:grid-rows-3
        "
        >
          {covers.slice(0, 24).map((src, i) => (
            <div
              key={i}
              className="
                aspect-2/3
                overflow-hidden
                bg-neutral-100
                rounded-sm
              "
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BibliografiHeaderCollage
