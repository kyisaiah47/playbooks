import { GuidanceTemplate } from '@/types/template';

export const 3dPrintingTemplate: GuidanceTemplate = {
  id: "3d-printing",
  title: "Template",
  description: "Template description",
  category: "Life Planning",
  icon: "file-text",
  difficulty: "intermediate",
  estimatedTime: "30-60 minutes",
  tags: [
    
  ],
  lastUpdated: new Date().toISOString().split('T')[0]
};
