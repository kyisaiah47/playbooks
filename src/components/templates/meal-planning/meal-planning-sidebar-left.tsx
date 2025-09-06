"use client"

import * as React from "react"
import {
  ChefHat,
  ShoppingCart,
  Calendar,
  DollarSign,
  Users,
  Target,
  Settings2,
} from "lucide-react"

import { NavGuidedNotes } from "@/components/nav-guided-notes"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavResources } from "@/components/nav-resources"
import { NavMyNotes } from "@/components/nav-my-notes"
import { TeamSwitcher } from "@/components/team-switcher"
import { useMealPlanning, getMealPlanningDisplayData } from "@/contexts/meal-planning-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const getData = (userName: string, activeSection: string = "overview") => ({
  teams: [
    {
      name: "Meal Planning",
      logo: ChefHat,
      plan: userName,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: ChefHat,
      isActive: activeSection === "overview",
    },
    {
      title: "Meal Planning",
      url: "#meal-planning",
      icon: Calendar,
      isActive: activeSection === "meal-planning",
    },
    {
      title: "Recipe Collection",
      url: "#recipes",
      icon: Target,
      isActive: activeSection === "recipes",
    },
    {
      title: "Shopping Lists",
      url: "#shopping",
      icon: ShoppingCart,
      isActive: activeSection === "shopping",
    },
    {
      title: "Budget Tracking",
      url: "#budget",
      icon: DollarSign,
      isActive: activeSection === "budget",
    },
    {
      title: "Nutrition Tracking",
      url: "#nutrition",
      icon: Users,
      isActive: activeSection === "nutrition",
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
      name: "Meal Preferences & Dietary Needs",
      url: "#guided-notes/meal-preferences",
      emoji: "🍎",
    },
    {
      name: "Weekly Schedule Planning",
      url: "#guided-notes/weekly-schedule",
      emoji: "📅",
    },
    {
      name: "Recipe Collection & Organization",
      url: "#guided-notes/recipe-collection",
      emoji: "📖",
    },
    {
      name: "Grocery Planning & Shopping",
      url: "#guided-notes/grocery-planning",
      emoji: "🛒",
    },
    {
      name: "Meal Prep & Batch Cooking",
      url: "#guided-notes/meal-prep",
      emoji: "⏰",
    },
    {
      name: "Kitchen Setup & Organization",
      url: "#guided-notes/kitchen-setup",
      emoji: "🏠",
    },
    {
      name: "Food Budget Planning",
      url: "#guided-notes/budget-planning",
      emoji: "💰",
    },
    {
      name: "Family Meal Coordination",
      url: "#guided-notes/family-coordination",
      emoji: "👨‍👩‍👧‍👦",
    },
    {
      name: "Seasonal Meal Planning",
      url: "#guided-notes/seasonal-planning",
      emoji: "🌱",
    },
    {
      name: "Special Occasions & Holidays",
      url: "#guided-notes/special-occasions",
      emoji: "🎉",
    },
  ],
  resources: [
    {
      name: "Nutrition Basics",
      url: "#nutrition-basics",
      emoji: "🧬",
    },
    {
      name: "Meal Prep Guide",
      url: "#meal-prep-guide",
      emoji: "⏰",
    },
    {
      name: "Budget Cooking",
      url: "#budget-cooking",
      emoji: "💰",
    },
    {
      name: "Healthy Eating Guide",
      url: "#healthy-eating-guide",
      emoji: "🥗",
    },
  ],
  myNotes: [
    {
      name: "My Notes",
      url: "#my-notes",
      emoji: "✏️",
    },
  ],
})

export function SidebarLeft({
  activeSection,
  ...props
}: React.ComponentProps<typeof Sidebar> & { activeSection?: string }) {
  const { mealPlanningData } = useMealPlanning()
  const displayData = getMealPlanningDisplayData(mealPlanningData)
  const data = getData(displayData.name, activeSection)

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