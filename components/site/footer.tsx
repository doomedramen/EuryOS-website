import { siteConfig } from "@/lib/site"
import { Container } from "@/components/site/primitives"
import { Reveal } from "@/components/site/reveal"
import { EuryWordmark } from "@/components/site/logo"

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Why EuryOS", href: "#why" },
      { label: "Security", href: "#security" },
      { label: "Reliability", href: "#reliability" },
      { label: "Experience", href: "#experience" },
    ],
  },
  {
    heading: "Get in touch",
    links: [
      { label: siteConfig.email, href: siteConfig.contact },
      { label: "Request a demo", href: siteConfig.contact },
      { label: "Ask a question", href: siteConfig.contact },
    ],
  },
]

function Footer() {
  return (
    <footer className="relative border-t border-border/60">
      <Container className="py-14">
        <Reveal>
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="flex max-w-xs flex-col gap-4">
            <EuryWordmark />
            <p className="text-sm leading-relaxed text-muted-foreground">
              A secure, reliable operating system for everything you do —
              designed from the ground up to protect you by default.
            </p>
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
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Secure by design. Familiar by default.
          </p>
        </div>
        </Reveal>
      </Container>
    </footer>
  )
}

export { Footer }
