'use client';

import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Heart, MessageSquare, GitFork, Search, TrendingUp, Home, Compass, SquarePen, LogOut } from 'lucide-react';
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
        <main className="w-full max-w-[620px] min-h-screen border-x border-border">{children}</main>
        <aside className="hidden lg:block w-[340px] shrink-0">
          <div className="sticky top-0 h-screen flex flex-col gap-4 px-6 py-5 overflow-y-auto">{right}</div>
        </aside>
      </div>
    </div>
  );
}

export function Logo({ size = 28 }: { size?: number }) {
  return <Image src="/logo.png" alt="Templata" width={size} height={Math.round(size * 1.18)} />;
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

export function PlaybookAvatar({ title, size = 40 }: { title: string; size?: number }) {
  const hue = (title.split('').reduce((a, c) => a + c.charCodeAt(0), 0) * 13) % 360;
  return (
    <div
      className="rounded-full shrink-0 flex items-center justify-center text-white font-bold"
      style={{ width: size, height: size, fontSize: size * 0.42, background: `oklch(0.55 0.13 ${hue})` }}
    >
      {title[0]?.toUpperCase() ?? '?'}
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

export function FeedRow({ playbook }: { playbook: FeedPlaybook }) {
  const router = useRouter();
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
          <p className="text-sm text-muted-foreground leading-relaxed mt-0.5 line-clamp-3">{playbook.description}</p>
        )}
        <div className="flex items-center gap-7 mt-2.5 text-muted-foreground">
          <span className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"><MessageSquare className="w-4 h-4" />{playbook.comments_count || ''}</span>
          <span className="flex items-center gap-1.5 text-xs hover:text-rose-400 transition-colors"><Heart className="w-4 h-4" />{playbook.likes_count || ''}</span>
          <span className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"><GitFork className="w-4 h-4" />{playbook.is_forked ? 'forked' : 'fork'}</span>
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

export function TrendingBox({ playbooks }: { playbooks: FeedPlaybook[] }) {
  const router = useRouter();
  const top = [...playbooks].sort((a, b) => b.likes_count - a.likes_count).slice(0, 5);
  if (top.length === 0) return null;
  return (
    <div className="rounded-2xl border border-border bg-popover/60 p-4">
      <p className="flex items-center gap-2 text-sm font-bold mb-3"><TrendingUp className="w-4 h-4" />Trending playbooks</p>
      <div className="space-y-1">
        {top.map((p, i) => (
          <button
            key={p.id}
            onClick={() => router.push(`/community/${p.id}`)}
            className="flex items-baseline gap-2.5 w-full text-left px-2 py-1.5 -mx-2 rounded-lg hover:bg-accent transition-colors"
          >
            <span className="text-xs text-muted-foreground tabular-nums">{i + 1}.</span>
            <span className="text-sm truncate flex-1">{p.title}</span>
            <span className="text-xs text-muted-foreground shrink-0">♥ {p.likes_count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function RailFooter() {
  return (
    <p className="text-xs text-muted-foreground px-1">© {new Date().getFullYear()} Templata</p>
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
        <span className="text-xl font-bold tracking-tight">Templata</span>
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
