'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4 text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-red-100">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h1>

          <p className="text-gray-600 mb-6">
            We encountered an unexpected error. Don't worry - we've been notified and are working on a fix.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <details className="mb-6 p-4 bg-red-50 rounded-lg text-left">
              <summary className="cursor-pointer text-sm font-medium text-red-800 mb-2">
                Error Details (Development Only)
              </summary>
              <code className="text-xs text-red-700 break-all">
                {error.message}
              </code>
            </details>
          )}

          <div className="space-y-3">
            <Button
              onClick={reset}
              className="w-full"
              variant="default"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>

            <Link href="/" className="block">
              <Button variant="outline" className="w-full">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}