import { cn } from "@/lib/utils"

/**
 * A polished app-window chrome (traffic lights + title) with a plain,
 * sans-serif body — used for the product mockups across the page.
 */
function WindowFrame({
  title,
  className,
  bodyClassName,
  children,
}: {
  title?: string
  className?: string
  bodyClassName?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border/80 bg-card shadow-sm",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/70 bg-muted/40 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-foreground/15" />
          <span className="size-3 rounded-full bg-foreground/15" />
          <span className="size-3 rounded-full bg-foreground/15" />
        </div>
        {title ? (
          <span className="ml-2 truncate text-xs font-medium text-muted-foreground">
            {title}
          </span>
        ) : null}
      </div>
      <div className={cn("p-4 sm:p-5", bodyClassName)}>{children}</div>
    </div>
  )
}

export { WindowFrame }
