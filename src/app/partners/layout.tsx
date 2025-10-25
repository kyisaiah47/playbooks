import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner Program Coming Soon | Templata',
  description: 'Join Templata\'s upcoming partner program for professionals who want to share their expertise. Be the first to know when we launch our collaboration platform for domain experts.',
  keywords: 'templata partners, partner program, expert collaboration, guide creation, professional network, domain expert platform, coming soon',
  openGraph: {
    title: 'Partner Program Coming Soon | Templata',
    description: 'Join Templata\'s upcoming partner program for professionals who want to share their expertise.',
    url: 'https://templata.org/partners',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image-partners.png',
        width: 1200,
        height: 630,
        alt: 'Templata Partner Program - Coming Soon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner Program Coming Soon | Templata',
    description: 'Join Templata\'s upcoming partner program for professionals who want to share their expertise.',
    images: ['https://templata.org/og-image-partners.png'],
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://templata.org/partners',
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Partners Coming Soon Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Templata Partner Program - Coming Soon",
            "description": "Join our upcoming partner program for professionals who want to share their expertise through expert-crafted templates",
            "url": "https://templata.org/partners",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Templata",
              "url": "https://templata.org"
            },
            "about": {
              "@type": "Program",
              "name": "Templata Partner Program",
              "description": "A collaboration platform for domain experts to create and share professional templates",
              "provider": {
                "@type": "Organization",
                "name": "Templata"
              },
              "audience": {
                "@type": "ProfessionalAudience",
                "audienceType": "Domain Experts, Professional Service Providers, Industry Specialists"
              }
            },
            "potentialAction": {
              "@type": "RegisterAction",
              "name": "Join Waitlist",
              "description": "Get notified when the partner program launches",
              "target": "https://templata.org/partners"
            }
          })
        }}
      />
      {children}
    </>
  );
}