"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function InvestmentPortfolio() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Investment Portfolio Strategy</h1>
        <p className="text-muted-foreground">Build and manage an investment portfolio designed for retirement success.</p>
      </div>

      <Tabs defaultValue="asset-allocation" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="asset-allocation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Asset Allocation</span>
            <span className="sm:hidden">Allocation</span>
          </TabsTrigger>
          <TabsTrigger value="investment-selection" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Investment Selection</span>
            <span className="sm:hidden">Selection</span>
          </TabsTrigger>
          <TabsTrigger value="risk-management" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Risk Management</span>
            <span className="sm:hidden">Risk</span>
          </TabsTrigger>
          <TabsTrigger value="portfolio-monitoring" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Portfolio Monitoring</span>
            <span className="sm:hidden">Monitoring</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="asset-allocation">
          <GuidedNotePage
            title="Strategic Asset Allocation"
            description="Design your optimal asset allocation for long-term retirement success"
            sections={[
              {
                title: "Core Asset Allocation Framework",
                prompts: [
                  "What should your target allocation be between stocks, bonds, and alternatives?",
                  "How should your asset allocation change as you approach and enter retirement?",
                  "What role should your age play in determining your stock allocation?",
                  "How will you balance growth potential with capital preservation?",
                  "Should you use target-date funds or build your own allocation?"
                ],
                examples: [
                  "Age 30: 80% stocks/20% bonds; Age 50: 60% stocks/40% bonds; Age 65: 40% stocks/60% bonds",
                  "Gradually decrease stock allocation as you approach retirement, but maintain some growth",
                  "Rule of thumb: stock allocation = 100 minus your age, but adjust for risk tolerance",
                  "Higher stocks for growth when young, increase bonds for stability near retirement",
                  "Target-date funds for simplicity, custom allocation for more control and lower fees"
                ]
              },
              {
                title: "Geographic & Sector Diversification",
                prompts: [
                  "What percentage of your portfolio should be in international investments?",
                  "Should you invest in emerging markets and how much?",
                  "What role should real estate investments play in your portfolio?",
                  "How will you diversify across different sectors and industries?",
                  "Should you include commodities or other alternative investments?"
                ],
                examples: [
                  "20-40% international allocation, including both developed and emerging markets",
                  "5-15% emerging markets for higher growth potential with higher risk",
                  "5-20% REITs for inflation protection and diversification from stocks/bonds",
                  "Total market index funds automatically provide sector diversification",
                  "Small allocation to commodities (5-10%) for inflation protection, but optional"
                ]
              },
              {
                title: "Bond & Fixed Income Strategy",
                prompts: [
                  "What types of bonds should make up your fixed income allocation?",
                  "How will you protect against interest rate and inflation risk?",
                  "Should you use individual bonds or bond funds?",
                  "What role should high-yield or corporate bonds play?",
                  "How will you ladder bonds or manage duration risk?"
                ],
                examples: [
                  "Mix of government, corporate, and international bonds for diversification",
                  "TIPS for inflation protection, shorter duration bonds when rates are rising",
                  "Bond funds for diversification and professional management, individual bonds for predictability",
                  "Small allocation to high-yield bonds for income, but increases risk",
                  "Bond ladders provide predictable income, bond funds offer more flexibility"
                ]
              },
              {
                title: "Age-Based Allocation Strategies",
                prompts: [
                  "How should your allocation evolve through different life stages?",
                  "What allocation adjustments should you make in early retirement?",
                  "How will you handle market volatility as you age?",
                  "Should you use a glide path strategy as you approach retirement?",
                  "What allocation will provide sustainable income in retirement?"
                ],
                examples: [
                  "Aggressive growth when young, moderate growth mid-career, conservative near retirement",
                  "Slightly more conservative than pre-retirement but maintain growth component",
                  "Larger cash cushion for volatility, more conservative overall allocation",
                  "Gradually reduce risk over time, but don't eliminate growth entirely",
                  "Bucket strategy: short-term cash, medium-term bonds, long-term stocks"
                ]
              }
            ]}
            tips={[
              "Don't be too conservative too early - you need growth to outpace inflation",
              "Rebalance annually or when allocations drift more than 5% from target",
              "Consider your total portfolio across all accounts when setting allocation",
              "International diversification reduces portfolio risk even if it sometimes underperforms",
              "Your asset allocation matters more than individual investment selection for returns"
            ]}
          />
        </TabsContent>

        <TabsContent value="investment-selection">
          <GuidedNotePage
            title="Investment Selection & Fund Choices"
            description="Choose specific investments to implement your asset allocation"
            sections={[
              {
                title: "Core Investment Building Blocks",
                prompts: [
                  "Should you focus on low-cost index funds or actively managed funds?",
                  "What specific index funds will form the core of your portfolio?",
                  "How will you implement international diversification?",
                  "What bond funds or fixed income investments will you choose?",
                  "Should you include sector-specific or thematic funds?"
                ],
                examples: [
                  "Index funds for core holdings due to lower costs and broad diversification",
                  "Total stock market, S&P 500, total international, total bond market funds",
                  "Total international index, developed markets, emerging markets funds",
                  "Total bond market, intermediate-term treasury, TIPS funds",
                  "Avoid sector funds for core portfolio, use total market funds for diversification"
                ]
              },
              {
                title: "Fund Analysis & Selection Criteria",
                prompts: [
                  "What criteria will you use to evaluate and select funds?",
                  "How important are expense ratios versus fund performance?",
                  "Should you prioritize fund size and liquidity?",
                  "How will you research fund managers and investment philosophy?",
                  "What role should ESG or socially responsible investing play?"
                ],
                examples: [
                  "Low expense ratios, broad diversification, long track record, large fund size",
                  "Expense ratios are guaranteed drag on returns, prioritize low costs over past performance",
                  "Larger funds have better liquidity and economies of scale, avoid tiny funds",
                  "Index funds eliminate manager risk, if using active funds research philosophy",
                  "ESG funds if values alignment is important, but don't sacrifice diversification"
                ]
              },
              {
                title: "Portfolio Construction Strategy",
                prompts: [
                  "How many funds do you need to achieve proper diversification?",
                  "Should you use a three-fund portfolio or more complex approach?",
                  "How will you avoid overlap and redundancy in fund selection?",
                  "What's your strategy for adding new investments over time?",
                  "Should you include individual stocks in your portfolio?"
                ],
                examples: [
                  "3-4 core funds can provide complete diversification: US stocks, international, bonds",
                  "Total stock market + international + bond market = simple, complete portfolio",
                  "Check fund holdings to avoid duplication, choose complementary funds",
                  "Add new asset classes only if they improve risk-return profile",
                  "Individual stocks for fun money only, not core portfolio - too much risk"
                ]
              },
              {
                title: "Implementation Across Account Types",
                prompts: [
                  "How will you coordinate investments across multiple retirement accounts?",
                  "Which investments should go in tax-advantaged versus taxable accounts?",
                  "Should you use different investment strategies in different account types?",
                  "How will you maintain your target allocation across all accounts?",
                  "What's your plan for reinvesting dividends and distributions?"
                ],
                examples: [
                  "Treat all accounts as one portfolio, coordinate to achieve target allocation",
                  "Tax-inefficient investments in retirement accounts, tax-efficient in taxable",
                  "Same basic strategy across accounts, but optimize for tax efficiency",
                  "Rebalance across all accounts annually or when significantly out of balance",
                  "Automatic dividend reinvestment in tax-advantaged accounts, be careful in taxable"
                ]
              }
            ]}
            tips={[
              "Keep it simple with low-cost index funds covering major asset classes",
              "Don't overthink fund selection - asset allocation matters more than specific funds",
              "Expense ratios below 0.20% for index funds, below 1.0% for active funds",
              "Avoid hot new funds and stick with established, large index funds",
              "Review your fund lineup annually but don't make changes without good reason"
            ]}
          />
        </TabsContent>

        <TabsContent value="risk-management">
          <GuidedNotePage
            title="Investment Risk Management"
            description="Manage and mitigate investment risks in your retirement portfolio"
            sections={[
              {
                title: "Risk Assessment & Tolerance",
                prompts: [
                  "What is your personal risk tolerance for investment volatility?",
                  "How much portfolio decline could you handle without panicking?",
                  "What's your capacity to take risk based on time horizon and goals?",
                  "How will your risk tolerance change as you approach retirement?",
                  "What behavioral biases might affect your investment decisions?"
                ],
                examples: [
                  "Conservative: 5-15% decline, Moderate: 15-25% decline, Aggressive: 25%+ decline",
                  "Consider 2008 scenario: would you stay invested or panic sell?",
                  "Young investors can take more risk, those near retirement need more stability",
                  "Generally become more conservative, but maintain some growth for inflation protection",
                  "Loss aversion, recency bias, overconfidence - be aware and plan accordingly"
                ]
              },
              {
                title: "Diversification Strategies",
                prompts: [
                  "How will you diversify across asset classes, sectors, and geographies?",
                  "What correlation risks exist in your portfolio?",
                  "Should you include alternative investments for diversification?",
                  "How will you avoid over-concentration in any single investment?",
                  "What role should your employer stock play in your portfolio?"
                ],
                examples: [
                  "Mix of stocks, bonds, real estate across US and international markets",
                  "Stocks tend to move together in crises, bonds provide better diversification",
                  "REITs, commodities can provide additional diversification, but keep allocation small",
                  "No more than 5% in any single stock, including employer stock",
                  "Minimize employer stock risk - you already depend on company for salary"
                ]
              },
              {
                title: "Market Volatility Management",
                prompts: [
                  "How will you handle major market downturns psychologically?",
                  "What's your strategy for staying invested during bear markets?",
                  "Should you try to time the market or maintain steady investing?",
                  "How will you handle sequence of returns risk near retirement?",
                  "What emergency funds will protect you from selling investments at bad times?"
                ],
                examples: [
                  "Have written investment policy, remember long-term goals, avoid financial media",
                  "Stay invested, continue contributions, potentially increase during downturns",
                  "Dollar-cost averaging beats market timing for most investors",
                  "Maintain cash cushion, bond allocation, flexible withdrawal strategy",
                  "3-6 months expenses in cash, separate from investment accounts"
                ]
              },
              {
                title: "Protection & Insurance Strategies",
                prompts: [
                  "What insurance do you need to protect your retirement investments?",
                  "Should you consider annuities for guaranteed retirement income?",
                  "How will you protect against inflation eroding your purchasing power?",
                  "What estate planning considerations affect your investment strategy?",
                  "How will you protect against longevity risk - outliving your money?"
                ],
                examples: [
                  "Disability insurance to protect earning ability, life insurance for dependents",
                  "Small allocation to immediate annuity for income floor, not entire portfolio",
                  "Stock allocation for growth, TIPS for inflation protection, real estate",
                  "Beneficiary designations, trusts if needed, tax-efficient transfer strategies",
                  "Plan for 90+ lifespan, maintain growth investments, consider guaranteed income"
                ]
              }
            ]}
            tips={[
              "Don't take more risk than you can psychologically handle during market downturns",
              "Diversification is your best protection against investment risk",
              "Keep 3-6 months of expenses in cash to avoid selling investments during downturns",
              "Stay invested through market cycles - time in the market beats timing the market",
              "Review and stress-test your portfolio regularly, but don't make frequent changes"
            ]}
          />
        </TabsContent>

        <TabsContent value="portfolio-monitoring">
          <GuidedNotePage
            title="Portfolio Monitoring & Management"
            description="Track performance and maintain your investment strategy over time"
            sections={[
              {
                title: "Performance Tracking",
                prompts: [
                  "What metrics will you use to evaluate your portfolio performance?",
                  "How often should you review your investment performance?",
                  "What benchmarks will you compare your returns against?",
                  "How will you track progress toward your retirement savings goals?",
                  "What tools will you use for portfolio analysis and tracking?"
                ],
                examples: [
                  "Total return, risk-adjusted return, expense ratios, asset allocation drift",
                  "Monthly account review, quarterly performance check, annual comprehensive review",
                  "Appropriate market indexes: S&P 500, total stock market, balanced benchmarks",
                  "Savings rate progress, account balance growth, retirement readiness calculators",
                  "Account websites, portfolio tracking apps, spreadsheets, financial planning software"
                ]
              },
              {
                title: "Rebalancing Strategy",
                prompts: [
                  "How often will you rebalance your portfolio?",
                  "What triggers will prompt rebalancing actions?",
                  "Should you rebalance with new contributions or by selling/buying?",
                  "How will you handle rebalancing across multiple accounts?",
                  "What costs are acceptable for maintaining your target allocation?"
                ],
                examples: [
                  "Annual rebalancing or when allocation drifts 5%+ from target",
                  "Time-based (quarterly) or threshold-based (5% drift from target)",
                  "Use new contributions first, then sell high/buy low to rebalance",
                  "Consider all accounts together, use tax-advantaged accounts for trading",
                  "Minimize transaction costs and taxes when rebalancing"
                ]
              },
              {
                title: "Strategy Adjustments",
                prompts: [
                  "When should you make changes to your investment strategy?",
                  "How will you handle major life changes affecting your investments?",
                  "Should you adjust your strategy based on market conditions?",
                  "When is it appropriate to change your asset allocation?",
                  "How will you avoid making emotional investment decisions?"
                ],
                examples: [
                  "Major life changes, goal changes, significant time horizon changes only",
                  "Job loss, marriage, divorce, inheritance, health issues may require adjustments",
                  "Stick to long-term strategy, don't try to time markets based on predictions",
                  "Age-based glide path, major goal changes, risk tolerance changes",
                  "Written investment policy statement, cooling-off period before changes"
                ]
              },
              {
                title: "Long-Term Maintenance",
                prompts: [
                  "How will you stay educated about investment best practices?",
                  "When should you consider working with a financial advisor?",
                  "How will you handle investment decisions as you age?",
                  "What succession planning is needed for your investment accounts?",
                  "How will you adapt your strategy for changing market environments?"
                ],
                examples: [
                  "Read reputable sources, avoid financial media noise, focus on evidence-based investing",
                  "Complex situations, lack of time/knowledge, need for objective advice",
                  "Simplify over time, consider delegating to advisor or family member",
                  "Keep beneficiaries updated, consider powers of attorney, estate planning",
                  "Maintain core principles, make minor adjustments only when necessary"
                ]
              }
            ]}
            tips={[
              "Focus on what you can control: costs, asset allocation, savings rate, not market returns",
              "Automate as much as possible to reduce the need for ongoing decisions",
              "Don't check your accounts too frequently - monthly or quarterly is sufficient",
              "Write down your investment strategy to help you stick to it during tough times",
              "Remember that boring, consistent investing typically wins over complexity"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}