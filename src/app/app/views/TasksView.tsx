'use client';

import { useSearchParams } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
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

export function TasksView() {
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  // Get selected note IDs from URL, fallback to localStorage if URL is empty
  const scopedNoteId = searchParams.get('scopedNoteId');
  const urlIds = searchParams.get('tasksNotes')?.split(',').filter(Boolean);
  const localStorageIds = typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('selectedTasksNoteIds') || '[]')
    : [];
  const selectedNoteIds = scopedNoteId
    ? [scopedNoteId]
    : (urlIds && urlIds.length > 0 ? urlIds : localStorageIds);

  // Fetch tasks
  const { data: allItems, isLoading, error } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const res = await fetch('/api/items');
      if (!res.ok) {
        // If unauthorized, return empty array instead of throwing
        if (res.status === 401) {
          return [];
        }
        throw new Error('Failed to fetch tasks');
      }
      const data = await res.json();
      return data.items as ExtendedTask[];
    },
  });

  // Filter tasks by selected notes
  const data = selectedNoteIds.length > 0
    ? (allItems || []).filter(task => task.user_guide_id && selectedNoteIds.includes(task.user_guide_id))
    : (allItems || []);

  // Create task mutation
  const createTaskMutation = useMutation({
    mutationFn: async (task: {
      title: string;
      description: string;
      status: 'todo' | 'in_progress' | 'done';
      due_date: string | null;
      user_guide_id: string | null;
    }) => {
      const res = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      if (!res.ok) throw new Error('Failed to create task');
      return res.json();
    },
    onMutate: async (newTask) => {
      await queryClient.cancelQueries({ queryKey: ['items'] });

      const previousTasks = queryClient.getQueryData<ExtendedTask[]>(['tasks']);

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
      if (context?.previousTasks) {
        queryClient.setQueryData(['tasks'], context.previousTasks);
      }
      toast.error('Failed to create task');
    },
    onSuccess: () => {
      toast.success('Task created successfully');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
  });

  // Delete task mutation
  const deleteTaskMutation = useMutation({
    mutationFn: async (taskId: string) => {
      const res = await fetch(`/api/items/${taskId}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete task');
      return res.json();
    },
    onMutate: async (taskId) => {
      await queryClient.cancelQueries({ queryKey: ['items'] });

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
      queryClient.invalidateQueries({ queryKey: ['items'] });
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
      const res = await fetch(`/api/items/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('Failed to update task');
      return res.json();
    },
    onMutate: async ({ taskId, status }) => {
      await queryClient.cancelQueries({ queryKey: ['items'] });

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
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
  });

  // Update task mutation
  const updateTaskMutation = useMutation({
    mutationFn: async ({
      taskId,
      updates,
    }: {
      taskId: string;
      updates: {
        title: string;
        description: string;
        due_date: string | null;
      };
    }) => {
      const res = await fetch(`/api/items/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error('Failed to update task');
      return res.json();
    },
    onMutate: async ({ taskId, updates }) => {
      await queryClient.cancelQueries({ queryKey: ['items'] });

      const previousTasks = queryClient.getQueryData<ExtendedTask[]>(['tasks']);

      queryClient.setQueryData<ExtendedTask[]>(['tasks'], (old = []) =>
        old.map((task) =>
          task.id === taskId
            ? { ...task, ...updates }
            : task
        )
      );

      return { previousTasks };
    },
    onError: (err, variables, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(['tasks'], context.previousTasks);
      }
      toast.error('Failed to update task');
    },
    onSuccess: () => {
      toast.success('Task updated successfully');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
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

  const handleUpdateTask = (
    taskId: string,
    updates: {
      title: string;
      description: string;
      due_date: string | null;
    }
  ) => {
    updateTaskMutation.mutate({ taskId, updates });
  };

  if (isLoading) {
    return (
      <motion.div
        className="h-full w-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="h-full w-full p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
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
      </motion.div>
    );
  }

  return (
    <motion.div
      className="h-full w-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="border-b border-border/40 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <ListTodo className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Tasks</h1>
            <p className="text-xs text-muted-foreground">Manage your tasks</p>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-auto">
        {selectedNoteIds.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96 text-muted-foreground">
            <ListTodo className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-lg font-medium">No notes selected</p>
            <p className="text-sm">Select notes from the sidebar to see tasks</p>
          </div>
        ) : (data || []).length === 0 && selectedNoteIds.length > 0 ? (
          <div className="flex-col items-center justify-center h-96 text-muted-foreground px-6 py-12">
            <ListTodo className="w-16 h-16 mb-4 opacity-20 mx-auto" />
            <p className="text-lg font-medium text-center">No tasks found</p>
            <p className="text-sm text-center">The selected notes don't have any tasks yet</p>
          </div>
        ) : (
          <KanbanBoard
            tasks={data || []}
            onCreateTask={handleCreateTask}
            onDeleteTask={handleDeleteTask}
            onUpdateTaskStatus={handleUpdateTaskStatus}
            onUpdateTask={handleUpdateTask}
            workspaceId=""
          />
        )}
      </div>
    </motion.div>
  );
}
