'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Plus, ArrowRight, Loader2, BookOpen, Trash2 } from 'lucide-react';
import type { Playbook } from '@/types/playbook';

export default function AppPage() {
  const router = useRouter();
  const [playbooks, setPlaybooks] = useState<Playbook[]>([]);
  const [context, setContext] = useState('');
  const [generating, setGenerating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

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

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Your Playbooks</h1>
          <p className="text-muted-foreground">AI-generated plans for life's biggest moments.</p>
        </div>

        {/* Generate form */}
        <AnimatePresence>
          {showForm ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-8"
            >
              <Card className="p-5 border-primary/20">
                <p className="text-sm font-medium mb-3">Describe what you're planning</p>
                <Textarea
                  placeholder="e.g. I'm planning a wedding in NYC next October, budget around $50k, about 80 guests. My partner and I want something intimate but elegant."
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  className="min-h-[120px] resize-none mb-3 text-sm"
                  disabled={generating}
                />
                {error && <p className="text-sm text-destructive mb-3">{error}</p>}
                <div className="flex gap-2 justify-end">
                  <Button variant="ghost" size="sm" onClick={() => { setShowForm(false); setError(''); }} disabled={generating}>
                    Cancel
                  </Button>
                  <Button size="sm" onClick={generate} disabled={!context.trim() || generating}>
                    {generating ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Playbook
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
              <Button onClick={() => setShowForm(true)} className="gap-2">
                <Plus className="w-4 h-4" />
                New Playbook
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Playbook list */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
          </div>
        ) : playbooks.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">No playbooks yet. Create your first one above.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {playbooks.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card
                  className="p-4 hover:border-primary/30 transition-colors group cursor-pointer"
                  onClick={() => router.push(`/app/${p.id}`)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{p.title}</p>
                      {p.description && (
                        <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">{p.description}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(p.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {p.is_public && <Badge variant="secondary" className="text-xs">Public</Badge>}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                        onClick={(e) => { e.stopPropagation(); deletePlaybook(p.id); }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
