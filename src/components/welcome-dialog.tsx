'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PlaybookIcon } from '@/components/ui/playbook-icon';
import { PencilLine, Sparkles, GitFork } from 'lucide-react';

const SEEN_KEY = 'playbooks_welcome_seen';

const POINTS = [
  {
    icon: <PencilLine className="w-4 h-4" />,
    title: 'Describe what you\'re planning',
    body: 'A wedding, a career change, a first home — one sentence is enough. Claude builds a step-by-step playbook around your situation.',
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: 'Work through it with AI',
    body: 'Check off tasks, answer questions, and get AI guidance specific to you. If life changes, replan without losing your progress.',
  },
  {
    icon: <GitFork className="w-4 h-4" />,
    title: 'Or start from someone else\'s',
    body: 'This feed is real plans from real people. Fork any playbook and Claude re-tailors it to your situation.',
  },
];

export function WelcomeDialog({ onGetStarted }: { onGetStarted: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(SEEN_KEY)) {
      const id = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(id);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(SEEN_KEY, '1');
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) dismiss(); }}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden gap-0">
        <DialogTitle className="sr-only">Welcome to Playbooks</DialogTitle>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/welcome.jpg"
          alt=""
          className="w-full h-44 object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <PlaybookIcon size={40} className="text-primary mb-4" />
          <h2 className="text-2xl font-bold tracking-tight">Big moments don&apos;t come with a manual</h2>
          <p className="text-sm text-muted-foreground mt-2">Playbooks turns whatever you&apos;re planning into a step-by-step plan — with AI guidance the whole way through.</p>
        </div>

        <div className="space-y-4 mb-8">
          {POINTS.map((p, i) => (
            <div key={i} className="flex items-start gap-3.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0">{p.icon}</span>
              <div>
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Button className="w-full" onClick={() => { dismiss(); onGetStarted(); }}>
            Build my first playbook
          </Button>
          <Button variant="ghost" className="w-full text-muted-foreground" onClick={dismiss}>
            Just browse the feed
          </Button>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
