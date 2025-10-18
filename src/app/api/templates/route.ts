import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const type = searchParams.get('type');
    const search = searchParams.get('search');
    const limit = searchParams.get('limit');

    // Build query
    let query = supabase
      .from('templata_templates')
      .select('*');

    // Filter by category
    if (category && category !== 'all') {
      query = query.ilike('category', category);
    }

    // Search filter
    if (search) {
      query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`);
    }

    const { data: templates, error } = await query;

    if (error) {
      console.error('Error fetching templates from DB:', error);
      return NextResponse.json(
        { error: 'Failed to fetch templates' },
        { status: 500 }
      );
    }

    let filtered = templates || [];

    // Client-side search on tags (since we're using JSONB array)
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(template =>
        template.tags?.some((tag: string) => tag.toLowerCase().includes(searchLower))
      );
    }

    // Apply limit
    if (limit) {
      const limitNum = parseInt(limit, 10);
      filtered = filtered.slice(0, limitNum);
    }

    // Transform DB format to match expected API format
    const formattedTemplates = filtered.map(template => ({
      id: template.id,
      name: template.name,
      description: template.description,
      category: template.category,
      icon: template.icon,
      url: `/${template.id}/app`,
      template: {
        id: template.id,
        title: template.title,
        description: template.description,
        category: template.category,
        icon: template.icon,
        difficulty: template.difficulty,
        estimatedTime: template.estimated_time,
        tags: template.tags,
        lastUpdated: template.last_updated,
        version: template.version,
      }
    }));

    return NextResponse.json({
      templates: formattedTemplates,
      total: formattedTemplates.length,
      totalAvailable: templates?.length || 0
    });
  } catch (error) {
    console.error('Error in /api/templates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch templates' },
      { status: 500 }
    );
  }
}
