'use client';

import { Task } from '@/types/workspace';
import {
  KanbanProvider,
  KanbanBoard as KanbanBoardUI,
  KanbanHeader,
  KanbanCards,
  KanbanCard,
} from '@/components/ui/shadcn-io/kanban';
import { KanbanColumn } from './KanbanColumn';
import { TaskCard } from './TaskCard';
import { TaskEditDialog } from './TaskEditDialog';
import { useState } from 'react';

interface KanbanItemProps {
  id: string;
  name: string;
  column: string;
}

interface ExtendedTask extends Task {
  user_guides?: {
    id: string;
    guides: {
      name: string;
      icon: string | null;
    };
  } | null;
}

interface KanbanBoardProps {
  tasks: ExtendedTask[];
  onCreateTask: (task: {
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
    due_date: string | null;
    user_guide_id: string | null;
  }) => void;
  onDeleteTask: (taskId: string) => void;
  onUpdateTaskStatus: (taskId: string, newStatus: 'todo' | 'in_progress' | 'done') => void;
  onUpdateTask: (taskId: string, updates: {
    title: string;
    description: string;
    due_date: string | null;
  }) => void;
  workspaceId: string;
}

const columns = [
  { id: 'todo', name: 'To Do' },
  { id: 'in_progress', name: 'In Progress' },
  { id: 'done', name: 'Done' },
];

export function KanbanBoard({
  tasks,
  onCreateTask,
  onDeleteTask,
  onUpdateTaskStatus,
  onUpdateTask,
  workspaceId,
}: KanbanBoardProps) {
  const [editingTask, setEditingTask] = useState<ExtendedTask | null>(null);

  // Transform tasks to kanban items
  const kanbanItems: (KanbanItemProps & ExtendedTask)[] = tasks.map((task) => ({
    ...task,
    name: task.title,
    column: task.status,
  }));

  const handleDataChange = (newData: (KanbanItemProps & ExtendedTask)[]) => {
    // Find which task changed columns
    newData.forEach((newItem) => {
      const originalTask = tasks.find((t) => t.id === newItem.id);
      if (originalTask && originalTask.status !== newItem.column) {
        // Status changed - update via API
        onUpdateTaskStatus(
          newItem.id,
          newItem.column as 'todo' | 'in_progress' | 'done'
        );
      }
    });
  };

  return (
    <>
      <KanbanProvider
        columns={columns}
        data={kanbanItems}
        onDataChange={handleDataChange}
        className="gap-3 p-6"
      >
        {(column) => {
          const columnTasks = tasks.filter((task) => task.status === column.id);

          return (
            <KanbanColumn
              key={column.id}
              title={column.name}
              status={column.id as 'todo' | 'in_progress' | 'done'}
              tasks={columnTasks}
              onCreateTask={onCreateTask}
              onDeleteTask={onDeleteTask}
              workspaceId={workspaceId}
            >
              <KanbanCards id={column.id}>
                {(item) => {
                  const task = item as KanbanItemProps & ExtendedTask;
                  return (
                    <KanbanCard key={task.id} id={task.id} name={task.name} column={task.column}>
                      <TaskCard task={task} onDelete={onDeleteTask} onEdit={() => setEditingTask(task)} />
                    </KanbanCard>
                  );
                }}
              </KanbanCards>
            </KanbanColumn>
          );
        }}
      </KanbanProvider>

      {/* Edit Dialog */}
      {editingTask && (
        <TaskEditDialog
          task={editingTask}
          open={!!editingTask}
          onOpenChange={(open) => !open && setEditingTask(null)}
          onUpdate={onUpdateTask}
        />
      )}
    </>
  );
}
