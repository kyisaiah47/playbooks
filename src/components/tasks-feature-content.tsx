"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ListTodo,
  ListChecks,
  Heart,
  Briefcase,
  Home,
  Rocket,
  Users,
  Baby,
  Target,
  TrendingUp,
  Circle,
  CircleDashed,
  CheckCircle2
} from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export const TasksFeatureContent: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-32">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <p className="text-muted-foreground">
            Per-Guide Action Item Organization
          </p>
          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Manage Tasks Per Life Event".split(" ").map((word, i) => (
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
              icons={[ListTodo, ListChecks, CheckCircle2, ListTodo]}
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Heart, Briefcase, Home, Rocket]}
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              icons={[ListTodo, ListChecks, CheckCircle2, ListTodo]}
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
              icons={[ListTodo, ListChecks, CheckCircle2, ListTodo]}
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
              Each planning guide gets its own task list. Wedding to-dos stay separate from career action items and home buying tasks—preventing the confusion of mixing everything together.
            </p>
            <p>
              Set priorities, track status from To Do → In Progress → Done, add due dates, and focus on the right tasks for each life event. Switch between guides to see tasks organized by what you're currently planning.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Example - Wedding Tasks */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-3">Wedding Planning Tasks</h2>
            <p className="text-muted-foreground text-lg">
              Track vendor bookings, planning milestones, and wedding day preparation
            </p>
          </div>

          {/* Tasks Visual Mockup */}
          <div className="rounded-lg border border-border bg-muted/20 p-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Wedding Tasks</h3>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span>12 of 18 completed</span>
                </div>
              </div>

              {/* Tasks List */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-md bg-background border border-border">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium text-muted-foreground line-through">Book venue</h4>
                  </div>
                  <Badge variant="outline" className="text-red-500 border-red-500/50">High</Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-background border border-border">
                  <CircleDashed className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Send invitations</h4>
                    <p className="text-sm text-muted-foreground">Due in 3 days</p>
                  </div>
                  <Badge variant="outline" className="text-red-500 border-red-500/50">High</Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-background border border-border">
                  <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Finalize menu with caterer</h4>
                    <p className="text-sm text-muted-foreground">Due June 1</p>
                  </div>
                  <Badge variant="outline" className="text-yellow-500 border-yellow-500/50">Medium</Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-background border border-border">
                  <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Order wedding cake</h4>
                  </div>
                  <Badge variant="outline" className="text-yellow-500 border-yellow-500/50">Medium</Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-background border border-border">
                  <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Create seating chart</h4>
                  </div>
                  <Badge variant="outline" className="text-muted-foreground border-muted">Low</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Example - Career Tasks */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-3">Career Transition Tasks</h2>
            <p className="text-muted-foreground text-lg">
              Manage job applications, interview prep, and networking action items
            </p>
          </div>

          {/* Tasks Visual Mockup */}
          <div className="rounded-lg border border-border bg-muted/20 p-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Career Tasks</h3>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span>5 of 10 completed</span>
                </div>
              </div>

              {/* Tasks List */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-md bg-background border border-border">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium text-muted-foreground line-through">Update resume with recent projects</h4>
                  </div>
                  <Badge variant="outline" className="text-red-500 border-red-500/50">High</Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-background border border-border">
                  <CircleDashed className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Research target companies</h4>
                    <p className="text-sm text-muted-foreground">Make list of 20 companies</p>
                  </div>
                  <Badge variant="outline" className="text-red-500 border-red-500/50">High</Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-background border border-border">
                  <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Practice behavioral interview questions</h4>
                  </div>
                  <Badge variant="outline" className="text-yellow-500 border-yellow-500/50">Medium</Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-background border border-border">
                  <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Reach out to 5 contacts for coffee chats</h4>
                    <p className="text-sm text-muted-foreground">Informational interviews</p>
                  </div>
                  <Badge variant="outline" className="text-yellow-500 border-yellow-500/50">Medium</Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-background border border-border">
                  <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Update LinkedIn profile and headline</h4>
                  </div>
                  <Badge variant="outline" className="text-muted-foreground border-muted">Low</Badge>
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
            <h2 className="text-2xl font-medium text-foreground mb-3">How Task Organization Works</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <ListChecks className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">One List Per Guide</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each life event guide has its own task list. Wedding tasks stay in the wedding list, career tasks in the career list—complete separation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Priority Levels</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Set tasks as High, Medium, or Low priority. Focus on high-priority vendor bookings first, then move to medium-priority planning details.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <CircleDashed className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Status Tracking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track tasks through To Do (not started), In Progress (working on it), and Done (completed). See what needs attention at a glance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Stay Organized</h3>
                <p className="text-muted-foreground leading-relaxed">
                  See only wedding tasks when planning your wedding, only job search tasks when changing careers. Focused task lists reduce overwhelm.
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
