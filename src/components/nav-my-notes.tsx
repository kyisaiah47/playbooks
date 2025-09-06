"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMyNotes({
  myNotes,
  onNavigate,
}: {
  myNotes: {
    name: string
    url: string
    emoji: string
  }[]
  onNavigate?: (page: string) => void
}) {
  const handleClick = (url: string) => {
    const page = url.replace('#', '')
    onNavigate?.(page)
  }

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>My Notes</SidebarGroupLabel>
      <SidebarMenu>
        {myNotes.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton 
              onClick={() => handleClick(item.url)}
              title={item.name}
            >
              <span>{item.emoji}</span>
              <span>{item.name}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}