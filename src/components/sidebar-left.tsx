"use client"

import * as React from "react"
import {
  Heart,
  Users,
  DollarSign,
  CheckSquare,
  Building,
  Calendar,
  UserCheck,
  Settings2,
  LifeBuoy,
  MessageCircleQuestion,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import { useWedding, getWeddingDisplayData } from "@/contexts/wedding-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const getData = (coupleNames: string) => ({
  teams: [
    {
      name: "Wedding Hub",
      logo: Heart,
      plan: coupleNames,
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#overview",
      icon: Heart,
      isActive: true,
    },
    {
      title: "Vendors",
      url: "#vendors",
      icon: Building,
    },
    {
      title: "Guest List",
      url: "#guests",
      icon: Users,
    },
    {
      title: "Budget",
      url: "#budget",
      icon: DollarSign,
    },
    {
      title: "Tasks",
      url: "#tasks",
      icon: CheckSquare,
    },
  ],
  navSecondary: [
    {
      title: "Wedding Planner",
      url: "#planner",
      icon: UserCheck,
    },
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
      name: "Wedding Timeline & Countdown",
      url: "#timeline",
      emoji: "📅",
    },
    {
      name: "Vendor Contracts & Payments",
      url: "#contracts",
      emoji: "📋",
    },
    {
      name: "Guest RSVP Tracking",
      url: "#rsvp",
      emoji: "✉️",
    },
    {
      name: "Seating Arrangements",
      url: "#seating",
      emoji: "🪑",
    },
    {
      name: "Wedding Day Emergency Kit",
      url: "#emergency",
      emoji: "🆘",
    },
    {
      name: "Photography Shot List",
      url: "#photos",
      emoji: "📸",
    },
    {
      name: "Music & Playlist Planning",
      url: "#music",
      emoji: "🎵",
    },
    {
      name: "Wedding Registry Management",
      url: "#registry",
      emoji: "🎁",
    },
    {
      name: "Honeymoon Planning",
      url: "#honeymoon",
      emoji: "✈️",
    },
    {
      name: "Thank You Card Tracking",
      url: "#thankyou",
      emoji: "💌",
    },
  ],
  workspaces: [
    {
      name: "Venue & Location",
      emoji: "🏛️",
      pages: [
        {
          name: "Ceremony Venue Details",
          url: "#ceremony",
          emoji: "⛪",
        },
        {
          name: "Reception Venue Setup",
          url: "#reception",
          emoji: "🎪",
        },
        {
          name: "Backup Weather Plans",
          url: "#weather",
          emoji: "☔",
        },
      ],
    },
    {
      name: "Vendors & Services",
      emoji: "🤝",
      pages: [
        {
          name: "Photography & Videography",
          url: "#photo-video",
          emoji: "📷",
        },
        {
          name: "Catering & Bar Service",
          url: "#catering",
          emoji: "🍽️",
        },
        {
          name: "Flowers & Decorations",
          url: "#decorations",
          emoji: "🌸",
        },
        {
          name: "Music & Entertainment",
          url: "#entertainment",
          emoji: "🎼",
        },
        {
          name: "Transportation & Parking",
          url: "#transport",
          emoji: "🚗",
        },
      ],
    },
    {
      name: "Wedding Party",
      emoji: "👫",
      pages: [
        {
          name: "Bridal Party Coordination",
          url: "#bridal-party",
          emoji: "👰",
        },
        {
          name: "Groomsmen Activities",
          url: "#groomsmen",
          emoji: "🤵",
        },
        {
          name: "Bachelor/Bachelorette Parties",
          url: "#parties",
          emoji: "🎉",
        },
      ],
    },
    {
      name: "Guest Experience",
      emoji: "🎊",
      pages: [
        {
          name: "Welcome Bags & Favors",
          url: "#welcome",
          emoji: "🎁",
        },
        {
          name: "Accommodation for Guests",
          url: "#hotels",
          emoji: "🏨",
        },
        {
          name: "Activities & Itinerary",
          url: "#activities",
          emoji: "🗓️",
        },
      ],
    },
  ],
})

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { weddingData } = useWedding()
  const displayData = getWeddingDisplayData(weddingData)
  const data = getData(displayData.coupleNames)

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
