"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function HomeInspection() {
  return (
    <GuidedNotePage
      title="Home Inspection Guide"
      description="Navigate the inspection process to make informed decisions about your potential purchase."
      sections={[
        {
          title: "Choosing an Inspector",
          prompts: [
            "What qualifications should you look for in a home inspector?",
            "How do you find reputable inspectors in your area?",
            "What questions should you ask potential inspectors?",
            "What's included in a standard inspection vs specialized inspections?"
          ],
          examples: [
            "Licensed, insured, ASHI certified with 5+ years experience",
            "Realtor recommendations, online reviews, state licensing board",
            "Sample reports, timeline, what systems they cover, follow-up policy",
            "Standard: structure, electrical, plumbing; Specialized: radon, mold, pest"
          ]
        },
        {
          title: "Inspection Day",
          prompts: [
            "Should you attend the inspection and what should you focus on?",
            "What questions should you ask during the inspection?",
            "What areas of the home deserve extra attention?",
            "How long should a thorough inspection take?"
          ],
          examples: [
            "Attend to see issues firsthand, take photos, ask for explanations",
            "Age of major systems, maintenance needs, safety concerns, repair costs",
            "Foundation, roof, HVAC, electrical panel, plumbing, windows",
            "3-4 hours for average home, longer for larger or older properties"
          ]
        },
        {
          title: "Understanding the Report",
          prompts: [
            "How do you prioritize issues found in the inspection report?",
            "Which problems are deal-breakers vs negotiable items?",
            "What repair cost estimates should you get for major issues?",
            "How do you distinguish between cosmetic and structural problems?"
          ],
          examples: [
            "Safety hazards first, then major systems, then cosmetic issues",
            "Foundation cracks = deal-breaker, old HVAC = negotiation point",
            "Get contractor quotes for roof repair, electrical updates, HVAC replacement",
            "Peeling paint = cosmetic, electrical code violations = structural"
          ]
        },
        {
          title: "Negotiation Strategy",
          prompts: [
            "How do you use inspection results to negotiate with the seller?",
            "Should you ask for repairs, credits, or price reduction?",
            "What's your walk-away threshold for repair costs?",
            "How do you handle multiple competing offers with inspection results?"
          ],
          examples: [
            "Request repairs for safety issues, credits for aging systems",
            "Ask for $8k credit instead of seller doing $8k in repairs",
            "Walk away if foundation repairs exceed $15k",
            "Use clean inspection to strengthen offer vs other buyers"
          ]
        }
      ]}
      tips={[
        "Schedule inspection within 7-10 days of offer acceptance",
        "Don't skip inspection even on new construction homes",
        "Consider specialized inspections for older homes or specific concerns",
        "Take photos and notes during inspection for future reference",
        "Factor inspection costs ($400-800) into your buying budget",
        "Use inspection contingency deadline strategically in negotiations"
      ]}
    />
  )
}