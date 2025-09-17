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

// Blog registry for meal-planning template
export const manualBlogPosts: BlogPost[] = [
  {
    id: "meal-planning-system-busy-families-guide",
    slug: "meal-planning-system-busy-families-guide",
    title: "The Complete Meal Planning System That Actually Works for Busy Families",
    excerpt: "Stop wasting money on groceries and time on daily dinner decisions. This comprehensive system transforms chaotic meal planning into a smooth routine that saves hours and reduces stress.",
    content: `The Sunday evening panic is all too familiar. Standing in your kitchen, staring at an empty meal plan and a week of hungry family members ahead. The takeout menus beckon from the junk drawer while your grocery budget silently weeps. Sound familiar? The solution isn't buying more cookbooks or downloading another meal planning app—it's building a sustainable system that works with your real life, not against it.

This comprehensive guide provides a complete meal planning framework that busy families actually use successfully. Rather than unrealistic aspirations about elaborate meal prep, this system focuses on practical strategies that reduce decision fatigue, minimize waste, and create predictable routines that everyone can follow.

## Understanding Why Most Meal Planning Fails

Traditional meal planning advice assumes unlimited time, perfect execution, and family members who never change their preferences. Real families deal with soccer practice running late, unexpected work meetings, and the universal truth that children will suddenly hate foods they loved last week.

The most common mistake is planning meals in isolation without considering the broader context of family schedules, cooking skill levels, and realistic preparation time. A meal plan that looks perfect on paper becomes a source of stress when it doesn't account for Tuesday's late piano lesson or Thursday's parent-teacher conference.

Successful meal planning requires understanding the difference between aspirational cooking and practical nourishment. The goal isn't Instagram-worthy meals every night—it's consistently feeding your family well without daily stress or excessive cost. This shift in perspective makes the difference between sustainable systems and abandoned Pinterest boards.`,
    author: "Templata",
    publishedAt: "2024-03-15",
    readTime: "10 min",
    category: "Health & Nutrition",
    tags: ["meal-planning", "nutrition", "family-meals"],
    type: "guide",
    difficulty: "beginner"
  }
];