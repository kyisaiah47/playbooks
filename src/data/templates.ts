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

export const businessLaunchTemplate: GuidanceTemplate = {
  id: 'business-launch',
  title: 'Business Launch Strategy',
  description: 'Complete framework for launching a successful business from idea validation to first customers',
  category: 'career-business',
  icon: '🚀',
  sections: [
    {
      id: 'business-validation',
      title: 'Business Idea Validation',
      description: 'Validate your business concept, assess market demand, and refine your value proposition',
      order: 1,
      reflectionPrompts: [
        {
          id: 'problem-identification',
          prompt: "What specific problem does your business solve, and how painful is this problem for your target customers?",
          category: 'planning',
          helpText: 'Define the core problem clearly. Talk to potential customers to understand pain points, current solutions they use, and willingness to pay.',
          relatedResources: ['market-research-guide', 'customer-validation-strategies']
        },
        {
          id: 'market-size-analysis',
          prompt: 'What is the size of your target market and how will you reach these customers?',
          category: 'research',
          helpText: 'Calculate Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM). Research customer acquisition channels.'
        },
        {
          id: 'competitive-analysis',
          prompt: 'Who are your direct and indirect competitors, and what makes your solution unique?',
          category: 'research',
          helpText: 'Identify 5-10 competitors, analyze their strengths/weaknesses, pricing, and market positioning. Define your unique value proposition clearly.'
        },
        {
          id: 'value-proposition-testing',
          prompt: 'How will you test your value proposition with real potential customers before building your product?',
          category: 'planning',
          helpText: 'Create landing pages, surveys, interviews, or MVP tests. Aim for at least 100 data points before making major decisions.'
        },
        {
          id: 'business-model-design',
          prompt: 'What business model will generate revenue, and how will you price your product or service?',
          category: 'planning',
          helpText: 'Consider subscription, one-time payment, freemium, marketplace, or service models. Research competitor pricing and customer willingness to pay.'
        },
        {
          id: 'success-metrics-definition',
          prompt: 'What key metrics will indicate your business is succeeding, and how will you track them?',
          category: 'planning',
          helpText: 'Define 3-5 key metrics like customer acquisition cost, lifetime value, monthly recurring revenue, or conversion rates. Set up tracking early.'
        }
      ]
    },
    {
      id: 'legal-structure',
      title: 'Legal Structure & Compliance',
      description: 'Establish proper legal foundation, handle registrations, and ensure regulatory compliance',
      order: 2,
      reflectionPrompts: [
        {
          id: 'business-structure-selection',
          prompt: "What business structure (LLC, Corporation, Partnership) best fits your needs and goals?",
          category: 'planning',
          helpText: 'Consider liability protection, tax implications, funding needs, and growth plans. Consult with attorney or accountant for complex situations.',
          relatedResources: ['business-structure-guide', 'legal-compliance-checklist']
        },
        {
          id: 'business-registration',
          prompt: 'What business name will you use, and how will you register it with appropriate authorities?',
          category: 'planning',
          helpText: 'Check name availability with state, register with Secretary of State, get EIN from IRS, and consider trademark protection.'
        },
        {
          id: 'licensing-permits',
          prompt: 'What licenses, permits, or certifications does your business need to operate legally?',
          category: 'planning',
          helpText: 'Research federal, state, and local requirements. Common needs include business license, sales tax permit, professional licenses, health permits.'
        },
        {
          id: 'intellectual-property-protection',
          prompt: 'How will you protect your intellectual property (trademarks, copyrights, patents, trade secrets)?',
          category: 'consideration',
          helpText: 'Identify protectable assets, file appropriate applications, create IP policies, and consider confidentiality agreements.'
        },
        {
          id: 'contracts-agreements',
          prompt: 'What contracts and legal agreements do you need (customer terms, vendor agreements, employment contracts)?',
          category: 'planning',
          helpText: 'Draft terms of service, privacy policy, customer contracts, vendor agreements, and employment/contractor agreements. Get legal review.'
        },
        {
          id: 'insurance-risk-management',
          prompt: 'What insurance coverage and risk management strategies does your business need?',
          category: 'planning',
          helpText: 'Consider general liability, professional liability, cyber liability, workers compensation, and industry-specific insurance needs.'
        }
      ]
    },
    {
      id: 'financial-planning',
      title: 'Financial Planning & Funding',
      description: 'Create financial projections, determine funding needs, and establish accounting systems',
      order: 3,
      reflectionPrompts: [
        {
          id: 'startup-costs-calculation',
          prompt: "What are your one-time startup costs and ongoing monthly expenses for the first year?",
          category: 'planning',
          helpText: 'Include equipment, inventory, legal fees, marketing, rent, salaries, and 6-month operating expense buffer. Be conservative.',
          relatedResources: ['business-financial-planning', 'startup-funding-options']
        },
        {
          id: 'revenue-projections',
          prompt: 'What are your realistic revenue projections for the first 12-24 months?',
          category: 'planning',
          helpText: 'Base projections on market research, not wishful thinking. Create conservative, realistic, and optimistic scenarios.'
        },
        {
          id: 'funding-strategy',
          prompt: 'How will you fund your business (personal savings, loans, investors, grants, revenue)?',
          category: 'planning',
          helpText: 'Consider bootstrapping, friends/family, bank loans, SBA loans, angel investors, VCs, crowdfunding, or grants based on your needs.'
        },
        {
          id: 'accounting-system-setup',
          prompt: 'What accounting system and financial processes will you implement from day one?',
          category: 'planning',
          helpText: 'Choose accounting software (QuickBooks, Xero, FreshBooks), set up chart of accounts, establish invoicing and expense tracking processes.'
        },
        {
          id: 'pricing-strategy',
          prompt: 'How will you price your products or services to ensure profitability and competitiveness?',
          category: 'planning',
          helpText: 'Calculate cost of goods sold, desired profit margins, competitor pricing, and customer value perception. Test different price points.'
        },
        {
          id: 'financial-controls',
          prompt: 'What financial controls and reporting will you implement to monitor business health?',
          category: 'planning',
          helpText: 'Set up monthly P&L reviews, cash flow forecasting, budget vs actual tracking, and key performance indicator dashboards.'
        }
      ]
    },
    {
      id: 'brand-marketing',
      title: 'Brand Development & Marketing',
      description: 'Build your brand identity, create marketing strategy, and establish online presence',
      order: 4,
      reflectionPrompts: [
        {
          id: 'brand-identity-creation',
          prompt: "What is your brand's personality, values, and visual identity that will resonate with your target audience?",
          category: 'planning',
          helpText: 'Define brand voice, mission, values, and visual elements (logo, colors, fonts). Ensure consistency across all touchpoints.',
          relatedResources: ['brand-development-guide', 'digital-marketing-strategy']
        },
        {
          id: 'target-customer-definition',
          prompt: 'Who is your ideal customer, and what are their demographics, psychographics, and buying behaviors?',
          category: 'research',
          helpText: 'Create detailed buyer personas including age, income, interests, pain points, media consumption, and decision-making process.'
        },
        {
          id: 'marketing-channel-strategy',
          prompt: 'Which marketing channels will you use to reach and acquire customers most effectively?',
          category: 'planning',
          helpText: 'Consider content marketing, social media, SEO, paid ads, email marketing, partnerships, events, PR based on where your customers are.'
        },
        {
          id: 'website-digital-presence',
          prompt: 'What website and digital presence do you need to establish credibility and generate leads?',
          category: 'planning',
          helpText: 'Plan website structure, content, SEO strategy, social media profiles, Google Business listing, and online review management.'
        },
        {
          id: 'content-marketing-plan',
          prompt: 'What content will you create to attract, engage, and convert your target audience?',
          category: 'planning',
          helpText: 'Plan blog posts, videos, podcasts, social content, email newsletters, lead magnets, and case studies that provide value.'
        },
        {
          id: 'marketing-budget-allocation',
          prompt: 'How will you allocate your marketing budget across different channels and campaigns?',
          category: 'planning',
          helpText: 'Typical startups spend 7-12% of revenue on marketing. Start with lower-cost channels, measure ROI, then scale what works.'
        }
      ]
    },
    {
      id: 'operations-systems',
      title: 'Operations & Systems Setup',
      description: 'Build operational processes, implement systems, and prepare for scaling',
      order: 5,
      reflectionPrompts: [
        {
          id: 'core-processes-design',
          prompt: "What are your core business processes, and how will you document and systematize them?",
          category: 'planning',
          helpText: 'Map out customer journey, sales process, service delivery, quality control, and support processes. Create SOPs for consistency.',
          relatedResources: ['business-operations-guide', 'productivity-tools-comparison']
        },
        {
          id: 'technology-stack-selection',
          prompt: 'What technology tools and systems do you need for operations, sales, marketing, and customer management?',
          category: 'planning',
          helpText: 'Choose CRM, project management, communication, accounting, marketing automation, and industry-specific tools. Start simple.'
        },
        {
          id: 'supplier-vendor-relationships',
          prompt: 'What suppliers, vendors, or partners do you need, and how will you manage these relationships?',
          category: 'planning',
          helpText: 'Identify key suppliers, negotiate terms, establish backup options, create vendor management processes, and build strategic partnerships.'
        },
        {
          id: 'quality-control-standards',
          prompt: 'How will you ensure consistent quality in your products or services?',
          category: 'planning',
          helpText: 'Define quality standards, create checklists, implement review processes, gather customer feedback, and continuously improve.'
        },
        {
          id: 'customer-service-strategy',
          prompt: 'What customer service and support systems will you implement to exceed customer expectations?',
          category: 'planning',
          helpText: 'Plan support channels (phone, email, chat), response time goals, knowledge base, FAQ, and customer success processes.'
        },
        {
          id: 'scaling-preparation',
          prompt: 'How will you prepare your operations to handle growth and increased demand?',
          category: 'consideration',
          helpText: 'Identify bottlenecks, plan for hiring, consider automation opportunities, and design scalable processes and systems.'
        }
      ]
    },
    {
      id: 'launch-growth',
      title: 'Launch Strategy & Growth Planning',
      description: 'Plan your launch, acquire first customers, and establish growth systems',
      order: 6,
      reflectionPrompts: [
        {
          id: 'launch-timeline-planning',
          prompt: "What is your launch timeline, and what key milestones must be completed before going live?",
          category: 'planning',
          helpText: 'Create detailed launch plan with legal, financial, marketing, operational, and product readiness checkpoints.',
          relatedResources: ['business-launch-checklist', 'customer-acquisition-strategies']
        },
        {
          id: 'initial-customer-acquisition',
          prompt: 'How will you acquire your first 10, 100, and 1000 customers?',
          category: 'planning',
          helpText: 'Start with warm network, referral programs, content marketing, partnerships, and direct outreach. Focus on customer success.'
        },
        {
          id: 'feedback-iteration-system',
          prompt: 'How will you collect customer feedback and iterate on your product or service offering?',
          category: 'planning',
          helpText: 'Set up feedback collection systems, regular customer interviews, NPS surveys, and rapid iteration processes.'
        },
        {
          id: 'performance-monitoring',
          prompt: 'What metrics will you track daily, weekly, and monthly to measure business performance?',
          category: 'planning',
          helpText: 'Track revenue, customer acquisition cost, lifetime value, churn rate, conversion rates, and operational efficiency metrics.'
        },
        {
          id: 'growth-strategy-development',
          prompt: 'What growth strategies will you implement once you validate product-market fit?',
          category: 'planning',
          helpText: 'Plan for scaling marketing channels, expanding product lines, entering new markets, building partnerships, or geographic expansion.'
        },
        {
          id: 'contingency-planning',
          prompt: 'What contingency plans do you have for different scenarios (slow growth, rapid growth, market changes)?',
          category: 'consideration',
          helpText: 'Plan for cash flow issues, competitive threats, economic downturns, rapid scaling needs, and pivot scenarios.'
        }
      ]
    }
  ],
  resources: [],
  expertTips: [
    {
      id: 'validation-tip-1',
      tip: 'Talk to at least 100 potential customers before building your product. Most business failures stem from building something nobody wants.',
      author: 'Steve Blank, Serial Entrepreneur & Author',
      category: 'Market Validation',
      importance: 'high'
    },
    {
      id: 'mvp-tip-1',
      tip: 'Start with a minimum viable product (MVP) that solves one core problem extremely well. You can always add features later.',
      author: 'Eric Ries, Author of "The Lean Startup"',
      category: 'Product Development',
      importance: 'high'
    },
    {
      id: 'cash-flow-tip-1',
      tip: 'Cash flow is king. Monitor it weekly and always maintain 6+ months of operating expenses in reserve.',
      author: 'Sarah Chen, Small Business Finance Expert',
      category: 'Financial Management',
      importance: 'high'
    },
    {
      id: 'marketing-tip-1',
      tip: 'Focus on one marketing channel at a time until you master it, then expand. Scattered efforts yield mediocre results.',
      author: 'Gabriel Weinberg, Author of "Traction"',
      category: 'Marketing',
      importance: 'high'
    },
    {
      id: 'hiring-tip-1',
      tip: 'Hire slowly and fire quickly. One bad hire can destroy culture and productivity in a small business.',
      author: 'Jennifer Martinez, HR Consultant',
      category: 'Team Building',
      importance: 'medium'
    },
    {
      id: 'systems-tip-1',
      tip: 'Document everything from day one. What seems obvious to you now won\'t be when you\'re busy or hiring help.',
      author: 'Michael Gerber, Author of "The E-Myth"',
      category: 'Operations',
      importance: 'high'
    },
    {
      id: 'customer-tip-1',
      tip: 'Obsess over customer success, not just customer acquisition. Happy customers become your best sales force.',
      author: 'Brian Chesky, CEO of Airbnb',
      category: 'Customer Success',
      importance: 'high'
    },
    {
      id: 'pivot-tip-1',
      tip: 'Be willing to pivot when data shows your initial assumptions were wrong. Persistence is good, but stubbornness kills businesses.',
      author: 'Reid Hoffman, Founder of LinkedIn',
      category: 'Strategy',
      importance: 'medium'
    }
  ]
};

