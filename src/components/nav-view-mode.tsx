"use client"

import {
  IconMessageCircle,
  IconColumns,
  IconLayoutKanban,
  IconFileText,
  IconTimeline,
  IconTable,
  IconLayoutGrid,
  IconListTree,
  IconChecklist,
  IconLayoutNavbar,
} from "@tabler/icons-react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export type ViewMode = 'chat' | 'split' | 'board' | 'text' | 'timeline' | 'table' | 'cards' | 'outline' | 'checklist' | 'tabs';

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
    {
      mode: 'checklist' as ViewMode,
      title: "Checklist View",
      icon: IconChecklist,
    },
    {
      mode: 'text' as ViewMode,
      title: "Text Editor",
      icon: IconFileText,
    },
    {
      mode: 'timeline' as ViewMode,
      title: "Timeline View",
      icon: IconTimeline,
    },
    {
      mode: 'table' as ViewMode,
      title: "Table View",
      icon: IconTable,
    },
    {
      mode: 'cards' as ViewMode,
      title: "Cards View",
      icon: IconLayoutGrid,
    },
    {
      mode: 'outline' as ViewMode,
      title: "Outline View",
      icon: IconListTree,
    },
    {
      mode: 'tabs' as ViewMode,
      title: "Tabs View",
      icon: IconLayoutNavbar,
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
