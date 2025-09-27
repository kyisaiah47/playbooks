// Import all articles from index
import * as articleModules from '../data/articles/index';

// Simple registry using Object.values().flat() pattern like the others
export const articleRegistry: any[] = Object.values(articleModules)
  .filter((module: any) => module && Array.isArray(module.articles) && module.articles.length > 0)
  .flatMap((module: any) => module.articles);

// Export all articles as array for backward compatibility
export const articles = articleRegistry;

// Helper function to get article by ID
export const getArticleById = (id: string) => {
  return articleRegistry.find((article: any) => article.id === id) || null;
};

// Helper function to get article by slug
export const getArticleBySlug = (slug: string) => {
  return articleRegistry.find((article: any) => article.slug === slug) || null;
};

// Helper function to get articles by category
export const getArticlesByCategory = (category: string) => {
  return articleRegistry.filter((article: any) => article.category === category);
};

// Helper function to get related articles
export const getRelatedArticles = (articleId: string, count = 3) => {
  return articleRegistry.filter((article: any) => article.id !== articleId).slice(0, count);
};

// Helper function to get articles by template (for component compatibility)
export const getArticlesByTemplate = (templateId: string) => {
  return articleRegistry.filter((article: any) =>
    article.relatedTemplates?.includes(templateId) ||
    article.tags?.some((tag: string) => templateId.includes(tag))
  );
};

// Helper function to get all available article IDs
export const getArticleIds = (): string[] => {
  return articleRegistry.map((article: any) => article.id);
};