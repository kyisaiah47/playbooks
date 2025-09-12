'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { parentingChildDevelopmentTemplate } from '@/data/templates';
import { createTemplateWithSyncedResources } from '@/registry/templates';

export default function ParentingChildDevelopmentAppPage() {
  // Sync parenting & child development template with blog resources
  const syncedTemplate = createTemplateWithSyncedResources(parentingChildDevelopmentTemplate);
  
  return <TemplateView template={syncedTemplate} />;
}