"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function SchoolResearch() {
  return (
    <GuidedNotePage
      title="School Research & Selection"
      description="Research and evaluate colleges that align with your academic goals and interests."
      sections={[
        {
          title: "Academic Programs & Majors",
          prompts: [
            "What majors or programs are you most interested in exploring?",
            "Which schools have strong programs in your field of interest?",
            "What are the admission requirements for your target programs?",
            "How competitive are the programs you're considering?"
          ],
          examples: [
            "Computer Science programs with AI focus",
            "Business schools with entrepreneurship tracks",
            "Liberal arts colleges with strong writing programs",
            "Engineering schools with co-op programs",
            "Pre-med tracks with high med school acceptance rates"
          ]
        },
        {
          title: "Campus Culture & Environment",
          prompts: [
            "What type of campus environment do you prefer?",
            "How important are research opportunities to you?",
            "What extracurricular activities are you interested in?",
            "Do you prefer large universities or smaller colleges?"
          ],
          examples: [
            "Research universities with undergraduate research programs",
            "Liberal arts colleges with close professor relationships",
            "Schools with strong Greek life presence",
            "Colleges with vibrant arts and music scenes",
            "Universities with Division I athletics"
          ]
        },
        {
          title: "Location & Logistics",
          prompts: [
            "How far from home are you comfortable being?",
            "What type of climate and geography do you prefer?",
            "Are you interested in urban, suburban, or rural settings?",
            "What transportation options are important to you?"
          ],
          examples: [
            "Schools within 3 hours of home by car",
            "Urban campuses with internship opportunities",
            "College towns with walkable campuses",
            "Schools near airports for easy travel",
            "Campuses with good public transportation"
          ]
        },
        {
          title: "Financial Considerations",
          prompts: [
            "What is your family's budget for college expenses?",
            "Which schools offer the best financial aid packages?",
            "Are you interested in merit-based scholarships?",
            "How important is the return on investment for your degree?"
          ],
          examples: [
            "In-state public universities with lower tuition",
            "Private schools with generous need-based aid",
            "Schools offering full-ride merit scholarships",
            "Programs with high job placement rates",
            "Colleges with strong alumni networks"
          ]
        }
      ]}
      tips={[
        "Create a spreadsheet to compare schools across different criteria",
        "Visit campuses if possible, or take virtual tours online",
        "Talk to current students and recent alumni about their experiences",
        "Research graduation rates, employment outcomes, and average debt",
        "Consider both reach schools and safety schools in your list"
      ]}
    />
  )
}