"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CalendarDays,
  Clock,
  CheckCircle2,
  Bell,
  Heart,
  Briefcase,
  Home,
  Target,
  Sparkles,
  Users,
  Baby,
  TrendingUp,
  Rocket
} from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CalendarFeatureContent: React.FC = () => {
  const features = [
    {
      icon: CalendarDays,
      title: "Per-Guide Organization",
      description: "Each life event gets its own dedicated calendar. Wedding planning, career transitions, and home buying stay separate—no overwhelming mix of everything at once."
    },
    {
      icon: Clock,
      title: "Flexible Event Types",
      description: "Create all-day events for deadlines and milestones, or timed events for specific appointments. Add detailed descriptions for important context."
    },
    {
      icon: CheckCircle2,
      title: "Milestone Tracking",
      description: "Mark important milestones throughout your journey. Track venue bookings, interview dates, inspection appointments, and launch deadlines."
    },
    {
      icon: Bell,
      title: "Focus on What Matters",
      description: "See only the timeline relevant to your current planning focus. Switch between guides to view different life event calendars as needed."
    }
  ];

  const useCases = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Track vendor deadlines, dress fittings, rehearsal dinners, and the big day—all in your dedicated wedding calendar.",
      examples: ["Venue booking deadline", "Final guest count due", "Dress fitting appointment", "Rehearsal dinner", "Wedding day"]
    },
    {
      icon: Briefcase,
      title: "Career Transitions",
      description: "Organize networking events, interview schedules, application deadlines, and start dates.",
      examples: ["Application deadline", "Phone screen", "Final interview", "Offer decision date", "Start date"]
    },
    {
      icon: Home,
      title: "Home Buying",
      description: "Keep track of open houses, inspections, financing deadlines, and closing day.",
      examples: ["Open house visits", "Offer deadline", "Home inspection", "Financing approval", "Closing day"]
    },
    {
      icon: Rocket,
      title: "Business Launch",
      description: "Manage product launches, marketing campaigns, and business milestones.",
      examples: ["Product development milestone", "Beta launch", "Marketing campaign start", "Official launch", "First revenue target"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Calendar className="w-3 h-3" />
            Planning Calendar
          </Badge>

          <h1 className="relative z-15 max-w-4xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Organize Milestones Per Life Event".split(" ").map((word, i) => (
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

          <p className="text-muted-foreground max-w-2xl text-center text-lg mt-4">
            Dedicated calendars for each planning guide. Track wedding timelines, career deadlines, and home buying dates separately—no overwhelming mix.
          </p>

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
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Briefcase, Rocket, Target, TrendingUp]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[CalendarDays, Clock, CheckCircle2, Bell]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Calendar, Calendar, Calendar, Calendar]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Heart, Home, Briefcase, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Rocket, Target, TrendingUp, Users]}
              dimmed
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[Baby, Bell, CheckCircle2, CalendarDays]}
              dimmed
            />
          </motion.div>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Intro Blurb */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-medium text-foreground">Why Per-Guide Calendars?</h2>
            <p>
              Traditional calendars mix everything together—work meetings, personal appointments, and major life planning all in one overwhelming view. Templata's per-guide calendar system gives each life event its own dedicated timeline.
            </p>
            <p>
              Planning a wedding while transitioning careers? Your wedding calendar shows only wedding-related milestones and deadlines. Your career calendar focuses only on interview dates and networking events. This intentional separation keeps you focused on the right timeline at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Calendar Features</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to track milestones and deadlines
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Use Cases */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Calendar Use Cases</h2>
            <p className="text-muted-foreground text-lg">
              How different life events use dedicated calendars
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <useCase.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Example Events:</p>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, exIdx) => (
                      <li key={exIdx} className="text-sm flex items-start gap-2">
                        <CalendarDays className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* CTA Section */}
      <section className="py-16">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Start Tracking Your Milestones
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Choose a planning guide and start organizing your timeline. All features are free during beta.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/guides">Browse Planning Guides</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/features">View All Features</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
