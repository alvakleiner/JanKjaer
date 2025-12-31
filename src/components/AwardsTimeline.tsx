type AwardItem = {
  year: string
  title: string
  description?: string
}

export default function AwardsTimeline({
  items,
}: {
  items: readonly AwardItem[]
}) {
  return (
    <div className="mt-6">
      <ul className="space-y-6">
        {items.map((a, idx) => (
          <li key={idx} className="flex gap-5">
            <div className="w-16 shrink-0 text-sm tracking-[0.12em] font-['Lora',serif] text-black/70">
              {a.year}
            </div>

            <div className="relative flex-1">
              <div className="absolute left-[-18px] top-2 h-full w-px bg-black/10" />
              <div className="absolute left-[-22px] top-2 h-2.5 w-2.5 rounded-full bg-black/30" />

              <div className="rounded-xl border border-black/10 bg-white px-5 py-4">
                <div className="font-['Lora',serif] text-black">{a.title}</div>

                {a.description && (
                  <p className="mt-2 text-sm leading-6 tracking-[0.03em] text-black/80 font-['Lora',serif]">
                    {a.description}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
