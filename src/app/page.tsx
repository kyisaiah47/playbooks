'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LoginDialog } from '@/components/login-dialog';
import { useAuth } from '@/contexts/auth-context';
import { ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';


export default function HomePage() {
  const [loginOpen, setLoginOpen] = useState(false);
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  function handleCTA() {
    if (isLoggedIn) router.push('/app');
    else setLoginOpen(true);
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 h-14 border-b border-border">
        <Image src="/logo.png" alt="Templata" width={22} height={26} className="invert" />
        <Button size="sm" variant="outline" asChild>
          <a href="/community">Community</a>
        </Button>
      </nav>

      {/* Marquee banner */}
      <div className="border-b border-border bg-secondary/40 overflow-hidden py-2.5">
        <div className="flex whitespace-nowrap animate-marquee-banner">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {[
                { icon: <Sparkles className="w-3 h-3" />, text: 'Powered by Claude' },
                { icon: <HelpCircle className="w-3 h-3" />, text: 'AI insight on every answer' },
                { icon: <Sparkles className="w-3 h-3" />, text: 'Generated in seconds' },
                { icon: <HelpCircle className="w-3 h-3" />, text: 'Wedding, career, home buying & more' },
                { icon: <Sparkles className="w-3 h-3" />, text: 'Free to use' },
                { icon: <HelpCircle className="w-3 h-3" />, text: 'Share & fork community playbooks' },
                { icon: <Sparkles className="w-3 h-3" />, text: 'Tailored to your budget & location' },
                { icon: <HelpCircle className="w-3 h-3" />, text: 'Not a generic template' },
              ].map((item, j) => (
                <span key={j} className="inline-flex items-center gap-2 text-xs text-muted-foreground px-6">
                  {item.icon}
                  {item.text}
                  <span className="ml-6 text-border">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* One continuous page */}
      <div className="relative overflow-hidden">
        {/* Grid background — runs the full page */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0"
          style={{
            backgroundImage: 'url(https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid-1.svg)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 75%)',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 75%)',
            opacity: 0.45,
          }}
        />

        <div className="relative z-10">
          {/* Hero */}
          <div className="flex flex-col items-center text-center px-4 pt-16 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-5"
            >
              <h1 className="max-w-2xl text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05] bg-gradient-to-r from-stone-900 via-stone-700 to-stone-800 bg-clip-text text-transparent py-1">
                The playbook for whatever's next
              </h1>

              <p className="max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
                Describe what you're planning. Get a personalized, AI-generated playbook in seconds — not a generic template.
              </p>

              <div className="flex flex-col items-center gap-2 pt-2">
                <Button size="lg" onClick={handleCTA} disabled={loading} className="gap-2">
                  Build my playbook
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-xs text-muted-foreground">Free to use. No credit card required.</p>
              </div>
            </motion.div>
          </div>

          {/* Playbook mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto px-4 pb-20"
          >
            <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-300" />
                  <div className="w-3 h-3 rounded-full bg-yellow-300" />
                  <div className="w-3 h-3 rounded-full bg-green-300" />
                </div>
                <span className="text-xs text-muted-foreground">Wedding in NYC — October, 80 guests</span>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-16 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-stone-400 rounded-full" />
                  </div>
                  <span className="text-xs text-muted-foreground">33%</span>
                </div>
              </div>
              <div className="px-6 py-5 text-left space-y-8">

                {/* Phase 1 */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 pb-2 border-b border-border">Before You Start</p>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded border-2 border-stone-300 mt-0.5 shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-sm bg-stone-800" />
                      </div>
                      <span className="text-sm text-muted-foreground line-through">Lock in venue (12–18 months out in NYC)</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded border-2 border-stone-300 mt-0.5 shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-sm bg-stone-800" />
                      </div>
                      <span className="text-sm text-muted-foreground line-through">Set your non-negotiables before talking to vendors</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <HelpCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <span className="text-sm">What does intimate but elegant mean to you visually?</span>
                        <div className="mt-1.5">
                          <p className="text-xs text-muted-foreground italic">"Candlelit loft spaces, private dining rooms..."</p>
                          <div className="mt-1.5 pl-3 border-l-2 border-stone-200">
                            <div className="flex items-center gap-1 text-xs text-stone-500 mb-1">
                              <Sparkles className="w-3 h-3" />
                              AI insight
                            </div>
                            <p className="text-xs text-stone-500 leading-relaxed">With that vibe, prioritize restaurant private dining rooms and loft venues in SoHo or West Village — they'll come in under $8k for the space...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 pb-2 border-b border-border">Budget & Vendors</p>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded border-2 border-stone-300 mt-0.5 shrink-0" />
                      <span className="text-sm">Allocate your $50k across: venue, catering, photography, florals, music, attire</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded border-2 border-stone-300 mt-0.5 shrink-0" />
                      <span className="text-sm">Get 3 quotes per vendor category before committing</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <HelpCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">Which category are you willing to splurge on, and where will you cut?</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-sm shrink-0 mt-0.5">📍</span>
                      <div>
                        <span className="text-sm">Ravel Events — West Village loft, seats 80, all-inclusive</span>
                        <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-stone-100 text-stone-500">venue</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-sm shrink-0 mt-0.5">📍</span>
                      <div>
                        <span className="text-sm">501 Union — Brooklyn, exposed brick, garden courtyard</span>
                        <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-stone-100 text-stone-500">venue</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 pb-2 border-b border-border">6 Months Out</p>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded border-2 border-stone-300 mt-0.5 shrink-0" />
                      <span className="text-sm">Book photographer — NYC photographers fill fast, especially October</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded border-2 border-stone-300 mt-0.5 shrink-0" />
                      <span className="text-sm">Send save-the-dates, include hotel block info for out-of-town guests</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <HelpCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">How many guests are traveling from out of town? This changes your hotel block strategy.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>


          {/* Footer */}
          <div className="border-t border-border px-6 py-6 flex items-center justify-between text-xs text-muted-foreground">
            <Image src="/logo.png" alt="Templata" width={16} height={20} className="invert opacity-40" />
            <span>© {new Date().getFullYear()} Templata</span>
          </div>
        </div>
      </div>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
}
