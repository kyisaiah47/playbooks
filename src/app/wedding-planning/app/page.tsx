'use client';

import { TemplateView } from '@/components/template/TemplateView';
import { weddingTemplate } from '@/data/templates';

export default function WeddingPlanningApp() {
  return <TemplateView template={weddingTemplate} />;
}