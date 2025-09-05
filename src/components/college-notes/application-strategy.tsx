"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function ApplicationStrategy() {
  return (
    <GuidedNotePage
      title="Application Strategy & Planning"
      description="Develop a comprehensive strategy for your college applications."
      sections={[
        {
          title: "School List & Categories",
          prompts: [
            "How many schools do you plan to apply to?",
            "Which schools are your reach, match, and safety options?",
            "What's your strategy for balancing different school types?",
            "How will you prioritize your applications by deadline?"
          ],
          examples: [
            "3 reach schools (15-25% acceptance rate)",
            "4 match schools (40-60% acceptance rate)",
            "3 safety schools (70%+ acceptance rate)",
            "Mix of public and private institutions",
            "Early action/decision vs regular decision strategy"
          ]
        },
        {
          title: "Application Requirements",
          prompts: [
            "What are the common application requirements across your schools?",
            "Which schools require supplemental essays or materials?",
            "Do any schools require interviews or portfolios?",
            "What standardized test scores do you need to submit?"
          ],
          examples: [
            "Common Application essay (650 words)",
            "School-specific supplemental essays",
            "Letters of recommendation requirements",
            "SAT/ACT score submission policies",
            "Portfolio requirements for art programs"
          ]
        },
        {
          title: "Timeline & Deadlines",
          prompts: [
            "What are your earliest and latest application deadlines?",
            "How will you space out your application work?",
            "When do you plan to complete each component?",
            "What's your backup plan if you need more time?"
          ],
          examples: [
            "Early action deadlines: November 1",
            "Regular decision deadlines: January 1-15",
            "Rolling admission deadlines: varies",
            "Essay drafts completed by October 1",
            "Final application reviews by deadline minus 3 days"
          ]
        },
        {
          title: "Application Quality Control",
          prompts: [
            "Who will review your applications before submission?",
            "How will you ensure consistency across applications?",
            "What's your proofreading and editing process?",
            "How will you track completion of all requirements?"
          ],
          examples: [
            "Counselor review of all applications",
            "Peer review of essays and short answers",
            "Parent review for factual accuracy",
            "Teacher feedback on writing quality",
            "Checklist verification before submission"
          ]
        }
      ]}
      tips={[
        "Start with safety schools to build confidence and refine your approach",
        "Use a master checklist to track requirements for each school",
        "Submit applications at least 24 hours before deadlines",
        "Save confirmation receipts and screenshots of submitted applications",
        "Have backup plans for technical issues on deadline day"
      ]}
    />
  )
}