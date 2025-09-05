"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function NurserySetup() {
  return (
    <GuidedNotePage
      title="Nursery Setup Guide"
      description="Design and organize the perfect nursery space for your baby&apos;s comfort and safety."
      sections={[
        {
          title: "Room Planning & Safety",
          prompts: [
            "Which room will serve as the nursery and why?",
            "What safety measures need to be implemented in the nursery?",
            "How will you optimize lighting for day and night activities?",
            "What temperature control considerations are important?",
            "How will you baby-proof electrical outlets and furniture?"
          ],
          examples: [
            "Spare bedroom near master bedroom for easy nighttime access",
            "Secure furniture to walls, cover outlets, remove choking hazards",
            "Blackout curtains, dimmer switch, soft nightlight for feeding",
            "Temperature between 68-72°F, ceiling fan for air circulation",
            "Outlet covers, furniture corner guards, cord organizers"
          ]
        },
        {
          title: "Essential Furniture & Layout",
          prompts: [
            "What are the must-have furniture pieces for your nursery?",
            "How will you arrange furniture for optimal functionality?",
            "What storage solutions will keep the nursery organized?",
            "How will you create a comfortable feeding area?",
            "What seating options work best for nursing and bonding?"
          ],
          examples: [
            "Crib, changing table, dresser, bookshelf, rocking chair",
            "Crib away from windows, changing table with storage, clear pathways",
            "Dresser with deep drawers, baskets for toys, closet organizers",
            "Glider or rocking chair with side table and good lighting",
            "Comfortable chair with arms, footrest, side table for supplies"
          ]
        },
        {
          title: "Decor & Ambiance",
          prompts: [
            "What theme or color scheme reflects your vision?",
            "How will you incorporate meaningful decorative elements?",
            "What wall decor creates a nurturing environment?",
            "How will you add texture and visual interest to the space?",
            "What personal touches make the nursery special?"
          ],
          examples: [
            "Neutral colors with soft pastels, nature or safari theme",
            "Family photos, handmade quilts, artwork from loved ones",
            "Growth chart, inspirational quotes, removable wall decals",
            "Different fabrics, rugs, mobiles, textured wall hangings",
            "Baby&apos;s name on wall, pregnancy milestone photos"
          ]
        },
        {
          title: "Organization & Functionality",
          prompts: [
            "How will you organize baby clothes by size and season?",
            "What systems will keep diapers and supplies easily accessible?",
            "How will you store toys and books for different developmental stages?",
            "What cleaning and maintenance routines will you establish?",
            "How will you prepare the space to grow with your child?"
          ],
          examples: [
            "Dresser drawers labeled by size, closet dividers by 3-month increments",
            "Changing station with baskets for diapers, wipes, creams",
            "Low shelves for early books, bins for different types of toys",
            "Weekly vacuuming, dusting, washing bedding and curtains",
            "Convertible crib, adjustable shelving, timeless decor choices"
          ]
        }
      ]}
      tips={[
        "Start nursery setup by 32 weeks to avoid rushing before baby arrives",
        "Focus on essentials first - you can add decorative elements later",
        "Test all furniture assembly and safety features before baby&apos;s arrival",
        "Keep the design simple and calming for better sleep environments",
        "Consider room darkening and white noise for better sleep",
        "Make sure everything you need for nighttime care is within arm&apos;s reach"
      ]}
    />
  )
}