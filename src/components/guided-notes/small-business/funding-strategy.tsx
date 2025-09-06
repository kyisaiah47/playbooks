"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FundingStrategy() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Funding Strategy & Sources</h1>
        <p className="text-muted-foreground">Explore funding options and develop a strategy to finance your business launch and growth.</p>
      </div>

      <Tabs defaultValue="funding-needs" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="funding-needs" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Funding Needs</span>
            <span className="sm:hidden">Needs</span>
          </TabsTrigger>
          <TabsTrigger value="funding-sources" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Funding Sources</span>
            <span className="sm:hidden">Sources</span>
          </TabsTrigger>
          <TabsTrigger value="investment-readiness" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Investment Readiness</span>
            <span className="sm:hidden">Readiness</span>
          </TabsTrigger>
          <TabsTrigger value="funding-plan" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Funding Plan</span>
            <span className="sm:hidden">Plan</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="funding-needs">
          <GuidedNotePage
            title="Funding Needs Assessment"
            description="Calculate how much funding you need and when you'll need it"
            sections={[
              {
                title: "Startup Capital Requirements",
                prompts: [
                  "How much initial capital do you need to launch your business?",
                  "What one-time startup costs will you incur before opening?",
                  "How much working capital do you need for the first 6 months?",
                  "What equipment, inventory, or infrastructure investments are required?",
                  "How much personal living expenses do you need to cover during startup?"
                ],
                examples: [
                  "$75,000 total: $25k equipment, $20k inventory, $15k marketing, $15k working capital",
                  "Legal setup $2k, permits $500, initial website $3k, branding $2k, insurance $1k",
                  "6 months operating expenses $30k plus receivables float $10k",
                  "Manufacturing equipment $50k, initial inventory $15k, office setup $5k",
                  "Personal expenses $4k/month for 12 months while business ramps up"
                ]
              },
              {
                title: "Growth Capital Planning",
                prompts: [
                  "How much additional funding will you need for growth phases?",
                  "When will you need Series A, B, or additional funding rounds?",
                  "What growth milestones will trigger additional funding needs?",
                  "How will funding needs change as the business scales?",
                  "What's your plan if growth happens faster or slower than expected?"
                ],
                examples: [
                  "Year 1: $100k seed, Year 2: $500k Series A for team and marketing expansion",
                  "Series A when reaching $50k MRR, Series B at $200k MRR for market expansion",
                  "Hire 5 employees, expand to 3 cities, launch 2 new products",
                  "Linear scaling: each new market needs $100k, each new product line needs $200k",
                  "Faster: raise larger rounds earlier, Slower: bridge funding or extend runway"
                ]
              }
            ]}
            tips={[
              "Add 25-50% buffer to funding estimates for unexpected costs",
              "Plan funding timeline 6-9 months before you actually need the money",
              "Consider both best-case and worst-case funding scenarios"
            ]}
          />
        </TabsContent>

        <TabsContent value="funding-sources">
          <GuidedNotePage
            title="Funding Sources & Options"
            description="Explore different funding sources and evaluate their fit for your business"
            sections={[
              {
                title: "Self-Funding Options",
                prompts: [
                  "How much can you invest from personal savings or assets?",
                  "What friends and family might invest in your business?",
                  "How could you bootstrap or self-fund initial operations?",
                  "What personal assets could you leverage for business funding?",
                  "How will you balance personal financial risk with business needs?"
                ],
                examples: [
                  "Personal savings $30k, 401k loan $20k, home equity line $50k",
                  "3 family members willing to invest $10k each, 2 friends interested in $5k each",
                  "Start with consulting revenue, pre-sell products, minimize initial expenses",
                  "Refinance home for business capital, sell personal investments",
                  "Limit personal investment to amount you can afford to lose completely"
                ]
              },
              {
                title: "Debt Financing",
                prompts: [
                  "What bank loans or lines of credit could you qualify for?",
                  "Are there SBA loans or government programs for your business type?",
                  "What equipment financing or asset-based lending options exist?",
                  "How would you use debt vs equity financing strategically?",
                  "What are the terms and requirements for different debt options?"
                ],
                examples: [
                  "SBA 7(a) loan up to $350k at prime + 2%, business line of credit $50k",
                  "SBA microloans up to $50k, state economic development programs",
                  "Equipment financing for machinery, invoice factoring for cash flow",
                  "Use debt for assets, equity for growth capital and working capital",
                  "Personal guarantee required, 20% down payment, 7-year term, monthly payments"
                ]
              }
            ]}
            tips={[
              "Diversify funding sources to reduce dependence on any single source",
              "Understand the trade-offs between debt and equity financing",
              "Build relationships with potential funders before you need money"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}