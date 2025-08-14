import styles from "./marquee-strip.module.css"

type Item = {
  icon: string
  text: string
}

export default function MarqueeStrip({ items }: { items: Item[] }) {
  const row = (
    <div className="flex items-center gap-10 md:gap-16">
      {items.map((item, i) => (
        <div key={i} className="flex shrink-0 items-center gap-3">
          <span className="text-2xl md:text-3xl">{item.icon}</span>
          <span className="whitespace-nowrap text-xl font-extrabold leading-none text-white md:text-2xl">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  )

  return (
    <div className="relative mt-10 w-full">
      <div className="h-[84px] w-full bg-[#082A57]" role="region" aria-label="Funding benefits scrolling banner">
        <div className={styles.marquee}>
          <div className={styles.track} aria-hidden="true">
            {row}
            <div className="mx-10 h-6 w-px bg-white/20 md:mx-16" />
            {row}
            <div className="mx-10 h-6 w-px bg-white/20 md:mx-16" />
            {row}
            <div className="mx-10 h-6 w-px bg-white/20 md:mx-16" />
            {row}
          </div>
          {/* Duplicate for seamless loop */}
          <div className={styles.track} aria-hidden="true">
            {row}
            <div className="mx-10 h-6 w-px bg-white/20 md:mx-16" />
            {row}
            <div className="mx-10 h-6 w-px bg-white/20 md:mx-16" />
            {row}
            <div className="mx-10 h-6 w-px bg-white/20 md:mx-16" />
            {row}
          </div>
        </div>
      </div>
    </div>
  )
}
