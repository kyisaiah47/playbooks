import { Metadata } from 'next';
import { DocsHeader } from '@/components/layout/docs-header';

export const metadata: Metadata = {
  title: 'Documentation | Templata',
  description: 'Learn how to use Templata. Comprehensive guides on navigating life decisions with guided questions, curated readings, and split-screen workspaces.',
  keywords: 'documentation, how to use templata, user guide, tutorial, getting started, help',
  openGraph: {
    title: 'Documentation | Templata',
    description: 'Learn how to use Templata. Comprehensive guides on navigating life decisions.',
    url: 'https://templata.org/docs',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata Documentation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentation | Templata',
    description: 'Learn how to use Templata.',
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
    canonical: 'https://templata.org/docs',
  },
};

export default function DocsLayout({
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
