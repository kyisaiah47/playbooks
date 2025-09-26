// Import all landing pages from index
import * as landingPageModules from '../data/landing-pages/index';

// Simple registry using Object.values().flat() pattern like the others
export const landingPageRegistry = Object.values(landingPageModules).reduce((acc, module: any) => {
  if (module.landingPageData) {
    // Extract template ID from module (assumes naming convention)
    const templateId = Object.keys(landingPageModules).find(key => landingPageModules[key] === module)?.replace('landingPageData', '') || 'unknown';
    acc[templateId] = module.landingPageData;
  }
  return acc;
}, {} as Record<string, any>);

// Helper function to get landing page data by template slug
export const getLandingPageData = (slug: string) => {
  return landingPageRegistry[slug] || null;
};

// Helper function to get all available landing page slugs
export const getLandingPageSlugs = (): string[] => {
  return Object.keys(landingPageRegistry);
};