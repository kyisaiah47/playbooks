"use client"

import * as React from "react"
import {
  GraduationCap,
  FileText,
  DollarSign,
  Calendar,
  MapPin,
  BookOpen,
  Users,
  ClipboardList,
  Settings2,
  LifeBuoy,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavResources } from "@/components/nav-resources"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import { useCollegePlanning, getCollegePlanningDisplayData } from "@/contexts/college-planning-context"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// College planning-specific navigation data
const getCollegePlanningData = (studentName: string, intendedMajor: string) => ({
  teams: [
    {
      name: "College Planning",
      logo: GraduationCap,
      plan: `${studentName} • ${intendedMajor}`,
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
      title: "Applications",
      url: "#applications",
      icon: FileText,
    },
    {
      title: "Financial Aid",
      url: "#financial-aid",
      icon: DollarSign,
    },
    {
      title: "Course Planning",
      url: "#course-planning",
      icon: BookOpen,
    },
    {
      title: "Campus Visits",
      url: "#campus-visits",
      icon: MapPin,
    },
    {
      title: "Essays",
      url: "#essays",
      icon: ClipboardList,
    },
    {
      title: "Recommendations",
      url: "#recommendations",
      icon: Users,
    },
    {
      title: "Calendar",
      url: "#calendar",
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
      name: "College Search",
      url: "#college-search",
      emoji: "🔍",
    },
    {
      name: "Common App",
      url: "#common-app",
      emoji: "📋",
    },
    {
      name: "Scholarship Database",
      url: "#scholarships",
      emoji: "💰",
    },
    {
      name: "SAT/ACT Prep",
      url: "#test-prep",
      emoji: "📚",
    },
    {
      name: "Essay Brainstorming",
      url: "#essay-brainstorm",
      emoji: "💭",
    },
    {
      name: "FAFSA Tracker",
      url: "#fafsa",
      emoji: "📄",
    },
    {
      name: "Transcript Manager",
      url: "#transcripts",
      emoji: "🎓",
    },
    {
      name: "Interview Prep",
      url: "#interview-prep",
      emoji: "🎯",
    },
    {
      name: "College Rankings",
      url: "#rankings",
      emoji: "📊",
    },
    {
      name: "Major Exploration",
      url: "#major-explorer",
      emoji: "🧭",
    },
    {
      name: "Campus Life Guide",
      url: "#campus-life",
      emoji: "🏫",
    },
    {
      name: "Deadline Tracker",
      url: "#deadlines",
      emoji: "⏰",
    },
  ],
  workspaces: [
    {
      name: "Application Pipeline",
      emoji: "📝",
      pages: [
        {
          name: "Research List",
          url: "#research-list",
          emoji: "🔍",
        },
        {
          name: "Shortlist",
          url: "#shortlist",
          emoji: "⭐",
        },
        {
          name: "In Progress",
          url: "#app-progress",
          emoji: "⏳",
        },
        {
          name: "Submitted",
          url: "#submitted",
          emoji: "📤",
        },
        {
          name: "Decisions",
          url: "#decisions",
          emoji: "🎉",
        },
      ],
    },
    {
      name: "Testing & Academics",
      emoji: "📊",
      pages: [
        {
          name: "SAT Planning",
          url: "#sat-planning",
          emoji: "📈",
        },
        {
          name: "ACT Planning",
          url: "#act-planning",
          emoji: "📉",
        },
        {
          name: "AP Course Tracker",
          url: "#ap-courses",
          emoji: "🎯",
        },
        {
          name: "GPA Monitor",
          url: "#gpa-monitor",
          emoji: "📋",
        },
        {
          name: "Course Selection",
          url: "#course-selection",
          emoji: "📚",
        },
      ],
    },
    {
      name: "Financial Planning",
      emoji: "💳",
      pages: [
        {
          name: "Cost Calculator",
          url: "#cost-calculator",
          emoji: "🧮",
        },
        {
          name: "Scholarship Tracker",
          url: "#scholarship-tracker",
          emoji: "🏆",
        },
        {
          name: "Financial Aid Forms",
          url: "#aid-forms",
          emoji: "📋",
        },
        {
          name: "529 Plans",
          url: "#529-plans",
          emoji: "💰",
        },
        {
          name: "Student Loans",
          url: "#student-loans",
          emoji: "📊",
        },
      ],
    },
    {
      name: "Essays & Writing",
      emoji: "✍️",
      pages: [
        {
          name: "Personal Statement",
          url: "#personal-statement",
          emoji: "📖",
        },
        {
          name: "Supplemental Essays",
          url: "#supplemental-essays",
          emoji: "📝",
        },
        {
          name: "Topic Brainstorming",
          url: "#topic-brainstorm",
          emoji: "💡",
        },
        {
          name: "Draft Manager",
          url: "#draft-manager",
          emoji: "📄",
        },
        {
          name: "Feedback Tracker",
          url: "#essay-feedback",
          emoji: "💬",
        },
      ],
    },
    {
      name: "College Research",
      emoji: "🏫",
      pages: [
        {
          name: "Campus Profiles",
          url: "#campus-profiles",
          emoji: "📍",
        },
        {
          name: "Program Research",
          url: "#program-research",
          emoji: "🎓",
        },
        {
          name: "Admission Stats",
          url: "#admission-stats",
          emoji: "📈",
        },
        {
          name: "Student Life",
          url: "#student-life",
          emoji: "🎉",
        },
        {
          name: "Alumni Network",
          url: "#alumni-network",
          emoji: "👥",
        },
      ],
    },
  ],
  resources: [
    {
      name: "Common Application",
      url: "https://www.commonapp.org",
      emoji: "📝"
    },
    {
      name: "College Board",
      url: "https://www.collegeboard.org",
      emoji: "🎯"
    },
    {
      name: "FAFSA",
      url: "https://studentaid.gov/h/apply-for-aid/fafsa",
      emoji: "💰"
    },
    {
      name: "Khan Academy SAT",
      url: "https://www.khanacademy.org/sat",
      emoji: "📚"
    },
    {
      name: "College Navigator",
      url: "https://nces.ed.gov/collegenavigator",
      emoji: "🧭"
    },
    {
      name: "BigFuture (College Board)",
      url: "https://bigfuture.collegeboard.org",
      emoji: "🎓"
    },
    {
      name: "Scholarships.com",
      url: "https://www.scholarships.com",
      emoji: "🏆"
    },
    {
      name: "Fastweb",
      url: "https://www.fastweb.com",
      emoji: "🔍"
    }
  ]
})

export function CollegePlanningSidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { collegePlanningData } = useCollegePlanning()
  const displayData = getCollegePlanningDisplayData(collegePlanningData)
  const data = getCollegePlanningData(displayData.studentName, displayData.intendedMajor)

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavWorkspaces workspaces={data.workspaces} />
        <NavResources resources={data.resources} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}