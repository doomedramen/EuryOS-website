import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container, SectionHeading } from "@/components/site/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal"

const priorities = [
  {
    rank: "01",
    name: "Security",
    gloss: "Your safety comes first — always, even over speed or convenience.",
  },
  {
    rank: "02",
    name: "Reliability",
    gloss: "It should just keep working. Contain problems; never lose your work.",
  },
  {
    rank: "03",
    name: "Performance",
    gloss: "Fast and responsive, everywhere it counts.",
  },
  {
    rank: "04",
    name: "Scalability",
    gloss: "One operating system, from tiny devices to powerful machines.",
  },
  {
    rank: "05",
    name: "Simplicity",
    gloss: "Fewer moving parts means less that can ever go wrong.",
  },
  {
    rank: "06",
    name: "Compatibility",
    gloss: "Familiar to use — without dragging along yesterday's baggage.",
  },
]

function Principles() {
  return (
    <section
      id="values"
      className="relative border-t border-border/60 bg-muted/20 py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Our priorities"
            title="What we won't compromise."
            description="These are the priorities behind every decision we make, listed in the order that matters most — and your security always comes first, never traded away for speed or convenience."
            className="mx-auto items-center"
          />
        </Reveal>

        {/* The priority chain */}
        <Stagger className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {priorities.map((p, i) => (
            <StaggerItem key={p.name} className="flex items-center gap-2">
              <span
                className={cn(
                  "text-xl font-semibold tracking-tight sm:text-2xl",
                  i === 0 ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {p.name}
              </span>
              {i < priorities.length - 1 ? (
                <ChevronRight className="size-4 text-muted-foreground" />
              ) : null}
            </StaggerItem>
          ))}
        </Stagger>

        {/* Per-priority glosses */}
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border/70 bg-border/60 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
          {priorities.map((p) => (
            <StaggerItem key={p.rank} className="bg-card p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-brand">{p.rank}</span>
                <h3 className="text-base font-semibold">{p.name}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.gloss}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

export { Principles }
