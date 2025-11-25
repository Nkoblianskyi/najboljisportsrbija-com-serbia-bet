import { ShieldCheck, TrendingUp, Zap, Clock, Award } from "lucide-react"

export function MetodologijaOcenjivanja() {
  const standardi = [
    {
      ikona: ShieldCheck,
      naslov: "Licencirani Operateri",
      tekst: "Saradjujemo iskljucivo sa platformama koje poseduju vazece licence od regulatornih tela u Srbiji i EU.",
      akcent: "bg-blue-500",
    },
    {
      ikona: TrendingUp,
      naslov: "Transparentne Kvote",
      tekst: "Analiziramo marze i koeficijente na preko 1000 dogadjaja mesecno kako bismo utvrdili fer ponudu.",
      akcent: "bg-sky-500",
    },
    {
      ikona: Zap,
      naslov: "Brze Isplate",
      tekst: "Testiramo vreme obrade zahteva za povlacenje sredstava na svakoj platformi koju preporucujemo.",
      akcent: "bg-indigo-500",
    },
    {
      ikona: Clock,
      naslov: "24/7 Podrska",
      tekst: "Ocenjujemo kvalitet i dostupnost korisnicke sluzbe putem razlicitih kanala komunikacije.",
      akcent: "bg-violet-500",
    },
  ]

  const faze = [
    { broj: "01", naziv: "Prikupljanje Podataka", opis: "Analiziramo sve javno dostupne informacije o platformi" },
    { broj: "02", naziv: "Registracija i Verifikacija", opis: "Prolazimo kompletan proces otvaranja naloga" },
    { broj: "03", naziv: "Testiranje Funkcionalnosti", opis: "Koristimo sve opcije kladjenja minimum 30 dana" },
    { broj: "04", naziv: "Finansijska Evaluacija", opis: "Vrsimo depozite i zahtevamo isplate raznim metodama" },
    { broj: "05", naziv: "Zavrsna Ocena", opis: "Formiramo konacnu ocenu na osnovu svih prikupljenih podataka" },
  ]

  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header sa drugacijim layoutom */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="lg:max-w-xl">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2 block">
              Nasi Standardi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Pouzdana Metodologija Zasnovana na Cinjenicama
            </h2>
          </div>
          <p className="text-slate-600 lg:max-w-sm lg:text-right">
            Svaka kladionica na nasoj listi prosla je detaljan proces evaluacije koji traje minimum mesec dana.
          </p>
        </div>

        {/* Standardi - horizontal cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {standardi.map((s, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${s.akcent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <s.ikona className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.naslov}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.tekst}</p>
            </div>
          ))}
        </div>

        {/* Proces - timeline style */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5" />
              Proces Evaluacije Kladionica
            </h3>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-5 gap-4">
              {faze.map((f, idx) => (
                <div key={idx} className="relative">
                  {/* Connector line */}
                  {idx < faze.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-200" />
                  )}

                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-3 relative z-10">
                      {f.broj}
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">{f.naziv}</h4>
                    <p className="text-xs text-slate-500">{f.opis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <span className="block text-2xl font-bold text-blue-600">50+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Parametara</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-blue-600">30</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Dana Testiranja</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-blue-600">100%</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Nezavisnost</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-blue-600">15+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Analiziranih Kladionica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
