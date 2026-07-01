import {
  CheckCheck,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Container, SectionHeading } from "@/components/site/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal"
import { SelfHealing } from "@/components/sections/self-healing"
import { MagicCard } from "@/components/ui/magic-card"

function FeatureCard({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    // The cursor-follow spotlight replaces the old static top-left glow.
    <MagicCard
      className={cn(
        "h-full rounded-2xl border border-border/70 bg-card/50 p-6 transition-colors hover:border-border sm:p-7",
        className
      )}
    >
      {children}
    </MagicCard>
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
        <Reveal>
          <SectionHeading
            eyebrow="Why EuryOS"
            title="A safer place for everything you do."
            description="Most operating systems were built in an era that assumed everything could be trusted. EuryOS starts from the opposite idea — nothing gets more than you explicitly allow — so you get security and reliability you can actually feel."
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-6 gap-4">
          {/* Flagship — you're in control */}
          <StaggerItem className="col-span-6 lg:col-span-3">
          <FeatureCard>
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
                    className="rounded-md border border-success/30 bg-success/10 px-2 py-1 text-success"
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
          </StaggerItem>

          {/* Flagship — problems stay small */}
          <StaggerItem className="col-span-6 lg:col-span-3">
          <FeatureCard>
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
              <SelfHealing />
            </MiniPanel>
          </FeatureCard>
          </StaggerItem>

          {/* Verifiable */}
          <StaggerItem className="col-span-6 sm:col-span-3 lg:col-span-2">
          <FeatureCard>
            <FeatureIcon icon={CheckCheck} />
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              Proven, not just promised
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The core that keeps you safe is small enough to be checked, line by
              line, and proven correct — so EuryOS&apos;s security is something
              experts can verify, not just a promise you have to take on trust.
            </p>
          </FeatureCard>
          </StaggerItem>

          {/* One OS everywhere */}
          <StaggerItem className="col-span-6 sm:col-span-3 lg:col-span-2">
          <FeatureCard>
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
          </StaggerItem>

          {/* Familiar */}
          <StaggerItem className="col-span-6 lg:col-span-2">
          <FeatureCard>
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
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  )
}

export { Features }
