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

    // Fetch all readings from the readings table where type is 'guide'
    // and template field links to guide id
    const { data: readings, error } = await supabase
      .from('readings')
      .select(`
        id,
        title,
        content,
        excerpt,
        read_time,
        template,
        tags
      `)
      .eq('type', 'guide')
      .order('template', { ascending: true });

    if (error) {
      console.error('Error fetching readings:', error);
      return errorResponse('Failed to fetch readings');
    }

    // Fetch all guides to match template field
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
      .filter((reading: any) => reading.template) // Only include readings with a template/guide
      .map((reading: any) => ({
        id: reading.id,
        title: reading.title,
        content: reading.content,
        description: reading.excerpt || '',
        reading_time: parseInt(reading.read_time) || 5,
        guide_id: reading.template,
        guide_name: guideMap.get(reading.template) || 'Unknown Guide',
      }));

    return successResponse({ readings: transformedReadings });
  } catch (error) {
    console.error('Error in GET /api/readings:', error);
    return errorResponse('Internal server error');
  }
}
