import { Guide } from '@/types/guide';

export interface TemplateRegistryEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  color: string;
  iconColor: string;
  template: Guide;
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

// Fetch templates from API
async function fetchTemplates(): Promise<TemplateRegistryEntry[]> {
  try {
    // Determine if we're on server or client
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer
      ? (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000')
      : ''; // Client-side uses relative URL

    const res = await fetch(`${baseUrl}/api/templates`);
    if (!res.ok) return [];

    const data = await res.json();
    return (data.templates || []).map((t: any) => ({
      ...t,
      ...getCategoryColors(t.category)
    }));
  } catch (error) {
    console.error('Error fetching templates:', error);
    return [];
  }
}

// Helper functions - now async
export const getTemplateById = async (id: string): Promise<TemplateRegistryEntry | undefined> => {
  const templates = await fetchTemplates();
  return templates.find(template => template.id === id);
};

export const getTemplatesByCategory = async (category: string): Promise<TemplateRegistryEntry[]> => {
  const templates = await fetchTemplates();
  return templates.filter(template => template.category === category);
};

export const getAllCategories = async (): Promise<string[]> => {
  const templates = await fetchTemplates();
  const categories = templates.map(template => template.category);
  return [...new Set(categories)].sort();
};

export const searchTemplates = async (query: string): Promise<TemplateRegistryEntry[]> => {
  const templates = await fetchTemplates();
  const lowercaseQuery = query.toLowerCase();
  return templates.filter(template =>
    template.name.toLowerCase().includes(lowercaseQuery) ||
    template.description.toLowerCase().includes(lowercaseQuery) ||
    template.category.toLowerCase().includes(lowercaseQuery) ||
    template.template.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getAllTemplates = async (): Promise<TemplateRegistryEntry[]> => {
  return fetchTemplates();
};

// Legacy export for compatibility
export const templateRegistry = [] as TemplateRegistryEntry[];

export const getArticles = () => {
  return [];
};
