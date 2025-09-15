"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Brain,
  ChevronRight,
  Heart,
  Home,
  Briefcase,
  Target,
  Baby,
  Rocket,
  GraduationCap,
  BookOpen,
  Dumbbell,
  Star,
  Lightbulb
} from "lucide-react"
import { useSmartRecommendations } from "@/hooks/use-smart-recommendations"
import { useFavorites } from "@/hooks/use-favorites"
import { SubtleGlow } from "@/components/ui/glow-variants"

const getTemplateIcon = (templateId: string) => {
  switch (templateId) {
    case 'wedding-planning': return Heart
    case 'home-buying': return Home
    case 'baby-planning': return Baby
    case 'job-search': return Briefcase
    case 'business-launch': return Rocket
    case 'college-planning': return GraduationCap
    case 'academic-research': return BookOpen
    case 'fitness-journey': return Dumbbell
    default: return Target
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Wedding Planning": return Heart
    case "Real Estate": return Home
    case "Career": return Briefcase
    case "Business": return Rocket
    default: return BookOpen
  }
}

interface SmartRecommendationsWidgetProps {
  title?: string
  limit?: number
  type?: "contextual" | "discovery" | "mixed"
  currentTemplateId?: string // To exclude current template from recommendations
}

export function SmartRecommendationsWidget({
  title = "You might also like",
  limit = 4,
  type = "mixed",
  currentTemplateId
}: SmartRecommendationsWidgetProps) {
  const {
    getContextualRecommendations,
    getDiscoveryRecommendations,
    getRecommendationsByType,
    trackView
  } = useSmartRecommendations()

  const { isFavorited, toggleFavorite } = useFavorites()

  // Get recommendations based on type
  const recommendations = React.useMemo(() => {
    let recs = []

    switch (type) {
      case "contextual":
        recs = getContextualRecommendations(limit)
        break
      case "discovery":
        recs = getDiscoveryRecommendations(limit)
        break
      default:
        // Mixed: combine contextual and discovery
        const contextual = getContextualRecommendations(Math.ceil(limit / 2))
        const discovery = getDiscoveryRecommendations(Math.floor(limit / 2))
        recs = [...contextual, ...discovery].slice(0, limit)
    }

    // Filter out current template if provided
    if (currentTemplateId) {
      recs = recs.filter(rec => rec.id !== currentTemplateId)
    }

    return recs.slice(0, limit)
  }, [type, limit, currentTemplateId, getContextualRecommendations, getDiscoveryRecommendations])

  if (recommendations.length === 0) {
    return null
  }

  const handleClick = (rec: any) => {
    trackView(rec.id, rec.category, rec.type)
  }

  const handleToggleFavorite = (e: React.MouseEvent, rec: any) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite({
      id: rec.id,
      name: rec.name,
      url: rec.url,
      category: rec.category,
      type: rec.type
    })
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Brain className="w-5 h-5 text-blue-500" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recommendations.map((rec) => {
            const Icon = rec.type === "template" ? getTemplateIcon(rec.id) : getCategoryIcon(rec.category)
            const isStarred = isFavorited(rec.id)

            return (
              <SubtleGlow key={rec.id}>
                <Link
                  href={rec.url}
                  onClick={() => handleClick(rec)}
                  className="block"
                >
                  <div className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-muted/50 bg-gradient-to-r from-blue-50/50 to-transparent">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm group-hover:text-blue-600 transition-colors line-clamp-1">
                      {rec.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <Badge variant="outline" className="text-xs border-blue-200 text-blue-700">
                        {rec.category}
                      </Badge>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Lightbulb className="w-3 h-3" />
                        {rec.reason}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => handleToggleFavorite(e, rec)}
                      className={`h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity ${isStarred ? 'opacity-100 hover:bg-yellow-100 hover:text-yellow-600' : 'hover:bg-muted'}`}
                    >
                      <Star className={`w-3 h-3 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-foreground'}`} />
                    </Button>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                  </div>
                  </div>
                </Link>
              </SubtleGlow>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}