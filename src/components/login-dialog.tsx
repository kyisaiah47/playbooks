'use client';

import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { PlaybookIcon } from '@/components/ui/playbook-icon';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || loading) return;
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });

    if (error) { setError(error.message); setLoading(false); return; }
    setSent(true);
    setLoading(false);
  }

  function handleClose(val: boolean) {
    onOpenChange(val);
    if (!val) setTimeout(() => { setEmail(''); setSent(false); setError(''); }, 300);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-sm p-8 gap-0">
        <DialogTitle className="sr-only">Sign in to Playbook</DialogTitle>
        {sent ? (
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center mx-auto mb-4">
              <PlaybookIcon size={20} />
            </div>
            <h2 className="font-semibold text-lg tracking-tight mb-2">Check your email</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We sent a magic link to <span className="text-foreground font-medium">{email}</span>. Click it to sign in.
            </p>
            <button className="text-xs text-muted-foreground hover:text-foreground mt-6 underline underline-offset-2 transition-colors" onClick={() => setSent(false)}>
              Use a different email
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-center mb-6">
              <PlaybookIcon size={28} className="text-primary" />
            </div>
            <h2 className="font-semibold text-xl tracking-tight text-center mb-1">Welcome to Playbook</h2>
            <p className="text-sm text-muted-foreground text-center mb-8">Enter your email to sign in or create an account.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus required disabled={loading} className="bg-background" />
              {error && (
                <p className="text-xs text-destructive flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {error}
                </p>
              )}
              <Button type="submit" className="w-full gap-2" disabled={!email.trim() || loading}>
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" />Sending...</> : <>Continue <ArrowRight className="w-4 h-4" /></>}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-6">We'll send you a magic link. No password required.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
