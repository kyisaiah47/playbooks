"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function MovingTimeline() {
  return (
    <GuidedNotePage
      title="Moving Timeline & Coordination"
      description="Plan and coordinate your move to minimize stress and ensure everything goes smoothly."
      sections={[
        {
          title: "8 Weeks Before Move",
          prompts: [
            "What moving companies should you research and get quotes from?",
            "How will you declutter and organize your belongings?",
            "What utilities need to be transferred or set up?",
            "How will you handle school transfers for children?"
          ],
          examples: [
            "Get 3 quotes from licensed movers, check Better Business Bureau ratings",
            "Donate, sell, or discard items you don't want to move",
            "Contact electric, gas, water, internet, cable, trash services",
            "Request school records, research new school districts, enrollment deadlines"
          ]
        },
        {
          title: "4 Weeks Before Move",
          prompts: [
            "What services and subscriptions need address updates?",
            "How will you pack systematically and label boxes?",
            "What arrangements do you need for pets during the move?",
            "How will you handle time off work for moving day?"
          ],
          examples: [
            "Banks, insurance, employers, IRS, voter registration, magazine subscriptions",
            "Pack non-essentials first, label boxes by room and contents",
            "Vet records, pet travel arrangements, kennel for moving day",
            "Request moving days off, arrange childcare for moving day"
          ]
        },
        {
          title: "1 Week Before Move",
          prompts: [
            "What final preparations need to be completed?",
            "How will you pack essential items and valuables?",
            "What cleaning arrangements do you need for both homes?",
            "How will you prepare for moving day logistics?"
          ],
          examples: [
            "Confirm mover details, pack moving day survival kit",
            "Pack suitcase with 3-4 days clothes, important documents, medications",
            "Deep clean old home, basic cleaning supplies for new home",
            "Charge devices, prepare cash tips, clear parking spaces"
          ]
        },
        {
          title: "Moving Day & After",
          prompts: [
            "What should you do on moving day morning?",
            "How will you coordinate with movers and handle any issues?",
            "What's your unpacking priority order?",
            "How will you handle the first week in your new home?"
          ],
          examples: [
            "Final walkthrough, strip beds, pack cleaning supplies last",
            "Be present for inventory, take photos of damage, keep receipts",
            "Unpack essentials first: kitchen basics, bathroom, bedroom",
            "Focus on kids' rooms, find local grocery store, locate circuit breakers"
          ]
        }
      ]}
      tips={[
        "Book movers at least 8 weeks in advance, especially during peak season",
        "Take photos of electronics setup before disconnecting for easier reconnection",
        "Pack a 'first day' box with essentials like toilet paper, snacks, phone chargers",
        "Change locks on your new home within the first few days",
        "Keep moving receipts - some expenses may be tax deductible",
        "Don't try to unpack everything in the first week - focus on essentials first"
      ]}
    />
  )
}