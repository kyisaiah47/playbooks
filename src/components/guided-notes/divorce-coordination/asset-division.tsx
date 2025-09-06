"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AssetDivision() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Asset Division & Property Settlement</h1>
        <p className="text-muted-foreground">Plan the fair division of marital property and debts.</p>
      </div>

      <Tabs defaultValue="property-types" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="property-types" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Property Types</span>
            <span className="sm:hidden">Types</span>
          </TabsTrigger>
          <TabsTrigger value="division-methods" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Division Methods</span>
            <span className="sm:hidden">Methods</span>
          </TabsTrigger>
          <TabsTrigger value="valuation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Valuation</span>
            <span className="sm:hidden">Values</span>
          </TabsTrigger>
          <TabsTrigger value="negotiations" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Negotiations</span>
            <span className="sm:hidden">Negotiate</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="property-types">
          <GuidedNotePage
            title="Understanding Marital vs Separate Property"
            description="Identify what assets are subject to division in your divorce"
            sections={[
              {
                title: "Marital Property Definition",
                prompts: [
                  "What assets are considered marital property in your state?",
                  "How do you determine the acquisition date of assets?",
                  "What happens to property acquired before marriage?",
                  "How are gifts and inheritances treated?",
                  "What about property acquired after separation?"
                ],
                examples: [
                  "Generally assets acquired during marriage, regardless of whose name they're in",
                  "Date of purchase, title transfer, or when first acquired matters",
                  "Usually separate property unless commingled with marital assets",
                  "Gifts/inheritance to one spouse typically separate, unless commingled",
                  "May be separate property depending on state law and date of separation"
                ]
              },
              {
                title: "Real Estate Considerations",
                prompts: [
                  "How will you handle the marital home?",
                  "What about other real estate properties?",
                  "Who should keep the house and who should move out?",
                  "How will you determine the fair market value?",
                  "What are the tax implications of keeping vs selling?"
                ],
                examples: [
                  "Keep jointly, one buys out the other, sell and split proceeds",
                  "Vacation homes, rental properties, undeveloped land, timeshares",
                  "Consider children's needs, financial ability to maintain, emotional attachment",
                  "Professional appraisal, comparative market analysis, recent sales data",
                  "Capital gains tax on sale, property tax reassessment, mortgage qualification"
                ]
              },
              {
                title: "Retirement and Investment Accounts",
                prompts: [
                  "How are retirement accounts divided in divorce?",
                  "What's the process for dividing 401(k) and pension plans?",
                  "How do you handle investment and brokerage accounts?",
                  "What about stock options and deferred compensation?",
                  "Are there tax consequences to retirement account divisions?"
                ],
                examples: [
                  "Usually marital portion subject to division, separate portion remains separate",
                  "QDRO required for most employer plans, direct transfer to avoid taxes",
                  "Market value on specific date, consider tax basis differences",
                  "Vested vs unvested options, timing of exercise, tax implications",
                  "IRA transfers tax-free, early withdrawal penalties may apply to some distributions"
                ]
              },
              {
                title: "Business and Professional Interests",
                prompts: [
                  "How do you value and divide business interests?",
                  "What happens to professional practices or partnerships?",
                  "Are there restrictions on transferring business interests?",
                  "How do you handle ongoing business income vs asset value?",
                  "What about intellectual property and professional licenses?"
                ],
                examples: [
                  "Professional valuation needed, consider marketability discounts",
                  "Buy-out provisions, partnership agreements, professional restrictions",
                  "Partnership agreements may limit transfers, need partner consent",
                  "Ongoing earnings vs one-time asset division, future income considerations",
                  "Patents, copyrights, professional licenses may have limited transferability"
                ]
              }
            ]}
            tips={[
              "Distinguish between marital and separate property early in the process",
              "Get professional appraisals for significant assets like real estate and businesses",
              "Consider the tax implications of different division scenarios",
              "Think about liquidity - some assets are easier to divide than others",
              "Document the acquisition and funding source of all major assets"
            ]}
          />
        </TabsContent>

        <TabsContent value="division-methods">
          <GuidedNotePage
            title="Methods of Property Division"
            description="Understand different approaches to dividing marital assets"
            sections={[
              {
                title: "Equal vs Equitable Distribution",
                prompts: [
                  "Does your state follow equal distribution or equitable distribution rules?",
                  "What factors affect how property is divided?",
                  "How do you argue for a larger share of marital assets?",
                  "What constitutes a fair division in your circumstances?",
                  "How do fault grounds affect property division?"
                ],
                examples: [
                  "Community property states presume 50/50 split, equitable distribution varies",
                  "Length of marriage, income disparity, contributions to marriage, future needs",
                  "Higher income contribution, career sacrifices, homemaker contributions, fault conduct",
                  "Consider earning capacity, age, health, child custody arrangements",
                  "Some states consider adultery or abuse, others are purely no-fault"
                ]
              },
              {
                title: "Division Strategies",
                prompts: [
                  "Should you divide each asset proportionally or trade off whole assets?",
                  "How do you handle assets that can't easily be divided?",
                  "What's the best approach for your specific situation?",
                  "How do you account for different types of assets and their liquidity?",
                  "What about assets with uncertain or fluctuating values?"
                ],
                examples: [
                  "Trade house for retirement accounts, give one spouse business for other assets",
                  "Family home, business interests, collectibles, professional practices",
                  "Immediate needs vs long-term security, tax implications, emotional attachment",
                  "Cash vs real estate vs retirement accounts have different access and tax treatment",
                  "Stock options, business interests, art collections may need special handling"
                ]
              },
              {
                title: "Debt Division",
                prompts: [
                  "How should marital debts be divided?",
                  "Who should be responsible for different types of debts?",
                  "How do you protect yourself from debts assigned to your spouse?",
                  "What about debts secured by marital property?",
                  "How do you handle joint credit obligations?"
                ],
                examples: [
                  "Usually follow same principles as asset division, but consider ability to pay",
                  "Secured debts often go with related assets, unsecured debts based on who incurred",
                  "Refinance or close joint accounts, remove spouse as authorized user",
                  "Mortgage stays with house, car loan with car, but may need refinancing",
                  "Both spouses remain liable to creditors despite divorce decree assignment"
                ]
              },
              {
                title: "Creative Solutions",
                prompts: [
                  "What creative solutions might work better than traditional division?",
                  "How can you structure division to meet both parties' needs?",
                  "What role does timing play in asset division?",
                  "How do you handle assets with sentimental value?",
                  "What about dividing assets over time rather than immediately?"
                ],
                examples: [
                  "Deferred sale of home, shared business ownership, structured settlements",
                  "One spouse needs liquidity now, other prefers long-term investments",
                  "Market timing for sale of assets, tax year considerations, retirement timing",
                  "Family heirlooms, wedding rings, children's items, photos and mementos",
                  "Installment payments, future asset sales, graduated distributions"
                ]
              }
            ]}
            tips={[
              "Focus on the total package rather than winning on every individual asset",
              "Consider the after-tax value of assets, not just their face value",
              "Think about your post-divorce financial needs and goals",
              "Be creative in structuring solutions that work for both parties",
              "Don't let emotions drive decisions about property division"
            ]}
          />
        </TabsContent>

        <TabsContent value="valuation">
          <GuidedNotePage
            title="Asset Valuation and Appraisals"
            description="Determine accurate values for fair property division"
            sections={[
              {
                title: "Real Estate Valuation",
                prompts: [
                  "What methods can you use to value real estate?",
                  "When do you need a professional appraisal vs other valuation methods?",
                  "How do you handle disagreements about property values?",
                  "What factors affect real estate values in divorce?",
                  "How current should valuations be for divorce purposes?"
                ],
                examples: [
                  "Professional appraisal, broker price opinion, comparative market analysis, tax assessment",
                  "High-value properties, disputed values, complex properties need professional appraisal",
                  "Average multiple appraisals, agree on single appraiser, let court decide",
                  "Market conditions, property condition, location, improvements, liens",
                  "Generally within 6 months of trial or settlement, closer for volatile markets"
                ]
              },
              {
                title: "Business Valuation",
                prompts: [
                  "What approaches exist for valuing business interests?",
                  "When do you need a professional business appraiser?",
                  "How do you value professional practices?",
                  "What about businesses with minimal market value?",
                  "How do partnership agreements affect business valuation?"
                ],
                examples: [
                  "Asset approach, income approach, market approach, or combination methods",
                  "Significant business value, complex operations, disputed values, professional practices",
                  "Goodwill value, client relationships, future earning potential, professional restrictions",
                  "Service businesses, personal goodwill, businesses dependent on owner's efforts",
                  "Buy-sell provisions, transfer restrictions, valuation formulas in agreements"
                ]
              },
              {
                title: "Personal Property Valuation",
                prompts: [
                  "How do you value personal property and household items?",
                  "What items justify professional appraisal?",
                  "How do you handle collections and specialty items?",
                  "What's the difference between replacement cost and fair market value?",
                  "How do you divide items with sentimental value?"
                ],
                examples: [
                  "Garage sale value for most household items, higher for valuable pieces",
                  "Jewelry, art, antiques, vehicles, expensive electronics, collections",
                  "Art collections, wine, coins, stamps need specialized appraisers",
                  "Fair market value (what buyer would pay) usually much less than replacement cost",
                  "Some items can't be valued in dollars - photos, family heirlooms, children's items"
                ]
              },
              {
                title: "Financial Asset Valuation",
                prompts: [
                  "How do you value investment accounts and financial assets?",
                  "What date should be used for valuation purposes?",
                  "How do you handle assets with fluctuating values?",
                  "What about restricted stock or stock options?",
                  "How do tax implications affect net asset values?"
                ],
                examples: [
                  "Market value on specific date, consider transaction costs and taxes",
                  "Date of separation, filing date, trial date, or settlement date depending on jurisdiction",
                  "Average values over time period, specific date values, or settlement date values",
                  "Vesting schedules, exercise prices, tax consequences, transfer restrictions",
                  "Tax basis differences, capital gains implications, retirement account tax-deferred status"
                ]
              }
            ]}
            tips={[
              "Get valuations as close to settlement or trial date as possible",
              "Consider the cost of appraisals relative to the value of assets being valued",
              "Document the condition and status of all assets at time of valuation",
              "Consider tax implications when determining net values of assets",
              "Be prepared to update valuations if asset values change significantly"
            ]}
          />
        </TabsContent>

        <TabsContent value="negotiations">
          <GuidedNotePage
            title="Negotiating Property Settlements"
            description="Develop strategies for effective property division negotiations"
            sections={[
              {
                title: "Negotiation Preparation",
                prompts: [
                  "What are your priorities and must-haves in property division?",
                  "What are you willing to compromise on to reach agreement?",
                  "How do you prepare for settlement negotiations?",
                  "What's your BATNA (best alternative to negotiated agreement)?",
                  "How do you value different assets for negotiation purposes?"
                ],
                examples: [
                  "Keeping the house, fair share of retirement accounts, maintaining business control",
                  "Some furniture, specific vehicles, non-essential assets with sentimental value",
                  "Complete asset inventory, valuations, tax calculations, cash flow analysis",
                  "Court trial outcome, strengths and weaknesses of your case",
                  "After-tax values, liquidity needs, long-term growth potential"
                ]
              },
              {
                title: "Settlement Strategies",
                prompts: [
                  "What negotiation strategies might work in your situation?",
                  "How do you structure offers and counteroffers?",
                  "What package deals might appeal to both parties?",
                  "How do you handle emotional attachments to specific assets?",
                  "When should you involve mediators or settlement professionals?"
                ],
                examples: [
                  "Interest-based negotiation vs positional bargaining, collaborative approach",
                  "Total package value, specific asset trades, graduated offers with deadlines",
                  "House for retirement accounts, business for liquid assets, even splits with adjustments",
                  "Focus on underlying interests, not just the specific asset",
                  "Complex cases, high conflict, need for neutral facilitator"
                ]
              },
              {
                title: "Common Settlement Issues",
                prompts: [
                  "What are the most common disputes in property division?",
                  "How do you handle disagreements about asset values?",
                  "What happens when one spouse won't cooperate with disclosure?",
                  "How do you deal with hidden or dissipated assets?",
                  "What about assets discovered after settlement?"
                ],
                examples: [
                  "House disposition, business valuation, retirement account division, debt allocation",
                  "Get second opinions, split the difference, agree on single appraiser",
                  "Discovery motions, subpoenas, sanctions for non-compliance",
                  "Forensic accounting, asset searches, penalties for waste or concealment",
                  "Disclosure requirements, reservation of claims, post-judgment modifications"
                ]
              },
              {
                title: "Finalizing Agreements",
                prompts: [
                  "How do you document property division agreements?",
                  "What implementation steps are needed after agreement?",
                  "How do you handle assets that require special transfer procedures?",
                  "What deadlines and contingencies should be included?",
                  "How do you ensure compliance with settlement terms?"
                ],
                examples: [
                  "Detailed settlement agreement, property transfer documents, court approval",
                  "Deeds, account transfers, title changes, loan modifications, insurance updates",
                  "QDROs for retirement plans, business interest transfers, real estate deeds",
                  "Sale deadlines, refinancing requirements, appraisal completion dates",
                  "Escrow arrangements, security provisions, enforcement mechanisms"
                ]
              }
            ]}
            tips={[
              "Focus on interests and needs, not just positions on specific assets",
              "Consider the total financial picture, not just individual assets",
              "Be prepared to make trade-offs to reach a reasonable overall settlement",
              "Document all agreements in writing with specific implementation steps",
              "Consider future implications and tax consequences of settlement terms"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}