"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function BabyProofing() {
  return (
    <GuidedNotePage
      title="Baby-Proofing Checklist"
      description="Make your home safe for your curious baby as they begin to crawl and explore."
      sections={[
        {
          title: "Kitchen & Dining Safety",
          prompts: [
            "What hazards in your kitchen need immediate attention?",
            "How will you secure cabinets and drawers containing dangerous items?",
            "What appliances and electrical outlets need protection?",
            "How will you make your dining area safer for baby?",
            "What cleaning supplies need to be relocated or secured?"
          ],
          examples: [
            "Sharp knives, small appliances, cleaning chemicals, glass items",
            "Cabinet locks on lower cabinets, drawer latches, refrigerator lock",
            "Outlet covers, appliance locks, stove knob covers, oven lock",
            "Table corner guards, secure tablecloths, move breakables up high",
            "Move all chemicals to upper cabinets with childproof locks"
          ]
        },
        {
          title: "Living Areas & Stairs",
          prompts: [
            "What furniture poses tipping or sharp corner hazards?",
            "How will you secure stairs and elevated areas?",
            "What small objects need to be removed or secured?",
            "How will you make windows and blinds safer?",
            "What entertainment equipment needs protection?"
          ],
          examples: [
            "Anchor tall furniture, add corner guards to coffee tables",
            "Safety gates at top and bottom of stairs, doorway gates",
            "Coins, small toys, choking hazards, decorative items",
            "Window guards, cordless blinds, window stop locks",
            "TV anchored to wall, cord covers, remote controls secured"
          ]
        },
        {
          title: "Bathrooms & Bedrooms",
          prompts: [
            "What bathroom hazards need immediate addressing?",
            "How will you prevent drowning and slipping hazards?",
            "What medications and toiletries need securing?",
            "How will you make bedrooms safer for baby?",
            "What choking hazards exist in sleeping areas?"
          ],
          examples: [
            "Toilet locks, bathtub spout covers, cabinet locks, outlet covers",
            "Non-slip mats, faucet covers, never leave water standing",
            "Medicine cabinet locks, toiletries in high cabinets",
            "Outlet covers, cord management, secure dressers to walls",
            "Remove small objects, secure blind cords, check crib safety"
          ]
        },
        {
          title: "Outdoor & Garage Safety",
          prompts: [
            "What outdoor hazards need attention around your home?",
            "How will you secure gates and fence openings?",
            "What garage and storage area dangers exist?",
            "How will you make yard and garden areas safer?",
            "What seasonal hazards should you prepare for?"
          ],
          examples: [
            "Pool barriers, deck railings, steps with handrails, locked gates",
            "Self-closing hinges, locks on gates, fence gap checks",
            "Lock chemicals, tools, car products; install garage door locks",
            "Remove toxic plants, secure garden tools, fence garden areas",
            "Winter: fireplace screens, space heater guards; Summer: pool safety"
          ]
        }
      ]}
      tips={[
        "Start baby-proofing around 6 months before baby becomes mobile",
        "Get down on baby&apos;s level to spot hazards you might miss standing up",
        "Focus on the most dangerous hazards first: drowning, choking, falling",
        "Install safety devices properly and test them regularly",
        "Remember that baby-proofing is ongoing as your child grows and develops new skills",
        "Consider hiring a professional baby-proofing service for complex installations"
      ]}
    />
  )
}