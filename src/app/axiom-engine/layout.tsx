import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Axiom Engine | AI-Powered Decision Making Framework | Templata',
  description: 'Make better decisions faster with the Axiom Engine - our AI-powered framework that analyzes your situation and provides structured decision-making guidance based on proven principles and expert insights.',
  keywords: 'axiom engine, AI decision making, decision framework, artificial intelligence, smart decisions, decision support system, AI guidance, structured thinking, decision analysis, expert insights',
  openGraph: {
    title: 'Axiom Engine | AI-Powered Decision Making Framework',
    description: 'Make better decisions faster with our AI-powered framework that provides structured guidance based on proven principles.',
    url: 'https://templata.com/axiom-engine',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.com/og-image-axiom-engine.png',
        width: 1200,
        height: 630,
        alt: 'Axiom Engine - AI-Powered Decision Making Framework',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axiom Engine | AI-Powered Decision Making Framework',
    description: 'Make better decisions faster with our AI-powered framework.',
    images: ['https://templata.com/og-image-axiom-engine.png'],
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
    canonical: 'https://templata.com/axiom-engine',
  },
};

export default function AxiomEngineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Axiom Engine */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Axiom Engine",
            "description": "AI-powered decision making framework for complex life decisions",
            "url": "https://templata.com/axiom-engine",
            "applicationCategory": "Productivity",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "15",
              "priceCurrency": "USD",
              "billingDuration": "P1M",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "AI-Powered Decision Analysis",
              "Structured Decision Framework",
              "Expert Insight Integration",
              "Scenario Modeling",
              "Risk Assessment",
              "Outcome Prediction",
              "Decision History Tracking",
              "Collaborative Decision Making"
            ],
            "author": {
              "@type": "Organization",
              "name": "Templata",
              "url": "https://templata.com"
            },
            "about": {
              "@type": "Thing",
              "name": "Artificial Intelligence Decision Support",
              "description": "Advanced AI system for structured decision making and analysis"
            }
          })
        }}
      />
      {children}
    </>
  );
}