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
      title: 'Moving Timeline & Planning',
      description: 'Plan your move with detailed timelines and checklists',
      order: 1,
      reflectionPrompts: [
        {
          id: 'moving-timeline',
          prompt: "When is your move date? How much time do you have to plan?",
          category: 'planning',
          helpText: 'Start planning 8-12 weeks before your move date for best results'
        },
        {
          id: 'moving-distance',
          prompt: 'Are you moving locally, long-distance, or internationally? What are the implications?',
          category: 'logistics',
          helpText: 'Different distances require different planning approaches, timelines, and regulations'
        },
        {
          id: 'moving-budget',
          prompt: 'What\'s your total moving budget? What are your cost priorities?',
          category: 'financial',
          helpText: 'Include moving company, packing supplies, travel, temporary housing, utility deposits'
        }
      ]
    },
    {
      id: 'vendor-selection',
      title: 'Moving Company & Service Selection',
      description: 'Choose reliable moving services and vendors',
      order: 2,
      reflectionPrompts: [
        {
          id: 'moving-company',
          prompt: 'Will you hire professional movers or move yourself? What factors influence this decision?',
          category: 'decision',
          helpText: 'Consider cost, convenience, time, physical ability, valuable items, distance'
        }
      ]
    },
    {
      id: 'packing-organization',
      title: 'Packing & Organization Strategy',
      description: 'Develop an efficient packing and labeling system',
      order: 3,
      reflectionPrompts: [
        {
          id: 'decluttering-plan',
          prompt: 'What will you declutter before packing? How will you decide what to keep?',
          category: 'organization',
          helpText: 'Less stuff = lower moving costs. Consider donation, selling, or storage options'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'moving-checklist',
      title: '8-Week Moving Timeline Checklist',
      type: 'checklist',
      excerpt: 'Comprehensive week-by-week moving checklist',
      content: 'A detailed timeline to keep your move organized...',
      tags: ['checklist', 'timeline', 'organization'],
      readTime: '5 min',
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
          prompt: "What type of event are you planning? What's the main purpose?",
          category: 'planning',
          helpText: 'Corporate event, wedding, birthday, fundraiser, conference - each has different requirements'
        },
        {
          id: 'target-audience',
          prompt: 'Who is your target audience? What experience do you want to create for them?',
          category: 'audience',
          helpText: 'Age, interests, expectations, accessibility needs, cultural considerations'
        },
        {
          id: 'success-metrics',
          prompt: 'How will you measure if your event is successful?',
          category: 'goals',
          helpText: 'Attendance numbers, engagement, feedback scores, funds raised, connections made'
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
          helpText: 'Venue (30-50%), catering (25-40%), entertainment (10-20%), decorations (5-10%)'
        },
        {
          id: 'venue-requirements',
          prompt: 'What are your venue requirements? Size, location, amenities, accessibility?',
          category: 'logistics',
          helpText: 'Capacity, parking, kitchen access, AV equipment, indoor/outdoor, accessibility'
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
      content: 'Proper budget allocation is crucial for event success...',
      tags: ['budget', 'calculator', 'planning'],
      readTime: '5 min',
      difficulty: 'beginner'
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
      title: 'Trip Goals & Planning',
      description: 'Define your travel goals and plan your journey',
      order: 1,
      reflectionPrompts: [
        {
          id: 'travel-goals',
          prompt: "What do you want to get out of this trip? Adventure, relaxation, culture, business?",
          category: 'goals',
          helpText: 'Clear goals help you make better decisions about destinations and activities'
        },
        {
          id: 'destination-selection',
          prompt: 'What destinations are you considering? What factors are most important to you?',
          category: 'planning',
          helpText: 'Weather, cost, safety, activities, culture, language, visa requirements'
        },
        {
          id: 'travel-budget',
          prompt: 'What\'s your total travel budget? How will you allocate it?',
          category: 'budget',
          helpText: 'Transportation (25%), accommodation (30%), food (25%), activities (15%), miscellaneous (5%)'
        }
      ]
    },
    {
      id: 'itinerary-building',
      title: 'Itinerary & Booking',
      description: 'Create detailed itineraries and make bookings',
      order: 2,
      reflectionPrompts: [
        {
          id: 'must-see-activities',
          prompt: 'What are your must-see attractions and must-do activities?',
          category: 'planning',
          helpText: 'Research top attractions, local experiences, seasonal activities, booking requirements'
        }
      ]
    }
  ],
  resources: [
    {
      id: 'travel-planning-checklist',
      title: 'Complete Travel Planning Checklist',
      type: 'checklist',
      excerpt: 'Step-by-step checklist for planning any trip',
      content: 'Comprehensive travel planning checklist...',
      tags: ['checklist', 'planning', 'travel'],
      readTime: '8 min',
      difficulty: 'beginner'
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
          prompt: "What are your nutrition and health goals? Weight management, energy, athletic performance?",
          category: 'goals',
          helpText: 'Specific goals help guide your meal planning decisions and food choices'
        },
        {
          id: 'dietary-restrictions',
          prompt: 'Do you have any dietary restrictions, allergies, or food preferences?',
          category: 'requirements',
          helpText: 'Vegetarian, vegan, gluten-free, dairy-free, cultural/religious restrictions'
        },
        {
          id: 'current-eating-habits',
          prompt: 'What do your current eating patterns look like? What works and what doesn\'t?',
          category: 'assessment',
          helpText: 'Meal timing, portion sizes, snacking habits, eating out frequency, cooking skills'
        }
      ]
    },
    {
      id: 'meal-planning-system',
      title: 'Meal Planning & Preparation',
      description: 'Create efficient meal planning and prep systems',
      order: 2,
      reflectionPrompts: [
        {
          id: 'meal-prep-time',
          prompt: 'How much time can you dedicate to meal planning and preparation each week?',
          category: 'logistics',
          helpText: 'Consider cooking skills, kitchen equipment, schedule, and willingness to meal prep'
        },
        {
          id: 'grocery-strategy',
          prompt: 'How will you approach grocery shopping? Budget, frequency, meal planning integration?',
          category: 'planning',
          helpText: 'Weekly planning, budget allocation, seasonal ingredients, bulk buying, list organization'
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
      content: 'Meal prep can save time and improve nutrition...',
      tags: ['meal-prep', 'healthy-eating', 'time-saving'],
      readTime: '12 min',
      difficulty: 'beginner'
    },
    {
      id: 'grocery-list-templates',
      title: 'Smart Grocery List Templates',
      type: 'tool',
      excerpt: 'Organized grocery list templates for efficient shopping',
      content: 'Well-organized grocery lists save time and money...',
      tags: ['grocery-shopping', 'templates', 'organization'],
      readTime: '5 min',
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
  // Future templates generated by AI using the same structure
];