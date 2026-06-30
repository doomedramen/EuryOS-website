import { siteConfig } from "@/lib/site"
import { Container } from "@/components/site/primitives"
import { EuryWordmark } from "@/components/site/logo"
import { GitHubIcon } from "@/components/site/icons"

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Security", href: "#security" },
      { label: "Architecture", href: "#architecture" },
      { label: "Platform", href: "#platform" },
      { label: "Principles", href: "#principles" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Design", href: siteConfig.docs, external: true },
      { label: "Roadmap", href: siteConfig.roadmap, external: true },
      {
        label: "Status",
        href: "https://github.com/doomedramen/EuryOS/blob/main/STATUS.md",
        external: true,
      },
      { label: "Repository", href: siteConfig.github, external: true },
    ],
  },
  {
    heading: "Targets",
    links: [
      { label: "AArch64 · Raspberry Pi 5", href: siteConfig.github, external: true },
      { label: "x86-64", href: siteConfig.github, external: true },
      { label: "RISC-V (next)", href: siteConfig.github, external: true },
    ],
  },
]

function Footer() {
  return (
    <footer className="relative border-t border-border/60">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <EuryWordmark />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A capability-secure microkernel operating system, written in Rust
              and designed from first principles.
            </p>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="EuryOS on GitHub"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border/80 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <GitHubIcon className="size-4" />
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Licensed under MIT OR
            Apache-2.0.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Built from scratch in Rust · Security &gt; Reliability &gt; Performance
          </p>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
