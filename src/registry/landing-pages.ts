import { LucideIcon } from 'lucide-react';
import { 
  Rocket, Shield, Heart, Clock, TrendingUp, Lightbulb, FileText, DollarSign, Target, Users,
  Briefcase, Search, Handshake, Award, BookOpen,
  Baby, Stethoscope, Calendar, Activity,
  Home, MapPin, CreditCard, HandCoins, Truck,
  Sparkles, CheckCircle2, Zap, Camera, Music, PartyPopper, MapMarkerIcon, Utensils, Megaphone,
  PenTool, ChefHat, Microphone, Plane, Compass, Globe, Passport, Luggage, Star, Navigation,
  ShoppingCart, Apple, Leaf, Timer, Scale, Calculator, Dumbbell, TrendingUp as Progress, 
  BarChart3, Trophy, Zap as Energy, GraduationCap, Library, School, MapPinIcon
} from 'lucide-react';

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface HeroCard {
  badge: string;
  badgeVariant?: 'default' | 'secondary' | 'outline';
  content: string;
}

interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

interface GuidedNote {
  name: string;
  icon: LucideIcon;
  description: string;
}

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

interface FAQ {
  question: string;
  answer: string;
}

interface HeroBenefit {
  text: string;
}

export interface LandingPageData {
  // SEO & Metadata (optional)
  metadata?: any;
  jsonLd?: any;
  faqJsonLd?: any;

  // Hero Section
  badgeIcon: LucideIcon;
  badgeText: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  ctaText: string;
  appPath: string;
  heroCards?: HeroCard[];
  heroBenefits?: HeroBenefit[];

  // Process Section
  processTitle: string;
  processDescription: string;
  processSteps: ProcessStep[];

  // Benefits Section
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: Benefit[];

  // Features Section
  featuresIcon: LucideIcon;
  featuresTitle: string;
  featuresDescription: string;
  features: string[];

  // Optional Sections
  howItWorks?: HowItWorksStep[];
  guidedNotes?: GuidedNote[];
  testimonials?: Testimonial[];
  faqs?: FAQ[];

  // CTA Section
  ctaTitle: string;
  ctaDescription: string;
  finalCtaText: string;
}

