// TypeScript types for workspace system

export interface Workspace {
  id: string;
  user_id: string;
  name: string;
  icon: string | null;
  created_at: string;
  updated_at: string;
}

export interface Page {
  id: string;
  workspace_id: string;
  name: string;
  icon: string | null;
  parent_page_id: string | null;
  guide_id: string | null;
  position: number;
  created_at: string;
  updated_at: string;
}

export interface UserGuide {
  id: string;
  user_id: string;
  workspace_id: string;
  page_id: string | null;
  guide_id: string;
  progress: number;
  archived: boolean;
  archived_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Task {
  id: string;
  user_id: string;
  user_guide_id: string | null;
  title: string;
  description: string | null;
  status: 'todo' | 'in_progress' | 'done';
  due_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface CalendarEvent {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  date: string;
  start_time: string;
  end_time?: string | null;
  all_day?: boolean;
  location?: string | null;
  user_guide_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface JournalEntry {
  id: string;
  user_id: string;
  title: string | null;
  content: string;
  tags: string[] | null;
  created_at: string;
  updated_at: string;
}

export interface DailyNote {
  id: string;
  user_id: string;
  date: string;
  content: string | null;
  agenda: any;
  created_at: string;
  updated_at: string;
}

export interface UserReadingProgress {
  id: string;
  user_id: string;
  reading_id: string;
  completed: boolean;
  completed_at: string | null;
  created_at: string;
}

export type TabType =
  | 'overview'
  | 'notes'
  | 'discover'
  | 'calendar'
  | 'tasks'
  | 'timeline'
  | 'daily'
  | 'journal'
  | 'graph'
  | 'library'
  | 'analytics'
  | 'archive'
  | 'community'
  | 'docs'
  | 'settings';

export interface Tab {
  id: string;
  type: TabType;
  label: string;
  icon?: any; // Can be string (emoji) or Lucide icon component
  pageId?: string;
  guideId?: string;
}

export interface PageWithSubPages extends Page {
  subPages: Page[];
}
