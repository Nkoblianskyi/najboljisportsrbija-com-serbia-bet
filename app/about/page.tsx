import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Target, Shield, Award, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O Nama | najboljisportsrbija.com",
  description: "Upoznajte tim iza najboljisportsrbija.com - nezavisnog portala za analizu betting platformi u Srbiji.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />

      <main className="py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider">O Nama</span>
            <h1 className="text-xl md:text-2xl font-bold mt-1 text-slate-900">Ko Stoji Iza NajboljiSportSrbija</h1>
            <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
              Posveceni smo pruzanju objektivnih informacija o betting industriji u Srbiji.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <div className="rounded-lg p-5 bg-white border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-emerald-50 flex items-center justify-center">
                  <Target className="h-4 w-4 text-emerald-600" />
                </div>
                <h2 className="text-base font-semibold text-slate-900">Nasa Misija</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                najboljisportsrbija.com je nastao sa ciljem da pomogne korisnicima u Srbiji da pronadju pouzdane betting
                platforme. Nas zadatak je da izdvojimo one koje zaista nude vrednost.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sve nase recenzije baziramo na stvarnom iskustvu koriscenja platformi, bez ulepasavanja ili
                precutkivanja nedostataka.
              </p>
            </div>

            <div className="rounded-lg p-5 bg-white border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-amber-50 flex items-center justify-center">
                  <Award className="h-4 w-4 text-amber-600" />
                </div>
                <h2 className="text-base font-semibold text-slate-900">Nas Pristup</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                Svaka betting stranica prolazi kroz detaljan proces evaluacije. Nasi analiticari se registruju kao
                obicni korisnici i koriste platformu minimum mesec dana pre formiranja konacne ocene.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pratimo sest kljucnih kategorija: bezbednost, sportska ponuda, koeficijenti, bonusi, metode placanja i
                korisnicka podrska.
              </p>
            </div>

            <div className="rounded-lg p-5 bg-white border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-emerald-50 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-emerald-600" />
                </div>
                <h2 className="text-base font-semibold text-slate-900">Transparentnost</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                Kao affiliate portal, ostvarujemo provizije kada se korisnici registruju putem nasih linkova. Ova
                cinjenica je poznata i nikada je ne krijemo.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nasa reputacija zavisi od poverenja korisnika. Zato nikada necemo preporuciti platformu koja ne
                ispunjava nase standarde kvaliteta.
              </p>
            </div>

            <div className="rounded-lg p-5 bg-white border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </div>
                <h2 className="text-base font-semibold text-slate-900">Nase Vrednosti</h2>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  <span>
                    <strong className="text-slate-900">Objektivnost</strong> - Ocene bazirane na cinjenicama i licnom
                    iskustvu.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  <span>
                    <strong className="text-slate-900">Azurnost</strong> - Redovno azuriramo informacije.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  <span>
                    <strong className="text-slate-900">Odgovornost</strong> - Promovisemo odgovorno kladjenje.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  <span>
                    <strong className="text-slate-900">Pristupacnost</strong> - Informacije su dostupne svima besplatno.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg p-4 text-center bg-emerald-50 border border-emerald-100">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Imate Pitanja?</h3>
              <p className="text-xs text-slate-600 mb-2">Slobodno nas kontaktirajte za bilo kakve sugestije.</p>
              <p className="font-medium text-emerald-600 text-sm">kontakt@najboljisportsrbija.com</p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
