import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Reflections Journal | Track Your Life Journey | Templata',
  description: 'Document your personal growth journey with guided reflection exercises. Track insights, decisions, and progress through major life transitions with structured journaling prompts.',
  keywords: 'personal reflections, life journal, growth tracking, personal development journal, life transitions, self-reflection, progress tracking, guided journaling, life insights, personal growth',
  openGraph: {
    title: 'Personal Reflections Journal | Track Your Life Journey',
    description: 'Document your personal growth journey with guided reflection exercises and structured journaling prompts.',
    url: 'https://templata.com/reflections',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.com/og-image-reflections.png',
        width: 1200,
        height: 630,
        alt: 'Personal Reflections Journal - Track Your Life Journey',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Reflections Journal | Track Your Life Journey',
    description: 'Document your personal growth journey with guided reflection exercises.',
    images: ['https://templata.com/og-image-reflections.png'],
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
    canonical: 'https://templata.com/reflections',
  },
};

export default function ReflectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Reflections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Personal Reflections Journal",
            "description": "Digital journaling platform for tracking personal growth and life transitions",
            "url": "https://templata.com/reflections",
            "applicationCategory": "Health & Fitness",
            "browserRequirements": "Requires modern web browser",
            "offers": {
              "@type": "Offer",
              "price": "9",
              "priceCurrency": "USD",
              "billingDuration": "P1M",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "Guided Reflection Exercises",
              "Progress Tracking",
              "Insight Documentation",
              "Growth Metrics",
              "Life Transition Support",
              "Structured Journaling",
              "Personal Analytics",
              "Export Capabilities"
            ],
            "author": {
              "@type": "Organization",
              "name": "Templata",
              "url": "https://templata.com"
            },
            "about": {
              "@type": "Thing",
              "name": "Personal Development",
              "description": "Tools and exercises for self-reflection and personal growth"
            }
          })
        }}
      />
      {children}
    </>
  );
}