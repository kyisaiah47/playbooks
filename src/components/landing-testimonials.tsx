import { BadgeCheck } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { CardStack } from "@/components/aceternity/card-stack";

const LandingTestimonials = () => {
  const features = [
    "90%+ Coverage",
    "AI-Refined Questions",
    "Expert Readings",
    "Per-Guide Planning",
    "Calendar Integration",
    "Task Management",
    "Progress Tracking",
    "Split-Screen View",
  ];

  return (
    <section className="h-full w-screen overflow-hidden py-32">
      <div className="container flex w-full max-w-6xl flex-col items-center justify-between lg:flex-row">
        <div className="gap-15 relative flex h-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h1 className="w-full max-w-md text-5xl font-medium font-semibold tracking-tighter lg:text-6xl">
            Questions. Answers. One View.
          </h1>

          <div className="flex w-full max-w-lg items-center gap-4 px-5">
            <span className="bg-muted-foreground/20 h-px w-full" />
            <p className="text-muted-foreground/50 text-sm">FEATURES</p>
            <span className="bg-muted-foreground/20 h-px w-full" />
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {features.map((feature) => (
              <li key={feature} className="flex gap-2 lg:items-center">
                <BadgeCheck className="text-muted-foreground/80 size-4" />
                <p className="text-muted-foreground/80 tracking-tight">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-24 flex items-center justify-center lg:mt-0">
          <CardStack items={CARDS} />
        </div>
      </div>
    </section>
  );
};

export { LandingTestimonials };

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500",
        className,
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Budget Planning",
    designation: "What's your total budget range?",
    content: (
      <p>
        We're comfortable spending <Highlight>$40,000-$50,000 total</Highlight>.
        Parents contributing $15k, we have $30k saved, and keeping $5k buffer.
        Priority order: venue/catering (50%), photography (15%), everything else flexible.
      </p>
    ),
  },
  {
    id: 1,
    name: "Guest List",
    designation: "Who are your must-invite guests?",
    content: (
      <p>
        <Highlight>Core list is 80 people</Highlight>—immediate family (24),
        wedding party + spouses (16), close friend groups (40).
        Second tier adds 50 more (extended family, work friends).
        Max capacity 150, ideal is 120-130.
      </p>
    ),
  },
  {
    id: 2,
    name: "Venue Requirements",
    designation: "What are your venue non-negotiables?",
    content: (
      <p>
        Must have: <Highlight>indoor + outdoor options</Highlight>, seats 150,
        within 30min of downtown, available Sep-Oct 2026.
        Nice-to-have: in-house catering, getting ready rooms, backup rain plan.
        Deal-breakers: no AC, cash-bar only, difficult parking.
      </p>
    ),
  },
];
