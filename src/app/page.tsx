'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LoginDialog } from '@/components/login-dialog';
import { useAuth } from '@/contexts/auth-context';

export default function HomePage() {
  const [loginOpen, setLoginOpen] = useState(false);
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  function handleCTA() {
    if (isLoggedIn) {
      router.push('/app');
    } else {
      setLoginOpen(true);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold tracking-tight mb-4">Templata</h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        AI-generated playbooks for life's biggest moments. Tailored to you, not a generic template.
      </p>
      <Button size="lg" onClick={handleCTA} disabled={loading}>
        Get Started
      </Button>
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
}
