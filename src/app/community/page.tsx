'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { LoginDialog } from '@/components/login-dialog';
import { useAuth } from '@/contexts/auth-context';
import { Shell, Logo, NavRail, FeedTabs, FeedRow, SearchBox, TrendingBox, RailFooter, type FeedPlaybook } from '@/components/shell';
import { Loader2 } from 'lucide-react';

export default function CommunityPage() {
  const { isLoggedIn } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);
  const [playbooks, setPlaybooks] = useState<FeedPlaybook[]>([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('popular');
  const [query, setQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`/api/community?sort=${sort}`)
      .then(res => (res.ok ? res.json() : { playbooks: [] }))
      .then(data => setPlaybooks(data.playbooks ?? []))
      .catch(() => setPlaybooks([]))
      .finally(() => setLoading(false));
  }, [sort]);

  const visible = useMemo(() => {
    if (!query.trim()) return playbooks;
    const q = query.toLowerCase();
    return playbooks.filter(p => p.title.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q));
  }, [playbooks, query]);

  return (
    <>
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
                Fork any playbook and Claude re-tailors it to your situation.
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
            <SearchBox value={query} onChange={setQuery} />
            <TrendingBox playbooks={playbooks} />
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
            <p className="text-sm text-muted-foreground">{query ? 'No playbooks match your search.' : 'No public playbooks yet.'}</p>
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
