"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function BabyRegistry() {
  return (
    <GuidedNotePage
      title="Baby Registry Essentials"
      description="Create a comprehensive registry that covers all your baby&apos;s needs across different price points."
      sections={[
        {
          title: "Feeding Essentials",
          prompts: [
            "What feeding method are you planning and what supplies do you need?",
            "What bottles and nipples work best for combination feeding?",
            "What breast pump and accessories will support your feeding goals?",
            "What feeding accessories make mealtimes easier and safer?",
            "How will you sterilize and organize feeding supplies?"
          ],
          examples: [
            "Nursing pillow, breast pump, milk storage bags, nipple cream",
            "4-6 bottles in different sizes, various nipple flows, bottle brush",
            "Electric breast pump with hands-free bra, extra pump parts",
            "Burp cloths, bibs, high chair, sippy cups for later",
            "Bottle sterilizer, drying rack, storage containers"
          ]
        },
        {
          title: "Sleep & Safety",
          prompts: [
            "What sleep essentials create a safe sleep environment?",
            "How will you monitor baby&apos;s sleep and safety?",
            "What comfort items help baby sleep better?",
            "What safety gear protects baby as they grow?",
            "How will you transport baby safely in cars and strollers?"
          ],
          examples: [
            "Firm mattress, fitted sheets, sleep sacks, white noise machine",
            "Baby monitor with video, movement sensor pad (optional)",
            "Swaddle blankets, pacifiers, blackout curtains",
            "Cabinet locks, outlet covers, baby gates, furniture anchors",
            "Infant car seat, stroller system, car seat base for second car"
          ]
        },
        {
          title: "Clothing & Bathing",
          prompts: [
            "What clothing essentials does baby need in multiple sizes?",
            "How will you handle diaper changes efficiently?",
            "What bath time supplies ensure safety and comfort?",
            "What seasonal clothing will baby need?",
            "How will you organize and store baby&apos;s growing wardrobe?"
          ],
          examples: [
            "Onesies, sleepers, pants in newborn, 0-3, 3-6 month sizes",
            "Cloth or disposable diapers, wipes, changing pad, diaper pail",
            "Baby bathtub, gentle shampoo, soft towels, bath thermometer",
            "Weather-appropriate outerwear, hats, mittens, sun protection",
            "Dresser with deep drawers, closet dividers, storage bins"
          ]
        },
        {
          title: "Development & Entertainment",
          prompts: [
            "What toys support baby&apos;s early development milestones?",
            "How will you create engaging play spaces for different ages?",
            "What books and music will you introduce to baby?",
            "What gear helps baby explore and move safely?",
            "How will you capture and preserve baby&apos;s milestones?"
          ],
          examples: [
            "Black and white books, rattles, soft toys, activity gym",
            "Play mat, bouncer seat, activity table, baby-safe mirrors",
            "Board books, lullaby music, classical music for babies",
            "Jumper, walker, push toys, baby-proofed play area",
            "Baby book, camera, milestone cards, handprint kit"
          ]
        }
      ]}
      tips={[
        "Register at multiple stores to give gift-givers options and price ranges",
        "Include items at different price points so everyone can find something to give",
        "Register for more than you think you need - you can always return extras",
        "Add items you&apos;ll need later (6+ months) so you get completion discounts",
        "Research safety recalls and choose products with good safety ratings",
        "Don&apos;t forget practical items like cleaning supplies and storage solutions"
      ]}
    />
  )
}