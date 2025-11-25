import Link from "next/link"
import Image from "next/image"
import { SiteLogo } from "./site-logo"
import { Shield, AlertTriangle, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="py-10 px-4 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <SiteLogo className="mb-3" velicina="md" />
            <p className="text-xs text-slate-500 leading-relaxed">
              Nezavisni portal za analizu betting platformi u Srbiji.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wide">Navigacija</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/" className="text-slate-500 hover:text-primary transition-colors">
                  Pocetna
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-500 hover:text-primary transition-colors">
                  O Nama
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wide">Pravne Informacije</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-slate-500 hover:text-primary transition-colors">
                  Politika Privatnosti
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-slate-500 hover:text-primary transition-colors">
                  Politika Kolacica
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wide">Kontakt</h3>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-center gap-2 text-slate-500">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>info@najboljisportsrbija.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="flex items-start gap-2 p-3 rounded bg-amber-50 border border-amber-200">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-600 mt-0.5" />
            <p className="text-xs text-slate-600">
              Kladjenje nosi rizik finansijskog gubitka. Samo za punoletne (18+).
            </p>
          </div>
          <div className="flex items-start gap-2 p-3 rounded bg-emerald-50 border border-emerald-200">
            <Shield className="w-4 h-4 flex-shrink-0 text-emerald-600 mt-0.5" />
            <p className="text-xs text-slate-600">Sve prikazane platforme poseduju licence za rad u Srbiji.</p>
          </div>
        </div>

        <div className="mb-6 rounded p-4 bg-white border border-slate-200">
          <h3 className="text-xs font-semibold text-slate-900 mb-2 text-center">Odgovorno Kladjenje</h3>
          <p className="text-xs text-slate-500 text-center max-w-lg mx-auto mb-3">
            Zalazemo se za odgovoran pristup kladjenju.
          </p>

          <div className="flex justify-center gap-3">
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-slate-50 border border-slate-100"
            >
              <div className="relative w-24 h-14">
                <Image
                  src="/gamecare-new.svg"
                  alt="GamCare"
                  fill
                  className="object-contain hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>
            <Link
              href="https://www.uis.gov.rs/rsc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-slate-50 border border-slate-100"
            >
              <div className="relative w-24 h-14">
                <Image
                  src="/logoS.svg"
                  alt="UIS"
                  fill
                  className="object-contain  hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-slate-50 border border-slate-100"
            >
              <div className="relative w-24 h-14">
                <Image
                  src="/gamble-aware.webp"
                  alt="GambleAware"
                  fill
                  className="object-contain hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>

          </div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
            <p className="text-xs text-slate-400">{new Date().getFullYear()} najboljisportsrbija.com</p>
            <p className="text-xs text-slate-400">Informacije sluze u edukativne svrhe.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
