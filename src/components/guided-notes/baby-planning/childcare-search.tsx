"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function ChildcareSearch() {
  return (
    <GuidedNotePage
      title="Childcare Research & Setup"
      description="Find and evaluate childcare options that align with your family&apos;s needs and values."
      sections={[
        {
          title: "Types of Childcare",
          prompts: [
            "What type of childcare arrangement best fits your family&apos;s needs?",
            "What are your priorities for your child&apos;s care environment?",
            "How do different care options align with your budget?",
            "What location and schedule requirements do you have?",
            "How important is continuity of care vs flexibility?"
          ],
          examples: [
            "Daycare center, family daycare, nanny share, relative care",
            "Educational focus, small group size, outdoor play, healthy meals",
            "Daycare: $200-400/week, Nanny: $500-800/week, Family: varies",
            "Within 10 minutes of home/work, open 7am-6pm, flexible pickup",
            "Same caregiver daily vs multiple staff, backup care availability"
          ]
        },
        {
          title: "Evaluating Providers",
          prompts: [
            "What questions will help you assess quality of care?",
            "How will you verify credentials and safety standards?",
            "What red flags should you watch for during visits?",
            "How will you assess the caregiver&apos;s interaction with children?",
            "What references and background checks are important?"
          ],
          examples: [
            "Daily routine, discipline approach, sick child policy, emergency procedures",
            "License current, CPR certified, background checks completed",
            "Dirty facilities, unhappy children, poor communication, high turnover",
            "Warm interactions, age-appropriate activities, patient responses",
            "3 current family references, criminal background check, driving record"
          ]
        },
        {
          title: "Practical Considerations",
          prompts: [
            "What items and preparations are needed before starting childcare?",
            "How will you handle the transition and separation anxiety?",
            "What communication systems work best with your provider?",
            "How will you manage sick days and backup care?",
            "What ongoing evaluation process will you establish?"
          ],
          examples: [
            "Bottles, diapers, extra clothes, comfort items, medication forms",
            "Gradual transition, comfort items, consistent goodbye routine",
            "Daily reports, photos, scheduled check-ins, open door policy",
            "Family member backup, drop-in care center, work flexibility",
            "Monthly check-ins, observation visits, feedback sessions"
          ]
        },
        {
          title: "Financial Planning",
          prompts: [
            "How will you budget for childcare costs and additional expenses?",
            "What tax benefits and assistance programs are available?",
            "How will you handle payment schedules and late fees?",
            "What happens to costs during vacations and sick days?",
            "How will costs change as your child grows?"
          ],
          examples: [
            "Monthly childcare budget + supplies, registration fees, activity costs",
            "Dependent Care FSA, Child Care Tax Credit, employer benefits",
            "Weekly payment in advance, $5/15 minute late fee policy",
            "Full payment during your vacation, no charge for provider holidays",
            "Toddler rates increase, preschool programs, after-school care"
          ]
        }
      ]}
      tips={[
        "Start researching childcare options during second trimester - good programs fill up early",
        "Visit multiple facilities and interview several providers before deciding",
        "Trust your instincts - if something feels off, continue looking",
        "Check with state licensing boards for complaints or violations",
        "Ask about illness policies and backup care arrangements",
        "Consider doing a trial run before you return to work"
      ]}
    />
  )
}