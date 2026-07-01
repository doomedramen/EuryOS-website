import { Boxes, RotateCw, ShieldCheck } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container, SectionHeading } from "@/components/site/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal"

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border/70 bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
      {children}
    </span>
  )
}

function Band({
  label,
  sublabel,
  chips,
  className,
  highlight,
}: {
  label: string
  sublabel?: string
  chips: string[]
  className?: string
  highlight?: boolean
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-xl border px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between",
        highlight
          ? "border-brand/40 bg-brand/10"
          : "border-border/70 bg-background/50",
        className
      )}
    >
      <div className="flex flex-col">
        <span
          className={cn(
            "flex items-center gap-2 text-sm font-semibold",
            highlight && "text-brand"
          )}
        >
          {highlight ? (
            <span className="relative flex size-2" aria-hidden="true">
              <span className="animate-ping-slow absolute inline-flex size-full rounded-full bg-brand/70" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
          ) : null}
          {label}
        </span>
        {sublabel ? (
          <span className="text-xs text-muted-foreground">{sublabel}</span>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {chips.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </div>
    </div>
  )
}

function StackDiagram() {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/40 p-3 sm:p-4">
      <Stagger className="space-y-2">
        <StaggerItem>
          <Band
            label="Your apps"
            sublabel="Each in its own protected space"
            chips={["Browser", "Mail", "Photos"]}
          />
        </StaggerItem>
        <StaggerItem>
          <Band
            label="System features"
            sublabel="Files, network, display, accounts"
            chips={["Files", "Network", "Display"]}
          />
        </StaggerItem>
        <StaggerItem>
          <Band
            label="Device drivers"
            sublabel="Restartable, kept at arm's length"
            chips={["Graphics", "Wi-Fi", "Storage"]}
          />
        </StaggerItem>

        <StaggerItem>
          <div className="relative flex items-center justify-center py-2">
            <div className="absolute inset-x-2 border-t border-dashed border-brand/40" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-2 top-1/2 h-0"
            >
              <span className="animate-checkpoint absolute top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_10px_2px_var(--brand)]" />
            </div>
            <span className="relative rounded-full border border-brand/30 bg-background px-3 py-1 text-[11px] font-medium text-brand">
              every request checked · nothing trusted by default
            </span>
          </div>
        </StaggerItem>

        <StaggerItem>
          <Band
            highlight
            label="EuryOS core"
            sublabel="Small, trusted, and verified"
            chips={["always running"]}
          />
        </StaggerItem>
        <StaggerItem>
          <Band
            label="Your device"
            sublabel="Phone · laptop · workstation · server"
            chips={["any hardware"]}
          />
        </StaggerItem>
      </Stagger>
    </div>
  )
}

const supports = [
  {
    icon: ShieldCheck,
    title: "A tiny core you can trust",
    body: "Only a small, compact core has full control — small enough to be checked and proven correct, unlike a sprawling traditional system.",
  },
  {
    icon: RotateCw,
    title: "Self-healing by default",
    body: "Drivers and features run on their own. If one fails, EuryOS restarts it in place — your apps and your work simply keep going.",
  },
  {
    icon: Boxes,
    title: "Everything else is just an app",
    body: "Even core features live in their own protected space, so a single failure can never bring down the whole system.",
  },
]

function Architecture() {
  return (
    <section
      id="reliability"
      className="relative border-t border-border/60 py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Reliability"
            title="Built so problems can't spread."
            description="EuryOS keeps every part of the system in its own protected space. So when one piece stumbles, it's caught and restarted — without dragging everything else down with it."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <StackDiagram />
          </Reveal>
          <Stagger className="flex flex-col justify-center gap-8 lg:col-span-2">
            {supports.map((s) => (
              <StaggerItem key={s.title} className="flex gap-4">
                <div className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-background text-brand">
                  <s.icon className="size-4.5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  )
}

export { Architecture }
