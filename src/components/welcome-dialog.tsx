'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { PlaybookIcon } from '@/components/ui/playbook-icon';
import { PencilLine, Sparkles, GitFork } from 'lucide-react';

const SEEN_KEY = 'playbooks_welcome_seen';

const POINTS = [
  {
    icon: <PencilLine className="w-5 h-5" />,
    title: 'Say what you\'re planning',
    body: 'One sentence. Claude builds your step-by-step playbook in ~20 seconds.',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Work through it with AI',
    body: 'Check off tasks, get guidance on every answer, replan when life changes.',
  },
  {
    icon: <GitFork className="w-5 h-5" />,
    title: 'Or fork a real plan',
    body: 'This feed is real plans from real people. Fork one and Claude makes it yours.',
  },
];

export function WelcomeDialog({ onGetStarted }: { onGetStarted: () => void }) {
  const [open, setOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(SEEN_KEY)) {
      const id = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(id);
    }
  }, []);

  function dismiss(remember = false) {
    if (remember || dontShowAgain) localStorage.setItem(SEEN_KEY, '1');
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) dismiss(); }}>
      <DialogContent className="sm:max-w-[min(1100px,94vw)] p-0 overflow-hidden gap-0 max-h-[92vh] overflow-y-auto">
        <DialogTitle className="sr-only">Welcome to Playbooks</DialogTitle>
        <div className="relative">
          <img
            src="/welcome.jpg"
            alt=""
            className="w-full h-72 sm:h-80 object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1118] via-[#0c1118]/30 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 px-8 sm:px-12 pb-7 flex items-center gap-6">
            <PlaybookIcon size={96} className="text-primary shrink-0" />
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter leading-[1.05] max-w-3xl">Big moments don&apos;t come with a manual</h2>
          </div>
        </div>

        <div className="px-8 sm:px-12 pt-6 pb-10">
          <p className="text-base sm:text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Playbooks turns whatever you&apos;re planning into a step-by-step plan — with AI guidance the whole way through.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {POINTS.map((p, i) => (
              <div key={i} className="rounded-2xl border border-border bg-secondary/40 p-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">{p.icon}</span>
                  <span className="text-4xl font-bold text-border">{i + 1}</span>
                </div>
                <p className="text-lg font-bold mb-2">{p.title}</p>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="px-8 w-full sm:w-auto" onClick={() => { dismiss(true); onGetStarted(); }}>
              Build my first playbook
            </Button>
            <Button size="lg" variant="secondary" className="px-8 w-full sm:w-auto" onClick={() => dismiss()}>
              Just browse the feed
            </Button>
          </div>
          <label className="flex items-center justify-center gap-2 mt-5 text-xs text-muted-foreground cursor-pointer select-none">
            <Checkbox checked={dontShowAgain} onCheckedChange={(v) => setDontShowAgain(v === true)} className="size-3.5" />
            Don&apos;t show this again
          </label>
        </div>
      </DialogContent>
    </Dialog>
  );
}
