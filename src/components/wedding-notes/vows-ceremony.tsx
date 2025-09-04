"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function VowsCeremony() {
  return (
    <GuidedNotePage
      title="Vows & Ceremony Script"
      description="Draft your personal wedding vows and plan your ceremony flow."
      sections={[
        {
          title: "Reflecting on Your Relationship",
          prompts: [
            "What are 3 things you love most about your partner?",
            "What is your favorite memory together?",
            "How has your partner made you a better person?",
            "What moment did you know they were 'the one'?"
          ],
          examples: [
            "I love how you make me laugh even on my worst days",
            "Our first trip together when we got completely lost but had the best time",
            "You've taught me to be more patient and understanding"
          ]
        },
        {
          title: "Promises & Commitments",
          prompts: [
            "What promises do you want to make for your future together?",
            "How do you want to support each other through challenges?",
            "What kind of life do you want to build together?",
            "What traditions do you want to create as a couple?"
          ],
          examples: [
            "'I promise to support your dreams, even when they scare me'",
            "'I vow to be your partner in all things, big and small'",
            "'I promise to choose you every day, even when it's hard'"
          ]
        },
        {
          title: "Future Dreams & Hopes",
          prompts: [
            "What are your hopes and dreams as a married couple?",
            "How do you envision growing old together?",
            "What adventures do you want to share?",
            "What legacy do you want to leave together?"
          ],
          examples: [
            "I can't wait to travel the world with you and create new memories",
            "I look forward to building a family and home together",
            "I want to grow old laughing with you on our front porch"
          ]
        },
        {
          title: "Ceremony Planning",
          prompts: [
            "What traditions or readings do you want to include in your ceremony?",
            "Do you want to exchange rings, and what will you say?",
            "Are there any cultural or religious elements to incorporate?",
            "What music or special moments do you want during the ceremony?"
          ],
          examples: [
            "Include a meaningful quote, poem, or religious text",
            "Unity candle, handfasting, or cultural traditions",
            "Special songs for processional, recessional, or during ceremony"
          ]
        }
      ]}
      tips={[
        "Keep vows to 1-2 minutes when spoken aloud",
        "Practice reading your vows out loud beforehand", 
        "Have a backup copy for your officiant",
        "Consider whether you want to share vows privately first",
        "Write from the heart - be authentic to your relationship"
      ]}
    />
  )
}