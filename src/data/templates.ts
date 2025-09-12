import { GuidanceTemplate } from '@/types/template';

// Abundant wedding planning guidance with extensive prompts and resources
export const weddingTemplate: GuidanceTemplate = {
  id: 'wedding-planning',
  title: 'Wedding Planning Guide',
  description: 'Complete guidance for planning your dream wedding with expert insights and reflection prompts',
  category: 'life-events',
  icon: '💒',
  sections: [
    {
      id: 'budget-finance',
      title: 'Budget & Financial Planning',
      description: 'Establish your wedding budget and financial priorities',
      order: 1,
      reflectionPrompts: [
        {
          id: 'total-budget',
          prompt: "What's your absolute maximum budget, including a 10-20% buffer for unexpected costs?",
          category: 'planning',
          helpText: 'Most couples go 20% over their initial budget. Factor in taxes, tips, and last-minute additions.',
          relatedResources: ['wedding-budget-breakdown', 'hidden-wedding-costs']
        },
        {
          id: 'budget-priorities',
          prompt: 'Which three wedding elements are completely non-negotiable for you?',
          category: 'decision',
          helpText: 'Knowing your priorities helps allocate budget effectively. Common priorities: venue, photography, food.'
        },
        {
          id: 'cost-cutting',
          prompt: 'What wedding traditions or expectations are you willing to skip to save money?',
          category: 'consideration',
          helpText: 'Consider DIY flowers, off-season dates, buffet vs plated dinner, smaller guest list.',
          relatedResources: ['wedding-cost-cutting-tips']
        },
        {
          id: 'family-contributions',
          prompt: 'How much are family members contributing, and what expectations come with their money?',
          category: 'planning',
          helpText: 'Financial contributions often come with opinions. Set boundaries early.'
        },
        {
          id: 'payment-timeline',
          prompt: 'When do you need to have the full budget available? What\'s your savings plan?',
          category: 'planning',
          helpText: 'Most vendors require 50% deposit to book, final payment 1-2 weeks before wedding.'
        },
        {
          id: 'emergency-fund',
          prompt: 'What\'s your backup plan if you go over budget? What could you cut last minute?',
          category: 'consideration',
          helpText: 'Have a "nice to have" vs "must have" list ready for tough budget decisions.'
        }
      ]
    },
    {
      id: 'venue-selection',
      title: 'Venue Selection & Logistics',
      description: 'Find and evaluate the perfect wedding venue',
      order: 2,
      reflectionPrompts: [
        {
          id: 'venue-style',
          prompt: 'Describe your dream wedding atmosphere in three words',
          category: 'consideration',
          helpText: 'Examples: rustic elegant, modern minimalist, garden romantic, industrial chic'
        },
        {
          id: 'guest-count',
          prompt: 'What\'s your realistic guest count (not just your dream list)?',
          category: 'planning',
          helpText: 'Be honest about who you\'ll actually invite vs. your initial list. Venues have firm capacity limits.'
        },
        {
          id: 'season-flexibility',
          prompt: 'Are you flexible on season/day of week to save money? What are your non-negotiable dates?',
          category: 'planning',
          helpText: 'Off-season and weekday weddings can save 20-40%. Avoid holiday weekends.'
        },
        {
          id: 'indoor-outdoor',
          prompt: 'Do you prefer indoor, outdoor, or flexible spaces? What\'s your weather backup plan?',
          category: 'consideration',
          helpText: 'Outdoor venues need weather contingencies. Indoor venues offer more control.'
        },
        {
          id: 'venue-logistics',
          prompt: 'How important is convenience for guests? Do you need hotel blocks nearby?',
          category: 'planning',
          helpText: 'Consider guest travel, parking, accessibility, and accommodation options.'
        },
        {
          id: 'venue-restrictions',
          prompt: 'What venue restrictions could be dealbreakers? (music curfew, vendor lists, decorating rules)',
          category: 'research',
          helpText: 'Ask about noise restrictions, preferred vendor lists, decoration limitations, cleanup requirements.'
        }
      ]
    },
    {
      id: 'guest-management',
      title: 'Guest List & Invitations',
      description: 'Navigate guest list decisions and invitation logistics',
      order: 3,
      reflectionPrompts: [
        {
          id: 'guest-categories',
          prompt: 'Who are your must-invite guests vs. nice-to-invite guests?',
          category: 'decision',
          helpText: 'Create tiers: immediate family, close friends, extended family, acquaintances, plus-ones.'
        },
        {
          id: 'family-politics',
          prompt: 'What family dynamics or relationship politics need to be considered for seating?',
          category: 'consideration',
          helpText: 'Document divorced parents, family feuds, awkward exes, or other sensitive situations.'
        },
        {
          id: 'plus-one-policy',
          prompt: 'What\'s your plus-one policy? Who gets a plus-one and who doesn\'t?',
          category: 'decision',
          helpText: 'Common rules: married couples, long-term partners, bridal party members, out-of-town guests.'
        },
        {
          id: 'children-policy',
          prompt: 'Are children invited? All children or just close family? What about childcare?',
          category: 'decision',
          helpText: 'Adult-only weddings save money but may reduce attendance. Consider providing childcare.'
        },
        {
          id: 'rsvp-tracking',
          prompt: 'How will you track RSVPs and follow up with non-responders?',
          category: 'planning',
          helpText: 'Create a system for dietary restrictions, song requests, and special accommodations.'
        },
        {
          id: 'difficult-conversations',
          prompt: 'How will you handle people who assume they\'re invited but aren\'t on your list?',
          category: 'consideration',
          helpText: 'Prepare kind but firm responses. Consider hosting a casual post-wedding celebration for broader circles.'
        }
      ]
    },
    {
      id: 'vendor-selection',
      title: 'Vendor Research & Hiring',
      description: 'Find, evaluate, and book the right wedding professionals',
      order: 4,
      reflectionPrompts: [
        {
          id: 'vendor-priorities',
          prompt: 'Which vendors are most important to you? (photographer, caterer, band/DJ, florist, etc.)',
          category: 'decision',
          helpText: 'Book priority vendors first. Popular vendors book 12-18 months in advance.'
        },
        {
          id: 'photography-style',
          prompt: 'What photography style do you want? How many hours of coverage?',
          category: 'research',
          helpText: 'Consider: photojournalistic, posed traditional, fine art, documentary. Factor in getting ready, ceremony, reception.'
        },
        {
          id: 'catering-preferences',
          prompt: 'What type of meal service fits your style and budget? Any dietary restrictions to consider?',
          category: 'planning',
          helpText: 'Options: plated dinner, buffet, family style, cocktail reception. Consider vegetarian/vegan/allergy needs.'
        },
        {
          id: 'music-entertainment',
          prompt: 'Do you want a DJ or live band? What\'s your must-play and do-not-play list?',
          category: 'consideration',
          helpText: 'Live bands create atmosphere but are pricier. DJs offer more variety and reliability.'
        },
        {
          id: 'vendor-questions',
          prompt: 'What questions will you ask each vendor to evaluate fit and professionalism?',
          category: 'research',
          helpText: 'Ask about experience, backup plans, payment terms, cancellation policies, and references.'
        },
        {
          id: 'contract-review',
          prompt: 'What contract terms are you looking out for? Who will review vendor contracts?',
          category: 'planning',
          helpText: 'Review cancellation terms, payment schedules, overtime rates, and what happens if vendor cancels.'
        }
      ]
    },
    {
      id: 'ceremony-planning',
      title: 'Ceremony Design & Flow',
      description: 'Plan your ceremony structure, vows, and meaningful moments',
      order: 5,
      reflectionPrompts: [
        {
          id: 'ceremony-length',
          prompt: 'How long do you want your ceremony to be? What elements are essential?',
          category: 'planning',
          helpText: 'Typical ceremonies are 20-30 minutes. Consider processional, readings, vows, rings, kiss, recessional.'
        },
        {
          id: 'vow-style',
          prompt: 'Will you write personal vows or use traditional ones? Public or private?',
          category: 'decision',
          helpText: 'Personal vows add intimacy but can be nerve-wracking. Consider length limits and having backup copies.'
        },
        {
          id: 'cultural-traditions',
          prompt: 'What cultural, religious, or family traditions do you want to include?',
          category: 'consideration',
          helpText: 'Consider unity ceremonies, cultural rituals, family customs, or modern alternatives like handfasting.'
        },
        {
          id: 'ceremony-music',
          prompt: 'What songs will you use for processional, interlude, and recessional?',
          category: 'planning',
          helpText: 'Choose music that reflects your style. Consider acoustic versions for outdoor ceremonies.'
        },
        {
          id: 'ceremony-roles',
          prompt: 'Who will officiate? What roles will family and friends play in the ceremony?',
          category: 'decision',
          helpText: 'Options: religious leader, friend, family member, professional officiant. Consider readings, ring bearer, flower girl.'
        },
        {
          id: 'ceremony-logistics',
          prompt: 'What are the practical considerations for your ceremony space?',
          category: 'planning',
          helpText: 'Consider seating arrangements, sound system, lighting, weather backup, accessibility for guests.'
        }
      ]
    },
    {
      id: 'reception-planning',
      title: 'Reception Flow & Entertainment',
      description: 'Design your reception timeline and guest experience',
      order: 6,
      reflectionPrompts: [
        {
          id: 'reception-style',
          prompt: 'What kind of reception atmosphere do you want? Formal dinner party or casual celebration?',
          category: 'consideration',
          helpText: 'Consider seated dinner vs. cocktail style, dancing vs. mingling, formal toasts vs. casual speeches.'
        },
        {
          id: 'timeline-planning',
          prompt: 'What\'s your ideal reception timeline from cocktails to last dance?',
          category: 'planning',
          helpText: 'Typical flow: cocktails (1 hour), dinner (1.5 hours), dancing (3+ hours). Plan for photos and mingling.'
        },
        {
          id: 'special-moments',
          prompt: 'What special moments do you want? First dance, parent dances, bouquet toss, cake cutting?',
          category: 'decision',
          helpText: 'Choose traditions that feel authentic to you. Skip what doesn\'t resonate.'
        },
        {
          id: 'guest-entertainment',
          prompt: 'How will you keep guests engaged throughout the reception?',
          category: 'planning',
          helpText: 'Consider lawn games, photo booth, signature cocktails, interactive elements, or surprise performances.'
        },
        {
          id: 'dietary-accommodations',
          prompt: 'How will you handle dietary restrictions and food allergies?',
          category: 'planning',
          helpText: 'Collect dietary needs with RSVPs. Ensure vegetarian, vegan, gluten-free, and allergy-safe options.'
        },
        {
          id: 'bar-service',
          prompt: 'What type of bar service fits your style and budget?',
          category: 'decision',
          helpText: 'Options: open bar, cash bar, wine/beer only, signature cocktails. Consider liability and guest preferences.'
        }
      ]
    },
    {
      id: 'styling-decor',
      title: 'Styling, Decor & Flowers',
      description: 'Create your wedding aesthetic and visual design',
      order: 7,
      reflectionPrompts: [
        {
          id: 'color-palette',
          prompt: 'What colors represent your relationship and desired atmosphere?',
          category: 'consideration',
          helpText: 'Choose 2-3 main colors plus neutrals. Consider season, venue colors, and photography impact.'
        },
        {
          id: 'floral-priorities',
          prompt: 'Where do you want to invest in flowers vs. where can you cut costs?',
          category: 'planning',
          helpText: 'Splurge on bridal bouquet and ceremony arrangements. Save on centerpieces with candles or greenery.'
        },
        {
          id: 'diy-decisions',
          prompt: 'What decor elements could you DIY vs. what should be left to professionals?',
          category: 'decision',
          helpText: 'Good DIY: favors, signage, simple centerpieces. Leave to pros: complex florals, lighting, drapery.'
        },
        {
          id: 'centerpiece-style',
          prompt: 'What centerpiece style fits your budget and allows for conversation?',
          category: 'planning',
          helpText: 'Consider height (don\'t block conversation), style consistency, and repurposing ceremony flowers.'
        },
        {
          id: 'lighting-mood',
          prompt: 'How will lighting create the mood you want throughout the day?',
          category: 'consideration',
          helpText: 'Natural light for ceremony, warm ambient lighting for reception. Consider string lights, candles, uplighting.'
        },
        {
          id: 'personal-touches',
          prompt: 'What personal elements will make this wedding uniquely yours?',
          category: 'consideration',
          helpText: 'Consider family photos, meaningful objects, cultural elements, or nods to your relationship story.'
        }
      ]
    },
    {
      id: 'attire-beauty',
      title: 'Attire, Beauty & Getting Ready',
      description: 'Plan your wedding day look and preparation',
      order: 8,
      reflectionPrompts: [
        {
          id: 'dress-style',
          prompt: 'What dress style makes you feel most confident and beautiful?',
          category: 'decision',
          helpText: 'Consider venue, season, comfort for dancing, and alteration timeline. Start shopping 8+ months ahead.'
        },
        {
          id: 'beauty-timeline',
          prompt: 'What\'s your beauty preparation timeline leading up to the wedding?',
          category: 'planning',
          helpText: 'Schedule: hair/makeup trial 2-3 months before, final dress fitting 2-3 weeks before, beauty treatments.'
        },
        {
          id: 'getting-ready',
          prompt: 'Where will you get ready? Who will be with you during preparation?',
          category: 'planning',
          helpText: 'Consider space, lighting for photos, timeline, and who creates the energy you want while getting ready.'
        },
        {
          id: 'comfort-considerations',
          prompt: 'What comfort items will help you feel your best on wedding day?',
          category: 'planning',
          helpText: 'Consider comfortable shoes for dancing, touch-up makeup, snacks, robe for getting ready photos.'
        },
        {
          id: 'partner-coordination',
          prompt: 'How will you coordinate your look with your partner without spoiling surprises?',
          category: 'planning',
          helpText: 'Share color palettes, formality level, and style direction while maintaining some mystery.'
        },
        {
          id: 'weather-backup',
          prompt: 'What\'s your backup plan for hair/makeup if weather doesn\'t cooperate?',
          category: 'consideration',
          helpText: 'Consider humidity, rain, wind effects on styling. Have touch-up products and emergency kit ready.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'wedding-budget-breakdown',
      title: 'Ultimate Wedding Budget Breakdown by Category',
      type: 'guide',
      excerpt: 'Detailed percentage breakdown of where wedding money typically goes, plus tips to optimize each category',
      content: 'Comprehensive budget allocation guide with average percentages: Venue (40-50%), Photography (10-15%), Catering (25-35%), Music (8-12%), Flowers (6-10%), Attire (4-8%), Transportation (2-5%), Favors (1-3%). Includes regional variations and money-saving alternatives for each category.',
      tags: ['budget', 'planning', 'finance'],
      readTime: '8 min',
      difficulty: 'beginner',
      relatedBlogPost: 'wedding-budget-breakdown'
    },
    {
      id: 'hidden-wedding-costs',
      title: '25 Hidden Wedding Costs That Surprise Every Couple',
      type: 'article',
      excerpt: 'The unexpected expenses that blow budgets - from vendor meals to overtime fees',
      content: 'Complete list of surprise costs including: gratuities, vendor meals, alterations, marriage license, wedding insurance, overtime charges, delivery fees, setup/breakdown costs, taxes, and more. Includes cost ranges and prevention strategies.',
      tags: ['budget', 'planning', 'tips'],
      readTime: '10 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'hidden-wedding-costs'
    },
    {
      id: 'wedding-cost-cutting-tips',
      title: '50 Ways to Cut Wedding Costs Without Sacrificing Style',
      type: 'guide',
      excerpt: 'Smart strategies to reduce expenses while maintaining the wedding of your dreams',
      content: 'Strategic cost-cutting ideas organized by category: venue alternatives, catering hacks, DIY opportunities, timing strategies, and vendor negotiations. Includes potential savings amounts and implementation difficulty.',
      tags: ['budget', 'savings', 'DIY'],
      readTime: '12 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'wedding-cost-cutting-tips'
    },
    {
      id: 'vendor-contract-checklist',
      title: 'Wedding Vendor Contract Review Checklist',
      type: 'checklist',
      excerpt: 'Essential contract terms to review before signing with any wedding vendor',
      content: 'Comprehensive checklist covering payment terms, cancellation policies, force majeure clauses, service details, backup plans, overtime rates, and liability coverage. Includes red flags to watch for.',
      tags: ['vendors', 'contracts', 'legal'],
      readTime: '6 min',
      difficulty: 'expert',
      relatedBlogPost: 'vendor-contract-checklist'
    },
    {
      id: 'wedding-timeline-template',
      title: 'Complete Wedding Day Timeline Template',
      type: 'tool',
      excerpt: 'Hour-by-hour timeline template to keep your wedding day running smoothly',
      content: 'Detailed timeline starting 2 hours before ceremony through last dance, including vendor arrival times, photo opportunities, meal service, and buffer time for delays.',
      tags: ['timeline', 'planning', 'day-of'],
      readTime: '4 min',
      difficulty: 'beginner',
      relatedBlogPost: 'wedding-timeline-template'
    },
    {
      id: 'emergency-kit-checklist',
      title: 'Wedding Day Emergency Kit: 40 Must-Have Items',
      type: 'checklist',
      excerpt: 'Essential items to handle any wedding day mishap with grace and style',
      content: 'Complete emergency kit including fashion fixes, beauty touch-ups, comfort items, vendor communications, and guest accommodation essentials.',
      tags: ['day-of', 'preparation', 'emergency'],
      readTime: '5 min',
      difficulty: 'beginner',
      relatedBlogPost: 'emergency-kit-checklist'
    },
    {
      id: 'guest-accommodation-guide',
      title: 'Wedding Guest Accommodation Guide',
      type: 'guide',
      excerpt: 'How to help out-of-town guests feel welcomed and informed',
      content: 'Strategies for guest comfort including hotel blocks, welcome bags, local recommendations, transportation options, and communication timeline.',
      tags: ['guests', 'hospitality', 'planning'],
      readTime: '7 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'guest-accommodation-guide'
    },
    {
      id: 'wedding-photography-guide',
      title: 'Wedding Photography: What to Expect and How to Prepare',
      type: 'guide',
      excerpt: 'Maximize your wedding photos with preparation and communication strategies',
      content: 'Guide covering photography styles, shot lists, timeline planning, family photo organization, and working effectively with your photographer.',
      tags: ['photography', 'planning', 'memories'],
      readTime: '9 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'wedding-photography-guide'
    }
  ],
  expertTips: [
    {
      id: 'budget-tip-1',
      tip: 'Book your venue and photographer first - they typically consume 50-70% of your total budget and the best ones book up fastest.',
      author: 'Sarah Chen, Wedding Planner (15 years)',
      category: 'Budget Priority',
      importance: 'high'
    },
    {
      id: 'timing-tip-1',
      tip: 'Friday and Sunday weddings can save you 30-40% on venue costs, and off-season dates offer even bigger savings.',
      author: 'Mike Rodriguez, Venue Manager',
      category: 'Cost Savings',
      importance: 'high'
    },
    {
      id: 'guest-tip-1',
      tip: 'Create your guest list in tiers: must-invite, would like to invite, and if budget allows. This helps with tough decisions.',
      author: 'Jennifer Liu, Event Coordinator',
      category: 'Guest Management',
      importance: 'medium'
    },
    {
      id: 'vendor-tip-1',
      tip: 'Always have backup vendors identified. 15% of weddings experience a vendor emergency or no-show.',
      author: 'David Kim, Wedding Planner',
      category: 'Risk Management',
      importance: 'high'
    },
    {
      id: 'timeline-tip-1',
      tip: 'Build 15-30 minute buffers into your wedding day timeline. Things always take longer than expected.',
      author: 'Maria Garcia, Day-of Coordinator',
      category: 'Timeline Management',
      importance: 'high'
    },
    {
      id: 'decor-tip-1',
      tip: 'Repurpose ceremony flowers for reception centerpieces to maximize your floral budget impact.',
      author: 'Amanda Foster, Floral Designer',
      category: 'Budget Optimization',
      importance: 'medium'
    },
    {
      id: 'communication-tip-1',
      tip: 'Create a wedding website early and update it regularly. It reduces repetitive questions from guests by 60%.',
      author: 'Rachel Thompson, Wedding Coordinator',
      category: 'Guest Communication',
      importance: 'medium'
    },
    {
      id: 'weather-tip-1',
      tip: 'Always have a weather backup plan, even for indoor weddings. Weather affects transportation and guest comfort.',
      author: 'Tom Wilson, Venue Operations',
      category: 'Contingency Planning',
      importance: 'high'
    }
  ]
};

export const templates: GuidanceTemplate[] = [
  weddingTemplate,
  // Future templates generated by AI using the same structure
];