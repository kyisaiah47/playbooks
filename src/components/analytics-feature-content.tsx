"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Target,
  Heart,
  Briefcase,
  Home,
  Sparkles,
  Users,
  Baby,
  Rocket,
  LineChart,
  Radar,
  Calendar
} from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const AnalyticsFeatureContent: React.FC = () => {
  const features = [
    {
      icon: PieChart,
      title: "Radial Progress Charts",
      description: "Premium circular charts show completion percentages at a glance. Elegant, easy-to-read visualizations make tracking progress delightful."
    },
    {
      icon: LineChart,
      title: "Timeline Visualizations",
      description: "View your planning journey over time with timeline graphs. See when you reached milestones and track momentum."
    },
    {
      icon: Radar,
      title: "Category-Based Insights",
      description: "Break down progress by category to identify strengths and gaps. Focus your efforts where they matter most."
    },
    {
      icon: Activity,
      title: "Per-Guide Analytics",
      description: "Each planning guide has its own dashboard. Track wedding planning separately from career transitions and home buying."
    }
  ];

  const visualizations = [
    {
      icon: PieChart,
      title: "Completion Percentage",
      description: "See at a glance how much of your planning is complete",
      metric: "75% Complete"
    },
    {
      icon: BarChart3,
      title: "Questions Answered",
      description: "Track how many planning questions you've worked through",
      metric: "180 / 240 Questions"
    },
    {
      icon: Target,
      title: "Tasks Completed",
      description: "Monitor action items finished vs. remaining",
      metric: "23 / 45 Tasks"
    },
    {
      icon: Calendar,
      title: "Time to Deadline",
      description: "See how much time until your target milestone",
      metric: "90 Days Remaining"
    },
    {
      icon: TrendingUp,
      title: "Progress Velocity",
      description: "Track your planning momentum over time",
      metric: "+12% This Week"
    },
    {
      icon: Radar,
      title: "Category Breakdown",
      description: "See completion across different planning areas",
      metric: "5 / 8 Categories"
    }
  ];

  const useCases = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Track overall wedding planning progress and see completion by category.",
      insights: [
        "Overall progress: 68% complete",
        "Venue & Catering: 100% complete ✓",
        "Attire & Beauty: 80% complete",
        "Invitations: 45% complete",
        "Music & Entertainment: 20% complete",
        "Timeline: 4 months until wedding"
      ]
    },
    {
      icon: Briefcase,
      title: "Career Transitions",
      description: "Monitor job search progress and application tracking.",
      insights: [
        "Overall progress: 55% complete",
        "Resume & Portfolio: 100% complete ✓",
        "Company Research: 70% complete",
        "Applications Submitted: 12 companies",
        "Interviews Completed: 5 rounds",
        "Networking Events: 8 attended"
      ]
    },
    {
      icon: Home,
      title: "Home Buying",
      description: "Visualize your home search from research to closing.",
      insights: [
        "Overall progress: 40% complete",
        "Financing: 85% complete",
        "Property Research: 60% complete",
        "Home Tours: 15 properties viewed",
        "Inspections: 2 completed",
        "Timeline: 6 weeks to target close"
      ]
    },
    {
      icon: Rocket,
      title: "Business Launch",
      description: "Track startup milestones from planning to launch.",
      insights: [
        "Overall progress: 72% complete",
        "Business Plan: 100% complete ✓",
        "Product Development: 85% complete",
        "Marketing Prep: 60% complete",
        "Legal Setup: 90% complete",
        "Timeline: 3 weeks until launch"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <BarChart3 className="w-3 h-3" />
            Progress Analytics
          </Badge>

          <h1 className="relative z-15 max-w-4xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Visualize Your Planning Journey".split(" ").map((word, i) => (
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
            Premium analytics and visualizations transform overwhelming planning into delightful, trackable progress. Radial charts, timelines, and insights included free.
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
              icons={[PieChart, LineChart, Radar, Activity]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[BarChart3, BarChart3, BarChart3, BarChart3]}
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
              icons={[Baby, Activity, Radar, LineChart]}
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
            <h2 className="text-2xl font-medium text-foreground">Why Premium Analytics?</h2>
            <p>
              Planning major life events can feel overwhelming. "Am I making progress?" "What should I focus on next?" "How much is left to do?" Premium analytics answer these questions at a glance.
            </p>
            <p>
              Instead of wondering about your progress, you see it beautifully visualized. Radial charts show completion percentages, timeline graphs reveal momentum, and category breakdowns identify gaps. This clarity reduces anxiety and builds confidence as you move toward your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Analytics Features</h2>
            <p className="text-muted-foreground text-lg">
              Sophisticated visualizations included free
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

      {/* Visualizations Grid */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Available Metrics</h2>
            <p className="text-muted-foreground text-lg">
              Track these insights across all your planning guides
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visualizations.map((viz, idx) => (
              <div key={idx} className="border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <viz.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{viz.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs mb-3">
                  {viz.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {viz.metric}
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
            <h2 className="text-3xl font-semibold mb-4">Analytics Examples</h2>
            <p className="text-muted-foreground text-lg">
              How different life events use progress tracking
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
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Sample Insights:</p>
                  <ul className="space-y-1.5">
                    {useCase.insights.map((insight, insightIdx) => (
                      <li key={insightIdx} className="text-sm flex items-start gap-2">
                        <Activity className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span>{insight}</span>
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
            Start Tracking Your Progress
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Choose a planning guide and see your progress beautifully visualized. All analytics features are free during beta.
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
