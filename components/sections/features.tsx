import {
  CheckCheck,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
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
      {/* Contained hover glow — a radial gradient (no blur filter), so it
          always stays within the card's rounded bounds. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(18rem 18rem at 0% 0%, color-mix(in oklch, var(--brand) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="relative flex flex-1 flex-col">{children}</div>
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
        "mt-6 rounded-xl border border-border/70 bg-background/60 p-4 text-xs",
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
          title="A safer place for everything you do."
          description="Most operating systems were built in an era that assumed everything could be trusted. EuryOS starts from the opposite idea — nothing gets more than you explicitly allow — so you get security and reliability you can actually feel."
        />

        <div className="mt-14 grid grid-cols-6 gap-4">
          {/* Flagship — you're in control */}
          <FeatureCard className="col-span-6 lg:col-span-3">
            <FeatureIcon icon={Lock} />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">
              Apps only get what you allow
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              No app can quietly reach your files, your camera, or the internet.
              Each one gets exactly the access you grant — and nothing more.
              There&apos;s no all-powerful &ldquo;administrator&rdquo; for malware
              to take over.
            </p>
            <MiniPanel className="mt-auto font-mono">
              <div className="flex flex-wrap items-center gap-2">
                {["Files", "Camera", "Internet"].map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-emerald-500"
                  >
                    {c} ✓
                  </span>
                ))}
                <span className="rounded-md border border-border bg-muted px-2 py-1 text-muted-foreground line-through decoration-destructive/70">
                  Everything else
                </span>
              </div>
              <div className="mt-3 text-muted-foreground">
                access is yours to{" "}
                <span className="text-foreground">give</span> — and{" "}
                <span className="text-foreground">take back</span>
              </div>
            </MiniPanel>
          </FeatureCard>

          {/* Flagship — problems stay small */}
          <FeatureCard className="col-span-6 lg:col-span-3">
            <FeatureIcon icon={ShieldCheck} />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">
              A problem stays a small problem
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              When something goes wrong — a buggy driver, a misbehaving app —
              EuryOS contains it and restarts it on the spot. The rest of your
              system never notices. No spinning wheels, no lost work, no reboots.
            </p>
            <MiniPanel className="mt-auto font-mono">
              <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
                <span className="rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1 text-destructive">
                  driver crashed
                </span>
                <span>→</span>
                <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-emerald-500">
                  restarted
                </span>
              </div>
              <div className="mt-3 text-muted-foreground">
                your work{" "}
                <span className="text-emerald-500">untouched</span> · system{" "}
                <span className="text-emerald-500">still running</span>
              </div>
            </MiniPanel>
          </FeatureCard>

          {/* Verifiable */}
          <FeatureCard className="col-span-6 sm:col-span-3 lg:col-span-2">
            <FeatureIcon icon={CheckCheck} />
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              Trust you don&apos;t take on faith
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The secure heart of EuryOS is small enough to be checked line by
              line and proven correct — something no traditional operating system
              can claim.
            </p>
          </FeatureCard>

          {/* One OS everywhere */}
          <FeatureCard className="col-span-6 sm:col-span-3 lg:col-span-2">
            <FeatureIcon icon={Layers} />
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              The same OS, everywhere
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              One trusted foundation that runs everywhere — from a tiny
              smart-home device to your everyday workstation, with the same
              protection.
            </p>
          </FeatureCard>

          {/* Familiar */}
          <FeatureCard className="col-span-6 lg:col-span-2">
            <FeatureIcon icon={Sparkles} />
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              Familiar from the first second
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A desktop, files, apps, and settings that feel instantly familiar.
              All the reinvention lives under the hood — so there&apos;s nothing
              new to learn.
            </p>
          </FeatureCard>
        </div>
      </Container>
    </section>
  )
}

export { Features }
