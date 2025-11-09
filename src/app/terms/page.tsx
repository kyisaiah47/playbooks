import { PageLayout } from '@/components/layout';
import { TermsContent } from '@/components/terms-content';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Terms of Service - User Agreement & Service Guidelines | Templata',
  description: 'Templata terms of service: User agreements, acceptable use policies, content guidelines, service terms. Free platform rules for using life planning guides, questions, and expert content.',
  keywords: 'templata terms of service, user agreement, service terms, terms and conditions, acceptable use policy, user guidelines, platform rules, service agreement',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Terms of Service | Templata',
    description: 'Rules and guidelines for using our life planning platform. User agreements, content policies, and service terms.',
    url: 'https://templata.org/terms',
    siteName: 'Templata',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Templata',
    description: 'User agreements and service guidelines.',
    creator: '@templata',
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
    canonical: 'https://templata.org/terms',
  },
};

export default function TermsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://templata.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Terms of Service',
        item: 'https://templata.org/terms',
      },
    ],
  };

  return (
    <>
      <Script
        id="terms-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageLayout>
        <TermsContent />
      </PageLayout>
    </>
  );
}
