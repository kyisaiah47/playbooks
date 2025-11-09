import type { Metadata } from 'next';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';
import { PageLayout } from '@/components/layout';
import { CategoryGuidesList } from '@/components/category-guides-list';
import { notFound } from 'next/navigation';
import { TEMPLATA_FAQ } from '@/lib/seo';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Category metadata mapping for better SEO
const CATEGORY_META = {
  'career-work': {
    title: 'Career & Work Planning Guides',
    metaTitle: 'Career Planning Guides & Templates | Job Search, Leadership & More | Templata',
    description: 'Expert career planning guides for job search, career change, leadership transitions, freelancing, and workplace success. Free templates and proven frameworks.',
    keywords: [
      'career planning guides',
      'job search templates',
      'career change guide',
      'leadership transition planning',
      'freelancing guide',
      'workplace success templates',
      'career development framework',
      'professional growth planning',
      'burnout recovery guide',
      'remote work success',
    ],
  },
  'finance': {
    title: 'Finance & Money Planning Guides',
    metaTitle: 'Financial Planning Guides & Templates | Budgeting, Investing & More | Templata',
    description: 'Expert financial planning guides for budgeting, investing, debt payoff, home buying, retirement planning, and emergency funds. Free templates and proven frameworks.',
    keywords: [
      'financial planning guides',
      'budgeting templates',
      'debt payoff guide',
      'investing for beginners',
      'retirement planning guide',
      'emergency fund template',
      'home buying guide',
      'money management framework',
      'personal finance planning',
      'financial recovery guide',
    ],
  },
  'life-events': {
    title: 'Life Events Planning Guides',
    metaTitle: 'Life Event Planning Guides & Templates | Major Transitions | Templata',
    description: 'Expert guides for major life transitions including moving, home buying, life planning, and safety. Free templates and proven frameworks.',
    keywords: [
      'life event planning guides',
      'major life transitions',
      'moving guide template',
      'home buying checklist',
      'life planning framework',
      'transition planning guide',
      'life change templates',
      'relocation planning',
    ],
  },
  'health-wellness': {
    title: 'Health & Wellness Planning Guides',
    metaTitle: 'Health & Wellness Guides | Fitness, Mental Health & Wellbeing | Templata',
    description: 'Expert health and wellness planning guides for physical fitness, mental health, nutrition, and overall wellbeing. Free templates and proven frameworks.',
    keywords: [
      'health planning guides',
      'wellness templates',
      'fitness planning guide',
      'mental health framework',
      'nutrition planning template',
      'wellbeing guide',
      'health goal planning',
      'wellness journey templates',
    ],
  },
  'personal-growth': {
    title: 'Personal Growth & Learning Guides',
    metaTitle: 'Personal Growth Guides | Learning, Creativity & Self-Improvement | Templata',
    description: 'Expert personal growth guides for learning new skills, creativity, hobbies, and self-improvement. Free templates and proven frameworks.',
    keywords: [
      'personal growth guides',
      'self-improvement templates',
      'learning framework',
      'creativity planning guide',
      'hobby planning template',
      'skill development guide',
      'personal development framework',
      'growth mindset planning',
    ],
  },
  'relationships': {
    title: 'Relationships Planning Guides',
    metaTitle: 'Relationship Planning Guides | Family, Social & Communication | Templata',
    description: 'Expert relationship planning guides for family dynamics, social connections, communication, and building strong relationships. Free templates and proven frameworks.',
    keywords: [
      'relationship planning guides',
      'family planning templates',
      'communication framework',
      'social connection guide',
      'relationship building template',
      'family dynamics planning',
      'interpersonal skills guide',
    ],
  },
};

async function getCategory(categorySlug: string) {
  try {
    const { data: category, error } = await supabase
      .from('categories')
      .select('*')
      .eq('id', categorySlug)
      .single();

    if (error || !category) return null;
    return category;
  } catch {
    return null;
  }
}

