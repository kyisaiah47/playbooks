"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function ThankYou() {
  return (
    <GuidedNotePage
      title="Thank You Card Tracking"
      description="Organize and track your wedding thank you notes to ensure everyone feels appreciated."
      sections={[
        {
          title: "Gift & Guest Tracking",
          prompts: [
            "How will you track what gifts you received from each guest?",
            "What system will you use to record guest information and addresses?",
            "How will you handle gifts that arrive before vs. after the wedding?",
            "What's your plan for tracking cash gifts and gift cards?"
          ],
          examples: [
            "Spreadsheet with guest name, gift description, date received",
            "Collect addresses during RSVP process or from family/friends",
            "Log engagement and shower gifts separately from wedding gifts",
            "Record exact cash amounts and gift card stores/values"
          ]
        },
        {
          title: "Thank You Note Planning",
          prompts: [
            "What style and format do you want for your thank you cards?",
            "How will you personalize each note to mention specific gifts?",
            "Who will write the notes and how will you divide the task?",
            "What's your timeline for sending thank you cards?"
          ],
          examples: [
            "Photo cards from wedding, classic stationery, or custom design",
            "Mention specific gift and how you'll use/enjoy it",
            "Bride writes to her side, groom to his side, or alternate",
            "Send within 3 months of wedding, 2 weeks for shower/engagement gifts"
          ]
        },
        {
          title: "Writing & Content Strategy",
          prompts: [
            "What key elements will you include in every thank you note?",
            "How will you handle different types of gifts (experiences, cash, handmade)?",
            "What tone and style reflects your personality as a couple?",
            "How will you make each note feel personal and heartfelt?"
          ],
          examples: [
            "Thank for specific gift, mention how you'll use it, express gratitude",
            "Cash: 'generous gift will help with our home/honeymoon goals'",
            "Warm and genuine, formal vs. casual based on your relationship",
            "Reference their presence at wedding, shared memories, future plans"
          ]
        },
        {
          title: "Organization & Follow-Through",
          prompts: [
            "How will you stay organized and ensure no one is missed?",
            "What's your system for tracking completed vs. pending thank you notes?",
            "How will you handle late gifts or gifts that arrive after you've sent cards?",
            "What's your backup plan if you fall behind on your timeline?"
          ],
          examples: [
            "Check off names as notes are written and mailed",
            "Use spreadsheet status column or physical checklist system",
            "Send separate thank you note for late gifts within 2 weeks of receipt",
            "Set weekly goals, ask family to help with addressing envelopes"
          ]
        }
      ]}
      tips={[
        "Start tracking gifts immediately - don't rely on memory later",
        "Take photos of gifts with cards before opening to help remember who gave what",
        "Write thank you notes in batches to maintain consistency in tone",
        "Keep extra thank you cards for late gifts or forgotten guests",
        "Consider having someone help with addressing envelopes to save time"
      ]}
    />
  )
}