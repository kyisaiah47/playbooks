"use client"

import { useState } from "react"
import Link from "next/link"
import { WeddingSetupWizard } from "@/components/wedding-setup-wizard"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Heart,
  Home,
  Baby,
  Briefcase,
  GraduationCap,
  Dumbbell,
  BookOpen,
  Search,
  ArrowRight,
} from "lucide-react"

const templates = [
  {
    id: "wedding-planning",
    name: "Wedding Planning",
    description: "Plan your perfect wedding with budget tracking, vendor management, and timeline organization.",
    category: "Personal Life",
    icon: Heart,
    url: "/templates/wedding-planning",
    popular: true,
    color: "bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    id: "home-buying",
    name: "Home Buying",
    description: "Navigate the home buying process with mortgage tracking, property comparisons, and checklists.",
    category: "Personal Life", 
    icon: Home,
    url: "/templates/home-buying",
    popular: true,
    color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "baby-planning",
    name: "Baby Planning",
    description: "Prepare for your little one with pregnancy tracking, nursery planning, and baby essentials.",
    category: "Personal Life",
    icon: Baby,
    url: "/templates/baby-planning", 
    popular: false,
    color: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    id: "job-search",
    name: "Job Search",
    description: "Track applications, prepare for interviews, and organize your job search strategy.",
    category: "Career & Business",
    icon: Briefcase,
    url: "/templates/job-search",
    popular: false,
    color: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "college-planning", 
    name: "College Planning",
    description: "Navigate college applications, track deadlines, and plan your academic future.",
    category: "Education",
    icon: GraduationCap,
    url: "/templates/college-planning",
    popular: false,
    color: "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "fitness-journey",
    name: "Fitness Journey", 
    description: "Track workouts, nutrition, and progress toward your health and fitness goals.",
    category: "Health & Wellness",
    icon: Dumbbell,
    url: "/templates/fitness-journey",
    popular: false,
    color: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800",
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    id: "academic-research",
    name: "Academic Research",
    description: "Organize research projects, track sources, and manage academic workflows.",
    category: "Education",
    icon: BookOpen,
    url: "/templates/academic-research",
    popular: false,
    color: "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
]

interface TemplatesModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TemplatesModal({ open, onOpenChange }: TemplatesModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Personal Life", "Career & Business", "Education", "Health & Wellness"]

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const popularTemplates = filteredTemplates.filter(t => t.popular)
  const otherTemplates = filteredTemplates.filter(t => !t.popular)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-none !max-w-none w-[96vw] !w-[96vw] h-[96vh] !h-[96vh] sm:max-w-none sm:w-[96vw] sm:h-[96vh] md:max-w-none md:w-[96vw] md:h-[96vh] lg:max-w-none lg:w-[96vw] lg:h-[96vh] overflow-hidden flex flex-col p-8" style={{ maxWidth: '96vw', width: '96vw', height: '96vh' }}>
        <DialogHeader>
          <DialogTitle className="text-2xl">Choose a Template</DialogTitle>
          <DialogDescription>
            Get started with a pre-built template designed for your needs
          </DialogDescription>
        </DialogHeader>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 pb-4 border-b">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="flex-1 overflow-y-auto">
          {/* Popular Templates */}
          {popularTemplates.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-semibold">Popular Templates</h3>
                <Badge variant="secondary">Most Used</Badge>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {popularTemplates.map((template) => {
                  const Icon = template.icon
                  return (
                    <Link
                      key={template.id}
                      href={template.url}
                      className={`block p-6 rounded-2xl border-2 hover:shadow-md transition-all hover:scale-[1.02] ${template.color}`}
                      onClick={() => onOpenChange(false)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-background border flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 ${template.iconColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-lg">{template.name}</h4>
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {template.description}
                          </p>
                          <Badge variant="outline" className="mt-3 text-xs">
                            {template.category}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Other Templates */}
          {otherTemplates.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">All Templates</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {otherTemplates.map((template) => {
                  const Icon = template.icon
                  return (
                    <Link
                      key={template.id}
                      href={template.url}
                      className="block p-4 rounded-xl border hover:shadow-md transition-all hover:scale-[1.02] bg-card"
                      onClick={() => onOpenChange(false)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                          <Icon className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold truncate">{template.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {template.category}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {template.description}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No templates found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}