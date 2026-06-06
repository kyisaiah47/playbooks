'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      <p className="text-6xl font-bold tracking-tight">404</p>
      <p className="text-muted-foreground">This page doesn't exist.</p>
      <div className="flex items-center gap-6 text-sm text-muted-foreground mt-4">
        <Link href="/" className="flex items-center gap-2 hover:text-foreground transition-colors">
          <Home className="h-4 w-4" />
          Go home
        </Link>
        <button onClick={() => window.history.back()} className="flex items-center gap-2 hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Go back
        </button>
      </div>
    </div>
  );
}
