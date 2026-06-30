"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

function CopyButton({
  value,
  className,
  label = "Copy",
}: {
  value: string
  className?: string
  label?: string
}) {
  const [copied, setCopied] = React.useState(false)

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={label}
      className={cn(
        "inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        className
      )}
    >
      {copied ? (
        <Check className="size-3.5 text-emerald-500" />
      ) : (
        <Copy className="size-3.5" />
      )}
    </button>
  )
}

/** A terminal-style command chip with an inline copy button. */
function CommandChip({
  command,
  className,
}: {
  command: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-lg border border-border/80 bg-card/60 py-1.5 pl-4 pr-1.5 font-mono text-sm shadow-sm backdrop-blur-sm",
        className
      )}
    >
      <span className="select-none text-brand">$</span>
      <span className="text-foreground/90">{command}</span>
      <CopyButton value={command} label="Copy command" />
    </div>
  )
}

export { CommandChip, CopyButton }
