"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function EssayPlanning() {
  return (
    <GuidedNotePage
      title="Essay Planning & Writing"
      description="Plan and organize your college application essays for maximum impact."
      sections={[
        {
          title: "Personal Statement (Common App Essay)",
          prompts: [
            "Which Common App essay prompt resonates most with you?",
            "What story or experience best represents who you are?",
            "How has this experience shaped your perspective or goals?",
            "What unique qualities or insights can you share?"
          ],
          examples: [
            "Overcoming a challenge that defined your character",
            "A time when you questioned or challenged a belief",
            "An accomplishment that sparked personal growth",
            "A problem you solved or would like to solve",
            "An idea or topic that captivates you"
          ]
        },
        {
          title: "Supplemental Essays",
          prompts: [
            "How do you research and understand each school's values?",
            "What specific programs or opportunities attract you to each school?",
            "How will you contribute to each school's community?",
            "What makes you a good fit for each institution?"
          ],
          examples: [
            "Why this major/school essays",
            "Community and belonging prompts",
            "Intellectual curiosity questions",
            "Leadership and service essays",
            "Creative or quirky school-specific prompts"
          ]
        },
        {
          title: "Essay Development Process",
          prompts: [
            "What's your brainstorming and outlining process?",
            "How will you develop your unique voice and style?",
            "What's your revision and feedback timeline?",
            "How will you ensure authenticity in your writing?"
          ],
          examples: [
            "Mind mapping for story ideas",
            "Creating detailed outlines before writing",
            "Writing multiple drafts with specific focus areas",
            "Seeking feedback from teachers, counselors, and peers",
            "Reading essays aloud to check flow and voice"
          ]
        },
        {
          title: "Essay Organization & Management",
          prompts: [
            "How will you track essay requirements for each school?",
            "What's your system for managing different essay versions?",
            "How will you avoid repetition across multiple essays?",
            "What's your backup plan for essay storage and access?"
          ],
          examples: [
            "Spreadsheet tracking essay prompts and word counts",
            "Folder system for essay drafts and revisions",
            "Version control with clear file naming",
            "Cloud storage backup for all essay materials",
            "Master document with essay themes and angles"
          ]
        }
      ]}
      tips={[
        "Start brainstorming 3-4 months before deadlines to allow for multiple drafts",
        "Show, don't tell - use specific examples and anecdotes",
        "Each essay should reveal something new about you",
        "Read your essays out loud to catch awkward phrasing",
        "Get feedback from multiple readers but maintain your authentic voice"
      ]}
    />
  )
}