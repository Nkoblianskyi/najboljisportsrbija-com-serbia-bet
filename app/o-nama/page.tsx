import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Shield, Target, Users, Award, CheckCircle, TrendingUp } from "lucide-react"

export const metadata = {
  title: "O Nama | RSkladenje.com",
  description:
    "Saznajte više o timu RSkladenje.com - vašem pouzdanom izvoru za recenzije sportskih kladionica u Srbiji.",
}

export default function ONamaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O <span className="text-primary">RSkladenje.com</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vaš pouzdani vodič kroz svet sportskog klađenja u Srbiji
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Naša Misija</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            RSkladenje.com je posvećen pružanju objektivnih, detaljnih i ažuriranih recenzija sportskih kladionica
            dostupnih u Srbiji. Naš cilj je da pomognemo igračima da donesu informisane odluke i pronađu kladionice koje
            najbolje odgovaraju njihovim potrebama.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Verujemo u transparentnost, odgovorno klađenje i zaštitu interesa igrača. Svaka naša recenzija je rezultat
            temeljne analize i testiranja platformi od strane našeg stručnog tima.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Bezbednost</h3>
            <p className="text-sm text-muted-foreground">
              Recenziramo samo licencirane kladionice koje ispunjavaju najviše standarde bezbednosti i zaštite podataka.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Objektivnost</h3>
            <p className="text-sm text-muted-foreground">
              Sve recenzije su nezavisne i bazirane na stvarnom testiranju. Nikada ne favorizujemo operatere.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Ažurnost</h3>
            <p className="text-sm text-muted-foreground">
              Redovno ažuriramo recenzije kako bismo odražavali najnovije promene u ponudama i uslovima.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Zajednica</h3>
            <p className="text-sm text-muted-foreground">
              Slušamo povratne informacije naših čitalaca i kontinuirano unapređujemo sadržaj.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Stručnost</h3>
            <p className="text-sm text-muted-foreground">
              Naš tim čine iskusni analitičari sa godinama iskustva u industriji sportskog klađenja.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-2">18+ Odgovorno Klađenje</h3>
            <p className="text-sm text-muted-foreground">
              Promovišemo odgovorno klađenje i pružamo informacije o prevenciji zavisnosti od kockanja.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-3">Imate Pitanja?</h2>
          <p className="text-primary-foreground/80 mb-4">
            Slobodno nas kontaktirajte za bilo kakve informacije ili sugestije.
          </p>
          <a
            href="mailto:info@rskladenje.com"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
          >
            info@rskladenje.com
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
