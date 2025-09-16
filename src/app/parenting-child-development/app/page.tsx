'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { parentingChildDevelopmentTemplate } from '@/data/templates';

export default function ParentingChildDevelopmentAppPage() {
  // Template now uses unified resources directly
  const syncedTemplate = parentingChildDevelopmentTemplate;
  
  return <TemplateView template={syncedTemplate} />;
}