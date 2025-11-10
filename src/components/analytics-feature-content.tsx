"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Heart,
  Briefcase,
  Home,
  Rocket,
  Users,
  Baby,
  Target,
  Calendar,
} from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export const AnalyticsFeatureContent: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <p className="text-muted-foreground">
            Visualize Your Planning Progress
          </p>
          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Track Progress Per Life Event".split(" ").map((word, i) => (
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
              icons={[BarChart3, PieChart, TrendingUp, BarChart3]}
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Heart, Briefcase, Home, Rocket]}
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              icons={[BarChart3, PieChart, TrendingUp, BarChart3]}
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
              icons={[BarChart3, PieChart, TrendingUp, BarChart3]}
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
              Each planning guide shows its own progress analytics. See wedding planning completion separate from career transition progress and home buying milestones—no confusing mix of everything.
            </p>
            <p>
              Track question completion, task progress, and overall milestones with visual charts. Answer "Am I making progress?" at a glance without wondering what's left to do.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Example - Wedding Progress */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-3">Wedding Planning Progress</h2>
            <p className="text-muted-foreground text-lg">
              See overall completion and breakdown by planning category
            </p>
          </div>

          {/* Analytics Visual Mockup */}
          <div className="rounded-lg border border-border bg-muted/20 p-6">
            <div className="space-y-8">
              {/* Overall Progress Circle */}
              <div className="flex flex-col items-center justify-center gap-4 py-8">
                <div className="relative w-48 h-48">
                  {/* Progress circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 88}`}
                      strokeDashoffset={`${2 * Math.PI * 88 * (1 - 0.68)}`}
                      className="text-primary"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">68%</span>
                    <span className="text-sm text-muted-foreground">Complete</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground">Wedding Planning Progress</p>
                  <p className="text-sm text-muted-foreground">180 of 265 questions answered</p>
                </div>
              </div>

              <Separator />

              {/* Category Breakdown */}
              <div>
                <h4 className="font-medium text-foreground mb-4">Progress by Category</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Venue & Catering</span>
                      <span className="text-sm font-medium">100%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-full rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Attire & Beauty</span>
                      <span className="text-sm font-medium">80%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[80%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Invitations & Guests</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 w-[45%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Music & Entertainment</span>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-[20%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Example - Career Progress */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-3">Career Transition Progress</h2>
            <p className="text-muted-foreground text-lg">
              Monitor job search progress and application tracking
            </p>
          </div>

          {/* Analytics Visual Mockup */}
          <div className="rounded-lg border border-border bg-muted/20 p-6">
            <div className="space-y-8">
              {/* Overall Progress Circle */}
              <div className="flex flex-col items-center justify-center gap-4 py-8">
                <div className="relative w-48 h-48">
                  {/* Progress circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 88}`}
                      strokeDashoffset={`${2 * Math.PI * 88 * (1 - 0.55)}`}
                      className="text-primary"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">55%</span>
                    <span className="text-sm text-muted-foreground">Complete</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground">Career Planning Progress</p>
                  <p className="text-sm text-muted-foreground">110 of 200 questions answered</p>
                </div>
              </div>

              <Separator />

              {/* Stats Grid */}
              <div>
                <h4 className="font-medium text-foreground mb-4">Activity Overview</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">Applications Sent</div>
                  </div>

                  <div className="p-4 rounded-lg bg-background border border-border">
                    <div className="text-2xl font-bold text-primary">5</div>
                    <div className="text-sm text-muted-foreground">Interviews Completed</div>
                  </div>

                  <div className="p-4 rounded-lg bg-background border border-border">
                    <div className="text-2xl font-bold text-primary">8</div>
                    <div className="text-sm text-muted-foreground">Networking Events</div>
                  </div>

                  <div className="p-4 rounded-lg bg-background border border-border">
                    <div className="text-2xl font-bold text-primary">23</div>
                    <div className="text-sm text-muted-foreground">Tasks Completed</div>
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
            <h2 className="text-2xl font-medium text-foreground mb-3">How Progress Tracking Works</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <PieChart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Per-Guide Analytics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each life event guide has its own analytics dashboard. Track wedding progress separately from career progress and home buying milestones.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Category Breakdown</h3>
                <p className="text-muted-foreground leading-relaxed">
                  See completion percentages by category. Identify which aspects of your planning are complete and which need attention.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Visual Progress</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Radial progress charts and completion bars make tracking delightful. See your progress beautifully visualized instead of just percentages.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-3 w-fit flex-shrink-0">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg mb-2">Reduce Anxiety</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Answer "Am I making progress?" at a glance. Visual tracking transforms overwhelm into visible, trackable momentum toward your goals.
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
