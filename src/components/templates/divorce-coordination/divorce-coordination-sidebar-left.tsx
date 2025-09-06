"use client"

import * as React from "react"
import {
  FileText,
  Scale,
  Users,
  DollarSign,
  Home,
  MessageSquare,
  Calculator,
  Settings2,
} from "lucide-react"

import { NavGuidedNotes } from "@/components/nav-guided-notes"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavResources } from "@/components/nav-resources"
import { NavMyNotes } from "@/components/nav-my-notes"
import { TeamSwitcher } from "@/components/team-switcher"
import { useDivorceCoordination, getDivorceCoordinationDisplayData } from "@/contexts/divorce-coordination-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const getData = (familyNames: string, activeSection: string = "overview", onNavigate?: (page: string) => void) => ({
  teams: [
    {
      name: "Divorce Coordination",
      logo: Scale,
      plan: familyNames,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: FileText,
      isActive: activeSection === "overview",
      onClick: () => onNavigate?.("overview"),
    },
    {
      title: "Legal Documents",
      url: "#legal-documents",
      icon: Scale,
      isActive: activeSection === "legal-documents",
      onClick: () => onNavigate?.("legal-documents"),
    },
    {
      title: "Asset Division",
      url: "#asset-division",
      icon: Home,
      isActive: activeSection === "asset-division",
      onClick: () => onNavigate?.("asset-division"),
    },
    {
      title: "Child Custody",
      url: "#child-custody",
      icon: Users,
      isActive: activeSection === "child-custody",
      onClick: () => onNavigate?.("child-custody"),
    },
    {
      title: "Financial Planning",
      url: "#financial-planning",
      icon: Calculator,
      isActive: activeSection === "financial-planning",
      onClick: () => onNavigate?.("financial-planning"),
    },
    {
      title: "Communication Log",
      url: "#communication-log",
      icon: MessageSquare,
      isActive: activeSection === "communication-log",
      onClick: () => onNavigate?.("communication-log"),
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
      name: "Initial Consultation",
      url: "/divorce-coordination/guided-notes/initial-consultation",
      emoji: "⚖️",
    },
    {
      name: "Financial Disclosure",
      url: "/divorce-coordination/guided-notes/financial-disclosure",
      emoji: "💰",
    },
    {
      name: "Child Custody",
      url: "/divorce-coordination/guided-notes/child-custody",
      emoji: "👨‍👩‍👧‍👦",
    },
    {
      name: "Asset Division",
      url: "/divorce-coordination/guided-notes/asset-division",
      emoji: "🏠",
    },
    {
      name: "Support Planning",
      url: "/divorce-coordination/guided-notes/support-planning",
      emoji: "🧮",
    },
    {
      name: "Mediation Prep",
      url: "/divorce-coordination/guided-notes/mediation-prep",
      emoji: "🤝",
    },
    {
      name: "Court Preparation",
      url: "/divorce-coordination/guided-notes/court-preparation",
      emoji: "⚖️",
    },
    {
      name: "Final Decree",
      url: "/divorce-coordination/guided-notes/final-decree",
      emoji: "📋",
    },
  ],
  resources: [
    {
      name: "Divorce Process Guide",
      url: "#divorce-process-guide",
      emoji: "📖",
    },
    {
      name: "Legal Rights & Responsibilities", 
      url: "#legal-rights-guide",
      emoji: "⚖️",
    },
    {
      name: "Financial Planning Guide",
      url: "#financial-planning-guide",
      emoji: "💰",
    },
    {
      name: "Child Custody Guide",
      url: "#child-custody-guide",
      emoji: "👨‍👩‍👧‍👦",
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
  onNavigate,
  ...props
}: React.ComponentProps<typeof Sidebar> & { 
  activeSection?: string
  onNavigate?: (page: string) => void
}) {
  const { divorceData } = useDivorceCoordination()
  const displayData = getDivorceCoordinationDisplayData(divorceData)
  const familyNames = `${displayData.clientName} & ${displayData.spouseName}`
  const data = getData(familyNames, activeSection, onNavigate)

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavGuidedNotes guidedNotes={data.guidedNotes} activeSection={activeSection} />
        <NavResources resources={data.resources} onNavigate={onNavigate} />
        <NavMyNotes myNotes={data.myNotes} onNavigate={onNavigate} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}