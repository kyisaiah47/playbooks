"use client"

// Axiom Engine attribution system for templates
export interface ExpertBadge {
  id: string
  name: string
  title: string
  organization?: string
  avatar?: string
  bio: string
  expertise: string[]
  credentials: string[]
  linkedIn?: string
  website?: string
  verified: boolean
  templateCount?: number
}

// Axiom Engine registry - specialized AI guidance attribution
export const expertRegistry: Record<string, ExpertBadge> = {
  "axiom-wedding": {
    id: "axiom-wedding",
    name: "Axiom Engine",
    title: "Wedding Planning Specialist",
    organization: "Templata AI",
    bio: "Specialized AI system trained specifically for wedding planning guidance. Generates comprehensive prompts and insights through advanced prompt engineering.",
    expertise: ["Wedding Planning", "Event Coordination", "Vendor Management"],
    credentials: ["AI-Generated Content", "Specialized Prompt Engineering", "Human-Curated Output"],
    website: "/axiom-engine",
    verified: true,
    templateCount: 12
  },
  "axiom-finance": {
    id: "axiom-finance",
    name: "Axiom Engine",
    title: "Financial Planning Specialist",
    organization: "Templata AI",
    bio: "AI system designed for financial guidance and decision-making. Generates thoughtful prompts for budgeting, home buying, and investment planning.",
    expertise: ["Financial Planning", "Real Estate Investment", "Budget Management"],
    credentials: ["AI-Generated Content", "Financial Decision Framework", "Comprehensive Analysis"],
    website: "/axiom-engine",
    verified: true,
    templateCount: 8
  },
  "axiom-parenting": {
    id: "axiom-parenting",
    name: "Axiom Engine",
    title: "Parenting & Development Specialist",
    organization: "Templata AI",
    bio: "Specialized AI for parenting guidance and child development planning. Creates comprehensive reflection prompts for family decisions.",
    expertise: ["Parenting Guidance", "Child Development", "Family Planning"],
    credentials: ["AI-Generated Content", "Family Decision Framework", "Development Planning"],
    website: "/axiom-engine",
    verified: true,
    templateCount: 6
  },
  "axiom-career": {
    id: "axiom-career",
    name: "Axiom Engine",
    title: "Career Development Specialist",
    organization: "Templata AI",
    bio: "AI system focused on career guidance and professional development. Generates strategic prompts for job searches and career transitions.",
    expertise: ["Career Development", "Job Search Strategy", "Professional Growth"],
    credentials: ["AI-Generated Content", "Career Decision Framework", "Strategic Planning"],
    website: "/axiom-engine",
    verified: true,
    templateCount: 10
  },
  "axiom-health": {
    id: "axiom-health",
    name: "Axiom Engine",
    title: "Health & Wellness Specialist",
    organization: "Templata AI",
    bio: "Specialized AI for health and fitness guidance. Creates comprehensive frameworks for wellness planning and health decisions.",
    expertise: ["Health Planning", "Fitness Strategy", "Wellness Decisions"],
    credentials: ["AI-Generated Content", "Health Decision Framework", "Wellness Planning"],
    website: "/axiom-engine",
    verified: true,
    templateCount: 4
  }
}

// Template-to-axiom mapping
export const templateExpertMapping: Record<string, string[]> = {
  "wedding-planning": ["axiom-wedding"],
  "home-buying": ["axiom-finance"],
  "baby-planning": ["axiom-parenting"],
  "parenting-child-development": ["axiom-parenting"],
  "job-search": ["axiom-career"],
  "career-change-transition": ["axiom-career"],
  "budget-planning": ["axiom-finance"],
  "personal-finance-investment": ["axiom-finance"],
  "fitness-journey": ["axiom-health"],
  "fitness-athletic-training": ["axiom-health"]
}

// Function to get axiom specialists for a template
export function getTemplateExperts(templateId: string): ExpertBadge[] {
  const expertIds = templateExpertMapping[templateId] || []
  return expertIds
    .map(id => expertRegistry[id])
    .filter(Boolean)
}

// Function to get axiom specialist by ID
export function getExpert(expertId: string): ExpertBadge | null {
  return expertRegistry[expertId] || null
}

// Function to check if template is axiom-verified
export function isTemplateExpertVerified(templateId: string): boolean {
  const experts = getTemplateExperts(templateId)
  return experts.length > 0 && experts.some(expert => expert.verified)
}

// Function to get template credibility score
export function getTemplateCredibilityScore(templateId: string): number {
  const experts = getTemplateExperts(templateId)
  if (experts.length === 0) return 0

  let score = 0
  experts.forEach(expert => {
    score += expert.verified ? 30 : 10
    score += expert.credentials.length * 5
    score += expert.templateCount ? Math.min(expert.templateCount, 20) : 0
    score += expert.organization ? 10 : 0
  })

  return Math.min(score, 100)
}