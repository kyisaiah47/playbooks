"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

interface AnimatedButtonProps extends ButtonProps {
  animation?: "scale" | "bounce" | "pulse" | "slide"
  children: React.ReactNode
}

export const AnimatedButton = React.forwardRef<
  HTMLButtonElement,
  AnimatedButtonProps
>(({ className, animation = "scale", children, ...props }, ref) => {
  const animationClasses = {
    scale: "transition-all duration-200 hover:scale-105 active:scale-95",
    bounce: "transition-all duration-200 hover:animate-bounce",
    pulse: "transition-all duration-200 hover:animate-pulse",
    slide: "transition-all duration-200 hover:translate-x-1"
  }

  return (
    <Button
      className={cn(animationClasses[animation], className)}
      ref={ref}
      {...props}
    >
      {children}
    </Button>
  )
})

AnimatedButton.displayName = "AnimatedButton"