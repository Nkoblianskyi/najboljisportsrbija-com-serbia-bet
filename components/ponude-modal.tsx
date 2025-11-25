"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, X, Gift, Trophy, Shield, ArrowRight } from "lucide-react"
import type { KladskaKuća } from "@/types"

interface PonudeModalProps {
  kuće: KladskaKuća[]
}

export function PonudeModal({ kuće }: PonudeModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const renderStars = (zvezde: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < zvezde) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)
      } else {
        starElements.push(<Star key={i} className="h-4 w-4 text-slate-300" />)
      }
    }

    return starElements
  }

  const topKuća = kuće[0]

  if (!topKuća || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-105"
        >
          <X className="h-5 w-5 text-slate-600" />
        </button>

        {/* Header with gradient */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-6 py-8 text-center">
          <div className="absolute inset-0 bg-[url('/serbia-sports-celebration.jpg')] bg-cover bg-center opacity-20" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              
              Ekskluzivna Ponuda
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Najbolja Kladionica u Srbiji</h2>
            <p className="text-blue-100 text-sm">Registruj se danas i preuzmi ekskluzivan bonus</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative h-24 w-56 p-4 bg-black rounded-xl border border-slate-200">
              <Image src={topKuća.logo || "/placeholder.svg"} alt={topKuća.naziv} fill className="object-contain p-2" />
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex gap-1">{renderStars(topKuća.zvezde)}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-xl text-slate-800">{topKuća.ocena.toFixed(1)}</span>
              <span className="text-sm text-slate-500">/ 10.0</span>
            </div>
            <span className="text-sm text-slate-400">|</span>
            <span className="text-sm text-slate-500">{topKuća.recenzije} recenzija</span>
          </div>

          {/* Bonus card */}
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-blue-100 p-6 mb-6">
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-3">
              <span className="text-sm font-semibold uppercase tracking-wide">Dobrodošlica Bonus</span>
            </div>
            <p className="font-bold text-2xl md:text-2xl text-slate-800 text-center mb-2">{topKuća.bonus}</p>
            {topKuća.dopBonus && <p className="font-semibold text-2xl text-blue-600 text-center">{topKuća.dopBonus}</p>}
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center p-3 bg-slate-50 rounded-lg">
              <span className="text-xs text-slate-600 font-medium">Licencirana</span>
            </div>
            <div className="text-center p-3 bg-slate-50 rounded-lg">
              <span className="text-xs text-slate-600 font-medium">Top Kvote</span>
            </div>
            <div className="text-center p-3 bg-slate-50 rounded-lg">
              <span className="text-xs text-slate-600 font-medium">Brze Isplate</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={topKuća.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-[1.02]"
            onClick={() => setIsOpen(false)}
          >
            Preuzmi Bonus Sada
            <ArrowRight className="h-5 w-5" />
          </a>

          {/* Disclaimer */}
          <p className="text-[11px] text-slate-400 text-center mt-4 leading-relaxed">
            18+ | Primenjuju se Uslovi i Pravila | Igrajte Odgovorno | begambleaware.org
          </p>
        </div>
      </div>
    </div>
  )
}
