"use client"

import { useState } from "react"
import type { KladskaKuća } from "@/types"
import { KladionicaKartica } from "./kladionica-kartica"
import { KladionicaDetalji } from "./kladionica-detalji"
import { ListOrdered, Filter } from "lucide-react"

interface KladionicaListaProps {
  kuće: KladskaKuća[]
}

export function KladioniceLista({ kuće }: KladionicaListaProps) {
  const [odabranaKuća, setOdabranaKuća] = useState<KladskaKuća | null>(null)

  return (
    <section id="kladionice" className="py-12 md:py-3">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Licencirane Kladionice u Srbiji</h2>
            <p className="text-slate-600 mt-2">Uporedite najbolje betting platforme prema nasim nezavisnim ocenama</p>
          </div>

          
        </div>

        {/* Filter bar - transparent with blur */}
        

        {/* Cards */}
        <div className="space-y-4">
          {kuće.map((kuća, index) => (
            <KladionicaKartica
              key={kuća.id}
              kuća={kuća}
              pozicija={index + 1}
              onDetailsClick={() => setOdabranaKuća(kuća)}
            />
          ))}
        </div>

        {/* Disclaimer - transparent */}
        <div className="mt-8 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/50">
          <p className="text-xs text-slate-500 text-center">
            Svi bonusi podlezu uslovima i odredbama pojedinacnih operatera. Proverite aktuelne ponude direktno na sajtu
            kladionice pre registracije. Kladenje je namenjeno iskljucivo punoletnim licima (18+).
          </p>
        </div>
      </div>

      {odabranaKuća && (
        <KladionicaDetalji kuća={odabranaKuća} isOpen={!!odabranaKuća} onClose={() => setOdabranaKuća(null)} />
      )}
    </section>
  )
}
