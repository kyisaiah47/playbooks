"use client"

import React from "react"
import { getRelatedTemplates, getComplementaryTemplates, getProgressionPath } from "@/lib/related-templates"
import { TemplateRegistryEntry } from "@/registry/templates"
import { cn } from "@/lib/utils"
import { SubtleGlow } from "@/components/ui/glow-variants"

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
  const handleClick = () => {
    if (onNavigate) {
      onNavigate(template.url)
    } else {
      window.location.href = template.url
    }
  }

  return (
    <SubtleGlow>
      <button
        className="group flex items-center gap-3 w-full text-left py-2 px-3 rounded-md hover:bg-muted transition-colors"
        onClick={handleClick}
      >
        <div className="w-4 h-4 flex items-center justify-center text-sm shrink-0">
          {template.icon}
        </div>
        <span className="text-xs truncate">{template.name}</span>
      </button>
    </SubtleGlow>
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
      <h3 className="font-medium text-sm text-muted-foreground">Related Templates</h3>

      <div className="grid gap-2">
        {uniqueTemplates.map(({ template, reason }) => (
          <TemplateCard
            key={template.id}
            template={template}
            reason={reason}
          />
        ))}
      </div>
    </div>
  )
}