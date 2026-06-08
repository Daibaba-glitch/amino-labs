import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { CoaSection } from "@/components/coa-section"
import { DosageCalculator } from "@/components/dosage-calculator"
import { BlogSection } from "@/components/blog-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBadges />
        <CoaSection />
        <DosageCalculator />
        <BlogSection />
      </main>
      <SiteFooter />
    </>
  )
}
