import { articleRegistry } from '@/registry/readings';

export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    links: {
      html: string;
    };
  };
  width: number;
  height: number;
}

/**
 * Get cached image for a guide from blog post metadata
 */
export async function getCachedImageForGuide(guideName: string): Promise<UnsplashImage | null> {
  // Find blog posts for this guide
  const guidePosts = articleRegistry.filter(post =>
    post.relatedTemplates?.includes(guideName) ||
    (post.slug && post.slug.includes(guideName.replace(/[^a-z0-9]/g, '-')))
  );

  // Find the first post with a cached hero image
  for (const post of guidePosts) {
    if (post.heroImage?.cached) {
      // Convert cached image data to UnsplashImage format
      return {
        id: post.heroImage.unsplashId,
        alt_description: post.heroImage.alt,
        urls: {
          raw: post.heroImage.url,
          full: post.heroImage.url,
          regular: post.heroImage.url,
          small: post.heroImage.url,
          thumb: post.heroImage.url,
        },
        user: {
          id: 'cached',
          username: post.heroImage.photographer.toLowerCase().replace(/\s+/g, ''),
          name: post.heroImage.photographer,
          links: {
            html: post.heroImage.photographerUrl,
          },
        },
        width: 800,
        height: 600,
      };
    }
  }

  return null;
}

/**
 * Check if a guide has cached images
 */
export function guideHasCachedImages(guideName: string): boolean {
  const guidePosts = articleRegistry.filter(post =>
    post.relatedTemplates?.includes(guideName) ||
    (post.slug && post.slug.includes(guideName.replace(/[^a-z0-9]/g, '-')))
  );

  return guidePosts.some(post => post.heroImage?.cached);
}

/**
 * Get all guides that have cached images
 */
export function getGuidesWithCachedImages(): string[] {
  const guidesWithImages = new Set<string>();

  articleRegistry.forEach(post => {
    if (post.heroImage?.cached) {
      // Extract guide name from slug or relatedTemplates
      if (post.relatedTemplates) {
        post.relatedTemplates.forEach(guide => guidesWithImages.add(guide));
      }

      // Also try to extract from slug
      const slugParts = post.slug.split('-');
      if (slugParts.length >= 2) {
        const potentialGuide = slugParts.slice(0, -2).join('-');
        guidesWithImages.add(potentialGuide);
      }
    }
  });

  return Array.from(guidesWithImages);
}

/**
 * Get cached image statistics
 */
export function getCachedImageStats() {
  const totalPosts = articleRegistry.length;
  const postsWithImages = articleRegistry.filter(post => post.heroImage?.cached).length;
  const guidesWithImages = getGuidesWithCachedImages().length;

  return {
    totalPosts,
    postsWithImages,
    guidesWithImages,
    cachePercentage: Math.round((postsWithImages / totalPosts) * 100),
  };
}

// Dummy function for unsplash fallback (if needed)
export async function getGuideHeroImage(guideName: string): Promise<UnsplashImage | null> {
  // Placeholder - replace with actual Unsplash API call if needed
  return null;
}

// Legacy exports for compatibility
export const getCachedImageForTemplate = getCachedImageForGuide;
export const templateHasCachedImages = guideHasCachedImages;
export const getTemplatesWithCachedImages = getGuidesWithCachedImages;