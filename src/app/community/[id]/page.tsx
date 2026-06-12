import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { PlaybookView } from './PlaybookView';
import { howToSchema, breadcrumbSchema } from '@/lib/seo';
import type { Playbook, PlaybookItem } from '@/types/playbook';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const baseUrl = 'https://templata.org';

async function getPlaybook(id: string): Promise<{ playbook: Playbook; items: PlaybookItem[] } | null> {
  const { data: playbook, error } = await supabase
    .from('playbooks')
    .select('*')
    .eq('id', id)
    .eq('is_public', true)
    .is('deleted_at', null)
    .single();

  if (error || !playbook) return null;

  const { data: items } = await supabase
    .from('items')
    .select('*')
    .eq('playbook_id', id)
    .order('position', { ascending: true });

  return { playbook, items: items ?? [] };
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const result = await getPlaybook(id);

  if (!result) {
    return { title: 'Playbook Not Found — Playbook' };
  }

  const { playbook } = result;
  const description = playbook.description
    ?? `A step-by-step AI-generated playbook for ${playbook.title}. Browse tasks, reflection questions, and curated resources.`;

  return {
    title: `${playbook.title} — Playbook`,
    description,
    openGraph: {
      title: playbook.title,
      description,
      url: `${baseUrl}/community/${id}`,
      type: 'article',
      publishedTime: playbook.created_at,
      modifiedTime: playbook.updated_at,
    },
    twitter: {
      card: 'summary',
      title: playbook.title,
      description,
    },
    alternates: {
      canonical: `${baseUrl}/community/${id}`,
    },
  };
}

export default async function CommunityPlaybookPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const result = await getPlaybook(id);

  if (!result) notFound();

  const { playbook, items } = result;
  const pageUrl = `${baseUrl}/community/${id}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Community', url: `${baseUrl}/community` },
              { name: playbook.title, url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToSchema(playbook.title, playbook.description, items, pageUrl)
          ),
        }}
      />
      <PlaybookView id={id} initialPlaybook={playbook} initialItems={items} />
    </>
  );
}
