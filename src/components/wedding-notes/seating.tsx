"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function Seating() {
  return (
    <GuidedNotePage
      title="Seating Arrangements"
      description="Plan your reception seating to create a comfortable and enjoyable experience for all guests."
      sections={[
        {
          title: "Guest Grouping Strategy",
          prompts: [
            "How will you group guests (by relationship, age, interests)?",
            "Who are your VIP guests that need special consideration?",
            "Which guests know each other and would enjoy sitting together?",
            "Are there any guests who should be kept apart?"
          ],
          examples: [
            "Group college friends, work colleagues, family by generation",
            "Parents, grandparents, wedding party at prominent tables",
            "Consider shared interests, life stages, personality types"
          ]
        },
        {
          title: "Table Layout & Logistics",
          prompts: [
            "What's your venue layout and how many tables do you need?",
            "What table sizes work best (rounds of 8, 10, or long tables)?",
            "Where will you place the head table or sweetheart table?",
            "How will you handle accessibility needs and special requirements?"
          ],
          examples: [
            "10 tables of 8 guests each for 80 people",
            "Head table near dance floor, older guests away from speakers",
            "Reserve accessible spots for wheelchairs, high chairs for kids"
          ]
        },
        {
          title: "Special Considerations",
          prompts: [
            "How will you handle divorced parents or family conflicts?",
            "Where will children sit and do they need special accommodations?",
            "How will you seat single guests to help them feel included?",
            "What's your plan for last-minute changes or no-shows?"
          ],
          examples: [
            "Seat divorced parents at separate tables with buffer zones",
            "Kids table with coloring books, or mixed with family",
            "Pair single guests with friendly, outgoing couples"
          ]
        },
        {
          title: "Final Execution",
          prompts: [
            "How will you display the seating chart for guests?",
            "Who will help direct guests to their tables?",
            "What's your backup plan if people switch seats?",
            "How will you handle place cards or table assignments?"
          ],
          examples: [
            "Large display board with table numbers and guest names",
            "Ushers or family members to help direct guests",
            "Place cards at each seat vs. just table assignments"
          ]
        }
      ]}
      tips={[
        "Start seating chart after RSVPs come in, but plan general layout early",
        "Mix guests who don't know each other with good conversationalists",
        "Keep divorced or feuding family members at separate tables",
        "Seat elderly guests away from loud speakers and near restrooms",
        "Have a few extra seats available for last-minute additions"
      ]}
    />
  )
}