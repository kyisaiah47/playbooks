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
import { useKnowledgeGraph } from "@/hooks/use-knowledge-graph"
import { useFavorites } from "@/hooks/use-favorites"
import { SubtleGlow } from "@/components/ui/glow-variants"

const getGuideIcon = (guideId: string) => {
  switch (guideId) {
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
  currentGuideId?: string // To exclude current guide from recommendations
}

export function SmartRecommendationsWidget({
  title = "You might also like",
  limit = 4,
  type = "mixed",
  currentGuideId
}: SmartRecommendationsWidgetProps) {
  const { getPersonalizedRecommendations, getAgeAppropriateTemplates } = useKnowledgeGraph()
  const { isFavorited, toggleFavorite } = useFavorites()

  // Mock user profile - in real app, get from user context/props
  const userProfile = {
    age: 28, // Could come from user profile
    goals: ['career_focused', 'financial_independence'],
    completedTemplates: [],
    currentTemplates: currentGuideId ? [currentGuideId] : []
  }

  // Get guide registry for mapping
  const templateRegistry = React.useMemo(() => {
    // This would normally come from your guide registry
    // For now, creating mock entries based on knowledge graph results
    return []
  }, [])

  // Get recommendations based on type using knowledge graph
  const recommendations = React.useMemo(() => {
    let recs: Array<{
      id: string
      name: string
      url: string
      category: string
      type: string
      reason: string
    }> = []

    try {
      switch (type) {
        case "contextual":
          // Get personalized recommendations
          const personalizedRecs = getPersonalizedRecommendations(userProfile)
          recs = personalizedRecs.map(rec => ({
            id: rec.guideId,
            name: rec.guideId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            url: `/guide/${rec.guideId}`,
            category: getCategoryFromTemplate(rec.guideId),
            type: 'guide',
            reason: rec.reason
          }))
          break
        case "discovery":
          // Get age-appropriate templates
          const ageRecs = getAgeAppropriateTemplates(userProfile.age || 25, limit)
          recs = ageRecs.map(rec => ({
            id: rec.guideId,
            name: rec.guideId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            url: `/guide/${rec.guideId}`,
            category: getCategoryFromTemplate(rec.guideId),
            type: 'guide',
            reason: rec.reason
          }))
          break
        default:
          // Mixed: combine both approaches
          const personalizedMix = getPersonalizedRecommendations(userProfile)
          const ageMix = getAgeAppropriateTemplates(userProfile.age || 25, Math.ceil(limit / 2))
          const combined = [...personalizedMix, ...ageMix].slice(0, limit)

          recs = combined.map(rec => ({
            id: rec.guideId,
            name: rec.guideId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            url: `/guide/${rec.guideId}`,
            category: getCategoryFromTemplate(rec.guideId),
            type: 'guide',
            reason: rec.reason
          }))
      }

      // Filter out current guide if provided
      if (currentGuideId) {
        recs = recs.filter(rec => rec.id !== currentGuideId)
      }

      // Remove duplicates
      const uniqueRecs = recs.filter((rec, index, self) =>
        index === self.findIndex(r => r.id === rec.id)
      )

      return uniqueRecs.slice(0, limit)
    } catch (error) {
      console.warn('Knowledge graph recommendations failed, falling back to empty:', error)
      return []
    }
  }, [type, limit, currentGuideId, getPersonalizedRecommendations, getAgeAppropriateTemplates, userProfile])

  // Helper function to determine category from guide ID
  function getCategoryFromTemplate(guideId: string): string {
    const categoryMap: Record<string, string> = {
      'wedding-planning': 'Family Life',
      'home-buying': 'Real Estate',
      'baby-planning': 'Family Life',
      'job-search': 'Career',
      'business-launch': 'Entrepreneurship',
      'personal-finance': 'Finance',
      'divorce-coordination': 'Life Crisis',
      'retirement-planning': 'Finance',
      'fitness-journey': 'Health & Wellness',
      'apartment-hunting': 'Housing'
    }
    return categoryMap[guideId] || 'Personal Development'
  }

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
          <Brain className="w-5 h-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recommendations.map((rec) => {
            const Icon = rec.type === "template" ? getGuideIcon(rec.id) : getCategoryIcon(rec.category)
            const isStarred = isFavorited(rec.id)

            return (
              <SubtleGlow key={rec.id}>
                <Link
                  href={rec.url}
                  onClick={() => handleClick(rec)}
                  className="block"
                >
                  <div className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-muted/50 bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                      {rec.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <Badge variant="outline" className="text-xs">
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
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
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