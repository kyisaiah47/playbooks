"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Download, FileText, Share2, Loader2 } from "lucide-react"
import { exportTemplateToPDF, getShareablePDF, PDFExportConfig } from "@/lib/pdf-export"
import { useToast } from "@/components/ui/toast"
import { useConfetti } from "@/components/ui/confetti"
import { ExportSuccessModal } from "./export-success-modal"

interface PDFExportButtonProps {
  template: {
    id: string
    title: string
    category: string
    sections: Array<{
      id: string
      title: string
      reflectionPrompts: Array<{
        id: string
        prompt: string
      }>
    }>
  }
  responses: Record<string, string>
  className?: string
}

export function PDFExportButton({ template, responses, className }: PDFExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const { showSuccess } = useToast()
  const { trigger: triggerConfetti } = useConfetti()

  const preparePDFConfig = (): PDFExportConfig => {
    const sections = template.sections.map(section => ({
      id: section.id,
      title: section.title,
      content: section.reflectionPrompts.map(prompt => {
        const response = responses[prompt.id]
        if (response && response.trim()) {
          return `${prompt.prompt}: ${response}`
        }
        return `${prompt.prompt}: [Not completed]`
      }),
      type: "guide" as const,
      completed: section.reflectionPrompts.map(prompt => {
        const response = responses[prompt.id]
        return response && response.trim() !== ""
      })
    }))

    const completedResponses = Object.values(responses).filter(r => r.trim() !== "")
    const userNotes = completedResponses.length > 0
      ? [`This template was completed with ${completedResponses.length} responses.`]
      : undefined

    return {
      templateId: template.id,
      templateName: template.title,
      category: template.category,
      sections,
      userNotes
    }
  }

  const handleDownload = async () => {
    setIsExporting(true)
    try {
      const config = preparePDFConfig()
      await exportTemplateToPDF(config)
      triggerConfetti()
      setShowSuccessModal(true)
    } catch (error) {
      console.error("PDF export failed:", error)
      showSuccess("Export failed. Please try again.", "none")
    } finally {
      setIsExporting(false)
    }
  }

  const handleShare = async () => {
    if (!navigator.share) {
      // Fallback to download if sharing is not supported
      handleDownload()
      return
    }

    setIsExporting(true)
    try {
      const config = preparePDFConfig()
      const file = await getShareablePDF(config)

      await navigator.share({
        title: `${template.title} - Templata Template`,
        text: `Check out my ${template.title} template from Templata!`,
        files: [file]
      })

      triggerConfetti()
      setShowSuccessModal(true)
    } catch (error) {
      console.error("Share failed:", error)
      // Fallback to download
      handleDownload()
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={`w-9 h-9 p-0 ${className || ""}`}
            disabled={isExporting}
          >
            {isExporting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={handleDownload} disabled={isExporting}>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleShare} disabled={isExporting}>
            <Share2 className="w-4 h-4 mr-2" />
            Share PDF
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ExportSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        templateName={template.title}
        onShare={handleShare}
        onDownloadAgain={handleDownload}
      />
    </>
  )
}