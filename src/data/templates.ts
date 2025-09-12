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

// Comprehensive home buying guidance with extensive prompts and resources
export const homeBuyingTemplate: GuidanceTemplate = {
  id: 'home-buying',
  title: 'Home Buying Guide',
  description: 'Complete guidance for first-time and experienced home buyers navigating the purchasing process',
  category: 'personal-finance',
  icon: '🏠',
  sections: [
    {
      id: 'financial-readiness',
      title: 'Financial Readiness & Budget',
      description: 'Assess your financial situation and establish a realistic home buying budget',
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
      description: 'Determine your must-have features and deal-breakers',
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
      description: 'Navigate loan types, lenders, and pre-approval process',
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
      description: 'Develop an effective approach to finding and evaluating properties',
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
      description: 'Craft competitive offers and navigate negotiations',
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
      description: 'Navigate inspections, appraisals, and closing procedures',
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
      description: 'Plan your move and establish your new home',
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
  resources: [],
  expertTips: [
    {
      id: 'credit-tip-1',
      tip: 'Check your credit score 6 months before house hunting. Small improvements can save thousands in interest over the loan term.',
      author: 'Jennifer Martinez, Mortgage Broker (12 years)',
      category: 'Credit & Financing',
      importance: 'high'
    },
    {
      id: 'budget-tip-1',
      tip: 'Use the 28/36 rule: no more than 28% of gross income on housing, 36% on total debt payments including housing.',
      author: 'Robert Chen, Financial Planner',
      category: 'Budget Planning',
      importance: 'high'
    },
    {
      id: 'location-tip-1',
      tip: 'Buy the worst house in the best neighborhood you can afford. Location affects value more than home features.',
      author: 'Sarah Williams, Real Estate Agent (18 years)',
      category: 'Location Strategy',
      importance: 'high'
    },
    {
      id: 'inspection-tip-1',
      tip: 'Never skip the home inspection, even in competitive markets. A $500 inspection can save you tens of thousands.',
      author: 'Mike Thompson, Home Inspector',
      category: 'Due Diligence',
      importance: 'high'
    },
    {
      id: 'timing-tip-1',
      tip: 'The best time to buy is when you\'re financially ready, not when the market seems perfect. Time in market beats timing the market.',
      author: 'Lisa Chang, Real Estate Economist',
      category: 'Market Timing',
      importance: 'medium'
    },
    {
      id: 'negotiation-tip-1',
      tip: 'In seller\'s markets, consider waiving inspection contingency only if you\'ve done a thorough pre-offer inspection.',
      author: 'David Rodriguez, Buyer\'s Agent',
      category: 'Competitive Offers',
      importance: 'high'
    },
    {
      id: 'financing-tip-1',
      tip: 'Get pre-approved, not pre-qualified. Pre-approval carries more weight with sellers and shows you\'re serious.',
      author: 'Amanda Foster, Loan Officer',
      category: 'Mortgage Process',
      importance: 'medium'
    },
    {
      id: 'maintenance-tip-1',
      tip: 'Budget 1-3% of your home\'s value annually for maintenance and repairs. Homes always need something fixed.',
      author: 'Tom Wilson, Property Manager',
      category: 'Homeownership',
      importance: 'medium'
    }
  ]
};

export const jobSearchTemplate: GuidanceTemplate = {
  id: 'job-search',
  title: 'Job Search Strategy',
  description: 'Strategic approach to landing your dream position with expert guidance and actionable steps',
  category: 'career',
  icon: '💼',
  sections: [
    {
      id: 'career-assessment',
      title: 'Career Assessment & Goals',
      description: 'Evaluate your skills, interests, and career objectives to target the right opportunities',
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
      description: 'Create compelling application materials that showcase your value and get you noticed',
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
      description: 'Execute a strategic job search using multiple channels and networking approaches',
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
      description: 'Master different interview formats and prepare compelling responses that demonstrate your value',
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
      description: 'Evaluate job offers comprehensively and negotiate terms that align with your value and goals',
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
      description: 'Build long-term career success through continuous learning and professional growth',
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
  resources: [],
  expertTips: [
    {
      id: 'networking-tip-1',
      tip: 'Focus on building genuine relationships, not just asking for jobs. Help others first and job opportunities will follow naturally.',
      author: 'Sarah Chen, Executive Recruiter (15 years)',
      category: 'Networking',
      importance: 'high'
    },
    {
      id: 'resume-tip-1',
      tip: 'Quantify your achievements with specific metrics. "Increased sales by 25%" is much stronger than "improved sales performance."',
      author: 'Mike Rodriguez, HR Director',
      category: 'Resume',
      importance: 'high'
    },
    {
      id: 'interview-tip-1',
      tip: 'Practice the STAR method (Situation, Task, Action, Result) for behavioral questions. Have 5-7 detailed stories ready.',
      author: 'Jennifer Liu, Career Coach',
      category: 'Interviewing',
      importance: 'high'
    },
    {
      id: 'application-tip-1',
      tip: 'Apply within the first 48 hours when possible. Early applications get more attention from hiring managers.',
      author: 'David Park, Talent Acquisition Manager',
      category: 'Job Applications',
      importance: 'high'
    },
    {
      id: 'linkedin-tip-1',
      tip: 'Post valuable industry insights regularly on LinkedIn. Recruiters notice active, engaged professionals.',
      author: 'Amanda Foster, Personal Branding Expert',
      category: 'Professional Branding',
      importance: 'medium'
    },
    {
      id: 'negotiation-tip-1',
      tip: 'Never negotiate salary in the first interview. Wait until you have an offer and they want you specifically.',
      author: 'Robert Chen, Negotiation Expert',
      category: 'Salary Negotiation',
      importance: 'high'
    },
    {
      id: 'research-tip-1',
      tip: 'Research the interviewer on LinkedIn beforehand. Finding common connections or interests builds rapport quickly.',
      author: 'Lisa Chang, Executive Coach',
      category: 'Interview Preparation',
      importance: 'medium'
    },
    {
      id: 'follow-up-tip-1',
      tip: 'Send personalized thank-you emails within 24 hours of each interview. Reference specific conversation points.',
      author: 'Tom Wilson, Hiring Manager',
      category: 'Interview Follow-up',
      importance: 'high'
    }
  ]
};

export const babyPlanningTemplate: GuidanceTemplate = {
  id: 'baby-planning',
  title: 'Baby Planning Guide',
  description: 'Complete guidance for expecting parents from pregnancy through baby\'s first year',
  category: 'personal-life',
  icon: '👶',
  sections: [
    {
      id: 'pregnancy-preparation',
      title: 'Pregnancy Preparation & Health',
      description: 'Essential health preparations, prenatal care, and lifestyle adjustments for pregnancy',
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
      description: 'Budget for baby expenses, understand insurance coverage, and plan for parental leave',
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
      description: 'Plan the nursery layout, select essential gear, and prepare your home for baby\'s arrival',
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
      description: 'Create your birth plan, prepare for labor and delivery, and organize hospital logistics',
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
      description: 'Learn essential newborn care skills, establish feeding routines, and understand baby development',
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
      description: 'Plan your return to work, establish childcare, and adapt to life as new parents',
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
  resources: [],
  expertTips: [
    {
      id: 'prenatal-tip-1',
      tip: 'Take prenatal vitamins with folic acid at least one month before trying to conceive and throughout pregnancy to prevent birth defects.',
      author: 'Dr. Sarah Williams, OB-GYN (12 years)',
      category: 'Prenatal Health',
      importance: 'high'
    },
    {
      id: 'budget-tip-1',
      tip: 'Focus on essentials for the first 3 months. Babies need very little initially - prioritize safe sleep, car seat, and feeding supplies.',
      author: 'Jennifer Martinez, Certified Financial Planner',
      category: 'Financial Planning',
      importance: 'high'
    },
    {
      id: 'feeding-tip-1',
      tip: 'Whether breastfeeding or formula feeding, having a plan and support system is crucial. Both are valid choices that can nourish your baby.',
      author: 'Lisa Chen, Lactation Consultant (IBCLC)',
      category: 'Feeding',
      importance: 'high'
    },
    {
      id: 'sleep-tip-1',
      tip: 'Follow safe sleep guidelines religiously: back sleeping, firm mattress, nothing else in the crib. This reduces SIDS risk by 50%.',
      author: 'Dr. Michael Rodriguez, Pediatrician',
      category: 'Safe Sleep',
      importance: 'high'
    },
    {
      id: 'partnership-tip-1',
      tip: 'Divide night duties in shifts rather than both parents waking up. This ensures at least one parent gets solid sleep.',
      author: 'Amanda Foster, Parent Coach',
      category: 'Work-Life Balance',
      importance: 'medium'
    },
    {
      id: 'preparation-tip-1',
      tip: 'Prepare freezer meals and organize help for the first 2-3 weeks. You\'ll be too exhausted to cook or clean regularly.',
      author: 'Rebecca Thompson, Postpartum Doula',
      category: 'Birth Preparation',
      importance: 'high'
    },
    {
      id: 'childcare-tip-1',
      tip: 'Start researching childcare options by your second trimester. Quality providers often have 6-12 month waitlists.',
      author: 'David Park, Childcare Center Director',
      category: 'Childcare Planning',
      importance: 'high'
    },
    {
      id: 'development-tip-1',
      tip: 'Tummy time starting from day one (when baby is awake and supervised) is crucial for neck strength and motor development.',
      author: 'Maria Gonzalez, Pediatric Physical Therapist',
      category: 'Development',
      importance: 'medium'
    }
  ]
};

export const templates: GuidanceTemplate[] = [
  weddingTemplate,
  homeBuyingTemplate,
  jobSearchTemplate,
  babyPlanningTemplate,
  // Future templates generated by AI using the same structure
];