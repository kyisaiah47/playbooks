"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Share2,
  MessageSquare,
  Eye,
  Heart,
  Zap
} from "lucide-react"
import { getCollaborationStats } from "@/lib/collaboration"
import { cn } from "@/lib/utils"

interface CollaborationStatsProps {
  variant?: "compact" | "detailed"
  className?: string
}

export function CollaborationStats({
  variant = "compact",
  className
}: CollaborationStatsProps) {
  const stats = getCollaborationStats("current-user")

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-4 text-sm text-muted-foreground", className)}>
        <div className="flex items-center gap-1">
          <Share2 className="w-4 h-4" />
          <span>{stats.totalShares} shared</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{stats.totalCollaborators} collaborators</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          <span>{stats.totalViews} views</span>
        </div>
      </div>
    )
  }

  // Detailed variant
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Collaboration Impact</h3>
          <Badge variant="outline" className="text-xs">
            <Zap className="w-3 h-3 mr-1" />
            Active
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Share2 className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-600">{stats.totalShares}</div>
            <div className="text-xs text-muted-foreground">Templates Shared</div>
          </div>

          <div className="text-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-600">{stats.totalCollaborators}</div>
            <div className="text-xs text-muted-foreground">Collaborators</div>
          </div>

          <div className="text-center p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <MessageSquare className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-600">{stats.totalComments}</div>
            <div className="text-xs text-muted-foreground">Comments</div>
          </div>

          <div className="text-center p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Eye className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-orange-600">{stats.totalViews}</div>
            <div className="text-xs text-muted-foreground">Total Views</div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-muted-foreground">
              Your templates are helping others plan their lives
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}