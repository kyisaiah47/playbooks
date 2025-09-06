"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CompetitiveAnalysis() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Competitive Analysis</h1>
        <p className="text-muted-foreground">Analyze your competition and identify opportunities to differentiate your business.</p>
      </div>

      <Tabs defaultValue="competitor-mapping" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="competitor-mapping" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Competitor Mapping</span>
            <span className="sm:hidden">Mapping</span>
          </TabsTrigger>
          <TabsTrigger value="swot-analysis" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">SWOT Analysis</span>
            <span className="sm:hidden">SWOT</span>
          </TabsTrigger>
          <TabsTrigger value="positioning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Positioning</span>
            <span className="sm:hidden">Position</span>
          </TabsTrigger>
          <TabsTrigger value="monitoring" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Monitoring</span>
            <span className="sm:hidden">Monitor</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="competitor-mapping">
          <GuidedNotePage
            title="Competitor Identification & Mapping"
            description="Identify and categorize your direct and indirect competitors"
            sections={[
              {
                title: "Direct Competitors",
                prompts: [
                  "Who are your main direct competitors offering similar solutions?",
                  "What are their key products, services, and pricing models?",
                  "How large are these competitors and what's their market share?",
                  "What are their main strengths and competitive advantages?",
                  "Where do they have weaknesses or gaps in their offering?"
                ],
                examples: [
                  "QuickBooks, FreshBooks, Xero for accounting software - similar features and target market",
                  "SaaS subscriptions $10-50/month, on-premise software $200-500, some offer freemium",
                  "QuickBooks dominates with 70% small business market share, others have 5-15% each",
                  "Brand recognition, extensive features, integrations, established customer base",
                  "Complex user interface, poor customer support, expensive add-ons, limited mobile access"
                ]
              },
              {
                title: "Indirect Competitors",
                prompts: [
                  "What alternative solutions do customers use instead of your category?",
                  "Which companies solve the same problem differently?",
                  "What non-obvious competitors might customers consider?",
                  "How do these alternatives compare on price and convenience?",
                  "Why might customers prefer these alternatives over your solution?"
                ],
                examples: [
                  "Excel spreadsheets, manual bookkeeping, hiring accountants, generic business software",
                  "Freelance bookkeepers, accounting firms, business consultants, DIY approaches",
                  "Banks offering basic business tools, payment processors with reporting, tax software",
                  "Often cheaper upfront but more time-consuming, less accurate, or limited functionality",
                  "Lower learning curve, personal relationships, perceived control, avoiding technology"
                ]
              },
              {
                title: "Competitive Landscape Structure",
                prompts: [
                  "How would you categorize competitors by size, focus, or business model?",
                  "Which competitors target the same customer segments as you?",
                  "Who are the market leaders, challengers, and niche players?",
                  "What emerging competitors or new entrants should you watch?",
                  "How consolidated or fragmented is your competitive landscape?"
                ],
                examples: [
                  "Enterprise leaders, mid-market challengers, SMB specialists, industry-specific solutions",
                  "All target small businesses, but some focus on specific industries or business types",
                  "Leaders: established brands with 20%+ share; Challengers: growing fast; Niche: specialized",
                  "Well-funded startups, tech giants expanding, international players entering market",
                  "Fragmented market with room for specialization vs. consolidated with high barriers"
                ]
              },
              {
                title: "Competitive Intelligence Gathering",
                prompts: [
                  "What sources will you use to gather competitive intelligence?",
                  "How will you analyze competitor websites, marketing, and customer reviews?",
                  "What can you learn from competitor job postings and press releases?",
                  "How will you track competitor pricing and feature updates?",
                  "What legal and ethical boundaries will guide your research?"
                ],
                examples: [
                  "Competitor websites, customer reviews, industry reports, social media, trade shows",
                  "Feature comparisons, pricing pages, customer testimonials, marketing messages, SEO strategy",
                  "Job posts reveal growth plans and priorities, press releases announce new features or funding",
                  "Set up Google alerts, monitor their websites, track their advertising, follow social media",
                  "Use publicly available information only, don't misrepresent identity, respect intellectual property"
                ]
              }
            ]}
            tips={[
              "Include both direct competitors and alternative solutions customers might choose",
              "Focus on competitors that target your specific customer segments",
              "Update competitive analysis regularly as the landscape changes quickly",
              "Consider both established players and emerging threats",
              "Use multiple sources to get a complete picture of each competitor"
            ]}
          />
        </TabsContent>

        <TabsContent value="swot-analysis">
          <GuidedNotePage
            title="SWOT Analysis & Competitive Comparison"
            description="Analyze strengths, weaknesses, opportunities, and threats relative to competitors"
            sections={[
              {
                title: "Your Strengths vs. Competitors",
                prompts: [
                  "What unique strengths or advantages do you have over competitors?",
                  "Where do you outperform competitors in features, quality, or service?",
                  "What resources, capabilities, or assets give you competitive advantage?",
                  "How do your team's experience and expertise compare to competitors?",
                  "What customer relationships or partnerships differentiate you?"
                ],
                examples: [
                  "Industry-specific expertise competitors lack, better user experience design",
                  "Faster implementation, more responsive customer support, cleaner interface",
                  "Proprietary technology, exclusive partnerships, lower cost structure, agile processes",
                  "10+ years industry experience, technical expertise, customer-centric culture",
                  "Strategic partnerships with industry associations, existing customer relationships"
                ]
              },
              {
                title: "Your Weaknesses vs. Competitors",
                prompts: [
                  "Where are you weaker than established competitors?",
                  "What resources, capabilities, or features are you lacking?",
                  "How do your brand recognition and customer base compare?",
                  "What operational or financial constraints limit your competitiveness?",
                  "Where might customers prefer competitors over your offering?"
                ],
                examples: [
                  "Limited brand recognition, smaller feature set, less integration options",
                  "Smaller team, limited capital, newer technology platform, fewer partnerships",
                  "Unknown brand vs. established market leaders with strong customer loyalty",
                  "Limited marketing budget, fewer sales resources, smaller support team",
                  "Competitors offer lower prices, more features, or better-known brands"
                ]
              },
              {
                title: "Market Opportunities",
                prompts: [
                  "What market gaps or underserved segments have you identified?",
                  "Where are competitors weak or creating customer dissatisfaction?",
                  "What trends create new opportunities for differentiation?",
                  "How might you leverage competitor weaknesses to your advantage?",
                  "What new customer needs are emerging that competitors haven't addressed?"
                ],
                examples: [
                  "Small businesses in specific industries lack tailored solutions",
                  "Customers complain about competitor complexity, poor support, or high prices",
                  "Mobile-first approach, AI integration, or sustainability focus",
                  "Offer simpler alternative to over-featured solutions, better customer service",
                  "Remote work creating need for distributed team tools, compliance automation"
                ]
              },
              {
                title: "Competitive Threats",
                prompts: [
                  "What threats from competitors could impact your business?",
                  "How might competitors respond to your market entry?",
                  "What could competitors do that would make your solution less attractive?",
                  "Which competitive moves would be hardest for you to counter?",
                  "How might new entrants or substitute solutions threaten your position?"
                ],
                examples: [
                  "Price wars, feature copying, exclusive partnership deals, aggressive marketing",
                  "Lower prices, add similar features, improve weak areas, target your customers",
                  "Bundle with other popular products, offer freemium versions, improve user experience",
                  "Massive marketing spend, exclusive supplier agreements, regulatory influence",
                  "Tech giants entering market, platform plays, AI disruption, regulatory changes"
                ]
              }
            ]}
            tips={[
              "Be honest about weaknesses - acknowledging them helps you address them",
              "Look for opportunities where competitor weaknesses align with your strengths",
              "Consider both current competitors and potential future threats",
              "Update your SWOT analysis as you learn more about the market",
              "Use SWOT insights to inform your strategy and positioning decisions"
            ]}
          />
        </TabsContent>

        <TabsContent value="positioning">
          <GuidedNotePage
            title="Competitive Positioning & Differentiation"
            description="Define how you'll position your business relative to competitors"
            sections={[
              {
                title: "Differentiation Strategy",
                prompts: [
                  "How will you differentiate your business from competitors?",
                  "What unique value proposition sets you apart?",
                  "Which competitive advantages are most important to customers?",
                  "How will you communicate your differentiation to the market?",
                  "What evidence supports your differentiation claims?"
                ],
                examples: [
                  "Only solution built specifically for restaurants with industry-specific features",
                  "10x faster setup time through automated data import and AI-powered configuration",
                  "Customers prioritize ease of use and customer support over advanced features",
                  "Case studies showing time savings, testimonials about support quality, feature comparisons",
                  "Customer surveys, performance benchmarks, time-to-value metrics, satisfaction scores"
                ]
              },
              {
                title: "Positioning Map",
                prompts: [
                  "How would you map competitors on key customer decision factors?",
                  "What positioning gaps exist in the current market?",
                  "Where do you want to position your business on this map?",
                  "How does your desired position align with customer needs?",
                  "What would you need to change to achieve your desired positioning?"
                ],
                examples: [
                  "Map on price vs. ease of use: expensive/complex, expensive/simple, cheap/complex, cheap/simple",
                  "Gap in affordable yet feature-rich solutions, or simple but powerful offerings",
                  "Position as 'simple but powerful' - easier than complex competitors, more capable than basic ones",
                  "Small businesses want power without complexity, willing to pay moderate price for value",
                  "Improve user interface design, add key features, optimize pricing strategy"
                ]
              },
              {
                title: "Competitive Response Strategy",
                prompts: [
                  "How will you respond when competitors copy your features or approach?",
                  "What sustainable competitive advantages are hardest for competitors to replicate?",
                  "How will you stay ahead as the market and competition evolve?",
                  "What will you do if competitors launch aggressive pricing or marketing campaigns?",
                  "How will you maintain differentiation as you scale?"
                ],
                examples: [
                  "Focus on continuous innovation, build deeper customer relationships, create network effects",
                  "Brand reputation, customer data, proprietary algorithms, exclusive partnerships, team expertise",
                  "Regular customer feedback, rapid iteration, strategic partnerships, technology investment",
                  "Compete on value not price, double down on customer success, find new differentiation angles",
                  "Maintain culture and values, invest in R&D, build platform ecosystem"
                ]
              },
              {
                title: "Go-to-Market Positioning",
                prompts: [
                  "How will you position your business in your marketing and sales efforts?",
                  "What messaging will resonate most with your target customers?",
                  "How will you frame the competitive comparison in your favor?",
                  "What proof points will you use to support your positioning claims?",
                  "How will you handle direct competitive questions from prospects?"
                ],
                examples: [
                  "Position as 'the simple solution that actually works' vs. complex or inadequate alternatives",
                  "Focus on outcomes: 'Save 10 hours per week' rather than features like 'automated reporting'",
                  "Compare on customer results and satisfaction, not just features or price",
                  "Customer case studies, performance benchmarks, awards, certifications, testimonials",
                  "Acknowledge competitor strengths but highlight where you excel and why it matters"
                ]
              }
            ]}
            tips={[
              "Choose differentiation factors that matter most to your target customers",
              "Make sure your differentiation is sustainable and hard to copy",
              "Test your positioning messages with real customers before finalizing",
              "Be prepared to evolve your positioning as the market changes",
              "Focus on a few key differentiators rather than claiming to be better at everything"
            ]}
          />
        </TabsContent>

        <TabsContent value="monitoring">
          <GuidedNotePage
            title="Competitive Monitoring & Intelligence"
            description="Set up systems to track competitors and market changes"
            sections={[
              {
                title: "Monitoring Systems & Tools",
                prompts: [
                  "What systems will you use to track competitor activities?",
                  "How will you monitor competitor pricing, features, and marketing?",
                  "What tools can help automate competitive intelligence gathering?",
                  "How often will you review and update competitive information?",
                  "Who will be responsible for competitive monitoring and analysis?"
                ],
                examples: [
                  "Google Alerts for company news, social media monitoring, website change detection",
                  "Regular website reviews, newsletter subscriptions, price monitoring tools, ad tracking",
                  "SEMrush for SEO/ads, SimilarWeb for traffic, Klenty for sales emails, social listening tools",
                  "Weekly quick scans, monthly detailed analysis, quarterly strategy updates",
                  "Marketing team does daily monitoring, product team analyzes features, CEO reviews strategy"
                ]
              },
              {
                title: "Key Metrics to Track",
                prompts: [
                  "What competitive metrics are most important for your business?",
                  "How will you track competitor market share and growth?",
                  "What customer satisfaction or loyalty metrics should you monitor?",
                  "How will you measure your competitive positioning over time?",
                  "What early warning signals indicate competitive threats?"
                ],
                examples: [
                  "Market share, customer acquisition rates, pricing changes, feature releases, funding rounds",
                  "Industry reports, customer surveys, web traffic analysis, job posting growth",
                  "Review site ratings, NPS scores, customer churn rates, support response times",
                  "Brand awareness surveys, customer preference studies, win/loss analysis",
                  "Sudden pricing changes, executive hires, major partnerships, technology acquisitions"
                ]
              },
              {
                title: "Customer Intelligence",
                prompts: [
                  "How will you gather intelligence from customers about competitors?",
                  "What can you learn from prospects who choose competitors?",
                  "How will you track customer defections to competitors?",
                  "What questions will you ask customers about competitive alternatives?",
                  "How will you use customer feedback to improve your competitive position?"
                ],
                examples: [
                  "Sales team debriefs, customer interviews, exit surveys, competitive objection tracking",
                  "Lost deal analysis, prospect feedback sessions, competitive win/loss reviews",
                  "Churn analysis, exit interviews, reasons for cancellation tracking",
                  "What alternatives did you consider? What almost made you choose someone else?",
                  "Feature prioritization, messaging refinement, sales training, product roadmap"
                ]
              },
              {
                title: "Strategic Response Planning",
                prompts: [
                  "How will you use competitive intelligence to inform strategy decisions?",
                  "What triggers would cause you to change your competitive strategy?",
                  "How will you decide when to respond to competitive moves vs. stay the course?",
                  "What scenarios have you planned responses for?",
                  "How will you balance competitive response with your own strategic vision?"
                ],
                examples: [
                  "Product roadmap prioritization, pricing decisions, marketing messaging, partnership strategy",
                  "Major competitor pricing changes, new feature releases, market entry, acquisition activity",
                  "Respond to direct customer impact, ignore minor feature copies, monitor market reaction",
                  "Price war, feature arms race, new entrant with significant funding, industry consolidation",
                  "Stay true to core vision while adapting tactics, don't let competitors dictate your strategy"
                ]
              }
            ]}
            tips={[
              "Set up automated monitoring to catch competitive changes quickly",
              "Focus on tracking metrics that directly impact your business strategy",
              "Get competitive intelligence from multiple sources including customers",
              "Don't overreact to every competitive move - stay focused on your strategy",
              "Use competitive insights to improve your offering, not just copy competitors"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}