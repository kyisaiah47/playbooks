export type ItemType = 'task' | 'question' | 'resource';
export type ResourceType = 'venue' | 'book' | 'person' | 'video' | 'tool' | 'website';
export type TaskStatus = 'todo' | 'done';

export interface PlaybookItem {
  id: string;
  playbook_id: string;
  type: ItemType;
  content: string;
  phase: string | null;
  position: number;
  // task
  completed: boolean;
  // question
  answer: string | null;
  ai_feedback: string | null;
  // resource
  resource_type: ResourceType | null;
  url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Playbook {
  id: string;
  user_id: string | null;
  title: string;
  description: string | null;
  context: string;
  is_public: boolean;
  is_forked: boolean;
  forked_from: string | null;
  created_at: string;
  updated_at: string;
  // joined
  items?: PlaybookItem[];
  likes_count?: number;
  user_has_liked?: boolean;
}
