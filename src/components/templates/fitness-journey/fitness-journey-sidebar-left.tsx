"use client"

import * as React from "react"
import {
  Target,
  Dumbbell,
  Apple,
  TrendingUp,
  Users,
  Heart,
  Calendar,
  ClipboardList,
  Settings2,
} from "lucide-react"

import { NavGuidedNotes } from "@/components/nav-guided-notes"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavResources } from "@/components/nav-resources"
import { NavMyNotes } from "@/components/nav-my-notes"
import { TeamSwitcher } from "@/components/team-switcher"
import { useFitnessJourney, getFitnessDisplayData } from "@/contexts/fitness-journey-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const getData = (userName: string, activeSection: string = "overview", onNavigate?: (section: string) => void) => ({
  teams: [
    {
      name: "Fitness Journey",
      logo: Heart,
      plan: userName,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Heart,
      isActive: activeSection === "overview",
      onClick: () => onNavigate?.("overview"),
    },
    {
      title: "Goals",
      url: "#goals",
      icon: Target,
      isActive: activeSection === "goals",
      onClick: () => onNavigate?.("goals"),
    },
    {
      title: "Workout Plan",
      url: "#workout",
      icon: Dumbbell,
      isActive: activeSection === "workout",
      onClick: () => onNavigate?.("workout"),
    },
    {
      title: "Nutrition",
      url: "#nutrition",
      icon: Apple,
      isActive: activeSection === "nutrition",
      onClick: () => onNavigate?.("nutrition"),
    },
    {
      title: "Progress",
      url: "#progress",
      icon: TrendingUp,
      isActive: activeSection === "progress",
      onClick: () => onNavigate?.("progress"),
    },
    {
      title: "Health Metrics",
      url: "#health-metrics",
      icon: Users,
      isActive: activeSection === "health-metrics",
      onClick: () => onNavigate?.("health-metrics"),
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
      name: "Goal Setting & Planning",
      url: "#goal-setting",
      emoji: "🎯",
    },
    {
      name: "Workout Planning & Scheduling",
      url: "#workout-planning",
      emoji: "💪",
    },
    {
      name: "Nutrition Planning & Meal Prep",
      url: "#nutrition-planning",
      emoji: "🍽️",
    },
    {
      name: "Progress Tracking & Measurements",
      url: "#progress-tracking",
      emoji: "📈",
    },
    {
      name: "Equipment Setup & Home Gym",
      url: "#equipment-setup",
      emoji: "🏋️",
    },
    {
      name: "Motivation & Habit Building",
      url: "#motivation-habits",
      emoji: "🔥",
    },
    {
      name: "Injury Prevention & Recovery",
      url: "#injury-prevention",
      emoji: "🛡️",
    },
    {
      name: "Social Support & Accountability",
      url: "#social-support",
      emoji: "👥",
    },
    {
      name: "Lifestyle Integration & Daily Habits",
      url: "#lifestyle-integration",
      emoji: "⚖️",
    },
    {
      name: "Long-term Planning & Sustainability",
      url: "#long-term-planning",
      emoji: "🔄",
    },
  ],
  resources: [
    {
      name: "Exercise Guide & Techniques",
      url: "#exercise-guide",
      emoji: "📖",
    },
    {
      name: "Nutrition Facts & Guidelines",
      url: "#nutrition-guide",
      emoji: "🥗",
    },
    {
      name: "Fitness Journey Checklist",
      url: "#fitness-checklist",
      emoji: "✅",
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
  onNavigate,
  ...props
}: React.ComponentProps<typeof Sidebar> & { 
  activeSection?: string
  onNavigate?: (section: string) => void
}) {
  const { data: fitnessData } = useFitnessJourney()
  const displayData = getFitnessDisplayData(fitnessData)
  const data = getData(displayData.name, activeSection, onNavigate)

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