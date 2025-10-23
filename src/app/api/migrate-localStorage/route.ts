import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    // Get user session from cookie
    const sessionCookie = request.cookies.get('session');
    if (!sessionCookie) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const session = JSON.parse(sessionCookie.value);
    const userId = session.userId;

    const { workspace, reflections } = await request.json();

    let migratedWorkspace = 0;
    let migratedReflections = 0;

    // Migrate workspace responses
    if (workspace && workspace.length > 0) {
      for (const item of workspace) {
        try {
          // Check if already exists
          const { data: existing } = await supabase
            .from('responses')
            .select('id')
            .eq('user_id', userId)
            .eq('template_id', item.templateId)
            .eq('prompt_id', item.promptId)
            .single();

          if (!existing && item.response && item.response.trim()) {
            await supabase
              .from('responses')
              .insert({
                user_id: userId,
                template_id: item.templateId,
                prompt_id: item.promptId,
                response: item.response,
              });
            migratedWorkspace++;
          }
        } catch (e) {
          console.error('Error migrating workspace item:', e);
        }
      }
    }

    // Migrate reflections
    if (reflections && reflections.length > 0) {
      for (const item of reflections) {
        try {
          // Check if already exists
          const { data: existing } = await supabase
            .from('reflections')
            .select('id')
            .eq('user_id', userId)
            .eq('date', item.date)
            .single();

          if (!existing && item.content && item.content.trim()) {
            await supabase
              .from('reflections')
              .insert({
                user_id: userId,
                date: item.date,
                prompt: item.prompt,
                content: item.content,
                mood: item.mood,
                tags: item.tags || [],
              });
            migratedReflections++;
          }
        } catch (e) {
          console.error('Error migrating reflection item:', e);
        }
      }
    }

    return NextResponse.json({
      success: true,
      migrated: {
        workspace: migratedWorkspace,
        reflections: migratedReflections,
      },
    });
  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json(
      { error: 'Migration failed' },
      { status: 500 }
    );
  }
}
