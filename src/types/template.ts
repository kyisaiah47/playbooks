export interface GuidanceTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  sections: GuidanceSection[];
  resources: Resource[];
  expertTips: ExpertTip[];
}

export interface GuidanceSection {
  id: string;
  title: string;
  description: string;
  reflectionPrompts: ReflectionPrompt[];
  order: number;
}

export interface ReflectionPrompt {
  id: string;
  prompt: string;
  category: 'consideration' | 'planning' | 'decision' | 'research';
  helpText?: string;
  relatedResources?: string[];
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
}

export interface ExpertTip {
  id: string;
  tip: string;
  author: string;
  category: string;
  importance: 'high' | 'medium' | 'low';
}

export interface UserGuidanceDocument {
  templateId: string;
  userId: string;
  title: string;
  content: any; // Tiptap JSON document
  createdAt: Date;
  updatedAt: Date;
  bookmarkedPrompts: string[];
  bookmarkedResources: string[];
}