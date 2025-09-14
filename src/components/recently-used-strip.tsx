"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, X, ChevronUp, ChevronDown, ArrowRight } from "lucide-react"
import { useRecentTemplates } from "@/hooks/use-recent-templates"
import { cn } from "@/lib/utils"

export function RecentlyUsedFooter() {
  const { recentItems, clearRecentItems, hasRecentItems } = useRecentTemplates()
  const [isMinimized, setIsMinimized] = useState(false)

  // Just show the most recent template
  const recentTemplate = recentItems[0]

  // For demo purposes, show a mock recent template if none exists
  const mockTemplate = {
    id: "wedding-planning",
    name: "Wedding Planning",
    url: "/wedding-planning/app",
    category: "Personal Life",
    type: "template" as const,
    lastAccessed: Date.now()
  }

  const displayTemplate = recentTemplate || mockTemplate
  const shouldShow = hasRecentItems || !hasRecentItems // Always show for now to test

  if (!shouldShow) {
    return null
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-background/95 backdrop-blur-sm border rounded-lg px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all shadow-lg"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Continue where you left off</span>
            <ChevronUp className="w-3 h-3" />
          </div>
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="relative bg-background/95 backdrop-blur-sm border-t">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground flex-shrink-0">
              <Clock className="w-4 h-4" />
              <span className="font-medium hidden sm:inline">Continue where you left off</span>
              <span className="font-medium sm:hidden">Recent</span>
            </div>

            <Link
              href={displayTemplate.url}
              className="flex items-center gap-3 min-w-0 flex-1 group hover:bg-muted/50 rounded-lg p-2 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-lg flex-shrink-0">
                {displayTemplate.type === "template" ? "📋" : "📰"}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                  {displayTemplate.name}
                </h3>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {displayTemplate.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground hidden sm:inline">
                    {displayTemplate.type === "template" ? "Template" : "Article"}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </Link>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(true)}
              className="text-muted-foreground hover:text-foreground flex-shrink-0 ml-2"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Keep the old component name for backward compatibility but make it empty
export function RecentlyUsedStrip() {
  return null
}