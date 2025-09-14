"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Zap } from "lucide-react"
import { getRelatedTemplates, getComplementaryTemplates, getProgressionPath } from "@/lib/related-templates"
import { TemplateRegistryEntry } from "@/registry/templates"
import { cn } from "@/lib/utils"

interface RelatedTemplatesProps {
  templateId: string
  className?: string
}

interface TemplateCardProps {
  template: TemplateRegistryEntry
  reason?: "related" | "complementary" | "progression"
  onNavigate?: (url: string) => void
}

function TemplateCard({ template, reason, onNavigate }: TemplateCardProps) {
  const reasonLabels = {
    related: { icon: Star, label: "Related", color: "text-yellow-600" },
    complementary: { icon: Users, label: "Often paired with", color: "text-blue-600" },
    progression: { icon: TrendingUp, label: "Next step", color: "text-green-600" }
  }

  const reasonInfo = reason ? reasonLabels[reason] : null
  const ReasonIcon = reasonInfo?.icon

  const handleClick = () => {
    if (onNavigate) {
      onNavigate(template.url)
    } else {
      window.location.href = template.url
    }
  }

  return (
    <Card className={cn(
      "group cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5",
      template.color
    )}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0",
            "bg-background/80 backdrop-blur-sm"
          )}>
            {template.icon}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                {template.name}
              </h4>
              {reasonInfo && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ReasonIcon className={cn("w-3 h-3", reasonInfo.color)} />
                </div>
              )}
            </div>

            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
              {template.description}
            </p>

            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {template.category}
              </Badge>

              <div className="flex items-center gap-2">
                {template.popular && (
                  <Zap className="w-3 h-3 text-orange-500" />
                )}
                {template.featured && (
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={handleClick}
                >
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {reasonInfo && (
              <div className="mt-2 pt-2 border-t border-border/50">
                <p className={cn("text-xs font-medium", reasonInfo.color)}>
                  {reasonInfo.label}
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function RelatedTemplates({ templateId, className }: RelatedTemplatesProps) {
  const relatedTemplates = getRelatedTemplates(templateId, 3)
  const complementaryTemplates = getComplementaryTemplates(templateId)
  const progressionTemplates = getProgressionPath(templateId)

  // Combine all templates with their reasons
  const allTemplates: Array<{ template: TemplateRegistryEntry; reason: "related" | "complementary" | "progression" }> = [
    ...progressionTemplates.slice(0, 1).map(template => ({ template, reason: "progression" as const })),
    ...complementaryTemplates.slice(0, 1).map(template => ({ template, reason: "complementary" as const })),
    ...relatedTemplates.slice(0, 2).map(template => ({ template, reason: "related" as const }))
  ]

  // Remove duplicates and limit to 4
  const uniqueTemplates = allTemplates.filter((item, index, self) =>
    index === self.findIndex(t => t.template.id === item.template.id)
  ).slice(0, 4)

  if (uniqueTemplates.length === 0) {
    return null
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Related Templates</h3>
          <p className="text-sm text-muted-foreground">
            Other templates that might help with your journey
          </p>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <a href="/templates" className="flex items-center gap-2">
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>

      <div className="grid gap-3">
        {uniqueTemplates.map(({ template, reason }) => (
          <TemplateCard
            key={template.id}
            template={template}
            reason={reason}
          />
        ))}
      </div>

      {uniqueTemplates.length >= 4 && (
        <div className="text-center pt-2">
          <Button variant="outline" size="sm" asChild>
            <a href="/templates" className="flex items-center gap-2">
              Explore More Templates
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      )}
    </div>
  )
}