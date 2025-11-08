export interface Task {
  id: string;
  title: string;
  description?: string | null;
  status: 'todo' | 'in_progress' | 'done';
  user_id: string;
  track_id?: string | null;
  due_date?: string | null;
  priority?: 'low' | 'medium' | 'high' | null;
  completed?: boolean | null;
  created_at?: string;
  updated_at?: string;
}
