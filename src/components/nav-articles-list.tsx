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

interface NavArticlesListProps {
  templateId: string | null;
  onArticleSelect?: (article: any) => void;
}

export function NavArticlesList({ templateId, onArticleSelect }: NavArticlesListProps) {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (templateId) {
      setLoading(true);
      setArticles([]); // Clear old articles first
      fetch(`/api/readings?templateId=${templateId}`)
        .then(res => res.json())
        .then(data => {
          setArticles(data.articles || []);
          setLoading(false);
        })
        .catch(() => {
          setArticles([]);
          setLoading(false);
        });
    } else {
      setArticles([]);
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
            Articles{" "}
            <IconPlus className="ml-auto group-data-[state=open]/collapsible:hidden" />
            <IconMinus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="max-h-[200px] overflow-y-auto">
            {loading ? (
              <div className="text-xs text-muted-foreground p-2">Loading...</div>
            ) : articles.length === 0 ? (
              <div className="text-xs text-muted-foreground p-2">No articles</div>
            ) : (
              articles.map((article: any) => (
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
