"use client"

import React from "react"
import { useToast } from "@/components/ui/toast"
import { useConfetti, Confetti } from "@/components/ui/confetti"

interface UIProviderProps {
  children: React.ReactNode
}

export function UIProvider({ children }: UIProviderProps) {
  const { ToastContainer } = useToast()
  const { isActive } = useConfetti()

  return (
    <>
      {children}
      <ToastContainer />
      <Confetti active={isActive} />
    </>
  )
}