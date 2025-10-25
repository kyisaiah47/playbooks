import { templateRegistry, TemplateRegistryEntry } from "@/registry/templates"
import { GuidanceTemplate } from "@/types/template"

// Define relationships between templates
export const templateRelationships: Record<string, string[]> = {
  "wedding-planning": ["home-buying", "budget-planning", "event-planning", "travel-planning"],
  "home-buying": ["wedding-planning", "budget-planning", "moving-relocation", "personal-finance-investment"],
  "baby-planning": ["parenting-child-development", "budget-planning", "moving-relocation", "personal-finance-investment"],
  "parenting-child-development": ["baby-planning", "budget-planning", "college-planning", "fitness-journey"],
  "job-search": ["career-change", "personal-finance-investment", "remote-work-productivity", "moving-relocation"],
  "career-change": ["job-search", "personal-development-coaching", "remote-work-productivity", "freelance-gig-economy"],
  "budget-planning": ["personal-finance-investment", "home-buying", "wedding-planning", "retirement-lifestyle-planning"],
  "personal-finance-investment": ["budget-planning", "retirement-lifestyle-planning", "home-buying", "business-launch"],
  "business-launch": ["freelance-gig-economy", "digital-marketing-seo", "personal-finance-investment", "budget-planning"],
  "freelance-gig-economy": ["business-launch", "digital-marketing-seo", "remote-work-productivity", "career-change"],
  "fitness-journey": ["fitness-athletic-training", "meal-planning", "personal-development-coaching", "parenting-child-development"],
  "fitness-athletic-training": ["fitness-journey", "meal-planning", "personal-development-coaching"],
  "meal-planning": ["fitness-journey", "fitness-athletic-training", "budget-planning", "baby-planning"],
  "travel-planning": ["travel-planning-adventure", "budget-planning", "wedding-planning", "moving-relocation"],
  "travel-planning-adventure": ["travel-planning", "language-learning-cultural-immersion", "budget-planning"],
  "language-learning-cultural-immersion": ["travel-planning-adventure", "academic-research", "personal-development-coaching"],
  "academic-research": ["language-learning-cultural-immersion", "college-planning", "personal-development-coaching"],
  "college-planning": ["academic-research", "budget-planning", "job-search", "parenting-child-development"],
  "personal-development-coaching": ["career-change", "fitness-journey", "language-learning-cultural-immersion", "productivity-system"],
  "productivity-system": ["remote-work-productivity", "personal-development-coaching", "business-launch"],
  "remote-work-productivity": ["productivity-system", "career-change", "freelance-gig-economy", "digital-marketing-seo"],
  "digital-marketing-seo": ["business-launch", "freelance-gig-economy", "remote-work-productivity"],
  "moving-relocation": ["home-buying", "travel-planning", "baby-planning", "job-search"],
  "event-planning": ["wedding-planning", "budget-planning", "travel-planning"],
  "retirement-lifestyle-planning": ["personal-finance-investment", "budget-planning", "fitness-journey", "travel-planning-adventure"]
}

// Function to get related templates for a given template
export function getRelatedTemplates(templateId: string, maxResults: number = 4): TemplateRegistryEntry[] {
  const relatedIds = templateRelationships[templateId] || []

  // Get the related templates from registry
  const related = relatedIds
    .map(id => templateRegistry.find(t => t.id === id))
    .filter((template): template is TemplateRegistryEntry => template !== undefined)
    .slice(0, maxResults)

  // If we don't have enough related templates, fill with popular ones from the same category
  if (related.length < maxResults) {
    const currentTemplate = templateRegistry.find(t => t.id === templateId)
    if (currentTemplate) {
      const sameCategoryTemplates = templateRegistry
        .filter(t =>
          t.id !== templateId &&
          t.category === currentTemplate.category &&
          !relatedIds.includes(t.id)
        )
        .filter(t => t.popular || t.featured)
        .slice(0, maxResults - related.length)

      related.push(...sameCategoryTemplates)
    }
  }

  // If still not enough, add any popular templates
  if (related.length < maxResults) {
    const popularTemplates = templateRegistry
      .filter(t =>
        t.id !== templateId &&
        (t.popular || t.featured) &&
        !relatedIds.includes(t.id) &&
        !related.some(r => r.id === t.id)
      )
      .slice(0, maxResults - related.length)

    related.push(...popularTemplates)
  }

  return related
}

// Function to get cross-category recommendations
export function getCrossCategoryRecommendations(templateId: string, maxResults: number = 3): TemplateRegistryEntry[] {
  const currentTemplate = templateRegistry.find(t => t.id === templateId)
  if (!currentTemplate) return []

  // Get templates from different categories that might be relevant
  const crossCategory = templateRegistry
    .filter(t =>
      t.id !== templateId &&
      t.category !== currentTemplate.category &&
      (t.popular || t.featured)
    )
    .slice(0, maxResults)

  return crossCategory
}

// Function to get templates that often go together (frequently used together)
export function getComplementaryTemplates(templateId: string): TemplateRegistryEntry[] {
  const complementaryPairs: Record<string, string[]> = {
    "wedding-planning": ["home-buying", "budget-planning"],
    "home-buying": ["wedding-planning", "moving-relocation"],
    "baby-planning": ["parenting-child-development", "budget-planning"],
    "job-search": ["career-change", "moving-relocation"],
    "business-launch": ["freelance-gig-economy", "digital-marketing-seo"],
    "fitness-journey": ["meal-planning", "personal-development-coaching"]
  }

  const complementaryIds = complementaryPairs[templateId] || []

  return complementaryIds
    .map(id => templateRegistry.find(t => t.id === id))
    .filter((template): template is TemplateRegistryEntry => template !== undefined)
}

// Function to get template progression path (next logical step)
export function getProgressionPath(templateId: string): TemplateRegistryEntry[] {
  const progressions: Record<string, string[]> = {
    "wedding-planning": ["home-buying", "baby-planning"],
    "home-buying": ["moving-relocation"],
    "baby-planning": ["parenting-child-development"],
    "job-search": ["career-change", "personal-development-coaching"],
    "budget-planning": ["personal-finance-investment"],
    "business-launch": ["digital-marketing-seo", "freelance-gig-economy"],
    "college-planning": ["job-search", "academic-research"],
    "fitness-journey": ["fitness-athletic-training"],
    "language-learning-cultural-immersion": ["travel-planning-adventure"]
  }

  const progressionIds = progressions[templateId] || []

  return progressionIds
    .map(id => templateRegistry.find(t => t.id === id))
    .filter((template): template is TemplateRegistryEntry => template !== undefined)
}