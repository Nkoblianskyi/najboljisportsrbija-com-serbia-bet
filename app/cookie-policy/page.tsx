import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politika Kolacica | najboljisportsrbija.com",
  description: "Saznajte kako najboljisportsrbija.com koristi kolacice i slicne tehnologije pracenja.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />

      <main className="py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider">Pravna Dokumenta</span>
            <h1 className="text-xl md:text-2xl font-bold mt-1 text-slate-900">Politika Kolacica</h1>
            <p className="text-sm text-slate-500 mt-2">
              Poslednje azuriranje:{" "}
              {new Date().toLocaleDateString("sr-Latn-RS", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          {/* Main Content */}
          <div className="rounded-lg p-5 md:p-6 space-y-5 bg-white border border-slate-200">
            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">1. Sta su Kolacici?</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                Kolacici su male tekstualne datoteke koje se smestaju na vas uredjaj kada posetite web sajt. Omogucavaju
                sajtu da zapamti vase radnje i podesavanja.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Koriste se za bolje funkcionisanje web sajtova i pruzanje informacija vlasnicima sajta.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">2. Vrste Kolacica</h2>

              <div className="space-y-2">
                <div className="p-3 rounded bg-slate-50 border border-slate-100">
                  <h3 className="font-medium text-slate-900 text-sm mb-1">Neophodni Kolacici</h3>
                  <p className="text-xs text-slate-600">
                    Kljucni za funkcionisanje sajta. Omogucavaju osnovne funkcije kao sto su navigacija.
                  </p>
                </div>

                <div className="p-3 rounded bg-slate-50 border border-slate-100">
                  <h3 className="font-medium text-slate-900 text-sm mb-1">Analiticki Kolacici</h3>
                  <p className="text-xs text-slate-600">
                    Koristimo Google Analytics za prikupljanje anonimnih informacija o posecenosti.
                  </p>
                </div>

                <div className="p-3 rounded bg-slate-50 border border-slate-100">
                  <h3 className="font-medium text-slate-900 text-sm mb-1">Funkcionalni Kolacici</h3>
                  <p className="text-xs text-slate-600">
                    Omogucavaju sajtu da zapamti vase izbore i pruzaju personalizovane funkcije.
                  </p>
                </div>

                <div className="p-3 rounded bg-slate-50 border border-slate-100">
                  <h3 className="font-medium text-slate-900 text-sm mb-1">Marketinski Kolacici</h3>
                  <p className="text-xs text-slate-600">
                    Koriste se za pracenje posetilaca i prikazivanje relevantnih oglasa.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">3. Kolacici Trecih Strana</h2>
              <ul className="space-y-1.5 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  <span>
                    <strong className="text-slate-900">Google Analytics</strong> - za analizu posecenosti
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  <span>
                    <strong className="text-slate-900">Affiliate partneri</strong> - betting platforme mogu postavljati
                    svoje kolacice
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">4. Upravljanje Kolacicima</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                Mozete kontrolisati kolacice u podesavanjima vaseg pretrazivaca:
              </p>
              <ul className="space-y-1.5 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  <span>
                    <strong className="text-slate-900">Chrome:</strong> Podesavanja - Privatnost - Kolacici
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  <span>
                    <strong className="text-slate-900">Firefox:</strong> Opcije - Privatnost - Kolacici
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  <span>
                    <strong className="text-slate-900">Safari:</strong> Podesavanja - Privatnost - Kolacici
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  <span>
                    <strong className="text-slate-900">Edge:</strong> Podesavanja - Privatnost - Kolacici
                  </span>
                </li>
              </ul>
              <p className="text-slate-500 text-xs mt-2">
                Napomena: Blokiranje kolacica moze uticati na funkcionalnost sajta.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">5. Rok Cuvanja</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sesijski kolacici se brisu kada zatvorite pretrazivac. Trajni kolacici ostaju odredjen period ili dok ih
                rucno ne obrisete.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">6. Kontakt</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-1">
                Za sva pitanja u vezi sa koriscenjem kolacica:
              </p>
              <p className="font-medium text-emerald-600">kontakt@najboljisportsrbija.com</p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
