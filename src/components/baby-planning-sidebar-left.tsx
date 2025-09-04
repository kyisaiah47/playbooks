"use client"

import * as React from "react"
import {
  Baby,
  Heart,
  ShoppingCart,
  Home,
  Stethoscope,
  DollarSign,
  Calendar,
  BookOpen,
  Settings2,
  LifeBuoy,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavGuidedNotes } from "@/components/nav-guided-notes"
import { NavMain } from "@/components/nav-main"
import { NavMyNotes } from "@/components/nav-my-notes"
import { NavResources } from "@/components/nav-resources"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Baby planning-specific navigation data
const getBabyPlanningData = (babyName: string, weeksRemaining: number) => ({
  teams: [
    {
      name: "Baby Planning",
      logo: Baby,
      plan: `${babyName} • ${weeksRemaining} weeks to go`,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Baby,
      isActive: true,
    },
    {
      title: "Pregnancy Tracking",
      url: "#pregnancy",
      icon: Heart,
    },
    {
      title: "Baby Gear Checklist",
      url: "#gear",
      icon: ShoppingCart,
    },
    {
      title: "Nursery Planning",
      url: "#nursery",
      icon: Home,
    },
    {
      title: "Healthcare Coordination",
      url: "#healthcare",
      icon: Stethoscope,
    },
    {
      title: "Budget Planning",
      url: "#budget",
      icon: DollarSign,
    },
    {
      title: "Baby Names",
      url: "#names",
      icon: BookOpen,
    },
    {
      title: "Timeline & Schedule",
      url: "#timeline",
      icon: Calendar,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#settings",
      icon: Settings2,
    },
    {
      title: "Help",
      url: "#help",
      icon: LifeBuoy,
    },
  ],
  guidedNotes: [
    {
      name: "Pregnancy Journey Guide",
      url: "#pregnancy-journey-guide",
      emoji: "🤱",
    },
    {
      name: "First Trimester Essentials",
      url: "#first-trimester-guide",
      emoji: "🌱",
    },
    {
      name: "Second Trimester Prep",
      url: "#second-trimester-guide",
      emoji: "🌸",
    },
    {
      name: "Third Trimester Checklist",
      url: "#third-trimester-guide",
      emoji: "🌺",
    },
    {
      name: "Labor & Delivery Guide",
      url: "#labor-delivery-guide",
      emoji: "👶",
    },
    {
      name: "Baby Gear Essentials",
      url: "#baby-gear-guide",
      emoji: "🛍️",
    },
    {
      name: "Nursery Setup Guide",
      url: "#nursery-setup-guide",
      emoji: "🏠",
    },
    {
      name: "Hospital Bag Packing",
      url: "#hospital-bag-guide",
      emoji: "🎒",
    },
    {
      name: "Birth Plan Templates",
      url: "#birth-plan-guide",
      emoji: "📋",
    },
    {
      name: "Newborn Care Guide",
      url: "#newborn-care-guide",
      emoji: "👼",
    },
  ],
  resources: [
    {
      name: "Baby Planning Checklist",
      url: "#baby-planning-checklist",
      emoji: "✅",
    },
    {
      name: "Pregnancy & Baby Tips",
      url: "#pregnancy-tips",
      emoji: "💡",
    },
  ],
  myNotes: [
    {
      name: "My Baby Notes",
      url: "#my-notes",
      emoji: "📝",
    },
  ],
  favorites: [
    {
      name: "Weekly Development",
      url: "#weekly-development",
      emoji: "📅",
    },
    {
      name: "Pregnancy Symptoms Tracker",
      url: "#symptoms-tracker",
      emoji: "📝",
    },
    {
      name: "Baby Kick Counter",
      url: "#kick-counter",
      emoji: "👶",
    },
    {
      name: "Contraction Timer",
      url: "#contraction-timer",
      emoji: "⏱️",
    },
    {
      name: "Hospital Bag Checklist",
      url: "#hospital-bag",
      emoji: "🎒",
    },
    {
      name: "Birth Plan Template",
      url: "#birth-plan",
      emoji: "📋",
    },
    {
      name: "Baby Registry",
      url: "#registry",
      emoji: "🎁",
    },
    {
      name: "Feeding Schedule Planner",
      url: "#feeding-schedule",
      emoji: "🍼",
    },
    {
      name: "Sleep Schedule Tracker",
      url: "#sleep-tracker",
      emoji: "😴",
    },
    {
      name: "Doctor Appointment Log",
      url: "#appointment-log",
      emoji: "🩺",
    },
    {
      name: "Baby Photo Timeline",
      url: "#photo-timeline",
      emoji: "📸",
    },
    {
      name: "Milestone Tracker",
      url: "#milestones",
      emoji: "🎯",
    },
  ],
  workspaces: [
    {
      name: "Pregnancy Journey",
      emoji: "🤱",
      pages: [
        {
          name: "First Trimester",
          url: "#first-trimester",
          emoji: "🌱",
        },
        {
          name: "Second Trimester",
          url: "#second-trimester",
          emoji: "🌸",
        },
        {
          name: "Third Trimester",
          url: "#third-trimester",
          emoji: "🌺",
        },
        {
          name: "Labor & Delivery",
          url: "#labor-delivery",
          emoji: "👶",
        },
        {
          name: "Postpartum Recovery",
          url: "#postpartum",
          emoji: "💪",
        },
      ],
    },
    {
      name: "Baby Essentials",
      emoji: "🛍️",
      pages: [
        {
          name: "Must-Have Gear",
          url: "#must-have-gear",
          emoji: "⭐",
        },
        {
          name: "Feeding Supplies",
          url: "#feeding-supplies",
          emoji: "🍼",
        },
        {
          name: "Diaper & Bathing",
          url: "#diaper-bathing",
          emoji: "🛁",
        },
        {
          name: "Clothing & Accessories",
          url: "#clothing",
          emoji: "👕",
        },
        {
          name: "Safety & Health",
          url: "#safety-health",
          emoji: "🛡️",
        },
      ],
    },
    {
      name: "Home & Family Prep",
      emoji: "🏠",
      pages: [
        {
          name: "Nursery Design",
          url: "#nursery-design",
          emoji: "🎨",
        },
        {
          name: "Baby-Proofing",
          url: "#baby-proofing",
          emoji: "🔒",
        },
        {
          name: "Family Logistics",
          url: "#family-logistics",
          emoji: "📋",
        },
        {
          name: "Pet Preparation",
          url: "#pet-prep",
          emoji: "🐕",
        },
        {
          name: "Support System",
          url: "#support-system",
          emoji: "🤝",
        },
      ],
    },
    {
      name: "Care & Development",
      emoji: "💕",
      pages: [
        {
          name: "Feeding Plans",
          url: "#feeding-plans",
          emoji: "🥛",
        },
        {
          name: "Sleep Training",
          url: "#sleep-training",
          emoji: "😴",
        },
        {
          name: "Development Activities",
          url: "#development",
          emoji: "🧸",
        },
        {
          name: "Health & Wellness",
          url: "#health-wellness",
          emoji: "🏥",
        },
        {
          name: "Parenting Resources",
          url: "#parenting-resources",
          emoji: "📚",
        },
      ],
    },
    {
      name: "Special Events",
      emoji: "🎉",
      pages: [
        {
          name: "Baby Shower",
          url: "#baby-shower",
          emoji: "🎈",
        },
        {
          name: "Gender Reveal",
          url: "#gender-reveal",
          emoji: "💕",
        },
        {
          name: "Babymoon",
          url: "#babymoon",
          emoji: "🌙",
        },
        {
          name: "Birth Announcement",
          url: "#birth-announcement",
          emoji: "📢",
        },
        {
          name: "First Year Celebrations",
          url: "#first-year",
          emoji: "🎂",
        },
      ],
    },
  ],
})

export function BabyPlanningSidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  const data = getBabyPlanningData(displayData.babyName, displayData.weeksRemaining)

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavGuidedNotes guidedNotes={data.guidedNotes} />
        <NavResources resources={data.resources} />
        <NavMyNotes myNotes={data.myNotes} />
        <NavFavorites favorites={data.favorites} />
        <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}