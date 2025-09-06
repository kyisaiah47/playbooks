"use client"

import * as React from "react"
import {
  Briefcase,
  Building2,
  DollarSign,
  Users,
  Gavel,
  Megaphone,
  Target,
  Settings2,
  MessageCircleQuestion,
} from "lucide-react"

import { NavGuidedNotes } from "@/components/nav-guided-notes"
import { NavSecondary } from "@/components/nav-secondary"
import { NavResources } from "@/components/nav-resources"
import { NavMyNotes } from "@/components/nav-my-notes"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "@/components/team-switcher"
import { useSmallBusiness, getBusinessDisplayData } from "@/contexts/small-business-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const getData = (businessName: string, activeSection: string = "overview", onNavigate?: (page: string) => void) => ({
  teams: [
    {
      name: "Small Business Launch",
      logo: Briefcase,
      plan: businessName,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      page: "overview",
      icon: Briefcase,
      isActive: activeSection === "overview",
      onClick: () => onNavigate?.("overview"),
    },
    {
      title: "Business Planning",
      url: "#planning",
      page: "planning",
      icon: Target,
      isActive: activeSection === "planning",
      onClick: () => onNavigate?.("planning"),
    },
    {
      title: "Legal & Structure",
      url: "#legal",
      page: "legal",
      icon: Gavel,
      isActive: activeSection === "legal",
      onClick: () => onNavigate?.("legal"),
    },
    {
      title: "Finances & Funding",
      url: "#finances",
      page: "finances",
      icon: DollarSign,
      isActive: activeSection === "finances",
      onClick: () => onNavigate?.("finances"),
    },
    {
      title: "Marketing & Sales",
      url: "#marketing",
      page: "marketing",
      icon: Megaphone,
      isActive: activeSection === "marketing",
      onClick: () => onNavigate?.("marketing"),
    },
    {
      title: "Operations",
      url: "#operations",
      page: "operations",
      icon: Building2,
      isActive: activeSection === "operations",
      onClick: () => onNavigate?.("operations"),
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
      name: "Business Model Canvas",
      url: "#business-model",
      page: "business-model",
      emoji: "📊",
      onClick: () => onNavigate?.("business-model"),
    },
    {
      name: "Market Research & Analysis",
      url: "#market-research", 
      page: "market-research",
      emoji: "🔍",
      onClick: () => onNavigate?.("market-research"),
    },
    {
      name: "Competitive Analysis",
      url: "#competitive-analysis",
      page: "competitive-analysis", 
      emoji: "🏆",
      onClick: () => onNavigate?.("competitive-analysis"),
    },
    {
      name: "Financial Projections",
      url: "#financial-projections",
      page: "financial-projections",
      emoji: "📈",
      onClick: () => onNavigate?.("financial-projections"),
    },
    {
      name: "Funding Strategy & Sources",
      url: "#funding-strategy",
      page: "funding-strategy",
      emoji: "💰", 
      onClick: () => onNavigate?.("funding-strategy"),
    },
    {
      name: "Legal Structure & Registration",
      url: "#legal-structure",
      page: "legal-structure",
      emoji: "📋",
      onClick: () => onNavigate?.("legal-structure"),
    },
    {
      name: "Brand Identity & Messaging",
      url: "#brand-identity",
      page: "brand-identity",
      emoji: "🎨",
      onClick: () => onNavigate?.("brand-identity"),
    },
    {
      name: "Product Development Plan",
      url: "#product-development",
      page: "product-development",
      emoji: "🛠️",
      onClick: () => onNavigate?.("product-development"),
    },
    {
      name: "Launch Strategy & Timeline",
      url: "#launch-strategy",
      page: "launch-strategy",
      emoji: "🚀",
      onClick: () => onNavigate?.("launch-strategy"),
    },
    {
      name: "Customer Acquisition Plan", 
      url: "#customer-acquisition",
      page: "customer-acquisition",
      emoji: "👥",
      onClick: () => onNavigate?.("customer-acquisition"),
    },
    {
      name: "Operations & Systems Setup",
      url: "#operations-setup",
      page: "operations-setup", 
      emoji: "⚙️",
      onClick: () => onNavigate?.("operations-setup"),
    },
    {
      name: "Risk Management Plan",
      url: "#risk-management",
      page: "risk-management",
      emoji: "🛡️",
      onClick: () => onNavigate?.("risk-management"),
    },
  ],
  resources: [
    {
      name: "Small Business Startup Guide",
      url: "#startup-guide",
      page: "startup-guide",
      emoji: "📚",
      onClick: () => onNavigate?.("startup-guide"),
    },
    {
      name: "Business Plan Template",
      url: "#business-plan-template",
      page: "business-plan-template",
      emoji: "📝",
      onClick: () => onNavigate?.("business-plan-template"),
    },
    {
      name: "Legal Requirements Checklist",
      url: "#legal-checklist",
      page: "legal-checklist",
      emoji: "✅",
      onClick: () => onNavigate?.("legal-checklist"),
    },
    {
      name: "Marketing Toolkit",
      url: "#marketing-toolkit",
      page: "marketing-toolkit",
      emoji: "🎯",
      onClick: () => onNavigate?.("marketing-toolkit"),
    },
  ],
  myNotes: [
    {
      name: "My Notes",
      url: "#my-notes",
      page: "my-notes",
      emoji: "📝",
      onClick: () => onNavigate?.("my-notes"),
    },
  ],
})

function CustomNavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: React.ComponentType<{ className?: string }>
    isActive?: boolean
    onClick?: () => void
  }[]
}) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton 
            asChild={false} 
            isActive={item.isActive}
            onClick={(e) => {
              e.preventDefault()
              item.onClick?.()
            }}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <item.icon />
              <span>{item.title}</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

export function SidebarLeft({
  activeSection,
  onNavigate,
  ...props
}: React.ComponentProps<typeof Sidebar> & { 
  activeSection?: string
  onNavigate?: (page: string) => void 
}) {
  const { businessData } = useSmallBusiness()
  const displayData = getBusinessDisplayData(businessData)
  const data = getData(displayData.businessName, activeSection, onNavigate)

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <CustomNavMain items={data.navMain} />
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