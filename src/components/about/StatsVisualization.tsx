"use client"

import { useEffect, useRef, useState } from "react"

export function StatsVisualization() {
  const [phase, setPhase] = useState<'chaos' | 'order' | 'network'>('chaos')

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(prev => {
        if (prev === 'chaos') return 'order'
        if (prev === 'order') return 'network'
        return 'chaos'
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return <LoopingVisualization phase={phase} />
}

function LoopingVisualization({ phase }: { phase: 'chaos' | 'order' | 'network' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Array<{
    x: number
    y: number
    chaosX: number
    chaosY: number
    orderX: number
    orderY: number
    networkX: number
    networkY: number
    pulse: number
  }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height

    // Initialize particles only once
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < 50; i++) {
        const orderX = (i % 10) * (rect.width / 10) + rect.width / 20
        const orderY = Math.floor(i / 10) * (rect.height / 5) + rect.height / 10
        const chaosX = Math.random() * rect.width
        const chaosY = Math.random() * rect.height
        const networkX = rect.width * 0.05 + Math.random() * rect.width * 0.9
        const networkY = rect.height * 0.05 + Math.random() * rect.height * 0.9

        particlesRef.current.push({
          x: chaosX,
          y: chaosY,
          chaosX,
          chaosY,
          orderX,
          orderY,
          networkX,
          networkY,
          pulse: Math.random() * Math.PI * 2
        })
      }
    }

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)

      const particles = particlesRef.current

      particles.forEach((p, i) => {
        p.pulse += 0.02

        let targetX = p.chaosX
        let targetY = p.chaosY

        if (phase === 'order') {
          targetX = p.orderX
          targetY = p.orderY
        } else if (phase === 'network') {
          targetX = p.networkX
          targetY = p.networkY
        }

        // Smooth interpolation
        p.x += (targetX - p.x) * 0.05
        p.y += (targetY - p.y) * 0.05

        // Draw connections in network phase
        if (phase === 'network') {
          particles.slice(i + 1).forEach(p2 => {
            const dist = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2))
            if (dist < 150) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 150)})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          })
        }

        // Draw particle
        const size = 3 + Math.sin(p.pulse) * 1
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => cancelAnimationFrame(animationId)
  }, [phase])

  return (
    <div className="relative w-full aspect-[2/1] border border-border rounded-lg bg-gradient-to-br from-background to-muted/20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
