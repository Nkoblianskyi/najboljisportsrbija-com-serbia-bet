"use client"

import { useState } from "react"
import type { KladskaKuća } from "@/types"
import { KladionicaKartica } from "./kladionica-kartica"
import { KladionicaDetalji } from "./kladionica-detalji"
import { Crown, BadgeCheck, Sparkles } from "lucide-react"

interface NasIzborProps {
  kuća: KladskaKuća
}

export function NasIzbor({ kuća }: NasIzborProps) {
  const [showDetalji, setShowDetalji] = useState(false)

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Header Card */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 p-6 mb-5">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='1' fillRule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex items-center gap-4">
              
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Preporuka Eksperata</h2>
                <p className="text-blue-100 text-sm">NajboljiSportSrbija.com - Novembar 2025</p>
              </div>
            </div>

            <div className="flex-1 md:border-l md:border-white/20 md:pl-6">
              <p className="text-white/90">
                Na osnovu detaljne analize svih parametara, nasa redakcija preporucuje
                <span className="font-bold text-white"> {kuća.naziv} </span>
                kao optimalnu platformu za igrace u Srbiji.
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="relative z-10 flex flex-wrap gap-2 mt-5">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
              <BadgeCheck className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Verifikovano</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400/30 backdrop-blur-sm rounded-full">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-medium text-white">Najbolja Ocena 2025</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
              <Crown className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Izbor Redakcije</span>
            </div>
          </div>
        </div>

        <KladionicaKartica kuća={kuća} pozicija={1} onDetailsClick={() => setShowDetalji(true)} isHighlighted />

        {showDetalji && <KladionicaDetalji kuća={kuća} isOpen={showDetalji} onClose={() => setShowDetalji(false)} />}
      </div>
    </section>
  )
}
