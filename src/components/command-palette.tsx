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
  Lock,
  Layout,
} from "lucide-react"
import { SubtleGlow } from "@/components/ui/glow-variants"
import { useRecentTemplates } from "@/hooks/use-recent-templates"
import { useUserUnlocks } from "@/contexts/UserUnlockContext"

// Import data
import { templateRegistry, getAllCategories } from "@/registry/templates"

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
  autoFocus?: boolean
  mode?: 'default' | 'life-os-mode' | 'template-mode'
  templateMode?: {
    template: any
    onSectionChange?: (section: number) => void
    onInsertPrompt?: (prompt: any) => void
    onOpenResource?: (resource: any) => void
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
  mode: paletteMode = 'default',
  templateMode,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [tab, setTab] = useState<"search" | "templates">("search")
  const [searchMode, setSearchMode] = useState<"all" | "prompts" | "articles">("all")
  const [searchFilter, setSearchFilter] = useState<"selected" | "all">("selected")
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0)
  const [articleResults, setArticleResults] = useState<any[]>([])
  const [articlesTotal, setArticlesTotal] = useState(0)
  const [articlesLoading, setArticlesLoading] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())

  const { addRecentItem } = useRecentTemplates()
  const { unlockData, isTemplateUnlocked } = useUserUnlocks()

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
    if (!debouncedQuery || searchMode === "prompts") {
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
  }, [debouncedQuery, searchMode])

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

  // MVP: No filtering needed - everything is free
  const filterableTemplates = searchableTemplates

  /* TODO: Enable for production with paywall
  // Filter templates by unlock status for Life OS mode
  const filterableTemplates = useMemo(() => {
    if (paletteMode !== 'life-os-mode') return searchableTemplates

    // For free tier users with unlock filter on, only show unlocked templates
    if (unlockData && !unlockData.hasUnlimitedAccess && searchFilter === 'selected') {
      return searchableTemplates.filter(t => isTemplateUnlocked(t.id))
    }

    return searchableTemplates
  }, [searchableTemplates, paletteMode, unlockData, searchFilter, isTemplateUnlocked])
  */

  // Search templates with relevance scoring (articles come from API)
  const searchResults = useMemo(() => {
    if (!debouncedQuery && tab === 'search') return { templates: [], articles: [] }

    const queryLower = debouncedQuery.toLowerCase()

    const templateResults = (searchMode === "articles" ? [] : filterableTemplates)
      .map(template => {
        let score = 0
        if (template.name.toLowerCase().includes(queryLower)) score += 10
        if (template.name.toLowerCase().startsWith(queryLower)) score += 5
        if (template.description.toLowerCase().includes(queryLower)) score += 3
        if (template.category.toLowerCase().includes(queryLower)) score += 2
        return { ...template, relevanceScore: score, isLocked: false } // MVP: Nothing is locked
      })
      .filter(t => t.relevanceScore > 0)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 20)

    // Articles come from API (already searched server-side)
    return { templates: templateResults, articles: searchMode === "articles" || searchMode === "all" ? articleResults : [] }
  }, [debouncedQuery, filterableTemplates, searchMode, articleResults, tab, paletteMode, isTemplateUnlocked])

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

  // Group templates by category for Templates tab
  const groupedTemplates = useMemo(() => {
    const grouped: Record<string, typeof filterableTemplates> = {}

    filterableTemplates.forEach(template => {
      if (!grouped[template.category]) {
        grouped[template.category] = []
      }
      grouped[template.category].push(template)
    })

    // Sort templates within each category
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => a.name.localeCompare(b.name))
    })

    return grouped
  }, [filterableTemplates])

  const categories = Object.keys(groupedTemplates).sort()

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(category)) {
      newExpanded.delete(category)
    } else {
      newExpanded.add(category)
    }
    setExpandedCategories(newExpanded)
  }

  const hasResults = searchResults.templates.length > 0 || searchResults.articles.length > 0

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className={`!max-w-3xl w-[90vw] p-0 gap-0 bg-transparent border-0 flex flex-col ${
          query || tab === 'templates' ? 'h-[70vh]' : 'h-auto'
        }`}
        showCloseButton={false}
      >
        <SubtleGlow className="w-full h-full flex flex-col">
          <div className="w-full h-full bg-background/95 backdrop-blur-xl rounded-lg flex flex-col overflow-hidden">
            <DialogTitle className="sr-only">Search Templates and Articles</DialogTitle>

            {/* Header */}
            <div className="border-b bg-background/50 p-6 flex-shrink-0">
              {/* Main Tabs - Search vs Templates (Life OS mode only) */}
              {paletteMode === 'life-os-mode' && (
                <div className="flex items-center gap-2 mb-4 p-1 bg-muted/30 rounded-lg w-fit">
                  <Button
                    variant={tab === "search" ? "default" : "ghost"}
                    size="sm"
                    className="h-8"
                    onClick={() => setTab("search")}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                  <Button
                    variant={tab === "templates" ? "default" : "ghost"}
                    size="sm"
                    className="h-8"
                    onClick={() => setTab("templates")}
                  >
                    <Layout className="w-4 h-4 mr-2" />
                    Templates
                  </Button>
                </div>
              )}

              {/* Search Input - only for Search tab */}
              {tab === 'search' && (
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
              )}

              {/* Search Mode Tabs & Filter - only show when searching in Search tab */}
              {tab === 'search' && query && (
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1 p-1 bg-muted/30 rounded-lg w-fit">
                    <Button
                      variant={searchMode === "all" ? "default" : "ghost"}
                      size="sm"
                      className="h-7 text-xs"
                      onClick={() => setSearchMode("all")}
                    >
                      All
                    </Button>
                    <Button
                      variant={searchMode === "prompts" ? "default" : "ghost"}
                      size="sm"
                      className="h-7 text-xs flex items-center gap-1"
                      onClick={() => setSearchMode("prompts")}
                    >
                      <Sparkles className="w-3 h-3" />
                      Prompts
                    </Button>
                    <Button
                      variant={searchMode === "articles" ? "default" : "ghost"}
                      size="sm"
                      className="h-7 text-xs flex items-center gap-1"
                      onClick={() => setSearchMode("articles")}
                    >
                      <FileText className="w-3 h-3" />
                      Articles
                    </Button>
                  </div>

                  {/* MVP: Hide Pro user filter toggle - no paywall */}
                  {/* {paletteMode === 'life-os-mode' && unlockData?.hasUnlimitedAccess && (
                    <div className="flex items-center gap-1 p-1 bg-muted/30 rounded-lg">
                      <Button
                        variant={searchFilter === "selected" ? "default" : "ghost"}
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => setSearchFilter("selected")}
                      >
                        Selected only
                      </Button>
                      <Button
                        variant={searchFilter === "all" ? "default" : "ghost"}
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => setSearchFilter("all")}
                      >
                        All templates
                      </Button>
                    </div>
                  )} */}
                </div>
              )}
            </div>

            {/* Results - Search tab */}
            {tab === 'search' && query && (
              <div className="flex-1 overflow-y-auto min-h-0 p-6 space-y-6">
                {/* Templates Results */}
                {searchResults.templates.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Templates ({searchResults.templates.length})
                      </h3>
                      <div className="space-y-2">
                        {searchResults.templates.map((template: any) => {
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

            {/* Templates Tab - Browse all templates */}
            {tab === 'templates' && (
              <div className="flex-1 overflow-y-auto min-h-0 p-6">
                <div className="space-y-4">
                  {categories.map((category) => {
                    const templates = groupedTemplates[category]
                    const isExpanded = expandedCategories.has(category)

                    return (
                      <div key={category} className="border-b pb-4">
                        <button
                          onClick={() => toggleCategory(category)}
                          className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                            />
                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                              {category}
                            </h3>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {templates.length}
                          </Badge>
                        </button>

                        {isExpanded && (
                          <div className="mt-2 space-y-1 pl-6">
                            {templates.map((template: any) => {
                              const Icon = getTemplateIcon(template.id)

                              return (
                                <Link
                                  key={template.id}
                                  href={template.url}
                                  onClick={() => handleTemplateClick(template)}
                                >
                                  <div className="group flex items-center gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-muted/50">
                                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                                      <Icon className="w-3 h-3 text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-sm group-hover:text-primary transition-colors">
                                        {template.name}
                                      </h4>
                                    </div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Footer - only show when searching */}
            {tab === 'search' && query && (
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
