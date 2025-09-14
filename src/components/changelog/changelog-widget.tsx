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
  switch (type) {
    case "feature": return "bg-blue-100 text-blue-800 border-blue-200"
    case "improvement": return "bg-green-100 text-green-800 border-green-200"
    case "bugfix": return "bg-red-100 text-red-800 border-red-200"
    case "template": return "bg-purple-100 text-purple-800 border-purple-200"
    case "announcement": return "bg-yellow-100 text-yellow-800 border-yellow-200"
  }
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
      <DialogContent className="sm:max-w-4xl max-h-[80vh] p-0">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-1/3 border-r bg-muted/20 p-6 overflow-y-auto">
            <DialogHeader className="pb-4">
              <DialogTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                What's New
              </DialogTitle>
            </DialogHeader>

            {/* Progress Section */}
            <div className="mb-6 p-4 bg-background rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Platform Progress</span>
                <Badge variant="outline" className="text-xs">
                  {completionPercentage}% Complete
                </Badge>
              </div>
              <Progress value={completionPercentage} className="mb-3" />
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  {progressStats.completedFeatures} features
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="w-3 h-3 text-blue-500" />
                  {progressStats.templatesCount}+ templates
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-purple-500" />
                  {progressStats.expertsCount} experts
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-orange-500" />
                  {progressStats.weeksSincelaunch} weeks live
                </div>
              </div>
            </div>

            {/* Changelog Entries */}
            <div className="space-y-2">
              {entries.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => handleEntryClick(entry)}
                  className={cn(
                    "w-full text-left p-3 rounded-lg border transition-all hover:bg-background/50",
                    selectedEntry?.id === entry.id && "bg-background border-primary/20"
                  )}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className={cn("text-xs", getTypeColor(entry.type))}
                    >
                      {getTypeIcon(entry.type)}
                      <span className="ml-1 capitalize">{entry.type}</span>
                    </Badge>
                    {entry.important && (
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  <h4 className="font-semibold text-sm line-clamp-1">{entry.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                    {entry.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">v{entry.version}</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(entry.date).toLocaleDateString()}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {selectedEntry && (
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={cn("text-xs", getTypeColor(selectedEntry.type))}>
                        {getTypeIcon(selectedEntry.type)}
                        <span className="ml-1 capitalize">{selectedEntry.type}</span>
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        v{selectedEntry.version}
                      </Badge>
                      {selectedEntry.important && (
                        <Badge className="text-xs bg-yellow-500/90 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Important
                        </Badge>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{selectedEntry.title}</h2>
                    <p className="text-muted-foreground">{selectedEntry.description}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(selectedEntry.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Group items by category */}
                  {(() => {
                    const categorizedItems = selectedEntry.items.reduce((acc, item) => {
                      const category = item.category || "General"
                      if (!acc[category]) acc[category] = []
                      acc[category].push(item)
                      return acc
                    }, {} as Record<string, ChangelogItem[]>)

                    return Object.entries(categorizedItems).map(([category, items]) => (
                      <div key={category}>
                        <h3 className="font-semibold mb-3 text-lg">{category}</h3>
                        <div className="space-y-2">
                          {items.map((item) => (
                            <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <p className="text-sm">{item.text}</p>
                                {item.templateId && (
                                  <Badge variant="outline" className="text-xs mt-2">
                                    <FileText className="w-3 h-3 mr-1" />
                                    Template Update
                                  </Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  })()}
                </div>

                {/* Call to Action */}
                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Experience the improvements</h3>
                      <p className="text-sm text-muted-foreground">
                        Try out these new features in your templates
                      </p>
                    </div>
                    <Button asChild>
                      <a href="/templates" className="flex items-center gap-2">
                        Explore Templates
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
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