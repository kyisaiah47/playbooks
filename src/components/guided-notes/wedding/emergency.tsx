"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function Emergency() {
  return (
    <GuidedNotePage
      title="Wedding Day Emergency Kit"
      description="Prepare for common wedding day mishaps with a comprehensive emergency kit."
      sections={[
        {
          title: "Beauty & Touch-Up Essentials",
          prompts: [
            "What makeup and beauty items might need touch-ups throughout the day?",
            "What hair products and tools should you have on standby?",
            "What nail care items might be needed for last-minute fixes?",
            "What skincare items could help with wedding day stress?"
          ],
          examples: [
            "Lipstick, powder, mascara, blotting papers, makeup remover",
            "Bobby pins, hair spray, small brush, hair ties",
            "Clear nail polish, nail file, cuticle oil",
            "Face mist, oil-absorbing sheets, lip balm"
          ]
        },
        {
          title: "Fashion & Wardrobe Fixes",
          prompts: [
            "What sewing supplies are essential for dress or suit emergencies?",
            "What items could help with shoe discomfort or wardrobe malfunctions?",
            "What undergarment backups might be needed?",
            "What accessories could get lost or broken?"
          ],
          examples: [
            "Safety pins, needle and thread, fabric tape, stain remover",
            "Band-aids, heel grips, fashion tape, spare buttons",
            "Extra stockings, bra straps, shapewear backups",
            "Backup jewelry, extra boutonnieres, spare ties"
          ]
        },
        {
          title: "Health & Comfort Supplies",
          prompts: [
            "What medications might you or your wedding party need?",
            "What items will help keep everyone comfortable throughout the day?",
            "What snacks and drinks should you have available?",
            "What weather-related items might be necessary?"
          ],
          examples: [
            "Advil, antacids, allergy medication, anxiety relief",
            "Deodorant, tissues, wet wipes, hand sanitizer",
            "Protein bars, crackers, water bottles, mints",
            "Umbrella, shawl, sunscreen, bug spray"
          ]
        },
        {
          title: "Practical Problem Solvers",
          prompts: [
            "What tools might be needed for last-minute setup or fixes?",
            "What communication and coordination items are essential?",
            "What cleaning supplies could handle spills or stains?",
            "What items will help with vendor or timeline issues?"
          ],
          examples: [
            "Scissors, tape, zip ties, multi-tool, extension cord",
            "Phone chargers, vendor contact list, timeline copies",
            "Stain removal pens, paper towels, disinfecting wipes",
            "Cash for tips, vendor payment envelopes, timeline schedule"
          ]
        }
      ]}
      tips={[
        "Assign someone reliable (MOH, mom, wedding planner) to manage the kit",
        "Pack items in a clear container or bag for easy visibility",
        "Include a checklist so nothing gets forgotten on wedding day",
        "Keep the kit in a designated area accessible to wedding party",
        "Add personal items specific to your venue, season, or needs"
      ]}
    />
  )
}