"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function GoalSetting() {
  return (
    <GuidedNotePage
      title="Goal Setting & Motivation"
      description="Define clear, achievable fitness goals and build lasting motivation for your journey."
      sections={[
        {
          title: "Primary Fitness Goal",
          prompts: [
            "What is your main fitness objective (weight loss, muscle gain, strength, endurance)?",
            "Why is this goal important to you? What will achieving it mean?",
            "What timeline are you setting for this goal?",
            "How will you measure success beyond just the scale?",
          ],
          examples: [
            "Lose 30 pounds in 6 months to feel confident at my wedding",
            "Build muscle and strength to keep up with my kids",
            "Train for a 5K race to prove to myself I can do hard things",
            "Improve my energy levels and sleep quality through regular exercise",
          ]
        },
        {
          title: "SMART Goals Breakdown",
          prompts: [
            "Make your goal Specific: exactly what do you want to achieve?",
            "How will you Measure progress along the way?",
            "Is this goal Achievable given your current situation?",
            "Why is this goal Relevant to your life right now?",
            "What is your specific Time-bound deadline?",
          ],
          examples: [
            "Lose 2 pounds per month for 6 months through diet and exercise",
            "Increase my squat by 50 pounds over the next 3 months",
            "Run a 5K in under 30 minutes by the end of this year",
            "Work out 4 times per week consistently for 12 weeks",
          ]
        },
        {
          title: "Motivation & Why",
          prompts: [
            "What life experiences or moments motivated you to start this journey?",
            "How will achieving your goal improve your daily life?",
            "What are you willing to sacrifice or change to reach this goal?",
            "Who are you doing this for, and how will it impact them?",
          ],
          examples: [
            "I want to model healthy habits for my children",
            "I want to feel confident in my own skin again",
            "I want to have energy to enjoy activities with friends",
            "I want to reduce my risk of family health conditions",
          ]
        },
        {
          title: "Potential Obstacles & Solutions",
          prompts: [
            "What challenges have prevented you from reaching fitness goals before?",
            "What are your biggest time constraints and how can you work around them?",
            "How will you handle motivation dips and plateaus?",
            "What support systems do you need to put in place?",
          ],
          examples: [
            "Schedule workouts like appointments - non-negotiable time blocks",
            "Prep meals on Sundays to avoid weekday decision fatigue",
            "Find an accountability partner or join a fitness community",
            "Have backup 15-minute workouts for busy days",
          ]
        },
        {
          title: "Reward System",
          prompts: [
            "How will you celebrate small wins along the way?",
            "What non-food rewards motivate you?",
            "What will you do to celebrate reaching your ultimate goal?",
            "How often will you acknowledge your progress?",
          ],
          examples: [
            "New workout clothes after each month of consistency",
            "Massage or spa day after reaching mini-milestones",
            "Weekend getaway when I reach my main goal",
            "Weekly progress photos to see visual changes",
          ]
        }
      ]}
      tips={[
        "Write your goals down and review them weekly - written goals are 42% more likely to be achieved",
        "Focus on process goals (working out 4x/week) rather than just outcome goals (losing 20 pounds)",
        "Take progress photos and measurements - the scale doesn't tell the whole story",
        "Share your goals with supportive friends or family for accountability",
        "Adjust your goals as needed - flexibility prevents all-or-nothing thinking",
        "Visualize yourself achieving your goal daily - mental rehearsal improves performance",
      ]}
    />
  )
}