"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function UtilitySetup() {
  return (
    <GuidedNotePage
      title="Utility Setup & Transfers"
      description="Ensure all essential services are connected and running when you move into your new home."
      sections={[
        {
          title: "Essential Utilities",
          prompts: [
            "What basic utilities need to be set up or transferred?",
            "How far in advance should you schedule utility connections?",
            "What information do utility companies typically require?",
            "Are there any deposits or connection fees to expect?"
          ],
          examples: [
            "Electricity, gas, water, sewer, trash/recycling collection",
            "Schedule 2-3 weeks before move-in, earlier in busy seasons",
            "Social security number, previous address, move-in date, ID verification",
            "New customer deposits $100-300, connection fees $25-100 per service"
          ]
        },
        {
          title: "Internet & Cable",
          prompts: [
            "What internet speed and plan do you need for your household?",
            "Which providers serve your new area and what are their rates?",
            "How long does installation typically take to schedule?",
            "Should you bundle services or keep them separate?"
          ],
          examples: [
            "100+ Mbps for remote work, 25 Mbps for basic use",
            "Compare cable, fiber, satellite options in your area",
            "Installation 1-2 weeks out, may need to be home for 4-hour window",
            "Bundle internet/cable for discount vs internet-only with streaming"
          ]
        },
        {
          title: "Home Security & Monitoring",
          prompts: [
            "What security system options are you considering?",
            "Do you want professional monitoring or self-monitoring?",
            "What smart home features do you want to integrate?",
            "How do security systems affect your homeowners insurance?"
          ],
          examples: [
            "DIY systems like Ring/SimpliSafe vs professional ADT/Vivint",
            "Professional monitoring $20-50/month, self-monitoring apps only",
            "Smart locks, cameras, doorbell, smoke detectors, thermostats",
            "Security system discount may reduce insurance premiums 5-15%"
          ]
        },
        {
          title: "Service Coordination",
          prompts: [
            "How will you coordinate all the different service appointments?",
            "What happens if services aren't connected by move-in day?",
            "How do you handle transferring vs canceling services at your old home?",
            "What backup plans should you have for essential services?"
          ],
          examples: [
            "Schedule all appointments for first week, take time off work if needed",
            "Have backup heat source, mobile hotspot, restaurant plans ready",
            "Transfer date = disconnect date, avoid double-billing periods",
            "Generator for power outages, mobile hotspot for internet issues"
          ]
        }
      ]}
      tips={[
        "Start utility setup process 3-4 weeks before your move-in date",
        "Keep confirmation numbers and contact info for all utility companies",
        "Test all utilities during your final walkthrough before closing",
        "Research local providers - don't assume your current company serves the new area",
        "Consider energy-efficient plans and green energy options from the start",
        "Set up autopay and online accounts to avoid missed payments during transition"
      ]}
    />
  )
}