import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic, category, email } = body;

    if (!topic || topic.length < 5) {
      return NextResponse.json(
        { error: 'Topic must be at least 5 characters' },
        { status: 400 }
      );
    }

    if (topic.length > 200) {
      return NextResponse.json(
        { error: 'Topic must be less than 200 characters' },
        { status: 400 }
      );
    }

    const { data: request_record, error } = await supabase
      .from('guide_requests')
      .insert({
        topic,
        category: category || null,
        email: email || null,
        votes: 1,
        status: 'queued',
      })
      .select()
      .single();

    if (error) {
      console.error('Error adding request:', error);
      return NextResponse.json({ error: 'Failed to add request' }, { status: 500 });
    }

    return NextResponse.json({ request: request_record }, { status: 201 });
  } catch (error) {
    console.error('Error in add request API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
