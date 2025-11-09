"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

      {/* Comparison Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Separator className="mb-16" />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-medium text-foreground">Templata vs Asana for Life Planning</h2>
            <p>
              Asana is an excellent project management tool built for teams to coordinate work tasks. Templata is a life planning platform built specifically for major personal life decisions and transitions. While both help you organize, they serve fundamentally different purposes.
            </p>
          </div>

          <Separator className="my-16" />

          <div className="mb-12">
            <h3 className="text-2xl font-medium text-foreground mb-6">Key Differences</h3>
          </div>

          <div className="grid gap-6 mb-12">
            <div className="border rounded-lg p-6">
              <h4 className="font-medium text-lg mb-3 flex items-center gap-2 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Templata: Life Planning Platform
              </h4>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Expert frameworks for life events (weddings, careers, home buying)</li>
                <li>• AI-refined questions with 90%+ coverage guarantee</li>
                <li>• Curated expert readings for each life decision</li>
                <li>• Free forever - no cost for individuals</li>
                <li>• Personal planning focus</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h4 className="font-medium text-lg mb-3 flex items-center gap-2 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                Asana: Project Management Tool
              </h4>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Task tracking and team collaboration</li>
                <li>• Project timelines and workflows</li>
                <li>• Team coordination features</li>
                <li>• Paid plans for meaningful features</li>
                <li>• Work/business focus</li>
              </ul>
            </div>
          </div>

          <Separator className="my-16" />

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h3 className="text-2xl font-medium text-foreground">When to Use Templata vs Asana</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-medium text-foreground">Use Templata for:</p>
                <p className="text-muted-foreground">Wedding planning, career transitions, home buying, business launches, financial planning, and other major personal life decisions requiring expert guidance and comprehensive frameworks.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-medium text-foreground">Use Asana for:</p>
                <p className="text-muted-foreground">Work project management, team task coordination, business workflow tracking, and collaborative team projects requiring timeline management and task assignment.</p>
              </div>
            </div>
          </div>

          <Separator className="my-16" />

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h3 className="text-2xl font-medium text-foreground">Pricing Comparison</h3>
            <p>
              <strong>Templata:</strong> Free forever. All planning guides, AI-refined questions, and expert readings at no cost.
            </p>
            <p>
              <strong>Asana:</strong> Free tier limited. Paid plans required for timeline views, advanced features, and meaningful collaboration.
            </p>
          </div>

          <Separator className="my-16" />

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h3 className="text-2xl font-medium text-foreground">The Bottom Line</h3>
            <p>
              Asana excels at managing work projects and coordinating teams. Templata excels at helping you navigate major personal life decisions with expert frameworks and comprehensive guidance. They serve different needs - Asana for professional project management, Templata for personal life planning.
            </p>
            <p>
              For life planning (weddings, careers, homes, business launches), Templata provides structured frameworks, expert content, and AI-refined questions that Asana's task management approach doesn't offer. For work projects and team coordination, Asana's collaboration features are purpose-built.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
