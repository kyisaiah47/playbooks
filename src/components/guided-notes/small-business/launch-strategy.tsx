"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LaunchStrategy() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Launch Strategy & Timeline</h1>
        <p className="text-muted-foreground">Plan your business launch with a comprehensive go-to-market strategy and timeline.</p>
      </div>

      <Tabs defaultValue="launch-planning" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="launch-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Launch Planning</span>
            <span className="sm:hidden">Planning</span>
          </TabsTrigger>
          <TabsTrigger value="go-to-market" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Go-to-Market</span>
            <span className="sm:hidden">GTM</span>
          </TabsTrigger>
          <TabsTrigger value="launch-timeline" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Launch Timeline</span>
            <span className="sm:hidden">Timeline</span>
          </TabsTrigger>
          <TabsTrigger value="success-metrics" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Success Metrics</span>
            <span className="sm:hidden">Metrics</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="launch-planning">
          <GuidedNotePage
            title="Launch Planning & Preparation"
            description="Prepare all aspects of your business for a successful launch"
            sections={[
              {
                title: "Launch Readiness Checklist",
                prompts: [
                  "What key milestones must be complete before launch?",
                  "What business operations need to be in place for launch?",
                  "What marketing materials and channels need to be ready?",
                  "What legal and compliance requirements must be met?",
                  "How will you handle customer support and fulfillment from day one?"
                ],
                examples: [
                  "Product MVP completed, team hired, legal setup done, initial funding secured",
                  "Payment processing, inventory management, customer onboarding process, quality control",
                  "Website, social media accounts, email sequences, sales materials, PR contacts",
                  "Business registration, permits, insurance, terms of service, privacy policy",
                  "Help desk system, FAQ documentation, fulfillment process, customer service training"
                ]
              }
            ]}
            tips={[
              "Create detailed launch checklist with owners and deadlines",
              "Test all systems and processes before going live",
              "Have contingency plans for common launch day issues"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}