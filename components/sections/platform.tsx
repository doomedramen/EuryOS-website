import {
  Cpu,
  FolderTree,
  KeyRound,
  Monitor,
  Network,
  Package,
  RadioTower,
  SquareTerminal,
} from "lucide-react"

import { Container, SectionHeading } from "@/components/site/primitives"

const capabilities = [
  {
    icon: Monitor,
    title: "Composited desktop",
    body: "A native compositor owns the framebuffer capability. The kernel never touches a pixel.",
  },
  {
    icon: SquareTerminal,
    title: "Native shell",
    body: "A terminal that feels like any Unix box — talking to least-privilege services over IPC.",
  },
  {
    icon: FolderTree,
    title: "Content-addressed storage",
    body: "A navigable file tree backed by a git-style object store. Paths are a capability namespace.",
  },
  {
    icon: Network,
    title: "Networking",
    body: "A native network stack with a DMA-isolated NIC driver and a socket-like API.",
  },
  {
    icon: KeyRound,
    title: "Identity & sessions",
    body: "Log in as a user — where a “user” is really a per-session capability set, not a uid.",
  },
  {
    icon: Package,
    title: "Package manager",
    body: "Content-addressed packages: deduplicated, atomic installs, instant rollback.",
  },
  {
    icon: RadioTower,
    title: "Remote access",
    body: "Remote in and administer over the distributed capability fabric — authority travels with you.",
  },
  {
    icon: Cpu,
    title: "Multi-core scheduling",
    body: "SMP from the ground up: per-core run queues, partitioned and lock-free on the hot path.",
  },
]

function Platform() {
  return (
    <section id="platform" className="relative border-t border-border/60 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The platform"
          title="Everything you expect from an operating system."
          description="Familiar on the surface, Eury-native underneath. The shapes you already know — without the legacy assumptions that made them insecure."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col gap-3 bg-card/60 p-6 transition-colors hover:bg-card"
            >
              <div className="inline-flex size-9 items-center justify-center rounded-lg border border-border/80 bg-background text-brand transition-colors group-hover:border-brand/40">
                <c.icon className="size-4.5" />
              </div>
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { Platform }
