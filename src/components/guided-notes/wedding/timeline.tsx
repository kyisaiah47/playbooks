"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function Timeline() {
  return (
    <GuidedNotePage
      title="Wedding Timeline & Countdown"
      description="Track important milestones and create your wedding day timeline."
      sections={[
        {
          title: "12+ Months Before",
          prompts: [
            "What's your ideal wedding date and backup options?",
            "What's your overall budget and how will you allocate it?",
            "Who will be on your guest list and what's your target headcount?",
            "What venues align with your vision and budget?"
          ],
          examples: [
            "Book your venue and set the date",
            "Create initial guest list with addresses",
            "Research and book your photographer",
            "Start shopping for wedding dress",
            "Consider hiring a wedding planner"
          ]
        },
        {
          title: "6 Months Before",
          prompts: [
            "What vendors do you still need to book?",
            "How will you communicate the date to guests?",
            "What's your catering style and menu preferences?",
            "Who will officiate your ceremony?"
          ],
          examples: [
            "Send save-the-dates",
            "Book caterer, florist, and DJ/band",
            "Order wedding invitations",
            "Plan your honeymoon",
            "Register for gifts"
          ]
        },
        {
          title: "Final Month",
          prompts: [
            "What are your final headcount numbers?",
            "How will you coordinate with all your vendors?",
            "What last-minute details need attention?",
            "Who's responsible for day-of coordination?"
          ],
          examples: [
            "Final dress fitting and pickup",
            "Confirm details with all vendors",
            "Create day-of timeline for wedding party",
            "Prepare rehearsal dinner plans",
            "Pack for honeymoon"
          ]
        },
        {
          title: "Wedding Day & Beyond",
          prompts: [
            "What's your ideal wedding day timeline?",
            "How will you handle any last-minute issues?",
            "What are your post-wedding plans?",
            "How will you preserve your wedding memories?"
          ],
          examples: [
            "Hair/makeup: 9am-12pm",
            "Photography: 2pm-4pm",
            "Ceremony: 4pm-4:30pm",
            "Cocktails & reception: 5pm-11pm",
            "Next-day brunch with family"
          ]
        }
      ]}
      tips={[
        "Build in 15-30 minute buffers between major activities",
        "Assign a point person for each vendor and timeline item",
        "Share the detailed timeline with your wedding party and vendors",
        "Have a backup plan for outdoor ceremonies and photos",
        "Create a 'day of' emergency kit with essentials"
      ]}
    />
  )
}