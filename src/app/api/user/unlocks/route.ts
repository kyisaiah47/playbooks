import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET /api/user/unlocks - Get user's unlocked templates
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID required' },
        { status: 400 }
      );
    }

    // Get user's subscription tier
    const { data: userData, error: userError } = await supabase
      .from('templata_users')
      .select('subscription_tier')
      .eq('id', userId)
      .single();

    if (userError) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // If pro tier, return all templates access
    if (userData.subscription_tier === 'pro') {
      return NextResponse.json({
        tier: 'pro',
        hasUnlimitedAccess: true,
        unlockedTemplates: [],
        remainingUnlocks: null
      });
    }

    // Get unlocked templates for free tier
    const { data: unlocks, error: unlocksError } = await supabase
      .from('templata_user_template_unlocks')
      .select('template_id, unlocked_at')
      .eq('user_id', userId);

    if (unlocksError) {
      console.error('[API /user/unlocks] Error fetching unlocks:', unlocksError);
      throw unlocksError;
    }

    const unlockedCount = unlocks?.length || 0;
    const remainingUnlocks = Math.max(0, 3 - unlockedCount);

    return NextResponse.json({
      tier: 'free',
      hasUnlimitedAccess: false,
      unlockedTemplates: unlocks?.map(u => u.template_id) || [],
      remainingUnlocks,
      unlocks: unlocks || []
    });
  } catch (error) {
    console.error('[API /user/unlocks] Fatal error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch unlocks' },
      { status: 500 }
    );
  }
}

// POST /api/user/unlocks - Unlock a template (free tier only)
export async function POST(request: Request) {
  try {
    const { userId, templateId } = await request.json();

    if (!userId || !templateId) {
      return NextResponse.json(
        { error: 'User ID and template ID required' },
        { status: 400 }
      );
    }

    // Get user's subscription tier
    const { data: userData, error: userError } = await supabase
      .from('templata_users')
      .select('subscription_tier')
      .eq('id', userId)
      .single();

    if (userError) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Pro users don't need to unlock templates
    if (userData.subscription_tier === 'pro') {
      return NextResponse.json({
        success: true,
        message: 'Pro users have unlimited access'
      });
    }

    // Check current unlock count
    const { data: currentUnlocks, error: countError } = await supabase
      .from('templata_user_template_unlocks')
      .select('template_id')
      .eq('user_id', userId);

    if (countError) {
      console.error('[API /user/unlocks] Error checking unlocks:', countError);
      throw countError;
    }

    // Enforce 3 template limit for free tier
    if (currentUnlocks && currentUnlocks.length >= 3) {
      return NextResponse.json(
        {
          error: 'Free tier users can only unlock 3 templates',
          requiresUpgrade: true
        },
        { status: 403 }
      );
    }

    // Check if already unlocked
    const alreadyUnlocked = currentUnlocks?.some(u => u.template_id === templateId);
    if (alreadyUnlocked) {
      return NextResponse.json({
        success: true,
        message: 'Template already unlocked'
      });
    }

    // Insert the unlock
    const { error: insertError } = await supabase
      .from('templata_user_template_unlocks')
      .insert({
        user_id: userId,
        template_id: templateId
      });

    if (insertError) {
      console.error('[API /user/unlocks] Error inserting unlock:', insertError);
      throw insertError;
    }

    return NextResponse.json({
      success: true,
      message: 'Template unlocked successfully',
      remainingUnlocks: 2 - (currentUnlocks?.length || 0)
    });
  } catch (error) {
    console.error('[API /user/unlocks] Fatal error:', error);
    return NextResponse.json(
      { error: 'Failed to unlock template' },
      { status: 500 }
    );
  }
}
