import { Container } from "@/components/site/primitives"
import { Stagger, StaggerItem } from "@/components/site/reveal"

const stats = [
  { value: "Zero", label: "Apps with hidden access" },
  { value: "Instant", label: "Recovery from crashes" },
  { value: "Verified", label: "From startup, every time" },
  { value: "One OS", label: "From tiny devices to workstations" },
]

function Stats() {
  return (
    <section className="relative border-y border-border/60 bg-muted/20 py-16 sm:py-20">
      <Container>
        <Stagger className="grid grid-cols-2 gap-y-8 rounded-lg border border-border/70 bg-card py-8 shadow-sm sm:grid-cols-4">
          {stats.map((stat, i) => (
            <StaggerItem
              key={stat.label}
              className={
                "flex flex-col items-center px-4 text-center" +
                (i !== 0 ? " sm:border-l sm:border-border/60" : "") +
                (i % 2 !== 0 ? " border-l border-border/60 sm:border-l" : "")
              }
            >
              <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

export { Stats }
