"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function HabitTrackingGuide() {
  return (
    <GuidedNotePage
      title="Habit Tracking & Consistency"
      description="Build sustainable fitness habits that become automatic parts of your daily routine."
      sections={[
        {
          title: "Core Fitness Habits",
          prompts: [
            "What are the 3-5 most important daily habits for your fitness goals?",
            "Which habits will have the biggest impact on your progress?",
            "What current habits do you need to modify or eliminate?",
            "How will you stack new habits onto existing routines?",
          ],
          examples: [
            "Drink 16oz water immediately upon waking",
            "Complete planned workout session or walk for 30 minutes",
            "Eat protein at every meal and snack",
            "Go to bed by 10pm to get adequate sleep",
          ]
        },
        {
          title: "Habit Stacking & Cues",
          prompts: [
            "What existing routines can you attach new fitness habits to?",
            "What environmental cues will remind you to stick to your habits?",
            "How will you make good habits easier and bad habits harder?",
            "What specific triggers will prompt your desired behaviors?",
          ],
          examples: [
            "After I pour my morning coffee, I will do 10 push-ups",
            "Before I check my phone, I will complete my workout",
            "When I get home from work, I will immediately change into workout clothes",
            "After I brush my teeth at night, I will prepare my gym bag for tomorrow",
          ]
        },
        {
          title: "Tracking System",
          prompts: [
            "How will you track your habits (app, journal, calendar, checklist)?",
            "What frequency will you track (daily, weekly, monthly)?",
            "How will you make tracking quick and effortless?",
            "What visual reminders will help you stay consistent?",
          ],
          examples: [
            "Simple checkmark system on a printed habit tracker",
            "Phone app with daily notifications and streak counters",
            "Wall calendar with colored stickers for each completed habit",
            "Weekly review session to assess habit consistency",
          ]
        },
        {
          title: "Building Consistency",
          prompts: [
            "What will you do when you break a streak or miss a day?",
            "How will you maintain habits during travel or disrupted schedules?",
            "What minimum viable version of each habit can you do on tough days?",
            "How will you recommit after falling off track?",
          ],
          examples: [
            "Never miss twice in a row - get back on track the next day",
            "Reduce to bare minimum during busy times: 5-minute walk vs. full workout",
            "Plan for obstacles: pack workout clothes when traveling",
            "Focus on progress, not perfection - 80% consistency is still great",
          ]
        },
        {
          title: "Habit Evolution & Rewards",
          prompts: [
            "How will you gradually increase the difficulty of your habits?",
            "What immediate rewards will you give yourself for consistency?",
            "How will you celebrate habit milestones and streaks?",
            "When will you add new habits or modify existing ones?",
          ],
          examples: [
            "Start with 10 push-ups daily, increase to 15 after 2 weeks of consistency",
            "Watch favorite TV show only during treadmill walks",
            "Treat yourself to new workout gear after 30-day streak",
            "Add one new habit only after existing ones feel automatic (usually 2-3 months)",
          ]
        }
      ]}
      tips={[
        "Start small and build gradually - better to do 5 minutes consistently than 60 minutes sporadically",
        "Focus on showing up daily rather than perfect execution initially",
        "Make habits so easy you can't say no - reduce friction to the bare minimum",
        "Stack new habits onto existing strong routines for better adoption",
        "Track your habits visually - seeing your progress is motivating",
        "Don't try to change everything at once - focus on 1-3 habits maximum",
        "Prepare for obstacles in advance rather than hoping willpower will carry you",
        "Remember that missing one day doesn't ruin your progress - just get back on track",
      ]}
    />
  )
}