"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, Briefcase, Activity, DollarSign, Home, Users, Rocket, Brain, TrendingUp, Wallet, Baby, Target, Pill, PiggyBank, Sparkles } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { SkiperUiMarquee } from "@/components/category-hero";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const VsMondayContent: React.FC = () => {
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
              {"Templata vs Monday.com".split(" ").map((word, i) => (
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
            Expert life planning frameworks vs work operating system
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
            <h2 className="text-2xl font-medium text-foreground">Templata vs Monday.com for Life Planning</h2>
            <p>
              Monday.com is a powerful work operating system designed for teams to manage projects, workflows, and business processes. Templata is a life planning platform specifically built for navigating major personal life decisions. Both help with organization, but they target completely different use cases.
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
                Templata: Personal Life Planning
              </h4>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Expert-crafted guides for weddings, careers, home buying & more</li>
                <li>• AI-refined planning questions with 90%+ coverage</li>
                <li>• Curated expert readings for informed decision-making</li>
                <li>• Completely free for individuals</li>
                <li>• Personal planning and life transitions</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h4 className="font-medium text-lg mb-3 flex items-center gap-2 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                Monday.com: Work Operating System
              </h4>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Team collaboration and workflow automation</li>
                <li>• Customizable boards and project tracking</li>
                <li>• Business process management</li>
                <li>• Paid subscription required</li>
                <li>• Work and business focus</li>
              </ul>
            </div>
          </div>

          <Separator className="my-16" />

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h3 className="text-2xl font-medium text-foreground">When to Use Templata vs Monday.com</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-medium text-foreground">Use Templata for:</p>
                <p className="text-muted-foreground">Planning weddings, career changes, home purchases, business launches, financial decisions, and other major life transitions requiring comprehensive frameworks and expert guidance.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-medium text-foreground">Use Monday.com for:</p>
                <p className="text-muted-foreground">Managing work projects, coordinating teams, automating business workflows, tracking sales pipelines, and organizing company processes requiring team collaboration.</p>
              </div>
            </div>
          </div>

          <Separator className="my-16" />

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h3 className="text-2xl font-medium text-foreground">Pricing Comparison</h3>
            <p>
              <strong>Templata:</strong> Free forever. Access all planning guides, AI questions, and expert content at no cost.
            </p>
            <p>
              <strong>Monday.com:</strong> Paid subscription required. Plans start at per-user pricing for teams.
            </p>
          </div>

          <Separator className="my-16" />

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h3 className="text-2xl font-medium text-foreground">The Bottom Line</h3>
            <p>
              Monday.com is built for business teams managing work projects and workflows. Templata is built for individuals navigating major life decisions with expert frameworks. They're designed for entirely different purposes - Monday.com for work collaboration, Templata for personal life planning.
            </p>
            <p>
              For life planning (weddings, careers, homes, personal finance), Templata offers expert-crafted frameworks, comprehensive question sets, and curated guidance that Monday.com's workflow boards don't provide. For business project management and team coordination, Monday.com's collaboration tools are purpose-built for that context.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
