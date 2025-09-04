"use client"

import * as React from "react"
import {
  Dumbbell,
  Activity,
  Utensils,
  Target,
  TrendingUp,
  Calendar,
  Users,
  Settings2,
  LifeBuoy,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import { useFitnessJourney, getFitnessJourneyDisplayData } from "@/contexts/fitness-journey-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Fitness journey-specific navigation data
const getFitnessJourneyData = (primaryGoal: string, fitnessLevel: string) => ({
  teams: [
    {
      name: "Fitness Journey",
      logo: Dumbbell,
      plan: `${primaryGoal} • ${fitnessLevel}`,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Dumbbell,
      isActive: true,
    },
    {
      title: "Workouts",
      url: "#workouts",
      icon: Activity,
    },
    {
      title: "Nutrition",
      url: "#nutrition",
      icon: Utensils,
    },
    {
      title: "Progress",
      url: "#progress",
      icon: TrendingUp,
    },
    {
      title: "Goals",
      url: "#goals",
      icon: Target,
    },
    {
      title: "Schedule",
      url: "#schedule",
      icon: Calendar,
    },
    {
      title: "Trainers",
      url: "#trainers",
      icon: Users,
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
      name: "Workout Planner",
      url: "#workout-planner",
      emoji: "💪",
    },
    {
      name: "Meal Prep Calculator",
      url: "#meal-prep",
      emoji: "🍽️",
    },
    {
      name: "Body Measurements",
      url: "#measurements",
      emoji: "📏",
    },
    {
      name: "Exercise Library",
      url: "#exercise-library",
      emoji: "📚",
    },
    {
      name: "Nutrition Calculator",
      url: "#nutrition-calculator",
      emoji: "🔢",
    },
    {
      name: "Progress Photos",
      url: "#progress-photos",
      emoji: "📸",
    },
    {
      name: "Workout Timer",
      url: "#timer",
      emoji: "⏱️",
    },
    {
      name: "Supplement Tracker",
      url: "#supplements",
      emoji: "💊",
    },
    {
      name: "Weight Tracker",
      url: "#weight-tracker",
      emoji: "⚖️",
    },
    {
      name: "Recipe Collection",
      url: "#recipes",
      emoji: "👩‍🍳",
    },
    {
      name: "Hydration Tracker",
      url: "#hydration",
      emoji: "💧",
    },
    {
      name: "Sleep Monitor",
      url: "#sleep",
      emoji: "😴",
    },
  ],
  workspaces: [
    {
      name: "Training Programs",
      emoji: "🏋️",
      pages: [
        {
          name: "Current Program",
          url: "#current-program",
          emoji: "▶️",
        },
        {
          name: "Program Library",
          url: "#program-library",
          emoji: "📖",
        },
        {
          name: "Custom Workouts",
          url: "#custom-workouts",
          emoji: "⚙️",
        },
        {
          name: "Workout History",
          url: "#workout-history",
          emoji: "📋",
        },
        {
          name: "Exercise Database",
          url: "#exercise-database",
          emoji: "🗃️",
        },
      ],
    },
    {
      name: "Nutrition Planning",
      emoji: "🥗",
      pages: [
        {
          name: "Meal Plans",
          url: "#meal-plans",
          emoji: "📅",
        },
        {
          name: "Macros Tracker",
          url: "#macros",
          emoji: "🎯",
        },
        {
          name: "Food Diary",
          url: "#food-diary",
          emoji: "📝",
        },
        {
          name: "Recipe Manager",
          url: "#recipe-manager",
          emoji: "📖",
        },
        {
          name: "Grocery Lists",
          url: "#grocery-lists",
          emoji: "🛒",
        },
      ],
    },
    {
      name: "Health Monitoring",
      emoji: "❤️",
      pages: [
        {
          name: "Body Composition",
          url: "#body-composition",
          emoji: "📊",
        },
        {
          name: "Vital Signs",
          url: "#vitals",
          emoji: "💓",
        },
        {
          name: "Recovery Metrics",
          url: "#recovery",
          emoji: "🔋",
        },
        {
          name: "Injury Prevention",
          url: "#injury-prevention",
          emoji: "🛡️",
        },
        {
          name: "Medical Records",
          url: "#medical-records",
          emoji: "🏥",
        },
      ],
    },
    {
      name: "Motivation & Support",
      emoji: "🌟",
      pages: [
        {
          name: "Goal Setting",
          url: "#goal-setting",
          emoji: "🎯",
        },
        {
          name: "Achievement Badges",
          url: "#achievements",
          emoji: "🏆",
        },
        {
          name: "Workout Buddies",
          url: "#workout-buddies",
          emoji: "👥",
        },
        {
          name: "Community Forum",
          url: "#community",
          emoji: "💬",
        },
        {
          name: "Success Stories",
          url: "#success-stories",
          emoji: "✨",
        },
      ],
    },
    {
      name: "Professional Support",
      emoji: "👨‍⚕️",
      pages: [
        {
          name: "Personal Trainers",
          url: "#personal-trainers",
          emoji: "🏃‍♂️",
        },
        {
          name: "Nutritionists",
          url: "#nutritionists",
          emoji: "🥕",
        },
        {
          name: "Physical Therapists",
          url: "#physical-therapists",
          emoji: "🦴",
        },
        {
          name: "Appointments",
          url: "#appointments",
          emoji: "📅",
        },
        {
          name: "Session Notes",
          url: "#session-notes",
          emoji: "📝",
        },
      ],
    },
  ],
})

export function FitnessJourneySidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { fitnessJourneyData } = useFitnessJourney()
  const displayData = getFitnessJourneyDisplayData(fitnessJourneyData)
  const data = getFitnessJourneyData(displayData.primaryGoal, displayData.fitnessLevel)

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