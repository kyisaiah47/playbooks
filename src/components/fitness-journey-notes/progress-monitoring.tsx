"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function ProgressMonitoringGuide() {
  return (
    <GuidedNotePage
      title="Progress Monitoring & Measurements"
      description="Track your transformation through multiple metrics to see the complete picture of your progress."
      sections={[
        {
          title: "Body Measurements & Photos",
          prompts: [
            "Which body measurements will you track (weight, body fat, circumferences)?",
            "How often will you take measurements (daily, weekly, monthly)?",
            "What time of day and conditions will you use for consistency?",
            "How will you take progress photos for the best comparison?",
          ],
          examples: [
            "Weekly weigh-ins every Sunday morning after using the bathroom, before eating",
            "Monthly body measurements: waist, hips, chest, arms, thighs",
            "Progress photos every 2 weeks: front, side, and back views in same lighting",
            "Body fat percentage monthly using DEXA scan or body composition scale",
          ]
        },
        {
          title: "Performance Metrics",
          prompts: [
            "What strength benchmarks will you track (max lifts, reps, endurance)?",
            "How will you measure improvements in your main exercises?",
            "What cardio metrics matter to you (distance, time, heart rate)?",
            "How will you track flexibility and mobility improvements?",
          ],
          examples: [
            "Test 1-rep max on squat, bench press, and deadlift every 8 weeks",
            "Track how many push-ups or pull-ups you can do in a row",
            "Monitor 5K run time or distance covered in 30 minutes",
            "Record how long you can hold a plank or wall sit",
          ]
        },
        {
          title: "Health & Wellness Indicators",
          prompts: [
            "What health markers are important for your overall wellbeing?",
            "How will you track energy levels and mood changes?",
            "What sleep metrics will you monitor?",
            "How often will you assess stress levels and recovery?",
          ],
          examples: [
            "Rate daily energy levels on a scale of 1-10",
            "Track sleep quality and hours per night",
            "Monitor resting heart rate as a fitness indicator",
            "Record how you feel after workouts (energized, tired, accomplished)",
          ]
        },
        {
          title: "Habit & Consistency Tracking",
          prompts: [
            "Which daily habits will you track to support your goals?",
            "How will you measure workout consistency and adherence?",
            "What nutrition habits deserve tracking beyond just food?",
            "How will you monitor your mental and emotional progress?",
          ],
          examples: [
            "Track workout completion: yes/no for each planned session",
            "Monitor water intake: glasses per day or total ounces",
            "Count servings of vegetables and fruits daily",
            "Rate confidence and body satisfaction weekly on a 1-10 scale",
          ]
        },
        {
          title: "Review & Adjustment Process",
          prompts: [
            "How often will you review your progress data?",
            "What trends will signal the need to adjust your plan?",
            "How will you celebrate progress milestones?",
            "What will you do if progress stalls or plateaus?",
          ],
          examples: [
            "Monthly progress review: analyze trends and plan adjustments",
            "If no progress for 3 weeks, reassess calorie intake or workout intensity",
            "Celebrate every 5-pound loss or new personal record with non-food reward",
            "Take progress photos side-by-side to see changes the scale doesn't show",
          ]
        }
      ]}
      tips={[
        "Don't rely solely on the scale - weight fluctuates daily due to many factors",
        "Take measurements and photos at the same time of day in consistent conditions",
        "Look for trends over weeks/months rather than day-to-day changes",
        "Progress isn't always linear - expect ups and downs along the journey",
        "Celebrate non-scale victories: better sleep, more energy, clothes fitting better",
        "Use a simple tracking system you'll actually stick with long-term",
        "Consider tracking your period if applicable - hormones affect weight and performance",
        "Remember that muscle weighs more than fat - body composition matters more than weight",
      ]}
    />
  )
}