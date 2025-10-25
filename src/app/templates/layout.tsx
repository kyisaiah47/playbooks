import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse 1,298 Life Templates | The Encyclopedia for Living | Templata',
  description: 'Explore 1,298 systematically organized templates for every life situation. From wedding planning to career changes, business launches to home buying—comprehensive guidance with 104,000+ prompts and 25,936 articles.',
  keywords: 'life templates, wedding planning template, career change guide, home buying checklist, business plan template, life planning, template directory, planning tools, life organization, structured guidance, templata templates',
  openGraph: {
    title: 'Browse 1,298 Life Templates | The Encyclopedia for Living',
    description: 'Systematically organized templates for every life situation. Wedding planning, career changes, business launches, home buying & more. 104,000+ prompts and 25,936 articles.',
    url: 'https://templata.org/templates',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata - 1,298 Life Planning Templates',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browse 1,298 Life Templates | The Encyclopedia for Living',
    description: '1,298 systematically organized templates for every life situation. 104,000+ prompts and 25,936 articles. Completely free.',
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
    canonical: 'https://templata.org/templates',
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
            "description": "Browse 1,298 systematically organized templates for every life situation",
            "url": "https://templata.org/templates",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Template Collection",
              "description": "Comprehensive collection of 1,298 life planning templates",
              "numberOfItems": 1298,
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "name": "Wedding Planning Template",
                  "category": "Personal Life",
                  "description": "Complete wedding planning guide with budget tracking, vendor management, and timeline planning",
                  "url": "https://templata.org/wedding-planning",
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
                  "url": "https://templata.org/home-buying",
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
                  "url": "https://templata.org/career-change",
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
                  "url": "https://templata.org/business-launch",
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
                  "item": "https://templata.org"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Templates",
                  "item": "https://templata.org/templates"
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