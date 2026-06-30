import { Container } from "@/components/site/primitives"

const stats = [
  { value: "8", label: "Kernel object types" },
  { value: "Zero", label: "Ambient authority" },
  { value: "100%", label: "Rust, memory-safe core" },
  { value: "MCU→DC", label: "One architecture, every scale" },
]

function Stats() {
  return (
    <section className="relative">
      <Container>
        <div className="grid grid-cols-2 gap-y-8 rounded-2xl border border-border/70 bg-card/40 py-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { Stats }
