import { Container } from "@/components/site/primitives"

function Philosophy() {
  return (
    <section className="relative border-t border-border/60 py-24 sm:py-28">
      <Container className="flex max-w-3xl flex-col items-center text-center">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-brand">
          A fresh start
        </span>
        <blockquote className="mt-6 text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
          <span className="text-gradient">We started over, on purpose. </span>
          <span className="text-muted-foreground">
            EuryOS doesn&apos;t inherit decades of assumptions from systems built
            before security really mattered — so your protection isn&apos;t patched
            on afterward. It&apos;s the foundation.
          </span>
        </blockquote>
        <p className="mt-8 text-sm font-medium text-muted-foreground">
          Familiar to use. <span className="text-foreground">Secure underneath.</span>
        </p>
      </Container>
    </section>
  )
}

export { Philosophy }
