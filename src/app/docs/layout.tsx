import { Metadata } from 'next';
import { DocsHeader } from '@/components/layout/docs-header';

export const metadata: Metadata = {
  title: 'Documentation | Templata',
  description: 'Learn how to use Templata to organize your thoughts and navigate life changes with guided prompts and curated articles.',
  openGraph: {
    title: 'Documentation | Templata',
    description: 'Everything you need to know about using Templata.',
    url: 'https://templata.org/docs',
    siteName: 'Templata',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
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
