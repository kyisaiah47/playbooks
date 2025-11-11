import type { Metadata } from 'next';
import Script from 'next/script';
import { PricingContent } from '@/components/pricing-content';
import { PageLayout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Pricing - Free Beta | Wedding Planning, Career & Life Planning | Templata',
  description: 'How much does Templata cost? Free. Currently free during beta. No credit card, no trial, no paywalls, no limits during beta. All features free: guides, AI questions, expert readings, analytics.',
  keywords: 'templata pricing, templata cost, how much does templata cost, is templata free, free planning software, free life planning app, free wedding planning app, free career planning tool, free home buying guide, no cost planning, free beta planning, templata free vs paid, free notion alternative, free trello alternative, save money planning, planning app no subscription, free organizational tools, free expert guidance, free ai planning assistant, life planning platform cost, beta pricing free',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Pricing - Free Beta Life Planning Platform | Templata',
    description: 'Currently free during beta. Access all planning guides, AI-refined questions, and expert readings at no cost during beta period.',
    url: 'https://templata.org/pricing',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata Pricing - Free Beta',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Free Beta Life Planning Platform | Templata',
    description: 'Currently free during beta. Access all planning guides and expert content at no cost during beta period.',
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
    canonical: 'https://templata.org/pricing',
  },
};

