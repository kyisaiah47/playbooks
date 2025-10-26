"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-6 p-6 md:p-10 lg:p-16">
        <motion.div
          className="flex justify-center gap-2 md:justify-start"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/brand/templata-logo.svg" alt="Templata" className="h-8 w-8 brightness-0 invert" />
            <span className="font-bold text-xl tracking-tight">Templata</span>
          </Link>
        </motion.div>
        <div className="flex flex-1 items-center justify-center py-8">
          <motion.div
            className="w-full max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="relative hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
      >
        <img
          src="/geometric-monuments.png"
          alt="Templata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Theme-aware color overlay */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply dark:mix-blend-screen dark:bg-primary/20" />
        {/* Dark overlay for consistency */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

        {/* Tagline in bottom corner */}
        <div className="absolute bottom-8 left-8">
          <p className="text-white/90 text-sm font-medium">
            Wikipedia × Notion for life planning
          </p>
          <p className="text-white/60 text-xs mt-1">
            Plan, reflect, and grow with Templata
          </p>
        </div>
      </motion.div>
    </div>
  )
}
