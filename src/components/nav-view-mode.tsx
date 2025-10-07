"use client"

import { IconMessageCircle, IconColumns, IconLayoutKanban } from "@tabler/icons-react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export type ViewMode = 'chat' | 'split' | 'board';

interface NavViewModeProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export function NavViewMode({ currentMode, onModeChange }: NavViewModeProps) {
  const viewModes = [
    {
      mode: 'chat' as ViewMode,
      title: "Chat View",
      icon: IconMessageCircle,
    },
    {
      mode: 'split' as ViewMode,
      title: "Split View",
      icon: IconColumns,
    },
    {
      mode: 'board' as ViewMode,
      title: "Board View",
      icon: IconLayoutKanban,
    },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>View Mode</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {viewModes.map((viewMode) => (
            <SidebarMenuItem key={viewMode.mode}>
              <SidebarMenuButton
                tooltip={viewMode.title}
                onClick={() => onModeChange(viewMode.mode)}
                isActive={currentMode === viewMode.mode}
              >
                <viewMode.icon className="h-4 w-4" />
                <span>{viewMode.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
