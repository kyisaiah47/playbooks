import { createApi } from 'unsplash-js';

// Initialize Unsplash API
const unsplash = createApi({
  // You'll need to get an access key from https://unsplash.com/developers
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '',
});

// Template to search query mapping for better image results
const templateSearchQueries: Record<string, string> = {
  'wedding-planning': 'wedding ceremony elegant',
  'baby-planning': 'baby nursery cute',
  'home-buying': 'house keys real estate',
  'meal-planning': 'healthy meal prep',
  'fitness-journey': 'fitness workout gym',
  'small-business-launch': 'startup business entrepreneur',
  'retirement-planning': 'senior couple happy',
  'medical-treatment': 'medical healthcare',
  'car-buying': 'car dealership automotive',
  'divorce-coordination': 'legal documents consultation',
  'event-planning': 'party celebration planning',
  'freelance-business': 'remote work laptop',
  'moving-relocation': 'moving boxes home',
  'personal-branding': 'professional headshot',
  'investment-portfolio': 'financial charts investment',
  'garden-planning': 'beautiful garden landscaping',
  'elder-care': 'senior care compassion',
  'skill-development': 'learning education books',
  'hobby-project': 'crafting creative hobby',
  'book-writing': 'writing typewriter author',
  'language-learning': 'foreign language study',
  'podcast-creation': 'microphone recording studio',
  'nonprofit-management': 'community volunteer work',
  'photography-business': 'camera photography professional',
  'music-production': 'music studio equipment',
  'college-planning': 'university campus students',
  'travel-planning': 'travel planning map',
  'budget-planning': 'budgeting calculator money',
  'job-search': 'job interview professional',
  'content-creation': 'content creator workspace',
  '3d-printing': '3d printer technology',
  'affiliate-marketing': 'digital marketing laptop',
  'consulting-business': 'business consultation meeting',
  'real-estate-investing': 'real estate property investment',
  'stock-trading': 'stock market trading',
  'crypto-portfolio': 'cryptocurrency bitcoin',
  'saas-startup': 'software development startup',
  'mobile-app-startup': 'mobile app development',
  'tech-startup-guide': 'tech startup office',
  'social-entrepreneurship': 'social impact community',
  'creative-freelancing': 'creative workspace design',
  'digital-nomad-planning': 'remote work travel',
  'online-business-launch': 'online business ecommerce',
  'side-hustle-development': 'side business entrepreneur',
  'personal-finance-mastery': 'personal finance planning',
  'financial-independence': 'financial freedom success'
};

export interface UnsplashImage {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string | null;
  description: string | null;
  user: {
    name: string;
    username: string;
  };
  links: {
    html: string;
  };
}

/**
 * Search for images related to a template
 */
export async function searchTemplateImages(
  templateName: string,
  count: number = 12
): Promise<UnsplashImage[]> {
  try {
    const query = templateSearchQueries[templateName] || templateName.replace(/-/g, ' ');

    const result = await unsplash.search.getPhotos({
      query,
      page: 1,
      perPage: count,
      orientation: 'landscape',
      orderBy: 'relevant',
    });

    if (result.errors) {
      console.error('Unsplash API errors:', result.errors);
      return [];
    }

    return result.response?.results || [];
  } catch (error) {
    console.error('Error searching Unsplash images:', error);
    return [];
  }
}

/**
 * Get a single hero image for a template
 */
export async function getTemplateHeroImage(templateName: string): Promise<UnsplashImage | null> {
  const images = await searchTemplateImages(templateName, 1);
  return images[0] || null;
}

/**
 * Format image URL with specific dimensions and quality
 */
export function formatImageUrl(
  image: UnsplashImage,
  width: number = 800,
  height: number = 600,
  quality: number = 95
): string {
  return `${image.urls.raw}&w=${width}&h=${height}&fit=crop&crop=faces,center&q=${quality}&fm=jpg&dpr=2&sat=-100`;
}

/**
 * Get attribution text for an image
 */
export function getImageAttribution(image: UnsplashImage): string {
  return `Photo by ${image.user.name} on Unsplash`;
}

/**
 * Get attribution URL for an image
 */
export function getImageAttributionUrl(image: UnsplashImage): string {
  return `${image.links.html}?utm_source=templata&utm_medium=referral`;
}

export default unsplash;