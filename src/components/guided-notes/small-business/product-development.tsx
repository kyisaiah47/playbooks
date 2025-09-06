"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProductDevelopment() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Product Development Plan</h1>
        <p className="text-muted-foreground">Plan and execute the development of your products or services from concept to launch.</p>
      </div>

      <Tabs defaultValue="product-strategy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="product-strategy" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Product Strategy</span>
            <span className="sm:hidden">Strategy</span>
          </TabsTrigger>
          <TabsTrigger value="mvp-development" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">MVP Development</span>
            <span className="sm:hidden">MVP</span>
          </TabsTrigger>
          <TabsTrigger value="testing-validation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Testing & Validation</span>
            <span className="sm:hidden">Testing</span>
          </TabsTrigger>
          <TabsTrigger value="roadmap" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Product Roadmap</span>
            <span className="sm:hidden">Roadmap</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="product-strategy">
          <GuidedNotePage
            title="Product Strategy & Requirements"
            description="Define your product vision, requirements, and development approach"
            sections={[
              {
                title: "Product Vision & Goals",
                prompts: [
                  "What is your product vision and how does it solve customer problems?",
                  "What are your key product success metrics and goals?",
                  "How does your product fit into the broader market landscape?",
                  "What makes your product unique compared to alternatives?",
                  "How will your product evolve over the first 2-3 years?"
                ],
                examples: [
                  "Become the go-to solution for small business inventory management with 90% customer satisfaction",
                  "Metrics: user adoption rate, feature utilization, customer retention, NPS score, revenue per user",
                  "Fills gap between basic spreadsheets and expensive enterprise systems",
                  "Real-time sync, mobile-first design, industry-specific features, easy integration",
                  "Year 1: Core features, Year 2: Advanced analytics, Year 3: AI-powered insights"
                ]
              },
              {
                title: "Feature Prioritization",
                prompts: [
                  "What are the must-have features for your initial product release?",
                  "How will you prioritize features based on customer value and development effort?",
                  "What features can be delayed to later releases?",
                  "How will you gather and incorporate customer feedback into feature decisions?",
                  "What technical constraints affect your feature prioritization?"
                ],
                examples: [
                  "Core: user accounts, data entry, basic reporting; Nice-to-have: advanced analytics, integrations",
                  "Impact vs. effort matrix, customer feedback frequency, competitive necessity analysis",
                  "Advanced features, integrations, mobile apps can come in phases 2-3",
                  "User interviews, beta feedback, support tickets, usage analytics, feature requests",
                  "Platform limitations, team expertise, third-party API availability, security requirements"
                ]
              }
            ]}
            tips={[
              "Start with core features that deliver the primary value proposition",
              "Validate feature ideas with customers before investing in development",
              "Build features that differentiate you from competitors, not just match them"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}