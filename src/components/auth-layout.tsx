"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-svh flex flex-col">
      <div className="p-6 md:p-10">
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
      </div>
      <div className="flex flex-1 items-center justify-center p-6">
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
  )
}
