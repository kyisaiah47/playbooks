'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { Heart, MessageSquare, GitFork, Search, Home, Compass, SquarePen, LogOut, LogIn, Square, CheckSquare, HelpCircle, Link2, Flame } from 'lucide-react';
import { PlaybookIcon } from '@/components/ui/playbook-icon';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/auth-context';

export interface FeedPlaybook {
  id: string;
  title: string;
  description: string | null;
  created_at: string;
  likes_count: number;
  comments_count: number;
  is_forked: boolean;
  items?: { type: string; content: string; completed: boolean; position: number }[];
}

const CATEGORIES: { tag: string; hue: number; keywords: string[] }[] = [
  { tag: 'wedding', hue: 350, keywords: ['wedding', 'marry', 'engag', 'fianc', 'honeymoon'] },
  { tag: 'career', hue: 250, keywords: ['career', 'job', 'interview', 'promotion', 'resume', 'engineer'] },
  { tag: 'home', hue: 150, keywords: ['home', 'house', 'mortgage', 'apartment', 'condo', 'renovat'] },
  { tag: 'moving', hue: 200, keywords: ['moving', 'move to', 'relocat', 'new city'] },
  { tag: 'business', hue: 50, keywords: ['business', 'startup', 'launch', 'freelance', 'bakery', 'shop', 'agency'] },
  { tag: 'money', hue: 120, keywords: ['budget', 'financ', 'debt', 'invest', 'saving', 'retire'] },
  { tag: 'health', hue: 0, keywords: ['health', 'fitness', 'marathon', 'weight', 'training'] },
  { tag: 'travel', hue: 280, keywords: ['travel', 'trip', 'backpack', 'vacation', 'abroad'] },
  { tag: 'family', hue: 30, keywords: ['baby', 'parent', 'family', 'puppy', 'dog', 'adopt'] },
  { tag: 'learning', hue: 220, keywords: ['learn', 'course', 'degree', 'school', 'study', 'exam'] },
];

export function categorize(p: Pick<FeedPlaybook, 'title' | 'description'>): { tag: string; hue: number } {
  const text = `${p.title} ${p.description ?? ''}`.toLowerCase();
  for (const c of CATEGORIES) {
    if (c.keywords.some(k => text.includes(k))) return { tag: c.tag, hue: c.hue };
  }
  return { tag: 'life', hue: 180 };
}

export function CategoryChip({ playbook }: { playbook: Pick<FeedPlaybook, 'title' | 'description'> }) {
  const { tag, hue } = categorize(playbook);
  return (
    <span
      className="text-[11px] px-2 py-0.5 rounded-full font-medium"
      style={{ color: `oklch(0.78 0.11 ${hue})`, background: `oklch(0.78 0.11 ${hue} / 0.12)` }}
    >
      #{tag}
    </span>
  );
}

export function Shell({ left, right, children }: {
  left: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex justify-center">
        <aside className="hidden md:block w-[300px] xl:w-[340px] shrink-0">
          <div className="sticky top-0 h-screen flex flex-col px-7 py-8 overflow-y-auto">{left}</div>
        </aside>
        <main className="w-full max-w-[620px] min-h-screen border-x border-border pb-20 md:pb-0">{children}</main>
        <aside className="hidden lg:block w-[340px] shrink-0">
          <div className="sticky top-0 h-screen flex flex-col gap-4 px-6 py-5 overflow-y-auto">{right}</div>
        </aside>
      </div>
      <MobileTabBar />
    </div>
  );
}

