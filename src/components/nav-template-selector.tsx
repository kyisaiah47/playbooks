"use client"

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
import { templateRegistry } from "@/registry/templates"

interface NavTemplateSelectorProps {
  selectedTemplateId: string | null;
  onTemplateChange: (templateId: string) => void;
}

export function NavTemplateSelector({ selectedTemplateId, onTemplateChange }: NavTemplateSelectorProps) {
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
          <SidebarMenuSub>
            {templateRegistry.map((template) => (
              <SidebarMenuSubItem key={template.id}>
                <SidebarMenuSubButton
                  onClick={() => onTemplateChange(template.id)}
                  isActive={selectedTemplateId === template.id}
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
