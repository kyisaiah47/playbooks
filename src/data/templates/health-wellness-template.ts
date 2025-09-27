import { GuidanceTemplate } from '@/types/template';

export const healthWellnessTemplate: GuidanceTemplate = {
  id: "health-wellness",
  title: "Comprehensive Health & Wellness Plan",
  description: "A structured approach to creating and maintaining optimal physical, mental, and emotional well-being through goal setting, habit tracking, and lifestyle optimization",
  category: "Health & Wellness",
  icon: "heart",
  difficulty: "intermediate",
  estimatedTime: "2-3 hours initial setup, ongoing maintenance",
  tags: [
    "health",
    "wellness",
    "fitness",
    "nutrition",
    "mental health",
    "sleep",
    "stress management",
    "exercise",
    "meditation",
    "hydration",
    "weight management",
    "habit tracking",
    "self care",
    "mindfulness",
    "lifestyle",
    "preventive care",
    "work life balance",
    "energy levels",
    "immunity",
    "recovery",
    "supplements",
    "meal planning",
    "goal setting",
    "progress tracking",
    "holistic health"
  ],
  lastUpdated: new Date().toISOString().split('T')[0]
};
