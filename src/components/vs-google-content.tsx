"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CircleMinus, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const VsGoogleContent: React.FC = () => {
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
              {"Templata vs Google Search".split(" ").map((word, i) => (
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
            Organized expert frameworks vs scattered search results
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
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed">
              We&apos;ve all been there: planning a major life event means opening 50 browser tabs, reading scattered blog posts with conflicting advice, trying to piece everything together yourself. Google is where everyone starts—but it&apos;s not where organized planning happens. Templata replaces scattered search results with one comprehensive, expert-validated framework.
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
                    One comprehensive framework
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    90%+ validated coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    200-500+ organized questions per guide
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Expert readings curated & integrated
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Built-in tasks, calendars, tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Everything organized in one place
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Free forever (beta)
                  </li>
                </ul>
              </div>
              <div className="bg-border/40 rounded-xl p-6">
                <span className="flex items-center justify-center gap-2 font-medium">
                  Google Search
                </span>
                <Separator className="my-6" />
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    Scattered search results
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    50+ tabs to manage
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    Conflicting advice from random blogs
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    You synthesize everything yourself
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    No organization or tracking
                  </li>
                  <li className="text-muted-foreground flex items-center gap-2 line-through">
                    <CircleMinus className="h-5 w-5 shrink-0 opacity-50" />
                    Overwhelm from information overload
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                    Free to search
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator className="my-16" />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-medium text-foreground">
              When is Google Search enough?
            </h2>
            <p>
              Google is perfect for quick lookups, finding specific information, or researching niche topics. If you just need to know "what flowers are in season in June" or "average wedding photography costs," Google gets you there fast. For simple questions with straightforward answers, search is unbeatable.
            </p>
          </div>
          <Separator className="my-16" />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-medium text-foreground">
              Why Choose Templata for Life Planning?
            </h2>
            <p>
              When you&apos;re planning a wedding, changing careers, buying a home, or starting a business, scattered Google searches leave you overwhelmed and uncertain. "Did I think of everything?" "Which advice should I actually follow?" "How do I organize all this?"
            </p>
            <p>
              Templata replaces 50 tabs with one comprehensive framework. Our expert-validated guides ensure 90%+ coverage of what matters—no more wondering what you missed. Instead of piecing together conflicting blog posts, you get 200-500+ AI-refined questions that guide you through every angle, plus curated expert readings from trusted sources.
            </p>
            <p>
              Everything is integrated: questions, readings, tasks, calendars, and progress tracking all work together. While Google leaves you to organize scattered information in your head (or across multiple docs and spreadsheets), Templata keeps everything structured in per-guide workspaces. And unlike paid search ads pushing products, Templata is free forever (currently in beta). For life&apos;s biggest moments, choose organized frameworks over scattered tabs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
