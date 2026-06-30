import {
  KeyRound,
  Layers,
  ShieldCheck,
  ShieldHalf,
  Terminal,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Container, SectionHeading } from "@/components/site/primitives"

function FeatureCard({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-6 transition-colors hover:border-border sm:p-7",
        className
      )}
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand/0 blur-2xl transition-colors duration-500 group-hover:bg-brand/10" />
      {children}
    </div>
  )
}

function FeatureIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="inline-flex size-10 items-center justify-center rounded-xl border border-border/80 bg-background text-brand shadow-sm">
      <Icon className="size-5" />
    </div>
  )
}

function MiniPanel({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "mt-6 rounded-xl border border-border/70 bg-background/60 p-4 font-mono text-xs",
        className
      )}
    >
      {children}
    </div>
  )
}

function Features() {
  return (
    <section id="why" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why EuryOS"
          title="A different foundation, not a different coat of paint."
          description="Most operating systems bolt security onto a design that assumed trust. EuryOS starts from the opposite premise: no code is trusted with more than it was explicitly handed."
        />

        <div className="mt-14 grid grid-cols-6 gap-4">
          {/* Flagship — capability security */}
          <FeatureCard className="col-span-6 lg:col-span-3">
            <FeatureIcon icon={KeyRound} />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">
              No ambient authority, ever
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              No root. No global namespace. No setuid. Every program runs holding
              exactly the capabilities it was granted — and can never reach
              anything it wasn&apos;t, even when the human running it is &ldquo;the
              administrator.&rdquo;
            </p>
            <MiniPanel className="mt-auto">
              <div className="flex flex-wrap items-center gap-2">
                {["read:store", "map:vmo", "send:net"].map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-brand/30 bg-brand/10 px-2 py-1 text-brand"
                  >
                    {c}
                  </span>
                ))}
                <span className="rounded-md border border-border bg-muted px-2 py-1 text-muted-foreground line-through decoration-destructive/70">
                  root
                </span>
              </div>
              <div className="mt-3 text-muted-foreground">
                ambient authority{" "}
                <span className="text-emerald-500">denied by construction</span>
              </div>
            </MiniPanel>
          </FeatureCard>

          {/* Flagship — containment */}
          <FeatureCard className="col-span-6 lg:col-span-3">
            <FeatureIcon icon={ShieldHalf} />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">
              Reliability by containment
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Drivers and services live in userspace. A driver crash is restarted
              in place — not a kernel panic, not a reboot. DMA is IOMMU-isolated,
              so a misbehaving device can&apos;t corrupt memory it was never given.
            </p>
            <MiniPanel className="mt-auto">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1 text-destructive">
                  net-driver ✗ fault
                </span>
                <span className="text-muted-foreground">→</span>
                <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-emerald-500">
                  restarted
                </span>
              </div>
              <div className="mt-3 text-muted-foreground">
                kernel{" "}
                <span className="text-emerald-500">uninterrupted</span> · neighbors{" "}
                <span className="text-emerald-500">unaffected</span>
              </div>
            </MiniPanel>
          </FeatureCard>

          {/* Verifiable */}
          <FeatureCard className="col-span-6 sm:col-span-3 lg:col-span-2">
            <FeatureIcon icon={ShieldCheck} />
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              Built to be verifiable
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A tiny trusted computing base — eight kernel object types and a
              small, isolated <span className="font-mono text-xs">unsafe</span>{" "}
              core — shaped so the security-critical path can be formally verified.
            </p>
          </FeatureCard>

          {/* One design every scale */}
          <FeatureCard className="col-span-6 sm:col-span-3 lg:col-span-2">
            <FeatureIcon icon={Layers} />
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              One design, every scale
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The same architecture from microcontroller to datacenter — scaled by
              configuration, not by rewrites. AArch64 and x86-64 today, RISC-V next.
            </p>
          </FeatureCard>

          {/* Familiar not compatible */}
          <FeatureCard className="col-span-6 sm:col-span-6 lg:col-span-2">
            <FeatureIcon icon={Terminal} />
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              Familiar to use, native to build on
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A shell, a file tree, users, a package manager — it feels like a
              system you already know. Underneath, every API is Eury-native. No
              POSIX, by design.
            </p>
          </FeatureCard>
        </div>
      </Container>
    </section>
  )
}

export { Features }
