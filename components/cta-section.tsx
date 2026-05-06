"use client"

import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export function CtaSection() {
  const { t } = useLanguage()

  return (
    <section id="order" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-primary-foreground shadow-2xl shadow-primary/30 animate-in fade-in slide-in-from-bottom-4 duration-500 md:px-12 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-grain opacity-20"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-balance text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-primary-foreground/90 md:text-lg">
              {t.cta.subtitle}
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                asChild
                size="lg"
                className="group h-14 rounded-full bg-background px-8 text-base font-bold text-foreground shadow-2xl hover:bg-background/95"
              >
                <a href="#locations">
                  <MapPin className="h-5 w-5 text-primary" />
                  {t.nav.locations}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
