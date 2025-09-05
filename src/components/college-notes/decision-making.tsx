"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function DecisionMaking() {
  return (
    <GuidedNotePage
      title="College Decision Making"
      description="Evaluate acceptances and make your final college choice thoughtfully."
      sections={[
        {
          title: "Acceptance Evaluation",
          prompts: [
            "How will you compare different acceptance offers?",
            "What factors are most important in your final decision?",
            "How do financial aid packages compare across schools?",
            "Which schools align best with your academic and personal goals?"
          ],
          examples: [
            "Create comparison charts for academics, cost, location, culture",
            "Calculate total 4-year costs including projected increases",
            "Compare net prices after financial aid and scholarships",
            "Evaluate program strength, research opportunities, career outcomes",
            "Consider campus culture fit and personal happiness factors"
          ]
        },
        {
          title: "Final School Visits & Research",
          prompts: [
            "Which accepted schools deserve a second visit?",
            "What additional information do you need to make your decision?",
            "Who can provide insights about each school option?",
            "How will you experience student life at your top choices?"
          ],
          examples: [
            "Attend accepted student days at top 2-3 schools",
            "Stay overnight with current students if possible",
            "Meet with professors in your intended major",
            "Connect with alumni in careers you're interested in",
            "Research recent graduates' outcomes and career paths"
          ]
        },
        {
          title: "Family & Support System Input",
          prompts: [
            "How will you involve your family in the decision process?",
            "What concerns or priorities do your parents have?",
            "How will you address financial considerations as a family?",
            "What support do you need to feel confident in your choice?"
          ],
          examples: [
            "Family meetings to discuss pros and cons of each option",
            "Address parent concerns about distance, cost, or prestige",
            "Discuss family financial commitments and expectations",
            "Seek input from trusted mentors, teachers, and counselors",
            "Balance family input with your personal preferences and goals"
          ]
        },
        {
          title: "Final Decision & Commitment",
          prompts: [
            "What's your deadline for making a final decision?",
            "How will you communicate your choice to all schools?",
            "What steps are needed to confirm your enrollment?",
            "How will you handle any lingering doubts or concerns?"
          ],
          examples: [
            "Submit enrollment deposit by May 1st deadline",
            "Politely decline offers from schools you're not attending",
            "Complete housing applications and orientation registration",
            "Register for placement exams and course selection",
            "Trust your decision-making process and embrace your choice"
          ]
        }
      ]}
      tips={[
        "Trust your instincts about where you feel most comfortable and excited",
        "Consider long-term fit over short-term prestige or rankings",
        "Remember that you can succeed at any school with the right attitude",
        "Don't second-guess your decision once it's made - focus forward",
        "Choose the school where you can see yourself growing and thriving"
      ]}
    />
  )
}