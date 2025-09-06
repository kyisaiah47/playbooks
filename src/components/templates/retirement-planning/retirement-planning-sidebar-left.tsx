"use client"

import * as React from "react"
import {
  LayoutDashboard,
  PiggyBank,
  TrendingUp,
  Target,
  DollarSign,
  Calculator,
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
import { useRetirementPlanning, getRetirementDisplayData } from "@/contexts/retirement-planning-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const getData = (plannerName: string, activeSection: string = "overview", onNavigate?: (page: string) => void) => ({
  teams: [
    {
      name: "Retirement Planning",
      logo: PiggyBank,
      plan: plannerName,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: LayoutDashboard,
      isActive: activeSection === "overview",
      onClick: () => onNavigate?.("overview"),
    },
    {
      title: "Savings Tracker",
      url: "#savings",
      icon: PiggyBank,
      isActive: activeSection === "savings",
      onClick: () => onNavigate?.("savings"),
    },
    {
      title: "Investment Portfolio",
      url: "#portfolio",
      icon: TrendingUp,
      isActive: activeSection === "portfolio",
      onClick: () => onNavigate?.("portfolio"),
    },
    {
      title: "Retirement Goals",
      url: "#goals",
      icon: Target,
      isActive: activeSection === "goals",
      onClick: () => onNavigate?.("goals"),
    },
    {
      title: "Income Planning",
      url: "#income",
      icon: DollarSign,
      isActive: activeSection === "income",
      onClick: () => onNavigate?.("income"),
    },
    {
      title: "Expense Budgeting",
      url: "#expenses",
      icon: Calculator,
      isActive: activeSection === "expenses",
      onClick: () => onNavigate?.("expenses"),
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
      name: "Retirement Goals & Vision",
      url: "/retirement-planning/guided-notes/retirement-goals",
      emoji: "🎯",
    },
    {
      name: "Savings Strategy",
      url: "/retirement-planning/guided-notes/savings-strategy",
      emoji: "💼",
    },
    {
      name: "Investment Portfolio",
      url: "/retirement-planning/guided-notes/investment-portfolio",
      emoji: "📊",
    },
    {
      name: "Social Security Planning",
      url: "/retirement-planning/guided-notes/social-security",
      emoji: "🏛️",
    },
    {
      name: "Healthcare Planning",
      url: "/retirement-planning/guided-notes/healthcare-planning",
      emoji: "🏥",
    },
    {
      name: "Estate Planning",
      url: "/retirement-planning/guided-notes/estate-planning",
      emoji: "📋",
    },
    {
      name: "Retirement Income",
      url: "/retirement-planning/guided-notes/retirement-income",
      emoji: "💰",
    },
    {
      name: "Lifestyle Transition",
      url: "/retirement-planning/guided-notes/lifestyle-transition",
      emoji: "🏠",
    },
    {
      name: "Financial Protection",
      url: "/retirement-planning/guided-notes/financial-protection",
      emoji: "🛡️",
    },
  ],
  resources: [
    {
      name: "Investment Guide",
      url: "investment-guide",
      emoji: "📈",
    },
    {
      name: "Retirement Timeline",
      url: "retirement-timeline",
      emoji: "📅",
    },
    {
      name: "Social Security Guide",
      url: "social-security-guide",
      emoji: "🏛️",
    },
    {
      name: "Healthcare & Medicare",
      url: "healthcare-guide",
      emoji: "🏥",
    },
  ],
  myNotes: [
    {
      name: "My Notes",
      url: "my-notes",
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
  const { retirementData } = useRetirementPlanning()
  const displayData = getRetirementDisplayData(retirementData)
  const data = getData(displayData.fullName, activeSection, onNavigate)

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