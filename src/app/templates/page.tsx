"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, Home, Briefcase, GraduationCap, Baby, Car, Search, ArrowLeft, 
  Zap, Filter, Grid3X3, List, ChevronDown, BookTemplate, Target
} from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const categories = [
  { id: "all", name: "All Templates", count: 2 },
  { id: "life-events", name: "Life Events", count: 1 },
  { id: "career", name: "Career & Education", count: 1 },
]

const templates = [
  {
    id: "wedding-planning",
    title: "Wedding Planning",
    description: "Organize your perfect day with vendor management, guest tracking, budget planning, and timeline coordination",
    category: "life-events",
    icon: Heart,
    color: "bg-muted/50 border-border text-foreground",
    popular: true,
    features: ["Vendor Directory", "Guest Management", "Budget Tracker", "Task Timeline"],
    setupTime: "5 min"
  },
  {
    id: "academic-research",
    title: "Academic Research",
    description: "Comprehensive research management platform for academics, researchers, and students with literature review, data management, and collaboration tools",
    category: "career",
    icon: GraduationCap,
    color: "bg-muted/50 border-border text-foreground",
    popular: true,
    features: ["Literature Review", "Methodology Planning", "Data Management", "Writing Tracker"],
    setupTime: "4 min"
  }
]

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4">
        <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <BookTemplate className="h-7 w-7" />
                <span className="font-bold text-2xl">Templata</span>
              </Link>
            </div>
            
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium bg-muted/50">Templates</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-6 p-6 w-[500px]">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Personal Life</h4>
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link href="/templates/wedding-planning" className="block group">
                              <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Heart className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <div>
                                  <div className="font-semibold group-hover:text-primary transition-colors">Wedding Planning</div>
                                  <div className="text-sm text-muted-foreground">Complete wedding organization</div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                          
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Career & Business</h4>
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link href="/templates/academic-research" className="block group">
                              <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <div>
                                  <div className="font-semibold group-hover:text-primary transition-colors">Academic Research</div>
                                  <div className="text-sm text-muted-foreground">Research management platform</div>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/faq" className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors">
                      FAQ
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-base" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <Button className="text-base font-medium" asChild>
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Add padding to account for floating header */}
      <div className="pt-24"></div>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Choose Your Template</h1>
          <p className="text-muted-foreground">
            Get started instantly with expertly designed templates for life's biggest moments.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center border rounded-md">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  } ${category.id === categories[0].id ? "rounded-l-md" : ""} ${
                    category.id === categories[categories.length - 1].id ? "rounded-r-md" : ""
                  }`}
                >
                  {category.name}
                  <span className="ml-1 text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>

            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"} rounded-l-md`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-muted"} rounded-r-md`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''}
            {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </p>
        </div>

        {/* Templates Grid/List */}
        <div className={viewMode === "grid" 
          ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "space-y-4"
        }>
          {filteredTemplates.map((template) => {
            const Icon = template.icon
            
            if (viewMode === "list") {
              return (
                <Card key={template.id} className="group hover:shadow-md transition-all duration-200">
                  <Link href={`/templates/${template.id}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${template.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                              {template.title}
                            </h3>
                            {template.popular && (
                              <Badge variant="secondary" className="text-xs">Popular</Badge>
                            )}
                          </div>
                          
                          <p className="text-muted-foreground mb-3 line-clamp-2">
                            {template.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {template.features.slice(0, 2).map((feature) => (
                                <Badge key={feature} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                              {template.features.length > 2 && (
                                <span className="text-xs text-muted-foreground">
                                  +{template.features.length - 2} more
                                </span>
                              )}
                            </div>
                            
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Zap className="mr-1 h-3 w-3" />
                              {template.setupTime} setup
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              )
            }
            
            return (
              <Card key={template.id} className="group hover:shadow-md transition-all duration-200">
                <Link href={`/templates/${template.id}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${template.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      {template.popular && (
                        <Badge variant="secondary" className="text-xs">Popular</Badge>
                      )}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {template.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {template.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {template.features.slice(0, 2).map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {template.features.length > 2 && (
                          <span className="text-xs text-muted-foreground">
                            +{template.features.length - 2} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Zap className="mr-1 h-3 w-3" />
                        {template.setupTime} setup time
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No templates found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or browse different categories.
            </p>
            <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedCategory("all") }}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}