export default function PricingPage() {
  // Product schema with pricing
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Templata',
    applicationCategory: 'ProductivityApplication',
    description: 'Free life planning platform with AI-refined questions and expert curated readings',
    url: 'https://templata.org',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2099-12-31',
      description: 'Free beta access to all core features including planning guides, AI-refined questions, expert readings, and organizational tools'
    },
    featureList: [
      'Unlimited planning guides',
      'AI-refined questions with 90%+ coverage',
      'Expert curated readings',
      'Per-guide organization',
      'Calendar and task management',
      'Progress tracking',
      'Notes and documentation',
      'Search across all content',
      'Auto-save functionality',
      'Secure data storage'
    ],
  };

  // FAQ schema focused on pricing
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does Templata cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Templata is completely free to use. All core features including planning guides, AI-refined questions, expert readings, calendars, task management, and progress tracking are available at no cost. There are no hidden fees, no paywalls, and no credit card required. We believe effective planning should be accessible to everyone.'
        }
      },
      {
        '@type': 'Question',
        name: 'Will Templata always be free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently free during beta. All planning guides, AI-refined questions, expert readings, and basic organizational tools are accessible at no cost during beta. We are currently in beta and may introduce pricing options in the future.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is included in the free version?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The free version includes unlimited access to all planning guides (wedding, career, home buying, business, financial, health, and more), hundreds of AI-refined questions per guide ensuring 90%+ coverage, thousands of expert curated readings, per-guide calendars and task management, progress tracking and analytics, notes and documentation tools, powerful search across all content, auto-save functionality, and secure data storage. Essentially, everything you need for comprehensive life planning.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a credit card to sign up?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No credit card required. Simply create an account with your email address and start planning immediately. There are no trial periods, no automatic charges, and no payment information needed to access the full platform.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are premium features and when will they launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are currently in beta and focusing on perfecting the core experience. Premium features under consideration for the future include advanced collaboration tools for shared planning, external calendar integrations, premium analytics dashboards, AI-powered planning assistance, and custom guide builders.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there any limits on the free version?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No limits. Use as many guides as you need simultaneously, answer as many questions as you want, read unlimited expert content, create unlimited notes and tasks, and track unlimited life events. The free version is genuinely comprehensive with no artificial restrictions.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I export my planning data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can export your planning data including answers, notes, and progress. Your data belongs to you and you can download it at any time. Export functionality is included in the free version.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is there a paid version with more features?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not yet. We are currently in beta and focused on building the best possible free planning experience. While we may introduce optional premium features in the future, all core planning functionality will always remain free. Any premium features would be truly optional enhancements, not requirements for effective planning.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can Templata be free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We believe comprehensive planning should be accessible to everyone. We are currently in beta and focused on building the best product possible. Our business model prioritizes accessibility and user value. The platform is free because we want to help as many people as possible navigate life\'s biggest moments successfully.'
        }
      },
      {
        '@type': 'Question',
        name: 'What happens to my data if I stop using Templata?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your data remains accessible as long as you have an account. You can export all your planning data at any time. If you delete your account, your data is permanently removed from our systems. There are no fees or restrictions on data access or export.'
        }
      }
    ]
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
        name: 'Pricing',
        item: 'https://templata.org/pricing',
      },
    ],
  };

  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Templata Pricing',
    description: 'Free beta life planning platform with no costs during beta',
    url: 'https://templata.org/pricing',
  };

  return (
    <>
      <Script
        id="pricing-product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="pricing-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="pricing-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="pricing-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <PageLayout>
        <PricingContent />
      </PageLayout>

      {/* Extensive Hidden SEO Content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Templata Pricing - Free Beta Access</h2>

        <h3>Free Life Planning Platform</h3>
        <p>
          Templata is currently free during beta. Access all planning guides, AI-refined questions, expert curated readings, and organizational tools at no cost during beta. No credit card required during beta period. We believe comprehensive planning for life's biggest moments should be accessible to everyone.
        </p>

        <h3>What's Included in Free (Everything)</h3>

        <h4>Unlimited Planning Guides</h4>
        <p>
          Access our entire library of expert-crafted planning guides covering weddings, career changes, home buying, business launches, financial planning, health journeys, moving, and dozens more life events. Use as many guides simultaneously as you need. Planning a wedding while buying a home and changing careers? Use all three guides at once with no restrictions.
        </p>

        <h4>AI-Refined Questions with 90%+ Coverage</h4>
        <p>
          Every planning guide includes 50+ questions refined through our proprietary Axiom Engine. These questions have been tested through months of AI-assisted validation to ensure comprehensive coverage of 90%+ of considerations for each life event. No limit on how many questions you can answer or guides you can complete.
        </p>

        <h4>Expert Curated Readings - Thousands of Articles</h4>
        <p>
          Access thousands of expert curated readings across all planning categories. Every article, guide, and resource has been vetted for quality and relevance. Learn from domain experts, industry professionals, and evidence-based research. Read unlimited content, save favorites, and reference anytime. No paywall, no article limits, no restrictions on expert content access.
        </p>

        <h4>Per-Guide Organization and Calendars</h4>
        <p>
          Each life event gets its own dedicated workspace with separate calendar, task list, and notes. This intentional per-guide organization prevents overwhelm and keeps planning contexts separate. Create unlimited calendars, schedule unlimited events, and maintain as many separate planning workspaces as you need.
        </p>

        <h4>Complete Task Management</h4>
        <p>
          Create unlimited tasks within each planning guide. Set priorities, track completion, organize by category, and manage all action items in one place. No limits on task creation, no restrictions on organizational features. Track everything from vendor calls to document submissions to research tasks.
        </p>

        <h4>Progress Tracking and Analytics</h4>
        <p>
          Monitor your planning progress with visual analytics. See completion percentages, identify gaps in your planning, celebrate milestones, and track how far you've come. Progress tracking is included free for all guides with no limitations.
        </p>

        <h4>Notes and Documentation Tools</h4>
        <p>
          Capture unlimited notes alongside planning questions. Document decisions, save important information, organize thoughts, and create comprehensive planning documentation. All notes are searchable, exportable, and securely stored. No limits on note creation or storage.
        </p>

        <h4>Powerful Search Functionality</h4>
        <p>
          Search across all guides, questions, readings, notes, and content instantly. Find exactly what you need when you need it. Full-text search is included free with no restrictions on search queries or results.
        </p>

        <h4>Auto-Save and Cloud Sync</h4>
        <p>
          Never lose your work. Templata automatically saves your progress as you answer questions, add notes, and organize tasks. Access your planning from any device with automatic cloud synchronization. All included free.
        </p>

        <h4>Secure Data Storage and Privacy</h4>
        <p>
          Industry-standard encryption for data storage and transmission. Your planning information, answers, and notes are private and secure. Privacy protections are not a premium feature—they're standard for everyone at no cost.
        </p>

        <h3>Currently in Beta</h3>
        <p>
          Templata is currently in beta, which means we're actively refining features, adding new guides, and improving the platform based on user feedback. Beta access is completely free with no limitations. We're focused on building the best possible planning experience before considering any pricing options.
        </p>

        <h3>Future Premium Features (Optional)</h3>
        <p>
          We are considering premium features for the future. Potential features under consideration include:
        </p>

        <h4>Advanced Collaboration Tools</h4>
        <p>
          Shared planning workspaces for partners, families, or teams. Collaborate in real-time on wedding planning, business launches, or family decisions.
        </p>

        <h4>External Calendar Integrations</h4>
        <p>
          Two-way sync with Google Calendar, Apple Calendar, Outlook, and other external calendar systems. The built-in per-guide calendars will always be free; integration with external tools would be an optional premium feature.
        </p>

        <h4>Premium Analytics Dashboard</h4>
        <p>
          Advanced visualizations including radar charts, timeline graphs, progress comparisons across guides, and deeper insights into your planning journey. Basic progress tracking remains free; enhanced analytics would be optional.
        </p>

        <h4>AI-Powered Planning Assistant</h4>
        <p>
          AI-generated insights, personalized recommendations, and intelligent suggestions based on your answers and planning progress. The core AI-refined question sets remain free; an interactive AI assistant would be premium.
        </p>

        <h4>Custom Guide Builder</h4>
        <p>
          Create your own custom planning guides for unique life events or specialized needs. Access to our library of expert-crafted guides remains free; tools to build custom guides would be premium.
        </p>

        <h4>Priority Support</h4>
        <p>
          Dedicated support channels and faster response times. Standard support remains available to all free users; enhanced support would be a premium option.
        </p>

        <h3>No Hidden Costs or Surprises</h3>

        <h4>No Credit Card Required</h4>
        <p>
          Sign up with just an email address. No payment information needed, no trial period that converts to paid, no sneaky upsells. Create an account and start planning immediately with full access to all features.
        </p>

        <h4>No Usage Limits</h4>
        <p>
          Unlike freemium models with artificial limits, Templata's free version has no restrictions. Answer unlimited questions, read unlimited articles, create unlimited tasks and notes, use unlimited guides. The free version is genuinely comprehensive.
        </p>

        <h4>No Required Upgrades</h4>
        <p>
          You can plan weddings, career changes, home purchases, business launches, and any other life event entirely within the free version. There are no features locked behind paywalls that are necessary for effective planning. Premium features, if introduced, would be optional enhancements.
        </p>

        <h4>No Ads or Sponsored Content</h4>
        <p>
          Your planning experience is ad-free. No sponsored vendor recommendations, no promotional content, no advertisements interrupting your planning. All expert readings are curated based on quality, not payment.
        </p>

        <h4>No Data Selling</h4>
        <p>
          We never sell your planning data to third parties. Your information, answers, and notes remain private. Privacy is not a premium feature—it's a fundamental right for all users.
        </p>

        <h3>Compare Templata Free vs Other Tools</h3>

        <h4>Templata Free vs Notion</h4>
        <p>
          Notion Free: Blank pages requiring you to figure out structure yourself. Limited blocks on free plan. Generic templates without domain expertise.

          Templata Free: Expert-crafted planning frameworks with 90%+ comprehensive coverage. Unlimited questions, readings, notes, and guides. AI-refined questions tested for months. No block limits, no page limits, no restrictions.
        </p>

        <h4>Templata Free vs Trello/Asana Free</h4>
        <p>
          Trello/Asana Free: Basic checklists and task management. No planning guidance, no expert content, no comprehensive question sets. Limited power-ups and integrations on free plans.

          Templata Free: Complete planning frameworks plus task management. AI-refined questions covering every consideration. Expert readings providing trusted guidance. Integrated organizational tools with no feature restrictions.
        </p>

        <h4>Templata Free vs Wedding Planning Apps</h4>
        <p>
          Most Wedding Planning Apps: Free versions with heavy limitations. Key features locked behind $50-200 subscriptions. Vendor spam and promotional content. Single-purpose for weddings only.

          Templata Free: Complete wedding planning guide plus 70+ other life event guides. No subscription required, no vendor spam, no feature limits. Use for wedding planning and simultaneously plan home purchase, career transition, or any other life event.
        </p>

        <h4>Templata Free vs Professional Consultants</h4>
        <p>
          Professional Consultants: $1000-5000+ for comprehensive planning assistance. Limited availability, expensive hourly rates.

          Templata Free: Expert frameworks developed by domain specialists. Comprehensive question sets ensuring 90%+ coverage. Curated expert readings from industry professionals. Available 24/7 at no cost.
        </p>

        <h3>Why is Templata Free?</h3>

        <h4>Mission-Driven Approach</h4>
        <p>
          We believe comprehensive planning for life's biggest moments should be accessible to everyone regardless of financial situation. Wedding planning, career transitions, home buying—these are major life events everyone faces. Access to expert guidance shouldn't depend on ability to pay.
        </p>

        <h4>Beta Focus on Product Excellence</h4>
        <p>
          As a beta platform, our primary focus is building the best possible planning experience. We're gathering user feedback, refining features, and perfecting the comprehensive planning framework. Keeping the platform free during beta allows us to focus entirely on product quality rather than monetization.
        </p>

        <h4>Long-Term Value Creation</h4>
        <p>
          By providing exceptional value for free during beta, we build trust and help as many people as possible. If we introduce premium features in the future, they'll be enhancements for users who've already experienced the core value.
        </p>

        <h3>What Users Save with Templata Free</h3>

        <h4>Money Saved vs Paid Alternatives</h4>
        <p>
          Wedding planning app subscriptions: $100-200 saved
          Productivity tool subscriptions (Notion, Asana, Trello premium): $100-300/year saved
          Professional planning consultants: $1000-5000+ saved
          Career coaching sessions: $500-2000+ saved
          Financial planning software: $50-200/year saved

          Total potential savings: $2000-8000+ using Templata free instead of paid alternatives
        </p>

        <h4>Time Saved with Comprehensive Frameworks</h4>
        <p>
          Without structured guidance, people spend 50-200 hours researching, organizing scattered notes, and figuring out what questions to ask. Templata's AI-refined question sets and expert curated readings save months of research time. This is included free—no time-wasting trial period, no upgrade required for key features.
        </p>

        <h3>Frequently Asked Questions About Pricing</h3>

        <h4>How much does Templata cost?</h4>
        <p>
          $0. Currently free during beta. All features available at no cost during beta. No credit card required to sign up. No trial period that converts to paid subscription. No hidden fees during beta period.
        </p>

        <h4>Is Templata really free or is it a trial?</h4>
        <p>
          Really free. Not a trial. All core features are free with no expiration. We are currently in beta and focused on building the best possible planning experience. There are no time limits, no feature restrictions on free users, and no forced upgrades.
        </p>

        <h4>Do I need to enter payment information?</h4>
        <p>
          No. Sign up requires only an email address. No credit card, no payment method, no billing information. Start planning immediately with full access to all features.
        </p>

        <h4>Are there limits on the free version?</h4>
        <p>
          No limits. Use unlimited guides, answer unlimited questions, read unlimited expert content, create unlimited notes and tasks. The free version is genuinely comprehensive without artificial restrictions.
        </p>

        <h4>When will you start charging for Templata?</h4>
        <p>
          Currently free during beta. We may introduce pricing options in the future as we continue to develop the platform.
        </p>

        <h4>What if I'm planning something expensive like a wedding - is it still free?</h4>
        <p>
          Yes. Whether you're planning a $5,000 wedding or a $50,000 wedding, Templata is free. Whether you're buying a $200,000 home or a $2,000,000 home, Templata is free. Our pricing (or lack thereof) doesn't depend on the scale or cost of what you're planning.
        </p>

        <h4>Can businesses and organizations use Templata for free?</h4>
        <p>
          Currently Templata is designed for individual life planning. Business use during beta is free, though we may introduce specific business pricing in the future. For now, anyone can use Templata free including entrepreneurs planning business launches.
        </p>

        <h4>How can I support Templata if it's free?</h4>
        <p>
          The best way to support Templata is by using the platform and providing feedback. Share with friends facing major life decisions. Report bugs, suggest features, and help us build the best possible planning experience. Word of mouth from satisfied users is invaluable.
        </p>

        <h3>Getting Started with Free Access</h3>
        <p>
          1. Create free account with email (no payment information required)
          2. Browse planning guides and choose one matching your current life event
          3. Start answering AI-refined questions at your own pace
          4. Read expert curated content to inform your decisions
          5. Organize tasks, add notes, track progress
          6. Use as many guides simultaneously as needed
          7. Export your planning data anytime

          Everything included free. No upgrades required. No feature restrictions. Comprehensive planning accessible to everyone.
        </p>

        <h3>Conclusion: Free Beta Access</h3>
        <p>
          Templata is currently free during beta as we continue to build and refine the platform. We believe everyone deserves access to expert planning frameworks for life's biggest moments. That's why Templata is currently free during beta.
        </p>
      </div>
    </>
  );
}
