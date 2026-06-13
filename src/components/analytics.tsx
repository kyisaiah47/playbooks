'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/next';

// Using Vercel Analytics for automatic page view tracking
// This automatically tracks page views and custom events in production
export function Analytics() {
  return <VercelAnalytics />;
}
