"use client"

import { CustomDialog } from "@/components/ui/custom-dialog"
import { Star, ExternalLink, Shield, Clock, CreditCard, Headphones, Gift } from "lucide-react"
import type { KladskaKuća } from "@/types"
import Image from "next/image"
import Link from "next/link"

interface KladionicaDetaljiProps {
  kuća: KladskaKuća
  isOpen: boolean
  onClose: () => void
}

export function KladionicaDetalji({ kuća, isOpen, onClose }: KladionicaDetaljiProps) {
  const renderStars = (ocena: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = ocena / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-5 w-5 text-slate-200" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-5 w-5">
            <Star className="absolute h-5 w-5 text-slate-200" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  const features = [
    { icon: Shield, label: "Licencirano", value: "Srbija" },
    { icon: Clock, label: "Isplata", value: "Do 24h" },
    { icon: CreditCard, label: "Min. Depozit", value: "500 RSD" },
    { icon: Headphones, label: "Podrska", value: "24/7" },
  ]

  return (
    <CustomDialog
      isOpen={isOpen}
      onClose={onClose}
      title={`${kuća.naziv} - Detaljna Recenzija`}
      description="Kompletne informacije o betting platformi"
    >
      <div className="space-y-5">
        {/* Logo */}
        <div className="bg-slate-50 rounded-xl p-6 flex items-center justify-center border border-slate-100">
          <div className="relative h-16 w-full max-w-[200px]">
            <Image src={kuća.logo || "/placeholder.svg"} alt={kuća.naziv} fill className="object-contain" />
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-1">{renderStars(kuća.ocena)}</div>
          <span className="text-3xl font-bold text-slate-900">{kuća.ocena.toFixed(1)}</span>
          <span className="text-sm text-slate-400">/ 10</span>
        </div>
        <p className="text-center text-sm text-slate-500">{kuća.recenzije.toLocaleString()} korisnickih recenzija</p>

        {/* Bonus highlight */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-white/80" />
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Bonus Dobrodoslice</span>
          </div>
          <p className="text-xl font-bold text-white mb-1">{kuća.bonus}</p>
          {kuća.dopBonus && <p className="text-lg font-semibold text-blue-200">{kuća.dopBonus}</p>}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-3">
          {features.map((f, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <f.icon className="w-4 h-4 text-blue-500 mb-1.5" />
              <p className="text-xs text-slate-500">{f.label}</p>
              <p className="text-sm font-semibold text-slate-900">{f.value}</p>
            </div>
          ))}
        </div>

        {/* Terms */}
        <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
          <h4 className="font-semibold text-slate-900 mb-1.5 text-sm">Uslovi i Odredbe</h4>
          <p className="text-xs text-slate-600 leading-relaxed">{kuća.uslovi}</p>
        </div>

        {/* CTA */}
        <Link
          href={kuća.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold py-3.5 px-6 rounded-xl text-center shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
          onClick={onClose}
        >
          Posetite {kuća.naziv}
          <ExternalLink className="w-4 h-4" />
        </Link>

        <p className="text-xs text-center text-slate-400">
          18+ | Primenjuju se uslovi i odredbe | Kladite se odgovorno
        </p>
      </div>
    </CustomDialog>
  )
}
