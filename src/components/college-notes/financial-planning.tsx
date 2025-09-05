"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function FinancialPlanning() {
  return (
    <GuidedNotePage
      title="Financial Aid & Planning"
      description="Navigate financial aid applications and plan for college costs."
      sections={[
        {
          title: "FAFSA & Federal Aid",
          prompts: [
            "When will you submit your FAFSA application?",
            "What financial documents do you need to gather?",
            "What federal aid programs are you eligible for?",
            "How will you track your Student Aid Report (SAR)?"
          ],
          examples: [
            "Submit FAFSA as early as October 1st",
            "Tax returns, W-2s, bank statements, investment records",
            "Pell Grants, Federal Work-Study, Direct Loans",
            "Monitor FAFSA status and respond to verification requests",
            "Understand Expected Family Contribution (EFC) calculation"
          ]
        },
        {
          title: "State & Institutional Aid",
          prompts: [
            "What state grant programs are available in your state?",
            "Which schools offer the best institutional aid packages?",
            "What merit-based scholarships can you qualify for?",
            "How do you appeal or negotiate financial aid offers?"
          ],
          examples: [
            "State grant programs with residency requirements",
            "Need-based institutional grants and scholarships",
            "Merit scholarships based on GPA, test scores, or talents",
            "Financial aid appeal letters for special circumstances",
            "Comparing and negotiating aid packages between schools"
          ]
        },
        {
          title: "College Cost Analysis",
          prompts: [
            "What's the true cost of attendance at each school?",
            "How will you compare different financial aid packages?",
            "What additional expenses should you budget for?",
            "How much student debt are you comfortable taking on?"
          ],
          examples: [
            "Tuition, fees, room, board, books, personal expenses",
            "Net price calculators for realistic cost estimates",
            "Transportation, technology, and miscellaneous costs",
            "Federal loan limits and recommended debt levels",
            "4-year total cost projections with inflation"
          ]
        },
        {
          title: "Alternative Funding Sources",
          prompts: [
            "What work-study or part-time job opportunities exist?",
            "Are there payment plan options to spread costs?",
            "What family resources are available for college costs?",
            "How can you reduce college expenses while enrolled?"
          ],
          examples: [
            "Campus work-study positions and off-campus jobs",
            "Monthly payment plans to avoid interest charges",
            "529 plans, savings accounts, and family contributions",
            "Community college credits, AP credits, and summer courses",
            "Used textbooks, shared housing, and budget meal plans"
          ]
        }
      ]}
      tips={[
        "Submit FAFSA annually and by priority deadlines for maximum aid",
        "Never pay for FAFSA help - it's free to complete",
        "Understand the difference between grants, scholarships, and loans",
        "Keep detailed records of all financial aid correspondence",
        "Consider the long-term implications of student loan debt"
      ]}
    />
  )
}