import { Guide } from '@/types/guide';

export interface GuideRegistryEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  color: string;
  iconColor: string;
  guide: Guide;
}

// Legacy export for backwards compatibility
export type TemplateRegistryEntry = GuideRegistryEntry;
