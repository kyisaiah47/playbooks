'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { getTemplateById } from '@/registry/templates';

export default function EventPlanningApp() {
  const template = getTemplateById('event-planning');
  
  if (!template?.template) {
    return <div>Template not found</div>;
  }
  
  return <TemplateView template={template.template} />;
}