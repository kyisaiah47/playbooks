"use client"

import React, { useState, useEffect, useMemo } from "react"
import Link from "next/link"
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
  ChevronRight
} from "lucide-react"

// Import data
import { templateRegistry } from "@/registry/templates"
import { blogRegistry } from "@/registry/blogs"

interface FullscreenCommandPaletteProps {
  isOpen: boolean
  onClose: () => void
  mode?: "templates" | "articles" | "all"
  autoFocus?: boolean
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

export function FullscreenCommandPalette({
  isOpen,
  onClose,
  mode: initialMode = "all",
  autoFocus = true
}: FullscreenCommandPaletteProps) {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [mode, setMode] = useState(initialMode)

  // Debounce search query for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 200)
    return () => clearTimeout(timer)
  }, [query])

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

  // Enhanced result grouping with visual hierarchy
  const resultGroups = useMemo(() => {
    if (!debouncedQuery) {
      // Featured/popular items when no search
      const featuredTemplates = searchableTemplates.filter(t => t.popular).slice(0, 6)
      const recentArticles = searchableArticles.slice(0, 6)

      return {
        templates: mode === "articles" ? [] : featuredTemplates,
        articles: mode === "templates" ? [] : recentArticles,
        all: mode === "all" ? [...featuredTemplates.slice(0, 3), ...recentArticles.slice(0, 3)] : []
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
      all: [...templateResults.slice(0, 4), ...articleResults.slice(0, 4)]
    }
  }, [debouncedQuery, searchableTemplates, searchableArticles, mode])

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="!max-w-5xl w-[92vw] h-[85vh] p-0 gap-0 bg-background/95 backdrop-blur-xl border-2"
        showCloseButton={false}
        onKeyDown={handleKeyDown}
      >
        <DialogTitle className="sr-only">
          Search Templates and Resources
        </DialogTitle>
        {/* Header */}
        <div className="border-b bg-background/50 p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={query ? "Search templates, guides, and articles..." : `Try searching "${trendingQueries[currentTrendingIndex]}"`}
              className="pl-12 pr-24 h-14 text-lg bg-transparent border-2 border-primary/20 focus:border-primary rounded-xl"
              autoFocus={autoFocus}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-sm text-muted-foreground">
              <kbd className="px-2 py-1 bg-muted rounded text-xs">Esc</kbd>
              <span>to close</span>
            </div>
          </div>

          {/* Suggestion Pills */}
          {!query && (
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-sm text-muted-foreground mr-2">Try:</span>
              {suggestionPills.map((pill) => {
                const Icon = pill.icon
                return (
                  <Button
                    key={pill.label}
                    variant="outline"
                    size="sm"
                    onClick={() => setQuery(pill.query)}
                    className="h-7 text-xs hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Icon className="w-3 h-3 mr-1" />
                    {pill.label}
                  </Button>
                )
              })}
            </div>
          )}

          {/* Mode Tabs */}
          <div className="flex items-center gap-1 mt-4 p-1 bg-muted/30 rounded-lg w-fit">
            <Button
              variant={mode === "all" ? "default" : "ghost"}
              size="sm"
              className="h-7 text-xs"
              onClick={() => setMode("all")}
            >
              All
            </Button>
            <Button
              variant={mode === "templates" ? "default" : "ghost"}
              size="sm"
              className="h-7 text-xs"
              onClick={() => setMode("templates")}
            >
              Templates
            </Button>
            <Button
              variant={mode === "articles" ? "default" : "ghost"}
              size="sm"
              className="h-7 text-xs"
              onClick={() => setMode("articles")}
            >
              Articles
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
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
            <div className="space-y-8 p-6">
              {mode === "all" && (
                <>
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
                          return (
                            <Link key={template.id} href={template.url} onClick={handleClose}>
                              <div className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-muted/50">
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
                          return (
                            <Link key={article.id} href={`/blog/${article.slug}`} onClick={handleClose}>
                              <div className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-muted/50">
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
                                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* All Templates View */}
              {mode === "templates" && (
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
                      return (
                        <Link key={template.id} href={template.url} onClick={handleClose}>
                          <div className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-muted/50">
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
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* All Articles View */}
              {mode === "articles" && (
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
                      return (
                        <Link key={article.id} href={`/blog/${article.slug}`} onClick={handleClose}>
                          <div className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-muted/50">
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
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Query Results */}
          {query && (
            <div className="p-6 space-y-6">
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
                      return (
                        <Link key={template.id} href={template.url} onClick={handleClose}>
                          <div className={`group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-muted/50 ${
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
                      return (
                        <Link key={article.id} href={`/blog/${article.slug}`} onClick={handleClose}>
                          <div className={`group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-muted/50 ${
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
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* No Results */}
              {templates.length === 0 && articles.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or browse our suggestions above
                  </p>
                  <Button variant="outline" onClick={() => setQuery("")}>
                    Clear search
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t bg-muted/20 px-6 py-3">
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