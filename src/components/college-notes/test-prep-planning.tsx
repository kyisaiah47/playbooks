"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function TestPrepPlanning() {
  return (
    <GuidedNotePage
      title="Standardized Test Planning"
      description="Plan and prepare for SAT, ACT, and other standardized tests strategically."
      sections={[
        {
          title: "Test Selection & Strategy",
          prompts: [
            "Should you take the SAT, ACT, or both?",
            "What are your target test scores for each school?",
            "How many times should you plan to take each test?",
            "Which test dates work best with your schedule?"
          ],
          examples: [
            "SAT vs ACT comparison based on your strengths",
            "Research average scores at target schools",
            "Plan for 2-3 test attempts maximum",
            "Avoid test dates during busy school periods",
            "Consider subject tests if required by schools"
          ]
        },
        {
          title: "Preparation Timeline",
          prompts: [
            "When will you start test preparation?",
            "How many months of prep time do you need?",
            "What study schedule works with your other commitments?",
            "How will you track your progress and improvement?"
          ],
          examples: [
            "Start prep 3-6 months before first test date",
            "Consistent daily study schedule vs intensive weekend prep",
            "Weekly practice tests to monitor progress",
            "Focus areas based on diagnostic test results",
            "Adjust timeline based on score improvements"
          ]
        },
        {
          title: "Preparation Resources & Methods",
          prompts: [
            "What test prep resources will you use?",
            "Do you need a tutor or prep course?",
            "How will you practice under test conditions?",
            "What's your strategy for weak subject areas?"
          ],
          examples: [
            "Official practice tests, prep books, online resources",
            "Khan Academy SAT prep, ACT prep courses",
            "Timed practice tests in quiet environments",
            "Extra practice in math, reading, or writing sections",
            "Test-taking strategies and time management skills"
          ]
        },
        {
          title: "Test Day & Score Management",
          prompts: [
            "What's your test day preparation routine?",
            "How will you manage test anxiety and stress?",
            "What's your plan for score reporting?",
            "When will you retake tests if needed?"
          ],
          examples: [
            "Good night's sleep, healthy breakfast, arrive early",
            "Breathing exercises, positive self-talk",
            "Score Choice strategy for SAT, selective reporting for ACT",
            "Register for next test date before seeing scores",
            "Compare scores to college requirements before deciding to retake"
          ]
        }
      ]}
      tips={[
        "Take practice tests under real testing conditions",
        "Focus on your weakest areas but don't neglect your strengths",
        "Learn test-taking strategies specific to each section",
        "Don't over-test - most students see diminishing returns after 3 attempts",
        "Consider test-optional schools if standardized tests aren't your strength"
      ]}
    />
  )
}