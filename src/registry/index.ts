// Central registry exports for easy importing
export * from './templates';
export * from './blogs';
export * from './prompts';

// Re-export types for convenience
export type { TemplateRegistryEntry } from './templates';
export type { BlogPost } from './blogs';
export type { PromptEntry } from './prompts';