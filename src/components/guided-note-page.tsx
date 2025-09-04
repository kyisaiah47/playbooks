"use client"

import { useState } from "react"
import { NoteEditor } from "@/components/note-editor"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Lightbulb, CheckCircle2, HelpCircle } from "lucide-react"

interface GuidedSection {
  title: string
  prompts: string[]
  examples?: string[]
}

interface GuidedNotePageProps {
  title: string
  description: string
  sections: GuidedSection[]
  tips?: string[]
}

export function GuidedNotePage({ 
  title, 
  description, 
  sections,
  tips = [] 
}: GuidedNotePageProps) {
  // Build note blocks with embedded prompts
  const buildInitialBlocks = () => {
    const blocks = []
    
    let blockId = 1
    sections.forEach(section => {
      // Add section heading
      blocks.push({
        id: blockId.toString(),
        type: 'heading1' as const,
        content: section.title
      })
      blockId++
      
      // Add prompts as questions with space for responses
      section.prompts.forEach(prompt => {
        blocks.push({
          id: blockId.toString(),
          type: 'heading2' as const,
          content: prompt
        })
        blockId++
        
        blocks.push({
          id: blockId.toString(),
          type: 'text' as const,
          content: ''
        })
        blockId++
      })
    })
    
    return blocks
  }
  
  const [noteBlocks, setNoteBlocks] = useState(buildInitialBlocks())

  const handleSave = (noteTitle: string, blocks: any[]) => {
    // Here you would save to your storage system
    console.log('Saving note:', noteTitle, blocks)
  }

  return (
    <div className="relative">
      {/* Floating Tips Button */}
      {tips.length > 0 && (
        <div className="fixed right-4 bottom-20 z-50">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full shadow-lg bg-background"
              >
                <Lightbulb className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-3">
                <div className="text-sm font-medium">💡 Planning Tips</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {tips.map((tip, index) => (
                    <div key={index}>• {tip}</div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )}

      {/* Unified Note Editor */}
      <div>
        <NoteEditor
          title={title}
          initialBlocks={noteBlocks}
          onSave={handleSave}
        />
      </div>
    </div>
  )
}