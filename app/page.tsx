import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { Features } from "@/components/sections/features"
import { Security } from "@/components/sections/security"
import { Architecture } from "@/components/sections/architecture"
import { Platform } from "@/components/sections/platform"
import { Principles } from "@/components/sections/principles"
import { Philosophy } from "@/components/sections/philosophy"
import { CTA } from "@/components/sections/cta"

export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Stats />
        <Features />
        <Security />
        <Architecture />
        <Platform />
        <Principles />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
