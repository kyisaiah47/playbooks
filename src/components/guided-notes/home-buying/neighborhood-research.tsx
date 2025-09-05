"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function NeighborhoodResearch() {
  return (
    <GuidedNotePage
      title="Neighborhood Research"
      description="Thoroughly research neighborhoods to find the best fit for your lifestyle and future plans."
      sections={[
        {
          title: "Demographics & Community",
          prompts: [
            "What demographic information matters most to you?",
            "How do you want to connect with your future neighbors?",
            "What community amenities and activities do you value?",
            "How important is neighborhood diversity to you?"
          ],
          examples: [
            "Age ranges, income levels, family composition, education levels",
            "Neighborhood associations, block parties, community gardens, local groups",
            "Parks, community centers, farmers markets, festivals, sports leagues",
            "Cultural, ethnic, age diversity creates vibrant community environment"
          ]
        },
        {
          title: "Safety & Crime Statistics",
          prompts: [
            "How do you research neighborhood safety and crime rates?",
            "What types of crime data should you pay attention to?",
            "How do you get a feel for safety beyond just statistics?",
            "What safety features do you want in your immediate area?"
          ],
          examples: [
            "Police department crime maps, online databases, local news reports",
            "Property crime, violent crime trends over 3-5 years, not just snapshots",
            "Walk around at different times of day, talk to residents, observe activity",
            "Street lighting, sidewalks, low traffic, visible neighbors, security presence"
          ]
        },
        {
          title: "Convenience & Accessibility",
          prompts: [
            "What daily amenities do you need within reasonable distance?",
            "How important is walkability and public transportation access?",
            "What's your acceptable commute time and traffic patterns?",
            "How do you evaluate internet connectivity and cell coverage?"
          ],
          examples: [
            "Grocery stores, gas stations, pharmacy, restaurants, banks within 10 minutes",
            "Walk Score above 70, bus/train access, bike lanes, pedestrian-friendly",
            "Test drive commute during rush hour, check traffic apps for patterns",
            "Test cell signal strength, research fiber availability, check speed tests"
          ]
        },
        {
          title: "Future Development & Value",
          prompts: [
            "What planned developments might affect the neighborhood?",
            "How have property values trended in this area recently?",
            "What factors might impact long-term desirability?",
            "How do you assess the neighborhood's growth potential?"
          ],
          examples: [
            "New shopping centers, road construction, zoning changes, school improvements",
            "5-10% annual appreciation, stable vs rapidly gentrifying areas",
            "School quality changes, infrastructure aging, demographic shifts",
            "Job market growth, transit expansion, commercial development plans"
          ]
        }
      ]}
      tips={[
        "Visit neighborhoods at different times of day and week to get true sense of area",
        "Talk to current residents - most are happy to share neighborhood insights",
        "Check city planning documents for future development that might impact area",
        "Use online tools like Walk Score, crime maps, and school rating sites",
        "Consider seasonal factors like snow removal, flood risk, or summer heat",
        "Research noise sources like airports, highways, or entertainment districts"
      ]}
    />
  )
}