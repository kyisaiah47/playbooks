"use client"

import { useState } from "react"
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
import {
  KanbanProvider,
  KanbanBoard,
  KanbanHeader,
  KanbanCards,
  KanbanCard,
} from "@/components/ui/shadcn-io/kanban"

interface QuestionCard {
  id: string;
  name: string; // Required by KanbanCard
  text: string;
  category: string;
  notes?: string;
  column: 'todo' | 'thinking' | 'done'; // Required by Kanban
}

interface BoardViewProps {
  guideId: string | null;
}

export function BoardView({ guideId }: BoardViewProps) {
  const [questions, setQuestions] = useState<QuestionCard[]>([
    {
      id: '1',
      name: 'Main Goals',
      text: 'What are your main goals for the next year?',
      category: 'Getting Started',
      column: 'todo'
    },
    {
      id: '2',
      name: 'Challenges',
      text: 'What challenges do you anticipate?',
      category: 'Getting Started',
      column: 'thinking',
      notes: 'Need to think more about financial challenges...'
    },
    {
      id: '3',
      name: 'Action Steps',
      text: 'What steps will you take?',
      category: 'Planning',
      column: 'done',
      notes: 'I will create a roadmap with milestones and review progress monthly.'
    }
  ]);

  const columns = [
    { id: 'todo' as const, name: 'To Do' },
    { id: 'thinking' as const, name: 'Thinking' },
    { id: 'done' as const, name: 'Done' },
  ];

  const [editingQuestion, setEditingQuestion] = useState<QuestionCard | null>(null);
  const [editNotes, setEditNotes] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleEditQuestion = (question: QuestionCard) => {
    setEditingQuestion(question);
    setEditNotes(question.notes || '');
    setDialogOpen(true);
  };

  const handleSaveNotes = () => {
    if (!editingQuestion) return;

    setQuestions(questions.map(question =>
      question.id === editingQuestion.id
        ? { ...question, notes: editNotes }
        : question
    ));
    setEditingQuestion(null);
    setEditNotes('');
    setDialogOpen(false);
  };

  const moveQuestion = (questionId: string, newColumn: QuestionCard['column']) => {
    setQuestions(questions.map(question =>
      question.id === questionId ? { ...question, column: newColumn } : question
    ));
  };

  return (
    <div className="h-full p-4">
      <KanbanProvider
        columns={columns}
        data={questions}
        onDataChange={setQuestions}
        className="h-full"
      >
        {(column) => (
          <KanbanBoard id={column.id} key={column.id}>
            <KanbanHeader>
              <div className="flex items-center justify-between">
                <span>{column.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {questions.filter(question => question.column === column.id).length}
                </Badge>
              </div>
            </KanbanHeader>
            <KanbanCards id={column.id}>
              {(item: QuestionCard) => (
                <KanbanCard key={item.id} {...item}>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleEditQuestion(item)}
                  >
                    <Badge variant="outline" className="mb-2 text-xs">
                      {item.category}
                    </Badge>
                    <p className="font-medium text-sm mb-1">{item.text}</p>
                    {item.notes && (
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {item.notes}
                      </p>
                    )}
                  </div>
                </KanbanCard>
              )}
            </KanbanCards>
          </KanbanBoard>
        )}
      </KanbanProvider>

      {/* Edit Dialog */}
      {editingQuestion && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <Badge variant="outline" className="w-fit mb-2">
                {editingQuestion.category}
              </Badge>
              <DialogTitle>{editingQuestion.text}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              {/* Status Selector */}
              <div>
                <label className="text-sm font-medium mb-2 block">Status</label>
                <div className="flex gap-2">
                  {columns.map((col) => (
                    <Button
                      key={col.id}
                      variant={editingQuestion.column === col.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => moveQuestion(editingQuestion.id, col.id)}
                    >
                      {col.name}
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
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveNotes}>
                  Save Notes
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
