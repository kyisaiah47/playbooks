"use client"

import { useState } from "react"
import { NoteEditor } from "@/components/note-editor"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, FileText, Lightbulb } from "lucide-react"

const noteTemplates = [
  {
    id: 'blank',
    name: 'Blank Note',
    description: 'Start with a completely blank note',
    icon: FileText,
    blocks: [
      { id: '1', type: 'text' as const, content: '' }
    ]
  },
  {
    id: 'wedding-planning',
    name: 'Wedding Planning Template',
    description: 'Basic structure for wedding planning notes',
    icon: Lightbulb,
    blocks: [
      { id: '1', type: 'heading1' as const, content: 'Wedding Planning Notes' },
      { id: '2', type: 'heading2' as const, content: 'Overview' },
      { id: '3', type: 'text' as const, content: '' },
      { id: '4', type: 'heading2' as const, content: 'Action Items' },
      { id: '5', type: 'list' as const, content: '', items: [''] },
      { id: '6', type: 'heading2' as const, content: 'Notes' },
      { id: '7', type: 'text' as const, content: '' }
    ]
  },
  {
    id: 'vendor-comparison',
    name: 'Vendor Comparison',
    description: 'Compare different vendors side by side',
    icon: Plus,
    blocks: [
      { id: '1', type: 'heading1' as const, content: 'Vendor Comparison' },
      { id: '2', type: 'heading2' as const, content: 'Vendor 1' },
      { id: '3', type: 'text' as const, content: 'Name:\nPrice:\nNotes:' },
      { id: '4', type: 'heading2' as const, content: 'Vendor 2' },
      { id: '5', type: 'text' as const, content: 'Name:\nPrice:\nNotes:' },
      { id: '6', type: 'heading2' as const, content: 'Decision' },
      { id: '7', type: 'text' as const, content: '' }
    ]
  }
]

export function CreateNote() {
  const handleSaveNote = (title: string, blocks: unknown[]) => {
    // Here you would save to your storage system
  }

  return (
    <NoteEditor
      title=""
      initialBlocks={[{ id: '1', type: 'text', content: '' }]}
      onSave={handleSaveNote}
    />
  )
}