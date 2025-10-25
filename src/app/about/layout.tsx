import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Templata - Our Philosophy & Mission | AI Life Planning Guides',
  description: 'Learn why life shouldn\'t start with a blank page. Discover how Templata transforms life\'s biggest moments with intelligent guides, just like Notion did for notes and Canva for design.',
  keywords: 'about templata, life organization philosophy, guide design, AI life planning, productivity tools, structured planning, life management mission',
  openGraph: {
    title: 'About Templata | Life Shouldn\'t Start with a Blank Page',
    description: 'Learn how Templata is revolutionizing life organization by providing expert-crafted guides for major life moments.',
    url: 'https://templata.org/about',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image-about.png',
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
    description: 'Learn how Templata is revolutionizing life organization by providing expert-crafted guides for major life moments.',
    images: ['https://templata.org/og-image-about.png'],
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
    canonical: 'https://templata.org/about',
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
            "description": "Learn about Templata's mission to revolutionize life organization through expert-crafted guides",
            "url": "https://templata.org/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Templata",
              "description": "Expert-crafted guides for life's biggest moments",
              "foundingDate": "2025",
              "mission": "To make life's complex moments simple and overwhelming decisions manageable through structured, expert-guided guides",
              "serviceType": "Life Planning and Organization Platform",
              "areaServed": "Global",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Guide Categories",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Personal Life Guides",
                    "description": "25+ guides for weddings, relationships, personal growth, and life changes"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Career & Work Guides",
                    "description": "30+ guides for job searches, career changes, interviews, and professional development"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Property & Moving Guides",
                    "description": "20+ guides for home buying, selling, moving, and real estate decisions"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Business & Finance Guides",
                    "description": "25+ guides for startups, business planning, budgeting, and financial decisions"
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