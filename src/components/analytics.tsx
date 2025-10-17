'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Simple analytics utility
// Replace with your preferred analytics service (Google Analytics, Plausible, etc.)
export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

    // Example: Google Analytics pageview
    if (window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
        page_path: url,
      });
    }

    // Example: Simple custom analytics
    // You can replace this with your preferred analytics service
    console.log('[Analytics] Page view:', url);

    // Track page view to your backend
    if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true') {
      fetch('/api/analytics/pageview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url,
          referrer: document.referrer,
          timestamp: new Date().toISOString(),
        }),
      }).catch((err) => console.error('Analytics error:', err));
    }
  }, [pathname, searchParams]);

  return null;
}

// Type declarations for window.gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
