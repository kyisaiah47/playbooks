"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function CampusVisits() {
  return (
    <GuidedNotePage
      title="Campus Visits & School Exploration"
      description="Make the most of campus visits and virtual exploration opportunities."
      sections={[
        {
          title: "Visit Planning & Scheduling",
          prompts: [
            "Which schools should you visit before applying?",
            "When is the best time to visit each campus?",
            "How will you coordinate visits with your schedule?",
            "What's your backup plan for schools you can't visit in person?"
          ],
          examples: [
            "Visit top 3-5 schools during junior or senior year",
            "Schedule visits during regular school days to see typical campus life",
            "Plan visits around school breaks and holidays",
            "Virtual tours, student panels, and online information sessions",
            "Regional college fairs and local information sessions"
          ]
        },
        {
          title: "What to Look For & Questions to Ask",
          prompts: [
            "What aspects of campus life are most important to you?",
            "Which academic programs and facilities should you explore?",
            "What questions will help you evaluate fit?",
            "Who should you try to meet during your visit?"
          ],
          examples: [
            "Dorm life, dining options, recreational facilities",
            "Libraries, labs, classrooms, and department-specific buildings",
            "Student body diversity, class sizes, professor accessibility",
            "Current students, professors, admissions counselors",
            "Career services staff, financial aid officers"
          ]
        },
        {
          title: "Making the Most of Your Visit",
          prompts: [
            "How will you document your campus visit experience?",
            "What's your plan for attending classes or meetings?",
            "How will you get an authentic feel for student life?",
            "What follow-up actions will you take after each visit?"
          ],
          examples: [
            "Take photos, notes, and collect campus materials",
            "Attend sample classes in your areas of interest",
            "Eat in dining halls, walk around campus independently",
            "Talk to students outside of official tour groups",
            "Follow up with admissions counselors and interesting contacts"
          ]
        },
        {
          title: "Virtual Exploration Alternatives",
          prompts: [
            "How will you explore schools you can't visit in person?",
            "What virtual resources provide the most authentic experience?",
            "How can you connect with current students remotely?",
            "What questions are best answered through virtual exploration?"
          ],
          examples: [
            "Virtual campus tours, 360-degree campus views",
            "Live virtual information sessions and Q&A events",
            "Student blogs, social media accounts, online forums",
            "Virtual class visits and academic department presentations",
            "One-on-one virtual meetings with admissions counselors"
          ]
        }
      ]}
      tips={[
        "Visit during the academic year when students are on campus",
        "Stay overnight in dorms if the school offers that option",
        "Take the official tour but also explore on your own",
        "Trust your gut feelings about campus culture and fit",
        "Compare your experience to your expectations and research"
      ]}
    />
  )
}