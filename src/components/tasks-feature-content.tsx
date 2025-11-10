"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ListTodo,
  ListChecks,
  AlertCircle,
  CheckCircle2,
  Clock,
  Heart,
  Briefcase,
  Home,
  Target,
  Sparkles,
  Users,
  Baby,
  TrendingUp,
  Rocket,
  Circle,
  CircleDashed,
  CheckCircle
} from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const TasksFeatureContent: React.FC = () => {
  const features = [
    {
      icon: ListChecks,
      title: "Per-Guide Organization",
      description: "Each life event gets its own task list. Wedding planning tasks, career action items, and home buying to-dos stay separate—no overwhelming mix."
    },
    {
      icon: AlertCircle,
      title: "Priority Management",
      description: "Set priority levels (low, medium, high) to focus on what matters most. Tackle high-priority items first, then handle nice-to-haves."
    },
    {
      icon: CheckCircle2,
      title: "Status Tracking",
      description: "Track tasks through To Do, In Progress, and Done statuses. See at a glance what needs attention and what's been accomplished."
    },
    {
      icon: Clock,
      title: "Due Date Management",
      description: "Add optional due dates to track deadlines. See upcoming tasks across all guides or focus on a specific life event."
    }
  ];

  const useCases = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Track all wedding-related action items from vendor bookings to final details.",
      tasks: [
        { title: "Book venue", priority: "high", status: "done" },
        { title: "Send invitations", priority: "high", status: "in_progress" },
        { title: "Finalize menu", priority: "medium", status: "todo" },
        { title: "Order cake", priority: "medium", status: "todo" },
        { title: "Create seating chart", priority: "low", status: "todo" }
      ]
    },
    {
      icon: Briefcase,
      title: "Career Transitions",
      description: "Manage all action items for your career change or job search.",
      tasks: [
        { title: "Update resume", priority: "high", status: "done" },
        { title: "Research target companies", priority: "high", status: "in_progress" },
        { title: "Practice interview questions", priority: "medium", status: "todo" },
        { title: "Reach out to contacts", priority: "medium", status: "todo" },
        { title: "Update LinkedIn profile", priority: "low", status: "done" }
      ]
    },
    {
      icon: Home,
      title: "Home Buying",
      description: "Organize all to-dos for finding and purchasing your home.",
      tasks: [
        { title: "Get pre-approved for mortgage", priority: "high", status: "done" },
        { title: "Schedule home inspections", priority: "high", status: "in_progress" },
        { title: "Review purchase contract", priority: "high", status: "todo" },
        { title: "Arrange movers", priority: "medium", status: "todo" },
        { title: "Set up utilities", priority: "low", status: "todo" }
      ]
    },
    {
      icon: Rocket,
      title: "Business Launch",
      description: "Keep track of everything needed to launch your business.",
      tasks: [
        { title: "Finalize business plan", priority: "high", status: "done" },
        { title: "Register LLC", priority: "high", status: "done" },
        { title: "Build website", priority: "high", status: "in_progress" },
        { title: "Launch marketing campaign", priority: "medium", status: "todo" },
        { title: "Set up social media", priority: "low", status: "todo" }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in_progress':
        return <CircleDashed className="h-4 w-4 text-blue-500" />;
      default:
        return <Circle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <ListTodo className="w-3 h-3" />
            Task Management
          </Badge>

          <h1 className="relative z-15 max-w-4xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Track Action Items Per Life Event".split(" ").map((word, i) => (
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
            Dedicated task lists for each planning guide. Organize wedding to-dos, career action items, and home buying tasks separately with priorities and due dates.
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
              icons={[ListChecks, AlertCircle, CheckCircle2, Clock]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[ListTodo, ListTodo, ListTodo, ListTodo]}
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
              icons={[Baby, Clock, CheckCircle2, AlertCircle]}
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
            <h2 className="text-2xl font-medium text-foreground">Why Per-Guide Task Lists?</h2>
            <p>
              Traditional to-do apps mix everything together—work tasks, personal errands, and major life planning all in one overwhelming list. Templata's per-guide task system gives each life event its own dedicated action items.
            </p>
            <p>
              Planning a wedding while buying a home? Your wedding task list shows only wedding-related to-dos like booking vendors and sending invitations. Your home buying task list focuses only on financing and inspections. This intentional separation helps you focus on the right actions for each life event.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Task Features</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to track action items and to-dos
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
            <h2 className="text-3xl font-semibold mb-4">Task List Examples</h2>
            <p className="text-muted-foreground text-lg">
              How different life events organize action items
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
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Example Tasks:</p>
                  <ul className="space-y-2">
                    {useCase.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} className="flex items-center gap-3 text-sm py-1">
                        {getStatusIcon(task.status)}
                        <span className="flex-1">{task.title}</span>
                        <Badge variant="outline" className={`text-xs ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </Badge>
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
            Start Organizing Your Action Items
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Choose a planning guide and start tracking your tasks. All features are free during beta.
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
