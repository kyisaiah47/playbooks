import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse All Templates | 100+ Expert-Crafted Life Planning Templates | Templata',
  description: 'Discover 100+ expertly designed templates for every major life moment. Wedding planning, career changes, home buying, business launches, health planning & more. Filter by category, difficulty, and time investment.',
  keywords: 'life templates browse, wedding planning template, career change guide, home buying checklist, business plan template, health planning, personal development, template library, life planning tools, expert guidance',
  openGraph: {
    title: 'Browse All Templates | 100+ Expert-Crafted Life Planning Templates',
    description: 'Discover expertly designed templates for every major life moment. Wedding planning, career changes, home buying, business launches & more.',
    url: 'https://templata.com/templates',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.com/og-image-templates.png',
        width: 1200,
        height: 630,
        alt: 'Browse 100+ Expert-Crafted Life Planning Templates',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browse All Templates | 100+ Expert-Crafted Life Planning Templates',
    description: 'Discover expertly designed templates for every major life moment. Used by 50,000+ people worldwide.',
    images: ['https://templata.com/og-image-templates.png'],
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
    canonical: 'https://templata.com/templates',
  },
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Templates Directory */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Life Planning Templates",
            "description": "Browse 100+ expert-crafted templates for major life moments",
            "url": "https://templata.com/templates",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Template Collection",
              "description": "Comprehensive collection of life planning templates",
              "numberOfItems": 100,
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "name": "Wedding Planning Template",
                  "category": "Personal Life",
                  "description": "Complete wedding planning guide with budget tracking, vendor management, and timeline planning",
                  "url": "https://templata.com/wedding-planning",
                  "applicationCategory": "Productivity",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Home Buying Template",
                  "category": "Property & Moving",
                  "description": "First-time home buyer guide with mortgage calculator and inspection checklist",
                  "url": "https://templata.com/home-buying",
                  "applicationCategory": "Productivity",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Career Change Template",
                  "category": "Career & Work",
                  "description": "Strategic career transition planning with skill assessment and networking guides",
                  "url": "https://templata.com/career-change",
                  "applicationCategory": "Productivity",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Business Launch Template",
                  "category": "Business & Finance",
                  "description": "Complete business startup guide with financial planning and marketing strategy",
                  "url": "https://templata.com/business-launch",
                  "applicationCategory": "Productivity",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://templata.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Templates",
                  "item": "https://templata.com/templates"
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
}