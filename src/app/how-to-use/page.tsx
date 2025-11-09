import type { Metadata } from 'next';
import Script from 'next/script';
import { PageLayout } from '@/components/layout';
import { HowToUseContent } from '@/components/how-to-use-content';
import { TEMPLATA_FAQ } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'How to Use Templata | Step-by-Step Planning Guide Tutorial',
  description: 'Learn how to use Templata to plan life\'s biggest moments. Complete tutorial covering planning questions, expert readings, guides, and organizational tools. Get started in minutes.',
  keywords: 'how to use templata, templata tutorial, planning guide tutorial, how to plan life events, templata getting started, life planning guide, templata instructions, how does templata work, templata user guide, planning platform tutorial',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'How to Use Templata | Complete Planning Tutorial',
    description: 'Step-by-step guide to using Templata for planning life\'s biggest moments. Learn to use planning questions, expert readings, and organizational tools.',
    url: 'https://templata.org/how-to-use',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'How to Use Templata',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Use Templata | Complete Planning Tutorial',
    description: 'Step-by-step guide to using Templata for planning life\'s biggest moments.',
    images: ['https://templata.org/og-image.png'],
    creator: '@templata',
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
  alternates: {
    canonical: 'https://templata.org/how-to-use',
  },
};

export default function HowToUsePage() {
  // HowTo schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Use Templata for Life Planning',
    description: 'Complete guide to using Templata\'s planning tools for major life events',
    image: 'https://templata.org/og-image.png',
    totalTime: 'PT10M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Templata Planning Platform',
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Choose Your Planning Guide',
        text: 'Browse our collection of expert-crafted planning guides for your life event - wedding, career change, home buying, business launch, and more.',
        url: 'https://templata.org/guides',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Answer AI-Refined Questions',
        text: 'Work through systematically organized planning questions designed to help you think through every aspect of your plans.',
        url: 'https://templata.org/questions',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Read Expert Content',
        text: 'Access curated expert readings and resources to learn best practices and avoid common mistakes.',
        url: 'https://templata.org/library',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Track Your Progress',
        text: 'Organize your answers, notes, and action items in one integrated workspace to stay on track.',
      },
    ],
  };

  // FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      ...TEMPLATA_FAQ.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
      {
        '@type': 'Question',
        name: 'How do I get started with Templata?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Getting started is easy: 1) Browse our planning guides and choose one for your life event, 2) Start answering the AI-refined planning questions, 3) Read expert content to learn best practices, 4) Track your progress and organize your notes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need an account to use Templata?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No account is required to browse guides, questions, and readings. Creating a free account allows you to save your progress, organize notes, and track your planning journey.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to complete a planning guide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Time varies by guide and your situation. Most guides can be worked through in 2-4 hours, but you can go at your own pace. The platform saves your progress so you can return anytime.',
        },
      },
    ],
  };

  // Breadcrumb schema
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
        name: 'How to Use',
        item: 'https://templata.org/how-to-use',
      },
    ],
  };

  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'How to Use Templata',
    description: 'Complete tutorial on using Templata for life planning',
    url: 'https://templata.org/how-to-use',
  };

  return (
    <>
      <Script
        id="howto-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="howto-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="howto-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <PageLayout>
        <HowToUseContent />
      </PageLayout>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <h2>How to Use Templata - Complete Tutorial Guide</h2>
        <p>
          Templata is a free life planning platform that helps you organize major life events through expert-crafted guides, AI-refined questions, and curated readings. Here's your complete guide to using Templata effectively.
        </p>

        <h3>Step 1: Choose Your Planning Guide</h3>
        <p>
          Start by browsing our collection of planning guides. We offer expert frameworks for:
        </p>
        <ul>
          <li>Wedding Planning - Complete organization from engagement to honeymoon</li>
          <li>Career Change - Strategic career transition planning</li>
          <li>Home Buying - From search to closing</li>
          <li>Business Launch - Start and grow your business</li>
          <li>Financial Planning - Budgeting, investing, debt payoff</li>
          <li>Moving & Relocation - Stress-free moving guide</li>
          <li>And 70+ more life planning guides</li>
        </ul>

        <h3>Step 2: Answer Planning Questions</h3>
        <p>
          Each guide includes hundreds of AI-refined planning questions organized by topic. These questions help you:
        </p>
        <ul>
          <li>Think through every aspect of your plans systematically</li>
          <li>Consider factors you might have overlooked</li>
          <li>Document your decisions and preferences</li>
          <li>Create a comprehensive planning framework</li>
        </ul>

        <h3>Step 3: Read Expert Content</h3>
        <p>
          Access curated expert readings for each guide. Learn from:
        </p>
        <ul>
          <li>Domain experts and industry professionals</li>
          <li>Evidence-based best practices</li>
          <li>Common mistakes to avoid</li>
          <li>Proven strategies and frameworks</li>
          <li>Real-world case studies and examples</li>
        </ul>

        <h3>Step 4: Track Your Progress</h3>
        <p>
          Organize everything in one place:
        </p>
        <ul>
          <li>Save your answers to planning questions</li>
          <li>Bookmark important readings</li>
          <li>Create action items and to-do lists</li>
          <li>Track milestones and deadlines</li>
          <li>Share plans with partners or family</li>
        </ul>

        <h3>Tips for Success</h3>
        <ul>
          <li>Don't rush - work through questions at your own pace</li>
          <li>Save your progress frequently</li>
          <li>Read expert content before finalizing major decisions</li>
          <li>Use the search function to find specific topics</li>
          <li>Explore related guides for comprehensive planning</li>
          <li>Return regularly as your plans evolve</li>
        </ul>

        <h3>Common Use Cases</h3>
        <p><strong>Planning a Wedding:</strong> Use our wedding planning guide to organize vendors, budget, guest list, timeline, and all wedding details in one place.</p>
        <p><strong>Changing Careers:</strong> Work through career assessment questions, research new paths, plan your transition timeline, and access job search resources.</p>
        <p><strong>Buying a Home:</strong> Track your home search, organize finances, understand the buying process, and make informed decisions.</p>
        <p><strong>Starting a Business:</strong> Develop your business plan, understand legal requirements, plan finances, and launch with confidence.</p>

        <h3>Getting Help</h3>
        <p>
          If you need assistance, check our FAQ, explore the glossary for planning terms, or browse our comprehensive guides library. All resources are free and accessible anytime.
        </p>
      </div>
    </>
  );
}
