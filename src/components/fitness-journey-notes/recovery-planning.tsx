"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function RecoveryPlanningGuide() {
  return (
    <GuidedNotePage
      title="Recovery Planning & Rest Days"
      description="Optimize your recovery to maximize results and prevent burnout or injury."
      sections={[
        {
          title: "Sleep Optimization",
          prompts: [
            "What is your current sleep schedule and how can you improve it?",
            "What factors help you fall asleep faster and sleep more deeply?",
            "How will you create an ideal sleep environment?",
            "What bedtime routine supports quality recovery sleep?",
          ],
          examples: [
            "Aim for 7-9 hours of sleep, consistent bedtime and wake time",
            "No screens 1 hour before bed, read or meditate instead",
            "Keep bedroom cool (65-68°F), dark, and quiet",
            "Evening routine: shower, stretch, herbal tea, journaling",
          ]
        },
        {
          title: "Active Recovery Activities",
          prompts: [
            "What low-intensity activities help you recover while staying active?",
            "How will you incorporate mobility and flexibility work?",
            "What stress-relief activities support your mental recovery?",
            "How often will you schedule complete rest vs. active recovery?",
          ],
          examples: [
            "Light walking, gentle yoga, or easy swimming on rest days",
            "15-minute daily stretching routine focusing on tight areas",
            "Foam rolling or self-massage 3-4 times per week",
            "Meditation, deep breathing, or mindfulness practices",
          ]
        },
        {
          title: "Nutrition for Recovery",
          prompts: [
            "What post-workout nutrition supports your recovery goals?",
            "How will you fuel your body for optimal repair and adaptation?",
            "What foods help reduce inflammation and promote healing?",
            "How important is meal timing around your workouts and sleep?",
          ],
          examples: [
            "Post-workout: protein and carbs within 30-60 minutes",
            "Anti-inflammatory foods: berries, leafy greens, fatty fish, nuts",
            "Stay hydrated throughout the day, especially after sweating",
            "Light dinner 2-3 hours before bed to avoid sleep disruption",
          ]
        },
        {
          title: "Stress Management",
          prompts: [
            "What are your main sources of stress outside of exercise?",
            "How does stress affect your motivation and energy for workouts?",
            "What techniques help you manage and reduce stress levels?",
            "How will you prevent fitness from becoming another source of stress?",
          ],
          examples: [
            "Practice deep breathing for 5 minutes when feeling overwhelmed",
            "Schedule worry time: 15 minutes daily to process concerns",
            "Use journaling to release mental tension before bed",
            "Be flexible with workouts when life gets overwhelming",
          ]
        },
        {
          title: "Injury Prevention & Listening to Your Body",
          prompts: [
            "What signals from your body indicate you need extra recovery time?",
            "How will you modify workouts when you're feeling run down?",
            "What areas of your body are prone to tightness or injury?",
            "When will you seek help from professionals (massage, physical therapy)?",
          ],
          examples: [
            "Skip high-intensity workouts if heart rate is elevated at rest",
            "Reduce weight and focus on form if joints feel stiff or achy",
            "Schedule monthly massage or regular physical therapy check-ins",
            "Pay attention to mood changes - irritability can signal overtraining",
          ]
        }
      ]}
      tips={[
        "Recovery is when your body actually adapts and gets stronger - don't skip it",
        "Quality sleep is more important than an extra workout session",
        "Listen to your body - fatigue, irritability, and poor performance signal need for rest",
        "Hydration continues to be important on rest days for recovery processes",
        "Gentle movement often helps recovery more than complete inactivity",
        "Stress from life affects physical recovery just as much as exercise stress",
        "Schedule recovery like you schedule workouts - make it non-negotiable",
        "Remember that rest days prevent injuries that could derail your progress",
      ]}
    />
  )
}