import { Metadata } from 'next';
import { DocsHeader } from '@/components/layout/docs-header';

export const metadata: Metadata = {
  title: 'Browse Guides | Templata',
  description: 'Browse expert-curated guides for life\'s biggest decisions.',
  openGraph: {
    title: 'Browse Guides | Templata',
    description: 'Browse expert-curated guides for life\'s biggest decisions.',
    url: 'https://templata.org/guides',
    siteName: 'Templata',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
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