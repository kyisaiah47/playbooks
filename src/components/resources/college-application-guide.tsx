"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, FileText, DollarSign } from "lucide-react"

export function CollegeApplicationGuide() {
  const resources = [
    {
      title: "Common Application",
      description: "Apply to 900+ colleges with one application",
      url: "https://www.commonapp.org",
      category: "Applications",
      icon: FileText,
      urgency: "high"
    },
    {
      title: "College Board SAT",
      description: "Register for SAT and view scores",
      url: "https://www.collegeboard.org",
      category: "Testing",
      icon: Calendar,
      urgency: "high"
    },
    {
      title: "FAFSA Application",
      description: "Apply for federal financial aid",
      url: "https://studentaid.gov/h/apply-for-aid/fafsa",
      category: "Financial Aid",
      icon: DollarSign,
      urgency: "high"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Essential College Resources</CardTitle>
        <CardDescription>
          Quick access to the most important college application resources
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {resources.map((resource, index) => {
          const IconComponent = resource.icon
          return (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <IconComponent className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{resource.title}</h4>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                  <Badge variant="outline" className="mt-1">
                    {resource.category}
                  </Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Visit
                </a>
              </Button>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}