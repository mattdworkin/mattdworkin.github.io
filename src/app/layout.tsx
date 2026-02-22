import type { Metadata } from "next"
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Matthew Dworkin | Software Engineer",
  description: "Software engineer focused on practical systems, testing tools, and full-stack products.",
  keywords: ["software engineer", "FPGA", "AI", "full-stack", "systems engineering"],
  authors: [{ name: "Matthew Dworkin" }],
  openGraph: {
    title: "Matthew Dworkin | Software Engineer",
    description: "Software engineer focused on practical systems, testing tools, and full-stack products.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} font-sans`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
