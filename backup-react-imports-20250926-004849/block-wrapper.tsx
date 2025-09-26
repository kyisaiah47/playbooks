'use client'

import React, { useEffect } from 'react'
import { Editor } from '@tiptap/react'
import { BlockHandle } from '../block-handle/block-handle'

interface BlockWrapperProps {
  editor: Editor
}

export const BlockWrapper: React.FC<BlockWrapperProps> = ({ editor }) => {
  useEffect(() => {
    if (!editor) return

    return // Disabled to prevent browser crash

    // Add handles when content changes
    const handleUpdate = () => {
      setTimeout(addHandlesToBlocks, 10)
    }

    editor.on('update', handleUpdate)
    editor.on('create', handleUpdate)
    handleUpdate() // Initial load

    return () => {
      editor.off('update', handleUpdate)
      editor.off('create', handleUpdate)
    }
  }, [editor])

  return null // This is just a side-effect component
}