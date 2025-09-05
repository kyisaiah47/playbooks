"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function SleepSchedule() {
  return (
    <GuidedNotePage
      title="Sleep Schedule & Routine"
      description="Establish healthy sleep habits and routines that work for your baby and family."
      sections={[
        {
          title: "Safe Sleep Environment",
          prompts: [
            "How will you create a safe sleep space for your baby?",
            "What room temperature and lighting conditions promote good sleep?",
            "How will you handle noise and distractions during sleep times?",
            "What items belong in the crib and what should be avoided?",
            "How will you position baby for the safest sleep?"
          ],
          examples: [
            "Firm mattress, tight-fitting sheet, empty crib, room sharing",
            "68-70°F room temperature, blackout curtains, dim nightlight",
            "White noise machine, quiet household during naps",
            "Nothing in crib except baby and sleep sack - no blankets or toys",
            "Always place baby on back to sleep, feet to foot of crib"
          ]
        },
        {
          title: "Newborn Sleep Patterns",
          prompts: [
            "What sleep patterns can you expect in the first few months?",
            "How will you handle frequent night wakings and feeds?",
            "What strategies will help you get rest while caring for baby?",
            "How will you differentiate day and night for baby?",
            "What signs indicate baby is tired and ready for sleep?"
          ],
          examples: [
            "16-20 hours daily, 2-4 hour stretches, no day/night rhythm initially",
            "Feed, change, soothe back to sleep quickly and quietly",
            "Sleep when baby sleeps, take turns with partner, accept help",
            "Bright light and activity during day feeds, dim/quiet at night",
            "Rubbing eyes, yawning, fussiness, staring off, clenched fists"
          ]
        },
        {
          title: "Sleep Training & Routines",
          prompts: [
            "What bedtime routine will signal sleep time to baby?",
            "How do you plan to approach sleep training?",
            "What methods align with your parenting philosophy?",
            "How will you handle sleep regressions and disruptions?",
            "What role will comfort items play in baby&apos;s sleep?"
          ],
          examples: [
            "Bath, pajamas, feeding, book, songs, lay down awake",
            "Gentle methods around 4-6 months when baby is developmentally ready",
            "Gradual extinction, chair method, or no-cry solutions",
            "Maintain routine, extra comfort, patience during growth spurts",
            "Sleep sack, pacifier, soft music - avoid loose comfort items"
          ]
        },
        {
          title: "Managing Sleep Challenges",
          prompts: [
            "How will you handle common sleep problems like colic or reflux?",
            "What strategies will you try for babies who fight sleep?",
            "How will you adjust sleep schedules as baby grows?",
            "What will you do when travel disrupts sleep routines?",
            "How will you maintain your own sleep health as a parent?"
          ],
          examples: [
            "Elevated sleeping position, smaller frequent feeds, extra burping",
            "Swaddling, shushing, swinging motion, check for overstimulation",
            "Transition from 4 naps to 2 naps, later bedtime as baby grows",
            "Portable white noise, familiar sleep items, flexible expectations",
            "Take turns with night duties, nap when possible, ask for help"
          ]
        }
      ]}
      tips={[
        "Establish consistent bedtime routines early, even if baby doesn&apos;t follow them yet",
        "Remember that sleep patterns change frequently in the first year",
        "Every baby is different - trust your instincts over rigid schedules",
        "Safe sleep guidelines are non-negotiable, but everything else is flexible",
        "Sleep deprivation is temporary, but prioritize getting help when you need it",
        "Track sleep patterns to identify what works and what doesn&apos;t for your baby"
      ]}
    />
  )
}