"use client"

import { NoteEditor } from "@/components/note-editor"

export function MyNotes() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">My Notes</h1>
        <p className="text-muted-foreground">
          Create free-form notes alongside your structured meal planning
        </p>
      </div>
      
      <NoteEditor />
    </div>
  )
}