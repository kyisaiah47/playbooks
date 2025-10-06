"use client"

import React, { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  Sunset,
  ChevronRight,
  FileText,
  Sparkles,
} from "lucide-react"
import { SubtleGlow } from "@/components/ui/glow-variants"
import { useRecentTemplates } from "@/hooks/use-recent-templates"

// Import data
import { templateRegistry } from "@/registry/templates"

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
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
    case 'retirement-lifestyle-planning': return Sunset
    default: return Target
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Wedding Planning": return Heart
    case "Real Estate": return Home
    case "Career": return Briefcase
    default: return BookOpen
  }
}

// Rotating search suggestions (Raycast-style)
const searchSuggestions = [
  "wedding planning",
  "career change",
  "home buying",
  "business launch",
  "fitness goals",
  "retirement planning",
  "baby preparation",
  "college planning",
  "budget management",
  "relationship advice",
]

export function CommandPalette({
  isOpen,
  onClose,
  autoFocus = true,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [mode, setMode] = useState<"all" | "templates" | "articles">("all")
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0)
  const [articleResults, setArticleResults] = useState<any[]>([])
  const [articlesTotal, setArticlesTotal] = useState(0)
  const [articlesLoading, setArticlesLoading] = useState(false)

  const { addRecentItem } = useRecentTemplates()

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 150)
    return () => clearTimeout(timer)
  }, [query])

  // Fetch total articles count on mount
  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const response = await fetch('/api/articles')
        const data = await response.json()
        setArticlesTotal(data.total || 0)
      } catch (error) {
        console.error('[CommandPalette] Error fetching articles count:', error)
      }
    }
    fetchTotal()
  }, [])

  // Fetch article results from API when query changes
  useEffect(() => {
    if (!debouncedQuery || mode === "templates") {
      setArticleResults([])
      return
    }

    const fetchArticles = async () => {
      setArticlesLoading(true)
      try {
        const response = await fetch(`/api/articles?q=${encodeURIComponent(debouncedQuery)}&limit=20`)
        const data = await response.json()
        setArticleResults(data.articles || [])
      } catch (error) {
        console.error('[CommandPalette] Error fetching articles:', error)
        setArticleResults([])
      } finally {
        setArticlesLoading(false)
      }
    }

    fetchArticles()
  }, [debouncedQuery, mode])

  // Rotate search suggestions
  useEffect(() => {
    if (!query) {
      const interval = setInterval(() => {
        setCurrentSuggestionIndex((prev) => (prev + 1) % searchSuggestions.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [query])

  // Prepare searchable data - templates only (articles come from API)
  const searchableTemplates = useMemo(() => {
    return templateRegistry.map(template => ({
      ...template,
      searchableText: `${template.name} ${template.description} ${template.category}`.toLowerCase(),
      type: 'template' as const
    }))
  }, [])

  // Search templates with relevance scoring (articles come from API)
  const searchResults = useMemo(() => {
    if (!debouncedQuery) return { templates: [], articles: [] }

    const queryLower = debouncedQuery.toLowerCase()

    const templateResults = (mode === "articles" ? [] : searchableTemplates)
      .map(template => {
        let score = 0
        if (template.name.toLowerCase().includes(queryLower)) score += 10
        if (template.name.toLowerCase().startsWith(queryLower)) score += 5
        if (template.description.toLowerCase().includes(queryLower)) score += 3
        if (template.category.toLowerCase().includes(queryLower)) score += 2
        return { ...template, relevanceScore: score }
      })
      .filter(t => t.relevanceScore > 0)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 20)

    // Articles come from API (already searched server-side)
    return { templates: templateResults, articles: mode === "templates" ? [] : articleResults }
  }, [debouncedQuery, searchableTemplates, mode, articleResults])

  const handleClose = () => {
    setQuery("")
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
    handleClose()
  }

  const handleArticleClick = (article: any) => {
    addRecentItem({
      id: article.id,
      name: article.title,
      url: `/articles/${article.slug}`,
      category: article.category,
      type: "article" as const
    })
    handleClose()
  }

  const hasResults = searchResults.templates.length > 0 || searchResults.articles.length > 0

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className={`!max-w-3xl w-[90vw] p-0 gap-0 bg-transparent border-0 flex flex-col ${
          query ? 'h-[70vh]' : 'h-auto'
        }`}
        showCloseButton={false}
      >
        <SubtleGlow className="w-full h-full flex flex-col">
          <div className="w-full h-full bg-background/95 backdrop-blur-xl rounded-lg flex flex-col overflow-hidden">
            <DialogTitle className="sr-only">Search Templates and Articles</DialogTitle>

            {/* Header */}
            <div className="border-b bg-background/50 p-6 flex-shrink-0">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={query ? "Search..." : `Try "${searchSuggestions[currentSuggestionIndex]}"`}
                  className="pl-12 pr-24 h-14 text-lg bg-background border-0 focus:outline-none rounded-xl"
                  autoFocus={autoFocus}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 border border-muted rounded-lg px-2 py-1">
                    <kbd className="px-1.5 py-0.5 bg-background border border-border rounded text-xs font-mono">Esc</kbd>
                    <span>to close</span>
                  </div>
                </div>
              </div>

              {/* Simple Mode Tabs - only show when searching */}
              {query && (
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
              )}
            </div>

            {/* Results - only show when typing */}
            {query && (
              <div className="flex-1 overflow-y-auto min-h-0 p-6 space-y-6">
                {/* Templates Results */}
                {searchResults.templates.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Templates ({searchResults.templates.length})
                      </h3>
                      <div className="space-y-2">
                        {searchResults.templates.map((template) => {
                          const Icon = getTemplateIcon(template.id)
                          return (
                            <Link key={template.id} href={template.url} onClick={() => handleTemplateClick(template)}>
                              <div className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50">
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
                                <Badge variant="outline" className="text-xs">
                                  {template.category}
                                </Badge>
                                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Articles Results */}
                  {searchResults.articles.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Articles ({searchResults.articles.length})
                      </h3>
                      <div className="space-y-2">
                        {searchResults.articles.map((article) => {
                          const Icon = getCategoryIcon(article.category)
                          return (
                            <Link key={article.id} href={`/articles/${article.slug}`} onClick={() => handleArticleClick(article)}>
                              <div className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/50">
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
                {!hasResults && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Search className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No results found</h3>
                    <p className="text-sm text-muted-foreground">
                      Try a different search term
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Footer - only show when searching */}
            {query && (
              <div className="border-t bg-muted/20 px-6 py-3 flex-shrink-0">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-muted rounded">↑↓</kbd>
                      <span>navigate</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-muted rounded">Enter</kbd>
                      <span>open</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-muted rounded">Esc</kbd>
                      <span>close</span>
                    </div>
                  </div>
                  <span>{searchableTemplates.length} templates • {articlesTotal.toLocaleString()} articles</span>
                </div>
              </div>
            )}
          </div>
        </SubtleGlow>
      </DialogContent>
    </Dialog>
  )
}
