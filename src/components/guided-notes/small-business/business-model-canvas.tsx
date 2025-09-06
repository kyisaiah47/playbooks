"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BusinessModelCanvas() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Business Model Canvas</h1>
        <p className="text-muted-foreground">Map out your business model with the 9 key building blocks that define your venture.</p>
      </div>

      <Tabs defaultValue="value-proposition" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="value-proposition" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Value Proposition</span>
            <span className="sm:hidden">Value</span>
          </TabsTrigger>
          <TabsTrigger value="customers" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Customer Segments</span>
            <span className="sm:hidden">Customers</span>
          </TabsTrigger>
          <TabsTrigger value="channels-revenue" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Channels & Revenue</span>
            <span className="sm:hidden">Channels</span>
          </TabsTrigger>
          <TabsTrigger value="resources-partners" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Resources & Partners</span>
            <span className="sm:hidden">Resources</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="value-proposition">
          <GuidedNotePage
            title="Value Proposition & Key Activities"
            description="Define what unique value you deliver and the key activities required"
            sections={[
              {
                title: "Core Value Proposition",
                prompts: [
                  "What specific problem does your business solve for customers?",
                  "What unique benefits or outcomes do you provide that competitors don't?",
                  "What jobs are customers trying to get done that you help with?",
                  "What pain points or frustrations do you eliminate or reduce?",
                  "How do you measure the value you deliver to customers?"
                ],
                examples: [
                  "Save small business owners 10 hours per week on bookkeeping through automated reconciliation",
                  "Only local bakery offering same-day custom cakes with gluten-free and vegan options",
                  "Help busy parents meal prep healthy dinners in 30 minutes or less",
                  "Eliminate the stress of finding reliable contractors by pre-vetting and guaranteeing work",
                  "Track customer retention rates, time savings, cost reductions, or satisfaction scores"
                ]
              },
              {
                title: "Key Activities & Capabilities",
                prompts: [
                  "What are the most important activities your business must do to deliver value?",
                  "What capabilities or expertise are essential to your business model?",
                  "What production, problem-solving, or platform activities are critical?",
                  "Which activities consume the most time and resources?",
                  "How do your key activities create competitive advantage?"
                ],
                examples: [
                  "Software development, customer support, marketing, and platform maintenance for SaaS",
                  "Recipe development, sourcing ingredients, food safety compliance for food business",
                  "Content creation for marketing, relationship building for consulting business",
                  "Manufacturing and quality control may require 60% of resources for product businesses",
                  "Proprietary algorithms, exclusive supplier relationships, or specialized expertise"
                ]
              },
              {
                title: "Product/Service Offering",
                prompts: [
                  "What specific products or services do you offer to deliver your value proposition?",
                  "How do your offerings connect to solve your customers' key problems?",
                  "What features or characteristics make your offering unique?",
                  "How might you package or bundle your offerings?",
                  "What additional services could complement your core offering?"
                ],
                examples: [
                  "Mobile app, web dashboard, API integration, and customer support for fintech solution",
                  "Core consulting plus training workshops and ongoing support retainer",
                  "Organic ingredients, small batch production, custom packaging design",
                  "Basic tier, premium tier with advanced features, enterprise custom solutions",
                  "Installation, training, maintenance contracts, or complementary products"
                ]
              }
            ]}
            tips={[
              "Focus on 1-3 core value propositions rather than trying to solve every problem",
              "Test your value proposition with real potential customers before finalizing",
              "Key activities should directly support your value proposition delivery",
              "Consider which activities you must do in-house vs. what you can outsource",
              "Your value proposition should be clear enough to explain in one sentence"
            ]}
          />
        </TabsContent>

        <TabsContent value="customers">
          <GuidedNotePage
            title="Customer Segments & Relationships"
            description="Define your target customers and how you'll build relationships with them"
            sections={[
              {
                title: "Customer Segments",
                prompts: [
                  "Who are your ideal customers and what characteristics do they share?",
                  "How can you segment your customers based on needs, behaviors, or demographics?",
                  "Which customer segment will you focus on first and why?",
                  "What size is each customer segment and how fast is it growing?",
                  "How do different segments have different needs or willingness to pay?"
                ],
                examples: [
                  "Small business owners (5-50 employees) in professional services who lack dedicated IT staff",
                  "Busy parents (ages 28-45) with household income $75k+ who value convenience over price",
                  "Start with local restaurants as they're easier to reach and have urgent pain points",
                  "Local market has 200 target businesses, growing 5% annually, vs national market of 50k",
                  "Enterprise needs compliance features and pays more, while SMBs prioritize ease of use and cost"
                ]
              },
              {
                title: "Customer Relationships",
                prompts: [
                  "What type of relationship does each customer segment expect?",
                  "How will you acquire new customers in each segment?",
                  "What does your customer onboarding process look like?",
                  "How will you retain customers and encourage repeat business?",
                  "What level of support or service do customers expect?"
                ],
                examples: [
                  "B2B expects dedicated account management, B2C expects self-service with chat support",
                  "Referrals and networking for high-value clients, digital marketing for volume segments",
                  "Welcome package, training session, 30-day check-in for business clients",
                  "Loyalty programs, regular check-ins, exclusive offers, or community building",
                  "24/7 chat for SaaS, phone support during business hours for professional services"
                ]
              },
              {
                title: "Customer Jobs, Pains & Gains",
                prompts: [
                  "What functional, emotional, and social jobs are customers trying to accomplish?",
                  "What are the biggest pains, frustrations, or risks customers experience?",
                  "What outcomes or benefits would make customers most happy?",
                  "How do customers currently solve these problems or get these jobs done?",
                  "What would make customers switch from their current solution to yours?"
                ],
                examples: [
                  "Functional: manage inventory; Emotional: feel confident in business decisions; Social: appear professional",
                  "Takes too long, costs too much, poor quality results, inconsistent service, hard to use",
                  "Save time, reduce costs, increase revenue, eliminate stress, gain status or recognition",
                  "Manual spreadsheets, expensive consultants, DIY solutions, or simply going without",
                  "10x better results, significantly lower cost, much easier to use, or solves additional problems"
                ]
              }
            ]}
            tips={[
              "Start with one primary customer segment and expand gradually",
              "Use interviews and surveys to validate your customer segment assumptions",
              "Different segments may need different marketing, pricing, and service approaches",
              "Document customer personas with specific details beyond basic demographics",
              "Focus on customers who have the problem urgently and budget to solve it"
            ]}
          />
        </TabsContent>

        <TabsContent value="channels-revenue">
          <GuidedNotePage
            title="Channels & Revenue Streams"
            description="Define how you'll reach customers and generate revenue"
            sections={[
              {
                title: "Distribution Channels",
                prompts: [
                  "How will customers discover your business and offerings?",
                  "What channels will you use to reach and acquire customers?",
                  "How will you deliver your products or services to customers?",
                  "Which channels are most cost-effective for each customer segment?",
                  "What partnerships could help you reach more customers?"
                ],
                examples: [
                  "Website SEO, social media marketing, local networking events, referral programs",
                  "Direct sales, online marketing, retail partnerships, or distribution agreements",
                  "In-person delivery, online platform, retail locations, or partner networks",
                  "Local customers via word-of-mouth, distant customers via digital marketing",
                  "Complementary businesses, industry associations, or existing service providers"
                ]
              },
              {
                title: "Revenue Streams",
                prompts: [
                  "How will your business generate revenue from each customer segment?",
                  "What pricing model makes most sense for your value proposition?",
                  "What are customers currently paying for similar solutions?",
                  "How might you create multiple revenue streams from the same customers?",
                  "What payment terms and methods will you accept?"
                ],
                examples: [
                  "One-time purchases, monthly subscriptions, project-based fees, or commission on transactions",
                  "Fixed pricing, usage-based, value-based, or freemium with premium upgrades",
                  "Research competitor pricing and what customers pay for current alternatives",
                  "Core service plus training, maintenance, premium features, or complementary products",
                  "Credit cards for small amounts, NET30 terms for businesses, financing for large purchases"
                ]
              },
              {
                title: "Go-to-Market Strategy",
                prompts: [
                  "What's your plan for launching and gaining initial customers?",
                  "How will you validate demand before full launch?",
                  "What marketing tactics will you use in the first 6 months?",
                  "How will you build credibility and trust with new customers?",
                  "What sales process will you use to convert prospects to customers?"
                ],
                examples: [
                  "Soft launch with beta customers, gather feedback, then broader marketing push",
                  "Pre-orders, pilot programs, or free trials to test market response",
                  "Content marketing, local events, partnerships, targeted ads, or direct outreach",
                  "Customer testimonials, case studies, certifications, guarantees, or free consultations",
                  "Lead qualification, discovery call, proposal/demo, negotiation, onboarding"
                ]
              }
            ]}
            tips={[
              "Test multiple channels to find the most effective ones for your business",
              "Price based on value delivered to customers, not just cost plus markup",
              "Consider both direct and indirect channels to reach more customers",
              "Start with simple pricing and payment terms, then optimize based on feedback",
              "Track customer acquisition cost and lifetime value for each channel"
            ]}
          />
        </TabsContent>

        <TabsContent value="resources-partners">
          <GuidedNotePage
            title="Key Resources, Partners & Cost Structure"
            description="Identify essential resources, partnerships, and your cost structure"
            sections={[
              {
                title: "Key Resources",
                prompts: [
                  "What physical, intellectual, human, and financial resources are essential?",
                  "What assets must you own versus rent or access through partnerships?",
                  "What technology, equipment, or infrastructure do you need?",
                  "What expertise, skills, or knowledge are critical to success?",
                  "How will you acquire and maintain these key resources?"
                ],
                examples: [
                  "Physical: manufacturing equipment, retail space, inventory, delivery vehicles",
                  "Own proprietary software but lease office space and equipment",
                  "E-commerce platform, payment processing, customer database, analytics tools",
                  "Industry expertise, technical skills, relationships, certifications, or trade secrets",
                  "Hire employees, train team, purchase equipment, license software, or build partnerships"
                ]
              },
              {
                title: "Key Partnerships",
                prompts: [
                  "What strategic partnerships could accelerate your business growth?",
                  "Which activities or resources could you access through partners instead of building in-house?",
                  "What supplier relationships are critical to your operations?",
                  "How might partnerships help you reach new markets or customer segments?",
                  "What joint ventures or alliances could create mutual value?"
                ],
                examples: [
                  "Technology integration partners, distribution partners, or marketing alliances",
                  "Outsource manufacturing, customer service, fulfillment, or specialized expertise",
                  "Raw material suppliers, service providers, or exclusive vendor relationships",
                  "Partner with complementary businesses to cross-sell or bundle offerings",
                  "Co-develop products, share resources, or jointly bid on large contracts"
                ]
              },
              {
                title: "Cost Structure",
                prompts: [
                  "What are your major cost categories and how do they behave?",
                  "Which costs are fixed (same regardless of volume) versus variable?",
                  "How do costs change as you scale up your business?",
                  "What's the minimum viable cost structure to get started?",
                  "Where might you achieve economies of scale or cost advantages?"
                ],
                examples: [
                  "Personnel costs, materials, rent, marketing, technology, insurance, professional services",
                  "Fixed: rent, salaries, insurance; Variable: materials, commissions, shipping",
                  "Some costs increase linearly (materials) while others have step functions (staff)",
                  "Start with essential costs only: core team, basic tools, minimum viable product",
                  "Volume discounts from suppliers, shared resources, automation, or operational efficiency"
                ]
              },
              {
                title: "Risk Assessment",
                prompts: [
                  "What key assumptions does your business model rely on?",
                  "What could go wrong that would significantly impact your business?",
                  "How dependent are you on specific resources, partners, or market conditions?",
                  "What backup plans do you have for critical business functions?",
                  "How will you validate and de-risk your key assumptions?"
                ],
                examples: [
                  "Customer demand exists, pricing is acceptable, costs are manageable, competition is limited",
                  "Key partner goes out of business, economic downturn, new regulations, technology changes",
                  "Single supplier for critical materials, key employee, one major customer, specific technology",
                  "Alternative suppliers, cross-trained team members, financial reserves, insurance coverage",
                  "Customer interviews, market testing, pilot programs, gradual scaling instead of big bets"
                ]
              }
            ]}
            tips={[
              "Focus on resources and partnerships that create competitive advantage",
              "Understand your unit economics: revenue and costs per customer or transaction",
              "Start lean and add resources/complexity as you validate demand",
              "Build relationships with potential partners before you need them",
              "Regularly stress-test your business model assumptions and have contingency plans"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}