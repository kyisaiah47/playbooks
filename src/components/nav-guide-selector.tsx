"use client"

import { useState, useEffect } from "react"
import { IconPlus, IconMinus } from "@tabler/icons-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import type { GuideRegistryEntry } from "@/registry/guides"

interface NavTemplateSelectorProps {
  selectedGuideId: string | null;
  onTemplateChange: (guideId: string) => void;
}

export function NavTemplateSelector({ selectedGuideId, onTemplateChange }: NavTemplateSelectorProps) {
  const [guides, setTemplates] = useState<GuideRegistryEntry[]>([])

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch('/api/guides')
        const data = await res.json()
        setTemplates(data.guides || [])
      } catch (error) {
        console.error("Failed to load guides:", error)
      }
    }
    fetchTemplates()
  }, [])

  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            Guides{" "}
            <IconPlus className="ml-auto group-data-[state=open]/collapsible:hidden" />
            <IconMinus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="max-h-[200px] overflow-y-auto">
            {guides.map((guide) => (
              <SidebarMenuSubItem key={guide.id}>
                <SidebarMenuSubButton
                  onClick={() => onTemplateChange(guide.id)}
                  isActive={selectedGuideId === guide.id}
                >
                  {guide.name}
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}
