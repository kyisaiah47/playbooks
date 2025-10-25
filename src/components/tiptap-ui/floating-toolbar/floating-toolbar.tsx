'use client'

import { Editor } from '@tiptap/react'
import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Link,
  Highlighter
} from 'lucide-react'

interface FloatingToolbarProps {
  editor: Editor
}

export function FloatingToolbar({ editor }: FloatingToolbarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const updateToolbarPosition = useCallback(() => {
    if (!editor) return

    const { selection } = editor.state
    const { from, to, empty } = selection

    // Hide toolbar if selection is empty
    if (empty) {
      setIsVisible(false)
      return
    }

    // Get the DOM coordinates of the selection
    const start = editor.view.coordsAtPos(from)
    const end = editor.view.coordsAtPos(to)

    // Calculate center position
    const centerX = (start.left + end.left) / 2
    const topY = Math.min(start.top, end.top)

    // Position toolbar above the selection
    setPosition({
      x: centerX,
      y: topY - 60 // 60px above selection
    })
    setIsVisible(true)
  }, [editor])

  useEffect(() => {
    if (!editor) return

    const handleSelectionUpdate = () => {
      updateToolbarPosition()
    }

    const handleTransaction = () => {
      // Small delay to ensure DOM is updated
      setTimeout(updateToolbarPosition, 10)
    }

    editor.on('selectionUpdate', handleSelectionUpdate)
    editor.on('transaction', handleTransaction)

    return () => {
      editor.off('selectionUpdate', handleSelectionUpdate)
      editor.off('transaction', handleTransaction)
    }
  }, [editor, updateToolbarPosition])

  const isActive = (name: string) => {
    return editor.isActive(name)
  }

  const toggleBold = () => editor.chain().focus().toggleBold().run()
  const toggleItalic = () => editor.chain().focus().toggleItalic().run()
  const toggleUnderline = () => editor.chain().focus().toggleUnderline().run()
  const toggleStrike = () => editor.chain().focus().toggleStrike().run()
  const toggleCode = () => editor.chain().focus().toggleCode().run()

  const addLink = () => {
    const url = window.question('Enter URL:')
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }

  const toggleHighlight = () => {
    editor.chain().focus().toggleHighlight().run()
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed z-50 flex items-center gap-1 bg-popover border border-border rounded-lg shadow-lg p-1"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translateX(-50%)'
      }}
    >
      <Button
        variant={isActive('bold') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={toggleBold}
        className="h-8 w-8 p-0"
      >
        <Bold className="w-4 h-4" />
      </Button>

      <Button
        variant={isActive('italic') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={toggleItalic}
        className="h-8 w-8 p-0"
      >
        <Italic className="w-4 h-4" />
      </Button>

      <Button
        variant={isActive('underline') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={toggleUnderline}
        className="h-8 w-8 p-0"
      >
        <Underline className="w-4 h-4" />
      </Button>

      <Button
        variant={isActive('strike') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={toggleStrike}
        className="h-8 w-8 p-0"
      >
        <Strikethrough className="w-4 h-4" />
      </Button>

      <Button
        variant={isActive('code') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={toggleCode}
        className="h-8 w-8 p-0"
      >
        <Code className="w-4 h-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-1" />

      <Button
        variant={isActive('highlight') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={toggleHighlight}
        className="h-8 w-8 p-0"
      >
        <Highlighter className="w-4 h-4" />
      </Button>

      <Button
        variant={isActive('link') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={addLink}
        className="h-8 w-8 p-0"
      >
        <Link className="w-4 h-4" />
      </Button>
    </div>
  )
}