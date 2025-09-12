'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { getTemplateById } from '@/registry/templates';

export default function CollegePlanningApp() {
  const template = getTemplateById('college-planning');
  
  if (!template?.template) {
    return <div>Template not found</div>;
  }
  
  return <TemplateView template={template.template} />;
}