"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function PlateauSolutionsGuide() {
  return (
    <GuidedNotePage
      title="Plateau Solutions & Breakthrough Strategies"
      description="Navigate stagnation periods and break through plateaus to continue progressing toward your goals."
      sections={[
        {
          title: "Identifying Plateaus",
          prompts: [
            "How will you recognize when you've hit a legitimate plateau vs. normal fluctuations?",
            "What metrics will you use to assess whether progress has truly stalled?",
            "How long will you wait before considering plateau-breaking strategies?",
            "What factors might be contributing to your lack of progress?",
          ],
          examples: [
            "No change in weight, measurements, or performance for 3-4 weeks",
            "Strength gains have stalled on major exercises for 2+ weeks",
            "Energy levels and motivation have significantly decreased",
            "Sleep quality, stress levels, or life circumstances have changed",
          ]
        },
        {
          title: "Training Adjustments",
          prompts: [
            "How will you modify your workout routine to stimulate new adaptations?",
            "What new exercises or training methods could you incorporate?",
            "How might you change your workout frequency, intensity, or volume?",
            "What aspects of your current routine might need a complete overhaul?",
          ],
          examples: [
            "Change rep ranges: if doing 8-12 reps, try 4-6 or 15-20",
            "Add new exercises to target muscles from different angles",
            "Increase workout frequency or add an extra training day",
            "Try different training styles: supersets, drop sets, circuit training",
          ]
        },
        {
          title: "Nutrition & Recovery Optimization",
          prompts: [
            "Could your plateau be related to nutritional factors?",
            "How might you adjust calories, macros, or meal timing?",
            "Are you getting adequate recovery and sleep for continued progress?",
            "What stress factors might be impacting your results?",
          ],
          examples: [
            "If cutting calories, take a diet break or refeed days",
            "If building muscle, ensure adequate protein and calories",
            "Prioritize 7-9 hours of quality sleep consistently",
            "Address life stressors that might be affecting recovery",
          ]
        },
        {
          title: "Mental & Motivational Breakthroughs",
          prompts: [
            "How is your mindset and motivation affecting your plateau?",
            "What mental barriers might be limiting your progress?",
            "How can you reignite excitement and challenge in your routine?",
            "What new goals or challenges could reinvigorate your journey?",
          ],
          examples: [
            "Set a new challenge goal like a 5K race or strength competition",
            "Work with a trainer or coach for fresh perspective",
            "Try a completely new form of exercise to break monotony",
            "Focus on performance goals instead of appearance goals for a while",
          ]
        },
        {
          title: "Patience & Perspective Strategies",
          prompts: [
            "How will you maintain patience during slower progress periods?",
            "What non-scale victories can you focus on during plateaus?",
            "How will you avoid the temptation to make drastic changes?",
            "What does long-term success look like beyond this current plateau?",
          ],
          examples: [
            "Remember that plateaus are normal and temporary parts of the journey",
            "Focus on habits and consistency rather than daily results",
            "Celebrate improvements in mood, energy, and overall health",
            "Trust the process and avoid jumping between different approaches",
          ]
        }
      ]}
      tips={[
        "Plateaus are often your body's way of consolidating gains - they're normal",
        "Make one change at a time so you can identify what actually helps",
        "Sometimes plateaus require patience rather than immediate action",
        "Progress isn't always linear - trust the process during slower periods",
        "Consider hiring a professional for an outside perspective on your plateau",
        "Reassess your goals - maybe it's time to focus on maintenance rather than change",
        "Use plateau periods to build mental toughness and consistency",
        "Document what strategies work for future reference",
      ]}
    />
  )
}