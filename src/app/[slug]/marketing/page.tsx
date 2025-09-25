import type { Metadata } from 'next';
import MarketingClient from './marketing-client';

interface LandingPageData {
  templateLanding: {
    seo: {
      title: string;
      description: string;
      keywords: string[];
      ogTitle: string;
      ogDescription: string;
    };
  };
}

// Generate metadata function
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  // Try to load landing page data for SEO
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3002'}/${slug}-landing-page.json`);
    if (response.ok) {
      const data: LandingPageData = await response.json();
      return {
        title: data.templateLanding.seo.title,
        description: data.templateLanding.seo.description,
        keywords: data.templateLanding.seo.keywords.join(', '),
        openGraph: {
          title: data.templateLanding.seo.ogTitle,
          description: data.templateLanding.seo.ogDescription,
          url: `/${slug}/marketing`,
          siteName: 'Templata',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: data.templateLanding.seo.ogTitle,
          description: data.templateLanding.seo.ogDescription,
        },
      };
    }
  } catch (error) {
    console.error(`Error loading metadata for ${slug}:`, error);
  }

  // Fallback metadata
  const templateName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${templateName} Template - Organize Your ${templateName} | Templata`,
    description: `Transform your ${templateName.toLowerCase()} planning with our comprehensive template. Get expert guidance, actionable prompts, and step-by-step organization.`,
  };
}

export default function TemplateMarketingPage({ params }: { params: Promise<{ slug: string }> }) {
  return <MarketingClient params={params} />;
}