import { Metadata } from 'next';
import { DocsHeader } from '@/components/layout/docs-header';

export const metadata: Metadata = {
  title: 'Library | Templata',
  description: 'Curated readings and resources for major life decisions. Expert-selected articles, books, and guides organized by topic.',
  keywords: 'curated readings, life planning resources, expert articles, career resources, relationship advice, personal development',
  openGraph: {
    title: 'Library | Templata',
    description: 'Curated readings and resources for major life decisions. Expert-selected articles and guides.',
    url: 'https://templata.org/library',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata Library',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Library | Templata',
    description: 'Curated readings and resources for major life decisions.',
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
    canonical: 'https://templata.org/library',
  },
};

export default function LibraryLayout({
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
