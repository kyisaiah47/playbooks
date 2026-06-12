'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Heart, Loader2, HelpCircle, ExternalLink, X, Send, MapPin, BookOpen, User, Video, Wrench, Globe, Link, ArrowLeft, GitFork, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Shell, Logo, NavRail, PlaybookAvatar, RailFooter, timeAgo } from '@/components/shell';
import { LoginDialog } from '@/components/login-dialog';
import { useAuth } from '@/contexts/auth-context';
import type { Playbook, PlaybookItem } from '@/types/playbook';

interface Comment {
  id: string;
  user_id: string;
  user_name: string | null;
  content: string;
  quoted_text: string | null;
  quoted_user: string | null;
  created_at: string;
}

const RESOURCE_ICONS: Record<string, React.ReactNode> = {
  venue: <MapPin className="w-4 h-4 text-muted-foreground" />,
  book: <BookOpen className="w-4 h-4 text-muted-foreground" />,
  person: <User className="w-4 h-4 text-muted-foreground" />,
  video: <Video className="w-4 h-4 text-muted-foreground" />,
  tool: <Wrench className="w-4 h-4 text-muted-foreground" />,
  website: <Globe className="w-4 h-4 text-muted-foreground" />,
};

interface Props {
  id: string;
  initialPlaybook: Playbook;
  initialItems: PlaybookItem[];
}

export function PlaybookView({ id, initialPlaybook, initialItems }: Props) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);
  const [playbook] = useState<Playbook>(initialPlaybook);
  const [items] = useState<PlaybookItem[]>(initialItems);
  const [comments, setComments] = useState<Comment[]>([]);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialPlaybook.likes_count ?? 0);
  const [comment, setComment] = useState('');
  const [quoting, setQuoting] = useState<Comment | null>(null);
  const [posting, setPosting] = useState(false);
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetchComments();
  }, [id]);

  async function fetchComments() {
    const res = await fetch(`/api/playbooks/${id}/comments`);
    const data = await res.json();
    setComments(data.comments ?? []);
  }

  async function toggleLike() {
    if (!isLoggedIn) { setLoginOpen(true); return; }
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

  return (
    <Shell
      left={
        isLoggedIn ? (
          <NavRail />
        ) : (
          <div className="flex flex-col gap-5 pt-2">
            <Logo size={36} />
            <h1 className="text-[32px] font-bold leading-[1.15] tracking-tight">
              Plan your next<br />big thing
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed -mt-2">
              Fork this playbook and Claude re-tailors it to your situation.
            </p>
            <div className="flex items-center gap-2.5">
              <Button onClick={() => setLoginOpen(true)} className="px-5">Create account</Button>
              <Button variant="secondary" onClick={() => setLoginOpen(true)} className="px-5">Sign in</Button>
            </div>
          </div>
        )
      }
      right={
        <>
          <div className="rounded-2xl border border-border bg-popover/60 p-4">
            <p className="text-sm font-bold mb-1">Make it yours</p>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Fork this playbook and Claude rebuilds it around your specific situation.
            </p>
            <Button size="sm" className="w-full gap-1.5" onClick={() => { if (!isLoggedIn) { setLoginOpen(true); return; } router.push(`/app?fork=${id}`); }}>
              <GitFork className="w-3.5 h-3.5" />
              Fork this playbook
            </Button>
          </div>
          <RailFooter />
        </>
      }
    >
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />

      {/* Sticky header */}
      <div className="sticky top-0 z-20 flex items-center gap-3 px-4 py-2.5 border-b border-border bg-background/90 backdrop-blur-md">
        <button onClick={() => router.push(isLoggedIn ? '/community' : '/')} className="p-2 -ml-2 rounded-full hover:bg-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="text-sm font-bold truncate flex-1">Playbook</h1>
      </div>

      <div className="px-4 pt-5 pb-24">
        {/* Post-style header */}
        <div className="mb-8">
          <div className="flex items-start gap-3 mb-3">
            <PlaybookAvatar title={playbook.title} size={44} />
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold tracking-tight leading-snug">{playbook.title}</h1>
              <p className="text-xs text-muted-foreground mt-0.5">{timeAgo(playbook.created_at)} ago</p>
            </div>
          </div>
          {playbook.description && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{playbook.description}</p>
          )}
          <div className="flex items-center gap-3 pb-1 border-b border-border">
            <button
              onClick={toggleLike}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 mb-3 rounded-full border transition-colors ${
                liked ? 'border-rose-500/40 bg-rose-500/10 text-rose-400' : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              <Heart className={`w-3 h-3 ${liked ? 'fill-rose-400' : ''}`} />
              {likesCount}
            </button>
            <Button size="sm" variant="secondary" className="mb-3 gap-1.5" onClick={() => { if (!isLoggedIn) { setLoginOpen(true); return; } router.push(`/app?fork=${id}`); }}>
              <GitFork className="w-3.5 h-3.5" />
              Fork
            </Button>
          </div>
        </div>

        {/* Playbook items */}
        <div className="space-y-3 mb-16">
          {Object.entries(phases).map(([phase, phaseItems]) => {
            const pTasks = phaseItems.filter(i => i.type === 'task');
            const pDone = pTasks.filter(i => i.completed).length;
            const complete = pTasks.length > 0 && pDone === pTasks.length;
            const open = !!expandedPhases[phase];
            return (
            <div key={phase} className="rounded-2xl border border-border overflow-hidden">
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
              {open && (
              <div className="space-y-1 px-4 pb-4 pt-1 border-t border-border">
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
                      <span className="shrink-0 mt-0.5">{RESOURCE_ICONS[item.resource_type ?? ''] ?? <Link className="w-4 h-4 text-muted-foreground" />}</span>
                      <div className="flex flex-col gap-1.5">
                        {item.url
                          ? <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline underline-offset-2 inline-flex items-start gap-1.5">{item.content}<ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" /></a>
                          : <span className="text-sm">{item.content}</span>
                        }
                        {item.resource_type && <Badge variant="secondary" className="text-xs capitalize w-fit">{item.resource_type}</Badge>}
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
              )}
            </div>
            );
          })}
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
                      <span className="text-xs font-medium text-muted-foreground">@{c.user_name ?? c.user_id.slice(0, 8)}</span>
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
    </Shell>
  );
}
