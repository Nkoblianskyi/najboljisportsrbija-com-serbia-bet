"use client"

import { kladskeKuce } from "@/types"
import { SiteHeader } from "@/components/site-header"
import { HeroBanner } from "@/components/hero-banner"
import { KladioniceLista } from "@/components/kladionice-lista"
import { MetodologijaOcenjivanja } from "@/components/metodologija-ocenjivanja"
import { SiteFooter } from "@/components/site-footer"
import { PonudeModal } from "@/components/ponude-modal"
import { CookieBanner } from "@/components/cookie-banner"
import { TopKladioniceSrbija } from "@/components/top-kladionice-srbija"
import { NasIzbor } from "@/components/nas-izbor"
import { AboutUsSection } from "@/components/about-us-section"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background image for entire page */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url('/serbia-sports-celebration.jpg')`,
        }}
      />
      {/* Light overlay for readability */}
      <div className="fixed inset-0 bg-white/95 -z-10" />

      <SiteHeader />
      <main>
        <HeroBanner />
        <KladioniceLista kuće={kladskeKuce} />
        <AboutUsSection />
        <TopKladioniceSrbija />
        <MetodologijaOcenjivanja />
        <NasIzbor kuća={kladskeKuce[0]} />
      </main>
      <SiteFooter />
      <PonudeModal kuće={kladskeKuce} />
      <CookieBanner />
    </div>
  )
}
