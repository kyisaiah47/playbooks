import { GuidanceTemplate } from '@/types/template';

export interface GuideRegistryEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  color: string;
  iconColor: string;
  template: GuidanceTemplate;
}

// Legacy type alias for compatibility
export type TemplateRegistryEntry = GuideRegistryEntry;

// Helper function to get colors based on category
function getCategoryColors(category: string): { bg: string; icon: string } {
  const colorMap: Record<string, { bg: string; icon: string }> = {
    'Life Planning': { bg: 'bg-blue-50 dark:bg-blue-950/30', icon: 'text-blue-600 dark:text-blue-400' },
    'Career & Finance': { bg: 'bg-green-50 dark:bg-green-950/30', icon: 'text-green-600 dark:text-green-400' },
    'Health & Wellness': { bg: 'bg-emerald-50 dark:bg-emerald-950/30', icon: 'text-emerald-600 dark:text-emerald-400' },
    'Relationships & Family': { bg: 'bg-pink-50 dark:bg-pink-950/30', icon: 'text-pink-600 dark:text-pink-400' },
    'Creative & Hobbies': { bg: 'bg-purple-50 dark:bg-purple-950/30', icon: 'text-purple-600 dark:text-purple-400' },
    'Business & Entrepreneurship': { bg: 'bg-orange-50 dark:bg-orange-950/30', icon: 'text-orange-600 dark:text-orange-400' },
    'Education & Learning': { bg: 'bg-indigo-50 dark:bg-indigo-950/30', icon: 'text-primary dark:text-indigo-400' },
    'Technology & Digital': { bg: 'bg-cyan-50 dark:bg-cyan-950/30', icon: 'text-cyan-600 dark:text-cyan-400' },
    'Personal Development': { bg: 'bg-teal-50 dark:bg-teal-950/30', icon: 'text-teal-600 dark:text-teal-400' },
    'Home & Living': { bg: 'bg-amber-50 dark:bg-amber-950/30', icon: 'text-amber-600 dark:text-amber-400' },
  };

  return colorMap[category] || { bg: 'bg-gray-50 dark:bg-gray-950/30', icon: 'text-gray-600 dark:text-gray-400' };
}

// Fetch guides from API
async function fetchGuides(): Promise<GuideRegistryEntry[]> {
  try {
    // Determine if we're on server or client
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer
      ? (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000')
      : ''; // Client-side uses relative URL

    const res = await fetch(`${baseUrl}/api/guides`);
    if (!res.ok) return [];

    const data = await res.json();
    return (data.templates || []).map((t: any) => ({
      ...t,
      ...getCategoryColors(t.category)
    }));
  } catch (error) {
    console.error('Error fetching guides:', error);
    return [];
  }
}

// Helper functions - now async
export const getGuideById = async (id: string): Promise<GuideRegistryEntry | undefined> => {
  const guides = await fetchGuides();
  return guides.find(guide => guide.id === id);
};

export const getGuidesByCategory = async (category: string): Promise<GuideRegistryEntry[]> => {
  const guides = await fetchGuides();
  return guides.filter(guide => guide.category === category);
};

export const getAllCategories = async (): Promise<string[]> => {
  const guides = await fetchGuides();
  const categories = guides.map(guide => guide.category);
  return [...new Set(categories)].sort();
};

export const searchGuides = async (query: string): Promise<GuideRegistryEntry[]> => {
  const guides = await fetchGuides();
  const lowercaseQuery = query.toLowerCase();
  return guides.filter(guide =>
    guide.name.toLowerCase().includes(lowercaseQuery) ||
    guide.description.toLowerCase().includes(lowercaseQuery) ||
    guide.category.toLowerCase().includes(lowercaseQuery) ||
    guide.template.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getAllGuides = async (): Promise<GuideRegistryEntry[]> => {
  return fetchGuides();
};

// Legacy exports for compatibility
export const getTemplateById = getGuideById;
export const getTemplatesByCategory = getGuidesByCategory;
export const searchTemplates = searchGuides;
export const getAllTemplates = getAllGuides;
export const templateRegistry = [] as GuideRegistryEntry[];
export const guideRegistry = [] as GuideRegistryEntry[];

export const getReadings = () => {
  return [];
};
