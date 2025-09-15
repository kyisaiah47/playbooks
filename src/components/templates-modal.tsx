"use client"

import { useState } from "react"
import Link from "next/link"
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
import { templateRegistry, getAllCategories } from "@/registry/templates"
import {
  Search,
  ArrowRight,
} from "lucide-react"
import { InteractiveGlow, SubtleGlow } from "@/components/ui/glow-variants"


interface TemplatesModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TemplatesModal({ open, onOpenChange }: TemplatesModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...getAllCategories()]

  const filteredTemplates = templateRegistry.filter(template => {
    const matchesSearch = searchQuery === "" || 
                         template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
                  const isComingSoon = template.comingSoon
                  const CardContent = () => (
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-background border flex items-center justify-center flex-shrink-0`}>
                        <div className={`text-2xl ${template.iconColor}`}>{template.icon}</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-lg">{template.name}</h4>
                          {isComingSoon ? (
                            <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
                          ) : (
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {template.description}
                        </p>
                        <Badge variant="outline" className="mt-3 text-xs">
                          {template.category}
                        </Badge>
                      </div>
                    </div>
                  )

                  return isComingSoon ? (
                    <div
                      key={template.id}
                      className={`block p-6 rounded-2xl border-2 opacity-75 ${template.color}`}
                    >
                      <CardContent />
                    </div>
                  ) : (
                    <InteractiveGlow key={template.id}>
                      <Link
                        href={template.url}
                        className={`block p-6 rounded-2xl transition-all hover:scale-[1.02] ${template.color}`}
                        onClick={() => onOpenChange(false)}
                      >
                        <CardContent />
                      </Link>
                    </InteractiveGlow>
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
                  const isComingSoon = template.comingSoon
                  const CardContent = () => (
                    <>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                          <div className="text-lg text-muted-foreground">{template.icon}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold truncate">{template.name}</h4>
                            {isComingSoon && (
                              <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
                            )}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {template.category}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {template.description}
                      </p>
                    </>
                  )

                  return isComingSoon ? (
                    <div
                      key={template.id}
                      className="block p-4 rounded-xl border opacity-75 bg-card"
                    >
                      <CardContent />
                    </div>
                  ) : (
                    <SubtleGlow key={template.id}>
                      <Link
                        href={template.url}
                        className="block p-4 rounded-xl transition-all hover:scale-[1.02] bg-card"
                        onClick={() => onOpenChange(false)}
                      >
                        <CardContent />
                      </Link>
                    </SubtleGlow>
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