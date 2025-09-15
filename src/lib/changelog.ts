"use client"

// Changelog and progress transparency system
export interface ChangelogEntry {
  id: string
  version: string
  date: string
  title: string
  description: string
  type: "feature" | "improvement" | "bugfix" | "template" | "announcement"
  items: ChangelogItem[]
  important?: boolean
}

export interface ChangelogItem {
  id: string
  text: string
  category?: string
  templateId?: string // For template-specific updates
}

// Changelog data - in production this would come from a CMS or API
export const changelogEntries: ChangelogEntry[] = [
  {
    id: "2025-01-14-premium-upgrade",
    version: "2.1.0",
    date: "2025-01-14",
    title: "Premium Platform Upgrade",
    description: "Major platform enhancement with expert verification, smart recommendations, and premium exports.",
    type: "feature",
    important: true,
    items: [
      {
        id: "expert-badges",
        text: "Expert verification badges with detailed professional profiles",
        category: "Credibility"
      },
      {
        id: "smart-recommendations",
        text: "AI-powered smart recommendations in dedicated Smart tab",
        category: "Discovery"
      },
      {
        id: "pdf-exports",
        text: "Professional PDF dossier exports with Templata branding",
        category: "Export"
      },
      {
        id: "template-of-week",
        text: "Template of the Week showcase with curator insights",
        category: "Featured"
      },
      {
        id: "related-templates",
        text: "Cross-template relationships for better discovery",
        category: "Navigation"
      },
      {
        id: "favorites-system",
        text: "Save and organize favorite templates with star functionality",
        category: "Organization"
      },
      {
        id: "recent-tracking",
        text: "Continue where you left off with recently used templates",
        category: "Productivity"
      },
      {
        id: "micro-interactions",
        text: "Delightful animations and hover effects throughout the platform",
        category: "Experience"
      }
    ]
  },
  {
    id: "2025-01-07-wedding-enhancements",
    version: "2.0.3",
    date: "2025-01-07",
    title: "Wedding Planning Enhancements",
    description: "Major improvements to wedding planning template based on user feedback.",
    type: "template",
    items: [
      {
        id: "vendor-management",
        text: "Enhanced vendor comparison and contact management",
        templateId: "wedding-planning"
      },
      {
        id: "budget-tracking",
        text: "Real-time budget tracking with category breakdowns",
        templateId: "wedding-planning"
      },
      {
        id: "timeline-optimization",
        text: "Optimized wedding timeline based on 500+ successful weddings",
        templateId: "wedding-planning"
      }
    ]
  },
  {
    id: "2025-01-02-search-improvements",
    version: "2.0.2",
    date: "2025-01-02",
    title: "Search & Navigation Improvements",
    description: "Enhanced search functionality and faster navigation.",
    type: "improvement",
    items: [
      {
        id: "cmd-k-search",
        text: "Improved Cmd+K search with better relevance scoring",
        category: "Search"
      },
      {
        id: "filter-performance",
        text: "Faster template and article filtering",
        category: "Performance"
      },
      {
        id: "mobile-navigation",
        text: "Better mobile navigation experience",
        category: "Mobile"
      }
    ]
  },
  {
    id: "2024-12-28-home-buying-launch",
    version: "2.0.1",
    date: "2024-12-28",
    title: "Home Buying Template Launch",
    description: "Comprehensive home buying guidance now available.",
    type: "template",
    items: [
      {
        id: "mortgage-calculator",
        text: "Built-in mortgage affordability calculator",
        templateId: "home-buying"
      },
      {
        id: "inspection-checklist",
        text: "Professional home inspection checklist",
        templateId: "home-buying"
      },
      {
        id: "closing-timeline",
        text: "Step-by-step closing process timeline",
        templateId: "home-buying"
      }
    ]
  },
  {
    id: "2024-12-20-platform-launch",
    version: "2.0.0",
    date: "2024-12-20",
    title: "Templata 2.0 Launch",
    description: "Complete platform redesign with new templates and features.",
    type: "announcement",
    important: true,
    items: [
      {
        id: "new-design",
        text: "Modern, clean design with improved usability",
        category: "Design"
      },
      {
        id: "template-system",
        text: "New interactive template system with guided prompts",
        category: "Templates"
      },
      {
        id: "resource-library",
        text: "Comprehensive resource library with expert articles",
        category: "Content"
      }
    ]
  }
]

// Get recent changelog entries
export function getRecentChangelog(limit: number = 5): ChangelogEntry[] {
  return changelogEntries
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

// Get changelog entry by ID
export function getChangelogEntry(id: string): ChangelogEntry | null {
  return changelogEntries.find(entry => entry.id === id) || null
}

// Check if user has seen changelog entry
export function hasSeenChangelogEntry(entryId: string): boolean {
  if (typeof window === "undefined") return true

  const seenEntries = localStorage.getItem("templata-seen-changelog")
  if (!seenEntries) return false

  const seen = JSON.parse(seenEntries)
  return seen.includes(entryId)
}

// Mark changelog entry as seen
export function markChangelogEntryAsSeen(entryId: string): void {
  if (typeof window === "undefined") return

  const seenEntries = localStorage.getItem("templata-seen-changelog")
  const seen = seenEntries ? JSON.parse(seenEntries) : []

  if (!seen.includes(entryId)) {
    seen.push(entryId)
    localStorage.setItem("templata-seen-changelog", JSON.stringify(seen))
  }
}

// Get unseen changelog entries
export function getUnseenChangelog(): ChangelogEntry[] {
  return changelogEntries.filter(entry =>
    !hasSeenChangelogEntry(entry.id) && entry.important
  )
}

// Get progress stats
export interface ProgressStats {
  totalFeatures: number
  completedFeatures: number
  templatesCount: number
  expertsCount: number
  weeksSincelaunch: number
}

export function getProgressStats(): ProgressStats {
  const launchDate = new Date("2024-12-20")
  const now = new Date()
  const msInWeek = 7 * 24 * 60 * 60 * 1000
  const weeksSincelaunch = Math.floor((now.getTime() - launchDate.getTime()) / msInWeek)

  return {
    totalFeatures: 13, // Total premium features planned
    completedFeatures: 11, // Features we've completed
    templatesCount: 25, // Rough count of templates
    expertsCount: 5, // Number of expert contributors
    weeksSincelaunch: Math.max(1, weeksSincelaunch)
  }
}

// Get feature completion percentage
export function getFeatureCompletionPercentage(): number {
  const stats = getProgressStats()
  return Math.round((stats.completedFeatures / stats.totalFeatures) * 100)
}