export const fitnessJourneyTemplate: GuidanceTemplate = {
  id: 'fitness-journey',
  title: 'Fitness Journey & Transformation',
  description: 'Complete guidance for achieving your fitness goals with structured workouts, nutrition planning, and progress tracking',
  category: 'health-wellness',
  icon: '💪',
  sections: [
    {
      id: 'goal-assessment',
      title: 'Goal Setting & Assessment',
      description: 'Define your fitness goals and assess your current state',
      order: 1,
      reflectionPrompts: [
        {
          id: 'primary-goal',
          prompt: "What is your main fitness goal? (Weight loss, muscle gain, strength, endurance, general health)",
          category: 'goal-setting',
          helpText: 'Be specific. Instead of "get fit," try "lose 20 pounds" or "bench press my body weight"',
          relatedResources: ['smart-fitness-goals', 'goal-setting-framework']
        },
        {
          id: 'motivation-why',
          prompt: 'Why is this fitness goal important to you? What will achieving it mean for your life?',
          category: 'motivation',
          helpText: 'Connect to deeper motivations: health, confidence, energy, longevity, setting an example'
        },
        {
          id: 'current-fitness-level',
          prompt: 'How would you honestly assess your current fitness level and activity habits?',
          category: 'assessment',
          helpText: 'Be honest about your starting point. This helps create a realistic plan.'
        },
        {
          id: 'past-attempts',
          prompt: 'What fitness programs have you tried before? What worked and what didn\'t?',
          category: 'reflection',
          helpText: 'Learn from past experiences to avoid repeating unsuccessful patterns'
        },
        {
          id: 'time-commitment',
          prompt: 'How much time can you realistically commit to exercise each week?',
          category: 'planning',
          helpText: 'Be realistic. 3-4 hours per week consistently beats 10 hours for two weeks then nothing'
        },
        {
          id: 'obstacles-barriers',
          prompt: 'What are your biggest barriers to staying consistent with fitness?',
          category: 'challenge',
          helpText: 'Common barriers: time, motivation, knowledge, access to gym, injury concerns'
        }
      ]
    },
    {
      id: 'nutrition-planning',
      title: 'Nutrition & Diet Strategy',
      description: 'Plan your nutrition to support your fitness goals',
      order: 2,
      reflectionPrompts: [
        {
          id: 'current-diet',
          prompt: 'Describe your current eating habits. What does a typical day of meals look like?',
          category: 'assessment',
          helpText: 'Track for 3-5 days to get an accurate picture of your baseline'
        },
        {
          id: 'nutrition-knowledge',
          prompt: 'How confident are you in your nutrition knowledge? What areas confuse you most?',
          category: 'assessment',
          helpText: 'Common confusing areas: calories, macros, supplements, meal timing'
        },
        {
          id: 'diet-preferences',
          prompt: 'Do you have any dietary restrictions, allergies, or strong food preferences?',
          category: 'planning',
          helpText: 'Account for vegetarian, vegan, gluten-free, cultural preferences, dislikes'
        },
        {
          id: 'meal-prep-capacity',
          prompt: 'How much time and effort can you realistically put into meal planning and prep?',
          category: 'logistics',
          helpText: 'Consider your cooking skills, kitchen setup, and time availability'
        },
        {
          id: 'social-eating',
          prompt: 'How do social situations, work events, and family meals impact your eating habits?',
          category: 'challenge',
          helpText: 'Plan strategies for restaurants, parties, work lunches, family dinners'
        },
        {
          id: 'hydration-habits',
          prompt: 'How much water do you typically drink per day? Do you consume alcohol regularly?',
          category: 'habits',
          helpText: 'Hydration affects performance and recovery. Consider alcohol\'s impact on goals'
        }
      ]
    },
    {
      id: 'workout-planning',
      title: 'Workout & Exercise Design',
      description: 'Create a sustainable and effective workout routine',
      order: 3,
      reflectionPrompts: [
        {
          id: 'exercise-preferences',
          prompt: 'What types of physical activity do you actually enjoy or find interesting?',
          category: 'preference',
          helpText: 'You\'re more likely to stick with activities you enjoy: dancing, hiking, sports, lifting'
        },
        {
          id: 'gym-access',
          prompt: 'What equipment and facilities do you have access to? (Home gym, commercial gym, outdoors)',
          category: 'logistics',
          helpText: 'Design your program around what you can consistently access'
        },
        {
          id: 'schedule-constraints',
          prompt: 'When during the day/week do you have the most energy and availability for workouts?',
          category: 'scheduling',
          helpText: 'Morning, lunch, evening? Weekdays vs weekends? Plan around your natural rhythms'
        },
        {
          id: 'injury-concerns',
          prompt: 'Do you have any current injuries, past injuries, or physical limitations to consider?',
          category: 'safety',
          helpText: 'Be honest about physical limitations. Consult professionals for serious concerns'
        },
        {
          id: 'workout-style',
          prompt: 'Do you prefer structured programs, group classes, personal training, or self-directed workouts?',
          category: 'preference',
          helpText: 'Consider your personality: need accountability vs. prefer flexibility'
        },
        {
          id: 'progressive-overload',
          prompt: 'How will you track progress and gradually increase workout difficulty over time?',
          category: 'progression',
          helpText: 'Progressive overload is key: more weight, reps, time, or difficulty each week'
        }
      ]
    },
    {
      id: 'tracking-progress',
      title: 'Progress Tracking & Measurement',
      description: 'Monitor your progress and stay motivated',
      order: 4,
      reflectionPrompts: [
        {
          id: 'measurement-methods',
          prompt: 'How will you track your progress? (Weight, measurements, photos, performance metrics)',
          category: 'tracking',
          helpText: 'Use multiple metrics. The scale can lie due to water retention and muscle gain'
        },
        {
          id: 'tracking-frequency',
          prompt: 'How often will you weigh yourself, take measurements, or assess progress?',
          category: 'scheduling',
          helpText: 'Daily weigh-ins can be motivating or discouraging. Weekly may be more sustainable'
        },
        {
          id: 'progress-photos',
          prompt: 'Are you comfortable taking progress photos? How will you ensure consistency?',
          category: 'documentation',
          helpText: 'Same clothing, lighting, poses, and angles. Photos often show changes scales don\'t'
        },
        {
          id: 'performance-metrics',
          prompt: 'What fitness performance goals can you track? (strength, endurance, flexibility)',
          category: 'measurement',
          helpText: 'Track gym performance, run times, flexibility improvements, energy levels'
        },
        {
          id: 'motivation-maintenance',
          prompt: 'How will you stay motivated during plateaus or when progress slows down?',
          category: 'psychology',
          helpText: 'Plateaus are normal. Focus on non-scale victories and process goals'
        },
        {
          id: 'accountability-system',
          prompt: 'Who will help keep you accountable? How will you build support systems?',
          category: 'support',
          helpText: 'Workout buddy, trainer, online community, family support, progress sharing'
        }
      ]
    },
    {
      id: 'lifestyle-integration',
      title: 'Lifestyle Integration & Habits',
      description: 'Build sustainable habits that support your fitness journey',
      order: 5,
      reflectionPrompts: [
        {
          id: 'habit-stacking',
          prompt: 'What existing daily habits can you attach new fitness habits to?',
          category: 'habit-formation',
          helpText: 'Stack new habits onto established ones: workout after coffee, protein shake after shower'
        },
        {
          id: 'sleep-recovery',
          prompt: 'How many hours of sleep do you get? How will you prioritize recovery?',
          category: 'recovery',
          helpText: '7-9 hours sleep is crucial for fitness progress. Plan rest days and active recovery'
        },
        {
          id: 'stress-management',
          prompt: 'How does stress affect your eating and exercise habits? What are your stress management strategies?',
          category: 'wellness',
          helpText: 'High stress can sabotage fitness goals through cortisol and emotional eating'
        },
        {
          id: 'social-support',
          prompt: 'How will your family and friends react to your lifestyle changes? Who will support you?',
          category: 'relationships',
          helpText: 'Some may resist your changes. Communicate your goals and find supportive people'
        },
        {
          id: 'setback-recovery',
          prompt: 'When you inevitably have bad days or weeks, how will you get back on track?',
          category: 'resilience',
          helpText: 'Plan for setbacks: illness, vacation, work stress. One bad day doesn\'t ruin everything'
        },
        {
          id: 'long-term-vision',
          prompt: 'What does your ideal healthy lifestyle look like in 1-2 years? How will you maintain results?',
          category: 'sustainability',
          helpText: 'Focus on lifestyle changes, not temporary diets. Build habits you can maintain long-term'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'smart-fitness-goals',
      title: 'SMART Fitness Goal Setting Framework',
      type: 'guide',
      excerpt: 'Learn to set Specific, Measurable, Achievable, Relevant, Time-bound fitness goals',
      content: 'SMART goals turn vague fitness wishes into actionable plans...',
      tags: ['goal-setting', 'planning'],
      readTime: '5 min',
      difficulty: 'beginner'
    },
    {
      id: 'beginner-workout-routines',
      title: 'Beginner-Friendly Workout Routines',
      type: 'tool',
      excerpt: 'Simple, effective workout plans for fitness beginners',
      content: 'Starting your fitness journey can be overwhelming...',
      tags: ['workouts', 'beginner', 'routines'],
      readTime: '10 min',
      difficulty: 'beginner'
    },
    {
      id: 'nutrition-basics',
      title: 'Nutrition Fundamentals for Fitness',
      type: 'guide',
      excerpt: 'Essential nutrition knowledge to support your fitness goals',
      content: 'Understanding basic nutrition principles is crucial...',
      tags: ['nutrition', 'diet', 'health'],
      readTime: '15 min',
      difficulty: 'beginner'
    },
    {
      id: 'progress-tracking-methods',
      title: 'Effective Ways to Track Fitness Progress',
      type: 'guide',
      excerpt: 'Beyond the scale: multiple methods to monitor your fitness journey',
      content: 'The scale tells only part of the story...',
      tags: ['tracking', 'progress', 'measurement'],
      readTime: '8 min',
      difficulty: 'beginner'
    },
    {
      id: 'meal-prep-basics',
      title: 'Meal Prep for Fitness Success',
      type: 'tool',
      excerpt: 'Simple meal prep strategies to support your fitness goals',
      content: 'Meal preparation is one of the most powerful tools...',
      tags: ['meal-prep', 'nutrition', 'planning'],
      readTime: '12 min',
      difficulty: 'intermediate'
    },
    {
      id: 'workout-troubleshooting',
      title: 'Common Workout Problems & Solutions',
      type: 'guide',
      excerpt: 'Overcome plateaus, injuries, and motivation issues',
      content: 'Every fitness journey has challenges...',
      tags: ['troubleshooting', 'problems', 'solutions'],
      readTime: '10 min',
      difficulty: 'intermediate'
    }
  ]
};

export const collegePlanningTemplate: GuidanceTemplate = {
  id: 'college-planning',
  title: 'College Planning & Admissions Guide',
  description: 'Navigate the college admissions process with application tracking, essay guidance, and financial aid planning',
  category: 'education',
  icon: '🎓',
  sections: [
    {
      id: 'college-selection',
      title: 'College Research & Selection',
      description: 'Research and narrow down your college choices',
      order: 1,
      reflectionPrompts: [
        {
          id: 'career-goals',
          prompt: "What career field or major are you most interested in pursuing?",
          category: 'goal-setting',
          helpText: 'Consider your interests, strengths, and potential earning capacity. It\'s okay to be undecided!',
          relatedResources: ['career-exploration-guide', 'major-selection-tips']
        },
        {
          id: 'college-preferences',
          prompt: 'What size school, location, and campus culture appeals to you most?',
          category: 'preferences',
          helpText: 'Think about urban vs rural, large vs small, Greek life, sports culture, academic intensity'
        },
        {
          id: 'academic-fit',
          prompt: 'What are your current GPA, test scores, and how do they compare to your target schools?',
          category: 'assessment',
          helpText: 'Be realistic about your academic profile. Consider reach, match, and safety schools'
        },
        {
          id: 'financial-constraints',
          prompt: 'What can your family realistically afford for college expenses?',
          category: 'financial',
          helpText: 'Consider tuition, room & board, books, personal expenses. Don\'t forget about student loans'
        },
        {
          id: 'school-list',
          prompt: 'Which 8-12 schools will you apply to? How do they fit your reach/match/safety strategy?',
          category: 'planning',
          helpText: 'Apply to 2-4 reach schools, 4-6 match schools, 2-4 safety schools you\'d actually attend'
        }
      ]
    },
    {
      id: 'application-strategy',
      title: 'Application Planning & Timeline',
      description: 'Organize your application process and deadlines',
      order: 2,
      reflectionPrompts: [
        {
          id: 'application-timeline',
          prompt: 'What are all the key deadlines for each school you\'re applying to?',
          category: 'planning',
          helpText: 'Early Decision, Early Action, Regular Decision, scholarship deadlines, FAFSA deadlines'
        },
        {
          id: 'testing-plan',
          prompt: 'When will you take/retake the SAT, ACT, or subject tests?',
          category: 'preparation',
          helpText: 'Plan test dates to allow for retakes. Some schools require subject tests or don\'t accept certain tests'
        },
        {
          id: 'recommendation-letters',
          prompt: 'Which teachers, counselors, or mentors will write your recommendation letters?',
          category: 'relationships',
          helpText: 'Ask teachers who know you well from core academic subjects. Give them plenty of notice'
        },
        {
          id: 'extracurricular-story',
          prompt: 'What activities, leadership roles, or experiences best show who you are?',
          category: 'storytelling',
          helpText: 'Quality over quantity. Show depth, leadership, and impact rather than just participation'
        },
        {
          id: 'application-themes',
          prompt: 'What makes you unique? What themes will connect all parts of your application?',
          category: 'branding',
          helpText: 'Your essays, activities, and recommendations should tell a coherent story about who you are'
        }
      ]
    },
    {
      id: 'essay-writing',
      title: 'Essay Writing & Personal Statement',
      description: 'Craft compelling essays that showcase your personality',
      order: 3,
      reflectionPrompts: [
        {
          id: 'personal-story',
          prompt: 'What experiences have shaped who you are and how you see the world?',
          category: 'reflection',
          helpText: 'Think about challenges overcome, values learned, moments of growth or realization'
        },
        {
          id: 'essay-topics',
          prompt: 'What specific stories or experiences will you write about in your essays?',
          category: 'content',
          helpText: 'Avoid generic topics. Choose stories that only you could tell, showing character and growth'
        },
        {
          id: 'writing-process',
          prompt: 'What\'s your timeline for brainstorming, drafting, and revising your essays?',
          category: 'process',
          helpText: 'Start early! Plan multiple drafts and get feedback from teachers, counselors, and family'
        },
        {
          id: 'supplemental-essays',
          prompt: 'How will you tailor supplemental essays to show genuine interest in each school?',
          category: 'customization',
          helpText: 'Research each school thoroughly. Show specific knowledge about programs, professors, opportunities'
        },
        {
          id: 'editing-feedback',
          prompt: 'Who will help you edit and provide feedback on your essays?',
          category: 'support',
          helpText: 'Get feedback from multiple sources: English teachers, counselors, parents, older students'
        }
      ]
    },
    {
      id: 'financial-aid',
      title: 'Financial Aid & Scholarships',
      description: 'Navigate financial aid applications and scholarship opportunities',
      order: 4,
      reflectionPrompts: [
        {
          id: 'fafsa-preparation',
          prompt: 'When will you complete the FAFSA? What financial documents do you need?',
          category: 'paperwork',
          helpText: 'File FAFSA as early as possible. Gather tax returns, bank statements, investment records'
        },
        {
          id: 'scholarship-search',
          prompt: 'What local, national, and school-specific scholarships will you apply for?',
          category: 'opportunities',
          helpText: 'Start with local scholarships (less competition), then expand to national ones'
        },
        {
          id: 'merit-aid-strategy',
          prompt: 'Which schools are likely to offer you merit aid based on your academic profile?',
          category: 'strategy',
          helpText: 'Schools where you\'re in the top 25% of applicants are more likely to offer merit aid'
        },
        {
          id: 'work-study-plans',
          prompt: 'Are you open to work-study programs, part-time jobs, or summer employment?',
          category: 'earning',
          helpText: 'Consider your ability to balance work and academics. Some students thrive with structure'
        },
        {
          id: 'loan-understanding',
          prompt: 'Do you understand the difference between federal and private student loans?',
          category: 'debt',
          helpText: 'Federal loans usually have better terms. Understand interest rates and repayment options'
        }
      ]
    },
    {
      id: 'final-decisions',
      title: 'Final Decision & Preparation',
      description: 'Make your final college choice and prepare for transition',
      order: 5,
      reflectionPrompts: [
        {
          id: 'acceptance-comparison',
          prompt: 'How will you compare acceptances, financial aid packages, and final costs?',
          category: 'decision-making',
          helpText: 'Create a spreadsheet comparing total costs, aid packages, and program quality'
        },
        {
          id: 'campus-visits',
          prompt: 'Which schools will you visit (or virtually explore) before making your final decision?',
          category: 'evaluation',
          helpText: 'Visit your top choices if possible. Attend admitted student days and talk to current students'
        },
        {
          id: 'gap-year-consideration',
          prompt: 'Have you considered taking a gap year? What would you do during that time?',
          category: 'alternatives',
          helpText: 'Gap years can be valuable for work experience, travel, volunteering, or personal growth'
        },
        {
          id: 'transition-preparation',
          prompt: 'How will you prepare for the academic and social transition to college?',
          category: 'preparation',
          helpText: 'Consider summer programs, reading lists, study skills development, time management'
        },
        {
          id: 'family-communication',
          prompt: 'How will you communicate with your family about expectations and support during college?',
          category: 'relationships',
          helpText: 'Discuss homesickness, frequency of contact, academic pressure, and independence expectations'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'college-search-guide',
      title: 'Complete College Search Strategy',
      type: 'guide',
      excerpt: 'Step-by-step approach to researching and selecting colleges',
      content: 'Finding the right college fit requires systematic research...',
      tags: ['college-search', 'research', 'planning'],
      readTime: '12 min',
      difficulty: 'beginner'
    },
    {
      id: 'essay-writing-tips',
      title: 'College Essay Writing Masterclass',
      type: 'guide',
      excerpt: 'Write compelling personal statements and supplemental essays',
      content: 'Great college essays show, don\'t tell...',
      tags: ['essays', 'writing', 'personal-statement'],
      readTime: '15 min',
      difficulty: 'intermediate'
    },
    {
      id: 'financial-aid-guide',
      title: 'Financial Aid & Scholarship Guide',
      type: 'tool',
      excerpt: 'Navigate FAFSA, scholarships, and financial aid options',
      content: 'Understanding financial aid can save tens of thousands...',
      tags: ['financial-aid', 'scholarships', 'fafsa'],
      readTime: '10 min',
      difficulty: 'beginner'
    },
    {
      id: 'application-timeline',
      title: 'College Application Timeline & Checklist',
      type: 'checklist',
      excerpt: 'Month-by-month timeline for junior and senior year',
      content: 'Stay organized with this comprehensive timeline...',
      tags: ['timeline', 'deadlines', 'organization'],
      readTime: '8 min',
      difficulty: 'beginner'
    },
    {
      id: 'interview-preparation',
      title: 'College Interview Preparation Guide',
      type: 'guide',
      excerpt: 'Prepare for alumni and admissions interviews',
      content: 'College interviews are opportunities to show personality...',
      tags: ['interviews', 'preparation', 'communication'],
      readTime: '10 min',
      difficulty: 'intermediate'
    }
  ]
};

export const budgetPlanningTemplate: GuidanceTemplate = {
  id: 'budget-planning',
  title: 'Budget Planning & Financial Management',
  description: 'Master your finances with comprehensive budgeting, debt management, and savings strategies',
  category: 'finance',
  icon: '💰',
  sections: [
    {
      id: 'financial-assessment',
      title: 'Financial Assessment & Goals',
      description: 'Understand your current financial situation and set clear goals',
      order: 1,
      reflectionPrompts: [
        {
          id: 'income-sources',
          prompt: "What are all your sources of income? Include salary, freelance, investments, side hustles.",
          category: 'assessment',
          helpText: 'Be comprehensive - even small income sources matter for accurate budgeting'
        },
        {
          id: 'monthly-expenses',
          prompt: 'List all your monthly expenses: fixed (rent, insurance) and variable (groceries, entertainment).',
          category: 'assessment',
          helpText: 'Track expenses for 2-3 months to get accurate averages for variable costs'
        },
        {
          id: 'debt-inventory',
          prompt: 'What debts do you have? Include balances, minimum payments, and interest rates.',
          category: 'debt',
          helpText: 'Credit cards, student loans, car loans, mortgage - list everything with details'
        },
        {
          id: 'financial-goals',
          prompt: 'What are your short-term (1 year) and long-term (5+ years) financial goals?',
          category: 'goals',
          helpText: 'Emergency fund, debt payoff, home down payment, retirement, vacation, etc.'
        },
        {
          id: 'money-mindset',
          prompt: 'What beliefs and emotions do you have about money? Any financial fears or bad habits?',
          category: 'psychology',
          helpText: 'Understanding your relationship with money is crucial for lasting change'
        }
      ]
    },
    {
      id: 'budget-creation',
      title: 'Budget Creation & Allocation',
      description: 'Build a realistic budget that aligns with your goals and lifestyle',
      order: 2,
      reflectionPrompts: [
        {
          id: 'budgeting-method',
          prompt: 'Which budgeting method appeals to you: 50/30/20 rule, zero-based, envelope method?',
          category: 'method',
          helpText: '50/30/20: needs/wants/savings. Zero-based: every dollar assigned. Envelope: cash for categories'
        },
        {
          id: 'fixed-expenses',
          prompt: 'What are your non-negotiable fixed expenses that must be paid each month?',
          category: 'essentials',
          helpText: 'Rent/mortgage, insurance, minimum debt payments, utilities, phone, etc.'
        },
        {
          id: 'variable-priorities',
          prompt: 'How do you prioritize variable expenses? What matters most to your happiness and goals?',
          category: 'priorities',
          helpText: 'Food quality, entertainment, hobbies, social activities - what brings you joy?'
        },
        {
          id: 'savings-allocation',
          prompt: 'How much can you realistically save each month? What percentage of income?',
          category: 'savings',
          helpText: 'Start with what\'s achievable (even 5%) rather than an unrealistic high amount'
        },
        {
          id: 'buffer-planning',
          prompt: 'How will you handle months with unexpected expenses or income fluctuations?',
          category: 'flexibility',
          helpText: 'Build in buffers, plan for irregular expenses like car repairs or medical bills'
        }
      ]
    },
    {
      id: 'debt-management',
      title: 'Debt Elimination Strategy',
      description: 'Create a plan to pay off debt systematically',
      order: 3,
      reflectionPrompts: [
        {
          id: 'debt-payoff-method',
          prompt: 'Will you use the debt snowball (smallest balance first) or avalanche (highest interest first) method?',
          category: 'strategy',
          helpText: 'Snowball provides psychological wins, avalanche saves more money mathematically'
        },
        {
          id: 'extra-payment-plan',
          prompt: 'How much extra can you put toward debt each month? Where will this money come from?',
          category: 'planning',
          helpText: 'Cut expenses, increase income, use windfalls like tax refunds or bonuses'
        }
      ]
    },
    {
      id: 'savings-investment',
      title: 'Savings & Investment Planning',
      description: 'Build wealth through systematic saving and investing',
      order: 4,
      reflectionPrompts: [
        {
          id: 'emergency-fund',
          prompt: 'How much do you need in your emergency fund? When will you prioritize building it?',
          category: 'safety-net',
          helpText: '3-6 months of expenses is standard. Start with $1000 as initial goal'
        },
        {
          id: 'retirement-planning',
          prompt: 'Are you contributing to retirement accounts? What\'s your retirement savings rate?',
          category: 'long-term',
          helpText: 'Aim for 10-15% of income. Take advantage of employer matching'
        }
      ]
    },
    {
      id: 'tracking-optimization',
      title: 'Tracking & Continuous Optimization',
      description: 'Monitor progress and optimize your financial system',
      order: 5,
      reflectionPrompts: [
        {
          id: 'expense-tracking',
          prompt: 'How will you track expenses? What tools or methods work best for you?',
          category: 'tracking',
          helpText: 'Apps, spreadsheets, cash envelopes, bank categories - find what you\'ll actually use'
        },
        {
          id: 'budget-reviews',
          prompt: 'When will you review and adjust your budget? What metrics will you track?',
          category: 'optimization',
          helpText: 'Monthly reviews, tracking savings rate, debt reduction progress, goal achievement'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'budgeting-methods-comparison',
      title: 'Popular Budgeting Methods Compared',
      type: 'guide',
      excerpt: 'Find the budgeting approach that fits your lifestyle and personality',
      content: 'Different budgeting methods work for different people...',
      tags: ['budgeting', 'methods', 'comparison'],
      readTime: '8 min',
      difficulty: 'beginner'
    },
    {
      id: 'debt-payoff-calculator',
      title: 'Debt Payoff Strategy Calculator',
      type: 'tool',
      excerpt: 'Compare debt snowball vs avalanche methods for your situation',
      content: 'Use this calculator to determine the best debt payoff strategy...',
      tags: ['debt', 'calculator', 'payoff'],
      readTime: '5 min',
      difficulty: 'beginner'
    },
    {
      id: 'emergency-fund-guide',
      title: 'Emergency Fund Building Guide',
      type: 'guide',
      excerpt: 'Step-by-step guide to building your financial safety net',
      content: 'An emergency fund is your first line of financial defense...',
      tags: ['emergency-fund', 'savings', 'financial-security'],
      readTime: '10 min',
      difficulty: 'beginner'
    },
    {
      id: 'investment-basics',
      title: 'Investment Basics for Beginners',
      type: 'guide',
      excerpt: 'Learn fundamental investing concepts and get started',
      content: 'Investing doesn\'t have to be complicated...',
      tags: ['investing', 'retirement', 'wealth-building'],
      readTime: '15 min',
      difficulty: 'intermediate'
    }
  ]
};

export const productivitySystemTemplate: GuidanceTemplate = {
  id: 'productivity-system',
  title: 'Productivity System & Time Management',
  description: 'Maximize your efficiency with proven productivity methods and time blocking strategies',
  category: 'productivity',
  icon: '⚡',
  sections: [
    {
      id: 'productivity-assessment',
      title: 'Productivity Assessment & Goals',
      description: 'Evaluate your current productivity and set improvement goals',
      order: 1,
      reflectionPrompts: [
        {
          id: 'current-challenges',
          prompt: "What are your biggest productivity challenges? Procrastination, distractions, overwhelm?",
          category: 'assessment',
          helpText: 'Be honest about what\'s not working in your current approach'
        },
        {
          id: 'time-wasters',
          prompt: 'Where do you lose the most time during your day? Social media, meetings, email?',
          category: 'analysis',
          helpText: 'Track your time for a week to identify patterns and time drains'
        },
        {
          id: 'productivity-goals',
          prompt: 'What specific productivity improvements do you want to achieve?',
          category: 'goals',
          helpText: 'More deep work hours, better work-life balance, less stress, completing projects faster'
        },
        {
          id: 'current-systems',
          prompt: 'What productivity tools and methods have you tried? What worked or didn\'t work?',
          category: 'experience',
          helpText: 'Learn from past attempts: GTD, Pomodoro, task apps, calendars, notebooks'
        },
        {
          id: 'work-style',
          prompt: 'When are you most focused and energetic? What\'s your natural work rhythm?',
          category: 'self-awareness',
          helpText: 'Morning person vs night owl, need for variety vs routine, solo vs collaborative work'
        }
      ]
    },
    {
      id: 'time-blocking-system',
      title: 'Time Blocking & Calendar Management',
      description: 'Master time blocking to protect your most important work',
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
          category: 'scheduling',
          helpText: 'Color-code different work types, batch similar tasks, protect morning energy'
        },
        {
          id: 'distraction-management',
          prompt: 'What strategies will you use to protect your focused work time?',
          category: 'focus',
          helpText: 'Phone on silent, door closed, notifications off, communication boundaries'
        },
        {
          id: 'energy-management',
          prompt: 'How will you schedule work based on your energy levels throughout the day?',
          category: 'optimization',
          helpText: 'High-energy work in peak hours, admin during low-energy times, breaks planned'
        },
        {
          id: 'buffer-time',
          prompt: 'How will you build buffers and flexibility into your schedule?',
          category: 'realistic-planning',
          helpText: 'Travel time between meetings, unexpected issues, overrunning tasks'
        }
      ]
    },
    {
      id: 'task-management',
      title: 'Task Capture & Organization',
      description: 'Build a trusted system to capture and organize all your commitments',
      order: 3,
      reflectionPrompts: [
        {
          id: 'capture-system',
          prompt: 'How will you capture all tasks, ideas, and commitments as they come up?',
          category: 'system',
          helpText: 'Notebook, phone app, voice recorder - needs to be always accessible and reliable'
        },
        {
          id: 'task-organization',
          prompt: 'How will you organize tasks: by project, priority, context, or due date?',
          category: 'structure',
          helpText: 'GTD contexts (@calls, @computer), priority matrices, project folders'
        },
        {
          id: 'review-schedule',
          prompt: 'When will you review and update your task lists? Daily, weekly?',
          category: 'maintenance',
          helpText: 'Daily planning sessions, weekly reviews, monthly goal check-ins'
        },
        {
          id: 'priority-system',
          prompt: 'How will you decide what to work on when you have multiple options?',
          category: 'decision-making',
          helpText: 'Eisenhower matrix, impact vs effort, deadline-driven, energy levels'
        },
        {
          id: 'completion-tracking',
          prompt: 'How will you track progress and celebrate completed tasks?',
          category: 'motivation',
          helpText: 'Checkboxes, progress bars, done lists, weekly accomplishment reviews'
        }
      ]
    },
    {
      id: 'focus-techniques',
      title: 'Focus & Deep Work Strategies',
      description: 'Develop techniques to maintain focus and enter flow states',
      order: 4,
      reflectionPrompts: [
        {
          id: 'focus-environment',
          prompt: 'What physical environment helps you focus best?',
          category: 'environment',
          helpText: 'Quiet vs background noise, organized vs messy, home vs office vs cafe'
        },
        {
          id: 'focus-rituals',
          prompt: 'What rituals or routines help you transition into focused work?',
          category: 'habits',
          helpText: 'Music, coffee, clearing desk, reviewing goals, meditation, exercise'
        },
        {
          id: 'pomodoro-adaptation',
          prompt: 'How will you use time-boxing techniques like Pomodoro? What durations work for you?',
          category: 'techniques',
          helpText: '25-min standard, 50-min for complex tasks, 90-min for deep work sessions'
        },
        {
          id: 'distraction-triggers',
          prompt: 'What typically breaks your focus? How will you minimize these triggers?',
          category: 'obstacles',
          helpText: 'Notifications, noise, hunger, boredom, anxiety, unclear next steps'
        },
        {
          id: 'flow-conditions',
          prompt: 'When do you experience flow states? How can you recreate those conditions?',
          category: 'optimization',
          helpText: 'Time of day, type of work, challenge level, clear goals, immediate feedback'
        }
      ]
    },
    {
      id: 'system-optimization',
      title: 'Continuous Improvement & Optimization',
      description: 'Regularly review and improve your productivity systems',
      order: 5,
      reflectionPrompts: [
        {
          id: 'weekly-reviews',
          prompt: 'What will you review weekly? What worked well and what needs adjustment?',
          category: 'reflection',
          helpText: 'Time spent vs planned, energy levels, goal progress, system friction points'
        },
        {
          id: 'metric-tracking',
          prompt: 'What metrics will you track to measure productivity improvements?',
          category: 'measurement',
          helpText: 'Deep work hours, tasks completed, projects finished, stress levels, work satisfaction'
        },
        {
          id: 'system-evolution',
          prompt: 'How will you adapt your system as your work and life change?',
          category: 'flexibility',
          helpText: 'New responsibilities, changed priorities, different energy levels, life transitions'
        },
        {
          id: 'accountability',
          prompt: 'Who or what will help keep you accountable to your productivity goals?',
          category: 'support',
          helpText: 'Productivity partner, coach, team check-ins, public commitments, tracking apps'
        },
        {
          id: 'stress-management',
          prompt: 'How will you maintain productivity without burning out?',
          category: 'sustainability',
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
  description: 'Organize your move with comprehensive planning and coordination tools',
  category: 'life-transitions',
  icon: '📦',
  sections: [
    {
      id: 'moving-planning',
      title: 'Moving Timeline & Planning Foundation',
      description: 'Establish your moving plan with detailed timelines and priorities',
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
          category: 'logistics',
          helpText: 'Local (under 50 miles), long-distance (over 50 miles), or international moves each have different regulations, costs, timelines, and complexity requirements.'
        },
        {
          id: 'moving-budget',
          prompt: 'What\'s your total moving budget? How will you allocate funds across different categories?',
          category: 'financial',
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
      description: 'Research and choose reliable moving services and vendors',
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
      description: 'Develop efficient packing and labeling systems',
      order: 3,
      reflectionPrompts: [
        {
          id: 'decluttering-plan',
          prompt: 'What will you declutter before packing? How will you systematically decide what to keep, donate, sell, or discard?',
          category: 'organization',
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
          category: 'organization',
          helpText: 'Use color coding by room, detailed contents lists, priority labels (essential, important, low priority), and photo inventory for valuable items.'
        },
        {
          id: 'packing-supplies',
          prompt: 'What packing supplies do you need? How will you source boxes, tape, bubble wrap, and protective materials?',
          category: 'logistics',
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
      description: 'Plan and execute smooth moving day operations',
      order: 4,
      reflectionPrompts: [
        {
          id: 'moving-day-timeline',
          prompt: 'What\'s your moving day schedule? How will you coordinate timing between locations and services?',
          category: 'logistics',
          helpText: 'Plan loader arrival, cleaning services, utility shutoffs/connections, key exchanges, and include buffer time for unexpected delays.'
        },
        {
          id: 'essential-kit',
          prompt: 'What essential items will you pack separately for immediate access on moving day and first few days?',
          category: 'preparation',
          helpText: 'Include medications, phone chargers, basic tools, cleaning supplies, snacks, important documents, change of clothes, and toiletries.'
        },
        {
          id: 'communication-plan',
          prompt: 'How will you coordinate communication between movers, real estate agents, utilities, and family members?',
          category: 'coordination',
          helpText: 'Create contact lists, share timelines with all parties, designate a point person for decisions, and have backup communication methods.'
        },
        {
          id: 'quality-control',
          prompt: 'How will you ensure your belongings are handled properly and nothing is lost or damaged?',
          category: 'oversight',
          helpText: 'Do walk-throughs with movers, check inventory lists, photograph any damage immediately, and keep important documents with you.'
        }
      ]
    },
    {
      id: 'new-location-setup',
      title: 'New Home Setup & Integration',
      description: 'Efficiently establish your new home and integrate into the community',
      order: 5,
      reflectionPrompts: [
        {
          id: 'utility-setup',
          prompt: 'How will you coordinate utility connections, internet setup, and essential services in your new home?',
          category: 'logistics',
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
          category: 'administration',
          helpText: 'Update bank accounts, insurance, employer records, subscription services, government agencies (IRS, DMV, voter registration), and inform friends and family.'
        },
        {
          id: 'community-integration',
          prompt: 'How will you familiarize yourself with your new area and build connections in the community?',
          category: 'social',
          helpText: 'Research local services (grocery, pharmacy, hospital), explore neighborhoods, find recreational activities, and consider joining community groups or clubs.'
        }
      ]
    },
    {
      id: 'post-move-settling',
      title: 'Post-Move Follow-up & Long-term Settling',
      description: 'Complete your relocation and address any remaining issues',
      order: 6,
      reflectionPrompts: [
        {
          id: 'damage-claims',
          prompt: 'How will you handle any damage claims, missing items, or service issues from your move?',
          category: 'resolution',
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
          category: 'lifestyle',
          helpText: 'Find new grocery stores, commute routes, exercise facilities, entertainment options, and adjust daily routines to fit your new environment.'
        },
        {
          id: 'moving-lessons',
          prompt: 'What lessons have you learned from this move that would help with future relocations?',
          category: 'reflection',
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
  description: 'Plan memorable events with budget tracking and vendor management',
  category: 'events',
  icon: '🎉',
  sections: [
    {
      id: 'event-vision',
      title: 'Event Vision & Goals',
      description: 'Define your event concept and success metrics',
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
          category: 'audience',
          helpText: 'Age demographics, interests, expectations, accessibility needs, cultural considerations, professional vs personal'
        },
        {
          id: 'success-metrics',
          prompt: 'How will you measure if your event is successful? What are your key performance indicators?',
          category: 'goals',
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
      description: 'Set budget and plan essential logistics',
      order: 2,
      reflectionPrompts: [
        {
          id: 'event-budget',
          prompt: 'What\'s your total budget? How will you allocate it across different categories?',
          category: 'budget',
          helpText: 'Venue (30-50%), catering (25-40%), entertainment (10-20%), decorations (5-10%), marketing (5-10%), contingency (10%)'
        },
        {
          id: 'venue-requirements',
          prompt: 'What are your venue requirements? Size, location, amenities, accessibility features?',
          category: 'logistics',
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
          category: 'logistics',
          helpText: 'Event permits, alcohol licenses, music licensing, liability insurance, vendor insurance requirements, fire department approvals'
        }
      ]
    },
    {
      id: 'vendor-management',
      title: 'Vendor Selection & Management',
      description: 'Choose and coordinate with event vendors and suppliers',
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
          category: 'logistics',
          helpText: 'Point person for each vendor, contact information, timeline coordination, load-in/load-out schedules, backup communication plans'
        }
      ]
    },
    {
      id: 'marketing-promotion',
      title: 'Marketing & Promotion Strategy',
      description: 'Promote your event and manage attendee registration',
      order: 4,
      reflectionPrompts: [
        {
          id: 'marketing-channels',
          prompt: 'What marketing channels will you use to promote your event? Where does your audience spend time?',
          category: 'marketing',
          helpText: 'Social media, email marketing, website, print materials, partnerships, word-of-mouth, professional networks, paid advertising'
        },
        {
          id: 'registration-process',
          prompt: 'How will people register for your event? What information do you need from attendees?',
          category: 'logistics',
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
          category: 'marketing',
          helpText: 'Event benefits, speaker highlights, networking opportunities, exclusive content, social proof, urgency/scarcity'
        }
      ]
    },
    {
      id: 'day-of-execution',
      title: 'Event Day Execution',
      description: 'Manage event day logistics and ensure smooth execution',
      order: 5,
      reflectionPrompts: [
        {
          id: 'event-timeline',
          prompt: 'What\'s your detailed event day timeline? When does setup begin and breakdown end?',
          category: 'logistics',
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
          category: 'experience',
          helpText: 'Clear signage, smooth registration, comfortable seating, good acoustics, networking opportunities, memorable takeaways'
        },
        {
          id: 'problem-solving',
          prompt: 'How will you handle unexpected issues or changes on event day? Who makes final decisions?',
          category: 'logistics',
          helpText: 'Chain of command, emergency contacts, backup plans, quick decision-making process, communication with attendees'
        }
      ]
    },
    {
      id: 'follow-up-evaluation',
      title: 'Post-Event Follow-up & Evaluation',
      description: 'Gather feedback and measure event success',
      order: 6,
      reflectionPrompts: [
        {
          id: 'feedback-collection',
          prompt: 'How will you gather feedback from attendees, vendors, and staff? What questions will you ask?',
          category: 'evaluation',
          helpText: 'Post-event surveys, informal conversations, vendor debriefs, staff feedback sessions, social media monitoring'
        },
        {
          id: 'success-analysis',
          prompt: 'How will you measure your event against the success metrics you defined? What worked well?',
          category: 'evaluation',
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
          category: 'evaluation',
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
  description: 'Plan amazing trips with itinerary building and budget management',
  category: 'travel',
  icon: '✈️',
  sections: [
    {
      id: 'trip-planning',
      title: 'Trip Goals & Planning Foundation',
      description: 'Define your travel goals and establish planning framework',
      order: 1,
      reflectionPrompts: [
        {
          id: 'travel-goals',
          prompt: "What do you want to get out of this trip? Adventure, relaxation, culture, business, personal growth?",
          category: 'goals',
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
          category: 'assessment',
          helpText: 'First-time international travelers may need more structured planning. Experienced travelers can handle more spontaneous adventures and cultural immersion.'
        }
      ]
    },
    {
      id: 'destination-research',
      title: 'Destination Selection & Research',
      description: 'Research and choose your travel destinations',
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
      description: 'Plan your travel budget and financial arrangements',
      order: 3,
      reflectionPrompts: [
        {
          id: 'travel-budget',
          prompt: 'What\'s your total travel budget? How will you allocate it across major categories?',
          category: 'budget',
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
          category: 'logistics',
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
      description: 'Build detailed itineraries and plan activities',
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
          category: 'experience',
          helpText: 'Cooking classes, local markets, neighborhood walks, cultural performances, festivals, volunteering, or staying with local families for authentic experiences.'
        },
        {
          id: 'booking-strategy',
          prompt: 'What activities need advance booking? What can you decide spontaneously?',
          category: 'logistics',
          helpText: 'Popular attractions, restaurants, shows, tours often need advance booking. Research cancellation policies and peak season requirements.'
        }
      ]
    },
    {
      id: 'logistics-preparation',
      title: 'Travel Logistics & Preparation',
      description: 'Handle travel documents, bookings, and preparations',
      order: 5,
      reflectionPrompts: [
        {
          id: 'travel-documents',
          prompt: 'What travel documents do you need? Are they current and will they remain valid?',
          category: 'logistics',
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
          category: 'logistics',
          helpText: 'Flights, trains, buses, rental cars, rideshare, public transport, walking. Research local transportation systems, costs, and reliability.'
        },
        {
          id: 'packing-preparation',
          prompt: 'What will you pack? How will you prepare for your destination\'s climate and activities?',
          category: 'preparation',
          helpText: 'Research weather, dress codes, electrical outlets, and activity requirements. Pack versatile clothing, essential documents, medications, and backup items.'
        }
      ]
    },
    {
      id: 'travel-execution',
      title: 'During Travel & Post-Trip',
      description: 'Execute your trip and capture memories',
      order: 6,
      reflectionPrompts: [
        {
          id: 'flexibility-mindset',
          prompt: 'How will you stay flexible when plans change? What\'s your backup strategy?',
          category: 'mindset',
          helpText: 'Weather, closures, strikes, illness can disrupt plans. Stay positive, have backup activities, and view changes as adventure opportunities.'
        },
        {
          id: 'memory-capture',
          prompt: 'How will you document and remember your experiences beyond just photos?',
          category: 'experience',
          helpText: 'Travel journal, collecting meaningful souvenirs, learning phrases in local language, trying new foods, engaging with locals for deeper memories.'
        },
        {
          id: 'local-connection',
          prompt: 'How will you connect with local culture and people during your trip?',
          category: 'experience',
          helpText: 'Learn basic phrases, eat at local restaurants, use public transport, attend community events, stay in locally-owned accommodations.'
        },
        {
          id: 'post-travel-reflection',
          prompt: 'How will you process and integrate your travel experiences when you return?',
          category: 'reflection',
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
  description: 'Plan healthy meals with grocery lists and nutrition tracking',
  category: 'health',
  icon: '🍽️',
  sections: [
    {
      id: 'nutrition-assessment',
      title: 'Nutrition Goals & Assessment',
      description: 'Define your dietary goals and assess current habits',
      order: 1,
      reflectionPrompts: [
        {
          id: 'health-goals',
          prompt: "What are your specific nutrition and health goals? Weight management, increased energy, athletic performance, disease prevention?",
          category: 'goals',
          helpText: 'Specific goals help guide your meal planning decisions and food choices. Consider both short-term (3-6 months) and long-term (1+ years) objectives.'
        },
        {
          id: 'dietary-restrictions',
          prompt: 'Do you have any dietary restrictions, allergies, food intolerances, or cultural/religious food preferences?',
          category: 'requirements',
          helpText: 'Include medical allergies, vegetarian/vegan choices, gluten-free needs, dairy intolerance, cultural/religious restrictions, and personal preferences that affect food choices.'
        },
        {
          id: 'current-eating-habits',
          prompt: 'What do your current eating patterns look like? What works well and what challenges do you face?',
          category: 'assessment',
          helpText: 'Consider meal timing, portion sizes, snacking habits, eating out frequency, cooking skills, emotional eating triggers, and energy levels throughout the day.'
        },
        {
          id: 'lifestyle-factors',
          prompt: 'How do your work schedule, family responsibilities, and lifestyle affect your eating patterns?',
          category: 'assessment',
          helpText: 'Consider shift work, travel, irregular schedules, family meal needs, social eating, stress levels, and time constraints that impact your food choices.'
        },
        {
          id: 'nutrition-knowledge',
          prompt: 'What\'s your current understanding of nutrition? Where do you need more education or support?',
          category: 'assessment',
          helpText: 'Assess your knowledge of macronutrients, portion sizes, reading labels, cooking techniques, and areas where you\'d like to learn more about healthy eating.'
        }
      ]
    },
    {
      id: 'meal-planning-system',
      title: 'Meal Planning System Design',
      description: 'Create efficient meal planning and preparation systems',
      order: 2,
      reflectionPrompts: [
        {
          id: 'meal-prep-time',
          prompt: 'How much time can you realistically dedicate to meal planning and preparation each week?',
          category: 'logistics',
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
      description: 'Optimize grocery shopping and manage food expenses',
      order: 3,
      reflectionPrompts: [
        {
          id: 'grocery-budget',
          prompt: 'What\'s your monthly food budget? How will you allocate it between groceries and dining out?',
          category: 'budget',
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
      description: 'Develop efficient cooking and meal prep workflows',
      order: 4,
      reflectionPrompts: [
        {
          id: 'cooking-skills',
          prompt: 'What are your current cooking skills? Which techniques do you want to learn or improve?',
          category: 'skills',
          helpText: 'Assess knife skills, basic cooking methods, flavor building, timing multiple dishes, and identify areas for improvement to expand your meal options.'
        },
        {
          id: 'kitchen-setup',
          prompt: 'How is your kitchen equipped? What tools or equipment would improve your meal prep efficiency?',
          category: 'logistics',
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
          category: 'organization',
          helpText: 'Plan for proper storage, labeling, portion sizing, and quick assembly systems that make daily meal preparation simple and appealing.'
        }
      ]
    },
    {
      id: 'nutrition-tracking',
      title: 'Nutrition Monitoring & Adjustment',
      description: 'Track nutrition intake and adjust plans based on results',
      order: 5,
      reflectionPrompts: [
        {
          id: 'tracking-method',
          prompt: 'How will you monitor your nutrition intake and progress toward goals? What tracking methods work for you?',
          category: 'tracking',
          helpText: 'Consider food diary apps, photos, portion awareness, energy levels, weight, measurements, or other metrics that help you stay on track without becoming obsessive.'
        },
        {
          id: 'progress-evaluation',
          prompt: 'How will you evaluate if your meal plan is working? What indicators will you monitor?',
          category: 'evaluation',
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
          category: 'sustainability',
          helpText: 'Balance structure with flexibility, plan for holidays and social events, develop backup strategies, and focus on progress over perfection for lasting change.'
        }
      ]
    },
    {
      id: 'family-social',
      title: 'Family & Social Food Management',
      description: 'Navigate family meals and social eating situations',
      order: 6,
      reflectionPrompts: [
        {
          id: 'family-coordination',
          prompt: 'How will you coordinate meal planning with family members or household partners? Who has what responsibilities?',
          category: 'coordination',
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
          category: 'support',
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
  description: 'Comprehensive guidance for conducting rigorous academic research from conception to publication',
  category: 'education',
  icon: '📚',
  sections: [
    {
      id: 'research-planning',
      title: 'Research Planning & Topic Definition',
      description: 'Define your research scope, objectives, and create a strategic plan',
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
          category: 'methodology',
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
      description: 'Systematically review literature and organize your scholarly sources',
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
          category: 'evaluation',
          helpText: 'Check peer-review status, author credentials, methodology rigor, sample representativeness, funding sources, and potential conflicts of interest. Use quality assessment tools when appropriate.'
        },
        {
          id: 'citation-management',
          prompt: 'How will you organize, tag, and track your growing collection of sources?',
          category: 'organization',
          helpText: 'Choose tools like Zotero, Mendeley, or EndNote. Create consistent tagging systems, organize into collections, and start bibliographies early. Back up your library regularly.'
        },
        {
          id: 'synthesis-themes',
          prompt: 'What major themes, theories, and methodological approaches are emerging from your review?',
          category: 'analysis',
          helpText: 'Group sources by themes, identify competing theories, note methodological trends, and spot areas of consensus vs. debate. Create concept maps or matrices to visualize relationships.'
        },
        {
          id: 'theoretical-framework',
          prompt: 'What theoretical or conceptual framework best fits your research? How will it guide your study?',
          category: 'analysis',
          helpText: 'Choose frameworks that align with your research question and methodology. Consider established theories vs. emerging frameworks, and how they inform your data collection and analysis.'
        }
      ]
    },
    {
      id: 'data-collection',
      title: 'Data Collection & Ethics',
      description: 'Plan and execute ethical, rigorous data collection procedures',
      order: 3,
      reflectionPrompts: [
        {
          id: 'ethics-approval',
          prompt: 'What ethical approvals do you need? How will you protect participants and ensure informed consent?',
          category: 'ethics',
          helpText: 'Submit IRB/ethics applications early (6-8 weeks typical). Address risks/benefits, participant anonymity, data storage, vulnerable populations, and withdrawal procedures. Consider cultural sensitivities.'
        },
        {
          id: 'data-collection-methods',
          prompt: 'What specific data collection methods align with your research questions? How will you ensure validity?',
          category: 'methodology',
          helpText: 'Match methods to objectives: surveys for attitudes, interviews for experiences, observations for behaviors, experiments for causation. Consider validity threats and mitigation strategies.'
        },
        {
          id: 'sample-strategy',
          prompt: 'Who is your target population and how will you recruit participants? What sampling approach will you use?',
          category: 'sampling',
          helpText: 'Define inclusion criteria, calculate sample sizes for quantitative studies, choose sampling methods (random, stratified, purposive, snowball). Plan recruitment strategies and incentives.'
        },
        {
          id: 'data-quality-measures',
          prompt: 'How will you ensure data quality, reliability, and validity throughout collection?',
          category: 'quality',
          helpText: 'Pilot test instruments, train data collectors, implement quality checks, use multiple data sources (triangulation), and establish inter-rater reliability for subjective measures.'
        },
        {
          id: 'data-management-security',
          prompt: 'How will you securely collect, store, and organize your data? What backup systems will you use?',
          category: 'organization',
          helpText: 'Use secure platforms, encrypt sensitive data, create version control systems, establish naming conventions, and implement multiple backup strategies (local, cloud, institutional).'
        }
      ]
    },
    {
      id: 'analysis-writing',
      title: 'Data Analysis & Academic Writing',
      description: 'Analyze your data rigorously and structure compelling academic writing',
      order: 4,
      reflectionPrompts: [
        {
          id: 'analysis-plan',
          prompt: 'What analytical techniques and software will you use? How will you ensure analytical rigor?',
          category: 'analysis',
          helpText: 'Choose appropriate statistical tests or qualitative analysis methods. Learn necessary software (SPSS, R, NVivo, Atlas.ti). Consider effect sizes, confidence intervals, and multiple comparisons.'
        },
        {
          id: 'data-preparation',
          prompt: 'How will you clean, code, and prepare your data for analysis? What quality checks will you implement?',
          category: 'preparation',
          helpText: 'Check for missing data, outliers, and coding errors. Develop codebooks for qualitative data. Test assumptions for statistical analyses. Document all data processing decisions.'
        },
        {
          id: 'results-interpretation',
          prompt: 'How will you interpret your findings objectively? What alternative explanations should you consider?',
          category: 'analysis',
          helpText: 'Look for patterns, relationships, and unexpected findings. Consider confounding variables, limitations, and rival explanations. Distinguish between statistical and practical significance.'
        },
        {
          id: 'writing-structure-flow',
          prompt: 'How will you structure your paper for maximum clarity and impact? What story do your findings tell?',
          category: 'writing',
          helpText: 'Follow disciplinary conventions (IMRAD for empirical studies). Create clear arguments, logical flow, and compelling narratives. Use headings, transitions, and signposting effectively.'
        },
        {
          id: 'audience-contribution',
          prompt: 'Who is your primary audience and what unique contribution does your work make to the field?',
          category: 'communication',
          helpText: 'Write for your intended readers (academics, practitioners, policymakers). Clearly articulate theoretical and practical contributions. Avoid jargon when writing for broader audiences.'
        },
        {
          id: 'revision-feedback-process',
          prompt: 'How will you systematically seek feedback and revise your work? Who are your key reviewers?',
          category: 'improvement',
          helpText: 'Plan multiple revision cycles with different focuses (structure, content, clarity, mechanics). Seek feedback from advisors, peers, and potential end-users. Allow substantial time for revisions.'
        }
      ]
    },
    {
      id: 'quality-validation',
      title: 'Research Quality & Validation',
      description: 'Ensure methodological rigor and validate your research findings',
      order: 5,
      reflectionPrompts: [
        {
          id: 'validity-threats',
          prompt: 'What threats to internal and external validity does your study face? How will you address them?',
          category: 'methodology',
          helpText: 'Consider selection bias, history effects, maturation, testing effects, and generalizability limits. Implement design controls, randomization, and replication strategies where possible.'
        },
        {
          id: 'reliability-consistency',
          prompt: 'How will you demonstrate reliability and consistency in your methods and findings?',
          category: 'quality',
          helpText: 'Use standardized instruments, train data collectors consistently, calculate reliability coefficients, and document all procedures clearly for replication.'
        },
        {
          id: 'bias-minimization',
          prompt: 'What potential sources of bias exist in your research? How will you minimize their impact?',
          category: 'methodology',
          helpText: 'Identify researcher bias, participant bias, selection bias, and confirmation bias. Use blinding, standardized protocols, and reflexive practices to minimize bias effects.'
        },
        {
          id: 'triangulation-validation',
          prompt: 'How will you use triangulation or other validation strategies to strengthen your findings?',
          category: 'validation',
          helpText: 'Combine multiple methods, data sources, researchers, or theoretical perspectives. Use member checking, peer debriefing, and external auditing for qualitative research.'
        }
      ]
    },
    {
      id: 'dissemination',
      title: 'Publication & Research Dissemination',
      description: 'Share your research through appropriate academic and public channels',
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
          category: 'writing',
          helpText: 'Follow journal formatting exactly, write compelling abstracts, create clear figures/tables, and ensure ethical compliance statements. Consider professional editing services.'
        },
        {
          id: 'peer-review-process',
          prompt: 'How will you prepare for and respond to peer review? What is your revision strategy?',
          category: 'publication',
          helpText: 'Anticipate reviewer concerns, prepare detailed responses, and view feedback constructively. Allow time for major revisions and additional analyses if requested.'
        },
        {
          id: 'broader-dissemination',
          prompt: 'How will you share your findings beyond academic publications? What public engagement is appropriate?',
          category: 'communication',
          helpText: 'Consider conference presentations, policy briefs, social media, press releases, practitioner publications, and community presentations. Tailor messages to different audiences.'
        },
        {
          id: 'research-impact',
          prompt: 'How will you track and measure the impact of your research? What metrics matter?',
          category: 'evaluation',
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
  description: 'Complete guide to building and growing a successful freelance business from client acquisition to scaling',
  category: 'career-business',
  icon: '💼',
  sections: [
    {
      id: 'service-definition',
      title: 'Service Definition & Positioning',
      description: 'Define your services, identify your niche, and position yourself in the market',
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
      description: 'Establish proper business structure, contracts, and operational systems',
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
      description: 'Develop sustainable pricing models and financial management systems',
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
      description: 'Build marketing systems and acquire your first and ongoing clients',
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
      description: 'Manage client relationships effectively and deliver projects successfully',
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
      description: 'Scale your freelance business through systems, partnerships, and strategic growth',
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
  description: 'Comprehensive guide to building wealth through strategic financial planning, investing, and long-term wealth building',
  category: 'finance',
  icon: '📈',
  sections: [
    {
      id: 'financial-foundation',
      title: 'Financial Foundation & Assessment',
      description: 'Establish solid financial fundamentals and assess your current financial health',
      order: 1,
      reflectionPrompts: [
        {
          id: 'net-worth-calculation',
          prompt: "What is your current net worth? List all assets and debts to understand your baseline.",
          category: 'assessment',
          helpText: 'Calculate total assets (cash, investments, property, vehicles) minus total liabilities (credit cards, loans, mortgage). Track this quarterly to monitor progress.'
        },
        {
          id: 'cash-flow-analysis',
          prompt: 'How much money flows in and out each month? Are you living within your means?',
          category: 'assessment',
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
          category: 'assessment',
          helpText: 'Identify emotional spending patterns, impulse purchases, and positive money habits. Understanding psychology is key to sustainable financial success.'
        }
      ]
    },
    {
      id: 'budgeting-optimization',
      title: 'Advanced Budgeting & Expense Optimization',
      description: 'Create and optimize budgeting systems that align with your wealth-building goals',
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
          category: 'optimization',
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
          category: 'systems',
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
      description: 'Build a diversified investment portfolio aligned with your risk tolerance and goals',
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
          category: 'assessment',
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
      description: 'Minimize tax burden and maximize after-tax wealth through strategic planning',
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
      description: 'Implement advanced strategies to accelerate wealth building beyond basic investing',
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
      description: 'Track progress, adjust strategies, and continuously optimize your wealth-building approach',
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
          category: 'optimization',
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
  description: 'Complete guide to building effective digital marketing campaigns and SEO strategies for business growth',
  category: 'marketing',
  icon: '📱',
  sections: [
    {
      id: 'marketing-foundation',
      title: 'Marketing Foundation & Strategy',
      description: 'Establish marketing fundamentals, goals, and strategic framework',
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
      description: 'Develop comprehensive SEO strategy for organic search visibility',
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
          category: 'optimization',
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
          category: 'optimization',
          helpText: 'Audit site speed (Core Web Vitals), mobile-friendliness, XML sitemaps, robots.txt, SSL certificates, and fix crawl errors using Google Search Console.'
        },
        {
          id: 'local-seo-strategy',
          prompt: 'If applicable, how will you optimize for local search? Google My Business, local citations, reviews?',
          category: 'optimization',
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
      description: 'Create compelling content that attracts, engages, and converts your audience',
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
          category: 'optimization',
          helpText: 'Turn blog posts into social media content, videos into podcasts, create infographics from data, and develop email sequences from popular content.'
        },
        {
          id: 'content-performance-measurement',
          prompt: 'How will you measure content performance and optimize based on data?',
          category: 'measurement',
          helpText: 'Track metrics like page views, time on page, social shares, comments, lead generation, and conversion rates. Use data to improve future content.'
        }
      ]
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing Strategy',
      description: 'Build engaging social media presence and community around your brand',
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
          category: 'measurement',
          helpText: 'Use platform analytics and tools like Hootsuite, Buffer, or Sprout Social to track engagement rates, reach, click-through rates, and conversions.'
        }
      ]
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing & Automation',
      description: 'Build email lists and create automated campaigns that nurture and convert',
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
          category: 'optimization',
          helpText: 'Use responsive design, test across email clients, optimize for mobile viewing, and ensure clear call-to-action buttons and readable fonts.'
        },
        {
          id: 'email-performance-optimization',
          prompt: 'How will you test and optimize email performance? Subject lines, send times, content?',
          category: 'optimization',
          helpText: 'A/B test subject lines, send times, email content, and CTAs. Monitor open rates, click-through rates, unsubscribe rates, and conversion rates.'
        }
      ]
    },
    {
      id: 'analytics-optimization',
      title: 'Analytics, Measurement & Optimization',
      description: 'Track performance, analyze data, and continuously optimize marketing efforts',
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
          category: 'optimization',
          helpText: 'Set up goal tracking, e-commerce tracking, and attribution modeling to understand customer journey and optimize conversion paths.'
        },
        {
          id: 'marketing-attribution',
          prompt: 'How will you attribute conversions to different marketing channels and campaigns?',
          category: 'measurement',
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
          category: 'optimization',
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
  description: 'Comprehensive guide to thriving in remote work environments with optimal productivity systems and work-life balance',
  category: 'productivity',
  icon: '💻',
  sections: [
    {
      id: 'remote-workspace-setup',
      title: 'Remote Workspace Setup & Environment',
      description: 'Create an optimal physical and digital workspace for remote work success',
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
          category: 'organization',
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
          category: 'optimization',
          helpText: 'Regularly assess workspace effectiveness, experiment with different setups, upgrade equipment as needed, adjust lighting and temperature, and incorporate feedback from your work experience.'
        },
        {
          id: 'workspace-wellness',
          prompt: 'How will you incorporate wellness elements into your workspace to maintain physical and mental health?',
          category: 'wellness',
          helpText: 'Include plants for air quality, ensure proper posture support, plan movement breaks, consider standing desk options, maintain good air circulation, and create visual elements that reduce stress.'
        }
      ]
    },
    {
      id: 'communication-collaboration',
      title: 'Remote Communication & Collaboration',
      description: 'Master effective communication and collaboration techniques for distributed teams',
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
          category: 'optimization',
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
      description: 'Develop effective time management systems for remote work flexibility',
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
          category: 'optimization',
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
      description: 'Establish healthy boundaries and maintain work-life balance in remote settings',
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
          category: 'wellness',
          helpText: 'Schedule regular social activities, maintain friendships outside of work, consider co-working spaces occasionally, join professional networks or hobby groups, and prioritize in-person interactions when possible.'
        },
        {
          id: 'stress-management',
          prompt: 'What stress management techniques will you use to handle remote work challenges?',
          category: 'wellness',
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
      description: 'Track performance and maintain accountability in remote work environments',
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
          category: 'measurement',
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
          category: 'optimization',
          helpText: 'Regularly assess what\'s working and what isn\'t, experiment with new tools and techniques, learn from other successful remote workers, and adapt your approach based on results.'
        }
      ]
    },
    {
      id: 'career-development',
      title: 'Remote Career Development & Growth',
      description: 'Advance your career and build professional networks while working remotely',
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
  description: 'Navigate career changes successfully with strategic planning, skill development, and transition management',
  category: 'career-business',
  icon: '🔄',
  sections: [
    {
      id: 'self-assessment-exploration',
      title: 'Self-Assessment & Career Exploration',
      description: 'Understand your motivations, strengths, and explore new career possibilities',
      order: 1,
      reflectionPrompts: [
        {
          id: 'career-change-motivation',
          prompt: "Why do you want to change careers? What's driving this decision - dissatisfaction, growth, passion, or circumstances?",
          category: 'assessment',
          helpText: 'Be honest about your motivations. Common reasons include lack of fulfillment, limited growth opportunities, poor work-life balance, industry changes, or discovering new interests. Understanding your "why" guides better decisions.'
        },
        {
          id: 'strengths-skills-inventory',
          prompt: 'What are your core strengths, transferable skills, and unique value proposition across different industries?',
          category: 'assessment',
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
          category: 'assessment',
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
      description: 'Create a comprehensive plan for your career transition with timelines and milestones',
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
      description: 'Acquire the knowledge and skills needed for your new career path',
      order: 3,
      reflectionPrompts: [
        {
          id: 'learning-needs-assessment',
          prompt: 'What specific technical and soft skills are essential for success in your target career?',
          category: 'assessment',
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
      description: 'Execute an effective job search strategy tailored to career changers',
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
      description: 'Successfully navigate the actual transition and early days in your new career',
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
      description: 'Build sustainable career growth and success in your new field',
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
  description: 'Plan and execute a successful business exit through strategic preparation, valuation optimization, and transition management',
  category: 'career-business',
  icon: '🚪',
  sections: [
    {
      id: 'exit-strategy-assessment',
      title: 'Exit Strategy Assessment & Goals',
      description: 'Define your exit timeline, goals, and preferred exit methods',
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
      description: 'Maximize business value through strategic improvements and proper valuation',
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
      description: 'Organize financial records, address legal issues, and optimize tax planning',
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
      description: 'Execute the business sale process from marketing to closing',
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
      description: 'Manage the business transition and integration with new ownership',
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
      description: 'Plan for life after business exit including wealth management and new pursuits',
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
  description: 'Launch and develop a successful non-profit organization with strategic planning, legal compliance, and sustainable funding',
  category: 'career-business',
  icon: '🤝',
  sections: [
    {
      id: 'mission-vision-planning',
      title: 'Mission, Vision & Strategic Planning',
      description: 'Define your non-profit purpose, goals, and strategic direction',
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
      description: 'Establish proper legal structure, board governance, and compliance frameworks',
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
      description: 'Design effective programs and services that achieve your mission',
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
      description: 'Develop sustainable funding strategies and revenue diversification',
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
      description: 'Build efficient operational systems and management infrastructure',
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
      description: 'Build brand awareness, community support, and stakeholder engagement',
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

export const templates: GuidanceTemplate[] = [
  weddingTemplate,
  homeBuyingTemplate,
  jobSearchTemplate,
  babyPlanningTemplate,
  businessLaunchTemplate,
  fitnessJourneyTemplate,
  collegePlanningTemplate,
  budgetPlanningTemplate,
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
  // Future templates generated by AI using the same structure
];