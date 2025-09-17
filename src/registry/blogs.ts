export interface BlogPost {
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
  relatedTemplates?: string[];
  relatedPosts?: string[];
}

// Import all template-specific blog posts
import { manualBlogPosts as bookWritingPosts } from './blogs-book-writing';
import { manualBlogPosts as budgetPlanningPosts } from './blogs-budget-planning';
import { manualBlogPosts as carBuyingPosts } from './blogs-car-buying';
import { manualBlogPosts as careerChangePosts } from './blogs-career-change';
import { manualBlogPosts as collegePlanningPosts } from './blogs-college-planning';
import { manualBlogPosts as divorceCoordinationPosts } from './blogs-divorce-coordination';
import { manualBlogPosts as educationLearningPosts } from './blogs-education-learning';
import { manualBlogPosts as elderCarePosts } from './blogs-elder-care';
import { manualBlogPosts as eventPlanningPosts } from './blogs-event-planning';
import { manualBlogPosts as freelanceBusinessPosts } from './blogs-freelance-business';
import { manualBlogPosts as gardenPlanningPosts } from './blogs-garden-planning';
import { manualBlogPosts as healthWellnessPosts } from './blogs-health-wellness';
import { manualBlogPosts as hobbyProjectPosts } from './blogs-hobby-project';
import { manualBlogPosts as homeImprovementPosts } from './blogs-home-improvement';
import { manualBlogPosts as investmentPortfolioPosts } from './blogs-investment-portfolio';
import { manualBlogPosts as languageLearningPosts } from './blogs-language-learning';
import { manualBlogPosts as lifeTransitionsPosts } from './blogs-life-transitions';
import { manualBlogPosts as mealPlanningPosts } from './blogs-meal-planning';
import { manualBlogPosts as medicalTreatmentPosts } from './blogs-medical-treatment';
import { manualBlogPosts as musicProductionPosts } from './blogs-music-production';
import { manualBlogPosts as nonprofitManagementPosts } from './blogs-nonprofit-management';
import { manualBlogPosts as personalBrandingPosts } from './blogs-personal-branding';
import { manualBlogPosts as personalGrowthPosts } from './blogs-personal-growth';
import { manualBlogPosts as photographyBusinessPosts } from './blogs-photography-business';
import { manualBlogPosts as podcastCreationPosts } from './blogs-podcast-creation';
import { manualBlogPosts as relationshipDatingPosts } from './blogs-relationship-dating';
import { manualBlogPosts as retirementPlanningPosts } from './blogs-retirement-planning';
import { manualBlogPosts as skillDevelopmentPosts } from './blogs-skill-development';
import { manualBlogPosts as smallBusinessLaunchPosts } from './blogs-small-business-launch';
import { manualBlogPosts as socialMediaManagementPosts } from './blogs-social-media-management';
import { manualBlogPosts as travelPlanningPosts } from './blogs-travel-planning';
import { manualBlogPosts as weddingPlanningPosts } from './blogs-wedding-planning';

// Original blog posts (keep these)
const originalBlogPosts: BlogPost[] = [
  {
    id: "electric-vehicle-transition-guide-traditional-buyers",
    slug: "electric-vehicle-transition-guide-traditional-buyers",
    title: "Making the Electric Vehicle Transition: A Practical Guide for Traditional Car Buyers",
    excerpt: "Electric vehicles represent more than just a technology shift – they're fundamentally changing how people think about car ownership, maintenance, and daily driving routines. For traditional car buyers considering the switch, understanding the real-world implications goes far beyond range anxiety and charging logistics.",
    content: `Electric vehicles have reached a tipping point where they're no longer experimental technology for early adopters. Major automakers are committing hundreds of billions to electrification, governments are implementing purchase incentives and gas car phase-out timelines, and charging infrastructure is expanding rapidly across the country. Yet for traditional car buyers, the transition still feels like stepping into unknown territory.

The shift to electric isn't just about swapping gas tanks for batteries. It fundamentally changes the relationship between driver and vehicle, affecting everything from daily routines to long-term financial planning. Understanding these changes before making the switch helps traditional buyers evaluate whether electric vehicles align with their actual needs rather than just their environmental aspirations.

This guide cuts through marketing hype and internet debates to focus on practical considerations that matter for real-world car ownership. Whether electric vehicles make sense for your situation depends on specific factors unique to your driving patterns, home situation, and financial priorities.`,
    author: "Templata",
    publishedAt: "2024-01-15",
    readTime: "12 min",
    category: "Personal Life",
    tags: ["car-buying", "electric-vehicles", "guide"],
    type: "guide",
    difficulty: "intermediate"
  }
];

// Combine original posts with all template-specific blog posts
export const manualBlogPosts: BlogPost[] = [
  ...originalBlogPosts,
  ...bookWritingPosts,
  ...budgetPlanningPosts,
  ...carBuyingPosts,
  ...careerChangePosts,
  ...collegePlanningPosts,
  ...divorceCoordinationPosts,
  ...educationLearningPosts,
  ...elderCarePosts,
  ...eventPlanningPosts,
  ...freelanceBusinessPosts,
  ...gardenPlanningPosts,
  ...healthWellnessPosts,
  ...hobbyProjectPosts,
  ...homeImprovementPosts,
  ...investmentPortfolioPosts,
  ...languageLearningPosts,
  ...lifeTransitionsPosts,
  ...mealPlanningPosts,
  ...medicalTreatmentPosts,
  ...musicProductionPosts,
  ...nonprofitManagementPosts,
  ...personalBrandingPosts,
  ...personalGrowthPosts,
  ...photographyBusinessPosts,
  ...podcastCreationPosts,
  ...relationshipDatingPosts,
  ...retirementPlanningPosts,
  ...skillDevelopmentPosts,
  ...smallBusinessLaunchPosts,
  ...socialMediaManagementPosts,
  ...travelPlanningPosts,
  ...weddingPlanningPosts,
];

// Export blog registry
export const blogRegistry = manualBlogPosts;

// Helper functions
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogRegistry.find(post => post.id === id);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogRegistry.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogRegistry.filter(post => post.category === category);
};

export const getAllBlogCategories = (): string[] => {
  const categories = blogRegistry.map(post => post.category);
  return [...new Set(categories)].sort();
};

export const getBlogPostsByTemplate = (templateId: string): BlogPost[] => {
  return blogRegistry.filter(post =>
    post.relatedTemplates && post.relatedTemplates.includes(templateId)
  );
};

export const getRelatedBlogPosts = (postId: string, limit: number = 3): BlogPost[] => {
  const currentPost = getBlogPostById(postId);
  if (!currentPost) return [];

  // Find related posts by category and tags
  const relatedPosts = blogRegistry.filter(post =>
    post.id !== postId && (
      post.category === currentPost.category ||
      post.tags.some(tag => currentPost.tags.includes(tag)) ||
      (currentPost.relatedPosts && currentPost.relatedPosts.includes(post.id))
    )
  );

  // Sort by relevance and return limited results
  return relatedPosts.slice(0, limit);
};