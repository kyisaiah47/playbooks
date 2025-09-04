"use client"

import * as React from "react"
import {
  Heart,
  Users,
  DollarSign,
  CheckSquare,
  Building,
  Calendar,
  UserCheck,
  Settings2,
  LifeBuoy,
  MessageCircleQuestion,
} from "lucide-react"

import { NavGuidedNotes } from "@/components/nav-guided-notes"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavResources } from "@/components/nav-resources"
import { NavMyNotes } from "@/components/nav-my-notes"
import { TeamSwitcher } from "@/components/team-switcher"
import { useWedding, getWeddingDisplayData } from "@/contexts/wedding-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const getData = (coupleNames: string, activeSection: string = "overview") => ({
  teams: [
    {
      name: "Wedding Planning",
      logo: Heart,
      plan: coupleNames,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Heart,
      isActive: activeSection === "overview",
    },
    {
      title: "Vendors",
      url: "#vendors",
      icon: Building,
      isActive: activeSection === "vendors",
    },
    {
      title: "Guest List",
      url: "#guests",
      icon: Users,
      isActive: activeSection === "guests",
    },
    {
      title: "Budget",
      url: "#budget",
      icon: DollarSign,
      isActive: activeSection === "budget",
    },
    {
      title: "Tasks",
      url: "#tasks",
      icon: CheckSquare,
      isActive: activeSection === "tasks",
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#settings",
      icon: Settings2,
    },
  ],
  guidedNotes: [
    {
      name: "Wedding Timeline & Countdown",
      url: "#timeline",
      emoji: "📅",
    },
    {
      name: "Vendor Questions & Contracts",
      url: "#vendor-questions",
      emoji: "📋",
    },
    {
      name: "Guest RSVP Tracking",
      url: "#rsvp",
      emoji: "✉️",
    },
    {
      name: "Seating Arrangements",
      url: "#seating",
      emoji: "🪑",
    },
    {
      name: "Wedding Day Emergency Kit",
      url: "#emergency",
      emoji: "🆘",
    },
    {
      name: "Photography Shot List",
      url: "#photos",
      emoji: "📸",
    },
    {
      name: "Music & Playlist Planning",
      url: "#music",
      emoji: "🎵",
    },
    {
      name: "Vows & Ceremony Script",
      url: "#vows",
      emoji: "💕",
    },
    {
      name: "Wedding Registry Management",
      url: "#registry",
      emoji: "🎁",
    },
    {
      name: "Honeymoon Planning",
      url: "#honeymoon",
      emoji: "✈️",
    },
    {
      name: "Thank You Card Tracking",
      url: "#thankyou",
      emoji: "💌",
    },
    {
      name: "Wedding Day Schedule",
      url: "#day-schedule",
      emoji: "⏰",
    },
  ],
  resources: [
    {
      name: "Wedding Planning Checklist",
      url: "#checklist-resource",
      emoji: "✅",
    },
    {
      name: "Budget Planning Guide",
      url: "#budget-guide",
      emoji: "💰",
    },
  ],
  myNotes: [
    {
      name: "Create New Note",
      url: "#create-note",
      emoji: "➕",
    },
  ],
})

export function SidebarLeft({
  activeSection,
  ...props
}: React.ComponentProps<typeof Sidebar> & { activeSection?: string }) {
  const { weddingData } = useWedding()
  const displayData = getWeddingDisplayData(weddingData)
  const data = getData(displayData.coupleNames, activeSection)

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavGuidedNotes guidedNotes={data.guidedNotes} activeSection={activeSection} />
        <NavResources resources={data.resources} />
        <NavMyNotes myNotes={data.myNotes} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
