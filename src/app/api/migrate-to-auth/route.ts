import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// This is a one-time migration script to move users from public.users to auth.users
// Run this once and then delete it

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST() {
  try {
    // Get all users from users that don't have a user_id yet
    const { data: profiles, error: profilesError } = await supabase
      .from('users')
      .select('*')
      .is('user_id', null);

    if (profilesError) {
      return NextResponse.json({ error: profilesError.message }, { status: 500 });
    }

    if (!profiles || profiles.length === 0) {
      return NextResponse.json({ message: 'No users to migrate' });
    }

    const results = [];

    for (const profile of profiles) {
      try {
        // Create user in auth.users
        // Note: We'll set a default password that they'll need to reset
        const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
          email: profile.email,
          password: 'TempPassword123!', // They'll need to reset this
          email_confirm: true, // Auto-confirm email
          user_metadata: {
            name: profile.name,
            migrated_from_custom_auth: true,
          }
        });

        if (authError) {
          results.push({
            email: profile.email,
            status: 'error',
            error: authError.message
          });
          continue;
        }

        // Update user to link to auth user
        const { error: updateError } = await supabase
          .from('users')
          .update({ user_id: authUser.user.id })
          .eq('id', profile.id);

        if (updateError) {
          results.push({
            email: profile.email,
            status: 'error',
            error: `Created auth user but failed to link: ${updateError.message}`
          });
          continue;
        }

        results.push({
          email: profile.email,
          status: 'success',
          auth_user_id: authUser.user.id
        });
      } catch (err: any) {
        results.push({
          email: profile.email,
          status: 'error',
          error: err.message
        });
      }
    }

    return NextResponse.json({
      message: 'Migration completed',
      results
    });
  } catch (error: any) {
    console.error('Migration error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
