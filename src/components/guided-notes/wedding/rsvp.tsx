"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function RSVP() {
  return (
    <GuidedNotePage
      title="Guest RSVP Tracking"
      description="Track guest responses and manage your final headcount for vendors."
      sections={[
        {
          title: "Guest List Organization",
          prompts: [
            "How will you categorize your guests (family, friends, work, etc.)?",
            "What information do you need to collect from each guest?",
            "How will you track plus-ones and children?",
            "What's your process for handling late responses?"
          ],
          examples: [
            "Family (immediate, extended), Friends (close, college, work)",
            "Names, dietary restrictions, contact info, meal choice",
            "Note if +1 is confirmed and get their name/dietary needs"
          ]
        },
        {
          title: "RSVP Collection Process",
          prompts: [
            "What's your RSVP deadline and how will you communicate it?",
            "How will guests submit their responses (online, mail, phone)?",
            "What information will you include on RSVP cards?",
            "How will you follow up with non-responders?"
          ],
          examples: [
            "RSVP by [date] - 3-4 weeks before wedding",
            "Wedding website, mail-in cards, or phone/text",
            "Attendance, meal choice, dietary restrictions, song requests"
          ]
        },
        {
          title: "Tracking & Management",
          prompts: [
            "How will you track responses as they come in?",
            "What's your system for updating vendors with headcounts?",
            "How will you handle dietary restrictions and special requests?",
            "What's your backup plan for last-minute changes?"
          ],
          examples: [
            "Spreadsheet with guest name, response date, meal choice",
            "Update caterer weekly with running count",
            "Create separate list of all dietary needs for caterer"
          ]
        },
        {
          title: "Final Headcount Planning",
          prompts: [
            "When do you need to give final numbers to vendors?",
            "How will you handle the gap between RSVP deadline and vendor deadline?",
            "What's your plan for seating arrangement based on responses?",
            "How will you communicate final details to confirmed guests?"
          ],
          examples: [
            "Final count to caterer 1 week before wedding",
            "Follow up with non-responders personally",
            "Use RSVP list to create seating chart"
          ]
        }
      ]}
      tips={[
        "Send save-the-dates 6-8 months early, invitations 6-8 weeks before",
        "Set RSVP deadline 3-4 weeks before wedding day",
        "Plan for 10-20% of invited guests to decline",
        "Create a spreadsheet to track responses, dietary needs, and contact info",
        "Follow up personally with non-responders 1 week after deadline"
      ]}
    />
  )
}