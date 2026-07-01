import {
  Download,
  FolderTree,
  Gauge,
  Monitor,
  RadioTower,
  UserRound,
  Wifi,
} from "lucide-react"

import { Container, SectionHeading } from "@/components/site/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal"

const capabilities = [
  {
    icon: Monitor,
    title: "A beautiful desktop",
    body: "A fast, fluid desktop with windows and apps — exactly the way you'd expect it to work.",
  },
  {
    icon: FolderTree,
    title: "Files & folders",
    body: "A familiar file system that's quick to browse, reliable, and impossible to silently corrupt.",
  },
  {
    icon: Wifi,
    title: "Connected & online",
    body: "Wi-Fi, networking, and the internet — secure and ready to go, right out of the box.",
  },
  {
    icon: UserRound,
    title: "Your account, your rules",
    body: "Sign in as you. Your account is a set of permissions you control — never a master key.",
  },
  {
    icon: Download,
    title: "Install with confidence",
    body: "Get apps in seconds, update safely, and roll back instantly if you change your mind.",
  },
  {
    icon: RadioTower,
    title: "Reach it from anywhere",
    body: "Securely get to your device from afar — your permissions travel with you, and only yours.",
  },
  {
    icon: Gauge,
    title: "Fast & responsive",
    body: "Built to make the most of every device, so everything stays smooth under pressure.",
  },
  {
    icon: Sparkles,
    title: "Nothing new to learn",
    body: "Everything sits where you expect. The reinvention is under the hood, not in your way.",
  },
]

function Sparkles({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9.5 3.5 11 8l4.5 1.5L11 11l-1.5 4.5L8 11l-4.5-1.5L8 8z" />
      <path d="M18 4v3M19.5 5.5h-3M18 17v3M19.5 18.5h-3" />
    </svg>
  )
}

function Platform() {
  return (
    <section id="experience" className="relative border-t border-border/60 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The experience"
            title="Everything you expect from your computer."
            description="Familiar on the surface, reinvented underneath. All the things you do every day — just safer, calmer, and more dependable."
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <StaggerItem
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
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

export { Platform }
