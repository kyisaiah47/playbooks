"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function TransitionPlanning() {
  return (
    <GuidedNotePage
      title="College Transition Planning"
      description="Prepare for the transition from high school to college life successfully."
      sections={[
        {
          title: "Academic Preparation",
          prompts: [
            "What academic skills do you need to strengthen before college?",
            "How will you prepare for increased academic rigor?",
            "What study habits and time management skills should you develop?",
            "How familiar are you with your college's academic resources?"
          ],
          examples: [
            "Review and strengthen foundational skills in math, writing, science",
            "Practice independent learning and research skills",
            "Develop note-taking systems and study strategies",
            "Learn about tutoring centers, writing centers, office hours",
            "Understand your college's academic support services"
          ]
        },
        {
          title: "Life Skills & Independence",
          prompts: [
            "What life skills do you need to develop for independent living?",
            "How will you manage your finances and budgeting?",
            "What health and wellness routines will you establish?",
            "How will you handle laundry, cooking, and daily responsibilities?"
          ],
          examples: [
            "Learn basic cooking, laundry, and cleaning skills",
            "Practice managing a budget and tracking expenses",
            "Develop healthy sleep, exercise, and eating habits",
            "Learn to navigate healthcare and insurance systems",
            "Practice problem-solving and decision-making independently"
          ]
        },
        {
          title: "Social & Emotional Preparation",
          prompts: [
            "How will you build new friendships and social connections?",
            "What strategies will you use to manage homesickness?",
            "How will you maintain important relationships from home?",
            "What campus resources support mental health and well-being?"
          ],
          examples: [
            "Join clubs, organizations, and activities aligned with your interests",
            "Be open to meeting people from diverse backgrounds",
            "Schedule regular check-ins with family and high school friends",
            "Learn about counseling services and mental health resources",
            "Develop healthy coping strategies for stress and challenges"
          ]
        },
        {
          title: "Practical Logistics",
          prompts: [
            "What do you need to prepare for move-in day?",
            "How will you navigate course registration and scheduling?",
            "What technology and supplies do you need for college?",
            "How will you handle transportation and getting around campus?"
          ],
          examples: [
            "Pack clothes for different seasons and college climate",
            "Coordinate with roommates about shared items",
            "Attend orientation programs and academic advising",
            "Set up technology, accounts, and campus systems",
            "Learn campus layout and transportation options"
          ]
        }
      ]}
      tips={[
        "Start developing independence gradually during senior year",
        "Stay connected with family while embracing new experiences",
        "Be patient with yourself during the adjustment period",
        "Take advantage of orientation programs and freshman support",
        "Remember that most students feel overwhelmed initially - it's normal"
      ]}
    />
  )
}