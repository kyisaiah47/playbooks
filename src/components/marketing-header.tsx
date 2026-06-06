'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoWithName } from '@/components/logo-with-name';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { LoginDialog } from '@/components/login-dialog';
import { useAuth } from '@/contexts/auth-context';

const links = [
  { name: 'Explore', href: '/explore' },
  { name: 'Pricing', href: '/pricing' },
];

const MarketingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  function handleCTA() {
    if (isLoggedIn) {
      router.push('/app');
    } else {
      setLoginDialogOpen(true);
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <LogoWithName href="/" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button onClick={handleCTA} disabled={loading}>
            {isLoggedIn ? 'Go to App' : 'Get Started'}
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <Button size="sm" onClick={handleCTA} disabled={loading}>
            {isLoggedIn ? 'App' : 'Get Started'}
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-auto">
              <SheetTitle />
              <div className="flex flex-col gap-4 p-4 pt-8">
                {links.map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground text-lg font-medium transition-colors">
                    {l.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <LoginDialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen} />
    </header>
  );
};

export { MarketingHeader };
