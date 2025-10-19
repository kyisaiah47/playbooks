import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | Templata',
  description: 'Learn how to use Templata to organize your thoughts and navigate life transitions with guided prompts and curated articles.',
  openGraph: {
    title: 'How It Works | Templata',
    description: 'Learn how to use Templata to organize your thoughts during major life transitions.',
    url: 'https://templata.com/how-it-works',
    siteName: 'Templata',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://templata.com/how-it-works',
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
