"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

type Square = { id: number; pos: [number, number] }

type AnimatedGridPatternProps = React.ComponentProps<"svg"> & {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: number | string
  numSquares?: number
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
}

/**
 * A grid drawn as an SVG pattern, overlaid with a handful of squares that
 * softly fade in and out at random positions. Renders a static grid (no
 * squares) when the user prefers reduced motion.
 */
function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 24,
  className,
  maxOpacity = 0.15,
  duration = 5,
  repeatDelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = React.useId()
  const ref = React.useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })
  const [squares, setSquares] = React.useState<Square[]>([])
  const reduce = useReducedMotion()

  const getPos = React.useCallback(
    (): [number, number] => [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ],
    [dimensions.width, dimensions.height, width, height]
  )

  const updatePos = (squareId: number) => {
    setSquares((cur) =>
      cur.map((sq) => (sq.id === squareId ? { ...sq, pos: getPos() } : sq))
    )
  }

  // Measure the SVG and (re)generate squares from the observer callback, so we
  // never call setState synchronously inside an effect body.
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      const w = entry.contentRect.width
      const h = entry.contentRect.height
      setDimensions({ width: w, height: h })
      setSquares(
        Array.from({ length: numSquares }, (_, i) => ({
          id: i,
          pos: [
            Math.floor((Math.random() * w) / width),
            Math.floor((Math.random() * h) / height),
          ] as [number, number],
        }))
      )
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [numSquares, width, height])

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-current stroke-current",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      {!reduce && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(({ pos: [sx, sy], id: sqId }, index) => (
            <motion.rect
              key={`${sx}-${sy}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: maxOpacity }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.1,
                repeatDelay,
              }}
              onAnimationComplete={() => updatePos(sqId)}
              width={width - 1}
              height={height - 1}
              x={sx * width + 1}
              y={sy * height + 1}
              fill="currentColor"
              strokeWidth="0"
            />
          ))}
        </svg>
      )}
    </svg>
  )
}

export { AnimatedGridPattern }
