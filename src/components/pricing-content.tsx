"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Shield, Infinity, Heart, DollarSign, Target, TrendingUp } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const PricingContent: React.FC = () => {
  const features = [
    "Unlimited planning guides", "AI-refined questions (90%+ coverage)", "Expert curated readings",
    "Per-guide calendars & tasks", "Progress tracking & analytics", "Notes & documentation",
    "Powerful search", "Auto-save & cloud sync", "Secure data storage", "Export functionality",
    "Mobile responsive", "Dark mode", "No ads", "No data selling", "Priority feature requests"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 pt-56">
        <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Free in Beta
          </Badge>

          <h1 className="relative z-15 max-w-4xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
            <span
              className="overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: "600px",
              }}
            >
              {"Comprehensive Planning Free in Beta".split(" ").map((word, i) => (
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
            All features free during beta. No credit card required. No paywalls.
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
              icons={[Infinity, Shield, Zap, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Heart, DollarSign, Target, TrendingUp]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[Check, Infinity, Shield, Sparkles]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Zap, Heart, Target, Check]}
              highlighted
            />
            <SkiperUiMarquee
              showCard={3}
              reverse={true}
              className=""
              icons={[DollarSign, Shield, TrendingUp, Infinity]}
              dimmed
            />
            <SkiperUiMarquee
              showCard={2}
              className=""
              icons={[Sparkles, Check, Zap, Heart]}
              dimmed
            />
            <SkiperUiMarquee
              reverse={true}
              showCard={1}
              className=""
              icons={[Target, Infinity, Shield, DollarSign]}
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
            <h2 className="text-2xl font-medium text-foreground">Beta Access - Everything Free</h2>
            <p>
              We're currently in beta, focused on building the best comprehensive planning experience possible. During beta, all features are completely free with no restrictions, no credit card required, and no hidden catches.
            </p>
            <p>
              Get expert frameworks with 90%+ validated coverage, 200-500+ AI-refined questions per guide, curated expert readings, integrated calendars and tasks, progress tracking, and more—all at no cost while we perfect the platform.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="mx-auto flex w-full flex-col rounded-lg border p-6 sm:w-fit sm:min-w-80">
            <div className="flex justify-center">
              <span className="text-lg font-semibold">$</span>
              <span className="text-6xl font-semibold">0</span>
              <span className="text-muted-foreground self-end">/mo</span>
            </div>
            <div className="my-6">
              <ul className="flex flex-col gap-3">
                <li className="flex items-center justify-between gap-2 text-sm font-medium">
                  Unlimited planning guides <Check className="inline size-4 shrink-0" />
                </li>
                <li className="flex items-center justify-between gap-2 text-sm font-medium">
                  AI-refined questions (90%+ coverage) <Check className="inline size-4 shrink-0" />
                </li>
                <li className="flex items-center justify-between gap-2 text-sm font-medium">
                  Expert curated readings <Check className="inline size-4 shrink-0" />
                </li>
              </ul>
              <Separator className="my-6" />
              <ul className="flex flex-col gap-3">
                <li className="flex items-center justify-between gap-2 text-sm font-medium">
                  Per-guide calendars & tasks <Check className="inline size-4 shrink-0" />
                </li>
                <li className="flex items-center justify-between gap-2 text-sm font-medium">
                  Progress tracking & analytics <Check className="inline size-4 shrink-0" />
                </li>
                <li className="flex items-center justify-between gap-2 text-sm font-medium">
                  Notes & documentation <Check className="inline size-4 shrink-0" />
                </li>
              </ul>
              <Separator className="my-6" />
              <ul className="flex flex-col gap-3">
                <li className="flex items-center justify-between gap-2 text-sm font-medium">
                  Auto-save & cloud sync <Check className="inline size-4 shrink-0" />
                </li>
                <li className="flex items-center justify-between gap-2 text-sm font-medium">
                  Secure data storage <Check className="inline size-4 shrink-0" />
                </li>
                <li className="flex items-center justify-between gap-2 text-sm font-medium">
                  No ads, no data selling <Check className="inline size-4 shrink-0" />
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground text-lg mb-2">No Limits</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlimited guides, questions, readings, notes, tasks. No artificial restrictions during beta.
              </p>
            </div>

            <div>
              <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground text-lg mb-2">No Catch</h3>
              <p className="text-muted-foreground leading-relaxed">
                No trial period, no credit card, no forced upgrades. Beta means free access to everything.
              </p>
            </div>

            <div>
              <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                <Infinity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground text-lg mb-2">Core Always Free</h3>
              <p className="text-muted-foreground leading-relaxed">
                Core planning features will remain free. Premium features coming later for advanced users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Premium */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-medium text-foreground">Future Premium Features</h2>
            <p>
              We're building optional premium features for power users who want even more. Core planning will always remain free, but premium features may include advanced analytics, custom frameworks, team collaboration, priority support, and more sophisticated visualizations.
            </p>
            <p>
              Right now in beta, everything is free. When premium features launch, you'll still have full access to comprehensive planning at no cost—premium will be entirely optional for those who want extra capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Why Free in Beta */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-medium text-foreground">Why Everything Is Free in Beta</h2>
            <p>
              We're focused on building the best comprehensive planning platform. Your feedback during beta helps us perfect the experience. In exchange, you get full access to expert frameworks, AI-refined questions, curated readings, and all features—completely free.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-muted-foreground">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">90%+</h3>
              <p className="leading-relaxed">Validated coverage</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">200-500+</h3>
              <p className="leading-relaxed">Questions per guide</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">$0</h3>
              <p className="leading-relaxed">During beta</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
