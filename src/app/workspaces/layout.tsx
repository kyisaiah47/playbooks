import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workspaces | Organized Project Management for Life Planning | Templata',
  description: 'Create dedicated workspaces for your major life projects. Organize templates, track progress, collaborate with family, and manage multiple life planning initiatives in one centralized dashboard.',
  keywords: 'workspaces, project management, life planning organization, template management, progress tracking, family collaboration, life project dashboard, organized planning, multi-project management',
  openGraph: {
    title: 'Workspaces | Organized Project Management for Life Planning',
    description: 'Create dedicated workspaces for your major life projects. Organize templates, track progress, and collaborate with family.',
    url: 'https://templata.com/workspaces',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.com/og-image-workspaces.png',
        width: 1200,
        height: 630,
        alt: 'Workspaces - Organized Project Management for Life Planning',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workspaces | Organized Project Management for Life Planning',
    description: 'Create dedicated workspaces for your major life projects. Organize templates and track progress.',
    images: ['https://templata.com/og-image-workspaces.png'],
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
    canonical: 'https://templata.com/workspaces',
  },
};

export default function WorkspacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Workspaces */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Templata Workspaces",
            "description": "Organized project management system for major life planning initiatives",
            "url": "https://templata.com/workspaces",
            "applicationCategory": "Productivity",
            "browserRequirements": "Requires modern web browser",
            "offers": {
              "@type": "Offer",
              "price": "9",
              "priceCurrency": "USD",
              "billingDuration": "P1M",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "Multiple Project Workspaces",
              "Template Organization",
              "Progress Tracking",
              "Family Collaboration",
              "File Management",
              "Task Scheduling",
              "Milestone Tracking",
              "Activity History"
            ],
            "author": {
              "@type": "Organization",
              "name": "Templata",
              "url": "https://templata.com"
            }
          })
        }}
      />
      {children}
    </>
  );
}