import type { Metadata, Viewport } from "next"
import { Geist_Mono, Inter, Outfit } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fontDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
})

const title = "EuryOS — A capability-secure operating system, rebuilt from first principles"
const description =
  "EuryOS is a from-scratch, capability-based microkernel OS written in Rust. Secure by architecture, reliable by containment, and built to be verifiable — from microcontroller to datacenter."

export const metadata: Metadata = {
  metadataBase: new URL("https://euryos.dev"),
  title: {
    default: title,
    template: "%s — EuryOS",
  },
  description,
  keywords: [
    "EuryOS",
    "operating system",
    "microkernel",
    "capability-based security",
    "Rust",
    "seL4 alternative",
    "secure OS",
  ],
  openGraph: {
    title,
    description,
    url: "https://euryos.dev",
    siteName: "EuryOS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        fontDisplay.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
