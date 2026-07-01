import * as React from "react"

import { cn } from "@/lib/utils"

type MagicCardProps = {
  children: React.ReactNode
  className?: string
  size?: number
}

function MagicCard({ children, className }: MagicCardProps) {
  return (
    <div className={cn("group relative flex flex-col overflow-hidden", className)}>
      <div className="relative flex flex-1 flex-col">{children}</div>
    </div>
  )
}

export { MagicCard }
