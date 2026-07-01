"use client"

import * as React from "react"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"

import { cn } from "@/lib/utils"

type MagicCardProps = {
  children: React.ReactNode
  className?: string
  /** Diameter of the cursor spotlight, in px. */
  size?: number
}

/**
 * A card whose surface lights up with a soft brand-colored spotlight that
 * follows the cursor, fading out when the pointer leaves.
 */
function MagicCard({ children, className, size = 240 }: MagicCardProps) {
  const mouseX = useMotionValue(-size)
  const mouseY = useMotionValue(-size)

  const onMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY]
  )

  const onLeave = React.useCallback(() => {
    mouseX.set(-size)
    mouseY.set(-size)
  }, [mouseX, mouseY, size])

  const background = useMotionTemplate`radial-gradient(${size}px circle at ${mouseX}px ${mouseY}px, color-mix(in oklch, var(--brand) 6%, transparent), transparent 60%)`

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("group relative flex flex-col overflow-hidden", className)}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative flex flex-1 flex-col">{children}</div>
    </div>
  )
}

export { MagicCard }
