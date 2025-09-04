"use client"

import * as React from "react"
import {
  Home,
  Search,
  Calculator,
  Users,
  CheckSquare,
  Truck,
  FileText,
  Settings2,
  LifeBuoy,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import { useHomeBuying, getHomeBuyingDisplayData } from "@/contexts/home-buying-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Home buying-specific navigation data
const getHomeBuyingData = (targetLocation: string, budgetRange: string) => ({
  teams: [
    {
      name: "Home Buying",
      logo: Home,
      plan: `${targetLocation} • ${budgetRange}`,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Home,
      isActive: true,
    },
    {
      title: "Property Search",
      url: "#properties",
      icon: Search,
    },
    {
      title: "Mortgage Calculator",
      url: "#mortgage",
      icon: Calculator,
    },
    {
      title: "Agent Tracker",
      url: "#agents",
      icon: Users,
    },
    {
      title: "Inspection Checklist",
      url: "#inspection",
      icon: CheckSquare,
    },
    {
      title: "Moving Planner",
      url: "#moving",
      icon: Truck,
    },
    {
      title: "Document Organizer",
      url: "#documents",
      icon: FileText,
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
  favorites: [
    {
      name: "MLS Search",
      url: "#mls-search",
      emoji: "🔍",
    },
    {
      name: "Zillow Tracker",
      url: "#zillow",
      emoji: "🏠",
    },
    {
      name: "Redfin Favorites",
      url: "#redfin",
      emoji: "❤️",
    },
    {
      name: "Neighborhood Guide",
      url: "#neighborhood",
      emoji: "🗺️",
    },
    {
      name: "School Ratings",
      url: "#schools",
      emoji: "🎓",
    },
    {
      name: "Market Analysis",
      url: "#market",
      emoji: "📊",
    },
    {
      name: "Interest Rate Tracker",
      url: "#rates",
      emoji: "📈",
    },
    {
      name: "Property Tax Calculator",
      url: "#tax-calc",
      emoji: "🧮",
    },
    {
      name: "HOA Finder",
      url: "#hoa",
      emoji: "🏢",
    },
    {
      name: "Moving Cost Calculator",
      url: "#moving-cost",
      emoji: "💰",
    },
    {
      name: "Utility Setup Guide",
      url: "#utilities",
      emoji: "⚡",
    },
    {
      name: "Home Insurance Quotes",
      url: "#insurance",
      emoji: "🛡️",
    },
  ],
  workspaces: [
    {
      name: "Property Pipeline",
      emoji: "🏠",
      pages: [
        {
          name: "Saved Properties",
          url: "#saved-properties",
          emoji: "💾",
        },
        {
          name: "Scheduled Viewings",
          url: "#viewings",
          emoji: "👀",
        },
        {
          name: "Properties Viewed",
          url: "#viewed",
          emoji: "✅",
        },
        {
          name: "Offers Made",
          url: "#offers",
          emoji: "📝",
        },
        {
          name: "Under Contract",
          url: "#contract",
          emoji: "🤝",
        },
        {
          name: "Closing Process",
          url: "#closing",
          emoji: "🎉",
        },
      ],
    },
    {
      name: "Financial Planning",
      emoji: "💰",
      pages: [
        {
          name: "Budget Tracker",
          url: "#budget",
          emoji: "📊",
        },
        {
          name: "Mortgage Pre-approval",
          url: "#pre-approval",
          emoji: "✅",
        },
        {
          name: "Loan Comparison",
          url: "#loan-comparison",
          emoji: "🔍",
        },
        {
          name: "Down Payment Tracker",
          url: "#down-payment",
          emoji: "💳",
        },
        {
          name: "Closing Costs",
          url: "#closing-costs",
          emoji: "📄",
        },
        {
          name: "Monthly Payments",
          url: "#payments",
          emoji: "💸",
        },
      ],
    },
    {
      name: "Professional Team",
      emoji: "👥",
      pages: [
        {
          name: "Real Estate Agents",
          url: "#agents-list",
          emoji: "🏘️",
        },
        {
          name: "Mortgage Lenders",
          url: "#lenders",
          emoji: "🏦",
        },
        {
          name: "Home Inspectors",
          url: "#inspectors",
          emoji: "🔍",
        },
        {
          name: "Attorneys/Title",
          url: "#legal",
          emoji: "⚖️",
        },
        {
          name: "Insurance Agents",
          url: "#insurance-agents",
          emoji: "🛡️",
        },
        {
          name: "Contractors",
          url: "#contractors",
          emoji: "🔨",
        },
      ],
    },
    {
      name: "Research & Analysis",
      emoji: "📊",
      pages: [
        {
          name: "Market Trends",
          url: "#trends",
          emoji: "📈",
        },
        {
          name: "Comparable Sales",
          url: "#comps",
          emoji: "📋",
        },
        {
          name: "Neighborhood Stats",
          url: "#neighborhood-stats",
          emoji: "🏘️",
        },
        {
          name: "Property History",
          url: "#history",
          emoji: "📚",
        },
        {
          name: "Investment Analysis",
          url: "#investment",
          emoji: "💼",
        },
        {
          name: "Future Value Projections",
          url: "#projections",
          emoji: "🔮",
        },
      ],
    },
    {
      name: "Moving & Setup",
      emoji: "📦",
      pages: [
        {
          name: "Moving Timeline",
          url: "#timeline",
          emoji: "📅",
        },
        {
          name: "Packing Checklist",
          url: "#packing",
          emoji: "📦",
        },
        {
          name: "Address Changes",
          url: "#address-change",
          emoji: "📬",
        },
        {
          name: "Utility Transfers",
          url: "#utility-transfer",
          emoji: "⚡",
        },
        {
          name: "Home Improvements",
          url: "#improvements",
          emoji: "🔧",
        },
        {
          name: "Warranty Registration",
          url: "#warranty",
          emoji: "📜",
        },
      ],
    },
  ],
})

export function HomeBuyingSidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { homeBuyingData } = useHomeBuying()
  const displayData = getHomeBuyingDisplayData(homeBuyingData)
  const data = getHomeBuyingData(displayData.targetLocation, displayData.budgetRange)

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}