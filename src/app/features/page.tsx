import type { Metadata } from 'next';
import Script from 'next/script';
import { FeaturesContent } from '@/components/features-content';
import { PageLayout } from '@/components/layout';
import { TEMPLATA_FAQ } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Features - Life Planning Platform with 90%+ Coverage | Templata',
  description: 'Why Templata beats Notion, Trello & Google Docs: Axiom Engine with 90%+ guaranteed coverage, AI-refined questions per guide, expert curated readings, premium analytics, per-guide calendars & tasks. Free beta. See all features.',
  keywords: 'life planning app features, best planning software 2025, axiom engine, ai planning questions, 90 percent coverage guarantee, expert curated readings, life planning tools comparison, planning platform features, comprehensive life planning, premium analytics free, per-guide organization, free planning software, notion alternative features, trello alternative planning, best free planning app, wedding planning app features, career planning tools, ai life coach alternative',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Features - Comprehensive Life Planning Platform | Templata',
    description: 'Powerful features for planning life\'s biggest moments: AI-refined questions, expert readings, and integrated tools.',
    url: 'https://templata.org/features',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata Features',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features - Comprehensive Life Planning Platform | Templata',
    description: 'Powerful features for planning life\'s biggest moments.',
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
    canonical: 'https://templata.org/features',
  },
};

