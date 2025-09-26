"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, User, Star } from "lucide-react"

interface HoverCardPreviewProps {
  title: string
  description: string
  category: string
  author?: string
  readTime?: string
  featured?: boolean
  className?: string
}

export function HoverCardPreview({
  title,
  description,
  category,
  author,
  readTime,
  featured,
  className
}: HoverCardPreviewProps) {
  return (
    <Card className={cn(
      "absolute top-full left-0 mt-2 w-80 z-50 shadow-xl border-2",
      "animate-scale-in opacity-0 group-hover:opacity-100",
      "transition-all duration-200 delay-300",
      className
    )}>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-sm line-clamp-2 leading-snug">
              {title}
            </h3>
            {featured && (
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
            )}
          </div>

          <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              {author && (
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span>{author}</span>
                </div>
              )}
              {readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{readTime}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Subtle bottom gradient for premium feel */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-b" />
      </CardContent>
    </Card>
  )
}

// Wrapper component that shows preview on hover
interface PreviewWrapperProps {
  children: React.ReactNode
  preview: HoverCardPreviewProps
  disabled?: boolean
}

export function PreviewWrapper({ children, preview, disabled = false }: PreviewWrapperProps) {
  if (disabled) return <>{children}</>

  return (
    <div className="relative group">
      {children}
      <HoverCardPreview {...preview} />
    </div>
  )
}