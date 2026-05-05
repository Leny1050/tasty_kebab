"use client"

import { useLanguage } from "./language-provider"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border-2 border-foreground/15 bg-background/80 p-1 shadow-sm backdrop-blur",
        className,
      )}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLocale("ro")}
        aria-pressed={locale === "ro"}
        className={cn(
          "rounded-full px-3 py-1 font-display text-sm tracking-widest transition-all duration-200",
          locale === "ro"
            ? "bg-primary text-primary-foreground shadow-md"
            : "text-foreground/70 hover:text-foreground",
        )}
      >
        RO
      </button>
      <button
        type="button"
        onClick={() => setLocale("ru")}
        aria-pressed={locale === "ru"}
        className={cn(
          "rounded-full px-3 py-1 font-display text-sm tracking-widest transition-all duration-200",
          locale === "ru"
            ? "bg-primary text-primary-foreground shadow-md"
            : "text-foreground/70 hover:text-foreground",
        )}
      >
        RU
      </button>
    </div>
  )
}
