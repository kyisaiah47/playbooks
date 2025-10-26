import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const guide = searchParams.get('guide');
    const search = searchParams.get('search');

    // If no guide specified, return list of guides with reading counts
    if (!guide) {
      // Use raw SQL for efficient GROUP BY query
      const { data, error } = await supabase.rpc('get_library_guides');

      if (error) {
        console.error('Error fetching guides:', error);
        // Fallback to direct query if RPC doesn't exist
        const result = await supabase
          .from('readings')
          .select('guide');

        if (result.error) {
          return NextResponse.json({ error: result.error.message }, { status: 500 });
        }

        // Group by guide and count
        const guideCounts = result.data.reduce((acc: Record<string, number>, reading) => {
          if (reading.guide) {
            acc[reading.guide] = (acc[reading.guide] || 0) + 1;
          }
          return acc;
        }, {});

        const guides = Object.entries(guideCounts)
          .map(([guide_id, reading_count]) => ({
            guide_id,
            guide_name: guide_id.split('-').map(word =>
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' '),
            reading_count
          }))
          .sort((a, b) => b.reading_count - a.reading_count);

        return NextResponse.json({ guides });
      }

      // Format RPC results
      const guides = data.map((row: any) => ({
        guide_id: row.guide,
        guide_name: row.guide.split('-').map((word: string) =>
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        reading_count: row.count
      }));

      return NextResponse.json({ guides });
    }

    // Fetch readings for a specific guide
    let query = supabase
      .from('readings')
      .select('id, title, author, excerpt, type, source_url, updated_at')
      .eq('guide', guide)
      .order('updated_at', { ascending: false });

    // Add search filter if provided
    if (search) {
      query = query.or(`title.ilike.%${search}%,author.ilike.%${search}%,excerpt.ilike.%${search}%`);
    }

    const { data: readings, error } = await query;

    if (error) {
      console.error('Error fetching readings:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ readings });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
