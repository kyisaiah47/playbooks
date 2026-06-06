'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Loader2, CheckSquare, HelpCircle, BookMarked, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import type { Playbook, PlaybookItem } from '@/types/playbook';

const TYPE_CONFIG = {
  task:     { icon: CheckSquare, label: 'Task',     color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
  question: { icon: HelpCircle,  label: 'Question', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400' },
  resource: { icon: BookMarked,  label: 'Resource', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
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

  // Group items by phase
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!playbook) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-10">

        {/* Back */}
        <Button variant="ghost" size="sm" className="mb-6 -ml-2 text-muted-foreground" onClick={() => router.push('/app')}>
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Playbooks
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-2">{playbook.title}</h1>
          {playbook.description && (
            <p className="text-muted-foreground text-sm mb-4">{playbook.description}</p>
          )}
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>{tasksDone}/{tasksTotal} tasks done</span>
            <span>{questionsAnswered}/{questionsTotal} questions answered</span>
          </div>
        </div>

        {/* Items by phase */}
        <div className="space-y-8">
          {Object.entries(phases).map(([phase, phaseItems]) => (
            <div key={phase}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{phase}</h2>
              <div className="space-y-2">
                {phaseItems.map((item) => {
                  const config = TYPE_CONFIG[item.type];
                  const Icon = config.icon;
                  const isActive = activeItemId === item.id;
                  const hasFeedback = !!item.ai_feedback;
                  const feedbackExpanded = expandedFeedback[item.id];

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      className="border rounded-lg p-4 bg-card"
                    >
                      <div className="flex items-start gap-3">
                        {/* Task checkbox */}
                        {item.type === 'task' && (
                          <Checkbox
                            checked={item.completed}
                            onCheckedChange={() => toggleTask(item)}
                            className="mt-0.5 shrink-0"
                          />
                        )}

                        {/* Question/resource icon */}
                        {item.type !== 'task' && (
                          <div className={`w-5 h-5 mt-0.5 shrink-0 rounded flex items-center justify-center ${config.color}`}>
                            <Icon className="w-3 h-3" />
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          {/* Content */}
                          <p className={`text-sm ${item.type === 'task' && item.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {item.type === 'resource' && item.url ? (
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                                {item.content}
                              </a>
                            ) : item.content}
                          </p>

                          {item.resource_type && (
                            <Badge variant="secondary" className="text-xs mt-1.5">{item.resource_type}</Badge>
                          )}

                          {/* Question: existing answer */}
                          {item.type === 'question' && item.answer && !isActive && (
                            <div className="mt-3">
                              <p className="text-sm text-muted-foreground italic">"{item.answer}"</p>
                              <button
                                className="text-xs text-muted-foreground hover:text-foreground mt-1 underline-offset-2 hover:underline"
                                onClick={() => { setDraftAnswers((p) => ({ ...p, [item.id]: item.answer! })); setActiveItemId(item.id); }}
                              >
                                Edit answer
                              </button>
                            </div>
                          )}

                          {/* Question: AI feedback */}
                          {item.type === 'question' && hasFeedback && !isActive && (
                            <div className="mt-2">
                              <button
                                className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 hover:opacity-80"
                                onClick={() => setExpandedFeedback((p) => ({ ...p, [item.id]: !p[item.id] }))}
                              >
                                <Sparkles className="w-3 h-3" />
                                AI insight
                                {feedbackExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                              </button>
                              <AnimatePresence>
                                {feedbackExpanded && (
                                  <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="text-sm text-muted-foreground mt-2 border-l-2 border-purple-400/40 pl-3"
                                  >
                                    {item.ai_feedback}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                            </div>
                          )}

                          {/* Question: answer input */}
                          {item.type === 'question' && isActive && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3">
                              <Textarea
                                autoFocus
                                placeholder="Type your answer..."
                                value={draftAnswers[item.id] ?? ''}
                                onChange={(e) => setDraftAnswers((p) => ({ ...p, [item.id]: e.target.value }))}
                                className="min-h-[80px] resize-none text-sm mb-2"
                                disabled={submitting === item.id}
                              />
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => submitAnswer(item)}
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
                          )}

                          {/* Question: click to answer */}
                          {item.type === 'question' && !isActive && !item.answer && (
                            <button
                              className="text-xs text-muted-foreground hover:text-foreground mt-2 underline-offset-2 hover:underline"
                              onClick={() => setActiveItemId(item.id)}
                            >
                              + Add answer
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
