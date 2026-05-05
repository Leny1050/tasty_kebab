"use client"

import { MapPin, Navigation, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LOCATIONS } from "@/lib/config"
import { useLanguage } from "./language-provider"

export function LocationsSection() {
  const { t } = useLanguage()

  return (
    <section id="locations" className="relative py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary animate-in fade-in slide-in-from-bottom-3 duration-500">
            <MapPin className="h-3.5 w-3.5" />
            {t.locations.eyebrow}
          </div>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-balance text-4xl leading-[1] tracking-tight md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-3 duration-500 [animation-delay:100ms]">
            {t.locations.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg animate-in fade-in slide-in-from-bottom-3 duration-500 [animation-delay:150ms]">
            {t.locations.subtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc, idx) => (
            <article
              key={loc.id}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border-2 border-foreground/8 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${Math.min(idx * 60, 360)}ms` }}
            >
              {/* Number badge */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md transition-all group-hover:scale-110">
                  <MapPin className="h-5 w-5" strokeWidth={2.4} />
                </div>
                <span className="font-display rounded-full bg-accent/30 px-3 py-1 text-sm tracking-wider text-foreground/80">
                  {t.locations.district}: {loc.district}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  №{(idx + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="font-display mt-1 text-2xl leading-tight tracking-wide text-foreground">
                  {loc.address}
                </h3>
              </div>

              <div className="mt-auto flex gap-2 pt-2">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="flex-1 rounded-full border-2 border-foreground/15 font-semibold"
                >
                  <a href={loc.phoneHref}>
                    <Phone className="h-4 w-4" />
                    {loc.phone}
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="flex-1 rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="h-4 w-4" />
                    {t.locations.mapBtn}
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}