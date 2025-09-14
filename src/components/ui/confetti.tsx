"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ConfettiPiece {
  id: string
  x: number
  y: number
  rotation: number
  color: string
  size: number
  velocity: { x: number; y: number }
  rotationSpeed: number
}

interface ConfettiProps {
  active: boolean
  duration?: number
  pieceCount?: number
  colors?: string[]
}

export function Confetti({
  active,
  duration = 3000,
  pieceCount = 50,
  colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#f0932b", "#eb4d4b", "#6c5ce7"]
}: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    if (active) {
      const newPieces: ConfettiPiece[] = []

      for (let i = 0; i < pieceCount; i++) {
        newPieces.push({
          id: `${i}-${Date.now()}`,
          x: Math.random() * window.innerWidth,
          y: -10,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 4,
          velocity: {
            x: (Math.random() - 0.5) * 4,
            y: Math.random() * 3 + 1
          },
          rotationSpeed: (Math.random() - 0.5) * 10
        })
      }

      setPieces(newPieces)

      // Animate the pieces
      const interval = setInterval(() => {
        setPieces(prev =>
          prev.map(piece => ({
            ...piece,
            x: piece.x + piece.velocity.x,
            y: piece.y + piece.velocity.y,
            rotation: piece.rotation + piece.rotationSpeed,
            velocity: {
              ...piece.velocity,
              y: piece.velocity.y + 0.1 // gravity
            }
          })).filter(piece => piece.y < window.innerHeight + 50)
        )
      }, 16) // ~60fps

      const timeout = setTimeout(() => {
        clearInterval(interval)
        setPieces([])
      }, duration)

      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
  }, [active, duration, pieceCount, colors])

  if (!active && pieces.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="absolute animate-pulse"
          style={{
            left: piece.x,
            top: piece.y,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px'
          }}
        />
      ))}
    </div>
  )
}

// Hook for triggering confetti
export function useConfetti() {
  const [isActive, setIsActive] = useState(false)

  const trigger = () => {
    setIsActive(true)
    setTimeout(() => setIsActive(false), 100) // Reset quickly
  }

  return { trigger, isActive }
}