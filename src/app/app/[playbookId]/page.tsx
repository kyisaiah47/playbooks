'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, HelpCircle, ExternalLink, ChevronDown, ChevronUp, MapPin, BookOpen, User, Video, Wrench, Globe, Link, CheckCircle2, ArrowLeft, Pencil, Plus, Trash2 } from 'lucide-react';
import { PlaybookIcon } from '@/components/ui/playbook-icon';
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
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({});
  const [editingId, setEditingId] = useState<string | null>(null);

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

  async function saveEdit(item: PlaybookItem, content: string) {
    const trimmed = content.trim();
    if (!trimmed) return;
    setItems(prev => prev.map(i => i.id === item.id ? { ...i, content: trimmed } : i));
    setEditingId(null);
    await fetch(`/api/playbooks/${playbookId}/items/${item.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: trimmed }),
    });
  }

  async function deleteItem(item: PlaybookItem) {
    setItems(prev => prev.filter(i => i.id !== item.id));
    await fetch(`/api/playbooks/${playbookId}/items/${item.id}`, { method: 'DELETE' });
  }

  async function addItem(phase: string, type: 'task' | 'question', content: string) {
    const res = await fetch(`/api/playbooks/${playbookId}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, content, phase }),
    });
    const data = await res.json();
    if (res.ok) setItems(prev => [...prev, data.item]);
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
                    onClick={() => setExpandedPhases(prev => ({ ...prev, [phase]: true }))}
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

        <div className="space-y-3">
          {Object.entries(phases).map(([phase, phaseItems]) => {
            const pTasks = phaseItems.filter(i => i.type === 'task');
            const pDone = pTasks.filter(i => i.completed).length;
            const complete = pTasks.length > 0 && pDone === pTasks.length;
            const open = !!expandedPhases[phase];
            return (
              <div key={phase} id={phaseId(phase)} className="scroll-mt-20 rounded-2xl border border-border overflow-hidden">
                <button
                  onClick={() => setExpandedPhases(prev => ({ ...prev, [phase]: !prev[phase] }))}
                  className="flex items-center justify-between gap-3 w-full px-4 py-3.5 text-left hover:bg-accent/60 transition-colors"
                >
                  <span className="text-sm font-bold">{phase}</span>
                  <span className="flex items-center gap-3 shrink-0">
                    {complete ? (
                      <span className="flex items-center gap-1 text-xs text-green-400"><CheckCircle2 className="w-3.5 h-3.5" />Done</span>
                    ) : pTasks.length > 0 ? (
                      <span className="text-xs text-muted-foreground tabular-nums">{pDone}/{pTasks.length}</span>
                    ) : (
                      <span className="text-xs text-muted-foreground">{phaseItems.length} items</span>
                    )}
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 space-y-1 border-t border-border">
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
                            editingId={editingId}
                            setEditingId={setEditingId}
                            onSaveEdit={saveEdit}
                            onDeleteItem={deleteItem}
                          />
                        ))}
                        <AddItemRow phase={phase} onAdd={addItem} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <ReplanSection playbookId={playbookId} onReplanned={fetchPlaybook} />
      </div>
    </Shell>
  );
}

const REPLAN_STAGES = [
  'Re-reading your plan…',
  'Keeping what you’ve already done…',
  'Replanning the rest around the change…',
  'Putting it back together…',
];

