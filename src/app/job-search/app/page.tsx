'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { jobSearchTemplate } from '@/data/templates';
import { createTemplateWithSyncedResources } from '@/registry/templates';

export default function JobSearchAppPage() {
  // Sync job search template with blog resources
  const syncedTemplate = createTemplateWithSyncedResources(jobSearchTemplate);
  
  return <TemplateView template={syncedTemplate} />;
}