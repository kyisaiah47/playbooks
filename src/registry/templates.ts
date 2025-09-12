import { GuidanceTemplate } from '@/types/template';
import { weddingTemplate, homeBuyingTemplate, jobSearchTemplate, babyPlanningTemplate, parentingChildDevelopmentTemplate, fitnessAthleticTrainingTemplate, fitnessJourneyTemplate, personalDevelopmentCoachingTemplate, retirementLifestylePlanningTemplate, travelPlanningAdventureTemplate, productivitySystemTemplate, movingRelocationTemplate, eventPlanningTemplate, travelPlanningTemplate, mealPlanningTemplate, academicResearchTemplate, freelanceGigEconomyTemplate, languageLearningCulturalImmersionTemplate, personalFinanceInvestmentTemplate, digitalMarketingSEOTemplate, remoteWorkProductivityTemplate, careerChangeTransitionTemplate, budgetPlanningTemplate, businessLaunchTemplate, collegePlanningTemplate, personalHealthWellnessTemplate, homeRenovationInteriorDesignTemplate, sustainableLivingTemplate } from '@/data/templates';
import { blogRegistry } from '@/registry/blogs';

// Function to sync template resources with blog registry
export function createTemplateWithSyncedResources(baseTemplate: GuidanceTemplate): GuidanceTemplate {
  // Find all blog posts that should be resources for this template
  const relatedBlogPosts = blogRegistry.filter(post => 
    post.relatedTemplates?.includes(baseTemplate.id) || 
    // Also include wedding-related posts that aren't explicitly linked
    (baseTemplate.id === 'wedding-planning' && (
      post.tags.includes('wedding') || 
      post.category === 'Wedding Planning' ||
      post.slug.includes('wedding')
    ))
  );

  // Convert blog posts to resources
  const dynamicResources = relatedBlogPosts.map(post => ({
    id: post.slug,
    title: post.title,
    type: (post.type || 'article') as 'article' | 'checklist' | 'tool' | 'guide',
    excerpt: post.excerpt,
    content: post.content, // Full content from blog post
    tags: post.tags,
    readTime: post.readTime,
    difficulty: (post.difficulty || 'beginner') as 'beginner' | 'intermediate' | 'expert',
    relatedBlogPost: post.slug
  }));

  // Replace all resources with ones from blog registry
  return {
    ...baseTemplate,
    resources: dynamicResources
  };
}

export interface TemplateRegistryEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string; // Using emoji strings for consistency
  url: string;
  popular?: boolean;
  featured?: boolean;
  comingSoon?: boolean;
  color?: string;
  iconColor?: string;
  // Reference to full template data
  template?: GuidanceTemplate;
}

