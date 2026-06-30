import { ArrowRight, KeyRound, Lock, RotateCw, ShieldCheck } from "lucide-react"

import { siteConfig } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/primitives"
import { WindowFrame } from "@/components/site/window-frame"

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px] dark:bg-brand/25" />
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/30 blur-[120px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}

function Pill() {
  return (
    <a
      href="#why"
      className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 py-1 pl-1.5 pr-3 text-sm shadow-sm backdrop-blur-sm transition-colors hover:bg-card"
    >
      <span className="inline-flex items-center rounded-full bg-brand/10 px-2 py-0.5 font-mono text-xs font-medium text-brand">
        v{siteConfig.version}
      </span>
      <span className="text-muted-foreground">Meet EuryOS — see what makes it different</span>
      <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

type Event = {
  icon: React.ElementType
  title: string
  detail: string
  status: string
  tone: "good" | "brand"
}

const events: Event[] = [
  {
    icon: Lock,
    title: "An app tried to read your files",
    detail: "Blocked automatically — it was never given access",
    status: "Blocked",
    tone: "good",
  },
  {
    icon: RotateCw,
    title: "A display driver stopped responding",
    detail: "Restarted in 0.3s · your apps kept running",
    status: "Recovered",
    tone: "good",
  },
  {
    icon: KeyRound,
    title: "Messages asked to use your camera",
    detail: "You allowed it · revoke anytime in Settings",
    status: "Allowed",
    tone: "brand",
  },
  {
    icon: ShieldCheck,
    title: "System verified at startup",
    detail: "Untampered, from the chip up",
    status: "Secure",
    tone: "good",
  },
]

function ProtectionPanel() {
  return (
    <WindowFrame title="EuryOS — Activity" bodyClassName="bg-card/60 p-3 sm:p-4">
      <div className="flex flex-col gap-2">
        {events.map((e) => (
          <div
            key={e.title}
            className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/50 p-3"
          >
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background text-brand">
              <e.icon className="size-4.5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">{e.title}</div>
              <div className="truncate text-xs text-muted-foreground">
                {e.detail}
              </div>
            </div>
            <span
              className={
                "shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium " +
                (e.tone === "good"
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-500"
                  : "border-brand/30 bg-brand/10 text-brand")
              }
            >
              {e.status}
            </span>
          </div>
        ))}
      </div>
    </WindowFrame>
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
          <span className="text-gradient">Secure by design.</span>
          <br className="hidden sm:block" />{" "}
          <span className="text-brand-gradient">Calm by default.</span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "60ms" }}
        >
          EuryOS is a new kind of operating system that protects everything you
          do — keeping apps in their lane, threats locked out, and your work
          running smoothly. No malware free-for-all. No mystery crashes. No
          compromises.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "120ms" }}
        >
          <Button asChild size="lg" className="h-11 px-5 text-[0.95rem]">
            <a href={siteConfig.contact}>
              Get in touch
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 px-5 text-[0.95rem]"
          >
            <a href="#why">See how it works</a>
          </Button>
        </div>

        <p
          className="animate-fade-up mt-6 text-xs text-muted-foreground"
          style={{ animationDelay: "150ms" }}
        >
          Launching 2026 · One operating system, from the smallest device to your
          workstation
        </p>
      </Container>

      <Container
        className="animate-fade-up relative mt-16 max-w-3xl"
        style={{ animationDelay: "240ms" }}
      >
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-brand/10 blur-3xl" />
        <ProtectionPanel />
      </Container>
    </section>
  )
}

export { Hero }
