'use client';

import { useState } from 'react';
import { Task } from '@/types/workspace';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { TaskCard } from './TaskCard';
import { TaskCreateForm } from './TaskCreateForm';
import { cn } from '@/lib/utils';

interface KanbanColumnProps {
  title: string;
  status: 'todo' | 'in_progress' | 'done';
  tasks: (Task & {
    user_guides?: {
      id: string;
      guides: {
        name: string;
        icon: string | null;
      };
    } | null;
  })[];
  onCreateTask: (task: {
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
    due_date: string | null;
    user_guide_id: string | null;
  }) => void;
  onDeleteTask: (taskId: string) => void;
  workspaceId: string;
  children: React.ReactNode;
}

const columnColors = {
  todo: {
    bg: 'bg-slate-500/10',
    text: 'text-slate-600 dark:text-slate-400',
    border: 'border-slate-500/20',
  },
  in_progress: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-500/20',
  },
  done: {
    bg: 'bg-green-500/10',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-500/20',
  },
};

export function KanbanColumn({
  title,
  status,
  tasks,
  onCreateTask,
  onDeleteTask,
  workspaceId,
  children,
}: KanbanColumnProps) {
  const [showForm, setShowForm] = useState(false);
  const colors = columnColors[status];

  const handleCreateTask = (task: {
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
    due_date: string | null;
    user_guide_id: string | null;
  }) => {
    onCreateTask(task);
    setShowForm(false);
  };

  return (
    <div className="flex flex-col h-full flex-1">
      {/* Column Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-border/40">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-sm">{title}</h2>
          <span className="text-xs text-muted-foreground">
            {tasks.length}
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setShowForm(true)}
          className="h-6 w-6"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Column Content */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {/* Create Form */}
        {showForm && (
          <TaskCreateForm
            status={status}
            onSubmit={handleCreateTask}
            onCancel={() => setShowForm(false)}
            workspaceId={workspaceId}
          />
        )}

        {/* Tasks - Rendered by KanbanCards through children */}
        {children}

        {/* Empty State */}
        {tasks.length === 0 && !showForm && (
          <div className="text-center py-8 text-muted-foreground text-sm">
            <p>No tasks yet</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowForm(true)}
              className="mt-2"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add task
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
