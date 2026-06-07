"use client"

import React from "react"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"

interface UIProviderProps {
  children: React.ReactNode
}

export function UIProvider({ children }: UIProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
      <Toaster />
    </ThemeProvider>
  )
}