'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { LoginDialog } from '@/components/login-dialog';
import { useAuth } from '@/contexts/auth-context';
import Image from 'next/image';

const FREE_FEATURES = [
  '1 playbook per month',
  '5 AI insights per month',
  'Full community access',
  'Fork community playbooks',
];

const PRO_FEATURES = [
  '10 playbooks per month',
  '50 AI insights per month',
  'Full community access',
  'Fork community playbooks',
  'Priority support',
];

export default function PricingPage() {
  const router = useRouter();
  const { isLoggedIn, loading } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  async function handleUpgrade() {
    if (!isLoggedIn) { setLoginOpen(true); return; }
    setCheckoutLoading(true);
    const res = await fetch('/api/stripe/checkout', { method: 'POST' });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    setCheckoutLoading(false);
  }

  return (
    <div className="min-h-screen bg-background">
      <div aria-hidden className="pointer-events-none fixed inset-0" style={{ backgroundImage: 'url(https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid-1.svg)', backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 75%)', maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 75%)', opacity: 0.45 }} />
      <div aria-hidden className="pointer-events-none fixed inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(245, 235, 220, 0.4) 0%, transparent 70%)' }} />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 h-14 border-b border-border bg-background/80 backdrop-blur-sm">
        <button onClick={() => router.push('/')}>
          <Image src="/logo.png" alt="Templata" width={22} height={26} className="invert" />
        </button>
        <Button variant="outline" size="sm" onClick={() => router.push('/app')}>
          {isLoggedIn ? 'My Playbooks' : 'Get Started'}
        </Button>
      </nav>

      <div className="relative z-10 max-w-3xl mx-auto px-4 pt-16 pb-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-4xl font-semibold tracking-tighter bg-gradient-to-r from-stone-900 via-stone-700 to-stone-800 bg-clip-text text-transparent mb-3">
            Simple pricing
          </h1>
          <p className="text-muted-foreground text-sm">Start free. Upgrade when you need more.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="border border-border rounded-xl p-6 bg-card/80 backdrop-blur-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Free</p>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-semibold tracking-tight">$0</span>
              <span className="text-muted-foreground text-sm mb-1">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {FREE_FEATURES.map(f => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 shrink-0 text-foreground" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full" onClick={() => router.push('/app')} disabled={loading}>
              Get started free
            </Button>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="border border-foreground rounded-xl p-6 bg-foreground text-background"
          >
            <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-4">Pro</p>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-semibold tracking-tight">$9</span>
              <span className="opacity-60 text-sm mb-1">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {PRO_FEATURES.map(f => (
                <li key={f} className="flex items-center gap-2.5 text-sm opacity-80">
                  <Check className="w-4 h-4 shrink-0 opacity-100" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              className="w-full bg-background text-foreground hover:bg-background/90"
              onClick={handleUpgrade}
              disabled={checkoutLoading || loading}
            >
              {checkoutLoading ? 'Loading...' : 'Upgrade to Pro'}
            </Button>
          </motion.div>
        </div>
      </div>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
}
