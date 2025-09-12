'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { getTemplateById } from '@/registry/templates';

export default function TravelPlanningApp() {
  const template = getTemplateById('travel-planning');
  
  if (!template?.template) {
    return <div>Template not found</div>;
  }
  
  return <TemplateView template={template.template} />;
}