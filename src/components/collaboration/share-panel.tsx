"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import {
  Share2,
  Users,
  Link,
  Mail,
  MessageSquare,
  Copy,
  Eye,
  Edit,
  Settings,
  UserPlus,
  CheckCircle,
  ExternalLink,
  Twitter
} from "lucide-react"
import {
  createShareableTemplate,
  shareTemplate,
  ShareableTemplate,
  SharePermissions,
  Collaborator
} from "@/lib/collaboration"
import { useToast } from "@/components/ui/toast"
import { useConfetti } from "@/components/ui/confetti"
import { cn } from "@/lib/utils"

interface SharePanelProps {
  templateId: string
  templateTitle: string
  responses: Record<string, string>
  className?: string
}

export function SharePanel({
  templateId,
  templateTitle,
  responses,
  className
}: SharePanelProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [shareableTemplate, setShareableTemplate] = useState<ShareableTemplate | null>(null)
  const [permissions, setPermissions] = useState<SharePermissions>({
    view: true,
    comment: false,
    edit: false,
    share: false
  })
  const [isSharing, setIsSharing] = useState(false)
  const { showSuccess } = useToast()
  const { trigger: triggerConfetti } = useConfetti()

  const createShare = () => {
    const shared = createShareableTemplate(
      templateId,
      templateTitle,
      responses,
      permissions
    )
    setShareableTemplate(shared)
  }

  const handleShare = async (method: "link" | "email" | "social") => {
    if (!shareableTemplate) {
      createShare()
      return
    }

    setIsSharing(true)
    try {
      const result = await shareTemplate(shareableTemplate, method)

      if (result.success) {
        showSuccess(result.message || "Shared successfully!", "heart")
        if (method === "link") {
          triggerConfetti()
        }
      } else {
        showSuccess(result.message || "Share failed", "none")
      }
    } catch (error) {
      showSuccess("Share failed. Please try again.", "none")
    } finally {
      setIsSharing(false)
    }
  }

  const getResponseCount = () => {
    return Object.values(responses).filter(r => r.trim() !== "").length
  }

  const getTotalPrompts = () => {
    return Object.keys(responses).length
  }

  const completionPercentage = getTotalPrompts() > 0
    ? Math.round((getResponseCount() / getTotalPrompts()) * 100)
    : 0

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn("flex items-center gap-2", className)}
        >
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Share Template
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Template Info */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-lg">
                  📋
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm line-clamp-2">{templateTitle}</h3>
                  <p className="text-xs text-muted-foreground">
                    {getResponseCount()} of {getTotalPrompts()} prompts completed
                  </p>
                </div>
                <Badge variant={completionPercentage >= 75 ? "default" : "secondary"} className="text-xs">
                  {completionPercentage}%
                </Badge>
              </div>

              {completionPercentage < 25 && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-xs text-yellow-800">
                    💡 Consider completing more prompts before sharing for better collaboration
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Share Methods */}
          <div>
            <h3 className="font-semibold mb-3">Share Methods</h3>
            <div className="grid gap-2">
              <Button
                variant="outline"
                onClick={() => handleShare("link")}
                disabled={isSharing}
                className="justify-start"
              >
                <Link className="w-4 h-4 mr-2" />
                Copy Share Link
              </Button>

              <Button
                variant="outline"
                onClick={() => handleShare("email")}
                disabled={isSharing}
                className="justify-start"
              >
                <Mail className="w-4 h-4 mr-2" />
                Share via Email
              </Button>

              <Button
                variant="outline"
                onClick={() => handleShare("social")}
                disabled={isSharing}
                className="justify-start"
              >
                <Twitter className="w-4 h-4 mr-2" />
                Share on Social
              </Button>
            </div>
          </div>

          {/* Permissions */}
          <div>
            <h3 className="font-semibold mb-3">Permissions</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Can view</p>
                    <p className="text-xs text-muted-foreground">See template responses</p>
                  </div>
                </div>
                <Switch
                  checked={permissions.view}
                  onCheckedChange={(checked) =>
                    setPermissions(prev => ({ ...prev, view: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Can comment</p>
                    <p className="text-xs text-muted-foreground">Add comments and feedback</p>
                  </div>
                </div>
                <Switch
                  checked={permissions.comment}
                  onCheckedChange={(checked) =>
                    setPermissions(prev => ({ ...prev, comment: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Edit className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Can edit</p>
                    <p className="text-xs text-muted-foreground">Modify template responses</p>
                  </div>
                </div>
                <Switch
                  checked={permissions.edit}
                  onCheckedChange={(checked) =>
                    setPermissions(prev => ({ ...prev, edit: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Can share</p>
                    <p className="text-xs text-muted-foreground">Share with others</p>
                  </div>
                </div>
                <Switch
                  checked={permissions.share}
                  onCheckedChange={(checked) =>
                    setPermissions(prev => ({ ...prev, share: checked }))
                  }
                />
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Collaboration Benefits</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Get feedback from friends and family</li>
                  <li>• Work together on planning projects</li>
                  <li>• Share expertise and insights</li>
                  <li>• Keep everyone aligned on progress</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}