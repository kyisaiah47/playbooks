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
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <motion.div
          className="flex justify-center gap-2 md:justify-start"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="flex items-center gap-2 text-white">
            <img src="/brand/templata-logo.svg" alt="Templata" className="h-8 w-8 brightness-0 invert" />
            <span className="font-bold text-2xl">Templata</span>
          </Link>
        </motion.div>
        <div className="flex flex-1 items-center justify-center">
          <motion.div
            className="w-full max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="relative hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
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
        <div className="absolute bottom-6 left-6">
          <p className="text-white/90 text-xs">
            Life's biggest moments deserve more than a blank page
            <br />
            <span className="text-white/60">— Templata</span>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
