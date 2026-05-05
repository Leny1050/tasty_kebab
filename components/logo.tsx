import Image from "next/image"
import { SITE_CONFIG } from "@/lib/config"
import { cn } from "@/lib/utils"

export function Logo({ className, size = 56 }: { className?: string; size?: number }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className="relative shrink-0 overflow-hidden rounded-full shadow-md"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.webp"
          alt={`${SITE_CONFIG.brand.name} logo`}
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}