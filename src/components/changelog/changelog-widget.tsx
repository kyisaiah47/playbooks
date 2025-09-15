"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import {
  Bell,
  Sparkles,
  ChevronRight,
  CheckCircle,
  Star,
  Zap,
  Bug,
  FileText,
  Megaphone,
  TrendingUp,
  Users,
  Calendar,
  ExternalLink
} from "lucide-react"
import {
  getRecentChangelog,
  getUnseenChangelog,
  markChangelogEntryAsSeen,
  getProgressStats,
  getFeatureCompletionPercentage,
  ChangelogEntry,
  ChangelogItem
} from "@/lib/changelog"
import { cn } from "@/lib/utils"

interface ChangelogWidgetProps {
  variant?: "bell" | "card" | "banner"
  className?: string
}

function getTypeIcon(type: ChangelogEntry["type"]) {
  switch (type) {
    case "feature": return <Sparkles className="w-4 h-4" />
    case "improvement": return <TrendingUp className="w-4 h-4" />
    case "bugfix": return <Bug className="w-4 h-4" />
    case "template": return <FileText className="w-4 h-4" />
    case "announcement": return <Megaphone className="w-4 h-4" />
  }
}

function getTypeColor(type: ChangelogEntry["type"]) {
  return "text-muted-foreground"
}

interface ChangelogDialogProps {
  children: React.ReactNode
}

function ChangelogDialog({ children }: ChangelogDialogProps) {
  const [entries] = useState(() => getRecentChangelog(10))
  const [selectedEntry, setSelectedEntry] = useState<ChangelogEntry | null>(entries[0] || null)
  const progressStats = getProgressStats()
  const completionPercentage = getFeatureCompletionPercentage()

  const handleEntryClick = (entry: ChangelogEntry) => {
    setSelectedEntry(entry)
    markChangelogEntryAsSeen(entry.id)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[70vh] p-0">
        <div className="p-4">
          <DialogHeader className="pb-3">
            <DialogTitle className="text-lg">What's New</DialogTitle>
          </DialogHeader>

          {/* Changelog Entries */}
          <div className="space-y-1 max-h-[50vh] overflow-y-auto">
            {entries.map((entry) => (
              <button
                key={entry.id}
                onClick={() => handleEntryClick(entry)}
                className={cn(
                  "w-full text-left p-3 rounded-md hover:bg-muted/50 transition-colors",
                  selectedEntry?.id === entry.id && "bg-muted"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{entry.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                      {entry.description}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {new Date(entry.date).toLocaleDateString()}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Entry Details */}
          {selectedEntry && (
            <div className="mt-4 pt-4 border-t">
              <h3 className="font-medium mb-2">{selectedEntry.title}</h3>
              <div className="space-y-1">
                {selectedEntry.items.map((item) => (
                  <div key={item.id} className="text-sm text-muted-foreground">
                    • {item.text}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function ChangelogWidget({ variant = "bell", className }: ChangelogWidgetProps) {
  const [unseenCount, setUnseenCount] = useState(0)

  useEffect(() => {
    const unseen = getUnseenChangelog()
    setUnseenCount(unseen.length)
  }, [])

  if (variant === "banner") {
    const latestEntry = getRecentChangelog(1)[0]
    if (!latestEntry) return null

    return (
      <ChangelogDialog>
        <div className={cn(
          "group relative overflow-hidden rounded-xl border bg-gradient-to-r from-primary/5 to-primary/10 p-4 transition-all hover:from-primary/10 hover:to-primary/15 hover:shadow-md cursor-pointer",
          className
        )}>
          <div className="absolute -right-2 -top-2 rotate-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
          </div>

          <div className="relative">
            <div className="mb-2 flex items-center gap-2">
              <Badge className="bg-primary/90 hover:bg-primary text-white">
                <Bell className="mr-1 h-3 w-3" />
                What's New
              </Badge>
              {latestEntry.important && (
                <Badge variant="outline" className="text-xs">
                  <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-500" />
                  Important
                </Badge>
              )}
            </div>

            <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
              {latestEntry.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {latestEntry.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                v{latestEntry.version} • {new Date(latestEntry.date).toLocaleDateString()}
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </ChangelogDialog>
    )
  }

  if (variant === "card") {
    return (
      <Card className={className}>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Changelog
            </div>
            {unseenCount > 0 && (
              <Badge className="bg-red-500 hover:bg-red-600">
                {unseenCount} new
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChangelogDialog>
            <Button variant="outline" className="w-full">
              View Updates
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </ChangelogDialog>
        </CardContent>
      </Card>
    )
  }

  // Bell variant (default)
  return (
    <ChangelogDialog>
      <Button
        variant="ghost"
        size="sm"
        className={cn("relative", className)}
      >
        <Bell className="w-4 h-4" />
        {unseenCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 bg-red-500 hover:bg-red-600 text-xs">
            {unseenCount}
          </Badge>
        )}
      </Button>
    </ChangelogDialog>
  )
}