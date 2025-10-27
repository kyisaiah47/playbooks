#!/usr/bin/env node
/**
 * Nightly Moderation Sweep
 * Run this script nightly to flag potentially problematic comments
 * Usage: npx tsx generation-scripts/moderation-sweep.ts
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Simple toxicity/spam patterns
const SPAM_PATTERNS = [
  /https?:\/\/.*https?:\/\//i, // Multiple URLs
  /\b(buy|cheap|discount|viagra|casino|poker)\b/i, // Spam keywords
  /(.)\1{10,}/, // Repeated characters
];

const TOXICITY_PATTERNS = [
  /\b(fuck|shit|damn|asshole|bitch)\b/i, // Basic profanity
  // Add more patterns as needed
];

async function moderateComments() {
  console.log('Starting moderation sweep...');

  // Fetch recent comments (last 24 hours)
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const { data: comments, error } = await supabase
    .from('guide_comments')
    .select('*')
    .gte('created_at', yesterday.toISOString())
    .eq('is_flagged', false);

  if (error) {
    console.error('Error fetching comments:', error);
    return;
  }

  console.log(`Checking ${comments?.length || 0} comments...`);

  let flaggedCount = 0;

  for (const comment of comments || []) {
    const reasons: string[] = [];

    // Check length
    if (comment.body.length < 10) {
      reasons.push('too short');
    }

    // Check for multiple URLs
    const urlMatches = comment.body.match(/https?:\/\//g);
    if (urlMatches && urlMatches.length > 2) {
      reasons.push('multiple URLs');
    }

    // Check spam patterns
    for (const pattern of SPAM_PATTERNS) {
      if (pattern.test(comment.body)) {
        reasons.push('spam pattern');
        break;
      }
    }

    // Check toxicity patterns
    for (const pattern of TOXICITY_PATTERNS) {
      if (pattern.test(comment.body)) {
        reasons.push('toxicity');
        break;
      }
    }

    // Flag if any issues found
    if (reasons.length > 0) {
      console.log(`Flagging comment ${comment.id}: ${reasons.join(', ')}`);

      const { error: updateError } = await supabase
        .from('guide_comments')
        .update({ is_flagged: true })
        .eq('id', comment.id);

      if (updateError) {
        console.error(`Error flagging comment ${comment.id}:`, updateError);
      } else {
        flaggedCount++;
      }
    }
  }

  console.log(`Moderation complete. Flagged ${flaggedCount} comments.`);
}

// Also check previously flagged comments
async function checkFlaggedComments() {
  const { data: flagged, error } = await supabase
    .from('guide_comments')
    .select('*')
    .eq('is_flagged', true)
    .limit(50);

  if (error) {
    console.error('Error fetching flagged comments:', error);
    return;
  }

  console.log(`Currently ${flagged?.length || 0} flagged comments need review.`);

  // You could send an email notification here
}

// Run both
(async () => {
  await moderateComments();
  await checkFlaggedComments();
  process.exit(0);
})();
