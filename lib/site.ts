export const siteConfig = {
  name: "EuryOS",
  version: "1.0",
  tagline: "A capability-secure operating system, rebuilt from first principles.",
  description:
    "A from-scratch, capability-based microkernel OS written in Rust. Secure by architecture, reliable by containment, and built to be verifiable.",
  github: "https://github.com/doomedramen/EuryOS",
  docs: "https://github.com/doomedramen/EuryOS/blob/main/DESIGN.md",
  roadmap: "https://github.com/doomedramen/EuryOS/blob/main/ROADMAP.md",
} as const

export const navLinks = [
  { label: "Security", href: "#security" },
  { label: "Architecture", href: "#architecture" },
  { label: "Platform", href: "#platform" },
  { label: "Principles", href: "#principles" },
] as const
