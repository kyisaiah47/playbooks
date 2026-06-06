'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';

interface AppNavProps {
  showCommunity?: boolean;
  showMyPlaybooks?: boolean;
  showUserMenu?: boolean;
  rightContent?: React.ReactNode;
}

export function AppNav({ showCommunity, showMyPlaybooks, showUserMenu, rightContent }: AppNavProps) {
  const router = useRouter();
  const { user } = useAuth();
  const initial = user?.name?.[0]?.toUpperCase() ?? user?.email?.[0]?.toUpperCase() ?? '?';

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 h-14 border-b border-border bg-background/80 backdrop-blur-sm shrink-0">
      <button onClick={() => router.push('/app')}>
        <Image src="/logo.png" alt="Templata" width={22} height={26} className="invert" />
      </button>

      <div className="flex items-center gap-3">
        {showCommunity && (
          <Button variant="outline" size="sm" onClick={() => router.push('/community')}>Community</Button>
        )}
        {showMyPlaybooks && (
          <Button variant="outline" size="sm" onClick={() => router.push('/app')}>My Playbooks</Button>
        )}
        {rightContent}
        {showUserMenu && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-7 h-7 rounded-full bg-stone-200 text-stone-600 text-xs font-medium flex items-center justify-center hover:bg-stone-300 transition-colors">
                {initial}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
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
                  Manage Subscription
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={async () => {
                  await fetch('/api/auth/logout', { method: 'POST' });
                  router.push('/');
                }}
              >
                <LogOut className="w-3.5 h-3.5 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
}
