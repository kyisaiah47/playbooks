"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function MealPrepGuide() {
  return (
    <GuidedNotePage
      title="Meal Prep Guide & Kitchen Organization"
      description="Master meal preparation to support your fitness goals with efficient, sustainable systems."
      sections={[
        {
          title: "Meal Prep Strategy",
          prompts: [
            "How much time can you dedicate to meal prep each week?",
            "Will you prep full meals or just components (proteins, veggies, grains)?",
            "What meals or snacks cause you the most decision fatigue during busy times?",
            "How many days worth of meals will you prep at once?",
          ],
          examples: [
            "Sunday afternoon: 2 hours to prep lunches and snacks for the week",
            "Batch cook proteins on Sunday, prep fresh sides daily",
            "Prep grab-and-go breakfast items and post-workout snacks",
            "Cook large batches and freeze portions for future weeks",
          ]
        },
        {
          title: "Kitchen Tools & Organization",
          prompts: [
            "What containers and tools do you need for efficient meal prep?",
            "How will you organize your refrigerator and pantry for success?",
            "What cooking appliances could save you time (slow cooker, instant pot, air fryer)?",
            "How will you set up your kitchen for quick, healthy meal assembly?",
          ],
          examples: [
            "Glass containers in various sizes for portion control and reheating",
            "Sharp knives, cutting boards, and sheet pans for efficient prep",
            "Slow cooker for hands-off protein and vegetable cooking",
            "Designated fridge zones: prepped proteins, cut vegetables, grab-and-go snacks",
          ]
        },
        {
          title: "Recipe Planning & Variety",
          prompts: [
            "What are your go-to healthy recipes that you actually enjoy eating?",
            "How will you add variety to prevent meal prep boredom?",
            "What protein sources are both convenient and aligned with your goals?",
            "How will you incorporate seasonal vegetables and flavors?",
          ],
          examples: [
            "Master 3-4 versatile base recipes and vary seasonings/toppings",
            "Rotate between different cuisines: Mediterranean, Asian, Mexican themes",
            "Prep proteins in bulk: grilled chicken, ground turkey, hard-boiled eggs",
            "Change up vegetables based on what's in season and on sale",
          ]
        },
        {
          title: "Prep Day Workflow",
          prompts: [
            "What order will you prep foods to maximize efficiency?",
            "How will you multi-task to get everything done in your time window?",
            "What can you prep earlier in the week to lighten your main prep day?",
            "How will you involve family members or make prep time enjoyable?",
          ],
          examples: [
            "Start longest-cooking items first (roasted vegetables, slow cooker meals)",
            "While oven items cook, prep quick items like salads and snacks",
            "Wash and chop vegetables mid-week when you have extra 10 minutes",
            "Listen to podcasts or music to make prep time more enjoyable",
          ]
        },
        {
          title: "Storage & Food Safety",
          prompts: [
            "How long will different prepared foods stay fresh in your fridge?",
            "What foods prep well vs. what's better prepared fresh daily?",
            "How will you properly label and rotate prepared foods?",
            "What backup plans do you have for weeks when prep doesn't happen?",
          ],
          examples: [
            "Most prepped meals good for 3-4 days, soups and stews up to 5 days",
            "Store cut vegetables separately from dressings to maintain crispness",
            "Label containers with contents and date prepared",
            "Keep healthy frozen meals and pantry staples for emergency backup",
          ]
        }
      ]}
      tips={[
        "Start small - even prepping just breakfast or snacks makes a huge difference",
        "Prep ingredients rather than full meals if you prefer variety",
        "Cook once, eat multiple times - make extra portions for future meals",
        "Keep it simple - complex recipes are harder to stick with long-term",
        "Invest in quality containers that stack well and won't leak",
        "Prep vegetables immediately after grocery shopping to extend freshness",
        "Have a backup plan for weeks when meal prep doesn't happen",
        "Make prep time enjoyable with music, podcasts, or family involvement",
      ]}
    />
  )
}