export default function FeaturesPage() {
  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Templata Features',
    description: 'Comprehensive features for planning major life events',
    url: 'https://templata.org/features',
  };

  // Product schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Templata',
    applicationCategory: 'ProductivityApplication',
    description: 'Life planning platform with AI-refined questions and expert curated readings',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Axiom Engine with 90%+ comprehensive coverage',
      'AI-refined planning questions',
      'Expert curated readings',
      'Per-guide calendar and task organization',
      'Premium progress analytics',
      'Radial progress charts',
      'Timeline visualizations',
      'Category-based color coding',
      'Integrated workspace',
      'Auto-save progress',
    ],
  };

  // FAQ schema
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
        name: 'Features',
        item: 'https://templata.org/features',
      },
    ],
  };

  return (
    <>
      <Script
        id="features-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="features-product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="features-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="features-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageLayout>
        <FeaturesContent />
      </PageLayout>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Templata Features - Comprehensive Life Planning Platform</h2>
        <p>
          Templata combines powerful planning features with sophisticated design to transform how you approach life's biggest moments. From AI-refined questions to premium analytics, every feature is designed to save you time and reduce overwhelm.
        </p>

        <h3>Core Features</h3>

        <h4>Axiom Engine - 90%+ Comprehensive Coverage</h4>
        <p>
          Our proprietary Axiom Engine ensures every planning guide covers 90%+ of considerations for that life event. Through months of AI-assisted testing, we validate question sets against expert sources, test edge cases, and refine based on what actually matters. This means you can trust you're thinking through all critical aspects of your plans.
        </p>

        <h4>AI-Refined Planning Questions</h4>
        <p>
          Hundreds of thoughtfully organized questions per guide, refined through extensive AI testing. Unlike blank page tools, our questions help you systematically explore every angle of your decision. Questions are organized by topic, skippable, and your answers auto-save as you progress.
        </p>

        <h4>Expert Curated Readings</h4>
        <p>
          Access curated articles, guides, and resources vetted for quality and relevance. Each guide includes expert readings from trusted sources—no random blog posts. Readings appear alongside related questions so you can learn and plan simultaneously, saving months of scattered research.
        </p>

        <h4>Per-Guide Organization</h4>
        <p>
          Each life event gets its own dedicated workspace. Planning a wedding while buying a home? Your wedding calendar, tasks, and notes stay separate from home-buying organization. Switch between guides to see relevant context for each major decision. This intentional separation prevents the overwhelm of seeing everything at once.
        </p>

        <h4>Premium Progress Analytics</h4>
        <p>
          Visualize your planning journey with sophisticated analytics. Radial progress charts, timeline graphs, and radar visualizations make tracking your progress delightful. See completion percentages, identify gaps, and celebrate milestones as you move forward with your plans.
        </p>

        <h4>Category-Based Color Coding</h4>
        <p>
          Intuitive visual organization with category-specific colors. Career guides use different colors than wedding guides, making navigation effortless. This sophisticated design detail completes the premium experience and makes organization feel natural.
        </p>

        <h3>Planning & Organization Features</h3>

        <h4>Integrated Calendar</h4>
        <p>
          Per-guide calendars keep your planning timeline organized. Add milestones, deadlines, and important dates specific to each life event. Your wedding planning calendar stays focused on wedding tasks, not your entire life's schedule.
        </p>

        <h4>Task Management</h4>
        <p>
          Create and track action items within each guide. Tasks stay organized by life event, so you can focus on what matters for the current decision. Mark tasks complete, set priorities, and never lose track of important to-dos.
        </p>

        <h4>Notes & Documentation</h4>
        <p>
          Capture thoughts, ideas, and decisions alongside planning questions. Your notes are searchable, organized by guide, and always accessible. Export your planning documentation to share with partners or keep as reference.
        </p>

        <h4>Auto-Save Progress</h4>
        <p>
          Never lose your work. Templata automatically saves your progress as you answer questions, add notes, and organize tasks. Pause your planning anytime and resume exactly where you left off, from any device.
        </p>

        <h3>Content & Knowledge Features</h3>

        <h4>Comprehensive Question Sets</h4>
        <p>
          50+ questions per guide covering every aspect of your planning needs. Questions are systematically organized by topic and category, helping you think through considerations you might have overlooked. Skip questions that don't apply, and come back to saved questions later.
        </p>

        <h4>Expert Reading Library</h4>
        <p>
          Thousands of curated articles across all life planning categories. Learn from domain experts, industry professionals, and evidence-based research. All readings are reviewed for quality and relevance, saving you from sorting through low-quality content.
        </p>

        <h4>Search & Discovery</h4>
        <p>
          Powerful search across all guides, questions, and readings. Looking for specific topics? Find relevant content instantly across the entire platform. Filter by category, guide, or content type to discover exactly what you need.
        </p>

        <h4>Related Content</h4>
        <p>
          Discover connections between life events and planning topics. Planning a wedding? Explore related financial planning and home buying guides. Our recommendation system helps you see the bigger picture and plan comprehensively.
        </p>

        <h3>User Experience Features</h3>

        <h4>Premium Design</h4>
        <p>
          Sophisticated, delightful interface that makes planning feel like an experience, not a chore. Smooth animations, thoughtful interactions, and beautiful visualizations transform overwhelming decisions into organized, achievable steps.
        </p>

        <h4>Dark Mode</h4>
        <p>
          Full dark mode support for comfortable planning at any time. Automatically switches based on your system preferences, or manually toggle between light and dark themes.
        </p>

        <h4>Mobile Responsive</h4>
        <p>
          Plan on any device. Templata works beautifully on desktop, tablet, and mobile. Your progress syncs across devices, so you can answer questions on your phone and review on your computer.
        </p>

        <h4>Accessibility</h4>
        <p>
          Built with accessibility in mind. Keyboard navigation, screen reader support, and high contrast modes ensure everyone can use Templata effectively.
        </p>

        <h3>Why Templata Features Stand Out</h3>

        <h4>Not Just Functional - Exceptional</h4>
        <p>
          We don't just provide planning tools. We create experiences. Think Superhuman (premium email with obsessive attention to detail) meets Co-Star (sophisticated design and premium feel). Features like radial progress charts and timeline visualizations aren't strictly necessary, but they complete the luxury experience of transforming overwhelming moments into exhilarating progress.
        </p>

        <h4>Comprehensive + Beautiful</h4>
        <p>
          Other tools give you blank pages (Notion, Google Docs) or basic checklists (Trello, Asana). Templata combines comprehensive expert content with sophisticated design. You get both the substance and the experience.
        </p>

        <h4>Free Beta Access</h4>
        <p>
          Currently free during beta. Access every guide, all AI-refined questions, expert readings, and planning tools at no cost during beta. We believe effective planning should be accessible to everyone. We may introduce pricing options in the future as we continue to develop the platform.
        </p>

        <h3>Upcoming Features (Beta Roadmap)</h3>
        <ul>
          <li>Collaboration tools for shared planning (weddings, business partnerships)</li>
          <li>External calendar integrations (Google Calendar, Apple Calendar)</li>
          <li>Export to PDF, Word, and other formats</li>
          <li>Mobile apps for iOS and Android</li>
          <li>AI-powered planning assistant</li>
          <li>Community features and shared insights</li>
          <li>Premium analytics dashboard</li>
          <li>Custom guide builder for specialized planning needs</li>
        </ul>

        <h3>Technology & Security</h3>

        <h4>Industry-Standard Security</h4>
        <p>
          Your planning data is encrypted in storage and transmission. We use industry-standard security practices to keep your information private and secure.
        </p>

        <h4>Privacy First</h4>
        <p>
          Your planning information belongs to you. We never share your personal data with third parties. Export your data anytime you want.
        </p>

        <h4>Reliable Infrastructure</h4>
        <p>
          Built on modern, reliable infrastructure. Your progress is automatically backed up, and the platform is designed for 99.9%+ uptime.
        </p>
      </div>
    </>
  );
}