function MobileTabBar() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoggedIn, logout } = useAuth();
  const initial = user?.name?.[0]?.toUpperCase() ?? user?.email?.[0]?.toUpperCase() ?? '?';

  const tab = (href: string, icon: React.ReactNode, active: boolean) => (
    <button
      onClick={() => router.push(href)}
      className={`flex-1 flex items-center justify-center py-3.5 ${active ? 'text-foreground' : 'text-muted-foreground'}`}
    >
      {icon}
    </button>
  );

  return (
    <nav className="md:hidden fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur-md">
      {tab(isLoggedIn ? '/app' : '/', <Home className="w-6 h-6" strokeWidth={pathname === (isLoggedIn ? '/app' : '/') ? 2.5 : 2} />, pathname === (isLoggedIn ? '/app' : '/'))}
      {tab('/community', <Compass className="w-6 h-6" strokeWidth={pathname === '/community' ? 2.5 : 2} />, pathname === '/community')}
      {isLoggedIn ? (
        <>
          {tab('/app', <SquarePen className="w-6 h-6 text-primary" />, false)}
          <div className="flex-1 flex items-center justify-center py-2.5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-8 h-8 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">{initial}</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="top" className="w-48">
                {user?.tier !== 'pro' && (
                  <DropdownMenuItem className="cursor-pointer" onClick={goToCheckout}>
                    Upgrade to Pro
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={async () => {
                    await logout();
                    router.push('/');
                  }}
                >
                  <LogOut className="w-3.5 h-3.5 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      ) : (
        tab('/', <LogIn className="w-6 h-6" />, false)
      )}
    </nav>
  );
}

export function Logo({ size = 28 }: { size?: number }) {
  return <PlaybookIcon size={size} className="text-primary" />;
}

export function FeedTabs({ tabs, active, onChange }: {
  tabs: { key: string; label: string }[];
  active: string;
  onChange: (key: string) => void;
}) {
  return (
    <div className="sticky top-0 z-20 flex border-b border-border bg-background/90 backdrop-blur-md">
      {tabs.map(t => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={`flex-1 py-3.5 text-sm font-semibold text-center transition-colors ${
            active === t.key ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <span className={`inline-block pb-3 -mb-3.5 border-b-[3px] ${active === t.key ? 'border-primary' : 'border-transparent'}`}>
            {t.label}
          </span>
        </button>
      ))}
    </div>
  );
}

export function PlaybookAvatar({ title, size = 40, progress }: { title: string; size?: number; progress?: number }) {
  const hue = (title.split('').reduce((a, c) => a + c.charCodeAt(0), 0) * 13) % 360;
  const avatar = (
    <div
      className="rounded-full shrink-0 flex items-center justify-center text-white font-bold"
      style={{ width: size, height: size, fontSize: size * 0.42, background: `oklch(0.55 0.13 ${hue})` }}
    >
      {title[0]?.toUpperCase() ?? '?'}
    </div>
  );
  if (progress === undefined) return avatar;

  const box = size + 12;
  const r = size / 2 + 4;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: box, height: box }}>
      <svg className="absolute inset-0 -rotate-90" width={box} height={box}>
        <circle cx={box / 2} cy={box / 2} r={r} fill="none" stroke="var(--secondary)" strokeWidth="2.5" />
        <circle
          cx={box / 2} cy={box / 2} r={r} fill="none"
          stroke={progress >= 100 ? '#4ade80' : 'var(--primary)'}
          strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={circ * (1 - Math.min(progress, 100) / 100)}
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{avatar}</div>
    </div>
  );
}

export function timeAgo(date: string) {
  const s = Math.max(1, Math.floor((Date.now() - new Date(date).getTime()) / 1000));
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.floor(s / 60)}m`;
  if (s < 86400) return `${Math.floor(s / 3600)}h`;
  if (s < 86400 * 30) return `${Math.floor(s / 86400)}d`;
  return `${Math.floor(s / (86400 * 30))}mo`;
}

const PREVIEW_ICONS: Record<string, React.ReactNode> = {
  question: <HelpCircle className="w-3.5 h-3.5 text-amber-400/90 shrink-0" />,
  resource: <Link2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />,
};

export function FeedRow({ playbook }: { playbook: FeedPlaybook }) {
  const router = useRouter();
  const items = playbook.items ?? [];
  const preview = items.slice(0, 3);
  const remaining = items.length - preview.length;
  return (
    <article
      className="flex gap-3 px-4 py-3.5 border-b border-border hover:bg-accent/60 transition-colors cursor-pointer"
      onClick={() => router.push(`/community/${playbook.id}`)}
    >
      <PlaybookAvatar title={playbook.title} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-[15px] font-semibold leading-snug truncate">{playbook.title}</p>
          <span className="text-sm text-muted-foreground shrink-0">· {timeAgo(playbook.created_at)}</span>
        </div>
        {playbook.description && (
          <p className="text-sm text-muted-foreground leading-relaxed mt-0.5 line-clamp-2">{playbook.description}</p>
        )}
        {preview.length > 0 && (
          <div className="mt-2.5 rounded-xl border border-border/80 px-3 py-2.5 space-y-1.5">
            {preview.map((it, i) => (
              <div key={i} className="flex items-center gap-2">
                {it.type === 'task'
                  ? (it.completed
                    ? <CheckSquare className="w-3.5 h-3.5 text-primary shrink-0" />
                    : <Square className="w-3.5 h-3.5 text-muted-foreground/70 shrink-0" />)
                  : PREVIEW_ICONS[it.type] ?? PREVIEW_ICONS.resource}
                <span className={`text-xs truncate ${it.completed ? 'text-muted-foreground/60 line-through' : 'text-muted-foreground'}`}>{it.content}</span>
              </div>
            ))}
            {remaining > 0 && (
              <p className="text-[11px] text-muted-foreground/70 pl-[22px]">+ {remaining} more steps</p>
            )}
          </div>
        )}
        <div className="flex items-center gap-7 mt-2.5 text-muted-foreground">
          <span className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"><MessageSquare className="w-4 h-4" />{playbook.comments_count || ''}</span>
          <span className="flex items-center gap-1.5 text-xs hover:text-rose-400 transition-colors"><Heart className="w-4 h-4" />{playbook.likes_count || ''}</span>
          <span className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"><GitFork className="w-4 h-4" />{playbook.is_forked ? 'forked' : 'fork'}</span>
          <span className="ml-auto"><CategoryChip playbook={playbook} /></span>
        </div>
      </div>
    </article>
  );
}

export function SearchBox({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search playbooks"
        className="w-full h-11 pl-11 pr-4 rounded-full bg-secondary text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring/60"
      />
    </div>
  );
}

export function MomentumBox({ playbooks }: { playbooks: FeedPlaybook[] }) {
  const router = useRouter();
  const ranked = playbooks
    .map(p => {
      const tasks = (p.items ?? []).filter(i => i.type === 'task');
      return { p, done: tasks.filter(i => i.completed).length };
    })
    .filter(x => x.done > 0)
    .sort((a, b) => b.done - a.done)
    .slice(0, 5);

  const fallback = ranked.length === 0;
  const rows = fallback
    ? [...playbooks].sort((a, b) => b.likes_count - a.likes_count).slice(0, 5).map(p => ({ p, done: 0 }))
    : ranked;
  if (rows.length === 0) return null;

  return (
    <div className="rounded-2xl border border-border bg-popover/60 p-4">
      <p className="flex items-center gap-2 text-sm font-bold mb-0.5"><Flame className="w-4 h-4 text-amber-400" />Momentum</p>
      <p className="text-xs text-muted-foreground mb-3">{fallback ? 'Most loved playbooks' : 'People getting things done'}</p>
      <div className="space-y-1">
        {rows.map(({ p, done }, i) => (
          <button
            key={p.id}
            onClick={() => router.push(`/community/${p.id}`)}
            className="flex items-baseline gap-2.5 w-full text-left px-2 py-1.5 -mx-2 rounded-lg hover:bg-accent transition-colors"
          >
            <span className="text-xs text-muted-foreground tabular-nums">{i + 1}.</span>
            <span className="text-sm truncate flex-1">{p.title}</span>
            <span className="text-xs text-muted-foreground shrink-0">{fallback ? `♥ ${p.likes_count}` : `${done} done`}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function CategoriesBox({ playbooks, active, onSelect }: {
  playbooks: FeedPlaybook[];
  active: string | null;
  onSelect: (tag: string | null) => void;
}) {
  const counts = new Map<string, { hue: number; count: number }>();
  for (const p of playbooks) {
    const { tag, hue } = categorize(p);
    const cur = counts.get(tag);
    counts.set(tag, { hue, count: (cur?.count ?? 0) + 1 });
  }
  const tags = [...counts.entries()].sort((a, b) => b[1].count - a[1].count);
  if (tags.length === 0) return null;

  return (
    <div className="rounded-2xl border border-border bg-popover/60 p-4">
      <p className="text-sm font-bold mb-3">Big moments</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map(([tag, { hue, count }]) => {
          const isActive = active === tag;
          return (
            <button
              key={tag}
              onClick={() => onSelect(isActive ? null : tag)}
              className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all ${isActive ? 'ring-1 ring-current' : 'hover:opacity-80'}`}
              style={{ color: `oklch(0.78 0.11 ${hue})`, background: `oklch(0.78 0.11 ${hue} / ${isActive ? 0.22 : 0.12})` }}
            >
              #{tag} <span className="opacity-60">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function RailFooter() {
  return (
    <p className="text-xs text-muted-foreground px-1">© {new Date().getFullYear()} Playbooks</p>
  );
}

async function fetchFeedPage(sort: string, q: string, offset: number): Promise<{ playbooks: FeedPlaybook[]; hasMore: boolean }> {
  const params = new URLSearchParams({ sort, offset: String(offset), limit: '20' });
  if (q) params.set('q', q);
  try {
    const res = await fetch(`/api/community?${params}`);
    if (!res.ok) return { playbooks: [], hasMore: false };
    const data = await res.json();
    return { playbooks: data.playbooks ?? [], hasMore: !!data.hasMore };
  } catch {
    return { playbooks: [], hasMore: false };
  }
}

export function useCommunityFeed(sort: string, query: string) {
  const [playbooks, setPlaybooks] = useState<FeedPlaybook[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [debouncedQ, setDebouncedQ] = useState(query.trim());
  const offsetRef = useRef(0);
  const loadingMoreRef = useRef(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedQ(query.trim()), 300);
    return () => clearTimeout(id);
  }, [query]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    (async () => {
      const data = await fetchFeedPage(sort, debouncedQ, 0);
      if (cancelled) return;
      setPlaybooks(data.playbooks);
      setHasMore(data.hasMore);
      offsetRef.current = data.playbooks.length;
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [sort, debouncedQ]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasMore || loading) return;
    const obs = new IntersectionObserver(async (entries) => {
      if (!entries[0].isIntersecting || loadingMoreRef.current) return;
      loadingMoreRef.current = true;
      const data = await fetchFeedPage(sort, debouncedQ, offsetRef.current);
      setPlaybooks(prev => [...prev, ...data.playbooks]);
      setHasMore(data.hasMore);
      offsetRef.current += data.playbooks.length;
      loadingMoreRef.current = false;
    }, { rootMargin: '600px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, [sort, debouncedQ, hasMore, loading]);

  return { playbooks, loading, hasMore, sentinelRef };
}

export function FeedSentinel({ hasMore, sentinelRef }: { hasMore: boolean; sentinelRef: React.RefObject<HTMLDivElement | null> }) {
  if (!hasMore) return null;
  return (
    <div ref={sentinelRef} className="flex items-center justify-center py-8">
      <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
    </div>
  );
}

export async function goToCheckout() {
  const res = await fetch('/api/stripe/checkout', { method: 'POST' });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
}

interface Usage {
  tier: 'free' | 'pro';
  playbooks: { used: number; limit: number | null };
  insights: { used: number; limit: number | null };
}

function UsageMeter({ label, used, limit }: { label: string; used: number; limit: number | null }) {
  const pct = limit ? Math.min(100, Math.round((used / limit) * 100)) : 0;
  return (
    <div>
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-muted-foreground tabular-nums">{used}/{limit ?? '∞'}</span>
      </div>
      {limit !== null && (
        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all ${pct >= 100 ? 'bg-destructive' : 'bg-primary'}`} style={{ width: `${pct}%` }} />
        </div>
      )}
    </div>
  );
}

export function UpgradeCard() {
  const [usage, setUsage] = useState<Usage | null>(null);

  useEffect(() => {
    fetch('/api/user/usage')
      .then(res => (res.ok ? res.json() : null))
      .then(setUsage)
      .catch(() => {});
  }, []);

  if (!usage) return null;

  if (usage.tier === 'pro') {
    return (
      <div className="rounded-2xl border border-border bg-popover/60 p-4">
        <p className="text-sm font-bold mb-3">Pro <span className="ml-1 text-[11px] font-medium text-primary bg-primary/15 px-2 py-0.5 rounded-full align-middle">active</span></p>
        <UsageMeter label="AI insights this month" used={usage.insights.used} limit={usage.insights.limit} />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-popover/60 p-4">
      <p className="text-sm font-bold mb-3">Free plan</p>
      <div className="space-y-3 mb-4">
        <UsageMeter label="Playbooks this month" used={usage.playbooks.used} limit={usage.playbooks.limit} />
        <UsageMeter label="AI insights this month" used={usage.insights.used} limit={usage.insights.limit} />
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
        Pro gets unlimited playbooks and 100 AI insights a month — guidance, replans, the works.
      </p>
      <Button size="sm" className="w-full" onClick={goToCheckout}>
        Go Pro — $9/mo
      </Button>
    </div>
  );
}

export function JoinRail({ subtitle, onAuth, disabled }: { subtitle: string; onAuth: () => void; disabled?: boolean }) {
  return (
    <div className="flex flex-col h-full pt-2">
      <div className="flex flex-col gap-5">
        <Logo size={36} />
        <h1 className="text-[32px] font-bold leading-[1.15] tracking-tight">
          Plan your next<br />big thing
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed -mt-2">{subtitle}</p>
        <div className="flex items-center gap-2.5">
          <Button onClick={onAuth} disabled={disabled} className="px-5">Create account</Button>
          <Button variant="secondary" onClick={onAuth} disabled={disabled} className="px-5">Sign in</Button>
        </div>
      </div>
      <div className="mt-auto pb-2 space-y-1 text-[11px] leading-relaxed text-muted-foreground/60">
        <p>Free — 2 playbooks + 5 AI insights/mo</p>
        <p>Pro $9/mo — unlimited playbooks + 100 insights</p>
      </div>
    </div>
  );
}

export function NavRail({ onNewPlaybook }: { onNewPlaybook?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const initial = user?.name?.[0]?.toUpperCase() ?? user?.email?.[0]?.toUpperCase() ?? '?';

  const items = [
    { icon: Home, label: 'Home', href: '/app' },
    { icon: Compass, label: 'Discover', href: '/community' },
  ];

  return (
    <div className="flex flex-col h-full pt-2">
      <button onClick={() => router.push('/app')} className="flex items-center gap-3 px-3 mb-6">
        <Logo size={28} />
        <span className="text-xl font-bold tracking-tight">Playbooks</span>
      </button>

      <nav className="space-y-1">
        {items.map(({ icon: Icon, label, href }) => {
          const active = pathname === href;
          return (
            <button
              key={href}
              onClick={() => router.push(href)}
              className={`flex items-center gap-4 w-full px-3 py-2.5 rounded-full text-lg transition-colors hover:bg-accent ${active ? 'font-bold' : 'text-foreground/90'}`}
            >
              <Icon className="w-6 h-6" strokeWidth={active ? 2.5 : 2} />
              {label}
            </button>
          );
        })}
      </nav>

      <Button
        size="lg"
        className="mt-6 w-44 gap-2"
        onClick={() => {
          if (onNewPlaybook) onNewPlaybook();
          else router.push('/app');
        }}
      >
        <SquarePen className="w-4 h-4" />
        New playbook
      </Button>

      <div className="mt-auto pb-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-full hover:bg-accent transition-colors">
              <div className="w-9 h-9 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center">{initial}</div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-sm font-semibold truncate">{user?.name ?? 'Account'}</p>
                <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            {user?.tier !== 'pro' ? (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={async () => {
                  const res = await fetch('/api/stripe/checkout', { method: 'POST' });
                  const data = await res.json();
                  if (data.url) window.location.href = data.url;
                }}
              >
                Upgrade to Pro
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={async () => {
                  const res = await fetch('/api/stripe/portal', { method: 'POST' });
                  const data = await res.json();
                  if (data.url) window.location.href = data.url;
                }}
              >
                Manage subscription
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={async () => {
                await logout();
                router.push('/');
              }}
            >
              <LogOut className="w-3.5 h-3.5 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
