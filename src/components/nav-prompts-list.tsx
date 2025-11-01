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

interface NavQuestionsListProps {
  guideId: string | null;
  onQuestionSelect?: (question: any) => void;
}

export function NavQuestionsList({ guideId, onQuestionSelect }: NavQuestionsListProps) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (guideId) {
      setLoading(true);
      setQuestions([]); // Clear old questions first
      fetch(`/api/guides/${guideId}/questions`)
        .then(res => res.json())
        .then(data => {
          setQuestions(data.questions || []);
          setLoading(false);
        })
        .catch(() => {
          setQuestions([]);
          setLoading(false);
        });
    } else {
      setQuestions([]);
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
            Questions{" "}
            <IconPlus className="ml-auto group-data-[state=open]/collapsible:hidden" />
            <IconMinus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="max-h-[200px] overflow-y-auto">
            {loading ? (
              <div className="text-xs text-muted-foreground p-2">Loading...</div>
            ) : questions.length === 0 ? (
              <div className="text-xs text-muted-foreground p-2">No questions</div>
            ) : (
              questions.map((question: any) => (
                <SidebarMenuSubItem key={question.id}>
                  <SidebarMenuSubButton
                    onClick={() => onQuestionSelect?.(question)}
                  >
                    <span>{question.question}</span>
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
