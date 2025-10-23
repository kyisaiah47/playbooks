import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// This endpoint should be called by a cron job or manually
// Secure it with a secret header in production
export async function POST(request: NextRequest) {
  // Check for secret header (add this in production)
  const secret = request.headers.get('x-digest-secret');
  if (process.env.NODE_ENV === 'production' && secret !== process.env.DIGEST_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {

    // Calculate week range
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - 7);

    // Fetch new guides (would need a published_at column)
    // const { data: newGuides } = await supabase
    //   .from('guides')
    //   .select('slug, title')
    //   .gte('published_at', weekStart.toISOString())
    //   .order('published_at', { ascending: false })
    //   .limit(10);

    // Fetch top discussions (comments in last 7 days)
    const { data: topDiscussions } = await supabase
      .from('guide_comments')
      .select('guide_slug')
      .gte('created_at', weekStart.toISOString())
      .order('upvotes', { ascending: false })
      .limit(10);

    // Group by guide_slug and count
    const discussionCounts: Record<string, number> = {};
    topDiscussions?.forEach((comment) => {
      discussionCounts[comment.guide_slug] = (discussionCounts[comment.guide_slug] || 0) + 1;
    });

    // Fetch top requests
    const { data: topRequests } = await supabase
      .from('guide_requests')
      .select('topic, votes')
      .eq('status', 'queued')
      .order('votes', { ascending: false })
      .limit(10);

    // Build HTML digest
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Templata Weekly Digest</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
    h1 { color: #333; }
    h2 { color: #666; margin-top: 30px; }
    ul { padding-left: 20px; }
    li { margin: 10px 0; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px; }
  </style>
</head>
<body>
  <h1>Templata Weekly Digest</h1>
  <p>Week of ${weekStart.toLocaleDateString()}</p>

  <h2>📊 Top Discussions</h2>
  <ul>
    ${Object.entries(discussionCounts)
      .slice(0, 5)
      .map(([slug, count]) => `<li><a href="https://templata.org/guides/${slug}#discussion">${slug}</a> — ${count} comments</li>`)
      .join('')}
  </ul>

  <h2>🎯 Top Requested Guides</h2>
  <ul>
    ${(topRequests || [])
      .slice(0, 5)
      .map((req) => `<li>${req.topic} (${req.votes} votes)</li>`)
      .join('')}
  </ul>

  <div class="footer">
    <p>Templata — Wikipedia × Notion for life planning</p>
    <p><a href="https://templata.org">templata.org</a></p>
  </div>
</body>
</html>
    `;

    // Store digest
    const { error: insertError } = await supabase.from('weekly_digests').insert({
      week_start: weekStart.toISOString().split('T')[0],
      html,
    });

    if (insertError) {
      console.error('Error storing digest:', insertError);
      return NextResponse.json({ error: 'Failed to store digest' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      weekStart: weekStart.toISOString(),
      stats: {
        discussions: Object.keys(discussionCounts).length,
        requests: topRequests?.length || 0,
      },
    });
  } catch (error) {
    console.error('Error generating digest:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
