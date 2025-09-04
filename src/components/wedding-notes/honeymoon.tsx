"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function Honeymoon() {
  return (
    <GuidedNotePage
      title="Honeymoon Planning"
      description="Plan the perfect post-wedding getaway to celebrate your new marriage."
      sections={[
        {
          title: "Destination & Timing",
          prompts: [
            "What type of honeymoon experience are you both dreaming of?",
            "When do you want to travel - immediately after the wedding or later?",
            "What destinations are on your bucket list and why?",
            "What's your ideal length for the honeymoon trip?"
          ],
          examples: [
            "Beach relaxation, cultural exploration, adventure activities, city experiences",
            "Leave 2 days after wedding vs. wait a few weeks to decompress",
            "Europe for history, Caribbean for beaches, Asia for culture",
            "1 week for nearby destinations, 2+ weeks for international travel"
          ]
        },
        {
          title: "Budget & Planning",
          prompts: [
            "What's your realistic budget for the entire honeymoon?",
            "How will you divide costs between flights, accommodation, and activities?",
            "Are there ways to save money or find deals on your dream trip?",
            "What splurges are worth it vs. where can you be practical?"
          ],
          examples: [
            "Set total budget including flights, hotels, meals, activities, shopping",
            "Allocate 40% accommodation, 30% flights, 30% food/activities",
            "Travel rewards, off-season dates, package deals, last-minute bookings",
            "Splurge on romantic dinners, save on lunch by exploring local spots"
          ]
        },
        {
          title: "Logistics & Preparation",
          prompts: [
            "What travel documents and preparations do you need?",
            "How will you pack for your destination and activities?",
            "What reservations and bookings should you make in advance?",
            "How will you handle work and responsibilities while away?"
          ],
          examples: [
            "Passports, visas, travel insurance, vaccination requirements",
            "Check weather, pack versatile outfits, comfortable shoes, dressy options",
            "Special restaurants, tours, shows, spa treatments, romantic experiences",
            "Set out-of-office messages, delegate tasks, truly disconnect"
          ]
        },
        {
          title: "Creating Memories",
          prompts: [
            "What experiences or activities are must-dos for your honeymoon?",
            "How do you want to document and remember your trip?",
            "What romantic moments or surprises do you want to plan?",
            "How will you balance planned activities with spontaneous relaxation?"
          ],
          examples: [
            "Couple's massage, sunset dinner, local cultural experiences, adventure activities",
            "Professional photo session, travel journal, collect mementos",
            "Surprise dinner reservation, couples activities, meaningful gifts",
            "Plan 2-3 key experiences, leave rest of time flexible for spontaneity"
          ]
        }
      ]}
      tips={[
        "Book flights and accommodation 2-6 months ahead for better prices",
        "Research local customs, tipping, and cultural expectations",
        "Pack copies of important documents and keep them separate from originals",
        "Set a daily spending budget to avoid overspending on activities",
        "Consider travel insurance, especially for international destinations"
      ]}
    />
  )
}