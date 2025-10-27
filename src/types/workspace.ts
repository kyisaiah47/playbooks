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

// Unified Item type (replaces Task and CalendarEvent)
export interface Item {
  id: string;
  user_id: string;
  user_guide_id: string | null;
  title: string;
  description: string | null;
  status: 'todo' | 'in_progress' | 'done';
  due_date: string | null;
  start_time: string | null;
  end_time: string | null;
  all_day: boolean;
  created_at: string;
  updated_at: string;
}

// Legacy type aliases for backwards compatibility
export type Task = Item;
export type CalendarEvent = Item;


export type TabType =
  | 'overview'
  | 'notes'
  | 'discover'
  | 'calendar'
  | 'tasks'
  | 'timeline'
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
  iconName?: string; // Store icon name for serialization
  pageId?: string;
  guideId?: string;
}

export interface PageWithSubPages extends Page {
  subPages: Page[];
}
