"use client"

import { EyeOff, KeyRound, Lock, ShieldCheck } from "lucide-react"
import { motion, useReducedMotion, type Variants } from "motion/react"

import { Container, SectionHeading } from "@/components/site/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal"
import { WindowFrame } from "@/components/site/window-frame"

const pillars = [
  {
    icon: KeyRound,
    title: "You're always in control",
    body: "Apps ask before they touch your files, camera, or network — and you can take that permission back the instant you change your mind.",
  },
  {
    icon: Lock,
    title: "Nothing is trusted by default",
    body: "There's no master account for malware to hijack. Every app is boxed in from the moment it opens.",
  },
  {
    icon: ShieldCheck,
    title: "Threats can't spread",
    body: "Even if one app is compromised, it stays sealed off from the rest of your system and the rest of your data.",
  },
  {
    icon: EyeOff,
    title: "Private by design",
    body: "Your data goes only where you send it. EuryOS enforces it — it isn't a setting you have to remember to switch on.",
  },
]

const reachListVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}
const reachRowVariants: Variants = {
  hidden: { opacity: 0, x: -6 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}
const reachMarkVariants: Variants = {
  hidden: { scale: 0.4, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 480, damping: 20 },
  },
}

function ReachMark({ allowed }: { allowed: boolean }) {
  const reduce = useReducedMotion()
  return (
    <motion.span
      variants={reduce ? undefined : reachMarkVariants}
      className={
        "inline-flex size-5 items-center justify-center rounded-full " +
        (allowed
          ? "bg-success/10 text-success"
          : "bg-muted text-muted-foreground")
      }
    >
      {allowed ? (
        <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      )}
    </motion.span>
  )
}

function PermissionCard() {
  const reduce = useReducedMotion()
  const reach = [
    { label: "The file you choose", allowed: true },
    { label: "Your other documents", allowed: false },
    { label: "Your camera & microphone", allowed: false },
    { label: "The internet", allowed: false },
  ]

  return (
    <WindowFrame title="Permission" bodyClassName="bg-card/60">
      <div className="flex items-start gap-3">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-foreground">
          <Sparkle />
        </span>
        <div className="min-w-0">
          <div className="text-sm font-semibold">Photo Editor</div>
          <div className="text-sm text-muted-foreground">
            wants to open a file from your Documents
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          tabIndex={-1}
          className="flex-1 cursor-default rounded-md border border-border bg-background py-2 text-sm font-medium"
        >
          Don&apos;t allow
        </button>
        <button
          type="button"
          tabIndex={-1}
          className="flex-1 cursor-default rounded-md bg-primary py-2 text-sm font-medium text-primary-foreground"
        >
          Choose a file
        </button>
      </div>

      <div className="mt-5 border-t border-border/70 pt-4">
        <div className="mb-2.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          What it can reach
        </div>
        <motion.ul
          className="space-y-2"
          variants={reduce ? undefined : reachListVariants}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {reach.map((r) => (
            <motion.li
              key={r.label}
              variants={reduce ? undefined : reachRowVariants}
              className="flex items-center gap-2.5 text-sm"
            >
              <ReachMark allowed={r.allowed} />
              <span className={r.allowed ? "text-foreground" : "text-muted-foreground"}>
                {r.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </WindowFrame>
  )
}

function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fillOpacity="0.25" />
      <circle cx="9" cy="10" r="2" />
      <path d="M5 18l4-4 3 3 3-4 4 5z" />
    </svg>
  )
}

function Security() {
  return (
    <section id="security" className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Security"
                title="Built in, not bolted on."
                description="Most systems try to catch threats after they're already inside. EuryOS is built so that nothing — no app, no download, no device — can do anything you didn't allow in the first place."
              />
            </Reveal>

            <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
              {pillars.map((p) => (
                <StaggerItem key={p.title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <p.icon className="size-4.5 text-brand" />
                    <h3 className="text-sm font-semibold">{p.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal className="relative">
            <PermissionCard />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export { Security }
