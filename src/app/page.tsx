'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LoginDialog } from '@/components/login-dialog';
import { WelcomeDialog } from '@/components/welcome-dialog';
import { useAuth } from '@/contexts/auth-context';
import { Shell, Logo, JoinRail, FeedTabs, FeedRow, SearchBox, MomentumBox, CategoriesBox, RailFooter, FeedSentinel, useCommunityFeed, categorize } from '@/components/shell';
import { Loader2 } from 'lucide-react';

export default function HomePage() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [tab, setTab] = useState('popular');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();
  const { playbooks: feed, loading: loadingFeed, hasMore, sentinelRef } = useCommunityFeed(tab, query);

  useEffect(() => {
    if (!loading && isLoggedIn) router.push('/app');
  }, [isLoggedIn, loading]);

  const visible = useMemo(() => {
    if (!category) return feed;
    return feed.filter(p => categorize(p).tag === category);
  }, [feed, category]);

  return (
    <>
      <Shell
        left={
          <JoinRail
            subtitle="Describe what you're planning and Claude builds a step-by-step playbook around your situation."
            onAuth={() => setLoginOpen(true)}
            disabled={loading}
          />
        }
        right={
          <>
            <SearchBox value={query} onChange={setQuery} />
            <CategoriesBox playbooks={feed} active={category} onSelect={setCategory} />
            <MomentumBox playbooks={feed} />
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
            <p className="text-sm text-muted-foreground">{query || category ? 'No playbooks match.' : 'No playbooks yet — be the first.'}</p>
            {!query && !category && <Button className="mt-4" onClick={() => setLoginOpen(true)}>Create the first playbook</Button>}
          </div>
        ) : (
          <div>
            {visible.map(p => <FeedRow key={p.id} playbook={p} />)}
            <FeedSentinel hasMore={hasMore} sentinelRef={sentinelRef} />
          </div>
        )}
      </Shell>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
      {!loading && !isLoggedIn && <WelcomeDialog onGetStarted={() => setLoginOpen(true)} />}
    </>
  );
}
