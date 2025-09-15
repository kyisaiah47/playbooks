"use client"

import React, { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Search,
  Heart,
  Home,
  Briefcase,
  Target,
  Baby,
  Rocket,
  GraduationCap,
  BookOpen,
  Dumbbell,
  ArrowRight,
  TrendingUp,
  Clock,
  User,
  Zap,
  Sparkles,
  ChevronRight,
  Star,
  Brain,
  Compass,
  Lightbulb,
  Verified,
  Trophy,
  Hash,
  MessageCircle,
  Globe,
  FileText
} from "lucide-react"
import { PremiumGlow, SubtleGlow } from "@/components/ui/glow-variants"
import { useFavorites } from "@/hooks/use-favorites"
import { useRecentTemplates } from "@/hooks/use-recent-templates"
import { useSmartRecommendations } from "@/hooks/use-smart-recommendations"
import { TemplateOfWeekShowcase } from "@/components/template-of-week/showcase"
import { isCurrentTemplateOfWeek } from "@/lib/template-of-week"
import { ChangelogWidget } from "@/components/changelog/changelog-widget"

// Import data
import { templateRegistry } from "@/registry/templates"
import { blogRegistry } from "@/registry/blogs"

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
  mode?: "templates" | "articles" | "all" | "smart" | "template-mode"
  autoFocus?: boolean
  // Template-specific props
  templateMode?: {
    template: any
    onSectionChange: (sectionIndex: number) => void
    onInsertPrompt: (prompt: any) => void
    onOpenResource: (resource: any) => void
  }
}

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
    case "Business": return TrendingUp
    default: return BookOpen
  }
}

