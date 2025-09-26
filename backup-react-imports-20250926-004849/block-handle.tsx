'use client'

import React from 'react'
import { Editor } from '@tiptap/react'
import { GripVertical, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BlockHandleProps {
  editor: Editor
  onAddBlock: () => void
  onDragStart: (e: React.DragEvent) => void
}

export const BlockHandle: React.FC<BlockHandleProps> = ({
  editor,
  onAddBlock,
  onDragStart
}) => {
  return (
    <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <Button
        variant="ghost"
        size="sm"
        onClick={onAddBlock}
        className="h-6 w-6 p-0 hover:bg-muted"
      >
        <Plus className="w-3 h-3" />
      </Button>

      <div
        draggable
        onDragStart={onDragStart}
        className="h-6 w-6 flex items-center justify-center hover:bg-muted rounded cursor-grab active:cursor-grabbing"
      >
        <GripVertical className="w-3 h-3" />
      </div>
    </div>
  )
}