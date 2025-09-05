"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function PropertyTaxes() {
  return (
    <GuidedNotePage
      title="Property Tax Planning"
      description="Understand property taxes and plan for this ongoing homeownership expense."
      sections={[
        {
          title: "Understanding Assessment",
          prompts: [
            "How is your property's assessed value determined?",
            "When and how often are properties reassessed?",
            "What factors can cause your assessment to increase or decrease?",
            "How does the purchase price affect future assessments?"
          ],
          examples: [
            "County assessor reviews sales data, property improvements, market conditions",
            "Annual reassessment, or every 3-5 years depending on local laws",
            "Home improvements add value, market decline may reduce assessment",
            "Purchase price often becomes new assessed value within 1-2 years"
          ]
        },
        {
          title: "Tax Rates & Calculations",
          prompts: [
            "What are the current property tax rates in your target area?",
            "How do tax rates vary between different municipalities?",
            "What additional taxes or fees might apply to your property?",
            "How are exemptions and deductions calculated?"
          ],
          examples: [
            "1.2% effective rate = $4,800 annually on $400k assessed value",
            "City rates vary from 0.8% to 2.5% even in same county",
            "School district taxes, special assessments, HOA fees",
            "Homestead exemption reduces taxable value by $50k-$100k"
          ]
        },
        {
          title: "Budgeting & Escrow",
          prompts: [
            "How much should you budget monthly for property taxes?",
            "Should you escrow property taxes with your mortgage payment?",
            "What happens if property taxes increase after you buy?",
            "How do you plan for special assessments or tax increases?"
          ],
          examples: [
            "$400/month for $4,800 annual taxes, plus 10% buffer for increases",
            "Escrow for convenience, self-pay for control and potential interest earnings",
            "Mortgage payment increases, or you pay difference if self-escrowing",
            "Build 5-10% annual increase into long-term budget planning"
          ]
        },
        {
          title: "Appeals & Optimization",
          prompts: [
            "When should you consider appealing your property assessment?",
            "What evidence do you need to support an assessment appeal?",
            "What exemptions might you qualify for to reduce tax burden?",
            "How do major home improvements affect your future tax liability?"
          ],
          examples: [
            "Assessment seems high compared to recent sales of similar homes",
            "Recent comparable sales, property condition issues, assessment errors",
            "Homestead, senior, veteran, disability exemptions reduce taxable value",
            "$50k renovation may increase assessment by $30k-40k next year"
          ]
        }
      ]}
      tips={[
        "Research property tax rates early in your home search - they vary significantly by location",
        "Factor in potential tax increases when calculating long-term affordability",
        "Apply for all exemptions you qualify for immediately after closing",
        "Keep detailed records of home improvements for potential assessment appeals",
        "Review your assessment notice annually and compare to similar home sales",
        "Consider timing of major improvements to manage assessment impact"
      ]}
    />
  )
}