"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function FeedingPlan() {
  return (
    <GuidedNotePage
      title="Feeding Plan & Schedule"
      description="Develop a feeding strategy that works for your family and supports baby&apos;s growth."
      sections={[
        {
          title: "Breastfeeding Goals & Support",
          prompts: [
            "What are your breastfeeding goals and expectations?",
            "What support system will help you succeed with breastfeeding?",
            "How will you handle common breastfeeding challenges?",
            "What supplies and equipment will support your breastfeeding journey?",
            "How will you maintain breastfeeding when you return to work?"
          ],
          examples: [
            "Exclusive breastfeeding for 6 months, continue to 12+ months",
            "Lactation consultant, breastfeeding support group, partner help",
            "Sore nipples: lanolin cream; low supply: pump after feeds",
            "Breast pump, nursing pillow, nursing bras, milk storage bags",
            "Pump 2-3 times daily at work, build freezer stash, bottle practice"
          ]
        },
        {
          title: "Formula Feeding & Combination Approach",
          prompts: [
            "What type of formula and feeding schedule will you use?",
            "How will you prepare and store formula safely?",
            "What bottles and nipples work best for your baby?",
            "How will you handle combination feeding if needed?",
            "What formula feeding supplies do you need?"
          ],
          examples: [
            "Standard cow&apos;s milk formula, every 2-3 hours, 2-4 oz per feed",
            "Sterilize bottles, use within 1 hour, refrigerate mixed formula",
            "Start with slow-flow nipples, try different bottle shapes",
            "Breastfeed morning/evening, formula during day/night feeds",
            "6-8 bottles, bottle brush, sterilizer, formula dispenser"
          ]
        },
        {
          title: "Feeding Schedule & Routines",
          prompts: [
            "How will you establish feeding patterns and routines?",
            "What cues will you watch for to know when baby is hungry?",
            "How will you track feeding times and amounts?",
            "How will feeding schedules adapt as baby grows?",
            "What flexibility will you build into your routine?"
          ],
          examples: [
            "Feed every 2-3 hours initially, gradually space out feeds",
            "Rooting, lip smacking, hand sucking, fussiness before crying",
            "Feeding log app, notebook tracking times/amounts/diapers",
            "0-3 months: every 2-3 hours; 3-6 months: every 3-4 hours",
            "Growth spurts, cluster feeding periods, travel adjustments"
          ]
        },
        {
          title: "Introducing Solids",
          prompts: [
            "When and how will you introduce solid foods to baby?",
            "What approach will you take to first foods and textures?",
            "How will you handle potential allergies and food sensitivities?",
            "What equipment and setup do you need for solid feeding?",
            "How will you balance milk feeds with solid foods?"
          ],
          examples: [
            "Start around 6 months when baby shows readiness signs",
            "Baby-led weaning or purees, single ingredients first",
            "Wait 3-5 days between new foods, watch for reactions",
            "High chair, bibs, baby spoons, sippy cups, food storage",
            "Offer solids first, then milk; maintain 3-4 milk feeds daily"
          ]
        }
      ]}
      tips={[
        "Trust your instincts and your baby&apos;s cues more than rigid schedules",
        "Every baby is different - what works for others may not work for you",
        "Prepare for setbacks and be flexible with your feeding plans",
        "Get professional help early if you encounter feeding difficulties",
        "Remember that fed is best - your baby&apos;s health and your wellbeing matter most",
        "Keep emergency supplies ready: extra bottles, formula, pump parts"
      ]}
    />
  )
}