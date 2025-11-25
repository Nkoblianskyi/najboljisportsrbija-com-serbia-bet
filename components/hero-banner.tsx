"use client"

import Image from "next/image"
import { Shield, Award, TrendingUp } from "lucide-react"

export function HeroBanner() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("sr-Latn-RS", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section className="relative min-h-[400px] md:min-h-[420px] overflow-hidden">
      <Image
        src="/serbia-sports-celebration.jpg"
        alt="Srpsko sportsko slavlje"
        fill
        className="object-cover"
        priority
      />

      {/* Blue gradient overlay on top of image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-slate-900/75" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto max-w-5xl px-4 py-8 md:py-10">
        <div className="max-w-2xl">
          {/* Date badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-medium text-white/90">Azurirano: {formattedDate}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Vodic za Klađenje
            <span className="block text-blue-300">u Republici Srbiji</span>
          </h1>

          <p className="text-base md:text-lg text-blue-100/80 leading-relaxed mb-8 max-w-lg">
            Nezavisna platforma za analizu i rangiranje licenciranih sportskih kladionica. Objektivne recenzije
            zasnovane na realnom testiranju.
          </p>

          {/* Stats row */}

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Image src="/flag.png" alt="Licencirane Platforme" width={24} height={24} />
              <span>Licencirane Platforme</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Award className="h-4 w-4 text-blue-400" />
              <span>Verifikovane Recenzije</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <TrendingUp className="h-4 w-4 text-blue-400" />
              <span>Objektivne Ocene</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade - transparent now */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/90 to-transparent" />
    </section>
  )
}
