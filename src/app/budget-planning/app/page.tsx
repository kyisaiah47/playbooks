'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { getTemplateById } from '@/registry/templates';

export default function BudgetPlanningApp() {
  const template = getTemplateById('budget-planning');
  
  if (!template?.template) {
    return <div>Template not found</div>;
  }
  
  return <TemplateView template={template.template} />;
}