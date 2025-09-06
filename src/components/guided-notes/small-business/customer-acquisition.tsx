"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CustomerAcquisition() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Customer Acquisition Plan</h1>
        <p className="text-muted-foreground">Develop strategies and tactics to attract, convert, and retain your ideal customers.</p>
      </div>

      <Tabs defaultValue="acquisition-strategy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="acquisition-strategy" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Acquisition Strategy</span>
            <span className="sm:hidden">Strategy</span>
          </TabsTrigger>
          <TabsTrigger value="marketing-channels" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Marketing Channels</span>
            <span className="sm:hidden">Channels</span>
          </TabsTrigger>
          <TabsTrigger value="sales-process" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Sales Process</span>
            <span className="sm:hidden">Sales</span>
          </TabsTrigger>
          <TabsTrigger value="retention" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Customer Retention</span>
            <span className="sm:hidden">Retention</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="acquisition-strategy">
          <GuidedNotePage
            title="Customer Acquisition Strategy"
            description="Define your overall approach to finding and attracting ideal customers"
            sections={[
              {
                title: "Target Customer Profiles",
                prompts: [
                  "Who are your ideal customers and what characteristics do they share?",
                  "Where do your target customers spend their time online and offline?",
                  "What problems are they actively trying to solve?",
                  "How do they typically research and make purchasing decisions?",
                  "What messaging will resonate most with each customer segment?"
                ],
                examples: [
                  "Small business owners, 25-50 employees, $1-5M revenue, growth-focused, tech-savvy",
                  "LinkedIn, industry forums, local business events, trade publications, Google searches",
                  "Scaling challenges, operational inefficiencies, competitive pressure, cash flow management",
                  "Online research, peer referrals, free trials, demos, case studies before buying",
                  "Focus on time savings, growth enablement, competitive advantage, ROI"
                ]
              }
            ]}
            tips={[
              "Start with one clearly defined customer segment before expanding",
              "Test acquisition channels with small budgets before scaling",
              "Track customer acquisition cost (CAC) and lifetime value (LTV) closely"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}