function ReplanSection({ playbookId, onReplanned }: { playbookId: string; onReplanned: () => Promise<void> }) {
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState('');
  const [replanning, setReplanning] = useState(false);
  const [stage, setStage] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!replanning) return;
    setStage(0);
    const id = setInterval(() => setStage(s => Math.min(s + 1, REPLAN_STAGES.length - 1)), 4000);
    return () => clearInterval(id);
  }, [replanning]);

  async function replan() {
    if (!change.trim() || replanning) return;
    setReplanning(true);
    setError('');
    try {
      const res = await fetch(`/api/playbooks/${playbookId}/replan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ change: change.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong.');
        return;
      }
      await onReplanned();
      setChange('');
      setOpen(false);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setReplanning(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {replanning && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm">
            <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
              <PlaybookIcon size={36} className="text-amber-400" />
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
                {REPLAN_STAGES[stage]}
              </motion.p>
            </AnimatePresence>
            <p className="mt-2 text-xs text-muted-foreground">Completed tasks and answered questions stay put</p>
          </div>
        )}
      </AnimatePresence>

      <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">
        {!open ? (
          <button className="flex items-center gap-2.5 w-full text-left" onClick={() => setOpen(true)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/15 text-amber-400 shrink-0">
              <PlaybookIcon size={16} />
            </span>
            <span>
              <span className="block text-sm font-semibold">Something changed?</span>
              <span className="block text-xs text-muted-foreground">Replan with AI — keeps everything you&apos;ve already done.</span>
            </span>
          </button>
        ) : (
          <div className="space-y-2">
            <p className="text-sm font-semibold">What changed?</p>
            <Textarea
              autoFocus
              placeholder="e.g. Our venue fell through, or the budget dropped to $30k…"
              value={change}
              onChange={e => setChange(e.target.value)}
              className="min-h-[80px] resize-none text-sm bg-card"
              disabled={replanning}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <div className="flex gap-2">
              <Button size="sm" className="bg-amber-400 text-zinc-950 hover:bg-amber-300 gap-1.5" onClick={replan} disabled={!change.trim() || replanning}>
                <PlaybookIcon size={12} />
                Replan
              </Button>
              <Button size="sm" variant="ghost" onClick={() => { setOpen(false); setError(''); }} disabled={replanning}>Cancel</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function RowActions({ item, setEditingId, onDeleteItem }: {
  item: PlaybookItem;
  setEditingId: (id: string | null) => void;
  onDeleteItem: (item: PlaybookItem) => void;
}) {
  return (
    <span className="flex items-center gap-0.5 shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity">
      <button className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" onClick={() => setEditingId(item.id)}>
        <Pencil className="w-3.5 h-3.5" />
      </button>
      <button className="p-1.5 rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors" onClick={() => onDeleteItem(item)}>
        <Trash2 className="w-3.5 h-3.5" />
      </button>
    </span>
  );
}

function EditItemForm({ item, onSave, onCancel }: {
  item: PlaybookItem;
  onSave: (item: PlaybookItem, content: string) => void;
  onCancel: () => void;
}) {
  const [draft, setDraft] = useState(item.content);
  return (
    <div className="py-2">
      <Textarea autoFocus value={draft} onChange={e => setDraft(e.target.value)} className="min-h-[70px] resize-none text-sm mb-2 bg-card" />
      <div className="flex gap-2">
        <Button size="sm" onClick={() => onSave(item, draft)} disabled={!draft.trim()}>Save</Button>
        <Button size="sm" variant="ghost" onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  );
}

function AddItemRow({ phase, onAdd }: {
  phase: string;
  onAdd: (phase: string, type: 'task' | 'question', content: string) => Promise<void>;
}) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'task' | 'question'>('task');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);

  if (!open) return (
    <button
      className="flex items-center gap-2 py-2 text-xs text-muted-foreground hover:text-primary transition-colors"
      onClick={() => setOpen(true)}
    >
      <Plus className="w-3.5 h-3.5" />
      Add step
    </button>
  );

  return (
    <div className="py-2 space-y-2">
      <div className="flex gap-1.5">
        {(['task', 'question'] as const).map(t => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`text-xs px-3 py-1 rounded-full capitalize transition-colors ${type === t ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <Textarea
        autoFocus
        placeholder={type === 'task' ? 'What needs to get done?' : 'What should you think through?'}
        value={content}
        onChange={e => setContent(e.target.value)}
        className="min-h-[70px] resize-none text-sm bg-card"
        disabled={saving}
      />
      <div className="flex gap-2">
        <Button
          size="sm"
          disabled={!content.trim() || saving}
          onClick={async () => {
            setSaving(true);
            await onAdd(phase, type, content.trim());
            setSaving(false);
            setContent('');
            setOpen(false);
          }}
        >
          {saving ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Add'}
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setOpen(false)} disabled={saving}>Cancel</Button>
      </div>
    </div>
  );
}

function ItemRow({ item, activeItemId, setActiveItemId, draftAnswers, setDraftAnswers, submitting, expandedFeedback, setExpandedFeedback, onToggleTask, onSubmitAnswer, editingId, setEditingId, onSaveEdit, onDeleteItem }: {
  item: PlaybookItem; playbookId: string;
  activeItemId: string | null; setActiveItemId: (id: string | null) => void;
  draftAnswers: Record<string, string>; setDraftAnswers: (fn: (p: Record<string, string>) => Record<string, string>) => void;
  submitting: string | null;
  expandedFeedback: Record<string, boolean>; setExpandedFeedback: (fn: (p: Record<string, boolean>) => Record<string, boolean>) => void;
  onToggleTask: (item: PlaybookItem) => void; onSubmitAnswer: (item: PlaybookItem) => void;
  editingId: string | null; setEditingId: (id: string | null) => void;
  onSaveEdit: (item: PlaybookItem, content: string) => void; onDeleteItem: (item: PlaybookItem) => void;
}) {
  const isActive = activeItemId === item.id;
  const hasFeedback = !!item.ai_feedback;
  const feedbackExpanded = expandedFeedback[item.id];

  if (editingId === item.id) return (
    <EditItemForm item={item} onSave={onSaveEdit} onCancel={() => setEditingId(null)} />
  );

  if (item.type === 'task') return (
    <div className="flex items-start gap-3 py-2 group/item">
      <Checkbox checked={item.completed} onCheckedChange={() => onToggleTask(item)} className="mt-0.5 shrink-0" />
      <span className={`flex-1 text-sm leading-relaxed ${item.completed ? 'line-through text-muted-foreground' : ''}`}>{item.content}</span>
      <RowActions item={item} setEditingId={setEditingId} onDeleteItem={onDeleteItem} />
    </div>
  );

  if (item.type === 'resource') {
    const icon = RESOURCE_ICONS[item.resource_type ?? ''] ?? <Link className="w-4 h-4 text-muted-foreground" />;
    return (
      <div className="flex items-start gap-3 py-2 group/item">
        <span className="shrink-0 mt-0.5">{icon}</span>
        <div className="flex-1 flex flex-col gap-1.5">
          {item.url
            ? <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline underline-offset-2 inline-flex items-start gap-1.5">{item.content}<ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" /></a>
            : <span className="text-sm">{item.content}</span>
          }
          {item.resource_type && <Badge variant="secondary" className="text-xs capitalize w-fit">{item.resource_type}</Badge>}
        </div>
        <RowActions item={item} setEditingId={setEditingId} onDeleteItem={onDeleteItem} />
      </div>
    );
  }

  return (
    <div className="py-3 group/item">
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
              <button className="flex items-center gap-1.5 text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors"
                onClick={() => setExpandedFeedback(p => ({ ...p, [item.id]: !p[item.id] }))}>
                <PlaybookIcon size={12} />
                AI insight
                {feedbackExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
              <AnimatePresence>
                {feedbackExpanded && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <div className="mt-2 pl-3 border-l-2 border-amber-400/30">
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
                <Button size="sm" className="bg-amber-400 text-zinc-950 hover:bg-amber-300" onClick={() => onSubmitAnswer(item)} disabled={!draftAnswers[item.id]?.trim() || submitting === item.id}>
                  {submitting === item.id ? <><Loader2 className="w-3 h-3 mr-1.5 animate-spin" />Getting insight...</> : <><PlaybookIcon size={12} className="mr-1.5" />Save & get insight</>}
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
        <RowActions item={item} setEditingId={setEditingId} onDeleteItem={onDeleteItem} />
      </div>
    </div>
  );
}
