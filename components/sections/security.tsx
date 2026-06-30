import { EyeOff, KeyRound, Lock, ShieldCheck } from "lucide-react"

import { Container, SectionHeading } from "@/components/site/primitives"
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

function PermissionCard() {
  const reach = [
    { label: "The file you choose", allowed: true },
    { label: "Your other documents", allowed: false },
    { label: "Your camera & microphone", allowed: false },
    { label: "The internet", allowed: false },
  ]

  return (
    <WindowFrame title="Permission" bodyClassName="bg-card/60">
      <div className="flex items-start gap-3">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
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
          className="flex-1 cursor-default rounded-lg border border-border bg-background py-2 text-sm font-medium"
        >
          Don&apos;t allow
        </button>
        <button
          type="button"
          tabIndex={-1}
          className="flex-1 cursor-default rounded-lg bg-brand py-2 text-sm font-medium text-brand-foreground"
        >
          Choose a file
        </button>
      </div>

      <div className="mt-5 border-t border-border/70 pt-4">
        <div className="mb-2.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          What it can reach
        </div>
        <ul className="space-y-2">
          {reach.map((r) => (
            <li key={r.label} className="flex items-center gap-2.5 text-sm">
              {r.allowed ? (
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-success/15 text-success">
                  <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
              ) : (
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </span>
              )}
              <span className={r.allowed ? "text-foreground" : "text-muted-foreground"}>
                {r.label}
              </span>
            </li>
          ))}
        </ul>
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
    <section id="security" className="relative border-t border-border/60 py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Security"
              title="Built in, not bolted on."
              description="Most systems try to catch threats after they're already inside. EuryOS is built so that nothing — no app, no download, no device — can do anything you didn't allow in the first place."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <p.icon className="size-4.5 text-brand" />
                    <h3 className="text-sm font-semibold">{p.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-brand/10 blur-3xl" />
            <PermissionCard />
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Security }
