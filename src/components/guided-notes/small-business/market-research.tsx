"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MarketResearch() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Market Research & Analysis</h1>
        <p className="text-muted-foreground">Research your market, understand your customers, and validate demand for your business idea.</p>
      </div>

      <Tabs defaultValue="market-size" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="market-size" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Market Size</span>
            <span className="sm:hidden">Size</span>
          </TabsTrigger>
          <TabsTrigger value="customer-research" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Customer Research</span>
            <span className="sm:hidden">Customers</span>
          </TabsTrigger>
          <TabsTrigger value="demand-validation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Demand Validation</span>
            <span className="sm:hidden">Demand</span>
          </TabsTrigger>
          <TabsTrigger value="market-trends" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Market Trends</span>
            <span className="sm:hidden">Trends</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="market-size">
          <GuidedNotePage
            title="Market Size & Opportunity Assessment"
            description="Analyze the size and potential of your target market"
            sections={[
              {
                title: "Total Addressable Market (TAM)",
                prompts: [
                  "What is the total market size for your industry or product category?",
                  "How fast is this market growing or shrinking annually?",
                  "What are the key factors driving market growth or decline?",
                  "How is the market geographically distributed?",
                  "What sources provide reliable market size data for your industry?"
                ],
                examples: [
                  "$50 billion global market for small business accounting software, growing 8% annually",
                  "Local food delivery market declined 15% post-pandemic but stabilizing in urban areas",
                  "Remote work trends driving demand for home office furniture and productivity tools",
                  "70% of market concentrated in major metropolitan areas, rural markets underserved",
                  "Industry reports from IBISWorld, Statista, trade associations, or government data"
                ]
              },
              {
                title: "Serviceable Addressable Market (SAM)",
                prompts: [
                  "What portion of the total market can your business realistically target?",
                  "What geographic areas will you focus on initially?",
                  "Which customer segments within the broader market will you serve?",
                  "What constraints limit your accessible market size?",
                  "How might your serviceable market expand over time?"
                ],
                examples: [
                  "Small businesses (5-50 employees) in English-speaking countries represents 20% of TAM",
                  "Starting with metropolitan area of 2 million people, expanding to 5 nearby cities",
                  "Focus on professional services firms before expanding to retail or manufacturing",
                  "Limited by regulatory requirements, language barriers, or distribution capabilities",
                  "Add new geographies, customer segments, or product lines as business matures"
                ]
              },
              {
                title: "Serviceable Obtainable Market (SOM)",
                prompts: [
                  "What market share can you realistically capture in your first 3-5 years?",
                  "How many customers do you need to reach your revenue goals?",
                  "What's a realistic customer acquisition rate given your resources?",
                  "How does your target market share compare to competitors?",
                  "What evidence supports your market share assumptions?"
                ],
                examples: [
                  "Aim for 0.5% market share in year 3, which equals $2.5M revenue in our SAM",
                  "Need 500 customers paying $200/month to reach $100k monthly recurring revenue",
                  "With current marketing budget, estimate acquiring 50 new customers per month",
                  "Leading competitor has 15% share, several others have 3-5% each",
                  "Similar businesses in other markets achieved 2-3% share within 5 years"
                ]
              },
              {
                title: "Market Segmentation",
                prompts: [
                  "How can you divide your target market into distinct segments?",
                  "Which segments have the highest growth potential or profitability?",
                  "What are the different needs or behaviors of each segment?",
                  "Which segment will you prioritize first and why?",
                  "How do pricing and value propositions differ across segments?"
                ],
                examples: [
                  "Segment by company size: micro (1-10), small (11-50), medium (51-200) employees",
                  "Enterprise segment pays more but has longer sales cycles and higher requirements",
                  "Startups need simple tools, established businesses want advanced features and integrations",
                  "Start with small businesses as they're easier to reach and have faster decision-making",
                  "Freemium for micro, subscription tiers for small, custom enterprise pricing"
                ]
              }
            ]}
            tips={[
              "Use multiple data sources to triangulate market size estimates",
              "Focus on markets that are large enough to support your goals but not so competitive",
              "Be conservative in market share assumptions - most new businesses capture <1% initially",
              "Consider market timing - entering growing markets is easier than declining ones",
              "Document your assumptions so you can revise estimates as you learn more"
            ]}
          />
        </TabsContent>

        <TabsContent value="customer-research">
          <GuidedNotePage
            title="Customer Research & Insights"
            description="Understand your target customers through research and interviews"
            sections={[
              {
                title: "Customer Demographics & Psychographics",
                prompts: [
                  "What are the key demographic characteristics of your target customers?",
                  "What are their attitudes, values, interests, and lifestyle preferences?",
                  "How do they currently spend their time and money related to your solution?",
                  "What communication channels and information sources do they use?",
                  "What influences their purchasing decisions and who else is involved?"
                ],
                examples: [
                  "Ages 35-55, college-educated, household income $75k+, suburban/urban, 2+ kids",
                  "Value quality over price, environmentally conscious, time-constrained, tech-savvy",
                  "Spend $200/month on similar services, research online before buying",
                  "Get info from industry publications, LinkedIn, peer networks, Google searches",
                  "Individual users influenced by spouse, businesses involve multiple stakeholders"
                ]
              },
              {
                title: "Customer Pain Points & Jobs",
                prompts: [
                  "What specific problems or frustrations do your customers experience?",
                  "What tasks or jobs are they trying to accomplish?",
                  "What are the emotional and social aspects of their needs?",
                  "How do these pain points impact their business or personal life?",
                  "What triggers them to look for solutions like yours?"
                ],
                examples: [
                  "Spending 10+ hours/week on manual data entry, prone to errors, stressful month-end",
                  "Need to look professional to clients while managing costs and complexity",
                  "Feel overwhelmed, want to appear competent to peers, fear making mistakes",
                  "Late nights, missed family time, client complaints about delays or errors",
                  "Growing business, new compliance requirements, or staff turnover creating gaps"
                ]
              },
              {
                title: "Customer Interview Insights",
                prompts: [
                  "What have you learned from talking directly with potential customers?",
                  "What surprised you about customer needs or behaviors?",
                  "How do customers currently solve the problems you want to address?",
                  "What language and terminology do customers use to describe their needs?",
                  "What objections or concerns do customers raise about your solution?"
                ],
                examples: [
                  "Interviewed 25 small business owners, found time is bigger concern than cost",
                  "Many use multiple disconnected tools instead of seeking integrated solutions",
                  "DIY with spreadsheets, hire part-time help, or outsource to expensive consultants",
                  "Talk about 'getting organized' not 'workflow optimization' - use their words",
                  "Worried about data security, learning curve, and whether it works with existing tools"
                ]
              },
              {
                title: "Customer Journey Mapping",
                prompts: [
                  "What steps do customers go through from problem awareness to purchase?",
                  "Where do customers go to research and evaluate solutions?",
                  "What factors influence their decision-making process?",
                  "How long does their typical buying cycle take?",
                  "Where do customers get stuck or drop out of the process?"
                ],
                examples: [
                  "Problem recognition → research options → compare features → trial/demo → purchase → onboard",
                  "Google searches, industry forums, peer referrals, vendor websites, review sites",
                  "Features, price, ease of use, customer support, integration capabilities, reviews",
                  "B2C: 2-4 weeks research, B2B: 3-6 months with multiple stakeholders involved",
                  "Information overload during research, lack of clear differentiation, price sensitivity"
                ]
              }
            ]}
            tips={[
              "Conduct 15-25 customer interviews to identify patterns and insights",
              "Ask open-ended questions about their current process, not leading questions about your solution",
              "Look for what customers do, not just what they say - observe behavior when possible",
              "Create detailed customer personas based on research, not assumptions",
              "Validate your assumptions by talking to customers regularly throughout development"
            ]}
          />
        </TabsContent>

        <TabsContent value="demand-validation">
          <GuidedNotePage
            title="Demand Validation & Testing"
            description="Test and validate demand for your product or service"
            sections={[
              {
                title: "Demand Testing Methods",
                prompts: [
                  "How will you test whether customers actually want your solution?",
                  "What low-cost experiments can validate demand before building?",
                  "How will you measure interest and intent to purchase?",
                  "What would constitute sufficient validation to move forward?",
                  "How will you test different value propositions or pricing models?"
                ],
                examples: [
                  "Landing page with email signup, pre-order campaign, or fake door test",
                  "Survey potential customers, create MVP, offer manual service before automation",
                  "Email signups, pre-orders, pilot program participation, conversion rates",
                  "100 email signups in 30 days, 10% conversion from trial to paid, 5 paying pilot customers",
                  "A/B testing different headlines, pricing tiers, or feature sets"
                ]
              },
              {
                title: "Pilot Programs & MVPs",
                prompts: [
                  "What minimum viable product (MVP) can you create to test demand?",
                  "How will you recruit customers for pilot programs or beta testing?",
                  "What metrics will you track during pilot programs?",
                  "How will you gather and incorporate feedback from early users?",
                  "What criteria will determine if the pilot is successful?"
                ],
                examples: [
                  "Simple website with core features only, manual processes behind automated interface",
                  "Reach out to interview participants, leverage personal network, offer free or discounted access",
                  "Usage frequency, feature adoption, satisfaction scores, willingness to pay, referrals",
                  "Weekly check-ins, usage analytics, surveys, and exit interviews with churned users",
                  "80% user satisfaction, 60% retention after 30 days, positive unit economics"
                ]
              },
              {
                title: "Market Testing Results",
                prompts: [
                  "What have your demand validation experiments revealed?",
                  "Which customer segments showed strongest interest and engagement?",
                  "What aspects of your solution do customers value most?",
                  "What concerns or objections did you discover?",
                  "How do your results compare to your initial assumptions?"
                ],
                examples: [
                  "60% email signup rate from targeted ads, 12% conversion to paid trial",
                  "Small professional services firms engaged more than retail businesses",
                  "Time-saving features valued more than cost savings, integration capabilities critical",
                  "Security concerns, complexity fears, and competitive pricing pressure",
                  "Demand stronger than expected but willingness to pay lower than projected"
                ]
              },
              {
                title: "Go/No-Go Decision Framework",
                prompts: [
                  "What criteria will you use to decide whether to fully launch your business?",
                  "What level of demand validation do you need to feel confident?",
                  "How will you balance positive signals with concerning feedback?",
                  "What modifications might you make based on validation results?",
                  "What's your plan if initial validation shows insufficient demand?"
                ],
                examples: [
                  "Need 200+ qualified leads and 20+ pilot customers willing to pay within 90 days",
                  "At least 70% of target customers express strong interest and intent to purchase",
                  "Positive: strong engagement; Concerning: price sensitivity - consider value-based pricing",
                  "Narrow target market, adjust features, change pricing model, or pivot business model",
                  "Iterate on solution, target different segment, or consider different business opportunity"
                ]
              }
            ]}
            tips={[
              "Test demand before investing heavily in product development",
              "Use multiple validation methods to get a complete picture",
              "Pay attention to customer behavior, not just what they say",
              "Set clear success criteria upfront to avoid moving the goalposts",
              "Be prepared to pivot based on what you learn - flexibility is key"
            ]}
          />
        </TabsContent>

        <TabsContent value="market-trends">
          <GuidedNotePage
            title="Market Trends & Environmental Factors"
            description="Analyze trends and external factors affecting your market"
            sections={[
              {
                title: "Industry Trends & Drivers",
                prompts: [
                  "What major trends are shaping your industry?",
                  "Which trends create opportunities for your business?",
                  "What technological changes are disrupting or enabling new solutions?",
                  "How are customer expectations and behaviors evolving?",
                  "What regulatory or policy changes might impact your market?"
                ],
                examples: [
                  "Remote work driving demand for digital collaboration tools and home office products",
                  "Sustainability concerns creating opportunities for eco-friendly alternatives",
                  "AI automation enabling small businesses to compete with larger companies",
                  "Customers expect mobile-first, self-service options with instant gratification",
                  "New privacy regulations require data protection features, compliance costs"
                ]
              },
              {
                title: "Economic & Social Factors",
                prompts: [
                  "How do economic conditions affect demand for your product or service?",
                  "What demographic or social changes impact your target market?",
                  "How sensitive is your market to economic downturns or recessions?",
                  "What seasonal or cyclical factors affect demand?",
                  "How do generational differences affect customer preferences?"
                ],
                examples: [
                  "Economic uncertainty makes customers more price-sensitive but also seek efficiency",
                  "Aging population needs more accessible, simpler solutions with better support",
                  "Luxury items hurt in downturns, essential services remain stable",
                  "Tax preparation busy in Q1, retail sales peak in Q4, B2B slower in summer",
                  "Millennials prefer subscription models, Gen X values ownership, Boomers want phone support"
                ]
              },
              {
                title: "Competitive Landscape Evolution",
                prompts: [
                  "How is competition in your market changing over time?",
                  "What new types of competitors are entering your space?",
                  "How are customer expectations being raised by competitive offerings?",
                  "What competitive advantages are becoming less sustainable?",
                  "Where do you see opportunities to differentiate as the market evolves?"
                ],
                examples: [
                  "Market consolidation through M&A, new venture-funded startups, tech giants expanding",
                  "Non-traditional competitors like platforms, marketplaces, or adjacent industries",
                  "Free/freemium options, 24/7 support, mobile apps now baseline expectations",
                  "Price advantages eroding, exclusive partnerships ending, technology democratizing",
                  "Focus on niche specialization, superior customer experience, or unique partnerships"
                ]
              },
              {
                title: "Future Market Scenarios",
                prompts: [
                  "How might your market look different in 3-5 years?",
                  "What scenarios could significantly change demand for your solution?",
                  "How would you adapt your business model to different future conditions?",
                  "What early warning signals will you monitor for market changes?",
                  "How will you stay agile and responsive to market evolution?"
                ],
                examples: [
                  "Increased automation, platform consolidation, subscription fatigue, or economic shifts",
                  "New regulations, technological breakthroughs, competitive disruption, or economic downturn",
                  "Pivot to different segments, adjust pricing model, add/remove features, change channels",
                  "Customer acquisition costs, churn rates, competitive announcements, regulatory discussions",
                  "Regular customer feedback, market research updates, flexible technology architecture"
                ]
              }
            ]}
            tips={[
              "Monitor both industry-specific trends and broader economic/social changes",
              "Consider how trends create both opportunities and threats for your business",
              "Stay close to customers to understand how their needs are evolving",
              "Build flexibility into your business model to adapt to market changes",
              "Use trend analysis to inform product roadmap and strategic planning decisions"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}