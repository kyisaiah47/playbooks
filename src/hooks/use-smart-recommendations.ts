"use client"

import { useState, useEffect, useMemo } from "react"
import { useFavorites } from "./use-favorites"
import { useRecentTemplates } from "./use-recent-templates"
import { templateRegistry } from "@/registry/templates"
import { blogRegistry } from "@/registry/blogs"

export interface SmartRecommendation {
  id: string
  name: string
  description: string
  category: string
  type: "template" | "article"
  url: string
  reason: string
  score: number
  icon?: string
  popular?: boolean
  featured?: boolean
}

const STORAGE_KEY = "templata-user-context"

interface UserContext {
  viewedCategories: Record<string, number> // category -> frequency
  viewedItems: string[]
  searchHistory: string[]
  timeOfDay: "morning" | "afternoon" | "evening"
  dayOfWeek: number
  completedTemplates: string[]
  preferences: {
    preferredContentType: "template" | "article" | "both"
    experienceLevel: "beginner" | "intermediate" | "advanced"
    interests: string[]
  }
}

export function useSmartRecommendations() {
  const [context, setContext] = useState<UserContext>({
    viewedCategories: {},
    viewedItems: [],
    searchHistory: [],
    timeOfDay: "morning",
    dayOfWeek: new Date().getDay(),
    completedTemplates: [],
    preferences: {
      preferredContentType: "both",
      experienceLevel: "beginner",
      interests: []
    }
  })

  const { favorites } = useFavorites()
  const { recentItems } = useRecentTemplates()

  // Load user context from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsedContext = JSON.parse(stored)
        setContext(prev => ({ ...prev, ...parsedContext }))
      }
    } catch (error) {
      console.error("Failed to load user context:", error)
    }
  }, [])

  // Update time context
  useEffect(() => {
    const updateTimeContext = () => {
      const hour = new Date().getHours()
      const timeOfDay = hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening"
      const dayOfWeek = new Date().getDay()

      setContext(prev => ({
        ...prev,
        timeOfDay,
        dayOfWeek
      }))
    }

    updateTimeContext()
    const interval = setInterval(updateTimeContext, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  // Save context to localStorage
  const saveContext = (newContext: UserContext) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newContext))
    } catch (error) {
      console.error("Failed to save user context:", error)
    }
  }

  // Track user interactions
  const trackView = (itemId: string, category: string, type: "template" | "article") => {
    setContext(prev => {
      const newContext = {
        ...prev,
        viewedCategories: {
          ...prev.viewedCategories,
          [category]: (prev.viewedCategories[category] || 0) + 1
        },
        viewedItems: [itemId, ...prev.viewedItems.filter(id => id !== itemId)].slice(0, 100)
      }
      saveContext(newContext)
      return newContext
    })
  }

  const trackSearch = (query: string) => {
    if (!query.trim()) return

    setContext(prev => {
      const newContext = {
        ...prev,
        searchHistory: [query, ...prev.searchHistory.filter(q => q !== query)].slice(0, 50)
      }
      saveContext(newContext)
      return newContext
    })
  }

  const markCompleted = (templateId: string) => {
    setContext(prev => {
      const newContext = {
        ...prev,
        completedTemplates: [...new Set([...prev.completedTemplates, templateId])]
      }
      saveContext(newContext)
      return newContext
    })
  }

  // Generate smart recommendations
  const recommendations = useMemo(() => {
    const recs: SmartRecommendation[] = []

    // Get all available items
    const allTemplates = templateRegistry.map(t => ({ ...t, type: "template" as const }))
    const allArticles = blogRegistry.map(a => ({
      ...a,
      type: "article" as const,
      name: a.title,
      description: a.excerpt,
      url: `/blog/${a.slug}`
    }))
    const allItems = [...allTemplates, ...allArticles]

    // Filter out already viewed/favorited items for some recommendations
    const viewedItemIds = new Set([
      ...context.viewedItems,
      ...favorites.map(f => f.id),
      ...recentItems.map(r => r.id)
    ])

    for (const item of allItems) {
      let score = 0
      let reason = ""

      // Base popularity score
      if ((item as any).popular || (item as any).featured) score += 10

      // Category affinity based on viewing history
      const categoryViews = item.category ? (context.viewedCategories[item.category] || 0) : 0
      if (categoryViews > 0) {
        score += Math.min(categoryViews * 5, 25)
        if (categoryViews > 2) {
          reason = `You've shown interest in ${item.category}`
        }
      }

      // Time-based recommendations
      if (context.timeOfDay === "morning") {
        if (item.category?.includes("Planning") || item.category?.includes("Productivity")) {
          score += 8
          reason = reason || "Great for morning planning"
        }
      } else if (context.timeOfDay === "evening") {
        if (item.category?.includes("Personal") || item.category?.includes("Wellness")) {
          score += 8
          reason = reason || "Perfect for evening reflection"
        }
      }

      // Day of week patterns
      if (context.dayOfWeek === 1) { // Monday
        if (item.category?.includes("Career") || item.category?.includes("Business")) {
          score += 6
          reason = reason || "Start your week strong"
        }
      } else if ([6, 0].includes(context.dayOfWeek)) { // Weekend
        if (item.category?.includes("Personal") || item.category?.includes("Wellness") || item.category?.includes("Travel")) {
          score += 6
          reason = reason || "Perfect weekend project"
        }
      }

      // Search history patterns
      for (const searchQuery of context.searchHistory.slice(0, 10)) {
        if (
          (item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()))
        ) {
          score += 15
          reason = reason || `Matches your recent search for "${searchQuery}"`
          break
        }
      }

      // Related to favorited items
      const relatedToFavorites = favorites.some(fav =>
        fav.category && item.category && fav.category === item.category && fav.id !== item.id
      )
      if (relatedToFavorites) {
        score += 12
        reason = reason || `Similar to your favorites`
      }

      // Complementary to recent items
      const recentCategories = recentItems.map(r => r.category).filter(Boolean)
      if (item.category && recentCategories.includes(item.category) && !viewedItemIds.has(item.id)) {
        score += 10
        reason = reason || "Builds on what you've been exploring"
      }

      // Progressive complexity (suggest next steps)
      if (context.completedTemplates.length > 0) {
        const hasCompletedSimilar = context.completedTemplates.some(id => {
          const completed = allItems.find(i => i.id === id)
          return completed && completed.category === item.category
        })
        if (hasCompletedSimilar) {
          score += 8
          reason = reason || "Next step in your journey"
        }
      }

      // Seasonal/trending boost (this could be enhanced with real trends)
      const currentMonth = new Date().getMonth()
      if (currentMonth >= 2 && currentMonth <= 4 && item.category?.includes("Wedding")) {
        score += 5
        reason = reason || "Popular this season"
      }
      if ([8, 9].includes(currentMonth) && item.category?.includes("Career")) {
        score += 5
        reason = reason || "Back-to-school season boost"
      }

      // Diversity penalty for over-represented categories
      const categoryCount = item.category ? recs.filter(r => r.category === item.category).length : 0
      if (categoryCount >= 2) score -= categoryCount * 3

      // Novelty bonus for unexplored categories
      if (item.category && !context.viewedCategories[item.category] && !viewedItemIds.has(item.id)) {
        score += 5
        reason = reason || "Discover something new"
      }

      // Default reason if none set
      if (!reason && score > 0) {
        reason = (item as any).popular ? "Popular choice" : "Recommended for you"
      }

      // Only include items with a reasonable score
      if (score >= 5) {
        recs.push({
          id: item.id,
          name: item.name,
          description: item.description,
          category: item.category,
          type: item.type,
          url: item.url,
          reason,
          score,
          icon: (item as any).icon,
          popular: (item as any).popular,
          featured: (item as any).featured
        })
      }
    }

    // Sort by score and return top recommendations
    return recs
      .sort((a, b) => b.score - a.score)
      .slice(0, 12) // Limit to top 12
  }, [context, favorites, recentItems])

  // Get recommendations by type
  const getRecommendationsByType = (type: "template" | "article", limit = 6) => {
    return recommendations
      .filter(rec => rec.type === type)
      .slice(0, limit)
  }

  // Get recommendations by category
  const getRecommendationsByCategory = (category: string, limit = 4) => {
    return recommendations
      .filter(rec => rec.category === category)
      .slice(0, limit)
  }

  // Get contextual recommendations (time-sensitive)
  const getContextualRecommendations = (limit = 4) => {
    return recommendations
      .filter(rec =>
        rec.reason.includes("morning") ||
        rec.reason.includes("evening") ||
        rec.reason.includes("weekend") ||
        rec.reason.includes("season")
      )
      .slice(0, limit)
  }

  // Get discovery recommendations (new categories)
  const getDiscoveryRecommendations = (limit = 4) => {
    return recommendations
      .filter(rec => rec.reason.includes("new") || !context.viewedCategories[rec.category])
      .slice(0, limit)
  }

  return {
    recommendations,
    getRecommendationsByType,
    getRecommendationsByCategory,
    getContextualRecommendations,
    getDiscoveryRecommendations,
    trackView,
    trackSearch,
    markCompleted,
    context: {
      totalViews: Object.values(context.viewedCategories).reduce((a, b) => a + b, 0),
      topCategories: Object.entries(context.viewedCategories)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3)
        .map(([cat]) => cat),
      timeOfDay: context.timeOfDay,
      searchHistory: context.searchHistory.slice(0, 5)
    }
  }
}