"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CircleMinus, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles, ArrowRight } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const AlternativesContent: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Complete Comparison
          </Badge>

          <h1 className="relative z-15 max-w-4xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Best Life Planning Apps".split(" ").map((word, i) => (
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
            Compare Templata, Notion, Google Docs, Trello, Asana, Monday.com and find the best tool for planning life's biggest moments
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
              icons={[Activity, Brain, Pill, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[DollarSign, PiggyBank, Wallet, CheckCircle2]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Heart, Home, Users, Baby]}
              dimmed
            />
          </motion.div>
        </div>
      </section>

      {/* Comparison Body */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Comparing Templata to popular alternatives: Notion, Google Docs, Trello, Asana, and Monday.com. While these tools serve various purposes, Templata is purpose-built for life planning with expert frameworks, AI-refined questions, and 90%+ validated coverage.
            </p>
          </div>

          <div className="space-y-12">
            {/* Templata */}
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-4">Templata - Best for Life Planning</h3>
              <div className="bg-background rounded-xl border p-6 shadow border-green-500">
                <div className="flex items-center justify-center gap-2 font-medium mb-6">
                  <Image
                    src="/favicon.svg"
                    alt="Templata"
                    width={28}
                    height={28}
                    className="h-7 w-7 dark:invert-0 invert"
                  />
                  Templata
                  <Badge className="bg-green-500 ml-2">Recommended</Badge>
                </div>
                <Separator className="mb-6" />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Expert planning frameworks for life events
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    90%+ validated coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    200-500+ AI-refined questions per guide
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Curated expert readings integrated
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Per-guide organization (calendars, tasks)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Free forever (beta)
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/guides">
                    <Button className="w-full">
                      Get Started with Templata <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Notion */}
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-4">Notion</h3>
              <div className="bg-border/40 rounded-xl p-6">
                <div className="flex items-center justify-center gap-2 font-medium mb-6">
                  <svg className="h-7" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"/>
                  </svg>
                  Notion
                </div>
                <Separator className="mb-6" />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Blank pages, DIY structure
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    No planning frameworks
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    Create your own questions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    General note-taking and databases
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    $10/month for meaningful features
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">Best for: General organization and knowledge management</p>
              </div>
            </div>

            {/* Google Docs */}
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-4">Google Docs</h3>
              <div className="bg-border/40 rounded-xl p-6">
                <div className="flex items-center justify-center gap-2 font-medium mb-6">
                  <svg className="h-7" viewBox="0 0 87.3 78" fill="currentColor">
                    <path fill="#4285f4" d="M48.4,36.2L65.1,0L3.4,0L19.4,36.2z"/>
                    <path fill="#ea4335" d="M48.4,36.2l16.7,0v41.8H31.3v-3.5L3.4,78V0z"/>
                    <path fill="#34a853" d="M31.3,74.5v3.5h33.8L83.9,39L65.1,0z"/>
                    <path fill="#fbbc04" d="M48.4,36.2H19.4l-16,41.8h27.9z"/>
                  </svg>
                  Google Docs
                </div>
                <Separator className="mb-6" />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Free and simple
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    No planning frameworks
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    Blank page, no guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Basic document collaboration
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">Best for: Simple document writing and sharing</p>
              </div>
            </div>

            {/* Trello */}
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-4">Trello</h3>
              <div className="bg-border/40 rounded-xl p-6">
                <div className="flex items-center justify-center gap-2 font-medium mb-6">
                  <svg className="h-7" viewBox="0 0 200 200" fill="none">
                    <rect x="10" y="10" width="180" height="180" rx="20" fill="#0079BF"/>
                    <rect x="25" y="25" width="70" height="50" rx="5" fill="white"/>
                    <rect x="25" y="85" width="70" height="30" rx="5" fill="white"/>
                    <rect x="105" y="25" width="70" height="70" rx="5" fill="white"/>
                  </svg>
                  Trello
                </div>
                <Separator className="mb-6" />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Kanban task boards
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    No planning guidance
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    You determine tasks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Simple visual boards
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    $5-10+/month for power-ups
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">Best for: Simple task management and checklists</p>
              </div>
            </div>

            {/* Asana */}
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-4">Asana</h3>
              <div className="bg-border/40 rounded-xl p-6">
                <div className="flex items-center justify-center gap-2 font-medium mb-6">
                  <svg className="h-7" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="90" fill="#f06a6a"/>
                    <circle cx="100" cy="60" r="15" fill="white"/>
                    <circle cx="100" cy="100" r="15" fill="white"/>
                    <circle cx="100" cy="140" r="15" fill="white"/>
                  </svg>
                  Asana
                </div>
                <Separator className="mb-6" />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Work project management
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    No life planning frameworks
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    Built for work, not life
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Team collaboration features
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    Paid plans for features
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">Best for: Work project management and team coordination</p>
              </div>
            </div>

            {/* Monday.com */}
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-4">Monday.com</h3>
              <div className="bg-border/40 rounded-xl p-6">
                <div className="flex items-center justify-center gap-2 font-medium mb-6">
                  <svg className="h-7" viewBox="0 0 200 200" fill="none">
                    <rect x="20" y="20" width="160" height="160" rx="20" fill="#ff3d57"/>
                    <rect x="40" y="60" width="50" height="8" rx="4" fill="white"/>
                    <rect x="40" y="80" width="35" height="8" rx="4" fill="white"/>
                    <rect x="110" y="60" width="50" height="8" rx="4" fill="white"/>
                    <rect x="110" y="80" width="35" height="8" rx="4" fill="white"/>
                    <rect x="40" y="110" width="50" height="8" rx="4" fill="white"/>
                    <rect x="110" y="110" width="50" height="8" rx="4" fill="white"/>
                  </svg>
                  Monday.com
                </div>
                <Separator className="mb-6" />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Work operating system
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    No life planning frameworks
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    Built for work teams
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Workflow automation
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    Paid subscription required
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">Best for: Business workflows and team projects</p>
              </div>
            </div>
          </div>

          <Separator className="my-16" />

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-medium text-foreground">
              Why Choose Templata for Life Planning?
            </h2>
            <p>
              When planning life's biggest moments—weddings, career changes, home buying, financial planning—you don't want blank pages or work tools. You need expert guidance. Templata provides comprehensive frameworks developed by experts, validated through our Axiom Engine to ensure 90%+ coverage of what actually matters.
            </p>
            <p>
              Each guide includes 200-500+ AI-refined questions that help you think through every angle, plus curated expert readings so you're learning from the best sources—not Googling randomly. Everything is integrated: questions, readings, calendars, tasks, and notes all work together in per-guide workspaces.
            </p>
            <p>
              While other tools are designed for general note-taking (Notion, Google Docs), simple task tracking (Trello), or work project management (Asana, Monday.com), Templata is purpose-built for life planning. And it's free forever (currently in beta). For life's biggest moments, choose expert frameworks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
