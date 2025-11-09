"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LoginDialog } from "@/components/login-dialog";
import { useAuth } from "@/contexts/auth-context";

const MarketingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  const navLinks = [
    { name: "Library", href: "/library" },
    { name: "Guides", href: "/guides" },
    { name: "About", href: "/about" },
  ];

  return (
    <section className="bg-background text-foreground fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full py-4">
      <div className="container">
        <nav className="border-border w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2 md:hidden">
                <Image
                  src="/favicon.svg"
                  width={32}
                  height={32}
                  className="h-8 w-8 dark:invert-0 invert"
                  alt="Templata"
                />
                <span className="text-lg font-semibold tracking-tighter">
                  Templata
                </span>
              </div>

              <div className="absolute left-1/2 hidden -translate-x-1/2 transform md:block">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/favicon.svg"
                    width={32}
                    height={32}
                    className="h-8 w-8 dark:invert-0 invert"
                    alt="Templata"
                  />
                  <span className="text-lg font-semibold tracking-tighter">
                    Templata
                  </span>
                </Link>
              </div>
              <div className="text-muted-foreground hidden items-center space-x-2 text-sm md:flex">
                <span className="font-medium">Beta</span>
              </div>

              <div className="hidden items-center space-x-8 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground group relative inline-block h-6 overflow-hidden text-sm font-medium"
                  >
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      {link.name}
                    </span>
                    <span className="text-muted-foreground border-border absolute left-0 top-full block w-full transition-transform duration-300 group-hover:translate-y-[-100%] group-hover:border-b">
                      {link.name}
                    </span>
                  </Link>
                ))}
                <ModeToggle />
                <Button
                  onClick={() => {
                    if (isLoggedIn) {
                      router.push('/app');
                    } else {
                      setLoginDialogOpen(true);
                    }
                  }}
                  disabled={loading}
                >
                  {loading ? "Login" : (isLoggedIn ? "Go to App" : "Login")}
                </Button>
              </div>

              <div className="flex items-center gap-2 md:hidden">
                <Button
                  onClick={() => {
                    if (isLoggedIn) {
                      router.push('/app');
                    } else {
                      setLoginDialogOpen(true);
                    }
                  }}
                  size="sm"
                  disabled={loading}
                >
                  {loading ? "Login" : (isLoggedIn ? "Go to App" : "Login")}
                </Button>
                <ModeToggle />
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="top" className="h-screen">
                    <SheetTitle></SheetTitle>

                    <div className="m-4 flex flex-col space-y-6">
                      <div className="ml-3">
                        <Link
                          href="/"
                          className="text-foreground flex items-center justify-start gap-2 text-2xl font-bold tracking-tighter"
                          onClick={() => setIsOpen(false)}
                        >
                          <Image
                            src="/favicon.svg"
                            width={32}
                            height={32}
                            className="h-8 w-8 dark:invert-0 invert"
                            alt="Templata"
                          />
                        </Link>
                      </div>
                      <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg px-4 py-2 text-lg font-medium transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                      <div className="border-border border-t pt-6">
                        <div className="text-muted-foreground flex items-center justify-between px-4 text-sm">
                          <div className="font-medium">Beta</div>
                          <ModeToggle />
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <LoginDialog
        open={loginDialogOpen}
        onOpenChange={setLoginDialogOpen}
      />
    </section>
  );
};

export { MarketingHeader };
