import { LucideIcon } from 'lucide-react';
import { Metadata } from 'next';
import { 
  Rocket, Shield, Heart, Clock, TrendingUp, Lightbulb, FileText, DollarSign, Target, Users,
  Briefcase, Search, Handshake, Award, BookOpen,
  Baby, Stethoscope, Calendar, Activity,
  Home, MapPin, CreditCard, HandCoins, Truck,
  Sparkles, CheckCircle2, Zap, Camera, Music, PartyPopper, Utensils, Megaphone,
  PenTool, ChefHat, Mic, Plane, Compass, Globe, Luggage, Star, Navigation,
  ShoppingCart, Apple, Leaf, Timer, Scale, Calculator, Dumbbell, TrendingUp as Progress, 
  BarChart3, Trophy, Zap as Energy, GraduationCap, Library, School, MapPinIcon,
  Package, CheckSquare, ClipboardList, ArrowRight, PiggyBank, Wallet, Receipt, ChartLine,
  CreditCardIcon, Banknote, TrendingDown, AlertTriangle, Percent, Focus, Layout, Settings,
  Brain, Workflow, CheckCircle, PlayCircle, PauseCircle, RotateCcw, Database, FileSearch,
  BookmarkIcon, PenSquare, BarChart, Microscope, MessageSquare
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

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface HeroBenefit {
  text: string;
}

export interface LandingPageData {
  // SEO & Metadata (optional)
  metadata?: Metadata;
  jsonLd?: Record<string, unknown>;
  faqJsonLd?: Record<string, unknown>;

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
  'budget-planning': {
    // SEO metadata
    metadata: {
      title: 'Budget Planning Template | Master Your Finances & Save 30+ Hours | Templata',
      description: 'Complete budget planning template with expense tracking, debt management, savings goals, and financial insights. Used by 25,000+ individuals. Take control of your finances.',
      keywords: 'budget planner, personal finance template, budget tracker, expense tracker, debt payoff, savings goals, financial planning, money management, budget spreadsheet, personal budget',
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Budget Planning Template",
      "description": "Complete budget planning template with expense tracking, debt management, savings goals, and financial insights. Take control of your finances.",
      "url": "https://templata.com/budget-planning",
      "applicationCategory": "ProductivityApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "25000"
      },
      "creator": {
        "@type": "Organization",
        "name": "Templata"
      }
    },

    // Hero Section
    badgeIcon: PiggyBank,
    heroTitle: "Master Your Finances with Smart Budget Planning",
    heroHighlight: "Take Control of Your Money",
    heroDescription: "Transform your financial future with our comprehensive budget planning system. Track expenses, eliminate debt, build savings, and achieve your financial goals with guided planning that works.",
    heroCards: [
      { 
        badge: "Expense Tracking", 
        badgeVariant: "outline" as const,
        content: "Automatically categorize and track all your expenses to see exactly where your money goes",
      },
      { 
        badge: "Debt Elimination", 
        badgeVariant: "secondary" as const,
        content: "Strategic debt payoff plans using snowball or avalanche methods to become debt-free faster",
      },
      { 
        badge: "Savings Goals", 
        badgeVariant: "default" as const,
        content: "Set and achieve financial goals with automatic progress tracking and milestone celebrations",
      }
    ],
    heroBenefits: [
      { text: "💰 Save $2,000+ annually through better spending awareness" },
      { text: "🎯 Achieve financial goals 3x faster with structured planning" },
      { text: "📊 Reduce financial stress by 75% with clear money management" },
      { text: "🏦 Build emergency fund and eliminate debt systematically" },
    ],

    // Hero Section Properties
    badgeText: 'Budget Planning',
    ctaText: 'Start Budgeting Free',
    appPath: '/budget-planning/app',

    // Process Section
    processTitle: 'Your Budget Planning Journey',
    processDescription: 'Follow our proven 4-step framework to master your finances and achieve your financial goals.',

    // Benefits Section
    benefitsTitle: 'Everything You Need for Financial Success',
    benefitsDescription: 'Comprehensive budget planning toolkit with proven strategies and expert insights.',

    // Features Section
    featuresIcon: PiggyBank,
    featuresTitle: 'Complete Budget Planning System',
    featuresDescription: 'All the tools and templates you need to take control of your finances.',

    // Process Steps
    processSteps: [
      {
        icon: Calculator,
        title: "Income & Expense Analysis",
        description: "Track all income sources and categorize expenses to understand your financial baseline"
      },
      {
        icon: Target,
        title: "Goal Setting & Planning",
        description: "Set SMART financial goals and create actionable plans to achieve them"
      },
      {
        icon: BarChart3,
        title: "Budget Optimization",
        description: "Identify spending patterns and optimize your budget for maximum savings potential"
      },
      {
        icon: Trophy,
        title: "Financial Freedom",
        description: "Execute your plan and build lasting wealth through disciplined money management"
      }
    ],

    // Benefits Section
    benefits: [
      {
        icon: DollarSign,
        title: "Complete Financial Overview",
        description: "Get a crystal-clear picture of your finances with comprehensive income, expense, and net worth tracking."
      },
      {
        icon: TrendingUp,
        title: "Smart Savings Strategies",
        description: "Automated savings recommendations and goal-based planning to maximize your wealth building potential."
      },
      {
        icon: CreditCard,
        title: "Debt Elimination System",
        description: "Strategic debt payoff calculators using proven snowball and avalanche methods to become debt-free faster."
      },
      {
        icon: Shield,
        title: "Emergency Fund Builder",
        description: "Systematic emergency fund planning to protect against financial setbacks and unexpected expenses."
      },
      {
        icon: BarChart3,
        title: "Spending Analytics",
        description: "Deep insights into spending patterns with visual reports and trend analysis to identify improvement opportunities."
      },
      {
        icon: Target,
        title: "Goal Achievement System",
        description: "SMART goal setting with milestone tracking, progress visualization, and achievement celebrations."
      }
    ],

    // Features Section
    features: [
      "Expense Categorization - Automatically sort expenses into customizable categories",
      "Financial Reporting - Monthly, quarterly, and annual reports with trend analysis",
      "Savings Rate Calculator - Track your savings rate and get wealth building recommendations",
      "Bill Reminder System - Never miss a payment with smart bill tracking",
      "Investment Allocation - Plan and track investment contributions with portfolio recommendations",
      "Cash Flow Management - Forecast future cash flow and identify potential shortfalls"
    ],

    // How It Works Section
    howItWorks: [
      {
        step: "01",
        title: "Set Up Your Financial Foundation",
        description: "Enter your income sources, list all expenses, and establish your baseline financial picture."
      },
      {
        step: "02", 
        title: "Create Your Custom Budget",
        description: "Build a personalized budget using the 50/30/20 rule or custom allocation that fits your lifestyle."
      },
      {
        step: "03",
        title: "Track and Optimize Daily",
        description: "Log expenses, monitor progress, and receive insights to optimize your spending and savings."
      },
      {
        step: "04",
        title: "Achieve Financial Goals",
        description: "Follow your plan to eliminate debt, build emergency savings, and achieve long-term wealth goals."
      }
    ],

    // Guided Notes
    guidedNotes: [
      {
        name: "50/30/20 Budget Method",
        icon: Percent,
        description: "Allocate 50% to needs, 30% to wants, and 20% to savings and debt repayment for balanced financial health."
      },
      {
        name: "Emergency Fund Priority",
        icon: Shield,
        description: "Build 3-6 months of expenses in emergency savings before focusing on aggressive debt payoff or investments."
      },
      {
        name: "Debt Avalanche Strategy",
        icon: TrendingDown,
        description: "Pay minimums on all debts, then put extra toward highest interest rate debt to minimize total interest paid."
      },
      {
        name: "Automated Savings",
        icon: PiggyBank,
        description: "Set up automatic transfers to savings accounts to make wealth building effortless and consistent."
      }
    ],

    // Testimonials

    // FAQ Section
    faqs: [
      {
        question: "How does this budget template differ from other budgeting tools?",
        answer: "Our template combines comprehensive tracking with guided financial education. Unlike basic spreadsheets, it includes automated calculations, debt payoff strategies, goal-setting frameworks, and personalized recommendations to help you build wealth systematically."
      },
      {
        question: "Is this suitable for people with irregular income?",
        answer: "Absolutely! The template includes special features for variable income including conservative budgeting methods, income averaging, and buffer planning. Many freelancers and seasonal workers use this system successfully."
      },
      {
        question: "How much time does budget management take each day?",
        answer: "Most users spend 5-10 minutes daily logging expenses and reviewing progress. Monthly reviews take 30-45 minutes. The time investment quickly pays for itself through better financial decision-making and increased savings."
      },
      {
        question: "Can I track multiple accounts and debt sources?",
        answer: "Yes! The template handles unlimited accounts, credit cards, loans, and investment accounts. Everything syncs into comprehensive net worth and cash flow reports for complete financial visibility."
      },
      {
        question: "Does it include investment and retirement planning?",
        answer: "The template includes basic investment allocation guidance and retirement savings calculators. For advanced investment planning, we recommend consulting with a financial advisor while using this tool for budgeting and cash flow management."
      },
      {
        question: "Is my financial information secure and private?",
        answer: "Your financial data never leaves your device. The template works entirely offline in your preferred spreadsheet application. No data is transmitted to external servers, ensuring complete privacy and security."
      }
    ],

    // CTA Section
    ctaTitle: "Start Building Wealth Today",
    ctaDescription: "Join 25,000+ people who've transformed their finances with smart budget planning. Take control of your money and build the financial future you deserve.",
    finalCtaText: "Get Your Free Budget Template"
  },
  'productivity-system': {
    // SEO metadata
    metadata: {
      title: 'Productivity System Template | Master Time Management & Get 40+ Hours Back | Templata',
      description: 'Complete productivity system with time blocking, task management, goal tracking, and focus techniques. Used by 30,000+ professionals. Double your productivity today.',
      keywords: 'productivity system, time management, task management, time blocking, Getting Things Done, GTD, productivity planner, focus techniques, goal setting, habit tracker',
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Productivity System Template",
      "description": "Complete productivity system with time blocking, task management, goal tracking, and focus techniques. Master your time and double your output.",
      "url": "https://templata.com/productivity-system",
      "applicationCategory": "ProductivityApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "30000"
      },
      "creator": {
        "@type": "Organization",
        "name": "Templata"
      }
    },

    // Hero Section
    badgeIcon: Zap,
    heroTitle: "Double Your Productivity with Smart Time Management",
    heroHighlight: "Get 40+ Hours Back Each Month",
    heroDescription: "Transform how you work with our comprehensive productivity system. Master time blocking, eliminate distractions, achieve your goals, and build unstoppable momentum with proven methods that actually work.",
    heroCards: [
      { 
        badge: "Time Blocking", 
        badgeVariant: "outline" as const,
        content: "Schedule your entire day with precision time blocks that maximize focus and eliminate decision fatigue",
      },
      { 
        badge: "Task Management", 
        badgeVariant: "secondary" as const,
        content: "Capture, organize, and execute all your tasks with the proven Getting Things Done (GTD) methodology",
      },
      { 
        badge: "Goal Achievement", 
        badgeVariant: "default" as const,
        content: "Break down big goals into actionable steps with progress tracking and accountability systems",
      }
    ],
    heroBenefits: [
      { text: "⚡ Get 40+ hours back each month through better time management" },
      { text: "🎯 Complete 2x more meaningful work with focused execution" },
      { text: "📈 Achieve long-term goals 5x faster with systematic planning" },
      { text: "🧠 Reduce decision fatigue and mental clutter by 80%" },
    ],

    // Hero Section Properties
    badgeText: 'Productivity System',
    ctaText: 'Start Organizing Free',
    appPath: '/productivity-system/app',

    // Process Section
    processTitle: 'Your Productivity Transformation',
    processDescription: 'Follow our proven 4-step framework to master your time and double your meaningful output.',

    // Benefits Section
    benefitsTitle: 'Everything You Need for Peak Productivity',
    benefitsDescription: 'Complete productivity system with proven methods used by top performers worldwide.',

    // Features Section
    featuresIcon: Rocket,
    featuresTitle: 'Complete Productivity Toolkit',
    featuresDescription: 'All the systems, templates, and techniques you need to maximize your productivity.',

    // Process Steps
    processSteps: [
      {
        icon: Brain,
        title: "Capture & Organize",
        description: "Get everything out of your head and into a trusted system using proven capture methods"
      },
      {
        icon: Layout,
        title: "Plan & Prioritize", 
        description: "Structure your day with time blocks and priority matrices for maximum impact"
      },
      {
        icon: Focus,
        title: "Execute & Track",
        description: "Work with laser focus using proven techniques while tracking progress systematically"
      },
      {
        icon: Trophy,
        title: "Review & Optimize",
        description: "Regular reviews and system optimization to continuously improve your productivity"
      }
    ],

    // Benefits Section
    benefits: [
      {
        icon: Clock,
        title: "Master Time Blocking",
        description: "Learn advanced time blocking techniques to eliminate multitasking and achieve deep focus on your most important work."
      },
      {
        icon: CheckCircle,
        title: "Complete Task Management",
        description: "Implement the full Getting Things Done system with inbox processing, project planning, and next action organization."
      },
      {
        icon: Target,
        title: "Goal Achievement Framework",
        description: "Turn ambitious goals into reality with systematic quarterly planning, milestone tracking, and progress reviews."
      },
      {
        icon: Brain,
        title: "Eliminate Mental Clutter",
        description: "Clear your mind completely by capturing every commitment, idea, and task in a trusted external system."
      },
      {
        icon: Workflow,
        title: "Optimize Your Workflows",
        description: "Streamline repetitive tasks and create efficient workflows that save hours of time each week."
      },
      {
        icon: BarChart3,
        title: "Track Your Progress",
        description: "Measure productivity improvements with detailed analytics and reporting on time usage and goal progress."
      }
    ],

    // Features Section
    features: [
      "Advanced Time Blocking - Color-coded time blocks with energy management and deep work protection",
      "GTD Task System - Complete Getting Things Done implementation with contexts and projects",
      "SMART Goal Planning - Quarterly goal setting with milestone tracking and progress visualization",
      "Focus & Flow States - Pomodoro timers, distraction blockers, and flow state triggers",
      "Weekly Review System - Structured weekly reviews to reflect, plan, and optimize productivity",
      "Productivity Analytics - Detailed reports on time usage, task completion, and goal achievement"
    ],

    // How It Works Section
    howItWorks: [
      {
        step: "01",
        title: "Set Up Your Capture System",
        description: "Create trusted inboxes for capturing all tasks, ideas, and commitments as they come up."
      },
      {
        step: "02", 
        title: "Organize Using GTD Methods",
        description: "Process your inbox regularly and organize tasks by context, energy level, and priority."
      },
      {
        step: "03",
        title: "Plan Your Ideal Week",
        description: "Use time blocking to schedule your most important work during your peak energy hours."
      },
      {
        step: "04",
        title: "Execute and Review",
        description: "Work your plan with focus techniques, then review and optimize your system weekly."
      }
    ],

    // Guided Notes
    guidedNotes: [
      {
        name: "Two-Minute Rule",
        icon: Timer,
        description: "If a task takes less than 2 minutes, do it immediately rather than adding it to your system."
      },
      {
        name: "Energy Management",
        icon: Energy,
        description: "Schedule high-energy tasks during your natural energy peaks and low-energy tasks during valleys."
      },
      {
        name: "Single-Tasking Focus",
        icon: Focus,
        description: "Work on one task at a time with full attention rather than multitasking which reduces efficiency by 40%."
      },
      {
        name: "Weekly Review Ritual",
        icon: RotateCcw,
        description: "Spend 1-2 hours weekly reviewing what worked, what didn't, and planning improvements for next week."
      }
    ],

    // Testimonials

    // FAQ Section
    faqs: [
      {
        question: "How is this different from other productivity systems?",
        answer: "This system combines the best elements of Getting Things Done (GTD), time blocking, and goal setting into one cohesive framework. Unlike single-method approaches, it addresses both tactical task management and strategic goal achievement with proven implementation templates."
      },
      {
        question: "How much time does it take to maintain this system?",
        answer: "Daily maintenance takes 10-15 minutes (morning planning and evening review). Weekly reviews take 60-90 minutes. The time investment quickly pays for itself through dramatically increased productivity and reduced stress."
      },
      {
        question: "Will this work with my existing calendar and task apps?",
        answer: "Absolutely! This system is tool-agnostic and provides templates for popular apps like Google Calendar, Notion, Todoist, and more. The principles work with any digital or analog tools you prefer."
      },
      {
        question: "Is this suitable for creative work or just administrative tasks?",
        answer: "The system is designed for all types of work. Creative professionals particularly benefit from the deep work time blocks, project organization methods, and creative energy management strategies included in the templates."
      },
      {
        question: "What if I've tried productivity systems before and failed?",
        answer: "Most productivity system failures happen due to overwhelming complexity or lack of clear implementation steps. This system includes gradual implementation guides, troubleshooting sections, and modification instructions to help you succeed where others have failed."
      },
      {
        question: "Can teams use this system together?",
        answer: "Yes! The template includes team productivity frameworks, meeting optimization guides, and collaborative planning templates. Many teams use this system to align priorities and improve collective productivity."
      }
    ],

    // CTA Section
    ctaTitle: "Transform Your Productivity Today",
    ctaDescription: "Join 30,000+ professionals who've mastered their time and doubled their meaningful output. Get the complete productivity system and start seeing results this week.",
    finalCtaText: "Get Your Free Productivity System"
  },
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
      { text: 'Manage 300+ guest weddings' },
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
        content: 'Validated business idea with clear target market analysis',
      },
      {
        badge: 'Legal Setup',
        badgeVariant: 'secondary',
        content: 'Proper business structure and compliance framework',
      },
      {
        badge: 'Funding',
        badgeVariant: 'outline',
        content: 'Financial plan with clear funding strategy and projections',
      },
      {
        badge: 'Marketing',
        content: 'Brand identity and customer acquisition strategy',
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
        content: 'ATS-optimized format with quantified achievements',
      },
      {
        badge: 'Interview',
        badgeVariant: 'secondary',
        content: 'STAR method stories prepared for behavioral questions',
      },
      {
        badge: 'Network',
        badgeVariant: 'outline',
        content: 'Strategic connections in target companies',
      },
      {
        badge: 'Offer',
        content: 'Negotiated 25% above initial offer',
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
        content: 'Scheduled appointments and health monitoring timeline',
      },
      {
        badge: 'Nursery',
        badgeVariant: 'secondary',
        content: 'Safe, functional space designed for baby and parents',
      },
      {
        badge: 'Budget',
        badgeVariant: 'outline',
        content: 'First-year costs planned and savings strategies in place',
      },
      {
        badge: 'Birth Plan',
        content: 'Labor preferences and hospital logistics organized',
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

  'parenting-child-development': {
    badgeIcon: Users,
    badgeText: 'Parenting & Child Development',
    heroTitle: 'Nurture Your Child\'s',
    heroHighlight: 'Full Potential',
    heroDescription: 'Evidence-based guidance for nurturing healthy child development from infancy through adolescence. Build stronger relationships and support your child\'s growth.',
    ctaText: 'Start Parenting Journey',
    appPath: '/parenting-child-development/app',
    heroCards: [
      {
        badge: 'Communication',
        content: 'Age-appropriate communication strategies that strengthen bonds',
      },
      {
        badge: 'Development',
        badgeVariant: 'secondary',
        content: 'Understanding milestones and supporting natural growth',
      },
      {
        badge: 'Learning',
        badgeVariant: 'outline',
        content: 'Educational approaches that foster curiosity and confidence',
      },
      {
        badge: 'Wellbeing',
        content: 'Emotional, physical, and mental health strategies for the family',
      }
    ],
    processTitle: 'Comprehensive Child Development Support',
    processDescription: 'Our evidence-based 6-step framework supports healthy development from infancy through the teen years.',
    processSteps: [
      {
        icon: Heart,
        title: 'Building Secure Attachment',
        description: 'Establish strong emotional bonds through responsive caregiving and understanding attachment theory.'
      },
      {
        icon: Users,
        title: 'Effective Communication',
        description: 'Learn age-appropriate communication strategies that respect your child\'s developmental stage and personality.'
      },
      {
        icon: BookOpen,
        title: 'Educational Support & Learning',
        description: 'Foster a love of learning with engaging activities and educational approaches tailored to your child.'
      },
      {
        icon: Brain,
        title: 'Emotional Intelligence & Behavior',
        description: 'Support emotional development and address behavioral challenges with positive, evidence-based strategies.'
      },
      {
        icon: Shield,
        title: 'Health, Safety & Wellbeing',
        description: 'Comprehensive health and safety guidance for physical, mental, and emotional wellbeing at every stage.'
      },
      {
        icon: Target,
        title: 'Age-Specific Guidance',
        description: 'Tailored advice for each developmental stage from infants to teenagers with specific milestone support.'
      }
    ],
    benefitsTitle: 'Why Parents Trust Our Guidance',
    benefitsDescription: 'Backed by child development research and trusted by thousands of families worldwide.',
    benefits: [
      {
        icon: BookOpen,
        title: 'Evidence-Based Approaches',
        description: 'Research-backed strategies from child development experts and pediatric professionals'
      },
      {
        icon: Heart,
        title: 'Stronger Family Bonds',
        description: 'Build deeper connections and more positive relationships with your children'
      },
      {
        icon: Users,
        title: 'Confidence in Parenting',
        description: 'Feel prepared and confident in your parenting decisions with clear, actionable guidance'
      },
      {
        icon: TrendingUp,
        title: 'Long-Term Development',
        description: 'Support your child\'s growth across all developmental domains for lifelong success'
      }
    ],
    featuresIcon: Users,
    featuresTitle: 'Complete Parenting & Development Toolkit',
    featuresDescription: 'Comprehensive resources covering every aspect of child development from birth through adolescence.',
    features: [
      'Developmental milestone tracking and age-appropriate activities',
      'Positive discipline strategies and behavior management techniques',
      'Communication frameworks for different developmental stages',
      'Educational support and learning enhancement strategies',
      'Emotional intelligence development and social skills building',
      'Health and safety guidelines for each age group',
      'Screen time and technology management approaches',
      'Building independence and life skills at every stage',
      'Supporting children through transitions and challenges',
      'Family dynamics and sibling relationship guidance'
    ],
    ctaTitle: 'Ready to Support Your Child\'s Growth?',
    ctaDescription: 'Join thousands of parents who are confidently nurturing their children\'s development with evidence-based guidance.',
    finalCtaText: 'Start Your Parenting Journey',
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
        content: 'Mortgage pre-approved with clear budget boundaries',
      },
      {
        badge: 'Home Search',
        badgeVariant: 'secondary',
        content: 'Strategic search based on location and lifestyle needs',
      },
      {
        badge: 'Offer Strategy',
        badgeVariant: 'outline',
        content: 'Competitive offers that win in today\'s market',
      },
      {
        badge: 'Closing',
        content: 'Smooth closing process with all paperwork organized',
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
        content: 'Clear event vision with defined goals and target audience',
      },
      {
        badge: 'Budget Control',
        badgeVariant: 'secondary',
        content: 'Detailed budget breakdown with cost tracking and savings tips',
      },
      {
        badge: 'Seamless Execution',
        badgeVariant: 'outline',
        content: 'Day-of coordination with backup plans and contingencies',
      }
    ],
    heroBenefits: [
      { text: 'Save 60+ hours of planning time' },
      { text: 'Reduce event planning stress by 80%' },
      { text: 'Stay within budget with smart tracking' },
      { text: 'Professional-level event coordination' },
      { text: 'Memorable experiences for your guests' },
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
        content: 'Detailed day-by-day schedules with activities and reservations',
      },
      {
        badge: 'Budget Control',
        badgeVariant: 'secondary',
        content: 'Smart budget tracking with expense monitoring and savings tips',
      },
      {
        badge: 'Travel Coordination',
        badgeVariant: 'outline',
        content: 'Seamless booking management and travel document organization',
      }
    ],
    heroBenefits: [
      { text: 'Save 40+ hours of planning time' },
      { text: 'Stay within budget with smart tracking' },
      { text: 'Never miss a reservation or booking' },
      { text: 'Stress-free travel coordination' },
      { text: 'Memorable experiences every trip' },
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
    featuresIcon: Plane,
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
        icon: Plane,
        description: 'Keep digital and physical copies of important documents in separate locations for security.'
      },
      {
        name: 'Local Research',
        icon: Globe,
        description: 'Research local customs, tipping practices, and cultural norms to enhance your travel experience.'
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
        content: 'Weekly meal plans with balanced nutrition and variety',
      },
      {
        badge: 'Smart Shopping',
        badgeVariant: 'secondary',
        content: 'Organized grocery lists that save time and money',
      },
      {
        badge: 'Healthy Choices',
        badgeVariant: 'outline',
        content: 'Nutritionally balanced meals for your health goals',
      }
    ],
    heroBenefits: [
      { text: 'Save 8+ hours per week on meal planning' },
      { text: 'Reduce grocery spending by 25-30%' },
      { text: 'Eat healthier with balanced nutrition' },
      { text: 'Eliminate daily "what\'s for dinner?" stress' },
      { text: 'Reduce food waste and impulse purchases' },
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
        content: 'Structured exercise routines tailored to your goals and schedule',
      },
      {
        badge: 'Progress Tracking',
        badgeVariant: 'secondary',
        content: 'Comprehensive monitoring of strength, endurance, and body changes',
      },
      {
        badge: 'Nutrition Support',
        badgeVariant: 'outline',
        content: 'Meal planning and macro tracking for optimal performance',
      }
    ],
    heroBenefits: [
      { text: 'Achieve fitness goals 3x faster' },
      { text: 'Build sustainable healthy habits' },
      { text: 'Track strength and endurance gains' },
      { text: 'Improve energy and mental clarity' },
      { text: 'Create lifelong wellness routines' },
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
  },

  'college-planning': {
    badgeIcon: GraduationCap,
    badgeText: 'College Planning',
    heroTitle: 'Get Into Your',
    heroHighlight: 'Dream College',
    heroDescription: 'Navigate college admissions with comprehensive planning tools for applications, deadlines, and financial aid.',
    ctaText: 'Start Planning',
    appPath: '/college-planning/app',
    heroCards: [
      {
        badge: 'Application Tracking',
        content: 'Organized deadlines and requirements for all college applications',
      },
      {
        badge: 'Essay Management',
        badgeVariant: 'secondary',
        content: 'Streamlined essay writing and editing process with prompts',
      },
      {
        badge: 'Financial Planning',
        badgeVariant: 'outline',
        content: 'Scholarship search and financial aid application coordination',
      }
    ],
    heroBenefits: [
      { text: 'Stay organized with all deadlines and requirements' },
      { text: 'Maximize scholarship and financial aid opportunities' },
      { text: 'Create compelling essays and applications' },
      { text: 'Reduce stress throughout the admissions process' },
      { text: 'Make informed college selection decisions' },
    ],
    processTitle: 'Your College Admissions Journey',
    processDescription: 'From initial research to enrollment, our systematic approach guides you through every step of the college admissions process.',
    processSteps: [
      {
        icon: Search,
        title: 'Research & Selection',
        description: 'Identify colleges that match your academic goals, interests, and budget requirements.'
      },
      {
        icon: FileText,
        title: 'Application Preparation',
        description: 'Complete applications efficiently with deadline tracking and requirement checklists.'
      },
      {
        icon: DollarSign,
        title: 'Financial Aid',
        description: 'Maximize financial aid opportunities through strategic scholarship and aid applications.'
      },
      {
        icon: CheckCircle2,
        title: 'Decision Making',
        description: 'Compare offers and make informed enrollment decisions based on fit and value.'
      }
    ],
    benefitsTitle: 'Why Choose Our College Planning System',
    benefitsDescription: 'Trusted by thousands of students and families for successful college admissions nationwide.',
    benefits: [
      {
        icon: Clock,
        title: 'Time Management',
        description: 'Organized timeline and deadline tracking prevents last-minute rushing and missed opportunities'
      },
      {
        icon: Target,
        title: 'Strategic Planning',
        description: 'Data-driven college selection increases admission chances while minimizing application costs'
      },
      {
        icon: DollarSign,
        title: 'Financial Optimization',
        description: 'Comprehensive financial aid strategy maximizes scholarship opportunities and minimizes debt'
      },
      {
        icon: Shield,
        title: 'Stress Reduction',
        description: 'Systematic approach reduces anxiety and keeps students and families organized throughout the process'
      },
      {
        icon: Trophy,
        title: 'Admission Success',
        description: 'Proven strategies and best practices increase likelihood of acceptance to target schools'
      },
      {
        icon: Lightbulb,
        title: 'Expert Guidance',
        description: 'Access to admissions insights and strategies from experienced counselors and successful applicants'
      }
    ],
    featuresIcon: School,
    featuresTitle: 'Complete College Planning Toolkit',
    featuresDescription: 'Everything you need to navigate the college admissions process successfully and affordably.',
    features: [
      'College research and comparison tools',
      'Application deadline and requirement tracking',
      'Essay brainstorming and organization system',
      'Scholarship search and application management',
      'Financial aid timeline and FAFSA guidance',
      'Interview preparation and practice resources',
      'Recommendation letter coordination',
      'Decision matrix for comparing college offers'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Discover Your Options',
        description: 'Use our research tools to identify colleges that match your academic interests, career goals, and financial situation. Create a balanced list of reach, target, and safety schools.'
      },
      {
        step: '2',
        title: 'Plan Your Applications',
        description: 'Organize application requirements, deadlines, and essays for each school. Track progress and ensure nothing falls through the cracks during the busy application season.'
      },
      {
        step: '3',
        title: 'Secure Funding',
        description: 'Maximize financial aid opportunities through strategic scholarship applications, FAFSA completion, and understanding of aid policies at different institutions.'
      },
      {
        step: '4',
        title: 'Make Your Decision',
        description: 'Compare acceptance offers using our decision framework that weighs academic fit, financial value, and personal preferences to choose the best college for your future.'
      }
    ],
    guidedNotes: [
      {
        name: 'Start Early',
        icon: Calendar,
        description: 'Begin college planning in sophomore or junior year to maximize opportunities and reduce stress during senior year.'
      },
      {
        name: 'Cast Wide Net',
        icon: Target,
        description: 'Apply to a balanced mix of reach, target, and safety schools to ensure you have good options to choose from.'
      },
      {
        name: 'Financial Strategy',
        icon: DollarSign,
        description: 'Understand the true cost of college including living expenses and factor in potential financial aid when making decisions.'
      },
      {
        name: 'Authentic Voice',
        icon: PenTool,
        description: 'Write essays that showcase your genuine personality and experiences rather than what you think admissions officers want to hear.'
      }
    ],
    faqs: [
      {
        question: 'When should I start using this college planning template?',
        answer: 'Ideally, start in sophomore or junior year of high school. This gives you time to research colleges thoroughly, build a strong application profile, and reduce stress during senior year when applications are due.'
      },
      {
        question: 'Can this help with both public and private college applications?',
        answer: 'Absolutely! Our template works for all types of colleges including public state schools, private universities, community colleges, and specialized institutions. The framework adapts to different application requirements.'
      },
      {
        question: 'How does this help with financial aid and scholarships?',
        answer: 'We include comprehensive financial aid planning with FAFSA guidance, scholarship search strategies, and tools to compare financial aid packages from different schools to make informed decisions.'
      },
      {
        question: 'What about students who don\'t know what they want to study?',
        answer: 'Perfect! Our template includes career exploration tools and guidance for choosing colleges with strong liberal arts programs or flexible requirements that allow you to explore different fields.'
      },
      {
        question: 'Can this help with college essays and personal statements?',
        answer: 'Yes! We provide essay brainstorming tools, organization systems for multiple essays, editing checklists, and guidance on crafting compelling personal statements that stand out to admissions officers.'
      },
      {
        question: 'How does this handle different application systems like Common App?',
        answer: 'Our template works with all application systems including Common Application, Coalition Application, UC System applications, and individual school applications with specific tracking for each platform.'
      },
      {
        question: 'What support is available for first-generation college students?',
        answer: 'We include special guidance for first-generation students including explanations of college terminology, financial aid basics, and resources for students whose families are unfamiliar with the college process.'
      },
      {
        question: 'Can this help with transfer applications too?',
        answer: 'Yes! While designed primarily for high school students, our template can be adapted for transfer students with modifications for transfer-specific requirements and timelines.'
      }
    ],
    ctaTitle: 'Ready to Start Your College Journey?',
    ctaDescription: 'Join thousands of students who successfully navigated college admissions with our comprehensive planning system.',
    finalCtaText: 'Begin College Planning',
  },

  'moving-relocation': {
    badgeIcon: Package,
    badgeText: 'Moving & Relocation',
    heroTitle: 'Make Your Move',
    heroHighlight: 'Stress-Free',
    heroDescription: 'Organize every aspect of your relocation with comprehensive checklists, timelines, and coordination tools.',
    ctaText: 'Start Planning',
    appPath: '/moving-relocation/app',
    heroCards: [
      {
        badge: 'Moving Timeline',
        content: '8-week structured timeline with tasks organized by priority and deadline',
      },
      {
        badge: 'Vendor Coordination',
        badgeVariant: 'secondary',
        content: 'Streamlined management of movers, utilities, and service providers',
      },
      {
        badge: 'Budget Tracking',
        badgeVariant: 'outline',
        content: 'Complete cost estimation and expense tracking for all moving expenses',
      }
    ],
    heroBenefits: [
      { text: 'Save 20+ hours of planning and coordination time' },
      { text: 'Reduce moving stress by 80% with organized systems' },
      { text: 'Avoid costly mistakes and forgotten tasks' },
      { text: 'Ensure smooth transition with minimal disruption' },
      { text: 'Keep track of all important details and deadlines' },
    ],
    processTitle: 'Your Moving Journey',
    processDescription: 'From initial planning to settling in, our comprehensive system guides you through every step of relocation.',
    processSteps: [
      {
        icon: ClipboardList,
        title: 'Plan & Prepare',
        description: 'Create moving timeline, research locations, and organize initial tasks 8 weeks before move.'
      },
      {
        icon: Search,
        title: 'Research & Book',
        description: 'Find and book moving companies, research new area, and coordinate service transfers.'
      },
      {
        icon: Package,
        title: 'Pack & Organize',
        description: 'Systematic packing with inventory tracking and essential items preparation.'
      },
      {
        icon: CheckCircle2,
        title: 'Move & Settle',
        description: 'Execute move day coordination and complete post-move setup and registration.'
      }
    ],
    benefitsTitle: 'Why Choose Our Moving System',
    benefitsDescription: 'Trusted by thousands of families and individuals for organized, stress-free relocations nationwide.',
    benefits: [
      {
        icon: Clock,
        title: 'Time Efficiency',
        description: 'Structured timeline and checklists eliminate wasted time and ensure nothing is forgotten'
      },
      {
        icon: DollarSign,
        title: 'Cost Control',
        description: 'Budget tracking and cost comparison tools help avoid unexpected expenses and overspending'
      },
      {
        icon: Shield,
        title: 'Stress Reduction',
        description: 'Organized approach reduces anxiety and overwhelm during one of life\'s most stressful events'
      },
      {
        icon: CheckSquare,
        title: 'Task Management',
        description: 'Comprehensive checklists ensure all important tasks are completed on schedule'
      },
      {
        icon: Target,
        title: 'Smooth Transition',
        description: 'Systematic approach minimizes disruption to work, family, and daily routines'
      },
      {
        icon: Lightbulb,
        title: 'Expert Guidance',
        description: 'Industry insights and best practices from professional movers and relocation specialists'
      }
    ],
    featuresIcon: Truck,
    featuresTitle: 'Complete Moving Toolkit',
    featuresDescription: 'Everything you need to plan, execute, and complete your relocation successfully.',
    features: [
      '8-week moving timeline with prioritized task lists',
      'Moving company research and comparison tools',
      'Comprehensive packing and inventory system',
      'Change of address coordination and tracking',
      'Utility transfer and service setup management',
      'Moving day coordination and logistics planning',
      'Budget tracking and expense management',
      'New home setup and settling-in guides'
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Start Planning Early',
        description: 'Begin 8 weeks before your move with our structured timeline. Research your new area, start decluttering, and begin gathering moving quotes to set a strong foundation.'
      },
      {
        step: '2',
        title: 'Coordinate Services',
        description: 'Book your moving company, arrange utility transfers, and handle address changes systematically. Our coordination tools ensure nothing falls through the cracks.'
      },
      {
        step: '3',
        title: 'Pack Strategically',
        description: 'Follow our room-by-room packing system with inventory tracking. Pack efficiently while keeping essentials accessible for your transition period.'
      },
      {
        step: '4',
        title: 'Execute & Settle',
        description: 'Manage moving day with confidence using our coordination checklists, then settle into your new home with our post-move setup and integration guides.'
      }
    ],
    guidedNotes: [
      {
        name: 'Start 8 Weeks Early',
        icon: Calendar,
        description: 'Begin planning and booking services well in advance to secure the best options and avoid last-minute stress.'
      },
      {
        name: 'Declutter First',
        icon: Package,
        description: 'Sort and donate items before packing to reduce moving costs and start fresh in your new home.'
      },
      {
        name: 'Label Everything',
        icon: PenTool,
        description: 'Detailed labeling system makes unpacking efficient and helps movers handle boxes appropriately.'
      },
      {
        name: 'Keep Essentials Accessible',
        icon: Heart,
        description: 'Pack a survival kit with essentials for your first few days while other belongings are being unpacked.'
      }
    ],
    faqs: [
      {
        question: 'How far in advance should I start using this moving template?',
        answer: 'We recommend starting 8 weeks before your move date for optimal planning time. However, the template can be adapted for shorter timelines if needed, with priority tasks clearly marked.'
      },
      {
        question: 'Does this work for both local and long-distance moves?',
        answer: 'Yes! Our template covers both local and long-distance moves with specific considerations for each type, including interstate regulations, extended timelines, and additional coordination requirements.'
      },
      {
        question: 'Can this help with international relocations?',
        answer: 'Absolutely! We include special sections for international moves covering customs, immigration documents, shipping logistics, and cultural transition planning.'
      },
      {
        question: 'What if I\'m moving for work - does this include corporate relocation considerations?',
        answer: 'Yes! Our template includes corporate move sections covering employer assistance programs, tax considerations, temporary housing, and professional transition planning.'
      },
      {
        question: 'How does this help with moving costs and budgeting?',
        answer: 'We provide comprehensive budget templates covering all moving expenses, cost comparison tools for services, and money-saving strategies to keep your move affordable.'
      },
      {
        question: 'What about moves with special circumstances like elderly parents or pets?',
        answer: 'Our template includes special considerations for moving with pets, elderly family members, and other unique circumstances with specific checklists and resources.'
      },
      {
        question: 'Can this help if I\'m moving during peak season?',
        answer: 'Definitely! We include peak season planning strategies, earlier booking recommendations, and alternative approaches for summer and end-of-month moves when demand is highest.'
      },
      {
        question: 'What support is available for the emotional aspects of moving?',
        answer: 'Moving is stressful! Our template includes stress management techniques, family transition strategies, and resources for helping children and family members adapt to change.'
      }
    ],
    ctaTitle: 'Ready to Make Your Move Stress-Free?',
    ctaDescription: 'Join thousands of families who transformed their relocation experience with our comprehensive moving system.',
    finalCtaText: 'Start Moving Planning',
  },
  
};

export const getLandingPageData = (templateId: string): LandingPageData | undefined => {
  return landingPageRegistry[templateId];
};