async function getGuidesInCategory(categoryId: string) {
  try {
    const { data: guides, error } = await supabase
      .from('guides')
      .select('id, name, description, category, icon, difficulty, estimated_time, tags')
      .eq('category', categoryId)
      .order('name');

    if (error) return [];

    // Check if each guide has content (questions and readings)
    const guidesWithContent = await Promise.all(
      (guides || []).map(async (guide) => {
        const [questionsResult, readingsResult] = await Promise.all([
          supabase.from('questions').select('id').eq('guide_id', guide.id),
          supabase.from('readings').select('id').eq('guide', guide.id)
        ]);

        return {
          ...guide,
          hasContent: (questionsResult.data?.length || 0) > 0 && (readingsResult.data?.length || 0) > 0,
          questionsCount: questionsResult.data?.length || 0,
          readingsCount: readingsResult.data?.length || 0,
        };
      })
    );

    return guidesWithContent;
  } catch {
    return [];
  }
}

async function getCategoryQuestionsGrouped(categoryId: string) {
  try {
    const { data: guides } = await supabase
      .from('guides')
      .select('id, name')
      .eq('category', categoryId);

    if (!guides || guides.length === 0) return [];

    const questionsGrouped = await Promise.all(
      guides.map(async (guide) => {
        const { data: questions } = await supabase
          .from('questions')
          .select('id, question, question_number')
          .eq('guide_id', guide.id)
          .order('question_number')
          .limit(10); // First 10 questions per guide

        return {
          guideName: guide.name,
          guideId: guide.id,
          questions: questions || [],
          totalCount: questions?.length || 0,
        };
      })
    );

    return questionsGrouped.filter(g => g.questions.length > 0);
  } catch {
    return [];
  }
}

async function getCategoryReadingsGrouped(categoryId: string) {
  try {
    const { data: guides } = await supabase
      .from('guides')
      .select('id, name')
      .eq('category', categoryId);

    if (!guides || guides.length === 0) return [];

    const readingsGrouped = await Promise.all(
      guides.map(async (guide) => {
        const { data: readings } = await supabase
          .from('readings')
          .select('id, title, excerpt, author, read_time')
          .eq('guide', guide.id)
          .order('created_at', { ascending: false })
          .limit(6); // First 6 readings per guide

        return {
          guideName: guide.name,
          guideId: guide.id,
          readings: readings || [],
          totalCount: readings?.length || 0,
        };
      })
    );

    return readingsGrouped.filter(g => g.readings.length > 0);
  } catch {
    return [];
  }
}

async function getCategories() {
  try {
    const { data: categories, error } = await supabase
      .from('categories')
      .select('*')
      .order('display_order');

    if (error) return [];
    return categories || [];
  } catch {
    return [];
  }
}

async function getAllCategoryReadingsWithContent(categoryId: string) {
  try {
    const { data: guides } = await supabase
      .from('guides')
      .select('id')
      .eq('category', categoryId);

    if (!guides || guides.length === 0) return [];

    const { data: readings, error } = await supabase
      .from('readings')
      .select('id, title, content, excerpt, author, read_time')
      .in('guide', guides.map(g => g.id))
      .order('created_at', { ascending: false });

    if (error) return [];
    return readings || [];
  } catch {
    return [];
  }
}

