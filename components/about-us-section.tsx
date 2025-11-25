import { Target, Users, Award, Lightbulb, Shield, TrendingUp } from "lucide-react"

export function AboutUsSection() {
  const features = [
    {
      icon: Target,
      title: "Nasa Misija",
      description:
        "Pruzanje transparentnih i nepristrasnih informacija o kladionicama kako bi igraci mogli doneti najbolju odluku.",
    },
    {
      icon: Users,
      title: "Tim Eksperata",
      description:
        "Nasa ekipa cine profesionalci sa preko 10 godina iskustva u betting industriji i analizi sportskih kvota.",
    },
    {
      icon: Shield,
      title: "Zastita Igraca",
      description: "Prioritet nam je sigurnost korisnika - preporucujemo samo verifikovane i licencirane operatere.",
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Objektivnost",
      text: "Sve ocene su zasnovane na proverljivim cinjenicama i realnom testiranju platformi.",
    },
    {
      icon: Lightbulb,
      title: "Transparentnost",
      text: "Jasni kriterijumi i metodologija evaluacije dostupni su svim korisnicima.",
    },
    {
      icon: TrendingUp,
      title: "Kontinuitet",
      text: "Redovno azuriramo sadrzaj i pratimo promene na trzistu kladionica u Srbiji.",
    },
  ]

  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">O Nama</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ko Stoji Iza NajboljiSport Srbija</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Nezavisna platforma posvecena pomoci igracima u pronalazenju najboljih kladionica na srpskom trzistu.
          </p>
        </div>

        {/* Main features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Values section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Nase Vrednosti</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-blue-100 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-slate-50 rounded-xl p-8 border border-slate-200">
          <p className="text-slate-700 mb-4 text-lg">
            Imate pitanja ili sugestije? Kontaktirajte nas i pomozite nam da poboljsamo nase usluge.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all"
          >
            Vise o Nama
          </a>
        </div>
      </div>
    </section>
  )
}
