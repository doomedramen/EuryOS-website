import { cn } from "@/lib/utils"

/**
 * The EuryOS glyph — three stacked rounded bars (top + bottom aligned, the
 * middle bar shifted left and shorter). Recreated 1:1 from the brand assets.
 * Bars are drawn in `currentColor` so the mark inherits text color.
 */
function MarkGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 720"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="currentColor"
        d="M252 206.85A36.15 36.15 0 0 0 215.85 243 36.15 36.15 0 0 0 252 279.15h216A36.15 36.15 0 0 0 504.15 243 36.15 36.15 0 0 0 468 206.85Zm-31 117A36.15 36.15 0 0 0 184.85 360 36.15 36.15 0 0 0 221 396.15h139A36.15 36.15 0 0 0 396.15 360 36.15 36.15 0 0 0 360 323.85Zm31 117A36.15 36.15 0 0 0 215.85 477 36.15 36.15 0 0 0 252 513.15h216A36.15 36.15 0 0 0 504.15 477 36.15 36.15 0 0 0 468 440.85Z"
      />
    </svg>
  )
}

/**
 * App-icon style mark: a brand-colored rounded square with light bars.
 * `variant="glyph"` renders the bars alone in `currentColor`.
 */
function EuryMark({
  className,
  variant = "badge",
}: {
  className?: string
  variant?: "badge" | "glyph"
}) {
  if (variant === "glyph") {
    return <MarkGlyph className={cn("text-brand size-7", className)} />
  }

  return (
    <span
      className={cn(
        "relative inline-flex size-8 items-center justify-center overflow-hidden rounded-[28%] bg-brand text-brand-foreground shadow-sm",
        className
      )}
    >
      <MarkGlyph className="size-full text-brand-foreground" />
    </span>
  )
}

function EuryWordmark({
  className,
  markClassName,
}: {
  className?: string
  markClassName?: string
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <EuryMark className={markClassName} />
      <span className="font-display text-[1.0625rem] font-medium tracking-tight">
        EuryOS
      </span>
    </span>
  )
}

export { EuryMark, EuryWordmark, MarkGlyph }
