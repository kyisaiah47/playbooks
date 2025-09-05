"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function BirthPlan() {
  return (
    <GuidedNotePage
      title="Birth Plan & Preferences"
      description="Document your birth preferences and communicate them with your healthcare team."
      sections={[
        {
          title: "Labor Preferences",
          prompts: [
            "Where would you like to give birth (hospital, birthing center, home)?",
            "What pain management options are you considering?",
            "Who would you like present during labor and delivery?",
            "What comfort measures would help during labor?",
            "How do you prefer to move and position during labor?"
          ],
          examples: [
            "Hospital room with birthing tub access",
            "Open to epidural but want to try natural methods first",
            "Partner, doula, and mother-in-law present",
            "Dimmed lights, music, aromatherapy, massage",
            "Freedom to walk, change positions, use birthing ball"
          ]
        },
        {
          title: "Delivery Preferences",
          prompts: [
            "What are your preferences for the delivery position?",
            "How do you feel about episiotomies or interventions?",
            "What are your wishes regarding cord clamping?",
            "Who would you like to announce the baby's gender?",
            "What are your preferences for immediate skin-to-skin contact?"
          ],
          examples: [
            "Squatting, side-lying, or semi-sitting positions",
            "Avoid episiotomy unless medically necessary",
            "Delayed cord clamping for 1-3 minutes",
            "We want to announce gender ourselves",
            "Immediate skin-to-skin for at least 1 hour"
          ]
        },
        {
          title: "Newborn Care",
          prompts: [
            "What are your feeding plans immediately after birth?",
            "How do you feel about newborn procedures (eye drops, vitamin K)?",
            "What are your preferences for rooming-in?",
            "Who can hold the baby and when?",
            "What are your circumcision preferences if having a boy?"
          ],
          examples: [
            "Breastfeeding within first hour, no formula unless medically needed",
            "Standard procedures are fine, please explain each one",
            "Baby stays in room with us unless medical reason",
            "Only parents and grandparents for first 24 hours",
            "Will circumcise, prefer performed by pediatrician"
          ]
        },
        {
          title: "Emergency Situations",
          prompts: [
            "What are your preferences if a C-section becomes necessary?",
            "Who should make decisions if you're unable to communicate?",
            "What are your wishes if complications arise?",
            "How important is it to try alternative measures first?",
            "What information do you want communicated during emergencies?"
          ],
          examples: [
            "Partner present during C-section, clear drape to see birth",
            "Partner makes decisions following our discussed preferences",
            "Prioritize health and safety of both mother and baby",
            "Try less invasive options first when time allows",
            "Keep me informed of all decisions and procedures"
          ]
        }
      ]}
      tips={[
        "Discuss your birth plan with your healthcare provider during prenatal visits",
        "Keep an open mind - birth plans are preferences, not requirements",
        "Bring multiple copies to the hospital for all staff members",
        "Consider creating a shorter 1-page summary for quick reference",
        "Review and update your plan as your pregnancy progresses",
        "Include your partner in creating the plan so they can advocate for you"
      ]}
    />
  )
}