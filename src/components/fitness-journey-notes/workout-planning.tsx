"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function WorkoutPlanningGuide() {
  return (
    <GuidedNotePage
      title="Workout Planning & Programming"
      description="Design effective workout routines that fit your schedule, goals, and fitness level."
      sections={[
        {
          title: "Training Schedule",
          prompts: [
            "How many days per week can you realistically commit to working out?",
            "What times of day work best for your schedule?",
            "How long can each workout session be?",
            "Do you prefer shorter daily sessions or longer sessions fewer days per week?",
          ],
          examples: [
            "Monday/Wednesday/Friday 6:30am - 45 minutes before work",
            "Tuesday/Thursday evenings - 1 hour after dinner",
            "Saturday and Sunday mornings - 60-90 minute sessions",
            "Daily 20-30 minute sessions during lunch break",
          ]
        },
        {
          title: "Workout Split & Structure",
          prompts: [
            "Will you focus on full-body workouts or split routines?",
            "What types of training do you enjoy (strength, cardio, HIIT, yoga)?",
            "How will you balance cardio and strength training?",
            "What equipment do you have access to (gym, home, bodyweight)?",
          ],
          examples: [
            "3-day full body: Monday/Wednesday/Friday with cardio on off days",
            "Upper/lower split: Monday upper, Tuesday lower, Thursday upper, Friday lower",
            "Push/pull/legs: Monday push, Tuesday pull, Wednesday legs, repeat",
            "2 days strength training, 2 days cardio, 1 day yoga/mobility",
          ]
        },
        {
          title: "Exercise Selection",
          prompts: [
            "What are your favorite exercises that you actually enjoy doing?",
            "Which muscle groups are priorities for your goals?",
            "Do you have any physical limitations or injuries to work around?",
            "What exercises challenge you but are still achievable?",
          ],
          examples: [
            "Compound movements: squats, deadlifts, bench press, rows",
            "Bodyweight basics: push-ups, planks, lunges, pull-ups",
            "Cardio variety: running, cycling, swimming, dance classes",
            "Functional movements: kettlebell swings, farmer's walks, burpees",
          ]
        },
        {
          title: "Progressive Overload Plan",
          prompts: [
            "How will you track your workouts and progress?",
            "What metrics will you use to measure improvement?",
            "How often will you increase weight, reps, or difficulty?",
            "What will you do when you hit a plateau?",
          ],
          examples: [
            "Increase weight by 2.5-5 pounds when I can complete all sets with proper form",
            "Add one extra rep per set each week until I reach my target range",
            "Decrease rest time between sets to increase workout intensity",
            "Track workout duration and aim to complete same work in less time",
          ]
        },
        {
          title: "Backup Plans & Flexibility",
          prompts: [
            "What will you do when you can't make it to the gym?",
            "How will you modify workouts when you're short on time?",
            "What exercises can you do when you're traveling or away from home?",
            "How will you maintain consistency during busy periods?",
          ],
          examples: [
            "20-minute bodyweight HIIT routine for home workouts",
            "Hotel room workout: push-ups, squats, lunges, planks",
            "Walking or running for active recovery on rest days",
            "Stretch or yoga videos for low-energy days",
          ]
        }
      ]}
      tips={[
        "Start with 2-3 exercises per muscle group and master the form before adding complexity",
        "Schedule your workouts like important appointments - consistency beats intensity",
        "Include both compound movements (work multiple muscles) and isolation exercises",
        "Plan for progressive overload - gradually increase weight, reps, or time each week",
        "Listen to your body - some days call for lighter workouts or complete rest",
        "Have a backup plan for days when life gets in the way of your main workout",
        "Focus on movements you enjoy - you're more likely to stick with workouts you like",
      ]}
    />
  )
}