import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Lock, Database, Eye, UserCheck, Mail, FileText } from "lucide-react"

export const metadata = {
  title: "Politika Privatnosti | RSkladenje.com",
  description: "Saznajte kako RSkladenje.com štiti vaše lične podatke i poštuje vašu privatnost.",
}

export default function PolitikaPrivatnostiPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Politika Privatnosti</h1>
          <p className="text-muted-foreground">
            Poslednje ažuriranje:{" "}
            {new Date().toLocaleDateString("sr-Latn-RS", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Uvod</h2>
            <p className="text-muted-foreground leading-relaxed">
              RSkladenje.com poštuje vašu privatnost i posvećen je zaštiti vaših ličnih podataka. Ova politika
              privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše informacije kada posetite naš sajt.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Podaci Koje Prikupljamo</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">Možemo prikupljati sledeće vrste informacija:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Tehničke informacije (IP adresa, tip pregledača, operativni sistem)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Informacije o korišćenju sajta (posećene stranice, vreme posete)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Kontakt informacije (ako nam ih dobrovoljno dostavite)</span>
              </li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Kako Koristimo Podatke</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">Vaše podatke koristimo isključivo za:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Poboljšanje funkcionalnosti i sadržaja sajta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Analizu poseta i korisničkog ponašanja</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Odgovaranje na vaše upite</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Sprečavanje zloupotrebe sajta</span>
              </li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <UserCheck className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Vaša Prava</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">Imate pravo da:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Zatražite pristup vašim ličnim podacima</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Zatražite ispravku netačnih podataka</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Zatražite brisanje vaših podataka</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Povučete pristanak za obradu podataka</span>
              </li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Treće Strane</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ne prodajemo, ne trgujemo i ne prenosimo vaše lične podatke trećim stranama bez vašeg pristanka, osim kada
              je to potrebno za pružanje usluga ili kada je to zakonski obavezno. Linkovi ka eksternim sajtovima
              (uključujući kladionice) podležu politikama privatnosti tih sajtova.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Bezbednost Podataka</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Primenjujemo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka od neovlašćenog
              pristupa, izmene, otkrivanja ili uništenja.
            </p>
          </section>

          <section className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Kontakt</h2>
            </div>
            <p className="text-muted-foreground">
              Za sva pitanja o vašoj privatnosti i zaštiti podataka, kontaktirajte nas na{" "}
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