// Template registry with all available templates
export const templateRegistry: TemplateRegistryEntry[] = [
  // Personal Life Templates
  {
    id: "wedding-planning",
    name: "Wedding Planning",
    description: "Plan your perfect wedding with budget tracking, vendor management, and timeline organization.",
    category: "Personal Life",
    icon: "💒",
    url: "/wedding-planning/app",
    popular: true,
    featured: true,
    color: "bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800",
    iconColor: "text-pink-600 dark:text-pink-400",
    template: createTemplateWithSyncedResources(weddingTemplate)
  },
  {
    id: "home-buying",
    name: "Home Buying",
    description: "Navigate the home buying process with mortgage tracking, property comparisons, and checklists.",
    category: "Personal Life",
    icon: "🏠",
    url: "/home-buying/app",
    popular: true,
    color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
    iconColor: "text-blue-600 dark:text-blue-400",
    template: createTemplateWithSyncedResources(homeBuyingTemplate)
  },
  {
    id: "baby-planning",
    name: "Baby Planning Guide",
    description: "Complete guidance for expecting parents from pregnancy through baby's first year.",
    category: "Personal Life",
    icon: "👶",
    url: "/baby-planning/app",
    color: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800",
    iconColor: "text-green-600 dark:text-green-400",
    template: createTemplateWithSyncedResources(babyPlanningTemplate)
  },
  {
    id: "parenting-child-development",
    name: "Parenting & Child Development",
    description: "Evidence-based guidance for nurturing healthy child development from infancy through adolescence.",
    category: "Personal Life",
    icon: "👨‍👩‍👧‍👦",
    url: "/parenting-child-development/app",
    popular: true,
    color: "bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800",
    iconColor: "text-pink-600 dark:text-pink-400",
    template: createTemplateWithSyncedResources(parentingChildDevelopmentTemplate)
  },
  
  {
    id: "budget-planning",
    name: "Budget Planning & Financial Management",
    description: "Master your finances with comprehensive budgeting, debt management, and savings strategies.",
    category: "Personal Life",
    icon: "💰",
    url: "/budget-planning/app",
    popular: true,
    color: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    template: createTemplateWithSyncedResources(budgetPlanningTemplate)
  },
  {
    id: "personal-finance-investment",
    name: "Personal Finance & Investment",
    description: "Build wealth through strategic financial planning, budgeting, and smart investment strategies.",
    category: "Personal Finance",
    icon: "💰",
    url: "/personal-finance-investment/app",
    popular: true,
    color: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800",
    iconColor: "text-green-600 dark:text-green-400",
    template: createTemplateWithSyncedResources(personalFinanceInvestmentTemplate)
  },
  {
    id: "productivity-system",
    name: "Productivity System & Time Management",
    description: "Maximize your efficiency with proven productivity methods, task management, and time blocking strategies.",
    category: "Productivity",
    icon: "⚡",
    url: "/productivity-system/app",
    popular: true,
    color: "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    template: createTemplateWithSyncedResources(productivitySystemTemplate)
  },
  {
    id: "remote-work-productivity",
    name: "Remote Work & Productivity",
    description: "Optimize your remote work setup and maximize productivity in distributed work environments.",
    category: "Productivity",
    icon: "🏠",
    url: "/remote-work-productivity/app",
    popular: true,
    color: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800",
    iconColor: "text-purple-600 dark:text-purple-400",
    template: createTemplateWithSyncedResources(remoteWorkProductivityTemplate)
  },

  // Career & Business Templates
  {
    id: "job-search",
    name: "Job Search Strategy",
    description: "Strategic approach to landing your dream position with expert guidance and actionable steps.",
    category: "Career & Business",
    icon: "💼",
    url: "/job-search/app",
    color: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800",
    iconColor: "text-purple-600 dark:text-purple-400",
    template: createTemplateWithSyncedResources(jobSearchTemplate)
  },
  {
    id: "freelance-gig-economy",
    name: "Freelance & Gig Economy Success",
    description: "Build a thriving freelance business with client acquisition, pricing strategies, and sustainable growth.",
    category: "Career & Business",
    icon: "💼",
    url: "/freelance-gig-economy/app",
    popular: true,
    color: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800",
    iconColor: "text-purple-600 dark:text-purple-400",
    template: createTemplateWithSyncedResources(freelanceGigEconomyTemplate)
  },
  {
    id: "business-launch",
    name: "Business Launch",
    description: "Launch your business with market research, business planning, and launch checklists.",
    category: "Career & Business",
    icon: "🚀",
    url: "/business-launch/app",
    color: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800",
    iconColor: "text-orange-600 dark:text-orange-400",
    template: createTemplateWithSyncedResources(businessLaunchTemplate)
  },
  {
    id: "digital-marketing-seo",
    name: "Digital Marketing & SEO",
    description: "Master digital marketing strategies and search engine optimization to grow your online presence.",
    category: "Career & Business",
    icon: "📈",
    url: "/digital-marketing-seo/app",
    popular: true,
    color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
    iconColor: "text-blue-600 dark:text-blue-400",
    template: createTemplateWithSyncedResources(digitalMarketingSEOTemplate)
  },
  {
    id: "career-change-transition",
    name: "Career Change & Transition",
    description: "Navigate career transitions successfully with strategic planning and skill development.",
    category: "Career & Business",
    icon: "🔄",
    url: "/career-change-transition/app",
    popular: true,
    color: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800",
    iconColor: "text-orange-600 dark:text-orange-400",
    template: createTemplateWithSyncedResources(careerChangeTransitionTemplate)
  },
  
  // Education Templates
  {
    id: "college-planning",
    name: "College Planning",
    description: "Navigate college applications, track deadlines, and plan your academic future.",
    category: "Education",
    icon: "🎓",
    url: "/college-planning/app",
    popular: true,
    color: "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    template: createTemplateWithSyncedResources(collegePlanningTemplate)
  },
  {
    id: "academic-research",
    name: "Academic Research",
    description: "Organize research projects, track sources, and manage academic workflows.",
    category: "Education",
    icon: "📚",
    url: "/academic-research/app",
    color: "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    template: createTemplateWithSyncedResources(academicResearchTemplate)
  },
  {
    id: "language-learning-cultural-immersion",
    name: "Language Learning & Cultural Immersion",
    description: "Master new languages through immersive cultural experiences and comprehensive learning strategies.",
    category: "Education",
    icon: "🌍",
    url: "/language-learning-cultural-immersion/app",
    popular: true,
    color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
    iconColor: "text-blue-600 dark:text-blue-400",
    template: createTemplateWithSyncedResources(languageLearningCulturalImmersionTemplate)
  },
  
  // Event & Entertainment Templates
  {
    id: "event-planning",
    name: "Event Planning",
    description: "Plan memorable events from conception to execution with comprehensive coordination tools.",
    category: "Personal Life",
    icon: "🎉",
    url: "/event-planning/app",
    popular: true,
    color: "bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800",
    iconColor: "text-violet-600 dark:text-violet-400",
    template: createTemplateWithSyncedResources(eventPlanningTemplate)
  },
  
  // Travel & Adventure Templates
  {
    id: "travel-planning",
    name: "Travel Planning",
    description: "Plan amazing trips with itinerary building, budget tracking, and travel coordination tools.",
    category: "Personal Life",
    icon: "✈️",
    url: "/travel-planning/app",
    popular: true,
    color: "bg-sky-50 dark:bg-sky-950/20 border-sky-200 dark:border-sky-800",
    iconColor: "text-sky-600 dark:text-sky-400",
    template: createTemplateWithSyncedResources(travelPlanningTemplate)
  },
  {
    id: "travel-planning-adventure",
    name: "Travel Planning & Adventure Design",
    description: "Design extraordinary travel experiences with adventure planning, cultural immersion, and memorable journey creation.",
    category: "Travel & Adventure",
    icon: "🗺️",
    url: "/travel-planning-adventure/app",
    popular: true,
    color: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    template: createTemplateWithSyncedResources(travelPlanningAdventureTemplate)
  },
  
  // Health & Nutrition Templates
  {
    id: "meal-planning",
    name: "Meal Planning",
    description: "Plan healthy, budget-friendly meals with grocery lists, recipe organization, and nutrition tracking.",
    category: "Health & Wellness",
    icon: "🍽️",
    url: "/meal-planning/app",
    popular: true,
    color: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    template: createTemplateWithSyncedResources(mealPlanningTemplate)
  },
  
  // Health & Wellness Templates
  {
    id: "fitness-journey",
    name: "Fitness Journey",
    description: "Track workouts, nutrition, and progress toward your health and fitness goals.",
    category: "Health & Wellness",
    icon: "💪",
    url: "/fitness-journey/app",
    popular: true,
    color: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800",
    iconColor: "text-red-600 dark:text-red-400",
    template: createTemplateWithSyncedResources(fitnessJourneyTemplate)
  },
  {
    id: "fitness-athletic-training",
    name: "Fitness & Athletic Training",
    description: "Comprehensive fitness planning with workout design, nutrition optimization, and performance tracking.",
    category: "Health & Wellness",
    icon: "🏋️",
    url: "/fitness-athletic-training/app",
    popular: true,
    color: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800",
    iconColor: "text-orange-600 dark:text-orange-400",
    template: createTemplateWithSyncedResources(fitnessAthleticTrainingTemplate)
  },
  {
    id: "personal-health-wellness",
    name: "Personal Health & Wellness",
    description: "Optimize your overall health and wellness through comprehensive lifestyle design and evidence-based strategies.",
    category: "Health & Wellness",
    icon: "🌟",
    url: "/personal-health-wellness/app",
    popular: true,
    featured: true,
    color: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800",
    iconColor: "text-green-600 dark:text-green-400",
    template: createTemplateWithSyncedResources(personalHealthWellnessTemplate)
  },
  
  // Life Transitions Templates
  {
    id: "moving-relocation",
    name: "Moving & Relocation",
    description: "Organize your move with checklists, timeline planning, and coordination tools for a stress-free relocation.",
    category: "Personal Life",
    icon: "📦",
    url: "/moving-relocation/app",
    popular: true,
    color: "bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-800",
    iconColor: "text-teal-600 dark:text-teal-400",
    template: createTemplateWithSyncedResources(movingRelocationTemplate)
  },
  {
    id: "home-renovation-interior-design",
    name: "Home Renovation & Interior Design",
    description: "Plan and execute home renovations with design guidance, budget management, and project coordination.",
    category: "Personal Life",
    icon: "🏠",
    url: "/home-renovation-interior-design/app",
    popular: true,
    featured: true,
    color: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800",
    iconColor: "text-amber-600 dark:text-amber-400",
    template: createTemplateWithSyncedResources(homeRenovationInteriorDesignTemplate)
  },
  
  // Personal Development Templates
  {
    id: "personal-development-coaching",
    name: "Personal Development & Life Coaching",
    description: "Transform your life through structured personal development and coaching strategies.",
    category: "Personal Development",
    icon: "🌱",
    url: "/personal-development-coaching/app",
    popular: true,
    color: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800",
    iconColor: "text-green-600 dark:text-green-400",
    template: createTemplateWithSyncedResources(personalDevelopmentCoachingTemplate)
  },
  {
    id: "retirement-lifestyle-planning",
    name: "Retirement & Lifestyle Planning",
    description: "Plan for a fulfilling retirement that aligns with your values and desired lifestyle.",
    category: "Life Transitions", 
    icon: "🌅",
    url: "/retirement-lifestyle-planning/app",
    popular: true,
    color: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800",
    iconColor: "text-amber-600 dark:text-amber-400",
    template: createTemplateWithSyncedResources(retirementLifestylePlanningTemplate)
  },

  // Lifestyle & Environment Templates
  {
    id: "sustainable-living",
    name: "Sustainable Living & Environmental Impact",
    description: "Adopt sustainable living practices and reduce your environmental footprint through conscious choices.",
    category: "Lifestyle & Environment",
    icon: "🌱",
    url: "/sustainable-living/app",
    popular: true,
    featured: true,
    color: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    template: createTemplateWithSyncedResources(sustainableLivingTemplate)
  }
];

// Registry helper functions
export const getTemplateById = (id: string): TemplateRegistryEntry | undefined => {
  return templateRegistry.find(template => template.id === id);
};

export const getTemplatesByCategory = (category: string): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.category === category);
};

export const getPopularTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.popular);
};

export const getFeaturedTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.featured);
};

export const getAvailableTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => !template.comingSoon);
};

export const getComingSoonTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.comingSoon);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(templateRegistry.map(template => template.category)));
};

// Search functionality
export const searchTemplates = (query: string): TemplateRegistryEntry[] => {
  const lowercaseQuery = query.toLowerCase();
  return templateRegistry.filter(template =>
    template.name.toLowerCase().includes(lowercaseQuery) ||
    template.description.toLowerCase().includes(lowercaseQuery) ||
    template.category.toLowerCase().includes(lowercaseQuery)
  );
};