import React from "react"
import { Button } from "@/components/ui/button"
import { FeedbackModal } from "@/components/feedback-modal"
import { MessageSquare } from "lucide-react"

export function RecentlyUsedFooter() {
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <FeedbackModal>
        <Button
          size="sm"
          className="bg-background/95 backdrop-blur-sm border hover:bg-primary/10 transition-all shadow-lg"
          variant="outline"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Feedback</span>
        </Button>
      </FeedbackModal>
    </div>
  )
}

// Keep the old component name for backward compatibility but make it empty
export function RecentlyUsedStrip() {
  return null
}