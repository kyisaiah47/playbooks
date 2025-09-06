"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RetirementIncome() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Retirement Income Strategy</h1>
        <p className="text-muted-foreground">Create a sustainable income plan for your retirement years.</p>
      </div>

      <Tabs defaultValue="income-sources" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="income-sources" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Income Sources</span>
            <span className="sm:hidden">Sources</span>
          </TabsTrigger>
          <TabsTrigger value="withdrawal-strategy" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Withdrawal Strategy</span>
            <span className="sm:hidden">Withdrawal</span>
          </TabsTrigger>
          <TabsTrigger value="tax-efficiency" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Tax Efficiency</span>
            <span className="sm:hidden">Tax</span>
          </TabsTrigger>
          <TabsTrigger value="income-timing" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Income Timing</span>
            <span className="sm:hidden">Timing</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="income-sources">
          <GuidedNotePage
            title="Retirement Income Sources"
            description="Identify and optimize all potential sources of retirement income"
            sections={[
              {
                title: "Primary Income Sources",
                prompts: [
                  "What will be your main sources of retirement income?",
                  "How much monthly income do you expect from Social Security?",
                  "What retirement account balances will you have available?",
                  "Do you have any pension benefits from current or former employers?",
                  "What other guaranteed income sources do you have or plan to create?"
                ],
                examples: [
                  "Social Security, 401(k)/IRA withdrawals, pensions, annuities, investment income",
                  "Check Social Security statement for estimates at different claiming ages",
                  "401(k), 403(b), traditional/Roth IRAs, SEP-IRAs, taxable investment accounts",
                  "Defined benefit pensions, cash balance plans, military/government pensions",
                  "Immediate annuities, rental income, business income, royalties"
                ]
              },
              {
                title: "Investment Income Strategies",
                prompts: [
                  "How much income can you generate from dividend-paying investments?",
                  "Should you create a bond ladder for predictable interest income?",
                  "What role should REITs play in your income strategy?",
                  "How can you balance growth and income in your investment portfolio?",
                  "Should you consider high-yield or dividend growth investments?"
                ],
                examples: [
                  "Dividend-focused mutual funds, individual dividend stocks, dividend ETFs",
                  "Buy bonds with different maturity dates to provide steady income stream",
                  "REITs provide higher yields than stocks, monthly/quarterly distributions",
                  "Core holdings for growth, income sleeve for distributions, total return approach",
                  "High current yield vs. growing dividends over time for inflation protection"
                ]
              },
              {
                title: "Alternative Income Sources",
                prompts: [
                  "Should you consider part-time work or consulting in retirement?",
                  "What role could rental real estate play in your income strategy?",
                  "Are there business opportunities that could provide retirement income?",
                  "Should you consider reverse mortgage as an income source?",
                  "What other assets could generate income in retirement?"
                ],
                examples: [
                  "Part-time employment, consulting, seasonal work, teaching, coaching",
                  "Rental properties, REITs, real estate crowdfunding platforms",
                  "Small business ownership, franchises, online businesses, e-commerce",
                  "HECM reverse mortgage for home equity access without monthly payments",
                  "Royalties, licensing income, collectibles, precious metals"
                ]
              },
              {
                title: "Income Diversification & Risk Management",
                prompts: [
                  "How will you diversify your retirement income sources?",
                  "What backup plans do you have if primary income sources are reduced?",
                  "How will you protect your income from inflation over time?",
                  "What percentage of your income should come from guaranteed sources?",
                  "How will you handle sequence of returns risk in early retirement?"
                ],
                examples: [
                  "Multiple sources: Social Security, retirement accounts, investments, part-time work",
                  "Flexible spending plan, emergency fund, ability to adjust lifestyle",
                  "Social Security COLA, dividend growth stocks, TIPS, real estate",
                  "Social Security + pension + annuities = 50-70% for security",
                  "Cash cushion, bond tent, flexible withdrawal rates, delay Social Security"
                ]
              }
            ]}
            tips={[
              "Diversify your income sources to reduce dependence on any single stream",
              "Consider both current income needs and inflation protection for the future",
              "Don't rely too heavily on investment returns for essential expenses",
              "Plan for income to potentially decrease in later retirement years",
              "Build flexibility into your income plan to handle unexpected changes"
            ]}
          />
        </TabsContent>

        <TabsContent value="withdrawal-strategy">
          <GuidedNotePage
            title="Retirement Withdrawal Strategy"
            description="Develop a systematic approach to withdrawing from retirement accounts"
            sections={[
              {
                title: "Withdrawal Rate Planning",
                prompts: [
                  "What withdrawal rate should you plan for from your retirement portfolio?",
                  "How will you adjust your withdrawal rate based on market conditions?",
                  "Should you use a fixed percentage or fixed dollar withdrawal approach?",
                  "How will you handle years when your portfolio declines in value?",
                  "What's your plan for increasing withdrawals to keep up with inflation?"
                ],
                examples: [
                  "4% rule as starting point, adjust based on market conditions and life expectancy",
                  "Reduce withdrawals after poor market years, increase after good years",
                  "Fixed percentage maintains purchasing power, fixed dollar provides predictability",
                  "Use cash reserves, reduce spending, delay increases, consider working longer",
                  "Build in annual increases, use Social Security COLA as guide"
                ]
              },
              {
                title: "Account Withdrawal Sequencing",
                prompts: [
                  "In what order should you withdraw from different types of accounts?",
                  "Should you withdraw from taxable accounts first?",
                  "When should you start withdrawing from traditional retirement accounts?",
                  "How long should you preserve Roth accounts?",
                  "How do required minimum distributions affect your withdrawal strategy?"
                ],
                examples: [
                  "Generally: taxable first, traditional retirement accounts second, Roth last",
                  "Use taxable accounts for flexibility and to preserve tax-advantaged growth",
                  "Before Social Security kicks in, after age 59.5 to avoid penalties",
                  "Save Roth for last - no RMDs, tax-free growth, inheritance benefits",
                  "Must start RMDs at age 73, may require strategy adjustments"
                ]
              },
              {
                title: "Flexible Withdrawal Strategies",
                prompts: [
                  "How can you build flexibility into your withdrawal strategy?",
                  "What expenses are fixed versus discretionary in your retirement budget?",
                  "Should you use a bucket strategy for different time horizons?",
                  "How will you handle large one-time expenses in retirement?",
                  "What's your strategy for years with high or low market returns?"
                ],
                examples: [
                  "Variable spending plan, multiple account types, part-time work options",
                  "Essential expenses (housing, food, healthcare) vs. travel, entertainment",
                  "Short-term cash, medium-term bonds, long-term stocks in different buckets",
                  "Home repairs, new car, medical expenses - plan separate funding sources",
                  "Reduce spending after bad years, potentially increase after exceptional years"
                ]
              },
              {
                title: "Withdrawal Implementation & Monitoring",
                prompts: [
                  "How often should you take withdrawals from retirement accounts?",
                  "Should you automate withdrawals or take them as needed?",
                  "How will you rebalance your portfolio while taking withdrawals?",
                  "What tax withholding strategy will you use for retirement withdrawals?",
                  "How often should you review and adjust your withdrawal strategy?"
                ],
                examples: [
                  "Monthly for regular expenses, quarterly for larger amounts, annually for tax planning",
                  "Automate fixed amounts, manual for variable expenses and tax optimization",
                  "Sell from overweight asset classes, maintain target allocation over time",
                  "Withhold for estimated taxes, make quarterly payments, avoid underpayment penalties",
                  "Annual review, adjust for market performance, life changes, spending needs"
                ]
              }
            ]}
            tips={[
              "The 4% rule is a starting point - adjust based on your specific situation",
              "Preserve Roth accounts as long as possible for tax-free growth and inheritance",
              "Build flexibility into your withdrawal strategy for market volatility",
              "Consider total tax impact when deciding which accounts to withdraw from",
              "Review and adjust your withdrawal strategy annually"
            ]}
          />
        </TabsContent>

        <TabsContent value="tax-efficiency">
          <GuidedNotePage
            title="Tax-Efficient Income Planning"
            description="Minimize taxes while maximizing after-tax retirement income"
            sections={[
              {
                title: "Tax-Smart Withdrawal Sequencing",
                prompts: [
                  "How can you minimize taxes through strategic account withdrawals?",
                  "Should you do Roth conversions in early retirement?",
                  "How can you manage your tax brackets in retirement?",
                  "What role should tax-loss harvesting play in your income strategy?",
                  "How can you coordinate retirement income with Social Security taxation?"
                ],
                examples: [
                  "Fill up lower tax brackets with traditional IRA withdrawals before touching Roth",
                  "Convert traditional to Roth in low-income years before RMDs begin",
                  "Stay within 12% or 22% brackets through careful withdrawal planning",
                  "Harvest losses in taxable accounts to offset gains and ordinary income",
                  "Keep provisional income below thresholds to minimize Social Security taxation"
                ]
              },
              {
                title: "Asset Location for Income",
                prompts: [
                  "Which investments should you hold in taxable versus tax-advantaged accounts?",
                  "How can you optimize asset location for retirement income generation?",
                  "Should you hold dividend-paying stocks in retirement accounts?",
                  "What tax-efficient investments work best for income generation?",
                  "How do you coordinate asset location with withdrawal strategies?"
                ],
                examples: [
                  "Tax-inefficient investments in retirement accounts, tax-efficient in taxable accounts",
                  "Hold income-generating assets where they'll be taxed most favorably",
                  "High-dividend stocks in tax-deferred accounts to avoid current taxation",
                  "Municipal bonds for high earners, index funds for tax efficiency",
                  "Withdraw from accounts with tax-inefficient holdings first"
                ]
              },
              {
                title: "Income Timing Strategies",
                prompts: [
                  "How can you time income recognition to minimize taxes?",
                  "Should you bunch deductions in certain years?",
                  "How can you use charitable giving for tax-efficient income planning?",
                  "What role do qualified charitable distributions play in tax planning?",
                  "How can you coordinate income timing with healthcare subsidies?"
                ],
                examples: [
                  "Realize capital gains in low-income years, defer in high-income years",
                  "Bunch medical expenses, charitable gifts to exceed standard deduction thresholds",
                  "Donor-advised funds for timing flexibility, charitable remainder trusts",
                  "Direct IRA distributions to charity after age 70.5 to reduce AGI",
                  "Manage income to qualify for ACA subsidies if retiring before 65"
                ]
              },
              {
                title: "State Tax Considerations",
                prompts: [
                  "How do state taxes affect your retirement income strategy?",
                  "Should you consider relocating to a tax-friendly retirement state?",
                  "How do different states tax retirement income?",
                  "What are the total tax implications of different retirement locations?",
                  "How can you minimize state taxes on retirement income?"
                ],
                examples: [
                  "No state income tax vs. retirement income exemptions vs. full taxation",
                  "Compare total cost of living and taxes, not just income tax rates",
                  "Some states don't tax Social Security, pensions, or retirement account withdrawals",
                  "Income taxes, property taxes, sales taxes, estate taxes all matter",
                  "Domicile planning, timing of moves, residency establishment"
                ]
              }
            ]}
            tips={[
              "Fill up lower tax brackets first with traditional retirement account withdrawals",
              "Consider Roth conversions in years when your income is lower than normal",
              "Coordinate your withdrawal strategy with Social Security claiming to minimize taxes",
              "Use tax-loss harvesting in taxable accounts to offset retirement income",
              "Consider the total tax impact of your retirement location, not just income taxes"
            ]}
          />
        </TabsContent>

        <TabsContent value="income-timing">
          <GuidedNotePage
            title="Income Timing & Coordination"
            description="Coordinate the timing of different income sources for optimal results"
            sections={[
              {
                title: "Early Retirement Income Bridge",
                prompts: [
                  "How will you generate income before Social Security and Medicare eligibility?",
                  "What accounts can you access without penalties before age 59.5?",
                  "Should you use taxable accounts to bridge to retirement account access?",
                  "How will you handle health insurance costs during early retirement?",
                  "What role should part-time work play in early retirement income?"
                ],
                examples: [
                  "Taxable accounts, Roth IRA contributions, 401(k) loans, cash value life insurance",
                  "Roth contributions anytime, traditional IRA with exceptions, 401(k) Rule of 55",
                  "Use taxable accounts first to preserve tax-advantaged account growth",
                  "COBRA, ACA marketplace, spouse's coverage - budget $1,000-2,000/month",
                  "Consulting, seasonal work, part-time employment for bridge income"
                ]
              },
              {
                title: "Social Security Timing Coordination",
                prompts: [
                  "How will you coordinate Social Security claiming with other income sources?",
                  "Should you delay Social Security while using other retirement income?",
                  "How does Social Security timing affect your overall withdrawal strategy?",
                  "What role should spousal claiming strategies play in income timing?",
                  "How will you handle the gap between retirement and Social Security?"
                ],
                examples: [
                  "Use retirement accounts early to delay Social Security for larger benefit",
                  "8% annual increase makes delaying often worthwhile if you have other income",
                  "Reduce portfolio withdrawals once Social Security begins",
                  "Coordinate spousal claiming to maximize household Social Security income",
                  "Plan 3-8 year bridge period from retirement to Social Security"
                ]
              },
              {
                title: "Required Distribution Planning",
                prompts: [
                  "How will required minimum distributions affect your income strategy?",
                  "Should you start taking distributions before RMDs are required?",
                  "How can you prepare for the tax impact of large RMDs?",
                  "What strategies can help minimize RMDs?",
                  "How will RMDs coordinate with your other income sources?"
                ],
                examples: [
                  "May force higher income than desired, plan tax-efficient strategies",
                  "Start withdrawals at 59.5 to spread tax burden, do Roth conversions early",
                  "Estimate future RMDs, plan for higher tax brackets, set aside tax reserves",
                  "Roth conversions before 73, qualified charitable distributions after 70.5",
                  "RMDs may reduce need for other account withdrawals"
                ]
              },
              {
                title: "Income Adjustment Strategies",
                prompts: [
                  "How will you adjust your income strategy based on changing needs?",
                  "What triggers should prompt income strategy changes?",
                  "How will you handle inflation's impact on your income over time?",
                  "Should your income strategy change as you age through retirement?",
                  "What contingency plans do you have if income sources are reduced?"
                ],
                examples: [
                  "Health changes, market performance, family needs, lifestyle changes",
                  "Major market decline, health issues, change in expenses, tax law changes",
                  "Build in annual increases, use Social Security COLA as benchmark",
                  "May need less income for travel in later years, more for healthcare",
                  "Reduce expenses, tap home equity, return to work, family support"
                ]
              }
            ]}
            tips={[
              "Plan for a 3-8 year income bridge if retiring before Social Security eligibility",
              "Consider delaying Social Security while using other income sources for larger benefits",
              "Prepare for required minimum distributions by age 73 - they may increase your tax burden",
              "Build flexibility into your income plan to adjust for changing needs and circumstances",
              "Coordinate all income sources for optimal tax efficiency and cash flow"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}