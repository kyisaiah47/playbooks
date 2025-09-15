'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { babyPlanningTemplate } from '@/data/templates';
import { createTemplateWithSyncedResources } from '@/registry/templates';

export default function BabyPlanningAppPage() {
  // Sync baby planning template with blog resources
  const syncedTemplate = createTemplateWithSyncedResources(babyPlanningTemplate);
  
  return <TemplateView template={syncedTemplate} />;
}