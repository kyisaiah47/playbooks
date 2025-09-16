'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { babyPlanningTemplate } from '@/data/templates';

export default function BabyPlanningAppPage() {
  // Template now uses unified resources directly
  const syncedTemplate = babyPlanningTemplate;
  
  return <TemplateView template={syncedTemplate} />;
}