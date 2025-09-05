"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function SupplementsGuide() {
  return (
    <GuidedNotePage
      title="Supplements Guide & Research"
      description="Navigate the world of fitness supplements with evidence-based information and personal planning."
      sections={[
        {
          title: "Foundation Supplements",
          prompts: [
            "What basic health supplements might benefit your overall wellness?",
            "Do you have any nutritional gaps that supplements could address?",
            "What does your doctor or healthcare provider recommend for you specifically?",
            "How will you prioritize supplements based on evidence and your goals?",
          ],
          examples: [
            "Multivitamin for micronutrient insurance and overall health",
            "Vitamin D if you live in low-sunlight areas or test deficient",
            "Omega-3 fish oil for heart health and inflammation reduction",
            "Magnesium for sleep quality and muscle recovery",
          ]
        },
        {
          title: "Performance & Recovery Supplements",
          prompts: [
            "What supplements align with your specific fitness goals?",
            "How important is convenience vs. getting nutrients from whole foods?",
            "What performance benefits are you hoping to achieve?",
            "How will you time supplements around your workouts?",
          ],
          examples: [
            "Protein powder for convenient post-workout recovery",
            "Creatine monohydrate for strength and power improvements",
            "Caffeine (coffee/green tea) for pre-workout energy",
            "BCAAs or EAAs during long training sessions",
          ]
        },
        {
          title: "Supplement Research & Safety",
          prompts: [
            "How will you research supplements before trying them?",
            "What sources do you trust for unbiased supplement information?",
            "How will you check for interactions with medications or health conditions?",
            "What red flags will you watch for in supplement marketing?",
          ],
          examples: [
            "Check examine.com for evidence-based supplement research",
            "Consult with doctor or registered dietitian before starting new supplements",
            "Look for third-party tested products (NSF, Informed Choice certified)",
            "Avoid supplements with proprietary blends or unrealistic claims",
          ]
        },
        {
          title: "Budget & Prioritization",
          prompts: [
            "What's your monthly budget for supplements?",
            "Which supplements provide the best value for your goals?",
            "How will you prioritize supplements if you can't afford everything?",
            "What supplements are worth investing in vs. focusing on food first?",
          ],
          examples: [
            "Start with basics: multivitamin, vitamin D, protein powder",
            "Add creatine and caffeine for performance if budget allows",
            "Focus on whole foods first, supplements second",
            "Buy in bulk or look for sales on trusted brands",
          ]
        },
        {
          title: "Tracking & Evaluation",
          prompts: [
            "How will you track whether supplements are making a difference?",
            "What timeline will you use to evaluate supplement effectiveness?",
            "How will you adjust your supplement routine based on results?",
            "What side effects or negative reactions will you watch for?",
          ],
          examples: [
            "Keep a supplement log with start dates and dosages",
            "Evaluate energy, recovery, and performance after 4-6 weeks",
            "Note any digestive issues, sleep changes, or mood effects",
            "Cycle off supplements occasionally to see if you still need them",
          ]
        }
      ]}
      tips={[
        "Supplements supplement your diet - they can't replace a poor diet",
        "More expensive doesn't always mean better - focus on quality and third-party testing",
        "Start with one supplement at a time so you can evaluate individual effects",
        "Timing matters for some supplements - protein after workouts, magnesium before bed",
        "Read labels carefully and follow recommended dosages",
        "Some supplements take weeks or months to show benefits - be patient",
        "Keep supplements in a cool, dry place and check expiration dates",
        "When in doubt, consult with a healthcare provider or registered dietitian",
      ]}
    />
  )
}