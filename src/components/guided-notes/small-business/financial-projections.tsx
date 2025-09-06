"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FinancialProjections() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Financial Projections</h1>
        <p className="text-muted-foreground">Create realistic financial forecasts and understand your business&apos;s financial requirements.</p>
      </div>

      <Tabs defaultValue="revenue-model" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="revenue-model" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Revenue Model</span>
            <span className="sm:hidden">Revenue</span>
          </TabsTrigger>
          <TabsTrigger value="cost-structure" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Cost Structure</span>
            <span className="sm:hidden">Costs</span>
          </TabsTrigger>
          <TabsTrigger value="projections" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">3-Year Projections</span>
            <span className="sm:hidden">Forecast</span>
          </TabsTrigger>
          <TabsTrigger value="scenarios" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Scenarios</span>
            <span className="sm:hidden">Scenarios</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="revenue-model">
          <GuidedNotePage
            title="Revenue Model & Unit Economics"
            description="Define how your business will generate revenue and understand unit economics"
            sections={[
              {
                title: "Revenue Streams",
                prompts: [
                  "What are your primary revenue streams and how do they work?",
                  "How will you price your products or services?",
                  "What payment terms and collection processes will you use?",
                  "How will revenue streams evolve as your business grows?",
                  "What seasonal or cyclical factors affect your revenue?"
                ],
                examples: [
                  "Monthly SaaS subscriptions $50-200, one-time setup fees $500, professional services $150/hour",
                  "Value-based pricing for outcomes, competitive pricing vs alternatives, premium for specialized features",
                  "Credit card payments for small amounts, NET30 for enterprise, annual prepay discounts",
                  "Start with services, add products, expand to adjacent markets, develop recurring revenue",
                  "B2B software slower in Q4/Q1 due to budget cycles, retail peaks in Q4, services steady year-round"
                ]
              },
              {
                title: "Customer Acquisition & Lifetime Value",
                prompts: [
                  "How much does it cost to acquire a new customer?",
                  "What&apos;s the lifetime value of your average customer?",
                  "How long do customers typically stay with your business?",
                  "What factors drive customer retention and repeat purchases?",
                  "How will you improve unit economics over time?"
                ],
                examples: [
                  "CAC: $200 through digital marketing, $500 through sales team, $50 through referrals",
                  "LTV: $2,400 based on $200/month subscription with 12-month average retention",
                  "SaaS customers: 18 months average, consulting clients: 24 months, product sales: one-time",
                  "Product quality, customer success, regular communication, competitive pricing, feature updates",
                  "Reduce CAC through referrals, increase LTV through retention programs, optimize pricing"
                ]
              },
              {
                title: "Pricing Strategy",
                prompts: [
                  "How did you determine your pricing levels?",
                  "What pricing model best fits your value proposition and market?",
                  "How does your pricing compare to competitors?",
                  "How will you test and optimize pricing over time?",
                  "What discounting or promotional strategies will you use?"
                ],
                examples: [
                  "Cost-plus analysis, competitor benchmarking, customer value assessment, willingness-to-pay research",
                  "Subscription for predictable revenue, usage-based for scaling value, tiered for different segments",
                  "Premium pricing 20% above competitors justified by superior features/service",
                  "A/B testing different price points, annual vs monthly pricing, freemium conversion optimization",
                  "Early adopter discounts, volume pricing, seasonal promotions, referral incentives"
                ]
              },
              {
                title: "Revenue Forecasting",
                prompts: [
                  "How will you forecast monthly and annual revenue?",
                  "What assumptions drive your revenue projections?",
                  "How will you track actual vs. projected revenue?",
                  "What leading indicators predict revenue performance?",
                  "How will you adjust forecasts based on market feedback?"
                ],
                examples: [
                  "Bottom-up: customers × average revenue, top-down: market size × market share assumption",
                  "Customer acquisition rate, retention rate, average selling price, seasonal factors",
                  "Monthly variance analysis, rolling forecasts, pipeline tracking, cohort analysis",
                  "Website traffic, trial signups, sales qualified leads, proposal conversion rates",
                  "Regular forecast reviews, scenario modeling, sensitivity analysis on key assumptions"
                ]
              }
            ]}
            tips={[
              "Focus on creating multiple revenue streams to reduce risk",
              "Track unit economics (CAC and LTV) closely as they predict profitability",
              "Test pricing with real customers before committing to a strategy",
              "Build revenue forecasts bottom-up from customer acquisition assumptions",
              "Plan for seasonality and cyclical factors in your industry"
            ]}
          />
        </TabsContent>

        <TabsContent value="cost-structure">
          <GuidedNotePage
            title="Cost Structure & Operating Expenses"
            description="Identify and project all business costs and expenses"
            sections={[
              {
                title: "Fixed Costs",
                prompts: [
                  "What are your fixed costs that remain constant regardless of sales volume?",
                  "How much will you spend on rent, insurance, and other overhead?",
                  "What are your core team salary and benefit costs?",
                  "What technology, software, and equipment costs are fixed?",
                  "How will fixed costs change as you scale the business?"
                ],
                examples: [
                  "Office rent $3,000/month, business insurance $500/month, accounting software $100/month",
                  "Rent varies by location, insurance based on business type and coverage needs",
                  "Founder salary $50k, employees $60-80k plus 25% for benefits and taxes",
                  "Software subscriptions $500/month, equipment leases $200/month, website hosting $50/month",
                  "Add staff in chunks, lease larger office at growth milestones, increase software licenses"
                ]
              },
              {
                title: "Variable Costs",
                prompts: [
                  "What costs increase directly with sales or production volume?",
                  "What are your cost of goods sold (COGS) or service delivery costs?",
                  "How much do you pay in transaction fees, shipping, or fulfillment costs?",
                  "What marketing costs vary with customer acquisition?",
                  "How will variable costs per unit change with scale?"
                ],
                examples: [
                  "Materials $10 per product, payment processing 2.9% of revenue, shipping $5 per order",
                  "COGS for product business, contractor costs for service business, hosting costs for software",
                  "Credit card fees, shipping carriers, third-party fulfillment, packaging materials",
                  "Paid advertising, sales commissions, lead generation costs, trade show expenses",
                  "Volume discounts from suppliers, economies of scale in fulfillment, negotiated rates"
                ]
              },
              {
                title: "Operating Expenses",
                prompts: [
                  "What marketing and sales expenses do you need to acquire customers?",
                  "What administrative and general expenses will you have?",
                  "How much will you invest in research and development?",
                  "What professional services (legal, accounting, consulting) will you need?",
                  "What unexpected or miscellaneous expenses should you budget for?"
                ],
                examples: [
                  "Marketing: $2,000/month ads, $500 tools, $1,000 content creation, $1,500 events/networking",
                  "Admin: office supplies $200, utilities $300, phone/internet $150, bank fees $50",
                  "R&D: 15% of revenue for product development, new feature development, technology upgrades",
                  "Legal $1,000 setup, accounting $500/month, business consulting $200/hour as needed",
                  "Buffer 5-10% for unexpected expenses, equipment repairs, emergency costs, opportunities"
                ]
              },
              {
                title: "Capital Requirements",
                prompts: [
                  "What initial capital investments do you need to start operations?",
                  "How much working capital do you need to fund day-to-day operations?",
                  "What equipment, technology, or infrastructure investments are required?",
                  "How will capital requirements change as the business grows?",
                  "What&apos;s your plan for funding ongoing capital needs?"
                ],
                examples: [
                  "Initial inventory $10,000, equipment $5,000, setup costs $3,000, marketing launch $2,000",
                  "3 months operating expenses in cash, accounts receivable financing, inventory buffers",
                  "Computers $2,000, software licenses $1,000, office furniture $3,000, production equipment $15,000",
                  "Additional equipment for capacity, larger facility, more inventory, additional staff",
                  "Cash flow from operations, business loans, equipment financing, investor funding"
                ]
              }
            ]}
            tips={[
              "Separate fixed and variable costs to understand your break-even point",
              "Track cost per unit and identify opportunities for economies of scale",
              "Build in buffers for unexpected expenses, especially in early months",
              "Negotiate favorable terms with suppliers and service providers",
              "Regular review costs vs. budget and look for optimization opportunities"
            ]}
          />
        </TabsContent>

        <TabsContent value="projections">
          <GuidedNotePage
            title="3-Year Financial Projections"
            description="Create detailed financial forecasts for your first three years"
            sections={[
              {
                title: "Revenue Projections",
                prompts: [
                  "What are your monthly revenue projections for the first year?",
                  "How do you expect revenue to grow in years 2 and 3?",
                  "What assumptions drive your revenue growth projections?",
                  "How will different revenue streams contribute over time?",
                  "What milestones or events could accelerate or slow revenue growth?"
                ],
                examples: [
                  "Month 1: $1,000, Month 6: $10,000, Month 12: $25,000 based on customer acquisition rates",
                  "Year 1: $150k, Year 2: $400k, Year 3: $800k assuming market traction and team scaling",
                  "10 new customers/month growing to 50/month, $200 average revenue per customer",
                  "Year 1: 80% services, Year 2: 60% services + 40% products, Year 3: balanced mix",
                  "Major client wins, product launches, geographic expansion, economic conditions"
                ]
              },
              {
                title: "Expense Projections",
                prompts: [
                  "How will your expense structure evolve over three years?",
                  "When will you need to hire additional team members?",
                  "How will marketing and sales expenses scale with growth?",
                  "What major investments or purchases are planned?",
                  "How will you control costs while scaling revenue?"
                ],
                examples: [
                  "Year 1: $120k expenses, Year 2: $280k, Year 3: $550k with team growth and infrastructure",
                  "Add sales person Month 6, developer Month 10, customer success Month 15",
                  "Marketing starts 10% of revenue, scales to 15% as you invest in growth",
                  "Office lease Year 2, major software licenses Year 1, equipment upgrades Year 3",
                  "Negotiate volume discounts, automate processes, outsource non-core functions"
                ]
              },
              {
                title: "Profitability Analysis",
                prompts: [
                  "When do you project reaching break-even and positive cash flow?",
                  "What are your projected gross margins and how do they improve over time?",
                  "How much profit do you expect to generate in years 2 and 3?",
                  "What key metrics will you track to ensure profitability?",
                  "How sensitive is profitability to changes in key assumptions?"
                ],
                examples: [
                  "Break-even Month 18, positive cash flow Month 20 based on revenue and expense projections",
                  "Gross margin starts 60%, improves to 75% through economies of scale and pricing optimization",
                  "Year 2: $120k profit (30% margin), Year 3: $250k profit (31% margin)",
                  "Monthly recurring revenue, customer acquisition cost, lifetime value, churn rate",
                  "10% change in pricing affects profit by 20%, 5% change in churn affects LTV by 15%"
                ]
              },
              {
                title: "Cash Flow Projections",
                prompts: [
                  "What are your monthly cash flow projections for the first year?",
                  "How much cash will you need to fund operations before profitability?",
                  "When will you need additional funding or financing?",
                  "What are your cash flow risks and how will you mitigate them?",
                  "How will you manage seasonal or cyclical cash flow variations?"
                ],
                examples: [
                  "Start with $50k, burn $8k/month initially, need additional $30k by Month 6",
                  "Total funding need $100k to reach cash flow positive by Month 20",
                  "Series A funding Month 12 to accelerate growth, line of credit for working capital",
                  "Slow customer payments, seasonal dips, large expense timing - maintain 3-month cash buffer",
                  "Build cash reserves during peak seasons, arrange credit lines, adjust expenses seasonally"
                ]
              }
            ]}
            tips={[
              "Build projections monthly for year 1, quarterly for years 2-3",
              "Be conservative with revenue projections and realistic with expenses",
              "Track key metrics monthly and adjust projections based on actual performance",
              "Plan for cash flow gaps and arrange financing before you need it",
              "Update projections regularly as you learn more about your business"
            ]}
          />
        </TabsContent>

        <TabsContent value="scenarios">
          <GuidedNotePage
            title="Scenario Planning & Sensitivity Analysis"
            description="Model different business scenarios to understand risks and opportunities"
            sections={[
              {
                title: "Best Case Scenario",
                prompts: [
                  "What would your financials look like if everything goes better than expected?",
                  "What assumptions would drive above-plan performance?",
                  "How would you scale operations to handle faster growth?",
                  "What additional investment would be needed for accelerated growth?",
                  "What risks come with rapid growth that you should prepare for?"
                ],
                examples: [
                  "50% faster customer acquisition, 20% higher average selling prices, 90% retention rate",
                  "Viral marketing success, major customer wins, competitor stumbles, economic boom",
                  "Hire aggressively, invest in infrastructure, expand product line, enter new markets",
                  "Additional $200k for inventory, staff, marketing to capture growth opportunity",
                  "Cash flow strain, quality issues, team burnout, customer service challenges"
                ]
              },
              {
                title: "Base Case Scenario",
                prompts: [
                  "What&apos;s your most realistic projection based on current knowledge?",
                  "What assumptions are you most confident about?",
                  "How does this scenario align with industry benchmarks?",
                  "What would need to happen for this scenario to play out?",
                  "How will you track whether you&apos;re on track for base case performance?"
                ],
                examples: [
                  "Steady 15% monthly growth, $200 ARPU, 85% retention, break-even Month 18",
                  "Market demand exists, pricing is acceptable, team execution is solid",
                  "Growth rate matches industry average, margins align with comparable businesses",
                  "Consistent execution of marketing and sales plan, product-market fit achieved",
                  "Monthly dashboard tracking revenue, customers, CAC, LTV, churn, cash burn"
                ]
              },
              {
                title: "Worst Case Scenario",
                prompts: [
                  "What if things go significantly worse than expected?",
                  "What external factors could severely impact your business?",
                  "How low could revenue go while still keeping the business viable?",
                  "What costs could you cut if revenue underperforms?",
                  "What&apos;s your contingency plan if the worst case scenario occurs?"
                ],
                examples: [
                  "50% slower growth, pricing pressure, high churn, extended time to profitability",
                  "Economic recession, new regulations, major competitor launch, technology disruption",
                  "Minimum viable revenue $5k/month to cover essential costs with skeleton crew",
                  "Cut marketing spend, reduce staff, downsize office, eliminate non-essential expenses",
                  "Pivot business model, seek emergency funding, merge with competitor, wind down gracefully"
                ]
              },
              {
                title: "Sensitivity Analysis",
                prompts: [
                  "Which assumptions have the biggest impact on your financial projections?",
                  "How would a 20% change in key variables affect profitability?",
                  "What are the break-even points for critical business metrics?",
                  "Which risks should you monitor most closely?",
                  "How will you adjust strategy based on early performance indicators?"
                ],
                examples: [
                  "Customer acquisition rate and average selling price have highest impact on revenue",
                  "20% higher churn reduces LTV by 35%, 20% lower pricing reduces profit by 40%",
                  "Need 85% gross margin to be viable, must acquire 25+ customers/month to scale",
                  "Customer churn rate, competitive pricing pressure, key employee retention",
                  "If CAC > $300, pivot to referral marketing; if churn > 15%, focus on product quality"
                ]
              }
            ]}
            tips={[
              "Model at least three scenarios: best case, base case, and worst case",
              "Identify the 3-5 assumptions that most impact your financial projections",
              "Plan specific actions for different scenarios before they occur",
              "Use scenario planning to stress-test your business model",
              "Update scenarios regularly as you gather real market data"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}