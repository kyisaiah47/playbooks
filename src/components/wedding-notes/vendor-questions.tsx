"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function VendorQuestions() {
  return (
    <GuidedNotePage
      title="Vendor Questions & Contracts"
      description="Essential questions to ask potential vendors and important contract details to track."
      sections={[
        {
          title: "Initial Research & Pricing",
          prompts: [
            "What is your pricing structure and what's included in the base package?",
            "Are there any additional fees I should know about?",
            "What is your payment schedule and when are payments due?",
            "Do you offer payment plans or financing options?"
          ],
          examples: [
            "Photography: 'Do you provide edited photos online or physical prints?'",
            "Catering: 'Is gratuity included or added separately?'",
            "Venue: 'What's included in setup, cleanup, and coordination?'"
          ]
        },
        {
          title: "Availability & Logistics",
          prompts: [
            "Are you available on our wedding date and time?",
            "How many events do you typically book per day?",
            "What is your arrival and setup timeline?",
            "Do you have backup plans if something goes wrong?"
          ],
          examples: [
            "DJ/Band: 'Do you have backup equipment and personnel?'",
            "Florist: 'When will flowers be delivered and who handles setup?'",
            "Transportation: 'What happens if the vehicle breaks down?'"
          ]
        },
        {
          title: "Experience & References",
          prompts: [
            "How many weddings have you done this year?",
            "Can you provide references from recent clients?",
            "Do you have photos or examples of similar events?",
            "Are you licensed and insured for wedding services?"
          ],
          examples: [
            "Check online reviews on Google, Yelp, and wedding sites",
            "Ask for contact info of 2-3 recent clients",
            "Request portfolio of weddings with similar style/budget"
          ]
        },
        {
          title: "Contracts & Policies",
          prompts: [
            "What is your cancellation and refund policy?",
            "What happens if you need to cancel due to emergency?",
            "Are there penalties for making changes to our contract?",
            "What specific deliverables are guaranteed in writing?"
          ],
          examples: [
            "Get detailed timeline and deliverable list in contract",
            "Understand force majeure (weather, illness) policies",
            "Clarify ownership rights for photos/videos"
          ]
        }
      ]}
      tips={[
        "Always get contracts in writing before making deposits",
        "Ask about backup plans for outdoor events", 
        "Confirm who will be your point of contact on wedding day",
        "Review cancellation policies carefully before signing"
      ]}
    />
  )
}