import type { Metadata, Viewport } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
})

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tasty Kebab — Cel mai bun kebab din Chișinău | Самый вкусный кебаб в Кишинёве",
  description:
    "Tasty Kebab — fastfood în Chișinău. 5 locații în oraș. Kebab, burgers, aripi și nuggets. Deschis 24/7.",
  keywords: ["kebab", "fastfood", "Chișinău", "shaorma", "кебаб", "Кишинёв", "tasty kebab"],
  generator: "v0.app",
  openGraph: {
    title: "Tasty Kebab — Cel mai bun kebab din Chișinău",
    description: "5 locații în oraș. Deschis 24/7.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#b91c1c",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${bebas.variable} bg-background`}>
      <body className="font-sans antialiased bg-paper">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
