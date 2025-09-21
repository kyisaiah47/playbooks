"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MessageSquare, Send, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function RecentlyUsedFooter() {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const pathname = usePathname()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedback.trim()) return

    setIsSubmitting(true)

    // Capture context
    const context = {
      page: pathname,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }

    // In a real app, you'd send this to your feedback API
    console.log("Feedback submitted:", {
      feedback: feedback.trim(),
      context
    })

    // For now, just simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFeedback("")

    // Close dialog after showing success
    setTimeout(() => {
      setIsOpen(false)
      setIsSubmitted(false)
    }, 1500)
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            className="bg-background/95 backdrop-blur-sm border hover:bg-primary/10 transition-all shadow-lg"
            variant="outline"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Feedback</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Share Your Feedback
            </DialogTitle>
          </DialogHeader>

          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
              <p className="text-muted-foreground">Your feedback helps us improve Templata.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Textarea
                  placeholder="Tell us what you think! Bug reports, feature requests, or general feedback - we'd love to hear from you."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value.slice(0, 1000))}
                  className="min-h-[120px] resize-none"
                  disabled={isSubmitting}
                  maxLength={1000}
                />
              </div>
              <div className="flex justify-end">
                <span className="text-xs text-muted-foreground">{feedback.length}/1000</span>
              </div>
              <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!feedback.trim() || isSubmitting}
                  className="min-w-[80px]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Keep the old component name for backward compatibility but make it empty
export function RecentlyUsedStrip() {
  return null
}