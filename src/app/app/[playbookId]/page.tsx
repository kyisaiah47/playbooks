'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Sparkles, Loader2, HelpCircle, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
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

  const phases = items.reduce<Record<string, PlaybookItem[]>>((acc, item) => {
    const phase = item.phase ?? 'General';
    if (!acc[phase]) acc[phase] = [];
    acc[phase].push(item);
    return acc;
  }, {});

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
    <div className="min-h-screen bg-background">
      {/* Nav — matches dashboard */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
        <button
          onClick={() => router.push('/app')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Templata
        </button>
        <div className="flex items-center gap-3">
          <div className="h-1 w-20 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-foreground rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
          <span className="text-xs text-muted-foreground">{progress}%</span>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 pt-12 pb-24">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight mb-2">{playbook.title}</h1>
          {playbook.description && (
            <p className="text-sm text-muted-foreground leading-relaxed">{playbook.description}</p>
          )}
          <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
            <span>{tasksDone}/{tasksTotal} tasks</span>
            <span>{questionsAnswered}/{questionsTotal} questions</span>
          </div>
        </div>

        {/* Phases */}
        <div className="space-y-12">
          {Object.entries(phases).map(([phase, phaseItems]) => (
            <div key={phase}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 pb-2 border-b border-border">
                {phase}
              </h2>
              <div className="space-y-1">
                {phaseItems.map((item) => (
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
      <div className="flex items-start gap-3 py-2">
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
        <span className="text-sm shrink-0 mt-0.5">{icon}</span>
        <div className="flex items-center gap-2 flex-wrap">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer"
              className="text-sm hover:underline underline-offset-2 flex items-center gap-1">
              {item.content}
              <ExternalLink className="w-3 h-3 text-muted-foreground" />
            </a>
          ) : (
            <span className="text-sm">{item.content}</span>
          )}
          {item.resource_type && (
            <Badge variant="secondary" className="text-xs capitalize">{item.resource_type}</Badge>
          )}
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
          <p className="text-sm leading-relaxed">{item.content}</p>

          {item.answer && !isActive && (
            <div className="mt-2">
              <p className="text-sm text-muted-foreground italic">"{item.answer}"</p>
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

          {hasFeedback && !isActive && (
            <div className="mt-2">
              <button
                className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-700 transition-colors"
                onClick={() => setExpandedFeedback((p) => ({ ...p, [item.id]: !p[item.id] }))}
              >
                <Sparkles className="w-3 h-3" />
                AI insight
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
                <Button size="sm" onClick={() => onSubmitAnswer(item)}
                  disabled={!draftAnswers[item.id]?.trim() || submitting === item.id}>
                  {submitting === item.id
                    ? <><Loader2 className="w-3 h-3 mr-1.5 animate-spin" />Getting insight...</>
                    : <><Sparkles className="w-3 h-3 mr-1.5" />Save & get insight</>
                  }
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setActiveItemId(null)}
                  disabled={submitting === item.id}>
                  Cancel
                </Button>
              </div>
            </motion.div>
          ) : !item.answer && (
            <button
              className="mt-1.5 text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
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
