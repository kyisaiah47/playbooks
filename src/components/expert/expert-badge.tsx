"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Verified, Award, ExternalLink, MapPin, Users } from "lucide-react"
import { ExpertBadge as ExpertBadgeType } from "@/lib/expert-badges"
import { cn } from "@/lib/utils"

interface ExpertBadgeProps {
  expert: ExpertBadgeType
  variant?: "minimal" | "card" | "inline"
  className?: string
}

interface ExpertProfileDialogProps {
  expert: ExpertBadgeType
  children: React.ReactNode
}

function ExpertProfileDialog({ expert, children }: ExpertProfileDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={expert.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {expert.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{expert.name}</span>
                {expert.verified && (
                  <Verified className="w-4 h-4 text-blue-500 fill-blue-500" />
                )}
              </div>
              <p className="text-sm text-muted-foreground">{expert.title}</p>
              {expert.organization && (
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {expert.organization}
                </p>
              )}
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">About</h4>
            <p className="text-sm text-muted-foreground">{expert.bio}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-1">
              {expert.expertise.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Credentials</h4>
            <div className="space-y-1">
              {expert.credentials.map((credential) => (
                <div key={credential} className="flex items-center gap-2 text-sm">
                  <Award className="w-3 h-3 text-yellow-600" />
                  <span className="text-muted-foreground">{credential}</span>
                </div>
              ))}
            </div>
          </div>

          {expert.templateCount && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded p-2">
              <Users className="w-4 h-4" />
              <span>Created {expert.templateCount} templates</span>
            </div>
          )}

          {(expert.linkedIn || expert.website) && (
            <div className="flex gap-2 pt-2">
              {expert.linkedIn && (
                <Button variant="outline" size="sm" asChild>
                  <a href={expert.linkedIn} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              )}
              {expert.website && (
                <Button variant="outline" size="sm" asChild>
                  <a href={expert.website} target="_blank" rel="noopener noreferrer">
                    Website
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function ExpertBadge({ expert, variant = "minimal", className }: ExpertBadgeProps) {
  if (variant === "inline") {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <ExpertProfileDialog expert={expert}>
              <button className={cn("flex items-center gap-2 text-sm hover:text-primary transition-colors", className)}>
                <Avatar className="w-6 h-6">
                  <AvatarImage src={expert.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    {expert.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium">{expert.name}</span>
                {expert.verified && (
                  <Verified className="w-3 h-3 text-blue-500 fill-blue-500" />
                )}
              </button>
            </ExpertProfileDialog>
          </TooltipTrigger>
          <TooltipContent>
            <p>Expert: {expert.title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  if (variant === "card") {
    return (
      <Card className={cn("hover:shadow-md transition-shadow", className)}>
        <CardContent className="p-4">
          <ExpertProfileDialog expert={expert}>
            <button className="w-full text-left">
              <div className="flex items-start gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={expert.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {expert.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{expert.name}</h4>
                    {expert.verified && (
                      <Verified className="w-4 h-4 text-blue-500 fill-blue-500 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{expert.title}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">{expert.bio}</p>
                </div>
              </div>
            </button>
          </ExpertProfileDialog>
        </CardContent>
      </Card>
    )
  }

  // Minimal variant
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ExpertProfileDialog expert={expert}>
            <Badge
              variant="outline"
              className={cn(
                "cursor-pointer hover:bg-primary/10 transition-colors",
                expert.verified && "border-blue-200 bg-blue-50/50",
                className
              )}
            >
              <Avatar className="w-4 h-4 mr-2">
                <AvatarImage src={expert.avatar} />
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  {expert.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs">Expert: {expert.name}</span>
              {expert.verified && (
                <Verified className="w-3 h-3 ml-1 text-blue-500 fill-blue-500" />
              )}
            </Badge>
          </ExpertProfileDialog>
        </TooltipTrigger>
        <TooltipContent>
          <p>{expert.title} at {expert.organization}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

interface ExpertBadgeListProps {
  experts: ExpertBadgeType[]
  variant?: "minimal" | "card" | "inline"
  maxDisplay?: number
  className?: string
}

export function ExpertBadgeList({
  experts,
  variant = "minimal",
  maxDisplay = 3,
  className
}: ExpertBadgeListProps) {
  if (experts.length === 0) return null

  const displayExperts = experts.slice(0, maxDisplay)
  const remainingCount = experts.length - maxDisplay

  return (
    <div className={cn("space-y-2", className)}>
      {variant === "card" ? (
        <div className="grid gap-2">
          {displayExperts.map((expert) => (
            <ExpertBadge key={expert.id} expert={expert} variant={variant} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {displayExperts.map((expert) => (
            <ExpertBadge key={expert.id} expert={expert} variant={variant} />
          ))}
          {remainingCount > 0 && (
            <Badge variant="outline" className="text-xs">
              +{remainingCount} more expert{remainingCount > 1 ? 's' : ''}
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}