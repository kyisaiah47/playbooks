import { blogRegistry } from '@/registry/blogs';
import { UnsplashImage } from './unsplash';

/**
 * Get cached image for a template from blog post metadata
 */
export async function getCachedImageForTemplate(templateName: string): Promise<UnsplashImage | null> {
  // Find blog posts for this template
  const templatePosts = blogRegistry.filter(post =>
    post.relatedTemplates?.includes(templateName) ||
    post.slug.includes(templateName.replace(/[^a-z0-9]/g, '-'))
  );

  // Find the first post with a cached hero image
  for (const post of templatePosts) {
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
 * Check if a template has cached images
 */
export function templateHasCachedImages(templateName: string): boolean {
  const templatePosts = blogRegistry.filter(post =>
    post.relatedTemplates?.includes(templateName) ||
    post.slug.includes(templateName.replace(/[^a-z0-9]/g, '-'))
  );

  return templatePosts.some(post => post.heroImage?.cached);
}

/**
 * Get all templates that have cached images
 */
export function getTemplatesWithCachedImages(): string[] {
  const templatesWithImages = new Set<string>();

  blogRegistry.forEach(post => {
    if (post.heroImage?.cached) {
      // Extract template name from slug or relatedTemplates
      if (post.relatedTemplates) {
        post.relatedTemplates.forEach(template => templatesWithImages.add(template));
      }

      // Also try to extract from slug
      const slugParts = post.slug.split('-');
      if (slugParts.length >= 2) {
        const potentialTemplate = slugParts.slice(0, -2).join('-');
        templatesWithImages.add(potentialTemplate);
      }
    }
  });

  return Array.from(templatesWithImages);
}

/**
 * Get cached image statistics
 */
export function getCachedImageStats() {
  const totalPosts = blogRegistry.length;
  const postsWithImages = blogRegistry.filter(post => post.heroImage?.cached).length;
  const templatesWithImages = getTemplatesWithCachedImages().length;

  return {
    totalPosts,
    postsWithImages,
    templatesWithImages,
    cachePercentage: Math.round((postsWithImages / totalPosts) * 100),
  };
}