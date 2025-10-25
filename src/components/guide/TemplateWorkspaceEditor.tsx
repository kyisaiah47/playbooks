'use client'

import React, { useState, useCallback } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Typography } from '@tiptap/extension-typography'

import { QuestionNode } from '@/components/tiptap-node/question-node/question-node-extension'
import '@/components/tiptap-node/question-node/question-node.scss'

import { ReflectionPrompt } from '@/types/guide'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { Plus, Target } from 'lucide-react'

interface TemplateWorkspaceEditorProps {
  onInsertPrompt?: (prompt: ReflectionPrompt) => void
  initialContent?: string
  onContentChange?: (content: string) => void
}

export function TemplateWorkspaceEditor({
  onInsertPrompt,
  initialContent,
  onContentChange,
}: TemplateWorkspaceEditorProps) {
  const [isEmpty, setIsEmpty] = useState(!initialContent)

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        // Disable default paragraph styling for transparency
        paragraph: {
          HTMLAttributes: {
            class: 'transparent-paragraph',
          },
        },
      }),
      Typography,
      QuestionNode.configure({
        HTMLAttributes: {
          class: 'template-question-node',
        },
      }),
    ],
    content: initialContent || '',
    editorProps: {
      attributes: {
        class: 'template-workspace-editor',
        spellcheck: 'false',
      },
    },
    onUpdate: ({ editor }) => {
      const content = editor.getHTML()
      const hasContent = editor.getText().trim().length > 0
      setIsEmpty(!hasContent)
      onContentChange?.(content)
    },
  })

  // Function to insert a prompt node
  const insertPrompt = useCallback(
    (prompt: ReflectionPrompt) => {
      if (!editor) return

      editor
        .chain()
        .focus()
        .insertPrompt({
          id: prompt.id,
          text: prompt.prompt,
          category: prompt.category || 'General',
          helpText: prompt.helpText,
        })
        .run()
    },
    [editor]
  )

  // Expose the insertPrompt function to parent
  React.useEffect(() => {
    if (onInsertPrompt && editor) {
      // Store the function in a way parent can call it
      (window as any).insertPromptIntoEditor = insertPrompt
    }
  }, [editor, insertPrompt, onInsertPrompt])

  if (!editor) {
    return null
  }

  return (
    <div className="guide-workspace-container">
      {isEmpty && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <div className="text-center p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Target className="h-6 w-6 text-primary" />
              </div>
            </div>
            <VerticalCutReveal
              staggerDuration={0.1}
              staggerFrom="center"
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              containerClassName="text-lg font-semibold mb-2 text-foreground"
            >
              Build your personalized guide
            </VerticalCutReveal>
            <VerticalCutReveal
              staggerDuration={0.05}
              staggerFrom="first"
              transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.8 }}
              containerClassName="text-sm text-muted-foreground mb-4 max-w-sm mx-auto"
            >
              Add prompts from the sidebar to create your customized planning experience. ← Your journey starts here.
            </VerticalCutReveal>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Plus className="h-4 w-4" />
              <VerticalCutReveal
                staggerDuration={0.08}
                transition={{ type: "spring", stiffness: 160, damping: 18, delay: 1.5 }}
              >
                Select prompts to begin your planning
              </VerticalCutReveal>
            </div>
          </div>
        </div>
      )}

      <EditorContent
        editor={editor}
        className="guide-workspace-editor-content"
      />

      <style jsx>{`
        .template-workspace-container {
          position: relative;
          min-height: 93vh;
          width: 100%;
        }

        :global(.template-workspace-editor) {
          background: transparent !important;
          color: inherit;
          min-height: 93vh;
          padding: 2rem;
          outline: none;
          border: none;
        }

        :global(.template-workspace-editor-content) {
          position: relative;
          z-index: 20;
        }

        :global(.template-workspace-editor .ProseMirror) {
          background: transparent !important;
          outline: none !important;
          border: none !important;
          min-height: calc(93vh - 4rem);
          padding: 0;
        }

        :global(.template-workspace-editor .transparent-paragraph) {
          background: transparent;
          margin: 1rem 0;
        }

      `}</style>
    </div>
  )
}