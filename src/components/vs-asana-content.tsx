"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CircleMinus, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const VsAsanaContent: React.FC = () => {
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
              {"Templata vs Asana".split(" ").map((word, i) => (
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
            Life planning frameworks with 90%+ coverage vs project task management
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
              Asana is an excellent project management tool built for teams to coordinate work tasks. Templata is a life planning platform built specifically for major personal life decisions and transitions. While both help you organize, they serve fundamentally different purposes.
            </p>
          </div>
          <div className="mt-12">
            <div className="mx-auto grid gap-6 md:grid-cols-2">
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
                    Expert planning frameworks
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
                    Start planning in minutes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Free forever (beta)
                  </li>
                </ul>
              </div>
              <div className="bg-border/40 rounded-xl p-6">
                <span className="flex items-center justify-center gap-2 font-medium">
                  <svg className="h-7" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="90" fill="#f06a6a"/>
                    <circle cx="100" cy="60" r="15" fill="white"/>
                    <circle cx="100" cy="100" r="15" fill="white"/>
                    <circle cx="100" cy="140" r="15" fill="white"/>
                  </svg>
                  Asana
                </span>
                <Separator className="my-6" />
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
                    No AI-refined questions
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    No expert content
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Team collaboration features
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    Built for work, not life planning
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    Paid plans for meaningful features
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator className="my-16" />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-medium text-foreground">
              Who is Asana suitable for?
            </h2>
            <p>
              Asana is excellent for managing work projects and coordinating teams. If you're tracking software development sprints, managing marketing campaigns, or organizing business workflows where everyone knows their responsibilities, Asana's project management features provide clear visibility and task assignment. It works best for professional team collaboration.
            </p>
          </div>
          <Separator className="my-16" />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-medium text-foreground">
              Why Choose Templata for Life Planning?
            </h2>
            <p>
              When planning life's biggest moments—weddings, career changes, home buying, financial planning—you don't want work project management tools. You need expert guidance. Templata provides comprehensive frameworks developed by experts, validated through our Axiom Engine to ensure 90%+ coverage of what actually matters.
            </p>
            <p>
              Each guide includes 200-500+ AI-refined questions that help you think through every angle, plus curated expert readings so you're learning from the best sources—not Googling randomly. Everything is integrated: questions, readings, calendars, tasks, and notes all work together in per-guide workspaces.
            </p>
            <p>
              While Asana requires paid plans for meaningful features and is built for work teams, Templata is free forever (currently in beta) and built specifically for personal life planning. For life planning, choose expert frameworks over work project management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
