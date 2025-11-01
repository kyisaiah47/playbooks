import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Templata - Our Philosophy & Mission | AI Life Planning Templates',
  description: 'Learn why life shouldn\'t start with a blank page. Discover how Templata transforms life\'s biggest moments with intelligent templates, just like Notion did for notes and Canva for design.',
  keywords: 'about templata, life organization philosophy, template design, AI life planning, productivity tools, structured planning, life management mission',
  openGraph: {
    title: 'About Templata | Life Shouldn\'t Start with a Blank Page',
    description: 'Learn how Templata is revolutionizing life organization by providing expert-crafted templates for major life moments.',
    url: 'https://templata.com/about',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.com/og-image-about.png',
        width: 1200,
        height: 630,
        alt: 'About Templata - Expert-Crafted Life Organization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Templata | Life Shouldn\'t Start with a Blank Page',
    description: 'Learn how Templata is revolutionizing life organization by providing expert-crafted templates for major life moments.',
    images: ['https://templata.com/og-image-about.png'],
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
    canonical: 'https://templata.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Templata",
            "description": "Learn about Templata's mission to revolutionize life organization through expert-crafted templates",
            "url": "https://templata.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Templata",
              "description": "Expert-crafted templates for life's biggest moments",
              "foundingDate": "2025",
              "mission": "To make life's complex moments simple and overwhelming decisions manageable through structured, expert-guided templates",
              "serviceType": "Life Planning and Organization Platform",
              "areaServed": "Global",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Template Categories",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Personal Life Templates",
                    "description": "25+ templates for weddings, relationships, personal growth, and life transitions"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Career & Work Templates",
                    "description": "30+ templates for job searches, career changes, interviews, and professional development"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Property & Moving Templates",
                    "description": "20+ templates for home buying, selling, moving, and real estate decisions"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Business & Finance Templates",
                    "description": "25+ templates for startups, business planning, budgeting, and financial decisions"
                  }
                ]
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}