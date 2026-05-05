"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, Phone, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "./logo"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "./language-provider"
import { SITE_CONFIG } from "@/lib/config"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navItems = [
    { label: t.nav.menu, href: "#menu" },
    { label: t.nav.locations, href: "#locations" },
    { label: t.nav.schedule, href: "#schedule" },
    { label: t.nav.contacts, href: "#contacts" },
  ]

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 animate-in fade-in slide-in-from-top-3",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(0,0,0,0.18)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="#" className="group flex items-center gap-3" aria-label="Tasty Kebab home">
          <Logo size={scrolled ? 48 : 56} />
          <div className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-2xl tracking-wide text-foreground">
              Tasty <span className="text-primary">Kebab</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Chișinău · 24/7
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Button
            asChild
            size="sm"
            variant="secondary"
            className="hidden rounded-full bg-foreground font-semibold text-background shadow-md hover:bg-foreground/90 md:inline-flex"
          >
            <a href={SITE_CONFIG.brand.glovoUrl} target="_blank" rel="noopener noreferrer">
              <ShoppingBag className="mr-1 h-4 w-4 text-accent" />
              <span className="hidden xl:inline">Glovo</span>
              <span className="xl:hidden">Glovo</span>
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-primary font-semibold text-primary-foreground shadow-md shadow-primary/25 hover:bg-primary/90 md:inline-flex"
          >
            <a href={SITE_CONFIG.brand.phoneHref}>
              <Phone className="mr-1 h-4 w-4" />
              <span className="hidden xl:inline">{SITE_CONFIG.brand.phone}</span>
              <span className="xl:hidden">{t.hero.ctaCall}</span>
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="Open menu"
              >
                <span className="grid place-items-center">
                  {open ? (
                    <X className="h-5 w-5 transition-transform duration-150 motion-safe:animate-in motion-safe:fade-in" />
                  ) : (
                    <Menu className="h-5 w-5 transition-transform duration-150 motion-safe:animate-in motion-safe:fade-in" />
                  )}
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm p-0">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex h-full flex-col bg-background">
                <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <Logo size={44} />
                    <span className="font-display text-xl tracking-wide">
                      Tasty <span className="text-primary">Kebab</span>
                    </span>
                  </div>
                </div>
                <nav className="flex flex-col gap-1 p-4">
                  {navItems.map((item, i) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 font-display text-2xl tracking-wide text-foreground transition-all hover:bg-primary/10 hover:text-primary motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-2"
                      style={{ animationDelay: `${Math.min(i * 60, 300)}ms` }}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto space-y-3 border-t border-border/60 p-5">
                  <div className="flex justify-center">
                    <LanguageSwitcher />
                  </div>
                  <Button
                    asChild
                    className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
                    size="lg"
                  >
                    <a href={SITE_CONFIG.brand.glovoUrl} target="_blank" rel="noopener noreferrer">
                      <ShoppingBag className="mr-2 h-4 w-4 text-accent" />
                      Заказать в Glovo
                    </a>
                  </Button>
                  <Button asChild className="w-full rounded-full bg-primary text-primary-foreground" size="lg">
                    <a href={SITE_CONFIG.brand.phoneHref}>
                      <Phone className="mr-2 h-4 w-4" />
                      {SITE_CONFIG.brand.phone}
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
