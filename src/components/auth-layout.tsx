"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ReactNode } from "react"
import { FeatureCarousel } from "@/components/auth/FeatureCarousel"

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
            <img src="/brand/templata-logo.svg" alt="Templata" className="h-8 w-8 dark:invert" />
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
        className="relative hidden lg:block bg-gradient-to-br from-primary/10 via-primary/5 to-background"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
      >
        <FeatureCarousel />
      </motion.div>
    </div>
  )
}
