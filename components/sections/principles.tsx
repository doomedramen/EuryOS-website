import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container, SectionHeading } from "@/components/site/primitives"

const priorities = [
  {
    rank: "01",
    name: "Security",
    gloss: "No ambient authority; the smallest possible trusted base.",
  },
  {
    rank: "02",
    name: "Reliability",
    gloss: "Contain faults. Restart a service — don't reboot the machine.",
  },
  {
    rank: "03",
    name: "Performance",
    gloss: "Fast paths where measurement proves they matter.",
  },
  {
    rank: "04",
    name: "Scalability",
    gloss: "One design, from microcontroller to datacenter.",
  },
  {
    rank: "05",
    name: "Simplicity",
    gloss: "Fewer mechanisms, each one earning its place.",
  },
  {
    rank: "06",
    name: "Compatibility",
    gloss: "Familiar, deliberately not POSIX. Never the deciding vote.",
  },
]

function Principles() {
  return (
    <section
      id="principles"
      className="relative border-t border-border/60 py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Design priorities"
          title="When goals collide, there is a right answer."
          description="EuryOS ranks its priorities in a strict total order and uses it as a decision procedure. When two pull in different directions, the higher one wins — every time."
          className="mx-auto items-center"
        />

        {/* The priority chain */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {priorities.map((p, i) => (
            <div key={p.name} className="flex items-center gap-2">
              <span
                className={cn(
                  "text-xl font-semibold tracking-tight sm:text-2xl",
                  i === 0 ? "text-brand-gradient" : "text-foreground"
                )}
              >
                {p.name}
              </span>
              {i < priorities.length - 1 ? (
                <ChevronRight className="size-4 text-brand/50" />
              ) : null}
            </div>
          ))}
        </div>

        {/* Per-priority glosses */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {priorities.map((p) => (
            <div key={p.rank} className="bg-card/60 p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-brand">{p.rank}</span>
                <h3 className="text-base font-semibold">{p.name}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.gloss}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { Principles }
