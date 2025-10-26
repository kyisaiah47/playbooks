import { Metadata } from 'next';
import { DocsHeader } from '@/components/layout/docs-header';

export const metadata: Metadata = {
  title: 'Guides | Templata',
  description: 'Expert-curated guides for major life decisions. Career transitions, relationships, health, personal growth, and more - with guided questions and curated readings.',
  keywords: 'life guides, career transition, relationship advice, health planning, personal growth, decision making, life planning guides',
  openGraph: {
    title: 'Guides | Templata',
    description: 'Expert-curated guides for major life decisions with guided questions and curated readings.',
    url: 'https://templata.org/guides',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata Guides',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides | Templata',
    description: 'Expert-curated guides for major life decisions with guided questions and curated readings.',
    images: ['https://templata.org/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://templata.org/guides',
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DocsHeader />
      <div className="pt-14">
        {children}
      </div>
    </>
  );
}