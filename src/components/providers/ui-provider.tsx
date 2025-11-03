"use client"

import React from "react"
import { ThemeProvider } from "next-themes"
import { useToast } from "@/components/ui/toast"
import { useConfetti, Confetti } from "@/components/ui/confetti"

interface UIProviderProps {
  children: React.ReactNode
}

export function UIProvider({ children }: UIProviderProps) {
  const { ToastContainer } = useToast()
  const { isActive } = useConfetti()

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
      <ToastContainer />
      <Confetti active={isActive} />
    </ThemeProvider>
  )
}