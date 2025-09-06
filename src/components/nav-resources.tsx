"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavResources({
  resources,
  onNavigate,
}: {
  resources: {
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
      <SidebarGroupLabel>Resources</SidebarGroupLabel>
      <SidebarMenu>
        {resources.map((item) => (
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