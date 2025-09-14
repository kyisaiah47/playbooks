"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Download, Share2, Star } from "lucide-react"

interface ExportSuccessModalProps {
  isOpen: boolean
  onClose: () => void
  templateName: string
  onShare?: () => void
  onDownloadAgain?: () => void
}

export function ExportSuccessModal({
  isOpen,
  onClose,
  templateName,
  onShare,
  onDownloadAgain
}: ExportSuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
              <Check className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <DialogTitle className="text-center">
            PDF Export Complete!
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Your template has been exported successfully:
            </p>
            <Badge variant="outline" className="text-xs">
              <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-500" />
              {templateName}
            </Badge>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 text-center">
            <p className="text-xs text-muted-foreground">
              ✨ <strong>Professional PDF Dossier</strong> ✨
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Complete with your responses, guidance, and Templata branding
            </p>
          </div>

          <div className="flex gap-2">
            {onShare && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={onShare}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            )}
            {onDownloadAgain && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={onDownloadAgain}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Again
              </Button>
            )}
          </div>

          <Button onClick={onClose} className="w-full" size="sm">
            Continue Working
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}