'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';

interface AppNavProps {
  showCommunity?: boolean;
  showMyPlaybooks?: boolean;
  showUserMenu?: boolean;
  rightContent?: React.ReactNode;
}

export function AppNav({ showCommunity, showMyPlaybooks, showUserMenu, rightContent }: AppNavProps) {
  const router = useRouter();

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 h-14 border-b border-border bg-background/80 backdrop-blur-sm shrink-0">
      <button onClick={() => router.push('/')}>
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
                I
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="text-destructive focus:text-destructive cursor-pointer"
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
