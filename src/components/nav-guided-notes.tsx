"use client"

import {
  ArrowUpRight,
  Link,
  MoreHorizontal,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavGuidedNotes({
  guidedNotes,
  activeSection,
}: {
  guidedNotes: {
    name: string
    url: string
    emoji: string
  }[]
  activeSection?: string
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Guided Notes</SidebarGroupLabel>
      <SidebarMenu>
        {guidedNotes.map((item) => {
          const sectionId = item.url.replace('#', '')
          const isActive = activeSection === sectionId
          
          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild isActive={isActive}>
                <a href={item.url} title={item.name}>
                  <span>{item.emoji}</span>
                  <span>{item.name}</span>
                </a>
              </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Link className="text-muted-foreground" />
                  <span>Copy Link</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArrowUpRight className="text-muted-foreground" />
                  <span>Open in New Tab</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}