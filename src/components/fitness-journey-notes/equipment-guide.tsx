"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function EquipmentGuide() {
  return (
    <GuidedNotePage
      title="Equipment Guide & Home Gym Setup"
      description="Choose the right fitness equipment for your goals, space, and budget to create an effective workout environment."
      sections={[
        {
          title: "Training Location Assessment",
          prompts: [
            "Where will you primarily work out (home, gym, outdoors, combination)?",
            "How much space do you have available for equipment and workouts?",
            "What are your storage constraints for equipment when not in use?",
            "How important is convenience vs. variety in your workout location?",
          ],
          examples: [
            "Spare bedroom converted to home gym with foldable equipment",
            "Corner of living room with equipment that stores in a closet",
            "Garage gym with permanent setup and heavier equipment",
            "Mix of gym membership for heavy lifting and home equipment for cardio",
          ]
        },
        {
          title: "Essential Equipment by Goal",
          prompts: [
            "What equipment aligns with your primary fitness goals?",
            "Which pieces of equipment would you actually use consistently?",
            "What are your must-haves vs. nice-to-haves within your budget?",
            "How will you prioritize equipment purchases over time?",
          ],
          examples: [
            "Weight loss focus: cardio equipment, resistance bands, dumbbells",
            "Strength building: barbell, plates, rack, bench, dumbbells",
            "General fitness: resistance bands, kettlebell, yoga mat, pull-up bar",
            "Minimal setup: bodyweight exercises, resistance bands, single dumbbell set",
          ]
        },
        {
          title: "Budget & Value Planning",
          prompts: [
            "What's your total budget for fitness equipment?",
            "Will you buy equipment gradually or make a larger upfront investment?",
            "What equipment offers the best value for versatility and longevity?",
            "How will you research quality vs. price for different equipment types?",
          ],
          examples: [
            "Start with basics under $200: resistance bands, yoga mat, dumbbells",
            "Invest in quality barbell and plates that will last for years",
            "Buy used equipment from gyms closing or people upgrading",
            "Consider equipment rental or financing for expensive items",
          ]
        },
        {
          title: "Space Optimization & Organization",
          prompts: [
            "How will you organize your workout space for efficiency and safety?",
            "What storage solutions will keep equipment accessible but tidy?",
            "How can you maximize your available space for different types of workouts?",
            "What flooring or protective measures do you need for your space?",
          ],
          examples: [
            "Wall-mounted rack systems for storing multiple equipment pieces",
            "Rubber mats to protect flooring and reduce noise",
            "Mirrors to make space feel larger and check form",
            "Folding equipment that can be stored flat against walls",
          ]
        },
        {
          title: "Maintenance & Safety",
          prompts: [
            "How will you maintain and care for your equipment to ensure longevity?",
            "What safety considerations are important for your workout space?",
            "How will you ensure proper form and technique without a trainer present?",
            "What backup plans do you have if equipment breaks or needs repair?",
          ],
          examples: [
            "Regular cleaning and maintenance schedule for all equipment",
            "Adequate lighting and clear pathways to prevent accidents",
            "Form videos or apps to ensure proper technique",
            "Basic repair tools and knowledge for common equipment issues",
          ]
        }
      ]}
      tips={[
        "Start with versatile, multi-use equipment rather than single-purpose items",
        "Buy quality basics first - you can always add specialty equipment later",
        "Test equipment at stores or gyms before making major purchases",
        "Consider the total cost of ownership including maintenance and space",
        "Resistance bands and bodyweight exercises can provide a full workout with minimal equipment",
        "Buy equipment you'll actually use consistently rather than what looks impressive",
        "Check warranty and return policies, especially for expensive equipment",
        "Join online communities to get reviews and advice from actual users",
      ]}
    />
  )
}