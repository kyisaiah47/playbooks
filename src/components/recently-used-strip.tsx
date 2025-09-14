"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Heart,
  Home,
  Briefcase,
  Target,
  Baby,
  Rocket,
  GraduationCap,
  BookOpen,
  Dumbbell,
  X,
  ArrowRight
} from "lucide-react"
import { useRecentTemplates } from "@/hooks/use-recent-templates"

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

export function RecentlyUsedStrip() {
  const { recentItems, removeRecentItem, clearRecentItems, hasRecentItems } = useRecentTemplates()

  if (!hasRecentItems) return null

  return (
    <div className="border-b bg-muted/20 py-4">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <h3 className="text-sm font-medium text-muted-foreground">Continue where you left off</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearRecentItems}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Clear all
          </Button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 stagger-children" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {recentItems.map((item, index) => {
            const Icon = getTemplateIcon(item.id)
            return (
              <div key={item.id} className="group relative flex-shrink-0 animate-fade-in-up">
                <Link href={item.url}>
                  <div className="flex items-center gap-3 bg-background rounded-lg border px-4 py-3 hover:shadow-md transition-all duration-200 hover:scale-[1.02] min-w-[280px]">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-1 group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {item.type === "template" ? "Template" : "Article"}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault()
                    removeRecentItem(item.id)
                  }}
                  className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-muted hover:bg-destructive hover:text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}