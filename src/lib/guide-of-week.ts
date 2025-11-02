import { templateRegistry, TemplateRegistryEntry } from "@/registry/templates"

// Template of the Week system
export interface TemplateOfWeek {
  weekOf: string // ISO date string of the Monday of the week
  templateId: string
  title: string
  subtitle: string
  featuredText: string
  reasons: string[]
  stats?: {
    completionRate?: number
    userCount?: number
    avgRating?: number
  }
  curator?: {
    name: string
    role: string
    quote: string
  }
}

// Template of the Week history - in production this would come from a database/CMS
const templateOfWeekHistory: TemplateOfWeek[] = [
  {
    weekOf: "2025-01-13", // This week
    templateId: "wedding-planning",
    title: "Wedding Planning Master Guide",
    subtitle: "The Complete Wedding Organization System",
    featuredText: "Transform wedding planning from overwhelming to organized with our expert-designed system.",
    reasons: [
      "Comprehensive budget tracking with real-time cost monitoring",
      "Vendor management system used by professional planners",
      "Timeline optimization based on 500+ successful weddings",
      "Expert tips from certified wedding planners"
    ],
    stats: {
      completionRate: 94,
      userCount: 2847,
      avgRating: 4.9
    },
    curator: {
      name: "Axiom Engine",
      role: "AI Life Guidance System",
      quote: "This template provides comprehensive wedding planning guidance through systematic analysis of successful planning methodologies and best practices."
    }
  },
  {
    weekOf: "2025-01-06", // Last week
    templateId: "home-buying",
    title: "Home Buying Success Framework",
    subtitle: "Navigate Your Home Purchase Like a Pro",
    featuredText: "Master the complex home buying process with our step-by-step guidance system.",
    reasons: [
      "Financial readiness assessment prevents costly mistakes",
      "Mortgage comparison tools save thousands in interest",
      "Professional inspection checklists ensure quality",
      "Closing process guidance reduces stress and delays"
    ],
    stats: {
      completionRate: 89,
      userCount: 1923,
      avgRating: 4.8
    },
    curator: {
      name: "Axiom Engine",
      role: "AI Life Guidance System",
      quote: "Home buying represents one of life's most significant financial decisions. This template provides systematic guidance to navigate the process with confidence."
    }
  },
  {
    weekOf: "2024-12-30", // Two weeks ago
    templateId: "baby-planning",
    title: "Baby Planning & Parenting Prep",
    subtitle: "Your Complete Guide to Welcoming Baby",
    featuredText: "Prepare for parenthood with confidence using our expert-backed planning system.",
    reasons: [
      "Evidence-based pregnancy milestone tracking",
      "Nursery setup guidance from child development experts",
      "Financial planning for growing families",
      "Newborn care essentials with pediatric approval"
    ],
    stats: {
      completionRate: 91,
      userCount: 1456,
      avgRating: 4.9
    },
    curator: {
      name: "Axiom Engine",
      role: "AI Life Guidance System",
      quote: "This template addresses both practical preparation and emotional readiness for welcoming a baby, providing comprehensive yet accessible guidance."
    }
  }
]

// Get the current Template of the Week
export function getCurrentTemplateOfWeek(): TemplateOfWeek | null {
  const now = new Date()
  const currentMonday = getMonday(now)
  const currentWeekString = currentMonday.toISOString().split('T')[0]

  // Find template for current week
  const currentWeek = templateOfWeekHistory.find(
    item => item.weekOf === currentWeekString
  )

  return currentWeek || templateOfWeekHistory[0] // Fallback to most recent
}

// Get Template of the Week for a specific date
export function getTemplateOfWeekForDate(date: Date): TemplateOfWeek | null {
  const monday = getMonday(date)
  const weekString = monday.toISOString().split('T')[0]

  return templateOfWeekHistory.find(item => item.weekOf === weekString) || null
}

// Get Template of the Week history
export function getTemplateOfWeekHistory(): TemplateOfWeek[] {
  return [...templateOfWeekHistory].sort((a, b) =>
    new Date(b.weekOf).getTime() - new Date(a.weekOf).getTime()
  )
}

// Get full template details for Template of the Week
export function getTemplateOfWeekDetails(totw: TemplateOfWeek): TemplateRegistryEntry | null {
  return templateRegistry.find(t => t.id === totw.templateId) || null
}

// Check if a template is currently Template of the Week
export function isCurrentTemplateOfWeek(templateId: string): boolean {
  const current = getCurrentTemplateOfWeek()
  return current?.templateId === templateId
}

// Helper function to get Monday of a given date's week
function getMonday(date: Date): Date {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
  return new Date(d.setDate(diff))
}

// Get weeks remaining for current Template of the Week
export function getWeeksRemaining(): number {
  const current = getCurrentTemplateOfWeek()
  if (!current) return 0

  const now = new Date()
  const weekStart = new Date(current.weekOf)
  const weekEnd = new Date(weekStart)
  weekEnd.setDate(weekEnd.getDate() + 7)

  const msRemaining = weekEnd.getTime() - now.getTime()
  const daysRemaining = Math.ceil(msRemaining / (1000 * 60 * 60 * 24))

  return Math.max(0, daysRemaining)
}

// Generate Template of the Week badge text
export function getTemplateOfWeekBadgeText(): string {
  const daysRemaining = getWeeksRemaining()

  if (daysRemaining <= 0) return "Last Week's Pick"
  if (daysRemaining === 7) return "This Week Only"
  if (daysRemaining > 1) return `${daysRemaining} Days Left`
  return "Last Day!"
}