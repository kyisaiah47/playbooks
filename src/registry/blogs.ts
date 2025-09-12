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
  type?: 'guide' | 'article' | 'checklist' | 'tool'; // Resource type
  difficulty?: 'beginner' | 'intermediate' | 'expert'; // Difficulty level
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
  relatedTemplates?: string[]; // IDs of related templates
  relatedPosts?: string[]; // IDs of related blog posts
}

// Blog registry with all published posts
export const blogRegistry: BlogPost[] = [
  {
    id: "top-10-wedding-mistakes",
    slug: "top-10-wedding-mistakes",
    title: "Top 10 Wedding Planning Mistakes That Could Ruin Your Big Day",
    excerpt: "Avoid these common wedding planning pitfalls with expert insights on budgeting, vendor selection, and timeline management for a stress-free celebration.",
    content: `Planning a wedding should be one of the most exciting times in your life, but it's easy to get overwhelmed and make costly mistakes. After working with thousands of couples over the years, I've seen the same pitfalls repeatedly turn dream weddings into stressful nightmares.

Here are the top 10 wedding planning mistakes that could seriously impact your big day, along with practical advice to help you avoid them.

## 1. Not Setting (or Sticking to) Your Budget

The biggest mistake I see couples make is either skipping the budgeting process entirely or abandoning their budget halfway through planning when they fall in love with expensive options that are "just a little over budget."

When wedding costs spiral out of control, it leads to debt, stress, and difficult conversations with family members who might be contributing financially. I've seen couples go into their marriage already $30,000+ in debt from their wedding day alone.

Instead, create a realistic budget before you start planning anything and track every single expense. I recommend using a detailed spreadsheet or budgeting app to monitor spending across all categories. Most importantly, build in a 10-15% buffer for unexpected costs—trust me, they always come up.

Remember to prioritize your absolute "must-haves" and be willing to compromise on less important elements. If photography is your priority, maybe you can save money with a simpler cake or fewer floral arrangements.

## 2. Booking Your Venue Too Late

Many couples spend months "shopping around" for venues, hoping to find better deals or waiting for their perfect venue to have an opening. This approach backfires more often than not.

Popular venues, especially for Saturday weddings, book up 12-18 months in advance. When you wait too long, you're forced to settle for second-choice venues or pay premium rates for last-minute bookings.

Start your venue search early and be prepared to book quickly when you find one you love. Also consider Friday or Sunday weddings—you'll have better availability and often significant cost savings.

## 3. Underestimating Your Guest Count

I can't tell you how many couples create an initial guest list of 75 people that somehow grows to 150 by the time they send invitations. This happens because couples forget to account for plus-ones, children, and family pressure to invite distant relatives.

When your guest count balloons unexpectedly, it impacts everything—catering costs, seating arrangements, venue capacity, and favor expenses. What seemed like small additions quickly become major budget overruns.

Create your guest list early and be brutally realistic about who you truly want to celebrate with. Remember that you can expect about 15-20% of invited guests to decline, but don't count on this when planning your venue size and catering numbers.

## 4. Skipping Wedding Insurance

Many couples assume nothing will go wrong and skip wedding insurance to save a few hundred dollars. This is penny-wise and pound-foolish.

Wedding insurance protects you against vendor bankruptcy, extreme weather, illness, military deployment, and other unforeseen circumstances that could force you to postpone or cancel. Without it, you have no financial protection if disaster strikes.

Most wedding insurance policies cost between $100-300 and can potentially save you thousands. It covers vendor issues, postponement costs, and liability—giving you peace of mind that your investment is protected.

## 5. Not Reading Vendor Contracts Carefully

In the excitement of booking vendors, many couples quickly sign contracts without fully understanding the terms. This leads to unpleasant surprises later when they discover hidden fees, strict cancellation policies, or services that aren't actually included.

I've seen couples get stuck with underperforming vendors because they didn't understand the cancellation terms, or face unexpected charges because they didn't read the fine print about overtime rates or setup fees.

Read every contract thoroughly before signing. Make sure you understand payment schedules, cancellation policies, what services are included, and any additional fees. Don't be afraid to negotiate terms or ask for clarifications in writing.

## 6. Leaving Everything Until the Last Minute

Wedding planning feels like it takes forever when you're in the middle of it, so many couples think they have more time than they actually do. This procrastination leads to limited vendor availability, rushed decisions, increased stress, and higher costs.

The best vendors book up months in advance. When you wait until the last minute, you're left choosing from whoever is still available, not necessarily who you actually want.

Create a detailed timeline and stick to it. Major vendors like photographers, caterers, and florists should be booked 6-12 months ahead. Having a clear timeline keeps you on track and reduces last-minute panic.

## 7. Not Having a Day-of Coordinator

Many couples assume they or their family members can manage wedding day logistics while also enjoying the celebration. This is unrealistic and unfair to your loved ones.

Without proper coordination, important details get forgotten, timelines fall apart, and family members end up working instead of celebrating with you. I've seen brides frantically trying to coordinate vendors while getting ready, and grooms dealing with venue issues during cocktail hour.

Either hire a professional day-of coordinator or designate a reliable, non-family friend to handle logistics. This person should have a detailed timeline, all vendor contact information, and authority to make decisions so you can actually enjoy your wedding day.

## 8. Ignoring the Weather

Outdoor weddings are beautiful, but many couples fail to plan for weather contingencies. They assume good weather and don't consider seasonal factors that could impact their celebration.

I've witnessed ceremonies moved indoors at the last minute, guests shivering in unexpected cold, and receptions cut short by sudden storms. Without proper planning, weather can ruin months of careful preparation.

Always have a weather backup plan, regardless of the season. Consider renting heaters for cool weather, fans for hot days, or tents for potential rain. Check historical weather patterns for your wedding date and location.

## 9. Forgetting About Photography Timeline

Many couples don't allocate enough time for photos or schedule them during harsh lighting conditions. This results in rushed photo sessions, missed shots, and less-than-ideal lighting in photos you'll treasure forever.

Work closely with your photographer to create a detailed timeline that allows plenty of time for all the shots you want. Consider doing a "first look" before the ceremony to maximize photo time. Schedule outdoor portraits during the golden hour (the hour before sunset) when lighting is most flattering.

## 10. Trying to Please Everyone

The biggest source of wedding stress is often trying to make everyone happy. When couples make decisions based on what others want instead of their own preferences, they end up with a wedding that doesn't reflect their personality, inflated costs, and unnecessary stress.

Remember that this is YOUR day. While it's important to listen to input from family and friends gracefully, ultimately the decisions should reflect what you and your partner want. A wedding that authentically represents your relationship will be far more meaningful than one designed by committee.

## Planning Your Perfect Day

Avoiding these common mistakes comes down to early planning, clear communication, and staying true to your vision. Take time to educate yourselves about the process, set realistic expectations, and don't be afraid to ask for help when you need it.

Your wedding day should be a celebration of your love story—not a source of stress or debt. With thoughtful planning and the right resources, you can have the wedding of your dreams without the nightmare scenarios I've described.

Ready to start planning? Take it one step at a time, prioritize what matters most to you, and enjoy the journey to your special day.`,
    author: "Templata",
    publishedAt: "2025-09-12",
    readTime: "8 min read",
    category: "Wedding Planning",
    type: "article",
    difficulty: "intermediate", 
    featured: true,
    tags: ["wedding planning", "wedding mistakes", "wedding budget", "wedding tips"],
    relatedTemplates: ["wedding-planning"],
    relatedPosts: ["wedding-budget-breakdown", "vendor-contract-checklist", "wedding-timeline-template"],
    seo: {
      metaTitle: "Top 10 Wedding Planning Mistakes to Avoid - Expert Guide",
      metaDescription: "Avoid costly wedding planning mistakes with our expert guide. Learn about budgeting, vendor selection, and timeline management for a stress-free celebration.",
      ogImage: "/blog/wedding-mistakes-og.jpg"
    }
  },
  
  // Wedding resource-based blog posts
  {
    id: "wedding-budget-breakdown",
    slug: "wedding-budget-breakdown",
    title: "Ultimate Wedding Budget Breakdown by Category",
    excerpt: "Detailed percentage breakdown of where wedding money typically goes, plus tips to optimize each category",
    content: "Comprehensive budget allocation guide with average percentages: Venue (40-50%), Photography (10-15%), Catering (25-35%), Music (8-12%), Flowers (6-10%), Attire (4-8%), Transportation (2-5%), Favors (1-3%). Includes regional variations and money-saving alternatives for each category.",
    author: "Templata",
    publishedAt: "2025-09-10",
    readTime: "8 min read",
    category: "Wedding Planning",
    type: "guide",
    difficulty: "beginner",
    featured: true,
    tags: ["budget", "planning", "finance"],
    relatedTemplates: ["wedding-planning"],
    relatedPosts: ["top-10-wedding-mistakes", "hidden-wedding-costs", "wedding-cost-cutting-tips"]
  },
  
  {
    id: "hidden-wedding-costs",
    slug: "hidden-wedding-costs",
    title: "25 Hidden Wedding Costs That Surprise Every Couple",
    excerpt: "The unexpected expenses that blow budgets - from vendor meals to overtime fees",
    content: "Complete list of surprise costs including: gratuities, vendor meals, alterations, marriage license, wedding insurance, overtime charges, delivery fees, setup/breakdown costs, taxes, and more. Includes cost ranges and prevention strategies.",
    author: "Templata",
    publishedAt: "2025-09-08",
    readTime: "10 min read",
    category: "Wedding Planning",
    type: "article",
    difficulty: "intermediate",
    tags: ["budget", "planning", "tips"],
    relatedTemplates: ["wedding-planning"],
    relatedPosts: ["wedding-budget-breakdown", "wedding-cost-cutting-tips"]
  },

  {
    id: "wedding-cost-cutting-tips",
    slug: "wedding-cost-cutting-tips",
    title: "50 Ways to Cut Wedding Costs Without Sacrificing Style",
    excerpt: "Smart strategies to reduce expenses while maintaining the wedding of your dreams",
    content: "Strategic cost-cutting ideas organized by category: venue alternatives, catering hacks, DIY opportunities, timing strategies, and vendor negotiations. Includes potential savings amounts and implementation difficulty.",
    author: "Templata",
    publishedAt: "2025-09-06",
    readTime: "12 min read",
    category: "Wedding Planning",
    type: "guide",
    difficulty: "intermediate",
    tags: ["budget", "savings", "DIY"],
    relatedTemplates: ["wedding-planning"],
    relatedPosts: ["wedding-budget-breakdown", "hidden-wedding-costs"]
  },

  {
    id: "vendor-contract-checklist",
    slug: "vendor-contract-checklist",
    title: "Wedding Vendor Contract Review Checklist",
    excerpt: "Essential contract terms to review before signing with any wedding vendor",
    content: "Comprehensive checklist covering payment terms, cancellation policies, force majeure clauses, service details, backup plans, overtime rates, and liability coverage. Includes red flags to watch for.",
    author: "Templata",
    publishedAt: "2025-09-04",
    readTime: "6 min read",
    category: "Wedding Planning",
    type: "checklist",
    difficulty: "expert",
    tags: ["vendors", "contracts", "legal"],
    relatedTemplates: ["wedding-planning"],
    relatedPosts: ["top-10-wedding-mistakes", "guest-accommodation-guide"]
  },

  {
    id: "wedding-timeline-template",
    slug: "wedding-timeline-template",
    title: "Complete Wedding Day Timeline Template",
    excerpt: "Hour-by-hour timeline template to keep your wedding day running smoothly",
    content: "Detailed timeline starting 2 hours before ceremony through last dance, including vendor arrival times, photo opportunities, meal service, and buffer time for delays.",
    author: "Templata",
    publishedAt: "2025-09-02",
    readTime: "4 min read",
    category: "Wedding Planning",
    type: "tool",
    difficulty: "beginner",
    tags: ["timeline", "planning", "day-of"],
    relatedTemplates: ["wedding-planning"],
    relatedPosts: ["emergency-kit-checklist", "wedding-photography-guide"]
  },

  {
    id: "emergency-kit-checklist",
    slug: "emergency-kit-checklist",
    title: "Wedding Day Emergency Kit: 40 Must-Have Items",
    excerpt: "Essential items to handle any wedding day mishap with grace and style",
    content: "Complete emergency kit including fashion fixes, beauty touch-ups, comfort items, vendor communications, and guest accommodation essentials.",
    author: "Templata",
    publishedAt: "2025-08-30",
    readTime: "5 min read",
    category: "Wedding Planning",
    type: "checklist",
    difficulty: "beginner",
    tags: ["day-of", "preparation", "emergency"],
    relatedTemplates: ["wedding-planning"],
    relatedPosts: ["wedding-timeline-template", "guest-accommodation-guide"]
  },

  {
    id: "guest-accommodation-guide",
    slug: "guest-accommodation-guide",
    title: "Wedding Guest Accommodation Guide",
    excerpt: "How to help out-of-town guests feel welcomed and informed",
    content: "Strategies for guest comfort including hotel blocks, welcome bags, local recommendations, transportation options, and communication timeline.",
    author: "Templata",
    publishedAt: "2025-08-28",
    readTime: "7 min read",
    category: "Wedding Planning",
    type: "guide",
    difficulty: "intermediate",
    tags: ["guests", "hospitality", "planning"],
    relatedTemplates: ["wedding-planning"],
    relatedPosts: ["emergency-kit-checklist", "wedding-photography-guide"]
  },

  {
    id: "wedding-photography-guide",
    slug: "wedding-photography-guide",
    title: "Wedding Photography: What to Expect and How to Prepare",
    excerpt: "Maximize your wedding photos with preparation and communication strategies",
    content: "Guide covering photography styles, shot lists, timeline planning, family photo organization, and working effectively with your photographer.",
    author: "Templata",
    publishedAt: "2025-08-26",
    readTime: "9 min read",
    category: "Wedding Planning",
    type: "guide",
    difficulty: "intermediate",
    tags: ["photography", "planning", "memories"],
    relatedTemplates: ["wedding-planning"],
    relatedPosts: ["wedding-timeline-template", "guest-accommodation-guide"]
  }
];

