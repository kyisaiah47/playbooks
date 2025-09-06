"use client"

import { CreateNote } from "@/components/create-note"

export function MyNotes() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">My Notes</h1>
        <p className="text-muted-foreground">
          Create free-form notes alongside your structured divorce coordination planning
        </p>
      </div>
      
      <CreateNote />
    </div>
  )
}