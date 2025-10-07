"use client"

import * as React from "react"
import Image from "next/image"
import {
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconFolder,
  IconHelp,
  IconReport,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { NavViewMode, ViewMode } from "@/components/nav-view-mode"
import { NavTemplateSelector } from "@/components/nav-template-selector"
import { NavPromptsList } from "@/components/nav-prompts-list"
import { NavArticlesList } from "@/components/nav-articles-list"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#dashboard",
      icon: IconDashboard,
    },
    {
      title: "Templates",
      url: "#templates",
      icon: IconFileDescription,
    },
    {
      title: "Prompts",
      url: "#prompts",
      icon: IconFileAi,
    },
    {
      title: "Articles",
      url: "#articles",
      icon: IconReport,
    },
    {
      title: "Workspaces",
      url: "#workspaces",
      icon: IconFolder,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
}

interface WorkspaceSidebarProps extends React.ComponentProps<typeof Sidebar> {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  selectedTemplateId: string | null;
  onTemplateChange: (templateId: string) => void;
}

export function WorkspaceSidebar({ viewMode, onViewModeChange, selectedTemplateId, onTemplateChange, ...props }: WorkspaceSidebarProps) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Image
                  src="/brand/templata-logo.svg"
                  alt="Templata"
                  width={20}
                  height={20}
                  className="dark:invert"
                />
                <span className="text-base font-semibold">Templata</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavViewMode currentMode={viewMode} onModeChange={onViewModeChange} />
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarMenu>
            <NavTemplateSelector
              selectedTemplateId={selectedTemplateId}
              onTemplateChange={onTemplateChange}
            />
            <NavPromptsList templateId={selectedTemplateId} />
            <NavArticlesList templateId={selectedTemplateId} />
          </SidebarMenu>
        </SidebarGroup>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
