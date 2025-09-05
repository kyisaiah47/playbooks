"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function InterviewPrep() {
  return (
    <GuidedNotePage
      title="Interview Preparation"
      description="Prepare for college admissions interviews with confidence and authenticity."
      sections={[
        {
          title: "Interview Research & Scheduling",
          prompts: [
            "Which schools require or offer interviews?",
            "What types of interviews does each school conduct?",
            "How will you schedule interviews around your other commitments?",
            "What information should you research about each interviewer?"
          ],
          examples: [
            "Alumni interviews, admissions officer interviews, video interviews",
            "On-campus interviews, virtual interviews, phone interviews",
            "Schedule interviews 2-3 weeks in advance when possible",
            "Research interviewer background and school-specific programs",
            "Confirm interview details and backup contact information"
          ]
        },
        {
          title: "Common Interview Questions",
          prompts: [
            "How will you answer 'Why this school?' authentically?",
            "What stories best demonstrate your character and values?",
            "How will you discuss your academic interests and goals?",
            "What thoughtful questions will you ask your interviewer?"
          ],
          examples: [
            "Tell me about yourself and your interests",
            "Why are you interested in attending our school?",
            "Describe a challenge you've overcome",
            "What would you contribute to our campus community?",
            "Questions about specific programs, research opportunities, campus life"
          ]
        },
        {
          title: "Practice & Preparation",
          prompts: [
            "Who will you practice interviewing with?",
            "How will you prepare your key talking points?",
            "What's your plan for managing interview nerves?",
            "How will you ensure you're presenting your authentic self?"
          ],
          examples: [
            "Mock interviews with counselors, teachers, or family",
            "Prepare 3-5 key stories that highlight different qualities",
            "Practice speaking clearly and at an appropriate pace",
            "Breathing exercises and positive visualization",
            "Focus on having a conversation rather than giving perfect answers"
          ]
        },
        {
          title: "Interview Day & Follow-up",
          prompts: [
            "How will you make a strong first impression?",
            "What should you bring to each interview?",
            "How will you handle unexpected questions or situations?",
            "What's your follow-up plan after each interview?"
          ],
          examples: [
            "Arrive 10-15 minutes early, dress appropriately",
            "Resume copies, prepared questions, notepad and pen",
            "Take time to think before answering difficult questions",
            "Thank you emails within 24 hours of interview",
            "Brief notes about interview experience for future reference"
          ]
        }
      ]}
      tips={[
        "Be yourself - authenticity is more important than perfection",
        "Prepare stories that demonstrate growth, leadership, and character",
        "Research specific programs and opportunities at each school",
        "Practice speaking about your experiences with enthusiasm",
        "Remember that interviews are conversations, not interrogations"
      ]}
    />
  )
}