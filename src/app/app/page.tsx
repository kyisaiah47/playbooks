'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2, ArrowRight, Trash2, BookOpen } from 'lucide-react';
import { AppNav } from '@/components/app-nav';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import type { Playbook } from '@/types/playbook';

const EXAMPLES = [
  'Planning a wedding in NYC next October, ~80 guests, $50k budget',
  'Switching careers from finance to software engineering',
  'Buying my first home in Austin, budget around $400k',
  'Starting a small bakery business from home',
  'Moving to a new city alone for a job',
];

export default function AppPage() {
  const router = useRouter();
  const [playbooks, setPlaybooks] = useState<Playbook[]>([]);
  const [context, setContext] = useState('');
  const [generating, setGenerating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchPlaybooks();
  }, []);

  async function fetchPlaybooks() {
    try {
      const res = await fetch('/api/playbooks');
      if (res.ok) {
        const data = await res.json();
        setPlaybooks(data.playbooks ?? []);
      }
    } finally {
      setLoading(false);
    }
  }

  async function generate() {
    if (!context.trim() || generating) return;
    setGenerating(true);
    setError('');

    try {
      const res = await fetch('/api/playbooks/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong.');
        return;
      }

      router.push(`/app/${data.playbook.id}`);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setGenerating(false);
    }
  }

  async function deletePlaybook(id: string) {
    await fetch(`/api/playbooks/${id}`, { method: 'DELETE' });
    setPlaybooks((prev) => prev.filter((p) => p.id !== id));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      generate();
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div aria-hidden className="pointer-events-none fixed inset-0" style={{ backgroundImage: 'url(https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid-1.svg)', backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 75%)', maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 75%)', opacity: 0.45 }} />
      <div aria-hidden className="pointer-events-none fixed inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(245, 235, 220, 0.4) 0%, transparent 70%)' }} />
      <AppNav showCommunity showUserMenu />

      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-16 pb-24">

        {/* Hero input */}
        <div className="mb-16">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-1">
            What are you planning?
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            Describe your situation and Claude will build a personalized playbook for you.
          </p>

          <div className="relative">
            <Textarea
              placeholder="e.g. I'm planning a wedding in NYC next October, budget around $50k, about 80 guests. We want something intimate but elegant."
              value={context}
              onChange={(e) => setContext(e.target.value)}
              onKeyDown={handleKeyDown}
              className="min-h-[140px] resize-none text-sm pr-4 pb-12 bg-card border-border rounded-xl shadow-sm focus:ring-1 focus:ring-stone-400"
              disabled={generating}
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              {context.trim() && (
                <span className="text-xs text-muted-foreground">⌘↵</span>
              )}
              <Button
                size="sm"
                onClick={generate}
                disabled={!context.trim() || generating}
                className="rounded-lg"
              >
                {generating ? (
                  <><Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />Generating...</>
                ) : (
                  <><Sparkles className="w-3.5 h-3.5 mr-1.5" />Generate</>
                )}
              </Button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-destructive mt-2">{error}</p>
          )}

          {/* Example chips */}
          {!context && (
            <div className="flex flex-wrap gap-2 mt-4">
              {EXAMPLES.map((ex) => (
                <button
                  key={ex}
                  onClick={() => setContext(ex)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-stone-400 transition-colors"
                >
                  {ex}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Playbooks */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Your Playbooks
            </h2>
            {!loading && playbooks.length > 0 && (
              <span className="text-xs text-muted-foreground">{playbooks.length}</span>
            )}
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
            </div>
          ) : playbooks.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-border rounded-xl">
              <BookOpen className="w-8 h-8 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Your playbooks will appear here.</p>
            </div>
          ) : (
            <AnimatePresence>
              <div className="divide-y divide-border border border-border rounded-xl overflow-hidden bg-card">
                {playbooks.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center justify-between px-4 py-3.5 group hover:bg-accent/50 transition-colors cursor-pointer"
                    onClick={() => router.push(`/app/${p.id}`)}
                  >
                    <div className="flex-1 min-w-0 mr-3">
                      <p className="text-sm font-medium truncate">{p.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {new Date(p.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        className="p-1.5 rounded-md opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteId(p.id);
                        }}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          )}
        </div>
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={(o) => !o && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this playbook?</AlertDialogTitle>
            <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-white hover:bg-destructive/90"
              onClick={() => { if (deleteId) deletePlaybook(deleteId); setDeleteId(null); }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
