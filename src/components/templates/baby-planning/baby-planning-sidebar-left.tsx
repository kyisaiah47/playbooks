"use client"

import * as React from "react"
import {
  Baby,
  Heart,
  Stethoscope,
  ShoppingBag,
  Users,
  DollarSign,
  Settings2,
} from "lucide-react"

import { NavGuidedNotes } from "@/components/nav-guided-notes"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavResources } from "@/components/nav-resources"
import { NavMyNotes } from "@/components/nav-my-notes"
import { TeamSwitcher } from "@/components/team-switcher"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const getData = (parentNames: string, activeSection: string = "overview") => ({
  teams: [
    {
      name: "Baby Planning",
      logo: Baby,
      plan: parentNames,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Baby,
      isActive: activeSection === "overview",
    },
    {
      title: "Health Tracking",
      url: "#health",
      icon: Stethoscope,
      isActive: activeSection === "health",
    },
    {
      title: "Postpartum Planning",
      url: "#preparation",
      icon: Heart,
      isActive: activeSection === "preparation",
    },
    {
      title: "Registry & Shopping",
      url: "#registry",
      icon: ShoppingBag,
      isActive: activeSection === "registry",
    },
    {
      title: "Budget Tracking",
      url: "#budget",
      icon: DollarSign,
      isActive: activeSection === "budget",
    },
    {
      title: "Timeline & Milestones",
      url: "#support",
      icon: Users,
      isActive: activeSection === "support",
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
      name: "Birth Plan & Preferences",
      url: "#birth-plan",
      emoji: "📋",
    },
    {
      name: "Hospital Bag Checklist",
      url: "#hospital-bag",
      emoji: "🏥",
    },
    {
      name: "Nursery Setup Guide",
      url: "#nursery-setup",
      emoji: "🍼",
    },
    {
      name: "Baby Registry Essentials",
      url: "#baby-registry",
      emoji: "🎁",
    },
    {
      name: "Maternity Leave Planning",
      url: "#maternity-leave",
      emoji: "📅",
    },
    {
      name: "Childcare Research & Setup",
      url: "#childcare",
      emoji: "👶",
    },
    {
      name: "Baby-Proofing Checklist",
      url: "#baby-proofing",
      emoji: "🔒",
    },
    {
      name: "Feeding Plan & Schedule",
      url: "#feeding-plan",
      emoji: "🍼",
    },
    {
      name: "Sleep Schedule & Routine",
      url: "#sleep-schedule",
      emoji: "💤",
    },
    {
      name: "Emergency Contacts & Info",
      url: "#emergency-contacts",
      emoji: "🚨",
    },
    {
      name: "Baby Shower Planning",
      url: "#baby-shower",
      emoji: "🎉",
    },
    {
      name: "Announcement Plans",
      url: "#announcements",
      emoji: "📢",
    },
  ],
  resources: [
    {
      name: "Pregnancy Week-by-Week Guide",
      url: "#pregnancy-guide",
      emoji: "📚",
    },
    {
      name: "Baby Gear Checklist",
      url: "#baby-gear-checklist",
      emoji: "🍼",
    },
    {
      name: "Newborn Care Guide",
      url: "#newborn-care",
      emoji: "👼",
    },
    {
      name: "Postpartum Recovery Guide",
      url: "#postpartum-guide",
      emoji: "💚",
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
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  const data = getData(displayData.parentNames, activeSection)

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
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}