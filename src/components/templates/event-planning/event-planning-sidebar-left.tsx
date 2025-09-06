"use client"

import * as React from "react"
import {
  Calendar,
  MapPin,
  Users,
  DollarSign,
  CheckSquare,
  Camera,
  Utensils,
  Music,
  Gift,
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
import { useEventPlanning, getEventPlanningDisplayData } from "@/contexts/event-planning-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const getData = (eventName: string, activeSection: string = "overview") => ({
  teams: [
    {
      name: "Event Planning",
      logo: Calendar,
      plan: eventName,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Calendar,
      isActive: activeSection === "overview",
    },
    {
      title: "Venue & Location",
      url: "#venue",
      icon: MapPin,
      isActive: activeSection === "venue",
    },
    {
      title: "Guest Management",
      url: "#guests",
      icon: Users,
      isActive: activeSection === "guests",
    },
    {
      title: "Budget Planning",
      url: "#budget",
      icon: DollarSign,
      isActive: activeSection === "budget",
    },
    {
      title: "Vendor Coordination",
      url: "#vendors",
      icon: CheckSquare,
      isActive: activeSection === "vendors",
    },
    {
      title: "Timeline & Tasks",
      url: "#timeline",
      icon: CheckSquare,
      isActive: activeSection === "timeline",
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
      name: "Venue Selection & Booking",
      url: "#venue-selection",
      emoji: "🏟️",
    },
    {
      name: "Budget Planning",
      url: "#budget-planning",
      emoji: "💰",
    },
    {
      name: "Vendor Coordination",
      url: "#vendor-coordination",
      emoji: "🏪",
    },
    {
      name: "Guest Management",
      url: "#guest-management",
      emoji: "👥",
    },
    {
      name: "Timeline Coordination",
      url: "#timeline-coordination",
      emoji: "⏰",
    },
    {
      name: "Catering & Menu",
      url: "#catering-menu",
      emoji: "🍽️",
    },
    {
      name: "Entertainment & Audio",
      url: "#entertainment-audio",
      emoji: "🎭",
    },
    {
      name: "Decor & Styling",
      url: "#decor-styling",
      emoji: "🎨",
    },
    {
      name: "Logistics Coordination",
      url: "#logistics-coordination",
      emoji: "🚗",
    },
    {
      name: "Day-of Management",
      url: "#day-of-management",
      emoji: "📋",
    },
  ],
  resources: [
    {
      name: "Planning Checklist",
      url: "#planning-checklist",
      emoji: "✅",
    },
    {
      name: "Budget Guide",
      url: "#budget-guide",
      emoji: "💰",
    },
    {
      name: "Vendor Guide",
      url: "#vendor-guide",
      emoji: "🏪",
    },
    {
      name: "Timeline Guide",
      url: "#timeline-guide",
      emoji: "⏰",
    },
  ],
  myNotes: [
    {
      name: "My Notes",
      url: "#my-notes",
      emoji: "📝",
    },
  ],
})

export function SidebarLeft({
  activeSection,
  ...props
}: React.ComponentProps<typeof Sidebar> & { activeSection?: string }) {
  const { eventPlanningData } = useEventPlanning()
  const displayData = getEventPlanningDisplayData(eventPlanningData)
  const data = getData(displayData.eventName, activeSection)

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