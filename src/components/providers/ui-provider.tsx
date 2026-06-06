"use client"

import React from "react"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"
import { useConfetti, Confetti } from "@/components/ui/confetti"

interface UIProviderProps {
  children: React.ReactNode
}

export function UIProvider({ children }: UIProviderProps) {
  const { isActive } = useConfetti()

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
      <Toaster />
      <Confetti active={isActive} />
    </ThemeProvider>
  )
}