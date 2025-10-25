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

interface NavReadingsListProps {
  guideId: string | null;
  onArticleSelect?: (article: any) => void;
}

export function NavReadingsList({ guideId, onArticleSelect }: NavReadingsListProps) {
  const [readings, setReadings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (guideId) {
      setLoading(true);
      setReadings([]); // Clear old readings first
      fetch(`/api/readings?guideId=${guideId}`)
        .then(res => res.json())
        .then(data => {
          setReadings(data.readings || []);
          setLoading(false);
        })
        .catch(() => {
          setReadings([]);
          setLoading(false);
        });
    } else {
      setReadings([]);
    }
  }, [guideId]);

  if (!guideId) {
    return null;
  }

  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            Articles{" "}
            <IconPlus className="ml-auto group-data-[state=open]/collapsible:hidden" />
            <IconMinus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="max-h-[200px] overflow-y-auto">
            {loading ? (
              <div className="text-xs text-muted-foreground p-2">Loading...</div>
            ) : readings.length === 0 ? (
              <div className="text-xs text-muted-foreground p-2">No readings</div>
            ) : (
              readings.map((article: any) => (
                <SidebarMenuSubItem key={article.id}>
                  <SidebarMenuSubButton
                    onClick={() => onArticleSelect?.(article)}
                  >
                    <span>{article.title}</span>
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
