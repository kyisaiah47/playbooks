"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface SharePanelProps {
  templateId: string
  templateTitle: string
  responses: Record<string, string>
  className?: string
}

export function SharePanel({
  templateId,
  templateTitle,
  responses,
  className
}: SharePanelProps) {
  const [showToast, setShowToast] = useState(false)

  const handleCopyLink = async () => {
    const shareUrl = `${window.location.origin}/templates/${templateId}`
    try {
      await navigator.clipboard.writeText(shareUrl)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (error) {
      // Silent fail
    }
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className={cn("w-9 h-9 p-0", className)}
      >
        <Copy className="w-4 h-4" />
      </Button>

      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right-5 duration-300">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
            <Check className="w-3 h-3" />
            <span className="text-xs font-medium">Link copied to clipboard!</span>
          </div>
        </div>
      )}
    </>
  )
}