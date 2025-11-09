import type { Metadata } from 'next';
import Script from 'next/script';
import { AboutFaq } from "@/components/about-faq";
import { PageLayout } from "@/components/layout";

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | Templata',
  description: 'Common questions about Templata life planning platform. Learn about our guides, features, pricing (free forever), Axiom Engine, and how to get started planning major life events.',
  keywords: 'templata faq, frequently asked questions, life planning questions, templata help, how does templata work, templata features, templata pricing, planning guide help, axiom engine, templata support',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | Templata',
    description: 'Common questions about Templata life planning platform, features, and pricing.',
    url: 'https://templata.org/faq',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata FAQ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Frequently Asked Questions | Templata',
    description: 'Common questions about Templata life planning platform.',
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
    canonical: 'https://templata.org/faq',
  },
};

export default function FAQPage() {
  // FAQ schema with all questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      // General
      {
        '@type': 'Question',
        name: 'What is Templata?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Templata is the comprehensive guide and planning tool for major life events. We provide AI-refined questions covering 90%+ of what you need to consider, curated expert readings to inform decisions, and integrated planning tools to keep everything organized.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is Templata for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Anyone facing a major life decision—planning a wedding, buying a home, changing careers, starting a business. If you\'re spending months on scattered research trying to figure out what you even need to know, Templata provides the comprehensive framework.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is this different from using Notion or Google Docs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Notion gives you blank pages to figure out yourself. Google gives you scattered information to synthesize. Templata provides comprehensive questions refined through months of AI testing, expert readings curated for each decision point, and planning tools organized per life event.',
        },
      },
      // Guides
      {
        '@type': 'Question',
        name: 'What guides are currently available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We\'re launching with guides for wedding planning, home buying, and career transitions. Our goal is 1000+ guides covering every major life event—personal, professional, financial, and health-related decisions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does 90%+ coverage mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It means our question sets have been refined through extensive AI testing to cover the vast majority of considerations for that life event. Not everything—some decisions are unique to your situation—but the critical questions most people need to think through.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use multiple guides at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Each guide maintains its own calendar, tasks, and notes. Planning a wedding while buying a home? Your wedding tasks stay separate from home-buying tasks. Switch between guides to see the relevant planning context.',
        },
      },
      // Features
      {
        '@type': 'Question',
        name: 'What is the Axiom Engine?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our question and reading refinement system. Every guide goes through months of AI-assisted testing to ensure comprehensive coverage. We validate against expert sources, test edge cases, and refine based on what actually matters for each life event.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the readings work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each guide includes curated expert readings—articles, guides, and resources vetted for quality and relevance. Readings appear alongside related questions so you can learn and plan simultaneously. No random blog posts, just sources that help inform your decisions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Templata integrate with my calendar or task apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently, calendar events and tasks live within Templata, organized per guide. External integrations are on the roadmap, but the per-guide organization is intentional—when you\'re in wedding planning mode, you see wedding tasks, not everything else.',
        },
      },
      // Pricing
      {
        '@type': 'Question',
        name: 'How much does Templata cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Templata is completely free to use. Access all guides, questions, expert readings, and planning tools at no cost.',
        },
      },
      // Technical
      {
        '@type': 'Question',
        name: 'How do I get started?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sign up, browse available guides, and pick the one that matches your current life event. Start answering questions at your own pace. Your progress auto-saves as you work through each section.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I collaborate with others on a guide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Collaboration features are planned for future releases. Currently, Templata is designed for individual planning, though you can share exported content with others as needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my data secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We use industry-standard encryption for data storage and transmission. Your planning information, answers, and notes are private and accessible only to you.',
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
        name: 'FAQ',
        item: 'https://templata.org/faq',
      },
    ],
  };

  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Frequently Asked Questions',
    description: 'Common questions about Templata life planning platform',
    url: 'https://templata.org/faq',
  };

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="faq-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <PageLayout>
        <AboutFaq />
      </PageLayout>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Templata Frequently Asked Questions</h2>

        <h3>General Questions About Templata</h3>
        <p><strong>What is Templata?</strong></p>
        <p>Templata is a comprehensive life planning platform that helps you navigate major life decisions through AI-refined questions, curated expert readings, and integrated planning tools. Unlike blank page tools like Notion or scattered Google searches, Templata provides structured frameworks for weddings, career changes, home buying, business planning, and more.</p>

        <p><strong>Who should use Templata?</strong></p>
        <p>Templata is for anyone facing major life events: planning a wedding, buying a home, changing careers, starting a business, managing financial decisions, or navigating health and wellness journeys. If you're spending months researching what you even need to know, Templata provides the comprehensive framework.</p>

        <p><strong>How is Templata different from Notion or Google Docs?</strong></p>
        <p>Notion provides blank pages requiring you to figure everything out yourself. Google provides scattered information you need to synthesize. Templata gives you comprehensive questions refined through months of AI testing, expert readings curated for each decision point, and planning tools organized per life event. It's the difference between a blank canvas and an expert framework.</p>

        <h3>Guide Questions</h3>
        <p><strong>What planning guides are available?</strong></p>
        <p>We're launching with guides for wedding planning, home buying, and career transitions. Our goal is 1000+ guides covering every major life event including personal milestones, professional transitions, financial planning, and health decisions. Each guide contains hundreds of AI-refined questions and curated expert readings.</p>

        <p><strong>What does 90%+ coverage mean?</strong></p>
        <p>Our question sets are refined through extensive AI testing to cover the vast majority of considerations for each life event. While some decisions are unique to your situation, we ensure you're thinking through all critical questions most people need to consider. This coverage comes from our Axiom Engine validation process.</p>

        <p><strong>Can I use multiple guides simultaneously?</strong></p>
        <p>Yes! Each guide maintains separate calendars, tasks, and notes. Planning a wedding while buying a home? Your wedding tasks stay organized separately from home-buying tasks. Switch between guides to see relevant planning context for each life event.</p>

        <h3>Feature Questions</h3>
        <p><strong>What is the Axiom Engine?</strong></p>
        <p>The Axiom Engine is our question and reading refinement system. Every planning guide goes through months of AI-assisted testing to ensure comprehensive coverage. We validate against expert sources, test edge cases, and refine based on what actually matters for each life event. This ensures you're getting professional-grade planning frameworks.</p>

        <p><strong>How do expert readings work?</strong></p>
        <p>Each guide includes curated expert readings—articles, guides, and resources vetted for quality and relevance. Readings appear alongside related questions so you can learn and plan simultaneously. We don't include random blog posts—only trusted sources that help inform your decisions with evidence-based insights.</p>

        <p><strong>Does Templata integrate with external calendar or task apps?</strong></p>
        <p>Currently, calendar events and tasks live within Templata, organized per guide. External integrations are on the roadmap. The per-guide organization is intentional—when you're in wedding planning mode, you see only wedding tasks, not your entire life's to-do list.</p>

        <h3>Pricing and Access</h3>
        <p><strong>How much does Templata cost?</strong></p>
        <p>Templata is completely free to use. Access all planning guides, AI-refined questions, expert readings, and planning tools at no cost. No paywalls, no hidden fees. We believe effective planning should be accessible to everyone.</p>

        <p><strong>Will Templata always be free?</strong></p>
        <p>Core features will remain free forever. All guides, questions, and readings are accessible without payment. We may introduce premium features in the future, but the comprehensive planning framework will always be free.</p>

        <h3>Getting Started and Technical Questions</h3>
        <p><strong>How do I get started with Templata?</strong></p>
        <p>Sign up for a free account, browse available planning guides, and pick the one matching your current life event. Start answering questions at your own pace. Your progress auto-saves as you work through each section. You can pause and resume anytime.</p>

        <p><strong>Can I collaborate with others on a planning guide?</strong></p>
        <p>Collaboration features are planned for future releases. Currently, Templata is designed for individual planning, though you can share exported content with partners, family, or others as needed. Wedding planning collaboration is high on our roadmap.</p>

        <p><strong>Is my planning data secure?</strong></p>
        <p>Yes. We use industry-standard encryption for data storage and transmission. Your planning information, answers, and notes are private and accessible only to you. We never share your personal planning data with third parties.</p>

        <p><strong>Can I export my planning data?</strong></p>
        <p>Export functionality is available for most content. You can download your answers, notes, and planning progress to use elsewhere or keep as backup. Your data is yours.</p>

        <p><strong>How often are guides and readings updated?</strong></p>
        <p>We continuously refine guides through our Axiom Engine based on user feedback and expert validation. Expert readings are regularly reviewed and updated to ensure relevance and accuracy. The planning questions evolve as we learn what matters most for each life event.</p>
      </div>
    </>
  );
}
