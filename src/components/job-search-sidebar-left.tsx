"use client"

import * as React from "react"
import {
  Briefcase,
  FileText,
  Users,
  Calendar,
  TrendingUp,
  MessageSquare,
  Settings2,
  LifeBuoy,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import { useJobSearch, getJobSearchDisplayData } from "@/contexts/job-search-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Job search-specific navigation data
const getJobSearchData = (targetRole: string, industry: string) => ({
  teams: [
    {
      name: "Job Search",
      logo: Briefcase,
      plan: `${targetRole} • ${industry}`,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Briefcase,
      isActive: true,
    },
    {
      title: "Applications",
      url: "#applications",
      icon: FileText,
    },
    {
      title: "Interview Prep",
      url: "#interviews",
      icon: MessageSquare,
    },
    {
      title: "Networking",
      url: "#networking",
      icon: Users,
    },
    {
      title: "Salary Tracker",
      url: "#salary",
      icon: TrendingUp,
    },
    {
      title: "Schedule",
      url: "#schedule",
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
      name: "Resume Builder",
      url: "#resume",
      emoji: "📄",
    },
    {
      name: "Cover Letter Templates",
      url: "#cover-letters",
      emoji: "📝",
    },
    {
      name: "Interview Questions Bank",
      url: "#question-bank",
      emoji: "❓",
    },
    {
      name: "Job Board Tracker",
      url: "#job-boards",
      emoji: "🔍",
    },
    {
      name: "Salary Research",
      url: "#salary-research",
      emoji: "💰",
    },
    {
      name: "Company Research",
      url: "#company-research",
      emoji: "🏢",
    },
    {
      name: "LinkedIn Optimization",
      url: "#linkedin",
      emoji: "💼",
    },
    {
      name: "Portfolio Review",
      url: "#portfolio",
      emoji: "🎨",
    },
    {
      name: "Reference Manager",
      url: "#references",
      emoji: "👥",
    },
    {
      name: "Follow-up Templates",
      url: "#follow-ups",
      emoji: "📧",
    },
  ],
  workspaces: [
    {
      name: "Application Pipeline",
      emoji: "📋",
      pages: [
        {
          name: "Saved Jobs",
          url: "#saved-jobs",
          emoji: "💾",
        },
        {
          name: "Applied Jobs",
          url: "#applied",
          emoji: "📤",
        },
        {
          name: "In Progress",
          url: "#in-progress",
          emoji: "⏳",
        },
        {
          name: "Rejected",
          url: "#rejected",
          emoji: "❌",
        },
        {
          name: "Offers",
          url: "#offers",
          emoji: "🎉",
        },
      ],
    },
    {
      name: "Interview Process",
      emoji: "🎯",
      pages: [
        {
          name: "Phone Screens",
          url: "#phone-screens",
          emoji: "📞",
        },
        {
          name: "Technical Interviews",
          url: "#technical",
          emoji: "💻",
        },
        {
          name: "Behavioral Interviews",
          url: "#behavioral",
          emoji: "🗣️",
        },
        {
          name: "Final Rounds",
          url: "#final-rounds",
          emoji: "🏆",
        },
      ],
    },
    {
      name: "Professional Network",
      emoji: "🤝",
      pages: [
        {
          name: "Industry Contacts",
          url: "#industry-contacts",
          emoji: "👨‍💼",
        },
        {
          name: "Referral Requests",
          url: "#referrals",
          emoji: "🤝",
        },
        {
          name: "Informational Interviews",
          url: "#info-interviews",
          emoji: "☕",
        },
        {
          name: "Alumni Network",
          url: "#alumni",
          emoji: "🎓",
        },
      ],
    },
    {
      name: "Career Resources",
      emoji: "📚",
      pages: [
        {
          name: "Skill Development",
          url: "#skills",
          emoji: "🎯",
        },
        {
          name: "Industry News",
          url: "#news",
          emoji: "📰",
        },
        {
          name: "Job Market Trends",
          url: "#trends",
          emoji: "📈",
        },
        {
          name: "Career Advice",
          url: "#advice",
          emoji: "💡",
        },
      ],
    },
  ],
})

export function JobSearchSidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { jobSearchData } = useJobSearch()
  const displayData = getJobSearchDisplayData(jobSearchData)
  const data = getJobSearchData(displayData.targetRole, displayData.industry)

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