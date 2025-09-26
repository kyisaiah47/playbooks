import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Life OS | Your Personal Operating System for Life Management | Templata',
  description: 'Transform chaos into clarity with Life OS - a comprehensive system for managing every aspect of your life. Productivity workflows, goal tracking, habit formation, and decision-making frameworks all in one place.',
  keywords: 'life os, personal operating system, life management system, productivity framework, goal tracking, habit formation, decision making, life organization, personal development system, life planning dashboard',
  openGraph: {
    title: 'Life OS | Your Personal Operating System for Life Management',
    description: 'Transform chaos into clarity with Life OS - a comprehensive system for managing every aspect of your life.',
    url: 'https://templata.com/life-os',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.com/og-image-life-os.png',
        width: 1200,
        height: 630,
        alt: 'Life OS - Your Personal Operating System for Life Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life OS | Your Personal Operating System for Life Management',
    description: 'Transform chaos into clarity with Life OS - a comprehensive system for managing every aspect of your life.',
    images: ['https://templata.com/og-image-life-os.png'],
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
    canonical: 'https://templata.com/life-os',
  },
};

export default function LifeOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Life OS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Life OS",
            "description": "Personal operating system for comprehensive life management",
            "url": "https://templata.com/life-os",
            "applicationCategory": "Productivity",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1250",
              "bestRating": "5",
              "worstRating": "1"
            },
            "featureList": [
              "Goal Setting & Tracking",
              "Habit Formation System",
              "Decision-Making Frameworks",
              "Productivity Workflows",
              "Life Area Organization",
              "Progress Analytics",
              "Template Integration",
              "Personal Reflection Tools"
            ],
            "screenshot": "https://templata.com/life-os-screenshot.png",
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