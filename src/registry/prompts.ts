export interface PromptEntry {
  id: string;
  prompt: string;
  category: string; // The actual category name like "Getting Started & Equipment Setup"
  type: 'research' | 'action' | 'decision' | 'planning';
}

// Import all prompts from index
import * as promptModules from '../data/prompts/index';

// Combine all prompts using simple flat operation
export const allPrompts: PromptEntry[] = Object.values(promptModules).flat();

// Generate template prompts mapping dynamically
const generateTemplatePrompts = () => {
  const mapping: Record<string, PromptEntry[]> = {};

  allPrompts.forEach((prompt: PromptEntry) => {
    // Extract template ID from prompt ID (assuming format like "templateId-promptId")
    const parts = prompt.id.split('-');
    if (parts.length >= 2) {
      const templateId = parts.slice(0, -1).join('-');
      if (!mapping[templateId]) {
        mapping[templateId] = [];
      }
      mapping[templateId].push(prompt);
    }
  });

  return mapping;
};

export const templatePrompts = generateTemplatePrompts();

// Helper function to get prompts by template slug
export function getPromptsByTemplate(templateSlug: string): PromptEntry[] {
  return templatePrompts[templateSlug as keyof typeof templatePrompts] || [];
}

// Get prompts by category
export function getPromptsByCategory(category: PromptEntry['category']): PromptEntry[] {
  return allPrompts.filter(prompt => prompt.category === category);
}