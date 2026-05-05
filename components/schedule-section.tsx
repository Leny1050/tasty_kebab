"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"
import { SCHEDULE } from "@/lib/config"
import { useLanguage } from "./language-provider"

export function ScheduleSection() {
  const { t } = useLanguage()

  const [todayIndex, setTodayIndex] = useState<number | null>(null)

  useEffect(() => {
    // Avoid SSR/client mismatch: compute "today" only on client.
    const d = new Date().getDay() // 0=Sun..6=Sat
    setTodayIndex(d === 0 ? 6 : d - 1) // schedule: mon..sun (0=mon)
  }, [])

  return (
    <section
      id="schedule"
      className="relative overflow-hidden bg-secondary/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary animate-in fade-in slide-in-from-bottom-3 duration-500">
            <Clock className="h-3.5 w-3.5" />
            {t.schedule.eyebrow}
          </div>

          <h2 className="font-display mt-4 text-4xl leading-[1] tracking-tight md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-3 duration-500 [animation-delay:100ms]">
            {t.schedule.title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-muted-foreground md:text-lg animate-in fade-in slide-in-from-bottom-3 duration-500 [animation-delay:150ms]">
            {t.schedule.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border-2 border-foreground/8 bg-card shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:200ms]">
          {/* Header strip with diagonal stripes */}
          <div className="relative h-3 stripe-bar" aria-hidden="true" />

          <ul className="divide-y divide-border">
            {SCHEDULE.map((row, idx) => {
              const dayLabel = t.schedule.days[row.dayKey as keyof typeof t.schedule.days]
              const isToday = todayIndex === idx
              return (
                <li
                  key={row.dayKey}
                  className={`flex items-center justify-between px-6 py-4 transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <span
                        className="relative flex h-2 w-2"
                        aria-label="today"
                      >
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                      </span>
                    )}
                    <span
                      className={`font-display text-xl tracking-wide ${
                        isToday ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {dayLabel}
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-foreground/80 md:text-base">
                    {row.hours}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