export const landingPageRegistry: Record<string, LandingPageData> = {
  'wedding-planning': {
    // SEO metadata
    metadata: {
      title: 'Wedding Planning Template | Save 50+ Hours Planning Your Perfect Wedding | Templata',
      description: 'Complete wedding planning template with budget tracker, guest list manager, vendor coordination, and timeline builder. Used by 10,000+ couples. Save 50+ hours of planning time. Free to start.',
      keywords: 'wedding planning template, wedding budget tracker, wedding guest list, wedding checklist, wedding planner spreadsheet, wedding vendor list, wedding timeline template, wedding planning guide, wedding organization, wedding planning tools',
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Wedding Planning Template",
      "description": "Complete wedding planning template with budget tracker, guest list manager, vendor coordination, and timeline builder. Save 50+ hours of planning time.",
      "url": "https://templata.com/wedding-planning",
      "applicationCategory": "ProductivityApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "ratingCount": "10000"
      },
      "creator": {
        "@type": "Organization",
        "name": "Templata"
      }
    },
    badgeIcon: Heart,
    badgeText: 'Most Popular Wedding Template',
    heroTitle: 'Plan Your Perfect',
    heroHighlight: 'Wedding Day',
    heroDescription: 'Everything you need to organize your dream wedding in one beautiful template. From budget tracking to guest management, we\'ve got every detail covered.',
    ctaText: 'Start Planning Free',
    appPath: '/wedding-planning/app',
    heroBenefits: [
      { text: 'Save 50+ hours of planning time' },
      { text: 'Track budgets up to $100K+' },
      { text: 'Manage 300+ guest weddings' }
    ],
    processTitle: 'Complete Wedding Planning System',
    processDescription: 'Our comprehensive framework guides you through every aspect of wedding planning with expert guidance.',
    processSteps: [
      {
        icon: DollarSign,
        title: 'Budget & Finance Planning',
        description: 'Set your budget, track expenses, and manage vendor payments with detailed financial planning tools.'
      },
      {
        icon: MapPin,
        title: 'Venue Selection & Booking',
        description: 'Research venues, compare options, and secure your perfect location with booking checklists.'
      },
      {
        icon: Users,
        title: 'Guest Management & RSVPs',
        description: 'Organize guest lists, track RSVPs, manage plus-ones, and create seating arrangements.'
      },
      {
        icon: Briefcase,
        title: 'Vendor Coordination',
        description: 'Find, evaluate, and coordinate with photographers, caterers, florists, and other vendors.'
      },
      {
        icon: Heart,
        title: 'Ceremony & Reception Planning',
        description: 'Plan your ceremony details, reception timeline, and special moments for your perfect day.'
      },
      {
        icon: Sparkles,
        title: 'Final Details & Execution',
        description: 'Coordinate final details, create day-of timelines, and ensure everything runs smoothly.'
      }
    ],
    benefitsTitle: 'Why Choose Our Wedding Template',
    benefitsDescription: 'Built by experts, designed for busy couples who want to plan their perfect day without the stress.',
    benefits: [
      {
        icon: Sparkles,
        title: 'Setup in Minutes',
        description: 'Quick guided wizard gets you started with all your wedding details in under 5 minutes.'
      },
      {
        icon: Shield,
        title: 'Expert Created',
        description: 'Built by professional wedding planners with 15+ years of industry experience.'
      },
      {
        icon: Clock,
        title: 'Progress Tracking',
        description: 'Visual dashboards and timelines keep you on schedule and stress-free.'
      },
      {
        icon: CheckCircle2,
        title: 'Complete System',
        description: 'Everything in one place - no more scattered spreadsheets or forgotten tasks.'
      },
      {
        icon: Users,
        title: 'Share & Collaborate',
        description: 'Invite your partner, family, and wedding party to collaborate on planning.'
      },
      {
        icon: FileText,
        title: 'Export & Print',
        description: 'Generate beautiful PDFs and printable checklists for vendors and venues.'
      }
    ],
    howItWorks: [
      {
        step: "1",
        title: "Quick Setup Wizard",
        description: "Answer 8 simple questions about your wedding vision, budget, and timeline. Takes just 3 minutes."
      },
      {
        step: "2", 
        title: "Personalized Template",
        description: "Get a fully customized wedding planning workspace with your details, vendors, and timeline pre-filled."
      },
      {
        step: "3",
        title: "Plan & Track Progress",
        description: "Use guided checklists, budget trackers, and timeline tools to plan every detail stress-free."
      },
      {
        step: "4",
        title: "Perfect Wedding Day",
        description: "Execute your perfectly planned wedding with printable timelines, vendor contacts, and day-of schedules."
      }
    ],
    guidedNotes: [
      { name: "Wedding Timeline & Countdown", icon: Calendar, description: "Plan every detail with expert timing guidance" },
      { name: "Vendor Questions & Contracts", icon: FileText, description: "Essential questions to ask each vendor type" },
      { name: "Guest RSVP Tracking", icon: Users, description: "Manage invitations and responses seamlessly" },
      { name: "Seating Arrangements", icon: MapPin, description: "Create perfect table arrangements" },
      { name: "Wedding Day Emergency Kit", icon: Shield, description: "Be prepared for any situation" },
      { name: "Photography Shot List", icon: Camera, description: "Capture every important moment" },
      { name: "Music & Playlist Planning", icon: Music, description: "Perfect soundtrack for your day" },
      { name: "Vows & Ceremony Script", icon: Heart, description: "Write meaningful vows and plan ceremony flow" }
    ],
    testimonials: [
      {
        name: "Sarah & Michael",
        text: "This template saved us over 50 hours of planning time and kept us organized throughout the entire 12-month process!",
        rating: 5
      },
      {
        name: "Emily & James", 
        text: "The budget tracker helped us save $3,200 by catching vendor overcharges. We stayed under budget and had our dream wedding.",
        rating: 5
      },
      {
        name: "Lisa & David",
        text: "Managing 15+ vendors became effortless. The contract tracking alone prevented 3 major scheduling conflicts.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "What's included in the wedding planning template?",
        answer: "Everything you need: budget tracker with 50+ expense categories, guest list manager with RSVP tracking, vendor contact database, wedding timeline builder, seating chart planner, photography shot lists, music playlist organizer, and 12+ guided planning checklists written by professional wedding planners."
      },
      {
        question: "How long does it take to set up the wedding planner?",
        answer: "Just 3-5 minutes! Our guided setup wizard asks 8 key questions about your wedding date, budget, guest count, and venue preferences. The template automatically customizes all sections with your information, so you can start planning immediately."
      },
      {
        question: "Can I track my wedding budget with this template?",
        answer: "Yes! The budget tracker includes 50+ pre-loaded expense categories (venue, catering, photography, flowers, etc.), payment schedule tracking, vendor deposit monitoring, and automatic calculations. You'll see exactly where every dollar goes and get alerts when approaching budget limits."
      },
      {
        question: "Does the template help with guest list management?",
        answer: "Absolutely. Manage unlimited guests with RSVP tracking, meal preferences, plus-one management, address collection for invitations, and an integrated seating chart planner. Export guest lists for vendors and track responses in real-time."
      },
      {
        question: "How does the vendor coordination feature work?",
        answer: "Store all vendor contacts, contracts, and communications in one place. Track payment schedules, contract deadlines, and vendor availability. Includes templates for 15+ vendor types with essential questions to ask each one."
      },
      {
        question: "Is this better than using spreadsheets for wedding planning?",
        answer: "Much better! Unlike scattered spreadsheets, everything connects - your guest count affects catering costs, vendor schedules sync with your timeline, and budget changes update automatically. Plus you get professional guidance and checklists spreadsheets don't provide."
      },
      {
        question: "Can my fiancé and family help with planning using this template?",
        answer: "Yes! Share your planning workspace with your partner, parents, or wedding party. Set permissions for who can edit vs view different sections. Everyone stays updated on progress and can contribute to planning."
      },
      {
        question: "What if I'm planning a small/large wedding?",
        answer: "The template scales perfectly. Whether you're planning an intimate 20-person ceremony or a 300-guest celebration, all tools adapt to your guest count and budget. Small weddings can skip sections like extensive seating charts, while large weddings get detailed coordination tools."
      },
      {
        question: "How far in advance should I start using this wedding planner?",
        answer: "Ideally 12-18 months before your wedding date, but it's helpful at any stage. The template includes timeline recommendations for booking vendors 6-12 months out, sending invitations 8 weeks before, and final confirmations 1 week prior."
      },
      {
        question: "Can I print or export my wedding plans?",
        answer: "Yes! Generate beautiful PDFs for vendors, printable timelines for your wedding day, guest lists for venues, and emergency contact sheets. Export individual sections or your complete wedding plan in multiple formats."
      }
    ],
    featuresIcon: Heart,
    featuresTitle: 'Everything You Need for Your Perfect Day',
    featuresDescription: 'Comprehensive wedding planning toolkit with expert guidance, templates, and organizational tools.',
    features: [
      'Complete budget tracker with 50+ expense categories',
      'Guest list manager with RSVP tracking',
      'Vendor contact database and contract tracking',
      'Wedding timeline builder and countdown',
      'Seating chart planner and table arrangements',
      'Photography shot lists and must-have moments',
      'Music playlist organizer for ceremony and reception',
      'Day-of emergency kit and coordination tools'
    ],
    ctaTitle: 'Start Planning Your Dream Wedding Today',
    ctaDescription: 'Join thousands of couples who have organized their perfect wedding day with our comprehensive template.',
    finalCtaText: 'Start Planning Free',
  },
  'business-launch': {
    badgeIcon: Rocket,
    badgeText: 'Business Launch',
    heroTitle: 'Launch Your',
    heroHighlight: 'Dream Business',
    heroDescription: 'Complete step-by-step guidance from idea validation to successful launch. Build a sustainable business with expert frameworks and proven strategies.',
    ctaText: 'Start Building',
    appPath: '/business-launch/app',
    heroCards: [
      {
        badge: 'Market Research',
        content: 'Validated business idea with clear target market analysis'
      },
      {
        badge: 'Legal Setup',
        badgeVariant: 'secondary',
        content: 'Proper business structure and compliance framework'
      },
      {
        badge: 'Funding',
        badgeVariant: 'outline',
        content: 'Financial plan with clear funding strategy and projections'
      },
      {
        badge: 'Marketing',
        content: 'Brand identity and customer acquisition strategy'
      }
    ],
    processTitle: 'Complete Business Launch Framework',
    processDescription: 'Our systematic 6-phase approach takes you from idea to successful launch with expert guidance at every step.',
    processSteps: [
      {
        icon: Lightbulb,
        title: 'Business Validation & Market Research',
        description: 'Validate your business idea, research target market, and analyze competitors to ensure market fit.'
      },
      {
        icon: FileText,
        title: 'Legal Structure & Compliance',
        description: 'Choose the right business entity, register your business, and ensure legal compliance from day one.'
      },
      {
        icon: DollarSign,
        title: 'Financial Planning & Funding',
        description: 'Create financial projections, explore funding options, and establish accounting systems.'
      },
      {
        icon: Target,
        title: 'Brand Development & Marketing Strategy',
        description: 'Build your brand identity, develop marketing strategy, and create customer acquisition plan.'
      },
      {
        icon: Users,
        title: 'Operations & Systems Setup',
        description: 'Establish operational processes, hire team members, and implement business systems.'
      },
      {
        icon: Rocket,
        title: 'Launch Preparation & Growth Planning',
        description: 'Execute your launch strategy, measure performance, and plan for sustainable growth.'
      }
    ],
    benefitsTitle: 'Why Entrepreneurs Choose Our Framework',
    benefitsDescription: 'Proven methodology used by thousands of successful businesses to minimize risk and accelerate growth.',
    benefits: [
      {
        icon: Shield,
        title: 'Reduced Risk',
        description: 'Comprehensive validation and planning minimize costly mistakes and business failures'
      },
      {
        icon: Heart,
        title: 'Expert Guidance',
        description: 'Proven frameworks and advice from successful entrepreneurs and business experts'
      },
      {
        icon: Clock,
        title: 'Faster Launch',
        description: 'Structured approach accelerates time-to-market and reduces decision paralysis'
      },
      {
        icon: TrendingUp,
        title: 'Scalable Foundation',
        description: 'Build systems and processes designed for growth from the very beginning'
      }
    ],
    featuresIcon: Heart,
    featuresTitle: 'Everything You Need for Business Success',
    featuresDescription: 'Comprehensive toolkit covering every aspect of business launch with frameworks, templates, and expert insights.',
    features: [
      'Market validation frameworks and customer research methods',
      'Business structure selection and legal compliance guidance',
      'Financial modeling templates and funding strategy roadmaps',
      'Brand development toolkit and marketing launch plans',
      'Operations setup checklists and team building guides',
      'Launch timeline templates and performance tracking systems',
      'Investor pitch deck frameworks and fundraising strategies',
      'Post-launch growth planning and scaling methodologies'
    ],
    ctaTitle: 'Ready to Launch Your Business?',
    ctaDescription: 'Join thousands of entrepreneurs who have successfully launched their businesses using our comprehensive framework and expert guidance.',
    finalCtaText: 'Start Your Business Launch Journey',
  },

  'job-search': {
    badgeIcon: Briefcase,
    badgeText: 'Career Strategy',
    heroTitle: 'Land Your Dream Job',
    heroHighlight: 'Strategically',
    heroDescription: 'Master the job search process with expert guidance, proven strategies, and actionable frameworks that get results.',
    ctaText: 'Start Your Job Search',
    appPath: '/job-search/app',
    heroCards: [
      {
        badge: 'Resume',
        content: 'ATS-optimized format with quantified achievements'
      },
      {
        badge: 'Interview',
        badgeVariant: 'secondary',
        content: 'STAR method stories prepared for behavioral questions'
      },
      {
        badge: 'Network',
        badgeVariant: 'outline',
        content: 'Strategic connections in target companies'
      },
      {
        badge: 'Offer',
        content: 'Negotiated 25% above initial offer'
      }
    ],
    processTitle: 'Strategic Job Search Process',
    processDescription: 'Our proven 6-step framework takes you from career uncertainty to landing offers at your target companies.',
    processSteps: [
      {
        icon: Target,
        title: 'Career Assessment & Goals',
        description: 'Define your target roles, assess your skills, and identify your unique value proposition in the market.'
      },
      {
        icon: FileText,
        title: 'Application Materials',
        description: 'Create compelling resumes, cover letters, and portfolios optimized for ATS and hiring managers.'
      },
      {
        icon: Search,
        title: 'Strategic Job Search',
        description: 'Execute multi-channel search strategy using networking, job boards, and recruiter relationships.'
      },
      {
        icon: Users,
        title: 'Interview Preparation',
        description: 'Master STAR method storytelling, company research, and technical preparation for all interview formats.'
      },
      {
        icon: Handshake,
        title: 'Offer Evaluation',
        description: 'Negotiate compensation packages and evaluate opportunities to make the best career decisions.'
      },
      {
        icon: TrendingUp,
        title: 'Career Development',
        description: 'Build long-term career success through continuous learning and professional growth strategies.'
      }
    ],
    benefitsTitle: 'Why Our Approach Works',
    benefitsDescription: 'Data-driven strategies and expert guidance that deliver measurable results.',
    benefits: [
      {
        icon: Clock,
        title: 'Accelerated Timeline',
        description: 'Strategic approach reduces average job search time from 6+ months to 2-3 months'
      },
      {
        icon: TrendingUp,
        title: 'Higher Compensation',
        description: 'Negotiation strategies and positioning tactics typically result in 15-25% higher offers'
      },
      {
        icon: Target,
        title: 'Better Role Fit',
        description: 'Systematic evaluation process leads to roles that align with career goals and values'
      },
      {
        icon: Award,
        title: 'Professional Growth',
        description: 'Develop career management skills that benefit you throughout your professional journey'
      }
    ],
    featuresIcon: BookOpen,
    featuresTitle: 'Everything You Need to Succeed',
    featuresDescription: 'Comprehensive toolkit with templates, guides, and expert strategies used by career professionals.',
    features: [
      'Career assessment and goal-setting framework',
      'ATS-optimized resume templates and strategies',
      'LinkedIn profile optimization guide',
      'Interview preparation with STAR method training',
      'Salary negotiation tactics and market research',
      'Networking strategies and relationship building',
      'Application tracking and follow-up systems',
      'Professional development planning'
    ],
    ctaTitle: 'Ready to Transform Your Career?',
    ctaDescription: 'Join thousands of professionals who have successfully navigated their job search with our strategic framework.',
    finalCtaText: 'Start Your Job Search Strategy',
  },

  'baby-planning': {
    badgeIcon: Baby,
    badgeText: 'Baby Planning',
    heroTitle: 'Prepare for Your',
    heroHighlight: 'Little One',
    heroDescription: 'Complete guidance for expecting parents from pregnancy through baby\'s first year. Feel confident and prepared for parenthood.',
    ctaText: 'Start Planning',
    appPath: '/baby-planning/app',
    heroCards: [
      {
        badge: 'Prenatal Care',
        content: 'Scheduled appointments and health monitoring timeline'
      },
      {
        badge: 'Nursery',
        badgeVariant: 'secondary',
        content: 'Safe, functional space designed for baby and parents'
      },
      {
        badge: 'Budget',
        badgeVariant: 'outline',
        content: 'First-year costs planned and savings strategies in place'
      },
      {
        badge: 'Birth Plan',
        content: 'Labor preferences and hospital logistics organized'
      }
    ],
    processTitle: 'Complete Baby Planning Journey',
    processDescription: 'Our comprehensive 6-step framework guides you through every aspect of preparing for parenthood.',
    processSteps: [
      {
        icon: Stethoscope,
        title: 'Pregnancy Preparation & Health',
        description: 'Essential health preparations, prenatal care, and lifestyle adjustments for a healthy pregnancy.'
      },
      {
        icon: DollarSign,
        title: 'Financial Planning & Insurance',
        description: 'Budget for baby expenses, understand insurance coverage, and plan for parental leave.'
      },
      {
        icon: Home,
        title: 'Nursery Setup & Baby Gear',
        description: 'Plan the nursery layout, select essential gear, and prepare your home for baby\'s arrival.'
      },
      {
        icon: Calendar,
        title: 'Birth Planning & Hospital Preparation',
        description: 'Create your birth plan, prepare for labor and delivery, and organize hospital logistics.'
      },
      {
        icon: Baby,
        title: 'Newborn Care & Feeding',
        description: 'Learn essential newborn care skills, establish feeding routines, and understand baby development.'
      },
      {
        icon: Activity,
        title: 'Work-Life Balance & Future Planning',
        description: 'Plan your return to work, establish childcare, and adapt to life as new parents.'
      }
    ],
    benefitsTitle: 'Why Parents Choose Our Guide',
    benefitsDescription: 'Trusted by thousands of expecting parents for comprehensive, expert-backed guidance.',
    benefits: [
      {
        icon: Shield,
        title: 'Comprehensive Preparation',
        description: 'Cover every aspect of pregnancy and baby preparation with expert guidance'
      },
      {
        icon: Heart,
        title: 'Reduced Anxiety',
        description: 'Feel confident and prepared for parenthood with clear, actionable steps'
      },
      {
        icon: Clock,
        title: 'Time-Efficient Planning',
        description: 'Organized approach saves time and ensures nothing important is forgotten'
      },
      {
        icon: Target,
        title: 'Expert-Backed Guidance',
        description: 'Evidence-based recommendations from healthcare professionals and experienced parents'
      }
    ],
    featuresIcon: Heart,
    featuresTitle: 'Everything You Need for Confident Parenting',
    featuresDescription: 'Comprehensive toolkit covering pregnancy through baby\'s first year with expert guidance and practical resources.',
    features: [
      'Prenatal care scheduling and health monitoring',
      'Complete baby budget breakdown and cost-saving strategies',
      'Nursery design and safety checklist',
      'Birth plan templates and hospital bag packing lists',
      'Newborn care skill tutorials and feeding guidance',
      'Childcare research and work transition planning',
      'Insurance and legal planning (wills, guardianship)',
      'Postpartum support and recovery planning'
    ],
    ctaTitle: 'Ready to Welcome Your Baby?',
    ctaDescription: 'Join thousands of parents who felt confident and prepared for their baby\'s arrival with our comprehensive planning guide.',
    finalCtaText: 'Start Your Baby Planning Journey',
  },

  'home-buying': {
    badgeIcon: Home,
    badgeText: 'Home Buying',
    heroTitle: 'Find Your',
    heroHighlight: 'Dream Home',
    heroDescription: 'Navigate the home buying process with confidence. Complete guidance from financial readiness to closing day.',
    ctaText: 'Start House Hunting',
    appPath: '/home-buying/app',
    heroCards: [
      {
        badge: 'Pre-Approval',
        content: 'Mortgage pre-approved with clear budget boundaries'
      },
      {
        badge: 'Home Search',
        badgeVariant: 'secondary',
        content: 'Strategic search based on location and lifestyle needs'
      },
      {
        badge: 'Offer Strategy',
        badgeVariant: 'outline',
        content: 'Competitive offers that win in today\'s market'
      },
      {
        badge: 'Closing',
        content: 'Smooth closing process with all paperwork organized'
      }
    ],
    processTitle: 'Complete Home Buying Process',
    processDescription: 'Our step-by-step framework takes you from financial preparation to keys in hand.',
    processSteps: [
      {
        icon: DollarSign,
        title: 'Financial Readiness',
        description: 'Assess your finances, improve credit score, and determine your home buying budget.'
      },
      {
        icon: MapPin,
        title: 'Location & Preferences',
        description: 'Define your ideal location, commute requirements, and lifestyle preferences.'
      },
      {
        icon: Home,
        title: 'Home Specifications',
        description: 'Identify must-haves vs nice-to-haves for your perfect home.'
      },
      {
        icon: CreditCard,
        title: 'Mortgage & Financing',
        description: 'Get pre-approved, compare lenders, and secure the best mortgage terms.'
      },
      {
        icon: Search,
        title: 'House Hunting',
        description: 'Strategic property search and professional home inspections.'
      },
      {
        icon: HandCoins,
        title: 'Making Offers',
        description: 'Competitive offer strategy and skilled negotiation tactics.'
      },
      {
        icon: FileText,
        title: 'Closing Process',
        description: 'Navigate inspections, appraisals, and final closing procedures.'
      },
      {
        icon: Truck,
        title: 'Moving & Settling',
        description: 'Organized moving process and new home setup checklist.'
      }
    ],
    benefitsTitle: 'Why Buyers Choose Our Guide',
    benefitsDescription: 'Proven process that saves time, money, and reduces the stress of home buying.',
    benefits: [
      {
        icon: Shield,
        title: 'Avoid Costly Mistakes',
        description: 'Expert guidance prevents common first-time buyer errors that cost thousands'
      },
      {
        icon: Clock,
        title: 'Faster Process',
        description: 'Organized approach reduces time from search to closing by 30-40%'
      },
      {
        icon: TrendingUp,
        title: 'Better Deals',
        description: 'Strategic negotiation and market analysis help you win in competitive markets'
      },
      {
        icon: Heart,
        title: 'Reduced Stress',
        description: 'Clear roadmap and expert support make home buying enjoyable, not overwhelming'
      }
    ],
    featuresIcon: Heart,
    featuresTitle: 'Everything You Need to Buy Smart',
    featuresDescription: 'Complete toolkit with checklists, calculators, and expert insights for confident home buying.',
    features: [
      'Home affordability calculator and budget planning',
      'Credit score improvement strategies',
      'Neighborhood research and comparison tools',
      'Home inspection and appraisal checklists',
      'Mortgage comparison and pre-approval guidance',
      'Offer strategy and negotiation tactics',
      'Closing timeline and document organization',
      'Moving timeline and new home setup guide'
    ],
    ctaTitle: 'Ready to Buy Your Dream Home?',
    ctaDescription: 'Join thousands of successful homeowners who navigated the buying process with confidence using our comprehensive guide.',
    finalCtaText: 'Start Your Home Buying Journey',
  },

  'event-planning': {
    badgeIcon: PartyPopper,
    badgeText: 'Event Planning',
    heroTitle: 'Create Unforgettable',
    heroHighlight: 'Events',
    heroDescription: 'Plan memorable events from conception to execution with comprehensive coordination tools and expert guidance.',
    ctaText: 'Start Planning',
    appPath: '/event-planning/app',
    heroCards: [
      {
        badge: 'Concept Planning',
        content: 'Clear event vision with defined goals and target audience'
      },
      {
        badge: 'Budget Control',
        badgeVariant: 'secondary',
        content: 'Detailed budget breakdown with cost tracking and savings tips'
      },
      {
        badge: 'Seamless Execution',
        badgeVariant: 'outline',
        content: 'Day-of coordination with backup plans and contingencies'
      }
    ],
    heroBenefits: [
      'Save 60+ hours of planning time',
      'Reduce event planning stress by 80%',
      'Stay within budget with smart tracking',
      'Professional-level event coordination',
      'Memorable experiences for your guests'
    ],
    processTitle: 'Your Event Planning Journey',
    processDescription: 'From initial concept to post-event follow-up, our systematic approach ensures nothing is overlooked.',
    processSteps: [
      {
        icon: Lightbulb,
        title: 'Concept & Vision',
        description: 'Define your event goals, theme, and overall vision to guide all planning decisions.'
      },
      {
        icon: DollarSign,
        title: 'Budget Planning',
        description: 'Create detailed budgets with contingency planning and cost optimization strategies.'
      },
      {
        icon: MapPin,
        title: 'Venue & Logistics',
        description: 'Find the perfect venue and coordinate all logistical requirements and timelines.'
      },
      {
        icon: Users,
        title: 'Vendor Management',
        description: 'Research, negotiate with, and coordinate multiple vendors for seamless execution.'
      }
    ],
    benefitsTitle: 'Why Choose Our Event Planning System',
    benefitsDescription: 'Trusted by thousands of event planners for both personal celebrations and corporate gatherings.',
    benefits: [
      {
        icon: Clock,
        title: 'Time Efficiency',
        description: 'Structured workflows and templates reduce planning time by up to 70%'
      },
      {
        icon: DollarSign,
        title: 'Budget Control',
        description: 'Advanced budget tracking prevents overspending and identifies savings opportunities'
      },
      {
        icon: Shield,
        title: 'Risk Management',
        description: 'Comprehensive contingency planning ensures your event runs smoothly'
      },
      {
        icon: Sparkles,
        title: 'Professional Quality',
        description: 'Industry-tested processes deliver memorable, high-quality events every time'
      },
      {
        icon: Users,
        title: 'Guest Experience',
        description: 'Focus on creating meaningful experiences while we handle the logistics'
      },
      {
        icon: CheckCircle2,
        title: 'Peace of Mind',
        description: 'Detailed checklists and timelines ensure nothing important is forgotten'
      }
    ],
    featuresIcon: Camera,
    featuresTitle: 'Complete Event Planning Toolkit',
    featuresDescription: 'Everything you need to plan and execute successful events of any size and type.',
    features: [
      'Event concept development and theme planning',
      'Comprehensive budget templates and tracking tools',
      'Venue research and comparison frameworks',
      'Vendor evaluation and contract negotiation guides',
      'Timeline creation and milestone tracking',
      'Guest list management and invitation coordination',
      'Day-of event coordination and troubleshooting',
      'Post-event evaluation and feedback collection'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Define Your Vision',
        description: 'Start by clarifying your event goals, target audience, and desired outcomes. Our guided questions help you create a clear vision that guides all subsequent decisions.'
      },
      {
        step: '2',
        title: 'Plan Your Budget',
        description: 'Use our comprehensive budget templates to allocate funds across all event categories. Track expenses in real-time and identify opportunities for cost savings.'
      },
      {
        step: '3',
        title: 'Coordinate Logistics',
        description: 'Find the perfect venue, select reliable vendors, and create detailed timelines. Our coordination tools ensure all moving parts work together seamlessly.'
      },
      {
        step: '4',
        title: 'Execute Flawlessly',
        description: 'Follow our day-of coordination guides to ensure smooth event execution. Handle any challenges with confidence using our troubleshooting protocols.'
      }
    ],
    guidedNotes: [
      {
        name: 'Start Early',
        icon: Calendar,
        description: 'Begin planning 3-6 months in advance for major events to secure the best venues and vendors.'
      },
      {
        name: 'Budget Buffer',
        icon: DollarSign,
        description: 'Always include a 10-15% contingency in your budget for unexpected expenses or last-minute changes.'
      },
      {
        name: 'Vendor Contracts',
        icon: FileText,
        description: 'Read all vendor contracts carefully and negotiate terms that protect your interests and timeline.'
      },
      {
        name: 'Guest Experience',
        icon: Heart,
        description: 'Make decisions with your guests in mind - their comfort and enjoyment should guide your choices.'
      }
    ],
    testimonials: [
      {
        name: 'Sarah Chen',
        role: 'Corporate Event Manager',
        content: 'This template helped me plan a 300-person conference with zero stress. The vendor management tools alone saved me 40 hours of work.',
        image: '/testimonial-sarah.jpg'
      },
      {
        name: 'Michael Rodriguez',
        role: 'Wedding Planner',
        content: 'As a professional event planner, I use this system for every event. It ensures consistency and helps me deliver exceptional results for my clients.',
        image: '/testimonial-michael.jpg'
      },
      {
        name: 'Jennifer Wu',
        role: 'Birthday Party Host',
        content: 'Planned my daughter\'s Sweet 16 with this guide. Everything went perfectly and I actually enjoyed the process instead of stressing about it!',
        image: '/testimonial-jennifer.jpg'
      }
    ],
    faqs: [
      {
        question: 'What types of events can I plan with this template?',
        answer: 'Our template works for any event type - weddings, corporate conferences, birthday parties, fundraisers, product launches, family reunions, and more. The framework is flexible and adaptable to your specific needs.'
      },
      {
        question: 'How far in advance should I start planning?',
        answer: 'We recommend starting 3-6 months ahead for major events like weddings or conferences, 6-8 weeks for mid-size parties, and 2-4 weeks for smaller gatherings. Earlier planning gives you better vendor selection and cost savings.'
      },
      {
        question: 'Can this help with corporate events and business functions?',
        answer: 'Absolutely! Our template includes specific sections for corporate events, including stakeholder management, ROI tracking, networking facilitation, and post-event business impact measurement.'
      },
      {
        question: 'What if I\'ve never planned an event before?',
        answer: 'Perfect! Our template is designed for beginners with step-by-step guidance, expert tips, and common mistake prevention. You\'ll feel confident throughout the entire planning process.'
      },
      {
        question: 'How does the budget tracking work?',
        answer: 'Our budget templates break down costs by category (venue, catering, entertainment, etc.) with real-time tracking, expense comparison tools, and alerts when you\'re approaching limits.'
      },
      {
        question: 'Do you provide vendor recommendations?',
        answer: 'We provide vendor evaluation frameworks and negotiation strategies rather than specific recommendations, so you can find the best local vendors for your needs and budget.'
      },
      {
        question: 'What about day-of event coordination?',
        answer: 'Yes! The template includes detailed day-of coordination checklists, timeline management tools, and emergency protocol guides to ensure smooth event execution.'
      },
      {
        question: 'Can I plan multiple events at once?',
        answer: 'Definitely! The template structure allows you to manage multiple events simultaneously with separate tracking for budgets, timelines, and vendor relationships.'
      }
    ],
    ctaTitle: 'Ready to Plan Your Perfect Event?',
    ctaDescription: 'Join thousands of successful event planners who created memorable experiences using our comprehensive planning system.',
    finalCtaText: 'Start Event Planning',
  },

  'travel-planning': {
    badgeIcon: Plane,
    badgeText: 'Travel Planning',
    heroTitle: 'Plan Your Perfect',
    heroHighlight: 'Adventure',
    heroDescription: 'Create amazing travel experiences with comprehensive trip planning, budget management, and itinerary coordination.',
    ctaText: 'Start Planning',
    appPath: '/travel-planning/app',
    heroCards: [
      {
        badge: 'Itinerary Planning',
        content: 'Detailed day-by-day schedules with activities and reservations'
      },
      {
        badge: 'Budget Control',
        badgeVariant: 'secondary',
        content: 'Smart budget tracking with expense monitoring and savings tips'
      },
      {
        badge: 'Travel Coordination',
        badgeVariant: 'outline',
        content: 'Seamless booking management and travel document organization'
      }
    ],
    heroBenefits: [
      'Save 40+ hours of planning time',
      'Stay within budget with smart tracking',
      'Never miss a reservation or booking',
      'Stress-free travel coordination',
      'Memorable experiences every trip'
    ],
    processTitle: 'Your Travel Planning Journey',
    processDescription: 'From destination research to post-trip memories, our systematic approach ensures unforgettable adventures.',
    processSteps: [
      {
        icon: Compass,
        title: 'Destination Research',
        description: 'Explore destinations, compare options, and choose the perfect location for your trip.'
      },
      {
        icon: DollarSign,
        title: 'Budget Planning',
        description: 'Set realistic budgets, track expenses, and find the best deals on flights and accommodations.'
      },
      {
        icon: Calendar,
        title: 'Itinerary Building',
        description: 'Create detailed daily schedules with activities, reservations, and transportation.'
      },
      {
        icon: Luggage,
        title: 'Travel Coordination',
        description: 'Organize documents, pack efficiently, and coordinate all travel logistics.'
      }
    ],
    benefitsTitle: 'Why Choose Our Travel Planning System',
    benefitsDescription: 'Trusted by thousands of travelers for both leisure vacations and business trips worldwide.',
    benefits: [
      {
        icon: Clock,
        title: 'Time Efficiency',
        description: 'Structured planning process reduces research and booking time by up to 75%'
      },
      {
        icon: DollarSign,
        title: 'Budget Optimization',
        description: 'Smart budget tracking and deal-finding tools help you save 20-30% on travel costs'
      },
      {
        icon: Shield,
        title: 'Risk Management',
        description: 'Comprehensive backup plans and travel insurance guidance protect your investment'
      },
      {
        icon: Star,
        title: 'Experience Quality',
        description: 'Curated recommendations and expert tips ensure memorable, high-quality experiences'
      },
      {
        icon: Navigation,
        title: 'Seamless Coordination',
        description: 'Centralized booking management and document organization eliminate travel stress'
      },
      {
        icon: Globe,
        title: 'Global Coverage',
        description: 'Comprehensive guides and tips for destinations worldwide, from cities to remote locations'
      }
    ],
    featuresIcon: Passport,
    featuresTitle: 'Complete Travel Planning Toolkit',
    featuresDescription: 'Everything you need to plan and execute amazing trips, from weekend getaways to international adventures.',
    features: [
      'Destination research and comparison tools',
      'Comprehensive budget planning and expense tracking',
      'Flight and accommodation booking coordination',
      'Daily itinerary building and activity planning',
      'Travel document and insurance organization',
      'Packing checklists and preparation guides',
      'Local transportation and navigation planning',
      'Post-trip memory collection and sharing'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Choose Your Destination',
        description: 'Research destinations based on your interests, budget, and travel dates. Our comparison tools help you evaluate options and make informed decisions.'
      },
      {
        step: '2',
        title: 'Plan Your Budget',
        description: 'Set realistic budgets for all trip categories and track expenses in real-time. Find the best deals on flights, hotels, and activities.'
      },
      {
        step: '3',
        title: 'Build Your Itinerary',
        description: 'Create detailed day-by-day plans with activities, dining, and transportation. Balance must-see attractions with relaxation time.'
      },
      {
        step: '4',
        title: 'Coordinate Everything',
        description: 'Organize all bookings, documents, and logistics in one place. Prepare for departure with comprehensive checklists and guides.'
      }
    ],
    guidedNotes: [
      {
        name: 'Book Early',
        icon: Calendar,
        description: 'Start planning 2-6 months ahead for international trips to secure better prices and availability.'
      },
      {
        name: 'Budget Buffer',
        icon: DollarSign,
        description: 'Add 15-20% to your budget for unexpected expenses, currency fluctuations, and spontaneous activities.'
      },
      {
        name: 'Document Backup',
        icon: Passport,
        description: 'Keep digital and physical copies of important documents in separate locations for security.'
      },
      {
        name: 'Local Research',
        icon: Globe,
        description: 'Research local customs, tipping practices, and cultural norms to enhance your travel experience.'
      }
    ],
    testimonials: [
      {
        name: 'Jessica Martinez',
        role: 'Travel Blogger',
        content: 'This template transformed how I plan trips! I used it for a 3-week European adventure and everything went perfectly. The budget tracking alone saved me $800.',
        image: '/testimonial-jessica.jpg'
      },
      {
        name: 'Robert Kim',
        role: 'Business Executive',
        content: 'As someone who travels frequently for work, this system keeps all my business and personal trips organized. It\'s saved me countless hours and stress.',
        image: '/testimonial-robert.jpg'
      },
      {
        name: 'Amanda Foster',
        role: 'Family Travel Coordinator',
        content: 'Planning family vacations with kids used to be overwhelming. This template made our Disney trip seamless - everyone had an amazing time!',
        image: '/testimonial-amanda.jpg'
      }
    ],
    faqs: [
      {
        question: 'What types of trips can I plan with this template?',
        answer: 'Our template works for any type of travel - business trips, family vacations, solo adventures, group travel, honeymoons, study abroad, and more. The framework is flexible and adapts to your specific travel style and needs.'
      },
      {
        question: 'How far in advance should I start planning?',
        answer: 'We recommend starting 2-3 months ahead for domestic trips and 3-6 months for international travel. This gives you the best selection and prices for flights and accommodations, plus adequate time for visa processing if needed.'
      },
      {
        question: 'Does this help with international travel and visas?',
        answer: 'Yes! Our template includes comprehensive international travel sections covering visa requirements, passport validity, vaccination needs, currency exchange, and cultural preparation guides.'
      },
      {
        question: 'Can I plan multiple trips at the same time?',
        answer: 'Absolutely! The template structure allows you to manage multiple trips simultaneously with separate tracking for budgets, itineraries, and booking details for each destination.'
      },
      {
        question: 'What about travel insurance and safety planning?',
        answer: 'Our template includes detailed travel insurance evaluation guides, emergency contact organization, health and safety preparation, and risk assessment tools for different destinations.'
      },
      {
        question: 'How does the budget tracking work?',
        answer: 'Our budget system breaks down costs by category (flights, hotels, food, activities, etc.) with real-time tracking, currency conversion tools, and alerts when you\'re approaching your limits.'
      },
      {
        question: 'Do you provide specific destination recommendations?',
        answer: 'We provide destination research frameworks and evaluation criteria rather than specific recommendations, so you can choose destinations that match your interests, budget, and travel style.'
      },
      {
        question: 'Can this help with group travel coordination?',
        answer: 'Yes! The template includes special sections for group travel with communication tools, responsibility delegation, group booking coordination, and consensus-building frameworks.'
      }
    ],
    ctaTitle: 'Ready to Plan Your Next Adventure?',
    ctaDescription: 'Join thousands of travelers who create unforgettable experiences using our comprehensive planning system.',
    finalCtaText: 'Start Travel Planning',
  },

  'meal-planning': {
    badgeIcon: Utensils,
    badgeText: 'Meal Planning',
    heroTitle: 'Eat Better, Save',
    heroHighlight: 'Time & Money',
    heroDescription: 'Plan healthy, delicious meals with smart grocery lists, budget tracking, and nutrition optimization.',
    ctaText: 'Start Planning',
    appPath: '/meal-planning/app',
    heroCards: [
      {
        badge: 'Meal Planning',
        content: 'Weekly meal plans with balanced nutrition and variety'
      },
      {
        badge: 'Smart Shopping',
        badgeVariant: 'secondary',
        content: 'Organized grocery lists that save time and money'
      },
      {
        badge: 'Healthy Choices',
        badgeVariant: 'outline',
        content: 'Nutritionally balanced meals for your health goals'
      }
    ],
    heroBenefits: [
      'Save 8+ hours per week on meal planning',
      'Reduce grocery spending by 25-30%',
      'Eat healthier with balanced nutrition',
      'Eliminate daily "what\'s for dinner?" stress',
      'Reduce food waste and impulse purchases'
    ],
    processTitle: 'Your Meal Planning Journey',
    processDescription: 'From nutrition goals to grocery shopping, our systematic approach makes healthy eating effortless.',
    processSteps: [
      {
        icon: Target,
        title: 'Set Nutrition Goals',
        description: 'Define your dietary preferences, health goals, and family needs for personalized planning.'
      },
      {
        icon: ChefHat,
        title: 'Plan Weekly Menus',
        description: 'Create balanced meal plans with recipes that match your schedule and preferences.'
      },
      {
        icon: ShoppingCart,
        title: 'Generate Shopping Lists',
        description: 'Automatically organize ingredients into efficient grocery lists by store section.'
      },
      {
        icon: Timer,
        title: 'Prep & Execute',
        description: 'Follow prep schedules and cooking timelines for stress-free meal execution.'
      }
    ],
    benefitsTitle: 'Why Choose Our Meal Planning System',
    benefitsDescription: 'Trusted by thousands of families and individuals for healthier eating and simplified meal management.',
    benefits: [
      {
        icon: Clock,
        title: 'Time Efficiency',
        description: 'Streamlined planning process saves 8+ hours per week on meal decisions and shopping'
      },
      {
        icon: DollarSign,
        title: 'Budget Control',
        description: 'Strategic meal planning reduces grocery spending by 25-30% while eliminating food waste'
      },
      {
        icon: Apple,
        title: 'Health Optimization',
        description: 'Balanced nutrition planning helps achieve health goals and dietary requirements'
      },
      {
        icon: Shield,
        title: 'Stress Reduction',
        description: 'Eliminate daily meal decisions and last-minute grocery runs with organized planning'
      },
      {
        icon: Leaf,
        title: 'Sustainability',
        description: 'Reduce food waste and make environmentally conscious food choices'
      },
      {
        icon: Scale,
        title: 'Portion Control',
        description: 'Better portion planning supports weight management and health goals'
      }
    ],
    featuresIcon: Calculator,
    featuresTitle: 'Complete Meal Planning Toolkit',
    featuresDescription: 'Everything you need to plan, shop for, and prepare healthy meals efficiently.',
    features: [
      'Weekly and monthly meal planning calendars',
      'Recipe organization and scaling tools',
      'Automated grocery list generation',
      'Nutrition tracking and goal setting',
      'Budget planning and cost tracking',
      'Meal prep scheduling and timing guides',
      'Dietary restriction and allergy management',
      'Leftover planning and food waste reduction'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Set Your Goals',
        description: 'Define your nutrition goals, dietary restrictions, budget targets, and family preferences. Our system creates a personalized framework for your meal planning success.'
      },
      {
        step: '2',
        title: 'Plan Your Meals',
        description: 'Use our meal planning calendar to schedule breakfast, lunch, dinner, and snacks. Balance nutrition, variety, and preparation time to fit your lifestyle.'
      },
      {
        step: '3',
        title: 'Shop Efficiently',
        description: 'Generate organized shopping lists from your meal plans. Group ingredients by store section and track costs to stay within budget while avoiding impulse purchases.'
      },
      {
        step: '4',
        title: 'Prep and Enjoy',
        description: 'Follow meal prep schedules and cooking timelines to execute your plans efficiently. Track what works and adjust future plans based on your experience.'
      }
    ],
    guidedNotes: [
      {
        name: 'Start Simple',
        icon: Lightbulb,
        description: 'Begin with planning just dinners for one week, then gradually expand to include more meals and longer planning periods.'
      },
      {
        name: 'Batch Cooking',
        icon: Timer,
        description: 'Plan meals that share ingredients or can be batch-cooked to save time and money while reducing food waste.'
      },
      {
        name: 'Seasonal Planning',
        icon: Leaf,
        description: 'Incorporate seasonal produce for better flavor, nutrition, and cost savings while supporting sustainable eating habits.'
      },
      {
        name: 'Flexibility First',
        icon: Target,
        description: 'Build flexibility into your plans with backup meals and ingredient substitutions for when life gets busy or plans change.'
      }
    ],
    testimonials: [
      {
        name: 'Maria Gonzalez',
        role: 'Busy Mom of Three',
        content: 'This system revolutionized our family meals! We\'re eating healthier, saving $200+ monthly on groceries, and I no longer stress about dinner every day.',
        image: '/testimonial-maria.jpg'
      },
      {
        name: 'James Wilson',
        role: 'Fitness Enthusiast',
        content: 'Perfect for tracking macros and meal prep. I hit my nutrition goals consistently now and save hours each week with organized planning.',
        image: '/testimonial-james.jpg'
      },
      {
        name: 'Sarah Chen',
        role: 'Working Professional',
        content: 'As someone with limited cooking time, this template helps me eat healthy home-cooked meals without the daily stress of figuring out what to make.',
        image: '/testimonial-sarah-meal.jpg'
      }
    ],
    faqs: [
      {
        question: 'Can this work for different dietary restrictions and preferences?',
        answer: 'Absolutely! Our template accommodates all dietary needs including vegetarian, vegan, keto, paleo, gluten-free, dairy-free, and other restrictions. You can customize meal plans for any combination of dietary requirements.'
      },
      {
        question: 'How much time does meal planning actually save?',
        answer: 'Most users save 8-12 hours per week by eliminating daily meal decisions, reducing grocery store trips, and streamlining food preparation. The initial setup takes 2-3 hours but pays dividends immediately.'
      },
      {
        question: 'Will this really help me save money on groceries?',
        answer: 'Yes! Strategic meal planning typically reduces grocery spending by 25-30% by eliminating food waste, preventing impulse purchases, and allowing you to buy ingredients in optimal quantities and take advantage of sales.'
      },
      {
        question: 'What if I don\'t like to cook or I\'m a beginner?',
        answer: 'Our template includes simple recipes, cooking skill development guides, and meal options for all skill levels. You can start with easy 15-minute meals and gradually build your cooking confidence and repertoire.'
      },
      {
        question: 'Can I plan meals for a family with different preferences?',
        answer: 'Definitely! The template includes strategies for family meal planning with customizable components, kid-friendly options, and ways to accommodate different taste preferences within the same meal framework.'
      },
      {
        question: 'How does nutrition tracking work?',
        answer: 'Our system helps you track key nutrients, calories, and macronutrients based on your health goals. You can monitor protein intake, ensure vitamin variety, and balance meals for optimal nutrition without complex calculations.'
      },
      {
        question: 'What about meal prep and food storage?',
        answer: 'The template includes comprehensive meal prep guides, food storage best practices, and batch cooking strategies to maximize efficiency while maintaining food quality and safety.'
      },
      {
        question: 'Can I use this for weight loss or fitness goals?',
        answer: 'Yes! The template supports various health goals including weight loss, muscle building, and general wellness with portion control guidance, macro tracking, and meal timing strategies aligned with your fitness objectives.'
      }
    ],
    ctaTitle: 'Ready to Transform Your Eating Habits?',
    ctaDescription: 'Join thousands of people who simplified their meal planning, improved their health, and saved time and money with our comprehensive system.',
    finalCtaText: 'Start Meal Planning',
  },

  'fitness-journey': {
    badgeIcon: Dumbbell,
    badgeText: 'Fitness Journey',
    heroTitle: 'Transform Your Body,',
    heroHighlight: 'Mind & Life',
    heroDescription: 'Achieve your fitness goals with structured workout plans, nutrition tracking, and progress monitoring.',
    ctaText: 'Start Your Journey',
    appPath: '/fitness-journey/app',
    heroCards: [
      {
        badge: 'Workout Planning',
        content: 'Structured exercise routines tailored to your goals and schedule'
      },
      {
        badge: 'Progress Tracking',
        badgeVariant: 'secondary',
        content: 'Comprehensive monitoring of strength, endurance, and body changes'
      },
      {
        badge: 'Nutrition Support',
        badgeVariant: 'outline',
        content: 'Meal planning and macro tracking for optimal performance'
      }
    ],
    heroBenefits: [
      'Achieve fitness goals 3x faster',
      'Build sustainable healthy habits',
      'Track strength and endurance gains',
      'Improve energy and mental clarity',
      'Create lifelong wellness routines'
    ],
    processTitle: 'Your Fitness Transformation Journey',
    processDescription: 'From goal setting to achievement, our comprehensive system guides you through every step of your fitness journey.',
    processSteps: [
      {
        icon: Target,
        title: 'Set Clear Goals',
        description: 'Define specific, measurable fitness goals based on your lifestyle and aspirations.'
      },
      {
        icon: Dumbbell,
        title: 'Plan Your Workouts',
        description: 'Create structured workout routines that fit your schedule and target your goals.'
      },
      {
        icon: BarChart3,
        title: 'Track Progress',
        description: 'Monitor strength gains, endurance improvements, and body composition changes.'
      },
      {
        icon: Trophy,
        title: 'Celebrate Success',
        description: 'Recognize achievements and adjust plans for continued growth and motivation.'
      }
    ],
    benefitsTitle: 'Why Choose Our Fitness System',
    benefitsDescription: 'Trusted by thousands of fitness enthusiasts for sustainable results and long-term success.',
    benefits: [
      {
        icon: Clock,
        title: 'Time Efficient',
        description: 'Structured workouts maximize results while fitting into busy schedules'
      },
      {
        icon: Progress,
        title: 'Measurable Progress',
        description: 'Track strength, endurance, and body composition changes with precision'
      },
      {
        icon: Target,
        title: 'Goal Achievement',
        description: 'Systematic approach to reaching specific fitness milestones and targets'
      },
      {
        icon: Shield,
        title: 'Injury Prevention',
        description: 'Proper progression and form guidance reduce injury risk and ensure safety'
      },
      {
        icon: Energy,
        title: 'Increased Energy',
        description: 'Balanced training improves daily energy levels and overall life quality'
      },
      {
        icon: Heart,
        title: 'Holistic Health',
        description: 'Comprehensive approach improves physical, mental, and emotional well-being'
      }
    ],
    featuresIcon: Activity,
    featuresTitle: 'Complete Fitness Planning Toolkit',
    featuresDescription: 'Everything you need to plan, execute, and track your fitness journey effectively.',
    features: [
      'Customizable workout routines for all fitness levels',
      'Progressive overload tracking and planning',
      'Nutrition planning and macro tracking',
      'Body measurement and progress photo organization',
      'Exercise form guides and safety tips',
      'Recovery and rest day planning',
      'Goal setting and milestone celebration',
      'Habit formation and consistency tracking'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Assess & Goal Set',
        description: 'Evaluate your current fitness level, identify areas for improvement, and set specific, achievable goals that align with your lifestyle and aspirations.'
      },
      {
        step: '2',
        title: 'Design Your Program',
        description: 'Create a structured workout plan that targets your goals, fits your schedule, and progresses appropriately to prevent plateaus and injuries.'
      },
      {
        step: '3',
        title: 'Execute & Track',
        description: 'Follow your plan consistently while tracking workouts, measurements, and progress photos to monitor your transformation journey.'
      },
      {
        step: '4',
        title: 'Adapt & Grow',
        description: 'Regularly assess progress, celebrate achievements, and adjust your program to continue challenging yourself and achieving new goals.'
      }
    ],
    guidedNotes: [
      {
        name: 'Start Gradually',
        icon: Lightbulb,
        description: 'Begin with manageable workouts and gradually increase intensity to build sustainable habits and prevent burnout.'
      },
      {
        name: 'Consistency Key',
        icon: Calendar,
        description: 'Regular, moderate exercise is more effective than sporadic intense sessions for long-term fitness success.'
      },
      {
        name: 'Rest & Recovery',
        icon: Shield,
        description: 'Schedule adequate rest days and prioritize sleep for optimal recovery, adaptation, and injury prevention.'
      },
      {
        name: 'Nutrition Matters',
        icon: Apple,
        description: 'Fuel your workouts and recovery with proper nutrition aligned with your fitness goals and training demands.'
      }
    ],
    testimonials: [
      {
        name: 'Michael Rodriguez',
        role: 'Busy Executive',
        content: 'This system helped me lose 30 pounds and gain strength while working 60-hour weeks. The structured approach made fitness finally sustainable for me.',
        image: '/testimonial-michael-fitness.jpg'
      },
      {
        name: 'Sarah Johnson',
        role: 'New Mom',
        content: 'After having my baby, I thought I\'d never get back in shape. This program helped me rebuild my strength and energy in just 20-minute daily sessions.',
        image: '/testimonial-sarah-fitness.jpg'
      },
      {
        name: 'David Park',
        role: 'Former Couch Potato',
        content: 'I went from never exercising to running my first marathon in 18 months. The progressive approach made the impossible feel achievable.',
        image: '/testimonial-david-fitness.jpg'
      }
    ],
    faqs: [
      {
        question: 'Do I need gym access or can I workout at home?',
        answer: 'Our template works for both! We include bodyweight routines for home workouts, gym-based programs, and hybrid approaches. You can adapt any plan to your available equipment and space.'
      },
      {
        question: 'Is this suitable for complete beginners?',
        answer: 'Absolutely! The template includes beginner-friendly routines with proper progression, form guidance, and modification options. We help you build a foundation safely and effectively.'
      },
      {
        question: 'How long before I see results?',
        answer: 'Most people notice increased energy within 1-2 weeks, strength improvements within 4-6 weeks, and visible body changes within 8-12 weeks with consistent effort and proper nutrition.'
      },
      {
        question: 'Can this help with specific goals like weight loss or muscle building?',
        answer: 'Yes! Our system includes specialized programs for weight loss, muscle building, endurance improvement, and general fitness with customized workout and nutrition guidance for each goal.'
      },
      {
        question: 'How much time do I need to commit each day?',
        answer: 'Our programs are flexible, ranging from 20-minute daily sessions to longer workout blocks. We help you find an approach that fits your schedule while still delivering results.'
      },
      {
        question: 'What if I have physical limitations or injuries?',
        answer: 'The template includes modification options and alternative exercises for common limitations. However, we always recommend consulting with healthcare professionals for specific medical conditions.'
      },
      {
        question: 'How does nutrition tracking work?',
        answer: 'Our nutrition component helps you understand caloric needs, track macronutrients, and plan meals that support your fitness goals without requiring complex calculations or restrictive dieting.'
      },
      {
        question: 'What about rest days and recovery?',
        answer: 'Recovery is built into all our programs! We include guidance on rest day planning, active recovery, sleep optimization, and stress management for optimal results and injury prevention.'
      }
    ],
    ctaTitle: 'Ready to Start Your Transformation?',
    ctaDescription: 'Join thousands of people who achieved their fitness goals with our comprehensive, sustainable approach to health and wellness.',
    finalCtaText: 'Begin Your Fitness Journey',
  }
};

export const getLandingPageData = (templateId: string): LandingPageData | undefined => {
  return landingPageRegistry[templateId];
};