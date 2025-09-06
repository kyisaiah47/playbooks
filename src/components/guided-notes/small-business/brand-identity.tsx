"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BrandIdentity() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Brand Identity & Messaging</h1>
        <p className="text-muted-foreground">Develop your brand identity, messaging, and visual presence to connect with your target audience.</p>
      </div>

      <Tabs defaultValue="brand-strategy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="brand-strategy" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Brand Strategy</span>
            <span className="sm:hidden">Strategy</span>
          </TabsTrigger>
          <TabsTrigger value="messaging" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Messaging</span>
            <span className="sm:hidden">Message</span>
          </TabsTrigger>
          <TabsTrigger value="visual-identity" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Visual Identity</span>
            <span className="sm:hidden">Visual</span>
          </TabsTrigger>
          <TabsTrigger value="brand-assets" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Brand Assets</span>
            <span className="sm:hidden">Assets</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="brand-strategy">
          <GuidedNotePage
            title="Brand Strategy & Positioning"
            description="Define your brand's core identity, values, and market position"
            sections={[
              {
                title: "Brand Foundation",
                prompts: [
                  "What is your brand's mission and purpose?",
                  "What core values does your brand represent?",
                  "What personality traits best describe your brand?",
                  "What emotional connection do you want customers to have with your brand?",
                  "How do you want customers to feel when they interact with your brand?"
                ],
                examples: [
                  "Mission: Empower small businesses to compete with enterprise-level efficiency and insights",
                  "Values: Simplicity, reliability, customer success, innovation, transparency",
                  "Personality: Professional but approachable, innovative yet trustworthy, helpful not pushy",
                  "Trust, confidence, empowerment, relief from stress, excitement about possibilities",
                  "Supported and understood, like they made a smart choice, excited to use the product"
                ]
              },
              {
                title: "Brand Positioning",
                prompts: [
                  "How do you want to be positioned relative to competitors?",
                  "What unique space do you occupy in customers' minds?",
                  "What key differentiators set your brand apart?",
                  "Who is your brand for and who is it not for?",
                  "What would customers lose if your brand didn't exist?"
                ],
                examples: [
                  "Premium but accessible alternative to complex enterprise solutions",
                  "The simple solution that actually works for growing businesses",
                  "Industry expertise, customer-first approach, implementation speed",
                  "For: growing SMBs 10-100 employees, Not for: enterprises or micro businesses",
                  "They'd waste time on manual processes or overpay for complex solutions they don't need"
                ]
              }
            ]}
            tips={[
              "Build brand strategy around customer needs, not just your product features",
              "Test brand concepts with real customers before committing to final direction",
              "Ensure brand positioning is authentic and deliverable, not aspirational"
            ]}
          />
        </TabsContent>

        <TabsContent value="messaging">
          <GuidedNotePage
            title="Brand Messaging & Voice"
            description="Develop clear, compelling messaging that resonates with your audience"
            sections={[
              {
                title: "Value Proposition",
                prompts: [
                  "What is your core value proposition in one clear sentence?",
                  "What specific benefits do customers get from your brand?",
                  "How do you communicate your unique value in different contexts?",
                  "What proof points support your value proposition claims?",
                  "How does your value proposition address customer pain points?"
                ],
                examples: [
                  "We help growing businesses save 15 hours per week through intelligent automation",
                  "Reduce manual work, increase accuracy, gain insights, scale operations efficiently",
                  "Website headline, elevator pitch, sales presentations, social media bio",
                  "Customer case studies, time-savings data, accuracy improvements, ROI calculations",
                  "Addresses time scarcity, error risks, scaling challenges, competitive pressure"
                ]
              },
              {
                title: "Brand Voice & Tone",
                prompts: [
                  "How should your brand sound when communicating with customers?",
                  "What tone works best for different types of communications?",
                  "What language and terminology does your audience use and understand?",
                  "How formal or casual should your brand voice be?",
                  "What topics or communication styles should your brand avoid?"
                ],
                examples: [
                  "Knowledgeable but approachable, confident without being arrogant, helpful not salesy",
                  "Educational content: informative, Sales: consultative, Support: empathetic and patient",
                  "Business language but avoid jargon, use terms customers use for their problems",
                  "Professional but conversational - like talking to a knowledgeable colleague",
                  "Avoid: overselling, technical jargon, patronizing tone, false urgency"
                ]
              }
            ]}
            tips={[
              "Test key messages with customers to ensure clarity and resonance",
              "Develop message variations for different audiences and contexts",
              "Create brand voice guidelines that team members can follow consistently"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}