"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function ActivityLists() {
  return (
    <GuidedNotePage
      title="Extracurricular Activities & Awards"
      description="Document and present your activities, achievements, and experiences effectively."
      sections={[
        {
          title: "Activity Categories & Organization",
          prompts: [
            "What activities have been most meaningful to you?",
            "How do your activities demonstrate your interests and values?",
            "Which activities show leadership, commitment, or impact?",
            "What unique experiences set you apart from other applicants?"
          ],
          examples: [
            "Academic clubs, honor societies, debate team",
            "Sports, performing arts, creative pursuits",
            "Community service, volunteering, social causes",
            "Work experience, internships, entrepreneurship",
            "Religious or cultural organizations"
          ]
        },
        {
          title: "Activity Descriptions & Impact",
          prompts: [
            "How will you quantify your contributions and achievements?",
            "What specific impact did you have in each activity?",
            "How did you grow or learn from each experience?",
            "What leadership roles or initiatives did you take on?"
          ],
          examples: [
            "Founded club with 50+ members, organized 5 events annually",
            "Tutored 15 students, helped improve average grades by 20%",
            "Raised $2,000 for local food bank through fundraising campaign",
            "Captain of varsity team, led team to regional championships",
            "Managed social media accounts, increased followers by 200%"
          ]
        },
        {
          title: "Awards & Recognition",
          prompts: [
            "What academic and extracurricular awards have you received?",
            "Which honors best represent your achievements and potential?",
            "How do your awards align with your academic interests?",
            "What recognition demonstrates your character and values?"
          ],
          examples: [
            "Academic honor roll, National Honor Society membership",
            "Scholarship recipients, competition winners",
            "Student of the month, citizenship awards",
            "Athletic achievements, artistic recognitions",
            "Community service awards, volunteer recognition"
          ]
        },
        {
          title: "Presentation & Common App Strategy",
          prompts: [
            "How will you prioritize activities in order of importance?",
            "Which activities deserve the most detailed descriptions?",
            "How will you use the additional information section effectively?",
            "What activities connect to your intended major or career goals?"
          ],
          examples: [
            "Most significant activities first, with detailed impact descriptions",
            "Group similar activities together when space is limited",
            "Use additional info for context or activities that don't fit elsewhere",
            "Highlight activities that demonstrate relevant skills and interests",
            "Show progression and increasing responsibility over time"
          ]
        }
      ]}
      tips={[
        "Quality over quantity - focus on activities where you made a real impact",
        "Use action verbs and specific numbers to describe your contributions",
        "Show progression and increasing responsibility in your activities",
        "Don't forget to include work experience and family responsibilities",
        "Be honest about your time commitments and roles"
      ]}
    />
  )
}