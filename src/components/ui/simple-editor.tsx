'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

interface SimpleEditorProps {
  content?: string
  onUpdate?: (content: string) => void
  placeholder?: string
  className?: string
}

export function SimpleEditor({ content = '', onUpdate, placeholder, className }: SimpleEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onUpdate?.(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: className || 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className="w-full min-h-[600px]">
      <EditorContent
        editor={editor}
        className="w-full min-h-[600px] [&_.ProseMirror]:min-h-[600px] [&_.ProseMirror]:outline-none [&_.ProseMirror]:border-0 [&_.ProseMirror]:focus:outline-none [&_.ProseMirror]:p-0"
        placeholder={placeholder}
      />
    </div>
  )
}