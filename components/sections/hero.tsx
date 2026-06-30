import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/primitives"
import { CommandChip } from "@/components/site/copy-button"
import { GitHubIcon } from "@/components/site/icons"
import { TerminalWindow } from "@/components/site/terminal-window"

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Fading engineering grid */}
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      {/* Brand aurora glow */}
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px] dark:bg-brand/25" />
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/30 blur-[120px]" />
      {/* Bottom fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}

function Pill() {
  return (
    <a
      href={siteConfig.github}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 py-1 pl-1.5 pr-3 text-sm shadow-sm backdrop-blur-sm transition-colors hover:bg-card"
    >
      <span className="inline-flex items-center rounded-full bg-brand/10 px-2 py-0.5 font-mono text-xs font-medium text-brand">
        v{siteConfig.version}
      </span>
      <span className="text-muted-foreground">
        EuryOS is here — read the design
      </span>
      <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

function BootTerminal() {
  return (
    <TerminalWindow scanline bodyClassName="bg-card/60">
      <div className="space-y-0.5 whitespace-pre-wrap break-words">
        <div>
          <span className="text-brand">$ </span>
          <span className="text-foreground">make setup && make run</span>
        </div>
        <div className="h-2" />
        <div className="text-muted-foreground">
          {"   "}Compiling euryos-kernel v1.0.0 (aarch64-euryos)
        </div>
        <div className="text-muted-foreground">
          {"    "}Finished `release` profile [optimized]
        </div>
        <div className="text-muted-foreground">
          {"   "}Booting EuryOS · qemu-virt · 4/4 cores online
        </div>
        <div className="h-2" />
        <BootOk>capability core — 8 object types, W^X page tables</BootOk>
        <BootOk>root of trust verified · secure boot chain</BootOk>
        <BootOk>init spawned from manifest — no ambient authority</BootOk>
        <BootOk>compositor owns the framebuffer capability</BootOk>
        <BootOk>drivers in userspace · DMA IOMMU-isolated</BootOk>
        <div className="h-2" />
        <div className="text-foreground">EuryOS 1.0</div>
        <div className="text-muted-foreground">
          eury login: <span className="text-foreground">admin</span>
        </div>
        <div className="h-2" />
        <div>
          <span className="text-brand">admin@eury</span>
          <span className="text-muted-foreground"> ~ % </span>
          <span className="text-foreground">caps whoami</span>
        </div>
        <div className="text-muted-foreground">
          identity{"  "}
          <span className="text-foreground">admin</span>
        </div>
        <div className="text-muted-foreground">
          holds{"     "}
          <span className="text-foreground">capability set #1 (scoped)</span>
        </div>
        <div className="text-muted-foreground">
          ambient{"   "}
          <span className="text-emerald-500">none</span>
        </div>
        <div>
          <span className="text-brand">admin@eury</span>
          <span className="text-muted-foreground"> ~ % </span>
          <span
            className="ml-0.5 inline-block h-3.5 w-2 translate-y-0.5 bg-foreground/80"
            style={{ animation: "eury-pulse 1.2s steps(1) infinite" }}
          />
        </div>
      </div>
    </TerminalWindow>
  )
}

function BootOk({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-muted-foreground">
      <span className="text-emerald-500">[ ok ]</span> {children}
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <HeroBackground />
      <Container className="relative flex flex-col items-center text-center">
        <div className="animate-fade-up">
          <Pill />
        </div>

        <h1 className="animate-fade-up mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          <span className="text-gradient">The operating system,</span>
          <br className="hidden sm:block" />{" "}
          <span className="text-brand-gradient">rebuilt from first principles.</span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "60ms" }}
        >
          EuryOS is a from-scratch, capability-based microkernel written in Rust —
          secure by architecture, reliable by containment, and built to be
          verifiable. One design, from microcontroller to datacenter.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "120ms" }}
        >
          <Button asChild size="lg" className="h-11 px-5 text-[0.95rem]">
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              Get started
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 px-5 text-[0.95rem]"
          >
            <a href={siteConfig.docs} target="_blank" rel="noreferrer">
              <GitHubIcon className="size-4" />
              Read the design
            </a>
          </Button>
        </div>

        <div
          className="animate-fade-up mt-7"
          style={{ animationDelay: "180ms" }}
        >
          <CommandChip command="make setup && make run" />
        </div>
      </Container>

      <Container
        className="animate-fade-up relative mt-16 max-w-5xl"
        style={{ animationDelay: "240ms" }}
      >
        <BootTerminal />
      </Container>
    </section>
  )
}

export { Hero }
