"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar22 = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Guides", href: "#guides" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  return (
    <section className="bg-background text-foreground fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full py-4">
      <div className="container">
        <nav className="border-border w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2 md:hidden">
                <img
                  src="/favicon.svg"
                  className="h-8 w-8 dark:invert-0 invert"
                  alt="Templata"
                />
                <span className="text-lg font-semibold tracking-tighter">
                  Templata
                </span>
              </div>

              <div className="absolute left-1/2 hidden -translate-x-1/2 transform md:block">
                <a href="/" className="flex items-center gap-2">
                  <img
                    src="/favicon.svg"
                    className="h-8 w-8 dark:invert-0 invert"
                    alt="Templata"
                  />
                  <span className="text-lg font-semibold tracking-tighter">
                    Templata
                  </span>
                </a>
              </div>
              <div className="text-muted-foreground hidden items-center space-x-2 text-sm md:flex">
                <span className="font-medium">Beta</span>
              </div>

              <div className="hidden items-center space-x-8 md:flex">
                {navLinks.map((link) => (
                  <a
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
                  </a>
                ))}
              </div>

              <div className="md:hidden">
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
                        <a
                          href="/"
                          className="text-foreground flex items-center justify-start gap-2 text-2xl font-bold tracking-tighter"
                          onClick={() => setIsOpen(false)}
                        >
                          <img
                            src="/favicon.svg"
                            className="h-8 w-8 dark:invert-0 invert"
                            alt="Templata"
                          />
                        </a>
                      </div>
                      <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg px-4 py-2 text-lg font-medium transition-colors"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                      <div className="border-border border-t pt-6">
                        <div className="text-muted-foreground text-center text-sm">
                          <div className="font-medium">Beta</div>
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
    </section>
  );
};

export { Navbar22 };
