"use client"

import { useKnowledgeGraph } from "@/hooks/use-knowledge-graph"
import { templateRegistry } from "@/registry/guides"
import type { GuideRegistryEntry } from "@/registry/guides"
import { cn } from "@/lib/utils"
import { SubtleGlow } from "@/components/ui/glow-variants"
import { Badge } from "@/components/ui/badge"
import { Brain } from "lucide-react"

interface RelatedTemplatesProps {
  guideId: string
  className?: string
  showReasoning?: boolean
  limit?: number
}

interface GuideCardProps {
  guide: GuideRegistryEntry
  strength: number
  reason: string
  level: 'critical' | 'strong' | 'medium'
  showReasoning?: boolean
  onNavigate?: (url: string) => void
}

function GuideCard({ guide, strength, reason, level, showReasoning, onNavigate }: GuideCardProps) {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate(guide.url)
    } else {
      window.location.href = guide.url
    }
  }

  const strengthColor = level === 'critical' ? 'text-red-600' :
                       level === 'strong' ? 'text-orange-600' : 'text-primary'

  const strengthBg = level === 'critical' ? 'bg-red-50 border-red-200' :
                    level === 'strong' ? 'bg-orange-50 border-orange-200' : 'bg-primary/5 border-primary/20'

  return (
    <SubtleGlow>
      <button
        className="group flex flex-col gap-2 w-full text-left p-3 rounded-md hover:bg-muted transition-colors border border-transparent hover:border-muted"
        onClick={handleClick}
      >
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 flex items-center justify-center text-sm shrink-0">
            {guide.icon}
          </div>
          <span className="text-sm font-medium truncate flex-1">{guide.name}</span>
          <Badge variant="outline" className={cn("text-xs", strengthBg, strengthColor)}>
            {strength}%
          </Badge>
        </div>

        {showReasoning && (
          <div className="text-xs text-muted-foreground pl-7 line-clamp-2">
            <Brain className="inline w-3 h-3 mr-1" />
            {reason}
          </div>
        )}
      </button>
    </SubtleGlow>
  )
}

export function RelatedTemplates({
  guideId,
  className,
  showReasoning = true,
  limit = 4
}: RelatedTemplatesProps) {
  // Knowledge graph disabled - return null for now
  return null

  /*
  const { getRelatedTemplates } = useKnowledgeGraph()

  // Get knowledge graph relationships
  const knowledgeRelations = getRelatedTemplates(guideId, limit)

  // Map knowledge graph results to guide registry entries
  const relatedGuides = knowledgeRelations
    .map(relation => {
      const guide = templateRegistry.find(t => t.id === relation.guideId)
      if (!guide) return null

      return {
        template,
        strength: relation.strength,
        reason: relation.reason,
        level: relation.level
      }
    })
    .filter(Boolean) as Array<{
      guide: GuideRegistryEntry
      strength: number
      reason: string
      level: 'critical' | 'strong' | 'medium'
    }>

  if (relatedGuides.length === 0) {
    return null
  }
  */

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center gap-2">
        <Brain className="w-4 h-4 text-primary" />
        <h3 className="font-medium text-sm text-muted-foreground">
          Psychologically Connected Templates
        </h3>
      </div>

      <div className="grid gap-2">
        {relatedGuides.map(({ guide, strength, reason, level }) => (
          <TemplateCard
            key={guide.id}
            guide={template}
            strength={strength}
            reason={reason}
            level={level}
            showReasoning={showReasoning}
          />
        ))}
      </div>

      {showReasoning && (
        <div className="text-xs text-muted-foreground italic">
          Connections based on psychological decision-making patterns
        </div>
      )}
    </div>
  )
}