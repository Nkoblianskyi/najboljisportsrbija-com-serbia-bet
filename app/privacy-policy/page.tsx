import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politika Privatnosti | najboljisportsrbija.com",
  description: "Saznajte kako najboljisportsrbija.com prikuplja, koristi i stiti vase licne podatke.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />

      <main className="py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider">Pravna Dokumenta</span>
            <h1 className="text-xl md:text-2xl font-bold mt-1 text-slate-900">Politika Privatnosti</h1>
            <p className="text-sm text-slate-500 mt-2">
              Poslednje azuriranje:{" "}
              {new Date().toLocaleDateString("sr-Latn-RS", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          {/* Main Content */}
          <div className="rounded-lg p-5 md:p-6 space-y-5 bg-white border border-slate-200">
            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">1. Uvod</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                najboljisportsrbija.com postuje privatnost svojih posetilaca. Ova Politika Privatnosti objasnjava koje
                informacije prikupljamo, kako ih koristimo i stitimo.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Koriscenjem naseg portala prihvatate prakse opisane u ovoj Politici Privatnosti.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">2. Podaci Koje Prikupljamo</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                <strong className="text-slate-900">Automatski prikupljeni podaci:</strong> IP adresa, tip pretrazivaca,
                operativni sistem, vreme posete i pregledane stranice.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                <strong className="text-slate-900">Kolacici:</strong> Koristimo kolacice za poboljsanje korisnickog
                iskustva.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong className="text-slate-900">Dobrovoljno dostavljeni podaci:</strong> Ukoliko nas kontaktirate,
                mozemo sacuvati vasu email adresu.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">3. Svrha Obrade Podataka</h2>
              <ul className="space-y-1.5 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  Pruzanje i unapredjenje funkcionalnosti portala
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  Analizu posecenosti radi optimizacije sadrzaja
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  Odgovaranje na vase upite
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  Sprecavanje zloupotreba i bezbednost portala
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">4. Deljenje Podataka</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                Ne prodajemo niti iznajmljujemo vase licne podatke trecim stranama. Podaci se dele sa:
              </p>
              <ul className="space-y-1.5 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  <span>
                    <strong className="text-slate-900">Pruzaocima usluga:</strong> Google Analytics i hosting servisi.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  <span>
                    <strong className="text-slate-900">Zakonski zahtevi:</strong> Ukoliko to zahteva zakon.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">5. Bezbednost Podataka</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Primenjujemo razumne tehnicke i organizacione mere za zastitu vasih podataka od neovlascenog pristupa.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">6. Vasa Prava</h2>
              <ul className="space-y-1.5 text-slate-600 text-sm mb-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  Pravo pristupa podacima
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  Pravo ispravke netacnih podataka
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  Pravo brisanja vasih podataka
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-emerald-500" />
                  Pravo prigovora na obradu
                </li>
              </ul>
              <p className="text-slate-600 text-sm">
                Kontakt: <span className="text-emerald-600">kontakt@najboljisportsrbija.com</span>
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-2 text-slate-900">7. Kontakt</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-1">
                Za sva pitanja u vezi sa ovom Politikom Privatnosti:
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
