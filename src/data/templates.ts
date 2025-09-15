import { GuidanceTemplate } from '@/types/template';

// Abundant wedding planning guidance with extensive prompts and resources
export const weddingTemplate: GuidanceTemplate = {
  id: 'wedding-planning',
  title: 'Wedding Planning Guide',
  description: 'Complete wedding planning guidance from budget to big day',
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
      description: 'Find and evaluate the perfect wedding venue that fits your style and budget',
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
      description: 'Research, evaluate, and hire the right wedding vendors for your needs',
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
      description: 'Design your ceremony structure, vows, and special moments',
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
      description: 'Plan reception timeline, entertainment, and guest experience',
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
      description: 'Create your wedding aesthetic with decor, flowers, and styling choices',
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
      description: 'Plan your wedding day look and getting ready experience',
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
    },
    {
      id: 'venue-selection-guide',
      title: 'Wedding Venue Selection & Negotiation Masterclass',
      type: 'guide',
      excerpt: 'Master the art of selecting and negotiating with wedding venues to secure your dream location',
      content: 'Comprehensive guide covering venue types (banquet halls, outdoor spaces, historic venues), essential questions to ask during tours, contract negotiation strategies, identifying hidden fees, and securing backup dates. Includes venue capacity calculations, accessibility considerations, and seasonal booking advantages for maximum value.',
      tags: ['venue', 'negotiation', 'contracts', 'planning'],
      readTime: '11 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'venue-selection-guide'
    },
    {
      id: 'wedding-timeline-planner',
      title: 'Complete Wedding Day Timeline & Logistics Guide',
      type: 'tool',
      excerpt: 'Orchestrate flawless ceremony and reception flow with detailed timeline and coordination strategies',
      content: 'Detailed logistics planner covering ceremony processional timing, reception flow management, vendor coordination schedules, and contingency planning for weather delays. Includes buffer time calculations, photo session scheduling, vendor meal timing, and emergency communication protocols to ensure seamless day-of execution.',
      tags: ['timeline', 'logistics', 'coordination', 'day-of'],
      readTime: '8 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'wedding-timeline-planner'
    },
    {
      id: 'photography-investment-guide',
      title: 'Wedding Photography Investment & Package Selection Guide',
      type: 'guide',
      excerpt: 'Navigate photography packages and investments to capture memories that last a lifetime',
      content: 'Strategic guide for selecting wedding photographers covering portfolio evaluation, package comparison frameworks, shot list creation, engagement session planning, and delivery timeline expectations. Includes budget allocation strategies, additional coverage options, album design considerations, and digital rights negotiation for long-term value.',
      tags: ['photography', 'investment', 'packages', 'memories'],
      readTime: '10 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'photography-investment-guide'
    }
  ],
  expertTips: [
    {
      id: 'budget-tip-1',
      tip: 'Book your venue and photographer first - they typically consume 50-70% of your total budget and the best ones book up fastest.',
      author: 'Sarah Chen, Wedding Planner (15 years)',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'timing-tip-1',
      tip: 'Friday and Sunday weddings can save you 30-40% on venue costs, and off-season dates offer even bigger savings.',
      author: 'Mike Rodriguez, Venue Manager',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'guest-tip-1',
      tip: 'Create your guest list in tiers: must-invite, would like to invite, and if budget allows. This helps with tough decisions.',
      author: 'Jennifer Liu, Event Coordinator',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'vendor-tip-1',
      tip: 'Always have backup vendors identified. 15% of weddings experience a vendor emergency or no-show.',
      author: 'David Kim, Wedding Planner',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'timeline-tip-1',
      tip: 'Build 15-30 minute buffers into your wedding day timeline. Things always take longer than expected.',
      author: 'Maria Garcia, Day-of Coordinator',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'decor-tip-1',
      tip: 'Repurpose ceremony flowers for reception centerpieces to maximize your floral budget impact.',
      author: 'Amanda Foster, Floral Designer',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'communication-tip-1',
      tip: 'Create a wedding website early and update it regularly. It reduces repetitive questions from guests by 60%.',
      author: 'Rachel Thompson, Wedding Coordinator',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'weather-tip-1',
      tip: 'Always have a weather backup plan, even for indoor weddings. Weather affects transportation and guest comfort.',
      author: 'Tom Wilson, Venue Operations',
      category: 'planning',
      importance: 'high'
    }
  ]
};

// Comprehensive home buying guidance with extensive prompts and resources
export const homeBuyingTemplate: GuidanceTemplate = {
  id: 'home-buying',
  title: 'Home Buying Guide',
  description: 'Navigate the home buying process from financing to closing',
  category: 'personal-finance',
  icon: '🏠',
  sections: [
    {
      id: 'financial-readiness',
      title: 'Financial Readiness & Budget',
      description: 'Assess your financial situation and establish your home buying budget',
      order: 1,
      reflectionPrompts: [
        {
          id: 'credit-assessment',
          prompt: "What's your current credit score and what steps can you take to improve it before applying for a mortgage?",
          category: 'planning',
          helpText: 'Credit scores of 740+ get the best rates. Check all three bureaus and dispute errors. Pay down credit cards to under 30% utilization.',
          relatedResources: ['credit-improvement-guide', 'mortgage-pre-approval-checklist']
        },
        {
          id: 'savings-evaluation',
          prompt: 'How much do you have saved for down payment, closing costs, and emergency fund?',
          category: 'planning',
          helpText: 'Budget for 3-5% down payment (FHA) or 10-20% (conventional), plus 2-5% closing costs, plus 3-6 months expenses for emergencies.'
        },
        {
          id: 'debt-to-income',
          prompt: 'What\'s your current debt-to-income ratio and monthly budget for housing expenses?',
          category: 'planning',
          helpText: 'Lenders prefer DTI under 43%. Housing costs should be 25-30% of gross income including taxes, insurance, HOA fees.'
        },
        {
          id: 'income-stability',
          prompt: 'How stable is your income and employment situation for the next 3-5 years?',
          category: 'consideration',
          helpText: 'Lenders want 2 years employment history. Consider job security, industry stability, potential career changes.'
        },
        {
          id: 'additional-costs',
          prompt: 'What ongoing homeownership costs beyond mortgage should you budget for?',
          category: 'planning',
          helpText: 'Factor in property taxes, homeowners insurance, PMI, HOA fees, maintenance (1-3% of home value annually), utilities.'
        },
        {
          id: 'timeline-flexibility',
          prompt: 'How flexible is your timeline for buying? Are you in a rush or can you wait for the right opportunity?',
          category: 'consideration',
          helpText: 'Rushed purchases often lead to compromises. Having flexibility allows for better negotiations and decision-making.'
        }
      ]
    },
    {
      id: 'location-preferences',
      title: 'Location & Lifestyle Needs',
      description: 'Define your ideal location and lifestyle requirements',
      order: 2,
      reflectionPrompts: [
        {
          id: 'commute-priorities',
          prompt: 'How important is proximity to work, family, and regular activities?',
          category: 'decision',
          helpText: 'Calculate commute costs (time, gas, wear-and-tear). Consider remote work flexibility and future job changes.'
        },
        {
          id: 'neighborhood-character',
          prompt: 'What type of neighborhood atmosphere do you want? Urban, suburban, rural?',
          category: 'consideration',
          helpText: 'Consider walkability, noise levels, population density, community amenities, and cultural fit.'
        },
        {
          id: 'school-districts',
          prompt: 'How important are school district ratings, even if you don\'t currently have children?',
          category: 'consideration',
          helpText: 'Good schools maintain property values and expand your buyer pool for resale, even without children.'
        },
        {
          id: 'amenities-services',
          prompt: 'What amenities and services do you need nearby? Shopping, healthcare, recreation?',
          category: 'planning',
          helpText: 'Consider grocery stores, medical facilities, gyms, restaurants, public transportation, libraries, parks.'
        },
        {
          id: 'future-development',
          prompt: 'What do you know about planned development or changes in potential neighborhoods?',
          category: 'research',
          helpText: 'Research zoning changes, planned construction, infrastructure improvements that could affect property values.'
        },
        {
          id: 'safety-security',
          prompt: 'What are your safety and security priorities for neighborhoods you\'re considering?',
          category: 'consideration',
          helpText: 'Check crime statistics, visit at different times, talk to neighbors, look for security systems and lighting.'
        }
      ]
    },
    {
      id: 'home-specifications',
      title: 'Home Features & Requirements',
      description: 'Determine your home size, features, and must-have requirements',
      order: 3,
      reflectionPrompts: [
        {
          id: 'space-requirements',
          prompt: 'How much space do you need now and in the next 5-10 years?',
          category: 'planning',
          helpText: 'Consider current needs plus family growth, work-from-home space, hobbies, guest accommodations.'
        },
        {
          id: 'home-style',
          prompt: 'What home styles and architectural features appeal to you?',
          category: 'consideration',
          helpText: 'Consider single-family, condo, townhome. Think about maintenance requirements and lifestyle fit.'
        },
        {
          id: 'must-have-features',
          prompt: 'What features are absolutely non-negotiable for you?',
          category: 'decision',
          helpText: 'Common must-haves: number of bedrooms/bathrooms, parking, outdoor space, updated kitchen, storage.'
        },
        {
          id: 'deal-breakers',
          prompt: 'What would immediately eliminate a property from consideration?',
          category: 'decision',
          helpText: 'Examples: busy street, no parking, basement flooding history, structural issues, HOA restrictions.'
        },
        {
          id: 'renovation-appetite',
          prompt: 'Are you willing and able to take on renovation projects? What\'s your skill and budget level?',
          category: 'consideration',
          helpText: 'Fixer-uppers can save money but require time, skills, and extra budget. Consider your realistic capabilities.'
        },
        {
          id: 'maintenance-preferences',
          prompt: 'How much time and money do you want to spend on home maintenance?',
          category: 'planning',
          helpText: 'Newer homes and condos typically require less maintenance. Older homes and large properties need more upkeep.'
        }
      ]
    },
    {
      id: 'mortgage-financing',
      title: 'Mortgage & Financing Options',
      description: 'Explore mortgage options and secure pre-approval for your home purchase',
      order: 4,
      reflectionPrompts: [
        {
          id: 'loan-type-research',
          prompt: 'What types of loans do you qualify for and what are the pros/cons of each?',
          category: 'research',
          helpText: 'Compare conventional, FHA, VA, USDA loans. Consider down payment requirements, PMI, interest rates, qualification criteria.'
        },
        {
          id: 'lender-shopping',
          prompt: 'How will you compare different lenders and mortgage offers?',
          category: 'planning',
          helpText: 'Get quotes from banks, credit unions, online lenders. Compare interest rates, fees, closing costs, service quality.'
        },
        {
          id: 'rate-strategy',
          prompt: 'What\'s your strategy for timing your rate lock and managing interest rate risk?',
          category: 'consideration',
          helpText: 'Monitor rate trends, understand rate lock periods, consider points vs. no-points loans based on how long you\'ll stay.'
        },
        {
          id: 'down-payment-source',
          prompt: 'Where is your down payment coming from and what are the implications?',
          category: 'planning',
          helpText: 'Savings, gifts, retirement accounts, other sources. Understand gift letter requirements and seasoning rules.'
        },
        {
          id: 'closing-costs',
          prompt: 'What closing costs should you expect and how can you minimize them?',
          category: 'planning',
          helpText: 'Expect 2-5% of home price. Shop for services like title insurance, negotiate seller concessions, consider no-closing-cost loans.'
        },
        {
          id: 'pre-approval-timing',
          prompt: 'When will you get pre-approved and how will you maintain it during your search?',
          category: 'planning',
          helpText: 'Get pre-approved before house hunting. Avoid new credit, job changes, or major purchases that could affect your qualification.'
        }
      ]
    },
    {
      id: 'house-hunting',
      title: 'House Hunting Strategy',
      description: 'Develop an effective strategy for finding and evaluating properties',
      order: 5,
      reflectionPrompts: [
        {
          id: 'search-strategy',
          prompt: 'What tools and resources will you use to find properties?',
          category: 'planning',
          helpText: 'MLS through realtor, Zillow, Redfin, local websites. Set up alerts, drive neighborhoods, attend open houses.'
        },
        {
          id: 'realtor-selection',
          prompt: 'What qualities do you want in a real estate agent and how will you select one?',
          category: 'decision',
          helpText: 'Look for local market knowledge, communication style, availability, negotiation skills, client references.'
        },
        {
          id: 'showing-efficiency',
          prompt: 'How will you efficiently view properties while balancing thoroughness?',
          category: 'planning',
          helpText: 'Group showings by area, prepare questions in advance, take photos/notes, bring measuring tape and checklist.'
        },
        {
          id: 'property-evaluation',
          prompt: 'What criteria will you use to quickly evaluate if a property deserves serious consideration?',
          category: 'decision',
          helpText: 'Create scoring system for location, condition, features, price. Trust first impressions but investigate thoroughly.'
        },
        {
          id: 'market-analysis',
          prompt: 'How will you research comparable sales and market conditions for properties you like?',
          category: 'research',
          helpText: 'Review recent sales in neighborhood, understand price trends, days on market, seasonal patterns.'
        },
        {
          id: 'inspection-priorities',
          prompt: 'What will you look for during initial property visits before making offers?',
          category: 'planning',
          helpText: 'Check foundation, roof, HVAC, plumbing, electrical basics. Look for water damage, structural issues, deferred maintenance.'
        }
      ]
    },
    {
      id: 'making-offers',
      title: 'Offers & Negotiations',
      description: 'Navigate the offer process and negotiate effectively with sellers',
      order: 6,
      reflectionPrompts: [
        {
          id: 'offer-strategy',
          prompt: 'How will you determine your initial offer amount in different market conditions?',
          category: 'decision',
          helpText: 'Consider days on market, comparable sales, list vs. sale price ratios, seller motivation, competition.'
        },
        {
          id: 'contingencies',
          prompt: 'What contingencies are essential vs. nice-to-have in your offers?',
          category: 'planning',
          helpText: 'Financing, inspection, appraisal contingencies are standard. Consider title, HOA review, sale of current home.'
        },
        {
          id: 'competitive-advantages',
          prompt: 'How can you make your offers more attractive beyond just price?',
          category: 'consideration',
          helpText: 'Flexible closing date, larger earnest money, shorter contingency periods, personal letter to seller, proof of funds.'
        },
        {
          id: 'negotiation-limits',
          prompt: 'What are your walk-away points for price, repairs, and other negotiable terms?',
          category: 'decision',
          helpText: 'Set maximum price, minimum required repairs, deal-breaker terms before emotions get involved in negotiations.'
        },
        {
          id: 'multiple-offers',
          prompt: 'What\'s your strategy if you\'re in a multiple offer situation?',
          category: 'planning',
          helpText: 'Understand escalation clauses, be prepared to act quickly, have backup options, know when to walk away.'
        },
        {
          id: 'counter-negotiations',
          prompt: 'How will you handle counter-offers and repair negotiations after inspection?',
          category: 'consideration',
          helpText: 'Prioritize safety issues over cosmetic items, get multiple contractor estimates, consider credits vs. repairs.'
        }
      ]
    },
    {
      id: 'closing-process',
      title: 'Contract to Closing',
      description: 'Complete inspections, finalize financing, and close on your home',
      order: 7,
      reflectionPrompts: [
        {
          id: 'inspection-planning',
          prompt: 'What type of professional inspections will you order and what will you do with the results?',
          category: 'planning',
          helpText: 'Standard home inspection plus pest, radon, septic, well water if applicable. Budget $400-800 per inspection.'
        },
        {
          id: 'appraisal-risks',
          prompt: 'What\'s your plan if the appraisal comes in below your offer price?',
          category: 'consideration',
          helpText: 'Options: renegotiate price, pay difference in cash, get second appraisal, walk away. Plan for gap coverage.'
        },
        {
          id: 'insurance-shopping',
          prompt: 'When will you shop for homeowners insurance and what coverage do you need?',
          category: 'planning',
          helpText: 'Shop early for better rates, compare coverage options, understand replacement cost vs. actual cash value.'
        },
        {
          id: 'final-walkthrough',
          prompt: 'What will you check during your final walkthrough before closing?',
          category: 'planning',
          helpText: 'Verify agreed repairs completed, all systems working, no new damage, seller has moved out, all items included.'
        },
        {
          id: 'closing-preparation',
          prompt: 'What documents and funds do you need to prepare for closing day?',
          category: 'planning',
          helpText: 'Review closing disclosure 3 days prior, arrange certified funds, bring ID and proof of insurance, prepare for delays.'
        },
        {
          id: 'post-closing-tasks',
          prompt: 'What immediate tasks will you handle after getting your keys?',
          category: 'planning',
          helpText: 'Change locks, set up utilities in your name, locate important systems (water/gas shutoffs), plan move logistics.'
        }
      ]
    },
    {
      id: 'moving-settling',
      title: 'Moving In & Getting Settled',
      description: 'Plan your move and get settled in your new home',
      order: 8,
      reflectionPrompts: [
        {
          id: 'moving-logistics',
          prompt: 'What\'s your strategy for planning and executing your move?',
          category: 'planning',
          helpText: 'Decide DIY vs. professional movers, book early for better rates, declutter before packing, label clearly.'
        },
        {
          id: 'utility-setup',
          prompt: 'What utilities and services need to be set up or transferred to your new address?',
          category: 'planning',
          helpText: 'Electric, gas, water, sewer, trash, internet, cable, security system, HVAC maintenance contracts.'
        },
        {
          id: 'address-changes',
          prompt: 'What address changes do you need to make after moving?',
          category: 'planning',
          helpText: 'DMV, voter registration, banks, credit cards, insurance, employer, subscription services, medical providers.'
        },
        {
          id: 'immediate-improvements',
          prompt: 'What home improvements or repairs are priorities in your first year?',
          category: 'consideration',
          helpText: 'Focus on safety and basic functionality first, then comfort improvements. Budget 1-3% of home value annually.'
        },
        {
          id: 'community-integration',
          prompt: 'How will you get to know your new neighborhood and community?',
          category: 'consideration',
          helpText: 'Introduce yourself to neighbors, join local groups, find nearby amenities, explore local businesses.'
        },
        {
          id: 'homeowner-responsibilities',
          prompt: 'What ongoing maintenance tasks and responsibilities do you need to learn about?',
          category: 'planning',
          helpText: 'HVAC filter changes, gutter cleaning, seasonal maintenance, property tax payments, insurance reviews.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'first-time-buyer-guide',
      title: 'Complete First-Time Home Buyer\'s Checklist & Guide',
      type: 'checklist',
      excerpt: 'Step-by-step comprehensive guide for first-time buyers covering credit preparation, financing options, and the entire purchase process',
      content: 'This comprehensive guide walks first-time buyers through every step of the home buying process, from initial preparation to closing day. Start by checking and improving your credit score 6-12 months before shopping - even small improvements can save thousands in interest. Determine your realistic budget using the 28/36 rule and get pre-approved for a mortgage to strengthen your negotiating position. Research different loan programs including FHA loans (3.5% down), VA loans (0% down for veterans), USDA loans for rural properties, and conventional loans. Create a prioritized wish list distinguishing must-haves from nice-to-haves to stay focused during your search. The guide includes detailed checklists for each phase: financial preparation, house hunting, making offers, inspections, and closing procedures. Learn about closing costs (typically 2-5% of purchase price), earnest money deposits, and timeline expectations to avoid surprises.',
      tags: ['first-time-buyer', 'credit-preparation', 'mortgage-pre-approval', 'budget-planning', 'loan-programs'],
      readTime: '12 min',
      difficulty: 'beginner',
      relatedBlogPost: 'first-time-home-buyer-complete-guide'
    },
    {
      id: 'home-inspection-guide',
      title: 'Home Inspection & Property Evaluation Masterclass',
      type: 'guide',
      excerpt: 'Learn what professional inspectors examine and how to conduct your own preliminary property evaluation to avoid costly surprises',
      content: 'Master the art of property evaluation with this comprehensive guide covering both professional inspection processes and DIY assessment techniques. Professional inspectors examine structural elements (foundation, framing, roof), major systems (electrical, plumbing, HVAC), safety features (smoke detectors, carbon monoxide detectors, GFCI outlets), and interior/exterior conditions. Learn to identify red flags during your initial walkthrough: water damage signs, electrical issues, foundation problems, and deferred maintenance. The guide provides detailed checklists for each room and exterior areas, helping you spot potential issues before making an offer. Understand how to interpret inspection reports, negotiate repairs effectively, and determine when issues are deal-breakers versus manageable concerns. Includes cost estimation guides for common repairs, seasonal inspection considerations, and how to use inspection results in price negotiations. This knowledge empowers you to make informed decisions and potentially save thousands in unexpected repair costs.',
      tags: ['home-inspection', 'property-evaluation', 'red-flags', 'negotiation', 'repair-costs'],
      readTime: '10 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'home-inspection-guide-buyers'
    },
    {
      id: 'mortgage-financing-guide',
      title: 'Mortgage Types & Financing Options Comparison Guide',
      type: 'guide',
      excerpt: 'Comprehensive comparison of loan types, interest rate factors, closing costs, and refinancing strategies to optimize your financing',
      content: 'Navigate the complex world of mortgage financing with this detailed comparison guide covering all major loan types and strategies. Compare conventional loans (typically requiring 20% down for best rates) with government-backed options like FHA loans (3.5% down, mortgage insurance required), VA loans (0% down for qualified veterans), and USDA loans (0% down for rural areas). Understand how interest rates are determined by credit score, down payment amount, loan-to-value ratio, debt-to-income ratio, and market conditions. Learn about different rate structures: fixed-rate mortgages offer stability, while adjustable-rate mortgages (ARMs) may start lower but carry rate risk. The guide breaks down all closing costs including origination fees, appraisal costs, title insurance, and prepaid items, helping you budget accurately. Discover strategies for reducing costs like negotiating lender fees, shopping for title insurance, and timing your closing date. Includes guidance on when refinancing makes sense, how to calculate break-even points, and strategies for paying off your mortgage early.',
      tags: ['mortgage-types', 'interest-rates', 'closing-costs', 'refinancing', 'loan-comparison'],
      readTime: '9 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'mortgage-financing-options-comparison'
    },
    {
      id: 'market-analysis-tool',
      title: 'Real Estate Market Analysis & Timing Strategy Tool',
      type: 'tool',
      excerpt: 'Learn to analyze market conditions, pricing trends, and timing strategies to make informed decisions and negotiate effectively',
      content: 'Develop market analysis skills to time your purchase strategically and negotiate from a position of knowledge. This comprehensive tool teaches you to evaluate local market conditions using key indicators: inventory levels, days on market, price-to-rent ratios, and year-over-year price trends. Learn to research comparable sales (comps) effectively, understanding how location, condition, and timing affect property values. The guide covers seasonal market patterns - typically more inventory in spring/summer but also more competition, while fall/winter may offer better deals with less competition. Analyze neighborhood trends by studying recent sales, pending transactions, price per square foot variations, and development plans that could affect future values. Understand how to use online tools like Zillow, Redfin, and MLS data while recognizing their limitations. Learn negotiation strategies based on market conditions: in buyer\'s markets, you have more leverage for price reductions and concessions, while seller\'s markets require competitive offers and fewer contingencies. The tool includes worksheets for tracking properties, comparing neighborhoods, and calculating true cost of ownership including taxes, insurance, and maintenance.',
      tags: ['market-analysis', 'pricing-trends', 'negotiation-strategy', 'timing', 'comparable-sales'],
      readTime: '8 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'real-estate-market-analysis-buyers'
    }
  ],
  expertTips: [
    {
      id: 'credit-tip-1',
      tip: 'Check your credit score 6 months before house hunting. Small improvements can save thousands in interest over the loan term.',
      author: 'Jennifer Martinez, Mortgage Broker (12 years)',
      category: 'research',
      importance: 'high'
    },
    {
      id: 'budget-tip-1',
      tip: 'Use the 28/36 rule: no more than 28% of gross income on housing, 36% on total debt payments including housing.',
      author: 'Robert Chen, Financial Planner',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'location-tip-1',
      tip: 'Buy the worst house in the best neighborhood you can afford. Location affects value more than home features.',
      author: 'Sarah Williams, Real Estate Agent (18 years)',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'inspection-tip-1',
      tip: 'Never skip the home inspection, even in competitive markets. A $500 inspection can save you tens of thousands.',
      author: 'Mike Thompson, Home Inspector',
      category: 'research',
      importance: 'high'
    },
    {
      id: 'timing-tip-1',
      tip: 'The best time to buy is when you\'re financially ready, not when the market seems perfect. Time in market beats timing the market.',
      author: 'Lisa Chang, Real Estate Economist',
      category: 'consideration',
      importance: 'medium'
    },
    {
      id: 'negotiation-tip-1',
      tip: 'In seller\'s markets, consider waiving inspection contingency only if you\'ve done a thorough pre-offer inspection.',
      author: 'David Rodriguez, Buyer\'s Agent',
      category: 'decision',
      importance: 'high'
    },
    {
      id: 'financing-tip-1',
      tip: 'Get pre-approved, not pre-qualified. Pre-approval carries more weight with sellers and shows you\'re serious.',
      author: 'Amanda Foster, Loan Officer',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'maintenance-tip-1',
      tip: 'Budget 1-3% of your home\'s value annually for maintenance and repairs. Homes always need something fixed.',
      author: 'Tom Wilson, Property Manager',
      category: 'consideration',
      importance: 'medium'
    }
  ]
};

export const jobSearchTemplate: GuidanceTemplate = {
  id: 'job-search',
  title: 'Job Search Strategy',
  description: 'Strategic approach to finding and landing your ideal job',
  category: 'career',
  icon: '💼',
  sections: [
    {
      id: 'career-assessment',
      title: 'Career Assessment & Goals',
      description: 'Assess your skills, values, and career goals to guide your job search',
      order: 1,
      reflectionPrompts: [
        {
          id: 'skills-inventory',
          prompt: "What are your core technical and soft skills, and which ones differentiate you from other candidates?",
          category: 'planning',
          helpText: 'List 5-7 key skills with specific examples. Include both hard skills (software, certifications) and soft skills (leadership, communication).',
          relatedResources: ['skills-assessment-guide', 'resume-optimization-checklist']
        },
        {
          id: 'career-goals',
          prompt: 'What type of role, company culture, and career progression are you seeking in your next position?',
          category: 'planning',
          helpText: 'Be specific about job titles, industry, company size, remote/hybrid preferences, and long-term career aspirations.'
        },
        {
          id: 'value-proposition',
          prompt: 'What unique value do you bring to employers? What problems can you solve for them?',
          category: 'planning',
          helpText: 'Think about your achievements, impact metrics, and what makes you stand out. Focus on results you\'ve delivered.'
        },
        {
          id: 'target-companies',
          prompt: 'Which specific companies or types of organizations align with your values and career goals?',
          category: 'research',
          helpText: 'Research company cultures, values, growth potential, and employee satisfaction. Create a target list of 20-30 companies.'
        },
        {
          id: 'salary-expectations',
          prompt: 'What salary range and benefits package do you need/want for your next role?',
          category: 'planning',
          helpText: 'Research market rates for your role/location using Glassdoor, Payscale, levels.fyi. Consider total compensation including benefits.'
        },
        {
          id: 'deal-breakers',
          prompt: 'What are your non-negotiables in terms of role responsibilities, company culture, or work environment?',
          category: 'consideration',
          helpText: 'Be clear about what you absolutely won\'t accept. This helps you filter opportunities and make decisions faster.'
        }
      ]
    },
    {
      id: 'application-materials',
      title: 'Resume & Application Materials',
      description: 'Create compelling resumes, cover letters, and portfolios',
      order: 2,
      reflectionPrompts: [
        {
          id: 'resume-optimization',
          prompt: "How can you optimize your resume format, content, and keywords for your target roles?",
          category: 'planning',
          helpText: 'Use ATS-friendly formats, include relevant keywords from job descriptions, quantify achievements with metrics.',
          relatedResources: ['resume-optimization-checklist', 'ats-resume-guide']
        },
        {
          id: 'cover-letter-strategy',
          prompt: 'What key messages should your cover letters convey, and how will you customize them for each application?',
          category: 'planning',
          helpText: 'Focus on 2-3 key achievements that relate to the specific role. Show knowledge of the company and role requirements.'
        },
        {
          id: 'portfolio-showcase',
          prompt: 'What work samples, projects, or portfolio pieces best demonstrate your capabilities?',
          category: 'planning',
          helpText: 'Choose 3-5 diverse examples that show range and impact. Include context, your role, and measurable outcomes.'
        },
        {
          id: 'linkedin-optimization',
          prompt: 'How can you optimize your LinkedIn profile to attract recruiters and showcase your professional brand?',
          category: 'planning',
          helpText: 'Professional photo, compelling headline, keyword-rich summary, complete experience section, recommendations, and active posting.'
        },
        {
          id: 'references-preparation',
          prompt: 'Who will serve as your professional references, and how will you prepare them?',
          category: 'planning',
          helpText: 'Choose 3-5 references who can speak to different aspects of your work. Brief them on roles you\'re pursuing.'
        },
        {
          id: 'application-tracking',
          prompt: 'How will you organize and track your job applications, interviews, and follow-ups?',
          category: 'planning',
          helpText: 'Use a spreadsheet or tool to track company, role, application date, contacts, interview stages, and next steps.'
        }
      ]
    },
    {
      id: 'job-searching',
      title: 'Job Search & Networking',
      description: 'Develop effective job search strategies and build professional networks',
      order: 3,
      reflectionPrompts: [
        {
          id: 'search-channels',
          prompt: "Which job search channels will you use, and how much time will you allocate to each?",
          category: 'planning',
          helpText: 'Job boards (20%), company websites (30%), networking (40%), recruiters (10%). Adjust based on your industry.',
          relatedResources: ['job-search-strategy-guide', 'networking-templates']
        },
        {
          id: 'networking-strategy',
          prompt: 'How will you leverage your professional network and build new connections in your target industry?',
          category: 'planning',
          helpText: 'Reach out to former colleagues, attend industry events, join professional associations, engage on LinkedIn.'
        },
        {
          id: 'informational-interviews',
          prompt: 'Who can you conduct informational interviews with to learn about roles and companies?',
          category: 'research',
          helpText: 'Identify people in target roles/companies. Ask about their career path, company culture, and industry trends.'
        },
        {
          id: 'recruiter-outreach',
          prompt: 'Which recruiters or staffing agencies specialize in your field, and how will you connect with them?',
          category: 'planning',
          helpText: 'Research recruiters on LinkedIn who place people in your target roles. Send personalized connection requests.'
        },
        {
          id: 'application-schedule',
          prompt: 'How many applications will you submit per week, and what\'s your daily/weekly job search schedule?',
          category: 'planning',
          helpText: 'Aim for 5-15 quality applications per week. Block dedicated time for searching, applying, and networking daily.'
        },
        {
          id: 'online-presence',
          prompt: 'How will you maintain visibility and credibility in your industry through online presence?',
          category: 'planning',
          helpText: 'Share industry insights on LinkedIn, contribute to discussions, showcase expertise through posts or articles.'
        }
      ]
    },
    {
      id: 'interview-preparation',
      title: 'Interview Preparation',
      description: 'Prepare for interviews and present yourself as the ideal candidate',
      order: 4,
      reflectionPrompts: [
        {
          id: 'story-development',
          prompt: "What are your best STAR method stories that demonstrate key competencies employers value?",
          category: 'planning',
          helpText: 'Prepare 5-7 stories covering leadership, problem-solving, teamwork, conflict resolution, and achieving results.',
          relatedResources: ['interview-preparation-guide', 'star-method-examples']
        },
        {
          id: 'technical-preparation',
          prompt: 'What technical skills, knowledge, or assessments should you prepare for in your target roles?',
          category: 'planning',
          helpText: 'Review job requirements, practice coding challenges, prepare case studies, brush up on industry knowledge.'
        },
        {
          id: 'company-research',
          prompt: 'How will you research each company before interviews to demonstrate genuine interest and fit?',
          category: 'research',
          helpText: 'Study company mission, values, recent news, competitors, challenges, and the role\'s place in the organization.'
        },
        {
          id: 'question-preparation',
          prompt: 'What thoughtful questions will you ask interviewers to assess fit and show engagement?',
          category: 'planning',
          helpText: 'Prepare questions about role expectations, team dynamics, company culture, growth opportunities, and challenges.'
        },
        {
          id: 'virtual-interview-prep',
          prompt: 'How will you prepare for video interviews to ensure professional presentation and technical readiness?',
          category: 'planning',
          helpText: 'Test technology, optimize lighting/background, practice eye contact with camera, have backup plans for technical issues.'
        },
        {
          id: 'salary-negotiation',
          prompt: 'How will you approach salary negotiation and what\'s your strategy for discussing compensation?',
          category: 'planning',
          helpText: 'Research market rates, know your minimum acceptable offer, prepare to discuss total compensation package, not just salary.'
        }
      ]
    },
    {
      id: 'offer-evaluation',
      title: 'Offer Evaluation & Negotiation',
      description: 'Evaluate job offers and negotiate terms effectively',
      order: 5,
      reflectionPrompts: [
        {
          id: 'offer-analysis',
          prompt: "How will you evaluate job offers beyond just salary to make the best career decision?",
          category: 'decision',
          helpText: 'Consider growth potential, company stability, work-life balance, benefits, culture fit, learning opportunities.',
          relatedResources: ['offer-evaluation-checklist', 'salary-negotiation-guide']
        },
        {
          id: 'negotiation-strategy',
          prompt: 'What aspects of the offer will you negotiate, and how will you approach these conversations?',
          category: 'planning',
          helpText: 'Salary, start date, vacation time, remote work options, professional development budget, title, or responsibilities.'
        },
        {
          id: 'counteroffer-handling',
          prompt: 'If your current employer makes a counteroffer, how will you evaluate and respond to it?',
          category: 'decision',
          helpText: 'Consider why you were job searching originally, long-term career goals, and whether the counteroffer addresses root issues.'
        },
        {
          id: 'decision-timeline',
          prompt: 'What\'s your timeline for making decisions, and how will you manage multiple offers or opportunities?',
          category: 'planning',
          helpText: 'Ask for reasonable time to consider offers, communicate transparently with all parties, make decisions promptly.'
        },
        {
          id: 'reference-checks',
          prompt: 'How will you prepare for reference checks and ensure your references are ready to support you?',
          category: 'planning',
          helpText: 'Give references advance notice, provide context about the role, share your resume and key talking points.'
        },
        {
          id: 'transition-planning',
          prompt: 'How will you professionally transition out of your current role and into your new position?',
          category: 'planning',
          helpText: 'Give appropriate notice, document your work, train replacements, maintain relationships, plan your start date.'
        }
      ]
    },
    {
      id: 'career-development',
      title: 'Ongoing Career Development',
      description: 'Plan for continuous learning and long-term career growth',
      order: 6,
      reflectionPrompts: [
        {
          id: 'skill-development',
          prompt: "What skills do you need to develop to advance in your career, and how will you acquire them?",
          category: 'planning',
          helpText: 'Identify trending skills in your field, create learning plan, seek mentorship, take courses, get certifications.',
          relatedResources: ['career-development-plan', 'professional-learning-resources']
        },
        {
          id: 'professional-network',
          prompt: 'How will you continue building and maintaining your professional network throughout your career?',
          category: 'planning',
          helpText: 'Join professional associations, attend conferences, maintain relationships, help others, stay visible in your industry.'
        },
        {
          id: 'performance-tracking',
          prompt: 'How will you track and document your achievements to support future career moves?',
          category: 'planning',
          helpText: 'Keep an achievement log, quantify your impact, collect feedback and testimonials, update LinkedIn regularly.'
        },
        {
          id: 'industry-awareness',
          prompt: 'How will you stay current with industry trends, technologies, and market changes?',
          category: 'planning',
          helpText: 'Follow industry publications, thought leaders, join professional groups, attend webinars and conferences.'
        },
        {
          id: 'mentorship',
          prompt: 'How will you find mentors and also mentor others to accelerate your career growth?',
          category: 'planning',
          helpText: 'Seek mentors 2-3 levels above you, offer to mentor junior colleagues, join formal mentorship programs.'
        },
        {
          id: 'career-pivoting',
          prompt: 'How will you evaluate and plan for potential career pivots or major transitions?',
          category: 'consideration',
          helpText: 'Regularly assess career satisfaction, explore adjacent fields, build transferable skills, network in new areas.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'ats-resume-guide',
      title: 'ATS-Optimized Resume Writing & Keyword Strategy Guide',
      type: 'guide',
      excerpt: 'Master ATS systems and keyword optimization to ensure your resume gets past automated screening and lands in front of hiring managers',
      content: 'Navigate modern recruitment technology with this comprehensive ATS optimization guide. Understand how Applicant Tracking Systems parse resumes and learn to format yours for maximum compatibility: use standard section headings, avoid complex formatting, and save as both .docx and .pdf versions. Master keyword strategy by analyzing job descriptions and incorporating relevant terms naturally throughout your resume. Learn industry-specific optimization techniques for different sectors including tech, healthcare, finance, and creative fields. The guide covers advanced strategies like synonym variations, skill clustering, and achievement quantification that resonates with both ATS algorithms and human reviewers. Discover how to structure your resume sections optimally, choose ATS-friendly fonts and layouts, and avoid common formatting pitfalls that cause parsing errors. Includes actionable templates, keyword research techniques, and testing methods to ensure your resume successfully navigates automated screening systems while maintaining readability for hiring managers.',
      tags: ['resume-optimization', 'ATS-systems', 'keyword-strategy', 'formatting', 'job-applications'],
      readTime: '10 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'ats-resume-optimization-guide'
    },
    {
      id: 'interview-masterclass',
      title: 'Interview Preparation & Performance Masterclass',
      type: 'guide',
      excerpt: 'Comprehensive interview preparation covering behavioral questions, technical assessments, salary negotiation, and follow-up strategies for career success',
      content: 'Master every aspect of the interview process with this comprehensive preparation guide. Learn to excel at behavioral interviews using the STAR method (Situation, Task, Action, Result) with detailed frameworks for crafting compelling stories that demonstrate your value. Prepare for technical interviews across different industries with problem-solving strategies, coding challenges, case study approaches, and presentation techniques. Develop confident salary negotiation skills including market research methods, negotiation timing, and strategies for discussing compensation packages beyond base salary. The guide covers different interview formats from phone screenings and video interviews to panel discussions and assessment centers. Learn advanced techniques for reading interviewer cues, managing interview anxiety, and turning potential weaknesses into strengths. Includes post-interview follow-up strategies, thank-you note templates, and methods for maintaining momentum throughout lengthy hiring processes. Practice scenarios and question banks help you prepare for industry-specific interviews while building the confidence needed to perform at your best.',
      tags: ['interview-preparation', 'behavioral-questions', 'technical-interviews', 'salary-negotiation', 'interview-performance'],
      readTime: '12 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'interview-mastery-guide'
    },
    {
      id: 'networking-toolkit',
      title: 'Professional Network Building & LinkedIn Strategy Toolkit',
      type: 'tool',
      excerpt: 'Strategic networking approach with LinkedIn optimization, relationship building techniques, and systematic methods for expanding your professional network',
      content: 'Build a powerful professional network using systematic relationship-building strategies and LinkedIn optimization techniques. Learn to craft a compelling LinkedIn profile that attracts opportunities: optimize your headline, summary, and experience sections with industry keywords while showcasing your unique value proposition. Master the art of meaningful networking both online and offline through industry events, professional associations, and informational interviews. Develop authentic relationship-building skills that focus on providing value to others first, creating lasting professional connections that benefit everyone involved. The toolkit includes templates for LinkedIn connection requests, informational interview scripts, and follow-up communications that maintain relationships over time. Discover advanced LinkedIn strategies like content creation, thought leadership positioning, and leveraging LinkedIn groups for industry visibility. Learn systematic approaches to networking event attendance, conversation starters, and relationship tracking methods. Includes actionable frameworks for identifying key industry contacts, maintaining your network through regular touchpoints, and leveraging relationships ethically for career advancement opportunities.',
      tags: ['networking-strategy', 'LinkedIn-optimization', 'relationship-building', 'professional-connections', 'career-networking'],
      readTime: '11 min',
      difficulty: 'beginner',
      relatedBlogPost: 'professional-networking-guide'
    },
    {
      id: 'job-market-strategy',
      title: 'Job Market Research & Application Strategy Framework',
      type: 'tool',
      excerpt: 'Systematic approach to job market analysis, company research, application tracking, and strategic positioning within industry trends',
      content: 'Develop a strategic approach to job searching through comprehensive market research and systematic application management. Learn industry analysis techniques to identify growth sectors, emerging opportunities, and market trends that inform your job search strategy. Master company research methods using multiple sources including financial reports, employee reviews, social media presence, and industry publications to understand organizational culture, growth trajectory, and potential challenges. Create efficient application tracking systems to manage your job search pipeline, monitor application status, and follow up systematically with potential employers. The framework includes methods for identifying hidden job opportunities through industry connections, company growth indicators, and organizational changes that signal hiring needs. Discover how to position yourself strategically within market trends by aligning your skills with in-demand competencies and emerging industry needs. Learn to analyze job market data, salary trends, and geographic opportunities to optimize your search strategy. Includes templates for research documentation, application tracking spreadsheets, and strategic positioning frameworks that help you stand out in competitive job markets while making informed career decisions.',
      tags: ['job-market-research', 'company-analysis', 'application-tracking', 'industry-trends', 'strategic-job-search'],
      readTime: '9 min',
      difficulty: 'expert',
      relatedBlogPost: 'job-market-research-strategy'
    }
  ],
  expertTips: [
    {
      id: 'networking-tip-1',
      tip: 'Focus on building genuine relationships, not just asking for jobs. Help others first and job opportunities will follow naturally.',
      author: 'Sarah Chen, Executive Recruiter (15 years)',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'resume-tip-1',
      tip: 'Quantify your achievements with specific metrics. "Increased sales by 25%" is much stronger than "improved sales performance."',
      author: 'Mike Rodriguez, HR Director',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'interview-tip-1',
      tip: 'Practice the STAR method (Situation, Task, Action, Result) for behavioral questions. Have 5-7 detailed stories ready.',
      author: 'Jennifer Liu, Career Coach',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'application-tip-1',
      tip: 'Apply within the first 48 hours when possible. Early applications get more attention from hiring managers.',
      author: 'David Park, Talent Acquisition Manager',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'linkedin-tip-1',
      tip: 'Post valuable industry insights regularly on LinkedIn. Recruiters notice active, engaged professionals.',
      author: 'Amanda Foster, Personal Branding Expert',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'negotiation-tip-1',
      tip: 'Never negotiate salary in the first interview. Wait until you have an offer and they want you specifically.',
      author: 'Robert Chen, Negotiation Expert',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'research-tip-1',
      tip: 'Research the interviewer on LinkedIn beforehand. Finding common connections or interests builds rapport quickly.',
      author: 'Lisa Chang, Executive Coach',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'follow-up-tip-1',
      tip: 'Send personalized thank-you emails within 24 hours of each interview. Reference specific conversation points.',
      author: 'Tom Wilson, Hiring Manager',
      category: 'planning',
      importance: 'high'
    }
  ]
};

export const babyPlanningTemplate: GuidanceTemplate = {
  id: 'baby-planning',
  title: 'Baby Planning Guide',
  description: 'Complete guidance for preparing for pregnancy, birth, and your baby\'s first year',
  category: 'personal-life',
  icon: '👶',
  sections: [
    {
      id: 'pregnancy-preparation',
      title: 'Pregnancy Preparation & Health',
      description: 'Establish healthy pregnancy practices and prenatal care routines',
      order: 1,
      reflectionPrompts: [
        {
          id: 'prenatal-care-setup',
          prompt: "Have you selected a healthcare provider and scheduled your first prenatal appointment?",
          category: 'planning',
          helpText: 'Schedule your first appointment by 8 weeks. Research OB-GYNs, midwives, and birthing centers in your area.',
          relatedResources: ['prenatal-care-guide', 'choosing-healthcare-provider']
        },
        {
          id: 'nutrition-supplements',
          prompt: 'What dietary changes and supplements do you need to support a healthy pregnancy?',
          category: 'planning',
          helpText: 'Start prenatal vitamins with folic acid, avoid alcohol/smoking, limit caffeine, focus on nutrient-dense foods.'
        },
        {
          id: 'lifestyle-adjustments',
          prompt: 'What lifestyle changes will you make to create the healthiest environment for your baby?',
          category: 'planning',
          helpText: 'Consider exercise routines, sleep habits, stress management, work adjustments, and environmental toxins.'
        },
        {
          id: 'genetic-testing',
          prompt: 'What genetic testing and screening options do you want to discuss with your healthcare provider?',
          category: 'consideration',
          helpText: 'Learn about carrier screening, NIPT, anatomy scans, and diagnostic tests. Discuss family history.'
        },
        {
          id: 'pregnancy-timeline',
          prompt: 'How will you track important pregnancy milestones and appointments throughout each trimester?',
          category: 'planning',
          helpText: 'Create a pregnancy calendar with key appointments, tests, and developmental milestones for each trimester.'
        },
        {
          id: 'support-system',
          prompt: 'Who will be part of your support system during pregnancy and after birth?',
          category: 'consideration',
          helpText: 'Identify family, friends, healthcare providers, and community resources who can provide emotional and practical support.'
        }
      ]
    },
    {
      id: 'financial-planning',
      title: 'Financial Planning & Insurance',
      description: 'Plan your budget, insurance coverage, and financial security for your growing family',
      order: 2,
      reflectionPrompts: [
        {
          id: 'baby-budget-planning',
          prompt: "What are the expected costs for your baby's first year, and how will you budget for them?",
          category: 'planning',
          helpText: 'Budget $10,000-$15,000 for first year including gear, medical costs, childcare. Track monthly expenses.',
          relatedResources: ['baby-budget-breakdown', 'cost-saving-strategies']
        },
        {
          id: 'insurance-review',
          prompt: 'How does your health insurance cover pregnancy, birth, and pediatric care?',
          category: 'planning',
          helpText: 'Review coverage for prenatal care, delivery, NICU if needed, and add baby to policy within 30 days of birth.'
        },
        {
          id: 'parental-leave-planning',
          prompt: 'What are your parental leave options and how will you manage income during time off?',
          category: 'planning',
          helpText: 'Research FMLA, state programs, employer policies, and disability insurance. Plan for reduced income.'
        },
        {
          id: 'savings-goals',
          prompt: 'What savings goals will you set for immediate baby needs and long-term expenses like education?',
          category: 'planning',
          helpText: 'Start emergency fund, consider 529 education savings plan, budget for ongoing childcare costs.'
        },
        {
          id: 'life-insurance',
          prompt: 'Do you need to update or purchase life insurance to protect your growing family?',
          category: 'consideration',
          helpText: 'Consider term life insurance to replace income and cover childcare costs if something happens to either parent.'
        },
        {
          id: 'will-estate-planning',
          prompt: 'How will you update your will and estate planning to include guardianship and inheritance decisions?',
          category: 'planning',
          helpText: 'Draft or update wills, name guardians, consider trusts, update beneficiaries on accounts and insurance.'
        }
      ]
    },
    {
      id: 'nursery-preparation',
      title: 'Nursery Setup & Baby Gear',
      description: 'Create a safe, functional nursery and select essential baby gear',
      order: 3,
      reflectionPrompts: [
        {
          id: 'nursery-design-planning',
          prompt: "How will you design and set up the nursery to be both functional and safe for your baby?",
          category: 'planning',
          helpText: 'Plan layout for crib, changing station, storage, and nursing area. Ensure good lighting and temperature control.',
          relatedResources: ['nursery-setup-guide', 'baby-safety-checklist']
        },
        {
          id: 'essential-gear-selection',
          prompt: 'What essential baby gear do you need for sleeping, feeding, transportation, and daily care?',
          category: 'planning',
          helpText: 'Focus on basics: crib, car seat, stroller, changing table, baby clothes, feeding supplies. Avoid overbuying.'
        },
        {
          id: 'baby-registry-planning',
          prompt: 'How will you organize your baby registry to include items you truly need at different stages?',
          category: 'planning',
          helpText: 'Register for essentials first, include items for 0-3 months, 3-6 months, and 6-12 months. Consider practical gifts.'
        },
        {
          id: 'home-safety-preparation',
          prompt: 'What safety modifications need to be made throughout your home before baby arrives?',
          category: 'planning',
          helpText: 'Install safety latches, outlet covers, stair gates, secure furniture, remove choking hazards, check smoke detectors.'
        },
        {
          id: 'storage-organization',
          prompt: 'How will you organize and store baby items, clothes, and supplies for easy access and rotation?',
          category: 'planning',
          helpText: 'Plan storage systems for clothes by size, diaper supplies, toys, and feeding items. Label everything clearly.'
        },
        {
          id: 'nursery-comfort-features',
          prompt: 'What comfort features will make the nursery pleasant for both baby and parents during long nights?',
          category: 'consideration',
          helpText: 'Consider blackout curtains, white noise machine, comfortable nursing chair, good lighting, and temperature control.'
        }
      ]
    },
    {
      id: 'birth-preparation',
      title: 'Birth Planning & Hospital Preparation',
      description: 'Prepare for labor, delivery, and your hospital experience',
      order: 4,
      reflectionPrompts: [
        {
          id: 'birth-plan-creation',
          prompt: "What are your preferences for labor, delivery, and immediate postpartum care?",
          category: 'planning',
          helpText: 'Consider pain management options, delivery positions, immediate skin-to-skin contact, and newborn procedures.',
          relatedResources: ['birth-plan-template', 'labor-delivery-guide']
        },
        {
          id: 'hospital-bag-packing',
          prompt: 'What items do you need to pack for your hospital stay for both you and baby?',
          category: 'planning',
          helpText: 'Pack comfortable clothes, toiletries, phone chargers, car seat, baby outfits, and important documents.'
        },
        {
          id: 'labor-support-team',
          prompt: 'Who will be your support team during labor and what role will each person play?',
          category: 'planning',
          helpText: 'Decide on partner, doula, family members present. Discuss their roles and your preferences with them.'
        },
        {
          id: 'pain-management-research',
          prompt: 'What pain management options do you want to explore and discuss with your healthcare provider?',
          category: 'consideration',
          helpText: 'Learn about epidurals, natural pain relief, breathing techniques, movement, and hydrotherapy options.'
        },
        {
          id: 'postpartum-plan',
          prompt: 'How will you plan for recovery and support during the first few weeks after birth?',
          category: 'planning',
          helpText: 'Arrange for help with meals, household tasks, and baby care. Plan for postpartum checkups and mental health support.'
        },
        {
          id: 'emergency-planning',
          prompt: 'What contingency plans do you have for unexpected situations during labor or delivery?',
          category: 'consideration',
          helpText: 'Discuss C-section possibilities, NICU scenarios, transportation to hospital, and backup support people.'
        }
      ]
    },
    {
      id: 'newborn-care',
      title: 'Newborn Care & Feeding',
      description: 'Learn essential newborn care skills and feeding approaches',
      order: 5,
      reflectionPrompts: [
        {
          id: 'feeding-method-decision',
          prompt: "How will you approach feeding your baby, and what support do you need for your chosen method?",
          category: 'planning',
          helpText: 'Whether breastfeeding, formula feeding, or combination, research techniques and have supplies and support ready.',
          relatedResources: ['newborn-feeding-guide', 'breastfeeding-basics']
        },
        {
          id: 'newborn-care-skills',
          prompt: 'What newborn care skills do you need to learn before baby arrives (diaper changing, bathing, swaddling)?',
          category: 'planning',
          helpText: 'Practice diaper changing, swaddling, bathing techniques. Take newborn care class or watch instructional videos.'
        },
        {
          id: 'sleep-safety-planning',
          prompt: 'How will you create a safe sleep environment and establish healthy sleep habits from the start?',
          category: 'planning',
          helpText: 'Follow safe sleep guidelines: back sleeping, firm mattress, no loose bedding. Plan for night feeding logistics.'
        },
        {
          id: 'pediatrician-selection',
          prompt: 'Have you chosen a pediatrician and scheduled your baby\'s first appointment?',
          category: 'planning',
          helpText: 'Interview pediatricians during pregnancy, check insurance coverage, and schedule first appointment within days of birth.'
        },
        {
          id: 'development-tracking',
          prompt: 'How will you track and support your baby\'s development in the first few months?',
          category: 'planning',
          helpText: 'Learn about developmental milestones, tummy time importance, and early stimulation activities appropriate for newborns.'
        },
        {
          id: 'postpartum-support',
          prompt: 'What resources and support will you have for physical and emotional recovery after birth?',
          category: 'consideration',
          helpText: 'Plan for postpartum depression screening, lactation support, pelvic floor recovery, and emotional adjustment help.'
        }
      ]
    },
    {
      id: 'work-life-balance',
      title: 'Work-Life Balance & Future Planning',
      description: 'Balance career, childcare, and family life with future planning considerations',
      order: 6,
      reflectionPrompts: [
        {
          id: 'childcare-arrangements',
          prompt: "What childcare arrangements will you need when returning to work or other commitments?",
          category: 'planning',
          helpText: 'Research daycare centers, nannies, family care options. Apply early as quality childcare often has waitlists.',
          relatedResources: ['childcare-options-guide', 'returning-to-work-checklist']
        },
        {
          id: 'work-return-planning',
          prompt: 'How will you transition back to work while maintaining your commitment to your baby\'s needs?',
          category: 'planning',
          helpText: 'Discuss flexible schedules, pumping facilities, gradual return options, and backup childcare with your employer.'
        },
        {
          id: 'household-responsibility-sharing',
          prompt: 'How will you and your partner divide household and baby care responsibilities?',
          category: 'planning',
          helpText: 'Discuss expectations openly, create schedules for night duties, household tasks, and baby care responsibilities.'
        },
        {
          id: 'relationship-maintenance',
          prompt: 'How will you maintain your relationship as a couple while adapting to parenthood?',
          category: 'consideration',
          helpText: 'Plan for date nights, communication strategies, intimacy changes, and support during stressful adjustments.'
        },
        {
          id: 'personal-time-planning',
          prompt: 'How will you ensure both parents get personal time and self-care opportunities?',
          category: 'planning',
          helpText: 'Schedule individual time, maintain friendships and hobbies, prioritize physical and mental health for both parents.'
        },
        {
          id: 'future-family-planning',
          prompt: 'What are your thoughts on future family planning and spacing between children?',
          category: 'consideration',
          helpText: 'Discuss contraception plans, ideal spacing between children, and how you\'ll make future family planning decisions.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'baby-essentials-checklist',
      title: 'Complete Baby Essentials Checklist & Registry Guide',
      type: 'checklist',
      excerpt: 'Comprehensive guide to must-have baby items organized by category with budget-friendly alternatives and safety standards',
      content: 'Navigate baby product overwhelm with this comprehensive essentials checklist organized by immediate needs versus items you can acquire later. Feeding essentials include bottles, nipples, burp cloths, and bibs, with guidance on breastfeeding supplies versus formula feeding needs. Sleep safety is paramount: invest in a firm crib mattress, fitted sheets, sleep sacks, and blackout curtains while avoiding bumpers, pillows, and loose blankets that pose SIDS risks. Diapering basics cover diapers (newborn and size 1), wipes, rash cream, changing pad, and diaper disposal system. Clothing essentials focus on practical pieces: onesies, sleepers, socks, hats, and weather-appropriate outerwear in newborn and 0-3 month sizes. Safety items include car seat installation and inspection, cabinet locks, outlet covers, and baby gates for when mobility begins. The guide distinguishes between marketing hype and genuine needs, provides budget-friendly alternatives for expensive items, and includes safety standards to look for when purchasing products. Learn which items to buy new versus secondhand for safety reasons, and get strategies for building your registry across different budgets.',
      tags: ['baby-essentials', 'registry-planning', 'budget-friendly', 'safety-standards', 'newborn-prep'],
      readTime: '12 min',
      difficulty: 'beginner',
      relatedBlogPost: 'baby-essentials-complete-guide'
    },
    {
      id: 'pregnancy-health-guide',
      title: 'Pregnancy Health, Nutrition & Wellness Comprehensive Guide',
      type: 'guide',
      excerpt: 'Complete guide to prenatal nutrition, safe exercise, prenatal care timeline, and managing common pregnancy concerns',
      content: 'Optimize your pregnancy health with evidence-based guidance on nutrition, exercise, and prenatal care throughout all three trimesters. Prenatal nutrition focuses on key nutrients: folate/folic acid for neural tube development, iron for increased blood volume, calcium for bone development, and omega-3 fatty acids for brain development. Learn which foods to emphasize (leafy greens, lean proteins, whole grains, dairy) and which to avoid (high-mercury fish, unpasteurized products, raw meats, alcohol). Safe exercise during pregnancy includes low-impact activities like walking, swimming, prenatal yoga, and modified strength training while avoiding contact sports, hot yoga, and activities with fall risk. The prenatal care timeline outlines essential appointments, screenings, and tests for each trimester including genetic screening options, glucose tolerance testing, and Group B Strep testing. Address common concerns like morning sickness, heartburn, swelling, and sleep difficulties with practical management strategies. Understand warning signs that require immediate medical attention, and learn stress management techniques including meditation, deep breathing, and prenatal massage. The guide includes meal planning templates, safe exercise routines for each trimester, and checklists for prenatal appointments.',
      tags: ['prenatal-nutrition', 'pregnancy-exercise', 'prenatal-care', 'pregnancy-wellness', 'trimester-guide'],
      readTime: '10 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'pregnancy-health-comprehensive-guide'
    },
    {
      id: 'newborn-care-manual',
      title: 'Newborn Care & Early Development Manual',
      type: 'guide',
      excerpt: 'Essential guide to newborn feeding schedules, sleep patterns, developmental milestones, and emergency preparedness for new parents',
      content: 'Master newborn care with this comprehensive manual covering feeding, sleep, development, and health monitoring for your baby\'s first months. Feeding guidance covers both breastfeeding and formula feeding schedules, recognizing hunger and fullness cues, proper latching techniques, and troubleshooting common feeding challenges like cluster feeding and growth spurts. Sleep pattern understanding includes newborn sleep cycles (typically 2-4 hour stretches), safe sleep positioning, swaddling techniques, and establishing day/night differentiation. Developmental milestones for 0-3 months include tracking head control, visual focus, social smiles, and early communication attempts while understanding normal variations in development timing. Learn essential newborn care tasks: diaper changing techniques, umbilical cord care, bathing safety, nail trimming, and recognizing normal newborn behaviors versus concerning symptoms. Pediatric care includes vaccination schedules, well-baby visit expectations, and building a relationship with your healthcare provider. Emergency preparedness covers recognizing signs of illness, fever management, when to call the doctor versus go to emergency room, basic infant CPR, and having emergency contacts readily available. The manual includes feeding and sleep tracking templates, developmental milestone checklists, and emergency action plans that help new parents feel confident in caring for their newborn.',
      tags: ['newborn-care', 'feeding-schedules', 'sleep-patterns', 'developmental-milestones', 'pediatric-care'],
      readTime: '11 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'newborn-care-complete-manual'
    },
    {
      id: 'postpartum-toolkit',
      title: 'Postpartum Recovery & Family Adjustment Toolkit',
      type: 'tool',
      excerpt: 'Comprehensive toolkit for physical recovery, emotional adjustment, recognizing postpartum depression, and family transition strategies',
      content: 'Navigate the postpartum period with confidence using this comprehensive toolkit addressing physical recovery, emotional adjustment, and family dynamics during the fourth trimester. Physical recovery guidance covers healing timelines for vaginal and cesarean deliveries, managing pain and discomfort, breast/chestfeeding challenges, and when to resume normal activities including exercise and intimacy. Emotional adjustment support helps distinguish between normal baby blues (mood swings, crying spells, anxiety in first 2 weeks) and postpartum depression or anxiety that requires professional intervention. Learn warning signs including persistent sadness, loss of interest in activities, overwhelming anxiety, thoughts of harm, and difficulty bonding with baby. Partner support strategies include communication techniques during sleep deprivation, dividing household and baby care responsibilities equitably, and maintaining relationship intimacy during this transition. Practical tools include meal prep strategies, visitor boundary setting, household management systems, and creating support networks with other new parents. Return-to-work planning covers childcare options, pumping schedules, legal rights regarding parental leave, and managing work-life balance expectations. The toolkit provides daily and weekly recovery checklists, mood tracking templates, communication scripts for asking for help, and resource lists for professional support when needed.',
      tags: ['postpartum-recovery', 'emotional-adjustment', 'postpartum-depression', 'partner-support', 'work-life-balance'],
      readTime: '9 min',
      difficulty: 'intermediate',
      relatedBlogPost: 'postpartum-recovery-complete-toolkit'
    }
  ],
  expertTips: [
    {
      id: 'prenatal-tip-1',
      tip: 'Take prenatal vitamins with folic acid at least one month before trying to conceive and throughout pregnancy to prevent birth defects.',
      author: 'Dr. Sarah Williams, OB-GYN (12 years)',
      category: 'consideration',
      importance: 'high'
    },
    {
      id: 'budget-tip-1',
      tip: 'Focus on essentials for the first 3 months. Babies need very little initially - prioritize safe sleep, car seat, and feeding supplies.',
      author: 'Jennifer Martinez, Certified Financial Planner',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'feeding-tip-1',
      tip: 'Whether breastfeeding or formula feeding, having a plan and support system is crucial. Both are valid choices that can nourish your baby.',
      author: 'Lisa Chen, Lactation Consultant (IBCLC)',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'sleep-tip-1',
      tip: 'Follow safe sleep guidelines religiously: back sleeping, firm mattress, nothing else in the crib. This reduces SIDS risk by 50%.',
      author: 'Dr. Michael Rodriguez, Pediatrician',
      category: 'consideration',
      importance: 'high'
    },
    {
      id: 'partnership-tip-1',
      tip: 'Divide night duties in shifts rather than both parents waking up. This ensures at least one parent gets solid sleep.',
      author: 'Amanda Foster, Parent Coach',
      category: 'consideration',
      importance: 'medium'
    },
    {
      id: 'preparation-tip-1',
      tip: 'Prepare freezer meals and organize help for the first 2-3 weeks. You\'ll be too exhausted to cook or clean regularly.',
      author: 'Rebecca Thompson, Postpartum Doula',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'childcare-tip-1',
      tip: 'Start researching childcare options by your second trimester. Quality providers often have 6-12 month waitlists.',
      author: 'David Park, Childcare Center Director',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'development-tip-1',
      tip: 'Tummy time starting from day one (when baby is awake and supervised) is crucial for neck strength and motor development.',
      author: 'Maria Gonzalez, Pediatric Physical Therapist',
      category: 'consideration',
      importance: 'medium'
    }
  ]
};

export const fitnessAthleticTrainingTemplate: GuidanceTemplate = {
  id: 'fitness-athletic-training',
  title: 'Fitness & Athletic Training',
  description: 'Comprehensive fitness and athletic training program design and performance optimization',
  category: 'health-fitness',
  icon: '💪',
  sections: [
    {
      id: 'fitness-assessment-goal-setting',
      title: 'Fitness Assessment & Goal Setting',
      description: 'Assess your current fitness level and establish specific, measurable performance goals',
      order: 1,
      reflectionPrompts: [
        {
          id: 'current-fitness-evaluation',
          prompt: "What is your current fitness level across different areas (cardiovascular endurance, strength, flexibility, body composition)?",
          category: 'research',
          helpText: 'Complete baseline fitness tests: 1-mile run/walk, push-ups, sit-ups, flexibility tests, body fat percentage. Record measurements for tracking progress.',
          relatedResources: ['fitness-assessment-protocols', 'body-composition-guide']
        },
        {
          id: 'athletic-background-analysis',
          prompt: 'What is your athletic background and previous training experience across different sports or activities?',
          category: 'research',
          helpText: 'Document past injuries, training methods used, sports played, current activities, and what has/hasn\'t worked for you previously.'
        },
        {
          id: 'specific-performance-goals',
          prompt: 'What specific, measurable fitness or athletic performance goals do you want to achieve in the next 3-6 months?',
          category: 'planning',
          helpText: 'Set SMART goals like "run 10K in under 50 minutes," "bench press 1.5x body weight," or "complete obstacle race." Include timeline and success metrics.'
        },
        {
          id: 'lifestyle-constraints-assessment',
          prompt: 'What time, equipment, and location constraints will affect your training schedule and program design?',
          category: 'planning',
          helpText: 'Consider work schedule, family commitments, gym access, home equipment, travel frequency, and budget for training resources.'
        },
        {
          id: 'motivation-accountability-systems',
          prompt: 'What internal and external motivation systems will keep you committed to your fitness journey?',
          category: 'planning',
          helpText: 'Identify workout partners, tracking apps, reward systems, public commitments, or professional support that will maintain motivation.'
        },
        {
          id: 'injury-prevention-priorities',
          prompt: 'What injury prevention strategies and mobility work should be prioritized based on your body and goals?',
          category: 'planning',
          helpText: 'Address past injuries, identify tight areas, weak links, movement patterns to improve, and preventive exercises to incorporate regularly.'
        }
      ]
    },
    {
      id: 'training-program-design',
      title: 'Training Program Design',
      description: 'Design a comprehensive training program that matches your goals and constraints',
      order: 2,
      reflectionPrompts: [
        {
          id: 'training-split-selection',
          prompt: "What training split and weekly schedule will best fit your goals, experience level, and time constraints?",
          category: 'planning',
          helpText: 'Consider full-body, upper/lower, push/pull/legs, or specialized splits. Factor in recovery needs, training frequency, and time per session.',
          relatedResources: ['training-split-guide', 'periodization-principles']
        },
        {
          id: 'exercise-selection-progression',
          prompt: 'What exercises will form the foundation of your program, and how will you progress them over time?',
          category: 'planning',
          helpText: 'Choose compound movements first, add isolation exercises, plan progression schemes (linear, undulating, block periodization).'
        },
        {
          id: 'cardiovascular-training-plan',
          prompt: 'How will you incorporate cardiovascular training to support your fitness goals?',
          category: 'planning',
          helpText: 'Balance HIIT, LISS, and sport-specific cardio based on goals. Consider heart rate zones, duration, frequency, and integration with strength training.'
        },
        {
          id: 'recovery-regeneration-protocol',
          prompt: 'What recovery and regeneration strategies will you implement to optimize adaptation and prevent burnout?',
          category: 'planning',
          helpText: 'Plan sleep optimization, active recovery days, stretching/mobility work, massage, stress management, and deload weeks.'
        },
        {
          id: 'training-load-management',
          prompt: 'How will you manage training volume, intensity, and frequency to optimize progress while avoiding overtraining?',
          category: 'planning',
          helpText: 'Use RPE scales, track training load, implement autoregulation, plan deload weeks, and monitor recovery markers.'
        },
        {
          id: 'equipment-facility-planning',
          prompt: 'What equipment and training facilities do you need access to for your program?',
          category: 'planning',
          helpText: 'Assess gym equipment, home setup needs, alternative options for travel, and backup plans for equipment unavailability.'
        }
      ]
    },
    {
      id: 'nutrition-supplementation',
      title: 'Nutrition & Supplementation',
      description: 'Optimize nutrition and supplementation to fuel performance and support recovery',
      order: 3,
      reflectionPrompts: [
        {
          id: 'nutritional-needs-assessment',
          prompt: "What are your daily caloric and macronutrient needs based on your goals, body composition, and activity level?",
          category: 'planning',
          helpText: 'Calculate BMR, TDEE, and adjust for training load. Set protein (0.8-1.2g/lb), fat (0.3-0.4g/lb), and carbohydrate targets for your goals.',
          relatedResources: ['sports-nutrition-guide', 'macro-calculation-tools']
        },
        {
          id: 'meal-timing-strategy',
          prompt: 'How will you time your meals and nutrients around training sessions for optimal performance and recovery?',
          category: 'planning',
          helpText: 'Plan pre-workout carbs/caffeine, intra-workout fuel for long sessions, and post-workout protein/carbs within 2-hour window.'
        },
        {
          id: 'hydration-electrolyte-management',
          prompt: 'What hydration and electrolyte strategy will you implement for training and daily life?',
          category: 'planning',
          helpText: 'Calculate fluid needs (0.5-1oz per lb bodyweight), increase for training/heat, monitor urine color, consider electrolyte replacement.'
        },
        {
          id: 'supplement-protocol-design',
          prompt: 'Which evidence-based supplements will support your training goals and overall health?',
          category: 'planning',
          helpText: 'Consider creatine, protein powder, vitamin D, omega-3s, magnesium. Research dosages, timing, and quality sources.'
        },
        {
          id: 'meal-prep-planning',
          prompt: 'How will you plan and prepare meals to ensure consistent nutrition despite busy schedules?',
          category: 'planning',
          helpText: 'Plan weekly meal prep sessions, batch cooking strategies, portable meal options, and backup plans for eating out.'
        },
        {
          id: 'body-composition-monitoring',
          prompt: 'How will you monitor changes in body composition and adjust nutrition accordingly?',
          category: 'planning',
          helpText: 'Track weight, measurements, photos, performance metrics. Adjust calories/macros based on 2-week trends, not daily fluctuations.'
        }
      ]
    },
    {
      id: 'performance-tracking-optimization',
      title: 'Performance Tracking & Optimization',
      description: 'Implement tracking systems and optimization strategies to monitor progress and breakthrough plateaus',
      order: 4,
      reflectionPrompts: [
        {
          id: 'progress-tracking-systems',
          prompt: "What metrics and tracking systems will you use to monitor fitness progress across different aspects of performance?",
          category: 'planning',
          helpText: 'Track strength (1RM tests, rep maxes), endurance (time trials, heart rate), body composition, flexibility, and subjective measures (energy, sleep).',
          relatedResources: ['fitness-tracking-guide', 'performance-testing-protocols']
        },
        {
          id: 'workout-logging-analysis',
          prompt: 'How will you log workouts and analyze training data to identify patterns and areas for improvement?',
          category: 'planning',
          helpText: 'Use apps, spreadsheets, or journals to track exercises, sets, reps, weights, RPE, and notes. Review weekly/monthly trends.'
        },
        {
          id: 'recovery-wellness-monitoring',
          prompt: 'What recovery and wellness metrics will you monitor to optimize training adaptation?',
          category: 'planning',
          helpText: 'Track sleep quality/duration, resting heart rate, HRV, subjective energy levels, soreness, and stress levels.'
        },
        {
          id: 'plateau-breakthrough-strategies',
          prompt: 'How will you identify and overcome training plateaus or performance stagnation?',
          category: 'planning',
          helpText: 'Plan program variations, deload weeks, technique refinement, addressing weak points, and periodization adjustments.'
        },
        {
          id: 'goal-reassessment-adjustment',
          prompt: 'When and how will you reassess goals and adjust your training program based on progress and changing priorities?',
          category: 'planning',
          helpText: 'Schedule monthly/quarterly reviews, assess goal relevance, celebrate achievements, set new challenges, and modify programs accordingly.'
        },
        {
          id: 'technology-tool-integration',
          prompt: 'What fitness technology and tools will enhance your training and tracking capabilities?',
          category: 'planning',
          helpText: 'Consider fitness trackers, heart rate monitors, apps, online coaching platforms, and analysis tools that fit your budget and needs.'
        }
      ]
    },
    {
      id: 'mental-performance-psychology',
      title: 'Mental Performance & Sports Psychology',
      description: 'Develop mental toughness, focus, and psychological skills for peak performance',
      order: 5,
      reflectionPrompts: [
        {
          id: 'mental-toughness-development',
          prompt: "How will you build mental resilience, focus, and the ability to perform under pressure?",
          category: 'planning',
          helpText: 'Practice visualization, positive self-talk, breathing techniques, and gradually increase training intensity to build mental fortitude.',
          relatedResources: ['sports-psychology-guide', 'mental-training-techniques']
        },
        {
          id: 'goal-visualization-techniques',
          prompt: 'What mental imagery and visualization practices will you use to enhance performance and motivation?',
          category: 'planning',
          helpText: 'Practice detailed visualization of successful performances, technique refinement, and goal achievement. Use all senses in mental rehearsal.'
        },
        {
          id: 'stress-anxiety-management',
          prompt: 'How will you manage pre-competition nerves, training stress, and performance anxiety?',
          category: 'planning',
          helpText: 'Develop coping strategies: breathing exercises, progressive muscle relaxation, reframing negative thoughts, and pre-performance routines.'
        },
        {
          id: 'concentration-focus-training',
          prompt: 'What strategies will you use to maintain focus and concentration during training and competition?',
          category: 'planning',
          helpText: 'Practice mindfulness meditation, attention control exercises, cue words, and develop routines that promote optimal focus states.'
        },
        {
          id: 'motivation-adherence-strategies',
          prompt: 'How will you maintain long-term motivation and adherence to your training program through challenges?',
          category: 'planning',
          helpText: 'Set process and outcome goals, create reward systems, find training partners, track progress, and remind yourself of your why.'
        },
        {
          id: 'performance-psychology-tools',
          prompt: 'What specific mental training tools and techniques will you incorporate into your routine?',
          category: 'planning',
          helpText: 'Consider meditation apps, journaling, affirmations, breathing exercises, pre-performance rituals, and working with a sports psychologist.'
        }
      ]
    },
    {
      id: 'injury-prevention-management',
      title: 'Injury Prevention & Management',
      description: 'Proactively prevent injuries and manage movement quality for long-term athletic health',
      order: 6,
      reflectionPrompts: [
        {
          id: 'injury-risk-assessment',
          prompt: "What are your injury risk factors, and how will you address them proactively?",
          category: 'research',
          helpText: 'Identify previous injuries, muscle imbalances, movement limitations, training errors, and lifestyle factors that increase injury risk.',
          relatedResources: ['injury-prevention-guide', 'movement-screening-protocols']
        },
        {
          id: 'movement-quality-screening',
          prompt: 'How will you assess and improve movement quality and address any dysfunctional patterns?',
          category: 'planning',
          helpText: 'Perform movement screens, identify limitations, work with professionals for corrective exercises, and prioritize quality over quantity.'
        },
        {
          id: 'warm-up-cool-down-protocols',
          prompt: 'What comprehensive warm-up and cool-down protocols will you implement for every training session?',
          category: 'planning',
          helpText: 'Design dynamic warm-ups to prepare the body, and proper cool-downs with static stretching and recovery techniques.'
        },
        {
          id: 'strength-mobility-balance',
          prompt: 'How will you balance strength training with mobility and flexibility work throughout your program?',
          category: 'planning',
          helpText: 'Integrate daily mobility work, strength training, and corrective exercises to maintain muscle balance and joint health.'
        },
        {
          id: 'injury-response-protocols',
          prompt: 'What protocols will you follow if you experience pain or injury during training?',
          category: 'planning',
          helpText: 'Establish when to stop, when to seek professional help, how to modify training, and rehabilitation approaches.'
        },
        {
          id: 'long-term-health-planning',
          prompt: 'How will you structure your training for long-term athletic health and injury prevention as you age?',
          category: 'planning',
          helpText: 'Plan for age-appropriate training modifications, recovery emphasis, and sustainable practices for lifelong fitness.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'fitness-assessment-protocols',
      title: 'Comprehensive Fitness Assessment Protocols',
      type: 'guide',
      excerpt: 'Complete fitness assessment protocols to establish baseline measurements and track progress across all fitness components',
      content: 'Complete fitness assessments should include multiple components to get a full picture of your current fitness level. Cardiovascular assessments can include a 1-mile walk/run test, step test, or VO2 max estimation. For strength, test major movement patterns with 1-rep max or rep-max tests for bench press, squat, deadlift, and pull-ups. Flexibility should be assessed through sit-and-reach tests, shoulder mobility checks, and hip flexibility screens. Body composition can be measured through bioelectrical impedance, DEXA scans, or circumference measurements. Record all baseline measurements and retest every 4-8 weeks to track progress. Include movement quality assessments like overhead squat screens to identify mobility limitations or muscle imbalances that could lead to injury.',
      tags: ['fitness-assessment', 'baseline-testing', 'progress-tracking', 'movement-screening'],
      readTime: '8 min',
      difficulty: 'intermediate'
    },
    {
      id: 'training-split-guide',
      title: 'Training Split Design & Periodization Guide',
      type: 'guide',
      excerpt: 'Design effective training splits and periodization strategies based on experience level and goals',
      content: 'Training splits should be designed based on your experience level, goals, and available training time. Beginners benefit from full-body routines 3x per week, focusing on compound movements and basic movement patterns. Intermediate trainees can progress to upper/lower splits or push/pull/legs routines. Advanced athletes may use more specialized splits like body part specialization or conjugate methods. Periodization involves planned variation in training variables over time. Linear periodization gradually increases intensity while decreasing volume. Undulating periodization varies training loads within each week. Block periodization focuses on specific adaptations in 2-4 week blocks. Include deload weeks every 4-6 weeks to promote recovery and prevent overtraining. Match your training split to your recovery capacity and life demands.',
      tags: ['training-splits', 'periodization', 'program-design', 'recovery'],
      readTime: '10 min',
      difficulty: 'intermediate'
    },
    {
      id: 'sports-nutrition-guide',
      title: 'Sports Nutrition & Performance Fueling Guide',
      type: 'guide',
      excerpt: 'Comprehensive sports nutrition guidance for optimal performance and body composition goals',
      content: 'Sports nutrition should be tailored to your training demands and body composition goals. Calculate your Total Daily Energy Expenditure (TDEE) and adjust calories based on whether you\'re trying to lose fat, maintain weight, or gain muscle. Protein needs are 0.8-1.2g per pound of body weight for active individuals. Carbohydrates should comprise 3-7g per kg of body weight depending on training volume. Fats should be 0.3-0.4g per pound of body weight for hormone production and vitamin absorption. Time your nutrition around training: consume easily digestible carbs 1-2 hours before training, consider intra-workout nutrition for sessions longer than 90 minutes, and prioritize protein and carbs within 2 hours post-workout. Stay hydrated with 0.5-1 ounce of water per pound of body weight daily, increasing during intense training or hot weather.',
      tags: ['sports-nutrition', 'performance-fueling', 'macronutrients', 'meal-timing'],
      readTime: '12 min',
      difficulty: 'intermediate'
    },
    {
      id: 'injury-prevention-guide',
      title: 'Injury Prevention & Movement Quality Guide',
      type: 'guide',
      excerpt: 'Comprehensive injury prevention strategies and movement quality protocols for long-term athletic health',
      content: 'Injury prevention should be a cornerstone of any training program. Start with movement quality assessments to identify limitations or imbalances. Common issues include poor hip mobility, thoracic spine stiffness, ankle restrictions, and shoulder impingement. Address these through targeted mobility work and corrective exercises. Implement proper warm-up protocols that include dynamic movements, activation exercises, and movement preparation specific to your training session. Always prioritize technique over load progression. Use the 10% rule for volume increases and avoid rapid training load spikes. Include regular soft tissue work through foam rolling, massage, or self-myofascial release. Monitor training load and recovery markers like sleep quality, resting heart rate, and subjective energy levels. Have protocols in place for addressing pain or injury, including when to modify training, when to seek professional help, and how to safely return to full training.',
      tags: ['injury-prevention', 'movement-quality', 'warm-up-protocols', 'recovery-monitoring'],
      readTime: '15 min',
      difficulty: 'intermediate'
    },
    {
      id: 'fitness-tracking-guide',
      title: 'Performance Tracking & Progress Monitoring Guide',
      type: 'guide',
      excerpt: 'Systematic approach to tracking fitness progress using objective measurements and subjective assessments',
      content: 'Effective tracking involves both objective measurements and subjective assessments. Track strength progress through rep maxes, volume progression (sets x reps x weight), and rate of perceived exertion (RPE). Monitor cardiovascular improvements through heart rate data, time trials, and recovery heart rate. Body composition can be tracked through measurements, photos, and how clothes fit rather than just scale weight. Use technology wisely: fitness trackers for daily activity and sleep, heart rate monitors for training intensity, and apps for workout logging. Track recovery markers including sleep quality/duration, resting heart rate, heart rate variability (if available), and subjective energy levels. Maintain training logs with exercises, weights, sets, reps, RPE, and notes about how you felt. Review progress weekly and monthly, looking for trends rather than day-to-day fluctuations. Adjust your program based on data: if strength gains stall, consider deload weeks or program modifications. If recovery markers decline, prioritize rest and stress management.',
      tags: ['fitness-tracking', 'progress-monitoring', 'data-analysis', 'performance-metrics'],
      readTime: '11 min',
      difficulty: 'intermediate'
    }
  ],
  expertTips: [
    {
      id: 'consistency-tip-1',
      tip: 'Consistency beats perfection every time. A mediocre workout done regularly will produce better results than perfect workouts done sporadically.',
      author: 'Dr. Brad Schoenfeld, Exercise Scientist',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'progressive-overload-tip-1',
      tip: 'Progressive overload is the foundation of all fitness gains. Track your workouts and aim to gradually increase volume, intensity, or complexity over time.',
      author: 'Mike Israetel, Sports Scientist',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'recovery-tip-1',
      tip: 'Recovery is where adaptation happens. Prioritize 7-9 hours of quality sleep and don\'t underestimate the power of stress management.',
      author: 'Dr. Matthew Walker, Sleep Researcher',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'nutrition-timing-tip-1',
      tip: 'Total daily nutrition matters more than precise timing for most people. Focus on hitting your daily protein and calorie targets consistently.',
      author: 'Eric Helms, Natural Bodybuilding Coach',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'movement-quality-tip-1',
      tip: 'Master bodyweight movements before adding external load. If you can\'t control your own body weight perfectly, you\'re not ready for heavy weights.',
      author: 'Gray Cook, Functional Movement Systems',
      category: 'consideration',
      importance: 'medium'
    },
    {
      id: 'goal-setting-tip-1',
      tip: 'Set both process goals (workouts per week) and outcome goals (strength targets). Process goals keep you consistent while outcome goals provide direction.',
      author: 'Dr. John Berardi, Precision Nutrition',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'plateau-tip-1',
      tip: 'Plateaus are normal and expected. When progress stalls, analyze your program, recovery, and nutrition before making drastic changes.',
      author: 'Chad Wesley Smith, Powerlifting Coach',
      category: 'consideration',
      importance: 'medium'
    },
    {
      id: 'mindset-tip-1',
      tip: 'View fitness as a lifelong practice, not a temporary fix. Small, sustainable changes compound into remarkable results over years.',
      author: 'James Clear, Author of Atomic Habits',
      category: 'consideration',
      importance: 'medium'
    }
  ]
};

export const travelPlanningAdventureTemplate: GuidanceTemplate = {
  id: 'travel-planning-adventure',
  title: 'Travel Planning & Adventure Design',
  description: 'Complete travel planning and adventure design from inspiration to execution',
  category: 'travel-adventure',
  icon: '🗺️',
  sections: [
    {
      id: 'travel-vision-goals',
      title: 'Travel Vision & Goals',
      description: 'Define your travel motivations, style, and personal growth intentions',
      order: 1,
      reflectionPrompts: [
        {
          id: 'travel-motivation',
          prompt: "What draws you to travel? What do you hope to gain from this specific trip or adventure?",
          category: 'consideration',
          helpText: 'Consider adventure, relaxation, cultural immersion, personal growth, photography, food, history, or spiritual reasons.',
          relatedResources: ['travel-style-guide', 'destination-matching-tool']
        },
        {
          id: 'travel-style-preferences',
          prompt: 'What type of traveler are you? Do you prefer luxury, budget, adventure, cultural, or off-the-beaten-path experiences?',
          category: 'consideration',
          helpText: 'Understanding your travel style helps narrow destination choices and plan appropriate accommodations and activities.'
        },
        {
          id: 'comfort-zone-boundaries',
          prompt: 'How far outside your comfort zone are you willing to go? What are your non-negotiable comfort requirements?',
          category: 'research',
          helpText: 'Consider language barriers, food restrictions, accommodation standards, safety concerns, and physical activity levels.'
        },
        {
          id: 'travel-companions',
          prompt: 'Who will you be traveling with, and how do their preferences align or differ from yours?',
          category: 'planning',
          helpText: 'Plan for different energy levels, interests, budgets, and comfort zones when traveling with others.'
        },
        {
          id: 'memorable-experience-priorities',
          prompt: 'What experiences do you absolutely want to have? What would make this trip unforgettable for you?',
          category: 'planning',
          helpText: 'Prioritize must-do experiences early in planning to ensure availability and proper preparation.'
        },
        {
          id: 'personal-growth-intentions',
          prompt: 'How do you want to grow or challenge yourself through this travel experience?',
          category: 'consideration',
          helpText: 'Travel can build confidence, cultural awareness, problem-solving skills, and self-reliance. Set intentional growth goals.'
        }
      ]
    },
    {
      id: 'destination-research-selection',
      title: 'Destination Research & Selection',
      description: 'Research and select destinations that match your criteria and travel goals',
      order: 2,
      reflectionPrompts: [
        {
          id: 'destination-criteria',
          prompt: 'What criteria are most important for your destination choice (climate, culture, activities, budget, safety, accessibility)?',
          category: 'planning',
          helpText: 'Rank factors like weather patterns, cultural experiences, adventure opportunities, cost of living, political stability.'
        },
        {
          id: 'seasonal-timing-considerations',
          prompt: 'How do seasonal factors (weather, crowds, prices, local events) influence your destination and timing choices?',
          category: 'research',
          helpText: 'Research peak/off-season trade-offs, monsoon seasons, festival calendars, and local holidays that might affect your experience.'
        },
        {
          id: 'cultural-preparation',
          prompt: 'What cultural norms, customs, and etiquette should you learn about your chosen destination?',
          category: 'research',
          helpText: 'Research dress codes, tipping practices, religious customs, social norms, and basic language phrases for respectful travel.'
        },
        {
          id: 'safety-security-assessment',
          prompt: 'What safety considerations and security measures should you plan for your destination?',
          category: 'planning',
          helpText: 'Check travel advisories, research common scams, identify safe neighborhoods, plan emergency contacts and procedures.'
        },
        {
          id: 'local-insights-connections',
          prompt: 'How will you access local knowledge and authentic experiences beyond typical tourist attractions?',
          category: 'research',
          helpText: 'Consider local guides, homestays, community tourism, local food tours, or connections through social networks.'
        },
        {
          id: 'backup-alternatives',
          prompt: 'What backup destinations or alternative plans will you have in case of unexpected changes?',
          category: 'planning',
          helpText: 'Plan for weather disruptions, political issues, health concerns, or transportation problems that might require itinerary changes.'
        }
      ]
    },
    {
      id: 'budget-logistics-planning',
      title: 'Budget & Logistics Planning',
      description: 'Plan your travel budget, transportation, and essential logistics',
      order: 3,
      reflectionPrompts: [
        {
          id: 'travel-budget-allocation',
          prompt: 'What is your total travel budget, and how will you allocate it across transportation, accommodation, food, and activities?',
          category: 'planning',
          helpText: 'Typical allocation: 25% transport, 30% accommodation, 25% food, 20% activities. Adjust based on your priorities.'
        },
        {
          id: 'cost-saving-strategies',
          prompt: 'What cost-saving strategies align with your travel style and comfort requirements?',
          category: 'planning',
          helpText: 'Consider off-season travel, alternative accommodations, local transportation, free activities, cooking some meals.'
        },
        {
          id: 'transportation-logistics',
          prompt: 'How will you get to and around your destination? What transportation options best fit your itinerary and budget?',
          category: 'planning',
          helpText: 'Compare flights, trains, buses, rental cars. Consider internal transportation: public transit, taxis, rideshare, walking.'
        },
        {
          id: 'accommodation-preferences',
          prompt: 'What type of accommodation best suits your travel style, budget, and desire for local experiences?',
          category: 'planning',
          helpText: 'Hotels, hostels, Airbnb, guesthouses, homestays each offer different experiences and price points.'
        },
        {
          id: 'travel-insurance-preparation',
          prompt: 'What travel insurance and emergency preparations do you need for your destination and activities?',
          category: 'consideration',
          helpText: 'Consider medical coverage, trip cancellation, adventure activity coverage, and emergency evacuation insurance.'
        },
        {
          id: 'documentation-requirements',
          prompt: 'What travel documents, visas, vaccinations, or permits do you need for your destination?',
          category: 'planning',
          helpText: 'Check passport validity, visa requirements, vaccination recommendations, and special permits for activities or areas.'
        }
      ]
    },
    {
      id: 'itinerary-experience-design',
      title: 'Itinerary & Experience Design',
      description: 'Design your itinerary balancing must-do experiences with spontaneous discovery',
      order: 4,
      reflectionPrompts: [
        {
          id: 'itinerary-pacing-philosophy',
          prompt: 'What is your preferred travel pace? Do you like packed itineraries or prefer spontaneous, slower exploration?',
          category: 'planning',
          helpText: 'Consider your energy levels, travel experience, and whether you prefer planned activities or discovering things naturally.'
        },
        {
          id: 'must-do-experience-prioritization',
          prompt: 'What are your absolute must-do experiences, and how will you ensure they happen while leaving room for serendipity?',
          category: 'planning',
          helpText: 'Book essential experiences in advance, but leave 30-40% of your time unscheduled for spontaneous discoveries.'
        },
        {
          id: 'local-authentic-experiences',
          prompt: 'How will you balance popular tourist attractions with authentic local experiences?',
          category: 'planning',
          helpText: 'Consider local festivals, markets, neighborhoods, restaurants, and activities that locals actually do.'
        },
        {
          id: 'rest-recovery-planning',
          prompt: 'How will you build in rest, recovery, and buffer time to prevent travel burnout?',
          category: 'consideration',
          helpText: 'Plan lighter days, buffer time between activities, and recovery time from long travel days or intense activities.'
        },
        {
          id: 'weather-season-adaptability',
          prompt: 'How will you adapt your itinerary to seasonal conditions and unexpected weather?',
          category: 'planning',
          helpText: 'Have indoor/outdoor alternatives, flexible bookings, and clothing for various weather conditions.'
        },
        {
          id: 'solo-group-activity-balance',
          prompt: 'If traveling with others, how will you balance group activities with individual interests and alone time?',
          category: 'planning',
          helpText: 'Plan some group activities, some individual time, and clear communication about preferences and expectations.'
        }
      ]
    },
    {
      id: 'travel-documentation-reflection',
      title: 'Travel Documentation & Reflection',
      description: 'Document your journey and reflect on experiences for personal growth',
      order: 6,
      reflectionPrompts: [
        {
          id: 'documentation-approach',
          prompt: 'How will you document your travels while staying present and engaged with your experiences?',
          category: 'consideration',
          helpText: 'Balance capturing memories with living in the moment. Consider journaling, photography styles, and social media approaches.'
        },
        {
          id: 'meaningful-souvenir-strategy',
          prompt: 'What approach will you take to collecting meaningful mementos versus avoiding travel clutter?',
          category: 'planning',
          helpText: 'Focus on experiences over objects. Consider practical items, local crafts, or digital memories that truly represent your journey.'
        },
        {
          id: 'travel-learning-goals',
          prompt: 'What do you want to learn or discover about yourself, others, or the world through this travel experience?',
          category: 'consideration',
          helpText: 'Set learning intentions: cultural understanding, personal challenges, skill development, or perspective shifts.'
        },
        {
          id: 'post-travel-integration',
          prompt: 'How will you process and integrate your travel experiences into your daily life after returning home?',
          category: 'planning',
          helpText: 'Plan reflection time, share experiences, apply lessons learned, maintain connections made, and avoid post-travel depression.'
        },
        {
          id: 'sustainable-travel-impact',
          prompt: 'What steps will you take to minimize negative environmental and cultural impacts of your travel?',
          category: 'consideration',
          helpText: 'Consider carbon offset, local businesses, sustainable accommodations, waste reduction, and respectful cultural engagement.'
        },
        {
          id: 'future-travel-inspiration',
          prompt: 'How might this travel experience inform and inspire your future adventures and life decisions?',
          category: 'consideration',
          helpText: 'Use travel to expand worldview, build confidence, develop interests, create connections, and plan future explorations.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'travel-style-guide',
      title: 'Travel Style Assessment & Destination Matching Guide',
      type: 'guide' as const,
      excerpt: 'Discover your travel personality and match destinations to your preferences for more fulfilling adventures.',
      content: 'Understanding your travel style is crucial for creating satisfying travel experiences that align with your personality, interests, and comfort levels. Travel styles can be broadly categorized into several types: luxury travelers who prioritize comfort and high-end experiences; budget travelers who maximize experiences while minimizing costs; adventure travelers seeking thrilling and challenging activities; cultural immersion travelers focused on authentic local experiences; and relaxation travelers prioritizing rest and rejuvenation. Most travelers are a combination of these styles. Your travel style influences every aspect of your trip planning, from destination selection to accommodation choices, activity planning, and budget allocation. Consider your past travel experiences: what energized you versus what drained you? Do you prefer structured itineraries or spontaneous exploration? Are you comfortable with language barriers and cultural differences? Do you need certain amenities or can you rough it? Understanding these preferences helps you choose destinations and plan experiences that will truly fulfill your travel goals rather than leaving you stressed or unsatisfied.',
      tags: ['travel-style', 'destination-matching', 'personality-assessment'],
      readTime: '8 min read',
      difficulty: 'beginner' as const
    },
    {
      id: 'destination-research-methodology',
      title: 'Comprehensive Destination Research Methodology',
      type: 'guide' as const,
      excerpt: 'Master the art of thorough destination research using multiple sources and systematic evaluation.',
      content: 'Effective destination research involves multiple information sources and systematic evaluation criteria. Start with official tourism boards and government travel advisories for current safety and entry requirements. Use travel blogs and forums like Lonely Planet Thorn Tree or TripAdvisor for real traveler experiences, but verify recent information as conditions change. Social media platforms like Instagram and YouTube provide visual inspiration but may not reflect typical experiences. Research seasonal weather patterns, not just average temperatures - consider rainfall, humidity, natural disaster seasons, and how weather affects activities. Investigate local events, festivals, and holidays that might enhance or complicate your visit. Understand the economic situation: currency strength, cost of living, tipping culture, and payment methods accepted. Research transportation infrastructure: how to get around, safety of public transport, road conditions for driving, and domestic flight options. Look into cultural norms: dress codes, social behaviors, business hours, meal times, and religious considerations. Use multiple sources and cross-reference information, as single sources may be outdated or biased.',
      tags: ['destination-research', 'travel-planning', 'research-methodology'],
      readTime: '10 min read',
      difficulty: 'intermediate' as const
    },
    {
      id: 'travel-budget-planning-tool',
      title: 'Travel Budget Planning & Cost Optimization Tool',
      type: 'tool' as const,
      excerpt: 'Create accurate travel budgets and optimize costs with systematic planning and research strategies.',
      content: 'Creating an accurate travel budget requires research and realistic expectations about destination costs and your spending habits. Start by categorizing expenses into major buckets: transportation (flights, local transport, transfers), accommodation (hotels, Airbnb, hostels), food (restaurants, groceries, street food), activities (tours, attractions, experiences), and miscellaneous (shopping, tips, emergencies). Research actual costs using booking sites, local tourism websites, and recent traveler reports. Add a 15-20% buffer for unexpected expenses and currency fluctuations. Transportation typically represents 25-40% of your budget for international trips. Accommodation costs vary dramatically by location and style - hostels might be $15-30/night while luxury hotels can exceed $300. Food costs depend on your dining preferences: street food and local markets offer authentic experiences at low cost, while tourist restaurants can be expensive. Activity costs add up quickly - research free alternatives like hiking, beaches, markets, and cultural sites. Track spending during travel using apps or simple notebooks. Consider travel rewards credit cards, off-season timing, alternative accommodations, and bundled deals for cost savings.',
      tags: ['budget-planning', 'cost-optimization', 'travel-finance'],
      readTime: '12 min read',
      difficulty: 'intermediate' as const
    },
    {
      id: 'cultural-sensitivity-travel-guide',
      title: 'Cultural Sensitivity & Respectful Travel Guide',
      type: 'guide' as const,
      excerpt: 'Travel respectfully with cultural awareness, local customs knowledge, and sustainable practices.',
      content: 'Respectful travel requires preparation, awareness, and ongoing sensitivity to local cultures and customs. Before traveling, research basic cultural norms: greeting customs, appropriate dress codes, religious practices, social hierarchies, and taboo topics or behaviors. Learn basic phrases in the local language - even simple greetings and "thank you" show respect and often improve interactions. Understand tipping culture, bargaining customs, and appropriate ways to photograph people and places. Dress modestly and appropriately, especially when visiting religious sites or conservative cultures. Be aware of non-verbal communication differences: eye contact, personal space, gestures, and touching norms vary significantly across cultures. Show respect for local customs even if you don\'t understand them - observe how locals behave and follow their lead. Support local economies by choosing locally-owned businesses, buying authentic crafts from artisans, and using local guides and services. Be mindful of your environmental impact: follow local guidelines for waste disposal, water usage, and wildlife interaction. Avoid contributing to overtourism by choosing less crowded alternatives when possible. Remember that you are a guest in someone else\'s home - approach new cultures with humility, curiosity, and respect rather than judgment or comparison to your own culture.',
      tags: ['cultural-sensitivity', 'respectful-travel', 'sustainable-tourism'],
      readTime: '9 min read',
      difficulty: 'beginner' as const
    },
    {
      id: 'adventure-safety-preparation-guide',
      title: 'Adventure Travel Safety & Preparation Guide',
      type: 'guide' as const,
      excerpt: 'Stay safe during adventure travel with comprehensive risk assessment and emergency preparedness.',
      content: 'Adventure travel requires additional safety preparation and risk management beyond typical tourism. Start with honest assessment of your physical fitness, experience level, and risk tolerance. Research specific risks associated with your planned activities: altitude sickness for high-altitude destinations, wildlife encounters, extreme weather, water safety, and equipment requirements. Invest in appropriate travel insurance that covers adventure activities - many standard policies exclude "dangerous" activities like mountaineering, diving, or extreme sports. Get necessary medical clearances and vaccinations, and carry comprehensive first aid supplies appropriate for your activities and destination remoteness. Learn basic emergency procedures relevant to your activities: wilderness first aid, water rescue, or altitude sickness recognition. Research local emergency services and evacuation procedures - how to contact help and how long rescue might take. Pack and understand how to use safety equipment: GPS devices, emergency beacons, water purification, weather protection. Travel with experienced guides for high-risk activities, especially in unfamiliar environments. Inform others of your detailed itinerary and check-in schedule. Consider satellite communication devices for remote areas without cell coverage. Maintain conservative decision-making: turn back if conditions deteriorate, respect local warnings, and don\'t let group pressure override safety judgments.',
      tags: ['adventure-travel', 'safety-preparation', 'risk-management'],
      readTime: '11 min read',
      difficulty: 'expert' as const
    }
  ],
  expertTips: [
    {
      id: 'travel-planning-tip-1',
      tip: 'Book flights and accommodation first, then build your itinerary around them. Flexibility in dates can save hundreds of dollars on flights.',
      author: 'Rick Steves, Travel Expert',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'cultural-immersion-tip-1',
      tip: 'Stay in locally-owned accommodations and eat where locals eat. You\'ll have more authentic experiences and support the local economy.',
      author: 'Anthony Bourdain, Travel & Food Author',
      category: 'consideration',
      importance: 'high'
    },
    {
      id: 'packing-tip-1',
      tip: 'Pack half the clothes and twice the money you think you need. You\'ll buy clothes locally and need funds for unexpected opportunities.',
      author: 'Samantha Brown, Travel TV Host',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'safety-tip-1',
      tip: 'Trust your instincts about people and situations. If something feels off, remove yourself from the situation politely but quickly.',
      author: 'Patricia Schultz, Travel Safety Expert',
      category: 'consideration',
      importance: 'high'
    },
    {
      id: 'itinerary-tip-1',
      tip: 'Build buffer time into your itinerary. The best travel experiences often come from unexpected detours and spontaneous discoveries.',
      author: 'Paul Theroux, Travel Writer',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'documentation-tip-1',
      tip: 'Take photos of important documents and store them in cloud storage. Keep physical and digital copies separate from originals.',
      author: 'Pauline Frommer, Travel Guide Author',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'local-connection-tip-1',
      tip: 'Use apps like Meetup or local Facebook groups to connect with locals and fellow travelers. The people you meet often become the highlight of your trip.',
      author: 'Matt Kepnes (Nomadic Matt), Travel Blogger',
      category: 'consideration',
      importance: 'medium'
    },
    {
      id: 'sustainable-travel-tip-1',
      tip: 'Choose overland transportation when practical and offset flights when not. Travel slowly to reduce environmental impact and increase cultural immersion.',
      author: 'Juliet Kinsman, Sustainable Travel Expert',
      category: 'consideration',
      importance: 'medium'
    }
  ]
};

export const freelanceGigEconomyTemplate: GuidanceTemplate = {
  id: 'freelance-gig-economy',
  title: 'Freelance & Gig Economy Success',
  description: 'Build a successful freelance career and thrive in the gig economy',
  category: 'career-business',
  icon: '🎯',
  sections: [
    {
      id: 'skill-assessment-development',
      title: 'Skill Assessment & Development',
      description: 'Assess your current professional skills and create a development plan for career growth.',
      order: 1,
      reflectionPrompts: [
        {
          id: 'current-skills-audit',
          prompt: "What skills do you currently possess that could be monetized in the freelance market?",
          category: 'research',
          helpText: 'Consider technical skills, creative abilities, knowledge areas, soft skills, and life experiences that others would pay for.',
          relatedResources: ['skill-monetization-guide', 'freelance-market-analysis']
        },
        {
          id: 'market-demand-research',
          prompt: 'What freelance services are in highest demand in your field, and what skills gaps exist?',
          category: 'research',
          helpText: 'Research freelance platforms, job boards, industry reports, and competitor analysis to identify lucrative opportunities.'
        },
        {
          id: 'skill-development-strategy',
          prompt: 'What specific skills do you need to develop or improve to command higher rates and better projects?',
          category: 'planning',
          helpText: 'Focus on high-value skills that are difficult to automate or outsource. Consider certifications, courses, and hands-on practice.'
        },
        {
          id: 'niche-specialization-decision',
          prompt: 'Will you position yourself as a generalist or specialize in a specific niche? What are the trade-offs?',
          category: 'planning',
          helpText: 'Specialists often command higher rates but have smaller markets. Generalists have more opportunities but more competition.'
        },
        {
          id: 'portfolio-development-plan',
          prompt: 'How will you build a compelling portfolio that demonstrates your expertise and attracts ideal clients?',
          category: 'planning',
          helpText: 'Include diverse examples, case studies with results, testimonials, and work that showcases your problem-solving abilities.'
        },
        {
          id: 'continuous-learning-commitment',
          prompt: 'What ongoing learning plan will you implement to stay current and competitive in your field?',
          category: 'planning',
          helpText: 'Industries evolve rapidly. Plan time and budget for courses, conferences, networking, and staying updated on trends.'
        }
      ]
    },
    {
      id: 'business-setup-legalities',
      title: 'Business Setup & Legal Framework',
      description: 'Establish proper business structure and legal foundations for your freelance practice.',
      order: 2,
      reflectionPrompts: [
        {
          id: 'business-structure-choice',
          prompt: 'What business structure (sole proprietorship, LLC, corporation) best fits your freelance goals and risk tolerance?',
          category: 'research',
          helpText: 'Consider liability protection, tax implications, complexity, and costs. Most freelancers start with sole proprietorship or LLC.'
        },
        {
          id: 'financial-systems-setup',
          prompt: 'How will you manage business finances, taxes, and separate personal from business expenses?',
          category: 'planning',
          helpText: 'Open separate business accounts, choose accounting software, understand quarterly tax obligations, track deductible expenses.'
        },
        {
          id: 'contracts-agreements',
          prompt: 'What standard contracts and agreements do you need to protect yourself and set clear expectations?',
          category: 'research',
          helpText: 'Create templates for service agreements, NDAs, statement of work documents, and payment terms that protect your interests.'
        },
        {
          id: 'insurance-risk-management',
          prompt: 'What insurance coverage and risk management strategies do you need as a freelancer?',
          category: 'consideration',
          helpText: 'Consider professional liability, general liability, cyber liability, and disability insurance based on your services.'
        },
        {
          id: 'intellectual-property-protection',
          prompt: 'How will you protect your intellectual property and respect client intellectual property rights?',
          category: 'research',
          helpText: 'Understand copyright, trademark, work-for-hire agreements, and how to retain rights to your processes and methodologies.'
        },
        {
          id: 'workspace-tools-setup',
          prompt: 'What physical workspace, technology tools, and software do you need for professional operation?',
          category: 'planning',
          helpText: 'Consider home office deduction requirements, professional equipment, communication tools, project management software.'
        }
      ]
    },
    {
      id: 'pricing-positioning-strategy',
      title: 'Pricing & Market Positioning',
      description: 'Develop competitive pricing strategies and position your services effectively in the market.',
      order: 3,
      reflectionPrompts: [
        {
          id: 'market-rate-research',
          prompt: 'What are the current market rates for your services across different experience levels and specializations?',
          category: 'research',
          helpText: 'Research freelance platforms, industry surveys, competitor analysis, and client budgets to understand rate ranges.'
        },
        {
          id: 'value-proposition-definition',
          prompt: 'What unique value do you provide that justifies your rates compared to competitors?',
          category: 'planning',
          helpText: 'Consider specialized expertise, faster delivery, better results, industry knowledge, or unique approach that sets you apart.'
        },
        {
          id: 'pricing-model-selection',
          prompt: 'Will you charge hourly, project-based, retainer, or value-based rates? What are the pros and cons of each?',
          category: 'planning',
          helpText: 'Hourly caps your income, project-based requires accurate scoping, retainers provide stability, value-based maximizes profit.'
        },
        {
          id: 'rate-progression-strategy',
          prompt: 'How will you systematically increase your rates as you gain experience and expertise?',
          category: 'planning',
          helpText: 'Plan rate increases based on skill development, portfolio growth, client testimonials, and market positioning improvements.'
        },
        {
          id: 'client-tier-segmentation',
          prompt: 'How will you segment different client tiers and adapt your pricing and service levels accordingly?',
          category: 'planning',
          helpText: 'Consider budget-conscious startups, established SMBs, and enterprise clients with different needs and payment capabilities.'
        },
        {
          id: 'competitive-positioning',
          prompt: 'How will you position yourself relative to competitors: premium, mid-market, or budget option?',
          category: 'planning',
          helpText: 'Your positioning affects everything from pricing to marketing to client expectations. Choose strategically based on your goals.'
        }
      ]
    },
    {
      id: 'client-acquisition-marketing',
      title: 'Client Acquisition & Marketing',
      order: 4,
      reflectionPrompts: [
        {
          id: 'target-client-definition',
          prompt: 'Who is your ideal client in terms of industry, company size, project type, and budget?',
          category: 'planning',
          helpText: 'Define specific client personas including pain points, decision-making process, budget ranges, and communication preferences.'
        },
        {
          id: 'marketing-channel-strategy',
          prompt: 'Which marketing channels will you use to reach your target clients most effectively?',
          category: 'planning',
          helpText: 'Consider content marketing, social media, networking events, referrals, freelance platforms, cold outreach, and partnerships.'
        },
        {
          id: 'personal-brand-development',
          prompt: 'How will you build and communicate your personal brand across all touchpoints?',
          category: 'planning',
          helpText: 'Define your brand personality, messaging, visual identity, and ensure consistency across website, social media, and communications.'
        },
        {
          id: 'content-marketing-plan',
          prompt: 'What content will you create to demonstrate expertise and attract clients?',
          category: 'planning',
          helpText: 'Consider blog posts, case studies, tutorials, videos, podcasts, or industry insights that showcase your knowledge and problem-solving abilities.'
        },
        {
          id: 'networking-relationship-building',
          prompt: 'How will you build relationships within your industry and target client communities?',
          category: 'planning',
          helpText: 'Join professional associations, attend industry events, participate in online communities, and maintain relationships with past clients and colleagues.'
        },
        {
          id: 'referral-system-development',
          prompt: 'What systems will you create to encourage and manage referrals from satisfied clients?',
          category: 'planning',
          helpText: 'Develop referral incentives, follow-up processes, and make it easy for clients to recommend you to their network.'
        }
      ]
    },
    {
      id: 'business-growth-scaling',
      title: 'Business Growth & Scaling Strategies',
      order: 6,
      reflectionPrompts: [
        {
          id: 'growth-goals-vision',
          prompt: 'What does success look like for your freelance business in 1, 3, and 5 years?',
          category: 'consideration',
          helpText: 'Define specific revenue goals, client types, service offerings, team size, and lifestyle objectives that guide your strategic decisions.'
        },
        {
          id: 'service-expansion-strategy',
          prompt: 'How will you expand your service offerings or develop new revenue streams over time?',
          category: 'planning',
          helpText: 'Consider complementary services, higher-value offerings, productized services, passive income streams, or adjacent market opportunities.'
        },
        {
          id: 'team-building-delegation',
          prompt: 'When and how will you start building a team or outsourcing work to scale beyond your personal capacity?',
          category: 'planning',
          helpText: 'Plan for hiring contractors, virtual assistants, or employees. Develop systems for training, quality control, and client relationship management.'
        },
        {
          id: 'systems-automation-development',
          prompt: 'What business processes can you systematize or automate to improve efficiency and scalability?',
          category: 'consideration',
          helpText: 'Identify repetitive tasks, create standard operating procedures, and implement tools that reduce manual work while maintaining quality.'
        },
        {
          id: 'financial-planning-investment',
          prompt: 'How will you manage cash flow, plan for taxes, and invest profits back into business growth?',
          category: 'planning',
          helpText: 'Develop budgeting systems, emergency funds, tax planning, and reinvestment strategies for equipment, marketing, or skill development.'
        },
        {
          id: 'exit-transition-planning',
          prompt: 'What are your long-term plans: continue freelancing, build an agency, create products, or transition to employment?',
          category: 'planning',
          helpText: 'Consider how freelancing fits into your career trajectory and what steps would prepare you for your desired future path.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'skill-monetization-guide',
      title: 'Skill Monetization & Market Analysis Guide',
      content: 'Successful freelancing starts with understanding which of your skills have market value and how to position them effectively. Begin by conducting a comprehensive skills audit: technical skills (software, programming, design), soft skills (communication, project management, problem-solving), industry knowledge (domain expertise, regulatory understanding), and unique experiences (cultural background, niche interests). Research market demand using freelance platforms like Upwork, Fiverr, and Freelancer to see what services are in high demand and what clients are willing to pay. Use tools like Google Trends, industry reports, and job boards to understand market dynamics. Analyze your competition: what skills do successful freelancers in your field possess? What gaps exist that you could fill? Consider the scalability of different skills - some require constant hands-on work while others can be systematized or productized. Look for skills that are difficult to automate or outsource to AI, as these will remain valuable longer. Identify complementary skills that work together to create a more valuable service package. Remember that skills can be developed - focus initial effort on areas where you have natural aptitude and market demand exists.'
    },
    {
      id: 'freelance-business-setup-guide',
      title: 'Freelance Business Setup & Legal Protection Guide',
      content: 'Setting up your freelance business properly from the start protects you legally and sets the foundation for growth. Choose the right business structure: sole proprietorship is simplest but offers no liability protection; LLC provides liability protection and tax flexibility; S-Corp can save on self-employment taxes at higher income levels. Register your business name and obtain necessary licenses or permits for your industry. Open separate business bank accounts and credit cards to maintain clean financial records. Set up accounting systems using software like QuickBooks, FreshBooks, or Wave. Understand your tax obligations including quarterly estimated payments, self-employment tax, and deductible business expenses. Create professional contracts and agreements that protect your interests: scope of work, payment terms, intellectual property rights, and dispute resolution. Consider insurance needs: general liability for property damage, professional liability (errors and omissions) for service-based work, and cyber liability for digital work. Establish clear policies for client communication, project management, and quality assurance. Document your processes so you can scale and maintain consistency as you grow.'
    },
    {
      id: 'freelance-pricing-strategy-guide',
      title: 'Freelance Pricing Strategy & Rate Optimization Guide',
      content: 'Pricing is one of the most challenging aspects of freelancing, but getting it right is crucial for business success. Start by researching market rates through freelance platforms, industry surveys, and networking with other freelancers. Calculate your baseline rate by determining your desired annual income, working hours, and business expenses. Factor in non-billable time for marketing, administration, and professional development. Consider different pricing models: hourly rates are simple but cap your income; project-based pricing rewards efficiency and expertise; retainer agreements provide stable income; value-based pricing maximizes profit for high-impact work. Position yourself strategically in the market: premium pricing requires exceptional skills and results; mid-market pricing balances accessibility with profitability; budget pricing may help you start but can trap you in low-value work. Develop rate progression strategies: start conservatively, increase rates with each new client or project, and regularly review and adjust based on demand and expertise growth. Create different pricing tiers for different client segments and service levels. Always lead with value when discussing price, and be prepared to justify your rates with concrete benefits and results.'
    },
    {
      id: 'client-acquisition-marketing-guide',
      title: 'Client Acquisition & Marketing Mastery for Freelancers',
      content: 'Successful freelancers master client acquisition by combining multiple marketing strategies and maintaining consistent effort over time. Define your ideal client profile: industry, company size, project types, budget range, and decision-making process. This focus helps you tailor your marketing efforts effectively. Build a professional online presence starting with a well-designed website that showcases your work, demonstrates expertise, and makes it easy for clients to contact you. Optimize for search engines with content that answers your ideal clients\' questions. Leverage social media platforms where your clients spend time: LinkedIn for B2B services, Instagram for visual work, Twitter for thought leadership. Create valuable content that demonstrates your expertise: blog posts, case studies, tutorials, industry insights, and behind-the-scenes content. Network both online and offline through industry events, professional associations, and online communities. Build relationships before you need them. Develop a referral system that makes it easy and rewarding for satisfied clients to recommend you. Use freelance platforms strategically as one channel, but don\'t rely on them exclusively. Track your marketing efforts to understand which activities generate the best return on investment.'
    },
    {
      id: 'freelance-scaling-business-guide',
      title: 'Freelance Business Scaling & Growth Strategies',
      content: 'Scaling a freelance business requires strategic thinking about how to grow revenue without proportionally increasing your time investment. Start by systematizing your processes: create templates, checklists, and standard operating procedures for common tasks. This improves efficiency and makes it easier to delegate work later. Develop multiple revenue streams: core services, premium offerings, digital products, courses, consulting, or passive income streams. Consider productizing your services by creating packages with fixed scope and pricing. Build a team strategically: start with virtual assistants for administrative tasks, then add specialized contractors for specific skills. Maintain quality control through clear guidelines and review processes. Invest in tools and technology that automate repetitive tasks: project management software, invoicing systems, social media schedulers, and communication tools. Focus on higher-value work by gradually raising rates and working with larger clients on more strategic projects. Develop expertise in areas that command premium pricing. Plan your business growth trajectory: do you want to build an agency, create digital products, or maintain a lean high-value practice? Your vision should guide your scaling decisions. Always maintain strong client relationships as you grow, as they remain the foundation of your business success.'
    }
  ],
  expertTips: [
    {
      id: 'freelance-pricing-tip-1',
      tip: 'Never compete on price alone. Instead, compete on value, expertise, and results. Clients who choose based solely on price are rarely your best clients.',
      author: 'Seth Godin, Marketing Expert',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'client-relationship-tip-1',
      tip: 'Treat your freelance work like consulting, not just task completion. Understand your client\'s business goals and position your work as solutions to their problems.',
      author: 'Alan Weiss, Consultant & Author',
      category: 'consideration',
      importance: 'high'
    },
    {
      id: 'skill-development-tip-1',
      tip: 'Focus on developing skills that are hard to outsource or automate. Technical skills become obsolete, but problem-solving and strategic thinking remain valuable.',
      author: 'Cal Newport, Author of "So Good They Can\'t Ignore You"',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'business-systems-tip-1',
      tip: 'Document everything from day one. Your future self (and team) will thank you when you need to scale or take time off.',
      author: 'Michael Gerber, Author of "The E-Myth"',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'marketing-consistency-tip-1',
      tip: 'Consistency beats perfection in marketing. A weekly blog post for a year is more valuable than one perfect post per month.',
      author: 'Gary Vaynerchuk, Digital Marketing Expert',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'financial-planning-tip-1',
      tip: 'Save 25-30% of your freelance income for taxes and maintain 3-6 months of expenses as an emergency fund. Irregular income requires more financial planning.',
      author: 'Ramit Sethi, Personal Finance Expert',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'client-boundaries-tip-1',
      tip: 'Set clear boundaries from the beginning. It\'s easier to relax strict boundaries than to enforce new ones with existing clients.',
      author: 'Brennan Dunn, Freelance Business Expert',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'networking-tip-1',
      tip: 'Give before you receive in networking. Help others, share resources, and make connections. The best networking feels like friendship, not selling.',
      author: 'Keith Ferrazzi, Author of "Never Eat Alone"',
      category: 'planning',
      importance: 'medium'
    }
  ]
};

export const parentingChildDevelopmentTemplate: GuidanceTemplate = {
  id: 'parenting-child-development',
  title: 'Parenting & Child Development',
  description: 'Navigate parenting challenges and support your child\'s healthy development',
  category: 'family-parenting',
  icon: '👨‍👩‍👧‍👦',
  sections: [
    {
      id: 'parenting-philosophy-foundation',
      title: 'Parenting Philosophy & Foundation',
      description: 'Establish your core parenting values, discipline approach, and family culture foundation',
      order: 1,
      reflectionPrompts: [
        {
          id: 'parenting-values-beliefs',
          prompt: "What core values and beliefs do you want to instill in your children?",
          category: 'consideration',
          helpText: 'Consider kindness, honesty, responsibility, empathy, resilience, curiosity, respect, and how these translate to daily parenting decisions.',
          relatedResources: ['parenting-philosophy-guide', 'child-development-stages']
        },
        {
          id: 'parenting-style-approach',
          prompt: 'What parenting style resonates with you: authoritative, authoritarian, permissive, or uninvolved? Why?',
          category: 'consideration',
          helpText: 'Authoritative (high warmth, high expectations) is generally most effective. Consider your own upbringing and what you want to replicate or change.'
        },
        {
          id: 'discipline-guidance-philosophy',
          prompt: 'How will you approach discipline and guidance? What methods align with your values?',
          category: 'planning',
          helpText: 'Consider positive discipline, natural consequences, time-ins vs time-outs, and age-appropriate expectations and boundaries.'
        },
        {
          id: 'family-culture-traditions',
          prompt: 'What kind of family culture and traditions do you want to create?',
          category: 'consideration',
          helpText: 'Think about daily routines, holiday celebrations, family meetings, shared activities, and ways to build connection and belonging.'
        },
        {
          id: 'parenting-partnership-alignment',
          prompt: 'If you have a co-parent, how will you align your parenting approaches and handle disagreements?',
          category: 'consideration',
          helpText: 'Discuss major decisions, discipline approaches, screen time rules, and present a united front while respecting different strengths.'
        },
        {
          id: 'extended-family-boundaries',
          prompt: 'How will you navigate relationships with extended family and their opinions about your parenting choices?',
          category: 'consideration',
          helpText: 'Set respectful boundaries while maintaining relationships. Consider cultural expectations and generational differences in parenting approaches.'
        }
      ]
    },
    {
      id: 'child-development-understanding',
      title: 'Child Development & Age-Appropriate Expectations',
      description: 'Understand developmental stages and set appropriate expectations for your child\'s age and temperament',
      order: 2,
      reflectionPrompts: [
        {
          id: 'developmental-stage-understanding',
          prompt: 'What developmental stage is your child currently in, and what milestones are typical for this age?',
          category: 'planning',
          helpText: 'Research cognitive, physical, social, and emotional milestones. Remember children develop at their own pace within normal ranges.'
        },
        {
          id: 'age-appropriate-expectations',
          prompt: 'Are your expectations for behavior, chores, and independence appropriate for your child\'s age and development?',
          category: 'consideration',
          helpText: 'Consider attention span, motor skills, emotional regulation, and cognitive abilities when setting expectations for behavior and responsibilities.'
        },
        {
          id: 'individual-temperament-recognition',
          prompt: 'What is your child\'s unique temperament, and how does this influence your parenting approach?',
          category: 'consideration',
          helpText: 'Consider sensitivity, activity level, adaptability, mood, and intensity. Adjust parenting strategies to work with, not against, their temperament.'
        },
        {
          id: 'developmental-challenges-support',
          prompt: 'Are there any areas where your child may need extra support or intervention?',
          category: 'consideration',
          helpText: 'Consider speech, learning, social skills, or behavioral concerns. Early intervention is often most effective when challenges are identified.'
        },
        {
          id: 'learning-style-preferences',
          prompt: 'How does your child learn best, and how can you support their education at home?',
          category: 'consideration',
          helpText: 'Observe whether they learn better through visual, auditory, or kinesthetic methods. Support school learning with appropriate home activities.'
        },
        {
          id: 'developmental-environment-optimization',
          prompt: 'How can you optimize your home environment to support your child\'s current developmental needs?',
          category: 'consideration',
          helpText: 'Consider safety, stimulation level, organization, and accessibility of materials that support learning and independence.'
        }
      ]
    },
    {
      id: 'emotional-social-development',
      title: 'Emotional Intelligence & Social Skills',
      description: 'Foster emotional intelligence, social skills, and healthy relationship building',
      order: 3,
      reflectionPrompts: [
        {
          id: 'emotional-vocabulary-development',
          prompt: 'How will you help your child identify, name, and express their emotions appropriately?',
          category: 'consideration',
          helpText: 'Model emotional language, validate feelings, and teach that all emotions are valid but not all behaviors are acceptable.'
        },
        {
          id: 'emotion-regulation-strategies',
          prompt: 'What strategies will you teach your child for managing big emotions and self-regulation?',
          category: 'planning',
          helpText: 'Consider deep breathing, counting, quiet spaces, physical outlets, and age-appropriate coping strategies for overwhelming emotions.'
        },
        {
          id: 'empathy-compassion-building',
          prompt: 'How will you nurture empathy and compassion in your child?',
          category: 'consideration',
          helpText: 'Model empathetic behavior, discuss others\' feelings, encourage perspective-taking, and provide opportunities to help others.'
        },
        {
          id: 'social-skills-friendship',
          prompt: 'What social skills will you actively teach and how will you support healthy friendships?',
          category: 'consideration',
          helpText: 'Teach sharing, taking turns, conflict resolution, communication skills, and how to be a good friend. Facilitate social opportunities.'
        },
        {
          id: 'conflict-resolution-skills',
          prompt: 'How will you teach your child to handle conflicts and disagreements constructively?',
          category: 'planning',
          helpText: 'Model problem-solving, teach compromise, encourage communication, and guide them through peaceful resolution strategies.'
        },
        {
          id: 'self-esteem-confidence-building',
          prompt: 'What strategies will you use to build your child\'s self-esteem and confidence?',
          category: 'consideration',
          helpText: 'Focus on effort over results, provide specific praise, encourage independence, and help them develop a growth mindset.'
        }
      ]
    },
    {
      id: 'communication-relationship-building',
      title: 'Communication & Parent-Child Relationship',
      description: 'Build strong communication skills and deepen your parent-child relationship through connection',
      order: 4,
      reflectionPrompts: [
        {
          id: 'active-listening-skills',
          prompt: 'How will you practice active listening and ensure your child feels heard and understood?',
          category: 'planning',
          helpText: 'Give full attention, reflect back what you hear, validate emotions, and avoid immediately jumping to solutions or judgments.'
        },
        {
          id: 'age-appropriate-communication',
          prompt: 'How will you adapt your communication style to your child\'s developmental level and personality?',
          category: 'planning',
          helpText: 'Use language they understand, get on their physical level, and adjust complexity based on age and individual comprehension.'
        },
        {
          id: 'difficult-conversation-navigation',
          prompt: 'How will you handle difficult topics like death, divorce, peer pressure, or current events?',
          category: 'planning',
          helpText: 'Be honest but age-appropriate, check their understanding, provide reassurance, and create safe spaces for questions and concerns.'
        },
        {
          id: 'quality-time-connection',
          prompt: 'What intentional practices will you use to maintain connection and spend quality time together?',
          category: 'consideration',
          helpText: 'Plan one-on-one time, engage in their interests, create family rituals, and be present during everyday moments.'
        },
        {
          id: 'trust-respect-building',
          prompt: 'How will you build and maintain trust and mutual respect in your relationship?',
          category: 'consideration',
          helpText: 'Keep promises, admit mistakes, respect their opinions, involve them in age-appropriate decisions, and model the behavior you expect.'
        },
        {
          id: 'independence-support-balance',
          prompt: 'How will you balance providing support with encouraging independence as your child grows?',
          category: 'consideration',
          helpText: 'Gradually increase responsibilities, allow safe failures for learning, and provide guidance while letting them make age-appropriate choices.'
        }
      ]
    },
    {
      id: 'education-learning-support',
      title: 'Education & Learning Support',
      description: 'Create supportive learning environments and partner with schools for academic success',
      order: 5,
      reflectionPrompts: [
        {
          id: 'learning-environment-creation',
          prompt: 'How will you create a supportive learning environment at home?',
          category: 'consideration',
          helpText: 'Provide quiet study spaces, organize materials, minimize distractions, and establish routines that support homework and reading.'
        },
        {
          id: 'school-partnership-collaboration',
          prompt: 'How will you partner with teachers and school staff to support your child\'s education?',
          category: 'consideration',
          helpText: 'Maintain regular communication, attend conferences, volunteer when possible, and work collaboratively to address any concerns.'
        },
        {
          id: 'homework-study-habits',
          prompt: 'What strategies will you use to help your child develop good homework and study habits?',
          category: 'planning',
          helpText: 'Establish consistent routines, teach time management, provide guidance without doing the work, and celebrate effort and improvement.'
        },
        {
          id: 'curiosity-love-of-learning',
          prompt: 'How will you nurture your child\'s natural curiosity and love of learning?',
          category: 'consideration',
          helpText: 'Encourage questions, explore interests together, provide diverse experiences, and model your own love of learning and discovery.'
        },
        {
          id: 'reading-literacy-support',
          prompt: 'What specific strategies will you use to support reading and literacy development?',
          category: 'planning',
          helpText: 'Read together daily, discuss books, visit libraries, model reading behavior, and make reading enjoyable rather than a chore.'
        },
        {
          id: 'educational-challenges-advocacy',
          prompt: 'How will you advocate for your child if they face educational challenges or need special support?',
          category: 'planning',
          helpText: 'Stay informed about rights and resources, communicate concerns early, seek evaluations when needed, and be your child\'s strongest advocate.'
        }
      ]
    },
    {
      id: 'health-wellness-safety',
      title: 'Health, Wellness & Safety',
      description: 'Establish healthy habits, safety awareness, and comprehensive child protection strategies',
      order: 6,
      reflectionPrompts: [
        {
          id: 'healthy-habits-establishment',
          prompt: 'What healthy habits will you establish and model for nutrition, exercise, and self-care?',
          category: 'planning',
          helpText: 'Create consistent meal times, encourage physical activity, establish good hygiene routines, and model healthy lifestyle choices.'
        },
        {
          id: 'safety-awareness-teaching',
          prompt: 'How will you teach age-appropriate safety awareness and personal protection skills?',
          category: 'consideration',
          helpText: 'Teach body safety, stranger awareness, internet safety, emergency procedures, and how to seek help when needed.'
        },
        {
          id: 'mental-health-emotional-wellbeing',
          prompt: 'What strategies will you use to support your child\'s mental health and emotional well-being?',
          category: 'consideration',
          helpText: 'Watch for signs of anxiety or depression, create open communication, teach coping strategies, and seek professional help when needed.'
        },
        {
          id: 'screen-time-technology-management',
          prompt: 'How will you manage screen time and teach healthy technology habits?',
          category: 'consideration',
          helpText: 'Set age-appropriate limits, choose quality content, model good tech habits, and balance screen time with physical and social activities.'
        },
        {
          id: 'healthcare-medical-advocacy',
          prompt: 'How will you stay proactive about your child\'s healthcare needs and medical advocacy?',
          category: 'research',
          helpText: 'Maintain regular checkups, stay up-to-date on vaccinations, trust your instincts about health concerns, and build relationships with healthcare providers.'
        },
        {
          id: 'emergency-preparedness-planning',
          prompt: 'What emergency preparedness plans and safety measures will you have in place?',
          category: 'planning',
          helpText: 'Create emergency contact lists, teach your child important information, have safety plans for different scenarios, and keep emergency supplies ready.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'parenting-philosophy-guide',
      title: 'Parenting Philosophy & Style Development Guide',
      content: 'Developing a clear parenting philosophy provides consistency and confidence in your parenting decisions. Start by examining your own upbringing: what did your parents do well that you want to emulate? What would you change? Research shows that authoritative parenting (high warmth, high expectations) generally produces the best outcomes: children who are confident, self-reliant, and well-adjusted. This approach combines clear boundaries and expectations with emotional support and responsiveness. Consider your core family values: what character traits and life skills are most important to instill? How do these translate into daily parenting decisions about discipline, screen time, chores, and social interactions? Discuss and align approaches with your co-parent to present consistency. Remember that effective parenting adapts to each child\'s temperament and developmental stage while maintaining core principles. Document your parenting philosophy so you can reference it during challenging moments and adjust it as your family grows and changes.'
    },
    {
      id: 'child-development-stages',
      title: 'Child Development Stages & Milestones Guide',
      content: 'Understanding child development helps set appropriate expectations and provide optimal support at each stage. Infancy (0-2 years) focuses on attachment, basic trust, and rapid brain development. Toddlerhood (2-4 years) involves language explosion, emotional regulation learning, and increasing independence. Preschool years (4-6 years) emphasize social skills, school readiness, and creative development. School age (6-12 years) brings academic focus, peer relationships, and skill mastery. Adolescence (12-18 years) involves identity formation, increased independence, and emotional intensity. Each stage has typical milestones, but remember that children develop at their own pace within normal ranges. Focus on providing appropriate challenges and support rather than pushing premature development. Watch for significant delays that might indicate need for evaluation or support services. Understanding brain development helps explain why certain behaviors occur and when children can reasonably be expected to master different skills. Use this knowledge to adjust expectations, create supportive environments, and respond appropriately to challenging behaviors.'
    },
    {
      id: 'positive-discipline-strategies',
      title: 'Positive Discipline & Behavior Guidance Strategies',
      content: 'Positive discipline focuses on teaching appropriate behavior rather than punishing inappropriate behavior. The goal is to help children develop internal motivation to make good choices rather than relying on external rewards and punishments. Key principles include setting clear, consistent expectations; using natural and logical consequences; focusing on solutions rather than blame; and maintaining respect for both parent and child. Time-ins (staying close to provide support) are often more effective than time-outs for helping children regulate emotions. Problem-solving together teaches valuable life skills and respects the child\'s developing autonomy. Validate emotions while addressing behaviors: "You\'re angry that your sister took your toy, but hitting isn\'t okay. What else could you do?" Use mistakes as learning opportunities rather than failures. Model the behavior you want to see. Create family rules together and discuss why they\'re important. Focus on connection before correction - a child who feels understood is more likely to be cooperative. Adjust strategies based on child\'s age, temperament, and specific situation.'
    },
    {
      id: 'emotional-intelligence-development',
      title: 'Emotional Intelligence Development in Children',
      content: 'Emotional intelligence is crucial for success in relationships, school, and life. Help children develop emotional vocabulary by naming emotions: "I see you\'re frustrated because the puzzle is hard." Validate all emotions while setting boundaries on behavior: "It\'s okay to feel angry, but it\'s not okay to hit." Teach emotional regulation strategies appropriate for their age: deep breathing for younger children, journaling for older ones. Model emotional intelligence by expressing your own emotions appropriately and discussing how you handle difficult feelings. Read books about emotions and discuss characters\' feelings and choices. Create a calm-down space where children can go to regulate their emotions. Teach empathy by discussing how others might feel in different situations. Help children identify their emotional triggers and develop coping strategies. Practice problem-solving when emotions are calm. Celebrate emotional growth: "You used your words instead of crying when you were upset!" Remember that emotional development is gradual - be patient and consistent in your support.'
    },
    {
      id: 'child-safety-comprehensive-guide',
      title: 'Comprehensive Child Safety & Protection Guide',
      content: 'Child safety evolves with development and requires proactive planning. Home safety includes childproofing for toddlers, teaching older children about fire safety, and establishing internet safety rules. Teach body safety early: proper names for body parts, "my body belongs to me," and the difference between safe and unsafe touches. Discuss stranger safety without creating excessive fear - most children are harmed by people they know. Teach them to identify trusted adults and how to seek help. Internet safety becomes crucial as children get devices: discuss appropriate sharing, cyberbullying, and online predators. Create safety plans for different scenarios: getting lost, emergencies at home, what to do if approached inappropriately. Teach emergency information: full name, address, parents\' phone numbers. Practice safety skills through role-playing. Stay informed about age-appropriate safety concerns: car seat safety, sports safety, teen driving. Balance protection with independence - gradually increase freedom as children demonstrate responsibility and safety awareness. Trust your instincts about people and situations. Maintain open communication so children feel comfortable reporting anything that makes them uncomfortable.'
    }
  ],
  expertTips: [
    {
      id: 'consistency-tip-1',
      tip: 'Children thrive on consistency. Pick your battles wisely, but once you set a boundary, follow through consistently to build trust and security.',
      author: 'Dr. Dan Siegel, Child Psychiatrist',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'connection-before-correction-tip',
      tip: 'Always connect before you correct. A child who feels understood and loved is much more likely to be cooperative and learn from guidance.',
      author: 'Dr. Patty Wipfler, Parenting Expert',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'model-behavior-tip',
      tip: 'Children learn more from what you do than what you say. Model the emotional regulation, respect, and problem-solving skills you want them to develop.',
      author: 'Dr. Laura Markham, Clinical Psychologist',
      category: 'consideration',
      importance: 'high'
    },
    {
      id: 'individual-needs-tip',
      tip: 'Fair doesn\'t mean equal. Each child has different needs, temperaments, and developmental timelines. Adjust your parenting accordingly.',
      author: 'Dr. Ross Greene, Child Psychologist',
      category: 'consideration',
      importance: 'medium'
    },
    {
      id: 'mistake-opportunity-tip',
      tip: 'Treat mistakes as learning opportunities, not failures. Your response to their mistakes teaches them how to handle their own setbacks.',
      author: 'Carol Dweck, Growth Mindset Researcher',
      category: 'consideration',
      importance: 'high'
    },
    {
      id: 'emotional-validation-tip',
      tip: 'Validate emotions even when you can\'t allow the behavior. "You\'re disappointed we can\'t go to the park, and that\'s okay. We still can\'t go today."',
      author: 'Dr. John Gottman, Relationship Researcher',
      category: 'consideration',
      importance: 'medium'
    },
    {
      id: 'self-care-importance-tip',
      tip: 'Take care of yourself so you can take care of your children. Parental stress and exhaustion significantly impact parenting quality and family well-being.',
      author: 'Dr. Shefali Tsabary, Clinical Psychologist',
      category: 'consideration',
      importance: 'high'
    },
    {
      id: 'trust-building-tip',
      tip: 'Build trust through small interactions every day. Keep promises, admit when you\'re wrong, and show that your child\'s thoughts and feelings matter to you.',
      author: 'Dr. Brené Brown, Vulnerability Researcher',
      category: 'consideration',
      importance: 'medium'
    }
  ]
};

export const productivitySystemTemplate: GuidanceTemplate = {
  id: 'productivity-system',
  title: 'Productivity System & Time Management',
  description: 'Design and implement a productivity system that maximizes your effectiveness',
  category: 'productivity',
  icon: '⚡',
  sections: [
    {
      id: 'productivity-assessment',
      title: 'Productivity Assessment & Goals',
      description: 'Assess your current productivity challenges and define specific improvement goals',
      order: 1,
      reflectionPrompts: [
        {
          id: 'current-challenges',
          prompt: "What are your biggest productivity challenges? Procrastination, distractions, overwhelm?",
          category: 'research',
          helpText: 'Be honest about what\'s not working in your current approach'
        },
        {
          id: 'time-wasters',
          prompt: 'Where do you lose the most time during your day? Social media, meetings, email?',
          category: 'research',
          helpText: 'Track your time for a week to identify patterns and time drains'
        },
        {
          id: 'productivity-goals',
          prompt: 'What specific productivity improvements do you want to achieve?',
          category: 'consideration',
          helpText: 'More deep work hours, better work-life balance, less stress, completing projects faster'
        },
        {
          id: 'current-systems',
          prompt: 'What productivity tools and methods have you tried? What worked or didn\'t work?',
          category: 'consideration',
          helpText: 'Learn from past attempts: GTD, Pomodoro, task apps, calendars, notebooks'
        },
        {
          id: 'work-style',
          prompt: 'When are you most focused and energetic? What\'s your natural work rhythm?',
          category: 'consideration',
          helpText: 'Morning person vs night owl, need for variety vs routine, solo vs collaborative work'
        }
      ]
    },
    {
      id: 'time-blocking-system',
      title: 'Time Blocking & Calendar Management',
      description: 'Design an effective time blocking system to protect focus time and manage energy',
      order: 2,
      reflectionPrompts: [
        {
          id: 'deep-work-needs',
          prompt: 'What work requires your deepest focus? How much uninterrupted time do you need?',
          category: 'planning',
          helpText: 'Writing, coding, strategy, creative work - identify tasks needing sustained attention'
        },
        {
          id: 'calendar-blocking',
          prompt: 'How will you block time for different types of work: deep work, admin, meetings?',
          category: 'planning',
          helpText: 'Color-code different work types, batch similar tasks, protect morning energy'
        },
        {
          id: 'distraction-management',
          prompt: 'What strategies will you use to protect your focused work time?',
          category: 'consideration',
          helpText: 'Phone on silent, door closed, notifications off, communication boundaries'
        },
        {
          id: 'energy-management',
          prompt: 'How will you schedule work based on your energy levels throughout the day?',
          category: 'planning',
          helpText: 'High-energy work in peak hours, admin during low-energy times, breaks planned'
        },
        {
          id: 'buffer-time',
          prompt: 'How will you build buffers and flexibility into your schedule?',
          category: 'planning',
          helpText: 'Travel time between meetings, unexpected issues, overrunning tasks'
        }
      ]
    },
    {
      id: 'task-management',
      title: 'Task Capture & Organization',
      description: 'Create systems to capture, organize, and prioritize tasks and commitments effectively',
      order: 3,
      reflectionPrompts: [
        {
          id: 'capture-system',
          prompt: 'How will you capture all tasks, ideas, and commitments as they come up?',
          category: 'planning',
          helpText: 'Notebook, phone app, voice recorder - needs to be always accessible and reliable'
        },
        {
          id: 'task-organization',
          prompt: 'How will you organize tasks: by project, priority, context, or due date?',
          category: 'planning',
          helpText: 'GTD contexts (@calls, @computer), priority matrices, project folders'
        },
        {
          id: 'review-schedule',
          prompt: 'When will you review and update your task lists? Daily, weekly?',
          category: 'planning',
          helpText: 'Daily planning sessions, weekly reviews, monthly goal check-ins'
        },
        {
          id: 'priority-system',
          prompt: 'How will you decide what to work on when you have multiple options?',
          category: 'decision',
          helpText: 'Eisenhower matrix, impact vs effort, deadline-driven, energy levels'
        },
        {
          id: 'completion-tracking',
          prompt: 'How will you track progress and celebrate completed tasks?',
          category: 'consideration',
          helpText: 'Checkboxes, progress bars, done lists, weekly accomplishment reviews'
        }
      ]
    },
    {
      id: 'focus-techniques',
      title: 'Focus & Deep Work Strategies',
      description: 'Develop techniques and environments to maximize focus and achieve deep work states',
      order: 4,
      reflectionPrompts: [
        {
          id: 'focus-environment',
          prompt: 'What physical environment helps you focus best?',
          category: 'consideration',
          helpText: 'Quiet vs background noise, organized vs messy, home vs office vs cafe'
        },
        {
          id: 'focus-rituals',
          prompt: 'What rituals or routines help you transition into focused work?',
          category: 'planning',
          helpText: 'Music, coffee, clearing desk, reviewing goals, meditation, exercise'
        },
        {
          id: 'pomodoro-adaptation',
          prompt: 'How will you use time-boxing techniques like Pomodoro? What durations work for you?',
          category: 'planning',
          helpText: '25-min standard, 50-min for complex tasks, 90-min for deep work sessions'
        },
        {
          id: 'distraction-triggers',
          prompt: 'What typically breaks your focus? How will you minimize these triggers?',
          category: 'consideration',
          helpText: 'Notifications, noise, hunger, boredom, anxiety, unclear next steps'
        },
        {
          id: 'flow-conditions',
          prompt: 'When do you experience flow states? How can you recreate those conditions?',
          category: 'planning',
          helpText: 'Time of day, type of work, challenge level, clear goals, immediate feedback'
        }
      ]
    },
    {
      id: 'system-optimization',
      title: 'Continuous Improvement & Optimization',
      description: 'Establish review processes to continuously improve and adapt your productivity system',
      order: 5,
      reflectionPrompts: [
        {
          id: 'weekly-reviews',
          prompt: 'What will you review weekly? What worked well and what needs adjustment?',
          category: 'consideration',
          helpText: 'Time spent vs planned, energy levels, goal progress, system friction points'
        },
        {
          id: 'metric-tracking',
          prompt: 'What metrics will you track to measure productivity improvements?',
          category: 'research',
          helpText: 'Deep work hours, tasks completed, projects finished, stress levels, work satisfaction'
        },
        {
          id: 'system-evolution',
          prompt: 'How will you adapt your system as your work and life change?',
          category: 'consideration',
          helpText: 'New responsibilities, changed priorities, different energy levels, life transitions'
        },
        {
          id: 'accountability',
          prompt: 'Who or what will help keep you accountable to your productivity goals?',
          category: 'consideration',
          helpText: 'Productivity partner, coach, team check-ins, public commitments, tracking apps'
        },
        {
          id: 'stress-management',
          prompt: 'How will you maintain productivity without burning out?',
          category: 'consideration',
          helpText: 'Rest periods, boundaries, saying no, delegation, realistic expectations'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'time-blocking-guide',
      title: 'Master Time Blocking for Deep Work',
      type: 'guide',
      excerpt: 'Learn to schedule focused work sessions and eliminate distractions',
      content: 'Time blocking is the practice of scheduling specific time slots for different types of work...',
      tags: ['time-blocking', 'deep-work', 'focus'],
      readTime: '10 min',
      difficulty: 'intermediate'
    },
    {
      id: 'gtd-implementation',
      title: 'Getting Things Done (GTD) Implementation Guide',
      type: 'guide',
      excerpt: 'Step-by-step guide to implementing David Allen\'s GTD methodology',
      content: 'Getting Things Done is a comprehensive productivity system...',
      tags: ['GTD', 'task-management', 'organization'],
      readTime: '15 min',
      difficulty: 'intermediate'
    },
    {
      id: 'pomodoro-mastery',
      title: 'Pomodoro Technique Mastery',
      type: 'tool',
      excerpt: 'Advanced strategies for using the Pomodoro Technique effectively',
      content: 'The Pomodoro Technique can be adapted for different types of work...',
      tags: ['pomodoro', 'focus', 'time-management'],
      readTime: '8 min',
      difficulty: 'beginner'
    },
    {
      id: 'focus-apps-tools',
      title: 'Best Productivity Apps and Tools',
      type: 'tool',
      excerpt: 'Curated list of apps and tools for different productivity needs',
      content: 'The right tools can enhance your productivity system...',
      tags: ['apps', 'tools', 'technology'],
      readTime: '12 min',
      difficulty: 'beginner'
    },
    {
      id: 'energy-management',
      title: 'Energy Management for Peak Performance',
      type: 'guide',
      excerpt: 'Learn to manage your energy, not just your time',
      content: 'Managing energy is often more important than managing time...',
      tags: ['energy', 'performance', 'wellness'],
      readTime: '10 min',
      difficulty: 'intermediate'
    }
  ]
};

export const movingRelocationTemplate: GuidanceTemplate = {
  id: 'moving-relocation',
  title: 'Moving & Relocation Planning',
  description: 'Plan and execute a smooth relocation to a new home or city',
  category: 'life-transitions',
  icon: '📦',
  sections: [
    {
      id: 'moving-planning',
      title: 'Moving Timeline & Planning Foundation',
      description: 'Establish moving timeline, budget, and foundational planning for a smooth relocation',
      order: 1,
      reflectionPrompts: [
        {
          id: 'moving-timeline',
          prompt: "When is your move date? How much time do you have for planning and preparation?",
          category: 'planning',
          helpText: 'Start planning 8-12 weeks before your move date for optimal results. Less time requires prioritizing essential tasks and may increase costs.'
        },
        {
          id: 'moving-distance',
          prompt: 'Are you moving locally, long-distance, or internationally? What specific challenges does this create?',
          category: 'planning',
          helpText: 'Local (under 50 miles), long-distance (over 50 miles), or international moves each have different regulations, costs, timelines, and complexity requirements.'
        },
        {
          id: 'moving-budget',
          prompt: 'What\'s your total moving budget? How will you allocate funds across different categories?',
          category: 'planning',
          helpText: 'Include professional movers (40-60%), packing supplies (5-10%), travel expenses (10-20%), temporary housing (10-15%), utility deposits and setup (10-15%), contingency (10%).'
        },
        {
          id: 'moving-reasons',
          prompt: 'Why are you moving? How do your motivations affect your planning priorities?',
          category: 'planning',
          helpText: 'Job relocation, family changes, lifestyle improvements, cost savings, or other factors influence timeline flexibility, budget priorities, and stress levels.'
        },
        {
          id: 'life-disruption',
          prompt: 'How will you minimize disruption to work, family, and daily routines during the moving process?',
          category: 'planning',
          helpText: 'Consider childcare during packing, work schedule flexibility, pet arrangements, school transfers, and maintaining important routines.'
        }
      ]
    },
    {
      id: 'vendor-selection',
      title: 'Moving Company & Service Selection',
      description: 'Research, evaluate, and select moving companies and related services for your relocation',
      order: 2,
      reflectionPrompts: [
        {
          id: 'moving-company',
          prompt: 'Will you hire professional movers, rent a truck, or use a hybrid approach? What factors drive this decision?',
          category: 'decision',
          helpText: 'Consider total cost, physical demands, time constraints, valuable items, distance, and convenience. Get quotes from multiple sources for comparison.'
        },
        {
          id: 'mover-research',
          prompt: 'How will you research and vet potential moving companies? What credentials and guarantees are important?',
          category: 'research',
          helpText: 'Check licensing, insurance, Better Business Bureau ratings, online reviews, references, and get written estimates from at least 3 companies.'
        },
        {
          id: 'service-levels',
          prompt: 'What level of service do you need? Full-service packing, loading only, or DIY with truck rental?',
          category: 'planning',
          helpText: 'Full-service is convenient but expensive, partial service balances cost and effort, DIY saves money but requires more time and physical work.'
        },
        {
          id: 'additional-services',
          prompt: 'What additional services might you need? Storage, special handling, cleaning, or temporary accommodation?',
          category: 'planning',
          helpText: 'Consider piano moving, art handling, temporary storage, cleaning services, or hotel stays if there are gaps between move-out and move-in dates.'
        }
      ]
    },
    {
      id: 'packing-organization',
      title: 'Decluttering, Packing & Organization Strategy',
      description: 'Declutter belongings and develop systematic packing and organization strategies',
      order: 3,
      reflectionPrompts: [
        {
          id: 'decluttering-plan',
          prompt: 'What will you declutter before packing? How will you systematically decide what to keep, donate, sell, or discard?',
          category: 'planning',
          helpText: 'Less stuff means lower moving costs and easier unpacking. Use the 1-year rule, condition assessment, and replacement cost evaluation for decisions.'
        },
        {
          id: 'packing-strategy',
          prompt: 'How will you approach packing? Room by room, category by category, or by priority and usage frequency?',
          category: 'planning',
          helpText: 'Room-by-room keeps things organized, category packing groups similar items, priority packing focuses on essentials first. Plan 4-6 weeks for full house packing.'
        },
        {
          id: 'labeling-system',
          prompt: 'What labeling and inventory system will you use to track your belongings and prioritize unpacking?',
          category: 'planning',
          helpText: 'Use color coding by room, detailed contents lists, priority labels (essential, important, low priority), and photo inventory for valuable items.'
        },
        {
          id: 'packing-supplies',
          prompt: 'What packing supplies do you need? How will you source boxes, tape, bubble wrap, and protective materials?',
          category: 'planning',
          helpText: 'Calculate box needs by room size, get various sizes, use wardrobe boxes for clothes, and source free boxes from liquor stores, grocery stores, or online marketplaces.'
        },
        {
          id: 'fragile-items',
          prompt: 'How will you handle valuable, fragile, or irreplaceable items? What special protection do they need?',
          category: 'planning',
          helpText: 'Pack personally, use professional services for art/antiques, photograph valuable items for insurance, and carry important documents and jewelry yourself.'
        }
      ]
    },
    {
      id: 'logistics-coordination',
      title: 'Moving Day Logistics & Coordination',
      description: 'Plan and coordinate moving day logistics for efficient and stress-free execution',
      order: 4,
      reflectionPrompts: [
        {
          id: 'moving-day-timeline',
          prompt: 'What\'s your moving day schedule? How will you coordinate timing between locations and services?',
          category: 'planning',
          helpText: 'Plan loader arrival, cleaning services, utility shutoffs/connections, key exchanges, and include buffer time for unexpected delays.'
        },
        {
          id: 'essential-kit',
          prompt: 'What essential items will you pack separately for immediate access on moving day and first few days?',
          category: 'planning',
          helpText: 'Include medications, phone chargers, basic tools, cleaning supplies, snacks, important documents, change of clothes, and toiletries.'
        },
        {
          id: 'communication-plan',
          prompt: 'How will you coordinate communication between movers, real estate agents, utilities, and family members?',
          category: 'planning',
          helpText: 'Create contact lists, share timelines with all parties, designate a point person for decisions, and have backup communication methods.'
        },
        {
          id: 'quality-control',
          prompt: 'How will you ensure your belongings are handled properly and nothing is lost or damaged?',
          category: 'planning',
          helpText: 'Do walk-throughs with movers, check inventory lists, photograph any damage immediately, and keep important documents with you.'
        }
      ]
    },
    {
      id: 'new-location-setup',
      title: 'New Home Setup & Integration',
      description: 'Set up utilities, unpack systematically, and integrate into your new community',
      order: 5,
      reflectionPrompts: [
        {
          id: 'utility-setup',
          prompt: 'How will you coordinate utility connections, internet setup, and essential services in your new home?',
          category: 'planning',
          helpText: 'Schedule connections before move-in date, research providers, transfer or cancel old services, and prioritize internet, electricity, gas, water, and trash pickup.'
        },
        {
          id: 'unpacking-priorities',
          prompt: 'What\'s your unpacking strategy? Which rooms and items will you prioritize for functionality and comfort?',
          category: 'planning',
          helpText: 'Start with essentials (bedroom, bathroom, kitchen basics), then daily-use items, and finally decorative or less critical belongings.'
        },
        {
          id: 'address-changes',
          prompt: 'What address changes do you need to make? How will you systematically update all your accounts and subscriptions?',
          category: 'planning',
          helpText: 'Update bank accounts, insurance, employer records, subscription services, government agencies (IRS, DMV, voter registration), and inform friends and family.'
        },
        {
          id: 'community-integration',
          prompt: 'How will you familiarize yourself with your new area and build connections in the community?',
          category: 'consideration',
          helpText: 'Research local services (grocery, pharmacy, hospital), explore neighborhoods, find recreational activities, and consider joining community groups or clubs.'
        }
      ]
    },
    {
      id: 'post-move-settling',
      title: 'Post-Move Follow-up & Long-term Settling',
      description: 'Handle post-move issues, complete settling tasks, and adapt to your new environment',
      order: 6,
      reflectionPrompts: [
        {
          id: 'damage-claims',
          prompt: 'How will you handle any damage claims, missing items, or service issues from your move?',
          category: 'decision',
          helpText: 'Document damage with photos, contact movers promptly, understand your insurance coverage, and keep all receipts and correspondence.'
        },
        {
          id: 'home-improvements',
          prompt: 'What immediate improvements or modifications does your new home need for comfort and functionality?',
          category: 'planning',
          helpText: 'Consider safety upgrades, storage solutions, paint or decorating, yard work, and any repairs needed before fully settling in.'
        },
        {
          id: 'routine-establishment',
          prompt: 'How will you establish new routines and habits that work with your new home and location?',
          category: 'consideration',
          helpText: 'Find new grocery stores, commute routes, exercise facilities, entertainment options, and adjust daily routines to fit your new environment.'
        },
        {
          id: 'moving-lessons',
          prompt: 'What lessons have you learned from this move that would help with future relocations?',
          category: 'consideration',
          helpText: 'Document what worked well, what you\'d do differently, successful vendors to remember, and systems that made the process smoother.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'moving-checklist',
      title: 'Complete 8-Week Moving Timeline Checklist',
      type: 'checklist',
      excerpt: 'Comprehensive week-by-week moving checklist with detailed tasks',
      content: 'A detailed timeline to keep your move organized from initial planning through post-move settling, with specific tasks for each week and priority levels.',
      tags: ['checklist', 'timeline', 'organization', 'planning'],
      readTime: '12 min',
      difficulty: 'beginner'
    },
    {
      id: 'moving-budget-calculator',
      title: 'Moving Cost Calculator & Budget Planner',
      type: 'tool',
      excerpt: 'Calculate comprehensive moving costs and plan your budget',
      content: 'Estimate all moving-related expenses including hidden costs, compare DIY vs professional services, and track actual expenses against budget.',
      tags: ['budget', 'calculator', 'cost-estimation', 'financial-planning'],
      readTime: '15 min',
      difficulty: 'intermediate'
    },
    {
      id: 'packing-guide',
      title: 'Professional Packing Strategies Guide',
      type: 'guide',
      excerpt: 'Learn efficient packing techniques for different types of items',
      content: 'Comprehensive guide to packing everything from clothes and books to electronics and fragile items, with room-by-room strategies and time-saving tips.',
      tags: ['packing', 'organization', 'protection', 'efficiency'],
      readTime: '20 min',
      difficulty: 'intermediate'
    },
    {
      id: 'moving-day-coordination',
      title: 'Moving Day Coordination Handbook',
      type: 'guide',
      excerpt: 'Manage moving day logistics like a professional',
      content: 'Step-by-step guide to coordinating all aspects of moving day, from supervising movers to handling unexpected issues and ensuring nothing is forgotten.',
      tags: ['moving-day', 'logistics', 'coordination', 'management'],
      readTime: '18 min',
      difficulty: 'intermediate'
    },
    {
      id: 'new-area-integration',
      title: 'New Area Integration Checklist',
      type: 'checklist',
      excerpt: 'Systematically establish yourself in your new location',
      content: 'Complete checklist for setting up utilities, changing addresses, finding local services, and integrating into your new community efficiently.',
      tags: ['integration', 'new-home', 'community', 'services'],
      readTime: '10 min',
      difficulty: 'beginner'
    }
  ]
};

export const eventPlanningTemplate: GuidanceTemplate = {
  id: 'event-planning',
  title: 'Event Planning & Coordination',
  description: 'Plan and coordinate memorable events from conception to execution',
  category: 'events',
  icon: '🎉',
  sections: [
    {
      id: 'event-vision',
      title: 'Event Vision & Goals',
      description: 'Define your event purpose, target audience, and success metrics for effective planning',
      order: 1,
      reflectionPrompts: [
        {
          id: 'event-type',
          prompt: "What type of event are you planning? What's the main purpose and desired outcome?",
          category: 'planning',
          helpText: 'Corporate event, wedding, birthday, fundraiser, conference, product launch - each has different requirements and success measures'
        },
        {
          id: 'target-audience',
          prompt: 'Who is your target audience? What experience do you want to create for them?',
          category: 'consideration',
          helpText: 'Age demographics, interests, expectations, accessibility needs, cultural considerations, professional vs personal'
        },
        {
          id: 'success-metrics',
          prompt: 'How will you measure if your event is successful? What are your key performance indicators?',
          category: 'consideration',
          helpText: 'Attendance numbers, engagement levels, feedback scores, funds raised, connections made, brand awareness, media coverage'
        },
        {
          id: 'event-theme-concept',
          prompt: 'What theme or concept will tie your event together? How will this be reflected throughout?',
          category: 'planning',
          helpText: 'Theme affects decor, activities, dress code, menu, entertainment - should align with your audience and purpose'
        },
        {
          id: 'unique-value-proposition',
          prompt: 'What will make your event memorable and different from similar events? What unique value will attendees receive?',
          category: 'planning',
          helpText: 'Exclusive speakers, unique venue, innovative activities, networking opportunities, educational content, entertainment value'
        }
      ]
    },
    {
      id: 'budget-logistics',
      title: 'Budget & Logistics Planning',
      description: 'Establish budget allocation, venue requirements, and logistical planning framework',
      order: 2,
      reflectionPrompts: [
        {
          id: 'event-budget',
          prompt: 'What\'s your total budget? How will you allocate it across different categories?',
          category: 'planning',
          helpText: 'Venue (30-50%), catering (25-40%), entertainment (10-20%), decorations (5-10%), marketing (5-10%), contingency (10%)'
        },
        {
          id: 'venue-requirements',
          prompt: 'What are your venue requirements? Size, location, amenities, accessibility features?',
          category: 'planning',
          helpText: 'Capacity for expected attendance, parking availability, kitchen access, AV equipment, indoor/outdoor options, wheelchair accessibility'
        },
        {
          id: 'timeline-planning',
          prompt: 'What\'s your event timeline? When do you need to book vendors and finalize details?',
          category: 'planning',
          helpText: 'Work backwards from event date: venue (3-6 months), catering (2-3 months), entertainment (1-2 months), final details (2-4 weeks)'
        },
        {
          id: 'contingency-planning',
          prompt: 'What potential issues could arise and how will you handle them? What\'s your backup plan?',
          category: 'planning',
          helpText: 'Weather (outdoor events), vendor cancellations, low attendance, technical issues, last-minute changes, emergency situations'
        },
        {
          id: 'permits-insurance',
          prompt: 'What permits, licenses, or insurance do you need for your event? Have you checked local regulations?',
          category: 'planning',
          helpText: 'Event permits, alcohol licenses, music licensing, liability insurance, vendor insurance requirements, fire department approvals'
        }
      ]
    },
    {
      id: 'vendor-management',
      title: 'Vendor Selection & Management',
      description: 'Research, select, and coordinate with vendors to deliver exceptional event experiences',
      order: 3,
      reflectionPrompts: [
        {
          id: 'vendor-priorities',
          prompt: 'Which vendors are most critical for your event success? What are your top 3 priorities?',
          category: 'planning',
          helpText: 'Venue, catering, entertainment, photography, decorations, transportation - prioritize based on your event type and budget'
        },
        {
          id: 'vendor-research',
          prompt: 'How will you research and vet potential vendors? What criteria will you use to evaluate them?',
          category: 'research',
          helpText: 'Reviews, portfolios, references, pricing, availability, insurance, experience with similar events, communication style'
        },
        {
          id: 'contract-negotiations',
          prompt: 'What terms and conditions are important in your vendor contracts? What protection do you need?',
          category: 'planning',
          helpText: 'Cancellation policies, payment schedules, setup/breakdown responsibilities, overtime fees, equipment included, liability coverage'
        },
        {
          id: 'vendor-coordination',
          prompt: 'How will you coordinate between multiple vendors on event day? Who will manage logistics?',
          category: 'planning',
          helpText: 'Point person for each vendor, contact information, timeline coordination, load-in/load-out schedules, backup communication plans'
        }
      ]
    },
    {
      id: 'marketing-promotion',
      title: 'Marketing & Promotion Strategy',
      description: 'Develop and execute marketing campaigns to attract and register your target audience',
      order: 4,
      reflectionPrompts: [
        {
          id: 'marketing-channels',
          prompt: 'What marketing channels will you use to promote your event? Where does your audience spend time?',
          category: 'planning',
          helpText: 'Social media, email marketing, website, print materials, partnerships, word-of-mouth, professional networks, paid advertising'
        },
        {
          id: 'registration-process',
          prompt: 'How will people register for your event? What information do you need from attendees?',
          category: 'planning',
          helpText: 'Online registration, ticketing platform, payment processing, dietary restrictions, accessibility needs, contact information'
        },
        {
          id: 'promotional-timeline',
          prompt: 'When will you launch promotion and how will you build momentum leading up to the event?',
          category: 'planning',
          helpText: 'Save-the-date (3-4 months), early bird registration (2-3 months), regular promotion (1-2 months), final push (1-2 weeks)'
        },
        {
          id: 'content-strategy',
          prompt: 'What content and messaging will you create to attract attendees? What story will you tell?',
          category: 'planning',
          helpText: 'Event benefits, speaker highlights, networking opportunities, exclusive content, social proof, urgency/scarcity'
        }
      ]
    },
    {
      id: 'day-of-execution',
      title: 'Event Day Execution',
      description: 'Execute flawless event day coordination and handle real-time logistics management',
      order: 5,
      reflectionPrompts: [
        {
          id: 'event-timeline',
          prompt: 'What\'s your detailed event day timeline? When does setup begin and breakdown end?',
          category: 'planning',
          helpText: 'Vendor arrival times, setup sequence, registration opening, program start/end, networking breaks, cleanup responsibilities'
        },
        {
          id: 'staffing-roles',
          prompt: 'Who will help you manage the event? What specific roles and responsibilities will each person have?',
          category: 'planning',
          helpText: 'Registration desk, vendor coordination, technical support, guest relations, photography, cleanup, emergency point person'
        },
        {
          id: 'attendee-experience',
          prompt: 'How will you ensure attendees have a positive experience from arrival to departure?',
          category: 'consideration',
          helpText: 'Clear signage, smooth registration, comfortable seating, good acoustics, networking opportunities, memorable takeaways'
        },
        {
          id: 'problem-solving',
          prompt: 'How will you handle unexpected issues or changes on event day? Who makes final decisions?',
          category: 'planning',
          helpText: 'Chain of command, emergency contacts, backup plans, quick decision-making process, communication with attendees'
        }
      ]
    },
    {
      id: 'follow-up-evaluation',
      title: 'Post-Event Follow-up & Evaluation',
      description: 'Gather feedback, analyze success metrics, and capture lessons learned for future events',
      order: 6,
      reflectionPrompts: [
        {
          id: 'feedback-collection',
          prompt: 'How will you gather feedback from attendees, vendors, and staff? What questions will you ask?',
          category: 'research',
          helpText: 'Post-event surveys, informal conversations, vendor debriefs, staff feedback sessions, social media monitoring'
        },
        {
          id: 'success-analysis',
          prompt: 'How will you measure your event against the success metrics you defined? What worked well?',
          category: 'research',
          helpText: 'Compare actual vs. expected attendance, budget vs. actual costs, feedback scores, goals achieved, return on investment'
        },
        {
          id: 'relationship-building',
          prompt: 'How will you maintain relationships built at the event? What follow-up actions will you take?',
          category: 'planning',
          helpText: 'Thank you messages, connection facilitation, resource sharing, future event invitations, vendor relationship maintenance'
        },
        {
          id: 'lessons-learned',
          prompt: 'What would you do differently next time? What systems or processes need improvement?',
          category: 'research',
          helpText: 'Timeline adjustments, vendor performance, budget allocation, marketing effectiveness, logistics improvements, attendee experience'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'event-budget-calculator',
      title: 'Event Budget Planning Calculator',
      type: 'tool',
      excerpt: 'Calculate and allocate your event budget across categories',
      content: 'Proper budget allocation is crucial for event success. Use this calculator to distribute your budget effectively across venue, catering, entertainment, and other essential categories.',
      tags: ['budget', 'calculator', 'planning'],
      readTime: '5 min',
      difficulty: 'beginner'
    },
    {
      id: 'vendor-comparison-worksheet',
      title: 'Vendor Comparison & Evaluation Worksheet',
      type: 'tool',
      excerpt: 'Systematically compare vendors and make informed decisions',
      content: 'Compare multiple vendors side-by-side using criteria important to your event success. Track pricing, services, availability, and references in one organized worksheet.',
      tags: ['vendors', 'comparison', 'evaluation'],
      readTime: '10 min',
      difficulty: 'intermediate'
    },
    {
      id: 'event-day-timeline-template',
      title: 'Event Day Timeline Template',
      type: 'tool',
      excerpt: 'Create a detailed minute-by-minute event day schedule',
      content: 'A comprehensive timeline template to ensure nothing is forgotten on event day. Includes setup, program flow, and breakdown schedules.',
      tags: ['timeline', 'logistics', 'execution'],
      readTime: '8 min',
      difficulty: 'intermediate'
    },
    {
      id: 'event-marketing-checklist',
      title: 'Event Marketing & Promotion Checklist',
      type: 'checklist',
      excerpt: 'Complete marketing checklist to maximize event attendance',
      content: 'Step-by-step marketing activities to promote your event effectively across multiple channels and build excitement among your target audience.',
      tags: ['marketing', 'promotion', 'attendance'],
      readTime: '12 min',
      difficulty: 'intermediate'
    }
  ]
};

export const travelPlanningTemplate: GuidanceTemplate = {
  id: 'travel-planning',
  title: 'Travel Planning & Trip Organization',
  description: 'Organize and plan memorable travel experiences efficiently',
  category: 'travel',
  icon: '✈️',
  sections: [
    {
      id: 'trip-planning',
      title: 'Trip Goals & Planning Foundation',
      order: 1,
      reflectionPrompts: [
        {
          id: 'travel-goals',
          prompt: "What do you want to get out of this trip? Adventure, relaxation, culture, business, personal growth?",
          category: 'consideration',
          helpText: 'Clear goals help you make better decisions about destinations, activities, and budget allocation. Consider if you want active adventure, cultural immersion, relaxation, professional development, or family bonding.'
        },
        {
          id: 'travel-style',
          prompt: 'What\'s your preferred travel style? Luxury, budget, backpacking, family-friendly, solo adventure?',
          category: 'planning',
          helpText: 'Your travel style affects accommodation choices, transportation methods, dining options, and activity selection. Be honest about your comfort level and preferences.'
        },
        {
          id: 'travel-companions',
          prompt: 'Who are you traveling with? How will this affect your planning and decision-making?',
          category: 'planning',
          helpText: 'Solo travel, couples, family with kids, friend groups, business colleagues all have different needs. Consider everyone\'s interests, budget, and physical abilities.'
        },
        {
          id: 'trip-duration',
          prompt: 'How long is your trip? How will you balance must-see attractions with relaxation time?',
          category: 'planning',
          helpText: 'Longer trips allow for slower pace and deeper exploration. Shorter trips need focused itineraries. Plan rest days for trips over a week.'
        },
        {
          id: 'travel-experience',
          prompt: 'What\'s your travel experience level? Are you comfortable with uncertainty and cultural differences?',
          category: 'research',
          helpText: 'First-time international travelers may need more structured planning. Experienced travelers can handle more spontaneous adventures and cultural immersion.'
        }
      ]
    },
    {
      id: 'destination-research',
      title: 'Destination Selection & Research',
      order: 2,
      reflectionPrompts: [
        {
          id: 'destination-selection',
          prompt: 'What destinations are you considering? What factors are most important in your decision?',
          category: 'research',
          helpText: 'Consider weather/seasons, cost of living, safety, activities available, culture, language barriers, visa requirements, flight accessibility, and bucket list priorities.'
        },
        {
          id: 'seasonal-considerations',
          prompt: 'What time of year will you travel? How will seasons affect your experience?',
          category: 'planning',
          helpText: 'Research weather patterns, peak/off-season pricing, seasonal activities, festivals, and crowd levels. Some destinations are best avoided during certain seasons.'
        },
        {
          id: 'cultural-preparation',
          prompt: 'What cultural norms, customs, and etiquette should you learn before visiting?',
          category: 'research',
          helpText: 'Research dress codes, tipping practices, greeting customs, religious considerations, business etiquette, and social norms to show respect and avoid misunderstandings.'
        },
        {
          id: 'safety-research',
          prompt: 'What safety considerations and precautions are necessary for your destination?',
          category: 'research',
          helpText: 'Check travel advisories, common scams, safe neighborhoods, transportation safety, health risks, emergency contacts, and insurance requirements.'
        }
      ]
    },
    {
      id: 'budget-logistics',
      title: 'Budget Planning & Financial Logistics',
      order: 3,
      reflectionPrompts: [
        {
          id: 'travel-budget',
          prompt: 'What\'s your total travel budget? How will you allocate it across major categories?',
          category: 'planning',
          helpText: 'Typical allocation: Transportation (25%), accommodation (30%), food (25%), activities (15%), miscellaneous/emergency (5%). Adjust based on your priorities and destination costs.'
        },
        {
          id: 'cost-research',
          prompt: 'What are the actual costs for accommodation, food, and activities in your destination?',
          category: 'research',
          helpText: 'Research hotel/Airbnb prices, restaurant costs, attraction fees, transportation expenses. Use travel blogs, booking sites, and local tourism websites for accurate pricing.'
        },
        {
          id: 'money-management',
          prompt: 'How will you access and manage money while traveling? What payment methods will you use?',
          category: 'planning',
          helpText: 'Notify banks of travel, research ATM fees, consider travel credit cards, understand local payment preferences (cash vs card), and have backup payment methods.'
        },
        {
          id: 'budget-tracking',
          prompt: 'How will you track expenses during your trip to stay within budget?',
          category: 'planning',
          helpText: 'Use travel expense apps, keep receipts, set daily spending limits, allocate funds for different categories, and plan for currency conversion costs.'
        }
      ]
    },
    {
      id: 'itinerary-building',
      title: 'Itinerary Creation & Activity Planning',
      order: 4,
      reflectionPrompts: [
        {
          id: 'must-see-activities',
          prompt: 'What are your must-see attractions and must-do activities? How will you prioritize them?',
          category: 'planning',
          helpText: 'Research top attractions, local experiences, seasonal activities, booking requirements, and time needed. Prioritize by importance and create backup options.'
        },
        {
          id: 'itinerary-structure',
          prompt: 'How will you structure your daily itineraries? What balance of planned vs spontaneous time do you want?',
          category: 'planning',
          helpText: 'Consider energy levels, travel time between locations, meal breaks, rest time. Leave flexibility for discoveries and spontaneous experiences.'
        },
        {
          id: 'local-experiences',
          prompt: 'What local experiences and cultural activities do you want to include beyond tourist attractions?',
          category: 'consideration',
          helpText: 'Cooking classes, local markets, neighborhood walks, cultural performances, festivals, volunteering, or staying with local families for authentic experiences.'
        },
        {
          id: 'booking-strategy',
          prompt: 'What activities need advance booking? What can you decide spontaneously?',
          category: 'planning',
          helpText: 'Popular attractions, restaurants, shows, tours often need advance booking. Research cancellation policies and peak season requirements.'
        }
      ]
    },
    {
      id: 'logistics-preparation',
      title: 'Travel Logistics & Preparation',
      order: 5,
      reflectionPrompts: [
        {
          id: 'travel-documents',
          prompt: 'What travel documents do you need? Are they current and will they remain valid?',
          category: 'planning',
          helpText: 'Passport (6+ months validity), visas, travel insurance, vaccination certificates, driver\'s license for rentals, student/senior discounts, emergency contacts.'
        },
        {
          id: 'accommodation-strategy',
          prompt: 'What type of accommodation fits your budget, style, and itinerary? How will you book it?',
          category: 'planning',
          helpText: 'Hotels, hostels, Airbnb, local guesthouses each offer different experiences. Consider location, amenities, cancellation policies, and guest reviews.'
        },
        {
          id: 'transportation-planning',
          prompt: 'How will you get around your destination? What transportation options work best for your itinerary?',
          category: 'planning',
          helpText: 'Flights, trains, buses, rental cars, rideshare, public transport, walking. Research local transportation systems, costs, and reliability.'
        },
        {
          id: 'packing-preparation',
          prompt: 'What will you pack? How will you prepare for your destination\'s climate and activities?',
          category: 'planning',
          helpText: 'Research weather, dress codes, electrical outlets, and activity requirements. Pack versatile clothing, essential documents, medications, and backup items.'
        }
      ]
    },
    {
      id: 'travel-execution',
      title: 'During Travel & Post-Trip',
      order: 6,
      reflectionPrompts: [
        {
          id: 'flexibility-mindset',
          prompt: 'How will you stay flexible when plans change? What\'s your backup strategy?',
          category: 'consideration',
          helpText: 'Weather, closures, strikes, illness can disrupt plans. Stay positive, have backup activities, and view changes as adventure opportunities.'
        },
        {
          id: 'memory-capture',
          prompt: 'How will you document and remember your experiences beyond just photos?',
          category: 'consideration',
          helpText: 'Travel journal, collecting meaningful souvenirs, learning phrases in local language, trying new foods, engaging with locals for deeper memories.'
        },
        {
          id: 'local-connection',
          prompt: 'How will you connect with local culture and people during your trip?',
          category: 'consideration',
          helpText: 'Learn basic phrases, eat at local restaurants, use public transport, attend community events, stay in locally-owned accommodations.'
        },
        {
          id: 'post-travel-reflection',
          prompt: 'How will you process and integrate your travel experiences when you return?',
          category: 'consideration',
          helpText: 'Organize photos, write about experiences, share stories, maintain connections made, plan return visits, apply lessons learned to future travels.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'travel-planning-checklist',
      title: 'Complete Travel Planning Checklist',
      type: 'checklist',
      excerpt: 'Step-by-step checklist for planning any trip from start to finish',
      content: 'Comprehensive travel planning checklist covering research, booking, preparation, and execution phases with detailed timelines and reminders.',
      tags: ['checklist', 'planning', 'travel', 'organization'],
      readTime: '12 min',
      difficulty: 'beginner'
    },
    {
      id: 'travel-budget-worksheet',
      title: 'Travel Budget Planning Worksheet',
      type: 'tool',
      excerpt: 'Calculate and track your travel expenses across all categories',
      content: 'Detailed budget planning tool to estimate costs, allocate funds, and track expenses during travel with currency conversion and daily spending guides.',
      tags: ['budget', 'finance', 'calculator', 'tracking'],
      readTime: '10 min',
      difficulty: 'intermediate'
    },
    {
      id: 'destination-research-guide',
      title: 'Destination Research Guide',
      type: 'guide',
      excerpt: 'Comprehensive guide to researching any travel destination effectively',
      content: 'Learn how to research destinations thoroughly, including cultural norms, safety considerations, weather patterns, and local experiences for informed travel planning.',
      tags: ['research', 'destinations', 'culture', 'safety'],
      readTime: '15 min',
      difficulty: 'intermediate'
    },
    {
      id: 'travel-safety-handbook',
      title: 'Travel Safety & Security Handbook',
      type: 'guide',
      excerpt: 'Essential safety tips and precautions for travelers',
      content: 'Complete guide to staying safe while traveling, including scam awareness, emergency preparedness, health precautions, and communication strategies.',
      tags: ['safety', 'security', 'emergency', 'health'],
      readTime: '18 min',
      difficulty: 'intermediate'
    }
  ]
};

export const mealPlanningTemplate: GuidanceTemplate = {
  id: 'meal-planning',
  title: 'Meal Planning & Nutrition Management',
  description: 'Plan nutritious meals and manage your dietary goals effectively',
  category: 'health',
  icon: '🍽️',
  sections: [
    {
      id: 'nutrition-assessment',
      title: 'Nutrition Goals & Assessment',
      order: 1,
      reflectionPrompts: [
        {
          id: 'health-goals',
          prompt: "What are your specific nutrition and health goals? Weight management, increased energy, athletic performance, disease prevention?",
          category: 'consideration',
          helpText: 'Specific goals help guide your meal planning decisions and food choices. Consider both short-term (3-6 months) and long-term (1+ years) objectives.'
        },
        {
          id: 'dietary-restrictions',
          prompt: 'Do you have any dietary restrictions, allergies, food intolerances, or cultural/religious food preferences?',
          category: 'research',
          helpText: 'Include medical allergies, vegetarian/vegan choices, gluten-free needs, dairy intolerance, cultural/religious restrictions, and personal preferences that affect food choices.'
        },
        {
          id: 'current-eating-habits',
          prompt: 'What do your current eating patterns look like? What works well and what challenges do you face?',
          category: 'research',
          helpText: 'Consider meal timing, portion sizes, snacking habits, eating out frequency, cooking skills, emotional eating triggers, and energy levels throughout the day.'
        },
        {
          id: 'lifestyle-factors',
          prompt: 'How do your work schedule, family responsibilities, and lifestyle affect your eating patterns?',
          category: 'research',
          helpText: 'Consider shift work, travel, irregular schedules, family meal needs, social eating, stress levels, and time constraints that impact your food choices.'
        },
        {
          id: 'nutrition-knowledge',
          prompt: 'What\'s your current understanding of nutrition? Where do you need more education or support?',
          category: 'research',
          helpText: 'Assess your knowledge of macronutrients, portion sizes, reading labels, cooking techniques, and areas where you\'d like to learn more about healthy eating.'
        }
      ]
    },
    {
      id: 'meal-planning-system',
      title: 'Meal Planning System Design',
      order: 2,
      reflectionPrompts: [
        {
          id: 'meal-prep-time',
          prompt: 'How much time can you realistically dedicate to meal planning and preparation each week?',
          category: 'planning',
          helpText: 'Consider your cooking skills, kitchen equipment, schedule constraints, and willingness to meal prep. Be realistic about time available for planning, shopping, and cooking.'
        },
        {
          id: 'planning-frequency',
          prompt: 'How often will you plan meals? Weekly, bi-weekly, or monthly? What planning system works for your lifestyle?',
          category: 'planning',
          helpText: 'Weekly planning offers flexibility, bi-weekly saves time, monthly requires more storage. Consider your schedule predictability and shopping preferences.'
        },
        {
          id: 'meal-structure',
          prompt: 'How will you structure your meals? Three meals plus snacks, intermittent fasting, or other eating patterns?',
          category: 'planning',
          helpText: 'Consider your hunger patterns, energy needs, work schedule, and health goals when designing your meal structure and timing.'
        },
        {
          id: 'flexibility-planning',
          prompt: 'How will you build flexibility into your meal plan for unexpected changes or cravings?',
          category: 'planning',
          helpText: 'Plan for busy nights with quick options, social events, travel, and days when you want something different. Include backup meals and flexible ingredients.'
        }
      ]
    },
    {
      id: 'grocery-budgeting',
      title: 'Grocery Shopping & Budget Management',
      order: 3,
      reflectionPrompts: [
        {
          id: 'grocery-budget',
          prompt: 'What\'s your monthly food budget? How will you allocate it between groceries and dining out?',
          category: 'planning',
          helpText: 'Consider your income, other expenses, and health priorities. Track current spending to set realistic goals. Factor in groceries, restaurants, coffee, and snacks.'
        },
        {
          id: 'grocery-strategy',
          prompt: 'How will you approach grocery shopping? Frequency, stores, list organization, and shopping methods?',
          category: 'planning',
          helpText: 'Consider weekly vs bulk shopping, store loyalty programs, seasonal produce, online ordering, and list organization by store layout for efficiency.'
        },
        {
          id: 'cost-saving-strategies',
          prompt: 'What strategies will you use to save money while maintaining nutrition quality?',
          category: 'planning',
          helpText: 'Consider buying in season, frozen vs fresh, store brands, bulk bins, coupons, sales planning, and cooking vs convenience foods for cost-effective nutrition.'
        },
        {
          id: 'food-waste-prevention',
          prompt: 'How will you minimize food waste and maximize ingredient usage?',
          category: 'planning',
          helpText: 'Plan for leftovers, repurpose ingredients, proper storage, inventory tracking, and creative use of items before they spoil to reduce waste and costs.'
        }
      ]
    },
    {
      id: 'meal-preparation',
      title: 'Meal Preparation & Cooking Systems',
      order: 4,
      reflectionPrompts: [
        {
          id: 'cooking-skills',
          prompt: 'What are your current cooking skills? Which techniques do you want to learn or improve?',
          category: 'consideration',
          helpText: 'Assess knife skills, basic cooking methods, flavor building, timing multiple dishes, and identify areas for improvement to expand your meal options.'
        },
        {
          id: 'kitchen-setup',
          prompt: 'How is your kitchen equipped? What tools or equipment would improve your meal prep efficiency?',
          category: 'planning',
          helpText: 'Consider storage containers, prep tools, appliances, organization systems, and equipment that could streamline your cooking and meal prep process.'
        },
        {
          id: 'batch-cooking',
          prompt: 'Which foods work well for batch cooking and meal prep? How will you organize prep sessions?',
          category: 'planning',
          helpText: 'Identify proteins, grains, vegetables that reheat well, prep-friendly recipes, and organize cooking sessions for maximum efficiency and variety.'
        },
        {
          id: 'meal-assembly',
          prompt: 'How will you organize and store prepared components for easy meal assembly throughout the week?',
          category: 'planning',
          helpText: 'Plan for proper storage, labeling, portion sizing, and quick assembly systems that make daily meal preparation simple and appealing.'
        }
      ]
    },
    {
      id: 'nutrition-tracking',
      title: 'Nutrition Monitoring & Adjustment',
      order: 5,
      reflectionPrompts: [
        {
          id: 'tracking-method',
          prompt: 'How will you monitor your nutrition intake and progress toward goals? What tracking methods work for you?',
          category: 'planning',
          helpText: 'Consider food diary apps, photos, portion awareness, energy levels, weight, measurements, or other metrics that help you stay on track without becoming obsessive.'
        },
        {
          id: 'progress-evaluation',
          prompt: 'How will you evaluate if your meal plan is working? What indicators will you monitor?',
          category: 'research',
          helpText: 'Track energy levels, sleep quality, mood, performance, digestive health, and goal progress to assess plan effectiveness beyond just weight or appearance.'
        },
        {
          id: 'plan-adjustments',
          prompt: 'How will you adjust your meal plan when it\'s not working or when your goals change?',
          category: 'planning',
          helpText: 'Plan for regular reviews, seasonal adjustments, goal changes, plateau periods, and life changes that require meal plan modifications.'
        },
        {
          id: 'sustainable-habits',
          prompt: 'How will you maintain healthy eating habits long-term while allowing for life\'s variations?',
          category: 'consideration',
          helpText: 'Balance structure with flexibility, plan for holidays and social events, develop backup strategies, and focus on progress over perfection for lasting change.'
        }
      ]
    },
    {
      id: 'family-social',
      title: 'Family & Social Food Management',
      order: 6,
      reflectionPrompts: [
        {
          id: 'family-coordination',
          prompt: 'How will you coordinate meal planning with family members or household partners? Who has what responsibilities?',
          category: 'planning',
          helpText: 'Discuss preferences, dietary needs, cooking responsibilities, shopping duties, and meal timing to create a system that works for everyone.'
        },
        {
          id: 'social-eating',
          prompt: 'How will you handle social eating situations while maintaining your nutrition goals?',
          category: 'planning',
          helpText: 'Plan strategies for restaurants, parties, work events, travel, and social gatherings that allow you to enjoy experiences while staying aligned with your goals.'
        },
        {
          id: 'meal-variety',
          prompt: 'How will you keep meals interesting and prevent boredom while maintaining healthy patterns?',
          category: 'planning',
          helpText: 'Plan for seasonal variety, new recipes, cultural foods, cooking techniques, and flavor combinations that keep healthy eating enjoyable and sustainable.'
        },
        {
          id: 'support-systems',
          prompt: 'What support systems will help you maintain your meal planning habits? Who can help when you\'re struggling?',
          category: 'consideration',
          helpText: 'Identify family support, friends with similar goals, online communities, professionals, or accountability partners who can help maintain motivation and provide assistance.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'healthy-meal-prep-guide',
      title: 'Healthy Meal Prep for Beginners',
      type: 'guide',
      excerpt: 'Learn efficient meal preparation techniques for busy schedules',
      content: 'Meal prep can save time and improve nutrition by preparing healthy meals and snacks in advance. This comprehensive guide covers batch cooking, storage techniques, and meal assembly strategies.',
      tags: ['meal-prep', 'healthy-eating', 'time-saving', 'batch-cooking'],
      readTime: '15 min',
      difficulty: 'beginner'
    },
    {
      id: 'grocery-list-templates',
      title: 'Smart Grocery List Templates',
      type: 'tool',
      excerpt: 'Organized grocery list templates for efficient shopping',
      content: 'Well-organized grocery lists save time and money while ensuring you get everything needed for healthy meals. Includes templates organized by store layout and meal planning integration.',
      tags: ['grocery-shopping', 'templates', 'organization', 'budgeting'],
      readTime: '8 min',
      difficulty: 'beginner'
    },
    {
      id: 'nutrition-basics-guide',
      title: 'Nutrition Fundamentals for Meal Planning',
      type: 'guide',
      excerpt: 'Essential nutrition knowledge for effective meal planning',
      content: 'Understanding macronutrients, portion sizes, and nutrient density helps create balanced, satisfying meals that support your health goals without complicated calculations.',
      tags: ['nutrition', 'education', 'macronutrients', 'portion-control'],
      readTime: '20 min',
      difficulty: 'intermediate'
    },
    {
      id: 'budget-meal-planning',
      title: 'Budget-Friendly Healthy Meal Planning',
      type: 'guide',
      excerpt: 'Strategies for eating well on a tight budget',
      content: 'Learn how to plan nutritious, delicious meals while managing food costs effectively through smart shopping, seasonal eating, and efficient cooking techniques.',
      tags: ['budget', 'cost-saving', 'affordable-nutrition', 'planning'],
      readTime: '18 min',
      difficulty: 'intermediate'
    },
    {
      id: 'meal-planning-calendar',
      title: 'Monthly Meal Planning Calendar Template',
      type: 'tool',
      excerpt: 'Visual calendar template for organizing monthly meal plans',
      content: 'Comprehensive calendar template to plan meals, track prep sessions, coordinate family schedules, and maintain variety in your weekly meal planning system.',
      tags: ['calendar', 'organization', 'family-meals', 'planning'],
      readTime: '10 min',
      difficulty: 'beginner'
    }
  ]
};

export const academicResearchTemplate: GuidanceTemplate = {
  id: 'academic-research',
  title: 'Academic Research & Project Management',
  description: 'Conduct thorough academic research and manage complex projects successfully',
  category: 'education',
  icon: '📚',
  sections: [
    {
      id: 'research-planning',
      title: 'Research Planning & Topic Definition',
      order: 1,
      reflectionPrompts: [
        {
          id: 'research-question',
          prompt: "What is your central research question? Is it specific, answerable, and significant to your field?",
          category: 'planning',
          helpText: 'A strong research question is focused, clear, and addresses a knowledge gap. Use frameworks like PICO (Population, Intervention, Comparison, Outcome) for structured questions. Avoid yes/no questions or overly broad topics.'
        },
        {
          id: 'literature-gap',
          prompt: 'What specific gap in existing knowledge does your research aim to fill? How will you demonstrate this gap exists?',
          category: 'research',
          helpText: 'Conduct preliminary searches in key databases, review recent systematic reviews, check what leading researchers in your field are studying. Document conflicting findings or unexplored areas.'
        },
        {
          id: 'research-significance',
          prompt: 'Why does this research matter? Who will benefit from your findings and how?',
          category: 'consideration',
          helpText: 'Consider theoretical contributions, practical applications, policy implications, and societal benefits. Think about immediate and long-term impact on your field.'
        },
        {
          id: 'methodology-approach',
          prompt: 'What research paradigm and methodology align with your question? Quantitative, qualitative, or mixed methods?',
          category: 'planning',
          helpText: 'Quantitative for measuring relationships/effects, qualitative for understanding experiences/meanings, mixed for comprehensive understanding. Consider your epistemological stance and research objectives.'
        },
        {
          id: 'feasibility-assessment',
          prompt: 'Is your research feasible within your constraints? What resources, time, and access do you need?',
          category: 'planning',
          helpText: 'Consider budget, timeline, participant availability, equipment needs, ethical approval time, advisor support, and your skill level with proposed methods.'
        },
        {
          id: 'timeline-milestones',
          prompt: 'What are your detailed timeline and key milestones? How will you track progress?',
          category: 'planning',
          helpText: 'Include proposal writing, ethics approval, literature review completion, data collection phases, analysis periods, writing drafts, revision cycles, and submission deadlines. Build in buffer time.'
        }
      ]
    },
    {
      id: 'literature-review',
      title: 'Literature Review & Source Management',
      order: 2,
      reflectionPrompts: [
        {
          id: 'search-strategy',
          prompt: 'What comprehensive search strategy will you use? Which databases, keywords, and filters are essential?',
          category: 'research',
          helpText: 'Use multiple databases (PubMed, PsycINFO, ERIC, etc.), create keyword matrices with synonyms, use Boolean operators, check gray literature, and set up alerts for new publications.'
        },
        {
          id: 'inclusion-exclusion-criteria',
          prompt: 'What specific criteria will determine which sources to include or exclude? How recent should sources be?',
          category: 'planning',
          helpText: 'Define publication dates, study types, sample sizes, languages, geographical scope, and quality thresholds. Consider seminal older works vs. current research balance.'
        },
        {
          id: 'source-evaluation',
          prompt: 'How will you critically evaluate source quality and relevance? What makes a source trustworthy?',
          category: 'research',
          helpText: 'Check peer-review status, author credentials, methodology rigor, sample representativeness, funding sources, and potential conflicts of interest. Use quality assessment tools when appropriate.'
        },
        {
          id: 'citation-management',
          prompt: 'How will you organize, tag, and track your growing collection of sources?',
          category: 'planning',
          helpText: 'Choose tools like Zotero, Mendeley, or EndNote. Create consistent tagging systems, organize into collections, and start bibliographies early. Back up your library regularly.'
        },
        {
          id: 'synthesis-themes',
          prompt: 'What major themes, theories, and methodological approaches are emerging from your review?',
          category: 'research',
          helpText: 'Group sources by themes, identify competing theories, note methodological trends, and spot areas of consensus vs. debate. Create concept maps or matrices to visualize relationships.'
        },
        {
          id: 'theoretical-framework',
          prompt: 'What theoretical or conceptual framework best fits your research? How will it guide your study?',
          category: 'research',
          helpText: 'Choose frameworks that align with your research question and methodology. Consider established theories vs. emerging frameworks, and how they inform your data collection and analysis.'
        }
      ]
    },
    {
      id: 'data-collection',
      title: 'Data Collection & Ethics',
      order: 3,
      reflectionPrompts: [
        {
          id: 'ethics-approval',
          prompt: 'What ethical approvals do you need? How will you protect participants and ensure informed consent?',
          category: 'consideration',
          helpText: 'Submit IRB/ethics applications early (6-8 weeks typical). Address risks/benefits, participant anonymity, data storage, vulnerable populations, and withdrawal procedures. Consider cultural sensitivities.'
        },
        {
          id: 'data-collection-methods',
          prompt: 'What specific data collection methods align with your research questions? How will you ensure validity?',
          category: 'planning',
          helpText: 'Match methods to objectives: surveys for attitudes, interviews for experiences, observations for behaviors, experiments for causation. Consider validity threats and mitigation strategies.'
        },
        {
          id: 'sample-strategy',
          prompt: 'Who is your target population and how will you recruit participants? What sampling approach will you use?',
          category: 'planning',
          helpText: 'Define inclusion criteria, calculate sample sizes for quantitative studies, choose sampling methods (random, stratified, purposive, snowball). Plan recruitment strategies and incentives.'
        },
        {
          id: 'data-quality-measures',
          prompt: 'How will you ensure data quality, reliability, and validity throughout collection?',
          category: 'consideration',
          helpText: 'Pilot test instruments, train data collectors, implement quality checks, use multiple data sources (triangulation), and establish inter-rater reliability for subjective measures.'
        },
        {
          id: 'data-management-security',
          prompt: 'How will you securely collect, store, and organize your data? What backup systems will you use?',
          category: 'planning',
          helpText: 'Use secure platforms, encrypt sensitive data, create version control systems, establish naming conventions, and implement multiple backup strategies (local, cloud, institutional).'
        }
      ]
    },
    {
      id: 'analysis-writing',
      title: 'Data Analysis & Academic Writing',
      order: 4,
      reflectionPrompts: [
        {
          id: 'analysis-plan',
          prompt: 'What analytical techniques and software will you use? How will you ensure analytical rigor?',
          category: 'research',
          helpText: 'Choose appropriate statistical tests or qualitative analysis methods. Learn necessary software (SPSS, R, NVivo, Atlas.ti). Consider effect sizes, confidence intervals, and multiple comparisons.'
        },
        {
          id: 'data-preparation',
          prompt: 'How will you clean, code, and prepare your data for analysis? What quality checks will you implement?',
          category: 'planning',
          helpText: 'Check for missing data, outliers, and coding errors. Develop codebooks for qualitative data. Test assumptions for statistical analyses. Document all data processing decisions.'
        },
        {
          id: 'results-interpretation',
          prompt: 'How will you interpret your findings objectively? What alternative explanations should you consider?',
          category: 'research',
          helpText: 'Look for patterns, relationships, and unexpected findings. Consider confounding variables, limitations, and rival explanations. Distinguish between statistical and practical significance.'
        },
        {
          id: 'writing-structure-flow',
          prompt: 'How will you structure your paper for maximum clarity and impact? What story do your findings tell?',
          category: 'planning',
          helpText: 'Follow disciplinary conventions (IMRAD for empirical studies). Create clear arguments, logical flow, and compelling narratives. Use headings, transitions, and signposting effectively.'
        },
        {
          id: 'audience-contribution',
          prompt: 'Who is your primary audience and what unique contribution does your work make to the field?',
          category: 'planning',
          helpText: 'Write for your intended readers (academics, practitioners, policymakers). Clearly articulate theoretical and practical contributions. Avoid jargon when writing for broader audiences.'
        },
        {
          id: 'revision-feedback-process',
          prompt: 'How will you systematically seek feedback and revise your work? Who are your key reviewers?',
          category: 'planning',
          helpText: 'Plan multiple revision cycles with different focuses (structure, content, clarity, mechanics). Seek feedback from advisors, peers, and potential end-users. Allow substantial time for revisions.'
        }
      ]
    },
    {
      id: 'quality-validation',
      title: 'Research Quality & Validation',
      order: 5,
      reflectionPrompts: [
        {
          id: 'validity-threats',
          prompt: 'What threats to internal and external validity does your study face? How will you address them?',
          category: 'planning',
          helpText: 'Consider selection bias, history effects, maturation, testing effects, and generalizability limits. Implement design controls, randomization, and replication strategies where possible.'
        },
        {
          id: 'reliability-consistency',
          prompt: 'How will you demonstrate reliability and consistency in your methods and findings?',
          category: 'consideration',
          helpText: 'Use standardized instruments, train data collectors consistently, calculate reliability coefficients, and document all procedures clearly for replication.'
        },
        {
          id: 'bias-minimization',
          prompt: 'What potential sources of bias exist in your research? How will you minimize their impact?',
          category: 'planning',
          helpText: 'Identify researcher bias, participant bias, selection bias, and confirmation bias. Use blinding, standardized protocols, and reflexive practices to minimize bias effects.'
        },
        {
          id: 'triangulation-validation',
          prompt: 'How will you use triangulation or other validation strategies to strengthen your findings?',
          category: 'research',
          helpText: 'Combine multiple methods, data sources, researchers, or theoretical perspectives. Use member checking, peer debriefing, and external auditing for qualitative research.'
        }
      ]
    },
    {
      id: 'dissemination',
      title: 'Publication & Research Dissemination',
      order: 6,
      reflectionPrompts: [
        {
          id: 'publication-strategy',
          prompt: 'What publication venues best match your research? How will you prioritize journal selection?',
          category: 'planning',
          helpText: 'Consider journal scope, impact factor, audience reach, acceptance rates, and review timelines. Check author guidelines and recent publications for fit assessment.'
        },
        {
          id: 'manuscript-preparation',
          prompt: 'How will you prepare your manuscript to meet publication standards? What elements need special attention?',
          category: 'planning',
          helpText: 'Follow journal formatting exactly, write compelling abstracts, create clear figures/tables, and ensure ethical compliance statements. Consider professional editing services.'
        },
        {
          id: 'peer-review-process',
          prompt: 'How will you prepare for and respond to peer review? What is your revision strategy?',
          category: 'planning',
          helpText: 'Anticipate reviewer concerns, prepare detailed responses, and view feedback constructively. Allow time for major revisions and additional analyses if requested.'
        },
        {
          id: 'broader-dissemination',
          prompt: 'How will you share your findings beyond academic publications? What public engagement is appropriate?',
          category: 'planning',
          helpText: 'Consider conference presentations, policy briefs, social media, press releases, practitioner publications, and community presentations. Tailor messages to different audiences.'
        },
        {
          id: 'research-impact',
          prompt: 'How will you track and measure the impact of your research? What metrics matter?',
          category: 'research',
          helpText: 'Monitor citations, downloads, social media mentions, policy references, and practical applications. Consider both academic and societal impact measures.'
        },
        {
          id: 'future-research-directions',
          prompt: 'What future research directions does your work suggest? How will you build on these findings?',
          category: 'planning',
          helpText: 'Identify limitations that future studies could address, new questions that emerged, and potential collaborations or funding opportunities for extended research.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'comprehensive-research-proposal-guide',
      title: 'Complete Academic Research Proposal Guide',
      type: 'guide',
      excerpt: 'Comprehensive template and guidelines for writing winning research proposals with examples from successful grants',
      content: 'A well-structured research proposal is the foundation of successful academic research. This comprehensive guide covers every section from background and significance to methodology and budget planning. **Key sections include:** problem statement crafting, literature review strategies, theoretical framework development, methodology selection, timeline creation, and budget justification. **Special focus on:** common proposal pitfalls, reviewer expectations, and discipline-specific requirements. Includes templates for NIH, NSF, and other major funding bodies.',
      tags: ['proposal', 'template', 'academic-writing', 'funding', 'grants'],
      readTime: '25 min',
      difficulty: 'intermediate'
    },
    {
      id: 'systematic-literature-review-methodology',
      title: 'Systematic Literature Review: Complete Methodology',
      type: 'guide',
      excerpt: 'Step-by-step methodology for conducting rigorous systematic literature reviews following PRISMA guidelines',
      content: 'Master the gold standard of literature reviews with this comprehensive methodology guide. **Covers the complete process:** developing search strategies, database selection, inclusion/exclusion criteria, quality assessment tools, data extraction methods, and synthesis techniques. **Advanced topics include:** meta-analysis preparation, handling grey literature, managing large datasets, and avoiding bias. **Practical tools:** search term development worksheets, quality assessment checklists, and data extraction templates. Aligned with PRISMA, PROSPERO, and Cochrane standards.',
      tags: ['literature-review', 'systematic-review', 'PRISMA', 'methodology', 'evidence-synthesis'],
      readTime: '35 min',
      difficulty: 'expert'
    },
    {
      id: 'research-ethics-compliance-framework',
      title: 'Research Ethics & IRB Approval Framework',
      type: 'guide',
      excerpt: 'Complete guide to research ethics, IRB processes, and maintaining compliance throughout your study',
      content: 'Navigate research ethics with confidence using this comprehensive compliance framework. **Ethics foundations:** Belmont Report principles, vulnerable populations protection, informed consent requirements, and risk-benefit analysis. **IRB process:** application preparation, common approval delays, modification procedures, and continuing review requirements. **Special considerations:** international research, online data collection, social media research, and secondary data analysis. **Practical resources:** consent form templates, ethics checklists, and compliance monitoring tools.',
      tags: ['ethics', 'IRB', 'compliance', 'informed-consent', 'research-integrity'],
      readTime: '30 min',
      difficulty: 'intermediate'
    },
    {
      id: 'academic-writing-publication-toolkit',
      title: 'Academic Writing & Publication Success Toolkit',
      type: 'tool',
      excerpt: 'Complete toolkit for academic writing excellence from first draft to publication acceptance',
      content: 'Transform your research into publishable work with this comprehensive writing toolkit. **Writing strategies:** structure planning, argument development, clarity techniques, and revision methods. **Publication guidance:** journal selection criteria, manuscript formatting, cover letter writing, and peer review navigation. **Advanced techniques:** creating impactful abstracts, designing effective figures, writing compelling discussions, and handling reviewer feedback. **Quality tools:** self-editing checklists, readability assessments, and submission tracking templates.',
      tags: ['academic-writing', 'publication', 'manuscript-preparation', 'peer-review', 'revision'],
      readTime: '40 min',
      difficulty: 'intermediate'
    },
    {
      id: 'research-data-management-best-practices',
      title: 'Research Data Management Best Practices',
      type: 'guide',
      excerpt: 'Essential practices for secure data collection, storage, and sharing throughout the research lifecycle',
      content: 'Implement robust data management practices that ensure research integrity and compliance. **Data planning:** management plan development, storage requirements, backup strategies, and retention policies. **Security protocols:** encryption methods, access controls, de-identification techniques, and breach prevention. **Organization systems:** file naming conventions, version control, metadata creation, and documentation standards. **Sharing considerations:** repository selection, licensing options, privacy protection, and FAIR principles implementation.',
      tags: ['data-management', 'research-data', 'data-security', 'FAIR-principles', 'data-sharing'],
      readTime: '20 min',
      difficulty: 'intermediate'
    }
  ]
};

export const freelanceBusinessTemplate: GuidanceTemplate = {
  id: 'freelance-business',
  title: 'Freelance Business & Independent Consulting',
  description: 'Build and scale a sustainable freelance business and consulting practice',
  category: 'career-business',
  icon: '🏢',
  sections: [
    {
      id: 'service-definition',
      title: 'Service Definition & Positioning',
      description: 'Define your services, identify your niche, and position yourself competitively in the market',
      order: 1,
      reflectionPrompts: [
        {
          id: 'skills-assessment',
          prompt: "What specific skills and expertise do you offer that clients would pay for? Where do you excel?",
          category: 'planning',
          helpText: 'List technical skills, soft skills, industry knowledge, and unique experiences. Consider what colleagues often ask for your help with or what you naturally gravitate toward.'
        },
        {
          id: 'niche-identification',
          prompt: 'What specific market segment or client type will you focus on? Who is your ideal client?',
          category: 'planning',
          helpText: 'Consider industry (tech, healthcare, nonprofits), company size (startups, SMBs, enterprise), project type (strategy, implementation, maintenance), or demographic (solopreneurs, women-owned businesses).'
        },
        {
          id: 'service-packaging',
          prompt: 'How will you package your services? Project-based, retainer, hourly, or productized offerings?',
          category: 'planning',
          helpText: 'Project-based offers clarity, retainers provide stability, hourly is flexible but hard to scale. Consider creating different service tiers or packages.'
        },
        {
          id: 'competitive-analysis',
          prompt: 'Who are your main competitors, and what makes your approach unique or better?',
          category: 'research',
          helpText: 'Research 5-10 freelancers in your space. Analyze their positioning, pricing, services, and client testimonials. Identify gaps you can fill or ways to differentiate.'
        },
        {
          id: 'value-proposition',
          prompt: 'What specific outcomes and value do you deliver to clients? How do you solve their problems?',
          category: 'planning',
          helpText: 'Focus on business outcomes: increased revenue, reduced costs, saved time, improved processes. Quantify benefits when possible: "I help companies reduce customer churn by 25%".'
        },
        {
          id: 'expertise-development',
          prompt: 'What areas of expertise do you need to develop further? How will you stay current in your field?',
          category: 'planning',
          helpText: 'Identify skill gaps, plan for continuous learning, consider certifications, attend conferences, follow industry leaders, and invest in professional development.'
        }
      ]
    },
    {
      id: 'business-foundation',
      title: 'Business Foundation & Legal Setup',
      order: 2,
      reflectionPrompts: [
        {
          id: 'business-structure',
          prompt: 'What business structure will you use (sole proprietorship, LLC, corporation)? Why is this best for your situation?',
          category: 'planning',
          helpText: 'Sole proprietorship is simple but offers no liability protection. LLCs provide protection and tax flexibility. Corporations are complex but useful for scaling. Consult with an accountant or attorney.'
        },
        {
          id: 'business-name-branding',
          prompt: 'What will you name your business? How does this align with your brand and positioning?',
          category: 'planning',
          helpText: 'Consider using your personal name for personal brand building, or a business name that communicates your value. Check domain availability and social media handles.'
        },
        {
          id: 'contract-templates',
          prompt: 'What contract templates and legal documents do you need? How will you protect yourself legally?',
          category: 'planning',
          helpText: 'Essential documents: service agreement, statement of work, privacy policy, terms of service. Include scope, payment terms, intellectual property rights, termination clauses.'
        },
        {
          id: 'financial-systems',
          prompt: 'How will you handle invoicing, expense tracking, and financial management?',
          category: 'planning',
          helpText: 'Choose accounting software (QuickBooks, FreshBooks, Wave), set up business bank account, establish invoicing process, track expenses, plan for quarterly taxes.'
        },
        {
          id: 'workspace-setup',
          prompt: 'What workspace and equipment do you need to deliver professional services?',
          category: 'planning',
          helpText: 'Consider home office setup, reliable internet, professional video call setup, necessary software subscriptions, ergonomic furniture, backup equipment.'
        },
        {
          id: 'insurance-risk-management',
          prompt: 'What insurance coverage and risk management strategies do you need as a freelancer?',
          category: 'planning',
          helpText: 'Consider professional liability insurance, general liability, errors and omissions coverage, health insurance options, disability insurance, and business property coverage.'
        }
      ]
    },
    {
      id: 'pricing-strategy',
      title: 'Pricing Strategy & Financial Planning',
      description: 'Develop a profitable pricing strategy and establish financial management systems',
      order: 3,
      reflectionPrompts: [
        {
          id: 'pricing-model',
          prompt: 'What pricing model best fits your services? Hourly, project-based, value-based, or retainer?',
          category: 'planning',
          helpText: 'Hourly is simple but limits earning potential. Project-based requires scope management. Value-based maximizes profit but requires demonstrable ROI. Retainers provide predictable income.'
        },
        {
          id: 'rate-calculation',
          prompt: 'How will you calculate your rates? What factors determine your pricing?',
          category: 'planning',
          helpText: 'Consider your desired annual income, working hours, expenses, taxes, vacation time, expertise level, market rates, and unique value. Don\'t forget to include business development time.'
        },
        {
          id: 'market-research-pricing',
          prompt: 'What do others in your field charge? How does your experience and value compare?',
          category: 'research',
          helpText: 'Research competitor pricing, industry surveys, freelance platforms. Consider experience level, location, specialization, and results delivered. Price based on value, not just market rates.'
        },
        {
          id: 'pricing-confidence',
          prompt: 'How will you communicate your value and pricing confidently to prospects?',
          category: 'planning',
          helpText: 'Practice your pricing conversations, focus on value delivered rather than cost, be prepared to justify your rates with examples and outcomes. Confidence in pricing reflects confidence in your value.'
        },
        {
          id: 'financial-goals',
          prompt: 'What are your income goals for the first year? How will you track financial performance?',
          category: 'planning',
          helpText: 'Set monthly and annual revenue targets, profit margins, and key metrics. Track revenue per client, project profitability, utilization rates, and cash flow patterns.'
        },
        {
          id: 'cash-flow-management',
          prompt: 'How will you manage cash flow and handle payment delays? What\'s your collections process?',
          category: 'planning',
          helpText: 'Establish payment terms (net 15/30), require deposits for large projects, have a collections process for late payments, maintain cash reserves for slow periods.'
        }
      ]
    },
    {
      id: 'client-acquisition',
      title: 'Client Acquisition & Marketing',
      description: 'Build effective marketing strategies and sales processes to attract and convert clients',
      order: 4,
      reflectionPrompts: [
        {
          id: 'marketing-channels',
          prompt: 'What marketing channels will you use to reach potential clients? Which fit your strengths?',
          category: 'planning',
          helpText: 'Options include networking, content marketing, social media, referrals, partnerships, speaking, cold outreach, online platforms. Focus on 2-3 channels rather than spreading thin.'
        },
        {
          id: 'portfolio-development',
          prompt: 'How will you showcase your work and results? What portfolio pieces will demonstrate your value?',
          category: 'planning',
          helpText: 'Create case studies showing problem, solution, results. Include before/after examples, metrics, client testimonials. If starting, consider pro bono work or personal projects to build portfolio.'
        },
        {
          id: 'networking-strategy',
          prompt: 'How will you build professional relationships and network effectively?',
          category: 'planning',
          helpText: 'Join industry associations, attend conferences, participate in online communities, schedule coffee chats, offer helpful advice, make introductions for others. Focus on giving value first.'
        },
        {
          id: 'referral-system',
          prompt: 'How will you generate referrals from satisfied clients and professional contacts?',
          category: 'planning',
          helpText: 'Deliver exceptional results, ask for referrals at project completion, create referral incentives, stay in touch with past clients, make it easy for others to refer you.'
        },
        {
          id: 'sales-process',
          prompt: 'What\'s your sales process from initial contact to signed contract? How will you qualify leads?',
          category: 'planning',
          helpText: 'Define steps: initial inquiry, discovery call, proposal, follow-up, contract signing. Qualify leads on budget, timeline, decision-making process, and fit with your services.'
        },
        {
          id: 'proposal-system',
          prompt: 'How will you create compelling proposals that win clients? What templates and processes will you use?',
          category: 'planning',
          helpText: 'Develop proposal templates including problem statement, proposed solution, timeline, deliverables, investment, and next steps. Customize for each prospect and focus on their outcomes.'
        }
      ]
    },
    {
      id: 'client-management',
      title: 'Client Relationship & Project Management',
      order: 5,
      reflectionPrompts: [
        {
          id: 'onboarding-process',
          prompt: 'How will you onboard new clients to ensure smooth project starts?',
          category: 'planning',
          helpText: 'Create welcome packets, conduct kickoff meetings, establish communication preferences, set expectations, gather necessary materials, confirm project scope and timeline.'
        },
        {
          id: 'communication-standards',
          prompt: 'What communication standards and cadence will you establish with clients?',
          category: 'planning',
          helpText: 'Define preferred channels (email, Slack, calls), response time commitments, regular check-in schedules, status reporting format, and escalation procedures.'
        },
        {
          id: 'project-management-tools',
          prompt: 'What tools and systems will you use to manage projects and track progress?',
          category: 'planning',
          helpText: 'Consider project management tools (Asana, Trello, Monday.com), time tracking software, file sharing systems, communication platforms, and client portals.'
        },
        {
          id: 'scope-management',
          prompt: 'How will you handle scope changes and prevent scope creep?',
          category: 'planning',
          helpText: 'Clearly define scope in contracts, create change order processes, communicate impact of changes, document all agreements, and educate clients about scope boundaries.'
        },
        {
          id: 'quality-delivery',
          prompt: 'What quality standards and review processes will ensure excellent deliverables?',
          category: 'planning',
          helpText: 'Establish internal quality checklists, build in review time, seek client feedback at key milestones, create revision processes, and document lessons learned.'
        },
        {
          id: 'client-satisfaction',
          prompt: 'How will you measure and improve client satisfaction throughout projects?',
          category: 'planning',
          helpText: 'Regular check-ins, feedback surveys, project retrospectives, client testimonials, and post-project reviews. Address issues proactively and continuously improve processes.'
        }
      ]
    },
    {
      id: 'growth-scaling',
      title: 'Business Growth & Scaling Strategies',
      description: 'Scale your business sustainably through automation, partnerships, and strategic growth',
      order: 6,
      reflectionPrompts: [
        {
          id: 'capacity-planning',
          prompt: 'How will you handle increased demand? What\'s your plan for scaling without burning out?',
          category: 'planning',
          helpText: 'Options include raising rates, streamlining processes, outsourcing, hiring subcontractors, creating passive income products, or transitioning to an agency model.'
        },
        {
          id: 'passive-income-development',
          prompt: 'What products or services could generate passive income alongside your client work?',
          category: 'planning',
          helpText: 'Consider digital products (courses, templates, tools), subscription services, affiliate partnerships, licensing your methods, or creating done-for-you solutions.'
        },
        {
          id: 'partnership-opportunities',
          prompt: 'What strategic partnerships could expand your reach or capabilities?',
          category: 'planning',
          helpText: 'Partner with complementary service providers, join networks or collectives, white-label services, subcontract for larger agencies, or collaborate on bigger projects.'
        },
        {
          id: 'systems-automation',
          prompt: 'What processes can you systematize or automate to improve efficiency?',
          category: 'planning',
          helpText: 'Automate invoicing, client onboarding, social media, email sequences, proposal generation, time tracking, and reporting. Create templates and standard operating procedures.'
        },
        {
          id: 'expertise-monetization',
          prompt: 'How can you monetize your expertise beyond direct client work?',
          category: 'planning',
          helpText: 'Speaking engagements, consulting, training programs, masterminds, coaching, writing books or articles, creating industry reports, or teaching what you know.'
        },
        {
          id: 'long-term-vision',
          prompt: 'What\'s your long-term vision for your freelance business? Agency, products, exit strategy?',
          category: 'planning',
          helpText: 'Consider whether you want to remain solo, build an agency, create product-based income, franchise your methods, or eventually sell the business. Plan accordingly.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'freelance-business-plan-template',
      title: 'Complete Freelance Business Plan Template',
      type: 'template',
      excerpt: 'Comprehensive business plan template specifically designed for freelancers and independent consultants',
      content: 'Starting a freelance business requires strategic planning just like any traditional business. This comprehensive template guides you through every essential component. **Business overview:** Define your mission, vision, and unique value proposition clearly. **Market analysis:** Research your target market, analyze competitors, and identify opportunities for differentiation. **Service offerings:** Detail your service packages, pricing strategies, and delivery methods. **Marketing plan:** Outline your client acquisition strategies, content marketing approach, and networking plans. **Operations:** Document your workflow processes, quality standards, and client management systems. **Financial projections:** Create realistic revenue forecasts, expense budgets, and cash flow projections for the first two years.',
      tags: ['business-plan', 'freelance-strategy', 'planning', 'template'],
      readTime: '30 min',
      difficulty: 'intermediate'
    },
    {
      id: 'freelance-pricing-strategies-guide',
      title: 'Freelance Pricing Strategies & Rate Optimization',
      type: 'guide',
      excerpt: 'Master the art and science of pricing your freelance services for maximum profitability and client satisfaction',
      content: 'Pricing is often the biggest challenge for new freelancers, but it doesn\'t have to be guesswork. **Rate calculation methods:** Learn to calculate your baseline hourly rate based on desired annual income, working hours, and business expenses. **Value-based pricing:** Discover how to price based on client value rather than time invested, dramatically increasing your earning potential. **Market research:** Effective strategies for researching competitor pricing and positioning yourself appropriately. **Pricing psychology:** Understand how clients perceive pricing and use anchoring, bundling, and other techniques effectively. **Rate negotiation:** Scripts and strategies for confidently discussing rates with prospects and existing clients. **Price increases:** When and how to raise your rates with existing clients without losing relationships.',
      tags: ['pricing', 'freelance-rates', 'value-pricing', 'negotiation'],
      readTime: '25 min',
      difficulty: 'intermediate'
    },
    {
      id: 'client-acquisition-system',
      title: 'Systematic Client Acquisition for Freelancers',
      type: 'guide',
      excerpt: 'Build a repeatable system for consistently attracting and converting ideal freelance clients',
      content: 'Successful freelancers don\'t rely on luck for clients—they build systematic acquisition processes. **Lead generation strategies:** Multiple proven methods for generating qualified leads including content marketing, networking, partnerships, and strategic outreach. **Content marketing system:** How to create valuable content that attracts your ideal clients and positions you as the expert solution. **Networking framework:** Strategic networking approaches that build genuine relationships rather than pushy sales interactions. **Referral systems:** Design referral programs that turn satisfied clients into your best marketing channel. **Proposal optimization:** Create proposals that win more clients by focusing on their outcomes rather than your process. **Sales conversation mastery:** Navigate discovery calls and sales conversations with confidence and authenticity.',
      tags: ['client-acquisition', 'marketing', 'lead-generation', 'sales-process'],
      readTime: '35 min',
      difficulty: 'intermediate'
    },
    {
      id: 'freelance-project-management-toolkit',
      title: 'Freelance Project Management Toolkit',
      type: 'tool',
      excerpt: 'Complete toolkit for managing freelance projects efficiently from start to finish',
      content: 'Project management separates successful freelancers from those who struggle with scope creep and unhappy clients. **Client onboarding system:** Streamlined process for getting new clients started smoothly with clear expectations and deliverables. **Project planning templates:** Comprehensive templates for project scoping, timeline creation, and milestone planning. **Communication protocols:** Establish clear communication standards that keep clients informed while protecting your time. **Scope management:** Tools and techniques for preventing scope creep and managing change requests professionally. **Progress tracking:** Systems for monitoring project progress and identifying potential issues early. **Client feedback integration:** Structured processes for gathering and incorporating client feedback efficiently.',
      tags: ['project-management', 'client-management', 'templates', 'systems'],
      readTime: '28 min',
      difficulty: 'beginner'
    },
    {
      id: 'freelance-scaling-strategies',
      title: 'Scaling Your Freelance Business Beyond Solo Work',
      type: 'guide',
      excerpt: 'Strategic approaches to scaling your freelance business without sacrificing quality or burning out',
      content: 'Growing beyond solo freelancing requires strategic thinking and systematic execution. **Capacity optimization:** Maximize your current capacity through better processes, higher rates, and premium positioning before adding complexity. **Outsourcing strategies:** Identify which tasks to outsource first and how to find reliable contractors and virtual assistants. **Product development:** Create digital products, courses, or tools that generate income beyond trading time for money. **Partnership models:** Explore strategic partnerships, white-labeling opportunities, and collaborative arrangements that expand your reach. **Team building:** If building a team, learn to hire, manage, and retain quality freelancers or employees. **Business model evolution:** Navigate the transition from freelancer to agency owner or product creator while maintaining quality and client relationships.',
      tags: ['scaling', 'business-growth', 'outsourcing', 'team-building', 'passive-income'],
      readTime: '40 min',
      difficulty: 'expert'
    }
  ]
};

export const personalFinanceInvestmentTemplate: GuidanceTemplate = {
  id: 'personal-finance-investment',
  title: 'Personal Finance & Investment Planning',
  description: 'Master personal finance management and build long-term wealth through strategic investing',
  category: 'finance',
  icon: '📈',
  sections: [
    {
      id: 'financial-foundation',
      title: 'Financial Foundation & Assessment',
      order: 1,
      reflectionPrompts: [
        {
          id: 'net-worth-calculation',
          prompt: "What is your current net worth? List all assets and debts to understand your baseline.",
          category: 'research',
          helpText: 'Calculate total assets (cash, investments, property, vehicles) minus total liabilities (credit cards, loans, mortgage). Track this quarterly to monitor progress.'
        },
        {
          id: 'cash-flow-analysis',
          prompt: 'How much money flows in and out each month? Are you living within your means?',
          category: 'research',
          helpText: 'Track all income sources and expenses for 3 months. Categorize spending to identify areas for optimization. Positive cash flow is essential for wealth building.'
        },
        {
          id: 'emergency-fund-status',
          prompt: 'Do you have 3-6 months of expenses saved in an emergency fund? How will you build or optimize it?',
          category: 'planning',
          helpText: 'Keep emergency funds in high-yield savings accounts or money market accounts. This should be your first priority before investing. Start with $1000 if overwhelmed.'
        },
        {
          id: 'debt-inventory-strategy',
          prompt: 'What debts do you have, and what\'s your strategy for elimination? High-interest debt first?',
          category: 'planning',
          helpText: 'List all debts with balances, minimum payments, and interest rates. Consider debt avalanche (highest interest first) or snowball (smallest balance first) methods.'
        },
        {
          id: 'financial-goals-timeline',
          prompt: 'What are your specific financial goals for 1, 5, 10, and 30 years? How much money do you need?',
          category: 'planning',
          helpText: 'Be specific with dollar amounts and timelines. Examples: $10K emergency fund (1 year), $100K investment portfolio (5 years), financial independence (30 years).'
        },
        {
          id: 'financial-behavior-assessment',
          prompt: 'What are your spending triggers and money habits? Which behaviors support or hinder your goals?',
          category: 'research',
          helpText: 'Identify emotional spending patterns, impulse purchases, and positive money habits. Understanding psychology is key to sustainable financial success.'
        }
      ]
    },
    {
      id: 'budgeting-optimization',
      title: 'Advanced Budgeting & Expense Optimization',
      order: 2,
      reflectionPrompts: [
        {
          id: 'budget-method-selection',
          prompt: 'What budgeting method works best for your personality and goals? Zero-based, 50/30/20, envelope, or percentage-based?',
          category: 'planning',
          helpText: 'Zero-based assigns every dollar a purpose. 50/30/20 splits needs/wants/savings. Envelope method uses cash categories. Choose what you\'ll actually follow consistently.'
        },
        {
          id: 'income-optimization',
          prompt: 'How can you increase your income? Career advancement, side hustles, skill development, or passive income streams?',
          category: 'planning',
          helpText: 'Consider salary negotiations, additional certifications, freelancing, rental income, dividend investing, or starting a business. Focus on scalable income growth.'
        },
        {
          id: 'expense-reduction-strategy',
          prompt: 'Which expenses can you reduce without significantly impacting quality of life? Where are you overspending?',
          category: 'planning',
          helpText: 'Review subscriptions, negotiate bills, consider house hacking, optimize transportation costs, meal planning. Focus on big fixed expenses first.'
        },
        {
          id: 'savings-rate-target',
          prompt: 'What percentage of income can you save and invest? How will you increase this rate over time?',
          category: 'planning',
          helpText: 'Aim for at least 20% savings rate, with 30-50% ideal for early financial independence. Increase savings rate with every raise or bonus.'
        },
        {
          id: 'automated-systems',
          prompt: 'How will you automate your finances to remove decision fatigue and ensure consistency?',
          category: 'planning',
          helpText: 'Set up automatic transfers to savings, investment accounts, and bill payments. Pay yourself first by automating savings before discretionary spending.'
        },
        {
          id: 'lifestyle-inflation-management',
          prompt: 'How will you resist lifestyle inflation as your income increases? What principles will guide spending decisions?',
          category: 'planning',
          helpText: 'Define "enough" for each category, increase savings rate with raises, focus on experiences over things, and regularly review spending alignment with values.'
        }
      ]
    },
    {
      id: 'investment-fundamentals',
      title: 'Investment Strategy & Portfolio Construction',
      order: 3,
      reflectionPrompts: [
        {
          id: 'investment-goals-timeline',
          prompt: 'What are you investing for, and what\'s your timeline? Retirement, home purchase, children\'s education?',
          category: 'planning',
          helpText: 'Different goals require different strategies. Long-term goals (10+ years) can handle more risk. Short-term goals need conservative approaches.'
        },
        {
          id: 'risk-tolerance-assessment',
          prompt: 'What\'s your true risk tolerance? How would you react to a 20-40% portfolio decline?',
          category: 'research',
          helpText: 'Consider both financial capacity for risk and emotional tolerance. Be honest about how market volatility affects your sleep and stress levels.'
        },
        {
          id: 'asset-allocation-strategy',
          prompt: 'How will you allocate investments across stocks, bonds, real estate, and other assets?',
          category: 'planning',
          helpText: 'Common rule: 100 minus your age in stocks, rest in bonds. Consider total stock market index funds, international diversification, and alternative investments.'
        },
        {
          id: 'investment-account-optimization',
          prompt: 'How will you optimize tax-advantaged accounts? 401k, IRA, Roth IRA, HSA, 529 plans?',
          category: 'planning',
          helpText: 'Maximize employer 401k match first, then Roth IRA, then max 401k. Use HSA as retirement account if possible. Understand contribution limits and deadlines.'
        },
        {
          id: 'investment-vehicle-selection',
          prompt: 'What investment vehicles will you use? Index funds, ETFs, individual stocks, real estate, or alternatives?',
          category: 'planning',
          helpText: 'Index funds and ETFs offer diversification and low fees. Individual stocks require research time. Real estate offers inflation protection. Start simple and expand gradually.'
        },
        {
          id: 'rebalancing-strategy',
          prompt: 'How often will you rebalance your portfolio? What triggers will prompt rebalancing?',
          category: 'planning',
          helpText: 'Rebalance annually or when allocations drift 5% from targets. This forces you to sell high and buy low systematically. Don\'t rebalance too frequently.'
        }
      ]
    },
    {
      id: 'tax-optimization',
      title: 'Tax Strategy & Optimization',
      order: 4,
      reflectionPrompts: [
        {
          id: 'tax-bracket-optimization',
          prompt: 'What\'s your current and projected tax bracket? How can you optimize timing of income and deductions?',
          category: 'planning',
          helpText: 'Understand marginal vs effective tax rates. Consider Roth vs traditional retirement accounts, tax-loss harvesting, and timing of capital gains.'
        },
        {
          id: 'retirement-account-tax-strategy',
          prompt: 'How will you balance traditional vs Roth retirement savings for tax optimization?',
          category: 'planning',
          helpText: 'Traditional saves taxes now, Roth saves taxes later. Consider your current vs future tax bracket, age, and retirement timeline. Diversifying can hedge tax risk.'
        },
        {
          id: 'tax-loss-harvesting',
          prompt: 'How will you implement tax-loss harvesting to reduce taxable investment gains?',
          category: 'planning',
          helpText: 'Sell losing investments to offset gains, avoiding wash sale rules. This strategy works best in taxable accounts. Reinvest proceeds in similar but not identical investments.'
        },
        {
          id: 'tax-efficient-investing',
          prompt: 'How will you structure investments for tax efficiency? Location matters for different asset classes.',
          category: 'planning',
          helpText: 'Hold tax-inefficient investments in retirement accounts, tax-efficient in taxable accounts. Municipal bonds for high earners. Index funds are naturally tax-efficient.'
        },
        {
          id: 'business-tax-strategies',
          prompt: 'If self-employed or have side income, what business tax strategies can optimize your situation?',
          category: 'planning',
          helpText: 'Consider LLC/S-Corp election, business expense deductions, SEP-IRA or Solo 401k, home office deduction, and quarterly estimated payments.'
        },
        {
          id: 'estate-tax-planning',
          prompt: 'Do you need estate planning for tax optimization? Wills, trusts, beneficiary designations?',
          category: 'planning',
          helpText: 'Update beneficiaries on all accounts, consider trust structures for large estates, understand gift tax limits, and plan for state estate taxes where applicable.'
        }
      ]
    },
    {
      id: 'wealth-building-acceleration',
      title: 'Advanced Wealth Building & Acceleration Strategies',
      order: 5,
      reflectionPrompts: [
        {
          id: 'alternative-investments',
          prompt: 'What alternative investments fit your portfolio? Real estate, commodities, cryptocurrency, private equity?',
          category: 'planning',
          helpText: 'REITs for real estate exposure, commodity ETFs for inflation protection, small crypto allocation for speculation. Understand risks and correlation to stocks.'
        },
        {
          id: 'real-estate-investment-strategy',
          prompt: 'How will real estate fit into your wealth building? Primary residence, rental properties, REITs?',
          category: 'planning',
          helpText: 'Primary residence provides stability but isn\'t always best investment. Rental properties require active management. REITs offer passive real estate exposure.'
        },
        {
          id: 'business-investment-opportunities',
          prompt: 'Should you start a business or invest in businesses? What skills and capital do you have?',
          category: 'planning',
          helpText: 'Businesses can provide unlimited upside but require significant time and risk. Consider your skills, available capital, and risk tolerance. Start small or invest passively.'
        },
        {
          id: 'income-diversification',
          prompt: 'How will you diversify income streams beyond your primary job? Multiple income sources reduce risk.',
          category: 'planning',
          helpText: 'Consider rental income, dividend stocks, side businesses, royalties, or consulting. Passive income provides financial security and freedom.'
        },
        {
          id: 'leverage-strategy',
          prompt: 'When and how might you use leverage (borrowed money) to amplify returns? What are the risks?',
          category: 'planning',
          helpText: 'Mortgage leverage for real estate, margin for experienced investors, business loans for profitable ventures. Leverage amplifies both gains and losses.'
        },
        {
          id: 'financial-independence-planning',
          prompt: 'What\'s your path to financial independence? How much do you need, and by when?',
          category: 'planning',
          helpText: 'Use 4% withdrawal rule as starting point. Need 25x annual expenses for basic FI. Consider geographic arbitrage, part-time work, or higher savings rates.'
        }
      ]
    },
    {
      id: 'monitoring-optimization',
      title: 'Portfolio Monitoring & Continuous Optimization',
      order: 6,
      reflectionPrompts: [
        {
          id: 'progress-tracking-metrics',
          prompt: 'What key metrics will you track monthly and quarterly? Net worth, savings rate, investment returns?',
          category: 'planning',
          helpText: 'Track net worth, savings rate, investment account balances, and progress toward specific goals. Use apps or spreadsheets for consistent monitoring.'
        },
        {
          id: 'portfolio-review-schedule',
          prompt: 'How often will you review and adjust your investment strategy? What triggers changes?',
          category: 'planning',
          helpText: 'Annual reviews are usually sufficient. Adjust for life changes (marriage, kids, job change), major market events, or significant goal changes. Avoid overreacting to volatility.'
        },
        {
          id: 'fee-cost-optimization',
          prompt: 'How will you minimize investment fees and costs? These significantly impact long-term returns.',
          category: 'planning',
          helpText: 'Choose low-cost index funds (under 0.2% expense ratios), avoid load funds, minimize trading costs, and consider tax implications of frequent trading.'
        },
        {
          id: 'financial-education-plan',
          prompt: 'How will you continue learning about finance and investing? Knowledge is power in wealth building.',
          category: 'planning',
          helpText: 'Read books, follow reputable financial blogs, take courses, or work with fee-only financial advisors. Stay informed but avoid information overload.'
        },
        {
          id: 'goal-adjustment-strategy',
          prompt: 'How will you adjust goals as life circumstances change? Marriage, children, career changes?',
          category: 'planning',
          helpText: 'Review goals annually, adjust for major life events, and stay flexible while maintaining long-term focus. Life changes require financial plan adjustments.'
        },
        {
          id: 'legacy-wealth-transfer',
          prompt: 'How do you want to handle wealth transfer to heirs or charities? What\'s your legacy plan?',
          category: 'planning',
          helpText: 'Consider charitable giving strategies, education funding for children, and estate planning. Discuss money values with family and plan for wealth transfer.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'comprehensive-investment-portfolio-guide',
      title: 'Complete Investment Portfolio Construction Guide',
      type: 'guide',
      excerpt: 'Master portfolio construction from asset allocation to security selection with modern portfolio theory principles',
      content: 'Building a successful investment portfolio requires understanding both theory and practical implementation. **Asset allocation fundamentals:** Learn how to determine optimal stock/bond/alternative splits based on age, risk tolerance, and goals. **Modern portfolio theory:** Understand correlation, risk-adjusted returns, and efficient frontier concepts for better diversification. **Security selection:** Compare index funds vs ETFs vs individual stocks, with analysis of expense ratios, tax efficiency, and tracking error. **International diversification:** Strategies for global exposure including developed and emerging markets, currency hedging considerations. **Alternative investments:** When and how to include REITs, commodities, cryptocurrency, and other alternatives for enhanced diversification.',
      tags: ['portfolio-construction', 'asset-allocation', 'diversification', 'modern-portfolio-theory'],
      readTime: '45 min',
      difficulty: 'intermediate'
    },
    {
      id: 'tax-optimization-investment-strategies',
      title: 'Advanced Tax Optimization for Investors',
      type: 'guide',
      excerpt: 'Comprehensive strategies for minimizing taxes and maximizing after-tax investment returns',
      content: 'Tax efficiency can significantly impact long-term wealth building, often adding 0.5-2% annually to returns. **Account location optimization:** Strategic placement of different asset classes across taxable, traditional IRA, and Roth accounts for maximum tax efficiency. **Tax-loss harvesting:** Systematic approach to realizing losses to offset gains, including wash sale avoidance and reinvestment strategies. **Retirement account optimization:** Compare traditional vs Roth strategies, understand contribution limits, backdoor Roth conversions, and mega backdoor strategies. **Tax-efficient fund selection:** Choose funds with low turnover and tax-managed strategies in taxable accounts. **Advanced strategies:** Charitable giving with appreciated securities, qualified small business stock exemption, and opportunity zone investing.',
      tags: ['tax-optimization', 'tax-loss-harvesting', 'retirement-accounts', 'tax-efficiency'],
      readTime: '35 min',
      difficulty: 'expert'
    },
    {
      id: 'financial-independence-roadmap',
      title: 'Financial Independence & Early Retirement (FIRE) Roadmap',
      type: 'guide',
      excerpt: 'Strategic pathways to achieve financial independence through aggressive saving, smart investing, and lifestyle optimization',
      content: 'Financial independence is achievable through disciplined execution of proven strategies. **FIRE variations:** Understand Lean FIRE, Traditional FIRE, Fat FIRE, and Coast FIRE approaches with specific numbers and timelines. **High savings rate strategies:** Practical methods to achieve 30-70% savings rates through income optimization and strategic expense reduction. **Withdrawal strategies:** 4% rule, dynamic withdrawal, bond tents, and other strategies for sustainable retirement spending. **Geographic arbitrage:** Leveraging location independence and cost of living differences to accelerate FI timeline. **Side hustle monetization:** Building multiple income streams and potentially location-independent businesses. **Healthcare and insurance:** Managing health insurance, long-term care, and other risks during early retirement.',
      tags: ['financial-independence', 'FIRE', 'early-retirement', 'high-savings-rate'],
      readTime: '50 min',
      difficulty: 'intermediate'
    },
    {
      id: 'real-estate-investment-analysis-toolkit',
      title: 'Real Estate Investment Analysis & Strategy Toolkit',
      type: 'tool',
      excerpt: 'Complete toolkit for analyzing and managing real estate investments from single properties to portfolio scaling',
      content: 'Real estate can provide both cash flow and appreciation, but requires careful analysis and management. **Property analysis tools:** Cash flow calculators, cap rate analysis, comparative market analysis, and total return calculations including tax benefits. **Financing strategies:** Compare conventional mortgages, portfolio lenders, hard money, private lending, and creative financing methods. **Market selection criteria:** Demographic analysis, job growth, population trends, and supply/demand indicators for market selection. **Property management systems:** Tenant screening processes, maintenance protocols, expense tracking, and scaling considerations. **Exit strategies:** Refinancing, 1031 exchanges, selling strategies, and long-term hold considerations. **Risk management:** Insurance requirements, legal structure options, and risk mitigation strategies.',
      tags: ['real-estate-investing', 'property-analysis', 'rental-properties', 'investment-analysis'],
      readTime: '40 min',
      difficulty: 'intermediate'
    },
    {
      id: 'advanced-budgeting-cash-flow-optimization',
      title: 'Advanced Budgeting & Cash Flow Optimization System',
      type: 'system',
      excerpt: 'Sophisticated budgeting system for high earners and complex financial situations with multiple income streams',
      content: 'Advanced budgeting goes beyond simple expense tracking to optimize cash flow and accelerate wealth building. **Cash flow forecasting:** Project income and expenses 6-12 months ahead to optimize timing of investments and major purchases. **Variable income budgeting:** Strategies for commission-based, bonus-heavy, or irregular income patterns including smoothing techniques and opportunity funds. **Tax planning integration:** Align spending and saving with tax optimization strategies, quarterly payment planning, and year-end tax moves. **Multiple goal prioritization:** Balance competing financial goals with mathematical optimization and psychological factors. **Automation systems:** Advanced automation workflows for complex scenarios including multiple accounts, automatic rebalancing, and goal-based saving. **Performance tracking:** Measure budget performance with variance analysis and continuous improvement metrics.',
      tags: ['advanced-budgeting', 'cash-flow-optimization', 'financial-systems', 'automation'],
      readTime: '30 min',
      difficulty: 'expert'
    }
  ]
};

export const digitalMarketingSEOTemplate: GuidanceTemplate = {
  id: 'digital-marketing-seo',
  title: 'Digital Marketing & SEO Strategy',
  description: 'Develop comprehensive digital marketing strategies and optimize search engine performance',
  category: 'planning',
  icon: '📱',
  sections: [
    {
      id: 'marketing-foundation',
      title: 'Marketing Foundation & Strategy',
      order: 1,
      reflectionPrompts: [
        {
          id: 'target-audience-definition',
          prompt: "Who is your ideal customer? Create detailed buyer personas with demographics, pain points, and behaviors.",
          category: 'planning',
          helpText: 'Define age, gender, income, interests, challenges, and preferred communication channels. Conduct surveys, interviews, and analyze existing customer data for accurate personas.'
        },
        {
          id: 'competitive-analysis-strategy',
          prompt: 'Who are your main competitors, and what marketing strategies are they using successfully?',
          category: 'research',
          helpText: 'Analyze competitor websites, social media, content, ads, and SEO strategies. Use tools like SEMrush, Ahrefs, or SimilarWeb for competitive intelligence.'
        },
        {
          id: 'unique-value-proposition',
          prompt: 'What makes your business unique? How will you differentiate in your marketing messages?',
          category: 'planning',
          helpText: 'Identify your unique benefits, competitive advantages, and brand positioning. Test different value propositions with target audience feedback.'
        },
        {
          id: 'marketing-goals-metrics',
          prompt: 'What specific marketing goals will you set? Brand awareness, lead generation, sales, customer retention?',
          category: 'planning',
          helpText: 'Set SMART goals with specific metrics: website traffic, conversion rates, cost per acquisition, lifetime value, social media engagement, search rankings.'
        },
        {
          id: 'budget-allocation',
          prompt: 'What\'s your marketing budget, and how will you allocate it across different channels and campaigns?',
          category: 'planning',
          helpText: 'Allocate budget based on channel effectiveness, testing capacity, and business goals. Start with proven channels, then expand to experimental ones.'
        },
        {
          id: 'brand-messaging-framework',
          prompt: 'What key messages and brand voice will guide all your marketing communications?',
          category: 'planning',
          helpText: 'Develop consistent brand voice (professional, friendly, authoritative), key messages for different audiences, and content guidelines for team alignment.'
        }
      ]
    },
    {
      id: 'seo-optimization',
      title: 'SEO Strategy & Implementation',
      order: 2,
      reflectionPrompts: [
        {
          id: 'keyword-research-strategy',
          prompt: 'What keywords are your target customers searching for? How will you research and prioritize them?',
          category: 'research',
          helpText: 'Use tools like Google Keyword Planner, SEMrush, Ahrefs to find relevant keywords. Focus on search volume, competition, and commercial intent alignment.'
        },
        {
          id: 'on-page-seo-optimization',
          prompt: 'How will you optimize your website pages for search engines? Title tags, meta descriptions, content structure?',
          category: 'planning',
          helpText: 'Optimize title tags (50-60 chars), meta descriptions (150-160 chars), header structure (H1, H2, H3), URL structure, and internal linking strategy.'
        },
        {
          id: 'content-seo-strategy',
          prompt: 'What content strategy will support your SEO goals? Blog posts, guides, landing pages?',
          category: 'planning',
          helpText: 'Create content clusters around main topics, target long-tail keywords, focus on user intent, and maintain consistent publishing schedule for authority building.'
        },
        {
          id: 'technical-seo-audit',
          prompt: 'What technical SEO issues need addressing? Site speed, mobile optimization, crawlability?',
          category: 'planning',
          helpText: 'Audit site speed (Core Web Vitals), mobile-friendliness, XML sitemaps, robots.txt, SSL certificates, and fix crawl errors using Google Search Console.'
        },
        {
          id: 'local-seo-strategy',
          prompt: 'If applicable, how will you optimize for local search? Google My Business, local citations, reviews?',
          category: 'planning',
          helpText: 'Optimize Google My Business profile, ensure NAP consistency across directories, gather positive reviews, and create location-specific content.'
        },
        {
          id: 'link-building-strategy',
          prompt: 'How will you earn high-quality backlinks to improve domain authority and rankings?',
          category: 'planning',
          helpText: 'Focus on guest posting, digital PR, broken link building, resource page outreach, and creating linkable assets like original research or tools.'
        }
      ]
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing & Strategy',
      order: 3,
      reflectionPrompts: [
        {
          id: 'content-marketing-goals',
          prompt: 'What do you want to achieve with content marketing? Brand awareness, lead generation, thought leadership?',
          category: 'planning',
          helpText: 'Align content goals with business objectives. Measure success with relevant metrics: traffic, engagement, leads, conversions, brand mentions.'
        },
        {
          id: 'content-types-formats',
          prompt: 'What types of content will you create? Blog posts, videos, infographics, podcasts, webinars?',
          category: 'planning',
          helpText: 'Choose formats based on audience preferences, your strengths, and resource availability. Start with 2-3 formats and expand gradually.'
        },
        {
          id: 'content-calendar-planning',
          prompt: 'How will you plan and schedule content creation? Editorial calendar, themes, seasonal topics?',
          category: 'planning',
          helpText: 'Create monthly themes, plan seasonal content, batch content creation, and maintain consistent publishing schedule for audience expectations.'
        },
        {
          id: 'content-distribution-strategy',
          prompt: 'How will you distribute and promote your content across different channels?',
          category: 'planning',
          helpText: 'Utilize owned channels (website, email), social media platforms, guest posting, content syndication, and paid promotion for maximum reach.'
        },
        {
          id: 'content-repurposing-strategy',
          prompt: 'How will you repurpose content to maximize value and reach across different formats and platforms?',
          category: 'planning',
          helpText: 'Turn blog posts into social media content, videos into podcasts, create infographics from data, and develop email sequences from popular content.'
        },
        {
          id: 'content-performance-measurement',
          prompt: 'How will you measure content performance and optimize based on data?',
          category: 'research',
          helpText: 'Track metrics like page views, time on page, social shares, comments, lead generation, and conversion rates. Use data to improve future content.'
        }
      ]
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing Strategy',
      order: 4,
      reflectionPrompts: [
        {
          id: 'social-platform-selection',
          prompt: 'Which social media platforms will you focus on? Where does your audience spend time?',
          category: 'planning',
          helpText: 'Choose platforms based on audience demographics and behavior. Focus on 2-3 platforms initially rather than spreading too thin across all platforms.'
        },
        {
          id: 'social-content-strategy',
          prompt: 'What content will you share on social media? Educational, entertaining, promotional mix?',
          category: 'planning',
          helpText: 'Follow 80/20 rule: 80% valuable/entertaining content, 20% promotional. Mix original content, curated content, behind-scenes, and user-generated content.'
        },
        {
          id: 'community-engagement-strategy',
          prompt: 'How will you engage with your social media community? Response time, conversation starters?',
          category: 'planning',
          helpText: 'Set response time goals, actively participate in conversations, ask questions, share others\' content, and build genuine relationships with followers.'
        },
        {
          id: 'social-media-advertising',
          prompt: 'Will you use paid social media advertising? Which platforms and campaign types?',
          category: 'planning',
          helpText: 'Consider Facebook/Instagram ads, LinkedIn sponsored content, Twitter ads based on audience and goals. Start with small budgets and scale successful campaigns.'
        },
        {
          id: 'influencer-collaboration',
          prompt: 'How might you collaborate with influencers or industry partners for expanded reach?',
          category: 'planning',
          helpText: 'Identify relevant micro-influencers, industry experts, and brand partners. Focus on authentic partnerships that provide mutual value.'
        },
        {
          id: 'social-media-analytics',
          prompt: 'How will you track social media performance and ROI? Engagement, reach, conversions?',
          category: 'research',
          helpText: 'Use platform analytics and tools like Hootsuite, Buffer, or Sprout Social to track engagement rates, reach, click-through rates, and conversions.'
        }
      ]
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing & Automation',
      order: 5,
      reflectionPrompts: [
        {
          id: 'email-list-building',
          prompt: 'How will you build your email list? Lead magnets, opt-in forms, content upgrades?',
          category: 'planning',
          helpText: 'Create valuable lead magnets (ebooks, checklists, webinars), use pop-ups strategically, and offer content upgrades relevant to specific blog posts.'
        },
        {
          id: 'email-segmentation-strategy',
          prompt: 'How will you segment your email list for more targeted messaging?',
          category: 'planning',
          helpText: 'Segment by demographics, behavior, purchase history, engagement level, and interests for personalized messaging that increases open and click rates.'
        },
        {
          id: 'email-automation-workflows',
          prompt: 'What automated email sequences will you create? Welcome series, nurture campaigns, abandoned cart?',
          category: 'planning',
          helpText: 'Set up welcome sequences for new subscribers, nurture campaigns for different customer segments, re-engagement campaigns, and transactional follow-ups.'
        },
        {
          id: 'email-content-strategy',
          prompt: 'What types of emails will you send? Newsletters, promotional, educational, personalized recommendations?',
          category: 'planning',
          helpText: 'Balance educational content, company updates, product promotions, and personalized recommendations. Maintain consistent value in every email.'
        },
        {
          id: 'email-design-optimization',
          prompt: 'How will you optimize email design for different devices and email clients?',
          category: 'planning',
          helpText: 'Use responsive design, test across email clients, optimize for mobile viewing, and ensure clear call-to-action buttons and readable fonts.'
        },
        {
          id: 'email-performance-optimization',
          prompt: 'How will you test and optimize email performance? Subject lines, send times, content?',
          category: 'planning',
          helpText: 'A/B test subject lines, send times, email content, and CTAs. Monitor open rates, click-through rates, unsubscribe rates, and conversion rates.'
        }
      ]
    },
    {
      id: 'analytics-optimization',
      title: 'Analytics, Measurement & Optimization',
      order: 6,
      reflectionPrompts: [
        {
          id: 'analytics-setup-tracking',
          prompt: 'What analytics tools will you use to track marketing performance? Google Analytics, social media insights?',
          category: 'planning',
          helpText: 'Set up Google Analytics 4, Facebook Pixel, conversion tracking, and platform-specific analytics. Ensure proper tracking for all marketing channels.'
        },
        {
          id: 'key-performance-indicators',
          prompt: 'What KPIs will you track for each marketing channel? Traffic, conversions, ROI, engagement?',
          category: 'planning',
          helpText: 'Define specific metrics for each channel: website traffic, conversion rates, cost per acquisition, email open rates, social engagement, search rankings.'
        },
        {
          id: 'conversion-tracking-optimization',
          prompt: 'How will you track and optimize conversions throughout your marketing funnel?',
          category: 'planning',
          helpText: 'Set up goal tracking, e-commerce tracking, and attribution modeling to understand customer journey and optimize conversion paths.'
        },
        {
          id: 'marketing-attribution',
          prompt: 'How will you attribute conversions to different marketing channels and campaigns?',
          category: 'research',
          helpText: 'Use multi-touch attribution models, UTM parameters for campaign tracking, and marketing attribution software to understand channel effectiveness.'
        },
        {
          id: 'regular-reporting-analysis',
          prompt: 'How often will you review marketing performance and what reports will you create?',
          category: 'planning',
          helpText: 'Create weekly operational reports, monthly performance summaries, and quarterly strategic reviews. Focus on actionable insights and recommendations.'
        },
        {
          id: 'continuous-optimization-strategy',
          prompt: 'How will you use data insights to continuously improve marketing performance?',
          category: 'planning',
          helpText: 'Implement regular testing protocols, performance benchmarks, and optimization workflows based on data insights and industry best practices.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'comprehensive-seo-audit-checklist',
      title: 'Complete SEO Audit & Optimization Checklist',
      type: 'checklist',
      excerpt: 'Comprehensive checklist for conducting thorough SEO audits and implementing optimization strategies',
      content: 'A complete SEO audit identifies opportunities and issues across all aspects of search optimization. **Technical SEO audit:** Site speed analysis, mobile-friendliness testing, crawl error identification, SSL certificate verification, and Core Web Vitals assessment. **On-page SEO review:** Title tag optimization, meta description analysis, header structure evaluation, internal linking assessment, and content quality review. **Off-page SEO analysis:** Backlink profile evaluation, domain authority assessment, local SEO factors, and social signals analysis. **Keyword research and mapping:** Comprehensive keyword research, search intent analysis, content gap identification, and keyword mapping to existing pages. **Competitive analysis:** Competitor ranking analysis, content gap opportunities, backlink acquisition strategies, and market positioning insights.',
      tags: ['SEO-audit', 'technical-SEO', 'on-page-optimization', 'keyword-research'],
      readTime: '35 min',
      difficulty: 'intermediate'
    },
    {
      id: 'content-marketing-strategy-framework',
      title: 'Content Marketing Strategy & Calendar Framework',
      type: 'framework',
      excerpt: 'Strategic framework for planning, creating, and distributing content that drives business results',
      content: 'Effective content marketing requires strategic planning and consistent execution across multiple channels. **Content strategy development:** Audience research and persona creation, content audit and gap analysis, competitive content analysis, and content pillar identification. **Content planning system:** Editorial calendar creation, seasonal content planning, content theme development, and resource allocation planning. **Content creation workflow:** Ideation processes, content brief templates, quality standards, and approval workflows for consistent output. **Distribution strategy:** Multi-channel distribution planning, content repurposing strategies, paid promotion tactics, and community engagement approaches. **Performance measurement:** Content performance metrics, ROI calculation methods, audience engagement analysis, and optimization strategies based on data insights.',
      tags: ['content-strategy', 'editorial-calendar', 'content-distribution', 'content-measurement'],
      readTime: '40 min',
      difficulty: 'intermediate'
    },
    {
      id: 'social-media-marketing-playbook',
      title: 'Social Media Marketing Playbook & Best Practices',
      type: 'guide',
      excerpt: 'Complete playbook for building engaging social media presence across multiple platforms',
      content: 'Social media success requires platform-specific strategies and consistent community engagement. **Platform optimization:** Profile setup best practices, bio optimization, visual branding guidelines, and platform-specific content formats. **Content strategy by platform:** Facebook engagement tactics, Instagram visual storytelling, LinkedIn professional networking, Twitter real-time engagement, and TikTok creative strategies. **Community building:** Audience engagement tactics, conversation starters, user-generated content campaigns, and influencer collaboration strategies. **Social media advertising:** Campaign setup and optimization, audience targeting strategies, creative best practices, and budget allocation across platforms. **Analytics and optimization:** Social media metrics tracking, engagement rate improvement, reach optimization, and ROI measurement for social media efforts.',
      tags: ['social-media-strategy', 'community-building', 'social-advertising', 'platform-optimization'],
      readTime: '45 min',
      difficulty: 'beginner'
    },
    {
      id: 'email-marketing-automation-system',
      title: 'Email Marketing Automation & Optimization System',
      type: 'system',
      excerpt: 'Advanced email marketing system for list building, segmentation, and automated campaign optimization',
      content: 'Email marketing automation enables personalized communication at scale with higher engagement and conversion rates. **List building strategies:** Lead magnet creation, opt-in form optimization, content upgrade systems, and ethical list growth tactics. **Advanced segmentation:** Behavioral segmentation, demographic targeting, purchase history analysis, and engagement-based segmentation for personalized messaging. **Automation workflows:** Welcome series setup, nurture campaign development, re-engagement sequences, and triggered email campaigns based on user behavior. **Email optimization:** Subject line testing, send time optimization, content personalization, and mobile-responsive design implementation. **Performance analytics:** Open rate optimization, click-through rate improvement, conversion tracking, and advanced email analytics for continuous improvement.',
      tags: ['email-automation', 'list-building', 'email-segmentation', 'email-optimization'],
      readTime: '30 min',
      difficulty: 'intermediate'
    },
    {
      id: 'digital-marketing-analytics-dashboard',
      title: 'Digital Marketing Analytics & ROI Dashboard',
      type: 'tool',
      excerpt: 'Comprehensive analytics dashboard for tracking and optimizing digital marketing performance across all channels',
      content: 'Data-driven marketing decisions require comprehensive tracking and analysis across all digital channels. **Analytics setup:** Google Analytics 4 configuration, conversion tracking implementation, attribution modeling setup, and cross-platform tracking coordination. **KPI dashboard creation:** Key performance indicator selection, automated reporting setup, real-time monitoring systems, and executive summary reports. **Multi-channel attribution:** Customer journey mapping, touchpoint analysis, channel contribution assessment, and marketing mix optimization. **ROI calculation:** Cost per acquisition analysis, lifetime value calculations, marketing qualified lead tracking, and revenue attribution across channels. **Optimization workflows:** Performance benchmarking, A/B testing protocols, continuous improvement processes, and data-driven decision making frameworks.',
      tags: ['marketing-analytics', 'ROI-tracking', 'conversion-optimization', 'performance-measurement'],
      readTime: '50 min',
      difficulty: 'expert'
    }
  ]
};

export const remoteWorkProductivityTemplate: GuidanceTemplate = {
  id: 'remote-work-productivity',
  title: 'Remote Work & Productivity Mastery',
  description: 'Master remote work productivity and create an effective home office environment',
  category: 'productivity',
  icon: '💻',
  sections: [
    {
      id: 'remote-workspace-setup',
      title: 'Remote Workspace Setup & Environment',
      order: 1,
      reflectionPrompts: [
        {
          id: 'physical-workspace-design',
          prompt: "How will you design your physical workspace for maximum productivity and comfort?",
          category: 'planning',
          helpText: 'Consider ergonomic furniture, lighting (natural light preferred), noise control, temperature, and dedicated work space separation from living areas. Invest in quality monitor, keyboard, and chair.'
        },
        {
          id: 'technology-infrastructure',
          prompt: 'What technology setup do you need for reliable remote work? Internet, hardware, backup systems?',
          category: 'planning',
          helpText: 'Ensure reliable high-speed internet with backup options, quality webcam and microphone for video calls, dual monitors for efficiency, cloud storage solutions, and power backup systems.'
        },
        {
          id: 'digital-workspace-organization',
          prompt: 'How will you organize your digital workspace and files for easy access and collaboration?',
          category: 'planning',
          helpText: 'Create consistent file naming conventions, use cloud storage effectively, organize desktop and folders logically, implement version control for documents, and maintain clean digital workspace.'
        },
        {
          id: 'workspace-boundaries',
          prompt: 'How will you establish physical and mental boundaries between work and personal space?',
          category: 'planning',
          helpText: 'Define specific work hours, create rituals to start/end workday, establish family/roommate boundaries, designate work-only areas, and develop shutdown routines to transition from work mode.'
        },
        {
          id: 'workspace-optimization',
          prompt: 'How will you continuously optimize your workspace for changing needs and improved productivity?',
          category: 'planning',
          helpText: 'Regularly assess workspace effectiveness, experiment with different setups, upgrade equipment as needed, adjust lighting and temperature, and incorporate feedback from your work experience.'
        },
        {
          id: 'workspace-wellness',
          prompt: 'How will you incorporate wellness elements into your workspace to maintain physical and mental health?',
          category: 'consideration',
          helpText: 'Include plants for air quality, ensure proper posture support, plan movement breaks, consider standing desk options, maintain good air circulation, and create visual elements that reduce stress.'
        }
      ]
    },
    {
      id: 'communication-collaboration',
      title: 'Remote Communication & Collaboration',
      order: 2,
      reflectionPrompts: [
        {
          id: 'communication-protocols',
          prompt: 'What communication protocols will you establish with your team? Response times, channels, availability?',
          category: 'planning',
          helpText: 'Define expected response times for different communication types, choose appropriate channels (email, Slack, video calls), communicate availability clearly, and establish emergency contact procedures.'
        },
        {
          id: 'meeting-effectiveness',
          prompt: 'How will you make virtual meetings more effective and engaging?',
          category: 'planning',
          helpText: 'Prepare agendas in advance, test technology beforehand, use video when appropriate, engage participants actively, take clear notes, and follow up with action items. Keep meetings focused and time-boxed.'
        },
        {
          id: 'asynchronous-collaboration',
          prompt: 'How will you collaborate effectively with team members across different time zones?',
          category: 'planning',
          helpText: 'Use collaborative documents for shared work, provide detailed context in communications, record video updates when needed, establish overlap hours for real-time collaboration, and respect others\' time zones.'
        },
        {
          id: 'relationship-building',
          prompt: 'How will you build and maintain professional relationships while working remotely?',
          category: 'planning',
          helpText: 'Schedule regular one-on-ones, participate in virtual social activities, share appropriate personal updates, offer help to colleagues, celebrate team wins, and be proactive in communication.'
        },
        {
          id: 'feedback-communication',
          prompt: 'How will you give and receive feedback effectively in a remote environment?',
          category: 'planning',
          helpText: 'Schedule regular feedback sessions, be specific and constructive in written feedback, use video calls for sensitive conversations, create safe spaces for honest communication, and ask for feedback regularly.'
        },
        {
          id: 'conflict-resolution',
          prompt: 'How will you handle misunderstandings and conflicts that may arise from remote communication?',
          category: 'planning',
          helpText: 'Address issues quickly before they escalate, assume positive intent, clarify through direct conversation, use video calls for complex discussions, involve mediators when needed, and document important agreements.'
        }
      ]
    },
    {
      id: 'time-management-scheduling',
      title: 'Time Management & Scheduling Systems',
      order: 3,
      reflectionPrompts: [
        {
          id: 'daily-routine-structure',
          prompt: 'What daily routine and structure will help you stay productive while maintaining flexibility?',
          category: 'planning',
          helpText: 'Create consistent wake-up and work start times, build in regular breaks, plan high-focus work during your peak energy hours, and maintain some routine while allowing flexibility for personal needs.'
        },
        {
          id: 'calendar-management',
          prompt: 'How will you manage your calendar to balance meetings, deep work, and personal time?',
          category: 'planning',
          helpText: 'Block time for deep work, batch similar tasks, leave buffer time between meetings, schedule personal activities, use different calendar colors for different work types, and protect your most productive hours.'
        },
        {
          id: 'task-prioritization',
          prompt: 'What system will you use to prioritize tasks and manage competing demands?',
          category: 'planning',
          helpText: 'Use frameworks like Eisenhower Matrix or OKRs, identify your 3 most important tasks daily, communicate priorities with your manager, and regularly reassess based on changing business needs.'
        },
        {
          id: 'distraction-management',
          prompt: 'How will you minimize distractions and maintain focus in your home environment?',
          category: 'planning',
          helpText: 'Turn off non-essential notifications during focus time, use website blockers if needed, communicate boundaries to family/roommates, create focus rituals, and identify your personal distraction triggers.'
        },
        {
          id: 'energy-management',
          prompt: 'How will you manage your energy levels throughout the day for optimal performance?',
          category: 'planning',
          helpText: 'Identify your peak energy hours and schedule important work then, take regular breaks, get natural light exposure, stay hydrated, plan easier tasks for low-energy periods.'
        },
        {
          id: 'flexibility-balance',
          prompt: 'How will you balance the flexibility of remote work with the need for structure and accountability?',
          category: 'planning',
          helpText: 'Set core work hours while allowing flexibility, communicate your schedule to stakeholders, use accountability systems, track your productivity patterns, and adjust as needed.'
        }
      ]
    },
    {
      id: 'work-life-balance',
      title: 'Work-Life Balance & Boundaries',
      order: 4,
      reflectionPrompts: [
        {
          id: 'boundary-establishment',
          prompt: 'What specific boundaries will you set between work time and personal time?',
          category: 'planning',
          helpText: 'Define clear work hours, create physical separation between work and living spaces, establish communication boundaries after hours, and develop rituals to transition between work and personal time.'
        },
        {
          id: 'family-communication',
          prompt: 'How will you communicate your work needs and schedule to family members or housemates?',
          category: 'planning',
          helpText: 'Share your schedule and important meetings, establish signals for when you cannot be interrupted, create agreements about shared spaces, and involve family in creating supportive work environment.'
        },
        {
          id: 'personal-time-protection',
          prompt: 'How will you protect personal time and prevent work from bleeding into evenings and weekends?',
          category: 'planning',
          helpText: 'Turn off work notifications after hours, have separate devices or user accounts, communicate availability clearly, plan engaging personal activities, and resist the temptation to check work constantly.'
        },
        {
          id: 'social-connection',
          prompt: 'How will you maintain social connections and combat isolation while working remotely?',
          category: 'consideration',
          helpText: 'Schedule regular social activities, maintain friendships outside of work, consider co-working spaces occasionally, join professional networks or hobby groups, and prioritize in-person interactions when possible.'
        },
        {
          id: 'stress-management',
          prompt: 'What stress management techniques will you use to handle remote work challenges?',
          category: 'consideration',
          helpText: 'Practice relaxation techniques, maintain regular exercise routine, use mindfulness or meditation, take actual lunch breaks away from computer, and recognize early signs of burnout.'
        },
        {
          id: 'personal-development',
          prompt: 'How will you continue personal and professional development while working remotely?',
          category: 'planning',
          helpText: 'Set aside time for learning, attend virtual conferences or webinars, pursue online courses, seek mentorship opportunities, and maintain curiosity about your field and industry trends.'
        }
      ]
    },
    {
      id: 'performance-accountability',
      title: 'Performance Management & Self-Accountability',
      order: 5,
      reflectionPrompts: [
        {
          id: 'goal-setting-tracking',
          prompt: 'How will you set and track meaningful goals for your remote work performance?',
          category: 'planning',
          helpText: 'Set SMART goals aligned with company objectives, use project management tools for tracking, create weekly/monthly reviews, communicate progress regularly with manager, and celebrate achievements.'
        },
        {
          id: 'productivity-measurement',
          prompt: 'What metrics will you use to measure your productivity and effectiveness?',
          category: 'research',
          helpText: 'Focus on outcomes rather than hours worked, track project completion rates, measure quality of work, monitor meeting effectiveness, and assess your contribution to team goals.'
        },
        {
          id: 'self-accountability-systems',
          prompt: 'What systems will you put in place to stay accountable to yourself and your commitments?',
          category: 'planning',
          helpText: 'Use task management systems, set up regular check-ins with yourself, find accountability partners, track your work patterns, and create consequences for missed commitments.'
        },
        {
          id: 'feedback-seeking',
          prompt: 'How will you proactively seek feedback on your remote work performance?',
          category: 'planning',
          helpText: 'Schedule regular one-on-ones with manager, ask specific questions about your performance, request feedback from colleagues, and implement suggestions for improvement.'
        },
        {
          id: 'professional-visibility',
          prompt: 'How will you maintain professional visibility and demonstrate your contributions?',
          category: 'planning',
          helpText: 'Share regular updates on your work, participate actively in team meetings, volunteer for visible projects, document your achievements, and communicate proactively with stakeholders.'
        },
        {
          id: 'continuous-improvement',
          prompt: 'How will you continuously improve your remote work effectiveness?',
          category: 'planning',
          helpText: 'Regularly assess what\'s working and what isn\'t, experiment with new tools and techniques, learn from other successful remote workers, and adapt your approach based on results.'
        }
      ]
    },
    {
      id: 'career-development',
      title: 'Remote Career Development & Growth',
      order: 6,
      reflectionPrompts: [
        {
          id: 'career-planning',
          prompt: 'How will you plan and pursue career advancement while working remotely?',
          category: 'planning',
          helpText: 'Set clear career goals, identify required skills and experiences, seek stretch assignments, communicate career aspirations to manager, and create development plans with specific milestones.'
        },
        {
          id: 'skill-development',
          prompt: 'What skills will you develop to stay competitive and advance in your remote career?',
          category: 'planning',
          helpText: 'Focus on both technical and soft skills, prioritize digital communication skills, develop remote leadership abilities, learn new technologies, and stay current with industry trends.'
        },
        {
          id: 'networking-strategy',
          prompt: 'How will you build and maintain professional networks while working remotely?',
          category: 'planning',
          helpText: 'Join professional associations, attend virtual conferences, participate in online communities, schedule coffee chats with industry contacts, and maintain relationships with former colleagues.'
        },
        {
          id: 'mentorship-coaching',
          prompt: 'How will you find mentors and coaches to support your remote career development?',
          category: 'planning',
          helpText: 'Identify potential mentors within and outside your company, join mentorship programs, consider hiring coaches, participate in peer mentoring, and be open to reverse mentoring opportunities.'
        },
        {
          id: 'thought-leadership',
          prompt: 'How might you establish thought leadership and build your professional brand remotely?',
          category: 'planning',
          helpText: 'Share insights through writing or speaking, contribute to industry discussions online, volunteer for professional organizations, create valuable content, and position yourself as an expert in your field.'
        },
        {
          id: 'opportunity-creation',
          prompt: 'How will you identify and create opportunities for career growth in a remote environment?',
          category: 'planning',
          helpText: 'Stay informed about company opportunities, volunteer for high-visibility projects, propose solutions to business challenges, cross-train in different areas, and consider lateral moves for experience.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'remote-workspace-optimization-guide',
      title: 'Complete Remote Workspace Optimization Guide',
      type: 'guide',
      excerpt: 'Comprehensive guide to creating the perfect remote workspace for productivity, comfort, and professional success',
      content: 'An optimized workspace is the foundation of remote work success. **Ergonomic setup:** Proper desk and chair height, monitor positioning to reduce neck strain, keyboard and mouse placement for comfort, and lighting solutions to reduce eye strain. **Technology infrastructure:** High-speed internet requirements, backup connectivity solutions, essential hardware for video conferencing, cloud storage setup, and security considerations for home networks. **Environment design:** Noise control strategies, temperature optimization, air quality improvement with plants, organization systems for physical and digital spaces, and creating visual boundaries between work and personal areas. **Productivity enhancement:** Dual monitor setup benefits, cable management solutions, storage organization, and creating an environment that signals \'work mode\' to your brain.',
      tags: ['workspace-setup', 'ergonomics', 'home-office', 'productivity-environment'],
      readTime: '25 min',
      difficulty: 'beginner'
    },
    {
      id: 'remote-communication-mastery',
      title: 'Remote Communication & Collaboration Mastery',
      type: 'guide',
      excerpt: 'Advanced strategies for effective communication and collaboration in distributed teams',
      content: 'Remote work success depends heavily on communication excellence. **Communication protocols:** Establishing clear expectations for response times, choosing appropriate channels for different types of communication, creating communication guidelines for your team, and managing across time zones effectively. **Virtual meeting optimization:** Pre-meeting preparation strategies, engaging presentation techniques for virtual audiences, managing meeting fatigue, and ensuring inclusive participation from all team members. **Asynchronous collaboration:** Using collaborative documents effectively, creating clear handoffs between team members, documenting decisions and processes, and building shared understanding without real-time interaction. **Relationship building:** Maintaining personal connections in professional settings, building trust without face-to-face interaction, providing and receiving feedback remotely, and creating psychological safety in virtual teams.',
      tags: ['remote-communication', 'virtual-meetings', 'team-collaboration', 'distributed-teams'],
      readTime: '35 min',
      difficulty: 'intermediate'
    },
    {
      id: 'remote-productivity-systems',
      title: 'Remote Work Productivity Systems & Time Management',
      type: 'system',
      excerpt: 'Comprehensive productivity system designed specifically for remote work challenges and opportunities',
      content: 'Remote work requires intentional productivity systems that account for the unique challenges and opportunities of working from home. **Time blocking strategies:** Creating structured schedules that balance focused work with collaboration needs, managing energy levels throughout the day, and building in flexibility for unexpected demands. **Task management:** Systems for capturing, organizing, and prioritizing work across multiple projects and stakeholders, integrating personal and professional tasks effectively, and maintaining visibility into progress and deadlines. **Focus techniques:** Deep work strategies for the home environment, managing distractions from family and household responsibilities, creating focus rituals and environmental cues, and using technology to support concentration. **Workflow optimization:** Batch processing similar tasks, optimizing handoffs and approval processes, creating templates and automation for recurring work, and building sustainable work rhythms.',
      tags: ['remote-productivity', 'time-management', 'focus-techniques', 'workflow-optimization'],
      readTime: '40 min',
      difficulty: 'intermediate'
    },
    {
      id: 'work-life-balance-remote-framework',
      title: 'Work-Life Balance Framework for Remote Workers',
      type: 'framework',
      excerpt: 'Structured approach to maintaining healthy boundaries and well-being while working from home',
      content: 'Work-life balance requires intentional strategies when your home becomes your office. **Boundary setting:** Creating physical and temporal boundaries between work and personal life, establishing communication protocols with family members, and developing transition rituals that help you shift between roles. **Stress management:** Recognizing signs of remote work burnout, developing coping strategies for isolation and overwork, creating support networks, and maintaining physical and mental health routines. **Social connection:** Combating isolation through intentional relationship building, participating in virtual social activities, maintaining friendships outside of work, and creating opportunities for in-person interaction. **Personal fulfillment:** Pursuing hobbies and interests outside of work, setting personal development goals, maintaining physical fitness routines, and creating meaning and purpose beyond professional achievements.',
      tags: ['work-life-balance', 'remote-wellness', 'boundary-setting', 'stress-management'],
      readTime: '30 min',
      difficulty: 'beginner'
    },
    {
      id: 'remote-career-development-strategy',
      title: 'Remote Career Development & Advancement Strategy',
      type: 'strategy',
      excerpt: 'Strategic approach to building and advancing your career in remote work environments',
      content: 'Career development in remote environments requires proactive strategies and intentional relationship building. **Visibility and impact:** Ensuring your contributions are recognized and valued, communicating achievements effectively, building relationships with key stakeholders, and positioning yourself for advancement opportunities. **Skill development:** Identifying skills crucial for remote work success, creating learning plans that fit remote work schedules, leveraging online learning platforms effectively, and staying current with industry trends and technologies. **Professional networking:** Building and maintaining professional relationships virtually, participating in industry communities and events, finding mentors and sponsors remotely, and creating opportunities for collaboration and visibility. **Career planning:** Setting long-term career goals that account for remote work trends, identifying growth opportunities within remote-first organizations, and building a personal brand that demonstrates remote work excellence.',
      tags: ['career-development', 'remote-career', 'professional-networking', 'skill-development'],
      readTime: '45 min',
      difficulty: 'intermediate'
    }
  ]
};

export const careerChangeTransitionTemplate: GuidanceTemplate = {
  id: 'career-change-transition',
  title: 'Career Change & Professional Transition',
  description: 'Navigate career transitions and successfully change professional directions',
  category: 'career-business',
  icon: '🔄',
  sections: [
    {
      id: 'self-assessment-exploration',
      title: 'Self-Assessment & Career Exploration',
      order: 1,
      reflectionPrompts: [
        {
          id: 'career-change-motivation',
          prompt: "Why do you want to change careers? What's driving this decision - dissatisfaction, growth, passion, or circumstances?",
          category: 'research',
          helpText: 'Be honest about your motivations. Common reasons include lack of fulfillment, limited growth opportunities, poor work-life balance, industry changes, or discovering new interests. Understanding your "why" guides better decisions.'
        },
        {
          id: 'strengths-skills-inventory',
          prompt: 'What are your core strengths, transferable skills, and unique value proposition across different industries?',
          category: 'research',
          helpText: 'List technical skills, soft skills, leadership experience, and achievements. Focus on transferable skills like project management, communication, problem-solving, and analytical thinking that apply across industries.'
        },
        {
          id: 'values-priorities-alignment',
          prompt: 'What values and priorities are most important to you in your next career? Work-life balance, impact, compensation, growth?',
          category: 'planning',
          helpText: 'Consider salary expectations, work environment preferences, company culture fit, location flexibility, growth opportunities, and social impact. Rank these factors to guide career exploration.'
        },
        {
          id: 'career-exploration-research',
          prompt: 'What career fields and specific roles align with your interests, skills, and values? How will you research them?',
          category: 'research',
          helpText: 'Use informational interviews, job shadowing, industry research, online courses, volunteer work, and networking to explore options. Consider adjacent fields that leverage existing expertise.'
        },
        {
          id: 'risk-tolerance-assessment',
          prompt: 'What level of career change risk can you handle? Complete industry switch vs. role change within your field?',
          category: 'research',
          helpText: 'Consider financial stability, family obligations, age factors, and risk tolerance. Options range from lateral moves to complete industry changes. Assess your safety net and timeline flexibility.'
        },
        {
          id: 'success-criteria-definition',
          prompt: 'How will you define success in your career change? What outcomes will indicate you made the right choice?',
          category: 'planning',
          helpText: 'Set specific, measurable criteria like job satisfaction scores, salary targets, work-life balance metrics, skill development goals, and timeline expectations for achieving your transition.'
        }
      ]
    },
    {
      id: 'strategic-planning',
      title: 'Strategic Career Transition Planning',
      order: 2,
      reflectionPrompts: [
        {
          id: 'transition-timeline-strategy',
          prompt: 'What is your ideal timeline for career transition? Will you transition gradually or make a complete switch?',
          category: 'planning',
          helpText: 'Consider gradual transition (side projects, part-time work, consulting) vs. immediate switch. Factor in financial needs, skill development time, and market conditions. Plan for 6-24 month transitions typically.'
        },
        {
          id: 'financial-transition-planning',
          prompt: 'How will you manage finances during your career transition? Emergency fund, income bridges, potential salary changes?',
          category: 'planning',
          helpText: 'Build 6-12 months emergency fund, consider part-time or consulting income, research salary ranges in target field, and plan for potential temporary income reduction during transition.'
        },
        {
          id: 'skill-development-roadmap',
          prompt: 'What new skills, certifications, or education do you need for your target career? How will you acquire them?',
          category: 'planning',
          helpText: 'Identify skill gaps through job postings and informational interviews. Create learning plan with online courses, bootcamps, certifications, degree programs, or hands-on projects. Prioritize most critical skills first.'
        },
        {
          id: 'experience-building-strategy',
          prompt: 'How will you gain relevant experience in your new field? Volunteer work, side projects, freelancing, internships?',
          category: 'planning',
          helpText: 'Build portfolio through volunteer projects, freelance work, personal projects, internships, or transitional roles. Document achievements and create case studies to demonstrate capability.'
        },
        {
          id: 'network-building-plan',
          prompt: 'How will you build professional networks in your target industry? Who are key contacts to cultivate?',
          category: 'planning',
          helpText: 'Join professional associations, attend industry events, engage on LinkedIn, conduct informational interviews, and build relationships with professionals, recruiters, and potential mentors in target field.'
        },
        {
          id: 'transition-milestone-tracking',
          prompt: 'What key milestones will mark progress in your career transition? How will you measure and celebrate progress?',
          category: 'planning',
          helpText: 'Set specific milestones like completing certifications, conducting informational interviews, building portfolio, networking goals, and application targets. Regular check-ins keep transition on track.'
        }
      ]
    },
    {
      id: 'skill-development-education',
      title: 'Skill Development & Education Strategy',
      order: 3,
      reflectionPrompts: [
        {
          id: 'learning-needs-assessment',
          prompt: 'What specific technical and soft skills are essential for success in your target career?',
          category: 'research',
          helpText: 'Analyze job postings, talk to professionals in the field, and research industry trends. Differentiate between must-have skills and nice-to-have skills to prioritize learning efforts effectively.'
        },
        {
          id: 'learning-method-selection',
          prompt: 'What learning methods work best for your situation? Online courses, bootcamps, formal education, mentorship?',
          category: 'planning',
          helpText: 'Consider your learning style, available time, budget, and urgency. Options include online platforms (Coursera, Udemy), bootcamps, certification programs, formal degrees, or apprenticeships.'
        },
        {
          id: 'practical-experience-acquisition',
          prompt: 'How will you gain hands-on experience while learning? Real projects, simulations, volunteer work?',
          category: 'planning',
          helpText: 'Create portfolio projects, contribute to open source, volunteer skills for nonprofits, take on relevant projects in current role, or start side consulting to build practical experience.'
        },
        {
          id: 'learning-schedule-management',
          prompt: 'How will you balance skill development with current work and personal responsibilities?',
          category: 'planning',
          helpText: 'Create realistic study schedule, use time-blocking techniques, leverage commute time, dedicate weekends or early mornings, and communicate boundaries with family and employer when necessary.'
        },
        {
          id: 'knowledge-validation-strategy',
          prompt: 'How will you validate and demonstrate your new skills to potential employers?',
          category: 'planning',
          helpText: 'Pursue industry certifications, build public portfolio, contribute to professional discussions, write articles or blog posts, speak at events, and create case studies showcasing applied knowledge.'
        },
        {
          id: 'continuous-learning-commitment',
          prompt: 'How will you stay current with industry trends and continue developing professionally in your new field?',
          category: 'planning',
          helpText: 'Follow industry thought leaders, join professional communities, attend conferences, subscribe to relevant publications, and commit to lifelong learning mindset for career success.'
        }
      ]
    },
    {
      id: 'job-search-strategy',
      title: 'Strategic Job Search & Application Process',
      order: 4,
      reflectionPrompts: [
        {
          id: 'target-company-identification',
          prompt: 'What companies and organizations align with your career goals and values? How will you research and prioritize them?',
          category: 'research',
          helpText: 'Research company culture, growth trajectory, industry reputation, and career development opportunities. Consider startups vs. established companies, and organizations open to career changers.'
        },
        {
          id: 'application-materials-optimization',
          prompt: 'How will you tailor your resume, cover letter, and portfolio for career change? What story will you tell?',
          category: 'planning',
          helpText: 'Create compelling narrative about career change motivation, highlight transferable skills, address potential concerns proactively, and customize materials for each application to show genuine interest.'
        },
        {
          id: 'networking-job-search-integration',
          prompt: 'How will you leverage networking in your job search? Hidden job market access and referral strategies?',
          category: 'planning',
          helpText: 'Many jobs come through networking. Conduct informational interviews, attend industry events, engage on social media, and nurture relationships that can lead to referrals or insider information.'
        },
        {
          id: 'interview-preparation-strategy',
          prompt: 'How will you prepare for interviews as a career changer? Addressing concerns and showcasing fit?',
          category: 'planning',
          helpText: 'Anticipate questions about career change motivation, prepare examples demonstrating transferable skills, research company thoroughly, and practice explaining how your unique background adds value.'
        },
        {
          id: 'alternative-entry-strategies',
          prompt: 'What alternative entry strategies might work for your situation? Contract work, internships, lateral moves?',
          category: 'planning',
          helpText: 'Consider temp-to-perm roles, contract positions, internships (even paid ones for career changers), lateral moves within current company, or starting at lower level with growth potential.'
        },
        {
          id: 'job-search-persistence-plan',
          prompt: 'How will you maintain motivation and momentum throughout what may be a longer job search process?',
          category: 'planning',
          helpText: 'Set weekly application goals, track progress, celebrate small wins, maintain learning momentum, seek support from career change communities, and prepare for potential rejections as learning opportunities.'
        }
      ]
    },
    {
      id: 'transition-management',
      title: 'Career Transition Management & Integration',
      order: 5,
      reflectionPrompts: [
        {
          id: 'current-job-departure-strategy',
          prompt: 'How will you leave your current position professionally and maintain positive relationships?',
          category: 'planning',
          helpText: 'Give appropriate notice, offer to train replacement, complete projects professionally, maintain industry connections, and avoid burning bridges as you may cross paths again professionally.'
        },
        {
          id: 'new-role-onboarding-preparation',
          prompt: 'How will you prepare for success in your new role? Learning curve management and expectation setting?',
          category: 'planning',
          helpText: 'Research company culture, connect with future colleagues, prepare questions about processes and expectations, set realistic 30-60-90 day goals, and maintain beginner\'s mindset for learning.'
        },
        {
          id: 'imposter-syndrome-management',
          prompt: 'How will you handle imposter syndrome and self-doubt during your transition?',
          category: 'planning',
          helpText: 'Recognize that imposter syndrome is normal for career changers. Document your wins, seek mentorship, focus on learning rather than perfection, and remember that your diverse background brings unique value.'
        },
        {
          id: 'relationship-communication-strategy',
          prompt: 'How will you communicate your career change to family, friends, and professional network?',
          category: 'planning',
          helpText: 'Prepare clear, confident explanations of your career change rationale, ask for support when needed, and update your professional brand across platforms to reflect your new direction.'
        },
        {
          id: 'early-career-momentum-building',
          prompt: 'How will you build momentum and establish credibility quickly in your new career?',
          category: 'planning',
          helpText: 'Focus on early wins, actively seek feedback, volunteer for visible projects, build internal networks, continue learning industry-specific knowledge, and document achievements for future opportunities.'
        },
        {
          id: 'long-term-integration-strategy',
          prompt: 'How will you integrate your previous experience with your new career for unique value proposition?',
          category: 'planning',
          helpText: 'Identify ways your previous experience creates unique advantages, seek cross-functional opportunities, become bridge between different perspectives, and position yourself as valuable diverse thinker.'
        }
      ]
    },
    {
      id: 'long-term-career-development',
      title: 'Long-Term Career Development & Success',
      order: 6,
      reflectionPrompts: [
        {
          id: 'career-growth-trajectory-planning',
          prompt: 'What does long-term success look like in your new career? Leadership, expertise, entrepreneurship?',
          category: 'planning',
          helpText: 'Define 3-5 year career goals, identify potential advancement paths, consider specialization vs. generalization strategies, and explore leadership development opportunities in your new field.'
        },
        {
          id: 'professional-brand-development',
          prompt: 'How will you build your professional brand and reputation in your new industry?',
          category: 'planning',
          helpText: 'Share insights through content creation, speaking opportunities, or industry publications. Build reputation through consistent quality work, thought leadership, and active industry participation.'
        },
        {
          id: 'mentorship-sponsorship-strategy',
          prompt: 'How will you find mentors and sponsors in your new field to accelerate career development?',
          category: 'planning',
          helpText: 'Identify potential mentors at different career stages, offer value in return, participate in formal mentorship programs, and build relationships with senior leaders who can sponsor your advancement.'
        },
        {
          id: 'skill-evolution-planning',
          prompt: 'How will you continuously evolve your skills to stay relevant and advance in your new career?',
          category: 'planning',
          helpText: 'Stay current with industry trends, pursue advanced certifications, develop leadership skills, cross-train in complementary areas, and maintain learning mindset throughout career progression.'
        },
        {
          id: 'career-pivot-preparedness',
          prompt: 'How will you prepare for potential future career pivots or industry changes?',
          category: 'planning',
          helpText: 'Build transferable skills, maintain diverse professional networks, stay aware of industry trends, develop adaptability mindset, and keep financial flexibility for future opportunities.'
        },
        {
          id: 'career-satisfaction-monitoring',
          prompt: 'How will you regularly assess career satisfaction and make adjustments to maintain fulfillment?',
          category: 'planning',
          helpText: 'Set regular career check-ins, monitor alignment with values and goals, seek feedback on performance and satisfaction, and be proactive about making changes before dissatisfaction builds.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'career-change-assessment-toolkit',
      title: 'Complete Career Change Assessment Toolkit',
      type: 'tool',
      excerpt: 'Comprehensive assessment tools to evaluate readiness, explore options, and plan your career transition strategy',
      content: 'Making a successful career change starts with deep self-understanding and strategic planning. **Self-assessment tools:** Values clarification exercises, strengths identification frameworks, interest inventories, and personality assessments to understand your ideal career fit. **Career exploration methods:** Industry research templates, informational interview guides, job shadowing checklists, and career exploration tracking sheets. **Readiness evaluation:** Financial readiness calculators, risk tolerance assessments, timeline planning tools, and support system evaluation frameworks. **Decision-making frameworks:** Career change decision matrices, pros and cons analysis templates, and criteria weighting systems to make informed choices about your transition.',
      tags: ['career-assessment', 'self-evaluation', 'career-exploration', 'decision-making'],
      readTime: '35 min',
      difficulty: 'beginner'
    },
    {
      id: 'career-transition-financial-planning',
      title: 'Career Transition Financial Planning Guide',
      type: 'guide',
      excerpt: 'Strategic financial planning for career changes including budgeting, income bridging, and managing transition costs',
      content: 'Financial planning is crucial for successful career transitions. **Transition budgeting:** Calculate living expenses during transition, estimate career change costs (education, certification, networking), and create realistic timeline-based budgets. **Income bridging strategies:** Freelancing in your existing field, part-time work, consulting opportunities, and passive income development to maintain cash flow during transition. **Investment in career change:** ROI analysis of education and certification costs, budgeting for networking and professional development, and evaluating long-term financial impact of career moves. **Emergency fund management:** Building adequate safety nets, managing funds during transition, and strategies for extending financial runway when job search takes longer than expected.',
      tags: ['career-transition-finance', 'budgeting', 'income-planning', 'emergency-fund'],
      readTime: '30 min',
      difficulty: 'intermediate'
    },
    {
      id: 'skill-development-career-change-roadmap',
      title: 'Skill Development Roadmap for Career Changers',
      type: 'roadmap',
      excerpt: 'Strategic approach to acquiring new skills efficiently and effectively for career transition success',
      content: 'Strategic skill development accelerates career change success. **Skill gap analysis:** Methods for identifying required skills in target careers, analyzing your current capabilities, and prioritizing learning needs based on market demand and career goals. **Learning pathway optimization:** Choosing between formal education, bootcamps, online courses, certifications, and hands-on experience based on your situation and learning style. **Portfolio development:** Creating compelling evidence of your new skills through projects, case studies, contributions to open source, and professional portfolio presentation. **Skill validation strategies:** Industry certifications, peer review processes, mentorship feedback, and practical application methods to demonstrate competency to potential employers.',
      tags: ['skill-development', 'learning-strategy', 'portfolio-building', 'career-skills'],
      readTime: '40 min',
      difficulty: 'intermediate'
    },
    {
      id: 'career-changer-job-search-strategy',
      title: 'Job Search Strategy for Career Changers',
      type: 'strategy',
      excerpt: 'Specialized job search techniques and strategies designed specifically for professionals changing careers',
      content: 'Career changers face unique job search challenges requiring targeted strategies. **Narrative development:** Crafting compelling stories about your career change that address employer concerns and highlight unique value from your diverse background. **Application optimization:** Resume restructuring for career change, cover letter strategies that explain transitions, and portfolio development that demonstrates relevant capabilities. **Networking for career change:** Building new professional networks in target industries, leveraging existing connections for industry introductions, and using informational interviews strategically for job opportunities. **Interview mastery:** Addressing career change questions confidently, showcasing transferable skills effectively, and positioning diverse background as competitive advantage rather than liability.',
      tags: ['job-search-strategy', 'career-change-networking', 'interview-preparation', 'application-optimization'],
      readTime: '45 min',
      difficulty: 'intermediate'
    },
    {
      id: 'career-transition-success-framework',
      title: 'Career Transition Success Framework',
      type: 'framework',
      excerpt: 'Comprehensive framework for managing the emotional, practical, and professional aspects of career change',
      content: 'Successful career transitions require managing multiple dimensions of change simultaneously. **Psychological preparation:** Managing fear and uncertainty, building confidence in new direction, handling imposter syndrome, and maintaining motivation during challenging transition periods. **Practical transition management:** Timeline development, milestone tracking, resource allocation, and contingency planning for unexpected challenges during career change. **Professional integration:** Onboarding strategies for new industries, building credibility quickly, leveraging diverse background for unique value, and establishing professional relationships in new field. **Long-term success planning:** Continuous learning strategies, career advancement planning, professional brand development, and preparing for future career evolution in chosen field.',
      tags: ['career-transition-management', 'professional-integration', 'change-management', 'career-success'],
      readTime: '50 min',
      difficulty: 'expert'
    }
  ]
};

export const smallBusinessExitStrategyTemplate: GuidanceTemplate = {
  id: 'small-business-exit-strategy',
  title: 'Small Business Exit Strategy & Planning',
  description: 'Plan and execute a successful exit strategy for your small business',
  category: 'career-business',
  icon: '🚪',
  sections: [
    {
      id: 'exit-strategy-assessment',
      title: 'Exit Strategy Assessment & Goals',
      order: 1,
      reflectionPrompts: [
        {
          id: 'exit-timeline',
          prompt: 'What is your ideal timeline for exiting your business? Consider both minimum requirements and optimal timing.',
          category: 'planning',
          helpText: 'Factor in market conditions, business performance, personal readiness, financial needs, and industry cycles. Most successful exits require 2-5 years of preparation.'
        },
        {
          id: 'exit-objectives',
          prompt: 'What are your primary objectives for the business exit? Rank financial return, legacy preservation, employee welfare, and timeline importance.',
          category: 'planning',
          helpText: 'Consider maximum financial return, preserving company culture, ensuring employee job security, maintaining customer relationships, personal timeline flexibility, tax optimization'
        },
        {
          id: 'exit-methods-evaluation',
          prompt: 'Which exit methods are most suitable for your business? Evaluate sale to competitor, management buyout, employee stock ownership, family succession, or public offering.',
          category: 'decision',
          helpText: 'Strategic sale (highest multiples), financial buyer acquisition, management/employee buyout (preserves culture), family succession (legacy), IPO (growth companies), liquidation (last resort)'
        },
        {
          id: 'financial-requirements',
          prompt: 'What are your minimum financial requirements from the exit? Consider post-exit lifestyle, debt obligations, and retirement needs.',
          category: 'planning',
          helpText: 'Calculate retirement savings needs, current debt obligations, desired lifestyle maintenance, tax implications, potential earn-out periods, and contingency reserves'
        },
        {
          id: 'stakeholder-considerations',
          prompt: 'How will your exit impact key stakeholders? Consider employees, customers, suppliers, family members, and business partners.',
          category: 'consideration',
          helpText: 'Employee job security and benefits, customer service continuity, supplier relationships, family financial impact, partner buyout rights, community responsibilities'
        },
        {
          id: 'personal-readiness',
          prompt: 'Are you personally ready to exit your business? Assess your emotional attachment, identity connection, and post-exit plans.',
          category: 'consideration',
          helpText: 'Emotional preparation for letting go, identity beyond business ownership, post-exit activities and purpose, family impact, health considerations, advisor relationships'
        }
      ]
    },
    {
      id: 'business-valuation-optimization',
      title: 'Business Valuation & Value Optimization',
      order: 2,
      reflectionPrompts: [
        {
          id: 'current-valuation-assessment',
          prompt: 'What is your business currently worth? Consider multiple valuation methods including revenue multiples, EBITDA multiples, and asset valuation.',
          category: 'research',
          helpText: 'Revenue multiples (industry-specific), EBITDA multiples (3-8x typically), asset-based valuation, discounted cash flow, comparable sales, professional appraisal'
        },
        {
          id: 'value-drivers-identification',
          prompt: 'What are the key value drivers in your business? Identify factors that buyers pay premiums for in your industry.',
          category: 'research',
          helpText: 'Recurring revenue streams, market position, growth trajectory, operational efficiency, management depth, customer diversification, intellectual property, scalability'
        },
        {
          id: 'value-enhancement-opportunities',
          prompt: 'How can you increase your business value before exit? Identify specific improvements that buyers value most.',
          category: 'planning',
          helpText: 'Improve financial performance, strengthen management team, diversify customer base, enhance systems/processes, protect intellectual property, optimize operations'
        },
        {
          id: 'financial-performance-optimization',
          prompt: 'How can you optimize financial performance for maximum valuation? Focus on metrics buyers examine most closely.',
          category: 'planning',
          helpText: 'Improve profit margins, grow revenue consistently, clean up financial statements, reduce owner dependencies, optimize working capital, demonstrate predictable cash flow'
        },
        {
          id: 'operational-independence',
          prompt: 'How owner-dependent is your business? Develop plans to reduce buyer risk from key person dependency.',
          category: 'planning',
          helpText: 'Document processes and procedures, develop management team, create redundancies, transfer key relationships, establish operating systems, reduce owner involvement'
        },
        {
          id: 'competitive-positioning',
          prompt: 'How can you strengthen your competitive position before exit? Consider market share, differentiation, and barriers to entry.',
          category: 'planning',
          helpText: 'Develop unique value propositions, build customer loyalty programs, create switching costs, establish exclusive partnerships, protect intellectual property'
        }
      ]
    },
    {
      id: 'financial-legal-preparation',
      title: 'Financial & Legal Preparation',
      order: 3,
      reflectionPrompts: [
        {
          id: 'financial-records-organization',
          prompt: 'How organized and accurate are your financial records? Buyers require at least 3 years of audited or reviewed financials.',
          category: 'planning',
          helpText: 'Audited financial statements (preferred), reviewed statements (minimum), clean accounting practices, documented revenue recognition, clear expense categorization'
        },
        {
          id: 'legal-structure-optimization',
          prompt: 'Is your business legal structure optimized for sale? Consider entity type, ownership structure, and transfer restrictions.',
          category: 'planning',
          helpText: 'Entity type advantages (C-Corp for stock sales), clean cap table, resolved ownership disputes, updated operating agreements, transfer restriction removal'
        },
        {
          id: 'tax-optimization-strategies',
          prompt: 'How can you minimize taxes from the business exit? Consider timing, structure, and available tax benefits.',
          category: 'planning',
          helpText: 'Qualified Small Business Stock (QSBS) benefits, installment sales, asset vs stock sales, timing of sale, state tax implications, charitable giving strategies'
        },
        {
          id: 'intellectual-property-protection',
          prompt: 'How well protected are your intellectual property assets? Ensure all IP is documented and legally protected.',
          category: 'planning',
          helpText: 'Trademark registrations, copyright documentation, trade secret protection, patent filings, employee IP assignments, non-compete agreements'
        },
        {
          id: 'contract-customer-analysis',
          prompt: 'What contracts and customer relationships need attention before sale? Address any transfer restrictions or dependencies.',
          category: 'research',
          helpText: 'Customer contract terms, supplier agreements, lease assignments, employment contracts, non-compete restrictions, change of control provisions'
        },
        {
          id: 'liability-risk-mitigation',
          prompt: 'What potential liabilities could affect the sale? Identify and address legal, financial, and operational risks.',
          category: 'planning',
          helpText: 'Pending litigation, environmental issues, employment law compliance, product liability, warranty claims, regulatory compliance, insurance coverage'
        }
      ]
    },
    {
      id: 'exit-process-execution',
      title: 'Exit Process Execution & Marketing',
      order: 4,
      reflectionPrompts: [
        {
          id: 'professional-team-assembly',
          prompt: 'What professional advisors do you need for the exit process? Build a team of experienced specialists.',
          category: 'planning',
          helpText: 'Business broker or investment banker, M&A attorney, tax accountant/CPA, business valuation expert, wealth management advisor, industry specialists'
        },
        {
          id: 'marketing-strategy-development',
          prompt: 'How will you market your business to potential buyers? Develop a comprehensive marketing approach.',
          category: 'planning',
          helpText: 'Confidential information memorandum, executive summary, financial projections, buyer identification (strategic vs financial), marketing channels, timing strategy'
        },
        {
          id: 'buyer-qualification-process',
          prompt: 'How will you qualify potential buyers? Establish criteria to identify serious, qualified purchasers.',
          category: 'planning',
          helpText: 'Financial capacity verification, strategic fit assessment, confidentiality agreements, management meetings, cultural alignment, timeline compatibility'
        },
        {
          id: 'due-diligence-preparation',
          prompt: 'How prepared are you for buyer due diligence? Organize all business information for efficient review.',
          category: 'planning',
          helpText: 'Virtual data room setup, financial documentation, legal documents, operational procedures, customer/supplier lists, employee records, compliance documentation'
        },
        {
          id: 'negotiation-strategy',
          prompt: 'What is your negotiation strategy for the sale? Consider price, terms, timing, and deal structure preferences.',
          category: 'planning',
          helpText: 'Price expectations, payment terms (cash vs earnout), employment/consulting agreements, non-compete terms, warranty/indemnification limits, closing conditions'
        },
        {
          id: 'deal-structure-optimization',
          prompt: 'What deal structure best meets your objectives? Evaluate different transaction structures and their implications.',
          category: 'decision',
          helpText: 'Asset vs stock sale, cash vs seller financing, earnout provisions, employment agreements, non-compete terms, tax implications, risk allocation'
        }
      ]
    },
    {
      id: 'transition-management',
      title: 'Transition Management & Integration',
      order: 5,
      reflectionPrompts: [
        {
          id: 'transition-planning',
          prompt: 'What is your plan for transitioning the business to new ownership? Develop a comprehensive handover strategy.',
          category: 'planning',
          helpText: 'Key relationship introductions, knowledge transfer processes, operational training, system access transfers, vendor/supplier introductions, timeline development'
        },
        {
          id: 'employee-communication',
          prompt: 'How will you communicate the transition to employees? Plan timing, messaging, and support for staff concerns.',
          category: 'planning',
          helpText: 'Communication timing and sequence, key messages about job security, benefits continuation, culture preservation, Q&A sessions, individual meetings with key staff'
        },
        {
          id: 'customer-supplier-transition',
          prompt: 'How will you ensure smooth customer and supplier transitions? Maintain business relationships during ownership change.',
          category: 'planning',
          helpText: 'Customer introduction meetings, service continuity assurance, contract transfer processes, supplier relationship management, quality maintenance commitments'
        },
        {
          id: 'knowledge-transfer-systems',
          prompt: 'What knowledge and systems need to be transferred to the new owner? Document critical business knowledge.',
          category: 'planning',
          helpText: 'Operational procedures, customer preferences, vendor relationships, historical decisions, industry knowledge, process documentation, system passwords/access'
        },
        {
          id: 'ongoing-involvement-planning',
          prompt: 'What level of ongoing involvement will you have post-sale? Consider consulting agreements and transition support.',
          category: 'planning',
          helpText: 'Consulting agreement terms, transition period length, involvement level, compensation structure, non-compete implications, advisory vs operational roles'
        },
        {
          id: 'cultural-preservation',
          prompt: 'How can you help preserve positive aspects of company culture during the transition? Identify key cultural elements.',
          category: 'consideration',
          helpText: 'Core values identification, cultural tradition documentation, key culture carriers, communication methods, team building practices, recognition programs'
        }
      ]
    },
    {
      id: 'post-exit-planning',
      title: 'Post-Exit Life & Wealth Management',
      order: 6,
      reflectionPrompts: [
        {
          id: 'wealth-management-strategy',
          prompt: 'How will you manage the wealth from your business exit? Develop a comprehensive financial plan for your proceeds.',
          category: 'planning',
          helpText: 'Diversification strategy, risk tolerance assessment, income generation needs, tax-efficient investing, estate planning updates, professional wealth management'
        },
        {
          id: 'post-exit-activities',
          prompt: 'What will you do after exiting your business? Plan meaningful activities to replace the purpose and structure of business ownership.',
          category: 'planning',
          helpText: 'New business ventures, consulting opportunities, board positions, volunteer work, travel plans, education pursuits, family time, hobby development'
        },
        {
          id: 'identity-transition',
          prompt: 'How will you handle the identity shift from business owner to former owner? Prepare for psychological and social changes.',
          category: 'consideration',
          helpText: 'Identity beyond business ownership, social circle changes, daily routine restructuring, purpose redefinition, professional network evolution, self-worth factors'
        },
        {
          id: 'family-relationship-impact',
          prompt: 'How will the business exit impact your family relationships and dynamics? Consider both positive and challenging aspects.',
          category: 'consideration',
          helpText: 'Increased time availability, family wealth discussions, lifestyle changes, children\'s expectations, spouse relationship changes, extended family dynamics'
        },
        {
          id: 'legacy-philanthropic-goals',
          prompt: 'What legacy do you want to create with your business exit proceeds? Consider philanthropic and community impact opportunities.',
          category: 'consideration',
          helpText: 'Charitable giving strategies, foundation establishment, community involvement, mentorship opportunities, industry contributions, family legacy planning'
        },
        {
          id: 'business-involvement-decisions',
          prompt: 'Do you want to remain involved in business or entrepreneurship? Consider your appetite for new ventures or investments.',
          category: 'decision',
          helpText: 'Angel investing opportunities, new business ventures, industry consulting, board service, business mentoring, investment partnerships, retirement planning'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'business-valuation-guide',
      title: 'Complete Guide to Business Valuation Methods',
      type: 'guide',
      excerpt: 'Comprehensive overview of business valuation methods including **revenue multiples**, **EBITDA analysis**, **asset-based valuation**, and **discounted cash flow**.',
      content: 'Understanding how buyers value businesses is crucial for exit planning. **Revenue Multiple Method:** Most industries have standard revenue multiples (1x-10x annual revenue). SaaS businesses often command 3-12x annual recurring revenue depending on growth. **EBITDA Multiple Method:** Preferred method for established profitable businesses, typically 3-8x EBITDA for small businesses. **Asset-Based Valuation:** Book value, liquidation value, or replacement cost approaches. **Discounted Cash Flow:** Values business based on projected cash flows discounted to present value. **Maximizing Business Value:** Improve financial performance, strengthen management team, diversify customer base, enhance systems and processes, protect intellectual property.',
      tags: ['valuation', 'financial-analysis', 'exit-planning'],
      readTime: '15 min',
      difficulty: 'intermediate'
    },
    {
      id: 'exit-strategy-tax-planning',
      title: 'Tax Optimization Strategies for Business Exits',
      type: 'guide',
      excerpt: 'Minimize taxes on business sale proceeds through **QSBS benefits**, **installment sales**, **asset vs stock structures**, and **timing strategies**.',
      content: 'Proper tax planning can save hundreds of thousands in taxes on business exits. **Qualified Small Business Stock (QSBS):** Section 1202 benefits provide up to $10M or 10x basis tax exclusion for eligible C-Corporation stock held 5+ years. **Asset vs Stock Sale:** Different tax implications with stock sales generally preferred by sellers for capital gains treatment. **Installment Sale Treatment:** Defer gain recognition over payment period to manage tax brackets. **Timing Strategies:** Coordinate with other income events and potential tax rate changes. **Estate and Gift Tax Planning:** Use valuation discounts and charitable strategies before triggering events.',
      tags: ['tax-planning', 'qsbs', 'installment-sales', 'business-exit'],
      readTime: '12 min',
      difficulty: 'expert'
    },
    {
      id: 'due-diligence-preparation',
      title: 'Due Diligence Preparation Checklist',
      type: 'checklist',
      excerpt: 'Comprehensive checklist for organizing business information for buyer due diligence including **financial records**, **legal documents**, and **operational data**.',
      content: 'Being well-prepared for due diligence creates buyer confidence and often results in better terms. **Financial Information:** 3-5 years of audited/reviewed financial statements, tax returns, accounts receivable aging, inventory analysis, working capital analysis. **Legal Documentation:** Corporate documents, material contracts, IP documentation, litigation history, regulatory compliance records. **Operational Information:** Organization charts, employee contracts, customer lists, supplier agreements, operational procedures, technology systems. **Data Room Organization:** Virtual data room with logical folder structure, document indexing, access controls, regular updates.',
      tags: ['due-diligence', 'preparation', 'documentation', 'business-sale'],
      readTime: '10 min',
      difficulty: 'intermediate'
    },
    {
      id: 'business-transition-best-practices',
      title: 'Business Transition Management Best Practices',
      type: 'guide',
      excerpt: 'Best practices for managing business ownership transitions including **employee communication**, **customer retention**, and **knowledge transfer**.',
      content: 'A well-managed transition preserves business value and maintains stakeholder confidence. **Communication Strategy:** Coordinate announcement timing, develop consistent messaging, prepare Q&A responses. **Employee Management:** Early engagement of key staff, retention strategies, training programs, cultural integration support. **Customer Retention:** Relationship mapping, introduction processes, service continuity assurance, feedback monitoring. **Knowledge Transfer:** Comprehensive documentation, formal training programs, mentoring relationships, system access transfers. **Risk Management:** Contingency planning, performance guarantees, insurance coverage, legal protection strategies.',
      tags: ['transition-management', 'change-management', 'stakeholder-communication'],
      readTime: '14 min',
      difficulty: 'intermediate'
    },
    {
      id: 'post-exit-wealth-management',
      title: 'Post-Exit Wealth Management and Life Planning',
      type: 'guide',
      excerpt: 'Comprehensive guide to managing wealth after business exit including **diversification strategies**, **income generation**, and **lifestyle planning**.',
      content: 'Successfully managing post-exit wealth requires careful planning and professional guidance. **Wealth Management Fundamentals:** Diversification to reduce concentration risk, risk assessment for new situation, income generation for lifestyle needs, tax-efficient investment strategies. **Investment Strategy Development:** Appropriate asset allocation, liquidity management, alternative investments, tax-advantaged account maximization. **Estate Planning Updates:** Will and trust revisions, gift strategies, charitable giving, insurance review. **Lifestyle Planning:** Goal setting, sustainable spending plans, travel and experiences, family impact considerations. **Professional Team Assembly:** Wealth manager, tax professional, estate attorney, insurance advisor.',
      tags: ['wealth-management', 'post-exit-planning', 'investment-strategy', 'lifestyle-planning'],
      readTime: '16 min',
      difficulty: 'expert'
    }
  ]
};

export const nonProfitLaunchTemplate: GuidanceTemplate = {
  id: 'non-profit-launch',
  title: 'Non-Profit Organization Launch & Development',
  description: 'Launch and develop a sustainable non-profit organization that creates social impact',
  category: 'career-business',
  icon: '🤝',
  sections: [
    {
      id: 'mission-vision-planning',
      title: 'Mission, Vision & Strategic Planning',
      order: 1,
      reflectionPrompts: [
        {
          id: 'mission-statement-development',
          prompt: 'What specific social problem will your non-profit address? Define a clear, measurable mission statement.',
          category: 'planning',
          helpText: 'Focus on a specific issue you are passionate about. Good missions are specific, measurable, and address real community needs. Example: "Provide literacy programs for low-income children aged 5-12 in urban communities."'
        },
        {
          id: 'vision-goals-articulation',
          prompt: 'What long-term change do you want to see in the world? Articulate your vision and 5-year goals.',
          category: 'planning',
          helpText: 'Vision should be inspirational and forward-looking. Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) for impact, reach, and organizational growth.'
        },
        {
          id: 'target-population-identification',
          prompt: 'Who exactly will benefit from your non-profit services? Define your target population and geographic scope.',
          category: 'research',
          helpText: 'Be specific about demographics, location, income levels, age ranges, and specific needs. Research population size and current service gaps in your target area.'
        },
        {
          id: 'community-needs-assessment',
          prompt: 'What evidence supports the need for your non-profit? Conduct thorough community needs assessment.',
          category: 'research',
          helpText: 'Gather data from surveys, interviews, existing research, government statistics, and community organizations. Document unmet needs and service gaps.'
        },
        {
          id: 'competitive-landscape-analysis',
          prompt: 'What other organizations serve your target population? How will you differentiate and collaborate?',
          category: 'research',
          helpText: 'Research existing non-profits, government programs, and private services. Identify partnership opportunities and unique value proposition to avoid duplication.'
        },
        {
          id: 'theory-of-change-development',
          prompt: 'How will your activities lead to desired outcomes? Develop a clear theory of change and logic model.',
          category: 'planning',
          helpText: 'Map inputs → activities → outputs → outcomes → impact. Be specific about assumptions and causal relationships between your work and desired change.'
        }
      ]
    },
    {
      id: 'legal-governance-structure',
      title: 'Legal Structure & Governance',
      order: 2,
      reflectionPrompts: [
        {
          id: 'incorporation-planning',
          prompt: 'In which state will you incorporate, and what will be your legal structure? Plan incorporation process.',
          category: 'planning',
          helpText: 'Consider state filing fees, ongoing requirements, and tax benefits. Most choose state of primary operations. Decide between 501(c)(3) charitable, 501(c)(4) social welfare, or other structures.'
        },
        {
          id: 'board-composition-recruitment',
          prompt: 'Who will serve on your founding board of directors? Plan board composition and recruitment strategy.',
          category: 'planning',
          helpText: 'Need minimum 3 board members (varies by state). Seek diverse skills: legal, financial, fundraising, community connections, subject matter expertise. Avoid conflicts of interest.'
        },
        {
          id: 'governance-policies-development',
          prompt: 'What governance policies and procedures will guide your organization? Develop essential policies.',
          category: 'planning',
          helpText: 'Create bylaws, conflict of interest policy, whistleblower policy, document retention policy, executive compensation policy, and board meeting procedures.'
        },
        {
          id: 'tax-exempt-status-planning',
          prompt: 'How will you obtain 501(c)(3) tax-exempt status? Plan IRS application process and timeline.',
          category: 'planning',
          helpText: 'Form 1023 (over $50k budget) or 1023-EZ (under $50k). Gather required documents: articles of incorporation, bylaws, financial projections, detailed activity descriptions.'
        },
        {
          id: 'compliance-requirements-planning',
          prompt: 'What ongoing compliance requirements will your non-profit face? Plan compliance systems.',
          category: 'planning',
          helpText: 'Annual Form 990 filing, state registration requirements, donor privacy laws, employment law compliance, grant reporting requirements, board meeting documentation.'
        },
        {
          id: 'insurance-risk-management',
          prompt: 'What insurance coverage and risk management policies does your organization need?',
          category: 'planning',
          helpText: 'General liability, professional liability, directors and officers insurance, employment practices liability, property insurance, cyber liability coverage.'
        }
      ]
    },
    {
      id: 'program-development-design',
      title: 'Program Development & Service Design',
      order: 3,
      reflectionPrompts: [
        {
          id: 'program-model-development',
          prompt: 'What specific programs and services will you offer? Design your core program model.',
          category: 'planning',
          helpText: 'Define program components, service delivery methods, participant requirements, program duration, and capacity limits. Consider direct service, advocacy, education, or research approaches.'
        },
        {
          id: 'evidence-based-practices',
          prompt: 'What evidence-based practices will inform your program design? Research effective interventions.',
          category: 'research',
          helpText: 'Review academic research, best practice guides, successful program models, and evaluation studies. Adapt proven approaches to your specific context and population.'
        },
        {
          id: 'outcome-measurement-planning',
          prompt: 'How will you measure program effectiveness and impact? Design outcome measurement systems.',
          category: 'planning',
          helpText: 'Define specific, measurable outcomes aligned with mission. Plan data collection methods, evaluation tools, participant tracking systems, and reporting schedules.'
        },
        {
          id: 'program-implementation-timeline',
          prompt: 'What is your timeline for launching programs? Create implementation plan with milestones.',
          category: 'planning',
          helpText: 'Phase program launch based on funding, staff capacity, and community readiness. Start with pilot programs, gather feedback, refine approach, then scale.'
        },
        {
          id: 'partnership-collaboration-strategy',
          prompt: 'What organizations will you partner with for program delivery? Develop collaboration strategy.',
          category: 'planning',
          helpText: 'Identify referral sources, service partners, advocacy allies, and resource sharing opportunities. Formalize partnerships through MOUs or contracts.'
        },
        {
          id: 'quality-assurance-improvement',
          prompt: 'How will you ensure consistent program quality and continuous improvement?',
          category: 'planning',
          helpText: 'Develop program standards, staff training requirements, quality monitoring systems, participant feedback mechanisms, and program improvement processes.'
        }
      ]
    },
    {
      id: 'fundraising-revenue-strategy',
      title: 'Fundraising & Revenue Strategy',
      order: 4,
      reflectionPrompts: [
        {
          id: 'funding-needs-assessment',
          prompt: 'What are your annual funding needs for the next 3-5 years? Create detailed budget projections.',
          category: 'planning',
          helpText: 'Include personnel, program costs, overhead, facility expenses, technology, evaluation, and growth investments. Plan for 6-12 months operating reserves.'
        },
        {
          id: 'funding-source-diversification',
          prompt: 'What mix of funding sources will support your organization? Plan revenue diversification strategy.',
          category: 'planning',
          helpText: 'Consider individual donors, foundation grants, corporate sponsorships, government contracts, fee-for-service, social enterprise, special events, and online crowdfunding.'
        },
        {
          id: 'grant-funding-strategy',
          prompt: 'Which foundations and government funders align with your mission? Develop grant strategy.',
          category: 'research',
          helpText: 'Research foundation priorities, funding ranges, application deadlines, and requirements. Build relationships with program officers. Start with smaller local foundations.'
        },
        {
          id: 'individual-donor-cultivation',
          prompt: 'How will you identify, cultivate, and retain individual donors? Plan donor development strategy.',
          category: 'planning',
          helpText: 'Create donor personas, develop cultivation activities, design stewardship programs, plan donor communication calendar, and implement donor database system.'
        },
        {
          id: 'fundraising-events-campaigns',
          prompt: 'What fundraising events and campaigns will engage supporters? Plan annual fundraising calendar.',
          category: 'planning',
          helpText: 'Consider annual gala, peer-to-peer campaigns, online giving challenges, community events, and corporate partnerships. Balance cost-effectiveness with community engagement.'
        },
        {
          id: 'social-enterprise-opportunities',
          prompt: 'Could social enterprise activities generate revenue while advancing your mission?',
          category: 'consideration',
          helpText: 'Explore consulting services, training programs, product sales, or fee-for-service programs that align with mission and generate unrestricted revenue.'
        }
      ]
    },
    {
      id: 'operations-management-systems',
      title: 'Operations Management & Systems',
      order: 5,
      reflectionPrompts: [
        {
          id: 'organizational-structure-staffing',
          prompt: 'What organizational structure and staffing plan will support your programs? Design org chart.',
          category: 'planning',
          helpText: 'Define roles for executive director, program staff, development, finance, and administration. Consider full-time, part-time, contract, and volunteer positions.'
        },
        {
          id: 'human-resources-policies',
          prompt: 'What HR policies and employee benefits will attract and retain quality staff?',
          category: 'planning',
          helpText: 'Develop job descriptions, compensation philosophy, benefits package, performance evaluation system, professional development opportunities, and workplace policies.'
        },
        {
          id: 'financial-management-systems',
          prompt: 'What financial management systems and controls will ensure fiscal responsibility?',
          category: 'planning',
          helpText: 'Implement accounting software, budget tracking, expense approval processes, bank account segregation, audit preparations, and financial reporting procedures.'
        },
        {
          id: 'technology-infrastructure-planning',
          prompt: 'What technology systems will support your operations and program delivery?',
          category: 'planning',
          helpText: 'Plan database systems, website, email marketing tools, program management software, financial systems, video conferencing, and cybersecurity measures.'
        },
        {
          id: 'volunteer-management-program',
          prompt: 'How will you recruit, train, and manage volunteers to support your mission?',
          category: 'planning',
          helpText: 'Create volunteer position descriptions, recruitment strategies, orientation and training programs, recognition systems, and volunteer retention initiatives.'
        },
        {
          id: 'facility-space-planning',
          prompt: 'What facility and space requirements do you have for program delivery and operations?',
          category: 'planning',
          helpText: 'Consider office space, program delivery locations, storage needs, accessibility requirements, parking, public transportation access, and cost considerations.'
        }
      ]
    },
    {
      id: 'marketing-community-engagement',
      title: 'Marketing & Community Engagement',
      order: 6,
      reflectionPrompts: [
        {
          id: 'brand-identity-messaging',
          prompt: 'What brand identity and key messages will communicate your mission effectively?',
          category: 'planning',
          helpText: 'Develop logo, color scheme, tagline, elevator pitch, and consistent messaging across all communications. Ensure cultural sensitivity and accessibility.'
        },
        {
          id: 'target-audience-segmentation',
          prompt: 'Who are your key audiences, and how will you reach each group with targeted messaging?',
          category: 'planning',
          helpText: 'Segment donors, volunteers, program participants, community leaders, media, and policymakers. Tailor messages and channels for each audience.'
        },
        {
          id: 'digital-marketing-strategy',
          prompt: 'How will you use digital platforms to reach supporters and raise awareness?',
          category: 'planning',
          helpText: 'Plan website content, social media strategy, email marketing campaigns, search engine optimization, online advertising, and digital storytelling approaches.'
        },
        {
          id: 'community-partnership-engagement',
          prompt: 'How will you engage community leaders, organizations, and stakeholders as advocates?',
          category: 'planning',
          helpText: 'Build relationships with elected officials, community organizations, faith communities, business leaders, and other stakeholders. Create advisory committees.'
        },
        {
          id: 'media-relations-strategy',
          prompt: 'How will you work with media to increase visibility and educate the public about your issue?',
          category: 'planning',
          helpText: 'Build media list, develop press release templates, identify story angles, train spokespersons, and create media kits with background information.'
        },
        {
          id: 'advocacy-policy-engagement',
          prompt: 'Will your organization engage in advocacy or policy work to address systemic issues?',
          category: 'consideration',
          helpText: 'Consider advocacy activities within 501(c)(3) limits: education, research, coalition building, and limited lobbying. Separate 501(c)(4) may be needed for more political activity.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'nonprofit-startup-guide',
      title: 'Complete Non-Profit Startup Guide',
      type: 'guide',
      excerpt: 'Comprehensive guide to starting a non-profit including **legal requirements**, **501(c)(3) applications**, **board development**, and **initial funding strategies**.',
      content: 'Starting a successful non-profit requires careful planning and legal compliance. **Legal Structure:** Choose appropriate entity type (501(c)(3) most common for charitable work), incorporate in your state, and obtain federal tax-exempt status. **Board Development:** Recruit 3+ committed board members with diverse skills, develop bylaws and governance policies, and establish clear roles and responsibilities. **501(c)(3) Application:** File Form 1023 or 1023-EZ with IRS, including detailed activity descriptions, financial projections, and governance documents. **Initial Funding:** Start with personal networks, small grants, and community fundraising events. Develop a 2-year financial sustainability plan before major program launch.',
      tags: ['nonprofit-startup', 'legal-compliance', 'board-development', '501c3-application'],
      readTime: '20 min',
      difficulty: 'intermediate'
    },
    {
      id: 'grant-writing-fundamentals',
      title: 'Grant Writing Fundamentals for New Non-Profits',
      type: 'guide',
      excerpt: 'Essential grant writing skills including **proposal structure**, **funder research**, **budget development**, and **relationship building** with funders.',
      content: 'Successful grant writing is essential for non-profit sustainability. **Funder Research:** Use Foundation Directory, Guidestar, and local community foundation websites to identify aligned funders. Research their priorities, funding ranges, and application requirements. **Proposal Structure:** Develop compelling problem statements, clear program descriptions, measurable outcomes, realistic budgets, and strong organizational capacity sections. **Budget Development:** Create detailed, accurate budgets that align with funder priorities and include appropriate indirect costs. **Relationship Building:** Attend funder events, schedule meetings with program officers, and maintain regular communication even when not seeking funding. **Grant Management:** Develop systems for tracking deadlines, requirements, and reporting obligations.',
      tags: ['grant-writing', 'fundraising', 'funder-research', 'proposal-development'],
      readTime: '18 min',
      difficulty: 'intermediate'
    },
    {
      id: 'nonprofit-board-governance',
      title: 'Non-Profit Board Governance Best Practices',
      type: 'guide',
      excerpt: 'Board governance essentials including **recruitment strategies**, **committee structures**, **fiduciary responsibilities**, and **performance evaluation**.',
      content: 'Effective board governance is crucial for non-profit success and accountability. **Board Composition:** Recruit 7-15 members with diverse skills including legal, financial, marketing, program expertise, and community connections. Ensure diversity in demographics and perspectives. **Roles and Responsibilities:** Board sets strategy and policy, hires and evaluates executive director, ensures financial oversight, and provides community advocacy. Staff implements programs and manages daily operations. **Committee Structure:** Establish executive, finance, development, and program committees. Define committee charters, meeting schedules, and reporting requirements. **Meeting Management:** Hold quarterly full board meetings with monthly committee meetings. Develop agendas focused on strategic issues, not operational details. **Board Development:** Provide orientation for new members, ongoing education, and annual retreat for strategic planning.',
      tags: ['board-governance', 'nonprofit-leadership', 'fiduciary-responsibility', 'committee-management'],
      readTime: '16 min',
      difficulty: 'intermediate'
    },
    {
      id: 'program-evaluation-planning',
      title: 'Program Evaluation and Impact Measurement',
      type: 'guide',
      excerpt: 'Program evaluation strategies including **logic models**, **outcome measurement**, **data collection methods**, and **evaluation reporting**.',
      content: 'Effective evaluation demonstrates impact and improves program effectiveness. **Logic Model Development:** Map inputs → activities → outputs → outcomes → impact. Define assumptions and external factors that influence success. **Outcome Measurement:** Identify specific, measurable, achievable, relevant, and time-bound (SMART) outcomes. Use validated instruments when possible. **Data Collection Methods:** Design surveys, interviews, focus groups, observations, and administrative data collection systems. Consider participant burden and data quality. **Evaluation Design:** Choose appropriate evaluation approach: pre/post comparison, comparison group, randomized controlled trial, or case study method. **Data Analysis:** Use appropriate statistical methods, qualitative analysis techniques, and data visualization to communicate findings. **Utilization-Focused Evaluation:** Ensure evaluation results inform program improvement decisions and stakeholder communication.',
      tags: ['program-evaluation', 'impact-measurement', 'logic-models', 'outcome-assessment'],
      readTime: '22 min',
      difficulty: 'expert'
    },
    {
      id: 'nonprofit-marketing-strategy',
      title: 'Non-Profit Marketing and Communications Strategy',
      type: 'guide',
      excerpt: 'Marketing strategies for non-profits including **storytelling techniques**, **social media engagement**, **donor communications**, and **brand development**.',
      content: 'Effective marketing builds awareness, engages supporters, and drives mission success. **Brand Development:** Create consistent visual identity, compelling tagline, and clear value proposition. Ensure brand reflects organizational values and resonates with target audiences. **Storytelling:** Develop compelling narratives that illustrate impact through client success stories, data visualization, and emotional connection. Respect client privacy and dignity. **Digital Strategy:** Use website, email marketing, social media, and online advertising to reach diverse audiences. Optimize for mobile and accessibility. **Content Marketing:** Create valuable content including blog posts, infographics, videos, and reports that educate audiences about your issue and solutions. **Community Engagement:** Build relationships with community influencers, media contacts, and partner organizations to amplify your message and reach.',
      tags: ['nonprofit-marketing', 'digital-strategy', 'storytelling', 'brand-development'],
      readTime: '14 min',
      difficulty: 'beginner'
    }
  ]
};

export const personalHealthWellnessTemplate: GuidanceTemplate = {
  id: 'personal-health-wellness',
  title: 'Personal Health & Wellness Optimization',
  description: 'Optimize your personal health and wellness through comprehensive lifestyle design',
  category: 'health-wellness',
  icon: '🌟',
  sections: [
    {
      id: 'health-assessment-baseline',
      title: 'Health Assessment & Baseline',
      order: 1,
      reflectionPrompts: [
        {
          id: 'current-health-evaluation',
          prompt: 'What is your current overall health status? Consider physical, mental, and emotional wellbeing.',
          category: 'research',
          helpText: 'Assess energy levels, sleep quality, stress levels, chronic conditions, medications, recent lab work, fitness level, mental health status. Consider scheduling annual physical.'
        },
        {
          id: 'health-history-analysis',
          prompt: 'What health challenges run in your family, and what past health issues have you experienced?',
          category: 'research',
          helpText: 'Review family medical history for heart disease, diabetes, cancer, mental health conditions. Note your own past injuries, surgeries, chronic conditions, and recurring health issues.'
        },
        {
          id: 'lifestyle-factor-assessment',
          prompt: 'How do your current lifestyle factors impact your health? Evaluate diet, exercise, sleep, stress, and habits.',
          category: 'research',
          helpText: 'Analyze nutrition patterns, physical activity levels, sleep duration and quality, stress management, alcohol/tobacco use, screen time, work-life balance, social connections.'
        },
        {
          id: 'health-goals-prioritization',
          prompt: 'What are your top 3-5 health and wellness goals? Prioritize based on impact and importance to you.',
          category: 'planning',
          helpText: 'Consider weight management, fitness improvement, stress reduction, better sleep, chronic disease prevention, mental health, energy enhancement, longevity. Make goals specific and measurable.'
        },
        {
          id: 'barriers-challenges-identification',
          prompt: 'What barriers and challenges have prevented you from achieving better health in the past?',
          category: 'consideration',
          helpText: 'Identify time constraints, financial limitations, lack of knowledge, motivation issues, social pressures, physical limitations, access to resources, competing priorities.'
        },
        {
          id: 'support-system-evaluation',
          prompt: 'What support systems and resources do you have available for your health journey?',
          category: 'research',
          helpText: 'Consider family support, healthcare providers, gym/fitness facilities, healthy food access, insurance coverage, health apps, friends with similar goals, workplace wellness programs.'
        }
      ]
    },
    {
      id: 'nutrition-dietary-planning',
      title: 'Nutrition & Dietary Planning',
      order: 2,
      reflectionPrompts: [
        {
          id: 'current-eating-pattern-analysis',
          prompt: 'What are your current eating patterns, habits, and relationship with food?',
          category: 'research',
          helpText: 'Track typical daily meals, snacking habits, emotional eating triggers, food preferences, cooking skills, meal timing, portion sizes, dining out frequency.'
        },
        {
          id: 'nutritional-needs-assessment',
          prompt: 'What are your specific nutritional needs based on your age, activity level, health conditions, and goals?',
          category: 'research',
          helpText: 'Consider caloric needs, macronutrient ratios, micronutrient requirements, dietary restrictions, medical conditions requiring special diets, athletic performance needs.'
        },
        {
          id: 'sustainable-diet-approach',
          prompt: 'What dietary approach aligns with your lifestyle, preferences, and long-term sustainability?',
          category: 'planning',
          helpText: 'Research Mediterranean, plant-based, low-carb, intermittent fasting, or balanced approaches. Consider cultural foods, cooking time, budget, family preferences, social situations.'
        },
        {
          id: 'meal-planning-preparation',
          prompt: 'How will you plan and prepare nutritious meals consistently? Develop practical meal planning strategies.',
          category: 'planning',
          helpText: 'Plan weekly meal prep, batch cooking, grocery shopping strategies, healthy snack options, cooking skills to develop, time-saving techniques, backup meal options.'
        },
        {
          id: 'nutrition-education-goals',
          prompt: 'What nutrition knowledge and skills do you need to develop for long-term success?',
          category: 'planning',
          helpText: 'Learn about reading nutrition labels, understanding portion sizes, cooking techniques, nutrient timing, supplements, hydration needs, nutrition for specific health goals.'
        },
        {
          id: 'behavior-change-strategies',
          prompt: 'What strategies will you use to change eating behaviors and maintain healthy habits?',
          category: 'planning',
          helpText: 'Identify habit triggers, replacement behaviors, environmental changes, social support, tracking methods, reward systems, strategies for handling setbacks and cravings.'
        }
      ]
    },
    {
      id: 'fitness-physical-activity',
      title: 'Fitness & Physical Activity',
      order: 3,
      reflectionPrompts: [
        {
          id: 'current-fitness-level',
          prompt: 'What is your current fitness level and physical activity patterns?',
          category: 'research',
          helpText: 'Assess cardiovascular endurance, strength, flexibility, balance. Note current activities, exercise frequency, physical limitations, past injuries, activity preferences.'
        },
        {
          id: 'fitness-goals-definition',
          prompt: 'What specific fitness goals do you want to achieve? Make them measurable and time-bound.',
          category: 'planning',
          helpText: 'Define goals for strength, endurance, weight loss, muscle gain, flexibility, sports performance, general health. Set specific targets like "run 5K in under 30 minutes."'
        },
        {
          id: 'exercise-preferences-constraints',
          prompt: 'What types of physical activities do you enjoy, and what constraints do you need to work around?',
          category: 'consideration',
          helpText: 'Consider indoor vs outdoor activities, group vs solo exercise, gym vs home workouts, time availability, budget for equipment/memberships, physical limitations.'
        },
        {
          id: 'workout-program-design',
          prompt: 'How will you structure your weekly workout routine to include cardio, strength, and flexibility training?',
          category: 'planning',
          helpText: 'Plan frequency, duration, and intensity for each exercise type. Consider progressive overload, rest days, variety to prevent boredom, seasonal adjustments.'
        },
        {
          id: 'activity-integration-lifestyle',
          prompt: 'How can you integrate more physical activity into your daily life beyond formal workouts?',
          category: 'planning',
          helpText: 'Consider active commuting, taking stairs, walking meetings, standing desk, household activities, recreational sports, family activities, weekend adventures.'
        },
        {
          id: 'progress-tracking-motivation',
          prompt: 'How will you track progress and maintain motivation for your fitness journey?',
          category: 'planning',
          helpText: 'Choose tracking methods (apps, journals, photos), set milestone rewards, find accountability partners, join communities, plan for motivation dips and plateaus.'
        }
      ]
    },
    {
      id: 'sleep-recovery-optimization',
      title: 'Sleep & Recovery Optimization',
      order: 4,
      reflectionPrompts: [
        {
          id: 'sleep-pattern-analysis',
          prompt: 'What are your current sleep patterns, quality, and challenges?',
          category: 'research',
          helpText: 'Track bedtime, wake time, sleep duration, time to fall asleep, night wakings, sleep quality rating, morning energy levels, nap habits, weekend sleep patterns.'
        },
        {
          id: 'sleep-environment-optimization',
          prompt: 'How can you optimize your sleep environment for better rest?',
          category: 'planning',
          helpText: 'Consider room temperature, darkness, noise levels, mattress and pillow quality, electronic devices, air quality, bedtime routines, bedroom organization.'
        },
        {
          id: 'bedtime-routine-development',
          prompt: 'What evening routine will help you wind down and prepare for quality sleep?',
          category: 'planning',
          helpText: 'Plan screen-free time before bed, relaxation activities, consistent bedtime, light exposure management, caffeine cutoff times, evening meal timing, stress management.'
        },
        {
          id: 'daytime-factors-sleep',
          prompt: 'How do your daytime activities and habits impact your sleep quality?',
          category: 'research',
          helpText: 'Analyze caffeine intake timing, alcohol consumption, exercise timing, light exposure, nap timing, stress levels, meal timing, work schedule effects.'
        },
        {
          id: 'recovery-strategies-active',
          prompt: 'What active recovery strategies will you use to support your health and fitness goals?',
          category: 'planning',
          helpText: 'Plan stretching routines, meditation, massage, foam rolling, sauna/hot baths, gentle movement, stress management techniques, recovery nutrition.'
        },
        {
          id: 'sleep-disorder-addressing',
          prompt: 'Do you need professional help for potential sleep disorders or persistent sleep issues?',
          category: 'consideration',
          helpText: 'Consider sleep apnea symptoms, chronic insomnia, restless legs, shift work issues. Plan when to consult healthcare providers or sleep specialists.'
        }
      ]
    },
    {
      id: 'stress-mental-health',
      title: 'Stress Management & Mental Health',
      order: 5,
      reflectionPrompts: [
        {
          id: 'stress-sources-identification',
          prompt: 'What are your primary sources of stress, and how do they currently affect your health?',
          category: 'research',
          helpText: 'Identify work stress, relationship issues, financial concerns, health worries, time pressure, major life changes. Note physical and emotional symptoms of stress.'
        },
        {
          id: 'current-coping-mechanisms',
          prompt: 'What coping mechanisms do you currently use, and how effective are they?',
          category: 'research',
          helpText: 'Assess current stress management techniques, both healthy and unhealthy coping strategies, effectiveness of each approach, areas for improvement.'
        },
        {
          id: 'stress-reduction-techniques',
          prompt: 'What evidence-based stress reduction techniques will you incorporate into your routine?',
          category: 'planning',
          helpText: 'Consider meditation, deep breathing, progressive muscle relaxation, yoga, journaling, nature time, mindfulness practices, cognitive reframing techniques.'
        },
        {
          id: 'mental-health-support',
          prompt: 'What mental health support and resources do you need to maintain psychological wellbeing?',
          category: 'planning',
          helpText: 'Consider therapy/counseling, support groups, mental health apps, crisis resources, medication management, peer support, workplace mental health resources.'
        },
        {
          id: 'work-life-balance-boundaries',
          prompt: 'How will you establish healthier work-life balance and personal boundaries?',
          category: 'planning',
          helpText: 'Set work hours limits, create transition rituals, protect personal time, learn to say no, delegate responsibilities, separate work and personal spaces.'
        },
        {
          id: 'emotional-regulation-skills',
          prompt: 'What skills do you need to develop for better emotional regulation and resilience?',
          category: 'planning',
          helpText: 'Practice emotional awareness, communication skills, conflict resolution, gratitude practices, positive thinking patterns, building emotional intelligence, resilience strategies.'
        }
      ]
    },
    {
      id: 'health-monitoring-maintenance',
      title: 'Health Monitoring & Long-term Maintenance',
      order: 6,
      reflectionPrompts: [
        {
          id: 'health-tracking-systems',
          prompt: 'What systems will you use to track your health progress and stay accountable?',
          category: 'planning',
          helpText: 'Choose tracking tools for weight, measurements, fitness progress, sleep, mood, symptoms. Plan regular check-ins, progress photos, health apps, wearable devices.'
        },
        {
          id: 'healthcare-provider-relationships',
          prompt: 'How will you maintain relationships with healthcare providers and schedule regular check-ups?',
          category: 'planning',
          helpText: 'Schedule annual physicals, dental cleanings, vision exams, specialist appointments, health screenings. Build relationships with primary care, specialists as needed.'
        },
        {
          id: 'preventive-health-measures',
          prompt: 'What preventive health measures will you implement based on your risk factors and age?',
          category: 'planning',
          helpText: 'Plan appropriate screenings (mammograms, colonoscopies, blood tests), vaccinations, supplementation, genetic testing if indicated, lifestyle modifications for disease prevention.'
        },
        {
          id: 'habit-maintenance-strategies',
          prompt: 'How will you maintain healthy habits long-term and handle inevitable setbacks?',
          category: 'planning',
          helpText: 'Develop habit stacking, accountability systems, flexibility for life changes, strategies for getting back on track, seasonal adjustments, motivation renewal techniques.'
        },
        {
          id: 'health-education-continuous',
          prompt: 'How will you continue learning about health and wellness to make informed decisions?',
          category: 'planning',
          helpText: 'Follow reputable health sources, attend workshops, read research, consult with professionals, stay updated on health recommendations, evaluate health trends critically.'
        },
        {
          id: 'family-community-health',
          prompt: 'How can you positively influence the health of your family and community?',
          category: 'consideration',
          helpText: 'Share healthy habits with family, participate in community health initiatives, model healthy behaviors, support others health journeys, create healthy environments.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'comprehensive-health-assessment',
      title: 'Complete Health Assessment and Baseline Guide',
      type: 'guide',
      excerpt: 'Comprehensive guide to assessing your current health status including **physical assessments**, **mental health screening**, **lifestyle analysis**, and **goal setting**.',
      content: 'Establishing a clear health baseline is crucial for effective improvement planning. **Physical Health Assessment:** Track vital signs, BMI, body composition, fitness level, energy levels, chronic conditions, and recent lab work. Schedule comprehensive physical exam. **Mental Health Screening:** Assess stress levels, mood patterns, anxiety symptoms, sleep quality, and cognitive function. Consider professional mental health screening if needed. **Lifestyle Analysis:** Document current diet patterns, exercise habits, sleep schedule, stress management, social connections, and work-life balance. **Goal Setting:** Use SMART criteria to set specific, measurable health goals. Prioritize goals based on health impact and personal importance. **Professional Baseline:** Work with healthcare providers to establish baseline measurements and health indicators relevant to your age, gender, and risk factors.',
      tags: ['health-assessment', 'baseline-measurements', 'goal-setting', 'preventive-health'],
      readTime: '25 min',
      difficulty: 'beginner'
    },
    {
      id: 'sustainable-nutrition-planning',
      title: 'Sustainable Nutrition and Meal Planning Strategies',
      type: 'guide',
      excerpt: 'Evidence-based nutrition planning including **dietary approaches**, **meal preparation**, **behavior change**, and **long-term sustainability**.',
      content: 'Sustainable nutrition changes are key to long-term health success. **Dietary Approaches:** Research shows Mediterranean, DASH, and plant-forward diets provide excellent health outcomes. Choose approach that aligns with preferences and lifestyle. **Meal Planning:** Develop weekly meal planning routine, batch cooking strategies, healthy snack preparation, and grocery shopping efficiency. **Nutrition Education:** Learn to read nutrition labels, understand portion sizes, identify nutrient-dense foods, and plan balanced meals. **Behavior Change:** Use habit stacking, environmental design, and gradual changes to build lasting nutrition habits. Address emotional eating and social eating challenges. **Sustainability Factors:** Consider budget, cooking skills, family preferences, cultural foods, and time constraints when developing nutrition plans.',
      tags: ['nutrition-planning', 'meal-preparation', 'dietary-approaches', 'behavior-change'],
      readTime: '20 min',
      difficulty: 'intermediate'
    },
    {
      id: 'fitness-program-development',
      title: 'Comprehensive Fitness Program Development',
      type: 'guide',
      excerpt: 'Complete guide to designing effective fitness programs including **exercise selection**, **progression planning**, **injury prevention**, and **motivation strategies**.',
      content: 'Effective fitness programs balance cardiovascular, strength, and flexibility training. **Program Structure:** Include 150+ minutes moderate cardio or 75+ minutes vigorous cardio weekly, plus 2+ strength training sessions. Add flexibility and balance work. **Exercise Selection:** Choose activities you enjoy and can sustain. Mix high and low intensity, compound and isolation movements, functional exercises for daily life. **Progression Planning:** Use progressive overload principles, periodization, and gradual increases in intensity, duration, or frequency. **Injury Prevention:** Include proper warm-up and cool-down, adequate rest, proper form instruction, and listen to your body. Address muscle imbalances and past injuries. **Motivation Strategies:** Set short and long-term goals, track progress, find workout partners, vary routines to prevent boredom, and celebrate milestones.',
      tags: ['fitness-planning', 'exercise-programming', 'injury-prevention', 'workout-design'],
      readTime: '22 min',
      difficulty: 'intermediate'
    },
    {
      id: 'sleep-optimization-guide',
      title: 'Sleep Optimization for Health and Performance',
      type: 'guide',
      excerpt: 'Complete sleep improvement strategies including **sleep hygiene**, **environment optimization**, **circadian rhythm support**, and **recovery enhancement**.',
      content: 'Quality sleep is fundamental to physical and mental health optimization. **Sleep Hygiene:** Maintain consistent sleep schedule, create bedtime routine, limit screen time before bed, avoid caffeine late in day, and create sleep-conducive environment. **Environment Optimization:** Keep bedroom cool (65-68°F), dark, and quiet. Invest in quality mattress and pillows. Remove electronic devices and minimize light exposure. **Circadian Rhythm Support:** Get morning sunlight exposure, limit evening blue light, maintain consistent sleep-wake times even on weekends, and consider light therapy if needed. **Recovery Enhancement:** Use sleep for physical recovery through proper sleep stages, growth hormone release, and memory consolidation. Track sleep quality and adjust habits based on results. **Sleep Disorders:** Recognize signs of sleep apnea, insomnia, or other disorders requiring professional treatment.',
      tags: ['sleep-optimization', 'sleep-hygiene', 'circadian-rhythm', 'recovery'],
      readTime: '18 min',
      difficulty: 'beginner'
    },
    {
      id: 'stress-management-mental-health',
      title: 'Stress Management and Mental Health Strategies',
      type: 'guide',
      excerpt: 'Evidence-based approaches to stress reduction including **mindfulness practices**, **cognitive techniques**, **lifestyle modifications**, and **professional support**.',
      content: 'Effective stress management is crucial for overall health and disease prevention. **Mindfulness Practices:** Implement daily meditation, deep breathing exercises, progressive muscle relaxation, and mindful movement. Start with 5-10 minutes daily and gradually increase. **Cognitive Techniques:** Learn cognitive reframing, challenge negative thought patterns, practice gratitude, and develop problem-solving skills. Use journaling for emotional processing. **Lifestyle Modifications:** Establish work-life boundaries, prioritize sleep, maintain social connections, engage in hobbies, and spend time in nature. **Physical Stress Relief:** Use regular exercise, yoga, massage, or other physical stress relief methods. **Professional Support:** Recognize when to seek therapy, counseling, or medical intervention. Build support network of friends, family, and professionals.',
      tags: ['stress-management', 'mental-health', 'mindfulness', 'cognitive-techniques'],
      readTime: '24 min',
      difficulty: 'intermediate'
    }
  ]
};

export const sustainableLivingTemplate: GuidanceTemplate = {
  id: 'sustainable-living',
  title: 'Sustainable Living & Environmental Impact',
  description: 'Adopt sustainable living practices and reduce your environmental footprint',
  category: 'consideration',
  icon: '🌍',
  sections: [
    {
      id: 'environmental-impact-assessment',
      title: 'Environmental Impact Assessment',
      order: 1,
      reflectionPrompts: [
        {
          id: 'carbon-footprint-evaluation',
          prompt: 'What is your current carbon footprint across transportation, energy use, food, and consumption?',
          category: 'research',
          helpText: 'Use carbon calculators to assess emissions from driving, flying, home energy, diet choices, and purchasing habits. Track monthly utility bills and travel patterns.'
        },
        {
          id: 'waste-generation-analysis',
          prompt: 'How much waste do you generate, and what types? Analyze household, food, electronic, and packaging waste.',
          category: 'research',
          helpText: 'Audit trash and recycling for one week. Note food waste, single-use items, packaging, electronics disposal. Consider composting potential and recycling effectiveness.'
        },
        {
          id: 'resource-consumption-patterns',
          prompt: 'What are your patterns of water, energy, and material resource consumption?',
          category: 'research',
          helpText: 'Review utility bills, analyze water usage habits, assess electricity/gas consumption, evaluate purchasing frequency and product lifespans, identify resource-intensive habits.'
        },
        {
          id: 'lifestyle-impact-priorities',
          prompt: 'Which environmental impact areas are most important for you to address first?',
          category: 'planning',
          helpText: 'Consider transportation emissions, home energy efficiency, dietary impact, consumption patterns, waste reduction. Prioritize based on environmental impact and feasibility.'
        },
        {
          id: 'sustainability-motivation-values',
          prompt: 'What motivates you to live more sustainably? Connect with your personal values and long-term vision.',
          category: 'consideration',
          helpText: 'Reflect on environmental concern, future generations, health benefits, cost savings, ethical consumption, community impact, climate change awareness.'
        },
        {
          id: 'baseline-measurement-tracking',
          prompt: 'How will you measure and track your environmental impact improvements over time?',
          category: 'planning',
          helpText: 'Choose tracking methods for energy use, transportation, waste, water consumption, food choices. Set up measurement systems and baseline data collection.'
        }
      ]
    },
    {
      id: 'sustainable-home-energy',
      title: 'Sustainable Home & Energy',
      order: 2,
      reflectionPrompts: [
        {
          id: 'home-energy-efficiency-audit',
          prompt: 'What energy efficiency improvements can you make to reduce your home energy consumption?',
          category: 'planning',
          helpText: 'Assess insulation, windows, appliances, lighting, heating/cooling systems. Consider LED upgrades, smart thermostats, weatherstripping, energy-efficient appliances.'
        },
        {
          id: 'renewable-energy-options',
          prompt: 'What renewable energy options are available for your home situation?',
          category: 'research',
          helpText: 'Research solar panels, wind power, geothermal systems, community solar programs, green energy utility options, costs, incentives, and payback periods.'
        },
        {
          id: 'water-conservation-strategies',
          prompt: 'How can you reduce water consumption and implement water-saving technologies?',
          category: 'planning',
          helpText: 'Install low-flow fixtures, fix leaks, collect rainwater, choose drought-resistant landscaping, upgrade to efficient appliances, modify usage habits.'
        },
        {
          id: 'sustainable-home-materials',
          prompt: 'When renovating or decorating, how will you choose sustainable materials and products?',
          category: 'planning',
          helpText: 'Research eco-friendly building materials, non-toxic paints, sustainable furniture, recycled content products, local materials, durability and lifecycle considerations.'
        },
        {
          id: 'indoor-air-quality-health',
          prompt: 'How can you improve indoor air quality while reducing environmental impact?',
          category: 'planning',
          helpText: 'Use natural cleaning products, improve ventilation, add plants, avoid VOCs, choose low-emission materials, maintain HVAC systems, reduce chemical exposure.'
        },
        {
          id: 'smart-home-sustainability',
          prompt: 'What smart home technologies can help optimize your resource use and environmental impact?',
          category: 'planning',
          helpText: 'Consider smart thermostats, energy monitoring systems, automated lighting, smart appliances, water leak detectors, programmable systems for efficiency optimization.'
        }
      ]
    },
    {
      id: 'sustainable-transportation-mobility',
      title: 'Sustainable Transportation & Mobility',
      order: 3,
      reflectionPrompts: [
        {
          id: 'transportation-pattern-analysis',
          prompt: 'What are your current transportation patterns and their environmental impact?',
          category: 'research',
          helpText: 'Track daily commuting, weekend travel, air travel frequency, vehicle efficiency, public transit use. Calculate emissions from different transportation modes.'
        },
        {
          id: 'active-transportation-options',
          prompt: 'How can you incorporate walking, cycling, and other active transportation into your routine?',
          category: 'planning',
          helpText: 'Assess walkable/bikeable routes, safety considerations, weather adaptations, equipment needs, health benefits, time requirements, infrastructure availability.'
        },
        {
          id: 'public-transit-optimization',
          prompt: 'How can you maximize use of public transportation and shared mobility options?',
          category: 'planning',
          helpText: 'Research bus, train, subway routes, schedules, costs, multimodal connections, ride-sharing, car-sharing services, monthly passes, trip planning apps.'
        },
        {
          id: 'vehicle-efficiency-electrification',
          prompt: 'If you need a vehicle, how can you choose the most efficient or electric option?',
          category: 'planning',
          helpText: 'Research electric, hybrid, efficient gas vehicles, charging infrastructure, total cost of ownership, driving patterns, vehicle size needs, incentives.'
        },
        {
          id: 'travel-impact-reduction',
          prompt: 'How will you reduce the environmental impact of longer-distance and air travel?',
          category: 'planning',
          helpText: 'Consider virtual meetings, combined trips, direct flights, carbon offsets, slower travel modes, local vacation alternatives, travel frequency reduction.'
        },
        {
          id: 'mobility-behavior-change',
          prompt: 'What behavioral changes will help you maintain sustainable transportation habits?',
          category: 'planning',
          helpText: 'Plan trip combining, remote work options, flexible scheduling, route optimization, maintenance habits, community building with sustainable transport users.'
        }
      ]
    },
    {
      id: 'sustainable-consumption-purchasing',
      title: 'Sustainable Consumption & Purchasing',
      order: 4,
      reflectionPrompts: [
        {
          id: 'consumption-mindfulness-assessment',
          prompt: 'How can you become more mindful about your consumption patterns and purchasing decisions?',
          category: 'consideration',
          helpText: 'Practice need vs want evaluation, waiting periods before purchases, quality over quantity mindset, researching product lifecycle and ethics before buying.'
        },
        {
          id: 'circular-economy-participation',
          prompt: 'How can you participate in the circular economy through reuse, repair, and sharing?',
          category: 'planning',
          helpText: 'Buy secondhand, repair items, share/borrow tools, use repair cafes, choose products designed for longevity, participate in buy-nothing groups.'
        },
        {
          id: 'sustainable-product-selection',
          prompt: 'What criteria will you use to choose sustainable products and brands?',
          category: 'planning',
          helpText: 'Research certifications (B-Corp, organic, Fair Trade), local production, minimal packaging, company values, supply chain ethics, product durability.'
        },
        {
          id: 'packaging-waste-reduction',
          prompt: 'How can you minimize packaging waste through your purchasing and shopping choices?',
          category: 'planning',
          helpText: 'Shop bulk stores, bring reusable bags/containers, choose minimal packaging, buy concentrated products, support package-free stores, avoid single-use items.'
        },
        {
          id: 'local-seasonal-economy',
          prompt: 'How can you support local and seasonal economy to reduce transportation emissions?',
          category: 'planning',
          helpText: 'Shop farmers markets, join CSAs, support local businesses, choose seasonal products, understand food miles, participate in local maker economy.'
        },
        {
          id: 'sustainable-fashion-choices',
          prompt: 'How will you approach clothing and fashion purchases more sustainably?',
          category: 'planning',
          helpText: 'Buy fewer, higher-quality pieces, shop secondhand, support ethical brands, care for clothes properly, swap with friends, avoid fast fashion.'
        }
      ]
    },
    {
      id: 'sustainable-food-nutrition',
      title: 'Sustainable Food & Nutrition',
      order: 5,
      reflectionPrompts: [
        {
          id: 'dietary-environmental-impact',
          prompt: 'What is the environmental impact of your current diet, and where can you make improvements?',
          category: 'research',
          helpText: 'Assess meat consumption, dairy intake, processed foods, food miles, organic vs conventional, seasonal eating patterns. Research carbon footprint of different foods.'
        },
        {
          id: 'plant-forward-transition',
          prompt: 'How can you increase plant-based foods while meeting your nutritional needs and preferences?',
          category: 'planning',
          helpText: 'Gradually increase vegetables, legumes, whole grains, nuts. Learn plant-based protein sources, cooking techniques, meal planning, nutritional balance.'
        },
        {
          id: 'local-seasonal-eating',
          prompt: 'How can you eat more locally and seasonally while enjoying varied, nutritious meals?',
          category: 'planning',
          helpText: 'Learn seasonal produce calendars, find local farms/markets, preserve seasonal foods, adjust recipes to available ingredients, grow some food yourself.'
        },
        {
          id: 'food-waste-reduction',
          prompt: 'What strategies will you use to minimize food waste in planning, storage, and preparation?',
          category: 'planning',
          helpText: 'Meal plan efficiently, store food properly, use leftovers creatively, compost scraps, buy appropriate quantities, preserve excess food, donate surplus.'
        },
        {
          id: 'sustainable-food-sourcing',
          prompt: 'How will you choose food sources that align with your environmental and ethical values?',
          category: 'planning',
          helpText: 'Research organic, regenerative agriculture, fair trade, local farms, sustainable seafood, ethical animal products, food co-ops, direct farm purchases.'
        },
        {
          id: 'home-food-production',
          prompt: 'What food can you grow or produce at home to reduce environmental impact and improve nutrition?',
          category: 'consideration',
          helpText: 'Consider container gardens, herbs, sprouting, composting, fermentation, food preservation, space available, time commitment, skill development needed.'
        }
      ]
    },
    {
      id: 'community-advocacy-impact',
      title: 'Community Engagement & Environmental Advocacy',
      order: 6,
      reflectionPrompts: [
        {
          id: 'community-sustainability-participation',
          prompt: 'How can you participate in community sustainability initiatives and environmental groups?',
          category: 'planning',
          helpText: 'Join environmental organizations, participate in community gardens, support local sustainability initiatives, volunteer for environmental causes, attend city council meetings.'
        },
        {
          id: 'environmental-education-sharing',
          prompt: 'How will you share environmental knowledge and inspire others to adopt sustainable practices?',
          category: 'planning',
          helpText: 'Lead by example, share experiences on social media, host sustainability gatherings, mentor others, write about your journey, give presentations.'
        },
        {
          id: 'policy-advocacy-engagement',
          prompt: 'How can you engage in environmental policy advocacy at local, state, and national levels?',
          category: 'consideration',
          helpText: 'Contact representatives, vote for environmental candidates, support environmental legislation, join advocacy campaigns, attend town halls, write letters.'
        },
        {
          id: 'sustainable-workplace-influence',
          prompt: 'How can you promote sustainability initiatives in your workplace or organization?',
          category: 'planning',
          helpText: 'Propose recycling programs, suggest energy efficiency improvements, organize carpools, promote remote work, green procurement, sustainable lunch options.'
        },
        {
          id: 'financial-environmental-alignment',
          prompt: 'How can you align your financial decisions with your environmental values?',
          category: 'planning',
          helpText: 'Choose green banks, divest from fossil fuels, invest in sustainable funds, support B-Corps, consider environmental impact in all financial decisions.'
        },
        {
          id: 'long-term-impact-legacy',
          prompt: 'What long-term environmental legacy do you want to create through your actions and influence?',
          category: 'consideration',
          helpText: 'Consider impact on future generations, systemic change contribution, community transformation, professional influence, teaching sustainable practices to children.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'carbon-footprint-assessment',
      title: 'Complete Carbon Footprint Assessment Guide',
      type: 'guide',
      excerpt: 'Comprehensive guide to calculating and understanding your carbon footprint across **transportation**, **energy use**, **food choices**, and **consumption patterns**.',
      content: 'Understanding your carbon footprint is the first step toward meaningful environmental impact reduction. **Transportation Assessment:** Track all forms of transportation including daily commuting, weekend travel, and air travel. Use calculators to estimate emissions from different vehicle types, public transit, and flights. **Home Energy Footprint:** Analyze electricity, gas, and other energy consumption through utility bills. Factor in home size, heating/cooling efficiency, and appliance usage patterns. **Dietary Impact:** Food choices significantly impact carbon emissions. Meat and dairy typically have higher footprints than plant-based foods. Consider local vs imported foods, organic production, and food waste. **Consumption Patterns:** Manufacturing, shipping, and disposal of goods contribute to carbon footprint. Evaluate purchasing frequency, product durability, and disposal methods.',
      tags: ['carbon-footprint', 'environmental-assessment', 'sustainability-metrics', 'impact-measurement'],
      readTime: '20 min',
      difficulty: 'beginner'
    },
    {
      id: 'sustainable-home-optimization',
      title: 'Sustainable Home Energy and Efficiency Guide',
      type: 'guide',
      excerpt: 'Practical strategies for home energy efficiency including **renewable energy**, **insulation**, **smart technologies**, and **water conservation**.',
      content: 'Creating a sustainable home reduces environmental impact while often saving money. **Energy Efficiency Basics:** Start with insulation, weatherstripping, and LED lighting for immediate impact. Upgrade to efficient appliances and consider smart thermostats for heating/cooling optimization. **Renewable Energy Options:** Solar panels are increasingly affordable with federal and local incentives. Consider community solar if rooftop installation isn\'t feasible. Research net metering and battery storage options. **Water Conservation:** Install low-flow fixtures, fix leaks promptly, and consider rainwater harvesting. Drought-resistant landscaping reduces outdoor water needs. **Sustainable Materials:** Choose non-toxic, durable materials for any renovations. Consider recycled content, local sourcing, and end-of-life recyclability.',
      tags: ['home-efficiency', 'renewable-energy', 'water-conservation', 'sustainable-materials'],
      readTime: '18 min',
      difficulty: 'intermediate'
    },
    {
      id: 'sustainable-transportation-planning',
      title: 'Sustainable Transportation and Mobility Planning',
      type: 'guide',
      excerpt: 'Complete guide to reducing transportation emissions through **active transport**, **public transit**, **electric vehicles**, and **travel optimization**.',
      content: 'Transportation often represents the largest portion of personal carbon footprints. **Active Transportation:** Walking and cycling provide health benefits while eliminating emissions. Plan safe routes, invest in proper equipment, and prepare for weather conditions. **Public Transit Optimization:** Learn routes, schedules, and multimodal connections. Many apps can optimize public transit trips and combine different transportation modes. **Electric and Efficient Vehicles:** If vehicle ownership is necessary, research electric, hybrid, or highly efficient options. Consider total cost of ownership including fuel, maintenance, and incentives. **Travel Behavior Changes:** Combine trips, work remotely when possible, and choose direct flights for necessary air travel. Consider slow travel and local vacation alternatives.',
      tags: ['sustainable-transport', 'electric-vehicles', 'public-transit', 'active-transportation'],
      readTime: '16 min',
      difficulty: 'beginner'
    },
    {
      id: 'conscious-consumption-guide',
      title: 'Conscious Consumption and Circular Economy Guide',
      type: 'guide',
      excerpt: 'Strategies for sustainable purchasing including **circular economy principles**, **ethical brands**, **waste reduction**, and **mindful consumption**.',
      content: 'Conscious consumption reduces environmental impact while often improving quality of life. **Mindful Purchasing:** Practice the 24-48 hour rule before non-essential purchases. Ask "Do I need this?" and "Will this add value to my life?" **Circular Economy Participation:** Buy secondhand first, repair instead of replacing, and share/borrow tools and equipment. Participate in buy-nothing groups and tool libraries. **Sustainable Brand Research:** Look for B-Corp certification, transparent supply chains, fair labor practices, and environmental commitments. Support companies aligned with your values. **Packaging Reduction:** Shop with reusable bags and containers, buy in bulk, choose minimal packaging, and avoid single-use items when possible.',
      tags: ['conscious-consumption', 'circular-economy', 'sustainable-brands', 'waste-reduction'],
      readTime: '22 min',
      difficulty: 'intermediate'
    },
    {
      id: 'sustainable-food-systems',
      title: 'Sustainable Food Systems and Plant-Forward Eating',
      type: 'guide',
      excerpt: 'Complete guide to sustainable eating including **plant-based nutrition**, **local food systems**, **seasonal eating**, and **food waste reduction**.',
      content: 'Food choices significantly impact environmental sustainability and personal health. **Plant-Forward Eating:** Gradually increase vegetables, legumes, whole grains, and nuts while reducing animal products. Focus on nutrient density and protein variety from plant sources. **Local and Seasonal Eating:** Learn your region\'s seasonal produce calendar, shop farmers markets, and preserve seasonal abundance. Local food reduces transportation emissions and supports community economy. **Food Waste Reduction:** Plan meals, store food properly, use leftovers creatively, and compost scraps. Food waste contributes significantly to greenhouse gas emissions. **Sustainable Sourcing:** Choose organic when possible (especially for dirty dozen), support regenerative agriculture, and consider the true cost of cheap food on environment and labor.',
      tags: ['sustainable-food', 'plant-based-eating', 'local-food-systems', 'food-waste-reduction'],
      readTime: '24 min',
      difficulty: 'intermediate'
    }
  ]
};

export const creativeProjectTemplate: GuidanceTemplate = {
  id: 'creative-project',
  title: 'Creative Project & Artistic Development',
  description: 'Develop and execute creative projects while building artistic skills and vision',
  category: 'creative-arts',
  icon: '🎨',
  sections: [
    {
      id: 'creative-vision-conceptualization',
      title: 'Creative Vision & Conceptualization',
      order: 1,
      reflectionPrompts: [
        {
          id: 'artistic-vision-definition',
          prompt: 'What is your unique artistic vision and creative voice? Define what makes your work distinctive.',
          category: 'planning',
          helpText: 'Reflect on your artistic influences, personal experiences, themes you explore, aesthetic preferences, message you want to convey, and what sets your work apart.'
        },
        {
          id: 'project-concept-development',
          prompt: 'What specific creative project are you developing? Articulate the core concept, theme, and artistic intent.',
          category: 'planning',
          helpText: 'Define project scope, central themes, target audience, artistic medium, conceptual framework, emotional impact goals, and how it fits your artistic evolution.'
        },
        {
          id: 'inspiration-research-process',
          prompt: 'How will you conduct research and gather inspiration for your creative project?',
          category: 'research',
          helpText: 'Explore artistic references, historical contexts, contemporary practitioners, cultural influences, personal experiences, experimental techniques, collaboration opportunities.'
        },
        {
          id: 'creative-goals-objectives',
          prompt: 'What are your specific creative and professional goals for this project?',
          category: 'planning',
          helpText: 'Consider artistic growth, skill development, audience engagement, career advancement, exhibition opportunities, sales goals, critical recognition, personal fulfillment.'
        },
        {
          id: 'artistic-constraints-parameters',
          prompt: 'What creative constraints or parameters will guide your project development?',
          category: 'planning',
          helpText: 'Define medium limitations, time constraints, budget restrictions, space requirements, technical specifications, stylistic boundaries, conceptual focus areas.'
        },
        {
          id: 'success-metrics-evaluation',
          prompt: 'How will you measure success and evaluate the impact of your creative work?',
          category: 'planning',
          helpText: 'Consider artistic achievement, audience response, critical reception, personal growth, technical mastery, emotional impact, professional advancement, financial outcomes.'
        }
      ]
    },
    {
      id: 'project-planning-timeline',
      title: 'Project Planning & Timeline Development',
      order: 2,
      reflectionPrompts: [
        {
          id: 'project-scope-breakdown',
          prompt: 'How will you break down your creative project into manageable phases and deliverables?',
          category: 'planning',
          helpText: 'Identify pre-production, production, post-production phases, key deliverables, dependencies between tasks, critical path elements, quality checkpoints.'
        },
        {
          id: 'timeline-milestone-planning',
          prompt: 'What is your realistic timeline with key milestones and deadlines?',
          category: 'planning',
          helpText: 'Set project start/end dates, major milestones, review points, exhibition deadlines, buffer time for revisions, seasonal considerations, personal schedule integration.'
        },
        {
          id: 'resource-requirements-planning',
          prompt: 'What resources, materials, and tools do you need for your creative project?',
          category: 'planning',
          helpText: 'List art supplies, equipment, software, workspace needs, collaboration requirements, technical assistance, reference materials, research access.'
        },
        {
          id: 'workflow-process-design',
          prompt: 'How will you structure your creative workflow and daily/weekly working process?',
          category: 'planning',
          helpText: 'Design productive work sessions, creative routines, documentation practices, iteration cycles, feedback integration, motivation maintenance, distraction management.'
        },
        {
          id: 'collaboration-team-coordination',
          prompt: 'Who will you collaborate with, and how will you coordinate team efforts?',
          category: 'planning',
          helpText: 'Identify collaborators, define roles and responsibilities, establish communication protocols, set collaboration schedules, plan credit sharing, manage creative differences.'
        },
        {
          id: 'contingency-risk-planning',
          prompt: 'What potential challenges might arise, and how will you address them?',
          category: 'planning',
          helpText: 'Anticipate technical difficulties, creative blocks, timeline delays, budget overruns, health issues, equipment failures, collaboration challenges, market changes.'
        }
      ]
    },
    {
      id: 'skill-development-technique',
      title: 'Skill Development & Technique Mastery',
      order: 3,
      reflectionPrompts: [
        {
          id: 'current-skill-assessment',
          prompt: 'What are your current technical skills and artistic abilities? Conduct an honest self-assessment.',
          category: 'research',
          helpText: 'Evaluate drawing, painting, digital skills, craftsmanship, composition, color theory, technique mastery, tool proficiency, artistic knowledge, creative problem-solving.'
        },
        {
          id: 'skill-gap-identification',
          prompt: 'What new skills do you need to develop to successfully execute your creative project?',
          category: 'research',
          helpText: 'Identify technical techniques, software proficiency, artistic methods, business skills, presentation abilities, digital literacy, collaboration skills needed.'
        },
        {
          id: 'learning-development-plan',
          prompt: 'How will you acquire new skills and improve existing ones during this project?',
          category: 'planning',
          helpText: 'Plan online courses, workshops, mentorship, practice schedules, experimentation time, peer learning, tutorial resources, formal education options.'
        },
        {
          id: 'practice-experimentation-schedule',
          prompt: 'How will you structure regular practice and experimentation to develop your craft?',
          category: 'planning',
          helpText: 'Set daily/weekly practice routines, experiment with new techniques, study master works, create skill-building exercises, document progress, seek feedback.'
        },
        {
          id: 'technique-mastery-goals',
          prompt: 'What specific techniques do you want to master by the end of this project?',
          category: 'planning',
          helpText: 'Define measurable technique goals, complexity levels to achieve, quality standards, style development objectives, innovative approaches to explore.'
        },
        {
          id: 'creative-challenge-pushing-boundaries',
          prompt: 'How will you push yourself creatively and step outside your comfort zone?',
          category: 'consideration',
          helpText: 'Plan experimental approaches, unconventional techniques, cross-disciplinary exploration, risk-taking in style, collaborative challenges, conceptual stretching.'
        }
      ]
    },
    {
      id: 'creative-process-workflow',
      title: 'Creative Process & Workflow Optimization',
      order: 4,
      reflectionPrompts: [
        {
          id: 'creative-environment-setup',
          prompt: 'How will you optimize your creative workspace and environment for productivity?',
          category: 'planning',
          helpText: 'Design physical workspace, lighting, organization systems, tool accessibility, inspiration boards, comfort considerations, distraction elimination, technology setup.'
        },
        {
          id: 'creative-routine-establishment',
          prompt: 'What daily and weekly creative routines will support consistent progress?',
          category: 'planning',
          helpText: 'Plan optimal working hours, warm-up activities, break schedules, creative rituals, energy management, motivation practices, routine flexibility.'
        },
        {
          id: 'documentation-archival-system',
          prompt: 'How will you document your creative process and archive your work?',
          category: 'planning',
          helpText: 'Create system for progress photos, sketches, notes, version control, backup procedures, portfolio organization, reflection journals, process videos.'
        },
        {
          id: 'iteration-revision-approach',
          prompt: 'How will you approach iteration, revision, and refinement of your creative work?',
          category: 'planning',
          helpText: 'Plan review cycles, feedback integration, version comparison, quality assessment criteria, when to stop revising, fresh perspective strategies.'
        },
        {
          id: 'creative-block-management',
          prompt: 'What strategies will you use to overcome creative blocks and maintain momentum?',
          category: 'planning',
          helpText: 'Develop block-breaking techniques, inspiration renewal methods, project switching strategies, rest and recovery practices, community support, perspective shifts.'
        },
        {
          id: 'quality-control-standards',
          prompt: 'What quality control processes will ensure your work meets your artistic standards?',
          category: 'planning',
          helpText: 'Establish quality criteria, review processes, peer feedback systems, technical checks, aesthetic evaluation methods, completion standards.'
        }
      ]
    },
    {
      id: 'presentation-exhibition-sharing',
      title: 'Presentation, Exhibition & Sharing',
      order: 5,
      reflectionPrompts: [
        {
          id: 'audience-identification-targeting',
          prompt: 'Who is your target audience, and how will you reach them effectively?',
          category: 'planning',
          helpText: 'Define primary and secondary audiences, understand their preferences, identify where they gather, plan targeted outreach, consider demographic and psychographic factors.'
        },
        {
          id: 'presentation-format-selection',
          prompt: 'What formats and venues will you use to present your creative work?',
          category: 'planning',
          helpText: 'Consider gallery exhibitions, online portfolios, social media, artist talks, publications, performances, installations, digital platforms, community events.'
        },
        {
          id: 'portfolio-curation-strategy',
          prompt: 'How will you curate and present your work in portfolio format?',
          category: 'planning',
          helpText: 'Select strongest pieces, create cohesive narrative, design professional presentation, write artist statements, organize by themes or chronology, consider different contexts.'
        },
        {
          id: 'marketing-promotion-planning',
          prompt: 'What marketing and promotion strategies will increase visibility for your work?',
          category: 'planning',
          helpText: 'Plan social media strategy, press releases, networking events, email newsletters, collaborations, influencer partnerships, community engagement, SEO optimization.'
        },
        {
          id: 'exhibition-logistics-preparation',
          prompt: 'What logistical preparations are needed for exhibiting or presenting your work?',
          category: 'planning',
          helpText: 'Plan installation requirements, shipping/transport, insurance, pricing, sales processes, opening events, gallery relationships, technical specifications.'
        },
        {
          id: 'feedback-reception-management',
          prompt: 'How will you gather and respond to feedback and criticism of your work?',
          category: 'consideration',
          helpText: 'Create feedback collection systems, prepare for constructive criticism, plan response strategies, separate personal worth from work critique, use feedback for growth.'
        }
      ]
    },
    {
      id: 'artistic-career-development',
      title: 'Artistic Career & Professional Development',
      order: 6,
      reflectionPrompts: [
        {
          id: 'career-vision-long-term-goals',
          prompt: 'What is your long-term vision for your artistic career and professional development?',
          category: 'planning',
          helpText: 'Define 5-10 year career goals, desired recognition level, income objectives, artistic legacy, exhibition aspirations, teaching goals, community impact.'
        },
        {
          id: 'professional-network-building',
          prompt: 'How will you build and maintain professional relationships in the art world?',
          category: 'planning',
          helpText: 'Connect with galleries, curators, other artists, collectors, critics, mentors. Plan networking events, professional associations, online communities, collaboration opportunities.'
        },
        {
          id: 'financial-sustainability-planning',
          prompt: 'How will you create financial sustainability through your creative work?',
          category: 'planning',
          helpText: 'Explore multiple revenue streams: sales, commissions, teaching, grants, residencies, licensing, prints, workshops, speaking engagements, part-time work balance.'
        },
        {
          id: 'professional-development-growth',
          prompt: 'What professional development opportunities will advance your artistic career?',
          category: 'planning',
          helpText: 'Consider residencies, workshops, conferences, mentorship programs, graduate education, professional associations, skill certifications, industry knowledge.'
        },
        {
          id: 'brand-reputation-management',
          prompt: 'How will you build and maintain your artistic brand and professional reputation?',
          category: 'planning',
          helpText: 'Develop consistent visual identity, professional communication style, reliable work quality, ethical practices, community engagement, thought leadership.'
        },
        {
          id: 'legacy-impact-contribution',
          prompt: 'What lasting impact do you want to make through your creative work and artistic practice?',
          category: 'consideration',
          helpText: 'Consider cultural contributions, social impact, educational influence, inspiring others, preserving traditions, innovation advancement, community building.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'creative-project-planning-guide',
      title: 'Complete Creative Project Planning and Management',
      type: 'guide',
      excerpt: 'Comprehensive guide to planning creative projects including **concept development**, **timeline management**, **resource planning**, and **workflow optimization**.',
      content: 'Successful creative projects require structured planning alongside artistic intuition. **Concept Development:** Start with clear artistic vision, research thoroughly, define project scope, and establish creative parameters. Document your conceptual framework and artistic intent. **Timeline Management:** Break projects into phases, set realistic milestones, build in buffer time for creative exploration and revisions. Balance structure with creative flexibility. **Resource Planning:** Inventory needed materials, tools, space, and collaboration requirements. Budget for quality supplies and consider sustainability. **Workflow Optimization:** Design productive creative routines, establish documentation practices, plan iteration cycles, and create systems for maintaining momentum through challenges.',
      tags: ['project-planning', 'creative-management', 'workflow-optimization', 'artistic-development'],
      readTime: '25 min',
      difficulty: 'intermediate'
    },
    {
      id: 'artistic-skill-development-strategies',
      title: 'Artistic Skill Development and Technique Mastery',
      type: 'guide',
      excerpt: 'Strategies for developing artistic skills including **practice methodologies**, **learning resources**, **experimentation techniques**, and **skill assessment**.',
      content: 'Continuous skill development is essential for artistic growth and project success. **Practice Methodologies:** Implement deliberate practice, focus on weakness areas, study master works, and maintain regular practice schedules. Balance technical skill building with creative exploration. **Learning Resources:** Utilize online courses, workshops, mentorship, peer learning, and self-directed study. Mix formal instruction with experimental learning. **Experimentation Techniques:** Push creative boundaries through material exploration, style variation, cross-disciplinary inspiration, and innovative tool usage. Document experiments for future reference. **Skill Assessment:** Regularly evaluate technical proficiency, seek feedback, compare to artistic goals, and adjust learning priorities based on project needs.',
      tags: ['skill-development', 'artistic-technique', 'learning-strategies', 'creative-growth'],
      readTime: '20 min',
      difficulty: 'intermediate'
    },
    {
      id: 'creative-portfolio-presentation',
      title: 'Creative Portfolio Development and Presentation',
      type: 'guide',
      excerpt: 'Complete guide to portfolio creation including **curation strategies**, **presentation formats**, **artist statements**, and **professional presentation**.',
      content: 'Strong portfolio presentation is crucial for artistic career development and project sharing. **Curation Strategies:** Select work that demonstrates range and depth, tells coherent artistic story, and targets specific audiences. Quality over quantity - choose strongest representative pieces. **Presentation Formats:** Master both digital and physical presentation formats. Consider website design, social media presence, print portfolios, and exhibition preparation. **Artist Statements:** Write clear, compelling statements that explain artistic vision, process, and intent. Tailor language to different audiences while maintaining authentic voice. **Professional Presentation:** Maintain high-quality documentation, consistent branding, and professional communication. Consider installation, lighting, and contextual factors.',
      tags: ['portfolio-development', 'artistic-presentation', 'professional-branding', 'curation'],
      readTime: '22 min',
      difficulty: 'intermediate'
    },
    {
      id: 'sustainable-creative-career',
      title: 'Building a Sustainable Creative Career',
      type: 'guide',
      excerpt: 'Strategies for career sustainability including **multiple revenue streams**, **professional networking**, **financial planning**, and **work-life balance**.',
      content: 'Creating sustainable creative careers requires balancing artistic integrity with practical considerations. **Multiple Revenue Streams:** Diversify income through art sales, commissions, teaching, workshops, licensing, grants, and related services. Build portfolio career combining creative work with stable income sources. **Professional Networking:** Build genuine relationships with galleries, curators, fellow artists, collectors, and industry professionals. Participate in communities, collaborate on projects, and maintain long-term connections. **Financial Planning:** Develop pricing strategies, understand market dynamics, plan for irregular income, and build emergency funds. Consider business structure, taxes, and retirement planning. **Work-Life Balance:** Establish sustainable working practices, maintain creative motivation, prevent burnout, and nurture personal relationships while building professional success.',
      tags: ['creative-career', 'financial-sustainability', 'professional-networking', 'artist-business'],
      readTime: '28 min',
      difficulty: 'expert'
    },
    {
      id: 'creative-process-optimization',
      title: 'Creative Process and Workflow Optimization',
      type: 'guide',
      excerpt: 'Optimize creative workflows including **environment design**, **routine development**, **creative block management**, and **quality control**.',
      content: 'Optimized creative processes enhance both productivity and artistic quality. **Environment Design:** Create inspiring, functional workspace with proper lighting, organization, and tool accessibility. Minimize distractions while maintaining inspiration sources. **Routine Development:** Establish sustainable daily and weekly creative routines that honor natural energy patterns and creative cycles. Balance structure with spontaneity. **Creative Block Management:** Develop strategies for overcoming blocks including environmental changes, perspective shifts, material experimentation, and inspiration renewal. Recognize blocks as normal creative process elements. **Quality Control:** Implement review processes, feedback systems, and quality standards while maintaining creative flow. Know when to continue refining versus accepting completion.',
      tags: ['creative-process', 'workflow-optimization', 'productivity', 'creative-blocks'],
      readTime: '18 min',
      difficulty: 'beginner'
    }
  ]
};

export const digitalMarketingBrandTemplate: GuidanceTemplate = {
  id: 'digital-marketing-brand',
  title: 'Digital Marketing & Brand Strategy',
  category: 'business-marketing',
  icon: '📱',
  sections: [
    {
      id: 'brand-foundation-identity',
      title: 'Brand Foundation & Identity',
      order: 1,
      reflectionPrompts: [
        {
          id: 'brand-mission-vision',
          prompt: 'What is your brand\'s core mission and vision, and how do they differentiate you from competitors?',
          category: 'planning',
          helpText: 'Define your brand\'s purpose (mission) and future aspirations (vision). Consider what unique value you provide, what problems you solve, and how you want to be perceived. Example: "Mission: Empower small businesses with accessible marketing tools. Vision: Become the leading platform for democratized marketing automation." Include emotional and functional benefits you offer.'
        },
        {
          id: 'brand-values-personality',
          prompt: 'What are your brand\'s core values and personality traits, and how should they be expressed?',
          category: 'planning',
          helpText: 'Identify 3-5 core values that guide decisions and 5-7 personality traits that define your brand\'s character. Consider: Are you professional or casual? Traditional or innovative? Friendly or authoritative? Example values: Innovation, transparency, customer-centricity. Example traits: Approachable, reliable, creative, forward-thinking. These should align with your target audience\'s preferences.'
        },
        {
          id: 'target-audience-personas',
          prompt: 'Who is your ideal customer, and what are their specific demographics, psychographics, and pain points?',
          category: 'research',
          helpText: 'Create detailed buyer personas including: Demographics (age, location, income, job title), psychographics (values, interests, lifestyle), pain points (challenges, frustrations), goals (what they want to achieve), preferred communication channels, buying behaviors, and decision-making factors. Consider primary and secondary audiences, and how they differ.'
        },
        {
          id: 'competitive-positioning',
          prompt: 'How does your brand position against competitors, and what is your unique value proposition?',
          category: 'research',
          helpText: 'Analyze 3-5 direct and indirect competitors: their positioning, messaging, strengths, weaknesses, and market gaps. Define your unique value proposition (UVP) - the specific benefit that makes you different and better. Use frameworks like: "For [target audience], who [need/problem], our [product/service] provides [key benefit] because [proof/differentiator]."'
        },
        {
          id: 'brand-messaging-voice',
          prompt: 'What is your brand voice and messaging framework across different contexts and audiences?',
          category: 'planning',
          helpText: 'Define consistent brand voice attributes (tone, language style, vocabulary) and create messaging hierarchy: tagline, elevator pitch, key messages for different audiences, value propositions, and proof points. Consider how messaging adapts for: website copy, social media, email marketing, sales conversations, customer service, and crisis communication.'
        },
        {
          id: 'visual-brand-guidelines',
          prompt: 'What visual elements define your brand identity, and how will you ensure consistency?',
          category: 'planning',
          helpText: 'Establish visual identity system: logo variations and usage rules, color palette (primary, secondary, accent colors with hex codes), typography (headings, body text, special fonts), imagery style (photography, illustrations, graphics), iconography, layout principles, and brand applications. Create brand guidelines document covering logo placement, minimum sizes, color combinations, and what NOT to do.'
        }
      ]
    },
    {
      id: 'digital-marketing-strategy',
      title: 'Digital Marketing Strategy & Planning',
      order: 2,
      reflectionPrompts: [
        {
          id: 'marketing-objectives-goals',
          prompt: 'What are your specific, measurable marketing objectives for the next 12 months?',
          category: 'planning',
          helpText: 'Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) across key areas: brand awareness (reach, impressions, brand recognition), lead generation (qualified leads, conversion rates), customer acquisition (new customers, cost per acquisition), revenue (sales targets, average order value), engagement (social followers, email subscribers), and retention (repeat purchase rate, customer lifetime value).'
        },
        {
          id: 'marketing-budget-allocation',
          prompt: 'How will you allocate your marketing budget across different channels and activities?',
          category: 'planning',
          helpText: 'Distribute budget across: paid advertising (Google Ads, social media ads, display), content creation (graphic design, video production, copywriting), tools and software (marketing automation, analytics, design), organic marketing (SEO, social media management), and experimentation (testing new channels, campaigns). Consider 70% proven channels, 20% emerging opportunities, 10% experimental initiatives.'
        },
        {
          id: 'channel-strategy-selection',
          prompt: 'Which digital marketing channels will you prioritize based on your audience and goals?',
          category: 'planning',
          helpText: 'Evaluate channels based on audience presence, content fit, resource requirements, and ROI potential: Search engine marketing (Google Ads, SEO), social media (Facebook, Instagram, LinkedIn, TikTok, Twitter), email marketing, content marketing (blog, video, podcasts), influencer partnerships, affiliate marketing, and retargeting. Start with 2-3 channels to master before expanding.'
        },
        {
          id: 'content-marketing-strategy',
          prompt: 'What content strategy will you use to attract, engage, and convert your target audience?',
          category: 'planning',
          helpText: 'Develop content pillars (3-5 main themes), content types (blog posts, videos, infographics, podcasts, social posts), content calendar (posting frequency, seasonal themes), content distribution strategy, and content repurposing plan. Consider: educational content (how-tos, tips), entertaining content (behind-the-scenes, stories), and promotional content (products, testimonials). Follow 80/20 rule: 80% value-driven, 20% promotional.'
        },
        {
          id: 'customer-journey-mapping',
          prompt: 'How will you map and optimize the customer journey from awareness to purchase and beyond?',
          category: 'planning',
          helpText: 'Map customer touchpoints across stages: Awareness (discovery channels, first impressions), Consideration (research behavior, comparison factors), Decision (purchase triggers, objection handling), and Retention (onboarding, ongoing engagement, advocacy). Identify content needs, pain points, and optimization opportunities at each stage. Create nurturing sequences for different buyer personas and purchase cycles.'
        },
        {
          id: 'marketing-automation-systems',
          prompt: 'What marketing automation and technology stack will support your strategy?',
          category: 'planning',
          helpText: 'Plan technology ecosystem: CRM (customer relationship management), email marketing platform, social media management tools, analytics and reporting, content management system, marketing automation workflows, lead scoring, and integration requirements. Consider: ease of use, scalability, budget constraints, team capabilities, and data privacy compliance. Start with essential tools and scale up.'
        }
      ]
    },
    {
      id: 'content-creation-management',
      title: 'Content Creation & Management',
      order: 3,
      reflectionPrompts: [
        {
          id: 'content-audit-analysis',
          prompt: 'What existing content do you have, and how is it performing against your goals?',
          category: 'research',
          helpText: 'Inventory all existing content: website pages, blog posts, social media content, videos, downloads, email campaigns. Analyze performance metrics: page views, engagement rates, conversion rates, time on page, bounce rate, social shares. Identify top-performing content, content gaps, outdated material, and repurposing opportunities. Categorize content by funnel stage, topic, and format.'
        },
        {
          id: 'editorial-calendar-planning',
          prompt: 'How will you plan, organize, and schedule your content creation and publication?',
          category: 'planning',
          helpText: 'Create comprehensive editorial calendar including: content themes by month/quarter, posting frequency by channel, seasonal and promotional content, content formats and types, responsibility assignments, production deadlines, and approval processes. Consider: industry events, holidays, product launches, and audience behavior patterns. Plan content 2-3 months in advance with flexibility for trending topics.'
        },
        {
          id: 'content-production-workflow',
          prompt: 'What processes and workflows will ensure efficient, high-quality content production?',
          category: 'planning',
          helpText: 'Establish content creation workflow: ideation and research process, content brief templates, creation guidelines and brand standards, review and approval process, asset management system, and quality control checkpoints. Define roles: content strategist, writers, designers, videographers, editors, and approvers. Create templates for different content types and style guides for consistency.'
        },
        {
          id: 'visual-content-strategy',
          prompt: 'How will you create and manage visual content that aligns with your brand and engages your audience?',
          category: 'planning',
          helpText: 'Develop visual content strategy: photography style and sources (stock, original, user-generated), graphic design templates and tools, video content approach (production quality, length, format), visual storytelling techniques, and brand consistency guidelines. Consider: platform-specific requirements, accessibility standards, file organization system, and content licensing requirements.'
        },
        {
          id: 'content-optimization-seo',
          prompt: 'How will you optimize your content for search engines while maintaining user value?',
          category: 'planning',
          helpText: 'Implement SEO content strategy: keyword research and integration, meta descriptions and title tags, header structure (H1, H2, H3), internal and external linking, image optimization (alt text, file size), content length and depth, featured snippets optimization, and local SEO considerations. Balance SEO requirements with readability and user experience. Use tools for keyword tracking and content performance.'
        },
        {
          id: 'content-distribution-amplification',
          prompt: 'What strategies will you use to distribute and amplify your content across channels?',
          category: 'planning',
          helpText: 'Plan content distribution: owned channels (website, email, social profiles), earned channels (media coverage, shares, mentions), paid channels (promoted posts, native advertising), partner channels (guest posting, collaborations), and content syndication opportunities. Develop content repurposing strategy: blog to social posts, video to podcast, webinar to multiple formats. Create content promotion checklist and timing strategies.'
        }
      ]
    },
    {
      id: 'social-media-community',
      title: 'Social Media & Community Building',
      order: 4,
      reflectionPrompts: [
        {
          id: 'platform-selection-strategy',
          prompt: 'Which social media platforms will you prioritize based on your audience and business goals?',
          category: 'planning',
          helpText: 'Evaluate platforms based on: audience demographics and behavior, content format alignment, business objectives, resource requirements, and competitive presence. Consider: Facebook (community building, advertising), Instagram (visual storytelling, younger demographics), LinkedIn (B2B, professional networking), TikTok (Gen Z, creative content), Twitter (real-time engagement, thought leadership), YouTube (long-form video, education), Pinterest (visual discovery, lifestyle brands).'
        },
        {
          id: 'social-content-strategy',
          prompt: 'What content strategy will you use to engage your audience on each social platform?',
          category: 'planning',
          helpText: 'Develop platform-specific content strategies: posting frequency, content mix (educational, entertaining, promotional), visual style, caption approach, hashtag strategy, and engagement tactics. Consider: platform algorithms, optimal posting times, content formats (Stories, Reels, carousels, live videos), and cross-platform content adaptation. Create content pillars that align with brand values and audience interests.'
        },
        {
          id: 'community-engagement-management',
          prompt: 'How will you actively engage with your community and build meaningful relationships?',
          category: 'planning',
          helpText: 'Establish engagement practices: response time targets for comments and messages, community management guidelines, engagement triggers and conversation starters, user-generated content encouragement, community challenges and campaigns, and relationship building with key followers and influencers. Create engagement calendar with daily/weekly community activities and monitor brand mentions across platforms.'
        },
        {
          id: 'social-media-advertising',
          prompt: 'What social media advertising strategy will you use to reach new audiences and drive conversions?',
          category: 'planning',
          helpText: 'Plan paid social strategy: campaign objectives (awareness, traffic, leads, sales), target audience definition, ad formats and creative approach, budget allocation by platform and campaign, A/B testing plan, and conversion tracking setup. Consider: lookalike audiences, retargeting strategies, seasonal campaigns, and campaign optimization based on performance metrics. Start with small budgets to test and scale successful campaigns.'
        },
        {
          id: 'influencer-partnership-strategy',
          prompt: 'How will you identify and collaborate with influencers or brand advocates?',
          category: 'planning',
          helpText: 'Develop influencer strategy: influencer tier selection (nano, micro, macro, mega), partnership types (sponsorships, collaborations, affiliate programs), campaign objectives and KPIs, outreach process, contract and legal considerations, and performance measurement. Research relevant influencers in your niche, analyze their engagement rates and audience alignment, and create partnership guidelines and expectations.'
        },
        {
          id: 'social-listening-monitoring',
          prompt: 'How will you monitor your brand reputation and industry conversations on social media?',
          category: 'planning',
          helpText: 'Implement social listening strategy: brand mention monitoring, competitor analysis, industry trend tracking, customer sentiment analysis, crisis management protocols, and opportunity identification. Set up monitoring tools for: brand name variations, product names, industry keywords, competitor mentions, and relevant hashtags. Create response protocols for different scenarios: positive mentions, complaints, crisis situations, and engagement opportunities.'
        }
      ]
    },
    {
      id: 'paid-advertising-campaigns',
      title: 'Paid Advertising & Campaign Management',
      order: 5,
      reflectionPrompts: [
        {
          id: 'advertising-objectives-strategy',
          prompt: 'What are your paid advertising objectives, and how will you structure your campaigns?',
          category: 'planning',
          helpText: 'Define campaign objectives: brand awareness (reach, impressions), traffic generation (website visits, page views), lead generation (sign-ups, downloads), sales (purchases, revenue), or app installs. Structure campaigns by: objective, audience segment, product/service, geographic location, or customer journey stage. Plan campaign hierarchy: campaigns, ad sets, and individual ads with clear naming conventions and organization.'
        },
        {
          id: 'target-audience-segmentation',
          prompt: 'How will you define and segment your target audiences for different campaigns?',
          category: 'planning',
          helpText: 'Create audience segments: demographics (age, gender, location, income), interests (hobbies, preferences, behaviors), custom audiences (website visitors, email subscribers, customer lists), lookalike audiences (similar to existing customers), and behavioral targeting (purchase history, engagement level). Test different audience sizes and combinations, and create exclusion lists to prevent overlap and budget waste.'
        },
        {
          id: 'ad-creative-development',
          prompt: 'What approach will you take for creating compelling ad creatives that drive results?',
          category: 'planning',
          helpText: 'Develop creative strategy: visual style (imagery, colors, branding), messaging approach (headlines, descriptions, calls-to-action), ad format selection (image, video, carousel, collection), and creative testing plan. Create multiple creative variations for A/B testing: different headlines, images, value propositions, and CTAs. Consider platform-specific creative requirements and best practices for each advertising channel.'
        },
        {
          id: 'budget-bidding-optimization',
          prompt: 'How will you allocate and optimize your advertising budget across campaigns and platforms?',
          category: 'planning',
          helpText: 'Plan budget strategy: total advertising budget, allocation by platform and campaign objective, daily vs. lifetime budgets, bidding strategies (automatic vs. manual, CPC, CPM, CPA), and budget optimization approach. Start with smaller budgets for testing, then scale successful campaigns. Monitor key metrics: cost per click, cost per acquisition, return on ad spend (ROAS), and adjust budgets based on performance.'
        },
        {
          id: 'landing-page-conversion',
          prompt: 'How will you optimize landing pages and conversion paths for your advertising campaigns?',
          category: 'planning',
          helpText: 'Design conversion-focused landing pages: clear value proposition, compelling headlines, benefit-focused copy, social proof elements, optimized forms, strong call-to-action buttons, and mobile responsiveness. Ensure message match between ads and landing pages, minimize page load times, and reduce friction in conversion process. Create separate landing pages for different campaigns and audience segments when necessary.'
        },
        {
          id: 'campaign-measurement-optimization',
          prompt: 'What metrics will you track, and how will you continuously optimize campaign performance?',
          category: 'planning',
          helpText: 'Define KPIs: click-through rate (CTR), conversion rate, cost per acquisition (CPA), return on ad spend (ROAS), lifetime value to acquisition cost ratio (LTV:CAC), and quality score. Set up tracking: conversion tracking, UTM parameters, attribution modeling, and cross-platform measurement. Create optimization schedule: daily budget monitoring, weekly performance reviews, monthly strategic adjustments, and quarterly campaign restructuring.'
        }
      ]
    },
    {
      id: 'analytics-performance-optimization',
      title: 'Analytics & Performance Optimization',
      order: 6,
      reflectionPrompts: [
        {
          id: 'analytics-setup-tracking',
          prompt: 'What analytics tools and tracking systems will you implement to measure performance?',
          category: 'planning',
          helpText: 'Set up comprehensive tracking: Google Analytics 4 (website behavior, conversions), Google Tag Manager (tag management), social media analytics (platform insights), email marketing analytics, advertising platform analytics, and CRM tracking. Implement conversion tracking, goal setup, audience segmentation, and custom events. Ensure GDPR compliance and privacy considerations in tracking implementation.'
        },
        {
          id: 'kpi-dashboard-reporting',
          prompt: 'What key performance indicators will you track, and how will you report on progress?',
          category: 'planning',
          helpText: 'Define KPI hierarchy: business objectives (revenue, growth), marketing objectives (leads, conversions), channel-specific metrics (reach, engagement), and operational metrics (cost efficiency, ROI). Create dashboard views: executive summary (key metrics overview), channel performance (detailed analysis), campaign performance (individual campaign results), and real-time monitoring (daily tracking). Set up automated reporting schedules and alert systems.'
        },
        {
          id: 'data-analysis-insights',
          prompt: 'How will you analyze data to uncover actionable insights and opportunities?',
          category: 'planning',
          helpText: 'Establish analysis processes: regular data reviews (daily, weekly, monthly), trend analysis, cohort analysis, funnel analysis, attribution modeling, and competitive benchmarking. Look for patterns in: customer behavior, content performance, channel effectiveness, seasonal trends, and conversion paths. Create hypothesis-driven testing approach and document insights for future strategy development.'
        },
        {
          id: 'ab-testing-experimentation',
          prompt: 'What testing and experimentation framework will you use to improve performance?',
          category: 'planning',
          helpText: 'Design testing strategy: A/B testing methodology, multivariate testing for complex scenarios, testing calendar and prioritization, statistical significance requirements, and testing tools and platforms. Test elements: headlines, images, calls-to-action, landing page layouts, email subject lines, ad creative, and campaign targeting. Document test results, winning variations, and learnings for future optimization.'
        },
        {
          id: 'customer-lifecycle-analysis',
          prompt: 'How will you analyze and optimize the complete customer lifecycle and journey?',
          category: 'research',
          helpText: 'Map customer journey analytics: acquisition channels, engagement touchpoints, conversion paths, retention metrics, and lifetime value calculation. Analyze: customer acquisition cost by channel, customer lifetime value by segment, churn rates and patterns, upselling opportunities, and referral behavior. Identify optimization opportunities at each stage and create targeted interventions for improvement.'
        },
        {
          id: 'performance-optimization-iteration',
          prompt: 'How will you use insights to continuously optimize and improve your marketing performance?',
          category: 'planning',
          helpText: 'Create optimization cycle: performance review process, hypothesis generation, test implementation, results analysis, and strategy iteration. Prioritize optimizations by: potential impact, resource requirements, and risk level. Document optimization efforts: what was tested, results achieved, lessons learned, and next steps. Share insights across team and update strategies based on performance data and market changes.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'digital-marketing-fundamentals',
      title: 'Digital Marketing Strategy Fundamentals',
      type: 'guide',
      excerpt: 'Master the core principles of digital marketing including **strategy development**, **channel selection**, **budget planning**, and **performance measurement**.',
      content: 'Effective digital marketing requires strategic thinking and systematic execution. **Strategy Development:** Begin with clear business objectives, target audience definition, competitive analysis, and unique value proposition. Align marketing goals with business goals using SMART criteria. **Channel Selection:** Choose channels based on audience presence, content fit, resource availability, and ROI potential. Start with 2-3 channels before expanding. **Budget Planning:** Allocate resources across organic and paid efforts, with 70% proven strategies, 20% growth opportunities, 10% experimentation. **Performance Measurement:** Implement comprehensive tracking, define KPIs, create reporting systems, and use data for continuous optimization.',
      tags: ['digital-marketing', 'strategy', 'channel-planning', 'budget-allocation'],
      readTime: '15 min',
      difficulty: 'beginner'
    },
    {
      id: 'brand-building-online',
      title: 'Building Strong Brands in Digital Spaces',
      type: 'guide',
      excerpt: 'Develop compelling brand identity including **visual systems**, **voice consistency**, **storytelling**, and **community building**.',
      content: 'Strong digital brands create emotional connections and drive business results. **Visual Systems:** Develop cohesive visual identity including logos, color palettes, typography, imagery style, and application guidelines. Ensure consistency across all touchpoints. **Voice Consistency:** Define brand personality, tone, messaging framework, and voice guidelines. Adapt voice for different platforms while maintaining core identity. **Storytelling:** Craft compelling brand narrative, share authentic stories, highlight customer success, and communicate values through content. **Community Building:** Foster genuine relationships, encourage user-generated content, respond authentically, and create shared experiences that strengthen brand connection.',
      tags: ['brand-building', 'visual-identity', 'storytelling', 'community'],
      readTime: '22 min',
      difficulty: 'intermediate'
    },
    {
      id: 'content-marketing-mastery',
      title: 'Content Marketing Strategy and Execution',
      type: 'guide',
      excerpt: 'Create content that engages and converts including **strategy development**, **production workflows**, **distribution tactics**, and **performance optimization**.',
      content: 'Effective content marketing attracts, engages, and converts target audiences through valuable information. **Strategy Development:** Define content pillars, audience needs, content formats, and distribution channels. Create editorial calendar with seasonal themes and promotional integration. **Production Workflows:** Establish ideation processes, content briefs, creation guidelines, review procedures, and asset management systems. **Distribution Tactics:** Leverage owned, earned, and paid channels. Repurpose content across formats and platforms. Optimize for search and social discovery. **Performance Optimization:** Track engagement metrics, conversion rates, and business impact. A/B test headlines, formats, and distribution timing for continuous improvement.',
      tags: ['content-marketing', 'strategy', 'production', 'distribution'],
      readTime: '25 min',
      difficulty: 'intermediate'
    },
    {
      id: 'social-media-growth',
      title: 'Social Media Growth and Engagement Strategies',
      type: 'guide',
      excerpt: 'Build engaged communities including **platform optimization**, **content creation**, **community management**, and **growth tactics**.',
      content: 'Social media success requires platform-specific strategies and authentic community building. **Platform Optimization:** Understand each platform\'s algorithm, content formats, posting times, and audience behavior. Optimize profiles with clear value propositions and compelling visuals. **Content Creation:** Develop platform-native content that provides value, entertains, or inspires. Use visual storytelling, user-generated content, and behind-the-scenes content. **Community Management:** Engage authentically with followers, respond promptly to comments, share user content, and foster discussions. **Growth Tactics:** Use relevant hashtags, collaborate with complementary brands, run contests, share valuable insights, and maintain consistency in posting and engagement.',
      tags: ['social-media', 'community-building', 'engagement', 'growth'],
      readTime: '20 min',
      difficulty: 'beginner'
    },
    {
      id: 'digital-advertising-roi',
      title: 'Maximizing ROI from Digital Advertising',
      type: 'guide',
      excerpt: 'Optimize paid advertising campaigns including **audience targeting**, **creative development**, **budget optimization**, and **conversion tracking**.',
      content: 'Successful digital advertising requires strategic planning, creative excellence, and continuous optimization. **Audience Targeting:** Use demographic, psychographic, and behavioral data to reach ideal customers. Test different audience segments and refine based on performance. **Creative Development:** Create compelling visuals and copy that resonate with target audiences. Test multiple creative variations and formats. **Budget Optimization:** Start with smaller budgets to test performance, then scale successful campaigns. Use automated bidding strategies and adjust based on conversion data. **Conversion Tracking:** Implement proper tracking systems, analyze customer journey, optimize landing pages, and calculate true ROI including lifetime value considerations.',
      tags: ['digital-advertising', 'roi-optimization', 'targeting', 'conversion-tracking'],
      readTime: '18 min',
      difficulty: 'expert'
    }
  ]
};

export const remoteWorkDigitalNomadTemplate: GuidanceTemplate = {
  id: 'remote-work-digital-nomad',
  title: 'Remote Work & Digital Nomad Lifestyle',
  category: 'lifestyle-career',
  icon: '🏖️',
  sections: [
    {
      id: 'remote-work-foundation',
      title: 'Remote Work Foundation & Setup',
      order: 1,
      reflectionPrompts: [
        {
          id: 'remote-work-readiness',
          prompt: 'What skills, mindset, and infrastructure do you need to succeed in remote work?',
          category: 'planning',
          helpText: 'Assess your current readiness: self-discipline and time management skills, communication abilities, technical proficiency, reliable internet and equipment, dedicated workspace setup, and experience with remote collaboration tools. Consider personality traits like self-motivation, independence, and comfort with digital communication. Identify gaps and create development plans.'
        },
        {
          id: 'home-office-workspace',
          prompt: 'How will you design an optimal home office and workspace for productivity and well-being?',
          category: 'planning',
          helpText: 'Plan your workspace: dedicated area or room, ergonomic furniture (desk, chair, monitor stands), proper lighting (natural light, task lighting), noise management, temperature control, and organization systems. Consider: backup power solutions, multiple monitor setup, quality webcam and microphone, and separation between work and personal spaces. Include comfort elements like plants or artwork.'
        },
        {
          id: 'technology-tools-setup',
          prompt: 'What technology stack and tools will support your remote work efficiency and collaboration?',
          category: 'planning',
          helpText: 'Build comprehensive tech setup: reliable computer with sufficient specs, backup devices, high-speed internet with backup options, cloud storage and sync, project management tools, communication platforms (Slack, Teams), video conferencing setup, password management, VPN access, and security measures. Consider mobile work setups and travel-friendly equipment.'
        },
        {
          id: 'remote-job-search',
          prompt: 'What strategy will you use to find and secure remote work opportunities?',
          category: 'planning',
          helpText: 'Develop job search approach: remote job boards (Remote.co, FlexJobs, AngelList), company websites with remote positions, networking in remote work communities, LinkedIn optimization for remote work, portfolio and skill showcasing, remote work experience highlighting, and geographic considerations. Prepare for remote-specific interview processes and salary negotiations.'
        },
        {
          id: 'routine-discipline-systems',
          prompt: 'How will you establish routines and systems to maintain productivity and discipline?',
          category: 'planning',
          helpText: 'Create structure: morning and evening routines, work schedule boundaries, break scheduling, task and project management systems, goal setting and tracking, accountability measures, and productivity metrics. Consider: time-blocking techniques, pomodoro method, deep work blocks, and systems for handling distractions and maintaining focus throughout the workday.'
        },
        {
          id: 'communication-collaboration',
          prompt: 'What communication and collaboration strategies will you use to stay connected with teams?',
          category: 'planning',
          helpText: 'Plan communication approach: regular check-in schedules, status update systems, meeting participation best practices, asynchronous communication methods, documentation and knowledge sharing, relationship building with colleagues, and cultural awareness for international teams. Establish response time expectations and availability hours across time zones.'
        }
      ]
    },
    {
      id: 'location-independence-planning',
      title: 'Location Independence & Travel Planning',
      order: 2,
      reflectionPrompts: [
        {
          id: 'nomad-destination-research',
          prompt: 'How will you research and select destinations that support your remote work needs?',
          category: 'research',
          helpText: 'Evaluate destinations based on: internet reliability and speed, cost of living and budgeting, visa requirements and work permissions, time zone considerations for client/team collaboration, safety and healthcare, coworking spaces and cafe culture, expat community and networking opportunities, and quality of life factors (weather, activities, culture). Use resources like Nomad List, local Facebook groups, and location scouting trips.'
        },
        {
          id: 'travel-logistics-planning',
          prompt: 'What systems will you use for travel planning, booking, and logistics management?',
          category: 'planning',
          helpText: 'Organize travel operations: accommodation booking strategies (long-term rentals, co-living spaces, hotels), transportation planning and budgeting, packing systems and gear optimization, travel insurance and health coverage, document organization (passports, visas, work permits), banking and financial access, and emergency planning. Create checklists and templates for consistent planning processes.'
        },
        {
          id: 'mobile-work-setup',
          prompt: 'How will you maintain productivity while working from various locations and environments?',
          category: 'planning',
          helpText: 'Design mobile work system: portable equipment and backup solutions, internet connectivity options (local SIM cards, portable hotspots), workspace evaluation and setup in new locations, noise-cancelling headphones and focus tools, backup power solutions, security measures for public WiFi, and adaptation strategies for different work environments and cultures.'
        },
        {
          id: 'visa-legal-considerations',
          prompt: 'What legal and visa considerations do you need to address for international remote work?',
          category: 'planning',
          helpText: 'Navigate legal requirements: tourist visa vs. work visa implications, digital nomad visa programs, tax obligations and residency rules, business registration and legal compliance, income reporting across jurisdictions, insurance requirements (health, equipment, liability), and professional licensing considerations. Consult with tax professionals and legal advisors for complex situations.'
        },
        {
          id: 'budget-financial-planning',
          prompt: 'How will you budget and manage finances for location-independent lifestyle?',
          category: 'planning',
          helpText: 'Plan nomad finances: monthly budget by location type, income stability and diversification, emergency fund sizing for travel contingencies, currency exchange and international banking, tax planning and compliance, equipment replacement and upgrade costs, travel and accommodation budgeting, and long-term financial goals integration. Use tools for multi-currency tracking and expense management.'
        },
        {
          id: 'community-networking-abroad',
          prompt: 'How will you build professional and personal networks while traveling?',
          category: 'planning',
          helpText: 'Foster connections: digital nomad communities and meetups, coworking space networking, local professional associations, online community participation, social media engagement, skill sharing and collaboration opportunities, and cultural integration efforts. Balance work networking with personal relationships and local cultural experiences.'
        }
      ]
    },
    {
      id: 'productivity-time-management',
      title: 'Productivity & Time Management Systems',
      order: 3,
      reflectionPrompts: [
        {
          id: 'time-zone-management',
          prompt: 'How will you manage work across multiple time zones and maintain team collaboration?',
          category: 'planning',
          helpText: 'Develop time zone strategies: core overlap hours with team, asynchronous work planning, meeting scheduling systems, communication timing optimization, workday shifting and flexibility, calendar management across zones, and energy level optimization for different work times. Use tools like World Clock, scheduling assistants, and clear communication about availability windows.'
        },
        {
          id: 'focus-deep-work-systems',
          prompt: 'What systems will you implement to maintain focus and achieve deep work in varying environments?',
          category: 'planning',
          helpText: 'Create focus frameworks: deep work block scheduling, distraction management techniques, environmental assessment and optimization, focus apps and website blockers, noise management solutions, energy management throughout the day, and context switching minimization. Develop portable focus rituals and adapt techniques for different locations and cultural contexts.'
        },
        {
          id: 'task-project-management',
          prompt: 'How will you organize and track tasks, projects, and deadlines across different contexts?',
          category: 'planning',
          helpText: 'Implement organization systems: comprehensive task management platform, project tracking and milestone management, priority matrix and daily planning, deadline management and buffer planning, collaboration and handoff systems, progress reporting and accountability, and regular review and adjustment processes. Choose cloud-based tools that work offline and sync automatically.'
        },
        {
          id: 'energy-performance-optimization',
          prompt: 'How will you optimize your energy levels and peak performance times for maximum productivity?',
          category: 'planning',
          helpText: 'Design energy management: chronotype awareness and schedule optimization, energy-demanding task timing, break scheduling and recovery periods, nutrition and hydration planning, exercise integration and movement, sleep schedule maintenance, and performance tracking and adjustment. Consider how travel, time zone changes, and environmental factors affect your energy patterns.'
        },
        {
          id: 'technology-automation',
          prompt: 'What automation and technology solutions will streamline your workflows and reduce manual work?',
          category: 'planning',
          helpText: 'Automate routine tasks: email management and templates, social media scheduling, invoice and payment processing, data backup and sync, expense tracking and reporting, password and security management, and workflow integrations between tools. Identify repetitive tasks and research automation solutions that work reliably across different internet connections and device setups.'
        },
        {
          id: 'performance-measurement-tracking',
          prompt: 'How will you measure and track your productivity and work performance over time?',
          category: 'planning',
          helpText: 'Establish tracking systems: key performance indicators for your role, time tracking and analysis, goal setting and progress monitoring, quality metrics and client satisfaction, financial performance tracking, work-life balance metrics, and regular performance reviews with managers or self-assessment. Use data to identify patterns and optimize your remote work approach continuously.'
        }
      ]
    },
    {
      id: 'work-life-integration',
      title: 'Work-Life Integration & Well-being',
      order: 4,
      reflectionPrompts: [
        {
          id: 'boundary-setting-management',
          prompt: 'How will you establish and maintain healthy boundaries between work and personal life?',
          category: 'planning',
          helpText: 'Create clear boundaries: dedicated work hours and availability windows, physical workspace separation, communication boundaries with clients and colleagues, personal time protection, weekend and holiday policies, emergency contact protocols, and boundary communication with family and friends. Address challenges of working from home or while traveling where boundaries can blur.'
        },
        {
          id: 'health-wellness-routines',
          prompt: 'What health and wellness routines will you maintain while working remotely and traveling?',
          category: 'planning',
          helpText: 'Plan comprehensive wellness: regular exercise routines adaptable to any location, healthy eating strategies while traveling, mental health practices and stress management, preventive healthcare and checkups, sleep hygiene across time zones, screen time management, and ergonomic practices. Consider access to healthcare, fitness facilities, and healthy food options in different locations.'
        },
        {
          id: 'social-connection-community',
          prompt: 'How will you maintain social connections and combat isolation while working remotely?',
          category: 'planning',
          helpText: 'Foster social connections: regular video calls with family and friends, local social activities and clubs, coworking space community participation, digital nomad meetups and events, hobby groups and interests, volunteering opportunities, and professional networking. Balance online relationships with in-person interactions and cultural immersion in new locations.'
        },
        {
          id: 'stress-management-resilience',
          prompt: 'What strategies will you use to manage stress and build resilience for remote work challenges?',
          category: 'planning',
          helpText: 'Build resilience practices: stress identification and early warning signs, coping strategies and stress relief techniques, mindfulness and meditation practices, support system development, problem-solving frameworks, adaptability and flexibility mindset, and professional help resources. Address unique stressors of remote work like isolation, technology issues, and cultural adaptation.'
        },
        {
          id: 'personal-development-learning',
          prompt: 'How will you continue personal and professional development while working remotely?',
          category: 'planning',
          helpText: 'Plan continuous growth: skill development and online learning, industry knowledge staying current, networking and conference participation, mentorship relationships, side projects and creative pursuits, language learning for travel destinations, cultural learning and adaptation, and career advancement planning. Leverage the flexibility of remote work for unique learning opportunities.'
        },
        {
          id: 'long-term-sustainability',
          prompt: 'What approach will ensure the long-term sustainability of your remote work lifestyle?',
          category: 'planning',
          helpText: 'Design sustainable practices: career progression and income growth planning, retirement and long-term financial planning, relationship maintenance strategies, health and aging considerations, skills evolution and market adaptation, base location and stability planning, and exit strategy development. Consider how your remote work approach needs to adapt as your life circumstances and priorities change.'
        }
      ]
    },
    {
      id: 'financial-management-nomad',
      title: 'Financial Management for Digital Nomads',
      order: 5,
      reflectionPrompts: [
        {
          id: 'income-diversification-stability',
          prompt: 'How will you create stable, diversified income streams for location independence?',
          category: 'planning',
          helpText: 'Build income stability: multiple client relationships, diverse service offerings, passive income development, retainer vs. project-based work balance, skill monetization across platforms, emergency client pipeline, and income forecasting and planning. Consider geographic diversification of clients and recession-resistant income sources. Plan for seasonal variations and economic fluctuations.'
        },
        {
          id: 'banking-financial-infrastructure',
          prompt: 'What banking and financial infrastructure will support your international lifestyle?',
          category: 'planning',
          helpText: 'Establish financial systems: international banking solutions, low-fee ATM access worldwide, currency exchange optimization, digital payment platforms, multi-currency accounts, international wire transfer capabilities, and backup banking options. Research banking partnerships and travel-friendly financial institutions. Consider cryptocurrency options for borderless transactions.'
        },
        {
          id: 'tax-compliance-optimization',
          prompt: 'How will you navigate tax obligations and optimize your tax situation across jurisdictions?',
          category: 'planning',
          helpText: 'Manage tax compliance: home country tax obligations, foreign earned income exclusions, tax treaty benefits, record-keeping for international work, expense tracking and deductions, estimated tax payments, and professional tax advisor relationships. Understand nomad-specific tax strategies and compliance requirements. Plan for potential audits and documentation needs.'
        },
        {
          id: 'budget-cost-management',
          prompt: 'What budgeting system will help you manage costs across different locations and currencies?',
          category: 'planning',
          helpText: 'Create flexible budgeting: location-based cost research and planning, currency fluctuation management, travel and accommodation optimization, food and entertainment budgeting, emergency fund sizing and access, gear replacement and upgrade planning, and budget tracking across currencies. Use tools for real-time expense tracking and budget adjustments.'
        },
        {
          id: 'insurance-risk-management',
          prompt: 'How will you manage insurance needs and financial risks while traveling and working remotely?',
          category: 'planning',
          helpText: 'Plan comprehensive coverage: international health insurance, equipment and liability insurance, travel insurance and evacuation coverage, professional liability protection, income protection and disability insurance, and emergency fund strategies. Research coverage gaps and international insurance providers. Consider self-insurance vs. traditional coverage for different risks.'
        },
        {
          id: 'investment-retirement-planning',
          prompt: 'What investment and retirement planning strategies work for location-independent professionals?',
          category: 'planning',
          helpText: 'Plan long-term wealth: investment account access internationally, tax-advantaged retirement contributions, portfolio management while traveling, real estate investment considerations, currency hedging and international exposure, and retirement location planning. Consider nomad-specific investment challenges and opportunities. Plan for potential changes in tax residency and retirement access.'
        }
      ]
    },
    {
      id: 'career-advancement-scaling',
      title: 'Career Advancement & Business Scaling',
      order: 6,
      reflectionPrompts: [
        {
          id: 'skill-development-specialization',
          prompt: 'How will you continue developing skills and expertise to advance your remote career?',
          category: 'planning',
          helpText: 'Plan professional growth: industry trend monitoring and adaptation, specialization development and niche expertise, certification and credential acquisition, technology skill updates, soft skill development for remote work, mentorship and coaching relationships, and continuous learning integration into travel and work schedules. Leverage global access to learning opportunities and diverse perspectives.'
        },
        {
          id: 'network-reputation-building',
          prompt: 'What strategies will you use to build your professional network and reputation globally?',
          category: 'planning',
          helpText: 'Build global presence: thought leadership development, content creation and sharing, speaking and conference participation, industry contribution and volunteering, online presence optimization, client referral systems, and strategic partnership development. Use digital tools to maintain relationships across time zones and leverage travel for in-person networking opportunities.'
        },
        {
          id: 'client-relationship-scaling',
          prompt: 'How will you scale client relationships and increase your income potential?',
          category: 'planning',
          helpText: 'Scale client success: service offering expansion, premium service development, value-based pricing strategies, client success measurement, referral program development, testimonial and case study creation, and long-term client relationship nurturing. Focus on results that justify higher rates and create systems for scaling without increasing time investment proportionally.'
        },
        {
          id: 'business-system-automation',
          prompt: 'What business systems and automation will enable scaling without constant personal involvement?',
          category: 'planning',
          helpText: 'Systematize operations: client onboarding and project management automation, communication templates and sequences, invoicing and payment processing, marketing and lead generation systems, quality assurance processes, and performance tracking dashboards. Build systems that work across time zones and don\'t require constant manual intervention.'
        },
        {
          id: 'team-building-delegation',
          prompt: 'How might you build a remote team or delegate work to support business growth?',
          category: 'planning',
          helpText: 'Plan team development: virtual assistant and contractor relationships, skill-based hiring and management, project delegation and oversight, quality control systems, communication and collaboration protocols, and profit-sharing or partnership considerations. Consider cultural and time zone factors in team building and management strategies.'
        },
        {
          id: 'exit-transition-planning',
          prompt: 'What are your long-term plans and potential exit strategies from nomadic lifestyle?',
          category: 'planning',
          helpText: 'Plan future transitions: lifestyle change triggers and decision points, location settlement considerations, business model evolution, relationship and family planning impact, asset accumulation and real estate decisions, and career transition opportunities. Maintain flexibility while building toward long-term goals and consider how nomadic experience adds value to future opportunities.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'remote-work-essentials',
      title: 'Remote Work Setup and Success Fundamentals',
      type: 'guide',
      excerpt: 'Master remote work basics including **workspace design**, **productivity systems**, **communication strategies**, and **professional development**.',
      content: 'Remote work success requires intentional systems and disciplined practices. **Workspace Design:** Create dedicated, ergonomic workspace with reliable technology, proper lighting, and minimal distractions. Invest in quality equipment that supports productivity and health. **Productivity Systems:** Develop structured routines, time management techniques, and accountability measures. Use tools for task management, time tracking, and goal setting. **Communication Strategies:** Master asynchronous communication, video conferencing etiquette, and relationship building across digital channels. Overcommunicate to compensate for reduced face-to-face interaction. **Professional Development:** Maintain visibility, seek growth opportunities, and build networks through digital channels. Document achievements and contributions clearly.',
      tags: ['remote-work', 'productivity', 'workspace', 'communication'],
      readTime: '20 min',
      difficulty: 'beginner'
    },
    {
      id: 'digital-nomad-lifestyle',
      title: 'Digital Nomad Planning and Execution',
      type: 'guide',
      excerpt: 'Navigate nomadic lifestyle including **destination selection**, **visa planning**, **budget management**, and **community building**.',
      content: 'Successful nomadic lifestyle requires careful planning and adaptable systems. **Destination Selection:** Research internet quality, cost of living, visa requirements, safety, healthcare, and community. Consider time zones for work collaboration and quality of life factors. **Visa Planning:** Understand tourist vs. work visa implications, explore digital nomad visa programs, and plan for legal compliance across jurisdictions. **Budget Management:** Account for accommodation, transportation, food, activities, equipment, insurance, and emergency expenses. Track spending across currencies and locations. **Community Building:** Connect with other nomads, participate in coworking spaces, engage with local communities, and maintain relationships with home base. Balance work networking with personal connections.',
      tags: ['digital-nomad', 'travel-planning', 'visa-requirements', 'budgeting'],
      readTime: '25 min',
      difficulty: 'intermediate'
    },
    {
      id: 'nomad-financial-management',
      title: 'Financial Systems for Location Independence',
      type: 'guide',
      excerpt: 'Manage international finances including **banking solutions**, **tax planning**, **income optimization**, and **risk management**.',
      content: 'Location-independent finances require specialized knowledge and systems. **Banking Solutions:** Use international banks, low-fee ATM networks, multi-currency accounts, and digital payment platforms. Plan for access to funds worldwide and backup banking options. **Tax Planning:** Understand home country obligations, foreign earned income exclusions, tax treaties, and nomad-specific deductions. Work with international tax professionals. **Income Optimization:** Diversify income sources, negotiate favorable payment terms, optimize currency exchange timing, and build emergency funds. **Risk Management:** Secure appropriate insurance coverage, plan for equipment replacement, manage currency fluctuations, and prepare for emergency evacuation or medical expenses.',
      tags: ['international-banking', 'nomad-taxes', 'income-diversification', 'financial-planning'],
      readTime: '22 min',
      difficulty: 'expert'
    },
    {
      id: 'remote-productivity-mastery',
      title: 'Productivity and Performance Optimization for Remote Workers',
      type: 'guide',
      excerpt: 'Maximize remote work performance with **time management**, **focus techniques**, **energy optimization**, and **technology integration**.',
      content: 'Remote work productivity requires different skills than traditional office work. **Time Management:** Master time zone coordination, asynchronous work planning, and energy-based scheduling. Use time-blocking and batch processing techniques. **Focus Techniques:** Develop deep work practices, manage distractions, create focus rituals, and optimize work environments. Use technology tools to support concentration. **Energy Optimization:** Understand your chronotype, schedule demanding work during peak energy times, take strategic breaks, and maintain work-life boundaries. **Technology Integration:** Leverage automation, cloud-based systems, productivity apps, and collaboration tools. Ensure reliable internet and backup solutions.',
      tags: ['productivity', 'time-management', 'focus-techniques', 'energy-optimization'],
      readTime: '18 min',
      difficulty: 'intermediate'
    },
    {
      id: 'nomad-career-advancement',
      title: 'Career Growth and Business Development for Nomads',
      type: 'guide',
      excerpt: 'Advance your career while traveling including **skill development**, **network building**, **client scaling**, and **business systems**.',
      content: 'Career advancement while nomadic requires strategic planning and global thinking. **Skill Development:** Stay current with industry trends, pursue online learning opportunities, attend virtual conferences, and seek mentorship relationships. Leverage diverse cultural experiences for unique perspectives. **Network Building:** Build global professional networks through digital channels, industry participation, thought leadership, and strategic in-person meetings during travels. **Client Scaling:** Focus on value-based services, premium offerings, referral systems, and long-term client relationships. Develop systems for consistent service delivery regardless of location. **Business Systems:** Create scalable processes, automate routine tasks, build virtual teams, and develop passive income streams. Plan for eventual team building or location settling.',
      tags: ['career-advancement', 'skill-development', 'networking', 'business-scaling'],
      readTime: '24 min',
      difficulty: 'expert'
    }
  ]
};

export const investmentWealthBuildingTemplate: GuidanceTemplate = {
  id: 'investment-wealth-building',
  title: 'Investment & Wealth Building Strategy',
  category: 'finance-investment',
  icon: '📊',
  sections: [
    {
      id: 'financial-foundation-assessment',
      title: 'Financial Foundation & Assessment',
      order: 1,
      reflectionPrompts: [
        {
          id: 'net-worth-calculation',
          prompt: 'What is your current net worth, and how has it changed over the past 2-3 years?',
          category: 'research',
          helpText: 'Calculate net worth: assets (cash, investments, retirement accounts, real estate, business equity, valuable items) minus liabilities (mortgage, credit cards, student loans, other debts). Track trends over time to identify patterns. Include liquid vs. illiquid assets, and consider how inflation affects real purchasing power. Use tools like spreadsheets or apps for ongoing tracking.'
        },
        {
          id: 'income-expense-analysis',
          prompt: 'How much do you earn, spend, and save each month, and where can you optimize cash flow?',
          category: 'research',
          helpText: 'Analyze cash flow: gross income, taxes, essential expenses (housing, utilities, insurance, minimum debt payments), discretionary spending, and savings rate. Identify areas to reduce expenses or increase income. Calculate savings rate as percentage of gross income. Look for subscription waste, negotiable expenses, and opportunities to increase earnings through raises, side income, or career changes.'
        },
        {
          id: 'debt-optimization-strategy',
          prompt: 'What debts do you have, and what is your strategy for managing or eliminating them?',
          category: 'planning',
          helpText: 'Inventory all debts: balances, interest rates, minimum payments, and payoff timelines. Prioritize high-interest debt (credit cards) while considering tax-deductible debt (mortgages). Compare debt avalanche (highest interest first) vs. debt snowball (smallest balance first) methods. Consider refinancing, consolidation, or negotiation options. Balance debt payoff with investment opportunities.'
        },
        {
          id: 'risk-tolerance-timeline',
          prompt: 'What is your risk tolerance, and what are your short-term and long-term financial goals?',
          category: 'planning',
          helpText: 'Assess risk capacity (ability to take risk based on income, expenses, time horizon) and risk tolerance (comfort level with volatility). Define goals with timelines: emergency fund (3-6 months), short-term goals (1-5 years), medium-term goals (5-15 years), and long-term wealth building (15+ years). Consider how risk tolerance may change with age, income changes, or market conditions.'
        },
        {
          id: 'emergency-fund-planning',
          prompt: 'How much do you need in an emergency fund, and where will you keep it?',
          category: 'planning',
          helpText: 'Calculate emergency fund needs: 3-6 months of essential expenses for stable employment, 6-12 months for variable income or job uncertainty. Consider factors like health, family responsibilities, job market conditions, and insurance coverage. Choose storage: high-yield savings accounts, money market accounts, or short-term CDs for liquidity and safety. Keep separate from investment accounts.'
        },
        {
          id: 'wealth-building-objectives',
          prompt: 'What specific wealth-building objectives do you want to achieve, and by when?',
          category: 'planning',
          helpText: 'Set specific, measurable wealth goals: target net worth by age milestones, retirement lifestyle funding needs, children\'s education costs, real estate purchase goals, business investment funds, or legacy planning objectives. Use SMART criteria and calculate required savings and investment returns. Consider inflation impact and adjust goals as circumstances change. Break long-term goals into achievable milestones.'
        }
      ]
    },
    {
      id: 'investment-strategy-development',
      title: 'Investment Strategy Development',
      order: 2,
      reflectionPrompts: [
        {
          id: 'investment-knowledge-education',
          prompt: 'What is your current investment knowledge level, and what education do you need?',
          category: 'research',
          helpText: 'Assess understanding of: basic investment concepts (compound interest, risk/return relationship), investment vehicles (stocks, bonds, mutual funds, ETFs, real estate), market behavior, and tax implications. Identify knowledge gaps and create learning plan using books, courses, podcasts, or financial advisors. Start with fundamentals before complex strategies. Understand behavioral biases that affect investment decisions.'
        },
        {
          id: 'asset-allocation-strategy',
          prompt: 'How will you allocate your investments across different asset classes and geographic regions?',
          category: 'planning',
          helpText: 'Develop asset allocation based on age, risk tolerance, and goals: stocks vs. bonds percentage, domestic vs. international exposure, growth vs. value stocks, large-cap vs. small-cap allocation, and alternative investments (REITs, commodities). Consider target-date funds for simplicity or custom allocation for control. Plan for rebalancing frequency and triggers. Adjust allocation as you age or circumstances change.'
        },
        {
          id: 'investment-vehicle-selection',
          prompt: 'Which investment vehicles and accounts will you use to implement your strategy?',
          category: 'planning',
          helpText: 'Choose appropriate accounts: 401(k), IRA, Roth IRA, taxable brokerage accounts, HSA, and 529 plans based on tax advantages and accessibility needs. Select investment options: low-cost index funds, target-date funds, individual stocks, bonds, or ETFs. Consider expense ratios, tax efficiency, and diversification. Plan contribution priorities: employer match first, then high-yield savings, then additional tax-advantaged accounts.'
        },
        {
          id: 'dollar-cost-averaging-timing',
          prompt: 'How will you implement dollar-cost averaging and handle market timing decisions?',
          category: 'planning',
          helpText: 'Plan systematic investing: regular contribution amounts and frequencies, automatic investment setup, and staying disciplined during market volatility. Decide on lump-sum vs. dollar-cost averaging for large amounts. Develop strategy for market downturns (continue investing, increase contributions, or rebalance). Avoid emotional decisions and market timing attempts. Consider tax-loss harvesting opportunities.'
        },
        {
          id: 'diversification-risk-management',
          prompt: 'How will you achieve proper diversification and manage investment risks?',
          category: 'planning',
          helpText: 'Build diversification across: asset classes, geographic regions, company sizes, and economic sectors. Avoid concentration risk in single stocks, sectors, or your employer\'s stock. Consider correlation between investments and how they perform in different economic conditions. Plan for black swan events and market crashes. Use position sizing and stop-loss strategies if appropriate. Regularly review and rebalance portfolio.'
        },
        {
          id: 'investment-monitoring-review',
          prompt: 'What system will you use to monitor investments and conduct regular portfolio reviews?',
          category: 'planning',
          helpText: 'Create monitoring schedule: daily market awareness (optional), monthly contribution tracking, quarterly performance review, and annual strategy assessment. Define triggers for rebalancing: percentage thresholds or time-based rebalancing. Set up tracking tools and alerts. Review fees, performance vs. benchmarks, and tax implications. Plan for strategy adjustments based on life changes, goal progress, or market conditions.'
        }
      ]
    },
    {
      id: 'retirement-planning-strategy',
      title: 'Retirement Planning Strategy',
      order: 3,
      reflectionPrompts: [
        {
          id: 'retirement-lifestyle-costs',
          prompt: 'What lifestyle do you want in retirement, and how much will it cost annually?',
          category: 'planning',
          helpText: 'Envision retirement: housing situation, travel plans, hobbies, healthcare needs, and geographic location. Estimate annual expenses: basic living costs, healthcare and insurance, leisure activities, and inflation adjustments. Consider that some expenses may decrease (work clothes, commuting) while others increase (healthcare, leisure). Plan for different retirement phases: active early retirement vs. later-stage needs.'
        },
        {
          id: 'retirement-income-sources',
          prompt: 'What income sources will fund your retirement, and how reliable are they?',
          category: 'planning',
          helpText: 'Identify income streams: Social Security benefits (estimate using SSA.gov), employer pensions or 401(k), personal retirement accounts (IRA, Roth IRA), taxable investments, real estate income, business equity, or part-time work. Assess reliability and inflation protection of each source. Plan withdrawal strategies and consider sequence of returns risk. Diversify income sources for security.'
        },
        {
          id: 'retirement-account-optimization',
          prompt: 'How will you maximize contributions to and benefits from retirement accounts?',
          category: 'planning',
          helpText: 'Optimize retirement savings: maximize employer 401(k) match, contribute to traditional vs. Roth IRA based on current and expected future tax brackets, consider backdoor Roth conversions, use HSA for triple tax advantage, and plan for required minimum distributions (RMDs). Understand contribution limits and catch-up contributions for age 50+. Consider tax diversification across account types.'
        },
        {
          id: 'social-security-optimization',
          prompt: 'When will you claim Social Security, and how will you optimize your benefits?',
          category: 'planning',
          helpText: 'Understand Social Security: full retirement age, early vs. delayed claiming impacts, spousal benefits, survivor benefits, and earnings test limitations. Calculate break-even points for claiming strategies. Consider health, family longevity, other income sources, and need for immediate income. Plan coordinated claiming strategy for married couples. Monitor annual statements and earnings record accuracy.'
        },
        {
          id: 'healthcare-retirement-planning',
          prompt: 'How will you plan for healthcare costs and insurance coverage in retirement?',
          category: 'planning',
          helpText: 'Plan healthcare coverage: Medicare enrollment timing and supplement options, long-term care insurance needs, HSA maximization for healthcare expenses, and budgeting for increased medical costs. Research Medicare costs and coverage gaps. Consider geographic factors affecting healthcare quality and costs. Plan for potential assisted living or nursing home expenses. Understand Medicare enrollment deadlines and penalties.'
        },
        {
          id: 'retirement-withdrawal-strategy',
          prompt: 'What strategy will you use for withdrawing funds from different accounts in retirement?',
          category: 'planning',
          helpText: 'Develop withdrawal strategy: traditional 4% rule vs. dynamic withdrawal approaches, tax-efficient withdrawal sequencing (taxable accounts first, then traditional retirement accounts, then Roth), managing tax brackets and Medicare premiums, and adjusting for market conditions. Plan for required minimum distributions and potential Roth conversions during low-income years. Consider bucket strategy for different time horizons.'
        }
      ]
    },
    {
      id: 'tax-optimization-strategies',
      title: 'Tax Optimization Strategies',
      order: 4,
      reflectionPrompts: [
        {
          id: 'tax-bracket-management',
          prompt: 'How will you manage your tax brackets both now and in retirement?',
          category: 'planning',
          helpText: 'Understand current and projected tax brackets: federal and state income taxes, marginal vs. effective rates, and how different income types are taxed. Plan strategies to smooth tax payments over time: traditional vs. Roth retirement contributions, Roth conversions during low-income years, tax-loss harvesting, and charitable giving timing. Consider future tax law changes and plan for flexibility.'
        },
        {
          id: 'tax-advantaged-account-strategy',
          prompt: 'How will you prioritize and maximize tax-advantaged investment accounts?',
          category: 'planning',
          helpText: 'Optimize account types: 401(k) for employer match and high contribution limits, traditional IRA for immediate deduction, Roth IRA for tax-free growth, HSA for triple tax advantage, and 529 plans for education expenses. Understand contribution limits, income restrictions, and withdrawal rules. Plan contribution order based on current tax situation and future expectations. Consider tax diversification benefits.'
        },
        {
          id: 'investment-tax-efficiency',
          prompt: 'How will you structure your investments for maximum tax efficiency?',
          category: 'planning',
          helpText: 'Plan tax-efficient investing: hold tax-inefficient investments in tax-advantaged accounts, use tax-efficient index funds in taxable accounts, implement tax-loss harvesting, avoid wash sale rules, and consider municipal bonds for high-income earners. Time capital gains realization and consider holding periods. Use tax-efficient fund placement and rebalancing strategies. Minimize unnecessary taxable distributions.'
        },
        {
          id: 'estate-tax-planning',
          prompt: 'What estate planning strategies will minimize taxes and ensure smooth wealth transfer?',
          category: 'planning',
          helpText: 'Plan estate taxes and wealth transfer: understand federal and state estate tax exemptions, gift tax annual exclusions and lifetime exemption, generation-skipping transfer tax, and step-up in basis rules. Consider strategies like annual gifting, 529 plan contributions, charitable giving, life insurance planning, and trust structures. Update beneficiary designations and coordinate with overall estate plan. Plan for potential law changes.'
        },
        {
          id: 'charitable-giving-strategy',
          prompt: 'How might charitable giving fit into your tax optimization and wealth-building strategy?',
          category: 'planning',
          helpText: 'Integrate charitable giving: cash donations for immediate deductions, appreciated securities donations to avoid capital gains, qualified charitable distributions from IRA, donor-advised funds for timing flexibility, and charitable remainder trusts for income and tax benefits. Bundle charitable donations in high-income years, consider bunch and spread strategies, and coordinate with other tax planning. Balance charitable goals with wealth-building objectives.'
        },
        {
          id: 'professional-tax-guidance',
          prompt: 'When should you work with tax professionals, and how will you stay informed about tax law changes?',
          category: 'planning',
          helpText: 'Plan professional support: identify complexity triggers requiring CPA or tax attorney help (high income, business ownership, complex investments, estate planning), establish ongoing relationship vs. project-based assistance, and coordinate between different advisors. Stay informed about tax law changes through reliable sources and assess impact on your strategy. Balance professional fees with potential tax savings and peace of mind.'
        }
      ]
    },
    {
      id: 'alternative-investments-income',
      title: 'Alternative Investments & Income Streams',
      order: 5,
      reflectionPrompts: [
        {
          id: 'real-estate-investment-strategy',
          prompt: 'What role will real estate play in your investment portfolio and wealth-building plan?',
          category: 'planning',
          helpText: 'Evaluate real estate options: primary residence as forced savings and inflation hedge, rental properties for cash flow and appreciation, Real Estate Investment Trusts (REITs) for liquidity and diversification, real estate crowdfunding platforms, and commercial real estate partnerships. Consider geographic diversification, property types, financing strategies, tax implications, and management requirements. Balance illiquidity with potential returns.'
        },
        {
          id: 'business-investment-opportunities',
          prompt: 'How might business ownership or investment contribute to your wealth-building strategy?',
          category: 'planning',
          helpText: 'Explore business opportunities: starting your own business, investing in existing businesses, angel investing, peer-to-peer lending, or franchise ownership. Assess required capital, time commitment, expertise needs, and risk levels. Consider passive vs. active involvement, diversification across industries, and exit strategies. Understand tax advantages and disadvantages. Balance business investments with traditional portfolio diversification.'
        },
        {
          id: 'passive-income-development',
          prompt: 'What passive income streams can you develop to accelerate wealth building?',
          category: 'planning',
          helpText: 'Build passive income: dividend-paying stocks, bond interest, rental property income, royalties from intellectual property, business partnerships, peer-to-peer lending, and high-yield savings accounts. Consider reliability, growth potential, tax treatment, and initial investment requirements. Plan to reinvest passive income for compound growth. Understand that most "passive" income requires some initial effort and ongoing monitoring.'
        },
        {
          id: 'cryptocurrency-digital-assets',
          prompt: 'What role, if any, will cryptocurrency and digital assets play in your investment strategy?',
          category: 'consideration',
          helpText: 'Evaluate cryptocurrency: understand extreme volatility and speculative nature, treat as high-risk portfolio allocation (typically 5% or less), research different cryptocurrencies and blockchain technologies, consider dollar-cost averaging for volatility reduction, and understand tax implications. Plan secure storage and be prepared for total loss. Consider both direct ownership and cryptocurrency ETFs or funds for easier management.'
        },
        {
          id: 'commodity-alternative-assets',
          prompt: 'How might commodities, precious metals, or other alternative assets fit your portfolio?',
          category: 'consideration',
          helpText: 'Consider alternative assets: precious metals (gold, silver) as inflation hedge and portfolio diversification, commodities exposure through ETFs or futures, collectibles (art, wine, rare items) as passion investments, timber or farmland for inflation protection, and currency diversification. Understand storage costs, illiquidity, and tax treatment. Keep alternative investments as small portfolio percentage unless you have specific expertise.'
        },
        {
          id: 'side-hustle-income-optimization',
          prompt: 'What side businesses or income streams can accelerate your wealth-building timeline?',
          category: 'planning',
          helpText: 'Develop additional income: freelance work or consulting in your expertise area, online businesses, content creation, teaching or coaching, rental income from unused space, and skill monetization. Consider scalability, time investment, and alignment with career goals. Plan to invest additional income rather than increase lifestyle expenses. Use side income to fund emergency fund, pay down debt, or boost investment contributions.'
        }
      ]
    },
    {
      id: 'wealth-protection-legacy',
      title: 'Wealth Protection & Legacy Planning',
      order: 6,
      reflectionPrompts: [
        {
          id: 'insurance-risk-management',
          prompt: 'What insurance coverage do you need to protect your wealth-building progress?',
          category: 'planning',
          helpText: 'Evaluate insurance needs: adequate life insurance for family protection and debt coverage, disability insurance to protect income, homeowners/renters insurance with sufficient coverage, auto insurance with appropriate limits, umbrella liability insurance for asset protection, and potentially long-term care insurance. Balance coverage with costs and avoid over-insurance. Consider term vs. whole life insurance based on needs and investment alternatives.'
        },
        {
          id: 'estate-planning-fundamentals',
          prompt: 'What estate planning documents and strategies do you need to protect and transfer wealth?',
          category: 'planning',
          helpText: 'Essential estate planning: will with current beneficiaries, durable power of attorney for finances, healthcare power of attorney and living will, beneficiary designations on all accounts, and potentially revocable living trust for asset management. Consider trust structures for tax efficiency or control, charitable planning, and business succession if applicable. Regular updates for life changes and law changes.'
        },
        {
          id: 'asset-protection-strategies',
          prompt: 'How will you protect your assets from potential creditors, lawsuits, or economic downturns?',
          category: 'planning',
          helpText: 'Plan asset protection: adequate insurance coverage, business structure optimization (LLC, corporation), retirement account protection under ERISA, homestead exemptions, and potentially domestic or offshore trust structures for high-net-worth individuals. Understand state-specific protections and avoid fraudulent conveyance. Balance protection with accessibility and cost. Consider professional liability and litigation risks in your field.'
        },
        {
          id: 'generational-wealth-transfer',
          prompt: 'How do you want to transfer wealth to future generations or charitable causes?',
          category: 'planning',
          helpText: 'Plan wealth transfer: annual gift tax exclusion utilization, 529 plan funding for education, family limited partnerships or LLCs, charitable giving strategies, and trust structures for control and tax efficiency. Consider impact on recipients\' motivation and financial education. Plan for generation-skipping transfer tax if applicable. Balance current needs with legacy goals and tax efficiency with simplicity.'
        },
        {
          id: 'family-financial-education',
          prompt: 'How will you educate family members about money management and wealth preservation?',
          category: 'planning',
          helpText: 'Plan financial education: age-appropriate money lessons for children, involving family in financial discussions and decisions, teaching investing basics and compound interest, modeling good financial behaviors, and providing resources for continued learning. Consider family financial meetings, involving next generation in philanthropy, and gradual responsibility increase. Prepare family members to handle inherited wealth responsibly.'
        },
        {
          id: 'wealth-legacy-values',
          prompt: 'What values and principles do you want to instill alongside financial wealth transfer?',
          category: 'planning',
          helpText: 'Define family values: work ethic and personal responsibility, charitable giving and community service, education and lifelong learning, family unity and support, and stewardship of wealth for future generations. Create family mission statement or constitution, establish family traditions around giving and service, and consider impact of wealth on family relationships. Balance financial security with character development and social contribution.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'investment-fundamentals',
      title: 'Investment Fundamentals and Getting Started',
      type: 'guide',
      excerpt: 'Master investing basics including **risk assessment**, **asset allocation**, **account selection**, and **building your first portfolio**.',
      content: 'Successful investing starts with understanding fundamentals and avoiding common mistakes. **Risk Assessment:** Determine your risk tolerance based on age, income, time horizon, and emotional comfort with volatility. Understand the risk-return relationship and how compound interest works over time. **Asset Allocation:** Develop age-appropriate allocation between stocks, bonds, and other assets. Consider target-date funds for simplicity or custom allocation for control. **Account Selection:** Prioritize 401(k) employer match, then tax-advantaged accounts like IRA and Roth IRA. **Building Your First Portfolio:** Start with low-cost index funds for broad diversification, automate contributions, and avoid emotional decision-making during market volatility.',
      tags: ['investing-basics', 'risk-tolerance', 'asset-allocation', 'portfolio-building'],
      readTime: '22 min',
      difficulty: 'beginner'
    },
    {
      id: 'retirement-planning-mastery',
      title: 'Comprehensive Retirement Planning Strategy',
      type: 'guide',
      excerpt: 'Plan for retirement including **income replacement**, **account optimization**, **Social Security strategies**, and **healthcare planning**.',
      content: 'Retirement planning requires coordinated strategy across multiple areas. **Income Replacement:** Calculate retirement expenses and income needs, typically 70-90% of pre-retirement income. Plan for inflation and different retirement phases. **Account Optimization:** Maximize 401(k) matches, contribute to tax-diversified accounts (traditional and Roth), and understand required minimum distributions. **Social Security Strategies:** Understand claiming strategies, spousal benefits, and how to optimize lifetime benefits. **Healthcare Planning:** Plan for Medicare enrollment, supplement insurance, long-term care costs, and HSA optimization. Start early and adjust strategy as circumstances change.',
      tags: ['retirement-planning', 'social-security', 'healthcare-costs', 'income-replacement'],
      readTime: '28 min',
      difficulty: 'intermediate'
    },
    {
      id: 'tax-optimization-wealth',
      title: 'Tax Optimization for Wealth Building',
      type: 'guide',
      excerpt: 'Minimize taxes to maximize wealth including **account strategies**, **tax-loss harvesting**, **estate planning**, and **charitable giving**.',
      content: 'Tax-efficient investing can significantly improve long-term wealth accumulation. **Account Strategies:** Use tax-advantaged accounts effectively, balance traditional vs. Roth contributions, and plan tax-efficient withdrawal strategies in retirement. **Tax-Loss Harvesting:** Offset capital gains with losses while avoiding wash sale rules and maintaining desired asset allocation. **Estate Planning:** Understand gift and estate tax implications, use annual exclusions effectively, and plan for step-up in basis. **Charitable Giving:** Donate appreciated securities to avoid capital gains while claiming deductions. Work with tax professionals for complex situations.',
      tags: ['tax-optimization', 'tax-loss-harvesting', 'estate-planning', 'tax-advantaged-accounts'],
      readTime: '25 min',
      difficulty: 'expert'
    },
    {
      id: 'alternative-investment-strategies',
      title: 'Alternative Investments and Diversification',
      type: 'guide',
      excerpt: 'Explore beyond traditional assets including **real estate**, **business ownership**, **commodities**, and **alternative income streams**.',
      content: 'Alternative investments can enhance diversification but require careful consideration. **Real Estate:** Understand direct property ownership vs. REITs, financing considerations, and tax implications. Consider geographic and property type diversification. **Business Ownership:** Evaluate starting, buying, or investing in businesses. Understand time commitment, expertise requirements, and exit strategies. **Commodities:** Consider precious metals, commodity ETFs, or futures for inflation protection and portfolio diversification. **Alternative Income Streams:** Develop passive income through dividends, rental income, royalties, or peer-to-peer lending. Remember that most alternatives require more active management than traditional investments.',
      tags: ['alternative-investments', 'real-estate-investing', 'business-ownership', 'passive-income'],
      readTime: '24 min',
      difficulty: 'expert'
    },
    {
      id: 'wealth-protection-legacy',
      title: 'Wealth Protection and Legacy Planning',
      type: 'guide',
      excerpt: 'Protect and transfer wealth including **insurance planning**, **estate documents**, **asset protection**, and **family financial education**.',
      content: 'Protecting wealth is as important as building it. **Insurance Planning:** Ensure adequate life and disability insurance to protect family and wealth-building progress. Consider umbrella liability insurance for asset protection. **Estate Documents:** Maintain current will, powers of attorney, and beneficiary designations. Consider trust structures for tax efficiency or control. **Asset Protection:** Use appropriate business structures, understand state-specific protections, and avoid fraudulent conveyance. **Family Financial Education:** Teach family members about money management, investing, and wealth stewardship. Plan for responsible wealth transfer that maintains family values and work ethic. Regular review and updates are essential as wealth grows and laws change.',
      tags: ['wealth-protection', 'estate-planning', 'insurance-planning', 'family-financial-education'],
      readTime: '26 min',
      difficulty: 'intermediate'
    }
  ]
};

export const ecommerceOnlineBusinessTemplate: GuidanceTemplate = {
  id: 'ecommerce-online-business',
  title: 'E-commerce & Online Business Development',
  description: 'Launch and scale a successful e-commerce business and online presence',
  category: 'business-ecommerce',
  icon: '🛒',
  sections: [
    {
      id: 'business-model-validation',
      title: 'Business Model & Market Validation',
      order: 1,
      reflectionPrompts: [
        {
          id: 'business-model-selection',
          prompt: 'What e-commerce business model will you pursue, and why is it the best fit for your goals and resources?',
          category: 'planning',
          helpText: 'Evaluate business models: dropshipping (low startup costs, inventory risk), private label (brand control, higher margins), wholesale/retail arbitrage (proven products, competition), print-on-demand (creativity, lower margins), digital products (scalability, no shipping), subscription boxes (recurring revenue, logistics complexity), or marketplace selling (existing traffic, fees and competition). Consider startup capital, time investment, profit margins, and long-term scalability.'
        },
        {
          id: 'target-market-research',
          prompt: 'Who is your target customer, and what specific problems does your product or service solve for them?',
          category: 'research',
          helpText: 'Define ideal customer: demographics (age, income, location, lifestyle), psychographics (values, interests, shopping behaviors), pain points and frustrations, current solutions they use, buying triggers and decision factors, and preferred shopping channels. Conduct market research through surveys, interviews, competitor analysis, and social media listening. Create detailed buyer personas and validate assumptions with real potential customers.'
        },
        {
          id: 'competitive-landscape-analysis',
          prompt: 'Who are your main competitors, and how will you differentiate your offering in the market?',
          category: 'research',
          helpText: 'Analyze competitors: direct competitors (same products/services), indirect competitors (alternative solutions), their pricing strategies, marketing approaches, customer reviews and complaints, strengths and weaknesses, and market positioning. Identify market gaps and opportunities for differentiation through: unique product features, superior customer service, better pricing, improved user experience, niche targeting, or innovative marketing approaches.'
        },
        {
          id: 'product-service-development',
          prompt: 'What products or services will you offer, and how will you ensure they meet market demand?',
          category: 'planning',
          helpText: 'Develop product strategy: core product offerings, product line breadth and depth, quality standards and specifications, sourcing and manufacturing considerations, packaging and presentation, pricing strategy, and product lifecycle management. Validate demand through: pre-orders, crowdfunding campaigns, landing page tests, social media engagement, keyword research, and competitor sales analysis. Plan for minimum viable product (MVP) launch and iteration based on feedback.'
        },
        {
          id: 'revenue-pricing-strategy',
          prompt: 'How will you price your products and structure your revenue model for profitability and growth?',
          category: 'planning',
          helpText: 'Develop pricing strategy: cost-plus pricing, value-based pricing, competitive pricing, or psychological pricing approaches. Calculate: product costs (manufacturing, shipping, storage), operational costs (marketing, platform fees, labor), desired profit margins, and break-even points. Consider: price testing, bundle pricing, subscription models, tiered pricing, seasonal adjustments, and international pricing. Plan for promotional pricing and discount strategies while maintaining profitability.'
        },
        {
          id: 'mvp-testing-validation',
          prompt: 'How will you test your business concept with minimal investment before full launch?',
          category: 'planning',
          helpText: 'Plan validation approach: landing page tests with email capture, social media polls and engagement, pre-order campaigns, prototype testing, focus groups, competitor product research, keyword demand analysis, and small-scale test launches. Use lean startup methodology: build-measure-learn cycles, hypothesis testing, pivot readiness, and customer feedback integration. Set validation criteria and success metrics before testing to make objective go/no-go decisions.'
        }
      ]
    },
    {
      id: 'ecommerce-platform-setup',
      title: 'E-commerce Platform & Website Development',
      order: 2,
      reflectionPrompts: [
        {
          id: 'platform-selection-setup',
          prompt: 'Which e-commerce platform will you use, and how will you set it up for optimal performance?',
          category: 'planning',
          helpText: 'Evaluate platforms: Shopify (ease of use, apps, fees), WooCommerce (flexibility, hosting requirements), BigCommerce (features, scalability), Magento (customization, complexity), Amazon/eBay (traffic, competition), or custom development (control, cost). Consider: monthly costs, transaction fees, customization options, scalability, integrations, SEO capabilities, and mobile responsiveness. Plan hosting, domain registration, SSL certificates, and backup systems.'
        },
        {
          id: 'website-design-ux',
          prompt: 'How will you design your website for maximum user experience and conversion rates?',
          category: 'planning',
          helpText: 'Plan website design: clean, professional layout, intuitive navigation, mobile-first responsive design, fast loading speeds, clear product categorization, prominent search functionality, and consistent branding. Optimize conversion elements: compelling product pages, high-quality images and videos, clear calls-to-action, trust signals (reviews, security badges), streamlined checkout process, and abandoned cart recovery. Consider accessibility standards and international users.'
        },
        {
          id: 'product-catalog-management',
          prompt: 'How will you organize and present your products to maximize discoverability and sales?',
          category: 'planning',
          helpText: 'Structure product catalog: logical category hierarchy, detailed product descriptions with benefits and features, high-quality images from multiple angles, product videos when appropriate, customer reviews integration, related product recommendations, inventory tracking, and variant management (sizes, colors, styles). Implement search functionality, filtering options, comparison tools, and wishlist features. Plan for SEO optimization of product pages and category structure.'
        },
        {
          id: 'payment-checkout-optimization',
          prompt: 'What payment methods and checkout process will you implement to minimize cart abandonment?',
          category: 'planning',
          helpText: 'Optimize checkout experience: multiple payment options (credit cards, PayPal, digital wallets, buy-now-pay-later), guest checkout option, minimal form fields, progress indicators, shipping calculator, tax calculation, security assurance, and mobile optimization. Implement: SSL certificates, PCI compliance, fraud protection, and clear return/refund policies. Plan abandoned cart recovery emails and exit-intent popups to recapture lost sales.'
        },
        {
          id: 'inventory-fulfillment-logistics',
          prompt: 'How will you manage inventory, fulfillment, and shipping to ensure customer satisfaction?',
          category: 'planning',
          helpText: 'Plan logistics operations: inventory management systems, storage solutions (home, warehouse, third-party logistics), order processing workflows, shipping carrier relationships, packaging materials and branding, international shipping considerations, and return/exchange processes. Consider: inventory forecasting, just-in-time vs. bulk ordering, seasonal demand planning, damaged goods handling, and customer communication throughout fulfillment process.'
        },
        {
          id: 'analytics-tracking-setup',
          prompt: 'What analytics and tracking systems will you implement to monitor and optimize performance?',
          category: 'planning',
          helpText: 'Set up tracking systems: Google Analytics 4 for website behavior, conversion tracking for sales and goals, heat mapping tools (Hotjar, Crazy Egg), customer journey analysis, email marketing analytics, social media insights, and financial reporting dashboards. Track key metrics: conversion rates, average order value, customer acquisition cost, lifetime value, cart abandonment rate, traffic sources, and return on ad spend. Plan regular reporting and optimization cycles.'
        }
      ]
    },
    {
      id: 'digital-marketing-customer-acquisition',
      title: 'Digital Marketing & Customer Acquisition',
      order: 3,
      reflectionPrompts: [
        {
          id: 'marketing-strategy-channels',
          prompt: 'What marketing channels will you use to reach your target customers and drive traffic to your store?',
          category: 'planning',
          helpText: 'Develop channel strategy: search engine optimization (SEO) for organic traffic, pay-per-click advertising (Google Ads, Bing), social media marketing (Facebook, Instagram, TikTok, Pinterest), email marketing, content marketing (blog, videos, guides), influencer partnerships, affiliate marketing, and public relations. Prioritize channels based on: target audience presence, budget requirements, expertise needed, and potential ROI. Start with 2-3 channels before expanding.'
        },
        {
          id: 'seo-content-strategy',
          prompt: 'How will you optimize your website and create content to rank well in search engines?',
          category: 'planning',
          helpText: 'Plan SEO strategy: keyword research for products and categories, on-page optimization (title tags, meta descriptions, headers), technical SEO (site speed, mobile-friendliness, schema markup), content marketing (blog posts, buying guides, how-to articles), link building through partnerships and guest posting, and local SEO if applicable. Create content calendar addressing: product education, industry trends, customer questions, and seasonal topics relevant to your audience.'
        },
        {
          id: 'paid-advertising-campaigns',
          prompt: 'What paid advertising strategy will you use to drive targeted traffic and conversions?',
          category: 'planning',
          helpText: 'Develop advertising approach: Google Ads (search, shopping, display), Facebook and Instagram ads, retargeting campaigns, influencer sponsorships, and platform-specific advertising (Amazon PPC, Pinterest ads). Plan: campaign objectives (awareness, traffic, conversions), audience targeting, ad creative development, budget allocation, bidding strategies, and performance optimization. Start with small budgets to test and scale successful campaigns based on return on ad spend.'
        },
        {
          id: 'social-media-brand-building',
          prompt: 'How will you use social media to build brand awareness and engage with potential customers?',
          category: 'planning',
          helpText: 'Create social media strategy: platform selection based on audience demographics, content themes and posting schedule, visual brand consistency, community engagement tactics, user-generated content campaigns, social commerce features (Instagram Shopping, Facebook Shop), and influencer collaboration. Plan content mix: product showcases, behind-the-scenes content, customer stories, educational posts, and entertainment. Respond promptly to comments and messages to build relationships.'
        },
        {
          id: 'email-marketing-automation',
          prompt: 'What email marketing strategy will you implement to nurture leads and drive repeat purchases?',
          category: 'planning',
          helpText: 'Build email marketing system: lead magnets and opt-in incentives, welcome series for new subscribers, product recommendation emails, cart abandonment sequences, post-purchase follow-up, customer loyalty programs, and seasonal promotional campaigns. Segment audiences by: purchase behavior, demographics, engagement level, and product interests. Plan: email design templates, automation workflows, A/B testing, and compliance with anti-spam regulations (GDPR, CAN-SPAM).'
        },
        {
          id: 'conversion-rate-optimization',
          prompt: 'How will you systematically test and optimize your website to improve conversion rates?',
          category: 'planning',
          helpText: 'Plan optimization approach: A/B testing of key elements (headlines, product images, call-to-action buttons, pricing display), landing page optimization for ad campaigns, checkout process improvements, mobile experience enhancement, and personalization based on user behavior. Use tools like Google Optimize, Optimizely, or VWO for testing. Focus on: product page conversion, cart abandonment reduction, and overall user experience improvements. Document tests and implement winning variations.'
        }
      ]
    },
    {
      id: 'operations-customer-service',
      title: 'Operations & Customer Service Excellence',
      order: 4,
      reflectionPrompts: [
        {
          id: 'daily-operations-workflow',
          prompt: 'What daily and weekly operational workflows will keep your business running smoothly?',
          category: 'planning',
          helpText: 'Design operational systems: order processing and fulfillment workflows, inventory monitoring and reordering procedures, customer service response protocols, financial tracking and bookkeeping, marketing campaign management, and performance reporting routines. Create checklists and standard operating procedures (SOPs) for: order fulfillment, customer inquiries, product launches, promotional campaigns, and crisis management. Plan for task automation where possible.'
        },
        {
          id: 'customer-service-strategy',
          prompt: 'How will you deliver exceptional customer service that builds loyalty and generates positive reviews?',
          category: 'planning',
          helpText: 'Develop service standards: response time goals for inquiries (email, phone, chat), problem resolution procedures, return and refund policies, proactive communication during fulfillment, post-purchase follow-up, and customer feedback collection systems. Train on: product knowledge, conflict resolution, empathy and communication skills, and company policies. Implement: help desk software, FAQ sections, video tutorials, and self-service options for common issues.'
        },
        {
          id: 'supplier-vendor-management',
          prompt: 'How will you manage relationships with suppliers, manufacturers, and service providers?',
          category: 'planning',
          helpText: 'Plan vendor relationships: supplier evaluation and selection criteria, contract negotiation and terms, quality control and inspection processes, backup supplier identification, payment terms and cash flow management, and performance monitoring. Consider: minimum order quantities, lead times, seasonal capacity, international vs. domestic suppliers, and ethical sourcing practices. Maintain regular communication and build long-term partnerships for better terms and priority service.'
        },
        {
          id: 'quality-control-standards',
          prompt: 'What quality control measures will you implement to ensure customer satisfaction and brand reputation?',
          category: 'planning',
          helpText: 'Establish quality systems: incoming product inspection procedures, packaging quality standards, shipping accuracy checks, customer feedback monitoring, return analysis for quality issues, and supplier performance evaluation. Implement: quality checklists, photo documentation, batch tracking, and corrective action procedures. Plan for: handling defective products, supplier communication about issues, customer compensation for problems, and continuous improvement based on feedback patterns.'
        },
        {
          id: 'technology-automation-tools',
          prompt: 'What technology tools and automation will you use to increase efficiency and reduce manual work?',
          category: 'planning',
          helpText: 'Plan technology stack: inventory management software, customer relationship management (CRM), email marketing automation, accounting software, project management tools, social media scheduling, and analytics dashboards. Automate: order processing, inventory alerts, email sequences, social media posting, financial reporting, and customer segmentation. Consider integrations between platforms to reduce data entry and improve accuracy. Budget for software subscriptions and training.'
        },
        {
          id: 'performance-metrics-monitoring',
          prompt: 'What key performance indicators will you track to monitor business health and identify improvement opportunities?',
          category: 'planning',
          helpText: 'Define KPIs across areas: financial (revenue, profit margin, average order value, customer acquisition cost), operational (fulfillment accuracy, shipping time, return rate), marketing (conversion rate, traffic sources, email open rates), and customer service (response time, satisfaction scores, review ratings). Create dashboards and reporting schedules: daily operational metrics, weekly marketing performance, monthly financial review, and quarterly strategic assessment. Use data to make informed decisions and identify trends.'
        }
      ]
    },
    {
      id: 'financial-management-scaling',
      title: 'Financial Management & Business Scaling',
      order: 5,
      reflectionPrompts: [
        {
          id: 'financial-planning-budgeting',
          prompt: 'How will you manage cash flow, budgeting, and financial planning for your e-commerce business?',
          category: 'planning',
          helpText: 'Develop financial systems: startup budget and funding requirements, monthly expense tracking (fixed and variable costs), revenue forecasting based on traffic and conversion projections, cash flow management for inventory purchases, seasonal planning for demand fluctuations, and profit margin analysis by product. Use accounting software (QuickBooks, Xero) and separate business banking. Plan for: tax obligations, emergency funds, and reinvestment strategies.'
        },
        {
          id: 'pricing-profitability-optimization',
          prompt: 'How will you optimize pricing and product mix to maximize profitability while remaining competitive?',
          category: 'planning',
          helpText: 'Analyze profitability: calculate true product costs including shipping, platform fees, returns, and marketing costs, determine minimum viable margins, identify high and low-margin products, and optimize product mix accordingly. Test pricing strategies: A/B testing price points, bundle pricing, quantity discounts, and seasonal promotions. Monitor competitor pricing and adjust positioning. Consider value-added services or premium options to increase average order value and margins.'
        },
        {
          id: 'growth-investment-strategy',
          prompt: 'What growth strategies will you pursue, and how will you finance expansion initiatives?',
          category: 'planning',
          helpText: 'Plan growth approach: market expansion (new products, categories, geographic regions), channel expansion (additional marketplaces, retail partnerships), customer acquisition scaling, team building, and infrastructure investments. Consider financing options: reinvesting profits, business loans, lines of credit, investor funding, or crowdfunding. Prioritize growth initiatives by: ROI potential, resource requirements, risk level, and alignment with core competencies. Plan scaling timeline and milestones.'
        },
        {
          id: 'tax-legal-compliance',
          prompt: 'How will you ensure proper tax compliance and legal structure for your e-commerce business?',
          category: 'planning',
          helpText: 'Address legal requirements: business registration and structure (LLC, corporation), sales tax collection and remittance across states/countries, income tax planning and quarterly payments, employment tax if hiring, international tax obligations for global sales, and compliance with consumer protection laws. Maintain proper records: receipts, invoices, bank statements, and transaction records. Consider working with accountant and attorney for complex issues.'
        },
        {
          id: 'risk-management-insurance',
          prompt: 'What risks does your business face, and how will you protect against potential losses?',
          category: 'planning',
          helpText: 'Identify and mitigate risks: inventory loss or damage, supplier disruptions, platform policy changes, economic downturns, competition, chargebacks and fraud, product liability issues, and cyber security threats. Consider insurance: general liability, product liability, cyber liability, business interruption, and key person insurance. Implement: backup suppliers, diversified marketing channels, emergency funds, data backups, and crisis communication plans.'
        },
        {
          id: 'exit-strategy-long-term-planning',
          prompt: 'What are your long-term goals for the business, and what potential exit strategies might you consider?',
          category: 'planning',
          helpText: 'Define long-term vision: lifestyle business for ongoing income, growth company for maximum valuation, acquisition target for strategic buyer, or public offering potential. Build value drivers: strong financials, defensible competitive advantages, diversified revenue streams, strong team and systems, and market leadership position. Consider exit options: selling to competitor, private equity acquisition, employee buyout, or family succession. Plan business operations to maintain value and transferability.'
        }
      ]
    },
    {
      id: 'advanced-strategies-optimization',
      title: 'Advanced Strategies & Optimization',
      order: 6,
      reflectionPrompts: [
        {
          id: 'data-analytics-insights',
          prompt: 'How will you use advanced analytics to gain deeper customer insights and optimize business decisions?',
          category: 'planning',
          helpText: 'Leverage data analytics: customer segmentation analysis, lifetime value calculation, cohort analysis for retention trends, attribution modeling for marketing channels, predictive analytics for inventory planning, and competitive intelligence gathering. Use advanced tools: Google Analytics 4, customer data platforms, business intelligence software, and machine learning for personalization. Create data-driven decision frameworks and regular analysis routines.'
        },
        {
          id: 'personalization-customer-experience',
          prompt: 'What personalization and customer experience strategies will differentiate your brand?',
          category: 'planning',
          helpText: 'Enhance customer experience: personalized product recommendations, dynamic content based on browsing behavior, customized email campaigns, loyalty programs with tiered benefits, VIP customer treatment, and omnichannel experience consistency. Implement: AI-powered chatbots, dynamic pricing, personalized landing pages, and custom product options. Focus on: reducing friction, anticipating needs, exceeding expectations, and creating memorable interactions that drive word-of-mouth.'
        },
        {
          id: 'international-expansion-strategy',
          prompt: 'How might you expand internationally, and what considerations are involved?',
          category: 'consideration',
          helpText: 'Plan international expansion: market research for target countries, currency and payment method considerations, shipping and logistics for international orders, customs and duty management, local language and cultural adaptation, international tax and legal compliance, and customer service in multiple time zones. Consider: marketplace-first approach (Amazon, eBay), local partnerships, or direct expansion. Start with English-speaking markets or countries with strong e-commerce demand.'
        },
        {
          id: 'sustainability-social-responsibility',
          prompt: 'How will you incorporate sustainability and social responsibility into your business model?',
          category: 'consideration',
          helpText: 'Build responsible practices: sustainable packaging options, eco-friendly product sourcing, carbon-neutral shipping programs, waste reduction in operations, ethical supplier relationships, and social cause partnerships. Communicate values: transparent supply chain information, sustainability reports, charitable giving programs, and community involvement. Balance: cost implications, customer values alignment, marketing benefits, and genuine commitment to causes beyond profit motives.'
        },
        {
          id: 'innovation-competitive-advantage',
          prompt: 'What innovative approaches or technologies will you explore to maintain competitive advantage?',
          category: 'consideration',
          helpText: 'Explore innovation opportunities: augmented reality for product visualization, artificial intelligence for customer service, voice commerce optimization, subscription and membership models, social commerce integration, blockchain for supply chain transparency, and emerging platform adoption. Stay current with: industry trends, technology developments, customer behavior changes, and competitor innovations. Balance: early adoption benefits, implementation costs, customer readiness, and risk tolerance.'
        },
        {
          id: 'team-building-organizational-development',
          prompt: 'How will you build and develop a team to support business growth and maintain culture?',
          category: 'planning',
          helpText: 'Plan team development: role definition and hiring priorities, remote vs. in-person work considerations, training and development programs, performance management systems, compensation and benefits planning, and company culture development. Start with: virtual assistants or contractors for specific tasks, then full-time hires for core functions. Create: clear job descriptions, onboarding processes, communication protocols, and growth opportunities. Foster: entrepreneurial mindset, customer focus, and continuous learning culture.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'ecommerce-fundamentals-guide',
      title: 'E-commerce Business Fundamentals',
      type: 'guide',
      excerpt: 'Master e-commerce basics including **business model selection**, **platform setup**, **product sourcing**, and **launch strategies**.',
      content: 'Starting an e-commerce business requires strategic planning and execution across multiple areas. **Business Model Selection:** Choose between dropshipping, private label, wholesale, or digital products based on your capital, risk tolerance, and long-term goals. **Platform Setup:** Select the right e-commerce platform (Shopify, WooCommerce, BigCommerce) based on your technical skills, budget, and scalability needs. **Product Sourcing:** Develop reliable supplier relationships, ensure quality control, and manage inventory effectively. **Launch Strategies:** Plan your go-to-market approach with proper market validation, competitive analysis, and customer acquisition strategies. Focus on solving real customer problems with quality products and exceptional service.',
      tags: ['ecommerce-basics', 'business-models', 'platform-selection', 'product-sourcing'],
      readTime: '20 min',
      difficulty: 'beginner'
    },
    {
      id: 'digital-marketing-ecommerce',
      title: 'Digital Marketing for E-commerce Success',
      type: 'guide',
      excerpt: 'Drive traffic and conversions with **SEO optimization**, **paid advertising**, **email marketing**, and **social media strategies**.',
      content: 'E-commerce success depends heavily on effective digital marketing across multiple channels. **SEO Optimization:** Optimize product pages, category structures, and content for search engines to drive organic traffic. **Paid Advertising:** Use Google Ads, Facebook ads, and platform-specific advertising to reach targeted customers with strong ROI. **Email Marketing:** Build automated sequences for welcome series, cart abandonment, and customer retention to maximize lifetime value. **Social Media Strategies:** Leverage visual platforms like Instagram and Pinterest for product discovery and brand building. Focus on data-driven optimization, testing different approaches, and scaling successful campaigns while maintaining profitability.',
      tags: ['ecommerce-marketing', 'seo-optimization', 'paid-advertising', 'email-marketing'],
      readTime: '25 min',
      difficulty: 'intermediate'
    },
    {
      id: 'ecommerce-operations-optimization',
      title: 'E-commerce Operations and Customer Service',
      type: 'guide',
      excerpt: 'Streamline operations with **fulfillment systems**, **inventory management**, **customer service**, and **quality control**.',
      content: 'Operational excellence is crucial for e-commerce sustainability and growth. **Fulfillment Systems:** Develop efficient order processing, packaging, and shipping workflows that scale with growth. **Inventory Management:** Implement systems for tracking stock levels, forecasting demand, and managing supplier relationships. **Customer Service:** Create responsive support systems that handle inquiries, returns, and issues effectively to build customer loyalty. **Quality Control:** Establish standards for product quality, packaging presentation, and shipping accuracy to maintain brand reputation. Focus on automation where possible while maintaining flexibility for growth and seasonal changes.',
      tags: ['ecommerce-operations', 'fulfillment', 'inventory-management', 'customer-service'],
      readTime: '22 min',
      difficulty: 'intermediate'
    },
    {
      id: 'ecommerce-financial-management',
      title: 'Financial Management and Scaling Strategies',
      type: 'guide',
      excerpt: 'Manage finances and scale effectively with **cash flow planning**, **profitability analysis**, **growth funding**, and **risk management**.',
      content: 'Financial management is critical for e-commerce sustainability and growth. **Cash Flow Planning:** Manage inventory investments, seasonal fluctuations, and operating expenses to maintain healthy cash flow. **Profitability Analysis:** Calculate true product costs including all fees and marketing expenses to optimize pricing and product mix. **Growth Funding:** Explore financing options for expansion including reinvestment, loans, or investor funding. **Risk Management:** Protect against inventory loss, supplier disruptions, platform changes, and other business risks through diversification and insurance. Focus on building sustainable unit economics and reinvesting profits strategically for long-term growth.',
      tags: ['ecommerce-finance', 'cash-flow', 'profitability', 'business-scaling'],
      readTime: '24 min',
      difficulty: 'expert'
    },
    {
      id: 'advanced-ecommerce-strategies',
      title: 'Advanced E-commerce Growth and Optimization',
      type: 'guide',
      excerpt: 'Implement sophisticated strategies including **data analytics**, **personalization**, **international expansion**, and **innovation adoption**.',
      content: 'Advanced e-commerce strategies separate market leaders from competitors. **Data Analytics:** Use customer data, cohort analysis, and predictive analytics to optimize marketing, inventory, and customer experience decisions. **Personalization:** Implement AI-driven recommendations, dynamic content, and customized experiences to increase conversion rates and customer lifetime value. **International Expansion:** Explore global markets through marketplaces, localization, and cross-border logistics while managing currency, tax, and regulatory complexities. **Innovation Adoption:** Stay ahead with emerging technologies like AR/VR, voice commerce, and social commerce while maintaining focus on proven fundamentals. Balance innovation with execution excellence and customer-centricity.',
      tags: ['advanced-ecommerce', 'data-analytics', 'personalization', 'international-expansion'],
      readTime: '26 min',
      difficulty: 'expert'
    }
  ]
};

export const personalDevelopmentLifeCoachingTemplate: GuidanceTemplate = {
  id: 'personal-development-life-coaching',
  title: 'Personal Development & Life Coaching',
  description: 'Design a comprehensive personal development plan and coaching approach',
  category: 'personal-growth',
  icon: '⚡',
  sections: [
    {
      id: 'self-assessment-awareness',
      title: 'Self-Assessment & Self-Awareness',
      order: 1,
      reflectionPrompts: [
        {
          id: 'values-beliefs-assessment',
          prompt: 'What are your core values, beliefs, and principles that guide your decisions and actions?',
          category: 'research',
          helpText: 'Identify 5-7 core values that are most important to you: integrity, growth, family, achievement, creativity, service, security, adventure, etc. Examine your beliefs about success, relationships, money, work, and personal potential. Consider where these values and beliefs came from (family, culture, experiences) and whether they still serve you. Create a personal values statement that guides decision-making and life choices.'
        },
        {
          id: 'strengths-talents-inventory',
          prompt: 'What are your natural strengths, talents, and abilities that you can leverage for growth?',
          category: 'research',
          helpText: 'Catalog your strengths: natural talents, learned skills, knowledge areas, personality strengths, emotional intelligence capabilities, and unique perspectives. Use tools like StrengthsFinder, VIA Character Strengths, or 360-degree feedback. Consider feedback from others about what you do well. Identify strengths you underutilize and those that energize you most. Plan how to apply strengths more intentionally in personal and professional contexts.'
        },
        {
          id: 'limiting-beliefs-obstacles',
          prompt: 'What limiting beliefs, fears, or internal obstacles are holding you back from reaching your potential?',
          category: 'research',
          helpText: 'Identify limiting beliefs: "I\'m not good enough," "I don\'t deserve success," "I\'m too old/young," "I lack talent," "Change is too hard," etc. Examine fears: failure, success, rejection, judgment, uncertainty, or loss of control. Notice patterns in self-talk and automatic thoughts. Consider childhood experiences, past failures, or criticisms that created these beliefs. Challenge beliefs by examining evidence for and against them. Develop empowering alternative beliefs.'
        },
        {
          id: 'life-satisfaction-wheel',
          prompt: 'How satisfied are you currently in different areas of your life, and where do you want to focus improvement?',
          category: 'research',
          helpText: 'Rate satisfaction (1-10) in key life areas: career/work, relationships/family, health/fitness, finances, personal growth, fun/recreation, physical environment, and contribution/service. Create a life wheel diagram to visualize balance and identify areas needing attention. Consider why certain areas are low and what specifically needs to change. Prioritize 2-3 areas for focused improvement while maintaining strengths in high-satisfaction areas.'
        },
        {
          id: 'personality-behavioral-patterns',
          prompt: 'What personality traits, behavioral patterns, and habits currently define how you show up in the world?',
          category: 'research',
          helpText: 'Assess personality using frameworks like Myers-Briggs, Big Five, or Enneagram to understand preferences and tendencies. Examine behavioral patterns: how you handle stress, make decisions, communicate, approach challenges, and interact with others. Identify current habits (positive and negative) in areas like morning routines, work patterns, health choices, and relationship behaviors. Consider feedback from others about your behavioral patterns and blind spots.'
        },
        {
          id: 'life-story-narrative',
          prompt: 'What is your current life story and narrative, and how does it impact your future possibilities?',
          category: 'research',
          helpText: 'Examine your personal narrative: the story you tell yourself about who you are, what you\'re capable of, and what\'s possible for your future. Identify recurring themes, victim vs. hero elements, and empowering vs. limiting storylines. Consider pivotal moments that shaped your identity and narrative. Recognize how your story influences your choices and opportunities. Begin crafting a more empowering narrative that supports your growth and desired future.'
        }
      ]
    },
    {
      id: 'vision-goal-setting',
      title: 'Vision Creation & Goal Setting',
      order: 2,
      reflectionPrompts: [
        {
          id: 'life-vision-ideal-future',
          prompt: 'What is your compelling vision for your ideal life 5-10 years from now?',
          category: 'planning',
          helpText: 'Create a detailed vision covering all life areas: career achievements and impact, relationship quality and family life, health and vitality levels, financial situation and freedom, personal growth and learning, contribution and legacy, lifestyle and environment, and spiritual/meaning dimensions. Write in present tense as if already achieved. Include specific, vivid details that inspire and motivate you. Consider what success truly means to you, not society\'s definition.'
        },
        {
          id: 'smart-goals-framework',
          prompt: 'What specific, measurable goals will move you toward your vision in the next 1-3 years?',
          category: 'planning',
          helpText: 'Create SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) for priority life areas. Include: career/professional goals, relationship and family goals, health and fitness targets, financial objectives, personal development aims, and contribution/service goals. Set goals at different time horizons: 90-day quick wins, 1-year milestones, and 3-year major achievements. Ensure goals align with your values and vision. Include both outcome goals (what you want to achieve) and process goals (habits you want to build).'
        },
        {
          id: 'obstacles-challenges-planning',
          prompt: 'What obstacles, challenges, or resistance might you face in pursuing your goals, and how will you overcome them?',
          category: 'planning',
          helpText: 'Anticipate potential obstacles: time constraints, financial limitations, lack of skills or knowledge, fear and self-doubt, unsupportive people, competing priorities, and unexpected life events. Identify internal resistance: procrastination, perfectionism, comfort zone attachment, and limiting beliefs. Develop specific strategies for each obstacle: skill-building plans, resource acquisition, mindset work, support system development, and contingency planning. Create "if-then" implementation intentions for common challenges.'
        },
        {
          id: 'milestone-tracking-systems',
          prompt: 'How will you track progress, celebrate milestones, and maintain motivation toward your goals?',
          category: 'planning',
          helpText: 'Design tracking systems: weekly progress reviews, monthly milestone assessments, quarterly goal evaluations, and annual vision alignment checks. Create visual tracking tools: progress charts, habit trackers, vision boards, or digital dashboards. Plan celebration rituals for achieving milestones: small rewards for weekly wins, meaningful celebrations for major achievements, and sharing successes with supportive people. Include both quantitative metrics and qualitative reflection on growth and learning.'
        },
        {
          id: 'action-planning-prioritization',
          prompt: 'What daily, weekly, and monthly actions will you take to make consistent progress toward your goals?',
          category: 'planning',
          helpText: 'Break goals into actionable steps: daily habits and routines, weekly focus areas and projects, monthly milestone activities, and quarterly major initiatives. Prioritize actions using frameworks like the 80/20 rule or Eisenhower Matrix. Schedule high-priority activities in your calendar as non-negotiable appointments. Identify keystone habits that create cascading positive effects. Plan weekly planning sessions to review progress and adjust actions. Include both urgent goal-related actions and important but not urgent growth activities.'
        },
        {
          id: 'accountability-support-systems',
          prompt: 'Who will support your journey and hold you accountable to your commitments and goals?',
          category: 'planning',
          helpText: 'Build accountability structure: accountability partner or group, mentor or coach, supportive family and friends, and professional communities or masterminds. Define accountability processes: regular check-ins, progress sharing, challenge discussions, and celebration of wins. Consider hiring professional support: life coach, therapist, trainer, or consultant for specific areas. Create consequences for not following through and rewards for consistency. Share your goals publicly when appropriate to increase commitment and support.'
        }
      ]
    },
    {
      id: 'mindset-mental-mastery',
      title: 'Mindset & Mental Mastery',
      order: 3,
      reflectionPrompts: [
        {
          id: 'growth-mindset-development',
          prompt: 'How will you cultivate a growth mindset that embraces challenges and sees failure as learning opportunities?',
          category: 'planning',
          helpText: 'Shift from fixed to growth mindset: replace "I can\'t do this" with "I can\'t do this yet," view challenges as opportunities to grow rather than threats to avoid, see effort as the path to mastery rather than a sign of inadequacy, learn from criticism instead of taking it personally, and find inspiration in others\' success rather than feeling threatened. Practice reframing setbacks as feedback and stepping stones. Celebrate effort and learning over just results.'
        },
        {
          id: 'self-talk-thought-management',
          prompt: 'What strategies will you use to manage your inner dialogue and develop more empowering self-talk?',
          category: 'planning',
          helpText: 'Monitor self-talk patterns: notice critical, fearful, or limiting internal dialogue and identify triggers for negative self-talk. Develop thought awareness: practice catching unhelpful thoughts without judgment, question the accuracy and usefulness of negative thoughts, and replace limiting thoughts with empowering alternatives. Create positive affirmations and mantras aligned with your goals. Practice cognitive reframing techniques. Use mindfulness to observe thoughts without being controlled by them. Develop a compassionate inner voice.'
        },
        {
          id: 'resilience-emotional-regulation',
          prompt: 'How will you build resilience and develop better emotional regulation skills?',
          category: 'planning',
          helpText: 'Build resilience through: developing stress management techniques, building strong support networks, maintaining perspective during difficulties, practicing self-compassion during setbacks, and focusing on what you can control. Improve emotional regulation: identify emotional triggers and patterns, practice pause-and-breathe responses, develop healthy coping strategies, build emotional vocabulary and awareness, and create protocols for managing intense emotions. Include regular practices like meditation, journaling, or therapy.'
        },
        {
          id: 'confidence-self-efficacy',
          prompt: 'What specific actions will you take to build genuine confidence and self-efficacy?',
          category: 'planning',
          helpText: 'Build confidence through: taking on progressively challenging tasks, developing competence in important skills, keeping evidence journals of successes and progress, seeking feedback and learning from it, and stepping outside your comfort zone regularly. Practice self-efficacy by setting and achieving small goals, learning from successful people in areas you want to grow, visualizing successful outcomes, and building on past successes. Address imposter syndrome by recognizing your legitimate accomplishments and qualifications.'
        },
        {
          id: 'fear-management-courage',
          prompt: 'How will you face your fears and develop the courage to take important risks?',
          category: 'planning',
          helpText: 'Develop courage by: identifying specific fears holding you back, understanding the difference between rational and irrational fears, taking small steps toward feared situations, building tolerance for discomfort and uncertainty, and reframing fear as excitement or growth opportunity. Practice exposure therapy principles: gradual exposure to feared situations, celebrating small acts of courage, learning from each experience, and building confidence through action despite fear. Create support systems for taking risks.'
        },
        {
          id: 'mindfulness-present-moment',
          prompt: 'What mindfulness and present-moment awareness practices will support your mental mastery?',
          category: 'planning',
          helpText: 'Develop mindfulness through: daily meditation or mindfulness practice, present-moment awareness throughout the day, mindful eating, walking, or other activities, body awareness and breathing techniques, and regular digital detoxes or technology breaks. Use mindfulness to: reduce anxiety about the future, let go of regrets about the past, increase focus and concentration, improve emotional regulation, and enhance overall well-being and life satisfaction. Start with short practices and build gradually.'
        }
      ]
    },
    {
      id: 'habits-behavior-change',
      title: 'Habits & Behavior Change',
      order: 4,
      reflectionPrompts: [
        {
          id: 'keystone-habits-identification',
          prompt: 'What keystone habits will create the most positive ripple effects across multiple areas of your life?',
          category: 'planning',
          helpText: 'Identify high-impact habits that trigger positive changes in other areas: morning routine that sets tone for the day, exercise habit that boosts energy and confidence, meditation practice that improves focus and emotional regulation, reading habit that expands knowledge and perspectives, or evening reflection that enhances self-awareness. Focus on 1-3 keystone habits rather than trying to change everything at once. Consider habits that align with your identity and values.'
        },
        {
          id: 'habit-stacking-implementation',
          prompt: 'How will you use habit stacking and environmental design to make new habits stick?',
          category: 'planning',
          helpText: 'Use habit stacking: attach new habits to existing strong habits (after I pour coffee, I will meditate for 5 minutes). Design environment for success: make good habits obvious and easy (lay out workout clothes, keep healthy snacks visible), make bad habits invisible and difficult (put phone in another room, remove junk food from house). Create implementation intentions: specific if-then plans for when and where you\'ll perform habits. Reduce friction for good habits and increase friction for bad habits.'
        },
        {
          id: 'bad-habits-elimination',
          prompt: 'What negative habits or behaviors do you need to eliminate, and what will you replace them with?',
          category: 'planning',
          helpText: 'Identify limiting habits: procrastination patterns, excessive screen time, negative self-talk, unhealthy eating, poor sleep habits, or avoidance behaviors. Understand habit triggers: emotional states, environments, people, or situations that prompt bad habits. Don\'t just eliminate - replace bad habits with positive alternatives that meet the same underlying need. Address root causes: stress, boredom, loneliness, or fear that drive negative behaviors. Create accountability and tracking systems for habit change.'
        },
        {
          id: 'habit-tracking-systems',
          prompt: 'What systems will you use to track habits and maintain consistency over time?',
          category: 'planning',
          helpText: 'Choose tracking methods: habit tracking apps, physical calendars or journals, habit trackers, or simple checkboxes. Track leading indicators (actions) rather than just outcomes (results). Keep tracking simple and sustainable - don\'t over-complicate the system. Include both daily habits and weekly/monthly behaviors. Plan for missed days: have restart protocols rather than all-or-nothing thinking. Review progress regularly and adjust habits based on what\'s working and what isn\'t.'
        },
        {
          id: 'behavior-change-motivation',
          prompt: 'How will you maintain motivation and momentum when building new habits becomes challenging?',
          category: 'planning',
          helpText: 'Plan for motivation dips: expect challenges and prepare strategies in advance, connect habits to deeper values and identity, track small wins and progress over perfection, and use social support and accountability. Create rewards and celebration systems for consistency. Start small and build gradually - focus on showing up rather than perfect performance. Develop identity-based habits: "I am someone who exercises daily" rather than "I want to lose weight." Plan comeback strategies for when you slip up.'
        },
        {
          id: 'lifestyle-design-integration',
          prompt: 'How will you integrate your new habits into a holistic lifestyle design that supports your goals?',
          category: 'planning',
          helpText: 'Design daily and weekly routines that support your goals and values: morning routines that energize and focus you, work routines that maximize productivity, evening routines that promote recovery and reflection, and weekend routines that balance productivity with restoration. Consider seasonal adjustments and life transitions. Plan for travel, sick days, and disruptions. Create flexible structures rather than rigid rules. Align habits with natural energy patterns and preferences.'
        }
      ]
    },
    {
      id: 'relationships-communication',
      title: 'Relationships & Communication Skills',
      order: 5,
      reflectionPrompts: [
        {
          id: 'relationship-audit-assessment',
          prompt: 'What is the current state of your key relationships, and which ones need attention or improvement?',
          category: 'research',
          helpText: 'Audit relationships in different categories: family relationships (spouse, children, parents, siblings), friendships (close friends, social circles, acquaintances), professional relationships (colleagues, mentors, mentees, networking contacts), and community relationships (neighbors, service providers, group members). Assess relationship quality, energy exchange (giving vs. receiving), alignment with your values and goals, and impact on your well-being. Identify relationships to invest more in, boundaries to set, and toxic relationships to limit or end.'
        },
        {
          id: 'communication-skills-development',
          prompt: 'What communication skills do you need to develop to build stronger, more authentic relationships?',
          category: 'planning',
          helpText: 'Develop core communication skills: active listening without planning your response, asking powerful questions that deepen conversations, expressing yourself clearly and authentically, giving and receiving feedback constructively, managing conflict productively, and setting boundaries respectfully. Practice empathy and perspective-taking. Learn to communicate your needs, boundaries, and values clearly. Develop emotional intelligence in conversations. Consider different communication styles and adapt appropriately.'
        },
        {
          id: 'boundary-setting-practices',
          prompt: 'How will you establish and maintain healthy boundaries in your personal and professional relationships?',
          category: 'planning',
          helpText: 'Identify where boundaries are needed: time boundaries (availability, work-life balance), emotional boundaries (not taking on others\' emotions), physical boundaries (personal space, touch), and value boundaries (behaviors you won\'t tolerate). Learn to say no gracefully and without excessive explanation. Communicate boundaries clearly and consistently. Plan responses to boundary violations. Practice self-advocacy and assertiveness. Balance being helpful with maintaining your own well-being and priorities.'
        },
        {
          id: 'social-skills-networking',
          prompt: 'What social skills and networking abilities do you want to develop for personal and professional growth?',
          category: 'planning',
          helpText: 'Develop social skills: starting conversations naturally, building rapport and connection, reading social cues and body language, adapting to different social contexts, and maintaining long-term relationships. Build networking abilities: authentic relationship building rather than transactional networking, following up and staying in touch, providing value to others, and leveraging relationships respectfully for mutual benefit. Practice social skills in low-stakes environments before important situations.'
        },
        {
          id: 'conflict-resolution-skills',
          prompt: 'How will you develop skills to handle conflict and difficult conversations more effectively?',
          category: 'planning',
          helpText: 'Learn conflict resolution approaches: understanding different conflict styles, separating people from problems, focusing on interests rather than positions, looking for win-win solutions, and managing emotions during conflict. Practice difficult conversation skills: preparing for important conversations, staying calm under pressure, listening to understand rather than to defend, and finding common ground. Develop repair skills for when conversations go wrong. Learn when to seek mediation or professional help.'
        },
        {
          id: 'relationship-investment-strategies',
          prompt: 'What specific strategies will you use to deepen and strengthen your most important relationships?',
          category: 'planning',
          helpText: 'Plan relationship investment: regular quality time with important people, meaningful conversations beyond surface topics, shared experiences and activities, expressing appreciation and gratitude, remembering and celebrating important events, and providing support during challenges. Create relationship rituals: weekly date nights, monthly friend dinners, annual family traditions, or quarterly check-ins with mentors. Practice vulnerability and authentic sharing. Show interest in others\' goals and dreams. Balance giving and receiving in relationships.'
        }
      ]
    },
    {
      id: 'continuous-growth-mastery',
      title: 'Continuous Growth & Mastery',
      order: 6,
      reflectionPrompts: [
        {
          id: 'learning-development-plan',
          prompt: 'What skills, knowledge, or areas of expertise do you want to develop over the next 1-5 years?',
          category: 'planning',
          helpText: 'Identify learning priorities: professional skills for career advancement, personal skills for life enhancement, creative skills for fulfillment and expression, leadership skills for increased impact, and technical skills for staying current. Consider both hard skills (specific technical abilities) and soft skills (communication, emotional intelligence, leadership). Create learning pathways: formal education, online courses, books and podcasts, mentorship, coaching, workshops, and experiential learning. Prioritize based on goals, interests, and market demand.'
        },
        {
          id: 'feedback-growth-systems',
          prompt: 'How will you seek feedback and use it for continuous improvement and growth?',
          category: 'planning',
          helpText: 'Create feedback systems: regular feedback from supervisors, colleagues, friends, and family, 360-degree feedback assessments, customer or client feedback, and self-reflection and assessment. Learn to ask for specific, actionable feedback rather than general comments. Develop thick skin for receiving criticism while staying open to learning. Create feedback integration processes: reflecting on feedback, identifying patterns, creating improvement plans, and following up on progress. Express gratitude for honest feedback and show you\'re implementing suggestions.'
        },
        {
          id: 'mentorship-coaching-relationships',
          prompt: 'What mentorship, coaching, or guidance relationships will accelerate your growth and development?',
          category: 'planning',
          helpText: 'Identify mentorship needs: areas where you need guidance, people who have achieved what you want to achieve, and specific skills or knowledge you want to develop. Approach potential mentors respectfully: offer value in return, be specific about what you want to learn, and respect their time constraints. Consider formal coaching relationships for major transitions or skill development. Also plan to mentor others - teaching accelerates your own learning and builds leadership skills. Create learning communities or mastermind groups.'
        },
        {
          id: 'experimentation-risk-taking',
          prompt: 'How will you embrace experimentation and calculated risk-taking to accelerate your growth?',
          category: 'planning',
          helpText: 'Build experimentation mindset: try new approaches regularly, view failures as learning opportunities, take calculated risks outside your comfort zone, and test assumptions rather than making plans based on guesswork. Plan regular experiments: monthly challenges, quarterly projects, or annual growth initiatives. Start small and build confidence. Document lessons learned from experiments. Create safe-to-fail experiments where downside is limited but upside is significant. Balance experimentation with consistent execution on proven approaches.'
        },
        {
          id: 'reflection-integration-practices',
          prompt: 'What reflection and integration practices will help you learn from experiences and apply insights?',
          category: 'planning',
          helpText: 'Develop reflection routines: daily reflection on lessons learned, weekly review of progress and insights, monthly deep-dive analysis of major experiences, and quarterly or annual life reviews. Use reflection methods: journaling, meditation, discussion with others, or structured self-assessment tools. Focus on both successes (what worked and why) and challenges (what didn\'t work and what you learned). Create systems for capturing and applying insights: insight journals, action plans, or teaching others what you\'ve learned.'
        },
        {
          id: 'legacy-contribution-planning',
          prompt: 'How do you want to contribute to others and create a meaningful legacy through your personal development?',
          category: 'planning',
          helpText: 'Define your desired contribution: how you want to impact others through your growth, skills or wisdom you want to share, causes or communities you want to support, and legacy you want to leave. Plan contribution activities: mentoring others, volunteering for meaningful causes, sharing your knowledge through content creation, and using your skills for service. Balance personal growth with service to others. Consider how your unique combination of strengths, experiences, and values can create distinctive value for others. Plan for different life stages and evolving contribution opportunities.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'self-awareness-fundamentals',
      title: 'Building Self-Awareness and Personal Assessment',
      type: 'guide',
      excerpt: 'Develop deep self-awareness through **values clarification**, **strengths identification**, **limiting beliefs assessment**, and **life satisfaction evaluation**.',
      content: 'Self-awareness is the foundation of all personal development and lasting change. **Values Clarification:** Identify your core values through reflection exercises, values card sorts, and life experience analysis. Ensure your values guide major life decisions rather than external expectations. **Strengths Identification:** Use assessment tools, feedback from others, and experience reflection to catalog your natural talents and developed skills. Focus on leveraging strengths rather than just fixing weaknesses. **Limiting Beliefs Assessment:** Uncover unconscious beliefs that limit your potential through thought pattern analysis, childhood message examination, and fear identification. **Life Satisfaction Evaluation:** Assess current satisfaction across life areas using tools like the Wheel of Life to prioritize improvement areas. Regular self-assessment creates the awareness needed for intentional growth and change.',
      tags: ['self-awareness', 'values-clarification', 'strengths-assessment', 'limiting-beliefs'],
      readTime: '18 min',
      difficulty: 'beginner'
    },
    {
      id: 'goal-setting-achievement',
      title: 'Effective Goal Setting and Achievement Systems',
      type: 'guide',
      excerpt: 'Master goal achievement through **vision creation**, **SMART goal frameworks**, **action planning**, and **accountability systems**.',
      content: 'Effective goal setting goes beyond wishful thinking to create systematic achievement processes. **Vision Creation:** Develop compelling long-term visions that inspire and guide your goals. Connect goals to deeper values and purposes for sustained motivation. **SMART Goal Frameworks:** Create Specific, Measurable, Achievable, Relevant, and Time-bound goals that provide clear direction and success metrics. **Action Planning:** Break large goals into daily, weekly, and monthly actions. Use implementation intentions and habit stacking to ensure consistent progress. **Accountability Systems:** Build support structures through accountability partners, coaches, or groups. Track progress regularly and celebrate milestones to maintain momentum. Focus on process goals (habits) as much as outcome goals (results) for sustainable success.',
      tags: ['goal-setting', 'vision-creation', 'action-planning', 'accountability'],
      readTime: '22 min',
      difficulty: 'intermediate'
    },
    {
      id: 'mindset-mental-strength',
      title: 'Developing Growth Mindset and Mental Resilience',
      type: 'guide',
      excerpt: 'Build mental strength through **growth mindset cultivation**, **thought management**, **resilience building**, and **confidence development**.',
      content: 'Mental strength and mindset are crucial for overcoming challenges and achieving lasting success. **Growth Mindset Cultivation:** Shift from fixed to growth mindset by embracing challenges, viewing effort as mastery path, learning from criticism, and finding inspiration in others\' success. **Thought Management:** Develop awareness of self-talk patterns and practice cognitive reframing techniques. Replace limiting thoughts with empowering alternatives through mindfulness and cognitive restructuring. **Resilience Building:** Develop bounce-back ability through stress management, support systems, perspective maintenance, and self-compassion practices. **Confidence Development:** Build genuine confidence through competence building, success documentation, progressive challenges, and comfort zone expansion. Focus on developing internal validation rather than relying solely on external approval.',
      tags: ['growth-mindset', 'thought-management', 'resilience', 'confidence-building'],
      readTime: '20 min',
      difficulty: 'intermediate'
    },
    {
      id: 'habit-behavior-change',
      title: 'Mastering Habit Formation and Behavior Change',
      type: 'guide',
      excerpt: 'Transform your life through **keystone habits**, **habit stacking**, **environmental design**, and **sustainable behavior change**.',
      content: 'Lasting personal development happens through consistent daily habits and behaviors. **Keystone Habits:** Identify high-impact habits that create positive ripple effects across multiple life areas. Focus on 1-3 keystone habits rather than overwhelming yourself with too many changes. **Habit Stacking:** Attach new habits to existing strong habits using implementation intentions. Design your environment to make good habits obvious and easy while making bad habits invisible and difficult. **Environmental Design:** Modify your physical and social environment to support desired behaviors and reduce friction for positive habits. **Sustainable Behavior Change:** Start small, track consistently, plan for setbacks, and focus on identity-based change ("I am someone who...") rather than just outcome-based goals. Use social support and accountability to maintain momentum through challenging periods.',
      tags: ['habit-formation', 'behavior-change', 'environmental-design', 'keystone-habits'],
      readTime: '24 min',
      difficulty: 'expert'
    },
    {
      id: 'relationships-communication-mastery',
      title: 'Relationship Building and Communication Excellence',
      type: 'guide',
      excerpt: 'Enhance relationships through **communication skills**, **boundary setting**, **conflict resolution**, and **social intelligence**.',
      content: 'Strong relationships are essential for personal fulfillment and professional success. **Communication Skills:** Develop active listening, powerful questioning, authentic expression, and constructive feedback skills. Practice empathy and perspective-taking to deepen connections. **Boundary Setting:** Learn to establish and maintain healthy boundaries in personal and professional relationships. Practice saying no gracefully while maintaining respect and connection. **Conflict Resolution:** Develop skills for handling difficult conversations and resolving conflicts constructively. Focus on win-win solutions and relationship preservation while addressing important issues. **Social Intelligence:** Build networking abilities, social adaptability, and emotional intelligence in relationships. Invest systematically in your most important relationships through quality time, shared experiences, and mutual support. Balance giving and receiving to create sustainable, mutually beneficial relationships.',
      tags: ['communication-skills', 'relationship-building', 'boundary-setting', 'conflict-resolution'],
      readTime: '26 min',
      difficulty: 'intermediate'
    }
  ]
};

export const retirementPlanningLifeTransitionTemplate: GuidanceTemplate = {
  id: 'retirement-planning-life-transition',
  title: 'Retirement Planning & Life Transition',
  description: 'Plan for a fulfilling retirement and navigate major life transitions',
  category: 'life-planning',
  icon: '🏖️',
  sections: [
    {
      id: 'retirement-vision-lifestyle',
      title: 'Retirement Vision & Lifestyle Design',
      order: 1,
      reflectionPrompts: [
        {
          id: 'retirement-dreams-aspirations',
          prompt: 'What does your ideal retirement lifestyle look like, and what activities will bring you the most fulfillment?',
          category: 'planning',
          helpText: 'Envision your retirement in detail: daily routines and activities, travel plans and destinations, hobbies and interests to pursue, volunteer work or causes to support, time with family and friends, learning and growth activities, and creative or entrepreneurial pursuits. Consider different retirement phases: active early years (60s-70s), transitional middle years (70s-80s), and later years requiring more support. Think beyond just "not working" to create a positive, purposeful vision.'
        },
        {
          id: 'geographic-living-preferences',
          prompt: 'Where do you want to live in retirement, and what factors will influence your location decisions?',
          category: 'planning',
          helpText: 'Evaluate location factors: cost of living and housing affordability, climate and weather preferences, proximity to family and friends, healthcare quality and accessibility, cultural activities and amenities, tax implications (state income tax, property tax), transportation and walkability, and community and social opportunities. Consider: aging in place vs. relocating, international retirement options, seasonal living arrangements, and accessibility needs for future aging. Visit potential locations during different seasons before deciding.'
        },
        {
          id: 'housing-living-arrangements',
          prompt: 'What housing and living arrangements will best support your retirement lifestyle and aging needs?',
          category: 'planning',
          helpText: 'Plan housing strategy: staying in current home vs. downsizing, home modifications for aging in place (grab bars, ramps, wider doorways), maintenance and upkeep considerations, proximity to healthcare and services, community vs. independent living options, and future care needs planning. Consider: financial implications of different housing choices, emotional attachment to current home, family proximity desires, and long-term care insurance. Plan for different scenarios as health and mobility change.'
        },
        {
          id: 'purpose-meaning-contribution',
          prompt: 'How will you find purpose and meaning in retirement, and what contributions do you want to make?',
          category: 'planning',
          helpText: 'Identify sources of purpose: volunteer work with meaningful organizations, mentoring younger generations, part-time work or consulting in your field, creative pursuits and artistic expression, learning new skills or subjects, family involvement and grandparenting, community leadership roles, and legacy projects. Consider how to transition from career identity to retirement identity. Plan activities that use your skills and experience while providing social connection and personal satisfaction.'
        },
        {
          id: 'social-relationships-community',
          prompt: 'How will you maintain and build social connections and community involvement in retirement?',
          category: 'planning',
          helpText: 'Plan social engagement: maintaining work friendships after retirement, developing new friendships through activities and interests, family relationships and time allocation, community involvement and civic participation, religious or spiritual community connections, and social groups or clubs aligned with interests. Address potential isolation by proactively building social networks. Consider: joining organizations before retirement, maintaining routines that include social interaction, and creating accountability for staying connected.'
        },
        {
          id: 'timeline-transition-planning',
          prompt: 'What is your timeline for retirement transition, and how will you prepare for this major life change?',
          category: 'planning',
          helpText: 'Create transition timeline: target retirement age and date, gradual vs. immediate retirement approach, financial milestones and requirements, career wind-down planning, skill development for retirement activities, and emotional preparation for identity change. Plan transition period: reduced work schedule, trial retirement periods, gradual responsibility transfer, and adjustment time for new routines. Consider: early retirement options, delayed retirement benefits, bridge employment, and phased retirement arrangements.'
        }
      ]
    },
    {
      id: 'financial-security-planning',
      title: 'Financial Security & Income Planning',
      order: 2,
      reflectionPrompts: [
        {
          id: 'retirement-income-needs',
          prompt: 'How much annual income will you need in retirement, and what lifestyle expenses should you plan for?',
          category: 'planning',
          helpText: 'Calculate retirement expenses: basic living costs (housing, utilities, food, transportation), healthcare and insurance costs, discretionary spending (travel, hobbies, dining out), debt payments and financial obligations, taxes on retirement income, and inflation adjustments over time. Use rules of thumb (70-90% of pre-retirement income) as starting point but customize for your lifestyle. Plan for different spending phases: higher early retirement travel and activity costs, potentially lower middle years, higher later years for healthcare.'
        },
        {
          id: 'retirement-income-sources',
          prompt: 'What sources of retirement income will you have, and how reliable and adequate are they?',
          category: 'planning',
          helpText: 'Inventory income sources: Social Security benefits (get personalized estimates from SSA.gov), employer-sponsored retirement plans (401k, 403b, pension), personal retirement accounts (IRA, Roth IRA), taxable investment accounts, real estate rental income, part-time work or consulting income, and business equity or royalties. Assess sustainability: inflation protection, longevity risk, sequence of returns risk, and tax implications. Diversify income sources for security and flexibility.'
        },
        {
          id: 'social-security-optimization',
          prompt: 'How will you optimize your Social Security benefits and coordinate spousal claiming strategies?',
          category: 'planning',
          helpText: 'Understand Social Security: full retirement age based on birth year, early claiming reduction (age 62), delayed retirement credits (up to age 70), spousal benefits and claiming strategies, survivor benefits planning, and earnings test implications. Calculate break-even analysis for different claiming ages. For married couples: coordinate claiming strategies to maximize household lifetime benefits, consider file-and-suspend elimination, and plan for survivor benefit optimization. Monitor annual statements for accuracy.'
        },
        {
          id: 'withdrawal-strategies-tax-planning',
          prompt: 'What withdrawal strategy will you use to minimize taxes and maximize retirement income sustainability?',
          category: 'planning',
          helpText: 'Develop withdrawal strategy: traditional 4% rule vs. dynamic withdrawal approaches, tax-efficient withdrawal sequencing (taxable first, then traditional retirement accounts, then Roth), managing tax brackets and avoiding Medicare premium increases, coordinating with Social Security timing, and adjusting for market conditions. Plan for required minimum distributions (RMDs) starting at age 73. Consider: Roth conversion opportunities during low-income years, tax-loss harvesting, and charitable giving strategies.'
        },
        {
          id: 'healthcare-long-term-care-costs',
          prompt: 'How will you plan for healthcare costs and potential long-term care needs in retirement?',
          category: 'planning',
          helpText: 'Plan healthcare coverage: Medicare enrollment timing and supplement options (Medigap, Medicare Advantage), prescription drug coverage (Part D), dental and vision insurance needs, and health savings account (HSA) optimization for healthcare expenses. Address long-term care: probability of needing care, average costs in your area, long-term care insurance options, family care vs. professional care preferences, and self-insurance strategies. Budget for increasing healthcare costs with age.'
        },
        {
          id: 'estate-legacy-planning',
          prompt: 'How will you plan for estate transfer, legacy goals, and end-of-life financial arrangements?',
          category: 'planning',
          helpText: 'Plan estate and legacy: will and estate documents updates, beneficiary designations review, trust structures if appropriate, charitable giving plans, legacy goals for family and causes, and tax-efficient wealth transfer strategies. Coordinate with retirement planning: consider impact on withdrawal strategies, plan for surviving spouse needs, address generation-skipping considerations, and organize financial information for heirs. Update documents regularly and communicate plans with family when appropriate.'
        }
      ]
    },
    {
      id: 'health-wellness-aging',
      title: 'Health, Wellness & Healthy Aging',
      order: 3,
      reflectionPrompts: [
        {
          id: 'preventive-health-strategy',
          prompt: 'What preventive health measures will you prioritize to maintain vitality and independence in retirement?',
          category: 'planning',
          helpText: 'Develop health maintenance plan: regular preventive screenings (colonoscopy, mammogram, bone density, eye exams), vaccination schedules (flu, shingles, pneumonia), cardiovascular health monitoring, diabetes prevention, and cancer screening protocols. Build relationships with healthcare providers: primary care physician, specialists as needed, and preferred hospital systems. Create health tracking systems: medical history documentation, medication management, and health metrics monitoring.'
        },
        {
          id: 'physical-fitness-mobility',
          prompt: 'How will you maintain physical fitness, strength, and mobility as you age?',
          category: 'planning',
          helpText: 'Plan fitness strategy: cardiovascular exercise for heart health and endurance, strength training to maintain muscle mass and bone density, flexibility and balance exercises to prevent falls, and functional fitness for daily activities. Consider age-appropriate activities: walking, swimming, yoga, tai chi, resistance training, and recreational sports. Address mobility planning: home safety assessments, fall prevention strategies, assistive device familiarity, and physical therapy relationships.'
        },
        {
          id: 'mental-cognitive-health',
          prompt: 'What strategies will you use to maintain mental sharpness and cognitive health throughout retirement?',
          category: 'planning',
          helpText: 'Support cognitive health: lifelong learning and intellectual challenges, reading and mental stimulation, social engagement and meaningful relationships, stress management and mental health support, and creative activities and hobbies. Plan for brain health: Mediterranean diet or other brain-healthy nutrition, regular exercise for cognitive function, adequate sleep and stress reduction, and monitoring for cognitive changes. Consider: memory training, language learning, musical instruments, puzzles and games, and technology engagement.'
        },
        {
          id: 'nutrition-healthy-eating',
          prompt: 'How will you maintain healthy eating habits and proper nutrition as you age?',
          category: 'planning',
          helpText: 'Plan nutrition strategy: age-appropriate dietary guidelines (adequate protein, calcium, vitamin D, fiber), meal planning and preparation systems, social eating and cooking enjoyment, and nutrition education for changing needs. Address aging-related challenges: decreased appetite, medication interactions with food, chewing or swallowing difficulties, and grocery shopping accessibility. Consider: meal delivery services, community dining programs, cooking classes, and nutrition counseling.'
        },
        {
          id: 'healthcare-system-navigation',
          prompt: 'How will you navigate the healthcare system and manage medical care coordination in retirement?',
          category: 'planning',
          helpText: 'Prepare for healthcare navigation: Medicare system understanding, insurance coverage optimization, healthcare provider selection and relationships, and medical advocacy for yourself or spouse. Plan coordination systems: centralized medical records, medication management, appointment scheduling, and care team communication. Consider: healthcare proxy designation, advance directives completion, and family involvement in medical decisions. Research quality healthcare options in retirement locations.'
        },
        {
          id: 'aging-place-support-systems',
          prompt: 'What support systems and modifications will help you age successfully in your chosen environment?',
          category: 'planning',
          helpText: 'Plan aging-in-place support: home modification for accessibility and safety, reliable transportation alternatives, emergency response systems, and home maintenance support. Build support networks: family involvement and expectations, friend and neighbor relationships, professional services (housekeeping, yard work, home repair), and community resources for aging adults. Evaluate: assisted living vs. home care options, long-term care facility quality assessment, and family caregiver coordination.'
        }
      ]
    },
    {
      id: 'career-transition-identity',
      title: 'Career Transition & Identity Shift',
      order: 4,
      reflectionPrompts: [
        {
          id: 'career-legacy-closure',
          prompt: 'How do you want to conclude your career and what legacy do you want to leave in your professional life?',
          category: 'planning',
          helpText: 'Plan career conclusion: knowledge transfer to successors, mentoring junior colleagues, completing important projects, maintaining professional relationships, and documenting your contributions and achievements. Consider legacy elements: innovations or improvements you contributed, people you helped develop, organizational impact, and industry contributions. Plan transition communication: timing announcements, stakeholder conversations, and relationship maintenance strategies.'
        },
        {
          id: 'identity-transition-adjustment',
          prompt: 'How will you navigate the identity shift from working professional to retiree?',
          category: 'planning',
          helpText: 'Prepare for identity change: recognizing career identity importance, developing retirement identity and roles, maintaining sense of purpose and contribution, and managing potential depression or anxiety. Plan adjustment strategies: gradual transition if possible, new routines and structure, continued learning and growth, and professional counseling if needed. Consider: joining retirement support groups, maintaining some professional involvement, and exploring new identity-defining activities.'
        },
        {
          id: 'workplace-relationship-maintenance',
          prompt: 'Which workplace relationships do you want to maintain after retirement, and how will you nurture them?',
          category: 'planning',
          helpText: 'Plan relationship transitions: identifying colleagues you want to keep in touch with, transitioning from professional to personal relationships, maintaining mentoring relationships, and participating in retiree groups or events. Develop maintenance strategies: regular social contact, shared activities outside work context, and mutual support systems. Consider: industry event attendance, professional association involvement, and informal networking continuation.'
        },
        {
          id: 'skills-knowledge-transition',
          prompt: 'How will you apply your professional skills and knowledge in meaningful ways during retirement?',
          category: 'planning',
          helpText: 'Plan skill utilization: consulting or part-time work opportunities, volunteer work that uses professional expertise, mentoring or teaching roles, board service for organizations, and community leadership positions. Consider: pro bono professional services, industry association involvement, starting a small business, writing or speaking about your expertise, and transferring knowledge to family members or community.'
        },
        {
          id: 'routine-structure-development',
          prompt: 'How will you create structure and meaningful routines to replace your work schedule?',
          category: 'planning',
          helpText: 'Design retirement structure: morning routines for purpose and energy, weekly schedules balancing activities and rest, seasonal routines for variety and interest, and accountability systems for important activities. Include: physical activity schedules, social engagement commitments, learning or hobby time, household management, and personal care routines. Plan flexibility while maintaining enough structure for wellbeing and accomplishment.'
        },
        {
          id: 'continued-learning-growth',
          prompt: 'What learning and personal growth opportunities will you pursue to stay engaged and intellectually stimulated?',
          category: 'planning',
          helpText: 'Plan lifelong learning: formal education opportunities (community college, university programs for seniors), online learning platforms and courses, reading and research projects, creative skills development, and travel for cultural learning. Consider: audit classes, senior learning communities, book clubs, lecture series, workshops, and skill-sharing with others. Balance challenge with enjoyment, and connect learning to personal interests and retirement goals.'
        }
      ]
    },
    {
      id: 'family-relationships-dynamics',
      title: 'Family Relationships & Changing Dynamics',
      order: 5,
      reflectionPrompts: [
        {
          id: 'spousal-relationship-adaptation',
          prompt: 'How will you and your spouse/partner adapt to spending more time together and coordinate retirement plans?',
          category: 'planning',
          helpText: 'Plan relationship adaptation: discussing retirement visions and expectations, balancing together time with individual interests, renegotiating household roles and responsibilities, managing different retirement timelines, and maintaining intimacy and friendship. Address potential challenges: too much togetherness, different activity preferences, financial disagreements, and health concerns. Consider: couples counseling for major transitions, individual space and independence, and shared new experiences.'
        },
        {
          id: 'adult-children-relationships',
          prompt: 'How do you want your relationships with adult children to evolve during your retirement years?',
          category: 'planning',
          helpText: 'Navigate adult child relationships: respecting their independence while staying connected, offering support without interference, managing geographic distance, and adapting to their changing life stages. Plan involvement: grandparenting roles and boundaries, financial support decisions, family tradition maintenance, and emergency support availability. Balance: being available without being intrusive, supporting without enabling, and sharing wisdom without lecturing.'
        },
        {
          id: 'grandparenting-legacy-roles',
          prompt: 'What kind of grandparent or elder do you want to be, and how will you create meaningful legacies?',
          category: 'planning',
          helpText: 'Define grandparenting approach: time investment and availability, special activities and traditions, educational and value-sharing opportunities, and financial contributions to grandchildren\'s futures. Create legacy projects: family history documentation, storytelling and memory sharing, skill or hobby teaching, and value transmission. Consider: geographic proximity impact, technology use for connection, and balancing all grandchildren fairly.'
        },
        {
          id: 'aging-parents-caregiving',
          prompt: 'How will you balance your retirement plans with potential caregiving responsibilities for aging parents?',
          category: 'planning',
          helpText: 'Plan caregiving considerations: current and anticipated care needs of parents, family responsibility sharing with siblings, financial implications of caregiving, and impact on your retirement lifestyle. Develop support strategies: care coordination, professional services utilization, family meeting planning, and self-care while caregiving. Address: long-distance caregiving challenges, care facility selection, and end-of-life planning discussions with parents.'
        },
        {
          id: 'friendship-social-networks',
          prompt: 'How will you maintain existing friendships and build new social connections in retirement?',
          category: 'planning',
          helpText: 'Plan friendship maintenance: regular contact with current friends, shared activities and interests, support during life changes and health challenges, and geographic considerations for long-distance friendships. Build new connections: activity-based friendships through hobbies or volunteering, neighborhood and community involvement, travel companions, and intergenerational relationships. Create social accountability: regular gatherings, planned activities, and mutual support systems.'
        },
        {
          id: 'community-involvement-contribution',
          prompt: 'How do you want to contribute to your community and build meaningful connections with your neighbors?',
          category: 'planning',
          helpText: 'Plan community engagement: volunteer work with local organizations, civic participation and local government involvement, neighborhood activities and improvement projects, and mentoring or teaching in community settings. Consider: religious or spiritual community participation, environmental or social cause involvement, local business support, and cultural or arts organization participation. Build: local friendships, community leadership roles, and positive local impact.'
        }
      ]
    },
    {
      id: 'life-transitions-adaptation',
      title: 'Life Transitions & Adaptive Planning',
      order: 6,
      reflectionPrompts: [
        {
          id: 'major-life-changes-preparation',
          prompt: 'What major life changes might you face in retirement, and how will you prepare for them?',
          category: 'planning',
          helpText: 'Anticipate transitions: health changes and medical emergencies, loss of spouse or close friends, family changes (marriages, divorces, new grandchildren), housing transitions, and financial market fluctuations. Build adaptability: emergency planning, flexible financial strategies, strong support networks, resilience building practices, and professional support relationships (counselors, advisors, healthcare providers).'
        },
        {
          id: 'resilience-coping-strategies',
          prompt: 'What resilience and coping strategies will help you navigate unexpected challenges in retirement?',
          category: 'planning',
          helpText: 'Develop resilience tools: stress management techniques, problem-solving frameworks, emotional regulation skills, spiritual or philosophical practices, and physical health maintenance. Build coping resources: strong social support networks, professional counseling availability, financial emergency reserves, and flexible lifestyle approaches. Practice: mindfulness or meditation, gratitude practices, optimistic thinking patterns, and learning from previous life challenges.'
        },
        {
          id: 'health-decline-planning',
          prompt: 'How will you plan for potential health decline and maintain quality of life despite physical limitations?',
          category: 'planning',
          helpText: 'Plan for health changes: advance directives and healthcare proxy designation, long-term care preferences and financing, home modification for accessibility, and care team development. Maintain quality focus: adapting activities to abilities, finding joy and purpose despite limitations, social connection maintenance, and dignity preservation. Consider: assisted living evaluation criteria, family caregiver coordination, and end-of-life preferences communication.'
        },
        {
          id: 'financial-market-volatility',
          prompt: 'How will you protect your retirement security from market volatility and economic uncertainty?',
          category: 'planning',
          helpText: 'Build financial resilience: diversified income sources, flexible withdrawal strategies, adequate emergency funds, conservative investment approaches as you age, and spending adjustment capability. Plan protection: sequence of returns risk management, inflation protection strategies, insurance coverage adequacy, and professional financial advice relationships. Monitor: economic indicators, portfolio performance, and withdrawal sustainability.'
        },
        {
          id: 'loss-grief-support',
          prompt: 'How will you cope with losses (friends, family, independence) and find support during difficult times?',
          category: 'planning',
          helpText: 'Prepare for loss: grief and bereavement support resources, counseling and therapy options, spiritual or religious support systems, and peer support groups. Develop coping strategies: memorial and remembrance practices, meaning-making activities, continued social engagement, and professional help acceptance. Build: strong support networks, helping relationships with others facing similar challenges, and practices that provide comfort and hope.'
        },
        {
          id: 'legacy-end-of-life-planning',
          prompt: 'How do you want to be remembered, and what end-of-life preferences and preparations should you make?',
          category: 'planning',
          helpText: 'Plan legacy creation: values and wisdom transmission to family, charitable giving and community contributions, creative or written works, and positive impact documentation. Address end-of-life: advance directives completion, funeral or memorial preferences, financial and legal affairs organization, and family communication about wishes. Consider: ethical will creation, life story documentation, important relationship closure, and spiritual or existential preparation for life\'s end.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'retirement-lifestyle-planning',
      title: 'Retirement Lifestyle and Vision Planning',
      type: 'guide',
      excerpt: 'Create a fulfilling retirement through **lifestyle design**, **purpose identification**, **location planning**, and **activity selection**.',
      content: 'Successful retirement requires intentional lifestyle design beyond just financial planning. **Lifestyle Design:** Envision your ideal retirement day, week, and year including daily routines, travel plans, hobbies, volunteer work, and family time. Consider different retirement phases and how needs may change. **Purpose Identification:** Find meaning through volunteer work, part-time employment, mentoring, creative pursuits, or family involvement. Transition from career identity to retirement identity gradually. **Location Planning:** Evaluate factors like cost of living, healthcare access, climate, proximity to family, and community amenities when choosing where to retire. **Activity Selection:** Balance physical, intellectual, social, and creative activities to maintain wellbeing and engagement. Plan for both structured commitments and flexible leisure time.',
      tags: ['retirement-lifestyle', 'purpose-planning', 'location-selection', 'activity-planning'],
      readTime: '20 min',
      difficulty: 'beginner'
    },
    {
      id: 'retirement-financial-security',
      title: 'Retirement Financial Planning and Security',
      type: 'guide',
      excerpt: 'Ensure financial security through **income planning**, **withdrawal strategies**, **healthcare budgeting**, and **Social Security optimization**.',
      content: 'Financial security in retirement requires comprehensive planning across multiple income sources and expense categories. **Income Planning:** Diversify retirement income through Social Security, employer-sponsored plans, personal savings, and potentially part-time work. Calculate needed income replacement ratio based on your lifestyle goals. **Withdrawal Strategies:** Use tax-efficient withdrawal sequencing, manage required minimum distributions, and adjust for market conditions using dynamic withdrawal approaches. **Healthcare Budgeting:** Plan for Medicare costs, supplemental insurance, long-term care expenses, and increasing healthcare needs with age. **Social Security Optimization:** Understand claiming strategies, spousal benefits, and timing decisions that can significantly impact lifetime benefits. Work with financial advisors for complex situations and coordinate all aspects of retirement financial planning.',
      tags: ['retirement-income', 'withdrawal-strategies', 'healthcare-costs', 'social-security'],
      readTime: '25 min',
      difficulty: 'intermediate'
    },
    {
      id: 'healthy-aging-strategies',
      title: 'Health and Wellness for Successful Aging',
      type: 'guide',
      excerpt: 'Maintain health and independence through **preventive care**, **fitness planning**, **nutrition management**, and **cognitive health**.',
      content: 'Healthy aging requires proactive planning and consistent health maintenance practices. **Preventive Care:** Schedule regular screenings, maintain relationships with healthcare providers, stay current with vaccinations, and monitor key health metrics. Create systems for medication management and health record keeping. **Fitness Planning:** Maintain cardiovascular health, muscle strength, flexibility, and balance through age-appropriate exercise. Focus on functional fitness for daily activities and fall prevention. **Nutrition Management:** Adapt eating habits for changing nutritional needs, medication interactions, and potential appetite or digestion changes. Plan for meal preparation and social eating opportunities. **Cognitive Health:** Engage in lifelong learning, social connections, stress management, and creative activities to support brain health. Monitor for cognitive changes and seek help when needed.',
      tags: ['healthy-aging', 'preventive-care', 'fitness-planning', 'cognitive-health'],
      readTime: '22 min',
      difficulty: 'intermediate'
    },
    {
      id: 'retirement-career-transition',
      title: 'Career Transition and Identity Adjustment',
      type: 'guide',
      excerpt: 'Navigate career ending through **identity transition**, **relationship management**, **skill utilization**, and **structure creation**.',
      content: 'Retiring from a career involves significant psychological adjustment beyond financial considerations. **Identity Transition:** Prepare for shift from professional identity to retirement identity by developing new sources of meaning and self-worth. Consider gradual transition approaches when possible. **Relationship Management:** Maintain valued workplace relationships while transitioning to personal connections. Plan for changes in social interaction and professional networking. **Skill Utilization:** Find meaningful ways to apply professional expertise through consulting, volunteering, mentoring, or teaching. Consider how career skills transfer to retirement activities. **Structure Creation:** Replace work structure with purposeful routines that include physical activity, social engagement, intellectual stimulation, and personal care. Balance structure with flexibility for spontaneous activities and rest.',
      tags: ['career-transition', 'identity-adjustment', 'relationship-management', 'retirement-structure'],
      readTime: '18 min',
      difficulty: 'intermediate'
    },
    {
      id: 'retirement-relationships-family',
      title: 'Family Relationships and Social Connections in Retirement',
      type: 'guide',
      excerpt: 'Strengthen relationships through **spousal coordination**, **family dynamics**, **friendship maintenance**, and **community involvement**.',
      content: 'Retirement significantly impacts relationships and requires intentional relationship management. **Spousal Coordination:** Navigate increased time together, coordinate different retirement timelines, balance individual and shared interests, and adapt roles and responsibilities. Address potential relationship stress from major life transitions. **Family Dynamics:** Evolve relationships with adult children while respecting independence, embrace grandparenting opportunities, and potentially balance caregiving for aging parents with retirement goals. **Friendship Maintenance:** Maintain existing friendships despite work transition, build new friendships through retirement activities, and create social accountability systems. **Community Involvement:** Engage with local community through volunteering, civic participation, and neighborhood involvement. Build intergenerational relationships and contribute skills to community needs while creating meaningful social connections.',
      tags: ['retirement-relationships', 'spousal-coordination', 'family-dynamics', 'community-involvement'],
      readTime: '24 min',
      difficulty: 'expert'
    }
  ]
};

export const homeRenovationInteriorDesignTemplate: GuidanceTemplate = {
  id: 'home-renovation-interior-design',
  title: 'Home Renovation & Interior Design',
  category: 'home-lifestyle',
  icon: '🔨',
  sections: [
    {
      id: 'vision-planning-assessment',
      title: 'Vision Planning & Space Assessment',
      order: 1,
      reflectionPrompts: [
        {
          id: 'renovation-goals-vision',
          prompt: 'What is your vision for the renovated space, and what specific goals do you want to achieve?',
          category: 'planning',
          helpText: 'Define clear renovation objectives: improved functionality and workflow, enhanced aesthetic appeal and style, increased home value and marketability, better space utilization and storage, updated systems and energy efficiency, accessibility improvements, and lifestyle enhancement needs. Consider: family growth or changes, aging in place requirements, work-from-home needs, entertaining preferences, and long-term vs. short-term goals. Create a vision board or inspiration collection to clarify your desired outcome.'
        },
        {
          id: 'current-space-evaluation',
          prompt: 'What are the strengths and weaknesses of your current space, and what needs to be changed?',
          category: 'research',
          helpText: 'Conduct thorough space assessment: structural elements and load-bearing walls, electrical and plumbing systems capacity, HVAC adequacy and efficiency, natural light and ventilation, traffic flow and circulation patterns, storage and organization challenges, and existing finishes condition. Identify: what works well and should be preserved, what needs updating or replacement, safety or code compliance issues, and opportunities for improvement. Take detailed photos and measurements for planning purposes.'
        },
        {
          id: 'lifestyle-functional-needs',
          prompt: 'How do you currently use your space, and how do you want to use it after renovation?',
          category: 'research',
          helpText: 'Analyze lifestyle requirements: daily routines and activities, family member needs and preferences, entertaining and hosting patterns, work and hobby space requirements, storage and organization needs, accessibility considerations, and future family changes. Consider: cooking and dining habits, relaxation and recreation preferences, children\'s activities and play areas, pet needs, and seasonal use patterns. Map current pain points and desired improvements in functionality.'
        },
        {
          id: 'style-aesthetic-preferences',
          prompt: 'What design style and aesthetic appeal to you, and how will they work with your home\'s architecture?',
          category: 'planning',
          helpText: 'Define design direction: preferred interior design styles (modern, traditional, transitional, farmhouse, industrial, etc.), color palettes and mood preferences, texture and material interests, architectural style compatibility, and personal taste evolution. Collect inspiration: magazine clippings, Pinterest boards, showroom visits, and style quizzes. Consider: existing architectural features to highlight or downplay, neighborhood character, resale value impact, and timeless vs. trendy elements. Plan for cohesive flow between spaces.'
        },
        {
          id: 'scope-phases-prioritization',
          prompt: 'What is the scope of your renovation project, and how will you prioritize different phases?',
          category: 'planning',
          helpText: 'Define project scope: whole house vs. specific rooms, structural vs. cosmetic changes, systems updates (electrical, plumbing, HVAC), and outdoor space inclusion. Prioritize phases: essential repairs and safety issues first, high-impact improvements, rooms by importance and use frequency, and budget-dependent upgrades. Consider: living situation during renovation, seasonal timing for different projects, contractor availability, and permit requirements. Plan logical sequence to minimize disruption and rework.'
        },
        {
          id: 'timeline-milestone-planning',
          prompt: 'What timeline do you envision for your renovation, and what are the key milestones?',
          category: 'planning',
          helpText: 'Create realistic timeline: design and planning phase duration, permit acquisition timeframes, contractor availability and scheduling, material ordering and delivery windows, and seasonal considerations for different work types. Set milestones: design completion, permits approved, demolition start/finish, rough work completion, finish work installation, and final inspection. Build in buffers: weather delays, change orders, material availability issues, and unexpected discoveries. Consider: holiday and vacation impacts, family event scheduling, and temporary living arrangements if needed.'
        }
      ]
    },
    {
      id: 'budgeting-financial-planning',
      title: 'Budgeting & Financial Planning',
      order: 2,
      reflectionPrompts: [
        {
          id: 'budget-estimation-breakdown',
          prompt: 'What is your total renovation budget, and how will you allocate funds across different categories?',
          category: 'planning',
          helpText: 'Develop comprehensive budget: labor costs (typically 35-50% of total), materials and finishes (30-40%), permits and fees (1-5%), design services (5-15%), and contingency fund (15-20% minimum). Break down by categories: demolition, structural work, systems (electrical, plumbing, HVAC), insulation and drywall, flooring, kitchen and bathrooms, paint and finishes, and fixtures. Research local costs and get multiple quotes. Consider: quality level choices, DIY vs. professional work, and value-added improvements vs. personal preferences.'
        },
        {
          id: 'financing-funding-options',
          prompt: 'How will you finance your renovation, and what funding options are available to you?',
          category: 'planning',
          helpText: 'Explore financing options: cash savings, home equity line of credit (HELOC), home equity loan, cash-out refinance, personal loan, credit cards for small amounts, and contractor financing programs. Compare: interest rates, terms, tax deductibility, qualification requirements, and impact on monthly cash flow. Consider: current home equity, debt-to-income ratios, credit score impact, and timing of fund access. Plan for: upfront costs, progress payments, and final payment timing.'
        },
        {
          id: 'cost-saving-value-strategies',
          prompt: 'Where can you save money without compromising quality, and which investments will add the most value?',
          category: 'planning',
          helpText: 'Identify cost-saving opportunities: DIY tasks you can handle safely, material sourcing strategies (remnants, sales, wholesale), timing projects for off-season discounts, and reusing or repurposing existing elements. Focus value-added improvements: kitchen and bathroom updates, energy efficiency upgrades, increased square footage, improved curb appeal, and systems updates. Consider: sweat equity contributions, phased approach to spread costs, and splurge vs. save decisions for different elements.'
        },
        {
          id: 'contingency-risk-management',
          prompt: 'What unexpected costs might arise, and how will you prepare for budget overruns?',
          category: 'planning',
          helpText: 'Plan for contingencies: structural surprises (rot, termites, foundation issues), code compliance requirements, utility line relocations, material price fluctuations, and scope creep from change orders. Build risk management: 15-20% contingency fund minimum, research common issues for your home\'s age and type, get thorough inspections before starting, and maintain emergency fund separate from renovation budget. Prepare: decision-making criteria for unexpected issues, priority list for scope reductions if needed, and additional funding sources if available.'
        },
        {
          id: 'roi-investment-analysis',
          prompt: 'How will you evaluate the return on investment and long-term value of different renovation choices?',
          category: 'planning',
          helpText: 'Analyze ROI considerations: local market conditions and buyer preferences, over-improvement risk for neighborhood, personal enjoyment vs. resale value, and timeline for potential sale. Research: comparable home values and features, real estate agent input on valuable improvements, and cost-to-value reports for different renovation types. Balance: personal lifestyle benefits, energy savings and reduced maintenance costs, and potential resale value increase. Document improvements for future appraisals and sales.'
        },
        {
          id: 'payment-cash-flow-management',
          prompt: 'How will you manage payments to contractors and cash flow throughout the project?',
          category: 'planning',
          helpText: 'Plan payment strategy: typical payment schedules (small down payment, progress payments tied to milestones, final payment upon completion), cash flow timing, and protection from overpayment risks. Establish: payment milestones tied to completed work, inspection and approval processes, change order documentation, and lien waiver procedures. Maintain: separate renovation account, detailed expense tracking, receipt organization, and communication with lenders if using construction loans. Never pay large amounts upfront or final payment before completion.'
        }
      ]
    },
    {
      id: 'design-development-planning',
      title: 'Design Development & Space Planning',
      order: 3,
      reflectionPrompts: [
        {
          id: 'space-layout-optimization',
          prompt: 'How will you optimize the layout and flow of your space for better functionality?',
          category: 'planning',
          helpText: 'Plan space optimization: traffic flow and circulation patterns, room adjacencies and relationships, sight lines and visual connections, natural light maximization, and storage integration. Consider: universal design principles, furniture placement and scale, activity zones within rooms, and multi-functional space usage. Analyze: current bottlenecks and inefficiencies, opportunities for opening up spaces, and structural limitations or opportunities. Use tools like floor plans, bubble diagrams, and 3D modeling for visualization.'
        },
        {
          id: 'color-material-selection',
          prompt: 'What color schemes, materials, and finishes will create the aesthetic and functionality you desire?',
          category: 'planning',
          helpText: 'Develop material palette: color schemes that work with natural light and room orientation, durable materials for high-traffic areas, texture variety for visual interest, and finish coordination throughout connected spaces. Consider: maintenance requirements, longevity and timelessness, budget allocation for different quality levels, and personal lifestyle factors (pets, children, entertaining). Create: sample boards, test colors in actual lighting conditions, and coordinate finishes across all elements (flooring, countertops, cabinetry, paint, fixtures).'
        },
        {
          id: 'lighting-electrical-planning',
          prompt: 'How will you plan lighting and electrical systems to enhance both function and ambiance?',
          category: 'planning',
          helpText: 'Design lighting strategy: natural light optimization through windows and skylights, layered artificial lighting (ambient, task, accent), energy-efficient fixture selection, and smart home integration. Plan electrical needs: adequate outlets and circuits, USB charging stations, home office and technology requirements, and future needs anticipation. Consider: dimmer controls, automated systems, outdoor lighting integration, and code compliance for updated electrical. Coordinate with interior design for fixture styles and placement.'
        },
        {
          id: 'storage-organization-systems',
          prompt: 'What storage and organization systems will you incorporate to maximize functionality?',
          category: 'planning',
          helpText: 'Plan storage solutions: built-in vs. furniture storage options, closet and pantry organization systems, hidden storage opportunities, and seasonal storage needs. Analyze: current storage pain points, belongings inventory and organization, accessibility requirements, and room-specific storage needs (kitchen, bathrooms, bedrooms, entryways). Design: custom cabinetry vs. modular systems, vertical space utilization, underutilized areas (under stairs, attic, basement), and multi-purpose furniture with storage.'
        },
        {
          id: 'fixture-hardware-selection',
          prompt: 'How will you select fixtures, hardware, and finishing touches that complete your design vision?',
          category: 'planning',
          helpText: 'Coordinate finish elements: plumbing fixtures (faucets, sinks, toilets), lighting fixtures, cabinet hardware, door hardware, and window treatments. Establish: consistent style and finish themes, quality levels for different applications, and maintenance considerations. Plan: fixture installation requirements, coordination with rough work phases, and lead times for custom or specialty items. Consider: technology integration (smart fixtures), accessibility features, and long-term satisfaction with style choices.'
        },
        {
          id: 'professional-design-services',
          prompt: 'What professional design services do you need, and how will you work effectively with designers?',
          category: 'planning',
          helpText: 'Evaluate design help needs: interior designer for full-service support, design consultant for specific guidance, architect for structural changes, and kitchen/bath specialists for complex rooms. Define: scope of design services, communication preferences, decision-making processes, and budget allocation for design fees. Prepare: inspiration examples, functional requirements, budget parameters, and timeline expectations. Plan: review and approval processes, change order procedures, and coordination with contractors.'
        }
      ]
    },
    {
      id: 'contractor-team-management',
      title: 'Contractor Selection & Team Management',
      order: 4,
      reflectionPrompts: [
        {
          id: 'contractor-selection-process',
          prompt: 'How will you find, evaluate, and select the right contractors for your project?',
          category: 'planning',
          helpText: 'Develop contractor vetting process: referrals from trusted sources, online reviews and Better Business Bureau ratings, license and insurance verification, portfolio review and references, and interview process with multiple candidates. Evaluate: experience with similar projects, communication style and responsiveness, detailed written estimates, project timeline realism, and professional approach. Check: current projects to see work quality, reference calls to previous clients, and financial stability indicators. Avoid: door-to-door solicitors, cash-only operations, and unusually low bids.'
        },
        {
          id: 'contract-agreement-terms',
          prompt: 'What should be included in your contracts, and how will you protect your interests?',
          category: 'planning',
          helpText: 'Establish contract essentials: detailed scope of work and specifications, materials list with quality standards, timeline with milestones and penalties, payment schedule tied to completion, and change order procedures. Include: permit responsibility, cleanup and disposal, warranty terms, insurance and liability coverage, and dispute resolution processes. Protect interests: lien waiver procedures, right to inspect work, material substitution approval, and project completion criteria. Review: local licensing requirements, lien law protections, and consumer protection regulations.'
        },
        {
          id: 'project-communication-coordination',
          prompt: 'How will you establish clear communication and coordination systems with your renovation team?',
          category: 'planning',
          helpText: 'Create communication systems: regular progress meetings and updates, preferred communication methods and response times, decision-making authority and approval processes, and documentation systems for changes and issues. Establish: single point of contact for coordination, daily/weekly progress reports, photo documentation of work progress, and problem escalation procedures. Plan: site access and security, work hour expectations, neighbor consideration, and emergency contact information.'
        },
        {
          id: 'quality-progress-monitoring',
          prompt: 'What systems will you use to monitor work quality and project progress?',
          category: 'planning',
          helpText: 'Develop monitoring processes: regular site inspections and quality checks, milestone completion verification, material delivery and approval, and progress photography documentation. Create: quality standards and specifications, inspection checklists for different work phases, and corrective action procedures for issues. Monitor: adherence to building codes and permits, timeline progress against schedule, and budget tracking against estimates. Plan: third-party inspections for major work, final walkthrough procedures, and punch list management.'
        },
        {
          id: 'change-order-management',
          prompt: 'How will you handle changes to the original plan and manage scope creep?',
          category: 'planning',
          helpText: 'Establish change management: written approval required for all changes, cost and timeline impact assessment, documentation and approval processes, and cumulative budget tracking. Create: decision criteria for evaluating changes, time limits for change order pricing, and impact analysis on other work phases. Control scope creep: clear original specifications, change order approval authority, budget limits for changes, and regular scope review meetings. Document: all changes with costs and justifications, timeline impacts, and client approval signatures.'
        },
        {
          id: 'dispute-resolution-planning',
          prompt: 'How will you prevent and resolve conflicts or disputes that may arise during the project?',
          category: 'planning',
          helpText: 'Prevent disputes: clear contracts and expectations, regular communication and documentation, prompt payment for completed work, and professional relationship maintenance. Plan resolution: escalation procedures for issues, mediation options before litigation, documentation requirements for claims, and legal resource availability. Address: workmanship disputes, timeline delays, cost overruns, and safety concerns. Maintain: professional relationships, written records of all agreements, and focus on project completion goals. Know: contractor licensing board complaint processes, lien law protections, and consumer protection resources.'
        }
      ]
    },
    {
      id: 'project-execution-management',
      title: 'Project Execution & Construction Management',
      order: 5,
      reflectionPrompts: [
        {
          id: 'living-arrangements-logistics',
          prompt: 'How will you manage your living situation and daily routines during the renovation?',
          category: 'planning',
          helpText: 'Plan living logistics: temporary kitchen setup for major kitchen renovations, bathroom alternatives during bathroom work, dust and noise management, and secure storage for belongings. Consider: temporary housing for major renovations, work area isolation, family and pet safety, and access to utilities. Organize: temporary storage solutions, important document protection, daily routine modifications, and emergency preparedness. Communicate: work schedules with family members, neighbor notifications, and visitor/delivery coordination.'
        },
        {
          id: 'permit-inspection-compliance',
          prompt: 'How will you manage permits, inspections, and code compliance throughout the project?',
          category: 'planning',
          helpText: 'Handle regulatory requirements: permit applications and approvals, inspection scheduling and coordination, code compliance verification, and documentation maintenance. Plan: permit timeline impact on project schedule, inspection readiness and preparation, corrective action for failed inspections, and final approval processes. Coordinate: contractor responsibilities vs. owner responsibilities, utility company coordination, and building department relationships. Maintain: permit documentation, inspection records, and approved plan compliance throughout project.'
        },
        {
          id: 'material-delivery-coordination',
          prompt: 'How will you coordinate material deliveries and ensure quality and timeliness?',
          category: 'planning',
          helpText: 'Manage material logistics: delivery scheduling and coordination, storage and protection on-site, quality inspection upon delivery, and damage or defect procedures. Plan: material ordering timeline, special handling requirements, access for large deliveries, and weather protection. Coordinate: with contractors for material specifications, with suppliers for timing and logistics, and with project schedule for just-in-time delivery. Track: order status and delivery confirmations, material quality and condition, and installation readiness timing.'
        },
        {
          id: 'safety-security-protocols',
          prompt: 'What safety and security measures will you implement to protect people and property?',
          category: 'planning',
          helpText: 'Establish safety protocols: work site safety standards, personal protective equipment requirements, hazardous material handling (asbestos, lead paint), and emergency procedures. Implement security: tool and material theft prevention, site access control, valuable item protection, and insurance coverage verification. Address: family safety during construction, visitor warnings and restrictions, and neighborhood security considerations. Maintain: first aid availability, emergency contact information, and clear escape routes during construction.'
        },
        {
          id: 'daily-progress-oversight',
          prompt: 'How will you maintain daily oversight and ensure work quality and progress?',
          category: 'planning',
          helpText: 'Create oversight routine: daily site visits and progress assessment, work quality evaluation, problem identification and resolution, and progress documentation through photos. Monitor: adherence to specifications and plans, cleanliness and organization, material usage and waste, and timeline progress. Communicate: daily with key contractors, regularly with project manager, and promptly about any concerns. Document: work progress, quality issues, weather delays, and change discussions for future reference.'
        },
        {
          id: 'final-completion-acceptance',
          prompt: 'What processes will you follow for final inspections, completion, and project acceptance?',
          category: 'planning',
          helpText: 'Plan completion procedures: final walkthrough and inspection, punch list creation and completion, warranty documentation collection, and final payment authorization. Verify: all work completed to specifications, permits closed and approved, warranties registered, and maintenance information provided. Document: completion certificates, lien waivers, warranty terms, and care instructions for new installations. Prepare: final payments, project evaluation and feedback, and relationship maintenance for future needs. Celebrate: project completion and successful achievement of renovation goals.'
        }
      ]
    },
    {
      id: 'finishing-maintenance-enjoyment',
      title: 'Finishing Touches & Long-term Maintenance',
      order: 6,
      reflectionPrompts: [
        {
          id: 'styling-decorating-completion',
          prompt: 'How will you add finishing touches and styling to complete your renovated space?',
          category: 'planning',
          helpText: 'Plan finishing elements: furniture selection and placement, window treatments and soft furnishings, art and decorative accessories, and plant and greenery integration. Consider: scale and proportion, color and texture coordination, personal meaningful items incorporation, and functional and aesthetic balance. Budget: for furniture and accessories, timing for purchases, and quality vs. quantity decisions. Create: cohesive style throughout spaces, personal touches that reflect your family, and flexibility for future changes or updates.'
        },
        {
          id: 'maintenance-care-planning',
          prompt: 'What ongoing maintenance and care will your renovated space require?',
          category: 'planning',
          helpText: 'Develop maintenance plan: routine cleaning and care procedures, seasonal maintenance tasks, equipment and system servicing schedules, and warranty tracking and claims. Create: maintenance calendar, product care instructions, professional service contact lists, and replacement parts inventory. Plan: budget for ongoing maintenance, learning proper care techniques, and preventive maintenance to protect investment. Organize: warranty documents, instruction manuals, paint and material samples, and maintenance supply storage.'
        },
        {
          id: 'energy-efficiency-optimization',
          prompt: 'How will you optimize energy efficiency and sustainability in your completed renovation?',
          category: 'planning',
          helpText: 'Maximize efficiency: HVAC system optimization and programming, lighting efficiency and controls, appliance energy settings, and insulation and air sealing effectiveness. Implement: sustainable practices, water conservation measures, waste reduction systems, and renewable energy considerations. Monitor: utility usage and costs, system performance, and efficiency improvement opportunities. Plan: regular efficiency updates, technology upgrades, and long-term sustainability goals. Document: energy improvements for tax credits and utility rebates.'
        },
        {
          id: 'space-utilization-optimization',
          prompt: 'How will you maximize the functionality and enjoyment of your newly renovated space?',
          category: 'planning',
          helpText: 'Optimize space usage: furniture arrangement for flow and function, storage system organization and efficiency, multi-purpose area utilization, and seasonal space adaptations. Develop: new routines that take advantage of improved functionality, entertaining and hosting capabilities, and family activity integration. Plan: space evolution as needs change, storage organization systems, and ongoing decluttering and organization. Create: user manuals for complex systems, space usage guidelines for family members, and flexibility for future needs.'
        },
        {
          id: 'documentation-records-keeping',
          prompt: 'What documentation and records will you maintain for future reference and resale value?',
          category: 'planning',
          helpText: 'Organize project records: before and after photos, contractor information and warranties, permit and inspection records, and material specifications and sources. Maintain: receipt and invoice files, care and maintenance instructions, system operation manuals, and emergency shut-off locations. Document: project timeline and costs, lessons learned and recommendations, contractor evaluations and recommendations, and improvement impact on home value. Prepare: information for future sales, insurance documentation, and reference for future projects.'
        },
        {
          id: 'project-evaluation-lessons',
          prompt: 'How will you evaluate the success of your project and capture lessons for future renovations?',
          category: 'planning',
          helpText: 'Assess project outcomes: goal achievement and satisfaction, budget performance and cost management, timeline adherence and delay factors, and quality results and durability. Evaluate: contractor performance and recommendations, design decisions and satisfaction, process improvements for future projects, and overall value and ROI. Document: lessons learned and best practices, contractor and supplier recommendations, design decisions to repeat or avoid, and process improvements for future reference. Celebrate: successful completion, improved lifestyle and functionality, and investment in your home and family well-being.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'renovation-planning-fundamentals',
      title: 'Home Renovation Planning and Budgeting',
      type: 'guide',
      excerpt: 'Plan successful renovations through **project scoping**, **budget development**, **timeline planning**, and **goal setting**.',
      content: 'Successful home renovations require thorough planning and realistic expectations. **Project Scoping:** Define clear objectives, assess current space limitations, and prioritize improvements based on lifestyle needs and budget constraints. **Budget Development:** Allocate 35-50% for labor, 30-40% for materials, 5-15% for design services, and maintain 15-20% contingency for unexpected issues. Research local costs and get multiple quotes. **Timeline Planning:** Account for design phases, permit acquisition, material ordering, and construction sequences. Build in buffers for weather delays and change orders. **Goal Setting:** Balance personal preferences with market value, consider long-term vs. short-term needs, and establish quality standards that align with budget constraints.',
      tags: ['renovation-planning', 'budget-development', 'project-scoping', 'timeline-planning'],
      readTime: '20 min',
      difficulty: 'beginner'
    },
    {
      id: 'design-space-planning',
      title: 'Interior Design and Space Planning Strategies',
      type: 'guide',
      excerpt: 'Create functional beautiful spaces through **layout optimization**, **color and material selection**, **lighting design**, and **storage solutions**.',
      content: 'Effective design combines aesthetics with functionality to create spaces that enhance daily life. **Layout Optimization:** Analyze traffic flow, maximize natural light, create functional zones, and ensure proper furniture scale and placement. **Color and Material Selection:** Choose durable materials for high-traffic areas, coordinate finishes across connected spaces, and test colors in actual lighting conditions. **Lighting Design:** Layer ambient, task, and accent lighting for functionality and ambiance. Plan electrical needs for current and future technology. **Storage Solutions:** Integrate built-in storage, maximize vertical space, and design organization systems that match your lifestyle and belongings.',
      tags: ['interior-design', 'space-planning', 'color-selection', 'lighting-design'],
      readTime: '22 min',
      difficulty: 'intermediate'
    },
    {
      id: 'contractor-management',
      title: 'Contractor Selection and Project Management',
      type: 'guide',
      excerpt: 'Successfully manage renovation teams through **contractor vetting**, **contract negotiation**, **communication systems**, and **quality control**.',
      content: 'Working effectively with contractors is crucial for renovation success. **Contractor Vetting:** Verify licenses and insurance, check references and portfolio, interview multiple candidates, and evaluate communication style and professionalism. **Contract Negotiation:** Include detailed scope of work, material specifications, payment schedules tied to milestones, and change order procedures. **Communication Systems:** Establish regular progress meetings, preferred communication methods, and clear decision-making authority. **Quality Control:** Monitor work progress, inspect completed phases, document issues promptly, and maintain professional relationships while enforcing standards. Never pay large amounts upfront and always get written approvals for changes.',
      tags: ['contractor-selection', 'project-management', 'contract-negotiation', 'quality-control'],
      readTime: '25 min',
      difficulty: 'intermediate'
    },
    {
      id: 'renovation-execution',
      title: 'Construction Management and Project Execution',
      type: 'guide',
      excerpt: 'Navigate the construction process through **permit management**, **logistics coordination**, **safety protocols**, and **progress monitoring**.',
      content: 'Successful project execution requires active management and attention to detail. **Permit Management:** Understand local requirements, coordinate inspections, ensure code compliance, and maintain proper documentation. **Logistics Coordination:** Manage material deliveries, coordinate work schedules, plan temporary living arrangements, and maintain site security. **Safety Protocols:** Implement safety standards, manage hazardous materials, protect family and property, and maintain insurance coverage. **Progress Monitoring:** Conduct daily site visits, document work quality, track timeline adherence, and address issues promptly. Maintain detailed records and communicate regularly with all team members.',
      tags: ['construction-management', 'permit-management', 'safety-protocols', 'progress-monitoring'],
      readTime: '24 min',
      difficulty: 'expert'
    },
    {
      id: 'renovation-completion-maintenance',
      title: 'Project Completion and Long-term Home Care',
      type: 'guide',
      excerpt: 'Complete your renovation successfully through **final inspections**, **finishing touches**, **maintenance planning**, and **documentation**.',
      content: 'Project completion involves more than finishing construction work. **Final Inspections:** Conduct thorough walkthroughs, create detailed punch lists, verify all systems function properly, and obtain all necessary approvals and warranties. **Finishing Touches:** Add styling and decorative elements, optimize furniture placement, integrate technology and smart home features, and create comfortable, functional living spaces. **Maintenance Planning:** Develop routine care schedules, organize warranty documents and manuals, budget for ongoing maintenance, and learn proper care techniques for new installations. **Documentation:** Maintain project records, document improvements for resale value, preserve contractor and supplier information, and capture lessons learned for future projects.',
      tags: ['project-completion', 'finishing-touches', 'maintenance-planning', 'home-care'],
      readTime: '18 min',
      difficulty: 'intermediate'
    }
  ]
};

export const podcastContentCreationTemplate: GuidanceTemplate = {
  id: 'podcast-content-creation',
  title: 'Podcast & Content Creation',
  category: 'content-media',
  icon: '🎙️',
  sections: [
    {
      id: 'concept-niche-development',
      title: 'Concept Development & Niche Selection',
      order: 1,
      reflectionPrompts: [
        {
          id: 'podcast-vision-mission',
          prompt: 'What is your podcast\'s core mission, and what unique value will you provide to your audience?',
          category: 'planning',
          helpText: 'Define your podcast\'s purpose: educate, entertain, inspire, or inform your audience on specific topics. Identify your unique angle: personal expertise, unique perspective, exclusive access, or distinctive format. Consider your passion and knowledge areas, audience needs you can fulfill, and competitive advantages you possess. Create a clear mission statement that guides content decisions and communicates value to potential listeners. Think about the transformation or benefit listeners will experience from your content.'
        },
        {
          id: 'target-audience-persona',
          prompt: 'Who is your ideal listener, and what are their demographics, interests, and pain points?',
          category: 'research',
          helpText: 'Create detailed listener personas: demographics (age, gender, location, income, education), psychographics (values, interests, lifestyle), content consumption habits, preferred platforms and listening times, and specific challenges or goals. Research: where your audience hangs out online, what other podcasts they listen to, what problems they\'re trying to solve, and what motivates their decisions. Validate assumptions through surveys, social media research, and competitor analysis. Understanding your audience deeply informs all content and marketing decisions.'
        },
        {
          id: 'niche-market-analysis',
          prompt: 'What niche will your podcast serve, and how saturated or competitive is that market?',
          category: 'research',
          helpText: 'Analyze your chosen niche: market size and growth potential, existing podcast competition, content gaps and opportunities, audience engagement levels, and monetization potential. Research competitors: their content themes, episode frequency, audience size, engagement rates, and monetization strategies. Identify: underserved subtopics, unique angles or formats, and ways to differentiate your content. Consider niche specificity vs. broad appeal, and whether you can establish authority in your chosen area.'
        },
        {
          id: 'content-format-structure',
          prompt: 'What format and structure will your podcast follow, and how will you maintain consistency?',
          category: 'planning',
          helpText: 'Choose podcast format: solo commentary, interview-based, co-hosted conversation, narrative storytelling, educational series, or hybrid approach. Define episode structure: intro/outro format, segment breakdown, typical episode length, and recurring elements. Plan consistency: publishing schedule (weekly, bi-weekly, daily), seasonal vs. evergreen content, and quality standards. Consider: your strengths and comfort level, audience preferences, production complexity, and long-term sustainability of your chosen format.'
        },
        {
          id: 'content-pillars-themes',
          prompt: 'What are your main content pillars and recurring themes that will guide your episode planning?',
          category: 'planning',
          helpText: 'Establish 3-5 core content pillars that align with your mission and audience needs: main topics you\'ll regularly cover, recurring segment types, seasonal or timely content themes, and educational vs. entertainment balance. Create content categories that provide variety while maintaining focus: how-to episodes, interviews, case studies, industry news and trends, personal stories and insights. Plan content mix to keep audience engaged while building expertise in your niche area.'
        },
        {
          id: 'show-branding-identity',
          prompt: 'How will you brand your podcast to create a memorable and professional identity?',
          category: 'planning',
          helpText: 'Develop podcast brand identity: memorable show name that reflects content and is easy to remember and spell, compelling show description and tagline, visual identity including logo and cover art that stands out in directories, consistent tone and personality, and brand voice that resonates with your audience. Consider: trademark and URL availability, social media handle consistency, and scalability of your brand concept. Ensure branding aligns with your content and target audience expectations.'
        }
      ]
    },
    {
      id: 'technical-setup-production',
      title: 'Technical Setup & Production Workflow',
      order: 2,
      reflectionPrompts: [
        {
          id: 'recording-equipment-setup',
          prompt: 'What recording equipment and setup will you use to produce professional-quality audio?',
          category: 'planning',
          helpText: 'Plan equipment needs: microphone selection (USB vs. XLR, dynamic vs. condenser), audio interface requirements, headphone selection, recording environment optimization, and acoustic treatment. Consider: budget constraints, room acoustics, background noise control, and upgrade path as you grow. Research: equipment reviews, compatibility requirements, and setup complexity. Start with quality basics and upgrade gradually rather than over-investing initially. Factor in remote recording needs if planning guest interviews.'
        },
        {
          id: 'software-tools-workflow',
          prompt: 'What software and tools will you use for recording, editing, and publishing your podcast?',
          category: 'planning',
          helpText: 'Select production tools: recording software (Audacity, GarageBand, Adobe Audition, Hindenburg), editing workflow and techniques, noise reduction and audio enhancement tools, and podcast hosting platform. Consider: learning curve, feature requirements, collaboration needs, and budget. Plan workflow: recording process, editing steps, quality control, and publishing routine. Include backup and file management systems. Research integration between tools and automation opportunities to streamline production.'
        },
        {
          id: 'content-planning-scripting',
          prompt: 'How will you plan, research, and structure your episode content for maximum impact?',
          category: 'planning',
          helpText: 'Develop content creation process: episode topic selection and research, guest booking and pre-interview preparation, script or outline development, show notes creation, and content calendar planning. Create templates: episode outlines, interview question frameworks, intro/outro scripts, and show notes formats. Plan content pipeline: idea generation, research and preparation time, recording schedule, and post-production workflow. Build systems for consistent quality and efficiency.'
        },
        {
          id: 'guest-interview-management',
          prompt: 'What systems will you use to find, book, and manage guest interviews effectively?',
          category: 'planning',
          helpText: 'Build guest management system: target guest identification and research, outreach templates and processes, interview scheduling and confirmation, remote recording setup and tech testing, and guest relationship maintenance. Create: guest application or pitch process, pre-interview questionnaires, technical requirements and setup guides, and post-interview follow-up sequences. Plan: interview preparation, question development, and ways to provide value to guests beyond just the interview exposure.'
        },
        {
          id: 'quality-control-standards',
          prompt: 'What quality control processes will ensure consistent professional output?',
          category: 'planning',
          helpText: 'Establish quality standards: audio quality benchmarks, content quality criteria, editing standards and checklist, and brand consistency guidelines. Create quality control workflow: recording quality checks, editing review process, fact-checking and accuracy verification, and final approval before publishing. Plan: backup procedures, error correction processes, and continuous improvement based on listener feedback. Include standards for show notes, episode descriptions, and all published content.'
        },
        {
          id: 'production-schedule-efficiency',
          prompt: 'How will you create an efficient production schedule that supports consistent publishing?',
          category: 'planning',
          helpText: 'Design production workflow: content planning and research time allocation, recording session scheduling, editing and post-production timeline, and publishing schedule coordination. Plan batching: record multiple episodes in sessions, batch editing work, and create content buffers for consistency. Include: time estimates for each production phase, deadline management, and contingency plans for schedule disruptions. Balance quality with efficiency and sustainability for long-term consistency.'
        }
      ]
    },
    {
      id: 'content-strategy-planning',
      title: 'Content Strategy & Editorial Planning',
      order: 3,
      reflectionPrompts: [
        {
          id: 'editorial-calendar-development',
          prompt: 'How will you create and maintain an editorial calendar that supports your goals and audience needs?',
          category: 'planning',
          helpText: 'Build editorial planning system: content calendar tool selection, episode topic planning 4-6 weeks ahead, seasonal and timely content integration, and guest interview scheduling. Plan content variety: mix of solo episodes, interviews, special series, and audience Q&A. Consider: industry events and trends, holiday and seasonal themes, audience feedback integration, and personal availability. Create flexibility for breaking news or trending topics while maintaining consistent publishing schedule.'
        },
        {
          id: 'storytelling-narrative-techniques',
          prompt: 'What storytelling and narrative techniques will you use to create engaging, memorable content?',
          category: 'planning',
          helpText: 'Develop storytelling skills: compelling episode openings, narrative arc development, personal story integration, case study presentation, and emotional connection techniques. Learn: interview techniques that elicit great stories, ways to structure complex topics for clarity, and methods to maintain audience attention throughout episodes. Practice: voice variation, pacing, and delivery to enhance storytelling. Plan recurring storytelling elements that become signature parts of your show.'
        },
        {
          id: 'audience-engagement-interaction',
          prompt: 'How will you encourage audience engagement and build community around your podcast?',
          category: 'planning',
          helpText: 'Plan engagement strategies: listener question integration, call-in or voicemail segments, social media interaction, email list building, and community platform management. Create: multiple ways for audience to connect and contribute, regular features that involve listeners, and feedback collection systems. Consider: live recording sessions, listener meetups, exclusive content for engaged fans, and ways to make audience feel valued and heard. Build community beyond just passive listening.'
        },
        {
          id: 'content-repurposing-strategy',
          prompt: 'How will you repurpose your podcast content across multiple platforms and formats?',
          category: 'planning',
          helpText: 'Develop repurposing strategy: blog posts from episode content, social media clips and quotes, video content creation, email newsletter integration, and course or product development from podcast topics. Plan: content adaptation for different platforms, visual content creation, SEO optimization for written content, and cross-platform promotion. Consider: audiogram creation, transcript utilization, and chapter or highlight creation. Maximize content value through strategic repurposing while maintaining platform-specific best practices.'
        },
        {
          id: 'seasonal-series-planning',
          prompt: 'What seasonal content, special series, or themed episodes will you create to maintain audience interest?',
          category: 'planning',
          helpText: 'Plan special content: seasonal topics and holiday themes, limited series on specific subjects, anniversary or milestone episodes, and listener appreciation content. Create: special series that dive deep into important topics, crossover episodes with other podcasters, and exclusive content that rewards loyal listeners. Consider: industry conference coverage, year-end reviews and predictions, and special guest series. Use special content to break routine and create anticipation while supporting your overall content strategy.'
        },
        {
          id: 'content-measurement-optimization',
          prompt: 'How will you measure content performance and optimize based on audience response?',
          category: 'planning',
          helpText: 'Establish measurement systems: download and listener analytics, engagement metrics (comments, shares, reviews), content performance comparison, and audience feedback collection. Track: which topics perform best, optimal episode length, guest episode vs. solo performance, and seasonal patterns. Use data: to inform content decisions, identify successful formats, and understand audience preferences. Plan regular content audits and strategy adjustments based on performance data and audience feedback.'
        }
      ]
    },
    {
      id: 'audience-growth-marketing',
      title: 'Audience Growth & Marketing Strategy',
      order: 4,
      reflectionPrompts: [
        {
          id: 'podcast-seo-discoverability',
          prompt: 'How will you optimize your podcast for search and discovery across platforms?',
          category: 'planning',
          helpText: 'Optimize for discovery: podcast directory optimization (Apple Podcasts, Spotify, Google Podcasts), SEO-friendly episode titles and descriptions, keyword research and integration, category and tag optimization, and transcript creation for search indexing. Research: how your audience searches for content, trending keywords in your niche, and competitive analysis of successful podcasts. Plan: consistent naming conventions, compelling descriptions that include target keywords, and show notes optimization for search engines.'
        },
        {
          id: 'social-media-promotion-strategy',
          prompt: 'What social media strategy will you use to promote your podcast and engage with your audience?',
          category: 'planning',
          helpText: 'Develop social media approach: platform selection based on audience presence (Instagram, Twitter, LinkedIn, TikTok, YouTube), content creation for each platform, posting schedule and consistency, and community management strategy. Create: audiograms and visual content, behind-the-scenes content, quote cards and key insights, and cross-platform promotion strategy. Plan: hashtag strategy, collaboration with other creators, and user-generated content encouragement. Balance promotion with value-added content and authentic engagement.'
        },
        {
          id: 'networking-collaboration-partnerships',
          prompt: 'How will you build relationships and collaborate with other podcasters and industry influencers?',
          category: 'planning',
          helpText: 'Build industry relationships: identify potential collaborators and network contacts, attend podcasting conferences and meetups, engage authentically with other creators, and develop mutually beneficial partnerships. Plan: guest swap opportunities, cross-promotion strategies, joint projects or series, and industry event participation. Create: value for potential partners, authentic relationship building vs. transactional networking, and long-term partnership strategies. Consider: podcast network opportunities, advertiser relationships, and industry thought leadership development.'
        },
        {
          id: 'email-list-community-building',
          prompt: 'How will you build an email list and create community beyond just podcast listeners?',
          category: 'planning',
          helpText: 'Develop email strategy: lead magnet creation related to podcast topics, email capture integration on podcast platforms, newsletter content that complements podcast, and email automation sequences for new subscribers. Build community: exclusive content for email subscribers, listener feedback and survey collection, community platform consideration (Facebook group, Discord, Circle), and regular engagement beyond episodes. Plan: email frequency and content mix, subscriber segmentation, and progression from listener to community member.'
        },
        {
          id: 'launch-strategy-momentum',
          prompt: 'What launch strategy will you use to build initial momentum and audience?',
          category: 'planning',
          helpText: 'Plan podcast launch: pre-launch content creation and buffer building, launch sequence with multiple episodes, initial promotional campaign, and early audience cultivation. Create: launch timeline with specific milestones, promotional content for different platforms, outreach plan to personal and professional networks, and media kit for potential coverage. Consider: soft launch vs. big launch approach, launch partnerships, early listener incentives, and systems to convert early listeners into loyal fans and promoters.'
        },
        {
          id: 'growth-metrics-tracking',
          prompt: 'What metrics will you track to measure growth and success, and how will you use this data?',
          category: 'planning',
          helpText: 'Define success metrics: download numbers and trends, listener retention and engagement, review and rating growth, email list growth, social media following and engagement, and website traffic from podcast. Track: geographic and demographic data, device and platform preferences, peak listening times, and conversion rates to email list or other actions. Use data: to understand audience preferences, optimize publishing timing, inform content decisions, and demonstrate value to potential sponsors or partners. Set realistic growth goals and milestones.'
        }
      ]
    },
    {
      id: 'monetization-business-development',
      title: 'Monetization & Business Development',
      order: 5,
      reflectionPrompts: [
        {
          id: 'revenue-stream-development',
          prompt: 'What revenue streams will you develop to monetize your podcast and content?',
          category: 'planning',
          helpText: 'Explore monetization options: advertising and sponsorships, affiliate marketing, premium content or membership tiers, merchandise sales, coaching or consulting services, course creation, speaking engagements, and listener donations or patronage. Consider: audience size requirements for different options, revenue potential and effort required, alignment with content and values, and long-term sustainability. Start with options that complement your content naturally and provide value to your audience.'
        },
        {
          id: 'sponsorship-advertising-strategy',
          prompt: 'How will you approach sponsorships and advertising while maintaining audience trust?',
          category: 'planning',
          helpText: 'Plan advertising approach: advertiser outreach and relationship building, pricing strategy and rate cards, ad placement and integration methods, FTC compliance and disclosure requirements, and maintaining editorial independence. Consider: audience size thresholds, relevant advertiser alignment, ad reading style and authenticity, and long-term vs. one-off sponsorship relationships. Balance: revenue generation with listener experience, and ensure sponsored content aligns with your values and audience interests.'
        },
        {
          id: 'premium-content-strategy',
          prompt: 'What premium content or membership offerings could provide additional value to your most engaged listeners?',
          category: 'planning',
          helpText: 'Develop premium offerings: bonus episodes or extended content, ad-free listening options, exclusive interviews or content, early access to episodes, community access or private groups, and educational resources or courses. Plan: pricing strategy, content creation for premium tiers, platform selection for premium content delivery, and member retention strategies. Consider: what exclusive value you can provide, production complexity, and sustainability of creating additional content while maintaining free content quality.'
        },
        {
          id: 'product-service-development',
          prompt: 'What products or services can you develop based on your podcast content and expertise?',
          category: 'planning',
          helpText: 'Create complementary offerings: online courses based on podcast topics, coaching or consulting services, books or ebooks, workshops and masterclasses, merchandise that resonates with audience, and software or tools for your niche. Plan: product development timeline, market validation, pricing strategy, and integration with podcast content. Consider: your unique expertise, audience needs and willingness to pay, production and fulfillment requirements, and how products enhance rather than compete with your podcast content.'
        },
        {
          id: 'business-structure-scaling',
          prompt: 'How will you structure your podcast as a business and plan for scaling operations?',
          category: 'planning',
          helpText: 'Plan business development: business entity formation, financial tracking and accounting, tax considerations and deductions, insurance needs, and legal considerations. Consider scaling: team member hiring (editors, virtual assistants, producers), process documentation and systematization, technology and tool scaling, and revenue goal setting. Plan: growth timeline, investment in equipment and team, and maintaining quality while scaling. Include: contract templates, pricing strategies, and professional service relationships.'
        },
        {
          id: 'financial-planning-sustainability',
          prompt: 'How will you manage finances and ensure the long-term sustainability of your podcast business?',
          category: 'planning',
          helpText: 'Create financial strategy: expense tracking and budgeting, revenue forecasting and goal setting, reinvestment in equipment and growth, emergency fund for business continuity, and tax planning and quarterly payments. Track: cost per episode, revenue per listener, lifetime value of audience members, and return on investment for marketing efforts. Plan: sustainable growth that doesn\'t compromise content quality, diversified revenue streams, and financial milestones that indicate business health and success.'
        }
      ]
    },
    {
      id: 'scaling-long-term-strategy',
      title: 'Scaling & Long-term Strategy',
      order: 6,
      reflectionPrompts: [
        {
          id: 'team-building-delegation',
          prompt: 'What team members or contractors will you need to hire as your podcast grows?',
          category: 'planning',
          helpText: 'Plan team expansion: audio editor for post-production, virtual assistant for administrative tasks, social media manager for platform management, researcher for content preparation, graphic designer for visual content, and potentially a producer for overall coordination. Consider: when to hire based on revenue and workload, in-house vs. contractor arrangements, training and onboarding processes, and budget allocation for team members. Start with the most time-consuming tasks that others can handle well.'
        },
        {
          id: 'content-expansion-formats',
          prompt: 'How might you expand into other content formats and platforms while maintaining your core podcast?',
          category: 'planning',
          helpText: 'Explore format expansion: video podcast or YouTube channel, live streaming or webinars, written content and blog, email newsletter, social media content series, and potentially separate shows or spin-offs. Plan: resource allocation across formats, content adaptation strategies, platform-specific optimization, and audience cross-pollination. Consider: your strengths and interests, audience preferences, and sustainable content creation across multiple formats while maintaining quality standards.'
        },
        {
          id: 'brand-authority-development',
          prompt: 'How will you establish yourself as a thought leader and authority in your niche?',
          category: 'planning',
          helpText: 'Build thought leadership: consistent valuable content creation, industry event speaking, media appearances and interviews, thought-provoking social media presence, and strategic networking and relationships. Develop: unique perspectives and insights, data-driven content, trend analysis and predictions, and collaborative projects with other experts. Consider: industry publication contributions, award submissions, conference organization or hosting, and mentorship opportunities that reinforce your expertise and authority.'
        },
        {
          id: 'technology-innovation-adoption',
          prompt: 'How will you stay current with podcasting technology and industry innovations?',
          category: 'planning',
          helpText: 'Stay technology current: emerging podcasting platforms and features, new monetization tools and opportunities, AI and automation tools for production, analytics and measurement improvements, and audience engagement innovations. Plan: regular technology assessment, beta testing of new tools, industry conference attendance, and networking with other creators to share insights. Balance: innovation adoption with proven systems, and avoid technology for technology\'s sake while remaining competitive and current.'
        },
        {
          id: 'sustainability-burnout-prevention',
          prompt: 'How will you maintain motivation and prevent burnout while building a sustainable podcast business?',
          category: 'planning',
          helpText: 'Plan for sustainability: realistic content creation schedule, regular breaks and vacation planning, content creation systems and batching, team support and delegation, and personal motivation and goal alignment. Address: creative block strategies, audience pressure management, perfectionism balance with consistency, and maintaining passion for your topic over time. Include: self-care practices, professional development, and connection with other creators for support and inspiration.'
        },
        {
          id: 'exit-strategy-legacy-planning',
          prompt: 'What are your long-term goals for your podcast, and what potential exit or evolution strategies might you consider?',
          category: 'planning',
          helpText: 'Consider long-term vision: podcast as ongoing business, sale to media company, evolution into larger media brand, legacy content preservation, and impact goals beyond revenue. Plan: asset building and intellectual property development, audience ownership and portability, business valuation and sellability, and content evergreen value. Think about: how your podcast fits into larger career goals, potential succession planning, and ways to maximize long-term value creation for audience, business, and personal fulfillment.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'podcast-fundamentals-launch',
      title: 'Podcast Fundamentals and Launch Strategy',
      type: 'guide',
      excerpt: 'Start your podcast successfully with **concept development**, **technical setup**, **content planning**, and **launch execution**.',
      content: 'Successful podcasting starts with solid fundamentals and strategic execution. **Concept Development:** Define your unique value proposition, identify your target audience, and create compelling content pillars that differentiate you in your niche. **Technical Setup:** Choose appropriate equipment for your budget and needs, establish efficient recording and editing workflows, and select reliable hosting and distribution platforms. **Content Planning:** Develop editorial calendars, create episode templates and structures, and plan content variety that maintains audience engagement. **Launch Execution:** Build anticipation with pre-launch content, execute a strategic launch sequence, and create systems for consistent publishing and audience growth.',
      tags: ['podcast-basics', 'concept-development', 'technical-setup', 'launch-strategy'],
      readTime: '22 min',
      difficulty: 'beginner'
    },
    {
      id: 'content-creation-storytelling',
      title: 'Content Creation and Storytelling Excellence',
      type: 'guide',
      excerpt: 'Create engaging content through **storytelling techniques**, **interview skills**, **audience engagement**, and **content optimization**.',
      content: 'Great podcasts combine compelling content with effective storytelling and audience connection. **Storytelling Techniques:** Master narrative structures, develop your unique voice, integrate personal stories effectively, and create emotional connections with listeners. **Interview Skills:** Prepare thoroughly, ask compelling questions, guide conversations naturally, and create safe spaces for authentic sharing. **Audience Engagement:** Build community through listener interaction, respond to feedback, create content that addresses audience needs, and develop recurring elements that build loyalty. **Content Optimization:** Analyze performance data, adapt content based on audience response, maintain quality standards, and continuously improve your craft.',
      tags: ['content-creation', 'storytelling', 'interview-skills', 'audience-engagement'],
      readTime: '25 min',
      difficulty: 'intermediate'
    },
    {
      id: 'podcast-marketing-growth',
      title: 'Podcast Marketing and Audience Growth',
      type: 'guide',
      excerpt: 'Grow your audience through **SEO optimization**, **social media strategy**, **networking**, and **community building**.',
      content: 'Sustainable podcast growth requires strategic marketing and authentic community building. **SEO Optimization:** Optimize episode titles and descriptions, create searchable show notes, utilize transcripts effectively, and understand podcast directory algorithms. **Social Media Strategy:** Adapt content for different platforms, create engaging visual content, build authentic relationships, and maintain consistent brand presence. **Networking:** Connect with other podcasters, participate in industry events, collaborate on cross-promotional opportunities, and build mutually beneficial relationships. **Community Building:** Create email lists, engage with listeners across platforms, provide exclusive value, and foster genuine connections that extend beyond passive listening.',
      tags: ['podcast-marketing', 'audience-growth', 'social-media', 'community-building'],
      readTime: '24 min',
      difficulty: 'intermediate'
    },
    {
      id: 'podcast-monetization-business',
      title: 'Podcast Monetization and Business Development',
      type: 'guide',
      excerpt: 'Build sustainable revenue through **sponsorships**, **premium content**, **product development**, and **business scaling**.',
      content: 'Successful podcast monetization requires diverse revenue streams and strategic business development. **Sponsorships:** Build audience to attract sponsors, maintain authentic partnerships, price appropriately for your reach and engagement, and balance advertiser needs with audience experience. **Premium Content:** Create valuable exclusive offerings, price competitively, deliver consistent value, and maintain free content quality while growing premium subscriptions. **Product Development:** Leverage your expertise and audience relationships to create courses, services, or products that genuinely serve your community. **Business Scaling:** Structure operations for growth, build team support systems, maintain quality standards, and plan for long-term sustainability.',
      tags: ['podcast-monetization', 'sponsorships', 'premium-content', 'business-development'],
      readTime: '26 min',
      difficulty: 'expert'
    },
    {
      id: 'podcast-production-efficiency',
      title: 'Production Workflow and Technical Excellence',
      type: 'guide',
      excerpt: 'Optimize production through **workflow systems**, **quality control**, **technical skills**, and **efficiency strategies**.',
      content: 'Efficient production systems enable consistent, high-quality podcast creation. **Workflow Systems:** Develop repeatable processes for planning, recording, editing, and publishing that scale with your growth. **Quality Control:** Establish audio and content standards, create review processes, and maintain consistency across all episodes. **Technical Skills:** Master your recording and editing tools, understand audio processing, troubleshoot common issues, and stay current with technology developments. **Efficiency Strategies:** Batch similar tasks, automate repetitive processes, outsource appropriate work, and create templates and systems that reduce production time while maintaining quality standards.',
      tags: ['production-workflow', 'quality-control', 'technical-skills', 'efficiency'],
      readTime: '20 min',
      difficulty: 'expert'
    }
  ]
};

export const languageLearningCulturalImmersionTemplate: GuidanceTemplate = {
  id: 'language-learning-cultural-immersion',
  title: 'Language Learning & Cultural Immersion',
  category: 'education-culture',
  icon: '🌏',
  sections: [
    {
      id: 'learning-goals-assessment',
      title: 'Learning Goals & Language Assessment',
      order: 1,
      reflectionPrompts: [
        {
          id: 'language-learning-motivation',
          prompt: 'Why do you want to learn this language, and what specific goals do you hope to achieve?',
          category: 'planning',
          helpText: 'Clarify your motivation: career advancement and professional opportunities, travel and cultural exploration, family heritage and connection, academic or educational requirements, personal challenge and intellectual growth, or immigration and relocation needs. Set specific goals: conversational fluency level, business proficiency, academic proficiency, or native-like fluency. Consider timeline: short-term communication needs vs. long-term mastery goals. Strong motivation sustains you through challenging periods.'
        },
        {
          id: 'current-level-assessment',
          prompt: 'What is your current proficiency level in the target language, and what are your strengths and weaknesses?',
          category: 'research',
          helpText: 'Assess current abilities using frameworks like CEFR (A1-C2) or ACTFL guidelines: listening comprehension, speaking ability, reading comprehension, writing skills, grammar knowledge, and vocabulary size. Identify strengths: perhaps you read well but struggle with speaking, or understand grammar but lack vocabulary. Take placement tests, use language learning apps assessments, or get evaluated by native speakers. Understanding your starting point helps create realistic goals and appropriate learning strategies.'
        },
        {
          id: 'target-proficiency-timeline',
          prompt: 'What level of proficiency do you want to reach, and what is your realistic timeline for achieving it?',
          category: 'planning',
          helpText: 'Define target proficiency: basic conversational ability (A2), intermediate fluency (B1-B2), advanced proficiency (C1), or near-native fluency (C2). Research typical timeframes: 600-2200+ hours depending on language difficulty and target level. Consider your available study time: hours per day/week, intensive vs. gradual learning, and consistency factors. Set intermediate milestones: monthly and quarterly goals that build toward your ultimate objective. Account for plateaus and varying progress rates.'
        },
        {
          id: 'language-difficulty-challenges',
          prompt: 'What specific challenges does your target language present, and how will you address them?',
          category: 'planning',
          helpText: 'Research language-specific challenges: writing system complexity (alphabet, characters, scripts), grammar structure differences from your native language, pronunciation and phonetic difficulties, cultural context and idiomatic expressions, and formal vs. informal language registers. For English speakers: Category I languages (Spanish, French) vs. Category IV languages (Arabic, Mandarin, Japanese). Plan targeted strategies: extra focus on challenging aspects, specialized resources, and realistic expectations for difficult elements.'
        },
        {
          id: 'learning-style-preferences',
          prompt: 'What learning styles and methods work best for you, and how will you incorporate them?',
          category: 'planning',
          helpText: 'Identify effective learning approaches: visual learning (reading, flashcards, charts), auditory learning (listening, speaking, music), kinesthetic learning (writing, movement, hands-on), social learning (conversation, classes, exchange), or analytical learning (grammar rules, structure). Consider past language learning experiences: what worked and what didn\'t. Plan multimodal approach: combine different methods for comprehensive learning. Adapt strategies based on what you discover works best for this specific language.'
        },
        {
          id: 'success-metrics-tracking',
          prompt: 'How will you measure progress and track your language learning success over time?',
          category: 'planning',
          helpText: 'Establish progress indicators: standardized test scores (TOEFL, IELTS, DELE, etc.), conversation length and complexity, reading material difficulty level, writing accuracy and fluency, and practical task completion (ordering food, giving directions, workplace discussions). Create tracking systems: language learning apps with progress metrics, regular self-assessments, recording yourself speaking, and feedback from native speakers. Set regular review periods: weekly progress checks, monthly assessments, and quarterly major evaluations.'
        }
      ]
    },
    {
      id: 'learning-methods-resources',
      title: 'Learning Methods & Resource Selection',
      order: 2,
      reflectionPrompts: [
        {
          id: 'formal-vs-informal-learning',
          prompt: 'What combination of formal classes and self-directed learning will work best for your situation?',
          category: 'planning',
          helpText: 'Evaluate learning options: formal language classes (university, community college, language schools), private tutoring or coaching, online courses and programs, self-directed study with apps and materials, and immersion programs or travel. Consider: your schedule flexibility, budget constraints, learning style preferences, accountability needs, and access to native speakers. Plan combination approach: perhaps formal classes for structure plus self-study for additional practice. Balance guided learning with independent exploration.'
        },
        {
          id: 'technology-app-integration',
          prompt: 'Which language learning apps and technology tools will you integrate into your routine?',
          category: 'planning',
          helpText: 'Select appropriate apps: comprehensive programs (Duolingo, Babbel, Rosetta Stone), flashcard systems (Anki, Quizlet), conversation practice (HelloTalk, Tandem), pronunciation tools (Forvo, Sounds), and grammar references. Consider: free vs. paid options, offline availability, progress tracking, gamification elements, and integration with other tools. Plan usage: daily app practice time, specific apps for different skills, and how to avoid app-hopping. Balance technology with human interaction and real-world practice.'
        },
        {
          id: 'authentic-materials-media',
          prompt: 'What authentic materials and media will you use to expose yourself to natural language use?',
          category: 'planning',
          helpText: 'Incorporate authentic content: movies and TV shows with subtitles, podcasts and radio programs, news websites and newspapers, social media in target language, YouTube channels and videos, music and lyrics, and books and literature. Progress gradually: start with content designed for learners, then move to simplified native content, and eventually to full native-level materials. Use comprehensible input: content slightly above your current level. Plan regular consumption: daily podcast listening, weekly movie viewing, or monthly book reading goals.'
        },
        {
          id: 'conversation-practice-opportunities',
          prompt: 'How will you create regular opportunities for conversation practice with native speakers?',
          category: 'planning',
          helpText: 'Find speaking practice: language exchange partnerships, conversation clubs and meetups, online tutoring platforms (italki, Preply), local community groups, volunteer opportunities with native speakers, and professional networking in the target language. Plan conversation topics: prepare discussion themes, current events, personal interests, and cultural topics. Build comfort: start with structured conversations, progress to free-flowing discussions, and practice different registers (formal, informal, professional). Schedule regular practice: weekly conversations minimum for maintaining speaking skills.'
        },
        {
          id: 'grammar-vocabulary-building',
          prompt: 'What systematic approach will you take to build vocabulary and master grammar concepts?',
          category: 'planning',
          helpText: 'Develop vocabulary strategy: frequency-based word lists, thematic vocabulary groups, spaced repetition systems, context-based learning from reading, and personal vocabulary journals. Plan grammar study: systematic progression through grammar concepts, practical application through exercises, integration with speaking and writing practice, and regular review of previously learned concepts. Use multiple reinforcement: see, hear, speak, and write new words and structures. Create personal examples and connections to aid retention.'
        },
        {
          id: 'study-schedule-consistency',
          prompt: 'How will you create and maintain a consistent study schedule that fits your lifestyle?',
          category: 'planning',
          helpText: 'Design sustainable routine: daily minimum study time (even 15-30 minutes), longer focused sessions 2-3 times weekly, intensive weekend or weekly review sessions, and integration of micro-learning throughout the day. Plan variety: alternate between different skills and activities, schedule more demanding tasks during your peak energy times, and include fun, engaging activities to maintain motivation. Build consistency: same time each day, habit stacking with existing routines, accountability systems, and flexibility for busy periods while maintaining minimum exposure.'
        }
      ]
    },
    {
      id: 'immersion-cultural-understanding',
      title: 'Immersion Strategies & Cultural Understanding',
      order: 3,
      reflectionPrompts: [
        {
          id: 'virtual-immersion-environment',
          prompt: 'How will you create an immersive language environment in your daily life?',
          category: 'planning',
          helpText: 'Build immersive environment: change device language settings, follow social media accounts in target language, join online communities and forums, set up news feeds and podcasts, and create target language playlists. Designate language time: specific hours or activities conducted only in target language, family conversations in target language if applicable, and thinking/internal monologue practice. Transform daily activities: cooking with target language recipes, exercising with target language fitness videos, or learning new skills through target language tutorials.'
        },
        {
          id: 'cultural-context-learning',
          prompt: 'How will you learn about the cultural contexts and social norms of the language community?',
          category: 'planning',
          helpText: 'Explore cultural dimensions: historical background and cultural values, social etiquette and behavioral norms, communication styles (direct vs. indirect, formal vs. informal), family and relationship structures, business and professional customs, and religious or philosophical influences. Use cultural resources: documentaries, cultural websites, travel guides, cultural exchange programs, and conversations with native speakers about cultural topics. Understand cultural differences that affect language use: politeness levels, age and hierarchy considerations, and regional variations.'
        },
        {
          id: 'travel-immersion-planning',
          prompt: 'What travel or immersion experiences will you pursue to accelerate your learning?',
          category: 'planning',
          helpText: 'Plan immersion opportunities: study abroad programs, language immersion camps or intensives, travel to countries where the language is spoken, local immersion experiences in your area, and volunteer work with native speaker communities. Prepare for travel: pre-travel language preparation, cultural research and preparation, practical language needs (navigation, accommodation, food), and goals for language use during travel. Maximize immersion: stay with host families, avoid English-speaking enclaves, engage with locals, and document your experiences in the target language.'
        },
        {
          id: 'cultural-sensitivity-awareness',
          prompt: 'How will you develop cultural sensitivity and avoid common misunderstandings or offensive behavior?',
          category: 'planning',
          helpText: 'Build cultural competence: learn about cultural taboos and sensitive topics, understand humor and sarcasm differences, recognize non-verbal communication patterns, appreciate religious and cultural celebrations, and develop awareness of historical and political contexts. Practice cultural empathy: suspend judgment of different practices, ask questions respectfully when unsure, learn from cultural mistakes without defensiveness, and show genuine interest in understanding different perspectives. Seek feedback from native speakers about cultural appropriateness.'
        },
        {
          id: 'professional-cultural-integration',
          prompt: 'How will you navigate professional or academic settings in your target language and culture?',
          category: 'planning',
          helpText: 'Understand professional norms: business communication styles, meeting etiquette and participation, email and written communication standards, networking and relationship building, and hierarchy and authority structures. Learn specialized vocabulary: industry-specific terminology, academic or professional jargon, formal presentation language, and negotiation or discussion phrases. Practice professional scenarios: job interviews, presentations, client interactions, and collaborative project work. Understand work-life balance concepts and professional relationship boundaries in the target culture.'
        },
        {
          id: 'long-term-cultural-connection',
          prompt: 'How will you maintain long-term connections with the language community and culture?',
          category: 'planning',
          helpText: 'Build lasting relationships: maintain friendships with native speakers, participate in cultural events and celebrations, support cultural organizations or causes, and create ongoing exchange relationships. Stay culturally current: follow news and current events, understand evolving slang and language changes, keep up with popular culture and media, and maintain awareness of social and political developments. Plan return visits or extended stays, consider living or working in the culture long-term, and potentially teach others about the culture you\'ve learned.'
        }
      ]
    },
    {
      id: 'practice-skill-development',
      title: 'Practice Strategies & Skill Development',
      order: 4,
      reflectionPrompts: [
        {
          id: 'speaking-pronunciation-practice',
          prompt: 'How will you systematically improve your speaking ability and pronunciation?',
          category: 'planning',
          helpText: 'Develop speaking skills: record yourself regularly to track progress, practice with pronunciation apps and tools, shadow native speakers (repeat after audio), participate in conversation exchanges, and seek feedback from native speakers. Work on specific pronunciation challenges: problem sounds, intonation patterns, rhythm and stress, and accent reduction if desired. Practice different speaking contexts: casual conversation, formal presentations, phone conversations, and public speaking. Build confidence through regular practice and gradual challenge increase.'
        },
        {
          id: 'listening-comprehension-strategies',
          prompt: 'What strategies will you use to improve listening comprehension across different contexts and accents?',
          category: 'planning',
          helpText: 'Build listening skills: start with clear, slow speech and gradually increase speed and complexity, expose yourself to different accents and dialects, practice with various audio types (podcasts, movies, news, conversations), and use active listening techniques. Develop strategies: listen for main ideas before details, use context clues for unknown words, practice predicting and inferring meaning, and learn to tolerate ambiguity. Progress systematically: from content designed for learners to authentic native content, from prepared speech to spontaneous conversation.'
        },
        {
          id: 'reading-comprehension-expansion',
          prompt: 'How will you progressively build your reading skills and expand your comprehension abilities?',
          category: 'planning',
          helpText: 'Develop reading progression: start with graded readers and simple texts, move to news articles and blogs, progress to literature and complex texts, and include various text types (narrative, expository, technical, creative). Use reading strategies: skim for main ideas, scan for specific information, infer meaning from context, and analyze text structure. Build reading stamina: gradually increase text length and complexity, practice speed reading techniques, and develop extensive reading habits. Keep vocabulary journals and note cultural references.'
        },
        {
          id: 'writing-expression-development',
          prompt: 'What approach will you take to develop your writing skills and written expression?',
          category: 'planning',
          helpText: 'Practice writing systematically: start with simple sentences and paragraphs, progress to essays and longer compositions, practice different writing styles (formal, informal, academic, creative), and write regularly even if briefly. Focus on accuracy and fluency: work on grammar and sentence structure, expand vocabulary usage, develop paragraph and essay organization, and learn appropriate register for different contexts. Seek feedback: use online correction tools, find native speaker pen pals, join writing groups, or work with tutors. Keep a journal in your target language.'
        },
        {
          id: 'integrated-skills-practice',
          prompt: 'How will you practice using multiple language skills together in realistic scenarios?',
          category: 'planning',
          helpText: 'Combine skills authentically: participate in debates and discussions (listening + speaking), take notes while listening to lectures (listening + writing), summarize articles or videos (reading/listening + writing), and give presentations based on research (reading + speaking + writing). Practice real-world scenarios: job interviews, academic presentations, social interactions, travel situations, and professional meetings. Use task-based learning: complete projects that require multiple skills, solve problems using the target language, and engage in role-playing activities.'
        },
        {
          id: 'error-correction-improvement',
          prompt: 'How will you identify, track, and correct your common errors and weaknesses?',
          category: 'planning',
          helpText: 'Develop error awareness: keep an error log of common mistakes, record yourself speaking to identify patterns, seek feedback from native speakers or teachers, and use language learning apps that highlight errors. Focus correction efforts: prioritize errors that impede communication, work on one error type at a time for systematic improvement, practice correct forms through repetition and various contexts, and celebrate progress in error reduction. Balance accuracy with fluency: don\'t let fear of errors prevent communication, but work systematically on improvement areas.'
        }
      ]
    },
    {
      id: 'motivation-persistence-strategies',
      title: 'Motivation & Persistence Strategies',
      order: 5,
      reflectionPrompts: [
        {
          id: 'plateau-breakthrough-strategies',
          prompt: 'How will you recognize and overcome learning plateaus when progress seems to stall?',
          category: 'planning',
          helpText: 'Understand plateaus: normal part of language learning, often occur at intermediate levels, may last weeks or months, and can be frustrating but temporary. Develop breakthrough strategies: change learning methods or materials, increase challenge level, focus on weak skill areas, take breaks and return refreshed, and seek new sources of input and practice. Recognize disguised progress: passive knowledge becoming active, increased confidence, better accent or fluency, and improved cultural understanding even when vocabulary growth slows.'
        },
        {
          id: 'motivation-maintenance-systems',
          prompt: 'What systems will you use to maintain motivation during difficult or boring periods?',
          category: 'planning',
          helpText: 'Build motivation systems: connect learning to personal interests and hobbies, set short-term achievable goals with rewards, track progress visually through charts or apps, celebrate milestones and achievements, and remind yourself regularly of your why. Combat boredom: vary learning activities and materials, gamify learning through apps or challenges, find learning partners for accountability, and explore fun aspects of the culture. Plan for difficult periods: have backup easy activities, maintain minimum daily exposure, and remember that consistency matters more than perfection.'
        },
        {
          id: 'learning-community-support',
          prompt: 'How will you build a supportive community of fellow learners and native speakers?',
          category: 'planning',
          helpText: 'Create support networks: join online language learning communities, participate in local language meetups, find study partners or learning buddies, connect with native speakers through language exchange, and engage with cultural communities. Share your journey: post progress updates, ask for advice and encouragement, help other learners, and participate in challenges or group activities. Maintain relationships: regular communication with language partners, appreciation for help received, and reciprocal support for others\' learning goals.'
        },
        {
          id: 'confidence-building-strategies',
          prompt: 'How will you build confidence to use your new language despite mistakes and imperfections?',
          category: 'planning',
          helpText: 'Develop language confidence: start with low-pressure situations, practice self-compassion when making mistakes, focus on communication success rather than perfection, and gradually increase challenge levels. Build positive experiences: prepare for conversations with common topics, practice successful interactions, celebrate communication achievements, and seek encouraging feedback. Overcome fear: remember that mistakes are normal and helpful, focus on being understood rather than being perfect, and practice in safe environments before higher-stakes situations.'
        },
        {
          id: 'habit-formation-consistency',
          prompt: 'What habit formation strategies will help you maintain consistent daily language practice?',
          category: 'planning',
          helpText: 'Build sustainable habits: start small with achievable daily minimums, stack language learning with existing habits, create environmental cues and reminders, and track streak consistency. Design habit systems: same time and place for study, remove barriers to practice, have backup plans for busy days, and focus on consistency over intensity. Use psychological principles: identity-based habits ("I am someone who speaks Spanish"), implementation intentions ("After I drink my morning coffee, I will practice vocabulary"), and habit stacking with enjoyable activities.'
        },
        {
          id: 'long-term-vision-commitment',
          prompt: 'How will you maintain long-term commitment and vision for your language learning journey?',
          category: 'planning',
          helpText: 'Sustain long-term vision: regularly revisit and refine your goals, visualize yourself using the language successfully, plan future opportunities to use the language, and connect learning to larger life goals. Maintain commitment: track long-term progress and improvements, celebrate major milestones, plan rewards for persistence, and adjust goals as needed while maintaining core commitment. Plan for lifelong learning: language learning is ongoing even after fluency, plan for continued cultural engagement, consider advanced goals like professional certification, and think about giving back to the language learning community.'
        }
      ]
    },
    {
      id: 'assessment-advancement-planning',
      title: 'Assessment & Advanced Learning Planning',
      order: 6,
      reflectionPrompts: [
        {
          id: 'formal-assessment-certification',
          prompt: 'What formal assessments or certifications will you pursue to validate your language proficiency?',
          category: 'planning',
          helpText: 'Research relevant certifications: internationally recognized tests (TOEFL, IELTS, DELE, DELF, JLPT, HSK), professional certifications for career use, academic requirements for study abroad, and immigration or citizenship requirements. Plan preparation: understand test format and requirements, take practice tests, identify weak areas for focused study, and consider test preparation courses or tutoring. Schedule strategically: allow adequate preparation time, consider test availability and timing, and plan retakes if necessary for target scores.'
        },
        {
          id: 'specialized-language-skills',
          prompt: 'What specialized language skills or registers will you develop for specific purposes or fields?',
          category: 'planning',
          helpText: 'Identify specialization needs: business and professional language, academic language for study, technical vocabulary for your field, medical or legal terminology if relevant, and cultural or artistic language for specific interests. Develop specialized skills: formal vs. informal registers, written vs. spoken variations, presentation and public speaking, negotiation and persuasion, and cultural nuances in professional settings. Find specialized resources: professional development courses in target language, industry-specific materials and media, and networking with professionals who use the language in your field.'
        },
        {
          id: 'advanced-cultural-competency',
          prompt: 'How will you develop advanced cultural competency and nuanced understanding of cultural contexts?',
          category: 'planning',
          helpText: 'Deepen cultural knowledge: study history, literature, and arts, understand political and social systems, learn about current events and social issues, and explore regional and generational differences. Develop cultural sensitivity: recognize cultural assumptions and biases, understand indirect communication styles, appreciate humor and cultural references, and navigate complex social situations. Engage meaningfully: participate in cultural discussions, contribute to cultural exchange, develop friendships with native speakers, and potentially become a cultural bridge for others.'
        },
        {
          id: 'teaching-sharing-knowledge',
          prompt: 'How might you share your language learning experience by teaching or mentoring others?',
          category: 'planning',
          helpText: 'Consider teaching opportunities: tutor beginning learners, lead conversation groups, create learning content or resources, and mentor other language learners. Develop teaching skills: understand learning processes, adapt to different learning styles, create engaging activities, and provide constructive feedback. Share your journey: blog about learning experiences, create social media content, speak about language learning benefits, and contribute to language learning communities. Teaching reinforces your own learning and helps maintain motivation.'
        },
        {
          id: 'maintenance-retention-planning',
          prompt: 'What long-term strategies will you use to maintain and continue improving your language skills?',
          category: 'planning',
          helpText: 'Plan maintenance activities: regular consumption of native media, ongoing conversations with native speakers, continued reading in the target language, and periodic intensive review sessions. Set continued learning goals: explore advanced literature, develop specialized vocabulary, work on subtle grammar points, and refine pronunciation and accent. Create accountability: join advanced learning groups, set annual proficiency goals, take periodic assessments, and maintain connections with the language community. Balance maintenance with other life priorities while preserving your language investment.'
        },
        {
          id: 'multilingual-expansion-planning',
          prompt: 'How might your current language learning experience inform future multilingual goals or learning projects?',
          category: 'planning',
          helpText: 'Apply learning strategies: use successful methods from current language for future languages, understand your personal learning preferences, leverage cognitive benefits of multilingualism, and build confidence for additional language learning. Plan language progression: related languages that share roots or writing systems, languages that complement career goals, languages for travel or cultural interests, and languages that enhance your first target language. Consider polyglot strategies: maintain multiple languages simultaneously, use one target language to learn another, and develop efficient systems for managing multiple languages. Balance depth in current language with breadth of multilingual abilities.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'language-learning-fundamentals',
      title: 'Language Learning Fundamentals and Goal Setting',
      type: 'guide',
      excerpt: 'Start your language journey effectively with **goal setting**, **level assessment**, **method selection**, and **progress tracking**.',
      content: 'Successful language learning begins with clear goals and systematic approaches. **Goal Setting:** Define specific, measurable objectives based on your motivation whether for career, travel, family, or personal growth. Set both short-term milestones and long-term proficiency targets. **Level Assessment:** Accurately assess your starting point using standardized frameworks like CEFR or ACTFL to choose appropriate materials and set realistic timelines. **Method Selection:** Choose learning approaches that match your style, schedule, and goals, combining formal instruction with self-directed practice. **Progress Tracking:** Establish systems to monitor improvement across all skills - speaking, listening, reading, and writing - and adjust strategies based on your progress patterns.',
      tags: ['language-basics', 'goal-setting', 'assessment', 'method-selection'],
      readTime: '18 min',
      difficulty: 'beginner'
    },
    {
      id: 'immersion-cultural-integration',
      title: 'Language Immersion and Cultural Understanding',
      type: 'guide',
      excerpt: 'Accelerate learning through **virtual immersion**, **cultural context**, **authentic materials**, and **real-world practice**.',
      content: 'Immersion accelerates language acquisition by providing authentic context and cultural understanding. **Virtual Immersion:** Create immersive environments at home through media consumption, social media engagement, and daily life integration in your target language. **Cultural Context:** Learn cultural norms, communication styles, and social expectations that give meaning to language use beyond grammar and vocabulary. **Authentic Materials:** Progress from learner materials to native content including news, entertainment, literature, and social media to encounter natural language use. **Real-world Practice:** Seek opportunities for genuine communication through language exchange, travel, volunteer work, or professional networking to apply skills in meaningful contexts.',
      tags: ['immersion-strategies', 'cultural-understanding', 'authentic-materials', 'real-world-practice'],
      readTime: '22 min',
      difficulty: 'intermediate'
    },
    {
      id: 'skill-development-strategies',
      title: 'Comprehensive Skill Development and Practice',
      type: 'guide',
      excerpt: 'Master all language skills through **speaking practice**, **listening strategies**, **reading progression**, and **writing development**.',
      content: 'Balanced language proficiency requires systematic development of all four skills. **Speaking Practice:** Overcome speaking anxiety through gradual exposure, pronunciation work, conversation practice, and feedback from native speakers. **Listening Strategies:** Develop comprehension through progressive exposure to different accents, speeds, and contexts while building tolerance for ambiguity. **Reading Progression:** Build from simple texts to complex literature, developing vocabulary, cultural knowledge, and analytical skills simultaneously. **Writing Development:** Progress from basic sentences to complex compositions, mastering different registers and styles appropriate for various contexts. Integrate skills through realistic tasks that combine multiple abilities.',
      tags: ['skill-development', 'speaking-practice', 'listening-comprehension', 'reading-writing'],
      readTime: '25 min',
      difficulty: 'intermediate'
    },
    {
      id: 'motivation-persistence-mastery',
      title: 'Motivation, Persistence, and Learning Psychology',
      type: 'guide',
      excerpt: 'Maintain long-term motivation through **plateau management**, **habit formation**, **community support**, and **confidence building**.',
      content: 'Language learning success depends as much on psychology as methodology. **Plateau Management:** Understand that plateaus are normal parts of learning, recognize disguised progress, and employ strategies to breakthrough stagnant periods. **Habit Formation:** Build sustainable daily practices using psychological principles of habit formation, consistency over intensity, and environmental design. **Community Support:** Connect with fellow learners and native speakers for motivation, accountability, and authentic practice opportunities. **Confidence Building:** Develop resilience to mistakes, celebrate communication successes over perfection, and gradually increase challenge levels to build genuine confidence in using your new language.',
      tags: ['motivation-maintenance', 'learning-psychology', 'habit-formation', 'community-building'],
      readTime: '20 min',
      difficulty: 'intermediate'
    },
    {
      id: 'advanced-proficiency-specialization',
      title: 'Advanced Proficiency and Specialized Applications',
      type: 'guide',
      excerpt: 'Achieve advanced fluency through **formal certification**, **specialized skills**, **cultural mastery**, and **maintenance strategies**.',
      content: 'Advanced language proficiency requires specialized strategies and long-term commitment. **Formal Certification:** Prepare for and achieve recognized certifications that validate your proficiency for professional, academic, or immigration purposes. **Specialized Skills:** Develop register-specific abilities for professional, academic, or specialized contexts that require precise and culturally appropriate communication. **Cultural Mastery:** Move beyond language mechanics to deep cultural competency, understanding nuance, humor, and implicit communication patterns. **Maintenance Strategies:** Develop sustainable practices for retaining and continuing to improve your language skills throughout life, including teaching others and staying connected to the language community.',
      tags: ['advanced-proficiency', 'certification-prep', 'specialized-applications', 'long-term-maintenance'],
      readTime: '24 min',
      difficulty: 'expert'
    }
  ]
};

// Comprehensive budget planning and financial management guidance
export const budgetPlanningTemplate: GuidanceTemplate = {
  id: 'budget-planning',
  title: 'Budget Planning & Financial Management',
  description: 'Master your finances with comprehensive budgeting, debt management, and savings strategies',
  category: 'personal-finance',
  icon: '💰',
  sections: [
    {
      id: 'financial-assessment',
      title: 'Financial Assessment & Goal Setting',
      description: 'Evaluate your current financial situation and establish clear goals',
      order: 1,
      reflectionPrompts: [
        {
          id: 'income-evaluation',
          prompt: 'What is your total monthly income from all sources (salary, freelance, investments, benefits)?',
          category: 'planning',
          helpText: 'Include all income sources: primary job, side hustles, rental income, dividends, government benefits.',
          relatedResources: ['income-tracking-guide', 'multiple-income-streams']
        },
        {
          id: 'expense-analysis',
          prompt: 'What are all your monthly expenses? List fixed expenses (rent, insurance) and variable expenses (groceries, entertainment).',
          category: 'research',
          helpText: 'Track expenses for 2-3 months to get accurate averages. Use bank statements and receipt tracking.',
          relatedResources: ['expense-tracking-methods']
        },
        {
          id: 'debt-inventory',
          prompt: 'What debts do you currently have? List each debt with balance, minimum payment, and interest rate.',
          category: 'research',
          helpText: 'Include credit cards, student loans, car loans, mortgage, personal loans, and any money owed to family/friends.'
        },
        {
          id: 'financial-goals',
          prompt: 'What are your short-term (1 year), medium-term (2-5 years), and long-term (5+ years) financial goals?',
          category: 'decision',
          helpText: 'Be specific with amounts and timelines. Examples: emergency fund, vacation, down payment, retirement.',
          relatedResources: ['smart-goal-setting']
        },
        {
          id: 'money-mindset',
          prompt: 'What is your relationship with money? What financial habits or beliefs from your upbringing affect your spending?',
          category: 'consideration',
          helpText: 'Understanding your money psychology helps identify patterns that may sabotage financial success.'
        },
        {
          id: 'risk-tolerance',
          prompt: 'How comfortable are you with financial risk? What would happen if you lost your primary income for 3-6 months?',
          category: 'consideration',
          helpText: 'This affects emergency fund size, investment strategy, and insurance needs.',
          relatedResources: ['risk-assessment-guide']
        }
      ]
    },
    {
      id: 'budget-creation',
      title: 'Budget Framework & System Design',
      description: 'Create a sustainable budget system that works for your lifestyle',
      order: 2,
      reflectionPrompts: [
        {
          id: 'budgeting-method',
          prompt: 'Which budgeting method appeals to you: 50/30/20 rule, zero-based budgeting, envelope method, or percentage-based?',
          category: 'decision',
          helpText: '50/30/20: needs/wants/savings. Zero-based: every dollar assigned. Envelope: cash for categories.',
          relatedResources: ['budgeting-methods-comparison']
        },
        {
          id: 'needs-vs-wants',
          prompt: 'How do you distinguish between needs and wants? What expenses feel necessary but might actually be optional?',
          category: 'consideration',
          helpText: 'Challenge assumptions. Is the expensive gym membership a need if you could work out at home?'
        },
        {
          id: 'income-allocation',
          prompt: 'How will you allocate your income across categories: housing, food, transportation, utilities, savings, debt payment, entertainment?',
          category: 'planning',
          helpText: 'Start with fixed expenses, then allocate remaining income to priorities and goals.'
        },
        {
          id: 'savings-rate',
          prompt: 'What percentage of your income can you realistically save each month? Start with a sustainable amount.',
          category: 'planning',
          helpText: 'Even 1% is a start. Financial experts recommend 10-20%, but any consistent saving builds the habit.'
        },
        {
          id: 'flexibility-buffer',
          prompt: 'How much flexibility do you need in your budget for unexpected expenses or income changes?',
          category: 'consideration',
          helpText: 'Build in buffer amounts for categories like groceries and entertainment that naturally vary.'
        },
        {
          id: 'tracking-system',
          prompt: 'How will you track your spending: apps, spreadsheets, or manual methods? What system will you actually use consistently?',
          category: 'planning',
          helpText: 'The best system is the one you\'ll use. Consider Mint, YNAB, spreadsheets, or simple notebook tracking.',
          relatedResources: ['budgeting-tools-comparison']
        }
      ]
    },
    {
      id: 'debt-management',
      title: 'Debt Elimination Strategy',
      description: 'Develop a strategic plan to eliminate debt efficiently',
      order: 3,
      reflectionPrompts: [
        {
          id: 'debt-strategy',
          prompt: 'Will you use the debt snowball (smallest balances first) or debt avalanche (highest interest rates first) method?',
          category: 'decision',
          helpText: 'Snowball provides psychological wins; avalanche saves more money. Choose based on your personality.',
          relatedResources: ['debt-payoff-strategies']
        },
        {
          id: 'minimum-payments',
          prompt: 'Are you currently making minimum payments on all debts? Can you afford to pay more on any specific debt?',
          category: 'planning',
          helpText: 'Always make minimums to avoid penalties, then put extra money toward your priority debt.'
        },
        {
          id: 'debt-consolidation',
          prompt: 'Would debt consolidation or balance transfers help lower your interest rates and simplify payments?',
          category: 'research',
          helpText: 'Consider personal loans, balance transfer credit cards, or home equity loans for consolidation.',
          relatedResources: ['debt-consolidation-guide']
        },
        {
          id: 'extra-payment-sources',
          prompt: 'Where can you find extra money for debt payments: tax refunds, bonuses, side income, expense cuts?',
          category: 'planning',
          helpText: 'Apply windfalls directly to debt. Even small amounts make a difference with compound interest.'
        },
        {
          id: 'debt-prevention',
          prompt: 'What spending triggers lead to new debt? How will you prevent accumulating more debt while paying off current balances?',
          category: 'consideration',
          helpText: 'Identify emotional spending, remove temptations, and have a plan for unexpected expenses.'
        },
        {
          id: 'debt-free-timeline',
          prompt: 'Based on your payment plan, when will each debt be paid off? What will you do when you become debt-free?',
          category: 'planning',
          helpText: 'Create a timeline to stay motivated. Plan to redirect debt payments to savings and investments.'
        }
      ]
    },
    {
      id: 'emergency-fund',
      title: 'Emergency Fund Building',
      description: 'Build financial security with an appropriate emergency fund',
      order: 4,
      reflectionPrompts: [
        {
          id: 'emergency-fund-size',
          prompt: 'How large should your emergency fund be based on your expenses and income stability?',
          category: 'planning',
          helpText: 'General rule: 3-6 months of expenses. Increase if you have variable income or high-risk job.',
          relatedResources: ['emergency-fund-calculator']
        },
        {
          id: 'fund-priorities',
          prompt: 'Should you build your emergency fund before paying off debt, or tackle both simultaneously?',
          category: 'decision',
          helpText: 'Start with $1,000 mini emergency fund, then focus on debt, then complete full emergency fund.'
        },
        {
          id: 'emergency-definition',
          prompt: 'What constitutes a true emergency that warrants using your emergency fund?',
          category: 'consideration',
          helpText: 'Real emergencies: job loss, major medical bills, essential repairs. Not: vacations or sales.'
        },
        {
          id: 'fund-location',
          prompt: 'Where will you keep your emergency fund for easy access but avoid temptation to spend it?',
          category: 'planning',
          helpText: 'High-yield savings accounts offer accessibility and growth. Avoid checking accounts or investments.'
        },
        {
          id: 'fund-building-strategy',
          prompt: 'How will you systematically build your emergency fund: automatic transfers, cash windfalls, or gradual increases?',
          category: 'planning',
          helpText: 'Automate transfers to make saving effortless. Start small and increase gradually.'
        },
        {
          id: 'fund-replenishment',
          prompt: 'If you use your emergency fund, what\'s your plan to replenish it quickly?',
          category: 'consideration',
          helpText: 'Prioritize rebuilding the fund over other financial goals until it\'s restored to full amount.'
        }
      ]
    },
    {
      id: 'savings-investment',
      title: 'Savings & Investment Planning',
      description: 'Develop strategies for growing wealth beyond emergency funds',
      order: 5,
      reflectionPrompts: [
        {
          id: 'savings-goals-timeline',
          prompt: 'What specific savings goals do you have and when do you need the money?',
          category: 'planning',
          helpText: 'Different timeframes require different strategies: short-term (savings), long-term (investments).',
          relatedResources: ['investment-timeline-guide']
        },
        {
          id: 'retirement-planning',
          prompt: 'Are you contributing to retirement accounts? Do you have employer matching you\'re not utilizing?',
          category: 'research',
          helpText: 'Employer 401k matching is free money. Contribute enough to get full match before other investments.'
        },
        {
          id: 'investment-knowledge',
          prompt: 'What is your current knowledge level about investing? What do you need to learn before investing?',
          category: 'consideration',
          helpText: 'Start with basics: diversification, risk vs return, index funds vs individual stocks.',
          relatedResources: ['investing-basics-guide']
        },
        {
          id: 'risk-vs-return',
          prompt: 'How do you balance the desire for investment growth with the need for financial security?',
          category: 'decision',
          helpText: 'Younger investors can take more risk; those near retirement need more stability.'
        },
        {
          id: 'automated-investing',
          prompt: 'How can you automate your savings and investment contributions to ensure consistency?',
          category: 'planning',
          helpText: 'Automatic transfers remove emotion and ensure you pay yourself first consistently.'
        },
        {
          id: 'investment-monitoring',
          prompt: 'How often will you review and rebalance your investment portfolio? What triggers would cause changes?',
          category: 'planning',
          helpText: 'Review quarterly, rebalance annually, or when allocations drift 5+ percentage points from targets.'
        }
      ]
    },
    {
      id: 'ongoing-optimization',
      title: 'Ongoing Budget Optimization & Review',
      description: 'Maintain and improve your financial system over time',
      order: 6,
      reflectionPrompts: [
        {
          id: 'budget-review-schedule',
          prompt: 'How often will you review and adjust your budget: monthly, quarterly, or when major life changes occur?',
          category: 'planning',
          helpText: 'Regular reviews help catch problems early and adjust for changing circumstances.'
        },
        {
          id: 'expense-optimization',
          prompt: 'What expenses can you optimize without sacrificing quality of life: subscriptions, insurance, utilities?',
          category: 'research',
          helpText: 'Review all recurring charges annually. Negotiate bills, comparison shop, and cancel unused services.',
          relatedResources: ['expense-reduction-strategies']
        },
        {
          id: 'income-growth',
          prompt: 'What opportunities exist to increase your income: raises, side hustles, skill development, career changes?',
          category: 'consideration',
          helpText: 'Growing income is often easier than cutting expenses and has unlimited potential.'
        },
        {
          id: 'financial-education',
          prompt: 'How will you continue learning about personal finance and improving your financial literacy?',
          category: 'planning',
          helpText: 'Read books, take courses, listen to podcasts, or work with financial advisors as needed.'
        },
        {
          id: 'accountability-system',
          prompt: 'What accountability systems will help you stick to your budget and financial goals?',
          category: 'consideration',
          helpText: 'Partner check-ins, financial apps, automatic systems, or professional guidance.'
        },
        {
          id: 'milestone-celebration',
          prompt: 'How will you celebrate financial milestones without derailing your progress?',
          category: 'planning',
          helpText: 'Plan modest celebrations that align with your values and budget for staying motivated.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'comprehensive-budget-template',
      title: 'Complete Budget Planning Spreadsheet Template',
      type: 'tool',
      excerpt: 'Detailed Excel/Google Sheets template with multiple budgeting methods, debt payoff calculators, and goal tracking.',
      content: 'This comprehensive spreadsheet includes multiple budget frameworks in one file: the 50/30/20 rule, zero-based budgeting, and envelope method tabs. **Income tracking** helps you document all income sources with variability notes for irregular income. **Expense categories** are pre-built but customizable, with average spending guides to help you estimate. **Debt payoff calculator** compares snowball vs avalanche methods with visual timelines and interest savings calculations. **Emergency fund tracker** shows progress toward your goal with automated calculations. **Goal setting section** helps you set SMART financial goals with deadline tracking. **Monthly review template** guides you through assessing budget performance and making adjustments. All formulas are built-in, requiring only data entry.',
      tags: ['budget-template', 'spreadsheet', 'debt-calculator', 'goal-tracking'],
      readTime: '15 min',
      difficulty: 'beginner'
    },
    {
      id: 'debt-elimination-strategy-guide',
      title: 'Complete Debt Elimination Strategy & Psychology Guide',
      type: 'guide',
      excerpt: 'Comprehensive guide to debt payoff methods, psychological strategies, and maintaining motivation throughout the process.',
      content: 'Debt elimination requires both mathematical strategy and psychological understanding. **Mathematical comparison** of debt snowball (smallest balances first) versus debt avalanche (highest interest rates first) with calculations showing time and interest differences. **Psychological factors** explain why snowball method works despite costing more: quick wins build momentum and confidence. **Hybrid approaches** combine both methods for optimal psychological and financial benefits. **Negotiation strategies** for working with creditors to reduce interest rates, waive fees, or establish payment plans. **Balance transfer and consolidation** guidance including when these strategies help versus hurt your situation. **Staying motivated** through the long payoff process with milestone celebrations and accountability systems. **Preventing new debt** while paying off existing balances through spending triggers identification and management.',
      tags: ['debt-payoff', 'financial-psychology', 'negotiation', 'motivation'],
      readTime: '20 min',
      difficulty: 'intermediate'
    },
    {
      id: 'emergency-fund-optimization-guide',
      title: 'Emergency Fund Size & Optimization Strategy Guide',
      type: 'guide',
      excerpt: 'Determine optimal emergency fund size based on your situation and learn where to keep funds for maximum benefit.',
      content: 'Emergency fund size isn\'t one-size-fits-all and depends on multiple personal factors. **Size determination factors:** job security, income variability, family dependents, health status, and major expenses like car or home maintenance. **Industry-specific considerations:** freelancers and commission workers need larger funds than salaried employees with stable companies. **Dual-income households** may need less than single-income families, but consider correlation risk if both work in same industry. **Geographic factors** like cost of living and natural disaster frequency affect fund needs. **Fund location strategies:** high-yield savings accounts, money market accounts, and short-term CDs for different portions of your fund. **Laddering approach** keeps portions of fund in different accounts for varying access speeds and yield optimization. **Fund growth strategies** to build your emergency fund faster through automation, windfalls, and gradual increases.',
      tags: ['emergency-fund', 'financial-security', 'savings-optimization', 'risk-management'],
      readTime: '18 min',
      difficulty: 'intermediate'
    },
    {
      id: 'budgeting-method-comparison-tool',
      title: 'Budgeting Methods Comparison & Selection Tool',
      type: 'tool',
      excerpt: 'Interactive tool to help you choose the best budgeting method based on your personality, lifestyle, and financial goals.',
      content: 'Different budgeting methods work better for different personalities and situations. **50/30/20 Rule** allocates 50% to needs, 30% to wants, 20% to savings and debt payment - simple but may not fit all situations. **Zero-Based Budgeting** assigns every dollar a purpose, providing maximum control but requiring more time and detail orientation. **Envelope Method** uses cash for variable expenses, providing tangible spending limits but less convenient in digital world. **Pay Yourself First** prioritizes savings and debt payment, then budgets remaining income for expenses. **Percentage-Based Budgeting** allocates fixed percentages to each category, providing structure while allowing income scaling. **Assessment tool** helps you evaluate which method fits your personality: detail-oriented vs simple, cash vs digital preference, variable vs fixed income, financial goals complexity.',
      tags: ['budgeting-methods', 'financial-personality', 'method-selection', 'budget-comparison'],
      readTime: '12 min',
      difficulty: 'beginner'
    },
    {
      id: 'financial-goal-setting-framework',
      title: 'SMART Financial Goal Setting & Achievement Framework',
      type: 'guide',
      excerpt: 'Comprehensive framework for setting, tracking, and achieving financial goals with accountability systems.',
      content: 'Financial goals need structure and strategy to become reality. **SMART goals framework** adapted for finance: Specific amounts and purposes, Measurable progress milestones, Achievable given your income and expenses, Relevant to your values and life plans, Time-bound with clear deadlines. **Goal hierarchy** helps prioritize when you can\'t fund everything: emergency fund first, high-interest debt payoff, employer 401k match, remaining debt payoff, full emergency fund, then other goals. **Breaking down large goals** into smaller milestones maintains motivation and allows course corrections. **Automation strategies** remove willpower from equation through automatic transfers and systematic investing. **Progress tracking systems** help you stay motivated and identify when adjustments are needed. **Accountability methods** including partner check-ins, public commitments, or professional guidance to maintain momentum.',
      tags: ['goal-setting', 'SMART-goals', 'financial-planning', 'accountability'],
      readTime: '16 min',
      difficulty: 'beginner'
    }
  ],
  expertTips: [
    {
      id: 'budget-tip-1',
      tip: 'Pay yourself first by automatically transferring money to savings and debt payments before you have a chance to spend it on other things.',
      author: 'Ramit Sethi, Author of "I Will Teach You To Be Rich"',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'budget-tip-2',
      tip: 'Focus on optimizing your big three expenses: housing, transportation, and food. Small changes to these have much bigger impact than cutting $5 coffees.',
      author: 'Paula Pant, Founder of Afford Anything',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'debt-tip-1',
      tip: 'Use the debt snowball method if you need psychological wins to stay motivated. The math may favor debt avalanche, but psychology often matters more than math.',
      author: 'Dave Ramsey, Financial Author and Radio Host',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'emergency-fund-tip',
      tip: 'Start with a $1,000 starter emergency fund before tackling debt. This prevents new debt when small emergencies arise during your debt payoff journey.',
      author: 'Chris Hogan, Financial Expert',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'automation-tip',
      tip: 'Automate everything you can: bill payments, savings transfers, and investments. This removes emotions and ensures consistency in your financial plan.',
      author: 'David Bach, Author of "The Automatic Millionaire"',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'budget-review-tip',
      tip: 'Review your budget monthly but don\'t obsess daily. Give yourself permission to be imperfect as you learn what works for your lifestyle.',
      author: 'Tiffany Aliche, "The Budgetnista"',
      category: 'planning',
      importance: 'medium'
    }
  ]
};

// Comprehensive business launch guidance with market research and validation focus
export const businessLaunchTemplate: GuidanceTemplate = {
  id: 'business-launch',
  title: 'Business Launch Guide',
  description: 'Launch your business with market research, business planning, and strategic execution',
  category: 'entrepreneurship',
  icon: '🚀',
  sections: [
    {
      id: 'idea-validation',
      title: 'Business Idea Validation & Market Research',
      description: 'Validate your business concept and understand your market deeply',
      order: 1,
      reflectionPrompts: [
        {
          id: 'problem-identification',
          prompt: 'What specific problem does your business solve, and how painful is this problem for potential customers?',
          category: 'research',
          helpText: 'The more painful the problem, the more customers will pay to solve it. Validate problem existence through interviews.',
          relatedResources: ['problem-validation-guide', 'customer-interview-templates']
        },
        {
          id: 'target-customer',
          prompt: 'Who is your ideal customer? Create detailed customer personas including demographics, behaviors, and pain points.',
          category: 'research',
          helpText: 'Be specific: "busy working mothers aged 35-45 with household incomes over $75k" vs "everyone".',
          relatedResources: ['customer-persona-template']
        },
        {
          id: 'market-size',
          prompt: 'How large is your addressable market? What percentage would you need to capture to be successful?',
          category: 'research',
          helpText: 'Research Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and realistic market share.'
        },
        {
          id: 'competitive-analysis',
          prompt: 'Who are your direct and indirect competitors? How will you differentiate your offering?',
          category: 'research',
          helpText: 'Include businesses solving the same problem differently. Study their pricing, marketing, and customer feedback.',
          relatedResources: ['competitive-analysis-framework']
        },
        {
          id: 'value-proposition',
          prompt: 'What unique value do you provide that competitors don\'t? Why would customers choose you over alternatives?',
          category: 'decision',
          helpText: 'Your value proposition should be clear, specific, and focused on customer benefits, not features.'
        },
        {
          id: 'mvp-concept',
          prompt: 'What is the minimum viable product (MVP) you can create to test your concept with real customers?',
          category: 'planning',
          helpText: 'Start with the smallest version that solves the core problem. Avoid feature creep in early stages.',
          relatedResources: ['mvp-development-guide']
        }
      ]
    },
    {
      id: 'business-model',
      title: 'Business Model & Revenue Strategy',
      description: 'Define how your business will operate and generate revenue',
      order: 2,
      reflectionPrompts: [
        {
          id: 'revenue-streams',
          prompt: 'How will your business make money? What are your primary and secondary revenue streams?',
          category: 'planning',
          helpText: 'Consider: one-time sales, subscriptions, licensing, advertising, commissions, or service fees.',
          relatedResources: ['revenue-model-comparison']
        },
        {
          id: 'pricing-strategy',
          prompt: 'How will you price your product or service? What pricing model makes sense for your customers and market?',
          category: 'decision',
          helpText: 'Research competitor pricing, understand customer price sensitivity, and test different price points.',
          relatedResources: ['pricing-strategy-guide']
        },
        {
          id: 'cost-structure',
          prompt: 'What are your fixed and variable costs? How do costs change as you scale?',
          category: 'planning',
          helpText: 'Include: materials, labor, rent, utilities, marketing, technology, legal, and professional services.'
        },
        {
          id: 'unit-economics',
          prompt: 'What is your customer acquisition cost (CAC) and customer lifetime value (CLV)? Are the unit economics sustainable?',
          category: 'research',
          helpText: 'CLV should be at least 3x higher than CAC for sustainable business. Calculate both conservatively.'
        },
        {
          id: 'scalability',
          prompt: 'How will your business scale? What needs to change as you grow from 10 to 100 to 1000 customers?',
          category: 'consideration',
          helpText: 'Consider operational complexity, staffing needs, technology requirements, and capital needs for growth.'
        },
        {
          id: 'business-model-canvas',
          prompt: 'Complete a business model canvas covering key partners, activities, resources, value propositions, customer relationships, channels, customer segments, cost structure, and revenue streams.',
          category: 'planning',
          helpText: 'The business model canvas provides a comprehensive one-page view of your business model.',
          relatedResources: ['business-model-canvas-template']
        }
      ]
    },
    {
      id: 'legal-structure',
      title: 'Legal Structure & Compliance',
      description: 'Establish proper legal foundation for your business',
      order: 3,
      reflectionPrompts: [
        {
          id: 'business-structure',
          prompt: 'What legal structure is best for your business: sole proprietorship, LLC, corporation, or partnership?',
          category: 'decision',
          helpText: 'Consider liability protection, tax implications, ownership structure, and future investment plans.',
          relatedResources: ['business-structure-comparison']
        },
        {
          id: 'business-name',
          prompt: 'What will you name your business? Is the name available for trademark and domain registration?',
          category: 'planning',
          helpText: 'Check name availability with state registrar, USPTO trademark database, and domain registrars.'
        },
        {
          id: 'licenses-permits',
          prompt: 'What licenses and permits do you need for your business type and location?',
          category: 'research',
          helpText: 'Requirements vary by industry and location. Check federal, state, and local requirements.',
          relatedResources: ['business-license-checklist']
        },
        {
          id: 'intellectual-property',
          prompt: 'What intellectual property do you need to protect: trademarks, copyrights, patents, or trade secrets?',
          category: 'consideration',
          helpText: 'File trademark applications early and document your IP development process for protection.'
        },
        {
          id: 'insurance-needs',
          prompt: 'What insurance coverage does your business need: general liability, professional liability, product liability, or cyber liability?',
          category: 'planning',
          helpText: 'Insurance needs depend on business type, location, and risk exposure. Consult with business insurance agent.'
        },
        {
          id: 'contracts-agreements',
          prompt: 'What standard contracts and agreements do you need: customer terms, vendor agreements, employment contracts?',
          category: 'planning',
          helpText: 'Have lawyer review key contract templates. Good contracts prevent disputes and protect interests.',
          relatedResources: ['essential-business-contracts']
        }
      ]
    },
    {
      id: 'financial-planning',
      title: 'Financial Planning & Funding',
      description: 'Create financial projections and secure necessary funding',
      order: 4,
      reflectionPrompts: [
        {
          id: 'startup-costs',
          prompt: 'What are your one-time startup costs and ongoing monthly expenses for the first year?',
          category: 'planning',
          helpText: 'Include: equipment, inventory, professional services, marketing, rent, utilities, insurance, licenses.',
          relatedResources: ['startup-cost-calculator']
        },
        {
          id: 'financial-projections',
          prompt: 'Create financial projections for your first three years: revenue, expenses, cash flow, and profitability.',
          category: 'planning',
          helpText: 'Be conservative with revenue estimates and realistic with expenses. Model different growth scenarios.'
        },
        {
          id: 'funding-needs',
          prompt: 'How much capital do you need to launch and sustain the business until profitability?',
          category: 'planning',
          helpText: 'Include buffer for unexpected expenses and longer-than-expected time to profitability.'
        },
        {
          id: 'funding-sources',
          prompt: 'How will you fund your business: personal savings, loans, investors, crowdfunding, or grants?',
          category: 'decision',
          helpText: 'Each funding source has different requirements, timelines, and implications for control and equity.',
          relatedResources: ['funding-options-guide']
        },
        {
          id: 'financial-systems',
          prompt: 'What accounting and financial management systems will you use to track performance?',
          category: 'planning',
          helpText: 'Set up proper bookkeeping, separate business accounts, and regular financial reporting from day one.'
        },
        {
          id: 'break-even-analysis',
          prompt: 'How many customers or sales do you need to break even? What happens if growth is slower than projected?',
          category: 'consideration',
          helpText: 'Understand your break-even point and have contingency plans for different growth scenarios.'
        }
      ]
    },
    {
      id: 'marketing-launch',
      title: 'Marketing Strategy & Launch Planning',
      description: 'Develop marketing strategy and plan your business launch',
      order: 5,
      reflectionPrompts: [
        {
          id: 'brand-identity',
          prompt: 'What is your brand identity: personality, values, visual style, and messaging strategy?',
          category: 'decision',
          helpText: 'Your brand should resonate with your target customers and differentiate you from competitors.',
          relatedResources: ['brand-identity-guide']
        },
        {
          id: 'marketing-channels',
          prompt: 'Which marketing channels will you use to reach customers: social media, content marketing, paid advertising, partnerships?',
          category: 'planning',
          helpText: 'Focus on channels where your target customers spend time. Start with 2-3 channels and do them well.',
          relatedResources: ['marketing-channel-selection']
        },
        {
          id: 'content-strategy',
          prompt: 'What content will you create to attract and educate potential customers?',
          category: 'planning',
          helpText: 'Create valuable content that addresses customer problems and positions you as a trusted expert.'
        },
        {
          id: 'launch-strategy',
          prompt: 'How will you launch your business: soft launch to test systems, or big promotional launch?',
          category: 'decision',
          helpText: 'Soft launches allow you to work out operational issues before wide promotion and customer influx.'
        },
        {
          id: 'customer-acquisition',
          prompt: 'What specific strategies will you use to acquire your first 10, 100, and 1000 customers?',
          category: 'planning',
          helpText: 'Early customer acquisition often requires hands-on, personal approaches that don\'t scale long-term.'
        },
        {
          id: 'launch-timeline',
          prompt: 'What is your launch timeline with key milestones and deadlines?',
          category: 'planning',
          helpText: 'Create realistic timeline with buffer time. Coordinate legal, operational, and marketing preparation.',
          relatedResources: ['launch-timeline-template']
        }
      ]
    },
    {
      id: 'operations-growth',
      title: 'Operations Setup & Growth Planning',
      description: 'Establish operations and plan for sustainable growth',
      order: 6,
      reflectionPrompts: [
        {
          id: 'operational-processes',
          prompt: 'What are your core business processes from customer inquiry to delivery and support?',
          category: 'planning',
          helpText: 'Document processes early so you can optimize them and train others as you grow.'
        },
        {
          id: 'technology-needs',
          prompt: 'What technology systems do you need: website, CRM, accounting software, communication tools?',
          category: 'planning',
          helpText: 'Choose scalable solutions that can grow with your business. Avoid over-investing in complex systems initially.',
          relatedResources: ['business-technology-stack']
        },
        {
          id: 'quality-control',
          prompt: 'How will you ensure consistent quality in your products or services as you scale?',
          category: 'consideration',
          helpText: 'Establish quality standards, measurement systems, and improvement processes from the beginning.'
        },
        {
          id: 'team-building',
          prompt: 'What roles will you need to hire first? How will you find and evaluate potential team members?',
          category: 'planning',
          helpText: 'Hire for skills you lack and tasks that free you to focus on highest-value activities.'
        },
        {
          id: 'customer-service',
          prompt: 'How will you handle customer service, support, and relationship management?',
          category: 'planning',
          helpText: 'Excellent customer service differentiates small businesses and drives word-of-mouth marketing.'
        },
        {
          id: 'growth-metrics',
          prompt: 'What key metrics will you track to measure business health and growth?',
          category: 'planning',
          helpText: 'Focus on metrics that drive decisions: revenue, customer acquisition, retention, and profitability.',
          relatedResources: ['business-metrics-dashboard']
        }
      ]
    }
  ],
  resources: [
    {
      id: 'comprehensive-business-plan-template',
      title: 'Complete Business Plan Template with Financial Models',
      type: 'tool',
      excerpt: 'Comprehensive business plan template with integrated financial projections, market analysis, and pitch deck components.',
      content: 'This complete business plan template guides you through every section needed for launch and investment. **Executive Summary** template with compelling overview and key metrics. **Market Analysis** framework with competitor research, customer personas, and market sizing tools. **Business Model** section with revenue model comparison and unit economics calculators. **Marketing Strategy** templates with channel selection, customer acquisition costs, and campaign planning. **Operations Plan** covering processes, technology needs, and quality control systems. **Management Team** section highlighting key personnel and organizational structure. **Financial Projections** with 3-year models, cash flow analysis, and scenario planning. **Risk Analysis** identifying potential challenges and mitigation strategies. All sections include examples, questions to consider, and links to additional resources.',
      tags: ['business-plan', 'template', 'financial-modeling', 'market-analysis'],
      readTime: '45 min',
      difficulty: 'intermediate'
    },
    {
      id: 'customer-validation-interview-guide',
      title: 'Customer Validation & Problem Interview Framework',
      type: 'guide',
      excerpt: 'Systematic approach to validating business ideas through customer interviews and market research.',
      content: 'Customer validation prevents building products nobody wants through systematic discovery. **Problem Interview Structure:** Start with demographic questions, explore current solutions, uncover pain points, and understand willingness to pay. **Solution Interview Framework:** Present your concept, gather feedback, test pricing sensitivity, and measure genuine interest vs politeness. **Interview Best Practices:** Ask open-ended questions, listen more than you talk, and avoid leading questions that bias responses. **Sample Size Guidelines:** Interview 20-30 potential customers minimum, with representation across different customer segments. **Data Analysis Methods:** Look for patterns in responses, quantify pain levels, and identify common objections or concerns. **Pivot Signals:** When to modify your concept based on feedback versus when to persist through normal resistance. **Documentation Templates:** Structured forms for capturing interview data and synthesizing insights across multiple conversations.',
      tags: ['customer-validation', 'market-research', 'interviews', 'problem-solution-fit'],
      readTime: '25 min',
      difficulty: 'beginner'
    },
    {
      id: 'funding-options-comprehensive-guide',
      title: 'Complete Small Business Funding Options & Application Guide',
      type: 'guide',
      excerpt: 'Detailed overview of funding sources with application requirements, pros/cons, and success strategies.',
      content: 'Different funding sources suit different business types and growth stages. **Bootstrapping Strategies:** Self-funding approaches, revenue reinvestment, and minimizing initial capital needs. **Small Business Loans:** SBA loans, bank term loans, and equipment financing with qualification requirements and application tips. **Angel Investors:** Finding angels, preparing pitches, and understanding equity implications and investor expectations. **Venture Capital:** When VC makes sense, preparing for due diligence, and managing investor relationships. **Crowdfunding Platforms:** Kickstarter, Indiegogo, and equity crowdfunding with campaign planning and execution strategies. **Grants and Competitions:** Government grants, industry competitions, and accelerator programs with application strategies. **Alternative Financing:** Revenue-based financing, merchant cash advances, and peer-to-peer lending options. Each section includes qualification criteria, application processes, typical terms, and strategic considerations for business control and growth.',
      tags: ['business-funding', 'startup-capital', 'investors', 'loans', 'grants'],
      readTime: '35 min',
      difficulty: 'intermediate'
    },
    {
      id: 'business-launch-timeline-template',
      title: '90-Day Business Launch Timeline & Checklist',
      type: 'checklist',
      excerpt: 'Comprehensive 90-day launch plan with weekly milestones, task priorities, and coordination strategies.',
      content: 'A systematic 90-day launch timeline prevents overlooking critical tasks and ensures coordinated execution. **Days 1-30 (Foundation Phase):** Complete legal structure formation, business registration, EIN application, business bank account opening, and initial branding decisions. **Days 31-60 (Development Phase):** Finalize product/service development, establish vendor relationships, create operational processes, develop marketing materials, and begin content creation. **Days 61-90 (Launch Phase):** Implement marketing campaigns, conduct final testing, train support staff, coordinate PR efforts, and execute soft launch with select customers. **Weekly Review Process:** Assess progress, identify bottlenecks, adjust timelines, and maintain motivation through milestone celebrations. **Contingency Planning:** Buffer time for unexpected delays, alternative approaches for critical path items, and escalation procedures for major obstacles. **Success Metrics:** Define launch success criteria and measurement systems to evaluate performance against objectives.',
      tags: ['launch-planning', 'timeline', 'project-management', 'startup-checklist'],
      readTime: '20 min',
      difficulty: 'beginner'
    },
    {
      id: 'competitive-analysis-framework',
      title: 'Comprehensive Competitive Analysis & Positioning Framework',
      type: 'tool',
      excerpt: 'Systematic framework for analyzing competitors and developing differentiated positioning strategies.',
      content: 'Understanding your competitive landscape is crucial for strategic positioning and market success. **Competitor Identification:** Map direct competitors (same solution, same customers), indirect competitors (different solution, same problem), and substitute solutions (completely different approaches). **Analysis Framework:** Evaluate pricing strategies, product/service features, marketing messages, customer reviews, strengths/weaknesses, and market positioning. **SWOT Analysis:** Assess each competitor\'s strengths, weaknesses, opportunities, and threats compared to your business concept. **Positioning Map:** Visual representation of competitive landscape showing price vs quality, features vs simplicity, or other relevant dimensions. **Differentiation Strategy:** Identify white space opportunities where you can position uniquely and develop compelling competitive advantages. **Monitoring System:** Establish ongoing competitive intelligence gathering through alerts, social media monitoring, and industry publications. Regular competitive reviews help you adapt strategy and identify new threats or opportunities.',
      tags: ['competitive-analysis', 'market-positioning', 'differentiation', 'strategic-planning'],
      readTime: '30 min',
      difficulty: 'intermediate'
    }
  ],
  expertTips: [
    {
      id: 'validation-tip-1',
      tip: 'Fall in love with the problem, not your solution. Be willing to pivot your approach based on customer feedback while staying focused on solving a real problem.',
      author: 'Eric Ries, Author of "The Lean Startup"',
      category: 'research',
      importance: 'high'
    },
    {
      id: 'funding-tip-1',
      tip: 'Bootstrap as long as possible before seeking external funding. Every dollar you raise costs you equity and control over your business decisions.',
      author: 'Jason Fried, Founder of Basecamp',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'launch-tip-1',
      tip: 'Launch before you feel ready. Your first version will never be perfect, and customer feedback is more valuable than internal perfection.',
      author: 'Reid Hoffman, Founder of LinkedIn',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'customer-tip-1',
      tip: 'Focus on acquiring 100 customers who absolutely love your product rather than 1,000 customers who kind of like it. Passionate customers drive growth.',
      author: 'Paul Graham, Co-founder of Y Combinator',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'metrics-tip-1',
      tip: 'Measure what matters for your business stage. Early stage: customer acquisition and retention. Growth stage: unit economics and scalability.',
      author: 'Dave McClure, Founder of 500 Startups',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'team-tip-1',
      tip: 'Hire slowly and fire quickly. Every early employee shapes your company culture and capabilities disproportionately.',
      author: 'Ben Horowitz, Co-founder of Andreessen Horowitz',
      category: 'planning',
      importance: 'medium'
    }
  ]
};

// Comprehensive college planning and application guidance
export const collegePlanningTemplate: GuidanceTemplate = {
  id: 'college-planning',
  title: 'College Planning Guide',
  description: 'Navigate college applications, track deadlines, and plan your academic future strategically',
  category: 'education',
  icon: '🎓',
  sections: [
    {
      id: 'academic-preparation',
      title: 'Academic Preparation & Course Planning',
      description: 'Build a strong academic foundation for college admissions',
      order: 1,
      reflectionPrompts: [
        {
          id: 'current-academic-standing',
          prompt: 'What is your current GPA and class rank? How do these compare to your target colleges\' admission statistics?',
          category: 'research',
          helpText: 'Understand where you stand academically and what improvement is needed for target schools.',
          relatedResources: ['gpa-improvement-strategies', 'college-admission-statistics']
        },
        {
          id: 'course-rigor',
          prompt: 'What advanced courses (AP, IB, dual enrollment) are available at your school, and which align with your intended major?',
          category: 'planning',
          helpText: 'Colleges value course rigor. Take challenging courses in subjects related to your intended field of study.',
          relatedResources: ['course-selection-guide']
        },
        {
          id: 'standardized-test-plan',
          prompt: 'When will you take the SAT/ACT? Do you need subject tests? What\'s your target score range?',
          category: 'planning',
          helpText: 'Plan test dates allowing time for retakes. Research target score ranges for your preferred colleges.'
        },
        {
          id: 'academic-interests',
          prompt: 'What subjects genuinely interest you? How do your interests align with potential college majors?',
          category: 'consideration',
          helpText: 'Authentic interest often leads to better performance and more compelling applications.'
        },
        {
          id: 'academic-weaknesses',
          prompt: 'What are your academic weak spots, and how will you address them before applications?',
          category: 'planning',
          helpText: 'Address weaknesses through tutoring, extra practice, or strategic course selection.'
        },
        {
          id: 'teacher-relationships',
          prompt: 'Which teachers know you well and could write strong recommendation letters?',
          category: 'consideration',
          helpText: 'Build relationships with teachers in core subjects who can speak to your character and abilities.',
          relatedResources: ['recommendation-letter-guide']
        }
      ]
    },
    {
      id: 'college-research',
      title: 'College Research & List Development',
      description: 'Research and build a balanced list of target colleges',
      order: 2,
      reflectionPrompts: [
        {
          id: 'college-priorities',
          prompt: 'What factors are most important to you: academic reputation, location, size, cost, campus culture, specific programs?',
          category: 'decision',
          helpText: 'Prioritize factors to guide your college search and avoid being overwhelmed by options.',
          relatedResources: ['college-selection-criteria']
        },
        {
          id: 'major-exploration',
          prompt: 'What majors or career paths interest you? Do you need schools with specific programs or flexibility to explore?',
          category: 'consideration',
          helpText: 'Research program strength, requirements, and career outcomes for fields of interest.'
        },
        {
          id: 'geographic-preferences',
          prompt: 'Do you prefer to stay close to home or explore new regions? How does distance affect costs and logistics?',
          category: 'consideration',
          helpText: 'Consider travel costs, internship opportunities, and family proximity in location decisions.'
        },
        {
          id: 'campus-size-culture',
          prompt: 'Do you thrive in large universities with many options or smaller colleges with close-knit communities?',
          category: 'consideration',
          helpText: 'Visit different types of schools if possible to understand your preferences.'
        },
        {
          id: 'college-list-strategy',
          prompt: 'How will you balance reach, match, and safety schools in your application list?',
          category: 'planning',
          helpText: 'Apply to 8-12 schools: 2-3 reaches, 4-6 matches, 2-3 safeties that you\'d be happy attending.',
          relatedResources: ['college-list-strategy-guide']
        },
        {
          id: 'school-research-depth',
          prompt: 'How will you research each school beyond rankings: visiting, talking to students, attending information sessions?',
          category: 'research',
          helpText: 'Demonstrate genuine interest through campus visits, interviews, and connecting with current students.'
        }
      ]
    },
    {
      id: 'financial-planning',
      title: 'College Financial Planning & Aid',
      description: 'Understand college costs and financial aid options',
      order: 3,
      reflectionPrompts: [
        {
          id: 'college-budget',
          prompt: 'What can your family realistically afford to spend on college annually?',
          category: 'planning',
          helpText: 'Have honest family discussions about budget constraints and expectations for student contribution.',
          relatedResources: ['college-cost-calculator', 'family-contribution-guide']
        },
        {
          id: 'financial-aid-understanding',
          prompt: 'Do you understand the difference between grants, scholarships, work-study, and loans?',
          category: 'research',
          helpText: 'Learn financial aid terminology and how different aid types affect your total cost and debt.',
          relatedResources: ['financial-aid-types-guide']
        },
        {
          id: 'scholarship-strategy',
          prompt: 'What scholarships might you qualify for: merit-based, need-based, local, or major-specific?',
          category: 'research',
          helpText: 'Start scholarship research early. Many have deadlines before college application deadlines.'
        },
        {
          id: 'fafsa-preparation',
          prompt: 'When will you complete the FAFSA? What financial documents will you need?',
          category: 'planning',
          helpText: 'FAFSA opens October 1st. Complete it as early as possible for best aid consideration.'
        },
        {
          id: 'student-loan-understanding',
          prompt: 'Do you understand how student loans work and the implications of borrowing for your future?',
          category: 'consideration',
          helpText: 'Understand interest rates, repayment options, and how loan debt affects post-graduation decisions.'
        },
        {
          id: 'value-assessment',
          prompt: 'How will you evaluate whether a college\'s cost is worth the potential return on investment?',
          category: 'decision',
          helpText: 'Consider graduation rates, job placement statistics, and alumni earning potential for your major.',
          relatedResources: ['college-roi-analysis']
        }
      ]
    },
    {
      id: 'application-strategy',
      title: 'Application Strategy & Essays',
      description: 'Develop compelling applications that showcase your unique story',
      order: 4,
      reflectionPrompts: [
        {
          id: 'personal-story',
          prompt: 'What is your unique story or perspective that differentiates you from other applicants?',
          category: 'consideration',
          helpText: 'Identify experiences, challenges, or interests that make you memorable and authentic.',
          relatedResources: ['personal-statement-brainstorming']
        },
        {
          id: 'essay-topics',
          prompt: 'What experiences or insights could make compelling essay topics that reveal your character?',
          category: 'planning',
          helpText: 'Choose topics that show growth, resilience, leadership, or unique perspective rather than achievements.',
          relatedResources: ['essay-topic-selection-guide']
        },
        {
          id: 'extracurricular-narrative',
          prompt: 'How do your extracurricular activities tell a coherent story about your interests and commitments?',
          category: 'consideration',
          helpText: 'Quality over quantity. Deep involvement in fewer activities is better than superficial participation in many.'
        },
        {
          id: 'application-timeline',
          prompt: 'What is your timeline for completing applications, essays, and gathering recommendations?',
          category: 'planning',
          helpText: 'Start early and work backward from deadlines. Allow extra time for essay revisions and unexpected issues.',
          relatedResources: ['application-timeline-template']
        },
        {
          id: 'essay-feedback-process',
          prompt: 'Who will review your essays and provide constructive feedback?',
          category: 'planning',
          helpText: 'Get feedback from teachers, counselors, and trusted adults, but ensure your voice remains authentic.'
        },
        {
          id: 'application-differentiation',
          prompt: 'How will you tailor each application to show genuine interest and fit with each specific school?',
          category: 'planning',
          helpText: 'Research each school\'s values, programs, and culture to customize your "Why this college?" responses.'
        }
      ]
    },
    {
      id: 'extracurricular-development',
      title: 'Extracurricular Activities & Leadership',
      description: 'Build meaningful extracurricular involvement and leadership experience',
      order: 5,
      reflectionPrompts: [
        {
          id: 'current-activities',
          prompt: 'What extracurricular activities are you currently involved in, and how deeply are you committed?',
          category: 'research',
          helpText: 'Evaluate your current involvement level and consider where you can deepen your impact.'
        },
        {
          id: 'leadership-opportunities',
          prompt: 'Where can you take on leadership roles or create new initiatives?',
          category: 'planning',
          helpText: 'Leadership doesn\'t require titles. Consider starting projects, mentoring others, or solving problems.'
        },
        {
          id: 'community-service',
          prompt: 'What causes do you care about, and how can you make a meaningful contribution?',
          category: 'consideration',
          helpText: 'Choose service opportunities aligned with your values for more authentic and sustained involvement.'
        },
        {
          id: 'summer-planning',
          prompt: 'How will you use summer breaks productively: internships, programs, jobs, or intensive projects?',
          category: 'planning',
          helpText: 'Summers offer opportunities for deeper exploration of interests and building impressive experiences.',
          relatedResources: ['summer-program-guide']
        },
        {
          id: 'skill-development',
          prompt: 'What skills or talents do you want to develop further, and how will you pursue them?',
          category: 'planning',
          helpText: 'Developing expertise in an area shows dedication and can become a distinguishing factor.'
        },
        {
          id: 'impact-measurement',
          prompt: 'How do you measure the impact of your extracurricular involvement?',
          category: 'consideration',
          helpText: 'Quantify your contributions where possible and reflect on personal growth and learning.'
        }
      ]
    },
    {
      id: 'decision-preparation',
      title: 'Decision Making & Transition Planning',
      description: 'Prepare for college decisions and transition successfully',
      order: 6,
      reflectionPrompts: [
        {
          id: 'decision-criteria',
          prompt: 'What criteria will you use to choose between college acceptances?',
          category: 'decision',
          helpText: 'Establish decision criteria before receiving acceptances to avoid emotional decision-making.',
          relatedResources: ['college-decision-matrix']
        },
        {
          id: 'admitted-student-visits',
          prompt: 'How will you evaluate colleges after acceptance: overnight visits, sitting in on classes, talking to current students?',
          category: 'planning',
          helpText: 'Use accepted student days and opportunities to get realistic impressions of campus life.'
        },
        {
          id: 'gap-year-consideration',
          prompt: 'Have you considered taking a gap year? What would make a gap year valuable for your goals?',
          category: 'consideration',
          helpText: 'Gap years can be valuable for maturity, experience, and clarity, but need structured plans.'
        },
        {
          id: 'transition-preparation',
          prompt: 'How will you prepare for the transition to college independence: life skills, academic skills, emotional preparation?',
          category: 'planning',
          helpText: 'Practice independence gradually: managing money, doing laundry, self-advocacy, time management.',
          relatedResources: ['college-transition-checklist']
        },
        {
          id: 'support-systems',
          prompt: 'What support systems will you need in college, and how will you build them?',
          category: 'consideration',
          helpText: 'Consider academic support, social connections, mental health resources, and family communication.'
        },
        {
          id: 'goal-setting',
          prompt: 'What goals do you have for your college experience beyond just getting a degree?',
          category: 'planning',
          helpText: 'Consider academic goals, personal growth, relationships, experiences, and career preparation.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'college-application-timeline-template',
      title: 'Complete College Application Timeline & Checklist',
      type: 'checklist',
      excerpt: 'Comprehensive 4-year timeline with grade-by-grade tasks, deadlines, and preparation strategies.',
      content: 'College preparation should begin freshman year for best results. **Freshman Year:** Focus on strong grades, explore interests through electives and clubs, build relationships with teachers, and begin thinking about course planning. **Sophomore Year:** Continue grade improvement, take PSAT for practice, increase extracurricular involvement, and start preliminary college research. **Junior Year:** Take challenging courses, prepare for and take SAT/ACT, meet with guidance counselor, begin serious college research, and request recommendation letters. **Senior Year:** Complete applications, write essays, apply for financial aid, make final college decision, and prepare for transition. **Monthly task breakdown** provides specific actions for each time period, **deadline tracking** prevents missing important dates, and **priority levels** help focus on most important tasks when time is limited.',
      tags: ['college-timeline', 'application-checklist', 'deadline-tracking', 'grade-planning'],
      readTime: '25 min',
      difficulty: 'beginner'
    },
    {
      id: 'college-essay-writing-guide',
      title: 'College Essay Writing & Personal Statement Guide',
      type: 'guide',
      excerpt: 'Comprehensive guide to writing compelling college essays with topic selection, structure, and revision strategies.',
      content: 'Strong college essays reveal character and differentiate applicants beyond grades and test scores. **Topic Selection:** Choose experiences that show growth, resilience, unique perspective, or passion rather than listing achievements. Avoid cliché topics unless you have a unique angle. **Essay Structure:** Use narrative techniques with engaging openings, specific details, and reflective conclusions that connect to your character or goals. **Common Application Prompts:** Detailed analysis of each prompt with successful example approaches and brainstorming techniques. **Supplemental Essays:** Strategies for "Why this college?" essays, major-specific prompts, and diversity statements. **Revision Process:** Multiple draft iterations focusing first on content and story, then structure and flow, finally grammar and word choice. **Voice and Authenticity:** Maintain your authentic voice while meeting admissions officer expectations for maturity and insight.',
      tags: ['college-essays', 'personal-statement', 'application-writing', 'storytelling'],
      readTime: '35 min',
      difficulty: 'intermediate'
    },
    {
      id: 'financial-aid-comprehensive-guide',
      title: 'Complete College Financial Aid & Scholarship Guide',
      type: 'guide',
      excerpt: 'Detailed guide to financial aid types, application processes, and strategies for minimizing college costs.',
      content: 'Understanding financial aid helps families make informed college decisions and minimize debt. **FAFSA Completion:** Step-by-step guidance for completing the Free Application for Federal Student Aid, including required documents and common mistakes to avoid. **Aid Types Explained:** Grants and scholarships (free money), work-study programs (earn while learning), and loans (borrowed money with repayment obligations). **Merit vs Need-Based Aid:** Understand qualification criteria and application strategies for different aid types. **Scholarship Search Strategy:** Systematic approach to finding scholarships through school counselors, online databases, local organizations, and major-specific opportunities. **Financial Aid Timeline:** Critical deadlines for FAFSA, CSS Profile, and individual college aid applications. **Negotiation Strategies:** How to appeal aid decisions and leverage competing offers ethically. **Cost Comparison Tools:** Methods for comparing total cost of attendance across different schools and aid packages.',
      tags: ['financial-aid', 'scholarships', 'FAFSA', 'college-costs', 'student-loans'],
      readTime: '40 min',
      difficulty: 'intermediate'
    },
    {
      id: 'college-selection-criteria-tool',
      title: 'College Selection Criteria & Decision Matrix',
      type: 'tool',
      excerpt: 'Interactive tool to help prioritize college selection factors and compare schools objectively.',
      content: 'Choosing colleges requires balancing multiple factors that matter differently to each student. **Selection Criteria:** Academic reputation and program strength, location and distance from home, campus size and culture, cost and financial aid, career services and alumni networks, research opportunities, diversity and inclusion, athletics and recreation, housing and dining options. **Weighting System:** Assign importance levels to different factors based on your priorities and goals. **School Comparison Matrix:** Evaluate each college against your criteria with scoring system for objective comparison. **Financial Comparison:** Tools for comparing total cost of attendance, debt projection, and return on investment analysis. **Fit Assessment:** Evaluate how well each school matches your learning style, social preferences, and career goals. **Decision Framework:** Structured approach to making final college choice that balances emotional and practical considerations.',
      tags: ['college-selection', 'decision-matrix', 'school-comparison', 'college-fit'],
      readTime: '20 min',
      difficulty: 'beginner'
    },
    {
      id: 'standardized-test-prep-strategy',
      title: 'SAT/ACT Preparation Strategy & Score Improvement Guide',
      type: 'guide',
      excerpt: 'Strategic approach to standardized test preparation with study plans, resource recommendations, and test-taking strategies.',
      content: 'Standardized test scores remain important for college admissions and merit scholarships. **Test Selection:** Choose between SAT and ACT based on your strengths, with diagnostic tests to determine better fit. **Score Goal Setting:** Research target score ranges for your college list and set realistic improvement goals based on starting scores. **Study Plan Development:** Create structured study schedule balancing content review, practice tests, and skill development based on time available. **Resource Recommendations:** Evaluate prep books, online courses, tutoring, and free resources to find best fit for learning style and budget. **Content Strategy:** Subject-specific strategies for math, reading, writing, and science sections with common mistake patterns and improvement techniques. **Test Day Strategy:** Timing management, question prioritization, educated guessing strategies, and anxiety management techniques. **Retake Decisions:** When to retake tests based on score improvement potential and college application timelines.',
      tags: ['SAT-prep', 'ACT-prep', 'test-strategy', 'score-improvement', 'study-planning'],
      readTime: '30 min',
      difficulty: 'intermediate'
    }
  ],
  expertTips: [
    {
      id: 'academic-tip-1',
      tip: 'Focus on depth over breadth in activities. Colleges prefer students who show sustained commitment and leadership in fewer areas rather than surface-level involvement in many.',
      author: 'Dr. Michele Hernandez, Former Dartmouth Admissions Officer',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'essay-tip-1',
      tip: 'Show, don\'t tell in your essays. Use specific stories and examples to demonstrate your qualities rather than just stating them.',
      author: 'Harry Bauld, Former Brown University Admissions Officer',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'financial-tip-1',
      tip: 'Apply to schools where you\'re in the top 25% of applicants for the best merit scholarship opportunities. Don\'t just focus on the most prestigious schools.',
      author: 'Kalman Chany, Author of "Paying for College"',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'research-tip-1',
      tip: 'Visit colleges when classes are in session, not just during special events. Sit in on classes and talk to current students for authentic impressions.',
      author: 'Loren Pope, Author of "Colleges That Change Lives"',
      category: 'research',
      importance: 'high'
    },
    {
      id: 'timeline-tip-1',
      tip: 'Start your college search sophomore year, not senior year. Early preparation gives you more options and less stress.',
      author: 'Rachel Toor, Former Duke University Admissions Officer',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'application-tip-1',
      tip: 'Demonstrate genuine interest in schools through campus visits, information sessions, and connecting with admissions representatives. Interest matters for admission decisions.',
      author: 'Jeff Durso-Finley, Former University of Pennsylvania Admissions Officer',
      category: 'planning',
      importance: 'medium'
    }
  ]
};

export const templates: GuidanceTemplate[] = [
  weddingTemplate,
  homeBuyingTemplate,
  jobSearchTemplate,
  babyPlanningTemplate,
  fitnessAthleticTrainingTemplate,
  travelPlanningAdventureTemplate,
  freelanceGigEconomyTemplate,
  parentingChildDevelopmentTemplate,
  productivitySystemTemplate,
  movingRelocationTemplate,
  eventPlanningTemplate,
  travelPlanningTemplate,
  mealPlanningTemplate,
  academicResearchTemplate,
  freelanceBusinessTemplate,
  personalFinanceInvestmentTemplate,
  digitalMarketingSEOTemplate,
  remoteWorkProductivityTemplate,
  careerChangeTransitionTemplate,
  smallBusinessExitStrategyTemplate,
  nonProfitLaunchTemplate,
  personalHealthWellnessTemplate,
  sustainableLivingTemplate,
  creativeProjectTemplate,
  digitalMarketingBrandTemplate,
  remoteWorkDigitalNomadTemplate,
  investmentWealthBuildingTemplate,
  ecommerceOnlineBusinessTemplate,
  personalDevelopmentLifeCoachingTemplate,
  retirementPlanningLifeTransitionTemplate,
  homeRenovationInteriorDesignTemplate,
  podcastContentCreationTemplate,
  languageLearningCulturalImmersionTemplate,
  budgetPlanningTemplate,
  businessLaunchTemplate,
  collegePlanningTemplate
];

// Comprehensive fitness journey guidance focused on personal transformation
export const fitnessJourneyTemplate: GuidanceTemplate = {
  id: 'fitness-journey',
  title: 'Fitness Journey & Personal Transformation',
  description: 'Transform your health and fitness with sustainable lifestyle changes and goal achievement strategies',
  category: 'health-wellness',
  icon: '🎯',
  sections: [
    {
      id: 'fitness-transformation-foundation',
      title: 'Transformation Foundation & Goal Setting',
      description: 'Build a solid foundation for your fitness journey with clear goals and realistic expectations',
      order: 1,
      reflectionPrompts: [
        {
          id: 'transformation-motivation',
          prompt: "What's driving your fitness transformation? What would achieving your goals mean to your life and confidence?",
          category: 'consideration',
          helpText: 'Strong intrinsic motivation is crucial for long-term success. Connect your fitness goals to deeper values like health, energy, confidence, or setting a good example.',
          relatedResources: ['motivation-psychology-guide', 'goal-setting-framework']
        },
        {
          id: 'current-fitness-baseline',
          prompt: 'What is your current fitness level? How would you honestly assess your strength, endurance, flexibility, and overall health?',
          category: 'research',
          helpText: 'Establish honest baselines through simple tests: walk/run times, push-ups, flexibility tests, energy levels throughout the day, sleep quality.'
        },
        {
          id: 'fitness-obstacles-history',
          prompt: 'What obstacles have prevented you from maintaining fitness routines in the past? What patterns do you notice?',
          category: 'research',
          helpText: 'Identify recurring challenges: time constraints, motivation drops, injuries, all-or-nothing thinking, unrealistic expectations, lack of support.'
        },
        {
          id: 'lifestyle-integration-assessment',
          prompt: 'How will fitness fit into your current lifestyle? What time, space, and energy constraints need consideration?',
          category: 'planning',
          helpText: 'Consider work schedule, family responsibilities, commute time, sleep schedule, stress levels, and other commitments that affect consistency.'
        },
        {
          id: 'transformation-timeline-goals',
          prompt: 'What specific, measurable fitness goals do you want to achieve in 3, 6, and 12 months?',
          category: 'planning',
          helpText: 'Set SMART goals: "lose 20 pounds," "run 5K without stopping," "do 10 push-ups," "exercise 4x/week consistently for 3 months."'
        },
        {
          id: 'support-system-building',
          prompt: 'Who will support your fitness journey? How will you build accountability and motivation systems?',
          category: 'planning',
          helpText: 'Identify workout partners, supportive family/friends, online communities, trainers, or apps that provide encouragement and accountability.'
        }
      ]
    },
    {
      id: 'personalized-fitness-plan',
      title: 'Personalized Fitness Plan Design',
      description: 'Create a sustainable exercise routine that matches your preferences, schedule, and fitness level',
      order: 2,
      reflectionPrompts: [
        {
          id: 'exercise-preferences-exploration',
          prompt: 'What types of physical activities do you naturally enjoy or feel curious about trying?',
          category: 'consideration',
          helpText: 'Consider dancing, hiking, swimming, weightlifting, yoga, sports, martial arts, walking, cycling. Enjoyment increases adherence.',
          relatedResources: ['exercise-type-guide', 'beginner-workout-plans']
        },
        {
          id: 'schedule-workout-planning',
          prompt: 'When can you realistically exercise each week? What time of day gives you the most energy and consistency?',
          category: 'planning',
          helpText: 'Start with 2-3 days/week, 30-45 minutes. Morning workouts often have higher adherence rates but choose what works for your schedule.'
        },
        {
          id: 'home-gym-setup',
          prompt: 'What exercise equipment or space do you have access to? What minimal setup could maximize your options?',
          category: 'planning',
          helpText: 'Consider bodyweight exercises, resistance bands, dumbbells, yoga mat. You can start with just your body weight and small space.'
        },
        {
          id: 'progression-strategy-design',
          prompt: 'How will you gradually increase intensity and challenge to continue progressing over time?',
          category: 'planning',
          helpText: 'Plan weekly progression: more reps, longer duration, heavier weights, advanced exercises. Slow, consistent progress prevents plateaus.'
        },
        {
          id: 'workout-variety-planning',
          prompt: 'How will you maintain interest and work different aspects of fitness throughout your routine?',
          category: 'planning',
          helpText: 'Balance cardio, strength, flexibility, and fun activities. Rotate exercises weekly to prevent boredom and work different muscle groups.'
        },
        {
          id: 'recovery-rest-integration',
          prompt: 'How will you incorporate rest, recovery, and injury prevention into your fitness routine?',
          category: 'planning',
          helpText: 'Schedule rest days, stretching time, adequate sleep (7-9 hours), and listen to your body to prevent overtraining and injuries.'
        }
      ]
    },
    {
      id: 'nutrition-energy-optimization',
      title: 'Nutrition & Energy Optimization',
      description: 'Fuel your fitness journey with sustainable nutrition habits that support your goals and lifestyle',
      order: 3,
      reflectionPrompts: [
        {
          id: 'current-eating-patterns',
          prompt: 'What do your current eating patterns look like? What foods give you energy vs. make you feel sluggish?',
          category: 'research',
          helpText: 'Track eating patterns for a week: meal timing, portion sizes, energy levels, cravings, emotional eating triggers.',
          relatedResources: ['nutrition-basics-guide', 'meal-planning-fitness']
        },
        {
          id: 'nutrition-goals-alignment',
          prompt: 'How do your nutrition goals align with your fitness objectives? Weight management, performance, or general health?',
          category: 'planning',
          helpText: 'Weight loss requires calorie deficit, muscle gain needs adequate protein, endurance sports need carb timing, overall health needs balance.'
        },
        {
          id: 'meal-preparation-strategy',
          prompt: 'How will you plan and prepare meals to support consistent healthy eating despite busy schedules?',
          category: 'planning',
          helpText: 'Consider weekly meal prep, batch cooking, healthy snack preparation, emergency meal options, and eating out strategies.'
        },
        {
          id: 'hydration-energy-habits',
          prompt: 'How will you maintain proper hydration and manage energy levels throughout the day?',
          category: 'planning',
          helpText: 'Aim for half your body weight in ounces of water daily, more during exercise. Monitor urine color as hydration indicator.'
        },
        {
          id: 'supplement-consideration',
          prompt: 'What role might supplements play in supporting your fitness goals and overall health?',
          category: 'consideration',
          helpText: 'Focus on whole foods first. Common beneficial supplements: vitamin D, omega-3s, magnesium, protein powder for convenience.'
        },
        {
          id: 'sustainable-nutrition-habits',
          prompt: 'What small, sustainable nutrition changes can you implement gradually for long-term success?',
          category: 'planning',
          helpText: 'Start with one change at a time: drink more water, eat vegetables with each meal, reduce processed foods, mindful eating.'
        }
      ]
    },
    {
      id: 'mental-resilience-building',
      title: 'Mental Resilience & Habit Formation',
      description: 'Develop the mindset and habits needed for lasting fitness transformation and overcoming setbacks',
      order: 4,
      reflectionPrompts: [
        {
          id: 'mindset-transformation',
          prompt: 'What limiting beliefs about fitness and your capabilities need to be challenged and reframed?',
          category: 'consideration',
          helpText: 'Common limiting beliefs: "I\'m not athletic," "I don\'t have time," "I\'ve failed before." Reframe with evidence and possibility.',
          relatedResources: ['mindset-transformation-guide', 'habit-formation-science']
        },
        {
          id: 'habit-stacking-strategy',
          prompt: 'How can you attach new fitness habits to existing strong habits for better consistency?',
          category: 'planning',
          helpText: 'Habit stacking examples: "After I brush my teeth, I do 10 squats" or "After I pour morning coffee, I review my workout plan."'
        },
        {
          id: 'setback-recovery-planning',
          prompt: 'How will you handle inevitable setbacks, missed workouts, or motivation dips without derailing completely?',
          category: 'planning',
          helpText: 'Plan comeback strategies: "If I miss 2 days, I do a 10-minute walk on day 3." Focus on progress, not perfection.'
        },
        {
          id: 'progress-tracking-motivation',
          prompt: 'How will you track progress in ways that maintain motivation and show improvements beyond just weight?',
          category: 'planning',
          helpText: 'Track multiple metrics: energy levels, mood, sleep quality, strength improvements, endurance gains, measurements, photos.'
        },
        {
          id: 'celebration-reward-system',
          prompt: 'How will you celebrate fitness milestones and maintain motivation through your transformation journey?',
          category: 'planning',
          helpText: 'Plan non-food rewards: new workout clothes, massage, equipment upgrade, celebration with friends, weekend activity.'
        },
        {
          id: 'long-term-identity-shift',
          prompt: 'How do you envision your identity evolving as you become someone who prioritizes health and fitness?',
          category: 'consideration',
          helpText: 'Shift from "I want to be fit" to "I am someone who exercises regularly." Identity-based habits are more sustainable.'
        }
      ]
    },
    {
      id: 'lifestyle-integration-sustainability',
      title: 'Lifestyle Integration & Long-term Sustainability',
      description: 'Integrate fitness into your life sustainably and build systems for lifelong health and wellness',
      order: 5,
      reflectionPrompts: [
        {
          id: 'family-social-integration',
          prompt: 'How will you integrate fitness with family time and social activities to enhance rather than compete with relationships?',
          category: 'planning',
          helpText: 'Consider family walks, active date ideas, workout partners, kids activities, making fitness social rather than isolating.',
          relatedResources: ['family-fitness-guide', 'social-exercise-benefits']
        },
        {
          id: 'travel-consistency-planning',
          prompt: 'How will you maintain fitness habits during travel, busy periods, or life disruptions?',
          category: 'planning',
          helpText: 'Plan portable workouts, hotel gym routines, walking exploration, bodyweight exercises, flexibility in routines.'
        },
        {
          id: 'seasonal-adaptation-strategy',
          prompt: 'How will your fitness routine adapt to seasonal changes, weather variations, and life stage transitions?',
          category: 'planning',
          helpText: 'Plan indoor/outdoor options, seasonal sports, holiday strategies, aging adaptations, injury modifications.'
        },
        {
          id: 'financial-sustainability-planning',
          prompt: 'How will you maintain your fitness routine in a financially sustainable way over the long term?',
          category: 'planning',
          helpText: 'Budget for gym membership, equipment, classes, trainers. Consider free alternatives: parks, YouTube workouts, community groups.'
        },
        {
          id: 'community-support-building',
          prompt: 'How will you build and maintain a supportive community around your fitness journey?',
          category: 'planning',
          helpText: 'Join fitness groups, online communities, workout classes, sports teams, or find accountability partners with similar goals.'
        },
        {
          id: 'legacy-impact-consideration',
          prompt: 'How does your fitness journey impact others around you and what example do you want to set?',
          category: 'consideration',
          helpText: 'Consider influence on children, partner, friends, coworkers. Your health journey can inspire others to prioritize their wellness.'
        }
      ]
    },
    {
      id: 'advanced-optimization-mastery',
      title: 'Advanced Optimization & Mastery',
      description: 'Fine-tune your approach for optimal results and develop mastery in health and fitness',
      order: 6,
      reflectionPrompts: [
        {
          id: 'biometric-optimization-tracking',
          prompt: 'How will you use advanced tracking and biometrics to optimize your health and performance?',
          category: 'research',
          helpText: 'Consider heart rate variability, sleep tracking, body composition analysis, blood work, performance testing for optimization.',
          relatedResources: ['biometric-tracking-guide', 'performance-optimization']
        },
        {
          id: 'periodization-advanced-planning',
          prompt: 'How will you periodize your training for continued progress and prevent plateaus as you advance?',
          category: 'planning',
          helpText: 'Plan training cycles: building phases, peak phases, recovery phases, skill development periods, competition prep if applicable.'
        },
        {
          id: 'injury-prevention-mastery',
          prompt: 'What advanced injury prevention strategies will you implement as your training intensity increases?',
          category: 'planning',
          helpText: 'Consider movement quality assessment, corrective exercises, mobility work, strength imbalance correction, stress management.'
        },
        {
          id: 'performance-skill-development',
          prompt: 'What new skills or performance levels do you want to develop as your fitness foundation strengthens?',
          category: 'consideration',
          helpText: 'Consider advanced movements, new sports, competitions, teaching others, leadership roles in fitness community.'
        },
        {
          id: 'holistic-wellness-integration',
          prompt: 'How will you integrate fitness with other wellness practices for comprehensive health optimization?',
          category: 'planning',
          helpText: 'Consider stress management, meditation, quality sleep, relationships, purpose, mental health, preventive healthcare.'
        },
        {
          id: 'mentorship-leadership-transition',
          prompt: 'How might you transition from student to mentor, helping others on their fitness journeys?',
          category: 'consideration',
          helpText: 'Share knowledge, support others, lead by example, possibly pursue certifications, create content, build community.'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'motivation-psychology-guide',
      title: 'Psychology of Fitness Motivation & Behavior Change',
      type: 'guide',
      excerpt: 'Understand the psychological principles behind lasting fitness motivation and successful behavior change',
      content: 'Sustainable fitness transformation requires understanding behavior change psychology. Intrinsic motivation (internal satisfaction) proves more lasting than extrinsic motivation (external rewards). Connect fitness goals to personal values like health, confidence, family, or energy rather than just appearance. The transtheoretical model shows behavior change stages: precontemplation, contemplation, preparation, action, and maintenance. Most people cycle through these stages multiple times before lasting change occurs. Self-efficacy - belief in your ability to succeed - strongly predicts success. Build self-efficacy through small wins, skill development, and positive role models. Implementation intentions ("If X happens, I will do Y") help bridge the gap between goals and actions. Social support significantly impacts success - surround yourself with people who encourage your health goals.',
      tags: ['motivation', 'psychology', 'behavior-change', 'sustainability'],
      readTime: '12 min',
      difficulty: 'intermediate'
    },
    {
      id: 'goal-setting-framework',
      title: 'SMART Fitness Goal Setting & Achievement Framework',
      type: 'guide',
      excerpt: 'Master the art of setting and achieving fitness goals using proven frameworks and strategies',
      content: 'Effective fitness goals follow the SMART framework: Specific (run 5K), Measurable (in under 30 minutes), Achievable (with current fitness level), Relevant (supports health goals), Time-bound (within 3 months). Break large goals into micro-goals: "lose 30 pounds in 6 months" becomes "lose 1-2 pounds per week through 4 workouts and meal prep." Process goals (actions you control) often work better than outcome goals (results): focus on "exercise 4x/week" rather than "lose 10 pounds." Use implementation intentions: "I will work out on Monday, Wednesday, Friday at 7am at the gym." Create goal hierarchies: primary goals (must achieve), secondary goals (would like to achieve), and bonus goals (if everything goes perfectly). Regular review and adjustment prevent goals from becoming irrelevant.',
      tags: ['goal-setting', 'planning', 'achievement', 'frameworks'],
      readTime: '10 min',
      difficulty: 'beginner'
    },
    {
      id: 'exercise-type-guide',
      title: 'Complete Exercise Type Guide: Find Your Perfect Workout Match',
      type: 'guide',
      excerpt: 'Discover different exercise types and find activities that match your personality, preferences, and goals',
      content: 'Cardiovascular exercise strengthens heart and lungs through activities like running, cycling, swimming, dancing, hiking. Choose based on impact preference (low: swimming, high: running), indoor/outdoor preference, and social vs solo preference. Strength training builds muscle and bone density through resistance exercises: bodyweight (push-ups, squats), free weights (dumbbells, barbells), machines, resistance bands. Start with bodyweight, progress to equipment. Flexibility and mobility work prevents injury and improves movement quality: static stretching (hold positions), dynamic stretching (movement-based), yoga, pilates. Balance and coordination improve through tai chi, yoga, dance, sports-specific training. High-intensity interval training (HIIT) efficiently combines cardio and strength in short, intense bursts. Find activities you enjoy - adherence is more important than "optimal" exercise.',
      tags: ['exercise-types', 'workout-selection', 'preferences', 'variety'],
      readTime: '15 min',
      difficulty: 'beginner'
    },
    {
      id: 'beginner-workout-plans',
      title: 'Beginner-Friendly Workout Plans & Progression Schedules',
      type: 'guide',
      excerpt: 'Get started with safe, effective workout plans designed for beginners with clear progression paths',
      content: 'Beginner fitness programs should emphasize consistency over intensity. Week 1-2: Focus on form and habit building with 2-3 workouts per week, 20-30 minutes each. Include basic movements: bodyweight squats, push-ups (modified if needed), planks, walking. Week 3-4: Increase duration to 30-40 minutes, add more exercises. Week 5-8: Introduce light resistance, increase to 3-4 workouts weekly. Sample beginner full-body workout: 5-minute warm-up walk, 10 squats, 5 push-ups (modified), 30-second plank, 10 lunges, 5-minute cool-down stretch. Progress by adding reps before adding weight or complexity. Listen to your body - some muscle soreness is normal, joint pain is not. Take at least one full rest day between workouts initially.',
      tags: ['beginner-workouts', 'progression', 'safety', 'routine-building'],
      readTime: '18 min',
      difficulty: 'beginner'
    },
    {
      id: 'nutrition-basics-guide',
      title: 'Nutrition Fundamentals for Fitness Success',
      type: 'guide',
      excerpt: 'Master nutrition basics to fuel your workouts and support your fitness goals effectively',
      content: 'Nutrition provides 70-80% of body composition results, making it crucial for fitness success. Macronutrients: Protein builds and repairs muscle (0.8-1.2g per lb bodyweight), carbohydrates fuel workouts and brain function (focus on complex carbs), fats support hormones and vitamin absorption (0.3-0.4g per lb bodyweight). Micronutrients from colorful vegetables and fruits support recovery and energy production. Timing matters: eat protein within 2 hours post-workout for muscle synthesis, consume carbs around workouts for energy and recovery. Hydration affects performance - aim for clear yellow urine as hydration indicator. Meal prep supports consistency: batch cook proteins, pre-cut vegetables, prepare grab-and-go snacks. Focus on whole foods over processed foods for better nutrition density and satiety.',
      tags: ['nutrition', 'macronutrients', 'meal-timing', 'hydration'],
      readTime: '14 min',
      difficulty: 'beginner'
    },
    {
      id: 'meal-planning-fitness',
      title: 'Meal Planning Strategies for Active Lifestyles',
      type: 'guide',
      excerpt: 'Plan and prepare meals that support your fitness goals while fitting your busy schedule',
      content: 'Successful meal planning for fitness requires balancing nutrition, convenience, and taste. Start with weekly planning sessions: review workout schedule, plan meals around training times, create grocery lists organized by store sections. Batch cooking strategies: prepare large portions of proteins (grilled chicken, baked fish, beans), grains (quinoa, brown rice), and roasted vegetables on weekends. Pre- and post-workout nutrition: eat easily digestible carbs 30-60 minutes before exercise, combine protein and carbs within 2 hours after workouts. Portable snack options: Greek yogurt with berries, apple with almond butter, homemade energy balls, protein smoothies. Emergency meals: keep frozen vegetables, canned beans, quick-cooking proteins like eggs or canned fish for busy days. Flexible meal templates allow variety while maintaining nutritional goals.',
      tags: ['meal-planning', 'batch-cooking', 'workout-nutrition', 'convenience'],
      readTime: '16 min',
      difficulty: 'intermediate'
    }
  ],
  expertTips: [
    {
      id: 'transformation-tip-1',
      tip: 'Start with just 10-15 minutes of movement daily. Consistency builds the habit foundation - you can increase intensity and duration later.',
      author: 'Dr. Sarah Johnson, Exercise Physiologist',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'motivation-tip-1',
      tip: 'Connect your fitness goals to your values and identity. "I am someone who takes care of their health" is more powerful than "I want to lose weight."',
      author: 'Michael Chen, Behavior Change Specialist',
      category: 'consideration',
      importance: 'high'
    },
    {
      id: 'nutrition-tip-1',
      tip: 'Focus on adding healthy foods before removing unhealthy ones. Crowd out poor choices with nutrient-dense options rather than restrictive dieting.',
      author: 'Lisa Rodriguez, Registered Dietitian',
      category: 'planning',
      importance: 'medium'
    },
    {
      id: 'progress-tip-1',
      tip: 'Track multiple metrics beyond weight: energy levels, mood, sleep quality, strength gains. The scale doesn\'t tell the whole story.',
      author: 'David Kim, Personal Trainer (12 years)',
      category: 'research',
      importance: 'high'
    },
    {
      id: 'setback-tip-1',
      tip: 'Plan your comeback before you need it. Decide in advance how you\'ll return to healthy habits after missing a few days.',
      author: 'Amanda Foster, Wellness Coach',
      category: 'planning',
      importance: 'high'
    },
    {
      id: 'community-tip-1',
      tip: 'Find your fitness tribe - people with similar goals and values. Social support increases success rates by 40%.',
      author: 'Rachel Thompson, Group Fitness Instructor',
      category: 'planning',
      importance: 'medium'
    }
  ]
};

// Comprehensive personal development coaching guidance with extensive prompts and resources
export const personalDevelopmentCoachingTemplate: GuidanceTemplate = {
  id: "personal-development-coaching",
  title: "Personal Development & Life Coaching",
  description: "Transform your life through structured personal development and coaching strategies",
  category: "personal-development", 
  icon: "⚡",
  sections: [
    {
      id: "self-awareness-assessment",
      title: "Self-Awareness & Life Assessment",
      description: "Gain deep insight into your current life situation, values, and authentic self",
      order: 1,
      reflectionPrompts: [
        {
          id: "core-values-identification",
          prompt: "What are your top 5-7 core values that you want to guide all your life decisions?",
          category: "consideration",
          helpText: "Consider values like growth, family, creativity, integrity, adventure, security, contribution, freedom, authenticity, excellence. Rank importance and identify conflicts.",
          relatedResources: ['values-assessment-guide', 'life-wheel-evaluation']
        },
        {
          id: "life-satisfaction-audit",
          prompt: "Rate your current satisfaction (1-10) in each major life area: career, relationships, health, finances, personal growth, recreation, contribution?",
          category: "research",
          helpText: "Be brutally honest. Areas consistently below 7 need attention. Look for patterns and connections between low-scoring areas."
        },
        {
          id: "strengths-talents-assessment",
          prompt: "What are your natural strengths, talents, and unique abilities that others consistently recognize in you?",
          category: "research",
          helpText: "Ask friends, family, and colleagues what they see as your greatest strengths. Look for patterns across feedback from different contexts."
        },
        {
          id: "limiting-beliefs-identification", 
          prompt: "What limiting beliefs or inner critic messages hold you back from pursuing your dreams?",
          category: "research",
          helpText: "Common limiting beliefs: 'I'm not smart enough,' 'I don't deserve success,' 'I'm too old to change,' 'I'll probably fail anyway.' Notice the voice's tone and origin.",
          relatedResources: ['limiting-beliefs-workbook']
        },
        {
          id: "authentic-self-exploration",
          prompt: "When do you feel most authentic and alive? What activities, environments, and relationships bring out your truest self?",
          category: "consideration",
          helpText: "Notice when you lose track of time, feel energized rather than drained, and receive genuine compliments. These are clues to your authentic nature."
        }
      ]
    },
    {
      id: "vision-goal-creation",
      title: "Vision Creation & Goal Setting",
      description: "Design a compelling future vision and set meaningful goals aligned with your values",
      order: 2,
      reflectionPrompts: [
        {
          id: "life-vision-creation", 
          prompt: "What would your ideal life look like in 10 years across all major areas? Be specific and vivid in your descriptions.",
          category: "planning",
          helpText: "Envision career, relationships, health, finances, personal growth, living situation, daily routines, contribution - write as if it's already happening.",
          relatedResources: ['vision-board-guide', 'goal-setting-framework']
        },
        {
          id: "purpose-meaning-exploration",
          prompt: "What gives your life the deepest sense of purpose and meaning? How can you incorporate more of this?",
          category: "consideration", 
          helpText: "Look for patterns in what energizes you, activities where you lose track of time, moments you feel most useful and valued, impact you want to make."
        },
        {
          id: "legacy-impact-vision",
          prompt: "What legacy do you want to leave? How do you want to be remembered by family, friends, and community?",
          category: "consideration",
          helpText: "Think about the impact on family, community, profession, and the values you want to embody and pass on. What would your eulogy highlight?"
        },
        {
          id: "breakthrough-goals-identification",
          prompt: "What 3-5 breakthrough goals would transform your life if achieved in the next 2-3 years?",
          category: "planning",
          helpText: "Think beyond incremental improvements to goals that would fundamentally change your life trajectory. Examples: career transition, relationship goals, health transformations, creative projects."
        },
        {
          id: "values-alignment-check",
          prompt: "How do your goals align with your core values? Which goals might conflict with what matters most to you?",
          category: "research",
          helpText: "Test each goal against your values. Goals misaligned with values often lead to success without fulfillment. Adjust goals to honor your authentic priorities."
        }
      ]
    },
    {
      id: "obstacle-mindset-work",
      title: "Mindset Transformation & Obstacle Navigation",
      description: "Overcome limiting beliefs, develop resilience, and cultivate empowering mindsets",
      order: 3,
      reflectionPrompts: [
        {
          id: "fear-resistance-analysis",
          prompt: "What fears or forms of resistance come up when you think about pursuing your biggest goals?",
          category: "research",
          helpText: "Common fears: failure, success, judgment, rejection, inadequacy, change itself. Notice physical sensations and emotional responses to goal visualization.",
          relatedResources: ['fear-analysis-worksheet', 'resistance-breakthrough-guide']
        },
        {
          id: "growth-mindset-assessment",
          prompt: "In what areas of life do you have a fixed mindset versus a growth mindset? How does this impact your progress?",
          category: "consideration",
          helpText: "Fixed mindset says 'I can't do this' while growth mindset says 'I can't do this yet.' Identify areas where you avoid challenges or give up easily."
        },
        {
          id: "failure-reframe-strategy",
          prompt: "How can you reframe failure and setbacks as learning opportunities rather than evidence of inadequacy?",
          category: "planning",
          helpText: "Develop phrases like 'What can I learn from this?' and 'This is data for improvement.' Create a failure resumé celebrating lessons learned from setbacks."
        },
        {
          id: "confidence-building-plan",
          prompt: "What specific actions could you take to build unshakeable confidence in your ability to achieve your goals?",
          category: "planning",
          helpText: "Consider skill development, mindset practices, success tracking, mentor relationships, visualization, small wins celebration, body language changes."
        },
        {
          id: "inner-critic-management",
          prompt: "What strategies will you use to manage your inner critic and cultivate self-compassion during challenging times?",
          category: "planning",
          helpText: "Techniques: naming the critic voice, questioning negative thoughts, speaking to yourself as you would a dear friend, celebrating progress over perfection."
        }
      ]
    },
    {
      id: "action-planning-systems",
      title: "Action Planning & System Creation",
      description: "Create actionable plans and systems to consistently move toward your goals",
      order: 4,
      reflectionPrompts: [
        {
          id: "goal-breakdown-strategy",
          prompt: "How will you break down your major goals into specific, measurable milestones and daily actions?",
          category: "planning",
          helpText: "Use SMART criteria: Specific, Measurable, Achievable, Relevant, Time-bound. Create quarterly milestones, monthly targets, weekly projects, daily actions.",
          relatedResources: ['goal-breakdown-template', 'tracking-systems-guide']
        },
        {
          id: "habit-formation-plan",
          prompt: "What keystone habits, if developed consistently, would create the biggest positive impact on your life?",
          category: "decision",
          helpText: "Focus on 1-3 core habits that naturally trigger other positive behaviors. Examples: morning routine, exercise, reading, meditation, planning time."
        },
        {
          id: "accountability-support-system",
          prompt: "Who will hold you accountable and support your growth journey? How will you structure this accountability?",
          category: "planning",
          helpText: "Consider coaches, mentors, accountability partners, mastermind groups, or progress check-ins with friends. Set regular review schedules and consequences."
        },
        {
          id: "time-energy-management",
          prompt: "How will you protect and optimize your time and energy for what matters most to you?",
          category: "planning",
          helpText: "Audit current time use, identify energy patterns, eliminate time wasters, batch similar tasks, say no to non-essential commitments, create focused work blocks."
        },
        {
          id: "progress-measurement-system",
          prompt: "How will you track progress, celebrate wins, and adjust course when needed?",
          category: "planning",
          helpText: "Create metrics for each goal, schedule regular reviews (weekly/monthly), document lessons learned, celebrate milestones, and build in course correction mechanisms."
        }
      ]
    },
    {
      id: "relationship-communication",
      title: "Relationship Dynamics & Communication",
      description: "Enhance relationships and communication skills for personal and professional success",
      order: 5,
      reflectionPrompts: [
        {
          id: "relationship-audit-assessment",
          prompt: "Which relationships in your life energize you versus drain you? What patterns do you notice?",
          category: "research",
          helpText: "Categorize relationships as energizing, neutral, or draining. Look for common traits in each category and how you feel after interactions.",
          relatedResources: ['relationship-mapping-tool', 'communication-styles-guide']
        },
        {
          id: "communication-style-analysis",
          prompt: "How would you describe your communication style? What triggers conflict or misunderstanding in your relationships?",
          category: "research",
          helpText: "Consider directness vs. diplomacy, emotional expression, listening skills, conflict avoidance, assertiveness levels, and non-verbal communication patterns."
        },
        {
          id: "boundary-setting-strategy",
          prompt: "Where in your life do you need to set better boundaries? What would healthy boundaries look like?",
          category: "decision",
          helpText: "Identify areas where you say yes when you mean no, give too much, accept disrespectful treatment, or sacrifice your needs for others' approval."
        },
        {
          id: "difficult-conversation-preparation",
          prompt: "What difficult conversations have you been avoiding? How could you approach these with courage and compassion?",
          category: "planning",
          helpText: "Practice key messages, focus on specific behaviors rather than character, use 'I' statements, listen for understanding, find common ground."
        },
        {
          id: "network-expansion-plan", 
          prompt: "How will you expand your network to include people who inspire and support your growth?",
          category: "planning",
          helpText: "Consider professional groups, hobby communities, online communities, volunteering, classes, mentorship programs, or industry events aligned with your goals."
        }
      ]
    },
    {
      id: "continuous-growth-mastery",
      title: "Continuous Growth & Life Mastery",
      description: "Develop systems for lifelong learning and continuous personal evolution",
      order: 6,
      reflectionPrompts: [
        {
          id: "learning-development-plan",
          prompt: "What skills, knowledge areas, or competencies do you need to develop to achieve your vision?",
          category: "planning", 
          helpText: "Consider technical skills, soft skills, industry knowledge, personal effectiveness, creative abilities. Prioritize based on impact and align with goals.",
          relatedResources: ['skill-development-roadmap', 'learning-acceleration-guide']
        },
        {
          id: "mastery-mindset-cultivation",
          prompt: "How will you cultivate a mastery mindset that embraces challenges, persists through obstacles, and finds lessons in setbacks?",
          category: "consideration",
          helpText: "Focus on process over outcomes, effort over talent, learning over looking good, progress over perfection. Develop patience with the learning curve."
        },
        {
          id: "reflection-review-rhythm",
          prompt: "What rhythm of reflection and review will you establish to stay aligned with your values and adjust your path?",
          category: "planning",
          helpText: "Consider daily reflection questions, weekly reviews, monthly assessments, quarterly planning, annual vision checks. Build in time for deep thinking."
        },
        {
          id: "contribution-impact-plan",
          prompt: "How will you use your growth and development to make a positive impact on others and contribute to something larger than yourself?",
          category: "consideration",
          helpText: "Consider mentoring, teaching, volunteering, creating, innovating, or leading initiatives that align with your values and utilize your unique strengths."
        },
        {
          id: "life-integration-balance",
          prompt: "How will you integrate personal development with other life priorities to create sustainable growth without burnout?",
          category: "planning",
          helpText: "Balance growth activities with rest, relationships, fun, and existing responsibilities. Create realistic expectations and honor your natural rhythms and seasons."
        }
      ]
    }
  ],
  resources: [
    {
      id: "values-assessment-guide",
      title: "Core Values Assessment & Life Alignment Guide", 
      type: "guide",
      excerpt: "Discover your authentic core values and align your life choices with what matters most",
      content: "Comprehensive values identification process with 100+ values to consider, ranking exercises, and alignment assessment tools. Includes practical strategies for making values-based decisions and creating accountability systems to live authentically.",
      tags: ["values", "authenticity", "life-planning", "self-awareness"],
      readTime: "15 min",
      difficulty: "beginner",
      relatedBlogPost: 'values-based-living'
    },
    {
      id: "life-wheel-evaluation",
      title: "Life Wheel Assessment & Balance Planning Tool",
      type: "tool",
      excerpt: "Evaluate satisfaction across all life areas and create an integrated improvement plan",
      content: "Interactive life wheel covering 8 key areas: career, finances, health, relationships, personal growth, recreation, physical environment, and contribution. Includes satisfaction scoring, gap analysis, and priority-setting framework for balanced development.",
      tags: ["life-balance", "assessment", "planning", "holistic-development"],
      readTime: "12 min",
      difficulty: "beginner",
      relatedBlogPost: 'life-balance-mastery'
    },
    {
      id: "limiting-beliefs-workbook",
      title: "Limiting Beliefs Breakthrough Workbook",
      type: "guide",
      excerpt: "Identify, challenge, and transform the beliefs that hold you back from your potential",
      content: "Step-by-step process for uncovering limiting beliefs, understanding their origins, questioning their validity, and installing empowering beliefs. Includes belief transformation exercises, affirmation creation, and evidence-building strategies.",
      tags: ["mindset", "beliefs", "transformation", "breakthrough"],
      readTime: "18 min",
      difficulty: "intermediate",
      relatedBlogPost: 'limiting-beliefs-breakthrough'
    },
    {
      id: "vision-board-guide",
      title: "Vision Board Creation & Manifestation Guide",
      type: "guide",
      excerpt: "Create powerful visual representations of your goals and dreams to accelerate manifestation",
      content: "Complete guide to creating effective vision boards including image selection, layout principles, activation rituals, and daily practice routines. Covers both physical and digital vision board options with manifestation psychology insights.",
      tags: ["vision", "manifestation", "visualization", "goal-achievement"],
      readTime: "10 min",
      difficulty: "beginner",
      relatedBlogPost: 'vision-board-manifestation'
    },
    {
      id: "goal-setting-framework",
      title: "Advanced Goal Setting & Achievement Framework",
      type: "tool",
      excerpt: "Systematic approach to setting and achieving meaningful goals aligned with your values",
      content: "Comprehensive framework combining SMART goals, OKRs, and values alignment. Includes goal hierarchy mapping, milestone planning, obstacle anticipation, and progress tracking systems for maximum achievement probability.",
      tags: ["goal-setting", "achievement", "planning", "success-systems"],
      readTime: "14 min",
      difficulty: "intermediate",
      relatedBlogPost: 'goal-achievement-mastery'
    },
    {
      id: "fear-analysis-worksheet",
      title: "Fear Analysis & Courage Building Worksheet",
      type: "checklist",
      excerpt: "Systematic approach to understanding and overcoming fears that block your growth",
      content: "Detailed worksheet for fear identification, impact analysis, worst-case scenario planning, and courage-building action steps. Includes fear categorization, rationality assessment, and progressive exposure planning for systematic fear reduction.",
      tags: ["fear", "courage", "breakthrough", "mindset"],
      readTime: "8 min",
      difficulty: "intermediate",
      relatedBlogPost: 'fear-breakthrough-courage'
    },
    {
      id: "resistance-breakthrough-guide",
      title: "Internal Resistance & Procrastination Breakthrough Guide",
      type: "guide",
      excerpt: "Understand and overcome internal resistance patterns that sabotage your progress",
      content: "Deep dive into resistance psychology covering fear of failure, success, judgment, and change. Includes resistance pattern identification, root cause analysis, and breakthrough strategies for consistent action-taking despite internal objections.",
      tags: ["resistance", "procrastination", "breakthrough", "psychology"],
      readTime: "16 min",
      difficulty: "intermediate",
      relatedBlogPost: 'resistance-breakthrough'
    },
    {
      id: "goal-breakdown-template",
      title: "Goal Breakdown & Milestone Planning Template",
      type: "tool",
      excerpt: "Transform big goals into actionable steps with clear milestones and deadlines",
      content: "Systematic template for breaking down major goals into yearly themes, quarterly objectives, monthly projects, weekly priorities, and daily actions. Includes dependency mapping, resource planning, and contingency strategies.",
      tags: ["goal-planning", "project-management", "milestones", "action-planning"],
      readTime: "9 min",
      difficulty: "beginner",
      relatedBlogPost: 'goal-breakdown-mastery'
    },
    {
      id: "tracking-systems-guide",
      title: "Progress Tracking & Measurement Systems Guide",
      type: "guide", 
      excerpt: "Create effective systems to track progress, maintain motivation, and adjust course",
      content: "Comprehensive guide to progress tracking including metric selection, tracking tools, review rhythms, and course correction protocols. Covers both quantitative and qualitative measurement approaches for sustainable motivation.",
      tags: ["tracking", "measurement", "progress", "accountability"],
      readTime: "11 min",
      difficulty: "intermediate",
      relatedBlogPost: 'progress-tracking-systems'
    },
    {
      id: "relationship-mapping-tool",
      title: "Relationship Mapping & Network Analysis Tool",
      type: "tool",
      excerpt: "Visualize and optimize your personal and professional relationship network",
      content: "Interactive tool for mapping relationship dynamics including energy assessment, influence analysis, support evaluation, and growth opportunity identification. Helps prioritize relationship investments and identify network gaps.",
      tags: ["relationships", "networking", "social-capital", "analysis"],
      readTime: "13 min",
      difficulty: "intermediate",
      relatedBlogPost: 'relationship-network-optimization'
    },
    {
      id: "communication-styles-guide",
      title: "Communication Styles & Conflict Resolution Guide",
      type: "guide",
      excerpt: "Master different communication styles and resolve conflicts with grace and effectiveness",
      content: "Detailed guide covering communication style assessment, adaptation strategies, active listening techniques, and conflict resolution frameworks. Includes scripts for difficult conversations and boundary-setting communications.",
      tags: ["communication", "conflict-resolution", "relationships", "soft-skills"],
      readTime: "17 min",
      difficulty: "intermediate", 
      relatedBlogPost: 'communication-mastery'
    },
    {
      id: "skill-development-roadmap",
      title: "Strategic Skill Development Roadmap",
      type: "guide",
      excerpt: "Create a strategic plan for developing skills that will accelerate your personal and professional growth",
      content: "Framework for skill gap analysis, priority matrix creation, learning path design, and competency development tracking. Includes industry trend analysis and future skills identification for strategic advantage.",
      tags: ["skill-development", "learning", "career-growth", "strategic-planning"],
      readTime: "12 min",
      difficulty: "intermediate",
      relatedBlogPost: 'skill-development-strategy'
    },
    {
      id: "learning-acceleration-guide",
      title: "Accelerated Learning & Skill Acquisition Guide",
      type: "guide",
      excerpt: "Master the science of rapid learning and skill acquisition for faster personal development",
      content: "Evidence-based learning acceleration techniques including spaced repetition, deliberate practice, mental models, and transfer strategies. Covers different learning styles and optimization techniques for maximum retention and application.",
      tags: ["learning", "skill-acquisition", "acceleration", "neuroscience"],
      readTime: "14 min",
      difficulty: "expert",
      relatedBlogPost: 'accelerated-learning-mastery'
    }
  ],
  expertTips: [
    {
      id: "values-alignment-tip",
      tip: "Living according to your values, even when difficult, creates deep fulfillment and inner peace while compromising values leads to internal conflict and dissatisfaction.",
      author: "Dr. Sarah Chen, Life Coach & Psychologist (12 years)",
      category: "consideration",
      importance: "high"
    },
    {
      id: "small-wins-momentum-tip", 
      tip: "Build momentum through small, consistent wins rather than waiting for perfect conditions. Small daily actions compound into remarkable transformations over time.",
      author: "Marcus Johnson, Performance Coach",
      category: "planning",
      importance: "high"
    },
    {
      id: "growth-mindset-tip",
      tip: "Replace 'I can't do this' with 'I can't do this yet.' Adding 'yet' transforms fixed mindset limitations into growth opportunities and maintains hope for improvement.",
      author: "Dr. Rebecca Martinez, Developmental Psychologist",
      category: "consideration", 
      importance: "high"
    },
    {
      id: "accountability-power-tip",
      tip: "People with accountability partners achieve their goals 65% more often than those who only commit privately. Make your commitments social for maximum success.",
      author: "Jennifer Kim, Executive Coach",
      category: "planning",
      importance: "high"
    },
    {
      id: "fear-courage-tip",
      tip: "Courage isn't the absence of fear - it's feeling the fear and taking action anyway. Start with small brave actions to build your courage muscle gradually.",
      author: "Tony Rodriguez, Leadership Development Expert",
      category: "consideration",
      importance: "medium"
    },
    {
      id: "progress-over-perfection-tip",
      tip: "Focus on progress over perfection. A 1% daily improvement compounds to 37x improvement over a year, while waiting for perfection leads to zero progress.",
      author: "Lisa Thompson, Productivity Coach", 
      category: "planning",
      importance: "high"
    },
    {
      id: "identity-change-tip",
      tip: "Change your identity, not just your behavior. Instead of 'I'm trying to exercise,' say 'I'm someone who prioritizes health.' Identity drives consistent action.",
      author: "Dr. Michael Chang, Behavioral Scientist",
      category: "consideration",
      importance: "medium"
    },
    {
      id: "environment-design-tip",
      tip: "Design your environment to support your goals automatically. Remove friction for good habits and add friction for bad habits to make success easier.",
      author: "Amanda Foster, Habits Expert",
      category: "planning", 
      importance: "medium"
    }
  ]
};

// Comprehensive retirement lifestyle planning guidance with extensive prompts and resources
export const retirementLifestylePlanningTemplate: GuidanceTemplate = {
  id: "retirement-lifestyle-planning",
  title: "Retirement & Lifestyle Planning", 
  description: "Plan for a fulfilling retirement that aligns with your values and desired lifestyle",
  category: "life-transitions",
  icon: "🌅",
  sections: [
    {
      id: "retirement-vision-assessment",
      title: "Retirement Vision & Current Assessment", 
      description: "Envision your ideal retirement lifestyle and assess your current readiness across all dimensions",
      order: 1,
      reflectionPrompts: [
        {
          id: "retirement-lifestyle-vision",
          prompt: "What does your ideal retirement lifestyle look like day-to-day and year-to-year? Be specific about routines, activities, and experiences.", 
          category: "consideration",
          helpText: "Consider daily routines, seasonal patterns, travel frequency, hobbies, social connections, learning activities, volunteer work, family time, and living arrangements. Write as if describing a typical week.",
          relatedResources: ['retirement-lifestyle-calculator', 'retirement-vision-worksheet']
        },
        {
          id: "retirement-values-priorities",
          prompt: "What are your top 5 values that you want to guide your retirement decisions and lifestyle choices?",
          category: "consideration", 
          helpText: "Consider values like family time, adventure, security, learning, contribution, health, independence, legacy, creativity, or spiritual growth. Rank by importance."
        },
        {
          id: "current-retirement-readiness",
          prompt: "How prepared are you currently across financial, health, social, and emotional aspects of retirement?",
          category: "research",
          helpText: "Rate yourself 1-10 in each area. Financial: savings, income sources, expenses. Health: fitness, preventive care. Social: relationships, community. Emotional: purpose, identity."
        },
        {
          id: "retirement-fears-concerns",
          prompt: "What fears or concerns do you have about retirement? What keeps you awake at night thinking about your future?",
          category: "research",
          helpText: "Common concerns: financial security, health decline, boredom, loss of identity, social isolation, becoming a burden, running out of money, losing mental sharpness."
        },
        {
          id: "legacy-impact-goals",
          prompt: "What legacy do you want to create during your retirement years? How do you want to impact family, community, or causes you care about?",
          category: "consideration",
          helpText: "Think about knowledge to pass on, causes to support, family relationships to nurture, community contributions, or creative works to complete."
        }
      ]
    },
    {
      id: "financial-security-planning",
      title: "Financial Security & Resource Planning",
      description: "Develop comprehensive financial strategies to support your desired retirement lifestyle",
      order: 2,
      reflectionPrompts: [
        {
          id: "retirement-expense-calculation",
          prompt: "What will your annual living expenses be in retirement? Break down housing, healthcare, food, transportation, entertainment, and discretionary spending.",
          category: "planning",
          helpText: "Use the 70-90% of pre-retirement income rule as a starting point, then customize based on your specific lifestyle plans. Don't forget taxes, inflation, and potential care costs.",
          relatedResources: ['retirement-budget-planner', 'healthcare-cost-estimator']
        },
        {
          id: "income-source-strategy",
          prompt: "What income sources will fund your retirement? How will you optimize Social Security, pensions, savings, and potential part-time work?",
          category: "planning",
          helpText: "Consider the retirement income 'three-legged stool': Social Security, employer benefits, personal savings. Also factor in rental income, business income, or part-time work."
        },
        {
          id: "healthcare-cost-planning",
          prompt: "How will you plan for healthcare costs, long-term care, and medical emergencies in retirement?",
          category: "planning", 
          helpText: "Healthcare costs typically increase in retirement. Consider Medicare supplements, long-term care insurance, Health Savings Accounts, and emergency medical funds."
        },
        {
          id: "inflation-protection-strategy",
          prompt: "How will you protect your retirement income and savings from inflation over 20-30 years?",
          category: "planning",
          helpText: "Consider inflation-adjusted income sources, investments that historically outpace inflation, and lifestyle flexibility to adapt to changing costs over time."
        },
        {
          id: "estate-inheritance-planning",
          prompt: "What are your goals for estate planning and leaving an inheritance? How much do you want to spend versus preserve?",
          category: "decision",
          helpText: "Clarify your priorities: maximizing your lifestyle vs. preserving wealth for heirs vs. charitable giving. This affects withdrawal strategies and risk tolerance."
        }
      ]
    },
    {
      id: "health-wellness-aging",
      title: "Health, Wellness & Aging Gracefully",
      description: "Create strategies to maintain physical, mental, and emotional health throughout retirement",
      order: 3,
      reflectionPrompts: [
        {
          id: "health-maintenance-plan",
          prompt: "What proactive steps will you take to maintain your physical health and prevent age-related decline?",
          category: "planning",
          helpText: "Consider regular exercise routines, preventive medical care, nutrition planning, sleep hygiene, stress management, and adapting activities as you age.",
          relatedResources: ['retirement-fitness-guide', 'preventive-care-checklist']
        },
        {
          id: "mental-cognitive-health",
          prompt: "How will you keep your mind sharp and engaged throughout retirement to prevent cognitive decline?",
          category: "planning",
          helpText: "Consider lifelong learning, reading, puzzles, social engagement, new skill development, creative pursuits, volunteering, or part-time work that challenges you mentally."
        },
        {
          id: "healthcare-provider-access",
          prompt: "How will you ensure access to quality healthcare providers and services as you age?",
          category: "planning",
          helpText: "Consider proximity to hospitals, specialist access, insurance networks, relationship with primary care, and potential need for assisted living or home care services."
        },
        {
          id: "mobility-independence-planning",
          prompt: "How will you plan for potential mobility changes and maintain independence as long as possible?",
          category: "planning",
          helpText: "Consider home modifications, transportation alternatives, assistive technologies, community resources, and criteria for when you might need additional support."
        },
        {
          id: "emotional-mental-wellness",
          prompt: "What strategies will you use to maintain emotional health, cope with losses, and find joy throughout retirement?",
          category: "consideration",
          helpText: "Consider support systems, grief counseling resources, purpose and meaning activities, social connections, spiritual practices, or professional mental health support."
        }
      ]
    },
    {
      id: "lifestyle-location-housing",
      title: "Lifestyle Design & Housing Decisions", 
      description: "Make strategic decisions about where and how you want to live in retirement",
      order: 4,
      reflectionPrompts: [
        {
          id: "retirement-location-criteria",
          prompt: "What are your must-haves and deal-breakers for where you live in retirement?",
          category: "decision",
          helpText: "Consider climate, cost of living, healthcare access, family proximity, cultural activities, safety, transportation, taxes, and community amenities. Rank importance.",
          relatedResources: ['retirement-location-comparison', 'cost-of-living-analyzer']
        },
        {
          id: "housing-modification-planning",
          prompt: "How might your housing needs change as you age? What modifications or moves might be necessary?",
          category: "planning",
          helpText: "Consider accessibility needs, maintenance capacity, size requirements, proximity to services, and aging-in-place modifications versus planned relocations."
        },
        {
          id: "seasonal-lifestyle-options",
          prompt: "Are you interested in seasonal living, such as being a 'snowbird' or having multiple residences?",
          category: "consideration",
          helpText: "Consider the costs and logistics of maintaining multiple residences, seasonal migration patterns, and how this fits with your budget and lifestyle goals."
        },
        {
          id: "community-social-environment",
          prompt: "What type of community and social environment will support your retirement happiness and engagement?",
          category: "consideration",
          helpText: "Consider age-restricted vs. mixed-age communities, urban vs. rural settings, proximity to like-minded people, activity levels, and opportunities for new friendships."
        },
        {
          id: "transportation-mobility-needs",
          prompt: "How will you handle transportation and mobility needs if you can no longer drive safely?",
          category: "planning",
          helpText: "Consider public transportation, ride services, walkability, family support, community transportation programs, and timeline for transportation transitions."
        }
      ]
    },
    {
      id: "purpose-engagement-activities",
      title: "Purpose, Engagement & Meaningful Activities",
      description: "Discover and plan meaningful ways to spend your time and contribute during retirement",
      order: 5,
      reflectionPrompts: [
        {
          id: "retirement-purpose-exploration",
          prompt: "How will you find purpose and meaning in retirement? What will give you a reason to get up each morning?",
          category: "consideration",
          helpText: "Consider volunteer work, mentoring, teaching, creative pursuits, entrepreneurship, caregiving, activism, religious/spiritual activities, or pursuing delayed dreams.",
          relatedResources: ['purpose-discovery-guide', 'volunteer-matching-tool']
        },
        {
          id: "skills-knowledge-sharing",
          prompt: "How can you use your professional skills and life experience to contribute to others or society?",
          category: "consideration",
          helpText: "Consider consulting, mentoring, teaching, nonprofit board service, writing, speaking, or creating educational content to share your expertise and wisdom."
        },
        {
          id: "learning-growth-goals",
          prompt: "What new skills, knowledge areas, or experiences do you want to pursue in retirement?",
          category: "planning",
          helpText: "Consider formal education, online courses, travel learning, hobby development, artistic pursuits, languages, technology skills, or spiritual exploration."
        },
        {
          id: "social-connection-maintenance",
          prompt: "How will you maintain and build meaningful social connections and friendships in retirement?",
          category: "planning",
          helpText: "Consider joining clubs, volunteering, continuing work relationships, developing neighbor relationships, or participating in religious/community organizations."
        },
        {
          id: "creative-personal-projects",
          prompt: "What creative projects, personal interests, or 'bucket list' items do you want to pursue?",
          category: "consideration",
          helpText: "Think about artistic projects, writing, gardening, genealogy, collections, travel goals, adventure activities, or other personal interests you've deferred."
        }
      ]
    },
    {
      id: "transition-implementation",
      title: "Retirement Transition & Implementation Planning",
      description: "Create actionable plans for transitioning into retirement and adjusting over time",
      order: 6,
      reflectionPrompts: [
        {
          id: "retirement-timeline-strategy",
          prompt: "What's your timeline for retirement? Will you retire all at once, phase out gradually, or continue working part-time?",
          category: "decision",
          helpText: "Consider full retirement, phased retirement, consulting, part-time work, or 'encore careers.' Think about financial readiness, work satisfaction, and personal goals.",
          relatedResources: ['retirement-timeline-planner', 'phased-retirement-guide']
        },
        {
          id: "career-transition-planning",
          prompt: "How will you transition from your work identity and relationships to retirement life?",
          category: "planning",
          helpText: "Consider maintaining professional relationships, transferring knowledge, celebrating career achievements, and developing new sources of identity and self-worth."
        },
        {
          id: "first-year-retirement-plan",
          prompt: "What will your first year of retirement look like? How will you structure your time and establish new routines?",
          category: "planning",
          helpText: "Plan a mix of rest, exploration, relationship building, routine establishment, and gradual activity increase. Avoid over-scheduling initially while you adjust."
        },
        {
          id: "retirement-adjustment-expectations",
          prompt: "What challenges do you anticipate in adjusting to retirement life? How will you handle the psychological transition?",
          category: "consideration",
          helpText: "Common challenges: loss of structure, identity shifts, relationship changes, financial anxiety, health concerns. Consider professional support, gradual transitions, or peer groups."
        },
        {
          id: "flexibility-adaptation-planning",
          prompt: "How will you build flexibility into your retirement plans to adapt to changing health, finances, or interests?",
          category: "planning",
          helpText: "Create Plan A, B, and C scenarios. Build in regular review periods to assess and adjust your retirement plans as circumstances and preferences change."
        }
      ]
    }
  ],
  resources: [
    {
      id: "retirement-lifestyle-calculator",
      title: "Comprehensive Retirement Lifestyle Planning Calculator",
      type: "tool",
      excerpt: "Calculate the costs and resources needed for your desired retirement lifestyle across all major categories",
      content: "Interactive calculator covering housing costs, healthcare expenses, travel budgets, hobby costs, daily living expenses, and inflation adjustments. Includes scenario planning for different lifestyle choices and cost comparisons by geographic location.",
      tags: ["retirement-planning", "lifestyle-design", "financial-planning", "calculator"],
      readTime: "12 min", 
      difficulty: "intermediate",
      relatedBlogPost: 'retirement-lifestyle-costs'
    },
    {
      id: "retirement-vision-worksheet",
      title: "Retirement Vision & Values Clarification Worksheet",
      type: "guide",
      excerpt: "Create a clear, inspiring vision for your retirement years aligned with your deepest values",
      content: "Step-by-step process for clarifying retirement values, envisioning ideal lifestyle scenarios, identifying potential challenges, and creating actionable vision statements. Includes exercises for couples to align their retirement visions.",
      tags: ["retirement-vision", "values", "planning", "couples"],
      readTime: "15 min",
      difficulty: "beginner",
      relatedBlogPost: 'retirement-vision-planning'
    },
    {
      id: "retirement-budget-planner",
      title: "Detailed Retirement Budget Planning Guide",
      type: "guide",
      excerpt: "Create realistic retirement budgets that align with your lifestyle goals and income sources",
      content: "Comprehensive budgeting framework covering all retirement expense categories, income source optimization, tax planning, inflation adjustments, and emergency fund planning. Includes budget templates and tracking tools.",
      tags: ["retirement-budget", "financial-planning", "expenses", "income"],
      readTime: "18 min",
      difficulty: "intermediate",
      relatedBlogPost: 'retirement-budget-mastery'
    },
    {
      id: "healthcare-cost-estimator",
      title: "Retirement Healthcare Cost Planning Guide",
      type: "tool",
      excerpt: "Estimate and plan for healthcare costs throughout your retirement years",
      content: "Healthcare cost calculator including Medicare premiums, supplement insurance, prescription costs, dental and vision care, long-term care expenses, and emergency medical funds. Includes state-by-state cost variations.",
      tags: ["healthcare", "medicare", "long-term-care", "medical-costs"],
      readTime: "10 min",
      difficulty: "intermediate", 
      relatedBlogPost: 'retirement-healthcare-planning'
    },
    {
      id: "retirement-fitness-guide",
      title: "Retirement Fitness & Healthy Aging Guide",
      type: "guide",
      excerpt: "Maintain and improve your physical health throughout retirement with age-appropriate fitness strategies",
      content: "Comprehensive fitness guide covering exercise routines for different fitness levels, injury prevention, nutrition guidelines, sleep optimization, and adapting activities as you age. Includes home workout options and community fitness resources.",
      tags: ["fitness", "healthy-aging", "exercise", "wellness"],
      readTime: "16 min",
      difficulty: "beginner",
      relatedBlogPost: 'retirement-fitness-wellness'
    },
    {
      id: "preventive-care-checklist",
      title: "Retirement Preventive Healthcare Checklist",
      type: "checklist", 
      excerpt: "Stay on top of preventive healthcare to maintain your health and catch issues early",
      content: "Age-appropriate preventive care schedule including screenings, vaccinations, dental care, vision care, and specialist consultations. Organized by age groups with frequency recommendations and preparation tips.",
      tags: ["preventive-care", "health-screening", "medical-checkups", "wellness"],
      readTime: "8 min",
      difficulty: "beginner",
      relatedBlogPost: 'preventive-care-retirement'
    },
    {
      id: "retirement-location-comparison",
      title: "Retirement Location Analysis & Comparison Tool",
      type: "tool",
      excerpt: "Compare potential retirement locations across all factors important to your lifestyle and budget",
      content: "Interactive comparison tool evaluating locations on cost of living, climate, healthcare access, taxes, safety, cultural amenities, and community resources. Includes ranking system and decision framework.",
      tags: ["retirement-location", "cost-of-living", "relocation", "comparison"],
      readTime: "14 min",
      difficulty: "intermediate",
      relatedBlogPost: 'retirement-location-guide'
    },
    {
      id: "cost-of-living-analyzer",
      title: "Retirement Cost of Living State-by-State Analyzer",
      type: "tool",
      excerpt: "Analyze how far your retirement income will go in different states and cities",
      content: "Detailed cost analysis covering housing, taxes, utilities, transportation, healthcare, and daily expenses across all US states and major cities. Includes retirement income purchasing power calculations.",
      tags: ["cost-of-living", "retirement-income", "state-comparison", "purchasing-power"],
      readTime: "11 min",
      difficulty: "intermediate",
      relatedBlogPost: 'retirement-cost-comparison'
    },
    {
      id: "purpose-discovery-guide",
      title: "Finding Purpose & Meaning in Retirement Guide",
      type: "guide",
      excerpt: "Discover meaningful ways to spend your retirement years and create lasting impact",
      content: "Purpose exploration framework including values assessment, passion identification, skill inventory, community needs analysis, and purpose statement creation. Includes exercises for transitioning from career identity to retirement purpose.",
      tags: ["purpose", "meaning", "retirement-transition", "identity"],
      readTime: "17 min",
      difficulty: "intermediate",
      relatedBlogPost: 'retirement-purpose-meaning'
    },
    {
      id: "volunteer-matching-tool",
      title: "Retirement Volunteer & Service Opportunity Matching Guide",
      type: "tool", 
      excerpt: "Find volunteer opportunities that match your skills, interests, and desired time commitment",
      content: "Volunteer opportunity database with matching algorithm based on skills, interests, availability, and location. Includes nonprofit research tools, volunteer role descriptions, and application guidance.",
      tags: ["volunteering", "service", "nonprofit", "community-engagement"],
      readTime: "9 min",
      difficulty: "beginner",
      relatedBlogPost: 'retirement-volunteering-guide'
    },
    {
      id: "retirement-timeline-planner",
      title: "Strategic Retirement Transition Timeline Planner",
      type: "tool",
      excerpt: "Create a detailed timeline for transitioning from career to retirement with key milestones",
      content: "Timeline planning tool covering financial preparation, career wind-down, lifestyle transitions, and retirement activation phases. Includes milestone checklists and contingency planning for different retirement scenarios.",
      tags: ["retirement-timeline", "transition-planning", "career-exit", "milestones"],
      readTime: "13 min",
      difficulty: "intermediate",
      relatedBlogPost: 'retirement-transition-timeline'
    },
    {
      id: "phased-retirement-guide", 
      title: "Phased Retirement & Gradual Transition Guide",
      type: "guide",
      excerpt: "Plan a gradual transition to retirement through reduced hours, consulting, or part-time work",
      content: "Framework for phased retirement including negotiating with current employers, consulting transition strategies, part-time work planning, and financial implications of gradual retirement approaches.",
      tags: ["phased-retirement", "gradual-transition", "part-time-work", "consulting"],
      readTime: "15 min",
      difficulty: "intermediate",
      relatedBlogPost: 'phased-retirement-strategies'
    }
  ],
  expertTips: [
    {
      id: "early-planning-tip",
      tip: "Start retirement lifestyle planning at least 10-15 years before retiring to make informed decisions and course corrections. The earlier you start, the more options you'll have.",
      author: "Janet Rodriguez, Certified Retirement Coach (20 years)",
      category: "planning",
      importance: "high"
    },
    {
      id: "healthcare-priority-tip",
      tip: "Healthcare costs are often the biggest wild card in retirement. Build in a 20-30% buffer above estimates and prioritize maintaining excellent health through prevention.",
      author: "Dr. Michael Chen, Retirement Planning Specialist",
      category: "planning", 
      importance: "high"
    },
    {
      id: "purpose-before-retirement-tip",
      tip: "Develop your retirement purpose and activities before you retire. The happiest retirees have something meaningful to retire TO, not just FROM.",
      author: "Sarah Thompson, Retirement Transition Coach",
      category: "consideration",
      importance: "high"
    },
    {
      id: "flexibility-planning-tip",
      tip: "Build flexibility into all retirement plans. Your interests, health, and finances will change over 20-30 years of retirement, so avoid rigid long-term commitments.",
      author: "Robert Kim, Financial Planner",
      category: "planning",
      importance: "high"
    },
    {
      id: "social-connection-tip",
      tip: "Retirement can be socially isolating if not planned well. Actively cultivate relationships and community connections before and during retirement for better mental health.",
      author: "Dr. Lisa Martinez, Geriatric Psychologist",
      category: "consideration",
      importance: "medium"
    },
    {
      id: "phased-transition-tip",
      tip: "Consider a phased retirement approach rather than stopping work abruptly. Gradual transitions often lead to higher retirement satisfaction and better financial outcomes.",
      author: "Jennifer Wilson, Career Transition Specialist",
      category: "planning",
      importance: "medium"
    },
    {
      id: "inflation-protection-tip",
      tip: "Don't underestimate inflation's impact over 20-30 years. What costs $100 today will cost $180 in 20 years with 3% inflation. Plan accordingly.",
      author: "David Foster, Retirement Investment Advisor",
      category: "planning",
      importance: "high"
    },
    {
      id: "couples-alignment-tip",
      tip: "If married, ensure you and your spouse are aligned on retirement vision, timeline, and finances. Misaligned expectations cause significant retirement stress.",
      author: "Amanda Rodriguez, Couples Financial Planner",
      category: "consideration",
      importance: "medium"
    }
  ]
};


// Complete templates array with all defined templates  
export const allTemplates: GuidanceTemplate[] = [
  ...templates,
  fitnessJourneyTemplate,
  personalDevelopmentCoachingTemplate, 
  retirementLifestylePlanningTemplate,
  personalHealthWellnessTemplate,
  homeRenovationInteriorDesignTemplate,
  sustainableLivingTemplate
];
