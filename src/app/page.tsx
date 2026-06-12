'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LoginDialog } from '@/components/login-dialog';
import { useAuth } from '@/contexts/auth-context';
import { Shell, Logo, FeedTabs, FeedRow, SearchBox, TrendingBox, RailFooter, type FeedPlaybook } from '@/components/shell';
import { Loader2 } from 'lucide-react';

export default function HomePage() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [feed, setFeed] = useState<FeedPlaybook[]>([]);
  const [loadingFeed, setLoadingFeed] = useState(true);
  const [tab, setTab] = useState('popular');
  const [query, setQuery] = useState('');
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && isLoggedIn) router.push('/app');
  }, [isLoggedIn, loading]);

  useEffect(() => {
    setLoadingFeed(true);
    fetch(`/api/community?sort=${tab}`)
      .then(res => (res.ok ? res.json() : { playbooks: [] }))
      .then(data => setFeed(data.playbooks ?? []))
      .catch(() => setFeed([]))
      .finally(() => setLoadingFeed(false));
  }, [tab]);

  const visible = useMemo(() => {
    if (!query.trim()) return feed;
    const q = query.toLowerCase();
    return feed.filter(p => p.title.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q));
  }, [feed, query]);

  return (
    <>
      <Shell
        left={
          <div className="flex flex-col gap-5 pt-2">
            <Logo size={36} />
            <h1 className="text-[32px] font-bold leading-[1.15] tracking-tight">
              Plan your next<br />big thing
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed -mt-2">
              Describe what you&apos;re planning and Claude builds a step-by-step playbook around your situation.
            </p>
            <div className="flex items-center gap-2.5">
              <Button onClick={() => setLoginOpen(true)} disabled={loading} className="px-5">Create account</Button>
              <Button variant="secondary" onClick={() => setLoginOpen(true)} disabled={loading} className="px-5">Sign in</Button>
            </div>
          </div>
        }
        right={
          <>
            <SearchBox value={query} onChange={setQuery} />
            <TrendingBox playbooks={feed} />
            <RailFooter />
          </>
        }
      >
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-border">
          <Logo size={24} />
          <div className="flex gap-2">
            <Button size="sm" onClick={() => setLoginOpen(true)}>Create account</Button>
            <Button size="sm" variant="secondary" onClick={() => setLoginOpen(true)}>Sign in</Button>
          </div>
        </div>

        <FeedTabs
          tabs={[{ key: 'popular', label: 'Discover' }, { key: 'new', label: 'Newest' }]}
          active={tab}
          onChange={setTab}
        />

        {loadingFeed ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
          </div>
        ) : visible.length === 0 ? (
          <div className="text-center py-24 px-6">
            <p className="text-sm text-muted-foreground">{query ? 'No playbooks match your search.' : 'No playbooks yet — be the first.'}</p>
            {!query && <Button className="mt-4" onClick={() => setLoginOpen(true)}>Create the first playbook</Button>}
          </div>
        ) : (
          <div>
            {visible.map(p => <FeedRow key={p.id} playbook={p} />)}
          </div>
        )}
      </Shell>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}
