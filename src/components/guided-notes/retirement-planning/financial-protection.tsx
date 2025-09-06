"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FinancialProtection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Financial Protection Strategies</h1>
        <p className="text-muted-foreground">Protect your retirement assets and income from various risks.</p>
      </div>

      <Tabs defaultValue="emergency-planning" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="emergency-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Emergency Planning</span>
            <span className="sm:hidden">Emergency</span>
          </TabsTrigger>
          <TabsTrigger value="inflation-protection" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Inflation Protection</span>
            <span className="sm:hidden">Inflation</span>
          </TabsTrigger>
          <TabsTrigger value="market-protection" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Market Protection</span>
            <span className="sm:hidden">Market</span>
          </TabsTrigger>
          <TabsTrigger value="longevity-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Longevity Planning</span>
            <span className="sm:hidden">Longevity</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="emergency-planning">
          <GuidedNotePage
            title="Emergency Planning for Retirement"
            description="Prepare for unexpected financial needs and emergencies in retirement"
            sections={[
              {
                title: "Emergency Fund Strategy",
                prompts: [
                  "How much should you keep in an emergency fund during retirement?",
                  "Where should you keep your retirement emergency fund?",
                  "Should your emergency fund be separate from other retirement income sources?",
                  "How will you replenish your emergency fund if you use it?",
                  "What constitutes a true emergency in retirement?"
                ],
                examples: [
                  "6-12 months of expenses, potentially more in retirement due to limited income sources",
                  "High-yield savings account, money market account, short-term CDs for liquidity",
                  "Keep separate to avoid temptation to use for non-emergencies",
                  "Reduce other spending, use excess income, potentially sell investments",
                  "Major home repairs, medical emergencies, market downturns, unexpected family needs"
                ]
              },
              {
                title: "Healthcare Emergency Planning",
                prompts: [
                  "How will you prepare for unexpected healthcare costs?",
                  "What health insurance gaps should you plan for?",
                  "Should you consider health savings accounts for healthcare emergencies?",
                  "How will you handle long-term care emergencies?",
                  "What's your plan for medical emergencies while traveling?"
                ],
                examples: [
                  "Separate healthcare emergency fund, good insurance coverage, HSA savings",
                  "Dental, vision, hearing aids, long-term care not covered by Medicare",
                  "HSA provides triple tax advantage for medical expenses, keep building even after 65",
                  "Long-term care insurance, family support plans, home equity access",
                  "Travel insurance, Medicare supplement coverage, emergency medical evacuation"
                ]
              },
              {
                title: "Family Emergency Support",
                prompts: [
                  "How will you handle requests for financial help from adult children?",
                  "Should you plan for supporting aging parents or other family members?",
                  "What boundaries will you set around family financial assistance?",
                  "How will unexpected family emergencies affect your retirement plans?",
                  "Should you have a separate fund for family assistance?"
                ],
                examples: [
                  "Set clear boundaries, help without jeopardizing your own security",
                  "Budget for potential parent care costs, sibling cost-sharing discussions",
                  "Gifts vs. loans, maximum amounts, impact on your own retirement",
                  "Adult child job loss, grandchild education needs, family member illness",
                  "Separate family assistance budget to avoid depleting retirement funds"
                ]
              },
              {
                title: "Document & Communication Emergency Planning",
                prompts: [
                  "How will your family access important financial information in an emergency?",
                  "What financial powers of attorney should you establish?",
                  "How will you ensure bills are paid if you're incapacitated?",
                  "What emergency contact information should be readily available?",
                  "How will you protect against financial fraud and elder abuse?"
                ],
                examples: [
                  "Organized financial records, password manager access, clear instructions",
                  "Financial POA for trusted family member, healthcare POA for medical decisions",
                  "Automatic bill pay, trusted person with account access, simplified accounts",
                  "Financial institutions, advisors, attorneys, healthcare providers, family",
                  "Monitor accounts regularly, be skeptical of unsolicited offers, family oversight"
                ]
              }
            ]}
            tips={[
              "Keep a larger emergency fund in retirement since you have fewer income sources",
              "Plan for healthcare emergencies separately from other financial emergencies",
              "Establish clear boundaries for family financial assistance before emergencies arise",
              "Make sure trusted family members can access your financial information if needed",
              "Review and update your emergency plans annually or after major life changes"
            ]}
          />
        </TabsContent>

        <TabsContent value="inflation-protection">
          <GuidedNotePage
            title="Inflation Protection Strategies"
            description="Protect your retirement purchasing power from inflation over time"
            sections={[
              {
                title: "Understanding Inflation Risk",
                prompts: [
                  "How much will inflation reduce your purchasing power over a 30-year retirement?",
                  "What retirement expenses are most affected by inflation?",
                  "How has inflation historically impacted different asset classes?",
                  "What inflation rate should you assume for retirement planning?",
                  "How will you monitor inflation's impact on your retirement lifestyle?"
                ],
                examples: [
                  "3% inflation cuts purchasing power in half over 23 years",
                  "Healthcare, food, energy costs typically rise faster than general inflation",
                  "Stocks and real estate historically outpace inflation, bonds and cash lose value",
                  "2-3% long-term average, but plan for higher periods",
                  "Track actual spending increases, compare to inflation measures, adjust accordingly"
                ]
              },
              {
                title: "Investment Strategies for Inflation Protection",
                prompts: [
                  "What asset allocation will help protect against inflation?",
                  "Should you include Treasury Inflation-Protected Securities (TIPS) in your portfolio?",
                  "How much should you allocate to stocks for inflation protection?",
                  "What role should real estate play in your inflation protection strategy?",
                  "Should you consider commodities or other inflation hedges?"
                ],
                examples: [
                  "Maintain equity allocation throughout retirement for long-term growth",
                  "TIPS provide direct inflation protection, consider 5-20% allocation",
                  "Stocks historically outpace inflation over long term, maintain 30-60% even in retirement",
                  "REITs, real estate crowdfunding, direct property ownership",
                  "Small allocation to commodities, precious metals, but don't overallocate"
                ]
              },
              {
                title: "Income Sources with Inflation Protection",
                prompts: [
                  "Which of your retirement income sources have built-in inflation protection?",
                  "How does Social Security's cost-of-living adjustment help with inflation?",
                  "Should you seek pension or annuity options with inflation riders?",
                  "How can you structure withdrawals to maintain purchasing power?",
                  "What role should dividend-growing stocks play in your income strategy?"
                ],
                examples: [
                  "Social Security has COLA, most pensions don't, investment income varies",
                  "Annual adjustments based on CPI, but may not match all your personal inflation",
                  "Inflation-adjusted annuities cost more but maintain purchasing power",
                  "Increase withdrawal rates over time, use total return approach",
                  "Companies that grow dividends over time can help maintain income purchasing power"
                ]
              },
              {
                title: "Lifestyle Adjustments for Inflation",
                prompts: [
                  "How will you adjust your spending if inflation exceeds your planning assumptions?",
                  "What expenses can you reduce if inflation erodes your purchasing power?",
                  "Should you consider relocating if inflation makes your area unaffordable?",
                  "How can you hedge against specific inflation impacts (healthcare, energy)?",
                  "What lifestyle changes can help you maintain quality of life despite inflation?"
                ],
                examples: [
                  "Reduce discretionary spending, modify travel plans, downsize housing",
                  "Dining out, entertainment, travel, gifts - maintain essentials first",
                  "Move to lower-cost areas, states with no income tax, smaller homes",
                  "Medicare supplement insurance, energy-efficient home improvements",
                  "Cook more at home, find free activities, take advantage of senior discounts"
                ]
              }
            ]}
            tips={[
              "Maintain some equity exposure throughout retirement to combat inflation",
              "Social Security provides some inflation protection, but may not be enough",
              "Build annual spending increases into your retirement withdrawal plan",
              "Consider TIPS for a portion of your bond allocation to provide direct inflation protection",
              "Stay flexible with your spending - be prepared to adjust if inflation exceeds expectations"
            ]}
          />
        </TabsContent>

        <TabsContent value="market-protection">
          <GuidedNotePage
            title="Market Volatility Protection"
            description="Protect your retirement from market downturns and volatility"
            sections={[
              {
                title: "Sequence of Returns Risk",
                prompts: [
                  "What is sequence of returns risk and how does it affect your retirement?",
                  "How can you protect against poor market returns early in retirement?",
                  "What withdrawal strategies help mitigate sequence of returns risk?",
                  "Should you delay retirement if markets are down significantly?",
                  "How can you build flexibility into your retirement spending?"
                ],
                examples: [
                  "Poor returns early in retirement can devastate portfolio despite good later returns",
                  "Cash cushion, bond tent, flexible spending, delay Social Security claiming",
                  "Dynamic withdrawal rates, bucket strategies, total return vs. income approach",
                  "Consider working longer if retiring into bear market, delaying major purchases",
                  "Fixed vs. variable expenses, spending reductions during down markets"
                ]
              },
              {
                title: "Portfolio Protection Strategies",
                prompts: [
                  "How should your asset allocation change as you approach and enter retirement?",
                  "Should you use a bond tent strategy as you near retirement?",
                  "What role should cash play in your retirement portfolio?",
                  "Should you consider guaranteed income products for market protection?",
                  "How can you rebalance during market volatility?"
                ],
                examples: [
                  "Gradually reduce stock allocation but maintain some for growth",
                  "Increase bond allocation in years before retirement, then maintain or reduce slightly",
                  "1-3 years of expenses in cash/short-term bonds for market volatility",
                  "Immediate annuities, I Bonds, CDs for guaranteed income floor",
                  "Rebalance annually or when 5%+ from target, buy low/sell high"
                ]
              },
              {
                title: "Behavioral Protection",
                prompts: [
                  "How will you avoid panic selling during market downturns?",
                  "What's your plan for staying invested during bear markets?",
                  "Should you limit how often you check account balances?",
                  "How will you make withdrawal decisions during volatile markets?",
                  "What support system will help you stick to your investment plan?"
                ],
                examples: [
                  "Written investment policy, remember long-term goals, focus on spending not portfolio",
                  "Have cash cushion, maintain perspective, remember recoveries always come",
                  "Check monthly or quarterly, not daily, focus on long-term trends",
                  "Use cash reserves first, reduce withdrawals during down markets",
                  "Financial advisor, investment club, trusted family member for objective perspective"
                ]
              },
              {
                title: "Income Protection During Market Stress",
                prompts: [
                  "How will you maintain income during prolonged market downturns?",
                  "Should you have multiple years of expenses in conservative investments?",
                  "What's your backup plan if portfolio withdrawals need to be reduced?",
                  "Should you consider part-time work as market protection?",
                  "How will you prioritize expenses during financial stress?"
                ],
                examples: [
                  "Bond ladder, cash reserves, dividend-paying stocks, guaranteed income",
                  "2-5 years in bonds/cash to avoid selling stocks at low prices",
                  "Reduce discretionary spending, delay major purchases, tap home equity",
                  "Part-time work, consulting, seasonal employment for additional income",
                  "Essential expenses first, then discretionary - have clear spending hierarchy"
                ]
              }
            ]}
            tips={[
              "Build a cash cushion of 1-3 years expenses to ride out market volatility",
              "Don't panic and sell during market downturns - recoveries have always come",
              "Consider a bond tent strategy in the years leading up to retirement",
              "Have a written plan for how you'll handle market volatility before it happens",
              "Remember that some market risk is necessary for long-term inflation protection"
            ]}
          />
        </TabsContent>

        <TabsContent value="longevity-planning">
          <GuidedNotePage
            title="Longevity Risk Planning"
            description="Plan for the possibility of a very long retirement"
            sections={[
              {
                title: "Life Expectancy Planning",
                prompts: [
                  "What's your realistic life expectancy for retirement planning purposes?",
                  "How does your family health history affect your longevity planning?",
                  "Should you plan for different life expectancies for spouses?",
                  "What's the risk of outliving your money and how do you address it?",
                  "How will you balance enjoying retirement with preserving assets for longevity?"
                ],
                examples: [
                  "Plan for 90-95 years old, longer if in good health with good family history",
                  "Family longevity, current health status, lifestyle factors all matter",
                  "Women typically live longer, plan for surviving spouse's longer life",
                  "Conservative withdrawal rates, guaranteed income sources, flexible spending",
                  "Spend enough to enjoy retirement while ensuring money lasts lifetime"
                ]
              },
              {
                title: "Asset Preservation Strategies",
                prompts: [
                  "How will you ensure your assets last throughout a long retirement?",
                  "Should you use conservative withdrawal rates for longevity protection?",
                  "What role should growth investments play in a long retirement?",
                  "How will you adjust spending as you age through different retirement phases?",
                  "Should you consider guaranteed lifetime income products?"
                ],
                examples: [
                  "Conservative withdrawal rates, maintain growth investments, flexible spending",
                  "3-3.5% initial withdrawal rate instead of 4% for extra safety margin",
                  "Maintain 30-50% stocks even in later retirement for inflation protection",
                  "Higher spending early retirement, moderate middle years, lower later years",
                  "Immediate annuities, delayed annuities, I Bonds for guaranteed income floor"
                ]
              },
              {
                title: "Healthcare & Long-Term Care for Longevity",
                prompts: [
                  "How will you pay for potentially decades of healthcare costs?",
                  "What's your plan for long-term care if you live to 90+?",
                  "Should you save extra for healthcare costs in very late retirement?",
                  "How will you maintain quality of life in advanced old age?",
                  "What support systems will you need for a very long retirement?"
                ],
                examples: [
                  "HSA savings, dedicated healthcare fund, long-term care insurance",
                  "Long-term care insurance, family support, home equity, dedicated savings",
                  "Healthcare costs typically increase significantly after age 80",
                  "Focus on health maintenance, social connections, mental stimulation",
                  "Family support network, community services, professional care coordination"
                ]
              },
              {
                title: "Estate Planning for Longevity",
                prompts: [
                  "How does potential longevity affect your estate planning?",
                  "Should you plan to spend most of your assets if you live very long?",
                  "How will you balance inheritance goals with longevity protection?",
                  "What happens to your estate plan if you need extensive long-term care?",
                  "Should you consider gifting strategies for longevity scenarios?"
                ],
                examples: [
                  "May need to spend more assets than planned, less inheritance potential",
                  "'Die broke' philosophy vs. legacy planning, depends on your priorities",
                  "Ensure your own security first, then consider inheritance goals",
                  "Long-term care could consume most assets, affecting inheritance plans",
                  "Earlier gifting while healthy vs. preserving assets for your own needs"
                ]
              }
            ]}
            tips={[
              "Plan for a 30-year retirement even if you expect shorter - better to have too much than too little",
              "Maintain some growth investments throughout retirement to combat inflation over long periods",
              "Consider guaranteed lifetime income sources to ensure you never run out of money",
              "Build healthcare cost increases into your long-term financial planning",
              "Stay flexible with spending - be prepared to adjust if you live longer than expected"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}