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
import type { TemplateRegistryEntry } from "@/registry/guides"

interface NavTemplateSelectorProps {
  selectedGuideId: string | null;
  onTemplateChange: (guideId: string) => void;
}

export function NavTemplateSelector({ selectedGuideId, onTemplateChange }: NavTemplateSelectorProps) {
  const [templates, setTemplates] = useState<TemplateRegistryEntry[]>([])

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch('/api/guides')
        const data = await res.json()
        setTemplates(data.templates || [])
      } catch (error) {
        console.error("Failed to load templates:", error)
      }
    }
    fetchTemplates()
  }, [])

  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            Templates{" "}
            <IconPlus className="ml-auto group-data-[state=open]/collapsible:hidden" />
            <IconMinus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="max-h-[200px] overflow-y-auto">
            {templates.map((guide) => (
              <SidebarMenuSubItem key={template.id}>
                <SidebarMenuSubButton
                  onClick={() => onTemplateChange(template.id)}
                  isActive={selectedGuideId === template.id}
                >
                  {template.name}
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}