async function getAllCategoryQuestions(categoryId: string) {
  try {
    const { data: guides } = await supabase
      .from('guides')
      .select('id')
      .eq('category', categoryId);

    if (!guides || guides.length === 0) return [];

    const { data: questions, error } = await supabase
      .from('questions')
      .select('id, question, question_number')
      .in('guide_id', guides.map(g => g.id))
      .order('question_number');

    if (error) return [];
    return questions || [];
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = await getCategory(categorySlug);

  if (!category) {
    return {
      title: 'Category Not Found - Templata',
      description: 'The requested category could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const meta = CATEGORY_META[categorySlug as keyof typeof CATEGORY_META] || {
    title: category.name,
    metaTitle: `${category.name} Planning Guides | Templata`,
    description: category.description || `Expert planning guides for ${category.name.toLowerCase()}.`,
    keywords: [`${category.name.toLowerCase()} guides`, 'planning templates', 'expert frameworks'],
  };

  return {
    title: meta.metaTitle,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.metaTitle,
      description: meta.description,
      url: `https://templata.org/guides/categories/${categorySlug}`,
      siteName: 'Templata',
      images: [
        {
          url: 'https://templata.org/og-image.png',
          width: 1200,
          height: 630,
          alt: `${category.name} Planning Guides`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.metaTitle,
      description: meta.description,
      images: ['https://templata.org/og-image.png'],
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
      canonical: `https://templata.org/guides/categories/${categorySlug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = await getCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const [guides, questionsGrouped, readingsGrouped, allCategories, allReadings, allQuestions] = await Promise.all([
    getGuidesInCategory(categorySlug),
    getCategoryQuestionsGrouped(categorySlug),
    getCategoryReadingsGrouped(categorySlug),
    getCategories(),
    getAllCategoryReadingsWithContent(categorySlug),
    getAllCategoryQuestions(categorySlug),
  ]);

  const relatedCategories = allCategories.filter(c => c.id !== categorySlug);

  const totalQuestionsCount = guides.reduce((sum, g) => sum + (g.questionsCount || 0), 0);
  const totalReadingsCount = guides.reduce((sum, g) => sum + (g.readingsCount || 0), 0);

  // CollectionPage schema for the category
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} Planning Guides`,
    description: category.description,
    url: `https://templata.org/guides/categories/${categorySlug}`,
    about: {
      '@type': 'Thing',
      name: category.name,
    },
    numberOfItems: guides.length,
  };

  // ItemList schema for guides in this category
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${category.name} Guides`,
    description: `Expert planning guides for ${category.name.toLowerCase()}`,
    numberOfItems: guides.length,
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'HowTo',
        name: guide.name,
        description: guide.description,
        url: `https://templata.org/guides/${guide.id}`,
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
        name: 'Guides',
        item: 'https://templata.org/guides',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://templata.org/guides/categories/${categorySlug}`,
      },
    ],
  };

  // FAQ schema for rich snippets
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

  return (
    <>
      <Script
        id="category-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Script
        id="category-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="category-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="category-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageLayout>
        <CategoryGuidesList
          category={category}
          guides={guides}
          questionsGrouped={questionsGrouped}
          readingsGrouped={readingsGrouped}
          relatedCategories={relatedCategories}
          totalQuestionsCount={totalQuestionsCount}
          totalReadingsCount={totalReadingsCount}
        />
      </PageLayout>

      {/* Hidden SEO content - all category readings and questions for search engines */}
      <div className="sr-only" aria-hidden="true">
        <h2>Complete {category.name} Planning Resources</h2>
        <p>
          Comprehensive collection of {totalReadingsCount} expert readings and {totalQuestionsCount} planning questions across {guides.length} guides for {category.name.toLowerCase()}.
        </p>

        <h3>All {category.name} Planning Questions</h3>
        <ul>
          {allQuestions.map((q: any) => (
            <li key={q.id}>{q.question}</li>
          ))}
        </ul>

        <h3>All {category.name} Expert Readings</h3>
        {allReadings.map((reading: any) => (
          <article key={`seo-${reading.id}`}>
            <h4>{reading.title}</h4>
            <p>By {reading.author} • {reading.read_time}</p>
            <div>
              {reading.content?.replace(/\n/g, ' ') || reading.excerpt || ''}
            </div>
          </article>
        ))}

        <h3>{category.name} Planning Guides</h3>
        <ul>
          {guides.map((guide: any) => (
            <li key={guide.id}>
              <h4>{guide.name}</h4>
              <p>{guide.description}</p>
              <p>Difficulty: {guide.difficulty || 'All levels'}</p>
              <p>Contains {guide.questionsCount} questions and {guide.readingsCount} expert readings</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
