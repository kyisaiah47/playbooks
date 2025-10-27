'use client'

import { Editor } from '@tiptap/react'
import { useState, useEffect } from 'react'
import { GripVertical, Plus } from 'lucide-react'

interface SimpleDragHandleProps {
  editor: Editor
}

export function SimpleDragHandle({ editor }: SimpleDragHandleProps) {
  const [dragHandlePos, setDragHandlePos] = useState<{ top: number; left: number } | null>(null)

  useEffect(() => {
    if (!editor) return

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as Element

      // Check if hovering over a block
      if (target.matches('p, h1, h2, h3, h4, h5, h6, [data-type="question-node"], blockquote, pre, li')) {
        const rect = target.getBoundingClientRect()
        setDragHandlePos({
          top: rect.top,
          left: rect.left - 60
        })
      } else {
        setDragHandlePos(null)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [editor])

  if (!dragHandlePos) return null

  return (
    <div
      className="fixed z-50 flex items-center gap-2"
      style={{
        top: dragHandlePos.top,
        left: dragHandlePos.left,
      }}
    >
      <div className="w-6 h-6 bg-red-500 rounded border flex items-center justify-center cursor-grab">
        <GripVertical className="w-3 h-3 text-white" />
      </div>
      <div className="w-6 h-6 bg-blue-500 rounded border flex items-center justify-center cursor-pointer">
        <Plus className="w-3 h-3 text-white" />
      </div>
    </div>
  )
}