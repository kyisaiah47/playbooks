export interface GuidanceTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  difficulty: string;
  estimatedTime: string;
  tags: string[];
  sections: GuidanceSection[];
  resources?: Resource[];
  expertTips: ExpertTip[];
  reflectionPrompts?: DailyReflectionPrompt[];
  lastUpdated: string;
  version: string;
}

export interface GuidanceSection {
  id: string;
  title: string;
  description: string;
  reflectionPrompts: ReflectionPrompt[];
  order: number;
  icon?: string;
}

export interface ReflectionPrompt {
  id: string;
  prompt: string;
  category: 'consideration' | 'planning' | 'decision' | 'research';
  helpText?: string;
  relatedResources?: string[];
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
  allItems: (ReflectionPrompt | FreeformNote)[];
  responses: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'checklist' | 'tool' | 'guide';
  excerpt: string;
  content: string;
  tags: string[];
  readTime: string;
  difficulty: 'beginner' | 'intermediate' | 'expert';
  relatedBlogPost?: string; // ID of related blog post
}

export interface ExpertTip {
  id: string;
  tip: string;
  author: string;
  category: string;
  importance: 'high' | 'medium' | 'low';
}

export interface DailyReflectionPrompt {
  id: string;
  text: string;
  category: string;
  order: number;
  expertAdvice?: string;
  helpText?: string;
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