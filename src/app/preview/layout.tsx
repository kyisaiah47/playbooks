import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Template Previews | See Templata Templates in Action',
  description: 'Experience how Templata\'s expert-crafted templates transform overwhelming planning into organized, actionable dashboards. Preview wedding planning, home buying, career change, and business launch guides.',
  keywords: 'guide preview, templata demo, wedding planning guide, home buying guide, career change guide, business launch guide, expert-crafted dashboards',
  openGraph: {
    title: 'Template Previews | See Templata Templates in Action',
    description: 'Experience how Templata\'s expert-crafted templates transform overwhelming planning into organized, actionable dashboards.',
    url: 'https://templata.org/preview',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image-preview.png',
        width: 1200,
        height: 630,
        alt: 'Templata Template Previews - See Templates in Action',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Template Previews | See Templata Templates in Action',
    description: 'Experience how Templata\'s expert-crafted templates transform overwhelming planning into organized dashboards.',
    images: ['https://templata.org/og-image-preview.png'],
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
    canonical: 'https://templata.org/preview',
  },
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Preview Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Templata Template Previews",
            "description": "Interactive previews of expert-crafted templates for life's biggest moments",
            "url": "https://templata.org/preview",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Templata",
              "url": "https://templata.org"
            },
            "about": {
              "@type": "SoftwareApplication",
              "name": "Templata",
              "applicationCategory": "ProductivityApplication",
              "description": "Life planning and organization platform with expert-crafted templates"
            },
            "hasPart": [
              {
                "@type": "CreativeWork",
                "name": "Wedding Planning Template Preview",
                "description": "Interactive preview of wedding planning guide with budget tracking, venue selection, and guest management"
              },
              {
                "@type": "CreativeWork",
                "name": "Home Buying Template Preview",
                "description": "Interactive preview of home buying guide with pre-approval process, house hunting, and inspections"
              },
              {
                "@type": "CreativeWork",
                "name": "Career Change Template Preview",
                "description": "Interactive preview of career change guide with resume building, networking, and job applications"
              },
              {
                "@type": "CreativeWork",
                "name": "Business Launch Template Preview",
                "description": "Interactive preview of business launch guide with business planning, legal setup, and marketing strategy"
              },
              {
                "@type": "CreativeWork",
                "name": "Event Planning Template Preview",
                "description": "Interactive preview of event planning guide with concept development, venue selection, and entertainment"
              }
            ],
            "potentialAction": {
              "@type": "InteractAction",
              "name": "Try Template Demo",
              "description": "Experience interactive guide demos",
              "target": "https://templata.org/preview"
            }
          })
        }}
      />
      {children}
    </>
  );
}