import { PageLayout } from '@/components/layout';
import { getArticles } from '@/registry/articles';
import { ArticlesList } from './articles-list';
import { ArticlesHero } from './articles-hero';
import { ArticlesFeatures } from './articles-features';

// Metadata is handled in layout.tsx

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1', 10);

  const { articles, total } = await getArticles(page, 100);
  console.log(`[ArticlesPage] Fetched ${articles.length} articles (page ${page}, total: ${total})`);

  return (
    <PageLayout>
      <ArticlesHero />
      <ArticlesFeatures />

      {/* Article List */}
      <div className="py-16">
        <ArticlesList initialArticles={articles} initialTotal={total} />
      </div>
    </PageLayout>
  );
}
