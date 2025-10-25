// Domain alias layer for terminology transition
// This allows us to use "Guide" terminology in the UI while keeping DB tables unchanged

import type { GuidanceTemplate } from '@/types/guide';

// Temporary alias - Guide is the same as Guide/GuidanceTemplate
export type Guide = GuidanceTemplate;

// Helper to convert if needed (currently a pass-through)
export const toGuide = (t: GuidanceTemplate): Guide => t;
