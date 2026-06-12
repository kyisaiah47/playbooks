'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowUp, Trash2, AlertCircle } from 'lucide-react';
import { TemplataIcon } from '@/components/ui/templata-icon';
import { Shell, NavRail, PlaybookAvatar, TrendingBox, RailFooter, timeAgo, type FeedPlaybook } from '@/components/shell';
import { toast } from 'sonner';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import type { Playbook } from '@/types/playbook';

const EXAMPLES = [
  'Wedding in NYC, ~80 guests, $50k',
  'Finance → software engineering',
  'First home in Austin, $400k',
  'Starting a home bakery',
];

const GENERATING_STAGES = [
  'Reading your situation…',
  'Breaking it into phases…',
  'Writing tasks you can actually check off…',
  'Adding questions worth thinking about…',
  'Finding resources for your context…',
  'Putting it all together…',
];

function GeneratingOverlay() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStage(s => Math.min(s + 1, GENERATING_STAGES.length - 1)), 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm">
      <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
        <TemplataIcon size={36} className="text-primary" />
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.p
          key={stage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-6 text-sm font-medium text-foreground"
        >
          {GENERATING_STAGES[stage]}
        </motion.p>
      </AnimatePresence>
      <p className="mt-2 text-xs text-muted-foreground">Claude is building your playbook — about 20 seconds</p>
    </div>
  );
}

export default function AppPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const forkFrom = searchParams.get('fork');
  const [playbooks, setPlaybooks] = useState<Playbook[]>([]);
  const [community, setCommunity] = useState<FeedPlaybook[]>([]);
  const [context, setContext] = useState('');
  const [generating, setGenerating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const composerRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    fetchPlaybooks();
    fetch('/api/community?sort=popular')
      .then(res => (res.ok ? res.json() : { playbooks: [] }))
      .then(data => setCommunity(data.playbooks ?? []))
      .catch(() => {});
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
        body: JSON.stringify({ context, fork_from: forkFrom }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong.');
        return;
      }

      if (forkFrom) toast.success('Playbook forked and tailored to you!');
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
    <>
      <AnimatePresence>{generating && <GeneratingOverlay />}</AnimatePresence>

      <Shell
        left={<NavRail onNewPlaybook={() => composerRef.current?.focus()} />}
        right={
          <>
            <TrendingBox playbooks={community} />
            <RailFooter />
          </>
        }
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-20 px-4 py-3.5 border-b border-border bg-background/90 backdrop-blur-md">
          <h1 className="text-sm font-bold">Home</h1>
        </div>

        {/* Composer */}
        <div className="px-4 py-4 border-b border-border">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
              <TemplataIcon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <textarea
                ref={composerRef}
                placeholder={forkFrom ? 'Describe your situation — Claude will re-tailor this playbook to you…' : 'What are you planning?'}
                value={context}
                onChange={(e) => setContext(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={generating}
                rows={context ? 4 : 2}
                className="w-full resize-none bg-transparent text-[15px] leading-relaxed placeholder:text-muted-foreground outline-none pt-1.5"
              />
              {!context && (
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {EXAMPLES.map((ex) => (
                    <button
                      key={ex}
                      onClick={() => { setContext(ex); composerRef.current?.focus(); }}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-input transition-colors"
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-between border-t border-border pt-2.5">
                <span className="text-xs text-muted-foreground">{context.trim() ? '⌘↵ to generate' : 'One sentence is enough'}</span>
                <Button
                  size="sm"
                  onClick={generate}
                  disabled={!context.trim() || generating}
                  className="gap-1.5"
                >
                  {generating
                    ? <><Loader2 className="w-3.5 h-3.5 animate-spin" />Generating</>
                    : <>Generate<ArrowUp className="w-3.5 h-3.5" /></>}
                </Button>
              </div>
              {error && (
                <p className="text-sm text-destructive mt-2 flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{error}</p>
              )}
            </div>
          </div>
        </div>

        {/* Playbook feed */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
          </div>
        ) : playbooks.length === 0 ? (
          <div className="text-center py-20 px-6">
            <p className="text-sm text-muted-foreground">No playbooks yet. Describe what you&apos;re planning above — Claude does the rest.</p>
          </div>
        ) : (
          <div>
            {playbooks.map((p, i) => {
              const tasks = (p.items ?? []).filter(it => it.type === 'task');
              const done = tasks.filter(it => it.completed).length;
              const pct = tasks.length > 0 ? Math.round((done / tasks.length) * 100) : 0;
              return (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex gap-3 px-4 py-3.5 border-b border-border hover:bg-accent/60 transition-colors cursor-pointer group"
                  onClick={() => router.push(`/app/${p.id}`)}
                >
                  <PlaybookAvatar title={p.title} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-[15px] font-semibold leading-snug truncate">{p.title}</p>
                      <span className="text-sm text-muted-foreground shrink-0">· {timeAgo(p.created_at)}</span>
                      <button
                        className="ml-auto p-1.5 rounded-full opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all shrink-0"
                        onClick={(e) => { e.stopPropagation(); setDeleteId(p.id); }}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {p.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed mt-0.5 line-clamp-2">{p.description}</p>
                    )}
                    <div className="flex items-center gap-3 mt-2.5">
                      <div className="h-1.5 w-28 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {tasks.length > 0 ? `${done}/${tasks.length} tasks` : 'No tasks'}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </Shell>

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
    </>
  );
}
