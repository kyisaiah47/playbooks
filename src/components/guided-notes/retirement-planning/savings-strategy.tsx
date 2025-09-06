"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SavingsStrategy() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Retirement Savings Strategy</h1>
        <p className="text-muted-foreground">Develop a comprehensive plan to build and maximize your retirement savings.</p>
      </div>

      <Tabs defaultValue="account-strategy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="account-strategy" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Account Strategy</span>
            <span className="sm:hidden">Accounts</span>
          </TabsTrigger>
          <TabsTrigger value="contribution-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Contribution Planning</span>
            <span className="sm:hidden">Contributions</span>
          </TabsTrigger>
          <TabsTrigger value="employer-benefits" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Employer Benefits</span>
            <span className="sm:hidden">Benefits</span>
          </TabsTrigger>
          <TabsTrigger value="tax-optimization" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Tax Optimization</span>
            <span className="sm:hidden">Taxes</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account-strategy">
          <GuidedNotePage
            title="Retirement Account Strategy"
            description="Choose and optimize the right retirement accounts for your situation"
            sections={[
              {
                title: "Account Type Selection",
                prompts: [
                  "What employer-sponsored retirement plans are available to you?",
                  "Should you prioritize traditional or Roth retirement accounts?",
                  "What individual retirement accounts (IRAs) make sense for your situation?",
                  "How much should you save in tax-advantaged versus taxable accounts?",
                  "What specialized retirement accounts are available for your profession?"
                ],
                examples: [
                  "401(k), 403(b), 457, TSP, SIMPLE IRA - check plan details and match",
                  "Traditional for current tax deduction, Roth for tax-free retirement income",
                  "Traditional IRA, Roth IRA, SEP-IRA, Solo 401(k) based on income and employment",
                  "Max out tax-advantaged first, then use taxable for flexibility and liquidity",
                  "Solo 401(k) for self-employed, SEP-IRA for small business owners"
                ]
              },
              {
                title: "Account Diversification",
                prompts: [
                  "How will you diversify across traditional and Roth accounts for tax flexibility?",
                  "What role should taxable investment accounts play in your retirement strategy?",
                  "How will you coordinate multiple retirement accounts from different employers?",
                  "Should you consider rolling over old 401(k) accounts to IRAs?",
                  "What emergency fund strategy will complement your retirement savings?"
                ],
                examples: [
                  "Mix of pre-tax and Roth savings for tax diversification in retirement",
                  "Bridge income before 59.5, flexibility, no required distributions",
                  "Consolidate for simplicity or keep separate for loan options and investments",
                  "Roll to IRA for more investment options, lower fees, but lose loan privileges",
                  "3-6 months in high-yield savings, separate from retirement accounts"
                ]
              },
              {
                title: "Investment Platform Selection",
                prompts: [
                  "What investment platforms and brokerages will you use for different accounts?",
                  "How important are low fees versus investment options in your account selection?",
                  "What online tools and resources do you want from your retirement account providers?",
                  "Should you work with a financial advisor or manage accounts yourself?",
                  "How will you ensure your accounts are properly diversified across platforms?"
                ],
                examples: [
                  "Vanguard, Fidelity, Schwab for IRAs; stick with employer plan for matching",
                  "Look for expense ratios under 0.5%, compare fund selections and fees",
                  "Planning calculators, automatic rebalancing, mobile app access, customer support",
                  "DIY with low-cost index funds or fee-only advisor for complex situations",
                  "Don't duplicate investments across accounts, coordinate asset allocation"
                ]
              },
              {
                title: "Account Management Strategy",
                prompts: [
                  "How often will you review and rebalance your retirement accounts?",
                  "What system will you use to track performance across multiple accounts?",
                  "How will you handle beneficiary designations and keep them updated?",
                  "What record-keeping system will you maintain for tax and planning purposes?",
                  "How will you educate yourself about retirement account rules and changes?"
                ],
                examples: [
                  "Quarterly review, annual rebalancing, or automatic rebalancing features",
                  "Spreadsheet tracking, aggregation tools like Mint or Personal Capital",
                  "Update after marriage, divorce, births, deaths - review annually",
                  "Keep statements, tax documents, contribution records in organized files",
                  "Read plan documents, follow reputable financial news sources, consult professionals"
                ]
              }
            ]}
            tips={[
              "Always contribute enough to your 401(k) to get the full employer match",
              "Consider Roth accounts if you expect to be in a higher tax bracket in retirement",
              "Don't let old 401(k) accounts sit forgotten - consolidate or roll them over",
              "Keep beneficiary designations updated - they override your will",
              "Automate contributions to make consistent saving easier"
            ]}
          />
        </TabsContent>

        <TabsContent value="contribution-planning">
          <GuidedNotePage
            title="Contribution Planning & Maximization"
            description="Optimize your retirement contributions for maximum growth"
            sections={[
              {
                title: "Contribution Prioritization",
                prompts: [
                  "What order should you prioritize your retirement contributions?",
                  "How much can you afford to contribute to retirement accounts monthly?",
                  "When should you increase your contribution rates?",
                  "How will you balance retirement saving with other financial goals?",
                  "What percentage of your income should you save for retirement?"
                ],
                examples: [
                  "Employer match first, then high-interest debt, then max retirement accounts",
                  "Start with 10-15% of gross income, including employer match if available",
                  "Annual raises, debt payoffs, tax refunds, bonuses, career advancement",
                  "Emergency fund first, then 401(k) match, then retirement vs. other goals",
                  "Save 10-15% early career, increase to 15-20% in peak earning years"
                ]
              },
              {
                title: "Maximizing Annual Limits",
                prompts: [
                  "What are the current contribution limits for your retirement accounts?",
                  "How will you work toward maximizing your annual contribution limits?",
                  "When will you be eligible for catch-up contributions at age 50?",
                  "Should you contribute to multiple types of retirement accounts?",
                  "How will you handle years when you can't contribute the maximum?"
                ],
                examples: [
                  "$23,000 401(k) limit, $7,000 IRA limit for 2024 (limits change annually)",
                  "Increase contributions by 1-2% annually until you reach maximum",
                  "Additional $7,500 for 401(k), $1,000 for IRA starting at age 50",
                  "Max employer match first, then IRA, then back to 401(k) to reach limits",
                  "Contribute what you can consistently, don't let perfection stop progress"
                ]
              },
              {
                title: "Automation & Consistency",
                prompts: [
                  "How will you automate your retirement contributions?",
                  "What backup plan do you have if you need to temporarily reduce contributions?",
                  "How will you take advantage of employer match timing?",
                  "Should you contribute more early in the year or spread contributions evenly?",
                  "How will you handle bonus or irregular income for retirement saving?"
                ],
                examples: [
                  "Automatic payroll deduction for 401(k), automatic transfer for IRA",
                  "Reduce to employer match minimum during financial emergencies",
                  "Understand vesting schedules and contribute enough each pay period",
                  "Even contributions for dollar-cost averaging, unless missing match",
                  "Contribute bonuses directly to retirement, increase regular contribution rate"
                ]
              },
              {
                title: "Strategic Contribution Timing",
                prompts: [
                  "How will you time Roth conversions for tax efficiency?",
                  "When should you make IRA contributions for maximum tax benefit?",
                  "Should you front-load contributions early in the year?",
                  "How will you coordinate contributions with tax planning?",
                  "What role should catch-up contributions play in your strategy?"
                ],
                examples: [
                  "Low-income years, early retirement, down market years for conversions",
                  "Make IRA contributions by April 15th for previous tax year deduction",
                  "Front-load for more time in market, but don't miss employer matches",
                  "Manage income brackets, deductions, and retirement contributions together",
                  "Use catch-up contributions aggressively after 50 to accelerate savings"
                ]
              }
            ]}
            tips={[
              "Increase your contribution rate by 1% annually until you reach the maximum",
              "Set up automatic contributions to make saving effortless and consistent",
              "Use bonuses and raises to boost retirement contributions before lifestyle inflation",
              "Don't let analysis paralysis prevent you from starting - begin with what you can afford",
              "Review contribution limits annually as they change with inflation"
            ]}
          />
        </TabsContent>

        <TabsContent value="employer-benefits">
          <GuidedNotePage
            title="Employer Benefits Optimization"
            description="Maximize employer retirement benefits and related programs"
            sections={[
              {
                title: "401(k) Match Maximization",
                prompts: [
                  "What is your employer's 401(k) matching formula and vesting schedule?",
                  "How can you ensure you receive the full employer match every year?",
                  "What happens to your employer match if you leave the company?",
                  "Should you contribute more than the match amount to your 401(k)?",
                  "How do employer stock contributions fit into your overall investment strategy?"
                ],
                examples: [
                  "50% match on first 6% of salary, dollar-for-dollar match on first 3%",
                  "Contribute at least the match threshold, understand per-pay-period requirements",
                  "Immediate vesting vs. cliff vesting vs. graded vesting - plan accordingly",
                  "Yes, up to annual limits if fees are reasonable and investment options good",
                  "Don't over-concentrate in employer stock, diversify as soon as allowed"
                ]
              },
              {
                title: "Additional Employer Benefits",
                prompts: [
                  "What other retirement-related benefits does your employer offer?",
                  "Does your employer offer a pension plan and how does it work?",
                  "What health savings account (HSA) benefits are available?",
                  "Are there stock purchase plans or equity compensation programs?",
                  "What professional development benefits can enhance your earning potential?"
                ],
                examples: [
                  "Profit sharing, non-qualified deferred compensation, financial planning services",
                  "Defined benefit pension with years of service and salary calculations",
                  "HSA with employer contribution acts as additional retirement account",
                  "Employee stock purchase plan with discount, stock options, restricted shares",
                  "Tuition reimbursement, professional certifications, conference attendance"
                ]
              },
              {
                title: "Benefits Coordination Strategy",
                prompts: [
                  "How will you coordinate employer benefits with your overall retirement plan?",
                  "What benefits should you prioritize if you can't maximize everything?",
                  "How will changing jobs affect your employer benefit strategy?",
                  "Should you participate in voluntary benefit programs like supplemental insurance?",
                  "How will you stay informed about changes to your employer benefits?"
                ],
                examples: [
                  "Use HSA as retirement account, maximize match, then focus on IRAs",
                  "Free match first, then HSA, then high-deductible health plan savings",
                  "Understand vesting, portability, and COBRA implications before job changes",
                  "Evaluate voluntary benefits against private market alternatives",
                  "Attend benefits meetings, read annual enrollment materials, ask HR questions"
                ]
              },
              {
                title: "Career & Benefits Planning",
                prompts: [
                  "How will your career progression affect your retirement benefits?",
                  "What benefits negotiations should you consider during job changes?",
                  "How will you evaluate total compensation packages including retirement benefits?",
                  "Should you stay with an employer longer to maximize pension or vesting?",
                  "What benefits will bridge you to Medicare if you retire early?"
                ],
                examples: [
                  "Higher salary increases contributions and match, promotions improve benefits",
                  "401(k) match percentage, vesting schedule, loan provisions, investment options",
                  "Compare total compensation including match, benefits, growth potential",
                  "Balance golden handcuffs against better opportunities elsewhere",
                  "COBRA, ACA plans, retiree health benefits, spouse's coverage options"
                ]
              }
            ]}
            tips={[
              "Never leave free employer matching money on the table - it's a guaranteed return",
              "Understand your vesting schedule before changing jobs",
              "Use your HSA as a retirement account if your employer offers one",
              "Read your benefits documents carefully - many people miss valuable benefits",
              "Consider total compensation, not just salary, when evaluating job opportunities"
            ]}
          />
        </TabsContent>

        <TabsContent value="tax-optimization">
          <GuidedNotePage
            title="Tax-Optimized Retirement Saving"
            description="Minimize taxes and maximize after-tax retirement wealth"
            sections={[
              {
                title: "Tax-Deferred vs. Tax-Free Strategy",
                prompts: [
                  "Should you prioritize traditional or Roth retirement accounts?",
                  "How do you expect your tax bracket to change in retirement?",
                  "What tax diversification strategy makes sense for your situation?",
                  "When should you consider Roth conversions?",
                  "How will tax law changes affect your retirement tax strategy?"
                ],
                examples: [
                  "Traditional if high bracket now, Roth if low bracket or expect higher taxes later",
                  "Lower bracket in retirement favors traditional, higher bracket favors Roth now",
                  "Mix of traditional and Roth accounts for flexibility in retirement withdrawals",
                  "Low-income years, market downturns, early retirement years before Social Security",
                  "Stay informed but don't let uncertainty prevent action with current rules"
                ]
              },
              {
                title: "Asset Location Strategy",
                prompts: [
                  "Which investments should you hold in tax-advantaged versus taxable accounts?",
                  "How can you minimize taxes on your investment returns?",
                  "What tax-loss harvesting opportunities exist in your portfolio?",
                  "Should you hold municipal bonds or other tax-advantaged investments?",
                  "How will you coordinate asset allocation across different account types?"
                ],
                examples: [
                  "Bonds and REITs in tax-deferred, stocks in taxable, growth stocks in Roth",
                  "Index funds for tax efficiency, avoid frequent trading, use tax-advantaged accounts",
                  "Sell losing positions to offset gains, reinvest in similar but not identical funds",
                  "Municipal bonds in taxable accounts if in high tax bracket",
                  "Treat all accounts as one portfolio, place assets where tax treatment is most beneficial"
                ]
              },
              {
                title: "Withdrawal Strategy Planning",
                prompts: [
                  "In what order should you withdraw from different account types in retirement?",
                  "How will required minimum distributions (RMDs) affect your tax planning?",
                  "What strategies can you use to minimize taxes on Social Security benefits?",
                  "Should you do Roth conversions before required distributions begin?",
                  "How will you manage tax brackets during retirement withdrawals?"
                ],
                examples: [
                  "Taxable first, then traditional IRA/401(k), then Roth for most situations",
                  "Plan for RMDs starting at 73, consider earlier withdrawals if beneficial",
                  "Keep income below thresholds where Social Security becomes taxable",
                  "Convert traditional to Roth in low-income years before age 73",
                  "Fill up lower tax brackets first, avoid pushing income into higher brackets"
                ]
              },
              {
                title: "Advanced Tax Strategies",
                prompts: [
                  "What role should health savings accounts (HSAs) play in your tax strategy?",
                  "Should you consider mega backdoor Roth conversions if available?",
                  "What charitable giving strategies can provide tax benefits?",
                  "How can you use tax-loss harvesting to improve after-tax returns?",
                  "What tax-efficient investment strategies should you implement?"
                ],
                examples: [
                  "Triple tax advantage: deductible contribution, tax-free growth, tax-free medical withdrawals",
                  "After-tax 401(k) contributions converted to Roth if plan allows",
                  "Donor-advised funds, qualified charitable distributions from IRA after 70.5",
                  "Realize losses to offset gains, avoid wash sale rules, maintain desired asset allocation",
                  "Low-turnover index funds, tax-managed funds, municipal bonds in taxable accounts"
                ]
              }
            ]}
            tips={[
              "Consider both current and future tax brackets when choosing traditional vs. Roth accounts",
              "Max out HSA contributions if available - they're the most tax-advantaged retirement accounts",
              "Don't let tax considerations override good investment fundamentals",
              "Plan Roth conversions during low-income years for maximum benefit",
              "Review your tax strategy annually as tax laws and your situation change"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}