'use client'

import { NodeViewWrapper } from "@tiptap/react"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export interface PromptNodeProps {
  node: {
    attrs: {
      id: string
      text: string
      category: string
      helpText?: string
    }
  }
  deleteNode?: () => void
  selected?: boolean
  [key: string]: any
}

export const PromptNode: React.FC<PromptNodeProps> = ({
  node,
  deleteNode,
  selected,
}) => {
  const { text, category, helpText } = node.attrs

  // Get category color - using exact colors from sidebar
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'consideration':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
      case 'planning':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
      case 'decision':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
      case 'research':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300'
      case 'action':
        return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300'
    }
  }

  return (
    <NodeViewWrapper className="prompt-node-wrapper">
      <div
        className={`prompt-node group relative ${
          selected ? "ring-1 ring-blue-400/30" : ""
        }`}
      >
        <div
          className="relative bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 backdrop-blur-md border border-white/10 rounded-xl p-2 my-2 shadow-lg shadow-black/5"
        >
          <div className="relative flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p
                className="text-sm text-foreground/90 leading-relaxed truncate group-hover:text-clip"
              >
                {text}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Badge className={`text-[10px] px-2 py-0.5 uppercase tracking-wider font-medium ${getCategoryColor(category)}`}>
                {category}
              </Badge>

              {deleteNode && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={deleteNode}
                  className="h-5 w-5 p-0 text-muted-foreground/50 hover:text-red-400 transition-colors"
                >
                  <X className="w-2.5 h-2.5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </NodeViewWrapper>
  )
}