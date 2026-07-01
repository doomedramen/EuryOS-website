"use client"

import * as React from "react"
import { motion, useReducedMotion, type Variants } from "motion/react"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Seconds to wait before animating in. */
  delay?: number
  /** Vertical travel distance in px (slide-up). */
  y?: number
  /** Horizontal travel distance in px (slide-in). */
  x?: number
  /** Only animate the first time it enters view. */
  once?: boolean
}

/** Fade + slide a single block into view on scroll. */
function Reveal({
  children,
  className,
  delay = 0,
  y = 12,
  x = 0,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

type StaggerProps = {
  children: React.ReactNode
  className?: string
  /** "inView" waits for scroll; "mount" plays immediately (above-the-fold). */
  trigger?: "inView" | "mount"
  once?: boolean
}

/** Parent that staggers the entrance of its <StaggerItem> children. */
function Stagger({
  children,
  className,
  trigger = "inView",
  once = true,
}: StaggerProps) {
  const reduce = useReducedMotion()
  const activate =
    trigger === "mount"
      ? { animate: "show" as const }
      : {
          whileInView: "show" as const,
          viewport: { once, margin: "-80px" },
        }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial={reduce ? false : "hidden"}
      {...(reduce ? {} : activate)}
    >
      {children}
    </motion.div>
  )
}

/** A single item within a <Stagger>. */
function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div className={className} variants={reduce ? undefined : itemVariants}>
      {children}
    </motion.div>
  )
}

export { Reveal, Stagger, StaggerItem }
