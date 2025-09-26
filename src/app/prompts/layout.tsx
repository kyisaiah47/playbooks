import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Prompts Library | AI-Powered Reflection Questions | Templata',
  description: 'Access 1000+ thoughtful prompts and reflection questions designed to guide your decisions through life\'s biggest moments. AI-powered suggestions based on your current life stage and goals.',
  keywords: 'reflection prompts, guided questions, decision making prompts, life coaching questions, personal development prompts, AI prompts, thoughtful questions, self-discovery prompts, goal setting questions',
  openGraph: {
    title: 'Smart Prompts Library | AI-Powered Reflection Questions',
    description: 'Access 1000+ thoughtful prompts and reflection questions designed to guide your decisions through life\'s biggest moments.',
    url: 'https://templata.com/prompts',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.com/og-image-prompts.png',
        width: 1200,
        height: 630,
        alt: 'Smart Prompts Library - AI-Powered Reflection Questions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Prompts Library | AI-Powered Reflection Questions',
    description: 'Access 1000+ thoughtful prompts designed to guide your decisions through life\'s biggest moments.',
    images: ['https://templata.com/og-image-prompts.png'],
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
    canonical: 'https://templata.com/prompts',
  },
};

export default function PromptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Prompts Library */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Templata Prompts Library",
            "description": "Comprehensive collection of reflection prompts and guided questions for major life decisions",
            "url": "https://templata.com/prompts",
            "creator": {
              "@type": "Organization",
              "name": "Templata",
              "url": "https://templata.com"
            },
            "about": [
              {
                "@type": "Thing",
                "name": "Decision Making",
                "description": "Prompts designed to clarify thinking and guide important decisions"
              },
              {
                "@type": "Thing",
                "name": "Personal Development",
                "description": "Self-reflection questions for growth and self-discovery"
              },
              {
                "@type": "Thing",
                "name": "Goal Setting",
                "description": "Strategic questions to define and achieve meaningful goals"
              },
              {
                "@type": "Thing",
                "name": "Life Planning",
                "description": "Comprehensive prompts for navigating major life transitions"
              }
            ],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "keywords": "reflection prompts, guided questions, decision making, personal development, life coaching"
          })
        }}
      />
      {children}
    </>
  );
}