import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/primitives"
import { GitHubIcon } from "@/components/site/icons"
import { MarkGlyph } from "@/components/site/logo"

function CTA() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 px-6 py-16 text-center sm:px-16 sm:py-20">
          {/* decorative layers */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid opacity-[0.07]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-brand/30 blur-[120px]"
          />
          <MarkGlyph
            className="pointer-events-none absolute -bottom-10 -right-6 size-48 text-white/[0.04]"
          />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Build on a foundation you can actually trust.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-400 sm:text-lg">
              EuryOS is open source under MIT or Apache-2.0. Clone it, boot the
              desktop in QEMU, and read the design that justifies every decision.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-11 bg-white px-5 text-[0.95rem] text-neutral-950 hover:bg-white/90"
              >
                <a href={siteConfig.github} target="_blank" rel="noreferrer">
                  Get started
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 border-white/20 bg-transparent px-5 text-[0.95rem] text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:hover:bg-white/10"
              >
                <a href={siteConfig.github} target="_blank" rel="noreferrer">
                  <GitHubIcon className="size-4" />
                  Star on GitHub
                </a>
              </Button>
            </div>

            <p className="mt-7 font-mono text-xs text-neutral-500">
              git clone {siteConfig.github.replace("https://", "")}.git
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { CTA }
