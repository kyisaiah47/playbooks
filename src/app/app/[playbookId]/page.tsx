'use client';

import { useState, useEffect, use, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Sparkles, Loader2, CheckSquare, HelpCircle, BookMarked, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import type { Playbook, PlaybookItem } from '@/types/playbook';

const RESOURCE_ICONS: Record<string, string> = {
  venue: '📍',
  book: '📚',
  person: '👤',
  video: '🎬',
  tool: '🔧',
  website: '🌐',
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
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const phaseRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    fetchPlaybook();
  }, [playbookId]);

  async function fetchPlaybook() {
    try {
      const res = await fetch(`/api/playbooks/${playbookId}`);
      if (!res.ok) { router.push('/app'); return; }
      const data = await res.json();
      setPlaybook(data.playbook);
      setItems(data.playbook.items ?? []);
    } finally {
      setLoading(false);
    }
  }

  async function toggleTask(item: PlaybookItem) {
    const updated = !item.completed;
    setItems((prev) => prev.map((i) => i.id === item.id ? { ...i, completed: updated } : i));
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
        setItems((prev) => prev.map((i) =>
          i.id === item.id ? { ...i, answer, ai_feedback: data.feedback } : i
        ));
        setExpandedFeedback((prev) => ({ ...prev, [item.id]: true }));
        setActiveItemId(null);
      }
    } finally {
      setSubmitting(null);
    }
  }

  function scrollToPhase(phase: string) {
    phaseRefs.current[phase]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActivePhase(phase);
  }

  const phases = items.reduce<Record<string, PlaybookItem[]>>((acc, item) => {
    const phase = item.phase ?? 'General';
    if (!acc[phase]) acc[phase] = [];
    acc[phase].push(item);
    return acc;
  }, {});

  const phaseNames = Object.keys(phases);
  const tasksDone = items.filter((i) => i.type === 'task' && i.completed).length;
  const tasksTotal = items.filter((i) => i.type === 'task').length;
  const questionsAnswered = items.filter((i) => i.type === 'question' && i.answer).length;
  const questionsTotal = items.filter((i) => i.type === 'question').length;
  const totalDone = tasksDone + questionsAnswered;
  const totalItems = tasksTotal + questionsTotal;
  const progress = totalItems > 0 ? Math.round((totalDone / totalItems) * 100) : 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!playbook) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 h-12">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => router.push('/app')}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium truncate">{playbook.title}</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <div className="h-1 w-24 bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-foreground rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{progress}%</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-12">

        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col fixed left-0 top-12 bottom-0 w-56 border-r border-border bg-background px-3 py-6 overflow-y-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-2 mb-3">Phases</p>
          <nav className="space-y-0.5">
            {phaseNames.map((phase) => {
              const phaseItems = phases[phase];
              const done = phaseItems.filter(i =>
                (i.type === 'task' && i.completed) || (i.type === 'question' && i.answer)
              ).length;
              const total = phaseItems.filter(i => i.type === 'task' || i.type === 'question').length;

              return (
                <button
                  key={phase}
                  onClick={() => scrollToPhase(phase)}
                  className={`w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors flex items-center justify-between group ${
                    activePhase === phase
                      ? 'bg-accent text-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  <span className="truncate">{phase}</span>
                  {total > 0 && (
                    <span className="text-xs text-muted-foreground ml-2 shrink-0">{done}/{total}</span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-border">
            <div className="px-2 space-y-1">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckSquare className="w-3 h-3" /> Tasks</span>
                <span>{tasksDone}/{tasksTotal}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><HelpCircle className="w-3 h-3" /> Questions</span>
                <span>{questionsAnswered}/{questionsTotal}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-56 max-w-3xl mx-auto lg:mx-0 px-6 lg:px-12 py-10 w-full">
          {/* Playbook header */}
          <div className="mb-12">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-2">{playbook.title}</h1>
            {playbook.description && (
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{playbook.description}</p>
            )}
          </div>

          {/* Phases */}
          <div className="space-y-14">
            {phaseNames.map((phase) => (
              <div
                key={phase}
                ref={(el) => { phaseRefs.current[phase] = el; }}
              >
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5 pb-2 border-b border-border">
                  {phase}
                </h2>

                <div className="space-y-1">
                  {phases[phase].map((item) => (
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
        </main>
      </div>
    </div>
  );
}

function ItemRow({
  item,
  activeItemId,
  setActiveItemId,
  draftAnswers,
  setDraftAnswers,
  submitting,
  expandedFeedback,
  setExpandedFeedback,
  onToggleTask,
  onSubmitAnswer,
}: {
  item: PlaybookItem;
  playbookId: string;
  activeItemId: string | null;
  setActiveItemId: (id: string | null) => void;
  draftAnswers: Record<string, string>;
  setDraftAnswers: (fn: (prev: Record<string, string>) => Record<string, string>) => void;
  submitting: string | null;
  expandedFeedback: Record<string, boolean>;
  setExpandedFeedback: (fn: (prev: Record<string, boolean>) => Record<string, boolean>) => void;
  onToggleTask: (item: PlaybookItem) => void;
  onSubmitAnswer: (item: PlaybookItem) => void;
}) {
  const isActive = activeItemId === item.id;
  const hasFeedback = !!item.ai_feedback;
  const feedbackExpanded = expandedFeedback[item.id];

  if (item.type === 'task') {
    return (
      <div className="flex items-start gap-3 py-2 group">
        <Checkbox
          checked={item.completed}
          onCheckedChange={() => onToggleTask(item)}
          className="mt-0.5 shrink-0"
        />
        <span className={`text-sm leading-relaxed ${item.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
          {item.content}
        </span>
      </div>
    );
  }

  if (item.type === 'resource') {
    const icon = RESOURCE_ICONS[item.resource_type ?? ''] ?? '🔗';
    return (
      <div className="flex items-start gap-3 py-2">
        <span className="text-base shrink-0 mt-0.5">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:underline underline-offset-2 flex items-center gap-1"
              >
                {item.content}
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </a>
            ) : (
              <span className="text-sm text-foreground">{item.content}</span>
            )}
            {item.resource_type && (
              <Badge variant="secondary" className="text-xs capitalize">{item.resource_type}</Badge>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Question
  return (
    <div className="py-3">
      <div className="flex items-start gap-3">
        <HelpCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground leading-relaxed">{item.content}</p>

          {/* Existing answer */}
          {item.answer && !isActive && (
            <div className="mt-3 ml-0">
              <p className="text-sm text-muted-foreground italic leading-relaxed">"{item.answer}"</p>
              <button
                className="text-xs text-muted-foreground hover:text-foreground mt-1 underline underline-offset-2"
                onClick={() => {
                  setDraftAnswers((p) => ({ ...p, [item.id]: item.answer! }));
                  setActiveItemId(item.id);
                }}
              >
                Edit
              </button>
            </div>
          )}

          {/* AI feedback */}
          {hasFeedback && !isActive && (
            <div className="mt-3">
              <button
                className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-700 transition-colors"
                onClick={() => setExpandedFeedback((p) => ({ ...p, [item.id]: !p[item.id] }))}
              >
                <Sparkles className="w-3 h-3" />
                <span>AI insight</span>
                {feedbackExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
              <AnimatePresence>
                {feedbackExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 pl-3 border-l-2 border-stone-200">
                      <p className="text-sm text-stone-600 leading-relaxed">{item.ai_feedback}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Answer input */}
          {isActive ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3">
              <Textarea
                autoFocus
                placeholder="Write your answer..."
                value={draftAnswers[item.id] ?? ''}
                onChange={(e) => setDraftAnswers((p) => ({ ...p, [item.id]: e.target.value }))}
                className="min-h-[100px] resize-none text-sm mb-2 bg-card"
                disabled={submitting === item.id}
              />
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => onSubmitAnswer(item)}
                  disabled={!draftAnswers[item.id]?.trim() || submitting === item.id}
                >
                  {submitting === item.id ? (
                    <><Loader2 className="w-3 h-3 mr-1.5 animate-spin" />Getting insight...</>
                  ) : (
                    <><Sparkles className="w-3 h-3 mr-1.5" />Save & get insight</>
                  )}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setActiveItemId(null)} disabled={submitting === item.id}>
                  Cancel
                </Button>
              </div>
            </motion.div>
          ) : !item.answer && (
            <button
              className="mt-2 text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
              onClick={() => setActiveItemId(item.id)}
            >
              + Answer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
