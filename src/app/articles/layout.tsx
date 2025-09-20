import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles | Templata',
  description: 'Discover 3000+ expert articles and guides for life\'s biggest decisions. From career changes to family planning, find practical insights from industry professionals.',
  keywords: 'life advice, expert guides, decision making, life planning, practical insights, professional guidance',
  openGraph: {
    title: 'Articles | Templata',
    description: 'Discover 3000+ expert articles and guides for life\'s biggest decisions.',
    type: 'website',
    siteName: 'Templata',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles | Templata',
    description: 'Discover 3000+ expert articles and guides for life\'s biggest decisions.',
  },
  robots: 'index,follow',
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}