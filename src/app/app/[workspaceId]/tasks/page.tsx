'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ListTodo, Loader2 } from 'lucide-react';
import { KanbanBoard } from '@/components/app/tasks/KanbanBoard';
import { Task } from '@/types/workspace';
import { toast } from 'sonner';

interface ExtendedTask extends Task {
  user_guides?: {
    id: string;
    guides: {
      name: string;
      icon: string | null;
    };
  } | null;
}

export default function TasksPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const workspaceId = params.workspaceId as string;
  const queryClient = useQueryClient();

  // Get selected note IDs from URL
  const selectedNoteIds = searchParams.get('tasksNotes')?.split(',').filter(Boolean) || [];

  // Fetch tasks
  const { data: allTasks, isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await fetch('/api/tasks');
      if (!res.ok) throw new Error('Failed to fetch tasks');
      const data = await res.json();
      return data.tasks as ExtendedTask[];
    },
  });

  // Filter tasks by selected notes - only show tasks if notes are selected
  const data = selectedNoteIds.length > 0
    ? (allTasks || []).filter(task => task.user_guide_id && selectedNoteIds.includes(task.user_guide_id))
    : [];

  // Create task mutation
  const createTaskMutation = useMutation({
    mutationFn: async (task: {
      title: string;
      description: string;
      status: 'todo' | 'in_progress' | 'done';
      due_date: string | null;
      user_guide_id: string | null;
    }) => {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      if (!res.ok) throw new Error('Failed to create task');
      return res.json();
    },
    onMutate: async (newTask) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      // Snapshot the previous value
      const previousTasks = queryClient.getQueryData<ExtendedTask[]>(['tasks']);

      // Optimistically update to the new value
      queryClient.setQueryData<ExtendedTask[]>(['tasks'], (old = []) => [
        ...old,
        {
          id: `temp-${Date.now()}`,
          user_id: '',
          title: newTask.title,
          description: newTask.description,
          status: newTask.status as 'todo' | 'in_progress' | 'done',
          due_date: newTask.due_date,
          user_guide_id: newTask.user_guide_id,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        } as ExtendedTask,
      ]);

      return { previousTasks };
    },
    onError: (err, newTask, context) => {
      // Rollback on error
      if (context?.previousTasks) {
        queryClient.setQueryData(['tasks'], context.previousTasks);
      }
      toast.error('Failed to create task');
    },
    onSuccess: () => {
      toast.success('Task created successfully');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  // Delete task mutation
  const deleteTaskMutation = useMutation({
    mutationFn: async (taskId: string) => {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete task');
      return res.json();
    },
    onMutate: async (taskId) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      const previousTasks = queryClient.getQueryData<ExtendedTask[]>(['tasks']);

      queryClient.setQueryData<ExtendedTask[]>(['tasks'], (old = []) =>
        old.filter((task) => task.id !== taskId)
      );

      return { previousTasks };
    },
    onError: (err, taskId, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(['tasks'], context.previousTasks);
      }
      toast.error('Failed to delete task');
    },
    onSuccess: () => {
      toast.success('Task deleted successfully');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  // Update task status mutation
  const updateTaskStatusMutation = useMutation({
    mutationFn: async ({
      taskId,
      status,
    }: {
      taskId: string;
      status: 'todo' | 'in_progress' | 'done';
    }) => {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('Failed to update task');
      return res.json();
    },
    onMutate: async ({ taskId, status }) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      const previousTasks = queryClient.getQueryData<ExtendedTask[]>(['tasks']);

      queryClient.setQueryData<ExtendedTask[]>(['tasks'], (old = []) =>
        old.map((task) =>
          task.id === taskId
            ? { ...task, status: status as 'todo' | 'in_progress' | 'done' }
            : task
        )
      );

      return { previousTasks };
    },
    onError: (err, variables, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(['tasks'], context.previousTasks);
      }
      toast.error('Failed to update task status');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const handleCreateTask = (task: {
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
    due_date: string | null;
    user_guide_id: string | null;
  }) => {
    createTaskMutation.mutate(task);
  };

  const handleDeleteTask = (taskId: string) => {
    deleteTaskMutation.mutate(taskId);
  };

  const handleUpdateTaskStatus = (
    taskId: string,
    newStatus: 'todo' | 'in_progress' | 'done'
  ) => {
    updateTaskStatusMutation.mutate({ taskId, status: newStatus });
  };

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full w-full p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <ListTodo className="w-5 h-5 text-destructive" />
            </div>
            <h1 className="text-3xl font-bold">Tasks</h1>
          </div>
          <p className="text-destructive">
            Failed to load tasks. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-8 pt-8 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
              <ListTodo className="w-5 h-5 text-[#6366f1]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Tasks</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Manage your tasks with a simple kanban board
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto h-full">
          <KanbanBoard
            tasks={data || []}
            onCreateTask={handleCreateTask}
            onDeleteTask={handleDeleteTask}
            onUpdateTaskStatus={handleUpdateTaskStatus}
            workspaceId={workspaceId}
          />
        </div>
      </div>
    </div>
  );
}
