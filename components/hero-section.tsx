"use client"

import Image from "next/image"
import { ArrowRight, Phone, Star, Clock, MapPin, Flame, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"
import { SITE_CONFIG } from "@/lib/config"

export function HeroSection() {
  const { t } = useLanguage()

  const stats = [
    { value: "5", label: t.hero.stats.locations, icon: MapPin },
    { value: "30+", label: t.hero.stats.items, icon: Flame },
    { value: "15 мин", label: t.hero.stats.years, icon: Star },
    { value: "24/7", label: t.hero.stats.open, icon: Clock },
  ]

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Decorative warm gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] bg-gradient-to-b from-accent/40 via-accent/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-[520px] w-[520px] rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* === LEFT: text === */}
        <div className="relative z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary animate-in fade-in slide-in-from-bottom-3 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t.hero.badgeEst} · {t.hero.stats.open}
          </div>

          <h1 className="font-display mt-6 text-balance text-5xl leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px] animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-delay:50ms]">
            {t.hero.title1}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">{t.hero.title2}</span>
              <span
                aria-hidden="true"
                className="absolute -inset-x-2 bottom-2 -z-0 h-3 bg-accent/70 md:h-4 lg:h-5"
              />
            </span>
            <br />
            {t.hero.title3}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-delay:150ms]">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-delay:250ms]">
            <Button
              asChild
              size="lg"
              className="group h-14 w-full rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 sm:w-auto"
            >
              <a href="#menu">
                {t.hero.ctaMenu}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-full border-2 border-foreground/15 bg-background/70 px-8 text-base font-bold backdrop-blur hover:bg-background sm:w-auto"
            >
              <a href={SITE_CONFIG.brand.phoneHref}>
                <Phone className="h-4 w-4" />
                {t.hero.ctaCall}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-14 w-full rounded-full border-2 border-foreground/10 bg-foreground px-8 text-base font-bold text-background shadow-lg hover:bg-foreground/90 sm:w-auto"
            >
              <a href={SITE_CONFIG.brand.glovoUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="h-4 w-4 text-accent" />
                Glovo
              </a>
            </Button>
          </div>

          {/* Stats line */}
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:400ms]">
            {stats.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" strokeWidth={2.4} />
                  </div>
                  <div>
                    <dt className="font-display text-2xl leading-none text-foreground">{s.value}</dt>
                    <dd className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</dd>
                  </div>
                </div>
              )
            })}
          </dl>
        </div>

        {/* === RIGHT: photo === */}
        <div className="relative order-1 mx-auto w-full max-w-xl lg:order-2 animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-700">
          {/* Yellow rotating disc behind photo */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-full bg-accent/70 shadow-[0_30px_80px_-20px_rgba(212,160,23,0.6)] motion-safe:animate-[spin_60s_linear_infinite]"
          />

          {/* Main photo */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border-[6px] border-background bg-background shadow-2xl">
            <Image
              src="/hero-shawarma.webp"
              alt="Tasty Kebab — суккулентная шаурма с курицей и картофелем фри"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
          </div>

          {/* Price sticker */}
          <div className="absolute -left-4 top-6 z-20 flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-background bg-primary text-center text-primary-foreground shadow-2xl animate-in zoom-in-90 duration-500 [animation-delay:500ms] md:-left-6 md:h-32 md:w-32">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">
              {t.hero.pricePill.split(" ")[0]}
            </span>
            <span className="font-display text-3xl leading-none md:text-4xl">
              60
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">
              MDL
            </span>
          </div>

          {/* Top right stamp */}
          <div className="absolute -right-3 -top-3 z-20 flex h-20 w-20 flex-col items-center justify-center rounded-full border-4 border-primary bg-accent text-center font-display text-foreground shadow-xl animate-in zoom-in-90 duration-500 [animation-delay:650ms] md:-right-4 md:h-24 md:w-24">
            <span className="text-[9px] font-bold uppercase tracking-widest">OPEN</span>
            <span className="text-2xl leading-none md:text-3xl">24/7</span>
          </div>

          {/* Bottom rating chip */}
          <div className="absolute -bottom-5 right-6 flex items-center gap-3 rounded-2xl border border-border/60 bg-background px-4 py-3 shadow-xl animate-in fade-in slide-in-from-bottom-3 duration-500 [animation-delay:800ms]">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" strokeWidth={0} />
              ))}
            </div>
            <div className="leading-none">
              <div className="font-display text-base">4.9</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">2 400+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
