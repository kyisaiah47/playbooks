"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavGuidedNotes({
  guidedNotes,
}: {
  guidedNotes: {
    name: string
    url: string
    emoji: string
    onClick?: () => void
  }[]
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Guided Notes</SidebarGroupLabel>
      <SidebarMenu>
        {guidedNotes.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton 
              asChild={false}
              onClick={(e) => {
                e.preventDefault()
                item.onClick?.()
              }}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <span>{item.emoji}</span>
                <span>{item.name}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}