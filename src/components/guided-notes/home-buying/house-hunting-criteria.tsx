"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function HouseHuntingCriteria() {
  return (
    <GuidedNotePage
      title="House Hunting Criteria"
      description="Define your ideal home criteria and priorities to streamline your search process."
      sections={[
        {
          title: "Location & Neighborhood",
          prompts: [
            "What cities or neighborhoods are you considering?",
            "How important is proximity to work, family, or schools?",
            "What type of neighborhood vibe do you prefer?",
            "Are there any areas you want to avoid and why?"
          ],
          examples: [
            "Within 30 minutes of downtown Seattle, family-friendly suburbs",
            "Walking distance to elementary school, under 45-minute commute",
            "Quiet residential area with parks, or vibrant urban setting",
            "Avoid flood zones, high-crime areas, or busy highways"
          ]
        },
        {
          title: "Property Features",
          prompts: [
            "How many bedrooms and bathrooms do you need?",
            "What's your preferred home style and age?",
            "What indoor features are must-haves vs nice-to-haves?",
            "Do you need any special accommodations or accessibility features?"
          ],
          examples: [
            "3 bedrooms, 2+ bathrooms for growing family",
            "Modern farmhouse, built after 2010, or charming historic home",
            "Open floor plan, updated kitchen, home office space",
            "Single-story layout, wide doorways, accessible bathroom"
          ]
        },
        {
          title: "Outdoor Space & Lot",
          prompts: [
            "What size lot or outdoor space do you want?",
            "Do you prefer a fenced yard, and why?",
            "What outdoor features matter most to you?",
            "How much maintenance are you willing to handle?"
          ],
          examples: [
            "Quarter-acre lot with room for kids to play",
            "Fenced backyard for dogs and privacy",
            "Covered patio, mature trees, garden space",
            "Low-maintenance landscaping, no pool to maintain"
          ]
        },
        {
          title: "Budget & Deal-Breakers",
          prompts: [
            "What's your firm maximum budget including closing costs?",
            "What repairs or updates are you willing to tackle?",
            "What conditions would make you walk away from a property?",
            "How flexible are you on your timeline and criteria?"
          ],
          examples: [
            "$450,000 max including $15,000 for closing costs",
            "Cosmetic updates okay, but not major structural issues",
            "Foundation problems, mold, or homes backing busy roads",
            "Must move by June for school, willing to compromise on yard size"
          ]
        }
      ]}
      tips={[
        "Create a weighted scoring system for your criteria to compare homes objectively",
        "Visit neighborhoods at different times of day and week to get a true feel",
        "Research future development plans that might impact the area",
        "Consider resale value even if you plan to stay long-term",
        "Keep a running list of pros and cons for each property you visit",
        "Don't let emotions override your practical needs and budget limits"
      ]}
    />
  )
}