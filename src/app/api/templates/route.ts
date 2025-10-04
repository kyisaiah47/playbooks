import { NextResponse } from 'next/server';
import { templateRegistry } from '@/registry/templates';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const type = searchParams.get('type');
    const search = searchParams.get('search');
    const limit = searchParams.get('limit');

    let filtered = [...templateRegistry];

    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter(template =>
        template.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by type
    if (type && type !== 'all') {
      filtered = filtered.filter(template => {
        if (type === 'featured') return template.featured;
        if (type === 'popular') return template.popular;
        return true;
      });
    }

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(template =>
        template.title.toLowerCase().includes(searchLower) ||
        template.description.toLowerCase().includes(searchLower) ||
        template.tags?.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Apply limit
    if (limit) {
      const limitNum = parseInt(limit, 10);
      filtered = filtered.slice(0, limitNum);
    }

    return NextResponse.json({
      templates: filtered,
      total: filtered.length,
      totalAvailable: templateRegistry.length
    });
  } catch (error) {
    console.error('Error in /api/templates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch templates' },
      { status: 500 }
    );
  }
}
