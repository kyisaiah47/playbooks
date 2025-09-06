"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RiskManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Risk Management Plan</h1>
        <p className="text-muted-foreground">Identify, assess, and plan for risks that could impact your business success.</p>
      </div>

      <Tabs defaultValue="risk-identification" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="risk-identification" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Risk Identification</span>
            <span className="sm:hidden">Identify</span>
          </TabsTrigger>
          <TabsTrigger value="risk-assessment" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Risk Assessment</span>
            <span className="sm:hidden">Assess</span>
          </TabsTrigger>
          <TabsTrigger value="mitigation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Mitigation Plans</span>
            <span className="sm:hidden">Mitigate</span>
          </TabsTrigger>
          <TabsTrigger value="contingency" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Contingency Plans</span>
            <span className="sm:hidden">Contingency</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="risk-identification">
          <GuidedNotePage
            title="Business Risk Identification"
            description="Identify potential risks that could impact your business operations and success"
            sections={[
              {
                title: "Market & Competitive Risks",
                prompts: [
                  "What market changes could negatively impact your business?",
                  "How might competitor actions affect your market position?",
                  "What economic factors could hurt demand for your products/services?",
                  "How might regulatory changes impact your business model?",
                  "What technology disruptions could make your solution obsolete?"
                ],
                examples: [
                  "Market saturation, customer preferences shifting, recession reducing spending",
                  "Price wars, new entrants, incumbents adding similar features, acquisition of key suppliers",
                  "Economic downturn, inflation, interest rate changes, industry-specific downturns",
                  "New regulations requiring compliance costs, changes to tax laws, industry restrictions",
                  "New technology platforms, AI automation, mobile-first shifts, blockchain disruption"
                ]
              }
            ]}
            tips={[
              "Consider both internal risks you can control and external risks you cannot",
              "Think about risks specific to your industry as well as general business risks",
              "Regularly review and update risk assessments as your business evolves"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}