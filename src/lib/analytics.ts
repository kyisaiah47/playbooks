/**
 * Analytics tracking utility
 * Wraps Vercel Analytics and custom event tracking
 */

import { track } from '@vercel/analytics';

type AnalyticsEvent =
  | { name: 'guide_opened'; properties: { slug: string } }
  | { name: 'question_answered'; properties: { slug: string; question_id: string } }
  | { name: 'discussion_posted'; properties: { slug: string } }
  | { name: 'request_submitted'; properties: { category?: string } }
  | { name: 'export_pdf'; properties: { type: 'responses' | 'reflections' } };

/**
 * Track an analytics event
 * No-op in development to avoid polluting analytics data
 */
export function trackEvent(event: AnalyticsEvent) {
  // Skip in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event.name, event.properties);
    return;
  }

  try {
    track(event.name, event.properties);
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}

// Convenience functions
export const analytics = {
  guideOpened: (slug: string) => trackEvent({ name: 'guide_opened', properties: { slug } }),

  questionAnswered: (slug: string, questionId: string) =>
    trackEvent({ name: 'question_answered', properties: { slug, question_id: questionId } }),

  discussionPosted: (slug: string) =>
    trackEvent({ name: 'discussion_posted', properties: { slug } }),

  requestSubmitted: (category?: string) =>
    trackEvent({ name: 'request_submitted', properties: { category } }),

  exportPdf: (type: 'responses' | 'reflections') =>
    trackEvent({ name: 'export_pdf', properties: { type } }),
};
