import { Container } from "@/components/site/primitives"
import { Reveal } from "@/components/site/reveal"

function Philosophy() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 py-28 sm:py-32">
      {/* subtle brand glow to give this statement more presence */}
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-[44rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]"
      />
      <Reveal>
      <Container className="flex max-w-3xl flex-col items-center text-center">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-brand">
          A fresh start
        </span>
        <blockquote className="mt-6 text-balance text-3xl font-medium leading-tight tracking-tight sm:text-[2.75rem] sm:leading-[1.1]">
          <span className="text-gradient">We started over, on purpose. </span>
          <span className="text-muted-foreground">
            EuryOS doesn&apos;t inherit decades of assumptions from systems built
            before security really mattered — so your protection isn&apos;t patched
            on afterward. It&apos;s the foundation.
          </span>
        </blockquote>
        <p className="mt-8 text-base font-medium text-muted-foreground">
          Familiar to use.{" "}
          <span className="text-foreground">Secure underneath.</span>
        </p>
      </Container>
      </Reveal>
    </section>
  )
}

export { Philosophy }
