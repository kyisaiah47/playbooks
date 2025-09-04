"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function Registry() {
  return (
    <GuidedNotePage
      title="Wedding Registry Management"
      description="Create and manage your wedding registry to help guests choose meaningful gifts."
      sections={[
        {
          title: "Registry Planning & Strategy",
          prompts: [
            "What are your priorities for setting up a wedding registry?",
            "Which stores or online platforms work best for your needs?",
            "How will you balance practical items with special wishes?",
            "What's your budget range guidance for different guest relationships?"
          ],
          examples: [
            "Focus on home essentials, experiences, or upgrading current items",
            "Amazon, Target, Crate & Barrel, local specialty stores",
            "Mix of everyday necessities with dream items or experiences",
            "Range from $25-$300+ to accommodate all guest budgets"
          ]
        },
        {
          title: "Gift Categories & Selection",
          prompts: [
            "What kitchen and cooking items do you need for your new home?",
            "Which bedroom, bathroom, and home decor items are priorities?",
            "Are there any experiences or non-traditional gifts you'd prefer?",
            "What items do you already have that you don't need duplicates of?"
          ],
          examples: [
            "Stand mixer, quality knife set, dinnerware, small appliances",
            "Sheet sets, towels, artwork, furniture, storage solutions",
            "Honeymoon fund, date night experiences, subscription services",
            "Review current household items to avoid duplicate registrations"
          ]
        },
        {
          title: "Registry Management",
          prompts: [
            "How will you organize and update your registry as items are purchased?",
            "What's your plan for communicating registry information to guests?",
            "How will you handle duplicate gifts or unwanted items?",
            "What's your strategy for thank you notes and gift tracking?"
          ],
          examples: [
            "Check registry weekly, add items if popular ones sell out",
            "Include registry info on wedding website, not on invitations",
            "Research store return/exchange policies ahead of time",
            "Create spreadsheet tracking gifts received and thank you notes sent"
          ]
        },
        {
          title: "Alternative & Creative Options",
          prompts: [
            "Would you prefer cash funds for specific goals (house, honeymoon)?",
            "Are there charitable donations or causes you'd like guests to support?",
            "What handmade or personalized items would be meaningful?",
            "How will you handle guests who prefer to give cash or personal gifts?"
          ],
          examples: [
            "Honeymoon fund, down payment fund, home renovation fund",
            "Charity registry where guests donate to your favorite causes",
            "Family recipes, photo albums, custom artwork",
            "Graciously accept all gifts and focus on the thoughtfulness"
          ]
        }
      ]}
      tips={[
        "Register for items at various price points to accommodate all budgets",
        "Include your registry information on your wedding website, not invitations",
        "Keep registry updated - add items as popular ones get purchased",
        "Register for more items than you have guests to ensure plenty of options",
        "Don't forget to include your return/exchange preferences and policies"
      ]}
    />
  )
}