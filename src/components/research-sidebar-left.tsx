"use client"

import * as React from "react"
import {
  GraduationCap,
  BookOpen,
  Target,
  Database,
  FileText,
  Users,
  Calendar,
  Settings2,
  LifeBuoy,
  MessageCircleQuestion,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import { useResearch, getResearchDisplayData } from "@/contexts/research-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Research-specific navigation data
const getResearchData = (projectTitle: string, researchField: string) => ({
  teams: [
    {
      name: "Academic Research",
      logo: GraduationCap,
      plan: `${projectTitle} • ${researchField}`,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: GraduationCap,
      isActive: true,
    },
    {
      title: "Literature Review",
      url: "#literature",
      icon: BookOpen,
    },
    {
      title: "Methodology",
      url: "#methodology",
      icon: Target,
    },
    {
      title: "Data Management",
      url: "#data",
      icon: Database,
    },
    {
      title: "Writing Tracker",
      url: "#writing",
      icon: FileText,
    },
    {
      title: "Collaboration",
      url: "#collaboration",
      icon: Users,
    },
    {
      title: "Timeline",
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
  favorites: [
    {
      name: "Research Proposal Draft",
      url: "#proposal",
      emoji: "📄",
    },
    {
      name: "Literature Database",
      url: "#lit-database",
      emoji: "📚",
    },
    {
      name: "Data Collection Checklist",
      url: "#data-checklist",
      emoji: "✅",
    },
    {
      name: "Analysis Progress Tracker",
      url: "#analysis",
      emoji: "📊",
    },
    {
      name: "Publication Timeline",
      url: "#publication",
      emoji: "📝",
    },
    {
      name: "Conference Deadlines",
      url: "#conferences",
      emoji: "📅",
    },
    {
      name: "Funding Applications",
      url: "#funding",
      emoji: "💰",
    },
    {
      name: "Ethics Review Status",
      url: "#ethics",
      emoji: "⚖️",
    },
    {
      name: "Supervisor Meeting Notes",
      url: "#meetings",
      emoji: "📋",
    },
    {
      name: "Research Journal",
      url: "#journal",
      emoji: "📓",
    },
  ],
  workspaces: [
    {
      name: "Literature & Sources",
      emoji: "📖",
      pages: [
        {
          name: "Primary Sources",
          url: "#primary-sources",
          emoji: "📜",
        },
        {
          name: "Secondary Sources",
          url: "#secondary-sources",
          emoji: "📰",
        },
        {
          name: "Citation Management",
          url: "#citations",
          emoji: "📎",
        },
        {
          name: "Reference Library",
          url: "#library",
          emoji: "📚",
        },
      ],
    },
    {
      name: "Research Design",
      emoji: "🔬",
      pages: [
        {
          name: "Research Questions",
          url: "#questions",
          emoji: "❓",
        },
        {
          name: "Hypotheses",
          url: "#hypotheses",
          emoji: "🔍",
        },
        {
          name: "Study Design",
          url: "#design",
          emoji: "📐",
        },
        {
          name: "Variables & Measures",
          url: "#variables",
          emoji: "📏",
        },
      ],
    },
    {
      name: "Data Collection",
      emoji: "📊",
      pages: [
        {
          name: "Data Collection Plan",
          url: "#collection-plan",
          emoji: "🗓️",
        },
        {
          name: "Survey Instruments",
          url: "#surveys",
          emoji: "📝",
        },
        {
          name: "Interview Protocols",
          url: "#interviews",
          emoji: "🎤",
        },
        {
          name: "Observation Forms",
          url: "#observations",
          emoji: "👁️",
        },
      ],
    },
    {
      name: "Analysis & Results",
      emoji: "📈",
      pages: [
        {
          name: "Statistical Analysis",
          url: "#statistics",
          emoji: "📊",
        },
        {
          name: "Qualitative Coding",
          url: "#coding",
          emoji: "🏷️",
        },
        {
          name: "Results Summary",
          url: "#results",
          emoji: "📋",
        },
        {
          name: "Discussion Points",
          url: "#discussion",
          emoji: "💭",
        },
      ],
    },
    {
      name: "Publication",
      emoji: "📚",
      pages: [
        {
          name: "Manuscript Drafts",
          url: "#manuscript",
          emoji: "📄",
        },
        {
          name: "Journal Selection",
          url: "#journals",
          emoji: "📖",
        },
        {
          name: "Peer Review Process",
          url: "#peer-review",
          emoji: "👥",
        },
        {
          name: "Revisions & Responses",
          url: "#revisions",
          emoji: "✏️",
        },
      ],
    },
  ],
})

export function ResearchSidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { researchData } = useResearch()
  const displayData = getResearchDisplayData(researchData)
  const data = getResearchData(displayData.projectTitle, researchData.researchField)

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