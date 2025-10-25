'use client'

import { Editor } from '@tiptap/react'
import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Image,
  Minus,
  MessageSquare,
  Type
} from 'lucide-react'

interface SlashCommandProps {
  editor: Editor
  questions: Array<{
    id: string
    question: string
    category: string
    helpText?: string
  }>
}

const SLASH_COMMANDS = [
  {
    title: 'Text',
    description: 'Just start typing with plain text.',
    icon: Type,
    command: (editor: Editor) => {
      editor.chain().focus().setParagraph().run()
    }
  },
  {
    title: 'Heading 1',
    description: 'Big section heading.',
    icon: Heading1,
    command: (editor: Editor) => {
      editor.chain().focus().toggleHeading({ level: 1 }).run()
    }
  },
  {
    title: 'Heading 2',
    description: 'Medium section heading.',
    icon: Heading2,
    command: (editor: Editor) => {
      editor.chain().focus().toggleHeading({ level: 2 }).run()
    }
  },
  {
    title: 'Heading 3',
    description: 'Small section heading.',
    icon: Heading3,
    command: (editor: Editor) => {
      editor.chain().focus().toggleHeading({ level: 3 }).run()
    }
  },
  {
    title: 'Bullet List',
    description: 'Create a simple bullet list.',
    icon: List,
    command: (editor: Editor) => {
      editor.chain().focus().toggleBulletList().run()
    }
  },
  {
    title: 'Numbered List',
    description: 'Create a list with numbering.',
    icon: ListOrdered,
    command: (editor: Editor) => {
      editor.chain().focus().toggleOrderedList().run()
    }
  },
  {
    title: 'Quote',
    description: 'Capture a quote.',
    icon: Quote,
    command: (editor: Editor) => {
      editor.chain().focus().toggleBlockquote().run()
    }
  },
  {
    title: 'Code',
    description: 'Capture a code snippet.',
    icon: Code,
    command: (editor: Editor) => {
      editor.chain().focus().toggleCodeBlock().run()
    }
  },
  {
    title: 'Image',
    description: 'Upload an image.',
    icon: Image,
    command: (editor: Editor) => {
      // This would trigger image upload
    }
  },
  {
    title: 'Divider',
    description: 'Visually divide blocks.',
    icon: Minus,
    command: (editor: Editor) => {
      editor.chain().focus().setHorizontalRule().run()
    }
  }
]

export function SlashCommand({ editor, questions = [] }: SlashCommandProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleSlashCommand = useCallback(() => {
    const { selection } = editor.state
    const { $from } = selection

    // Check if we're at the start of a line with just '/'
    const textBefore = $from.nodeBefore?.textContent || ''
    if (textBefore.endsWith('/') && $from.parentOffset === 1) {
      // Get cursor position for popover
      const coords = editor.view.coordsAtPos($from.pos)
      setPosition({ x: coords.left, y: coords.bottom + 10 })
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [editor])

  useEffect(() => {
    if (!editor) return

    const handleUpdate = () => {
      handleSlashCommand()
    }

    editor.on('update', handleUpdate)
    editor.on('selectionUpdate', handleUpdate)

    return () => {
      editor.off('update', handleUpdate)
      editor.off('selectionUpdate', handleUpdate)
    }
  }, [editor, handleSlashCommand])

  const executeCommand = (command: (editor: Editor) => void, isPrompt = false) => {
    // Remove the '/' character first
    const { selection } = editor.state
    const { $from } = selection

    if ($from.nodeBefore?.textContent?.endsWith('/')) {
      editor.chain()
        .focus()
        .deleteRange({ from: $from.pos - 1, to: $from.pos })
        .run()
    }

    command(editor)
    setIsOpen(false)
    setSearch('')
  }

  const filteredCommands = SLASH_COMMANDS.filter(cmd =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.description.toLowerCase().includes(search.toLowerCase())
  )

  const filteredQuestions = questions.filter(question =>
    question.question.toLowerCase().includes(search.toLowerCase()) ||
    question.category.toLowerCase().includes(search.toLowerCase())
  )

  if (!isOpen) return null

  return (
    <div
      className="fixed z-50 w-80"
      style={{ left: position.x, top: position.y }}
    >
      <Command className="rounded-lg border shadow-md bg-popover">
        <CommandInput
          placeholder="Search for commands..."
          value={search}
          onValueChange={setSearch}
          className="border-0"
        />
        <CommandList className="max-h-64 overflow-y-auto">
          <CommandEmpty>No commands found.</CommandEmpty>

          {filteredCommands.length > 0 && (
            <CommandGroup heading="Basic Blocks">
              {filteredCommands.map((cmd) => (
                <CommandItem
                  key={cmd.title}
                  onSelect={() => executeCommand(cmd.command)}
                  className="flex items-start gap-3 p-3 cursor-pointer"
                >
                  <cmd.icon className="w-4 h-4 mt-0.5 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{cmd.title}</div>
                    <div className="text-xs text-muted-foreground">{cmd.description}</div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {filteredQuestions.length > 0 && (
            <CommandGroup heading="Questions">
              {filteredQuestions.slice(0, 5).map((question) => (
                <CommandItem
                  key={question.id}
                  onSelect={() => executeCommand((editor) => {
                    editor.chain()
                      .focus()
                      .insertQuestion({
                        id: question.id,
                        text: question.question,
                        category: question.category,
                        helpText: question.helpText,
                      })
                      .run()
                  }, true)}
                  className="flex items-start gap-3 p-3 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 mt-0.5 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="text-sm font-medium line-clamp-1">{question.question}</div>
                    <div className="text-xs text-muted-foreground">{question.category}</div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </div>
  )
}