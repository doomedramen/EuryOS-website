import { Container } from "@/components/site/primitives"

function Philosophy() {
  return (
    <section className="relative border-t border-border/60 py-24 sm:py-28">
      <Container className="flex max-w-3xl flex-col items-center text-center">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-brand">
          From first principles
        </span>
        <blockquote className="mt-6 text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
          <span className="text-gradient">Not a fork. Not a clone. Not POSIX. </span>
          <span className="text-muted-foreground">
            EuryOS doesn&apos;t inherit Linux&apos;s assumptions or anyone
            else&apos;s ABI — because compatibility with yesterday&apos;s trust
            model is exactly what it set out to escape.
          </span>
        </blockquote>
        <p className="mt-8 text-sm font-medium text-muted-foreground">
          Familiar to use. <span className="text-foreground">Eury-native to build on.</span>
        </p>
      </Container>
    </section>
  )
}

export { Philosophy }
