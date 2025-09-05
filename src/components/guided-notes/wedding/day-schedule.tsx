"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function DaySchedule() {
  return (
    <GuidedNotePage
      title="Wedding Day Schedule"
      description="Create a detailed timeline to keep your wedding day running smoothly for everyone involved."
      sections={[
        {
          title: "Morning Preparation Schedule",
          prompts: [
            "What time do you need to start getting ready on wedding day?",
            "How will you coordinate hair and makeup for the wedding party?",
            "What's your timeline for getting dressed and final preparations?",
            "When and where will the wedding party gather before the ceremony?"
          ],
          examples: [
            "Start at 8am for 4pm ceremony - allows time for photos",
            "Hair: 8-10am bride, 10-12pm bridesmaids; Makeup: 10-12pm bride",
            "Bride gets dressed at 1pm, photos at 1:30pm, party ready by 2pm",
            "Wedding party meets at venue at 3pm for final instructions"
          ]
        },
        {
          title: "Vendor & Setup Timeline",
          prompts: [
            "When do vendors need to arrive and complete their setup?",
            "Who will coordinate with vendors and handle any issues that arise?",
            "What's the timeline for ceremony setup and final decorating touches?",
            "How will you ensure all vendors have the information they need?"
          ],
          examples: [
            "Florist: 10am setup, Caterer: 12pm prep, DJ: 2pm sound check",
            "Wedding coordinator or designated family member as point person",
            "Ceremony setup complete by 3pm, final touches by 3:30pm",
            "Vendor contact sheet with timeline and key coordinator phone numbers"
          ]
        },
        {
          title: "Ceremony & Transition Schedule",
          prompts: [
            "What's your detailed ceremony timeline from start to finish?",
            "How will you coordinate guest seating and wedding party lineup?",
            "What's your plan for transitioning from ceremony to cocktail hour?",
            "How long do you need for post-ceremony photos before joining guests?"
          ],
          examples: [
            "3:30pm guests seated, 4pm processional, 4:30pm ceremony ends",
            "Ushers seat guests 30 min before, wedding party lines up at 3:55pm",
            "Guests to cocktail area while couple does photos for 45 minutes",
            "Family photos: 15 min, couple photos: 30 min, rejoin by 5:15pm"
          ]
        },
        {
          title: "Reception Timeline & Events",
          prompts: [
            "How will you structure the reception flow and key events?",
            "When will dinner be served and how will you coordinate courses?",
            "What's your timeline for speeches, dances, and special traditions?",
            "How will the evening wind down and what's your departure plan?"
          ],
          examples: [
            "5:30pm cocktails, 6:30pm dinner, 8pm dancing starts",
            "Salad served after couple entrance, main course after toasts",
            "Toasts during dinner, first dance at 8pm, cake cutting at 9pm",
            "Last dance at 11pm, sparkler exit at 11:30pm, afterparty till 2am"
          ]
        }
      ]}
      tips={[
        "Build in 15-30 minute buffer time between major events",
        "Share timeline with all vendors, wedding party, and key family members",
        "Designate someone to keep track of time and keep things moving",
        "Have a backup indoor timeline if you're planning an outdoor wedding",
        "Create a separate timeline for vendors with setup and breakdown times"
      ]}
    />
  )
}