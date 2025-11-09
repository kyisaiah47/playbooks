import type { Metadata } from 'next';
import Script from 'next/script';
import { UseCasesContent } from '@/components/use-cases-content';
import { PageLayout } from '@/components/layout';
import { TEMPLATA_FAQ } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Use Cases - Plan Weddings, Careers, Homes & More | Templata',
  description: 'Discover how Templata helps with wedding planning, career changes, home buying, business launches, financial planning, and other major life events. Real scenarios, proven frameworks.',
  keywords: 'templata use cases, wedding planning, career change planning, home buying guide, business planning, financial planning, life event planning, real planning scenarios, planning examples, use case studies',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Use Cases - Plan Life\'s Biggest Moments | Templata',
    description: 'Wedding planning, career changes, home buying, business launches, and more. See how Templata helps with major life decisions.',
    url: 'https://templata.org/use-cases',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata Use Cases',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Use Cases - Plan Life\'s Biggest Moments | Templata',
    description: 'Wedding planning, career changes, home buying, business launches, and more.',
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
    canonical: 'https://templata.org/use-cases',
  },
};

export default function UseCasesPage() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Templata Use Cases',
    description: 'Real-world scenarios for planning major life events with Templata',
    url: 'https://templata.org/use-cases',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TEMPLATA_FAQ.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

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
        name: 'Use Cases',
        item: 'https://templata.org/use-cases',
      },
    ],
  };

  return (
    <>
      <Script
        id="usecases-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="usecases-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="usecases-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageLayout>
        <UseCasesContent />
      </PageLayout>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Templata Use Cases - Real Planning Scenarios</h2>
        <p>
          Discover how Templata helps people navigate life's biggest moments with comprehensive planning frameworks, expert guidance, and organized workflows.
        </p>

        <h3>Wedding Planning with Templata</h3>
        <p>
          Planning a wedding involves hundreds of decisions: venue selection, vendor coordination, budget management, guest list organization, timeline planning, and countless details. Templata's wedding planning guide provides 400+ AI-refined questions covering every aspect from engagement to honeymoon. Learn from expert readings on vendor negotiations, budget allocation, and timeline management. Organize vendors, track RSVPs, manage budgets, and coordinate timelines in one integrated workspace. Never lose track of important wedding tasks with per-guide calendar and task organization.
        </p>

        <h3>Career Change Planning</h3>
        <p>
          Changing careers is one of the biggest professional decisions you'll make. Templata helps you systematically evaluate your options, plan your transition, and execute successfully. Work through career assessment questions to identify your values, skills, and ideal roles. Research new paths with curated expert readings on industry trends, required skills, and transition strategies. Plan your timeline including skill development, networking, job search, and financial preparation. Track applications, networking contacts, and learning progress in an organized workspace.
        </p>

        <h3>Home Buying Process</h3>
        <p>
          Buying a home is the largest financial decision most people make. Templata's home buying guide ensures you consider all critical factors. Determine your budget considering down payment, mortgage options, closing costs, and ongoing expenses. Define your criteria for location, size, features, and neighborhood characteristics. Navigate the buying process from pre-approval to closing with comprehensive checklists and expert guidance. Organize property research, inspection notes, and financial documentation in one place.
        </p>

        <h3>Business Planning and Launch</h3>
        <p>
          Starting a business requires comprehensive planning across multiple dimensions. Templata helps entrepreneurs think through every aspect systematically. Develop your business concept with questions on market need, target customers, competitive advantages, and business model. Create financial projections covering startup costs, revenue models, pricing strategy, and cash flow planning. Navigate legal requirements including business structure, licenses, permits, and intellectual property. Plan your launch strategy with marketing, sales, operations, and hiring frameworks.
        </p>

        <h3>Financial Planning Scenarios</h3>
        <p>
          Major financial decisions benefit from comprehensive planning frameworks. Whether you're paying off debt, building emergency funds, investing for retirement, or planning major purchases, Templata provides structured guidance. Organize budgets by goal with separate workspaces for debt payoff, savings, investments, and major purchases. Learn from expert readings on investment strategies, debt reduction methods, and financial optimization. Track progress toward financial goals with integrated task management and milestone tracking.
        </p>

        <h3>Health and Wellness Journeys</h3>
        <p>
          Managing health decisions and wellness journeys requires careful consideration and planning. Templata helps you organize medical information, research treatment options, plan lifestyle changes, and track progress. Work through comprehensive questions about symptoms, treatment options, lifestyle factors, and goals. Access curated expert readings on evidence-based treatments, lifestyle interventions, and wellness strategies. Organize medical records, track symptoms, schedule appointments, and monitor progress toward health goals.
        </p>

        <h3>Moving and Relocation</h3>
        <p>
          Moving involves coordinating countless tasks across multiple timeframes. Templata's moving guide ensures nothing falls through the cracks. Plan your timeline from decision to settling in with comprehensive checklists covering every phase. Research new locations considering cost of living, job markets, schools, amenities, and lifestyle fit. Coordinate logistics including movers, utilities, address changes, and unpacking. Track tasks with deadlines, organize important documents, and manage the entire moving process in one workspace.
        </p>

        <h3>Multiple Concurrent Events</h3>
        <p>
          Life rarely presents one major decision at a time. Templata's per-guide organization lets you manage multiple life events simultaneously without overwhelm. Planning a wedding while buying a home? Keep wedding vendor tasks separate from home search activities. Starting a business while managing a career transition? Switch between guides to see relevant context for each decision. Each life event maintains its own calendar, tasks, and notes, preventing the chaos of mixed planning contexts.
        </p>

        <h3>Why Use Cases Matter</h3>
        <p>
          Real planning scenarios demonstrate how Templata's features come together to transform overwhelming moments into organized, achievable plans. The combination of AI-refined questions ensuring comprehensive coverage, expert curated readings providing trusted guidance, and integrated organization tools keeping everything accessible makes complex life decisions manageable. Whether you're planning a wedding, changing careers, buying a home, starting a business, or navigating any major life transition, Templata provides the framework and tools to plan systematically and execute successfully.
        </p>
      </div>
    </>
  );
}
