export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  category: string;
  featured?: boolean;
  tags: string[];
  slug: string;
  type: 'guide' | 'article' | 'checklist' | 'tool';
  difficulty: 'beginner' | 'intermediate' | 'expert';
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
  heroImage?: {
    url: string;
    alt: string;
    photographer: string;
    photographerUrl: string;
    unsplashId: string;
    cached: boolean;
  };
  relatedTemplates?: string[];
  relatedPosts?: string[];
}

// Import all articles from index
import * as articleModules from '../data/articles/index';

// Combine all articles using simple flat operation
export const articles: Article[] = Object.values(articleModules).flat();

// Export blog registry
export const articleRegistry = articles;

// Helper functions
export const getArticleById = (id: string): Article | undefined => {
  return articleRegistry.find(post => post.id === id);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articleRegistry.find(post => post.slug === slug);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articleRegistry.filter(post => post.category === category);
};

export const getAllBlogCategories = (): string[] => {
  const categories = articleRegistry.map(post => post.category);
  return [...new Set(categories)].sort();
};

export const getArticlesByTemplate = (templateId: string): Article[] => {
  return articleRegistry.filter(post =>
    post.relatedTemplates && post.relatedTemplates.includes(templateId)
  );
};

export const getRelatedArticles = (postId: string, limit: number = 3): Article[] => {
  const currentPost = getArticleById(postId);
  if (!currentPost) return [];

  // Find related posts by category and tags
  const relatedPosts = articleRegistry.filter(post =>
    post.id !== postId && (
      post.category === currentPost.category ||
      (post.tags && currentPost.tags && post.tags.some(tag => currentPost.tags.includes(tag))) ||
      (currentPost.relatedPosts && currentPost.relatedPosts.includes(post.id))
    )
  );

  // Sort by relevance and return limited results
  return relatedPosts.slice(0, limit);
};