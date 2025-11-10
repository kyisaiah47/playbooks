"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CalendarDays,
  Clock,
  Heart,
  Briefcase,
  Home,
  Rocket,
  Users,
  Baby,
  Target,
  TrendingUp,
} from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export const CalendarFeatureContent: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <p className="text-muted-foreground">
            Per-Guide Timeline Organization
          </p>
          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Track Milestones Per Life Event".split(" ").map((word, i) => (
                <motion.span
                  className="relative inline-block px-[6px] leading-[none]"
                  key={i}
                  initial={{
                    opacity: 0,
                    y: "70%",
                    rotateX: "-28deg",
                  }}
                  animate={{
                    opacity: 1,
                    y: "0%",
                    rotateX: "0deg",
                  }}
                  transition={{
                    delay: i * 0.08 + 0.1,
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>
          <Particles
            className="absolute inset-0 z-0"
            quantity={500}
            ease={80}
            refresh
          />

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-20 mt-10 flex items-center justify-center gap-4"
          >
            <SkiperUiMarquee
              showCard={1}
              className=""
              reverse={true}
              icons={[Heart, Home, Users, Baby]}
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Briefcase, Rocket, Target, TrendingUp]}
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              icons={[Calendar, CalendarDays, Clock, Calendar]}
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Heart, Briefcase, Home, Rocket]}
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              icons={[Calendar, CalendarDays, Clock, Calendar]}
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Target, TrendingUp, Users, Baby]}
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[Calendar, CalendarDays, Clock, Calendar]}
            />
          </motion.div>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Each planning guide gets its own dedicated calendar. Wedding timelines stay separate from career deadlines and home buying dates—preventing the overwhelm of seeing everything at once.
            </p>
            <p>
              Track milestones, set important dates, and visualize your planning timeline without mixing different life events together. Switch between guides to see the calendar for each life event when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Example - Wedding Calendar */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-3">Wedding Planning Calendar</h2>
            <p className="text-muted-foreground text-lg">
              Track vendor bookings, fittings, deadlines, and the big day—all in one timeline
            </p>
          </div>

          {/* Calendar Visual Mockup */}
          <div className="rounded-lg border border-border bg-muted/20 p-6">
            <div className="space-y-4">
              {/* Month Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">June 2025</h3>
                <div className="flex gap-2">
                  <div className="px-3 py-1 rounded-md border border-border text-sm">Today</div>
                </div>
              </div>

              {/* Events List */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-md bg-background border border-border">
                  <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <div className="text-xs font-medium">JUN</div>
                    <div className="text-lg font-bold">15</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Final Dress Fitting</h4>
                    <p className="text-sm text-muted-foreground">2:00 PM - Bridal Boutique</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-background border border-border">
                  <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <div className="text-xs font-medium">JUN</div>
                    <div className="text-lg font-bold">20</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Final Guest Count Deadline</h4>
                    <p className="text-sm text-muted-foreground">All day - Venue requires final numbers</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-background border border-border">
                  <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <div className="text-xs font-medium">JUN</div>
                    <div className="text-lg font-bold">27</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Rehearsal Dinner</h4>
                    <p className="text-sm text-muted-foreground">6:00 PM - Restaurant Name</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-primary/20 border border-primary">
                  <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground flex-shrink-0">
                    <div className="text-xs font-medium">JUN</div>
                    <div className="text-lg font-bold">28</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Wedding Day!</h4>
                    <p className="text-sm text-muted-foreground">4:00 PM - Venue Name</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Example - Career Calendar */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-3">Career Transition Calendar</h2>
            <p className="text-muted-foreground text-lg">
              Organize interviews, networking events, and application deadlines
            </p>
          </div>

          {/* Calendar Visual Mockup */}
          <div className="rounded-lg border border-border bg-muted/20 p-6">
            <div className="space-y-4">
              {/* Month Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">March 2025</h3>
                <div className="flex gap-2">
                  <div className="px-3 py-1 rounded-md border border-border text-sm">Today</div>
                </div>
              </div>

              {/* Events List */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-md bg-background border border-border">
                  <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <div className="text-xs font-medium">MAR</div>
                    <div className="text-lg font-bold">05</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Networking Event - Tech Meetup</h4>
                    <p className="text-sm text-muted-foreground">6:30 PM - Downtown Conference Center</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-background border border-border">
                  <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <div className="text-xs font-medium">MAR</div>
                    <div className="text-lg font-bold">12</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Phone Screen - Company A</h4>
                    <p className="text-sm text-muted-foreground">10:00 AM - 30 min call with recruiter</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-background border border-border">
                  <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <div className="text-xs font-medium">MAR</div>
                    <div className="text-lg font-bold">18</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Technical Interview - Company B</h4>
                    <p className="text-sm text-muted-foreground">2:00 PM - Virtual interview (90 min)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-background border border-border">
                  <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <div className="text-xs font-medium">MAR</div>
                    <div className="text-lg font-bold">25</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Final Round - Company A</h4>
                    <p className="text-sm text-muted-foreground">All day - On-site interviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-3">How Calendar Organization Works</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <CalendarDays className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">One Calendar Per Guide</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each life event guide has its own calendar. Wedding planning events stay in the wedding calendar, career events in the career calendar—complete separation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">All-Day or Timed Events</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create all-day events for deadlines and milestones, or timed events for specific appointments like fittings or interviews.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Switch Between Views</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Navigate between different guide calendars to see only the timeline relevant to your current planning focus. No overwhelming mix of all events.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Stay Focused</h3>
                <p className="text-muted-foreground leading-relaxed">
                  See only wedding deadlines when planning your wedding, only career events when job searching. This focused approach reduces anxiety and keeps you organized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function Marquee({
  className,
  reverse,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: any) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around ![animation-duration:12s] [animation-play-state:running] [gap:var(--gap)] group-hover:[animation-play-state:paused]",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "[animation-direction:reverse]": reverse,
              },
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

interface SkiperUiMarqueeProps {
  showCard: number;
  reverse?: boolean;
  className?: string;
  icons: React.ComponentType<{ className?: string }>[];
}

function SkiperUiMarquee({
  showCard,
  reverse = false,
  className,
  icons,
}: SkiperUiMarqueeProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        height: showCard * 113,
      }}
    >
      <Marquee reverse={reverse} vertical={true}>
        {icons.map((Icon, idx) => (
          <Card key={idx} Icon={Icon} />
        ))}
      </Marquee>
      <div className="from-background absolute top-0 z-10 h-8 w-full bg-gradient-to-b to-transparent" />
      <div className="from-background absolute bottom-0 z-10 h-8 w-full bg-gradient-to-t to-transparent" />
    </div>
  );
}

function Card({ Icon }: { Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div
      className={cn(
        "border-muted relative flex size-24 items-center justify-center overflow-hidden rounded-3xl border p-4",
        "from-muted/50 to-background bg-gradient-to-b",
        "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <Icon className="size-8" />
    </div>
  );
}
