'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, HelpCircle, ExternalLink, ChevronDown, ChevronUp, MapPin, BookOpen, User, Video, Wrench, Globe, Link, CheckCircle2, ArrowLeft } from 'lucide-react';
import { TemplataIcon } from '@/components/ui/templata-icon';
import { Shell, NavRail, RailFooter } from '@/components/shell';
import type { Playbook, PlaybookItem } from '@/types/playbook';

const RESOURCE_ICONS: Record<string, React.ReactNode> = {
  venue: <MapPin className="w-4 h-4 text-muted-foreground" />,
  book: <BookOpen className="w-4 h-4 text-muted-foreground" />,
  person: <User className="w-4 h-4 text-muted-foreground" />,
  video: <Video className="w-4 h-4 text-muted-foreground" />,
  tool: <Wrench className="w-4 h-4 text-muted-foreground" />,
  website: <Globe className="w-4 h-4 text-muted-foreground" />,
};

export default function PlaybookPage({ params }: { params: Promise<{ playbookId: string }> }) {
  const { playbookId } = use(params);
  const router = useRouter();

  const [playbook, setPlaybook] = useState<Playbook | null>(null);
  const [items, setItems] = useState<PlaybookItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [draftAnswers, setDraftAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState<string | null>(null);
  const [expandedFeedback, setExpandedFeedback] = useState<Record<string, boolean>>({});

  useEffect(() => { fetchPlaybook(); }, [playbookId]);

  async function fetchPlaybook() {
    const res = await fetch(`/api/playbooks/${playbookId}`);
    if (!res.ok) { router.push('/app'); return; }
    const data = await res.json();
    setPlaybook(data.playbook);
    setItems(data.playbook.items ?? []);
    setLoading(false);
  }

  async function toggleTask(item: PlaybookItem) {
    const updated = !item.completed;
    setItems(prev => prev.map(i => i.id === item.id ? { ...i, completed: updated } : i));
    await fetch(`/api/playbooks/${playbookId}/items/${item.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: updated }),
    });
  }

  async function submitAnswer(item: PlaybookItem) {
    const answer = draftAnswers[item.id]?.trim();
    if (!answer || submitting) return;
    setSubmitting(item.id);
    try {
      const res = await fetch(`/api/playbooks/${playbookId}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: item.id, answer }),
      });
      const data = await res.json();
      if (res.ok) {
        setItems(prev => prev.map(i => i.id === item.id ? { ...i, answer, ai_feedback: data.feedback } : i));
        setExpandedFeedback(prev => ({ ...prev, [item.id]: true }));
        setActiveItemId(null);
      }
    } finally {
      setSubmitting(null);
    }
  }

  const phases = items.reduce<Record<string, PlaybookItem[]>>((acc, item) => {
    const phase = item.phase ?? 'General';
    if (!acc[phase]) acc[phase] = [];
    acc[phase].push(item);
    return acc;
  }, {});

  const allTasks = items.filter(i => i.type === 'task');
  const doneTasks = allTasks.filter(i => i.completed).length;
  const progress = allTasks.length > 0 ? Math.round((doneTasks / allTasks.length) * 100) : 0;

  const phaseId = (phase: string) => `phase-${phase.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
    </div>
  );

  if (!playbook) return null;

  return (
    <Shell
      left={<NavRail />}
      right={
        <>
          <div className="rounded-2xl border border-border bg-popover/60 p-4">
            <p className="text-sm font-bold mb-1">Progress</p>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-1.5 flex-1 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              <span className="text-xs font-medium text-muted-foreground tabular-nums">{progress}%</span>
            </div>
            <div className="space-y-0.5">
              {Object.entries(phases).map(([phase, phaseItems]) => {
                const pTasks = phaseItems.filter(i => i.type === 'task');
                const pDone = pTasks.filter(i => i.completed).length;
                const complete = pTasks.length > 0 && pDone === pTasks.length;
                return (
                  <a
                    key={phase}
                    href={`#${phaseId(phase)}`}
                    className="flex items-center justify-between gap-2 px-2 py-1.5 -mx-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    <span className="truncate">{phase}</span>
                    {complete ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    ) : pTasks.length > 0 ? (
                      <span className="text-xs tabular-nums shrink-0">{pDone}/{pTasks.length}</span>
                    ) : null}
                  </a>
                );
              })}
            </div>
          </div>
          <RailFooter />
        </>
      }
    >
      {/* Sticky header */}
      <div className="sticky top-0 z-20 flex items-center gap-3 px-4 py-2.5 border-b border-border bg-background/90 backdrop-blur-md">
        <button onClick={() => router.push('/app')} className="p-2 -ml-2 rounded-full hover:bg-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-sm font-bold truncate">{playbook.title}</h1>
          <p className="text-xs text-muted-foreground tabular-nums">{doneTasks}/{allTasks.length} tasks · {progress}%</p>
        </div>
        <div className="h-1.5 w-24 bg-secondary rounded-full overflow-hidden shrink-0">
          <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="px-4 pt-6 pb-24">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-2">{playbook.title}</h1>
          {playbook.description && <p className="text-sm text-muted-foreground leading-relaxed">{playbook.description}</p>}
        </div>

        <div className="space-y-10">
          {Object.entries(phases).map(([phase, phaseItems]) => (
            <div key={phase} id={phaseId(phase)} className="scroll-mt-20">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 pb-2 border-b border-border">{phase}</h2>
              <div className="space-y-1">
                {phaseItems.map(item => (
                  <ItemRow
                    key={item.id}
                    item={item}
                    playbookId={playbookId}
                    activeItemId={activeItemId}
                    setActiveItemId={setActiveItemId}
                    draftAnswers={draftAnswers}
                    setDraftAnswers={setDraftAnswers}
                    submitting={submitting}
                    expandedFeedback={expandedFeedback}
                    setExpandedFeedback={setExpandedFeedback}
                    onToggleTask={toggleTask}
                    onSubmitAnswer={submitAnswer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function ItemRow({ item, activeItemId, setActiveItemId, draftAnswers, setDraftAnswers, submitting, expandedFeedback, setExpandedFeedback, onToggleTask, onSubmitAnswer }: {
  item: PlaybookItem; playbookId: string;
  activeItemId: string | null; setActiveItemId: (id: string | null) => void;
  draftAnswers: Record<string, string>; setDraftAnswers: (fn: (p: Record<string, string>) => Record<string, string>) => void;
  submitting: string | null;
  expandedFeedback: Record<string, boolean>; setExpandedFeedback: (fn: (p: Record<string, boolean>) => Record<string, boolean>) => void;
  onToggleTask: (item: PlaybookItem) => void; onSubmitAnswer: (item: PlaybookItem) => void;
}) {
  const isActive = activeItemId === item.id;
  const hasFeedback = !!item.ai_feedback;
  const feedbackExpanded = expandedFeedback[item.id];

  if (item.type === 'task') return (
    <div className="flex items-start gap-3 py-2">
      <Checkbox checked={item.completed} onCheckedChange={() => onToggleTask(item)} className="mt-0.5 shrink-0" />
      <span className={`text-sm leading-relaxed ${item.completed ? 'line-through text-muted-foreground' : ''}`}>{item.content}</span>
    </div>
  );

  if (item.type === 'resource') {
    const icon = RESOURCE_ICONS[item.resource_type ?? ''] ?? <Link className="w-4 h-4 text-muted-foreground" />;
    return (
      <div className="flex items-start gap-3 py-2">
        <span className="shrink-0 mt-0.5">{icon}</span>
        <div className="flex flex-col gap-1.5">
          {item.url
            ? <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline underline-offset-2 inline-flex items-start gap-1.5">{item.content}<ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" /></a>
            : <span className="text-sm">{item.content}</span>
          }
          {item.resource_type && <Badge variant="secondary" className="text-xs capitalize w-fit">{item.resource_type}</Badge>}
        </div>
      </div>
    );
  }

  return (
    <div className="py-3">
      <div className="flex items-start gap-3">
        <HelpCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-sm leading-relaxed">{item.content}</p>
          {item.answer && !isActive && (
            <div className="mt-2">
              <p className="text-sm text-muted-foreground italic">"{item.answer}"</p>
              <button className="text-xs text-muted-foreground hover:text-foreground mt-1 underline underline-offset-2"
                onClick={() => { setDraftAnswers(p => ({ ...p, [item.id]: item.answer! })); setActiveItemId(item.id); }}>
                Edit
              </button>
            </div>
          )}
          {hasFeedback && !isActive && (
            <div className="mt-2">
              <button className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                onClick={() => setExpandedFeedback(p => ({ ...p, [item.id]: !p[item.id] }))}>
                <TemplataIcon size={12} />
                AI insight
                {feedbackExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
              <AnimatePresence>
                {feedbackExpanded && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <div className="mt-2 pl-3 border-l-2 border-primary/30">
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.ai_feedback}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
          {isActive ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3">
              <Textarea autoFocus placeholder="Write your answer..." value={draftAnswers[item.id] ?? ''}
                onChange={e => setDraftAnswers(p => ({ ...p, [item.id]: e.target.value }))}
                className="min-h-[100px] resize-none text-sm mb-2 bg-card" disabled={submitting === item.id} />
              <div className="flex gap-2">
                <Button size="sm" onClick={() => onSubmitAnswer(item)} disabled={!draftAnswers[item.id]?.trim() || submitting === item.id}>
                  {submitting === item.id ? <><Loader2 className="w-3 h-3 mr-1.5 animate-spin" />Getting insight...</> : <><TemplataIcon size={12} className="mr-1.5" />Save & get insight</>}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setActiveItemId(null)} disabled={submitting === item.id}>Cancel</Button>
              </div>
            </motion.div>
          ) : !item.answer && (
            <button className="mt-1.5 text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors" onClick={() => setActiveItemId(item.id)}>
              + Answer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
