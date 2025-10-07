"use client"

import { useState } from "react"
import { IconGripVertical, IconPlus } from "@tabler/icons-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface PromptCard {
  id: string;
  text: string;
  category: string;
  notes?: string;
  status: 'todo' | 'thinking' | 'done';
}

export function BoardView() {
  const [prompts, setPrompts] = useState<PromptCard[]>([
    {
      id: '1',
      text: 'What are your main goals for the next year?',
      category: 'Getting Started',
      status: 'todo'
    },
    {
      id: '2',
      text: 'What challenges do you anticipate?',
      category: 'Getting Started',
      status: 'thinking',
      notes: 'Need to think more about financial challenges...'
    },
    {
      id: '3',
      text: 'What steps will you take?',
      category: 'Planning',
      status: 'done',
      notes: 'I will create a roadmap with milestones and review progress monthly.'
    }
  ]);

  const [editingPrompt, setEditingPrompt] = useState<PromptCard | null>(null);
  const [editNotes, setEditNotes] = useState('');

  const columns: Array<{ status: PromptCard['status']; title: string; color: string }> = [
    { status: 'todo', title: 'To Do', color: 'bg-muted' },
    { status: 'thinking', title: 'Thinking', color: 'bg-blue-50 dark:bg-blue-950/30' },
    { status: 'done', title: 'Done', color: 'bg-green-50 dark:bg-green-950/30' },
  ];

  const getPromptsForStatus = (status: PromptCard['status']) => {
    return prompts.filter(p => p.status === status);
  };

  const handleEditPrompt = (prompt: PromptCard) => {
    setEditingPrompt(prompt);
    setEditNotes(prompt.notes || '');
  };

  const handleSaveNotes = () => {
    if (!editingPrompt) return;

    setPrompts(prompts.map(p =>
      p.id === editingPrompt.id
        ? { ...p, notes: editNotes }
        : p
    ));
    setEditingPrompt(null);
    setEditNotes('');
  };

  const movePrompt = (promptId: string, newStatus: PromptCard['status']) => {
    setPrompts(prompts.map(p =>
      p.id === promptId ? { ...p, status: newStatus } : p
    ));
  };

  return (
    <div className="h-full p-4 overflow-x-auto">
      <div className="flex gap-4 h-full min-w-max">
        {columns.map((column) => (
          <div key={column.status} className="flex-1 min-w-[300px] flex flex-col">
            {/* Column Header */}
            <div className={`p-3 rounded-t-lg border-b ${column.color}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{column.title}</h3>
                <Badge variant="secondary">
                  {getPromptsForStatus(column.status).length}
                </Badge>
              </div>
            </div>

            {/* Cards Container */}
            <div className="flex-1 border-x border-b rounded-b-lg p-3 space-y-3 overflow-y-auto bg-muted/20">
              {getPromptsForStatus(column.status).map((prompt) => (
                <Dialog key={prompt.id}>
                  <DialogTrigger asChild>
                    <Card
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => handleEditPrompt(prompt)}
                    >
                      <CardHeader className="p-3 pb-2">
                        <div className="flex items-start gap-2">
                          <IconGripVertical className="h-4 w-4 text-muted-foreground mt-0.5 cursor-grab" />
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-2 text-xs">
                              {prompt.category}
                            </Badge>
                            <CardTitle className="text-sm font-medium leading-tight">
                              {prompt.text}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      {prompt.notes && (
                        <CardContent className="p-3 pt-0">
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {prompt.notes}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <Badge variant="outline" className="w-fit mb-2">
                        {prompt.category}
                      </Badge>
                      <DialogTitle>{prompt.text}</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                      {/* Status Selector */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Status</label>
                        <div className="flex gap-2">
                          {columns.map((col) => (
                            <Button
                              key={col.status}
                              variant={prompt.status === col.status ? "default" : "outline"}
                              size="sm"
                              onClick={() => movePrompt(prompt.id, col.status)}
                            >
                              {col.title}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Notes Editor */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Your Notes</label>
                        <Textarea
                          value={editNotes}
                          onChange={(e) => setEditNotes(e.target.value)}
                          placeholder="Write your thoughts, plans, or reflections..."
                          className="min-h-[200px]"
                        />
                      </div>

                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setEditingPrompt(null)}>
                          Cancel
                        </Button>
                        <Button onClick={handleSaveNotes}>
                          Save Notes
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}

              {getPromptsForStatus(column.status).length === 0 && (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  No prompts in this column
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
