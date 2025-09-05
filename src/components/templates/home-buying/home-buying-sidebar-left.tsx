"use client"

import * as React from "react"
import {
  Home,
  Search,
  DollarSign,
  ClipboardCheck,
  Truck,
  FileText,
  Calendar,
  UserCheck,
  Settings2,
  LifeBuoy,
  MessageCircleQuestion,
} from "lucide-react"

import { TeamSwitcher } from "@/components/team-switcher"
import { NavMain } from "@/components/nav-main"
import { NavGuidedNotes } from "@/components/nav-guided-notes"
import { NavResources } from "@/components/nav-resources"
import { NavMyNotes } from "@/components/nav-my-notes"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  teams: [
    {
      name: "Home Buying Journey",
      logo: Home,
      plan: "Personal",
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Home,
    },
    {
      title: "Property Search",
      url: "#property-search",
      icon: Search,
    },
    {
      title: "Financing",
      url: "#financing",
      icon: DollarSign,
    },
    {
      title: "Inspections",
      url: "#inspections",
      icon: ClipboardCheck,
    },
    {
      title: "Moving",
      url: "#moving",
      icon: Truck,
    },
    {
      title: "Legal & Closing",
      url: "#legal",
      icon: FileText,
    },
  ],
  guidedNotes: [
    {
      name: "House Hunting Criteria",
      url: "#house-hunting-criteria",
      emoji: "🏠",
    },
    {
      name: "Mortgage Comparison",
      url: "#mortgage-comparison",
      emoji: "💰",
    },
    {
      name: "Down Payment Planning",
      url: "#down-payment",
      emoji: "💳",
    },
    {
      name: "Home Inspection Guide",
      url: "#home-inspection",
      emoji: "🔍",
    },
    {
      name: "Insurance Shopping",
      url: "#insurance",
      emoji: "🛡️",
    },
    {
      name: "Closing Process",
      url: "#closing-process",
      emoji: "📋",
    },
    {
      name: "Moving Timeline",
      url: "#moving-timeline",
      emoji: "📅",
    },
    {
      name: "Utility Setup",
      url: "#utility-setup",
      emoji: "⚡",
    },
    {
      name: "Neighborhood Research",
      url: "#neighborhood-research",
      emoji: "🗺️",
    },
    {
      name: "Property Taxes",
      url: "#property-taxes",
      emoji: "📊",
    },
  ],
  resources: [
    {
      name: "First-Time Buyer's Guide",
      url: "#buyers-guide",
      emoji: "📚",
    },
    {
      name: "Mortgage Guide",
      url: "#mortgage-guide",
      emoji: "🏦",
    },
    {
      name: "Inspection Checklist",
      url: "#inspection-checklist",
      emoji: "✅",
    },
    {
      name: "Closing Guide",
      url: "#closing-guide",
      emoji: "🔑",
    },
  ],
  myNotes: [
    {
      name: "My Notes",
      url: "#create-note",
      emoji: "📝",
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#settings",
      icon: Settings2,
    },
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
}

export function HomeBuyingSidebarLeft({ activeSection, ...props }: React.ComponentProps<typeof Sidebar> & { activeSection?: string }) {
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
      <SidebarFooter>
        <div className="p-1">
          {/* Footer content if needed */}
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}