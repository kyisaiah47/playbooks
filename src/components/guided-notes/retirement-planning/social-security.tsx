"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SocialSecurity() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Social Security Planning</h1>
        <p className="text-muted-foreground">Optimize your Social Security benefits for maximum retirement income.</p>
      </div>

      <Tabs defaultValue="benefit-estimation" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="benefit-estimation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Benefit Estimation</span>
            <span className="sm:hidden">Benefits</span>
          </TabsTrigger>
          <TabsTrigger value="claiming-strategy" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Claiming Strategy</span>
            <span className="sm:hidden">Claiming</span>
          </TabsTrigger>
          <TabsTrigger value="spousal-benefits" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Spousal Benefits</span>
            <span className="sm:hidden">Spousal</span>
          </TabsTrigger>
          <TabsTrigger value="tax-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Tax Planning</span>
            <span className="sm:hidden">Taxes</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="benefit-estimation">
          <GuidedNotePage
            title="Social Security Benefit Estimation"
            description="Understand and estimate your Social Security retirement benefits"
            sections={[
              {
                title: "Benefit Calculation Basics",
                prompts: [
                  "How many years of earnings are used to calculate your Social Security benefits?",
                  "What is your current estimated monthly Social Security benefit at full retirement age?",
                  "How do your highest earning years affect your benefit calculation?",
                  "What happens to your benefits if you have fewer than 35 years of earnings?",
                  "How often should you check your Social Security statement and earnings record?"
                ],
                examples: [
                  "35 highest earning years are used, indexed for wage inflation",
                  "Check your annual Social Security statement online at ssa.gov",
                  "Later career high earnings can replace earlier lower-earning years in calculation",
                  "Zeros are averaged in for missing years, significantly reducing benefits",
                  "Review annually to catch errors early and track progress toward retirement"
                ]
              },
              {
                title: "Full Retirement Age Impact",
                prompts: [
                  "What is your full retirement age for Social Security purposes?",
                  "How does claiming before or after full retirement age affect your benefits?",
                  "What percentage reduction occurs if you claim benefits early?",
                  "What percentage increase occurs if you delay claiming past full retirement age?",
                  "How do you balance Social Security timing with other retirement income sources?"
                ],
                examples: [
                  "Age 66-67 depending on birth year - gradually increasing to 67 for those born after 1960",
                  "Early claiming reduces benefits permanently, late claiming increases benefits permanently",
                  "Up to 30% reduction if claiming at 62, smaller reductions for each month closer to FRA",
                  "8% per year increase from FRA to age 70, stopping at age 70",
                  "Consider health, other income needs, spousal benefits, and break-even analysis"
                ]
              },
              {
                title: "Earnings Record Management",
                prompts: [
                  "How can you maximize your Social Security benefits through earnings management?",
                  "Should you continue working after becoming eligible for benefits?",
                  "What is the earnings test and how does it affect benefits?",
                  "How can you correct errors on your Social Security earnings record?",
                  "What documentation should you keep for Social Security purposes?"
                ],
                examples: [
                  "Work at least 35 years, maximize earnings in highest-paid years, work past age 62",
                  "Continuing work can replace lower earning years and increase benefit calculation",
                  "If working while receiving benefits before FRA, benefits reduced $1 for every $2 earned over limit",
                  "Contact SSA immediately with W-2s or tax returns as proof of earnings",
                  "Keep W-2s, tax returns, and self-employment records for verification"
                ]
              },
              {
                title: "Future Benefit Projections",
                prompts: [
                  "How might future changes to Social Security affect your benefits?",
                  "What assumptions should you use for Social Security solvency planning?",
                  "How will inflation affect your Social Security purchasing power over time?",
                  "Should you factor in potential benefit reductions in your retirement planning?",
                  "How can you reduce dependence on Social Security for retirement security?"
                ],
                examples: [
                  "Possible changes: higher retirement age, increased taxes, benefit formula changes",
                  "Plan for current benefits but consider 75-80% as conservative estimate",
                  "Cost-of-living adjustments help but may not keep pace with all expenses",
                  "Diversify retirement income so Social Security is not your only source",
                  "Maximize personal savings, employer benefits, and other income sources"
                ]
              }
            ]}
            tips={[
              "Create a my Social Security account at ssa.gov to track your benefits and earnings record",
              "Work at least 35 years to maximize benefits - zeros hurt your average",
              "Your highest earning years have the biggest impact on benefit calculations",
              "Check your Social Security statement annually for errors and track progress",
              "Don't rely solely on Social Security - it replaces only about 40% of pre-retirement income"
            ]}
          />
        </TabsContent>

        <TabsContent value="claiming-strategy">
          <GuidedNotePage
            title="Social Security Claiming Strategy"
            description="Develop an optimal strategy for when to claim Social Security benefits"
            sections={[
              {
                title: "Claiming Age Decision",
                prompts: [
                  "At what age should you claim Social Security benefits?",
                  "What factors should influence your claiming decision?",
                  "How do you perform a break-even analysis for claiming strategies?",
                  "What role does your life expectancy play in claiming decisions?",
                  "Should you claim early if you have health concerns?"
                ],
                examples: [
                  "Age 62 for immediate income, FRA for full benefits, age 70 for maximum benefits",
                  "Health status, financial needs, other income sources, spousal considerations",
                  "Compare total lifetime benefits from different claiming ages",
                  "Longer life expectancy favors delaying, shorter expectancy favors early claiming",
                  "Serious health conditions may favor early claiming despite reduced benefits"
                ]
              },
              {
                title: "Early Claiming Considerations",
                prompts: [
                  "What are the permanent consequences of claiming Social Security early?",
                  "How does the earnings test affect early claimers who continue working?",
                  "Can you change your mind after claiming early?",
                  "What financial situations justify claiming benefits early?",
                  "How does early claiming affect spousal and survivor benefits?"
                ],
                examples: [
                  "Permanent reduction in monthly benefits for rest of your life",
                  "Benefits reduced if earnings exceed annual limit before full retirement age",
                  "Limited ability to withdraw application within 12 months and repay benefits",
                  "Immediate financial need, poor health, no other retirement income sources",
                  "Reduced benefits for spouse and survivor, affecting family's total benefits"
                ]
              },
              {
                title: "Delayed Claiming Benefits",
                prompts: [
                  "What are the advantages of delaying Social Security past full retirement age?",
                  "How much do benefits increase by waiting until age 70?",
                  "What other income sources can bridge the gap while delaying Social Security?",
                  "What risks exist with a delayed claiming strategy?",
                  "When does it no longer make sense to delay claiming past age 70?"
                ],
                examples: [
                  "Guaranteed 8% annual increase plus cost-of-living adjustments",
                  "Maximum increase of 32% above full retirement age benefit",
                  "401(k), IRA withdrawals, taxable investments, part-time work income",
                  "Health decline, policy changes, need for immediate income",
                  "No benefit to waiting past age 70 - delayed retirement credits stop accruing"
                ]
              },
              {
                title: "Claiming Strategy Implementation",
                prompts: [
                  "How far in advance should you apply for Social Security benefits?",
                  "What documentation and information do you need for your application?",
                  "How will you coordinate Social Security with other retirement account withdrawals?",
                  "What happens if you change your mind about your claiming strategy?",
                  "How will you monitor and adjust your strategy based on changing circumstances?"
                ],
                examples: [
                  "Apply 3-4 months before you want benefits to start",
                  "Birth certificate, W-2s, self-employment records, military service records",
                  "Consider tax implications and withdrawal sequencing from other accounts",
                  "Very limited options - withdrawal possible within 12 months if you repay all benefits",
                  "Review annually, consider major life changes, health status, financial needs"
                ]
              }
            ]}
            tips={[
              "Delaying Social Security provides guaranteed 8% annual returns - hard to beat elsewhere",
              "Consider your total retirement income picture, not just Social Security in isolation",
              "Health and family longevity history should influence your claiming decision",
              "Don't claim early just because you can - consider the long-term impact",
              "Run multiple scenarios to understand the financial implications of different claiming ages"
            ]}
          />
        </TabsContent>

        <TabsContent value="spousal-benefits">
          <GuidedNotePage
            title="Spousal & Survivor Benefits"
            description="Optimize Social Security benefits for married couples and survivors"
            sections={[
              {
                title: "Spousal Benefit Basics",
                prompts: [
                  "How much can a spouse receive in Social Security benefits?",
                  "What are the requirements for claiming spousal benefits?",
                  "Can a spouse claim benefits on their own record and spousal benefits?",
                  "How do spousal benefits work if both spouses have their own work records?",
                  "What happens to spousal benefits if the couple divorces?"
                ],
                examples: [
                  "Up to 50% of higher-earning spouse's full retirement age benefit",
                  "Must be married at least 1 year, spouse must have filed for their own benefits",
                  "Social Security automatically pays the higher of own benefit or spousal benefit",
                  "Each spouse gets their own benefit plus any additional spousal benefit if eligible",
                  "Divorced spouses can claim on ex-spouse's record if married 10+ years and unmarried"
                ]
              },
              {
                title: "Survivor Benefit Planning",
                prompts: [
                  "What survivor benefits are available to widowed spouses?",
                  "At what age can a surviving spouse claim survivor benefits?",
                  "How do survivor benefits compare to the deceased spouse's benefit amount?",
                  "Can a surviving spouse switch between their own and survivor benefits?",
                  "How should couples plan their claiming strategies considering survivor benefits?"
                ],
                examples: [
                  "Surviving spouse can receive 100% of deceased spouse's benefit amount",
                  "Age 60 for reduced benefits, full retirement age for full survivor benefits",
                  "Survivor gets the higher of deceased spouse's benefit or their own benefit",
                  "Can claim one early and switch to the other at full retirement age",
                  "Higher earner should consider delaying to age 70 to maximize survivor benefit"
                ]
              },
              {
                title: "Married Couple Optimization Strategies",
                prompts: [
                  "What claiming strategies work best for married couples?",
                  "Should both spouses delay claiming or just the higher earner?",
                  "How do you coordinate spousal claiming with individual benefit optimization?",
                  "What role does the age gap between spouses play in claiming strategy?",
                  "How do you plan for the surviving spouse's financial security?"
                ],
                examples: [
                  "Higher earner delays to 70, lower earner may claim earlier for income",
                  "Higher earner should usually delay for maximum survivor benefit protection",
                  "Consider total household income and tax implications of different strategies",
                  "Large age gaps may favor different strategies than same-age couples",
                  "Maximize the survivor benefit by having higher earner delay claiming"
                ]
              },
              {
                title: "Special Situations & Considerations",
                prompts: [
                  "How do government pensions affect spousal and survivor Social Security benefits?",
                  "What Social Security benefits are available to divorced spouses?",
                  "How do remarriage considerations affect Social Security planning?",
                  "What happens to benefits if a spouse becomes disabled?",
                  "How do same-sex marriage rights affect Social Security benefits?"
                ],
                examples: [
                  "Government Pension Offset may reduce spousal/survivor benefits by 2/3 of pension",
                  "Can claim on ex-spouse if married 10+ years, divorced 2+ years, and unmarried",
                  "Remarriage before age 60 eliminates survivor benefits, after age 60 preserves them",
                  "Disabled spouse may be eligible for Social Security disability benefits",
                  "Same-sex couples have same Social Security rights as opposite-sex couples"
                ]
              }
            ]}
            tips={[
              "The higher-earning spouse should strongly consider delaying to age 70 for survivor benefits",
              "Divorced spouses can claim benefits without affecting their ex-spouse's benefits",
              "Remarriage timing can significantly impact survivor benefit eligibility",
              "Coordinate spousal claiming strategies with overall retirement and tax planning",
              "Consider both spouses' longevity when developing claiming strategies"
            ]}
          />
        </TabsContent>

        <TabsContent value="tax-planning">
          <GuidedNotePage
            title="Social Security Tax Planning"
            description="Understand and minimize taxes on Social Security benefits"
            sections={[
              {
                title: "Taxation of Social Security Benefits",
                prompts: [
                  "What determines whether your Social Security benefits are taxable?",
                  "How much of your Social Security benefits might be subject to income tax?",
                  "What income thresholds trigger taxation of Social Security benefits?",
                  "How do you calculate your provisional income for Social Security taxation?",
                  "What strategies can help minimize taxes on Social Security benefits?"
                ],
                examples: [
                  "Combined income (AGI + nontaxable interest + 50% of SS benefits) determines taxation",
                  "Up to 50% or 85% of benefits may be taxable depending on income level",
                  "$25K single/$32K married filing jointly for 50%, $34K single/$44K married for 85%",
                  "Adjusted gross income + tax-free interest + half of Social Security benefits",
                  "Manage other retirement income, use Roth accounts, municipal bonds for tax-free interest"
                ]
              },
              {
                title: "Income Management Strategies",
                prompts: [
                  "How can you manage your retirement income to minimize Social Security taxes?",
                  "What role do Roth accounts play in Social Security tax planning?",
                  "Should you consider municipal bonds to reduce taxable income?",
                  "How can you time retirement account withdrawals to minimize Social Security taxes?",
                  "What tax planning should you do before claiming Social Security?"
                ],
                examples: [
                  "Keep combined income below taxation thresholds through strategic withdrawals",
                  "Roth withdrawals don't count toward provisional income calculation",
                  "Municipal bond interest doesn't count as taxable income but does count for SS taxation",
                  "Large IRA withdrawals in early retirement, before claiming Social Security",
                  "Roth conversions before age 62 to reduce future required minimum distributions"
                ]
              },
              {
                title: "State Tax Considerations",
                prompts: [
                  "Does your state tax Social Security benefits?",
                  "Should state taxation of Social Security influence your retirement location?",
                  "How do state tax policies differ regarding Social Security benefits?",
                  "What other state tax factors should you consider for retirement planning?",
                  "How do you evaluate the total tax impact of different retirement locations?"
                ],
                examples: [
                  "Most states don't tax Social Security, but some do with various exemptions",
                  "Consider total tax burden, not just Social Security taxation",
                  "Some states exempt all SS benefits, others have income-based exemptions",
                  "State income taxes, property taxes, sales taxes, estate taxes",
                  "Compare total cost of living and tax burden, not just individual tax components"
                ]
              },
              {
                title: "Advanced Tax Planning Strategies",
                prompts: [
                  "How can charitable giving strategies help with Social Security tax planning?",
                  "What role does tax-loss harvesting play in managing Social Security taxes?",
                  "Should you consider qualified charitable distributions from IRAs?",
                  "How can you plan for Medicare premium surcharges (IRMAA) related to income?",
                  "What estate planning strategies can help minimize Social Security taxes for surviving spouse?"
                ],
                examples: [
                  "Qualified charitable distributions reduce AGI and provisional income",
                  "Harvesting losses can offset gains and reduce adjusted gross income",
                  "QCDs count toward RMDs but don't increase taxable or provisional income",
                  "High income triggers higher Medicare premiums - plan for 2-year lookback",
                  "Roth conversions and life insurance can provide tax-free income to survivor"
                ]
              }
            ]}
            tips={[
              "Plan your retirement income strategy to minimize Social Security taxation",
              "Use Roth accounts strategically since withdrawals don't count as provisional income",
              "Consider doing Roth conversions before claiming Social Security to reduce future RMDs",
              "Municipal bond interest counts toward Social Security taxation even though it's tax-free",
              "Review your Social Security tax situation annually and adjust withdrawal strategies"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}