'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Heart, Loader2, HelpCircle, ExternalLink, X, Send } from 'lucide-react';
import { AppNav } from '@/components/app-nav';
import type { Playbook, PlaybookItem } from '@/types/playbook';

interface Comment {
  id: string;
  user_id: string;
  content: string;
  quoted_text: string | null;
  quoted_user: string | null;
  created_at: string;
}

const RESOURCE_ICONS: Record<string, string> = {
  venue: '📍', book: '📚', person: '👤', video: '🎬', tool: '🔧', website: '🌐',
};

export default function CommunityPlaybookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  const [playbook, setPlaybook] = useState<Playbook | null>(null);
  const [items, setItems] = useState<PlaybookItem[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [comment, setComment] = useState('');
  const [quoting, setQuoting] = useState<Comment | null>(null);
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    Promise.all([fetchPlaybook(), fetchComments()]);
  }, [id]);

  async function fetchPlaybook() {
    const res = await fetch(`/api/playbooks/${id}`);
    if (!res.ok) { router.push('/community'); return; }
    const data = await res.json();
    setPlaybook(data.playbook);
    setItems(data.playbook.items ?? []);
    setLoading(false);
  }

  async function fetchComments() {
    const res = await fetch(`/api/playbooks/${id}/comments`);
    const data = await res.json();
    setComments(data.comments ?? []);
  }

  async function toggleLike() {
    setLiked((l) => !l);
    setLikesCount((c) => liked ? c - 1 : c + 1);
    await fetch(`/api/playbooks/${id}/like`, { method: liked ? 'DELETE' : 'POST' });
  }

  async function postComment() {
    if (!comment.trim() || posting) return;
    setPosting(true);
    const res = await fetch(`/api/playbooks/${id}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: comment.trim(),
        quoted_text: quoting?.content ?? null,
        quoted_user: quoting?.user_id?.slice(0, 8) ?? null,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      setComments((prev) => [...prev, data.comment]);
      setComment('');
      setQuoting(null);
    }
    setPosting(false);
  }

  const phases = items.reduce<Record<string, PlaybookItem[]>>((acc, item) => {
    const phase = item.phase ?? 'General';
    if (!acc[phase]) acc[phase] = [];
    acc[phase].push(item);
    return acc;
  }, {});

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
    </div>
  );

  if (!playbook) return null;

  return (
    <div className="min-h-screen bg-background">
      <div aria-hidden className="pointer-events-none fixed inset-0" style={{ backgroundImage: 'url(https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid-1.svg)', backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 75%)', maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 75%)', opacity: 0.45 }} />
      <div aria-hidden className="pointer-events-none fixed inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(245, 235, 220, 0.4) 0%, transparent 70%)' }} />
      <AppNav showMyPlaybooks showUserMenu />

      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-10 pb-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight mb-2">{playbook.title}</h1>
          {playbook.description && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{playbook.description}</p>
          )}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLike}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors ${
                liked ? 'border-red-300 bg-red-50 text-red-500' : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              <Heart className={`w-3 h-3 ${liked ? 'fill-red-500' : ''}`} />
              {likesCount}
            </button>
            <Button size="sm" variant="outline" onClick={() => router.push(`/app?fork=${id}`)}>
              Fork this playbook
            </Button>
          </div>
        </div>

        {/* Playbook items */}
        <div className="space-y-10 mb-16">
          {Object.entries(phases).map(([phase, phaseItems]) => (
            <div key={phase}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 pb-2 border-b border-border">
                {phase}
              </h2>
              <div className="space-y-1">
                {phaseItems.map((item) => {
                  if (item.type === 'task') return (
                    <div key={item.id} className="flex items-start gap-3 py-2">
                      <Checkbox checked={item.completed} disabled className="mt-0.5 shrink-0" />
                      <span className={`text-sm leading-relaxed ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                        {item.content}
                      </span>
                    </div>
                  );
                  if (item.type === 'resource') return (
                    <div key={item.id} className="flex items-start gap-3 py-2">
                      <span className="text-sm shrink-0 mt-0.5">{RESOURCE_ICONS[item.resource_type ?? ''] ?? '🔗'}</span>
                      <div className="flex items-center gap-2 flex-wrap">
                        {item.url
                          ? <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline underline-offset-2 flex items-center gap-1">{item.content}<ExternalLink className="w-3 h-3 text-muted-foreground" /></a>
                          : <span className="text-sm">{item.content}</span>
                        }
                        {item.resource_type && <Badge variant="secondary" className="text-xs capitalize">{item.resource_type}</Badge>}
                      </div>
                    </div>
                  );
                  return (
                    <div key={item.id} className="flex items-start gap-3 py-2">
                      <HelpCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Comments */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6 pb-2 border-b border-border">
            Discussion · {comments.length}
          </h2>

          <div className="space-y-4 mb-8">
            {comments.length === 0 ? (
              <p className="text-sm text-muted-foreground">No comments yet. Start the discussion.</p>
            ) : comments.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group"
              >
                {c.quoted_text && (
                  <div className="mb-2 pl-3 border-l-2 border-border">
                    <p className="text-xs text-muted-foreground">
                      {c.quoted_user && <span className="font-medium">@{c.quoted_user} · </span>}
                      {c.quoted_text}
                    </p>
                  </div>
                )}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-muted-foreground">@{c.user_id.slice(0, 8)}</span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(c.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed">{c.content}</p>
                  </div>
                  <button
                    className="text-xs text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-all shrink-0 mt-1"
                    onClick={() => setQuoting(c)}
                  >
                    Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comment input */}
          <div className="space-y-2">
            <AnimatePresence>
              {quoting && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-3 border-l-2 border-border flex items-start justify-between gap-2"
                >
                  <p className="text-xs text-muted-foreground line-clamp-2">{quoting.content}</p>
                  <button onClick={() => setQuoting(null)} className="shrink-0 text-muted-foreground hover:text-foreground">
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <Textarea
              placeholder="Add to the discussion..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="resize-none text-sm min-h-[80px] bg-card"
            />
            <div className="flex justify-end">
              <Button size="sm" onClick={postComment} disabled={!comment.trim() || posting} className="gap-1.5">
                {posting ? <Loader2 className="w-3 h-3 animate-spin" /> : <Send className="w-3 h-3" />}
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
