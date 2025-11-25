import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Cookie, Settings, BarChart3, Shield } from "lucide-react"

export const metadata = {
  title: "Politika Kolačića | RSkladenje.com",
  description: "Saznajte kako RSkladenje.com koristi kolačiće za poboljšanje vašeg iskustva na sajtu.",
}

export default function PolitikaKolacicaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Cookie className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Politika Kolačića</h1>
          <p className="text-muted-foreground">
            Poslednje ažuriranje:{" "}
            {new Date().toLocaleDateString("sr-Latn-RS", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Šta su Kolačići?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kolačići (cookies) su male tekstualne datoteke koje se čuvaju na vašem uređaju kada posetite naš sajt. Oni
              nam pomažu da zapamtimo vaše postavke, analiziramo kako koristite sajt i poboljšamo vaše korisničko
              iskustvo.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Neophodni Kolačići</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Ovi kolačići su neophodni za funkcionisanje sajta. Uključuju:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Kolačić za pamćenje pristanka na kolačiće</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Kolačići za sigurnost sesije</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Kolačići za osnovne funkcionalnosti sajta</span>
              </li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Analitički Kolačići</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Koristimo analitičke kolačiće da bismo razumeli kako posetioci koriste naš sajt:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Broj poseta i izvor saobraćaja</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Stranice koje posetioci najviše gledaju</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Vreme provedeno na sajtu</span>
              </li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Upravljanje Kolačićima</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Možete kontrolisati i brisati kolačiće prema vašim željama. Većina pregledača vam omogućava da:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Vidite koje kolačiće imate i obrišete ih pojedinačno</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Blokirate kolačiće sa određenih sajtova</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Blokirate sve kolačiće treće strane</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Obrišete sve kolačiće kada zatvorite pregledač</span>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-3">Kontakt</h2>
            <p className="text-muted-foreground">
              Za sva pitanja o našoj politici kolačića, kontaktirajte nas na{" "}
              <a href="mailto:info@rskladenje.com" className="text-primary hover:underline">
                info@rskladenje.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
