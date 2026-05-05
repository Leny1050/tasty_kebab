"use client"

import { Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Logo } from "./logo"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "./language-provider"
import { LOCATIONS, SITE_CONFIG } from "@/lib/config"

export function SiteFooter() {
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.menu, href: "#menu" },
    { label: t.nav.locations, href: "#locations" },
    { label: t.nav.schedule, href: "#schedule" },
    { label: t.nav.contacts, href: "#contacts" },
  ]

  return (
    <footer
      id="contacts"
      className="relative overflow-hidden border-t-4 border-primary bg-foreground py-16 text-background md:py-20"
    >
      {/* top stripe accent */}
      <div className="absolute inset-x-0 top-0 h-1.5 stripe-bar" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* === BRAND === */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Logo size={64} />
              <div>
                <div className="font-display text-3xl tracking-wide">
                  Tasty <span className="text-primary">Kebab</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-background/60">
                  Chișinău · 24/7
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
              {t.footer.tagline}
            </p>

            <div className="mt-6">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-background/50">
                {t.footer.followUs}
              </h4>
              <div className="mt-3 flex items-center gap-2">
                <a
                  href={SITE_CONFIG.brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-background/15 bg-background/5 px-4 py-2 text-sm font-medium text-background transition-all hover:border-accent hover:bg-accent hover:text-foreground"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="font-mono">@{SITE_CONFIG.brand.instagramHandle}</span>
                </a>
              </div>
            </div>

            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>

          {/* === CONTACTS === */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-background/50">
              {t.footer.contacts}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={SITE_CONFIG.brand.phoneHref}
                  className="group flex items-center gap-3 text-sm text-background transition-colors hover:text-accent"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-foreground">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="font-display text-lg tracking-wide">{SITE_CONFIG.brand.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.brand.emailHref}
                  className="group flex items-center gap-3 text-sm text-background/85 transition-colors hover:text-accent"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-background/15 transition-colors group-hover:border-accent group-hover:text-accent">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="break-all">{SITE_CONFIG.brand.email}</span>
                </a>
              </li>
            </ul>

            <h4 className="mt-8 text-[11px] font-bold uppercase tracking-widest text-background/50">
              Navigare
            </h4>
            <ul className="mt-3 grid grid-cols-2 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-background/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* === ADDRESSES === */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-background/50">
              {t.footer.addresses}
            </h4>
            <ul className="mt-4 space-y-3">
              {LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-sm text-background/85 transition-colors hover:text-accent"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary transition-colors group-hover:text-accent" />
                    <span>
                      <span className="block font-medium">{loc.address}</span>
                      <span className="text-xs text-background/55">{loc.district}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/55 md:flex-row md:items-center">
          <p>
            © 2026 {SITE_CONFIG.brand.name}. {t.footer.rights}.
          </p>
          <p>
            Made with <span className="text-primary">♥</span> in Chișinău
          </p>
        </div>
      </div>
    </footer>
  )
}
