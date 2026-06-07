import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const baseUrl = 'https://www.templata.org';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: playbooks } = await supabase
    .from('playbooks')
    .select('id, created_at')
    .eq('is_public', true)
    .is('deleted_at', null)
    .order('created_at', { ascending: false });

  const communityPages: MetadataRoute.Sitemap =
    playbooks?.map((p) => ({
      url: `${baseUrl}/community/${p.id}`,
      lastModified: new Date(p.created_at),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })) || [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...communityPages,
  ];
}
