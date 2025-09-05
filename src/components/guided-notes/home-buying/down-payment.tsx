"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function DownPayment() {
  return (
    <GuidedNotePage
      title="Down Payment Strategy"
      description="Plan and optimize your down payment to maximize your buying power and minimize costs."
      sections={[
        {
          title: "Down Payment Options",
          prompts: [
            "What down payment percentages are you considering?",
            "How will different down payment amounts affect your monthly payment?",
            "What are the PMI costs if you put down less than 20%?",
            "Do you qualify for any down payment assistance programs?"
          ],
          examples: [
            "20% ($80k) to avoid PMI, or 10% ($40k) to preserve cash",
            "20% down = $2,100/month, 10% down = $2,400/month + PMI",
            "PMI costs $200/month on $400k loan with 10% down",
            "First-time buyer grants, VA loans, USDA rural loans"
          ]
        },
        {
          title: "Funding Sources",
          prompts: [
            "Where will your down payment money come from?",
            "Do you need to liquidate investments or retirement accounts?",
            "Are family members contributing gift funds?",
            "What's your timeline for accumulating the full amount?"
          ],
          examples: [
            "$50k from savings, $20k from stock sale, $10k family gift",
            "Sell $30k in mutual funds, avoid 401k early withdrawal penalty",
            "Parents gifting $25k, need gift letter for lender documentation",
            "Need 6 more months to save additional $15k for target amount"
          ]
        },
        {
          title: "Cash Reserve Planning",
          prompts: [
            "How much cash do you want to keep in reserve after closing?",
            "What emergency fund amount makes you comfortable?",
            "Are you planning any immediate home improvements?",
            "What other major expenses might you face in the first year?"
          ],
          examples: [
            "Keep $20k liquid for emergencies and unexpected repairs",
            "6 months of mortgage payments ($15k) plus $10k buffer",
            "Budget $5k for immediate fixes and $10k for renovations",
            "New appliances, landscaping, security system, furniture"
          ]
        },
        {
          title: "Tax & Investment Implications",
          prompts: [
            "What are the tax implications of your funding sources?",
            "Should you consider a larger or smaller down payment for tax benefits?",
            "How will this affect your overall investment strategy?",
            "What's the opportunity cost of tying up this money in real estate?"
          ],
          examples: [
            "Capital gains tax on stock sales, gift tax considerations",
            "Lower down payment allows mortgage interest deduction",
            "Reduces stock portfolio but increases real estate allocation",
            "$80k down payment vs investing in market at 7% return"
          ]
        }
      ]}
      tips={[
        "Don't deplete all your savings for a larger down payment",
        "Factor in closing costs (2-3% of purchase price) beyond down payment",
        "Get gift letters from family members before applying for mortgage",
        "Consider timing of asset sales to minimize tax impact",
        "Keep 3-6 months of housing expenses in emergency fund after closing",
        "Calculate break-even point between PMI costs and investment returns"
      ]}
    />
  )
}