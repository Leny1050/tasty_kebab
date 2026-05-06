"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Plus, Sparkles, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MENU_CATEGORIES, MENU_ITEMS, SITE_CONFIG, type MenuItem } from "@/lib/config"
import { useLanguage } from "./language-provider"
import { cn } from "@/lib/utils"

export function MenuSection() {
  const { t, locale } = useLanguage()
  const [activeId, setActiveId] = useState<string>(MENU_CATEGORIES[0].id)

  const visibleItems = useMemo(
    () => MENU_ITEMS.filter((it) => it.category === activeId),
    [activeId],
  )

  return (
    <section id="menu" className="relative overflow-hidden py-20 md:py-28">
      {/* Decorative top divider — diagonal red/cream stripe */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-3 stripe-bar opacity-90"
      />

      {/* Soft warm halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 -z-10 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* === HEADER === */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary animate-in fade-in slide-in-from-bottom-3 duration-500">
            <Flame className="h-3.5 w-3.5" />
            {t.menu.eyebrow}
          </div>

          <h2 className="font-display mx-auto mt-4 max-w-3xl text-balance text-4xl leading-[1] tracking-tight md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-3 duration-500 [animation-delay:100ms]">
            {t.menu.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg animate-in fade-in slide-in-from-bottom-3 duration-500 [animation-delay:150ms]">
            {t.menu.subtitle}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="font-semibold">{MENU_ITEMS.length}</span>
            <span className="opacity-75">
              {locale === "ro" ? "produse" : "позиций"}
            </span>
          </div>
        </div>

        {/* === CATEGORY PILLS === */}
        <div className="no-scrollbar mt-10 -mx-4 flex justify-start gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:justify-center md:gap-3 md:px-0">
          {MENU_CATEGORIES.map((cat) => {
            const active = cat.id === activeId
            const label = t.categories[cat.id as keyof typeof t.categories]
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={cn(
                  "relative shrink-0 rounded-full border-2 px-5 py-2.5 font-display text-base tracking-wider transition-all duration-200",
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-[1.02]"
                    : "border-foreground/15 bg-background text-foreground/75 hover:border-primary/40 hover:text-primary",
                )}
                aria-pressed={active}
              >
                {label}
              </button>
            )
          })}
        </div>

        {/* === ITEMS GRID === */}
        <div className="mt-12">
          <div
            key={activeId + locale}
            className="grid grid-cols-1 gap-5 animate-in fade-in slide-in-from-bottom-3 duration-300 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {visibleItems.map((item, idx) => (
              <MenuCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const { t, locale } = useLanguage()
  const hasImage = Boolean(item.image)

  const description = item.description[locale] ?? item.description.ru

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-foreground/8 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-500"
      style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
    >
      {/* IMAGE */}
      {hasImage ? (
        <div className="relative aspect-[5/4] overflow-hidden bg-secondary">
          <Image
            src={item.image as string}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-60"
          />
          {item.badge && (
            <span
              className={cn(
                "absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest shadow-lg",
                item.badge === "HIT" && "bg-primary text-primary-foreground",
                item.badge === "TOP" && "bg-foreground text-accent",
                item.badge === "NEW" && "bg-accent text-accent-foreground",
              )}
            >
              {t.badges[item.badge]}
            </span>
          )}

          {/* floating price tag on top-right */}
          <div className="absolute right-3 top-3 flex items-baseline gap-1 rounded-full bg-background/95 px-3 py-1.5 shadow-lg backdrop-blur">
            <span className="font-display text-lg leading-none text-primary">{item.price}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/60">
              {t.menu.currency}
            </span>
          </div>
        </div>
      ) : (
        // ===== Drinks / no image: stylish minimal card =====
        <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-gradient-to-br from-accent/40 via-accent/20 to-primary/5">
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/40 blur-2xl"
          />
          <div className="relative flex flex-col items-center gap-2 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-background/80 shadow-lg backdrop-blur">
              <span className="font-display text-3xl text-primary">
                {item.name.charAt(0)}
              </span>
            </div>
            <span className="rounded-full bg-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-background">
              {locale === "ro" ? "Băutură" : "Напиток"}
            </span>
          </div>
          <div className="absolute right-3 top-3 flex items-baseline gap-1 rounded-full bg-background/95 px-3 py-1.5 shadow-lg backdrop-blur">
            <span className="font-display text-lg leading-none text-primary">{item.price}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/60">
              {t.menu.currency}
            </span>
          </div>
        </div>
      )}

      {/* TEXT */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-xl leading-tight tracking-wide text-foreground md:text-2xl">
            {item.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-3xl leading-none text-foreground">
              {item.price}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {t.menu.currency}
            </span>
          </div>
          <Button
            size="sm"
            asChild
            className="h-10 gap-1.5 rounded-full bg-primary px-4 font-semibold text-primary-foreground shadow shadow-primary/20 hover:bg-primary/90"
          >
            <a href={SITE_CONFIG.brand.glovoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.menu.addBtn} ${item.name}`}>
              <Plus className="h-4 w-4" strokeWidth={2.5} />
              {t.menu.addBtn}
            </a>
          </Button>
        </div>
      </div>
    </article>
  )
}
