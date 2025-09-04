"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function Photos() {
  return (
    <GuidedNotePage
      title="Photography Shot List"
      description="Create a comprehensive shot list to ensure your photographer captures all the important moments."
      sections={[
        {
          title: "Pre-Ceremony Shots",
          prompts: [
            "What getting-ready moments do you want captured?",
            "Which detail shots are most important to you?",
            "What family and wedding party photos do you want before the ceremony?",
            "Are there any special locations or backdrops you want to use?"
          ],
          examples: [
            "Bride getting makeup done, putting on dress, first look with parents",
            "Rings, shoes, bouquet, dress details, invitation suite",
            "Bridesmaids helping bride, groomsmen getting ready",
            "Venue exterior, ceremony setup, floral arrangements"
          ]
        },
        {
          title: "Ceremony Photography",
          prompts: [
            "What key ceremony moments must be captured?",
            "Which guests' reactions are most important to photograph?",
            "Are there any cultural or religious elements to document?",
            "What angles or perspectives do you prefer for ceremony shots?"
          ],
          examples: [
            "Processional, vows, ring exchange, first kiss, recessional",
            "Parents' reactions, grandparents, wedding party emotions",
            "Unity ceremony, cultural traditions, religious rituals",
            "Wide shots of full ceremony, close-ups of expressions"
          ]
        },
        {
          title: "Family & Group Photos",
          prompts: [
            "Which family combinations are most important to capture?",
            "What friend groups or special relationships should be photographed?",
            "Are there any family members who won't be able to stay late?",
            "What's your plan for organizing and timing group shots efficiently?"
          ],
          examples: [
            "Immediate families, grandparents, siblings, extended family",
            "College friends, work colleagues, childhood friends",
            "Prioritize elderly or traveling guests for early photos",
            "Create a timeline and assign someone to gather groups"
          ]
        },
        {
          title: "Reception & Candid Moments",
          prompts: [
            "Which reception events and traditions do you want documented?",
            "What candid moments and interactions are most meaningful?",
            "Are there any special dances or performances to capture?",
            "What final shots do you want at the end of the night?"
          ],
          examples: [
            "First dance, parent dances, cake cutting, bouquet toss",
            "Guests laughing, dancing, toasts, emotional moments",
            "Special performances, cultural dances, surprise moments",
            "Sparkler exit, last dance, departure shots"
          ]
        }
      ]}
      tips={[
        "Share your shot list with your photographer 2-3 weeks before the wedding",
        "Prioritize your must-have shots in case of time constraints",
        "Include names and relationships to help photographer identify key people",
        "Designate a family member to help organize group photos",
        "Be realistic about timing - quality is better than quantity"
      ]}
    />
  )
}