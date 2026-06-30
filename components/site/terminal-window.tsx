import { cn } from "@/lib/utils"

function TerminalWindow({
  title = "eury — make run",
  className,
  bodyClassName,
  scanline = false,
  children,
}: {
  title?: string
  className?: string
  bodyClassName?: string
  scanline?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border/80 bg-card/80 shadow-2xl shadow-black/20 backdrop-blur-sm",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border/70 bg-muted/40 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-foreground/15" />
          <span className="size-3 rounded-full bg-foreground/15" />
          <span className="size-3 rounded-full bg-foreground/15" />
        </div>
        <span className="ml-2 truncate font-mono text-xs text-muted-foreground">
          {title}
        </span>
      </div>

      {/* Body */}
      <div
        className={cn(
          "relative overflow-hidden font-mono text-[12.5px] leading-relaxed sm:text-[13px]",
          bodyClassName
        )}
      >
        {scanline ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-brand/15 to-transparent"
            style={{ animation: "eury-scan 6s linear infinite" }}
          />
        ) : null}
        <div className="relative p-4 sm:p-5">{children}</div>
      </div>
    </div>
  )
}

export { TerminalWindow }
