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

interface NavPromptsListProps {
  templateId: string | null;
  onPromptSelect?: (prompt: any) => void;
}

export function NavPromptsList({ templateId, onPromptSelect }: NavPromptsListProps) {
  const [prompts, setPrompts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (templateId) {
      setLoading(true);
      setPrompts([]); // Clear old prompts first
      fetch(`/api/prompts?templateId=${templateId}`)
        .then(res => res.json())
        .then(data => {
          setPrompts(data.prompts || []);
          setLoading(false);
        })
        .catch(() => {
          setPrompts([]);
          setLoading(false);
        });
    } else {
      setPrompts([]);
    }
  }, [templateId]);

  if (!templateId) {
    return null;
  }

  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            Prompts{" "}
            <IconPlus className="ml-auto group-data-[state=open]/collapsible:hidden" />
            <IconMinus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {loading ? (
              <div className="text-xs text-muted-foreground p-2">Loading...</div>
            ) : prompts.length === 0 ? (
              <div className="text-xs text-muted-foreground p-2">No prompts</div>
            ) : (
              prompts.map((prompt: any) => (
                <SidebarMenuSubItem key={prompt.id}>
                  <SidebarMenuSubButton
                    onClick={() => onPromptSelect?.(prompt)}
                  >
                    <span>{prompt.prompt}</span>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))
            )}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}
