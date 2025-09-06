"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SupportPlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Support Planning & Calculations</h1>
        <p className="text-muted-foreground">Understand child support and alimony considerations and calculations.</p>
      </div>

      <Tabs defaultValue="child-support" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="child-support" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Child Support</span>
            <span className="sm:hidden">Child</span>
          </TabsTrigger>
          <TabsTrigger value="alimony" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Alimony</span>
            <span className="sm:hidden">Alimony</span>
          </TabsTrigger>
          <TabsTrigger value="calculations" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Calculations</span>
            <span className="sm:hidden">Calc</span>
          </TabsTrigger>
          <TabsTrigger value="modifications" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Modifications</span>
            <span className="sm:hidden">Modify</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="child-support">
          <GuidedNotePage
            title="Child Support Planning and Guidelines"
            description="Understand how child support is calculated and what expenses are covered"
            sections={[
              {
                title: "Child Support Guidelines",
                prompts: [
                  "How does your state calculate child support?",
                  "What income is included in child support calculations?",
                  "How does custody time affect child support amounts?",
                  "What expenses are covered by basic child support?",
                  "When might you deviate from standard guidelines?"
                ],
                examples: [
                  "Income shares model, percentage of income model, or Melson formula",
                  "Gross income from all sources, potential imputed income if underemployed",
                  "More parenting time generally reduces support obligation",
                  "Housing, food, clothing, basic healthcare, education, transportation",
                  "High income cases, special needs children, extraordinary expenses"
                ]
              },
              {
                title: "Additional Child Expenses",
                prompts: [
                  "What expenses beyond basic support might be shared?",
                  "How will you handle childcare and after-school care costs?",
                  "What about healthcare costs and insurance coverage?",
                  "How will extracurricular activities be funded?",
                  "What educational expenses should be considered?"
                ],
                examples: [
                  "Childcare, medical expenses, extracurriculars, private school, summer camps",
                  "Work-related childcare typically shared proportionally to income",
                  "Health insurance premiums, unreimbursed medical expenses, copays",
                  "Sports, music lessons, summer camps often shared based on agreement",
                  "Private school tuition, tutoring, college expenses if agreed upon"
                ]
              },
              {
                title: "Income Considerations",
                prompts: [
                  "How do you calculate income for child support purposes?",
                  "What happens if income varies significantly?",
                  "How are bonuses and irregular income treated?",
                  "What if one parent is unemployed or underemployed?",
                  "How do benefits and non-cash compensation factor in?"
                ],
                examples: [
                  "Gross income before taxes and deductions, average over time periods",
                  "Use average of recent years, seasonal adjustments, review periodically",
                  "May be averaged over multiple years or trigger modification when received",
                  "Court may impute income based on earning capacity and job market",
                  "Company car, housing allowance, stock options may count as income"
                ]
              },
              {
                title: "Special Circumstances",
                prompts: [
                  "How do special needs children affect support calculations?",
                  "What about children from previous relationships?",
                  "How does joint custody impact support obligations?",
                  "What happens with high-income families?",
                  "How are multiple children handled in calculations?"
                ],
                examples: [
                  "Additional medical, therapy, education, and care costs may be shared",
                  "Existing support obligations reduce available income for calculation",
                  "Support may be reduced or eliminated with true 50/50 custody and equal incomes",
                  "Guidelines may not apply above certain income levels, court has discretion",
                  "Support typically increases with each additional child but not proportionally"
                ]
              }
            ]}
            tips={[
              "Child support is typically tax-free to recipient and non-deductible to payer",
              "Support usually continues until age 18 or high school graduation, whichever is later",
              "Document all child-related expenses to support requests for additional costs",
              "Review state guidelines and use official calculators for estimates",
              "Consider automatic cost-of-living adjustments or periodic review provisions"
            ]}
          />
        </TabsContent>

        <TabsContent value="alimony">
          <GuidedNotePage
            title="Spousal Support and Alimony Planning"
            description="Understand spousal support considerations and factors"
            sections={[
              {
                title: "Types of Spousal Support",
                prompts: [
                  "What types of spousal support are available in your state?",
                  "When is temporary support appropriate during divorce?",
                  "What's the difference between rehabilitative and permanent support?",
                  "How long might spousal support continue?",
                  "What factors determine if support is appropriate?"
                ],
                examples: [
                  "Temporary, rehabilitative, permanent, reimbursement, or lump sum alimony",
                  "During divorce proceedings to maintain status quo and cover living expenses",
                  "Rehabilitative helps spouse become self-supporting, permanent for long marriages",
                  "Duration often related to length of marriage - short marriages may get none",
                  "Income disparity, length of marriage, age, health, contributions to marriage"
                ]
              },
              {
                title: "Support Calculation Factors",
                prompts: [
                  "How do courts determine spousal support amounts?",
                  "What role does each spouse's income and earning capacity play?",
                  "How do marital lifestyle and standard of living factor in?",
                  "What about age, health, and employability considerations?",
                  "How do contributions to marriage affect support decisions?"
                ],
                examples: [
                  "Need vs ability to pay, percentage formulas in some states, judicial discretion",
                  "Current income, potential income, education level, work history, job skills",
                  "Maintain similar standard where possible, but both spouses may need to adjust",
                  "Health issues, age near retirement, time out of workforce affects capacity",
                  "Homemaker contributions, supporting spouse's education/career, business contributions"
                ]
              },
              {
                title: "Duration and Modification",
                prompts: [
                  "How long should spousal support continue?",
                  "What events might terminate or modify support?",
                  "How do remarriage and cohabitation affect ongoing support?",
                  "What happens if the paying spouse's income changes?",
                  "Can support be modified or is it fixed at divorce?"
                ],
                examples: [
                  "Rule of thumb: half the length of marriage, but varies by circumstances",
                  "Remarriage, cohabitation, death, retirement, significant income changes",
                  "Remarriage usually terminates support, cohabitation may reduce or terminate",
                  "Job loss, disability, retirement may justify modification proceedings",
                  "Most support is modifiable unless specifically made non-modifiable"
                ]
              },
              {
                title: "Tax and Financial Planning",
                prompts: [
                  "What are the tax implications of spousal support?",
                  "How should support payments be structured?",
                  "What security can be provided for support payments?",
                  "How does alimony interact with property division?",
                  "What happens if support payments aren't made?"
                ],
                examples: [
                  "Under new tax law, alimony is generally not taxable to recipient or deductible to payer",
                  "Monthly payments vs lump sum, automatic adjustments, payment method",
                  "Life insurance, security bonds, wage garnishment, asset security",
                  "Sometimes trade higher property award for lower/no alimony",
                  "Contempt of court, wage garnishment, asset seizure, credit reporting"
                ]
              }
            ]}
            tips={[
              "Consider both the amount and duration of support when negotiating",
              "Factor in tax consequences under current tax law changes",
              "Think about your long-term financial security and retirement planning",
              "Consider lump sum settlements vs ongoing monthly payments",
              "Document the paying spouse's ability to pay and provide security for payments"
            ]}
          />
        </TabsContent>

        <TabsContent value="calculations">
          <GuidedNotePage
            title="Support Calculations and Worksheets"
            description="Work through the numbers to understand potential support obligations"
            sections={[
              {
                title: "Income Calculation Worksheets",
                prompts: [
                  "What is your gross monthly income from all sources?",
                  "What deductions are allowed when calculating support income?",
                  "How do you calculate your spouse's income for support purposes?",
                  "What income documentation will you need for court?",
                  "How do you handle irregular or seasonal income?"
                ],
                examples: [
                  "Salary, bonuses, commissions, rental income, investment returns, benefits",
                  "Taxes, mandatory retirement contributions, union dues, prior support orders",
                  "W-2s, tax returns, pay stubs, bank deposits, business records",
                  "3 years tax returns, recent pay stubs, financial affidavit",
                  "Average over 12-24 months, seasonal adjustments, good faith estimates"
                ]
              },
              {
                title: "Child Support Worksheets",
                prompts: [
                  "How do you use your state's child support guidelines?",
                  "What information goes into the support calculation worksheet?",
                  "How do custody arrangements affect the calculations?",
                  "What additional expenses should be factored in?",
                  "How do you handle multiple children with different custody schedules?"
                ],
                examples: [
                  "Official state calculator, worksheet forms, online tools available",
                  "Both parents' income, number of children, custody percentage, other expenses",
                  "Overnights per year, shared custody adjustments, transportation costs",
                  "Childcare, health insurance, extraordinary medical, extracurriculars",
                  "Separate calculations for each child or combined family approach"
                ]
              },
              {
                title: "Spousal Support Estimations",
                prompts: [
                  "How do you estimate potential spousal support amounts?",
                  "What percentage of income difference might be used?",
                  "How do living expenses factor into support calculations?",
                  "What duration might be appropriate for your marriage?",
                  "How do you account for taxes in support planning?"
                ],
                examples: [
                  "Some states use formulas (30-40% of income difference), others use discretion",
                  "Common range is 20-40% of income disparity depending on circumstances",
                  "Budget analysis, standard of living during marriage, reasonable needs",
                  "Short marriage: 0-5 years, medium: 5-15 years, long: 15+ years",
                  "Consider tax implications of different payment structures and amounts"
                ]
              },
              {
                title: "Financial Impact Analysis",
                prompts: [
                  "How will support payments affect your post-divorce budget?",
                  "What's the total monthly support obligation including both types?",
                  "Can the paying spouse afford the calculated support amounts?",
                  "How will support affect your ability to maintain housing?",
                  "What happens if support calculations exceed ability to pay?"
                ],
                examples: [
                  "Net income after support vs living expenses, savings capacity, debt service",
                  "Child support plus alimony plus any other court-ordered payments",
                  "Income minus taxes, support, and basic living expenses should leave reasonable amount",
                  "Housing costs typically 25-35% of income, may need downsizing",
                  "Court may adjust amounts, impute income, or order lifestyle changes"
                ]
              }
            ]}
            tips={[
              "Use official state calculators and worksheets for accurate estimates",
              "Gather complete financial information before running calculations",
              "Consider hiring a financial expert for complex income situations",
              "Factor in taxes and real-world cash flow, not just gross numbers",
              "Remember that calculations are starting points - final amounts may vary based on circumstances"
            ]}
          />
        </TabsContent>

        <TabsContent value="modifications">
          <GuidedNotePage
            title="Support Modifications and Enforcement"
            description="Plan for future changes and ensure payment compliance"
            sections={[
              {
                title: "Modification Circumstances",
                prompts: [
                  "What circumstances justify modifying support orders?",
                  "How significant must income changes be to warrant modification?",
                  "What about changes in custody or living arrangements?",
                  "How do you request a support modification?",
                  "When do modifications take effect?"
                ],
                examples: [
                  "Substantial change in income (usually 15-20%), job loss, disability, retirement",
                  "Generally need 15-25% change in calculated support amount",
                  "Changes in custody time, relocation, children's changing needs",
                  "Motion to court, financial affidavits, evidence of changed circumstances",
                  "Usually effective from date of filing motion, not from when circumstances changed"
                ]
              },
              {
                title: "Automatic Adjustments",
                prompts: [
                  "Should your support order include automatic cost-of-living adjustments?",
                  "What about automatic review periods for modifications?",
                  "How can you build flexibility into support orders?",
                  "What triggers should prompt support review?",
                  "How do you handle predictable income changes?"
                ],
                examples: [
                  "Annual COLA increases based on consumer price index or specific percentage",
                  "Review every 2-3 years or when specific events occur",
                  "Income sharing formulas, percentage-based adjustments, milestone reviews",
                  "Job changes, children aging out, remarriage, retirement eligibility",
                  "Known raises, bonus structures, retirement dates can be planned for"
                ]
              },
              {
                title: "Support Enforcement",
                prompts: [
                  "What happens if support payments aren't made on time?",
                  "What enforcement tools are available for unpaid support?",
                  "How do you collect past-due support (arrearages)?",
                  "What if the paying spouse moves to another state?",
                  "How do you protect against non-payment risks?"
                ],
                examples: [
                  "Interest accrues, contempt proceedings, enforcement actions begin",
                  "Wage garnishment, asset seizure, license suspension, contempt of court",
                  "Payment plans, asset liquidation, interception of tax refunds",
                  "Interstate enforcement through UIFSA, reciprocal state agreements",
                  "Wage assignments, life insurance requirements, bonds or security"
                ]
              },
              {
                title: "Planning for Support Changes",
                prompts: [
                  "How should you plan financially for potential support changes?",
                  "What documentation should you maintain regarding support?",
                  "How do you prepare for support termination dates?",
                  "What about planning for the paying spouse's retirement?",
                  "How do remarriage and cohabitation affect support planning?"
                ],
                examples: [
                  "Emergency funds, career development, education/training for recipients",
                  "Payment records, income changes, custody modifications, expense tracking",
                  "Gradual reduction plans, career development, alternative income sources",
                  "Retirement income calculations, modification procedures, security planning",
                  "Financial independence planning, impact on support obligations and rights"
                ]
              }
            ]}
            tips={[
              "Keep detailed records of all support payments made and received",
              "Address potential modification circumstances in your original divorce agreement",
              "Consider wage assignment from the start to ensure consistent payments",
              "Plan financially for both paying and receiving support to end eventually",
              "Consult with attorneys before making significant changes that might affect support"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}