'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, ArrowRight, Loader2, Flame, Clock } from 'lucide-react';
import Image from 'next/image';

interface CommunityPlaybook {
  id: string;
  title: string;
  description: string | null;
  context: string;
  created_at: string;
  likes_count: number;
  comments_count: number;
  is_forked: boolean;
}

const GRID_BG = {
  backgroundImage: 'url(https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid-1.svg)',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 75%)',
  maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 75%)',
  opacity: 0.45,
};

export default function CommunityPage() {
  const router = useRouter();
  const [playbooks, setPlaybooks] = useState<CommunityPlaybook[]>([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState<'new' | 'popular'>('new');

  useEffect(() => {
    fetchCommunity();
  }, [sort]);

  async function fetchCommunity() {
    setLoading(true);
    try {
      const res = await fetch(`/api/community?sort=${sort}`);
      const data = await res.json();
      setPlaybooks(data.playbooks ?? []);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
        <button onClick={() => router.push('/')}>
          <Image src="/logo.png" alt="Templata" width={22} height={26} className="invert" />
        </button>
        <Button size="sm" onClick={() => router.push('/app')}>
          My Playbooks
        </Button>
      </nav>

      <div className="relative overflow-hidden">
        {/* Grid background */}
        <div aria-hidden className="pointer-events-none fixed inset-0" style={GRID_BG} />
        {/* Warm overlay */}
        <div aria-hidden className="pointer-events-none fixed inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(245, 235, 220, 0.4) 0%, transparent 70%)',
        }} />

        <div className="relative z-10 max-w-2xl mx-auto px-4 pt-16 pb-24">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <h1 className="text-4xl font-semibold tracking-tighter bg-gradient-to-r from-stone-900 via-stone-700 to-stone-800 bg-clip-text text-transparent mb-2">
              Community
            </h1>
            <p className="text-sm text-muted-foreground">Playbooks created and shared by everyone.</p>
          </motion.div>

          {/* Sort */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setSort('new')}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors backdrop-blur-sm ${
                sort === 'new'
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border bg-card/60 text-muted-foreground hover:text-foreground'
              }`}
            >
              <Clock className="w-3 h-3" />
              New
            </button>
            <button
              onClick={() => setSort('popular')}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors backdrop-blur-sm ${
                sort === 'popular'
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border bg-card/60 text-muted-foreground hover:text-foreground'
              }`}
            >
              <Flame className="w-3 h-3" />
              Popular
            </button>
          </div>

          {/* Feed */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
            </div>
          ) : playbooks.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-border rounded-xl bg-card/60 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground">No public playbooks yet.</p>
              <Button variant="outline" size="sm" className="mt-4" onClick={() => router.push('/app')}>
                Create the first one
              </Button>
            </div>
          ) : (
            <div className="divide-y divide-border border border-border rounded-xl overflow-hidden bg-card/80 backdrop-blur-sm shadow-sm">
              {playbooks.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-start justify-between px-4 py-4 group hover:bg-accent/50 transition-colors cursor-pointer gap-4"
                  onClick={() => router.push(`/community/${p.id}`)}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{p.title}</p>
                    {p.description && (
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{p.description}</p>
                    )}
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Heart className="w-3 h-3" />
                        {p.likes_count}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MessageSquare className="w-3 h-3" />
                        {p.comments_count}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(p.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      {p.is_forked && <span className="text-xs text-muted-foreground">forked</span>}
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-1" />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
