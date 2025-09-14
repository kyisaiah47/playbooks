"use client"

// Expert badge system for templates
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

// Expert registry - in real app this would come from a database
export const expertRegistry: Record<string, ExpertBadge> = {
  "sarah-johnson-wedding": {
    id: "sarah-johnson-wedding",
    name: "Sarah Johnson",
    title: "Certified Wedding Planner",
    organization: "Elegant Events Co.",
    bio: "15+ years planning luxury weddings. Featured in Martha Stewart Weddings and The Knot.",
    expertise: ["Wedding Planning", "Event Coordination", "Vendor Management"],
    credentials: ["Certified Wedding Planner (CWP)", "International Live Events Association Member"],
    linkedIn: "https://linkedin.com/in/sarahjohnson",
    verified: true,
    templateCount: 12
  },
  "david-chen-finance": {
    id: "david-chen-finance",
    name: "David Chen",
    title: "Certified Financial Planner",
    organization: "Chen Financial Advisory",
    bio: "Helping families achieve financial security for over 20 years. Specialized in home buying and investment strategies.",
    expertise: ["Financial Planning", "Real Estate Investment", "Mortgage Advisory"],
    credentials: ["CFP®", "ChFC®", "RICP®"],
    website: "https://chenfinancial.com",
    verified: true,
    templateCount: 8
  },
  "dr-emily-roberts-parenting": {
    id: "dr-emily-roberts-parenting",
    name: "Dr. Emily Roberts",
    title: "Pediatric Psychologist",
    organization: "Children's Development Center",
    bio: "Board-certified pediatric psychologist with expertise in child development and parenting strategies.",
    expertise: ["Child Psychology", "Parenting", "Development Milestones"],
    credentials: ["Ph.D. in Psychology", "Licensed Clinical Psychologist", "Board Certified"],
    verified: true,
    templateCount: 6
  },
  "michael-torres-career": {
    id: "michael-torres-career",
    name: "Michael Torres",
    title: "Senior HR Director",
    organization: "Fortune 500 Recruiting",
    bio: "25 years in talent acquisition and career development. Helped 1000+ professionals land their dream jobs.",
    expertise: ["Career Development", "Job Search Strategy", "Interview Coaching"],
    credentials: ["SHRM-SCP", "Certified Career Coach", "MBA in Human Resources"],
    linkedIn: "https://linkedin.com/in/michaeltorres",
    verified: true,
    templateCount: 10
  },
  "lisa-morgan-fitness": {
    id: "lisa-morgan-fitness",
    name: "Lisa Morgan",
    title: "Certified Personal Trainer",
    organization: "Elite Fitness Solutions",
    bio: "NASM-certified trainer specializing in sustainable fitness journeys and nutrition coaching.",
    expertise: ["Personal Training", "Nutrition Coaching", "Fitness Planning"],
    credentials: ["NASM-CPT", "Precision Nutrition Level 1", "Fitness Nutrition Specialist"],
    website: "https://elitefitnesssolutions.com",
    verified: true,
    templateCount: 4
  }
}

// Template-to-expert mapping
export const templateExpertMapping: Record<string, string[]> = {
  "wedding-planning": ["sarah-johnson-wedding"],
  "home-buying": ["david-chen-finance"],
  "baby-planning": ["dr-emily-roberts-parenting"],
  "parenting-child-development": ["dr-emily-roberts-parenting"],
  "job-search": ["michael-torres-career"],
  "career-change-transition": ["michael-torres-career"],
  "budget-planning": ["david-chen-finance"],
  "personal-finance-investment": ["david-chen-finance"],
  "fitness-journey": ["lisa-morgan-fitness"],
  "fitness-athletic-training": ["lisa-morgan-fitness"]
}

// Function to get experts for a template
export function getTemplateExperts(templateId: string): ExpertBadge[] {
  const expertIds = templateExpertMapping[templateId] || []
  return expertIds
    .map(id => expertRegistry[id])
    .filter(Boolean)
}

// Function to get expert by ID
export function getExpert(expertId: string): ExpertBadge | null {
  return expertRegistry[expertId] || null
}

// Function to check if template is expert-verified
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