'use client';

import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Loader2, AlertCircle } from 'lucide-react';
import { PlaybookIcon } from '@/components/ui/playbook-icon';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function GoogleMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.57-5.16 3.57-8.81z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.93-2.91l-3.87-3c-1.07.72-2.45 1.15-4.06 1.15-3.13 0-5.78-2.11-6.73-4.96H1.29v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28v-3.1H1.29a12 12 0 0 0 0 10.76l3.98-3.1z" />
      <path fill="#EA4335" d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.43-3.44A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.29 6.62l3.98 3.1C6.22 6.88 8.87 4.77 12 4.77z" />
    </svg>
  );
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  async function handleGoogle() {
    if (loading) return;
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
    // on success the browser navigates to Google
  }

  function handleClose(val: boolean) {
    onOpenChange(val);
    if (!val) setTimeout(() => setError(''), 300);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-sm p-8 gap-0">
        <DialogTitle className="sr-only">Sign in to Playbooks</DialogTitle>
        <div>
          <div className="flex justify-center mb-6">
            <PlaybookIcon size={28} className="text-primary" />
          </div>
          <h2 className="font-semibold text-xl tracking-tight text-center mb-1">Welcome to Playbooks</h2>
          <p className="text-sm text-muted-foreground text-center mb-8">Sign in or create an account in one tap.</p>
          <Button onClick={handleGoogle} className="w-full gap-2.5" disabled={loading}>
            {loading ? (
              <><Loader2 className="w-4 h-4 animate-spin" />Redirecting...</>
            ) : (
              <>
                <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                  <GoogleMark />
                </span>
                Continue with Google
              </>
            )}
          </Button>
          {error && (
            <p className="text-xs text-destructive flex items-center gap-1.5 mt-3">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {error}
            </p>
          )}
          <p className="text-xs text-muted-foreground text-center mt-6">No passwords, no magic links.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
