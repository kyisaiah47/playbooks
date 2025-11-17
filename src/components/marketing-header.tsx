"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { LogoWithName } from "@/components/logo-with-name";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LoginDialog } from "@/components/login-dialog";
import { useAuth } from "@/contexts/auth-context";

const MarketingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  const allMobileLinks = [
    { name: "Features", href: "/features" },
    { name: "Calendar", href: "/features/calendar" },
    { name: "Tasks", href: "/features/tasks" },
    { name: "Analytics", href: "/features/analytics" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "vs Google", href: "/vs/google" },
    { name: "vs Wikipedia", href: "/vs/wikipedia" },
    { name: "vs Notion", href: "/vs/notion" },
    { name: "vs Google Docs", href: "/vs/google-docs" },
    { name: "FAQ", href: "/faq" },
    { name: "How to Use", href: "/how-to-use" },
    { name: "Pricing", href: "/pricing" },
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
              <div className="md:hidden">
                <LogoWithName href="/" />
              </div>

              {/* Centered logo */}
              <div className="absolute left-1/2 hidden -translate-x-1/2 transform md:block">
                <LogoWithName href="/" />
              </div>

              {/* Left side */}
              <div className="hidden items-center space-x-4 md:flex">
                <div className="bg-muted text-muted-foreground flex items-center rounded-full px-3 py-1 text-xs font-medium">
                  Beta
                </div>
                <NavigationMenu viewport={false}>
                  <NavigationMenuList className="gap-4">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground text-sm font-medium">
                        Features
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-2 p-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/features">
                                <div className="text-sm font-medium leading-none">Overview</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/features/calendar">
                                <div className="text-sm font-medium leading-none">Calendar</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/features/tasks">
                                <div className="text-sm font-medium leading-none">Tasks</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/features/analytics">
                                <div className="text-sm font-medium leading-none">Analytics</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + " text-muted-foreground hover:text-foreground text-sm font-medium"}>
                        <Link href="/use-cases">Use Cases</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground text-sm font-medium">
                        Compare
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-2 p-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/vs/google">
                                <div className="text-sm font-medium leading-none">vs Google</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/vs/wikipedia">
                                <div className="text-sm font-medium leading-none">vs Wikipedia</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/vs/notion">
                                <div className="text-sm font-medium leading-none">vs Notion</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/vs/google-docs">
                                <div className="text-sm font-medium leading-none">vs Google Docs</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Right side */}
              <div className="hidden items-center space-x-4 md:flex">
                <NavigationMenu viewport={false}>
                  <NavigationMenuList className="gap-4">
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + " text-muted-foreground hover:text-foreground text-sm font-medium"}>
                        <Link href="/library">Library</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + " text-muted-foreground hover:text-foreground text-sm font-medium"}>
                        <Link href="/guides">Guides</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + " text-muted-foreground hover:text-foreground text-sm font-medium"}>
                        <Link href="/about">About</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
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
                        <div onClick={() => setIsOpen(false)}>
                          <LogoWithName href="/" showName={false} />
                        </div>
                      </div>
                      <div className="flex flex-col space-y-4">
                        {allMobileLinks.map((link) => (
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
