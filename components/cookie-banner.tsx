"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie, Shield, BarChart3, Settings } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Cookie className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg">Podesavanja Kolacica</h3>
              <p className="text-blue-100 text-sm">Upravljajte vasim preferencijama</p>
            </div>
          </div>
          <button
            onClick={handleDecline}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            Koristimo kolacice kako bismo poboljsali vase iskustvo pregledanja, analizirali saobracaj na sajtu i pruzili
            personalizovani sadrzaj. Mozete izabrati koje kolacice zelite da prihvatite.
          </p>

          {/* Cookie types */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800 text-sm">Neophodni Kolacici</h4>
                <p className="text-slate-500 text-xs">Uvek aktivni za osnovno funkcionisanje</p>
              </div>
              <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="h-4 w-4 text-amber-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800 text-sm">Analiticiki Kolacici</h4>
                <p className="text-slate-500 text-xs">Pomazu nam da razumemo posete sajtu</p>
              </div>
              <div className="w-10 h-5 bg-slate-300 rounded-full relative">
                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Settings className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800 text-sm">Funkcionalni Kolacici</h4>
                <p className="text-slate-500 text-xs">Omogucavaju napredne funkcije sajta</p>
              </div>
              <div className="w-10 h-5 bg-slate-300 rounded-full relative">
                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleAccept}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 text-base rounded-xl"
            >
              Prihvati Sve
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium py-3 text-base bg-transparent rounded-xl"
            >
              Samo Neophodni
            </Button>
          </div>

          {/* Footer link */}
          <div className="mt-4 pt-4 border-t border-slate-100 text-center">
            <Link href="/politika-kolacica" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
              Procitajte nasu Politiku Kolacica
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
