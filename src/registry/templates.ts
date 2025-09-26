import { GuidanceTemplate } from '@/types/template';
import * as templates from '@/data/templates/index';
import { getTemplateExperts } from '@/lib/expert-badges';

// Helper function to capitalize all words in a template name
function capitalizeTemplateName(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export interface TemplateRegistryEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  popular?: boolean;
  featured?: boolean;
  expertVerified?: boolean;
  color: string;
  iconColor: string;
  template: GuidanceTemplate;
}

export function getTemplate(baseTemplate: GuidanceTemplate): GuidanceTemplate {
  const experts = getTemplateExperts(baseTemplate.id);
  return {
    ...baseTemplate,
    expertTips: experts.length > 0 ? experts.flatMap(expert => expert.tips || []) : undefined,
    reflectionPrompts: experts.length > 0 ? experts.flatMap(expert => expert.reflectionPrompts || []) : undefined
  };
}

// Helper function to get colors based on category
function getCategoryColors(category: string): { bg: string; icon: string } {
  const colorMap: Record<string, { bg: string; icon: string }> = {
    'Life Planning': { bg: 'bg-blue-50 dark:bg-blue-950/30', icon: 'text-blue-600 dark:text-blue-400' },
    'Career & Finance': { bg: 'bg-green-50 dark:bg-green-950/30', icon: 'text-green-600 dark:text-green-400' },
    'Health & Wellness': { bg: 'bg-emerald-50 dark:bg-emerald-950/30', icon: 'text-emerald-600 dark:text-emerald-400' },
    'Relationships & Family': { bg: 'bg-pink-50 dark:bg-pink-950/30', icon: 'text-pink-600 dark:text-pink-400' },
    'Creative & Hobbies': { bg: 'bg-purple-50 dark:bg-purple-950/30', icon: 'text-purple-600 dark:text-purple-400' },
    'Business & Entrepreneurship': { bg: 'bg-orange-50 dark:bg-orange-950/30', icon: 'text-orange-600 dark:text-orange-400' },
    'Education & Learning': { bg: 'bg-indigo-50 dark:bg-indigo-950/30', icon: 'text-indigo-600 dark:text-indigo-400' },
    'Technology & Digital': { bg: 'bg-cyan-50 dark:bg-cyan-950/30', icon: 'text-cyan-600 dark:text-cyan-400' },
    'Personal Development': { bg: 'bg-teal-50 dark:bg-teal-950/30', icon: 'text-teal-600 dark:text-teal-400' },
    'Home & Living': { bg: 'bg-amber-50 dark:bg-amber-950/30', icon: 'text-amber-600 dark:text-amber-400' },
  };

  return colorMap[category] || { bg: 'bg-gray-50 dark:bg-gray-950/30', icon: 'text-gray-600 dark:text-gray-400' };
}

// Simple registry generation using Object.values().flat() pattern like the others
export const templateRegistry: TemplateRegistryEntry[] = Object.values(templates).map((template: any) => {
  if (template && typeof template === 'object' && 'id' in template) {
    const t = template as GuidanceTemplate;
    return {
      id: t.id,
      name: capitalizeTemplateName(t.title || t.id.replace(/-/g, ' ')),
      description: t.description,
      category: t.category,
      icon: t.icon,
      url: `/${t.id}/app`,
      popular: false,
      featured: false,
      expertVerified: false,
      ...getCategoryColors(t.category),
      template: getTemplate(t)
    };
  }
  return null;
}).filter(Boolean).sort((a, b) => a.name.localeCompare(b.name));

// Helper functions
export const getTemplateById = (id: string): TemplateRegistryEntry | undefined => {
  return templateRegistry.find(template => template.id === id);
};

export const getTemplatesByCategory = (category: string): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.category === category);
};

export const getFeaturedTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.featured);
};

export const getPopularTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.popular);
};

export const getAllCategories = (): string[] => {
  const categories = templateRegistry.map(template => template.category);
  return [...new Set(categories)].sort();
};

export const searchTemplates = (query: string): TemplateRegistryEntry[] => {
  const lowercaseQuery = query.toLowerCase();
  return templateRegistry.filter(template =>
    template.name.toLowerCase().includes(lowercaseQuery) ||
    template.description.toLowerCase().includes(lowercaseQuery) ||
    template.category.toLowerCase().includes(lowercaseQuery) ||
    template.template.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getArticles = () => {
  // Return empty array - this was the old function that tried to get articles from templates
  // Articles are now handled separately in the articles registry
  return [];
};