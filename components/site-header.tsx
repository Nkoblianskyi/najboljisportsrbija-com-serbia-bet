"use client"
import Link from "next/link"
import { SiteLogo } from "./site-logo"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <SiteLogo velicina="md" />

          <nav className="hidden md:flex items-center gap-5">
            <Link href="/" className="text-sm font-medium text-slate-900 hover:text-primary transition-colors">
              Pocetna
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">
              O Nama
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
            >
              Privatnost
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
            >
              Kolacici
            </Link>
          </nav>

          <button className="md:hidden text-slate-700 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-3 flex flex-col gap-1 border-t border-slate-100 pt-2">
            <Link
              href="/"
              className="text-sm font-medium py-2 px-3 rounded text-slate-900 hover:bg-slate-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pocetna
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium py-2 px-3 rounded text-slate-500 hover:bg-slate-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              O Nama
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium py-2 px-3 rounded text-slate-500 hover:bg-slate-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Politika Privatnosti
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm font-medium py-2 px-3 rounded text-slate-500 hover:bg-slate-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Politika Kolacica
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