export function CommandPalette({
  isOpen,
  onClose,
  mode: initialMode = "all",
  autoFocus = true,
  templateMode
}: CommandPaletteProps) {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [mode, setMode] = useState(initialMode)

  // Auth state
  const { isLoggedIn } = useAuth()

  // Favorites and recent items
  const { favorites, isFavorited, toggleFavorite } = useFavorites()
  const { addRecentItem } = useRecentTemplates()

  // Smart recommendations
  const {
    getRecommendationsByType,
    getContextualRecommendations,
    getDiscoveryRecommendations,
    trackView,
    trackSearch
  } = useSmartRecommendations()

  // Debounce search query for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
      // Track search queries for recommendations
      if (query.trim().length >= 3) {
        trackSearch(query.trim())
      }
    }, 200)
    return () => clearTimeout(timer)
  }, [query, trackSearch])

  // Show onboarding hint for new users
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('templata-cmdk-onboarding')
    if (!hasSeenOnboarding && isOpen) {
      setShowOnboarding(true)
      localStorage.setItem('templata-cmdk-onboarding', 'true')
    }
  }, [isOpen])

  // Prepare searchable data with enhanced metadata
  const searchableTemplates = useMemo(() => {
    return templateRegistry.map(template => ({
      ...template,
      searchableText: `${template.name} ${template.description} ${template.category}`.toLowerCase(),
      type: 'template' as const
    }))
  }, [])

  const searchableArticles = useMemo(() => {
    return blogRegistry.map(article => ({
      ...article,
      searchableText: `${article.title} ${article.excerpt} ${article.category}`.toLowerCase(),
      type: 'article' as const
    }))
  }, [])

  // Template-specific data when in template mode
  const templateSpecificData = useMemo(() => {
    if (!templateMode?.template) return null

    const template = templateMode.template
    console.log('Template structure:', template)

    // Extract prompts from all sections - check both reflectionPrompts and prompts
    const allPrompts = template.sections?.flatMap((section: any, sectionIndex: number) => {
      const prompts = section.reflectionPrompts || section.prompts || []
      console.log(`Section ${section.title} has ${prompts.length} prompts:`, prompts)
      return prompts.map((prompt: any) => ({
        ...prompt,
        sectionTitle: section.title,
        sectionIndex,
        searchableText: `${prompt.prompt} ${prompt.category} ${section.title}`.toLowerCase(),
        type: 'prompt' as const
      }))
    }) || []

    // Extract resources
    const allResources = (template.resources || []).map((resource: any) => ({
      ...resource,
      searchableText: `${resource.title} ${resource.type} ${resource.category || ''}`.toLowerCase(),
      type: 'resource' as const
    }))

    // Extract sections
    const allSections = template.sections.map((section: any, index: number) => ({
      ...section,
      sectionIndex: index,
      searchableText: `${section.title} ${section.description || ''}`.toLowerCase(),
      type: 'section' as const
    }))

    return {
      prompts: allPrompts,
      resources: allResources,
      sections: allSections
    }
  }, [templateMode?.template])

  // Enhanced result grouping with visual hierarchy
  const resultGroups = useMemo(() => {
    // Template mode - prioritize template-specific content
    if (mode === "template-mode" && templateSpecificData) {
      if (!debouncedQuery) {
        // No search - show helpful suggestions for template mode
        return {
          prompts: templateSpecificData.prompts.slice(0, 6),
          resources: templateSpecificData.resources.slice(0, 6),
          sections: templateSpecificData.sections.slice(0, 6),
          templates: [],
          articles: []
        }
      }

      // Search in template-specific content
      const queryLower = debouncedQuery.toLowerCase()

      const promptResults = templateSpecificData.prompts
        .map(prompt => {
          let score = 0
          if (prompt.prompt.toLowerCase().includes(queryLower)) score += 10 // High priority for template content
          if (prompt.prompt.toLowerCase().startsWith(queryLower)) score += 5
          if (prompt.category.toLowerCase().includes(queryLower)) score += 3
          if (prompt.sectionTitle.toLowerCase().includes(queryLower)) score += 2
          return { ...prompt, relevanceScore: score }
        })
        .filter(p => p.relevanceScore > 0)
        .sort((a, b) => b.relevanceScore - a.relevanceScore)

      const resourceResults = templateSpecificData.resources
        .map(resource => {
          let score = 0
          if (resource.title.toLowerCase().includes(queryLower)) score += 10 // High priority for template content
          if (resource.title.toLowerCase().startsWith(queryLower)) score += 5
          if (resource.type.toLowerCase().includes(queryLower)) score += 3
          return { ...resource, relevanceScore: score }
        })
        .filter(r => r.relevanceScore > 0)
        .sort((a, b) => b.relevanceScore - a.relevanceScore)

      const sectionResults = templateSpecificData.sections
        .map(section => {
          let score = 0
          if (section.title.toLowerCase().includes(queryLower)) score += 10 // High priority for template content
          if (section.title.toLowerCase().startsWith(queryLower)) score += 5
          if ((section.description || '').toLowerCase().includes(queryLower)) score += 2
          return { ...section, relevanceScore: score }
        })
        .filter(s => s.relevanceScore > 0)
        .sort((a, b) => b.relevanceScore - a.relevanceScore)

      // Still include global templates and articles but with lower priority
      const templateResults = searchableTemplates
        .map(template => {
          let score = 0
          const queryLower = debouncedQuery.toLowerCase()
          if (template.name.toLowerCase().includes(queryLower)) score += 3 // Lower priority than template content
          if (template.name.toLowerCase().startsWith(queryLower)) score += 2
          if (template.description.toLowerCase().includes(queryLower)) score += 1
          return { ...template, relevanceScore: score }
        })
        .filter(t => t.relevanceScore > 0)
        .sort((a, b) => b.relevanceScore - a.relevanceScore)

      return {
        prompts: promptResults.slice(0, 8),
        resources: resourceResults.slice(0, 8),
        sections: sectionResults.slice(0, 8),
        templates: templateResults.slice(0, 4),
        articles: []
      }
    }

    // Regular app mode - no template-specific content
    if (!debouncedQuery) {
      // Featured/popular items when no search
      const featuredTemplates = searchableTemplates.filter(t => t.popular).slice(0, 6)
      const recentArticles = searchableArticles.slice(0, 6)

      return {
        templates: mode === "articles" ? [] : featuredTemplates,
        articles: mode === "templates" ? [] : recentArticles,
        all: mode === "all" ? [...featuredTemplates.slice(0, 3), ...recentArticles.slice(0, 3)] : [],
        prompts: [],
        resources: [],
        sections: []
      }
    }

    // Search results with relevance scoring
    const templateResults = mode === "articles" ? [] : searchableTemplates
      .map(template => {
        let score = 0
        const queryLower = debouncedQuery.toLowerCase()

        if (template.name.toLowerCase().includes(queryLower)) score += 5
        if (template.name.toLowerCase().startsWith(queryLower)) score += 3
        if (template.description.toLowerCase().includes(queryLower)) score += 2
        if (template.category.toLowerCase().includes(queryLower)) score += 1
        if (template.popular) score += 1

        return { ...template, relevanceScore: score }
      })
      .filter(t => t.relevanceScore > 0)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)

    const articleResults = mode === "templates" ? [] : searchableArticles
      .map(article => {
        let score = 0
        const queryLower = debouncedQuery.toLowerCase()

        if (article.title.toLowerCase().includes(queryLower)) score += 5
        if (article.title.toLowerCase().startsWith(queryLower)) score += 3
        if (article.excerpt.toLowerCase().includes(queryLower)) score += 2
        if (article.category.toLowerCase().includes(queryLower)) score += 1
        if (article.featured) score += 1

        return { ...article, relevanceScore: score }
      })
      .filter(a => a.relevanceScore > 0)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)

    return {
      templates: templateResults.slice(0, 8),
      articles: articleResults.slice(0, 8),
      all: [...templateResults.slice(0, 4), ...articleResults.slice(0, 4)],
      prompts: [],
      resources: [],
      sections: []
    }
  }, [debouncedQuery, searchableTemplates, searchableArticles, mode, templateSpecificData])

  // Get current results based on mode
  const currentResults = useMemo(() => {
    switch (mode) {
      case "templates":
        return resultGroups.templates
      case "articles":
        return resultGroups.articles
      default:
        return resultGroups.all
    }
  }, [resultGroups, mode])

  const templates = mode === "all" ? resultGroups.templates : (mode === "templates" ? currentResults : [])
  const articles = mode === "all" ? resultGroups.articles : (mode === "articles" ? currentResults : [])

  const suggestionPills = [
    { label: "Wedding Planning", icon: Heart, query: "wedding" },
    { label: "Career Change", icon: Briefcase, query: "career" },
    { label: "Home Buying", icon: Home, query: "home" },
    { label: "Business Launch", icon: Rocket, query: "business" },
  ]

  const trendingQueries = [
    "wedding planning checklist",
    "career transition guide",
    "home buying timeline",
    "startup business plan",
    "budget planning"
  ]

  const [currentTrendingIndex, setCurrentTrendingIndex] = useState(0)

  // Rotate trending queries
  useEffect(() => {
    if (!query) {
      const interval = setInterval(() => {
        setCurrentTrendingIndex((prev) => (prev + 1) % trendingQueries.length)
      }, 2500)
      return () => clearInterval(interval)
    }
  }, [query])

  const handleClose = () => {
    setQuery("")
    setSelectedIndex(0)
    onClose()
  }

  const handleTemplateClick = (template: any) => {
    addRecentItem({
      id: template.id,
      name: template.name,
      url: template.url,
      category: template.category,
      type: "template" as const
    })
    trackView(template.id, template.category, "template")
    handleClose()
  }

  const handleArticleClick = (article: any) => {
    addRecentItem({
      id: article.id,
      name: article.title,
      url: `/blog/${article.slug}`,
      category: article.category,
      type: "article" as const
    })
    trackView(article.id, article.category, "article")
    handleClose()
  }

  // Template-specific handlers
  const handleSectionClick = (section: any) => {
    if (templateMode?.onSectionChange) {
      templateMode.onSectionChange(section.sectionIndex)
      handleClose()
    }
  }

  const handlePromptClick = (prompt: any) => {
    if (templateMode?.onInsertPrompt) {
      templateMode.onInsertPrompt(prompt)
      handleClose()
    }
  }

  const handleResourceClick = (resource: any) => {
    if (templateMode?.onOpenResource) {
      templateMode.onOpenResource(resource)
      handleClose()
    }
  }

  const handleToggleFavorite = (e: React.MouseEvent, item: any, type: "template" | "article") => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite({
      id: item.id,
      name: type === "template" ? item.name : item.title,
      url: type === "template" ? item.url : `/blog/${item.slug}`,
      category: item.category,
      type
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="!max-w-5xl w-[92vw] h-[85vh] p-0 gap-0 bg-background/95 backdrop-blur-xl border-2 flex flex-col"
        showCloseButton={false}
        onKeyDown={handleKeyDown}
      >
        <DialogTitle className="sr-only">
          Search Templates and Resources
        </DialogTitle>
        {/* Header */}
        <div className="border-b bg-background/50 p-6 flex-shrink-0">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={query ? "Search templates, guides, and articles..." : `Try searching "${trendingQueries[currentTrendingIndex]}"`}
              className="pl-12 pr-24 h-14 text-lg bg-transparent border-2 border-primary/20 focus:border-primary rounded-xl"
              autoFocus={autoFocus}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 border border-muted rounded-lg px-2 py-1">
                <kbd className="px-1.5 py-0.5 bg-background border border-border rounded text-xs font-mono">Esc</kbd>
                <span>to close</span>
              </div>
            </div>
          </div>


          {/* Mode Tabs - Include template tab when in template mode */}
          <div className="flex items-center gap-1 mt-4 p-1 bg-muted/30 rounded-lg w-fit">
            {/* Template tab - only show when in template mode */}
            {templateMode?.template && (
              <Button
                variant={mode === "template-mode" ? "default" : "ghost"}
                size="sm"
                className="h-7 text-xs flex items-center gap-1"
                onClick={() => setMode("template-mode")}
              >
                <MessageCircle className="w-3 h-3" />
                This Template
              </Button>
            )}

            {/* Regular tabs */}
            {isLoggedIn && (
              <Button
                variant={mode === "my-work" ? "default" : "ghost"}
                size="sm"
                className="h-7 text-xs flex items-center gap-1"
                onClick={() => setMode("my-work")}
              >
                <User className="w-3 h-3" />
                My Work
              </Button>
            )}
            <Button
              variant={mode === "all" ? "default" : "ghost"}
              size="sm"
              className="h-7 text-xs flex items-center gap-1"
              onClick={() => setMode("all")}
            >
              <Globe className="w-3 h-3" />
              {isLoggedIn ? "Explore" : "All"}
            </Button>
            {isLoggedIn && (
              <Button
                variant={mode === "favorites" ? "default" : "ghost"}
                size="sm"
                className="h-7 text-xs flex items-center gap-1"
                onClick={() => setMode("favorites")}
              >
                <Star className="w-3 h-3" />
                Favorites
              </Button>
            )}
            <Button
              variant={mode === "smart" ? "default" : "ghost"}
              size="sm"
              className="h-7 text-xs flex items-center gap-1"
              onClick={() => setMode("smart")}
            >
              <Brain className="w-3 h-3" />
              Smart
            </Button>
            <Button
              variant={mode === "templates" ? "default" : "ghost"}
              size="sm"
              className="h-7 text-xs flex items-center gap-1"
              onClick={() => setMode("templates")}
            >
              <Target className="w-3 h-3" />
              Templates
            </Button>
            <Button
              variant={mode === "articles" ? "default" : "ghost"}
              size="sm"
              className="h-7 text-xs flex items-center gap-1"
              onClick={() => setMode("articles")}
            >
              <FileText className="w-3 h-3" />
              Articles
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {/* Progressive Discovery Banner */}
          {showOnboarding && (
            <div className="mx-6 mt-4 p-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-xl border border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50" />
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2 text-foreground">🎉 Welcome to search-first navigation!</h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    Skip the browsing. Just press <kbd className="px-1.5 py-0.5 bg-primary/20 text-primary rounded text-xs font-medium">Cmd+K</kbd> anytime to find what you need instantly.
                    We've organized everything so you never start with a blank page.
                  </p>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1.5 text-primary">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="font-medium">Try searching "wedding"</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40"></div>
                      <span>Or browse featured items below</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowOnboarding(false)}
                  className="h-7 w-7 p-0 hover:bg-primary/10 rounded-lg"
                >
                  <span className="text-muted-foreground text-sm">×</span>
                </Button>
              </div>
            </div>
          )}

          {/* No Query - Discovery Mode */}
          {!query && (
            <div className="space-y-6 p-6">
              {/* Template Mode - Show template content FIRST */}
              {mode === "template-mode" && (
                <div className="space-y-6">
                  {/* Template prompts - PRIMARY CONTENT */}
                  {templateSpecificData?.prompts && templateSpecificData.prompts.length > 0 ? (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Template Prompts</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MessageCircle className="w-4 h-4" />
                          <span>{templateSpecificData.prompts.length} available</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {templateSpecificData.prompts.slice(0, 8).map((prompt: any) => (
                          <PremiumGlow key={prompt.id}>
                            <button
                              onClick={() => handlePromptClick(prompt)}
                              className="w-full group flex items-start gap-3 p-4 transition-all duration-200 text-left"
                            >
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <MessageCircle className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h5 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2 mb-1">
                                  {prompt.prompt}
                                </h5>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <span className="px-2 py-1 bg-muted/50 rounded-md">{prompt.category}</span>
                                  <span>•</span>
                                  <span>from {prompt.sectionTitle}</span>
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                            </button>
                          </PremiumGlow>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">No prompts found</h3>
                      <p className="text-sm text-muted-foreground">This template doesn't have any reflection prompts yet.</p>
                    </div>
                  )}

                  {/* Template sections */}
                  {templateSpecificData?.sections && templateSpecificData.sections.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Template Sections</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Hash className="w-4 h-4" />
                          <span>{templateSpecificData.sections.length} sections</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {templateSpecificData.sections.map((section: any) => (
                          <SubtleGlow key={section.id}>
                            <button
                              onClick={() => handleSectionClick(section)}
                              className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 text-left"
                            >
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Hash className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h5 className="font-medium text-sm group-hover:text-primary transition-colors">
                                  {section.title}
                                </h5>
                              </div>
                            </button>
                          </SubtleGlow>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Template resources */}
                  {templateSpecificData?.resources && templateSpecificData.resources.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Template Resources</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <BookOpen className="w-4 h-4" />
                          <span>{templateSpecificData.resources.length} resources</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {templateSpecificData.resources.slice(0, 6).map((resource: any) => (
                          <SubtleGlow key={resource.id}>
                            <button
                              onClick={() => handleResourceClick(resource)}
                              className="w-full group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 text-left"
                            >
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <BookOpen className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h5 className="font-medium text-sm group-hover:text-primary transition-colors">
                                  {resource.title}
                                </h5>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                  <span>{resource.type}</span>
                                  {resource.readTime && (
                                    <>
                                      <span>•</span>
                                      <span>{resource.readTime}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </button>
                          </SubtleGlow>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {mode === "all" && (
                <>
                  {/* Favorites Section */}
                  {favorites.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Your Favorites</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{favorites.length} saved</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {favorites.slice(0, 4).map((favorite) => {
                          const Icon = favorite.type === "template" ? getTemplateIcon(favorite.id) : getCategoryIcon(favorite.category)
                          return (
                            <Link key={favorite.id} href={favorite.url} onClick={() => favorite.type === "template" ? handleTemplateClick(favorite) : handleArticleClick(favorite)}>
                              <div className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                    {favorite.name}
                                  </h4>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Badge variant="outline" className="text-xs">
                                      {favorite.category}
                                    </Badge>
                                    <span>{favorite.type === "template" ? "Template" : "Article"}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={(e) => handleToggleFavorite(e, favorite, favorite.type)}
                                    className="h-7 w-7 p-0 opacity-100 hover:bg-yellow-100 hover:text-yellow-600"
                                  >
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  </Button>
                                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Featured Templates */}
                  {templates.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Featured Templates</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <TrendingUp className="w-4 h-4" />
                          <span>Most popular</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {templates.slice(0, 4).map((template) => {
                          const Icon = getTemplateIcon(template.id)
                          const isStarred = isFavorited(template.id)
                          return (
                            <Link key={template.id} href={template.url} onClick={() => handleTemplateClick(template)}>
                              <div className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                    {template.name}
                                  </h4>
                                  <p className="text-xs text-muted-foreground line-clamp-1">
                                    {template.description}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="text-xs">
                                    {template.category}
                                  </Badge>
                                  {template.popular && (
                                    <Badge variant="secondary" className="text-xs">
                                      Popular
                                    </Badge>
                                  )}
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={(e) => handleToggleFavorite(e, template, "template")}
                                    className={`h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 ${isStarred ? 'opacity-100 hover:bg-yellow-100 hover:text-yellow-600' : 'hover:bg-muted'}`}
                                  >
                                    <Star className={`w-3 h-3 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-foreground'}`} />
                                  </Button>
                                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Featured Articles */}
                  {articles.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Featured Articles</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Sparkles className="w-4 h-4" />
                          <span>Expert insights</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {articles.slice(0, 4).map((article) => {
                          const Icon = getCategoryIcon(article.category)
                          const isStarred = isFavorited(article.id)
                          return (
                            <Link key={article.id} href={`/blog/${article.slug}`} onClick={() => handleArticleClick(article)}>
                              <div className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-muted/30 flex items-center justify-center">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                                    {article.title}
                                  </h4>
                                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span>{article.author}</span>
                                    <span>•</span>
                                    <span>{article.readTime}</span>
                                    <span>•</span>
                                    <span>{article.category}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={(e) => handleToggleFavorite(e, article, "article")}
                                    className={`h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 ${isStarred ? 'opacity-100 hover:bg-yellow-100 hover:text-yellow-600' : 'hover:bg-muted'}`}
                                  >
                                    <Star className={`w-3 h-3 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-foreground'}`} />
                                  </Button>
                                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}

                </>
              )}

              {/* Smart Recommendations View */}
              {mode === "smart" && (
                <div className="space-y-6">
                  {/* Smart Picks Section */}
                  {(() => {
                    const contextual = getContextualRecommendations(6)
                    if (contextual.length === 0) {
                      return (
                        <div className="text-center py-12">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Brain className="h-6 w-6 text-blue-500" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">Building your recommendations</h3>
                          <p className="text-sm text-muted-foreground">Use templates and articles to get personalized suggestions</p>
                        </div>
                      )
                    }

                    return (
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-lg">Smart Picks</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Brain className="w-4 h-4 text-blue-500" />
                            <span>Personalized for you</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {contextual.map((rec) => {
                            const Icon = rec.type === "template" ? getTemplateIcon(rec.id) : getCategoryIcon(rec.category)
                            const isStarred = isFavorited(rec.id)
                            return (
                              <Link
                                key={rec.id}
                                href={rec.url}
                                onClick={() => rec.type === "template" ? handleTemplateClick(rec) : handleArticleClick(rec)}
                              >
                                <div className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm">
                                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-primary" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                      {rec.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground line-clamp-1">
                                      {rec.description}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="text-xs">
                                      {rec.category}
                                    </Badge>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={(e) => handleToggleFavorite(e, rec, rec.type)}
                                      className={`h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 ${isStarred ? 'opacity-100 hover:bg-yellow-100 hover:text-yellow-600' : 'hover:bg-muted'}`}
                                    >
                                      <Star className={`w-3 h-3 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-foreground'}`} />
                                    </Button>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })()}

                  {/* Discover More Section */}
                  {(() => {
                    const discovery = getDiscoveryRecommendations(6)
                    if (discovery.length === 0) return null

                    return (
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-lg">Discover More</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Compass className="w-4 h-4 text-green-500" />
                            <span>Expand your horizons</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {discovery.map((rec) => {
                            const Icon = rec.type === "template" ? getTemplateIcon(rec.id) : getCategoryIcon(rec.category)
                            const isStarred = isFavorited(rec.id)
                            return (
                              <Link
                                key={rec.id}
                                href={rec.url}
                                onClick={() => rec.type === "template" ? handleTemplateClick(rec) : handleArticleClick(rec)}
                              >
                                <div className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm">
                                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-primary" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                      {rec.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground line-clamp-1">
                                      {rec.description}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="text-xs">
                                      {rec.category}
                                    </Badge>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={(e) => handleToggleFavorite(e, rec, rec.type)}
                                      className={`h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 ${isStarred ? 'opacity-100 hover:bg-yellow-100 hover:text-yellow-600' : 'hover:bg-muted'}`}
                                    >
                                      <Star className={`w-3 h-3 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-foreground'}`} />
                                    </Button>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })()}
                </div>
              )}

              {/* All Templates View */}
              {mode === "templates" && (
                <>
                  {/* Template Recommendations */}
                  {(() => {
                    const templateRecs = getRecommendationsByType("template", 3)
                    if (templateRecs.length === 0) return null

                    return (
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-lg">Recommended Templates</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Brain className="w-4 h-4 text-blue-500" />
                            <span>Based on your activity</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {templateRecs.map((rec) => {
                            const Icon = getTemplateIcon(rec.id)
                            const isStarred = isFavorited(rec.id)
                            return (
                              <Link key={rec.id} href={rec.url} onClick={() => handleTemplateClick(rec)}>
                                <div className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50">
                                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-primary" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                      {rec.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground line-clamp-1">
                                      {rec.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                      <Badge variant="outline" className="text-xs text-xs">
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
                                      onClick={(e) => handleToggleFavorite(e, rec, "template")}
                                      className={`h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 ${isStarred ? 'opacity-100 hover:bg-yellow-100 hover:text-yellow-600' : 'hover:bg-muted'}`}
                                    >
                                      <Star className={`w-3 h-3 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-foreground'}`} />
                                    </Button>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })()}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">All Templates</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span>{searchableTemplates.length} templates</span>
                      </div>
                    </div>
                  <div className="space-y-2">
                    {searchableTemplates.map((template) => {
                      const Icon = getTemplateIcon(template.id)
                      const isStarred = isFavorited(template.id)
                      return (
                        <Link key={template.id} href={template.url} onClick={() => handleTemplateClick(template)}>
                          <div className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                {template.name}
                              </h4>
                              <p className="text-xs text-muted-foreground line-clamp-1">
                                {template.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {template.category}
                              </Badge>
                              {template.popular && (
                                <Badge variant="secondary" className="text-xs">
                                  Popular
                                </Badge>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => handleToggleFavorite(e, template, "template")}
                                className={`h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 ${isStarred ? 'opacity-100 hover:bg-yellow-100 hover:text-yellow-600' : 'hover:bg-muted'}`}
                              >
                                <Star className={`w-3 h-3 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-foreground'}`} />
                              </Button>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
                </>
              )}

              {/* All Articles View */}
              {mode === "articles" && (
                <>
                  {/* Article Recommendations */}
                  {(() => {
                    const articleRecs = getRecommendationsByType("article", 3)
                    if (articleRecs.length === 0) return null

                    return (
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-lg">Recommended Articles</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Brain className="w-4 h-4 text-purple-500" />
                            <span>Curated for you</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {articleRecs.map((rec) => {
                            const Icon = getCategoryIcon(rec.category)
                            const isStarred = isFavorited(rec.id)
                            return (
                              <Link key={rec.id} href={rec.url} onClick={() => handleArticleClick(rec)}>
                                <div className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50">
                                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-primary" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                                      {rec.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                                      {rec.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                      <Badge variant="outline" className="text-xs text-xs">
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
                                      onClick={(e) => handleToggleFavorite(e, rec, "article")}
                                      className={`h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 ${isStarred ? 'opacity-100 hover:bg-yellow-100 hover:text-yellow-600' : 'hover:bg-muted'}`}
                                    >
                                      <Star className={`w-3 h-3 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-foreground'}`} />
                                    </Button>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })()}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">All Articles</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span>{searchableArticles.length} articles</span>
                      </div>
                    </div>
                  <div className="space-y-2">
                    {searchableArticles.map((article) => {
                      const Icon = getCategoryIcon(article.category)
                      const isStarred = isFavorited(article.id)
                      return (
                        <Link key={article.id} href={`/blog/${article.slug}`} onClick={() => handleArticleClick(article)}>
                          <div className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm">
                            <div className="w-8 h-8 rounded-lg bg-muted/30 flex items-center justify-center">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                                {article.title}
                              </h4>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span>{article.author}</span>
                                <span>•</span>
                                <span>{article.readTime}</span>
                                <span>•</span>
                                <span>{article.category}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => handleToggleFavorite(e, article, "article")}
                                className={`h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 ${isStarred ? 'opacity-100 hover:bg-yellow-100 hover:text-yellow-600' : 'hover:bg-muted'}`}
                              >
                                <Star className={`w-3 h-3 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-foreground'}`} />
                              </Button>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
                </>
              )}

            </div>
          )}

          {/* Query Results */}
          {query && (
            <div className="p-6 space-y-6">
              {/* Template Mode Search Results */}
              {mode === "template-mode" && (
                <>
                  {/* Prompts Results */}
                  {resultGroups.prompts.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Prompts
                      </h3>
                      <div className="space-y-2">
                        {resultGroups.prompts.map((prompt: any) => (
                          <button
                            key={prompt.id}
                            onClick={() => handlePromptClick(prompt)}
                            className="w-full group flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm text-left"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <MessageCircle className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                                {prompt.prompt}
                              </h4>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                <span>{prompt.category}</span>
                                <span>•</span>
                                <span>from {prompt.sectionTitle}</span>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Resources Results */}
                  {resultGroups.resources.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Resources
                      </h3>
                      <div className="space-y-2">
                        {resultGroups.resources.map((resource: any) => (
                          <button
                            key={resource.id}
                            onClick={() => handleResourceClick(resource)}
                            className="w-full group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm text-left"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <BookOpen className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                                {resource.title}
                              </h4>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                <span>{resource.type}</span>
                                {resource.readTime && (
                                  <>
                                    <span>•</span>
                                    <span>{resource.readTime}</span>
                                  </>
                                )}
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sections Results */}
                  {resultGroups.sections.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Sections
                      </h3>
                      <div className="space-y-2">
                        {resultGroups.sections.map((section: any) => (
                          <button
                            key={section.id}
                            onClick={() => handleSectionClick(section)}
                            className="w-full group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm text-left"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Hash className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                                {section.title}
                              </h4>
                              {section.description && (
                                <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                                  {section.description}
                                </p>
                              )}
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Still show some templates for template switching */}
                  {resultGroups.templates.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Switch Template
                      </h3>
                      <div className="space-y-2">
                        {resultGroups.templates.map((template: any) => {
                          const Icon = getTemplateIcon(template.id)
                          const isStarred = isFavorited(template.id)
                          return (
                            <Link key={template.id} href={template.url} onClick={() => handleTemplateClick(template)}>
                              <div className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                    {template.name}
                                  </h4>
                                  <p className="text-xs text-muted-foreground line-clamp-1">
                                    {template.description}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="text-xs">
                                    {template.category}
                                  </Badge>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={(e) => handleToggleFavorite(e, template, "template")}
                                    className={`h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 ${isStarred ? 'opacity-100 hover:bg-yellow-100 hover:text-yellow-600' : 'hover:bg-muted'}`}
                                  >
                                    <Star className={`w-3 h-3 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-foreground'}`} />
                                  </Button>
                                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Regular App Mode Search Results */}
              {mode !== "template-mode" && (
                <>
                  {/* Templates Results */}
                  {templates.length > 0 && (
                    <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Templates
                  </h3>
                  <div className="space-y-2">
                    {templates.map((template, index) => {
                      const Icon = getTemplateIcon(template.id)
                      const isSelected = selectedIndex === index
                      const isStarred = isFavorited(template.id)
                      return (
                        <Link key={template.id} href={template.url} onClick={() => handleTemplateClick(template)}>
                          <div className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm ${
                            isSelected ? 'bg-primary/10 border border-primary/20' : ''
                          }`}>
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                {template.name}
                              </h4>
                              <p className="text-xs text-muted-foreground line-clamp-1">
                                {template.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {template.category}
                              </Badge>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => handleToggleFavorite(e, template, "template")}
                                className={`h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 ${isStarred ? 'opacity-100 hover:bg-yellow-100 hover:text-yellow-600' : 'hover:bg-muted'}`}
                              >
                                <Star className={`w-3 h-3 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-foreground'}`} />
                              </Button>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Articles Results */}
              {articles.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Resources & Articles
                  </h3>
                  <div className="space-y-2">
                    {articles.map((article, index) => {
                      const Icon = getCategoryIcon(article.category)
                      const resultIndex = templates.length + index
                      const isSelected = selectedIndex === resultIndex
                      const isStarred = isFavorited(article.id)
                      return (
                        <Link key={article.id} href={`/blog/${article.slug}`} onClick={() => handleArticleClick(article)}>
                          <div className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-[1.01] hover:shadow-sm ${
                            isSelected ? 'bg-primary/10 border border-primary/20' : ''
                          }`}>
                            <div className="w-8 h-8 rounded-lg bg-muted/30 flex items-center justify-center">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                                {article.title}
                              </h4>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span>{article.author}</span>
                                <span>•</span>
                                <span>{article.readTime}</span>
                                <span>•</span>
                                <span>{article.category}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => handleToggleFavorite(e, article, "article")}
                                className={`h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 ${isStarred ? 'opacity-100 hover:bg-yellow-100 hover:text-yellow-600' : 'hover:bg-muted'}`}
                              >
                                <Star className={`w-3 h-3 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground hover:text-foreground'}`} />
                              </Button>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}

                  </>
              )}

              {/* Template Mode Empty State */}
              {mode === "template-mode" && resultGroups.prompts.length === 0 && resultGroups.resources.length === 0 && resultGroups.sections.length === 0 && resultGroups.templates.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">No matches in this template</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
                    Try searching for different keywords, or browse the template content below.
                  </p>
                  <Button variant="outline" onClick={() => setQuery("")} className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    Browse template content
                  </Button>
                </div>
              )}

              {/* Regular Mode Empty State */}
              {templates.length === 0 && articles.length === 0 && mode !== "template-mode" && (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Sparkles className="h-8 w-8 text-primary animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Life shouldn't start with a blank page</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
                    We couldn't find exactly what you're looking for, but every journey begins somewhere.
                    Try browsing our suggestions or search for something different.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" onClick={() => setQuery("")} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 rotate-180" />
                      Browse suggestions
                    </Button>
                    <Button onClick={() => setQuery("wedding")} className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Try "wedding"
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t bg-muted/20 px-6 py-3 flex-shrink-0">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded">↑↓</kbd>
                <span>navigate</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded">Enter</kbd>
                <span>select</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded">Esc</kbd>
                <span>close</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>Life shouldn't start with a blank page</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}