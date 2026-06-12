'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { LoginDialog } from '@/components/login-dialog';
import { useAuth } from '@/contexts/auth-context';
import { Shell, JoinRail, NavRail, FeedTabs, FeedRow, SearchBox, MomentumBox, CategoriesBox, RailFooter, FeedSentinel, useCommunityFeed, categorize } from '@/components/shell';
import { Loader2 } from 'lucide-react';

export default function CommunityPage() {
  const { isLoggedIn } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);
  const [sort, setSort] = useState('popular');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const { playbooks, loading, hasMore, sentinelRef } = useCommunityFeed(sort, query);

  const visible = useMemo(() => {
    if (!category) return playbooks;
    return playbooks.filter(p => categorize(p).tag === category);
  }, [playbooks, category]);

  return (
    <>
      <Shell
        left={
          isLoggedIn ? (
            <NavRail />
          ) : (
            <JoinRail
              subtitle="Fork any playbook and Claude re-tailors it to your situation."
              onAuth={() => setLoginOpen(true)}
            />
          )
        }
        right={
          <>
            <SearchBox value={query} onChange={setQuery} />
            <CategoriesBox playbooks={playbooks} active={category} onSelect={setCategory} />
            <MomentumBox playbooks={playbooks} />
            <RailFooter />
          </>
        }
      >
        <FeedTabs
          tabs={[{ key: 'popular', label: 'Discover' }, { key: 'new', label: 'Newest' }]}
          active={sort}
          onChange={setSort}
        />

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
          </div>
        ) : visible.length === 0 ? (
          <div className="text-center py-24 px-6">
            <p className="text-sm text-muted-foreground">{query || category ? 'No playbooks match.' : 'No public playbooks yet.'}</p>
          </div>
        ) : (
          <div>
            {visible.map(p => <FeedRow key={p.id} playbook={p} />)}
            <FeedSentinel hasMore={hasMore} sentinelRef={sentinelRef} />
          </div>
        )}
      </Shell>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}
