import type { Metadata } from 'next';
import Script from 'next/script';
import { PageLayout } from '@/components/layout';
import { CalendarFeatureContent } from '@/components/calendar-feature-content';

export const metadata: Metadata = {
  title: 'Planning Calendar - Organize Life Events & Milestones | Templata',
  description: 'Per-guide planning calendars to track milestones, deadlines, and important dates for each life event. Wedding timelines, career deadlines, home buying dates—all organized separately. Free planning calendar tool.',
  keywords: 'planning calendar, life event calendar, milestone tracking, deadline management, per-guide calendar, wedding planning calendar, career planning timeline, project calendar, event organization, free planning calendar, life planning timeline, milestone calendar',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Planning Calendar - Organize Life Events & Milestones | Templata',
    description: 'Per-guide calendars to track milestones and deadlines for each life event separately.',
    url: 'https://templata.org/features/calendar',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata Calendar Feature',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planning Calendar - Organize Life Events & Milestones | Templata',
    description: 'Per-guide calendars to track milestones and deadlines for each life event separately.',
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
    canonical: 'https://templata.org/features/calendar',
  },
};

export default function CalendarFeaturePage() {
  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Planning Calendar - Templata',
    description: 'Per-guide planning calendars for organizing life events and milestones',
    url: 'https://templata.org/features/calendar',
  };

  // SoftwareApplication schema
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Templata Calendar',
    applicationCategory: 'ProductivityApplication',
    description: 'Per-guide calendar system for tracking milestones and deadlines across multiple life events',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Per-guide calendar organization',
      'Milestone and deadline tracking',
      'All-day and timed events',
      'Event descriptions and notes',
      'Calendar view per life event',
      'Separate timelines for each guide',
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
        name: 'Calendar',
        item: 'https://templata.org/features/calendar',
      },
    ],
  };

  return (
    <>
      <Script
        id="calendar-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="calendar-software-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="calendar-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageLayout>
        <CalendarFeatureContent />
      </PageLayout>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Planning Calendar Feature - Templata</h2>
        <p>
          Templata's per-guide calendar system helps you organize milestones, deadlines, and important dates for each life event separately. Track your wedding timeline, career transition deadlines, and home buying dates—all in dedicated calendars that keep your planning focused.
        </p>

        <h3>Per-Guide Calendar Organization</h3>
        <p>
          Unlike traditional calendars that mix everything together, Templata provides a dedicated calendar for each life event guide. Your wedding planning calendar stays separate from your home buying timeline, preventing overwhelm and keeping you focused on the right deadlines at the right time.
        </p>

        <h3>Milestone Tracking</h3>
        <p>
          Track important milestones throughout your planning journey. Mark venue booking deadlines for weddings, interview dates for career transitions, home inspection appointments for real estate—all organized by the specific life event.
        </p>

        <h3>Flexible Event Types</h3>
        <p>
          Create all-day events for deadlines and milestones, or timed events for specific appointments and meetings. Add detailed descriptions to capture important notes about each calendar entry.
        </p>

        <h3>Use Cases</h3>
        <p><strong>Wedding Planning:</strong> Track vendor booking deadlines, dress fittings, rehearsal dinners, and the wedding day itself—all in your dedicated wedding calendar.</p>
        <p><strong>Career Transitions:</strong> Organize networking events, interview schedules, application deadlines, and start dates in your career planning calendar.</p>
        <p><strong>Home Buying:</strong> Keep track of open houses, inspection dates, financing deadlines, and closing day in your home buying calendar.</p>
        <p><strong>Business Launch:</strong> Manage product launch dates, marketing campaign schedules, and business milestone deadlines.</p>
      </div>
    </>
  );
}
