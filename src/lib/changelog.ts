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
    id: "upcoming-features",
    version: "Coming Soon",
    date: "2025-02-01",
    title: "Upcoming Features",
    description: "What's coming next to Templata based on user feedback and our roadmap.",
    type: "announcement",
    important: false,
    items: [
      {
        id: "user-accounts",
        text: "User accounts with template progress saving and sync across devices",
        category: "Accounts"
      },
      {
        id: "export-system",
        text: "Export completed templates to PDF, Word, and other formats",
        category: "Export"
      },
      {
        id: "collaboration",
        text: "Share templates with family, friends, or team members for collaborative planning",
        category: "Sharing"
      },
      {
        id: "mobile-app",
        text: "Native mobile apps for iOS and Android with offline template access",
        category: "Mobile"
      },
      {
        id: "premium-features",
        text: "Premium tier with advanced AI assistance and priority support",
        category: "Premium"
      }
    ]
  },
  {
    id: "2025-01-21-beta-launch",
    version: "0.1.0",
    date: "2025-01-21",
    title: "Templata Public Beta Launch",
    description: "Welcome to Templata! Our public beta includes 1,298 templates powered by the Axiom Engine.",
    type: "announcement",
    important: true,
    items: [
      {
        id: "axiom-engine",
        text: "Axiom Engine generates 15,000+ categorized prompts across all templates",
        category: "AI"
      },
      {
        id: "template-library",
        text: "1,298 templates covering Personal Life, Career & Work, Property & Finance, and Business & Entrepreneurship",
        category: "Templates"
      },
      {
        id: "article-system",
        text: "26,000+ articles providing in-depth guidance for every situation",
        category: "Content"
      },
      {
        id: "split-screen",
        text: "Split-screen workspace with categorized prompts and relevant articles",
        category: "Interface"
      },
      {
        id: "search-navigation",
        text: "Cmd+K search to quickly find templates and browse by category",
        category: "Discovery"
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
  promptsCount: number
  articlesCount: number
  weeksSinceLaunch: number
}

export function getProgressStats(): ProgressStats {
  const launchDate = new Date("2025-01-21")
  const now = new Date()
  const msInWeek = 7 * 24 * 60 * 60 * 1000
  const weeksSinceLaunch = Math.floor((now.getTime() - launchDate.getTime()) / msInWeek)

  return {
    totalFeatures: 10, // Core features planned for v1.0
    completedFeatures: 5, // Features completed in beta
    templatesCount: 150, // Current template count
    promptsCount: 15000, // Axiom Engine generated prompts
    articlesCount: 3000, // Axiom Engine generated articles
    weeksSinceLaunch: Math.max(0, weeksSinceLaunch)
  }
}

// Get feature completion percentage
export function getFeatureCompletionPercentage(): number {
  const stats = getProgressStats()
  return Math.round((stats.completedFeatures / stats.totalFeatures) * 100)
}