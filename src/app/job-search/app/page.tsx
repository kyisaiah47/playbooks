'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { jobSearchTemplate } from '@/data/templates';

export default function JobSearchAppPage() {
  // Template now uses unified resources directly
  const syncedTemplate = jobSearchTemplate;
  
  return <TemplateView template={syncedTemplate} />;
}