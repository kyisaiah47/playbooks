import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse 25,936 Articles | Expert Knowledge Base for Life | Templata',
  description: 'Explore 25,936 expert readings covering every life situation. Wedding planning, career changes, business launches, home buying, health decisions & more. Like Wikipedia for life guidance.',
  keywords: 'life planning readings, expert guides, how-to readings, wedding planning tips, career change advice, business launch guides, home buying guidance, life decisions, knowledge base, templata readings',
  authors: [{ name: 'Templata Team' }],
  creator: 'Templata',
  publisher: 'Templata',
  metadataBase: new URL('https://templata.org'),
  alternates: {
    canonical: '/readings',
  },
  openGraph: {
    title: 'Browse 25,936 Articles | Expert Knowledge Base for Life',
    description: '25,936 expert readings covering every life situation. Wedding planning, career changes, business launches, home buying & more. Like Wikipedia for life guidance.',
    url: 'https://templata.org/readings',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata Readings - 25,936 Expert Readings',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browse 25,936 Articles | Expert Knowledge Base for Life',
    description: '25,936 expert readings for every life situation. Wedding planning, career changes, business launches & more. Completely free.',
    images: ['https://templata.org/og-image.png'],
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