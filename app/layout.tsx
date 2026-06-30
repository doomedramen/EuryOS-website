import type { Metadata, Viewport } from "next"
import { Geist_Mono, Inter, Outfit } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from "@/components/site/structured-data"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  preload: false,
})

const fontDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  preload: false,
})

const title = "EuryOS — Secure by design. Calm by default."
const description =
  "EuryOS is a new kind of operating system that protects everything you do — keeping apps contained, threats out, and your work running smoothly. From the smallest device to the most demanding workstation."

export const metadata: Metadata = {
  metadataBase: new URL("https://euryos.com"),
  title: {
    default: title,
    template: "%s — EuryOS",
  },
  description,
  keywords: [
    "EuryOS",
    "operating system",
    "secure operating system",
    "private operating system",
    "reliable operating system",
    "secure computing",
  ],
  openGraph: {
    title,
    description,
    url: "https://euryos.com",
    siteName: "EuryOS",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "EuryOS — Secure by design. Calm by default.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  alternates: {
    canonical: "/",
  },
  applicationName: "EuryOS",
  authors: [{ name: "EuryOS" }],
  creator: "EuryOS",
  publisher: "EuryOS",
  category: "technology",
  formatDetection: { email: false, telephone: false, address: false },
  appleWebApp: {
    capable: true,
    title: "EuryOS",
    statusBarStyle: "black-translucent",
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
        <StructuredData />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
