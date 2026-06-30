import { KeyRound, Layers3, ShieldAlert, Split } from "lucide-react"

import { Container, SectionHeading } from "@/components/site/primitives"
import { TerminalWindow } from "@/components/site/terminal-window"

const pillars = [
  {
    icon: ShieldAlert,
    title: "No ambient authority",
    body: "There is no root account and no global namespace to fall back on. Authority only ever flows along capabilities that were explicitly handed over.",
  },
  {
    icon: KeyRound,
    title: "Rights, interpreted per object",
    body: "Each of the eight kernel object types defines what its rights mean. The kernel is the single reference monitor — every access is checked at one place.",
  },
  {
    icon: Layers3,
    title: "Instant, scalable revocation",
    body: "Capabilities can be revoked immediately and en masse — epochs first, revocation trees where containment demands it.",
  },
  {
    icon: Split,
    title: "Information-flow control",
    body: "An opt-in strengthening layer constrains where data may travel, not just who may touch it — confinement that survives delegation.",
  },
]

function CapabilityCode() {
  return (
    <TerminalWindow title="program.rs" bodyClassName="bg-card/60">
      <pre className="overflow-x-auto whitespace-pre">
        <code className="block">
          <span className="text-muted-foreground">
            {"// A program holds only the caps it was granted."}
          </span>
          {"\n"}
          <span className="text-brand">let</span> store: Cap{"<"}Store{">"} ={" "}
          env.cap(<span className="text-emerald-500">&quot;fs.store&quot;</span>)?;
          {"\n"}
          <span className="text-brand">let</span> dns:{"   "}Cap{"<"}Endpoint{">"} ={" "}
          env.cap(<span className="text-emerald-500">&quot;net.dns&quot;</span>)?;
          {"\n\n"}
          <span className="text-muted-foreground">
            {"// Rights you don't hold can't be expressed — and"}
          </span>
          {"\n"}
          <span className="text-muted-foreground">
            {"// the kernel re-checks each one at the boundary."}
          </span>
          {"\n"}
          store.read(path)?;{"        "}
          <span className="text-emerald-500">{"// ✓ granted"}</span>
          {"\n"}
          dns.send(query)?;{"         "}
          <span className="text-emerald-500">{"// ✓ granted"}</span>
          {"\n"}
          store.write(path, buf)?;{"  "}
          <span className="text-destructive">{"// ✗ denied"}</span>
        </code>
      </pre>
    </TerminalWindow>
  )
}

function Security() {
  return (
    <section id="security" className="relative border-t border-border/60 py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Security model"
              title="Authority you can account for."
              description="Every access is mediated by an unforgeable capability — a typed reference naming an object and the exact rights you hold over it. There is no access list to misconfigure and no ambient power to escalate into."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <p.icon className="size-4.5 text-brand" />
                    <h3 className="text-sm font-semibold">{p.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-brand/10 blur-3xl" />
            <CapabilityCode />
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Security }
