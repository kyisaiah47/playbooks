import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthenticatedUser, unauthorizedResponse, errorResponse, successResponse } from '@/lib/auth-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return unauthorizedResponse();
    }

    const { searchParams } = new URL(request.url);
    const workspace_id = searchParams.get('workspace_id');
    const reading_id = searchParams.get('id');

    // If requesting a specific reading by ID
    if (reading_id) {
      const { data: reading, error } = await supabase
        .from('readings')
        .select(`
          id,
          title,
          content,
          excerpt,
          read_time,
          guide,
          tags,
          sources,
          author
        `)
        .eq('id', reading_id)
        .single();

      if (error) {
        console.error('Error fetching reading:', error);
        return errorResponse('Failed to fetch reading');
      }

      if (!reading) {
        return errorResponse('Reading not found', 404);
      }

      // Fetch guide name
      const { data: guide } = await supabase
        .from('guides')
        .select('name')
        .eq('id', reading.guide)
        .single();

      return successResponse({
        reading: {
          id: reading.id,
          title: reading.title,
          content: reading.content,
          excerpt: reading.excerpt || '',
          readTime: reading.read_time,
          author: reading.author || 'Templata',
          publishedAt: new Date().toISOString(),
          sources: reading.sources || [], // Use the sources field, not tags
        }
      });
    }

    // First, get user's active guides
    let userGuideIds: string[] = [];
    if (workspace_id) {
      const { data: userGuides } = await supabase
        .from('notes')
        .select('guide_id')
        .eq('user_id', user.userId)
        .eq('workspace_id', workspace_id)
        .eq('archived', false);

      userGuideIds = userGuides?.map((ug: any) => ug.guide_id) || [];
    }

    // Fetch readings filtered by user's guides
    let query = supabase
      .from('readings')
      .select(`
        id,
        title,
        content,
        excerpt,
        read_time,
        guide,
        tags,
        author
      `);

    // Filter by user's guides if we have them
    if (userGuideIds.length > 0) {
      query = query.in('guide', userGuideIds);
    }

    query = query.order('guide', { ascending: true });

    const { data: readings, error } = await query;

    if (error) {
      console.error('Error fetching readings:', error);
      return errorResponse('Failed to fetch readings');
    }

    // Fetch all guides to match guide field
    const { data: guides, error: guidesError } = await supabase
      .from('guides')
      .select('id, name');

    if (guidesError) {
      console.error('Error fetching guides:', guidesError);
      return errorResponse('Failed to fetch guides');
    }

    // Create a map of guide id to name
    const guideMap = new Map(guides?.map((g: any) => [g.id, g.name]) || []);

    // Transform the data
    const transformedReadings = readings
      .filter((reading: any) => reading.guide) // Only include readings with a guide/guide
      .map((reading: any) => ({
        id: reading.id,
        title: reading.title,
        content: reading.content,
        description: reading.excerpt || '',
        reading_time: parseInt(reading.read_time) || 5,
        guide_id: reading.guide,
        guide_name: guideMap.get(reading.guide) || 'Unknown Guide',
        author: reading.author || null,
      }));

    return successResponse({ readings: transformedReadings });
  } catch (error) {
    console.error('Error in GET /api/readings:', error);
    return errorResponse('Internal server error');
  }
}
