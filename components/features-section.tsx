"use client"

import { Clock, Flame, Heart, Leaf, type LucideIcon } from "lucide-react"
import { useLanguage } from "./language-provider"

const ICONS: LucideIcon[] = [Flame, Clock, Leaf, Heart]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-foreground py-20 text-background md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            <Flame className="h-3.5 w-3.5" />
            {t.features.eyebrow}
          </span>
          <h2 className="font-display mt-5 text-balance text-4xl leading-[1] tracking-tight md:text-6xl lg:text-7xl">
            {t.features.title}{" "}
            <span className="text-accent">Tasty</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((f, idx) => {
            const Icon = ICONS[idx] ?? Flame
            return (
              <div
                key={f.title}
                className="rounded-3xl border-2 border-background/10 bg-background/[0.04] p-6 backdrop-blur transition-all hover:border-accent/40 hover:bg-background/[0.08] animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${Math.min(idx * 80, 400)}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/40">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="font-display mt-5 text-2xl tracking-wide">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
