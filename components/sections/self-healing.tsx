"use client"

import { motion, useReducedMotion, type Variants } from "motion/react"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.22, delayChildren: 0.1 } },
}
const crashed: Variants = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
}
const arrow: Variants = {
  hidden: { opacity: 0, x: -4 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: EASE } },
}
const restarted: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 460, damping: 18 },
  },
}
const caption: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: EASE } },
}

/**
 * The "self-healing" mini-demo for the Features section: a crashed driver is
 * caught and restarted, playing out once as the card scrolls into view.
 */
function SelfHealing() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      variants={reduce ? undefined : container}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
        <motion.span
          variants={reduce ? undefined : crashed}
          className="rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1 text-destructive"
        >
          driver crashed
        </motion.span>
        <motion.span variants={reduce ? undefined : arrow}>→</motion.span>
        <motion.span
          variants={reduce ? undefined : restarted}
          className="rounded-md border border-success/30 bg-success/10 px-2 py-1 text-success"
        >
          restarted
        </motion.span>
      </div>
      <motion.div
        variants={reduce ? undefined : caption}
        className="mt-3 text-muted-foreground"
      >
        your work <span className="text-success">untouched</span> · system{" "}
        <span className="text-success">still running</span>
      </motion.div>
    </motion.div>
  )
}

export { SelfHealing }
