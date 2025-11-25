"use client"

import Image from "next/image"
import { Star, ExternalLink } from "lucide-react"
import type { KladskaKuća } from "@/types"
import Link from "next/link"

interface KladionicaKarticaProps {
  kuća: KladskaKuća
  pozicija: number
  onDetailsClick: () => void
  isHighlighted?: boolean
}

export function KladionicaKartica({ kuća, pozicija, onDetailsClick, isHighlighted }: KladionicaKarticaProps) {
  const renderStars = (ocena: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = ocena / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-4 w-4 text-slate-200" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-4 w-4">
            <Star className="absolute h-4 w-4 text-slate-200" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  const getBadgeText = (pozicija: number) => {
    switch (pozicija) {
      case 1:
        return "Najbolja ponuda"
      case 2:
        return "Popularno"
      case 3:
        return "Trend"
      default:
        return null
    }
  }

  const badgeText = getBadgeText(pozicija)

  return (
    <div
      className={`relative rounded-xl bg-white/95 backdrop-blur-sm border transition-all duration-200 hover:shadow-lg mt-3 ${
        pozicija === 1
          ? "border-blue-400 shadow-md ring-1 ring-blue-200"
          : isHighlighted
            ? "border-blue-300 ring-2 ring-blue-100 shadow-md"
            : "border-slate-200 hover:border-blue-300"
      }`}
    >
      {/* Badge */}
      {badgeText && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 z-10 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
            pozicija === 1
              ? "bg-blue-500 text-white"
              : pozicija === 2
                ? "bg-amber-400 text-slate-900"
                : "bg-slate-600 text-white"
          }`}
        >
          {badgeText}
        </div>
      )}

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-[240px_1fr_180px_180px] items-center gap-6 p-6">
          {/* Logo */}
          <Link
            href={kuća.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-6 h-[120px] rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
          >
            <div className="relative h-24 w-full bg-slate-900 p-4 rounded-md">
              <Image
                src={kuća.logo || "/placeholder.svg"}
                alt={`${kuća.naziv} logo`}
                fill
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </div>
          </Link>

          {/* Bonus info */}
          <div className="flex flex-col items-center">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Bonus Dobrodošlice</p>
            <h3 className="font-bold text-slate-900 leading-tight text-xl text-center">{kuća.bonus}</h3>
            {kuća.dopBonus && <p className="font-medium text-amber-500 mt-1 text-xl">{kuća.dopBonus}</p>}
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-slate-900 mb-1">{kuća.ocena.toFixed(1)}</div>
            <div className="flex items-center gap-0.5 mb-1">{renderStars(kuća.ocena)}</div>
            <p className="text-xs text-slate-400">{kuća.recenzije.toLocaleString()} recenzija</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-stretch gap-2">
            <Link
              href={kuća.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-lg text-sm uppercase tracking-wide transition-colors"
            >
              Preuzmi Bonus
              <ExternalLink className="h-4 w-4" />
            </Link>
            <button
              onClick={onDetailsClick}
              className="font-medium text-sm text-slate-500 hover:text-blue-500 transition-colors py-2"
            >
              Više Detalja
            </button>
          </div>
        </div>

        {/* Terms */}
        <div className="px-6 py-3 bg-slate-50/80 border-t border-slate-100 rounded-b-xl">
          <p className="text-xs text-slate-400 text-center">{kuća.uslovi}</p>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        <div className="p-4 pt-6">
          <div className="flex gap-4 items-center">
            {/* Logo - 45% width */}
            <Link
              href={kuća.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 w-[45%] h-24 rounded-lg bg-slate-50 flex-shrink-0"
            >
              <div className="relative h-16 w-full bg-slate-900 p-2 rounded-md">
                <Image
                  src={kuća.logo || "/placeholder.svg"}
                  alt={`${kuća.naziv} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Bonus text */}
            <div className="flex-1 flex flex-col items-center text-center">
              <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-1">Bonus Dobrodošlice</p>
              <h3 className="font-bold text-slate-900 leading-tight text-sm">{kuća.bonus}</h3>
              {kuća.dopBonus && <p className="font-medium text-amber-500 mt-0.5 text-sm">{kuća.dopBonus}</p>}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4 items-center">
            {/* Column 1: Rating */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-slate-900">{kuća.ocena.toFixed(1)}</div>
              <p className="text-[10px] text-slate-400">Ocena</p>
            </div>

            {/* Column 2: Stars & Reviews */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-0.5">{renderStars(kuća.ocena)}</div>
              <p className="text-[10px] text-slate-400 mt-0.5">{kuća.recenzije.toLocaleString()} recenzija</p>
            </div>

            {/* Column 3: Button */}
            <div className="flex flex-col items-stretch gap-1">
              <Link
                href={kuća.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded-lg text-[10px] uppercase tracking-wide transition-colors"
              >
                Bonus
                <ExternalLink className="h-3 w-3" />
              </Link>
              <button
                onClick={onDetailsClick}
                className="py-1 text-[10px] font-medium text-slate-500 hover:text-blue-500 transition-colors"
              >
                Detalji
              </button>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="px-4 py-2 bg-slate-50/80 border-t border-slate-100 rounded-b-xl">
          <p className="text-[10px] text-slate-400 text-center">{kuća.uslovi}</p>
        </div>
      </div>
    </div>
  )
}
