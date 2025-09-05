"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function ScholarshipSearch() {
  return (
    <GuidedNotePage
      title="Scholarship Search & Applications"
      description="Find and apply for scholarships to help fund your college education."
      sections={[
        {
          title: "Scholarship Research & Discovery",
          prompts: [
            "What scholarship search platforms will you use?",
            "What are your unique qualifications and backgrounds?",
            "Which local organizations offer scholarships in your area?",
            "What national scholarships align with your profile?"
          ],
          examples: [
            "Fastweb, Scholarships.com, College Board search",
            "Local community foundations and rotary clubs",
            "Professional associations in your field of interest",
            "Corporate scholarships from major companies",
            "Merit-based institutional scholarships"
          ]
        },
        {
          title: "Application Strategy & Organization",
          prompts: [
            "How will you prioritize scholarship applications?",
            "What's your system for tracking deadlines and requirements?",
            "How many scholarships will you apply for each month?",
            "What materials can be reused across applications?"
          ],
          examples: [
            "Focus on high-value, low-competition scholarships first",
            "Spreadsheet with deadlines, requirements, and status",
            "Target 5-10 applications per month",
            "Master essay bank for common prompts",
            "Standardized recommendation letter requests"
          ]
        },
        {
          title: "Essay Writing & Applications",
          prompts: [
            "What are the most common scholarship essay themes?",
            "How will you tailor your essays for different audiences?",
            "What personal stories highlight your qualifications?",
            "How will you demonstrate financial need when required?"
          ],
          examples: [
            "Career goals and aspirations essays",
            "Community service and leadership stories",
            "Overcoming challenges and adversity",
            "Academic achievements and future plans",
            "Financial hardship and need explanations"
          ]
        },
        {
          title: "Follow-up & Award Management",
          prompts: [
            "How will you track application status and follow up?",
            "What's your plan for scholarship interviews?",
            "How will you manage award notifications and requirements?",
            "What's your system for thank you notes and updates?"
          ],
          examples: [
            "Monthly status check emails to scholarship providers",
            "Interview preparation and practice sessions",
            "Award acceptance and thank you letter templates",
            "Annual update letters to scholarship providers",
            "Tax documentation for scholarship income"
          ]
        }
      ]}
      tips={[
        "Start searching early - many deadlines are 6-12 months before college starts",
        "Apply to smaller, local scholarships with less competition",
        "Tailor each application to the specific scholarship criteria",
        "Keep detailed records of all applications and communications",
        "Don't ignore small scholarships - they add up quickly"
      ]}
    />
  )
}