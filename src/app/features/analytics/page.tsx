import type { Metadata } from 'next';
import Script from 'next/script';
import { PageLayout } from '@/components/layout';
import { AnalyticsFeatureContent } from '@/components/analytics-feature-content';

export const metadata: Metadata = {
  title: 'Progress Analytics - Visualize Your Planning Journey | Templata',
  description: 'Premium progress analytics and visualizations for life planning. Radial charts, timeline graphs, completion tracking—see your planning progress beautifully visualized. Free analytics dashboard.',
  keywords: 'progress analytics, planning analytics, progress tracking, radial charts, timeline visualization, completion tracking, planning progress, life planning analytics, free analytics dashboard, visual progress tracking, planning insights, milestone tracking',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Progress Analytics - Visualize Your Planning Journey | Templata',
    description: 'Premium analytics to visualize your planning progress with radial charts and timeline graphs.',
    url: 'https://templata.org/features/analytics',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata Analytics Feature',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Progress Analytics - Visualize Your Planning Journey | Templata',
    description: 'Premium analytics to visualize your planning progress with radial charts and timeline graphs.',
    images: ['https://templata.org/og-image.png'],
    creator: '@templata',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://templata.org/features/analytics',
  },
};

export default function AnalyticsFeaturePage() {
  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Progress Analytics - Templata',
    description: 'Premium analytics and visualizations for tracking planning progress',
    url: 'https://templata.org/features/analytics',
  };

  // SoftwareApplication schema
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Templata Analytics',
    applicationCategory: 'ProductivityApplication',
    description: 'Premium analytics dashboard for visualizing life planning progress',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Radial progress charts',
      'Timeline visualizations',
      'Completion percentage tracking',
      'Category-based insights',
      'Per-guide analytics',
      'Visual progress tracking',
    ],
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://templata.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Features',
        item: 'https://templata.org/features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Analytics',
        item: 'https://templata.org/features/analytics',
      },
    ],
  };

  return (
    <>
      <Script
        id="analytics-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="analytics-software-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="analytics-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageLayout>
        <AnalyticsFeatureContent />
      </PageLayout>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Progress Analytics Feature - Templata</h2>
        <p>
          Templata's premium analytics dashboard helps you visualize your planning journey with sophisticated progress tracking, radial charts, timeline graphs, and completion insights. Transform overwhelming planning into delightful, trackable progress.
        </p>

        <h3>Visual Progress Tracking</h3>
        <p>
          See your planning progress beautifully visualized with radial progress charts, timeline graphs, and category-based insights. Track completion percentages across all your planning guides and celebrate milestones as you move forward.
        </p>

        <h3>Radial Progress Charts</h3>
        <p>
          Premium circular charts show your completion percentage at a glance. See how much of your wedding planning is complete, track career transition progress, or monitor home buying milestones—all with elegant, easy-to-read visualizations.
        </p>

        <h3>Timeline Visualizations</h3>
        <p>
          View your planning journey over time with timeline graphs. See when you answered questions, completed tasks, and reached milestones. Identify patterns in your planning behavior and track momentum.
        </p>

        <h3>Category-Based Insights</h3>
        <p>
          Break down progress by category to identify strengths and gaps. See which aspects of your wedding planning are complete (venue, catering) and which need attention (invitations, music). Focus your efforts where they matter most.
        </p>

        <h3>Per-Guide Analytics</h3>
        <p>
          Each planning guide has its own analytics dashboard. Track wedding planning separately from career transitions and home buying. See detailed insights for each life event without mixing data.
        </p>

        <h3>Use Cases</h3>
        <p><strong>Wedding Planning:</strong> Track overall progress, see completion by category (venue, catering, attire), and identify areas needing attention before the big day.</p>
        <p><strong>Career Transitions:</strong> Monitor your job search progress, track applications submitted, interviews completed, and networking efforts.</p>
        <p><strong>Home Buying:</strong> Visualize your home search journey from research to closing, with insights into financing progress, property tours, and inspections.</p>
        <p><strong>Business Launch:</strong> Track startup milestones from business plan completion through product development, marketing, and launch.</p>

        <h3>Why Premium Analytics Matter</h3>
        <p>
          Planning major life events can feel overwhelming. Premium analytics transform that overwhelm into visible, trackable progress. Instead of wondering "Am I making progress?" you see exactly how far you've come and what's left to do. This clarity reduces anxiety and builds momentum.
        </p>
      </div>
    </>
  );
}
