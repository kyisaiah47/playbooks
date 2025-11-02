// Import all marketing pages from index
import * as marketingPageModules from '../data/marketing/index';

// Simple registry using Object.values().flat() pattern like the others
export const marketingRegistry = Object.values(marketingPageModules)
  .filter((module: any) => module && module.marketing)
  .map((module: any) => module.marketing);

// Helper function to get marketing page data by template slug
export const getMarketingPageData = (slug: string) => {
  return marketingRegistry.find((marketing: any) => marketing.templateId === slug) || null;
};

// Helper function to get all available marketing page slugs
export const getMarketingPageSlugs = (): string[] => {
  return marketingRegistry.map((marketing: any) => marketing.guideId);
};