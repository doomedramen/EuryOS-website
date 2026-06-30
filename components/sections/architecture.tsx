import { Boxes, MessagesSquare, ShieldCheck } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container, SectionHeading } from "@/components/site/primitives"

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border/70 bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  )
}

function Band({
  label,
  sublabel,
  chips,
  className,
  highlight,
}: {
  label: string
  sublabel?: string
  chips: string[]
  className?: string
  highlight?: boolean
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-xl border px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between",
        highlight
          ? "border-brand/40 bg-brand/10"
          : "border-border/70 bg-background/50",
        className
      )}
    >
      <div className="flex flex-col">
        <span
          className={cn(
            "text-sm font-semibold",
            highlight && "text-brand"
          )}
        >
          {label}
        </span>
        {sublabel ? (
          <span className="text-xs text-muted-foreground">{sublabel}</span>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {chips.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </div>
    </div>
  )
}

function StackDiagram() {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/40 p-3 sm:p-4">
      <div className="space-y-2">
        <Band
          label="Applications"
          sublabel="Native programs, per-app manifests"
          chips={["shell", "files", "package manager"]}
        />
        <Band
          label="System services"
          sublabel="Userspace · least-privilege"
          chips={["compositor", "object store", "net stack", "identity"]}
        />
        <Band
          label="Drivers"
          sublabel="Userspace · DMA IOMMU-isolated"
          chips={["gpu", "nic", "block"]}
        />

        {/* The trust boundary */}
        <div className="relative flex items-center justify-center py-2">
          <div className="absolute inset-x-2 border-t border-dashed border-brand/40" />
          <span className="relative rounded-full border border-brand/30 bg-background px-3 py-1 font-mono text-[11px] text-brand">
            capability-checked IPC · syscall ABI
          </span>
        </div>

        <Band
          highlight
          label="EuryOS microkernel"
          sublabel="The entire trusted computing base"
          chips={["8 objects", "IPC", "scheduler", "memory", "W^X"]}
        />
        <Band
          label="Hardware"
          sublabel="One design, every target"
          chips={["AArch64", "x86-64", "RISC-V (next)"]}
        />
      </div>
    </div>
  )
}

const supports = [
  {
    icon: ShieldCheck,
    title: "A trusted base small enough to trust",
    body: "Only the microkernel is privileged. Eight object types, a small isolated unsafe core — orders of magnitude less code than a monolithic kernel.",
  },
  {
    icon: MessagesSquare,
    title: "IPC is the crown jewel",
    body: "Synchronous call/reply carries control and authority; a blessed async completion plane carries throughput. No raw shared-memory free-for-all.",
  },
  {
    icon: Boxes,
    title: "Everything else is just a program",
    body: "Drivers, filesystem, network, compositor — all userspace. Each can crash and restart without taking the system, or its neighbors, down.",
  },
]

function Architecture() {
  return (
    <section
      id="architecture"
      className="relative border-t border-border/60 py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Architecture"
          title="A microkernel that does almost nothing — on purpose."
          description="The kernel manages eight object types and the transitions between them. Drivers, the filesystem, the network stack, the compositor — everything else runs in userspace, isolated and restartable, reachable only through capability-checked IPC."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            <StackDiagram />
          </div>
          <div className="flex flex-col justify-center gap-8 lg:col-span-2">
            {supports.map((s) => (
              <div key={s.title} className="flex gap-4">
                <div className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-background text-brand">
                  <s.icon className="size-4.5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Architecture }
