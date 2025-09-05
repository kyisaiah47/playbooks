"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function RecommendationLetters() {
  return (
    <GuidedNotePage
      title="Recommendation Letters"
      description="Secure strong recommendation letters that highlight your best qualities."
      sections={[
        {
          title: "Recommender Selection",
          prompts: [
            "Which teachers know you best academically?",
            "Who can speak to your character and personal qualities?",
            "Which recommenders have worked with you recently?",
            "Who can provide unique perspectives on your abilities?"
          ],
          examples: [
            "Junior or senior year teachers in core subjects",
            "Teachers from subjects related to your intended major",
            "Guidance counselors who know your full academic picture",
            "Coaches, employers, or community leaders for additional perspectives",
            "Mentors who have seen your growth and potential"
          ]
        },
        {
          title: "Request Timeline & Approach",
          prompts: [
            "When will you ask for recommendation letters?",
            "How will you make your request professionally?",
            "What information will you provide to your recommenders?",
            "How will you follow up respectfully?"
          ],
          examples: [
            "Ask at least 6-8 weeks before earliest deadline",
            "Schedule in-person meetings to make requests",
            "Provide resume, transcript, and college list",
            "Share draft essays and personal statement",
            "Send gentle reminders 2-3 weeks before deadlines"
          ]
        },
        {
          title: "Supporting Information",
          prompts: [
            "What key information should recommenders know about you?",
            "Which accomplishments and experiences should they highlight?",
            "How can you help them write specific, detailed letters?",
            "What goals and aspirations should they mention?"
          ],
          examples: [
            "Academic achievements, improvement stories, leadership examples",
            "Specific projects, presentations, or class contributions",
            "Personal challenges overcome, growth demonstrated",
            "Career goals and how their class influenced your interests",
            "Character traits they've observed in various situations"
          ]
        },
        {
          title: "Managing the Process",
          prompts: [
            "How will you track recommendation letter submissions?",
            "What backup plans do you have if a recommender can't help?",
            "How will you express gratitude to your recommenders?",
            "What updates will you provide about your college decisions?"
          ],
          examples: [
            "Spreadsheet tracking requests, deadlines, and submissions",
            "Identify backup recommenders early in the process",
            "Thank you notes after submission and acceptance decisions",
            "Updates about college choices and how their support helped",
            "Small gifts or recognition for recommenders' time and effort"
          ]
        }
      ]}
      tips={[
        "Ask recommenders in person if possible, not via email",
        "Choose recommenders who can provide specific examples of your abilities",
        "Waive your right to see the letters to demonstrate trust",
        "Provide recommenders with addressed, stamped envelopes if needed",
        "Give recommenders plenty of time and all necessary information"
      ]}
    />
  )
}