"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"
import { navLinks, siteConfig } from "@/lib/site"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { EuryWordmark } from "@/components/site/logo"
import { ThemeToggle } from "@/components/site/theme-toggle"

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])
  return scrolled
}

function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = React.useState(false)
  const reduce = useReducedMotion()

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={reduce ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-border/70 bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            aria-label={`${siteConfig.name} home`}
          >
            <EuryWordmark />
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle className="hidden sm:inline-flex" />
            <Button asChild size="sm" className="hidden h-8 px-3.5 sm:inline-flex">
              <a href={siteConfig.contact}>Contact us</a>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 gap-0 p-0">
                <SheetHeader className="border-b p-5">
                  <SheetTitle className="text-left">
                    <EuryWordmark />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col p-3">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2 border-t p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button asChild className="w-full">
                    <a href={siteConfig.contact}>Contact us</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export { Navbar }
