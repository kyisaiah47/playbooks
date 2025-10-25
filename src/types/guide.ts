export interface GuidanceTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  difficulty: string;
  estimatedTime: string;
  tags: string[];
  lastUpdated: string;
  version?: string;
}

export interface FreeformNote {
  id: string;
  title: string;
  content?: string;
  category?: string;
}

export interface Workspace {
  id: string;
  name: string;
  templateId: string;
  allItems: FreeformNote[];
  responses: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserGuidanceDocument {
  templateId: string;
  userId: string;
  title: string;
  content: Record<string, unknown>; // Tiptap JSON document
  createdAt: Date;
  updatedAt: Date;
  bookmarkedPrompts: string[];
  bookmarkedResources: string[];
}