// Blog registry helper functions
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogRegistry.find(post => post.id === id);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogRegistry.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogRegistry.filter(post => post.category === category);
};

export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogRegistry.filter(post => post.featured);
};

export const getRelatedBlogPosts = (postId: string, limit: number = 3): BlogPost[] => {
  const post = getBlogPostById(postId);
  if (!post || !post.relatedPosts) return [];
  
  return post.relatedPosts
    .map(id => getBlogPostById(id))
    .filter(Boolean)
    .slice(0, limit) as BlogPost[];
};

export const getBlogPostsByTemplate = (templateId: string): BlogPost[] => {
  return blogRegistry.filter(post => 
    post.relatedTemplates?.includes(templateId)
  );
};

export const getAllBlogCategories = (): string[] => {
  return Array.from(new Set(blogRegistry.map(post => post.category)));
};

export const getAllBlogTags = (): string[] => {
  const allTags = blogRegistry.flatMap(post => post.tags);
  return Array.from(new Set(allTags));
};

// Search functionality
export const searchBlogPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogRegistry.filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    post.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Get recent posts
export const getRecentBlogPosts = (limit: number = 5): BlogPost[] => {
  return blogRegistry
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

// Get posts by type
export const getBlogPostsByType = (type: 'guide' | 'article' | 'checklist' | 'tool'): BlogPost[] => {
  return blogRegistry.filter(post => post.type === type);
};

// Get posts by difficulty
export const getBlogPostsByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'expert'): BlogPost[] => {
  return blogRegistry.filter(post => post.difficulty === difficulty);
};

// Get posts by type and difficulty
export const getBlogPostsByTypeAndDifficulty = (
  type: 'guide' | 'article' | 'checklist' | 'tool', 
  difficulty: 'beginner' | 'intermediate' | 'expert'
): BlogPost[] => {
  return blogRegistry.filter(post => post.type === type && post.difficulty === difficulty);
};

// Get resource-style posts (guides, checklists, tools) vs articles
export const getResourcePosts = (): BlogPost[] => {
  return blogRegistry.filter(post => ['guide', 'checklist', 'tool'].includes(post.type || ''));
};

export const getArticlePosts = (): BlogPost[] => {
  return blogRegistry.filter(post => post.type === 'article' || !post.type);
};