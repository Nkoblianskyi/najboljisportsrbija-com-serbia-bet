import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "NajboljiSportSrbija | Pregled Sportskih Kladionica u Srbiji 2025",
  description:
    "Profesionalni pregled sportskih kladionica u Srbiji. Objektivne analize, uporedne recenzije i stručni saveti za informisano klađenje.",
  keywords: [
    "sportsko klađenje srbija",
    "online kladionice",
    "betting vodič 2025",
    "analiza kvota",
    "kladionice recenzije",
    "sportske oklade",
    "fudbal klađenje",
    "košarka oklade",
    "legalne kladionice srbija",
    "betting saveti",
  ],
  authors: [{ name: "NajboljiSportSrbija" }],
  openGraph: {
    title: "NajboljiSportSrbija | Pregled Sportskih Kladionica",
    description:
      "Vaš pouzdani izvor informacija o sportskim kladionicama. Stručne analize, objektivne recenzije i ekspertski saveti.",
    url: "https://najboljisportsrbija.com",
    siteName: "NajboljiSportSrbija",
    locale: "sr_RS",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
