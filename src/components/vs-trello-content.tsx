"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CircleMinus, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const VsTrelloContent: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Detailed Comparison
          </Badge>

          <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Templata vs Trello".split(" ").map((word, i) => (
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
            Comprehensive planning frameworks vs basic task management
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
              icons={[Heart, Home, Briefcase, Activity]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Rocket, Brain, DollarSign, Users]}
              dimmed
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[Target, Pill, PiggyBank, Baby]}
              dimmed
            />
          </motion.div>

          <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
        </div>
      </section>

      {/* Comparison Body */}
      <section className="bg-muted/50 py-32">
        <div className="container">
          <div className="text-center">
            <p className="text-muted-foreground mx-auto max-w-4xl md:text-xl">
              Trello helps you track tasks you&apos;ve already identified. Templata helps you figure out what tasks you need in the first place—with expert frameworks, 200-500+ AI-refined questions per guide, curated readings, and 90%+ validated coverage so nothing slips through the cracks.
            </p>
          </div>
          <div className="mt-28">
            <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
              <div className="bg-background rounded-xl border p-6 shadow">
                <span className="flex items-center justify-center gap-2 font-medium">
                  <Image
                    src="/favicon.svg"
                    alt="Templata"
                    width={28}
                    height={28}
                    className="h-7 w-7 dark:invert-0 invert"
                  />
                  Templata
                </span>
                <Separator className="my-6" />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Comprehensive planning frameworks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    200-500+ AI-refined questions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Curated expert readings integrated
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    90%+ validated coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Expert guidance ensures completeness
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Per-guide workspaces with tools
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Free forever
                  </li>
                </ul>
              </div>
              <div className="bg-border/40 rounded-xl p-6">
                <span className="flex items-center justify-center gap-2 font-medium">
                  <svg className="h-7" viewBox="0 0 200 200" fill="none">
                    <rect x="10" y="10" width="180" height="180" rx="20" fill="#0079BF"/>
                    <rect x="25" y="25" width="70" height="50" rx="5" fill="white"/>
                    <rect x="25" y="85" width="70" height="30" rx="5" fill="white"/>
                    <rect x="105" y="25" width="70" height="70" rx="5" fill="white"/>
                  </svg>
                  Trello
                </span>
                <Separator className="my-6" />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Kanban task boards
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    No content, just task management
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    No planning guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Track tasks you identified
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    You determine what's needed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Flexible boards and cards
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    $5-10+/month for power-ups
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold">
              Who is Trello suitable for?
            </h2>
            <p className="text-muted-foreground leading-6 md:text-lg">
              Trello is excellent for visualizing workflows you already understand. If you&apos;re managing a software development sprint where tasks are well-defined, tracking a content calendar where you know what needs publishing, or organizing a team project where everyone knows their responsibilities, Trello&apos;s kanban boards provide clear visual progress tracking. It works best when you already know what needs doing.
            </p>
            <h2 className="mb-4 mt-16 text-3xl font-semibold">
              Why Choose Templata for Life Planning?
            </h2>
            <p className="text-muted-foreground leading-6 md:text-lg mb-4">
              The problem with using Trello for life events like wedding planning, career changes, or home buying is that Trello assumes you already know all the tasks. But with life&apos;s biggest moments, the hard part is figuring out what you need to do in the first place. What vendor meetings should you schedule? What career transition steps are you missing? What home-buying considerations haven&apos;t you thought of?
            </p>
            <p className="text-muted-foreground leading-6 md:text-lg mb-4">
              Templata solves this with expert frameworks validated through our Axiom Engine to ensure 90%+ coverage. Each guide includes 200-500+ AI-refined questions that help you think through every angle, plus curated expert readings so you&apos;re learning from vetted sources. You&apos;re not just managing tasks—you&apos;re guided through comprehensive planning that ensures you consider everything important.
            </p>
            <p className="text-muted-foreground leading-6 md:text-lg">
              Everything is integrated: questions, readings, calendars, tasks, notes, and progress tracking all work together. While Trello leaves you responsible for determining completeness (and charges $5-10+/month for meaningful features), Templata provides expert guidance and is free forever (currently in beta). For life planning, choose comprehensive frameworks over blank task boards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
