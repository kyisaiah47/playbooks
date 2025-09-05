"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function HospitalBag() {
  return (
    <GuidedNotePage
      title="Hospital Bag Checklist"
      description="Pack everything you&apos;ll need for your hospital stay and baby&apos;s first days."
      sections={[
        {
          title: "For Mom - Labor & Delivery",
          prompts: [
            "What comfortable clothing will you wear during labor?",
            "What comfort items will help during labor and recovery?",
            "What personal care items do you need for your stay?",
            "What paperwork and important documents should you bring?",
            "What technology items will you want access to?"
          ],
          examples: [
            "2-3 comfortable nightgowns or labor gowns, robe, slippers",
            "Pillow from home, essential oils, massage tools, music playlist",
            "Shampoo, conditioner, toothbrush, lip balm, nursing pads",
            "Insurance cards, ID, birth plan copies, phone list",
            "Phone charger, camera, tablet for entertainment"
          ]
        },
        {
          title: "For Mom - Postpartum Recovery",
          prompts: [
            "What clothing will be comfortable for postpartum and breastfeeding?",
            "What items will support your physical recovery?",
            "What nursing and feeding supplies do you need?",
            "What comfort items will help with emotional well-being?",
            "What going-home outfit fits your changing body?"
          ],
          examples: [
            "Nursing bras (2-3), nursing tanks, loose pants, comfortable underwear",
            "Maternity pads, stool softener, hemorrhoid cream, pain relief",
            "Nursing pillow, breast pump parts, nipple cream, milk storage bags",
            "Photos of family, favorite snacks, comfort blanket",
            "Loose dress or pants 2 sizes larger than pre-pregnancy"
          ]
        },
        {
          title: "For Baby",
          prompts: [
            "What clothing sizes should you pack for baby?",
            "What feeding supplies will you need for baby?",
            "What comfort items will help soothe baby?",
            "What safety items are essential for baby?",
            "What going-home outfit and accessories does baby need?"
          ],
          examples: [
            "Newborn and 0-3 month onesies, sleepers, hats, mittens",
            "Burp cloths, bibs, formula/bottles if not exclusively breastfeeding",
            "Swaddle blankets, pacifiers, soft toy or lovey",
            "Properly installed car seat, extra blanket for car ride",
            "Weather-appropriate outfit, hat, blanket, first photo outfit"
          ]
        },
        {
          title: "For Partner & Labor Support",
          prompts: [
            "What comfort items does your partner need for the stay?",
            "What snacks and drinks will sustain your support team?",
            "What items will help document and celebrate the birth?",
            "What practical items does your partner need for extended stay?",
            "What communication tools will keep family updated?"
          ],
          examples: [
            "Comfortable clothes, pillow, blanket, toiletries, change of clothes",
            "Energy bars, crackers, sports drinks, instant coffee, gum",
            "Camera with extra batteries, video camera, announcement cards",
            "Phone charger, books/magazines, cash for vending machines",
            "Contact list, social media login info, thank you note templates"
          ]
        }
      ]}
      tips={[
        "Pack your bag by 36 weeks in case baby arrives early",
        "Use a checklist and pack in advance, not when labor starts",
        "Pack two bags: one for labor, one for postpartum recovery",
        "Bring items from home that make you comfortable and relaxed",
        "Ask your hospital what they provide vs. what you need to bring",
        "Keep your bag in an easily accessible location near your front door"
      ]}
    />
  )
}