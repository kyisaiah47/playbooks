import { PageLayout } from '@/components/layout';
import { PrivacyContent } from '@/components/privacy-content';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Privacy Policy - How Templata Protects Your Planning Data | Templata',
  description: 'Templata privacy policy: How we collect, use, and protect your life planning data. GDPR compliant. Industry-standard encryption. No data selling. Your planning information stays private and secure.',
  keywords: 'templata privacy policy, data privacy, user data protection, privacy practices, gdpr compliance, data security, personal information protection, privacy terms',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Privacy Policy - How Templata Protects Your Data',
    description: 'How we collect, use, and protect your life planning data. Industry-standard encryption. No data selling.',
    url: 'https://templata.org/privacy',
    siteName: 'Templata',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Templata',
    description: 'How we protect your planning data.',
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
    canonical: 'https://templata.org/privacy',
  },
};

export default function PrivacyPage() {
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
        name: 'Privacy Policy',
        item: 'https://templata.org/privacy',
      },
    ],
  };

  return (
    <>
      <Script
        id="privacy-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageLayout>
        <PrivacyContent />
      </PageLayout>
    </>
  );
}
