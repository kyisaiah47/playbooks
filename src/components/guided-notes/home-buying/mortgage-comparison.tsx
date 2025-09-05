"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function MortgageComparison() {
  return (
    <GuidedNotePage
      title="Mortgage Comparison & Pre-Approval"
      description="Compare loan options and get pre-approved to strengthen your buying position."
      sections={[
        {
          title: "Loan Types & Terms",
          prompts: [
            "What loan types are you considering and why?",
            "What loan term length fits your financial goals?",
            "Do you qualify for any special loan programs?",
            "What's your target down payment percentage?"
          ],
          examples: [
            "30-year conventional for lower payments, 15-year to save interest",
            "30-year for lower payments, 15-year to build equity faster",
            "FHA loan for lower down payment, VA loan for military benefits",
            "20% to avoid PMI, or 10% to preserve cash for renovations"
          ]
        },
        {
          title: "Interest Rates & Costs",
          prompts: [
            "What interest rates are lenders offering you?",
            "How do points and fees compare between lenders?",
            "What's the total cost difference over the loan term?",
            "Are you considering buying down your rate with points?"
          ],
          examples: [
            "Bank A: 6.5%, Credit Union: 6.25%, Online lender: 6.375%",
            "Lender 1: $3,200 fees, Lender 2: $2,800 fees + 0.5 points",
            "$15,000 more in interest over 30 years with higher rate",
            "Pay 2 points ($8,000) to reduce rate from 6.5% to 6.0%"
          ]
        },
        {
          title: "Pre-Approval Process",
          prompts: [
            "What documents do you need to gather for pre-approval?",
            "What's your debt-to-income ratio and monthly payment capacity?",
            "How long is your pre-approval letter valid?",
            "What conditions might affect your final approval?"
          ],
          examples: [
            "2 years tax returns, pay stubs, bank statements, investment accounts",
            "DTI of 35%, can afford $2,800/month payment including taxes/insurance",
            "Pre-approval valid for 90 days, may need to update if expires",
            "Job change, large purchases, or credit score changes before closing"
          ]
        },
        {
          title: "Lender Comparison",
          prompts: [
            "Which lenders are you considering and what's their reputation?",
            "How responsive and helpful is each loan officer?",
            "What's the typical timeline from application to closing?",
            "What do recent customers say about their experience?"
          ],
          examples: [
            "Local credit union, national bank, online lender, mortgage broker",
            "Returns calls within 2 hours, explains options clearly, proactive updates",
            "30-45 day closing timeline, 21 days for cash-out refinance",
            "Check Google reviews, ask realtor for recommendations, BBB ratings"
          ]
        }
      ]}
      tips={[
        "Get pre-approved before house hunting to know your exact budget",
        "Shop with 3-5 lenders within a 14-day window to minimize credit impact",
        "Compare APR (total cost) not just interest rates between lenders",
        "Don't make major financial changes between pre-approval and closing",
        "Consider local lenders who may offer more personalized service",
        "Keep pre-approval letter current - update every 90 days if needed"
      ]}
    />
  )
}