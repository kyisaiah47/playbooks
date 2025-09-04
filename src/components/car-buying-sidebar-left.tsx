"use client"

import * as React from "react"
import {
  Car,
  Search,
  Building,
  DollarSign,
  Calendar,
  Wrench,
  Scale,
  Settings2,
  LifeBuoy,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import { useCarBuying, getCarBuyingDisplayData } from "@/contexts/car-buying-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Car buying-specific navigation data
const getCarBuyingData = (vehicleType: string, budgetRange: string) => ({
  teams: [
    {
      name: "Car Buying",
      logo: Car,
      plan: `${vehicleType} • ${budgetRange}`,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Car,
      isActive: true,
    },
    {
      title: "Vehicle Search",
      url: "#vehicle-search",
      icon: Search,
    },
    {
      title: "Dealerships",
      url: "#dealerships",
      icon: Building,
    },
    {
      title: "Financing",
      url: "#financing",
      icon: DollarSign,
    },
    {
      title: "Test Drives",
      url: "#test-drives",
      icon: Calendar,
    },
    {
      title: "Maintenance",
      url: "#maintenance",
      icon: Wrench,
    },
    {
      title: "Comparison",
      url: "#comparison",
      icon: Scale,
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
      name: "Vehicle Valuation",
      url: "#valuation",
      emoji: "💎",
    },
    {
      name: "Insurance Quotes",
      url: "#insurance",
      emoji: "🛡️",
    },
    {
      name: "Loan Calculator",
      url: "#loan-calc",
      emoji: "🧮",
    },
    {
      name: "VIN Decoder",
      url: "#vin-decoder",
      emoji: "🔍",
    },
    {
      name: "Recall Check",
      url: "#recalls",
      emoji: "⚠️",
    },
    {
      name: "MPG Calculator",
      url: "#mpg-calc",
      emoji: "⛽",
    },
    {
      name: "Trade-in Value",
      url: "#trade-in",
      emoji: "🔄",
    },
    {
      name: "Warranty Info",
      url: "#warranty",
      emoji: "📋",
    },
    {
      name: "Registration Guide",
      url: "#registration",
      emoji: "📄",
    },
    {
      name: "Inspection Checklist",
      url: "#inspection",
      emoji: "✅",
    },
  ],
  workspaces: [
    {
      name: "Vehicle Pipeline",
      emoji: "🚗",
      pages: [
        {
          name: "Saved Vehicles",
          url: "#saved-vehicles",
          emoji: "💾",
        },
        {
          name: "Contacted Dealers",
          url: "#contacted",
          emoji: "📞",
        },
        {
          name: "Test Drive Scheduled",
          url: "#scheduled",
          emoji: "📅",
        },
        {
          name: "Under Consideration",
          url: "#considering",
          emoji: "🤔",
        },
        {
          name: "Negotiating",
          url: "#negotiating",
          emoji: "💬",
        },
        {
          name: "Purchased",
          url: "#purchased",
          emoji: "🎉",
        },
      ],
    },
    {
      name: "Financing Options",
      emoji: "💰",
      pages: [
        {
          name: "Bank Loans",
          url: "#bank-loans",
          emoji: "🏦",
        },
        {
          name: "Credit Union",
          url: "#credit-union",
          emoji: "🤝",
        },
        {
          name: "Dealer Financing",
          url: "#dealer-financing",
          emoji: "🏢",
        },
        {
          name: "Lease Options",
          url: "#leasing",
          emoji: "📃",
        },
        {
          name: "Pre-approvals",
          url: "#pre-approved",
          emoji: "✅",
        },
      ],
    },
    {
      name: "Research Hub",
      emoji: "📚",
      pages: [
        {
          name: "Vehicle Reviews",
          url: "#reviews",
          emoji: "⭐",
        },
        {
          name: "Safety Ratings",
          url: "#safety",
          emoji: "🛡️",
        },
        {
          name: "Reliability Reports",
          url: "#reliability",
          emoji: "🔧",
        },
        {
          name: "Market Prices",
          url: "#market-prices",
          emoji: "📊",
        },
        {
          name: "Ownership Costs",
          url: "#ownership-costs",
          emoji: "💸",
        },
      ],
    },
    {
      name: "Documentation",
      emoji: "📋",
      pages: [
        {
          name: "Purchase Contracts",
          url: "#contracts",
          emoji: "📝",
        },
        {
          name: "Insurance Documents",
          url: "#insurance-docs",
          emoji: "🛡️",
        },
        {
          name: "Registration Papers",
          url: "#registration-docs",
          emoji: "📄",
        },
        {
          name: "Service Records",
          url: "#service-records",
          emoji: "🔧",
        },
        {
          name: "Warranty Papers",
          url: "#warranty-docs",
          emoji: "📋",
        },
      ],
    },
  ],
})

export function CarBuyingSidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { carBuyingData } = useCarBuying()
  const displayData = getCarBuyingDisplayData(carBuyingData)
  const data = getCarBuyingData(displayData.vehicleType, displayData.budgetRange)

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