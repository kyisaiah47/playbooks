import type { Metadata } from 'next';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';
import { PageLayout } from '@/components/layout';
import { QuestionsHub } from '@/components/questions-hub';
import { TEMPLATA_FAQ } from '@/lib/seo';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const metadata: Metadata = {
  title: 'AI-Refined Planning Questions Database - 90%+ Coverage | Templata',
  description: 'Browse AI-refined planning questions across all life categories. Wedding, career, finance, relationships, health & major life events. Structured guidance questions with 90%+ coverage. Free access.',
  keywords: 'planning questions database, life planning questions, ai refined questions, career planning questions, financial planning questions, wedding planning questions, home buying questions, life event questions, structured planning questions, what to ask when planning, planning framework questions',
  authors: [{ name: 'Templata' }],
  creator: 'Templata',
  publisher: 'Templata',
  openGraph: {
    title: 'Planning Questions Database | Templata',
    description: 'Browse hundreds of expert planning questions for life\'s biggest moments.',
    url: 'https://templata.org/questions',
    siteName: 'Templata',
    images: [
      {
        url: 'https://templata.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Templata Planning Questions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planning Questions Database | Templata',
    description: 'Browse hundreds of expert planning questions for life\'s biggest moments.',
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
    canonical: 'https://templata.org/questions',
  },
};

async function getAllQuestionsWithGuides() {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select(`
        *,
        guides:guide_id (
          id,
          name,
          category
        )
      `)
      .order('question_number');

    if (error) {
      console.error('[getAllQuestionsWithGuides] Error:', error);
      return [];
    }

    console.log('[getAllQuestionsWithGuides] Got', data?.length, 'questions');
    return data || [];
  } catch (e) {
    console.error('[getAllQuestionsWithGuides] Exception:', e);
    return [];
  }
}

async function getCategories() {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('display_order');

    if (error) return [];
    return data || [];
  } catch {
    return [];
  }
}

export default async function QuestionsPage() {
  const [questions, categories] = await Promise.all([
    getAllQuestionsWithGuides(),
    getCategories(),
  ]);

  // Group questions by category
  const questionsByCategory = questions.reduce((acc: any, question: any) => {
    const guide = question.guides;
    if (!guide) return acc;

    const category = guide.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({
      ...question,
      guideName: guide.name,
      guideId: guide.id,
    });
    return acc;
  }, {});

  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Planning Questions Database',
    description: 'Comprehensive database of AI-refined planning questions for life\'s biggest moments',
    url: 'https://templata.org/questions',
  };

  // FAQ schema with actual questions
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
      ...questions.slice(0, 100).map((q: any) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `This is a planning question from the ${q.guides?.name || 'planning'} guide on Templata.`,
        },
      })),
    ],
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
        name: 'Planning Questions',
        item: 'https://templata.org/questions',
      },
    ],
  };

  return (
    <>
      <Script
        id="questions-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="questions-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="questions-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageLayout>
        <QuestionsHub
          questionsByCategory={questionsByCategory}
          categories={categories}
          totalQuestions={questions.length}
        />
      </PageLayout>

      {/* Hidden SEO content - all questions for search engines */}
      <div className="sr-only" aria-hidden="true">
        <h2>Complete Planning Questions Database</h2>
        <p>
          Comprehensive collection of {questions.length} expert-crafted planning questions across {categories.length} life categories.
        </p>

        {categories.map((category: any) => {
          const categoryQuestions = questionsByCategory[category.id] || [];
          if (categoryQuestions.length === 0) return null;

          return (
            <div key={category.id}>
              <h3>{category.name} Planning Questions</h3>
              <p>{category.description}</p>
              <ul>
                {categoryQuestions.map((q: any) => (
                  <li key={q.id}>
                    <strong>{q.question}</strong>
                    <p>From the {q.guideName} planning guide</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <h3>All Planning Questions by Guide</h3>
        <ul>
          {questions.map((q: any) => (
            <li key={q.id}>
              {q.question} (Guide: {q.guides?.name || 'Unknown'}, Category: {q.category_name || 'General'})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
