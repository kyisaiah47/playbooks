"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function NutritionTrackingGuide() {
  return (
    <GuidedNotePage
      title="Nutrition Tracking & Meal Planning"
      description="Develop sustainable eating habits that support your fitness goals and lifestyle."
      sections={[
        {
          title: "Nutrition Goals & Approach",
          prompts: [
            "What is your primary nutrition goal (weight loss, muscle gain, performance, health)?",
            "Do you prefer tracking calories, macros, portions, or intuitive eating?",
            "What eating style appeals to you (balanced, low-carb, plant-based, etc.)?",
            "How important is meal timing around your workouts?",
          ],
          examples: [
            "Moderate calorie deficit for gradual weight loss while maintaining muscle",
            "Higher protein intake (1g per pound bodyweight) for muscle building",
            "Balanced macros: 40% carbs, 30% protein, 30% fats",
            "Pre-workout carbs for energy, post-workout protein for recovery",
          ]
        },
        {
          title: "Daily Meal Structure",
          prompts: [
            "How many meals and snacks work best with your schedule?",
            "What does your typical day look like for meal timing?",
            "Which meals are you most likely to skip or rush?",
            "When do you struggle most with food choices?",
          ],
          examples: [
            "3 main meals + 2 snacks: breakfast, mid-morning snack, lunch, afternoon snack, dinner",
            "Intermittent fasting: skip breakfast, first meal at noon, dinner by 8pm",
            "5-6 small meals throughout the day for stable blood sugar",
            "Bigger breakfast and lunch, lighter dinner for better sleep",
          ]
        },
        {
          title: "Meal Prep & Planning",
          prompts: [
            "How much time can you dedicate to meal prep each week?",
            "What meals or components would save you the most time to prep?",
            "What kitchen tools and containers do you need for success?",
            "How will you handle meal prep when you're busy or traveling?",
          ],
          examples: [
            "Sunday prep: cook proteins, chop vegetables, prepare overnight oats",
            "Batch cook: make large portions of soups, stews, or casseroles to freeze",
            "Pre-portion snacks into grab-and-go containers",
            "Prep ingredients only, then quick-cook fresh meals daily",
          ]
        },
        {
          title: "Hydration & Supplements",
          prompts: [
            "How much water do you currently drink, and what's your goal?",
            "What helps you remember to drink water throughout the day?",
            "Are there any supplements that align with your goals?",
            "How will you track your hydration and supplement routine?",
          ],
          examples: [
            "Drink 16oz water upon waking, then 8oz every hour",
            "Use a large water bottle with time markers to track intake",
            "Basic supplements: multivitamin, vitamin D, omega-3s",
            "Pre-workout supplement for energy, protein powder for convenience",
          ]
        },
        {
          title: "Social Situations & Flexibility",
          prompts: [
            "How will you handle dining out while staying on track?",
            "What strategies work for social events and celebrations?",
            "How will you manage cravings and emotional eating?",
            "What does a balanced approach look like for your lifestyle?",
          ],
          examples: [
            "Research restaurant menus ahead of time and plan your order",
            "Eat a small protein-rich snack before parties to avoid overindulging",
            "Follow the 80/20 rule: healthy choices 80% of the time",
            "Have a plan for stress eating: go for a walk, call a friend, drink tea",
          ]
        }
      ]}
      tips={[
        "Focus on whole, minimally processed foods as the foundation of your diet",
        "Aim for protein at every meal to support muscle maintenance and satiety",
        "Don't eliminate entire food groups unless medically necessary - balance is key",
        "Meal prep doesn't have to be elaborate - even washing and chopping vegetables helps",
        "Track your food for a week to understand your current eating patterns",
        "Stay hydrated - thirst can often be mistaken for hunger",
        "Plan for imperfection - having healthy backup options prevents derailment",
        "Listen to your body's hunger and fullness cues rather than eating by the clock",
      ]}
    />
  )
}