import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles & Guides - Expert Insights for Life Planning | Templata',
  description: 'Discover 3,000+ expert articles and guides for life\'s biggest decisions. Career changes, family planning, business launches, home buying & more. Written by industry professionals.',
  keywords: 'life planning articles, career change guides, home buying articles, wedding planning tips, business launch guides, expert advice, life decision guides, planning resources',
  authors: [{ name: 'Templata Editorial Team' }],
  creator: 'Templata',
  publisher: 'Templata',
  metadataBase: new URL('https://templata.com'),
  alternates: {
    canonical: '/articles',
  },
  openGraph: {
    title: 'Articles & Guides - Expert Insights for Life Planning | Templata',
    description: 'Discover 3,000+ expert articles and guides for life\'s biggest decisions. Career changes, family planning, business launches & more from industry professionals.',
    url: 'https://templata.com/articles',
    siteName: 'Templata',
    images: [
      {
        url: '/og-articles.jpg',
        width: 1200,
        height: 630,
        alt: 'Templata Articles - Expert Insights for Life Planning',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles & Guides - Expert Insights for Life Planning',
    description: 'Discover 3,000+ expert articles and guides for life\'s biggest decisions. Career changes, family planning, business launches & more.',
    images: ['/twitter-articles.jpg'],
    creator: '@templata',
    site: '@templata',
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
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}