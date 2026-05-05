import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
import { FeaturesSection } from "@/components/features-section"
import { LocationsSection } from "@/components/locations-section"
import { ScheduleSection } from "@/components/schedule-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <MenuSection />
        <FeaturesSection />
        <LocationsSection />
        <ScheduleSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
