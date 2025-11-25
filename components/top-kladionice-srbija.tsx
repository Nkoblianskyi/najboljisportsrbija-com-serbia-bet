import { Crosshair, ShieldCheck, BarChart3, RefreshCw, UserCheck, Scale } from "lucide-react"

export function TopKladioniceSrbija() {
  const principi = [
    {
      icon: Crosshair,
      naslov: "Precizna Evaluacija",
      opis: "Svaka kladionica prolazi kroz 50+ parametara pre uvrstavanja u rang listu.",
    },
    {
      icon: ShieldCheck,
      naslov: "Garantovana Sigurnost",
      opis: "Samo operateri sa validnom licencom za teritoriju Srbije.",
    },
    {
      icon: BarChart3,
      naslov: "Javna Metodologija",
      opis: "Transparentni kriterijumi dostupni svim korisnicima na uvid.",
    },
    {
      icon: RefreshCw,
      naslov: "Kontinuirano Pracenje",
      opis: "Mesecna azuriranja podataka i redovna provera uslova.",
    },
    {
      icon: UserCheck,
      naslov: "Realna Iskustva",
      opis: "Ocene bazirane na prakticnom koriscenju platformi.",
    },
    {
      icon: Scale,
      naslov: "Apsolutna Neutralnost",
      opis: "Bez sponzorisanih pozicija ili placenih recenzija.",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Nasi Principi</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Kako Funkcionise NajboljiSport</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Posveceni smo pruzanju najkvalitetnijih informacija o betting industriji u Srbiji kroz sistematican i
            transparentan pristup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {principi.map((item, index) => (
            <div
              key={index}
              className="group p-5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{item.naslov}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.opis}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
